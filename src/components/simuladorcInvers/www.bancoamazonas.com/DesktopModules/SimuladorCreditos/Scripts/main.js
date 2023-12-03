$(document).ready(function () {
    //$(".decimal").numeric();
    //$(".integer").numericInteger();
    //$("#hlRequest").hide();
    //$("#errorMessage").hide();
    //$("#ddProducto").change(function () {
    //    //clearCalculatorProduct();
    //    var index = this.selectedIndex;
    //    $('#txtEntradaForm').parents().eq(2).hide();
    //    if (index > 0) {
    //        var tasaInteres = Number(productsTasasInteres[index - 1]);
    //        $("#txtTasa").val(setPunctuation(tasaInteres));

    //        var tasaDes = Number(productsTasasDesgravamen[index - 1]);
    //        $("#txtTasaDesgravamen").val(setPunctuationNoLimit(tasaDes));

    //        var impuestoSolca = Number(productsImpuestoSolca[index - 1]);
    //        $("#txtImpuestoSolca").val(setPunctuation(impuestoSolca));

    //        var entrada = Number(productsEntradas[index - 1]);
    //        $("#txtEntrada").val(setPunctuation(entrada));
    //    }
    //    else {
    //        $("#txtTasa").val('');
    //        $("#txtTasaDesgravamen").val('');
    //        $("#txtImpuestoSolca").val('');
    //        $("#txtEntrada").val('');
    //    }
       
    //});

    //$("#txtMontoSolicitado").change(function () {
    //    if ( $("#ddProducto").val() == "Autoplan" ||  $("#ddProducto").val() == "Vivienda") {
    //        var entradaForm = Number(removePunctuation($("#txtEntrada").val())) / 100;
    //        var montoForm = Number(removePunctuation($("#txtMontoSolicitado").val()));
    //        if (entradaForm > 0 && entradaForm < 1) {
    //            var entradaAux = entradaForm * montoForm;
    //            $('#txtEntradaForm').val(setPunctuation(entradaAux));
    //        }
    //        $('#txtEntradaForm').parents().eq(2).show();
    //    } else {
    //        $('#txtEntradaForm').parents().eq(2).hide();
    //    }
    //});
});

/************/
/*Calculator*/
/************/

function numbersonly2(myfield, e) {
    var dec = myfield.value;

    if (dec == '0') {
        dec = false;
    }

    if (dec == '1') {
        dec = true;
    }

    var key;
    var keychar;

    if (window.event)
        key = window.event.keyCode;
    else if (e)
        key = e.which;
    else
        return true;
    keychar = String.fromCharCode(key);

    // control keys
    if ((key == null) || (key == 0) || (key == 8) ||
    (key == 9) || (key == 13) || (key == 27))
        return true;

        // numbers
    else if ((("0123456789").indexOf(keychar) > -1)) {
        return true;
    }

        ////validacion de monto 
        //function validarnumeros(campo) 
        //{
        //    if (campo.value != ".")
        // {
        //     if (isNaN(campo.value)) 
        //     {
        //         campo.value = "";
        //     }
        //     if (campo.length == 3)
        //     {
        //         campo.value = campo.value + ",";
        //     }
        // }
        //}


        // decimal point jump
    else if (dec && (keychar == ".") && (myfield.value.indexOf(".", 0) == -1)) {
        //myfield.form.elements[dec].focus();
        return true;
    }
    else if (dec && (keychar == ",") && (myfield.value.indexOf(",", 0) == -1)) {
        //myfield.form.elements[dec].focus();
        return true;
    }
    else
        return false;
}
function calculate() {
    var fechaInicial = new Date();
    var tipoTabla = $("#ddTipoTabla option:selected").index();
    var entrada = Number(removePunctuation($("#txtEntrada").val())) / 100;
    var monto = Number(removePunctuation($("#txtMontoSolicitado").val()));
    var solca = Number(removePunctuation($("#txtImpuestoSolca").val()));
    if (entrada > 0 && entrada < 1)
    {
        var entradaResta = entrada * monto;
        monto = monto - entradaResta;
    }
       
    $("#saldoFinanciar").text(setPunctuation(monto));
    var contSolca = monto * (solca/100);
    $("#impuestoSolca").text(setPunctuation(contSolca));
    var meses = Number($("#txtMeses").val());
    var tasa = Number(removePunctuation($("#txtTasa").val()));
    $("#tasaINominal").text(setPunctuation(tasa));
    var tasaSegDes = Number(removePunctuation($('#txtTasaDesgravamen').val()));;
   
    var base = 365;

    if (monto > 0 && monto <= 1000000000000 && meses > 0 && meses <= 240 && tasa > 0 && tasa <= 50) {
        $("#errorMessage").hide();
        tasa = tasa / 100;
        tasaSegDes = tasaSegDes / 100;
        var datosFinal = new Array();

        if (tipoTabla == 0) {

            var segDes = new Array();

            var datos = calcularCuotaFijaFrancesa(meses, monto, 0, tasa, tasaSegDes, base, fechaInicial, segDes, true);
            var sum = datos[3];
            segDes = datos[4];

            var dividendoArr = new Array();
            var capitalArr = new Array();

            datosFinal = calcularCuotaFijaFrancesa(meses, monto, sum, tasa, tasaSegDes, base, fechaInicial, segDes, false);

        }
        else if(tipoTabla == 1)
        {
            datosFinal = calcularCuotaFijaAlemana(meses, monto, tasa, tasaSegDes, base, fechaInicial);
        }
        if (datosFinal.length > 0) {
            var cuota = datosFinal[0];
            var irrDividendo = IRR(datosFinal[1], 0);
            var irrCapital = IRR(datosFinal[2], 0);

            var tirAnual = (Math.pow(1 + irrDividendo, 12) - 1) * 100;
            var costoFinalAnual = (Math.pow(1 + irrCapital, 12) - 1) * 100;


            $("#montoCuota").text(setPunctuation(cuota));
            $("#tasaIEfectiva").text(setPunctuation(tirAnual));
            $("#tasaAnual").text(setPunctuation(costoFinalAnual));
            $(".total_box_disabled").attr("class", "total_box_enabled");
            $(".results_table").show();
            $("#hlRequest").show();
        } else
        {
            $("#errorMessage").show();
        }  
    }
    else {
        $("#errorMessage").show();
    }
    return false;
}

function calcularCuotaFijaFrancesa(meses, monto, suma, tasa, tasaSegDes, base, fechaInicial, segDes, calcSegDesAux)
{
    var cantDiasMes = 0;
    var lineaFecha = new Date();
    lineaFecha.setMonth(fechaInicial.getMonth() + 1);
    var diasMes = daysInMonth(lineaFecha.getMonth() + 1, lineaFecha.getFullYear());
    var periodoInteres = base / diasMes;
    var periodicidad = 12;
    var tasaMensual = tasa / periodicidad;
    var cuota = parseFloat((pmt(tasaMensual, meses, -(monto + suma), 0, 0)).toFixed(2));
    var lineaInteres = calcularInteres(monto, tasa, periodoInteres);
    var dividendoArrAux = new Array();
    dividendoArrAux[0] = -monto;
    var capitalArrAux = new Array();
    capitalArrAux[0] = -monto;
    var sumSegDes = 0.00;
    if (calcSegDesAux) {
        var lineaSegDes = calcularSegDes(monto, tasaSegDes);
        var cantDiasMes = cantDiasMes + daysInMonth(fechaInicial.getMonth() + 1, fechaInicial.getFullYear());
        var sumSegDes = parseFloat((sumSegDes + calcularSegDesAux(lineaSegDes, tasa, base, cantDiasMes)).toFixed(2));
    } else
    {
        var lineaSegDes = segDes[0];
    }
    var lineaDividendo = calcularDividendo(cuota, lineaSegDes);
    var lineaCapital = calcularCapital(lineaDividendo, lineaInteres);
    var lineaBalance = calcularBalance(monto, lineaCapital);
    var segDesArr = new Array();
    var hasCol = false;//hasColumn();
    addHeader(hasCol);
    for (var i = 1; i <= meses; i++) {
      
        if (!calcSegDesAux) {
            addRow(i, lineaFecha, lineaInteres, lineaCapital, lineaBalance, segDes[i - 1], cuota, hasCol);
            dividendoArrAux[i] = lineaDividendo;
            capitalArrAux[i] = cuota;
        } else
        {
            segDesArr[i - 1] = lineaSegDes;
        }
        lineaFecha.setMonth(lineaFecha.getMonth() + 1);
        var diasMes = daysInMonth(lineaFecha.getMonth() + 1, lineaFecha.getFullYear());
        var periodoInteres = base / diasMes;
        var lineaInteres = calcularInteres(lineaBalance, tasa, periodoInteres);
        
        if (calcSegDesAux) {
            var lineaSegDes = calcularSegDes(lineaBalance, tasaSegDes);
            var cantDiasMes = cantDiasMes + daysInMonth(lineaFecha.getMonth() + 1, lineaFecha.getFullYear());
            var sumSegDes = parseFloat((sumSegDes + calcularSegDesAux(lineaSegDes, tasa, base, cantDiasMes)).toFixed(2));
        } else
        {
            var lineaSegDes = segDes[i];
        }
        var lineaDividendo = calcularDividendo(cuota, lineaSegDes);
        var lineaCapital = calcularCapital(lineaDividendo, lineaInteres);
        var lineaBalance = calcularBalance(lineaBalance, lineaCapital); 
    }

    return [cuota, dividendoArrAux, capitalArrAux, sumSegDes, segDesArr];

}

function calcularCuotaFijaAlemana(meses, monto, tasa, tasaSegDes, base, fechaInicial) {
    var cantDiasMes = 0;
  
    var lineaFecha = new Date();
    lineaFecha.setMonth(fechaInicial.getMonth() + 1);
    var diasMes = daysInMonth(lineaFecha.getMonth() + 1, lineaFecha.getFullYear());
    var periodoInteres = base / diasMes;

    var lineaInteres = calcularInteres(monto, tasa, periodoInteres);
    var lineaCapital = calcularCapitalAleman(monto, meses);
    var lineaBalance = calcularBalance(monto, lineaCapital);
    var lineaDividendo = calcularDividendoAleman(lineaCapital, lineaInteres);
    var lineaSegDes = calcularSegDes(monto, tasaSegDes);
    var cuota = calcularCuotaAleman(lineaDividendo, lineaSegDes);

    var dividendoArrAux = new Array();
    dividendoArrAux[0] = -monto;
    var capitalArrAux = new Array();
    capitalArrAux[0] = -monto;

    var hasCol = false; //hasColumn();
    addHeader(hasCol);

    for (var i = 1; i <= meses; i++) {
        addRow(i, lineaFecha, lineaInteres, lineaCapital, lineaBalance, lineaSegDes, cuota, hasCol);

        dividendoArrAux[i] = lineaDividendo;
        capitalArrAux[i] = cuota;
       
        lineaFecha.setMonth(lineaFecha.getMonth() + 1);
        var diasMes = daysInMonth(lineaFecha.getMonth() + 1, lineaFecha.getFullYear());
        var periodoInteres = base / diasMes;
        var lineaInteres = calcularInteres(lineaBalance, tasa, periodoInteres);
        var lineaSegDes = calcularSegDes(lineaBalance, tasaSegDes);
        var lineaBalance = calcularBalance(lineaBalance, lineaCapital);
        var lineaDividendo = calcularDividendoAleman(lineaCapital, lineaInteres);
        var cuota = calcularCuotaAleman(lineaDividendo, lineaSegDes);  
    }

    return [cuota, dividendoArrAux, capitalArrAux];

}

//FRANCESA

function calcularInteres(balance, tasa, periodicidad) {
    return parseFloat((balance * (tasa / periodicidad)).toFixed(2));
}

function calcularCapital(dividendo, interes) {
    return parseFloat((dividendo - interes).toFixed(2));
}

function calcularBalance(balance, capital) {
    return parseFloat((balance - capital).toFixed(2));
}

function calcularDividendo(cuota, segDes) {
    return parseFloat((cuota - segDes).toFixed(2));
}

function calcularSegDes(balance, tasaSegDes) {
    return parseFloat((balance * tasaSegDes).toFixed(2));
}

function calcularSegDesAux(segDes, tasaInteres, base, cantDiasMes) {
    var aux = (segDes / Math.pow((1 + tasaInteres / base), cantDiasMes));
    var aux2 = aux.toFixed(2);
    return parseFloat(aux2);
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function pmt(rate_per_period, number_of_payments, present_value, future_value, type) {
    if (rate_per_period != 0.0) {
        // Interest rate exists
        var q = Math.pow(1 + rate_per_period, number_of_payments);
        return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));

    } else if (number_of_payments != 0.0) {
        // No interest rate, but number of payments exists
        return -(future_value + present_value) / number_of_payments;
    }

    return 0;
}

//ALEMANA

function calcularCapitalAleman(monto, cuotas) {
    return parseFloat((monto / cuotas).toFixed(2));
}

function calcularDividendoAleman(capital, interes) {
    return parseFloat((interes + capital).toFixed(2));
}

function calcularCuotaAleman(dividendo, segDes) {
    return parseFloat((dividendo + segDes).toFixed(2));
}

function clearCalculator() {
    $(".results_table > table > tbody").html("");
    $(".results_table").hide();
    $(".total_box_enabled").attr("class", "total_box_disabled");
    $("#montoCuota").text("0.00");
    $("#txtMontoSolicitado").val('')
    $("#ddProducto")[0].selectedIndex = 0;
    $("#txtEntradaForm").val('');
    $("#liEntradaForm").attr('style', 'display:none');
    $("#ddTipoTabla")[0].selectedIndex = 0;
    $("#txtMeses").val('');
    $("#hlRequest").hide();
    $("#errorMessage").hide();
}

function clearCalculatorProduct()
{
    $(".results_table > table > tbody").html("");
    $(".results_table").hide();
    $(".total_box_enabled").attr("class", "total_box_disabled");
    $("#montoCuota").text("0.00");
    $("#txtMontoSolicitado").val('');
    $("#txtEntradaForm").val('');
    $("#liEntradaForm").attr('style', 'display:none');
    $("#ddTipoTabla")[0].selectedIndex = 0;
    $("#txtMeses").val('');
    $("#hlRequest").hide();
    $("#errorMessage").hide();
}

function addHeader(hasColumn) {
    $(".results_table > table > tbody").html("");
    var headerHtml = "";

    headerHtml += "<tr>" +
                    "<th class='text_center'>No Div</th>" +
                    "<th class='text_center'>Fecha</th>" +
                    "<th class='text_center'>Saldo Capital</th>";

    if (hasColumn) {
        headerHtml += "<th class='text_center'>Capital</th>";
    }

    headerHtml += "<th class='text_center'>Interés</th>" +
                "<th class='text_center'>Seg. Desg.</th>" +
                "<th class='text_center'>Cuota</th>" +
                "</tr>";

    $(".results_table > table > tbody").append(headerHtml);
}

function addRow(numCuota, fecha, interes, capital, balance, segDesg, cuota, hasColumn) {
    var rowHtml = "";
    rowHtml += "<tr>" +
                    "<td>" + numCuota + "</td>" +
                    "<td>" + formatDate(fecha) + "</td>" +
                    "<td class='text_right'>" + setPunctuation(balance + capital) + "</td>";
    if (hasColumn) {
        rowHtml += "<td class='text_right'>" + setPunctuation(capital) + "</td>";
    }

    rowHtml += "<td class='text_right'>" + setPunctuation(interes) + "</td>" +
               "<td class='text_right'>" + setPunctuation(segDesg) + "</td>" +
               "<td class='text_right'>" + setPunctuation(cuota) + "</td>" +
                "</tr>";
    $(".results_table > table > tbody").append(rowHtml);
}

function formatDate(date) {
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();
    return day + "/" + month + "/" + year;
}

function hasColumn() {
    var index = $("#ddProducto option:selected").index();
    var hasColumn = false;
    var rowHtml = "";
    if (index > 0) {
        hasColumn = productsColumns[index - 1];
    }
    return hasColumn;
}

/*************/
/*Validations*/
/*************/

function setPunctuationEmpty(value) {
    if (value === "" || value === 0) {
        return "";
    }
    else {
        return addCommas(value.toFixed(2));
    }
}

function setPunctuation(value) {
    if (value === "") {
        return "0.00";
    }
    else {
        return addCommas(value.toFixed(2));
    }
}

function setPunctuationNoLimit(value) {
    if (value === "") {
        return "0.00";
    }
    else {
        return addCommas(value);
    }
}

function setHundredsSepEmpty(value) {
    if (value === "" || value === 0) {
        return "";
    }
    else {
        return addCommas(value);
    }
}

function getNumberFromTextEmpty(value) {
    var val = value.replace(/[^0-9\.]+/g, "");
    if (val === "") {
        return "";
    }
    else {
        return Number(val);
    }
}

function removePunctuation(value) {
    return value.replace(new RegExp(',', 'g'), '');
}

function getNumberFromText(value) {
    return Number(value.replace(/[^0-9\.]+/g, ""));
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

jQuery.fn.numeric = function () {
    this.keypress(
        function (e) { return inputRestriction(true, e, this); }
    );
    this.focus(
        function () {
            var original = $(this).val();
            $(this).val(removePunctuation(original))
        }
    );
    this.focusout(
        function () {
            var original = $(this).val();
            $(this).val(setPunctuationEmpty(getNumberFromText(original)));
        }
    );
    return this;
}

jQuery.fn.numericInteger = function () {
    var original = $(this).val();
    $(this).val(addCommas(getNumberFromTextEmpty(original)));
    this.keypress(
        function (e) { return inputRestriction(false, e, this); }
    );
    this.focus(
        function () {
            var original = $(this).val();
            $(this).val(removePunctuation(original))
        }
    );
    this.focusout(
        function () {
            var original = $(this).val();
            $(this).val(setHundredsSepEmpty(getNumberFromText(original)));
        }
    );
    return this;
}

function inputRestriction(decimalAllowed, e, control) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode == 8 || //backspace
        charCode == 9 || //tab
        charCode == 37 || charCode == 39 || //arrows
        charCode == 46 //del
        ) {
        return true;
    }
    var pressedKey = String.fromCharCode(e.charCode);
    if (decimalAllowed) {
        if (isNaN(control.value + "" + pressedKey)) {
            return false;
        }
    }
    else {
        if (isNaN(control.value + "" + pressedKey) || pressedKey == '.') {
            return false;
        }
    }
}