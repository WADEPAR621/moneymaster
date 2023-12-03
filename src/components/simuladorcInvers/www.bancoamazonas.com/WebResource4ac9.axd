/**
 * jquery.mask.js
 * @version: v1.7.4
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at http://blog.igorescobar.com
 *
 * Copyright (c) 2012 Igor Escobar http://blog.igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
/*jshint laxbreak: true */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/jqueryPlugin.js

!function (t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t(window.jQuery || window.Zepto) }(function (t) { "use strict"; var e = function (e, n, a) { var r, o, i = this; e = t(e), n = "function" == typeof n ? n(e.val(), void 0, e, a) : n; var s = { getCaret: function () { try { var t, n = 0, a = e.get(0), r = document.selection, o = a.selectionStart; return r && !~navigator.appVersion.indexOf("MSIE 10") ? (t = r.createRange(), t.moveStart("character", e.is("input") ? -e.val().length : -e.text().length), n = t.text.length) : (o || "0" === o) && (n = o), n } catch (i) { } }, setCaret: function (t) { try { if (e.is(":focus")) { var n, a = e.get(0); a.setSelectionRange ? a.setSelectionRange(t, t) : a.createTextRange && (n = a.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()) } } catch (r) { } }, events: function () { e.on("keydown.mask", function () { r = s.val() }).on("keyup.mask", s.behaviour).on("paste.mask drop.mask", function () { setTimeout(function () { e.keydown().keyup() }, 100) }).on("change.mask", function () { e.data("changed", !0) }).on("blur.mask", function () { r === e.val() || e.data("changed") || e.trigger("change"), e.data("changed", !1) }).on("focusout.mask", function () { a.clearIfNotMatch && !o.test(s.val()) && s.val("") }) }, getRegexMask: function () { for (var t, e, a, r, o, s, c = [], l = 0; l < n.length; l++) t = i.translation[n[l]], t ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), a = t.optional, r = t.recursive, r ? (c.push(n[l]), o = { digit: n[l], pattern: e }) : c.push(a || r ? e + "?" : e)) : c.push("\\" + n[l]); return s = c.join(""), o && (s = s.replace(new RegExp("(" + o.digit + "(.*" + o.digit + ")?)"), "($1)?").replace(new RegExp(o.digit, "g"), o.pattern)), new RegExp(s) }, destroyEvents: function () { e.off(["keydown", "keyup", "paste", "drop", "change", "blur", "focusout", "DOMNodeInserted", ""].join(".mask ")).removeData("changeCalled") }, val: function (t) { var n = e.is("input"); return arguments.length > 0 ? n ? e.val(t) : e.text(t) : n ? e.val() : e.text() }, getMCharsBeforeCount: function (t, e) { for (var a = 0, r = 0, o = n.length; o > r && t > r; r++) i.translation[n.charAt(r)] || (t = e ? t + 1 : t, a++); return a }, caretPos: function (t, e, a, r) { var o = i.translation[n.charAt(Math.min(t - 1, n.length - 1))]; return o ? Math.min(t + a - e - r, a) : s.caretPos(t + 1, e, a, r) }, behaviour: function (e) { e = e || window.event; var n = e.keyCode || e.which; if (-1 === t.inArray(n, i.byPassKeys)) { var a = s.getCaret(), r = s.val(), o = r.length, c = o > a, l = s.getMasked(), u = l.length, h = s.getMCharsBeforeCount(u - 1) - s.getMCharsBeforeCount(o - 1); return l !== r && s.val(l), !c || 65 === n && e.ctrlKey || (8 !== n && 46 !== n && (a = s.caretPos(a, o, u, h)), s.setCaret(a)), s.callbacks(e) } }, getMasked: function (t) { var e, r, o = [], c = s.val(), l = 0, u = n.length, h = 0, f = c.length, g = 1, v = "push", d = -1; for (a.reverse ? (v = "unshift", g = -1, e = 0, l = u - 1, h = f - 1, r = function () { return l > -1 && h > -1 }) : (e = u - 1, r = function () { return u > l && f > h }) ; r() ;) { var p = n.charAt(l), m = c.charAt(h), k = i.translation[p]; k ? (m.match(k.pattern) ? (o[v](m), k.recursive && (-1 === d ? d = l : l === e && (l = d - g), e === d && (l -= g)), l += g) : k.optional && (l += g, h -= g), h += g) : (t || o[v](p), m === p && (h += g), l += g) } var y = n.charAt(e); return u !== f + 1 || i.translation[y] || o.push(y), o.join("") }, callbacks: function (t) { var o = s.val(), i = o !== r; i === !0 && "function" == typeof a.onChange && a.onChange(o, t, e, a), i === !0 && "function" == typeof a.onKeyPress && a.onKeyPress(o, t, e, a), "function" == typeof a.onComplete && o.length === n.length && a.onComplete(o, t, e, a) } }; i.remove = function () { var t; s.destroyEvents(), s.val(i.getCleanVal()).removeAttr("maxlength"), t = s.getCaret(), s.setCaret(t - s.getMCharsBeforeCount(t)) }, i.getCleanVal = function () { return s.getMasked(!0) }, i.init = function () { a = a || {}, i.byPassKeys = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91], i.translation = { 0: { pattern: /\d/ }, 9: { pattern: /\d/, optional: !0 }, "#": { pattern: /\d/, recursive: !0 }, A: { pattern: /[a-zA-Z0-9]/ }, S: { pattern: /[a-zA-Z]/ } }, i.translation = t.extend({}, i.translation, a.translation), i = t.extend(!0, {}, i, a), o = s.getRegexMask(), a.maxlength !== !1 && e.attr("maxlength", n.length), a.placeholder && e.attr("placeholder", a.placeholder), e.attr("autocomplete", "off"), s.destroyEvents(), s.events(); var r = s.getCaret(); s.val(s.getMasked()), s.setCaret(r + s.getMCharsBeforeCount(r, !0)) }() }, n = {}, a = "DOMNodeInserted.mask", r = function () { var e = t(this), n = {}, a = "data-mask-"; e.attr(a + "reverse") && (n.reverse = !0), "false" === e.attr(a + "maxlength") && (n.maxlength = !1), e.attr(a + "clearifnotmatch") && (n.clearIfNotMatch = !0), e.mask(e.attr("data-mask"), n) }; t.fn.mask = function (r, o) { var i = this.selector, s = function (n) { return n.originalEvent && t(n.originalEvent.relatedNode)[0] == t(this)[0] ? void 0 : t(this).data("mask", new e(this, r, o)) }; this.each(s), i && !n[i] && (n[i] = !0, setTimeout(function () { t(document).on(a, i, s) }, 500)) }, t.fn.unmask = function () { try { return this.each(function () { t(this).data("mask").remove() }) } catch (e) { } }, t.fn.cleanVal = function () { return this.data("mask").getCleanVal() }, t("*[data-mask]").each(r), t(document).on(a, "*[data-mask]", r) });