!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o(require("jQuery"));else if("function"==typeof define&&define.amd)define(["jQuery"],o);else{var t="object"==typeof exports?o(require("jQuery")):o(e.jQuery);for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(globalThis,(e=>(()=>{"use strict";var o={1145:o=>{o.exports=e}},t={};function r(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={exports:{}};return o[e](i,i.exports,r),i.exports}r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>
{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n);var e=r(1145),o=r.n(e);o()(".js-faq").each((function(e,t){var r=function(e){e.src=e.src};o()(".js-question-toggle",t).on("click",(function(){var e=o()(this).parents(".js-question"),t=o()(".js-question-content",e);e.hasClass("block--faq__question--open")?(e.removeClass("block--faq__question--open"),t.css("max-height",0),e.find(".js-youtube-id").each((function(){r(o()(this)[0])})),e.find(".js-vimeo-id").each((function(){r(o()(this).find("iframe")[0])}))):(e.addClass("block--faq__question--open"),t.css("max-height",t.prop("scrollHeight")))}))})),o()(window).on("resize",(function(){o()(".block--faq__question--open .block--faq__question-content").each((function(e,t){
    var r=o()(t);r.css("max-height",r.prop("scrollHeight"))}))}))})(),n})()));