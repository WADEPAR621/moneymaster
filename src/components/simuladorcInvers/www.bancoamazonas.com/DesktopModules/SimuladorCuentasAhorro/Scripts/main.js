$(document).ready(function () {
    $(".decimal").numeric();
    $("#errorMessage").hide();
    $("#txtTasa").val($("#hfTasa").val());
    $('.field').bind("cut copy paste", function (e) {
        e.preventDefault();
    });
});

/************/
/*Calculator*/
/************/

function calculate() {
    var monto = Number(removePunctuation($("#txtCuotaMensual").val()));
    var meses = Number($("#txtMeses").val());
    var tasa = Number(removePunctuation($("#txtTasa").val()));

    if (monto > 0 && monto <= 1000000000000 && meses > 0 && meses <= 240 && tasa > 0 && tasa <= 50) {
        $("#errorMessage").hide();
        tasa = tasa.toFixed(6) / 100;
        var interes = Math.pow((1 + tasa), (1 / 12));
        var total = 0;
        for (var i = 1; i <= meses; i++) {
            total += monto * Math.pow(interes, (meses - i));
        }

        $("#montoTotal").text(setPunctuation(total));
        $(".total_box_disabled").attr("class", "total_box_enabled");
    }
    else {
        $("#errorMessage").show();
    }
}

function clearCalculator() {
    $(".total_box_enabled").attr("class", "total_box_disabled");
    $("#montoTotal").text("0.00");
    $("#errorMessage").hide();
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