var co = new Object;

function ocultar_mostrar(ctl) {
if (document.formc.p3D7.selectedIndex == 0) {//intereses totales
	document.getElementById('capInicial').style.visibility = "visible" 
	document.getElementById('tipoInteres').style.visibility = "visible"
	document.getElementById('tiempo').style.visibility = "visible"
	document.getElementById('capFinal').style.visibility = "hidden"
	
	document.formc.p3D9.value = "0,00"//capital inicial
	document.formc.p3D10.value = "0,0000%"//tipo de interes
	document.formc.p3D11.value = "0,00"//tiempo
	//resultado
	//document.formc.reset();
	document.formc.p3D16.value = "0,00"
	
	document.getElementById('p3D9').style.visibility = "visible" 
	document.getElementById('p3D10').style.visibility = "visible"
	document.getElementById('p3D11').style.visibility = "visible" 
	//document.getElementById('p3E11').style.visibility = "visible"
	document.getElementById('p3D12').style.visibility = "hidden" 
	
}else if (document.formc.p3D7.selectedIndex == 1) {//tipo de interés 	
	document.getElementById('capInicial').style.visibility = "visible" 
	document.getElementById('tipoInteres').style.visibility = "hidden" 
	document.getElementById('tiempo').style.visibility = "visible"
	document.getElementById('capFinal').style.visibility = "visible"
	
	document.formc.p3D9.value = "0,00"//capital inicial
	document.formc.p3D11.value = "0,00"//tiempo
	document.formc.p3D12.value = "0,00"//capital final
	//resultado
	//document.formc.reset();
	document.formc.p3D16.value = "0,00"
	
	document.getElementById('p3D9').style.visibility = "visible" 
	document.getElementById('p3D10').style.visibility = "hidden"
	document.getElementById('p3D11').style.visibility = "visible" 
	//document.getElementById('p3E11').style.visibility = "visible"
	document.getElementById('p3D12').style.visibility = "visible" 

}else if (document.formc.p3D7.selectedIndex == 2) {//capital inicial		
	document.getElementById('capInicial').style.visibility = "hidden" 
	document.getElementById('tipoInteres').style.visibility = "visible"
	document.getElementById('tiempo').style.visibility = "visible"	
	document.getElementById('capFinal').style.visibility = "visible"
	
	document.formc.p3D10.value = "0,0000%"//tipo de interes
	document.formc.p3D11.value = "0,00"//tiempo
	document.formc.p3D12.value = "0,00"//capital final
	//resultado
	//document.formc.reset();
	document.formc.p3D16.value = "0,00"
	
	document.getElementById('p3D9').style.visibility = "hidden"
	document.getElementById('p3D10').style.visibility = "visible" 
	document.getElementById('p3D11').style.visibility = "visible" 
	document.getElementById('p3E11').style.visibility = "visible"
	document.getElementById('p3D12').style.visibility = "visible" 
	
}else if (document.formc.p3D7.selectedIndex == 3) {//capital final
	document.getElementById('capInicial').style.visibility = "visible" 
	document.getElementById('tipoInteres').style.visibility = "visible"
	document.getElementById('tiempo').style.visibility = "visible"
	document.getElementById('capFinal').style.visibility = "hidden"	
	
	document.formc.p3D9.value = "0,00"//capital inicial
	document.formc.p3D10.value = "0,0000%"//tipo de interes
	document.formc.p3D11.value = "0,00"//tiempo
	//resultado
	//document.formc.reset();
	document.formc.p3D16.value = "0,00"
	
	document.getElementById('p3D9').style.visibility = "visible" 
	document.getElementById('p3D10').style.visibility = "visible" 
	document.getElementById('p3D11').style.visibility = "visible" 
	document.getElementById('p3E11').style.visibility = "visible"
	document.getElementById('p3D12').style.visibility = "hidden" 
	
}else if (document.formc.p3D7.selectedIndex == 4) {//tiempo (días)
	document.getElementById('capInicial').style.visibility = "visible" 
	document.getElementById('capFinal').style.visibility = "visible"
	document.getElementById('tiempo').style.visibility = "hidden" 
	document.getElementById('tipoInteres').style.visibility = "visible"
		
	document.formc.p3D9.value = "0,00"//capital inicial
	document.formc.p3D10.value = "0,0000%"//tipo de interes
	document.formc.p3D11.value = "1"//tiempo
	document.formc.p3D12.value = "0,00"//capital final
	
	//resultado
	//document.formc.reset();
	document.formc.p3D16.value = "0,00"
			
	document.getElementById('p3D9').style.visibility = "visible" 
	document.getElementById('p3D10').style.visibility = "visible" 
	document.getElementById('p3D11').style.visibility = "hidden"
	document.getElementById('p3E11').style.visibility = "hidden"
	document.getElementById('p3D12').style.visibility = "visible" 
}   
}//fin funcion ocultar_mostrar

function recalc_onclick(ctl) {
  if (true) {

//intereses totales, esto es para la primera vez que se carga la pagina, aparece selecc intereses totales
if (document.formc.p3D7.selectedIndex==0) {
	document.getElementById('capInicial').style.visibility = "visible" 
	document.getElementById('capFinal').style.visibility = "hidden"
	document.getElementById('tiempo').style.visibility = "visible"
	document.getElementById('tipoInteres').style.visibility = "visible"
	
	document.getElementById('p3D9').style.visibility = "visible" 
	document.getElementById('p3D10').style.visibility = "visible"
	document.getElementById('p3D11').style.visibility = "visible" 
	document.getElementById('p3E11').style.visibility = "visible"
	document.getElementById('p3D12').style.visibility = "hidden" 
}

co.p3D7=document.formc.p3D7[document.formc.p3D7.selectedIndex].value;co.p3D9=eeparseFloatTh(document.formc.p3D9.value);co.p3D10=eeparsePercent(document.formc.p3D10.value);co.p3D11=eeparseFloatV(document.formc.p3D11.value);co.p3E11=document.formc.p3E11[document.formc.p3E11.selectedIndex].value;co.p3D12=eeparseFloatTh(document.formc.p3D12.value);co.p3D14=document.formc.p3D14[document.formc.p3D14.selectedIndex].value;co.p3D15=document.formc.p3D15[document.formc.p3D15.selectedIndex].value;co.p3F31=eeparsePercentV(document.formc.p3F31.value);calc(co);document.formc.p3D16.value=eeisnumber(co.p3D16)?eedisplayFloatNDTh(co.p3D16,2):co.p3D16;document.formc.p3D30.value=eeisnumber(co.p3D30)?eedisplayPercentND(co.p3D30,2):co.p3D30;
};
};


var eeisus=0;var eetrue="VERDADERO";var eefalse="FALSO";var eedec=",";var eeth=".";var eedecreg=new RegExp(",","g");var eethreg=new RegExp("[.]","g"); var fmtdaynamesshort=new Array("dom","lun","mar","mié","jue","vie","sáb"); var fmtdaynameslong=new Array("domingo","lunes","martes","miércoles","jueves","viernes","sábado"); var fmtmonthnamesshort=new Array("ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"); var fmtmonthnameslong=new Array("enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"); var fmtstrings=new Array(","," ","€","/","-"); var fmtdate5=new Array(25,2,33,34); var fmtdate6=new Array(25,2,33,34); var fmtdate7=new Array(25,2,33,34); var fmtdate8=new Array(7,35,3,35,11); var fmtdate9=new Array(7,36,3,36,10);

var arr5xD23D47=new Array(25);for(var ii=0;ii<25;ii++){arr5xD23D47[ii]=new Array(1);for(var jj=0;jj<1;jj++){arr5xD23D47[ii][jj]=0}};var arr5xE23E47=new Array(25);for(var ii=0;ii<25;ii++){arr5xE23E47[ii]=new Array(1);for(var jj=0;jj<1;jj++){arr5xE23E47[ii][jj]=0}};var arr5xF23F47=new Array(25);for(var ii=0;ii<25;ii++){arr5xF23F47[ii]=new Array(1);for(var jj=0;jj<1;jj++){arr5xF23F47[ii][jj]=0}};var col7xC35I35=new Array(7);for(var jj=0;jj<7;jj++){col7xC35I35[jj]=""};var row7xB36B42=new Array(7);for(var jj=0;jj<7;jj++){row7xB36B42[jj]=""};var arr7xC36I42=new Array(7);for(var ii=0;ii<7;ii++){arr7xC36I42[ii]=new Array(7);for(var jj=0;jj<7;jj++){arr7xC36I42[ii][jj]=0}};var eecm1=new Array();function calc(data){var c3D7=data.p3D7;var c3D9=data.p3D9;var c3D10=data.p3D10;var c3D11=data.p3D11;var c3E11=data.p3E11;var c3D12=data.p3D12;var c3D14=data.p3D14;var c3D15=data.p3D15;var c3F31=data.p3F31;var c3D29=(((str_eq((c3E11),("dias")))?(((v2n(c3D11))/(365))):("introduzca dias")));var c3E29=(((str_eq((c3E11),("meses")))?(((v2n(c3D11))/(12))):("introduzca meses")));var c3F29=(((str_eq((c3E11),("semestres")))?(((v2n(c3D11))/(2))):("introduzca semestres")));var c3G29=(((str_eq((c3E11),("años")))?(((c3D11=="")?0:c3D11)):("introduzca años")));var c3H29=(((str_eq((c3E11),("trimestres")))?(((v2n(c3D11))/(4))):("introduzca trimestres")));var c3D30=(((c3F31=="")?0:c3F31));var c3B29=(((str_eq((c3E11),("dias")))?(c3D29):(((str_eq((c3E11),("meses")))?(c3E29):(((str_eq((c3E11),("trimestres")))?(c3H29):(((str_eq((c3E11),("semestres")))?(c3F29):(((str_eq((c3E11),("años")))?(c3G29):("mete tiempo")))))))))));var tmp17=(var_eq((c3B29),(0)));var tmp18=(((c3D9)==(0)));var tmp19=(((c3D12)==(0)));var sumcnt20_sum=(((false||tmp19)||tmp18)||tmp17);var sumcnt20_cnt=3;var c3D21=(((orgeneral(0,sumcnt20_sum,sumcnt20_cnt,eecm1))?(""):(((((((c3D12)/(c3D9)))-(1)))/(v2n(c3B29))))));var tmp13=(var_eq((c3B29),(0)));var tmp14=(((c3D10)==(0)));var tmp15=(((c3D12)==(0)));var sumcnt16_sum=(((false||tmp15)||tmp14)||tmp13);var sumcnt16_cnt=3;var c3D22=(((orgeneral(0,sumcnt16_sum,sumcnt16_cnt,eecm1))?(""):(((c3D12)/(((1)+(((v2n(c3B29))*(c3D10)))))))));var tmp9=(var_eq((c3B29),(0)));var tmp10=(((c3D10)==(0)));var tmp11=(((c3D12)==(0)));var sumcnt12_sum=(((false||tmp11)||tmp10)||tmp9);var sumcnt12_cnt=3;var c3D23=(((orgeneral(0,sumcnt12_sum,sumcnt12_cnt,eecm1))?(""):(((((((c3D12)/(c3D9)))-(1)))/(c3D10)))));var tmp5=(var_eq((c3B29),(0)));var tmp6=(((c3D10)==(0)));var tmp7=(((c3D12)==(0)));var sumcnt8_sum=(((false||tmp7)||tmp6)||tmp5);var sumcnt8_cnt=3;var c3D24=(((orgeneral(0,sumcnt8_sum,sumcnt8_cnt,eecm1))?(""):(((c3D9)*(((1)+(((c3D10)*(v2n(c3B29))))))))));var tmp1=(var_eq((c3B29),(0)));var tmp2=(((c3D10)==(0)));var tmp3=(((c3D9)==(0)));var sumcnt4_sum=(((false||tmp3)||tmp2)||tmp1);var sumcnt4_cnt=3;var c3D25=(((orgeneral(0,sumcnt4_sum,sumcnt4_cnt,eecm1))?(""):(((((c3D9)*(c3D10)))*(v2n(c3B29))))));var c3D16=(((str_eq((c3D7),("tipo de interés")))?(((v2n(c3D21))*(100))):(((str_eq((c3D7),("Capital Inicial")))?(c3D22):(((str_eq((c3D7),("Tiempo (días)")))?(((v2n(c3D23))*(365))):(((str_eq((c3D7),("Capital Final")))?(c3D24):(((str_eq((c3D7),("Intereses totales")))?(c3D25):("")))))))))));data.p3D16=c3D16;data.p3D30=c3D30;};

function str_eq(x,y){return(x.toLowerCase()==y.toLowerCase())};function var_eq(x,y){var xt=mytypeof(x);var yt=mytypeof(y);if(xt!=yt)return false;switch(xt){case 1:case 3:return(x==y);case 2:return str_eq(x,y);default:return false;}};function mytypeof(v){switch(typeof v){case "number":if(myIsNaN(v))return 4;return 1;case "string":return 2;case "boolean":return 3;case "object":if(v.constructor==Number){if(myIsNaN(v))return 4;return 1;};if(v.constructor==String){return 2;};if(v.constructor==Boolean){return 3;};return 4;default:return 4;}};function myIsNaN(x){return(isNaN(x)||(typeof x=='number'&&!isFinite(x)));};function mod(n,d){return n-d*Math.floor(n/d);};function round(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;var abs_n=Math.abs(n);var factor=Math.pow(10,nd);return sign_n*Math.round(abs_n*factor)/factor;}else{return NaN;}};function orgeneral(cnt,vsum,vcnt,x){if(vsum){return true;};for(var ii=0;ii<x.length;ii++){var arr=x[ii][0];for(var jj=x[ii][1];jj<=x[ii][3];jj++){for(var kk=x[ii][2];kk<=x[ii][4];kk++){if(arr[jj][kk]){return true;};};};};return false;};function s2n(str){str=String(str).replace(eedecreg,".");return parseFloat(str);}function b2s(b){return b?eetrue:eefalse;};function v2n(v){switch(typeof v){case "number":return v;case "string":return s2n(v);case "boolean":return v?1:0;case "object":if(v.constructor==Number){return v;};if(v.constructor==String){return s2n(v);};if(v.constructor==Boolean){return v?1:0;};return Number.NaN;default:return Number.NaN;}};function eeparsePercent(str){var parts=String(str).split('%');var tmp=String(parts[0]).replace(eedecreg,".");var res=parseFloat(tmp)/100;if(isNaN(res)){return 0;}else{return res;}};function eedisplayFloat(x){if(myIsNaN(x)){return Number.NaN;}else{return String(x).replace(/\./g,eedec);}};function eedisplayFloatV(x){if(x=="")return x;if(isFinite(x)){return String(x).replace(/\./g,eedec);}else{return x}};function eedisplayScientific(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var str=String(x.toExponential(nd));return str.replace(/\./g,eedec);}};function eedisplayFloatND(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(parts[0]).toString()+eedec+decimals;}}else{return res;}}};function eedisplayPercent(x){if(myIsNaN(x)){return Number.NaN;}else{var tmp=(x*100).toString()+'%';return tmp.replace(/\./g,eedec);}};function eedisplayPercentND(x,nd){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloatND(x*100,nd)+'%';}}function eeparseFloatTh(str){str=String(str).replace(eethreg,"");str=String(str).replace(eedecreg,".");var res=parseFloat(str);if(isNaN(res)){return 0;}else{return res;}};function eedisplayFloatNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{var res=round(x,nd);if(nd>0){var str=String(res);if(str.indexOf('e')!=-1)return str;if(str.indexOf('E')!=-1)return str;var parts=str.split('.');var res2=eeinsertThousand(parts[0].toString());if(parts.length<2){var decimals=('00000000000000').substring(0,nd);return(res2+eedec+decimals);}else{var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(res2+eedec+decimals);}}else{return(eeinsertThousand(res.toString()));}}};function eedisplayPercentNDTh(x,nd){if(myIsNaN(x)){return Number.NaN;}else{return eedisplayFloatNDTh(x*100,nd)+'%';}}var eeparseFloatVreg=new RegExp("^ *-?[0-9.]+ *$");function eeparseFloatV(str){if(str=="")return str;str=String(str).replace(eedecreg,".");if(!eeparseFloatVreg.test(str)){return str;};var res=parseFloat(str);if(isNaN(res)){return str;}else{return res;}};var eeparsePercentVreg=new RegExp("^ *-?[0-9.]+$");function eeparsePercentV(str){if(str=="")return str;var parts=String(str).split('%');var tmp=String(parts[0]).replace(eedecreg,".");if(!eeparsePercentVreg.test(tmp)){return str;};var res=parseFloat(tmp)/100;if(isNaN(res)){return str;}else{return res;}};function eedisplayPercentNDV(x,nd){if(x=="")return x;if(isFinite(x)){return eedisplayPercentND(x,nd)}else{return x}}function eeinsertThousand(whole){if(whole==""||whole.indexOf("e")>=0){return whole;}else{var minus_sign="";if(whole.charAt(0)=="-"){minus_sign="-";whole=whole.substring(1);};var res="";var str_length=whole.length-1;for(var ii=0;ii<=str_length;ii++){if(ii>0&&ii%3==0){res=eeth+res;};res=whole.charAt(str_length-ii)+res;};return minus_sign+res;}};function eedatefmt(fmt,x){if(!isFinite(x))return Number.NaN;var tmp=0;var res="";var len=fmt.length;for(var ii=0;ii<len;ii++){if(fmt[ii]>31){res+=fmtstrings[fmt[ii]-32];}else{switch(fmt[ii]){case 2:res+=eemonth(x);break;case 3:tmp=eemonth(x);if(tmp<10){res+="0";};res+=tmp;break;case 4:res+=fmtmonthnamesshort[eemonth(x)-1];break;case 5:res+=fmtmonthnameslong[eemonth(x)-1];break;case 6:res+=eeday(x);break;case 7:tmp=eeday(x);if(tmp<10){res+="0";};res+=tmp;break;case 8:res+=fmtdaynamesshort[weekday(x,1)-1];break;case 9:res+=fmtdaynameslong[weekday(x,1)-1];break;case 10:tmp=year(x)%100;if(tmp<10){res+="0";};res+=tmp;break;case 11:res+=year(x);break;case 12:res+=hour(x);break;case 13:tmp=hour(x);if(tmp<10){res+="0";};res+=tmp;break;case 14:tmp=hour(x)%12;if(tmp==0){res+="12";}else{res+=tmp%12;};break;case 15:tmp=hour(x)%12;if(tmp==0){res+="12";}else{if(tmp<10){res+="0";};res+=tmp;};break;case 16:res+=minute(x);break;case 17:tmp=minute(x);if(tmp<10){res+="0";};res+=tmp;break;case 18:res+=second(x);break;case 19:tmp=second(x);if(tmp<10){res+="0";};res+=tmp;break;case 21:case 22:if(hour(x)<12){res+="AM";}else{res+="PM";};break;case 23:res+=eedisplayFloat(x);break;case 24:tmp=fmt[++ii];res+=eedisplayFloatND(x,tmp);break;case 25:tmp=fmt[++ii];res+=eedisplayFloatNDTh(x,tmp);break;case 26:res+=eedisplayPercent(x);break;case 27:tmp=fmt[++ii];res+=eedisplayPercentND(x,tmp);break;case 28:tmp=fmt[++ii];res+=eedisplayPercentNDTh(x,tmp);break;case 29:tmp=fmt[++ii];res+=eedisplayScientific(x,tmp);break;};};};return res;};function eeisstring(v){switch(typeof v){case "string":return true;case "object":return v.constructor==String;default:return false;}};function eeisnumber(v){if(isNaN(v)||v==Number.NEGATIVE_INFINITY||v==Number.POSITIVE_INFINITY){return false;}else{switch(typeof v){case "number":return true;case "object":return v.constructor==Number;default:return false;}}};function leap_gregorian(year){return((year%4)==0)&&(!(((year%100)==0)&&((year%400)!=0)));}var GREGORIAN_EPOCH=1721425;function gregorian_to_jd(year,month,day){return(GREGORIAN_EPOCH-0)+(365*(year-1))+Math.floor((year-1)/4)+(-Math.floor((year-1)/100))+Math.floor((year-1)/400)+Math.floor((((367*month)-362)/12)+((month<=2)?0:(leap_gregorian(year)?-1:-2))+day);}function jd_to_gregorian(jd){var wjd,depoch,quadricent,dqc,cent,dcent,quad,dquad,yindex,year,yearday,leapadj;wjd=Math.floor(jd);depoch=wjd-GREGORIAN_EPOCH-1;quadricent=Math.floor(depoch/146097);dqc=mod(depoch,146097);cent=Math.floor(dqc/36524);dcent=mod(dqc,36524);quad=Math.floor(dcent/1461);dquad=mod(dcent,1461);yindex=Math.floor(dquad/365);year=(quadricent*400)+(cent*100)+(quad*4)+yindex;if(!((cent==4)||(yindex==4))){year++;}yearday=wjd-gregorian_to_jd(year,1,1);leapadj=((wjd<gregorian_to_jd(year,3,1))?0:(leap_gregorian(year)?1:2));var month=Math.floor((((yearday+leapadj)*12)+373)/367);var day=(wjd-gregorian_to_jd(year,month,1))+1;return new Array(year,month,day);}function eeday(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 0;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[2];};function hour(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return Math.floor(res/3600);}function minute(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return Math.floor(res/60)%60;};function eemonth(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 1;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[1];};function second(serial_number){if(!isFinite(serial_number))return Number.NaN;var res=Math.floor((serial_number-Math.floor(serial_number))*86400+0.5);return res%60;};function weekday(serial_number,return_type){if(!isFinite(return_type)||!isFinite(serial_number))return Number.NaN;if(return_type<1||return_type>3)return Number.NaN;var res=Math.floor(serial_number+6)%7;switch(Math.floor(return_type)){case 1:return res+1;case 2:return(res+6)%7+1;case 3:return(res+6)%7;};return "hej";};function year(serial_number){if(!isFinite(serial_number))return Number.NaN;if(serial_number<1){return 1900;}if(serial_number>60)serial_number--;var res=jd_to_gregorian(serial_number+2415020);return res[0];};

function goto(){
	self.location.href="definiciones_interes_simple.htm";
}

function NumberFormat(num, numDec, decSep, thousandSep){
    var arg;
    var Dec;
    num = num.toString().replace('.', '');
    Dec = Math.pow(10, numDec); 
    if (typeof(num) == 'undefined') return; 
    if (typeof(decSep) == 'undefined') decSep = '.';
    if (typeof(thousandSep) == 'undefined') thousandSep = ',';
    if (thousandSep == ',')
     arg=/./g;
    else
     if (thousandSep == ',') arg=/,/g;
    if (typeof(arg) != 'undefined') num =   num.toString().replace(arg,'');
    num = num.toString().replace(/,/g, '.'); 
    if (isNaN(num)) num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * Dec + 0.50000000001);
    cents = num % Dec;
    num = Math.floor(num/Dec).toString(); 
    if (cents < (Dec / 10)) cents = "0" + cents; 
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
     num = num.substring(0, num.length - (4 * i + 3)) + thousandSep + num.substring(num.length - (4 * i + 3));
    if (Dec == 1)
     return (((sign)? '': '-') + num);
    else
     return (((sign)? '': '-') + num + decSep + cents);
} 

function EvaluateText(cadena, obj){
    opc = false; 
    if (cadena == "%d")
     if (event.keyCode > 47 && event.keyCode < 58)
      opc = true;
    if (cadena == "%f"){ 
     if (event.keyCode > 47 && event.keyCode < 58)     
      opc = true;
     if (obj.value.search("[.*]") == -1 && obj.value.length != 0)
      if (event.keyCode == 46)
       opc = true;
    }
    if(opc == false)
     event.returnValue = false; 
}
function formReset()
{
//document.getElementById("formc").reset();
//document.formc.reset();
document.formc.p3D7.value="0,00";
document.formc.p3D9.value="0,00";
document.formc.p3D10.value="0,00";
document.formc.p3D11.value="0,00";
document.formc.p3D12.value="0,00";
}
