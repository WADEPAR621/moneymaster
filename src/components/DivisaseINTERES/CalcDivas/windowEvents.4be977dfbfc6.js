!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("jQuery"));else if("function"==typeof define&&define.amd)define(["jQuery"],t);else{var a="object"==typeof exports?t(require("jQuery")):t(e.jQuery);for(var n in a)("object"==typeof exports?exports:e)[n]=a[n]}}(globalThis,(e=>(()=>{"use strict";var t={1145:t=>{t.exports=e}},a={};function n(e){var o=a[e];if(void 0!==o)
    return o.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;
        return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o);var e=n(1145),t=n.n(e);function a(e,t){var a=Math.max(0,t-parseInt(e).toString().length);return parseFloat(e).toLocaleString(window.ReactBridge.locale,{minimumFractionDigits:a,maximumFractionDigits:a})}function r(e){var a=e.base,n=e.quote,o=e.amount,r=t()("#advanced_data_link")[0];if(r&&a&&n){var c=r.href.split("?")[1],i=new URLSearchParams(c),u=window.jsBridge.baseParamName,d=window.jsBridge.quoteParamName,l=window.jsBridge.amountParamName,s=window.jsBridge.defaultAmount;i.set(u,a),i.set(d,n),""===o?i.set(l,s):o&&i.set(l,o),r.href="?"+i}}function c(e,a){var n=t()(".popular_conversion");a.forEach((function(t,a){var o=n.eq(a),r=o.data("base-currency"),c=o.data("quote-currency"),i=o.find(".popular_conversion-link")[0],u=o.find(".popular_conversion-link-text")[0],d=window.jsBridge.baseParamName,l=window.jsBridge.quoteParamName;i.href=i.href.replace("".concat(l,"=").concat(c),"".concat(l,"=").concat(t)).replace("".concat(d,"=").concat(r),"".concat(d,"=").concat(e)),u.innerText=u.innerText.replace(/(\d+) [A-Z]{3} ([a-z]+) [A-Z]{3}/i,"$1 ".concat(e," $2 ").concat(t)),o.data("base-currency",e),o.data("quote-currency",t)}))}var i,u=function(e,t){
            return(t.match(/(^|\s)flag-icon-\S+/g)||[]).join(" ")},d=[1,5,10,25,50,100,500,1e3,5e3,1e4,5e4],l=null===(i=t()("[data-popular-currencies]").first().data("popular-currencies"))||void 0===i?void 0:i.split(","),s=JSON.parse(window.ReactBridge.currencies),f=function(e){var t;return null===(t=s.find((function(t){return t.code===e})))||void 0===t?void 0:t.flag};window.addEventListener("currency_rates_change",(function(e){if(e.detail){var n=e.detail.rateData||5e-4;t()(".cc-rates:not(.reversed)").each((function(){var e=t()(this).data("rate-multiply");t()(this).text(a(n*e,7))})),t()(".cc-rates.reversed").each((function(){var e=t()(this).data("rate-multiply");t()(this).text(a(1/n*e,7))})),t()(".skeleton-box").hide(),t()(".cheat_table td span, .cheat_table td a").not(".skeleton-box").show()}})),window.addEventListener("currency_change",(function(e){if(e.detail){var a=e.detail.baseCurrency,n=e.detail.quoteCurrency;!function(e,a){t()(".base-flag").removeClass(u).addClass("flag-icon-".concat(f(e))),t()(".quote-flag").removeClass(u).addClass("flag-icon-".concat(f(a))),t()(".base-code").text(e),t()(".quote-code").text(a);var n=s.find((function(t){
                return t.code===e})).name,o=s.find((function(e){return e.code===a})).name;t()(".base-name").text(n),t()(".quote-name").text(o),t()(".cheat_table td span, .cheat_table td a").not(".skeleton-box").hide(),t()(".skeleton-box").css("display","inline-block")}(a,n),function(e,a){for(var n=window.jsBridge.baseParamName,o=window.jsBridge.quoteParamName,r=window.jsBridge.amountParamName,c=0;c<d.length;c++){var i=d[c].toLocaleString(window.ReactBridge.locale),u='<a href="?'.concat(n,"=").concat(e,"&").concat(o,"=").concat(a,"&").concat(r,"=").concat(d[c],'"><u>').concat(i," ").concat(e,"</u></a>");t()(".cc-base.cheat_table table tr:eq(".concat(c,") td.cc-conversion-base")).html(u);var l='<a href="?'.concat(n,"=").concat(a,"&").concat(o,"=").concat(e,"&").concat(r,"=").concat(d[c],'"><u>').concat(i," ").concat(a,"</u></a>");t()(".cc-quote.cheat_table table tr:eq(".concat(c,") td.cc-conversion-quote")).html(l)}}(a,n),r({base:a,quote:n}),function(e,t){var a=localStorage.getItem("baseCurrency");document.title=document.title.replace(a,e),localStorage.setItem("baseCurrency",e);var n=localStorage.getItem("quoteCurrency");document.title=document.title.replace(n,t),localStorage.setItem("quoteCurrency",t)}(a,n),o=a,i=n,(v=t()(".card-currency-bio"))&&(function(e,t,a,n){var o=e.find(".base-code").text(),r=e.find(".quote-code").text(),c="flag-icon-".concat(n(o)),i="flag-icon-".concat(n(r)),u="flag-icon-".concat(n(t.code)),d="flag-icon-".concat(n(a.code));e.find(".base-flag").removeClass(c).addClass(u),e.find(".quote-flag").removeClass(i).addClass(d),e.find(".base-code").text("".concat(t.code)),e.find(".quote-code").text("".concat(a.code)),e.find(".base-name").text("".concat(t.name)),e.find(".quote-name").text("".concat(a.name)),e.find(".bio-text > .base-bio").text(t.bio),e.find(".bio-text > .quote-bio").text(a.bio)}(v,s.find((function(e){
                    return e.code===o})),s.find((function(e){return e.code===i})),f),m=s.find((function(e){return e.code===o})).profile_url,b=s.find((function(e){return e.code===i})).profile_url,m?t()(".base-cprofile-link").attr("href",m).show():t()(".base-cprofile-link").hide(),b?t()(".quote-cprofile-link").attr("href",b).show():t()(".quote-cprofile-link").hide()),function(e){if(l){var a=t()(".popular_conversion").first().data("base-currency");if(e!==a){var n=l.filter((function(t){return t!==e})).slice(0,10);c(e,n)}}}(a)}var o,i,m,b,v})),window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("baseCurrency"),a=localStorage.getItem("quoteCurrency");l&&function(e){var a=t()(".popular_conversion").first().data("base-currency"),n=e.filter((function(e){
    return e!==a})).slice(0,10);c(a,n)}(l),e&&a&&r({base:e,quote:a})})),window.addEventListener("amount_change",(function(e){var a=e.detail.amount;if(a){t()(".currency-base-amount").text(a);var n=localStorage.getItem("currencyAmount");document.title=document.title.replace(n,a),localStorage.setItem("currencyAmount",a),r({amount:a})}}))})(),o})()));