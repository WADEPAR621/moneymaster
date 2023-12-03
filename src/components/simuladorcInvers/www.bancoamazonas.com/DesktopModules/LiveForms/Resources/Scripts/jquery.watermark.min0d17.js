﻿/*
	Watermark v3.2.0 (August 16, 2014) plugin for jQuery
	http://jquery-watermark.googlecode.com/
	Copyright (c) 2009-2014 Todd Northrop
	http://www.speednet.biz/
	Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function (n, t, i) { var o = "watermark", e = "watermarkClass", v = "watermarkFocus", s = "watermarkSubmit", h = "watermarkMaxLength", f = "watermarkPassword", r = "watermarkText", u = /\r/g, p = /^(button|checkbox|hidden|image|radio|range|reset|submit)$/i, y = "input:data(" + o + "),textarea:data(" + o + ")", l = ":watermarkable", a = ["Page_ClientValidate"], c = !1, w = "placeholder" in document.createElement("input"); n.watermark = n.watermark || { version: "3.2.0", runOnce: !0, options: { className: "watermark", clearAllFormsOnSubmit: !1, hideBeforeUnload: !0, textAttr: "", useNative: !0 }, hide: function (t) { n(t).filter(y).each(function () { n.watermark._hide(n(this)) }) }, _hide: function (n, i) { var c = n[0], y = (c.value || "").replace(u, ""), l = n.data(r) || "", a = n.data(h) || 0, v = n.data(e), o, s; l.length && y == l && (c.value = "", n.data(f) && (n.attr("type") || "") === "text" && (o = n.data(f) || [], s = n.parent() || [], o.length && s.length && (s[0].removeChild(n[0]), s[0].appendChild(o[0]), n = o)), a && (n.attr("maxLength", a), n.removeData(h)), i && (n.attr("autocomplete", "off"), t.setTimeout(function () { n.select() }, 1))), v && n.removeClass(v) }, show: function (t) { n(t).filter(y).each(function () { n.watermark._show(n(this)) }) }, _show: function (t) { var a = t[0], p = (a.value || "").replace(u, ""), i = t.data(r) || "", y = t.attr("type") || "", w = t.data(e), o, s, l; p.length != 0 && p != i || t.data(v) ? n.watermark._hide(t) : (c = !0, t.data(f) && y === "password" && (o = t.data(f) || [], s = t.parent() || [], o.length && s.length && (s[0].removeChild(t[0]), s[0].appendChild(o[0]), t = o, t.attr("maxLength", i.length), a = t[0])), (y === "text" || y === "search") && (l = t.attr("maxLength") || 0, l > 0 && i.length > l && (t.data(h, l), t.attr("maxLength", i.length))), w && t.addClass(w), a.value = i) }, hideAll: function (t) { c && (n.watermark.hide(n(l, t)), c = !1) }, showAll: function () { n.watermark.show(l) } }, n.fn.watermark = n.fn.watermark || function (i, h) { if (!this.length) return this; var a = !1, c = typeof i == "string"; return c && (i = i.replace(u, "")), typeof h == "object" ? (a = typeof h.className == "string", h = n.extend({}, n.watermark.options, h)) : typeof h == "string" ? (a = !0, h = n.extend({}, n.watermark.options, { className: h })) : typeof i == "object" ? (h = n.extend({}, n.watermark.options, i), i = "") : h = n.watermark.options, typeof h.useNative != "function" && (h.useNative = h.useNative ? function () { return !0 } : function () { return !1 }), this.each(function () { var y = n(this), d, p, b, k; if (y.is(l)) { if (h.textAttr && (i = (y.attr(h.textAttr) || "").replace(u, ""), c = !!i), y.data(o)) (c || a) && (n.watermark._hide(y), c && y.data(r, i), a && y.data(e, h.className)); else { if (w && h.useNative.call(this, y) && (y.attr("tagName") || "") !== "TEXTAREA") { c && h.textAttr !== "placeholder" && y.attr("placeholder", i); return } y.data(r, c ? i : ""), y.data(e, h.className), y.data(o, 1), (y.attr("type") || "") === "password" ? (d = y.wrap("<span>").parent(), p = n(d.html().replace(/type=["']?password["']?/i, 'type="text"')), p.data(r, y.data(r)), p.data(e, y.data(e)), p.data(o, 1), p.attr("maxLength", i.length), p.focus(function () { n.watermark._hide(p, !0) }).bind("dragenter", function () { n.watermark._hide(p) }).bind("dragend", function () { t.setTimeout(function () { p.blur() }, 1) }), y.blur(function () { n.watermark._show(y) }).bind("dragleave", function () { n.watermark._show(y) }), p.data(f, y), y.data(f, p)) : y.focus(function () { y.data(v, 1), n.watermark._hide(y, !0) }).blur(function () { y.data(v, 0), n.watermark._show(y) }).bind("dragenter", function () { n.watermark._hide(y) }).bind("dragleave", function () { n.watermark._show(y) }).bind("dragend", function () { t.setTimeout(function () { n.watermark._show(y) }, 1) }).bind("drop", function (n) { var t = y[0], i = n.originalEvent.dataTransfer.getData("Text"); (t.value || "").replace(u, "").replace(i, "") === y.data(r) && (t.value = i), y.focus() }), this.form && (b = this.form, k = n(b), k.data(s) || (k.submit(function () { return n.watermark.hideAll.apply(this, h.clearAllFormsOnSubmit ? [] : [b]) }), b.submit ? (k.data(s, b.submit), b.submit = function (t, i) { return function () { var r = i.data(s); n.watermark.hideAll(h.clearAllFormsOnSubmit ? null : t), r.apply ? r.apply(t, Array.prototype.slice.call(arguments)) : r() } }(b, k)) : (k.data(s, 1), b.submit = function (t) { return function () { n.watermark.hideAll(h.clearAllFormsOnSubmit ? null : t), delete t.submit, t.submit() } }(b)))) } n.watermark._show(y) } }) }, n.watermark.runOnce && (n.watermark.runOnce = !1, n.extend(n.expr[":"], { data: n.expr.createPseudo ? n.expr.createPseudo(function (t) { return function (i) { return !!n.data(i, t) } }) : function (t, i, r) { return !!n.data(t, r[3]) }, watermarkable: function (n) { var t, i = n.nodeName; return i === "TEXTAREA" ? !0 : i !== "INPUT" ? !1 : (t = n.getAttribute("type"), !t || !p.test(t)) } }), function (t) { n.fn.val = function () { var f = Array.prototype.slice.call(arguments), e; return this.length ? f.length ? (t.apply(this, f), n.watermark.show(this), this) : this.data(o) ? (e = (this[0].value || "").replace(u, ""), e === (this.data(r) || "") ? "" : e) : t.apply(this) : f.length ? this : i } }(n.fn.val), a.length && n(function () { for (var r, u, i = a.length - 1; i >= 0; i--) r = a[i], u = t[r], typeof u == "function" && (t[r] = function (t) { return function () { return n.watermark.hideAll(), t.apply(null, Array.prototype.slice.call(arguments)) } }(u)) }), n(t).bind("beforeunload", function () { n.watermark.options.hideBeforeUnload && n.watermark.hideAll() })) })(jQuery, window);