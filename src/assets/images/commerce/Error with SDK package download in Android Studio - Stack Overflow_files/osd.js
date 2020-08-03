;(function(window, document) {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var l
  function aa(a) {
    var b = 0
    return function() {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
    }
  }
  var ba =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function(a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a
          a[b] = c.value
          return a
        }
  function ca(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global,
    ]
    for (var b = 0; b < a.length; ++b) {
      var c = a[b]
      if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object")
  }
  var da = ca(this)
  function ea(a, b) {
    if (b)
      a: {
        var c = da
        a = a.split(".")
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d]
          if (!(e in c)) break a
          c = c[e]
        }
        a = a[a.length - 1]
        d = c[a]
        b = b(d)
        b != d &&
          null != b &&
          ba(c, a, { configurable: !0, writable: !0, value: b })
      }
  }
  function fa(a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]
    return b ? b.call(a) : { next: aa(a) }
  }
  function r(a) {
    if (!(a instanceof Array)) {
      a = fa(a)
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value)
      a = c
    }
    return a
  }
  var ha =
      "function" == typeof Object.create
        ? Object.create
        : function(a) {
            function b() {}
            b.prototype = a
            return new b()
          },
    ia
  if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf
  else {
    var ja
    a: {
      var ka = { Db: !0 },
        la = {}
      try {
        la.__proto__ = ka
        ja = la.Db
        break a
      } catch (a) {}
      ja = !1
    }
    ia = ja
      ? function(a, b) {
          a.__proto__ = b
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible")
          return a
        }
      : null
  }
  var ma = ia
  function t(a, b) {
    a.prototype = ha(b.prototype)
    a.prototype.constructor = a
    if (ma) ma(a, b)
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c)
            d && Object.defineProperty(a, c, d)
          } else a[c] = b[c]
  }
  var na =
    "function" == typeof Object.assign
      ? Object.assign
      : function(a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c]
            if (d)
              for (var e in d)
                Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
          }
          return a
        }
  ea("Object.assign", function(a) {
    return a || na
  })
  ea("Math.trunc", function(a) {
    return a
      ? a
      : function(b) {
          b = Number(b)
          if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b
          var c = Math.floor(Math.abs(b))
          return 0 > b ? -c : c
        }
  })
  var u = this || self
  function oa() {}
  function w(a) {
    a.La = void 0
    a.g = function() {
      return a.La ? a.La : (a.La = new a())
    }
  }
  function pa(a) {
    var b = typeof a
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null"
  }
  function qa(a) {
    var b = pa(a)
    return "array" == b || ("object" == b && "number" == typeof a.length)
  }
  function ra(a) {
    var b = typeof a
    return ("object" == b && null != a) || "function" == b
  }
  function sa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1)
    return function() {
      var d = c.slice()
      d.push.apply(d, arguments)
      return a.apply(this, d)
    }
  }
  var ta = Date.now
  function ua(a, b) {
    a = a.split(".")
    var c = u
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0])
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b)
  }
  function va(a, b) {
    function c() {}
    c.prototype = b.prototype
    a.prototype = new c()
    a.prototype.constructor = a
  }
  var wa
  function ya(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0)
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c
    return -1
  }
  function x(a, b, c) {
    for (
      var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0;
      f < d;
      f++
    )
      f in e && b.call(c, e[f], f, a)
  }
  function za(a, b) {
    for (
      var c = a.length,
        d = [],
        e = 0,
        f = "string" === typeof a ? a.split("") : a,
        g = 0;
      g < c;
      g++
    )
      if (g in f) {
        var h = f[g]
        b.call(void 0, h, g, a) && (d[e++] = h)
      }
    return d
  }
  function Aa(a, b) {
    for (
      var c = a.length,
        d = Array(c),
        e = "string" === typeof a ? a.split("") : a,
        f = 0;
      f < c;
      f++
    )
      f in e && (d[f] = b.call(void 0, e[f], f, a))
    return d
  }
  function Ba(a, b, c) {
    var d = c
    x(a, function(e, f) {
      d = b.call(void 0, d, e, f, a)
    })
    return d
  }
  function Ca(a, b) {
    for (
      var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
      e < c;
      e++
    )
      if (e in d && b.call(void 0, d[e], e, a)) return !0
    return !1
  }
  function Da(a, b) {
    var c = 0
    x(
      a,
      function(d, e, f) {
        b.call(void 0, d, e, f) && ++c
      },
      void 0
    )
    return c
  }
  function Ea(a, b) {
    b = Fa(a, b, void 0)
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
  }
  function Fa(a, b, c) {
    for (
      var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0;
      f < d;
      f++
    )
      if (f in e && b.call(c, e[f], f, a)) return f
    return -1
  }
  function Ga(a, b) {
    return 0 <= ya(a, b)
  }
  function Ha(a) {
    return Array.prototype.concat.apply([], arguments)
  }
  function Ia(a) {
    var b = a.length
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]
      return c
    }
    return []
  }
  function Ja(a, b) {
    a.sort(b || Ka)
  }
  function Ka(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  }
  function La(a) {
    if (!arguments.length) return []
    for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
      arguments[d].length < c && (c = arguments[d].length)
    for (d = 0; d < c; d++) {
      for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d])
      b.push(e)
    }
    return b
  }
  function Ma(a) {
    var b = !1,
      c
    return function() {
      b || ((c = a()), (b = !0))
      return c
    }
  }
  function Na(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  }
  function Oa(a, b) {
    var c = {},
      d
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d])
    return c
  }
  function Pa(a) {
    var b = Qa,
      c
    for (c in b) if (!a.call(void 0, b[c], c, b)) return !1
    return !0
  }
  function Ra(a) {
    var b = [],
      c = 0,
      d
    for (d in a) b[c++] = a[d]
    return b
  }
  var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  )
  function y(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e]
      for (c in d) a[c] = d[c]
      for (var f = 0; f < Sa.length; f++)
        (c = Sa[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
  function Ta(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
  }
  var Ua = /&/g,
    Va = /</g,
    Wa = />/g,
    Xa = /"/g,
    Ya = /'/g,
    Za = /\x00/g,
    $a = /[\x00&<>"']/
  function z(a, b) {
    return -1 != a.toLowerCase().indexOf(b.toLowerCase())
  }
  function ab(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  }
  var A
  a: {
    var bb = u.navigator
    if (bb) {
      var cb = bb.userAgent
      if (cb) {
        A = cb
        break a
      }
    }
    A = ""
  }
  function B(a) {
    return -1 != A.indexOf(a)
  }
  function db() {
    return (
      B("Safari") &&
      !(
        eb() ||
        B("Coast") ||
        B("Opera") ||
        B("Edge") ||
        B("Edg/") ||
        B("OPR") ||
        B("Firefox") ||
        B("FxiOS") ||
        B("Silk") ||
        B("Android")
      )
    )
  }
  function eb() {
    return (B("Chrome") || B("CriOS")) && !B("Edge")
  }
  function fb(a) {
    $a.test(a) &&
      (-1 != a.indexOf("&") && (a = a.replace(Ua, "&amp;")),
      -1 != a.indexOf("<") && (a = a.replace(Va, "&lt;")),
      -1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;")),
      -1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;")),
      -1 != a.indexOf("'") && (a = a.replace(Ya, "&#39;")),
      -1 != a.indexOf("\x00") && (a = a.replace(Za, "&#0;")))
    return a
  }
  function gb() {
    return "opacity".replace(/\-([a-z])/g, function(a, b) {
      return b.toUpperCase()
    })
  }
  function hb(a) {
    return String(a)
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
  }
  function ib(a) {
    return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
      return c + d.toUpperCase()
    })
  }
  var jb = 0,
    kb = 0
  function lb() {
    this.a = []
  }
  lb.prototype.length = function() {
    return this.a.length
  }
  function mb(a, b) {
    for (; 127 < b; ) a.a.push((b & 127) | 128), (b >>>= 7)
    a.a.push(b)
  }
  function nb(a, b) {
    a.a.push((b >>> 0) & 255)
    a.a.push((b >>> 8) & 255)
    a.a.push((b >>> 16) & 255)
    a.a.push((b >>> 24) & 255)
  }
  function ob(a) {
    ob[" "](a)
    return a
  }
  ob[" "] = oa
  function pb(a, b) {
    try {
      return ob(a[b]), !0
    } catch (c) {}
    return !1
  }
  function qb(a, b) {
    var c = rb
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a))
  }
  var sb = B("Opera"),
    C = B("Trident") || B("MSIE"),
    tb = B("Edge"),
    ub =
      B("Gecko") &&
      !(z(A, "WebKit") && !B("Edge")) &&
      !(B("Trident") || B("MSIE")) &&
      !B("Edge"),
    vb = z(A, "WebKit") && !B("Edge"),
    wb = vb && B("Mobile")
  function xb() {
    var a = u.document
    return a ? a.documentMode : void 0
  }
  var yb
  a: {
    var zb = "",
      Ab = (function() {
        var a = A
        if (ub) return /rv:([^\);]+)(\)|;)/.exec(a)
        if (tb) return /Edge\/([\d\.]+)/.exec(a)
        if (C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        if (vb) return /WebKit\/(\S+)/.exec(a)
        if (sb) return /(?:Version)[ \/]?(\S+)/.exec(a)
      })()
    Ab && (zb = Ab ? Ab[1] : "")
    if (C) {
      var Bb = xb()
      if (null != Bb && Bb > parseFloat(zb)) {
        yb = String(Bb)
        break a
      }
    }
    yb = zb
  }
  var Cb = yb,
    rb = {}
  function Db(a) {
    return qb(a, function() {
      for (
        var b = 0,
          c = Ta(String(Cb)).split("."),
          d = Ta(String(a)).split("."),
          e = Math.max(c.length, d.length),
          f = 0;
        0 == b && f < e;
        f++
      ) {
        var g = c[f] || "",
          h = d[f] || ""
        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""]
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""]
          if (0 == g[0].length && 0 == h[0].length) break
          b =
            ab(
              0 == g[1].length ? 0 : parseInt(g[1], 10),
              0 == h[1].length ? 0 : parseInt(h[1], 10)
            ) ||
            ab(0 == g[2].length, 0 == h[2].length) ||
            ab(g[2], h[2])
          g = g[3]
          h = h[3]
        } while (0 == b)
      }
      return 0 <= b
    })
  }
  var Eb
  if (u.document && C) {
    var Fb = xb()
    Eb = Fb ? Fb : parseInt(Cb, 10) || void 0
  } else Eb = void 0
  var Gb = Eb
  var Hb = {},
    Ib = null
  function Jb() {
    this.b = []
    this.a = new lb()
  }
  function Kb(a, b, c) {
    if (null != c) {
      mb(a.a, 8 * b)
      a = a.a
      var d = c
      c = 0 > d
      d = Math.abs(d)
      b = d >>> 0
      d = Math.floor((d - b) / 4294967296)
      d >>>= 0
      c &&
        ((d = ~d >>> 0),
        (b = (~b >>> 0) + 1),
        4294967295 < b && ((b = 0), d++, 4294967295 < d && (d = 0)))
      jb = b
      kb = d
      c = jb
      for (b = kb; 0 < b || 127 < c; )
        a.a.push((c & 127) | 128),
          (c = ((c >>> 7) | (b << 25)) >>> 0),
          (b >>>= 7)
      a.a.push(c)
    }
  }
  function Lb() {}
  var Mb = "function" == typeof Uint8Array,
    Nb = []
  function Ob(a) {
    var b = a.c + a.f
    a.a[b] || (a.b = a.a[b] = {})
  }
  function Pb(a, b) {
    if (b < a.c) {
      b += a.f
      var c = a.a[b]
      return c === Nb ? (a.a[b] = []) : c
    }
    if (a.b) return (c = a.b[b]), c === Nb ? (a.b[b] = []) : c
  }
  function Qb(a, b) {
    a = Pb(a, b)
    return null == a ? 0 : a
  }
  function Rb(a, b, c) {
    0 !== c
      ? b < a.c
        ? (a.a[b + a.f] = c)
        : (Ob(a), (a.b[b] = c))
      : b < a.c
      ? (a.a[b + a.f] = null)
      : (Ob(a), delete a.b[b])
    return a
  }
  Lb.prototype.toString = function() {
    return this.a.toString()
  }
  var Sb
  Sb = ["av.key", "js", "20200731"].slice(-1)[0]
  var D = document,
    E = window
  var Tb = Ma(function() {
    var a = !1
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function() {
          a = !0
        },
      })
      u.addEventListener("test", null, b)
    } catch (c) {}
    return a
  })
  function Ub(a) {
    return a ? (a.passive && Tb() ? a : a.capture || !1) : !1
  }
  function Vb(a, b, c, d) {
    return a.addEventListener ? (a.addEventListener(b, c, Ub(d)), !0) : !1
  }
  function Wb(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, Ub(void 0))
  }
  var Xb = !C || 9 <= Number(Gb),
    Yb = C || sb || vb
  function F(a, b) {
    this.x = void 0 !== a ? a : 0
    this.y = void 0 !== b ? b : 0
  }
  F.prototype.ceil = function() {
    this.x = Math.ceil(this.x)
    this.y = Math.ceil(this.y)
    return this
  }
  F.prototype.floor = function() {
    this.x = Math.floor(this.x)
    this.y = Math.floor(this.y)
    return this
  }
  F.prototype.round = function() {
    this.x = Math.round(this.x)
    this.y = Math.round(this.y)
    return this
  }
  function G(a, b) {
    this.width = a
    this.height = b
  }
  G.prototype.aspectRatio = function() {
    return this.width / this.height
  }
  G.prototype.ceil = function() {
    this.width = Math.ceil(this.width)
    this.height = Math.ceil(this.height)
    return this
  }
  G.prototype.floor = function() {
    this.width = Math.floor(this.width)
    this.height = Math.floor(this.height)
    return this
  }
  G.prototype.round = function() {
    this.width = Math.round(this.width)
    this.height = Math.round(this.height)
    return this
  }
  function Zb(a) {
    return a ? new $b(H(a)) : wa || (wa = new $b())
  }
  function ac() {
    var a = document
    a.getElementsByClassName
      ? (a = a.getElementsByClassName("GoogleActiveViewContainer")[0])
      : ((a = document),
        (a =
          a.querySelectorAll && a.querySelector
            ? a.querySelector(".GoogleActiveViewContainer")
            : bc(a, "*", "GoogleActiveViewContainer", void 0)[0] || null))
    return a || null
  }
  function bc(a, b, c, d) {
    a = d || a
    b = b && "*" != b ? String(b).toUpperCase() : ""
    if (a.querySelectorAll && a.querySelector && (b || c))
      return a.querySelectorAll(b + (c ? "." + c : ""))
    if (c && a.getElementsByClassName) {
      a = a.getElementsByClassName(c)
      if (b) {
        d = {}
        for (var e = 0, f = 0, g; (g = a[f]); f++)
          b == g.nodeName && (d[e++] = g)
        d.length = e
        return d
      }
      return a
    }
    a = a.getElementsByTagName(b || "*")
    if (c) {
      d = {}
      for (f = e = 0; (g = a[f]); f++)
        (b = g.className),
          "function" == typeof b.split && Ga(b.split(/\s+/), c) && (d[e++] = g)
      d.length = e
      return d
    }
    return a
  }
  function cc(a, b) {
    Na(b, function(c, d) {
      c && "object" == typeof c && c.ec && (c = c.dc())
      "style" == d
        ? (a.style.cssText = c)
        : "class" == d
        ? (a.className = c)
        : "for" == d
        ? (a.htmlFor = c)
        : dc.hasOwnProperty(d)
        ? a.setAttribute(dc[d], c)
        : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
        ? a.setAttribute(d, c)
        : (a[d] = c)
    })
  }
  var dc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width",
  }
  function ec(a) {
    var b = a.scrollingElement
      ? a.scrollingElement
      : vb || "CSS1Compat" != a.compatMode
      ? a.body || a.documentElement
      : a.documentElement
    a = a.parentWindow || a.defaultView
    return C && Db("10") && a.pageYOffset != b.scrollTop
      ? new F(b.scrollLeft, b.scrollTop)
      : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
  }
  function fc(a) {
    return a ? a.parentWindow || a.defaultView : window
  }
  function gc(a, b, c) {
    var d = arguments,
      e = document,
      f = String(d[0]),
      g = d[1]
    if (!Xb && g && (g.name || g.type)) {
      f = ["<", f]
      g.name && f.push(' name="', fb(g.name), '"')
      if (g.type) {
        f.push(' type="', fb(g.type), '"')
        var h = {}
        y(h, g)
        delete h.type
        g = h
      }
      f.push(">")
      f = f.join("")
    }
    f = hc(e, f)
    g &&
      ("string" === typeof g
        ? (f.className = g)
        : Array.isArray(g)
        ? (f.className = g.join(" "))
        : cc(f, g))
    2 < d.length && ic(e, f, d)
    return f
  }
  function ic(a, b, c) {
    function d(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e]
      if (!qa(f) || (ra(f) && 0 < f.nodeType)) d(f)
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (ra(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item
              break a
            }
            if ("function" == pa(f)) {
              g = "function" == typeof f.item
              break a
            }
          }
          g = !1
        }
        x(g ? Ia(f) : f, d)
      }
    }
  }
  function hc(a, b) {
    b = String(b)
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase())
    return a.createElement(b)
  }
  function H(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }
  function jc(a) {
    try {
      return (
        a.contentWindow || (a.contentDocument ? fc(a.contentDocument) : null)
      )
    } catch (b) {}
    return null
  }
  function kc(a, b) {
    a && (a = a.parentNode)
    for (var c = 0; a; ) {
      if (b(a)) return a
      a = a.parentNode
      c++
    }
    return null
  }
  function $b(a) {
    this.a = a || u.document || document
  }
  function lc() {
    return B("iPad") || (B("Android") && !B("Mobile")) || B("Silk")
  }
  var mc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
  function nc(a) {
    try {
      return !!a && null != a.location.href && pb(a, "foo")
    } catch (b) {
      return !1
    }
  }
  function oc(a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
  }
  function pc(a) {
    var b = []
    oc(a, function(c, d) {
      b.push(d)
    })
    return b
  }
  function qc() {
    var a = rc
    if (!a) return ""
    var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/
    try {
      var c = b.exec(decodeURIComponent(a))
      if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
    } catch (d) {}
    return ""
  }
  var sc = { ac: 1, cc: 2, $b: 3 }
  function I() {
    this.K = this.K
    this.oa = this.oa
  }
  I.prototype.K = !1
  I.prototype.da = function() {
    return this.K
  }
  I.prototype.B = function() {
    this.K || ((this.K = !0), this.V())
  }
  I.prototype.V = function() {
    if (this.oa) for (; this.oa.length; ) this.oa.shift()()
  }
  function J(a, b, c, d) {
    this.top = a
    this.right = b
    this.bottom = c
    this.left = d
  }
  function tc(a) {
    return a.right - a.left
  }
  function uc(a) {
    return a.bottom - a.top
  }
  function vc(a) {
    return new J(a.top, a.right, a.bottom, a.left)
  }
  J.prototype.ceil = function() {
    this.top = Math.ceil(this.top)
    this.right = Math.ceil(this.right)
    this.bottom = Math.ceil(this.bottom)
    this.left = Math.ceil(this.left)
    return this
  }
  J.prototype.floor = function() {
    this.top = Math.floor(this.top)
    this.right = Math.floor(this.right)
    this.bottom = Math.floor(this.bottom)
    this.left = Math.floor(this.left)
    return this
  }
  J.prototype.round = function() {
    this.top = Math.round(this.top)
    this.right = Math.round(this.right)
    this.bottom = Math.round(this.bottom)
    this.left = Math.round(this.left)
    return this
  }
  function wc(a, b, c) {
    b instanceof F
      ? ((a.left += b.x), (a.right += b.x), (a.top += b.y), (a.bottom += b.y))
      : ((a.left += b),
        (a.right += b),
        "number" === typeof c && ((a.top += c), (a.bottom += c)))
    return a
  }
  function xc(a, b, c) {
    a.google_image_requests || (a.google_image_requests = [])
    var d = a.document.createElement("img")
    c && (d.referrerPolicy = "no-referrer")
    d.src = b
    a.google_image_requests.push(d)
  }
  function yc(a) {
    if (zc()) xc(window, a, !0)
    else {
      var b = u.document
      if (b.body) {
        var c = b.getElementById("goog-srcless-iframe")
        c ||
          ((c = hc(new $b(b).a, "IFRAME")),
          (c.style.display = "none"),
          (c.id = "goog-srcless-iframe"),
          b.body.appendChild(c))
        b = c
      } else b = null
      b && b.contentWindow && xc(b.contentWindow, a, !0)
    }
  }
  var zc = Ma(function() {
    return "referrerPolicy" in u.document.createElement("img")
  })
  var Ac = {}
  function Bc(a) {
    try {
      return a.getBoundingClientRect()
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 }
    }
  }
  function Cc(a, b) {
    var c = new F(0, 0),
      d = fc(H(a))
    if (!pb(d, "parent")) return c
    do {
      if (d == b) {
        var e = a,
          f = H(e)
        var g = new F(0, 0)
        var h = f ? H(f) : document
        h =
          !C || 9 <= Number(Gb) || "CSS1Compat" == Zb(h).a.compatMode
            ? h.documentElement
            : h.body
        e != h &&
          ((e = Bc(e)),
          (f = ec(Zb(f).a)),
          (g.x = e.left + f.x),
          (g.y = e.top + f.y))
      } else (g = Bc(a)), (g = new F(g.left, g.top))
      c.x += g.x
      c.y += g.y
    } while (
      d &&
      d != b &&
      d != d.parent &&
      (a = d.frameElement) &&
      (d = d.parent)
    )
    return c
  }
  function Dc(a) {
    return !(!a || !a.call) && "function" === typeof a
  }
  function Ec() {
    var a = D.documentElement,
      b = K()
    try {
      if (D.createEvent) {
        var c = D.createEvent("CustomEvent")
        c.initCustomEvent("osd_load", !0, !0, "")
        a.dispatchEvent(c)
      } else if (Dc(b.CustomEvent)) {
        var d = new b.CustomEvent("osd_load", {
          bubbles: !0,
          cancelable: !0,
          detail: "",
        })
        a.dispatchEvent(d)
      } else if (Dc(b.Event)) {
        var e = new Event("osd_load", { bubbles: !0, cancelable: !0 })
        a.dispatchEvent(e)
      }
    } catch (f) {}
  }
  function Fc() {
    var a = K()
    return "complete" === a.document.readyState || !!a.google_onload_fired
  }
  var Gc = !!window.google_async_iframe_id,
    Hc = (Gc && window.parent) || window
  function K() {
    if (Gc && !nc(Hc)) {
      var a = "." + D.domain
      try {
        for (; 2 < a.split(".").length && !nc(Hc); )
          (D.domain = a = a.substr(a.indexOf(".") + 1)), (Hc = window.parent)
      } catch (b) {}
      nc(Hc) || (Hc = window)
    }
    return Hc
  }
  function Ic(a, b, c) {
    try {
      a && (b = b.top)
      var d = void 0
      var e = b
      c = void 0 === c ? !1 : c
      a && null !== e && e != e.top && (e = e.top)
      try {
        if (void 0 === c ? 0 : c)
          var f = new G(e.innerWidth, e.innerHeight).round()
        else {
          var g = (e || window).document,
            h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body
          f = new G(h.clientWidth, h.clientHeight).round()
        }
        d = f
      } catch (q) {
        d = new G(-12245933, -12245933)
      }
      a = d
      var p = ec(Zb(b.document).a)
      if (-12245933 == a.width) {
        var m = a.width
        var k = new J(m, m, m, m)
      } else k = new J(p.y, p.x + a.width, p.y + a.height, p.x)
      return k
    } catch (q) {
      return new J(-12245933, -12245933, -12245933, -12245933)
    }
  }
  var Jc = { NONE: 0, Rb: 1 }
  function Kc() {
    this.o = 0
    this.c = !1
    this.b = -1
    this.a = !1
    this.f = 0
  }
  Kc.prototype.isVisible = function() {
    return this.a ? 0.3 <= this.o : 0.5 <= this.o
  }
  var L = { Qb: 0, Sb: 1 },
    Lc = { 668123728: 0, 668123729: 1 },
    Mc = { NONE: 0, Yb: 1, Tb: 2 },
    Nc = { 480596784: 0, 480596785: 1, 21063355: 2 }
  function Oc() {
    this.a = null
    this.f = !1
    this.b = null
  }
  function M(a) {
    a.f = !0
    return a
  }
  function Pc(a, b) {
    a.b &&
      x(b, function(c) {
        c = a.b[c]
        void 0 !== c && a.c(c)
      })
  }
  function Qc(a) {
    Oc.call(this)
    this.h = a
  }
  t(Qc, Oc)
  Qc.prototype.c = function(a) {
    var b
    if (!(b = null !== this.a)) {
      a: {
        b = this.h
        for (c in b)
          if (b[c] == a) {
            var c = !0
            break a
          }
        c = !1
      }
      b = !c
    }
    b || (this.a = a)
  }
  function Rc() {
    Oc.call(this)
  }
  t(Rc, Oc)
  Rc.prototype.c = function(a) {
    null === this.a && "number" === typeof a && (this.a = a)
  }
  function Sc() {
    this.a = {}
    this.b = {}
  }
  function N(a, b, c) {
    a.a[b] || (a.a[b] = new Qc(c))
    return a.a[b]
  }
  function Tc(a, b, c) {
    ;(a = a.a[b]) && a.c(c)
  }
  function O(a, b) {
    var c = a.b
    if (null !== c && b in c) return a.b[b]
    if ((a = a.a[b])) return a.a
  }
  function Uc(a) {
    var b = {},
      c = Oa(a.a, function(d) {
        return d.f
      })
    Na(
      c,
      function(d, e) {
        d =
          void 0 !== a.b[e]
            ? String(a.b[e])
            : d.f && null !== d.a
            ? String(d.a)
            : ""
        0 < d.length && (b[e] = d)
      },
      a
    )
    return b
  }
  function Vc(a, b) {
    b = b.split("&")
    for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c].split("="),
        e = d[0]
      d = 1 < d.length ? parseInt(d[1], 10) : 1
      isNaN(d) || ((e = a.a[e]) && e.c(d))
    }
    return b.join("&")
  }
  function Wc(a, b) {
    x(Ra(a.a), function(c) {
      return Pc(c, b)
    })
  }
  function Xc(a, b) {
    b &&
      "string" === typeof b &&
      (b = b.match(/[&;?]eid=([^&;]+)/)) &&
      2 === b.length &&
      ((b = decodeURIComponent(b[1]).split(",")),
      (b = Aa(b, function(c) {
        return Number(c)
      })),
      Wc(a, b))
  }
  var Yc = !C && !db()
  function Zc(a, b) {
    if (/-[a-z]/.test(b)) return null
    if (Yc && a.dataset) {
      if (
        !(
          !B("Android") ||
          eb() ||
          B("Firefox") ||
          B("FxiOS") ||
          B("Opera") ||
          B("Silk") ||
          b in a.dataset
        )
      )
        return null
      a = a.dataset[b]
      return void 0 === a ? null : a
    }
    return a.getAttribute("data-" + hb(b))
  }
  function $c(a, b) {
    return /-[a-z]/.test(b)
      ? !1
      : Yc && a.dataset
      ? b in a.dataset
      : a.hasAttribute
      ? a.hasAttribute("data-" + hb(b))
      : !!a.getAttribute("data-" + hb(b))
  }
  function ad() {
    this.a = this.b = null
    this.c = "no"
  }
  function bd(a, b) {
    this.b = (void 0 === a ? 0 : a) || 0
    this.a = (void 0 === b ? "" : b) || ""
  }
  function cd(a) {
    return !!a.b || !!a.a
  }
  bd.prototype.toString = function() {
    return this.b + (this.a ? "-" : "") + this.a
  }
  function P() {}
  P.prototype.a = function() {
    return 0
  }
  P.prototype.c = function() {
    return 0
  }
  P.prototype.f = function() {
    return 0
  }
  P.prototype.b = function() {
    return 0
  }
  function dd() {
    if (!ed()) throw Error()
  }
  t(dd, P)
  function ed() {
    return !(!E || !E.performance)
  }
  dd.prototype.a = function() {
    return ed() && E.performance.now
      ? E.performance.now()
      : P.prototype.a.call(this)
  }
  dd.prototype.c = function() {
    return ed() && E.performance.memory
      ? E.performance.memory.totalJSHeapSize || 0
      : P.prototype.c.call(this)
  }
  dd.prototype.f = function() {
    return ed() && E.performance.memory
      ? E.performance.memory.usedJSHeapSize || 0
      : P.prototype.f.call(this)
  }
  dd.prototype.b = function() {
    return ed() && E.performance.memory
      ? E.performance.memory.jsHeapSizeLimit || 0
      : P.prototype.b.call(this)
  }
  function fd() {
    return (
      { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
        D.visibilityState ||
          D.webkitVisibilityState ||
          D.mozVisibilityState ||
          ""
      ] || 0
    )
  }
  function gd() {}
  gd.prototype.isVisible = function() {
    return 1 === fd()
  }
  var hd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/
  function id() {
    var a = u,
      b = [],
      c = null
    do {
      var d = a
      if (nc(d)) {
        var e = d.location.href
        c = (d.document && d.document.referrer) || null
      } else (e = c), (c = null)
      b.push(new jd(e || "", d))
      try {
        a = d.parent
      } catch (f) {
        a = null
      }
    } while (a && d != a)
    d = 0
    for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d
    d = u
    if (
      d.location &&
      d.location.ancestorOrigins &&
      d.location.ancestorOrigins.length == b.length - 1
    )
      for (a = 1; a < b.length; ++a)
        (e = b[a]),
          e.url ||
            ((e.url = d.location.ancestorOrigins[a - 1] || ""), (e.lb = !0))
    return b
  }
  function kd(a, b) {
    this.a = a
    this.b = b
  }
  function jd(a, b, c) {
    this.url = a
    this.s = b
    this.lb = !!c
    this.depth = null
  }
  function ld() {
    this.c = "&"
    this.f = !1
    this.b = {}
    this.h = 0
    this.a = []
  }
  function md(a, b) {
    var c = {}
    c[a] = b
    return [c]
  }
  function nd(a, b, c, d, e) {
    var f = []
    oc(a, function(g, h) {
      ;(g = od(g, b, c, d, e)) && f.push(h + "=" + g)
    })
    return f.join(b)
  }
  function od(a, b, c, d, e) {
    if (null == a) return ""
    b = b || "&"
    c = c || ",$"
    "string" == typeof c && (c = c.split(""))
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        for (var f = [], g = 0; g < a.length; g++)
          f.push(od(a[g], b, c, d + 1, e))
        return f.join(c[d])
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(nd(a, b, c, d, e + 1)) : "..."
      )
    return encodeURIComponent(String(a))
  }
  function pd(a, b, c, d) {
    a.a.push(b)
    a.b[b] = md(c, d)
  }
  function qd(a, b, c) {
    b = b + "//pagead2.googlesyndication.com" + c
    var d = rd(a) - c.length
    if (0 > d) return ""
    a.a.sort(function(k, q) {
      return k - q
    })
    c = null
    for (var e = "", f = 0; f < a.a.length; f++)
      for (var g = a.a[f], h = a.b[g], p = 0; p < h.length; p++) {
        if (!d) {
          c = null == c ? g : c
          break
        }
        var m = nd(h[p], a.c, ",$")
        if (m) {
          m = e + m
          if (d >= m.length) {
            d -= m.length
            b += m
            e = a.c
            break
          }
          a.f &&
            ((e = d),
            m[e - 1] == a.c && --e,
            (b += m.substr(0, e)),
            (e = a.c),
            (d = 0))
          c = null == c ? g : c
        }
      }
    a = ""
    null != c && (a = e + "trn=" + c)
    return b + a
  }
  function rd(a) {
    var b = 1,
      c
    for (c in a.b) b = c.length > b ? c.length : b
    return 3997 - b - a.c.length - 1
  }
  function sd() {
    this.b = new gd()
    this.a = ed() ? new dd() : new P()
  }
  sd.prototype.setInterval = function(a, b) {
    return E.setInterval(a, b)
  }
  sd.prototype.clearInterval = function(a) {
    E.clearInterval(a)
  }
  sd.prototype.setTimeout = function(a, b) {
    return E.setTimeout(a, b)
  }
  sd.prototype.clearTimeout = function(a) {
    E.clearTimeout(a)
  }
  function td(a) {
    Q()
    var b = K() || E
    xc(b, a, !1)
  }
  w(sd)
  function ud() {}
  function Q() {
    var a = ud.g()
    if (!a.a) {
      if (!E) throw Error("Context has not been set and window is undefined.")
      a.a = sd.g()
    }
    return a.a
  }
  w(ud)
  function vd(a) {
    a || (a = [])
    this.f = -1
    this.a = a
    a: {
      if ((a = this.a.length)) {
        --a
        var b = this.a[a]
        if (
          !(
            null === b ||
            "object" != typeof b ||
            Array.isArray(b) ||
            (Mb && b instanceof Uint8Array)
          )
        ) {
          this.c = a - -1
          this.b = b
          break a
        }
      }
      this.c = Number.MAX_VALUE
    }
  }
  va(vd, Lb)
  function wd(a) {
    this.f = a
    this.a = -1
    this.b = this.c = 0
  }
  function xd(a, b) {
    return function(c) {
      for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e]
      if (-1 < a.a) return b.apply(null, r(d))
      try {
        return (a.a = a.f.a.a()), b.apply(null, r(d))
      } finally {
        ;(a.c += a.f.a.a() - a.a), (a.a = -1), (a.b += 1)
      }
    }
  }
  function yd(a, b) {
    this.b = a
    this.c = b
    this.a = new wd(a)
  }
  function R() {
    this.i = void 0
    this.c = this.l = 0
    this.j = -1
    this.a = new Sc()
    M(N(this.a, "mv", Mc)).b = void 0 === Nc ? null : Nc
    N(this.a, "omid", L)
    M(N(this.a, "epoh", L))
    M(N(this.a, "epph", L))
    M(N(this.a, "umt", L)).b = void 0 === Lc ? null : Lc
    M(N(this.a, "phel", L))
    M(N(this.a, "phell", L))
    M(N(this.a, "oseid", sc))
    var a = this.a
    a.a.sloi || (a.a.sloi = new Rc())
    M(a.a.sloi)
    M(N(this.a, "xdi", L))
    M(N(this.a, "amp", L))
    M(N(this.a, "prf", L))
    M(N(this.a, "gtx", L))
    M(N(this.a, "mvp_lv", L))
    M(N(this.a, "eocm", L))
    M(N(this.a, "rxlist", L))
    this.f = new yd(Q(), this.a)
    this.b = null
    this.h = !1
  }
  w(R)
  function zd() {
    var a = "https:"
    E && E.location && "http:" === E.location.protocol && (a = "http:")
    this.b = a
    this.a = 0.01
    this.c = Math.random()
  }
  function Ad(a, b, c, d, e) {
    if ((d ? a.c : Math.random()) < (e || a.a))
      try {
        if (c instanceof ld) var f = c
        else
          (f = new ld()),
            oc(c, function(h, p) {
              var m = f,
                k = m.h++
              h = md(p, h)
              m.a.push(k)
              m.b[k] = h
            })
        var g = qd(f, a.b, "/pagead/gen_204?id=" + b + "&")
        g && td(g)
      } catch (h) {}
  }
  function Bd(a, b, c) {
    c = void 0 === c ? {} : c
    this.error = a
    this.context = b.context
    this.msg = b.message || ""
    this.id = b.id || "jserror"
    this.meta = c
  }
  var Cd = null
  function Dd() {
    var a = u.performance
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : ta()
  }
  function Ed() {
    var a = void 0 === a ? u : a
    return (a = a.performance) && a.now ? a.now() : null
  }
  function Fd(a, b, c) {
    this.label = a
    this.type = b
    this.value = c
    this.duration = 0
    this.uniqueId = Math.random()
    this.slotId = void 0
  }
  var S = u.performance,
    Gd = !!(S && S.mark && S.measure && S.clearMarks),
    Hd = Ma(function() {
      var a
      if ((a = Gd)) {
        var b
        if (null === Cd) {
          Cd = ""
          try {
            a = ""
            try {
              a = u.top.location.hash
            } catch (c) {
              a = u.location.hash
            }
            a && (Cd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
          } catch (c) {}
        }
        b = Cd
        a = !!b.indexOf && 0 <= b.indexOf("1337")
      }
      return a
    })
  function Id() {
    var a = K()
    this.b = []
    this.c = a || u
    var b = null
    a &&
      ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
      (this.b = a.google_js_reporting_queue),
      (b = a.google_measure_js_timing))
    this.a = Hd() || (null != b ? b : 1 > Math.random())
  }
  function Jd(a) {
    a &&
      S &&
      Hd() &&
      (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
      S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
  }
  Id.prototype.start = function(a, b) {
    if (!this.a) return null
    var c = Ed() || Dd()
    a = new Fd(a, b, c)
    b = "goog_" + a.label + "_" + a.uniqueId + "_start"
    S && Hd() && S.mark(b)
    return a
  }
  function Kd() {
    var a = Ld
    this.i = Md
    this.h = "jserror"
    this.f = !0
    this.b = null
    this.j = this.c
    this.a = void 0 === a ? null : a
  }
  function Nd(a, b, c) {
    return xd(R.g().f.a, function() {
      try {
        if (a.a && a.a.a) {
          var d = a.a.start(b.toString(), 3)
          var e = c()
          var f = a.a,
            g = d
          if (f.a && "number" === typeof g.value) {
            var h = Ed() || Dd()
            g.duration = h - g.value
            var p = "goog_" + g.label + "_" + g.uniqueId + "_end"
            S && Hd() && S.mark(p)
            !f.a || 2048 < f.b.length || f.b.push(g)
          }
        } else e = c()
      } catch (m) {
        f = a.f
        try {
          Jd(d), (f = a.j(b, new Od(Pd(m)), void 0, void 0))
        } catch (k) {
          a.c(217, k)
        }
        if (!f) throw m
      }
      return e
    })()
  }
  function Qd(a, b) {
    var c = Rd
    return xd(R.g().f.a, function(d) {
      for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f]
      return Nd(c, a, function() {
        return b.apply(void 0, e)
      })
    })
  }
  Kd.prototype.c = function(a, b, c, d, e) {
    e = e || this.h
    try {
      var f = new ld()
      f.f = !0
      pd(f, 1, "context", a)
      ;(b.error && b.meta && b.id) || (b = new Od(Pd(b)))
      b.msg && pd(f, 2, "msg", b.msg.substring(0, 512))
      var g = b.meta || {}
      if (this.b)
        try {
          this.b(g)
        } catch (v) {}
      if (d)
        try {
          d(g)
        } catch (v) {}
      b = [g]
      f.a.push(3)
      f.b[3] = b
      var h = id(),
        p = new jd(u.location.href, u, !1)
      b = null
      var m = h.length - 1
      for (d = m; 0 <= d; --d) {
        var k = h[d]
        !b && hd.test(k.url) && (b = k)
        if (k.url && !k.lb) {
          p = k
          break
        }
      }
      k = null
      var q = h.length && h[m].url
      0 != p.depth && q && (k = h[m])
      var n = new kd(p, k)
      n.b && pd(f, 4, "top", n.b.url || "")
      pd(f, 5, "url", n.a.url || "")
      Ad(this.i, e, f, !1, c)
    } catch (v) {
      try {
        Ad(
          this.i,
          e,
          { context: "ecmserr", rctx: a, msg: Pd(v), url: n && n.a.url },
          !1,
          c
        )
      } catch (xa) {}
    }
    return this.f
  }
  function Pd(a) {
    var b = a.toString()
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name)
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message)
    if (a.stack) {
      a = a.stack
      try {
        ;-1 == a.indexOf(b) && (a = b + "\n" + a)
        for (var c; a != c; )
          (c = a),
            (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"))
        b = a.replace(/\n */g, "\n")
      } catch (d) {}
    }
    return b
  }
  function Od(a) {
    Bd.call(this, Error(a), { message: a })
  }
  t(Od, Bd)
  var Md,
    Rd,
    Ld = new Id()
  function Sd() {
    var a = K()
    a &&
      "undefined" != typeof a.google_measure_js_timing &&
      !a.google_measure_js_timing &&
      ((a = Ld),
      (a.a = !1),
      a.b != a.c.google_js_reporting_queue &&
        (Hd() && x(a.b, Jd), (a.b.length = 0)))
  }
  ;(function() {
    Md = new zd()
    Rd = new Kd()
    var a = K()
    a &&
      a.document &&
      ("complete" == a.document.readyState
        ? Sd()
        : Ld.a &&
          Vb(a, "load", function() {
            Sd()
          }))
  })()
  function Td(a) {
    Rd.b = function(b) {
      x(a, function(c) {
        c(b)
      })
    }
  }
  function Ud(a, b) {
    return Nd(Rd, a, b)
  }
  function Vd(a, b) {
    return Qd(a, b)
  }
  function Wd(a, b) {
    Ad(Md, a, b, "jserror" != a, void 0)
  }
  function Xd(a, b, c, d) {
    Rd.c(a, b, c, d)
  }
  var Yd = Date.now(),
    Zd = -1,
    $d = -1,
    ae = !1
  function T() {
    return Date.now() - Yd
  }
  function be() {
    var a = R.g().i,
      b = 0 <= $d ? T() - $d : -1,
      c = ae ? T() - Zd : -1
    if (947190542 == a) return 100
    if (79463069 == a) return 200
    a = [2e3, 4e3]
    var d = [250, 500, 1e3]
    Xd(637, Error(), 0.001)
    var e = b
    ;-1 != c && c < b && (e = c)
    for (b = 0; b < a.length; ++b)
      if (e < a[b]) {
        var f = d[b]
        break
      }
    void 0 === f && (f = d[a.length])
    return f
  }
  function ce(a) {
    for (var b = 0, c = a, d = 0; a && a != a.parent; )
      (a = a.parent), d++, nc(a) && ((c = a), (b = d))
    return { s: c, level: b }
  }
  var Qa = {
    Pb: "addEventListener",
    Ub: "getMaxSize",
    Vb: "getScreenSize",
    Wb: "getState",
    Xb: "getVersion",
    bc: "removeEventListener",
    Zb: "isViewable",
  }
  function de(a) {
    var b = a !== a.top,
      c = a.top === ce(a).s,
      d = -1,
      e = 0
    if (b && c && a.top.mraid) {
      d = 3
      var f = a.top.mraid
    } else d = (f = a.mraid) ? (b ? (c ? 2 : 1) : 0) : -1
    f &&
      (f.IS_GMA_SDK || (e = 2),
      Pa(function(g) {
        return "function" === typeof f[g]
      }) || (e = 1))
    return { G: f, sa: e, Mb: d }
  }
  function ee(a) {
    return (a = a.document) && "function" === typeof a.elementFromPoint
  }
  if (D && D.URL) {
    var fe,
      rc = D.URL
    fe = !!rc && 0 < qc().length
    Rd.f = !fe
  }
  function ge(a, b, c, d) {
    var e = void 0 === e ? !1 : e
    c = Qd(d, c)
    Vb(a, b, c, { capture: e })
    return c
  }
  function he(a) {
    var b = []
    Na(a, function(c, d) {
      d = encodeURIComponent(d)
      "string" === typeof c && (c = encodeURIComponent(c))
      b.push(d + "=" + c)
    })
    b.push("24=" + Date.now())
    return b.join("\n")
  }
  var ie = 0
  function je(a) {
    var b = Math.pow(10, 2)
    return Math.floor(a * b) / b
  }
  function ke(a, b) {
    try {
      ie++, b.postMessage(a, "*")
    } catch (c) {}
  }
  function le(a, b) {
    b &&
      (a(b),
      b.frames &&
        x(b.frames, function(c) {
          le(a, c)
        }))
  }
  function me(a) {
    return new J(a.top, a.right, a.bottom, a.left)
  }
  function ne() {
    var a = Q().b
    return 0 === fd() ? -1 : a.isVisible() ? 0 : 1
  }
  function oe(a) {
    return [a.top, a.left, a.bottom, a.right].join("-")
  }
  function pe(a, b, c) {
    if (b && a)
      if (c && 0 < c.length)
        for (
          c = za(c, function(e) {
            var f = e.parent && e.parent !== e
            return e === E.top || f
          }),
            a = fa(c),
            c = a.next();
          !c.done;
          c = a.next()
        )
          ke(b, c.value)
      else {
        c = []
        var d = jc(a)
        d && c.push(d)
        if (0 === c.length)
          try {
            c = Aa(
              bc(document, "IFRAME".toString().toLowerCase(), void 0, a),
              function(e) {
                return jc(e)
              }
            )
          } catch (e) {}
        a = fa(c)
        for (c = a.next(); !c.done; c = a.next()) {
          c = c.value
          try {
            b && le(sa(ke, b), c)
          } catch (e) {}
        }
      }
  }
  function qe(a, b, c) {
    try {
      var d = he(b)
      pe(a, d, c)
    } catch (e) {}
  }
  function re() {
    var a = A
    return a
      ? Ca(
          "Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(
            ";"
          ),
          function(b) {
            return z(a, b)
          }
        ) ||
        (z(a, "OMI/") && !z(a, "XiaoMi/"))
        ? !0
        : z(a, "Presto") &&
          z(a, "Linux") &&
          !z(a, "X11") &&
          !z(a, "Android") &&
          !z(a, "Mobi")
      : !1
  }
  function se() {
    var a = A
    return (
      z(a, "AppleTV") || z(a, "Apple TV") || z(a, "CFNetwork") || z(a, "tvOS")
    )
  }
  function te() {
    var a = A
    return z(a, "sdk_google_atv_x86") || z(a, "Android TV")
  }
  function U() {
    this.c = !nc(E.top)
    var a
    if (!(a = !this.c)) {
      a: {
        a = E
        a = void 0 === a ? u : a
        var b = a.context || a.AMP_CONTEXT_DATA
        if (!b)
          try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
          } catch (d) {}
        try {
          if (b && b.pageViewId && b.canonicalUrl) {
            var c = b
            break a
          }
        } catch (d) {}
        c = null
      }
      a = !(!c || !c.observeIntersection)
    }
    this.A = a
    this.i =
      lc() ||
      (!lc() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile")))
    c = id()
    c =
      0 < c.length && null != c[c.length - 1] && null != c[c.length - 1].url
        ? ((c = c[c.length - 1].url.match(mc)[3] || null) ? decodeURI(c) : c) ||
          ""
        : ""
    this.domain = c
    this.a = new J(0, 0, 0, 0)
    this.j = new G(0, 0)
    this.h = new G(0, 0)
    this.b = new J(0, 0, 0, 0)
    this.l = new F(0, 0)
    this.u = this.m = !1
    this.f = !(!E || !de(E).G)
    ue(this)
  }
  function ve(a, b) {
    b && b.screen && (a.j = new G(b.screen.width, b.screen.height))
  }
  function we(a, b) {
    var c = a.a ? new G(tc(a.a), uc(a.a)) : new G(0, 0)
    b = void 0 === b ? E : b
    null !== b && b != b.top && (b = b.top)
    var d = 0,
      e = 0
    try {
      var f = b.document,
        g = f.body,
        h = f.documentElement
      if ("CSS1Compat" == f.compatMode && h.scrollHeight)
        (d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight),
          (e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth)
      else {
        var p = h.scrollHeight,
          m = h.scrollWidth,
          k = h.offsetHeight,
          q = h.offsetWidth
        h.clientHeight != k &&
          ((p = g.scrollHeight),
          (m = g.scrollWidth),
          (k = g.offsetHeight),
          (q = g.offsetWidth))
        p > c.height
          ? p > k
            ? ((d = p), (e = m))
            : ((d = k), (e = q))
          : p < k
          ? ((d = p), (e = m))
          : ((d = k), (e = q))
      }
      var n = new G(e, d)
    } catch (v) {
      n = new G(-12245933, -12245933)
    }
    a.h = n
  }
  function ue(a) {
    E &&
      E.document &&
      ((a.b = Ic(!1, E, a.i)), (a.a = Ic(!0, E, a.i)), we(a, E), ve(a, E))
  }
  function xe() {
    if (U.g().u) return !0
    var a = Q().b.isVisible(),
      b = 0 === fd()
    return a || b
  }
  w(U)
  var ye = new J(0, 0, 0, 0)
  function ze(a, b) {
    b = Ae(b)
    return 0 === b ? 0 : Ae(a) / b
  }
  function Ae(a) {
    return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
  }
  function Be(a, b) {
    if (!a || !b) return !1
    for (var c = 0; null !== a && 100 > c++; ) {
      if (a === b) return !0
      try {
        a: {
          var d = void 0
          if (
            Yb &&
            !(
              C &&
              Db("9") &&
              !Db("10") &&
              u.SVGElement &&
              a instanceof u.SVGElement
            ) &&
            (d = a.parentElement)
          ) {
            var e = d
            break a
          }
          d = a.parentNode
          e = ra(d) && 1 == d.nodeType ? d : null
        }
        if ((a = e || a)) {
          var f = H(a),
            g = f && fc(f),
            h = g && g.frameElement
          h && (a = h)
        }
      } catch (p) {
        break
      }
    }
    return !1
  }
  function Ce(a, b, c) {
    if (!a || !b) return !1
    b = wc(vc(a), -b.left, -b.top)
    a = (b.left + b.right) / 2
    b = (b.top + b.bottom) / 2
    var d = K()
    nc(d.top) && d.top && d.top.document && (d = d.top)
    if (!ee(d)) return !1
    a = d.document.elementFromPoint(a, b)
    if (!a) return !1
    b =
      (b = (b = H(c)) && b.defaultView && b.defaultView.frameElement) &&
      Be(b, a)
    d = a === c
    a =
      !d &&
      a &&
      kc(a, function(e) {
        return e === c
      })
    return !(b || d || a)
  }
  function De(a, b, c, d) {
    return U.g().c
      ? !1
      : 0 >= tc(a) || 0 >= uc(a)
      ? !0
      : c && d
      ? Ud(208, function() {
          return Ce(a, b, c)
        })
      : !1
  }
  function Ee(a, b, c) {
    var d = new J(0, 0, 0, 0)
    this.time = a
    this.volume = null
    this.c = b
    this.a = d
    this.b = c
  }
  function Fe(a, b, c, d, e, f, g) {
    this.j = a
    this.h = b
    this.c = c
    this.a = d
    this.f = e
    this.b = f
    this.i = g
  }
  function Ge(a) {
    this.c = a
    this.b = 0
    this.a = null
  }
  Ge.prototype.cancel = function() {
    Q().clearTimeout(this.a)
    this.a = null
  }
  function He(a) {
    var b = Q()
    a.a = b.setTimeout(
      xd(
        R.g().f.a,
        Vd(143, function() {
          a.b++
          a.c.zb()
        })
      ),
      be()
    )
  }
  function V(a, b, c) {
    this.s = a
    this.P = void 0 === c ? "na" : c
    this.f = []
    this.m = !1
    this.c = new Ee(-1, !0, this)
    this.a = this
    this.i = b
    this.u = this.l = !1
    this.F = "uk"
    this.I = !1
    this.j = !0
  }
  l = V.prototype
  l.X = function() {
    return !1
  }
  l.Ka = function() {
    return (this.m = !0)
  }
  l.W = function() {
    return this.a.F
  }
  l.ca = function() {
    return this.a.u
  }
  function Ie(a, b, c) {
    if (!a.u || (void 0 === c ? 0 : c))
      (a.u = !0), (a.F = b), (a.i = 0), a.a != a || Je(a)
  }
  l.C = function() {
    return this.a.P
  }
  l.L = function() {
    return this.a.fb()
  }
  l.fb = function() {
    return {}
  }
  l.M = function() {
    return this.a.i
  }
  function Ke(a, b) {
    Ga(a.f, b) || (a.f.push(b), b.ba(a.a), b.S(a.c), b.T() && (a.l = !0))
  }
  l.Oa = function() {
    var a = U.g()
    a.a = Ic(!0, this.s, a.i)
  }
  l.Pa = function() {
    ve(U.g(), this.s)
  }
  l.rb = function() {
    we(U.g(), this.s)
  }
  l.sb = function() {
    var a = U.g()
    a.b = Ic(!1, this.s, a.i)
  }
  l.Ia = function() {
    return this.c.a
  }
  function Le(a) {
    a = a.a
    a.Pa()
    a.Oa()
    a.sb()
    a.rb()
    a.c.a = a.Ia()
  }
  l.zb = function() {}
  function Me(a) {
    a.l = a.f.length
      ? Ca(a.f, function(b) {
          return b.T()
        })
      : !1
  }
  function Ne(a) {
    var b = Ia(a.f)
    x(b, function(c) {
      c.S(a.c)
    })
  }
  function Je(a) {
    var b = Ia(a.f)
    x(b, function(c) {
      c.ba(a.a)
    })
    a.a != a || Ne(a)
  }
  l.ba = function(a) {
    var b = this.a
    this.a = a.M() >= this.i ? a : this
    b !== this.a
      ? ((this.j = this.a.j), Je(this))
      : this.j !== this.a.j && ((this.j = this.a.j), Je(this))
  }
  l.S = function(a) {
    if (a.b === this.a) {
      var b = this.c,
        c = this.l
      if ((c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c))
        (b = b.a),
          (c = a.a),
          (c =
            b == c
              ? !0
              : b && c
              ? b.top == c.top &&
                b.right == c.right &&
                b.bottom == c.bottom &&
                b.left == c.left
              : !1)
      this.c = a
      !c && Ne(this)
    }
  }
  l.T = function() {
    return this.l
  }
  l.B = function() {
    this.I = !0
  }
  l.da = function() {
    return this.I
  }
  function Oe(a, b, c, d) {
    this.c = a
    this.a = new J(0, 0, 0, 0)
    this.l = new J(0, 0, 0, 0)
    this.b = b
    this.D = c
    this.F = d
    this.A = !1
    this.timestamp = -1
    this.h = new Fe(b.c, this.a, new J(0, 0, 0, 0), 0, 0, T(), 0)
  }
  l = Oe.prototype
  l.wa = function() {
    return !0
  }
  l.N = function() {}
  l.Ga = function() {
    if (this.c) {
      var a = this.c,
        b = this.b.a.s
      try {
        try {
          var c = me(a.getBoundingClientRect())
        } catch (m) {
          c = new J(0, 0, 0, 0)
        }
        var d = c.right - c.left,
          e = c.bottom - c.top,
          f = Cc(a, b),
          g = f.x,
          h = f.y
        var p = new J(
          Math.round(h),
          Math.round(g + d),
          Math.round(h + e),
          Math.round(g)
        )
      } catch (m) {
        p = vc(ye)
      }
      this.a = p
    }
  }
  l.Za = function() {
    this.l = this.b.c.a
  }
  l.R = function() {
    this.Ga()
    this.h = new Fe(
      this.b.c,
      this.a,
      this.h.c,
      this.h.a,
      this.h.f,
      T(),
      this.h.i
    )
  }
  l.B = function() {
    if (!this.da()) {
      var a = this.b,
        b = a.f,
        c = ya(b, this)
      0 <= c && Array.prototype.splice.call(b, c, 1)
      a.l && this.T() && Me(a)
      this.N()
      this.A = !0
    }
  }
  l.da = function() {
    return this.A
  }
  l.L = function() {
    return this.b.L()
  }
  l.M = function() {
    return this.b.M()
  }
  l.W = function() {
    return this.b.W()
  }
  l.ca = function() {
    return this.b.ca()
  }
  l.ba = function() {}
  l.S = function() {
    this.R()
  }
  l.T = function() {
    return this.F
  }
  function Pe(a) {
    this.h = !1
    this.a = a
    this.f = oa
  }
  l = Pe.prototype
  l.M = function() {
    return this.a.M()
  }
  l.W = function() {
    return this.a.W()
  }
  l.ca = function() {
    return this.a.ca()
  }
  l.create = function(a, b, c) {
    var d = null
    this.a && ((d = this.Ha(a, b, c)), Ke(this.a, d))
    return d
  }
  l.pb = function() {
    return this.va()
  }
  l.va = function() {
    return !1
  }
  l.jb = function(a) {
    return this.a.Ka() ? (Ke(this.a, this), (this.f = a), !0) : !1
  }
  l.ba = function(a) {
    0 == a.M() && this.f(a.W(), this)
  }
  l.S = function() {}
  l.T = function() {
    return !1
  }
  l.B = function() {
    this.h = !0
  }
  l.da = function() {
    return this.h
  }
  l.L = function() {
    return {}
  }
  function Qe(a, b, c) {
    this.c = void 0 === c ? 0 : c
    this.b = a
    this.a = null == b ? "" : b
  }
  function Re(a) {
    switch (Math.trunc(a.c)) {
      case -16:
        return -16
      case -8:
        return -8
      case 0:
        return 0
      case 8:
        return 8
      case 16:
        return 16
      default:
        return 16
    }
  }
  function Se(a, b) {
    return a.c < b.c
      ? !0
      : a.c > b.c
      ? !1
      : a.b < b.b
      ? !0
      : a.b > b.b
      ? !1
      : typeof a.a < typeof b.a
      ? !0
      : typeof a.a > typeof b.a
      ? !1
      : a.a < b.a
  }
  function Te() {
    this.c = 0
    this.a = []
    this.b = !1
  }
  Te.prototype.add = function(a, b, c) {
    ++this.c
    a = new Qe(a, b, c)
    this.a.push(new Qe(a.b, a.a, a.c + this.c / 4096))
    this.b = !0
    return this
  }
  function Ue(a, b) {
    x(b.a, function(c) {
      a.add(c.b, c.a, Re(c))
    })
  }
  function Ve(a, b) {
    var c = void 0 === c ? 0 : c
    var d = void 0 === d ? !0 : d
    oc(b, function(e, f) {
      ;(d && void 0 === e) || a.add(f, e, c)
    })
  }
  function We(a) {
    var b = Xe
    a.b &&
      (Ja(a.a, function(c, d) {
        return Se(d, c) ? 1 : Se(c, d) ? -1 : 0
      }),
      (a.b = !1))
    return Ba(
      a.a,
      function(c, d) {
        d = b(d)
        return "" + c + ("" != c && "" != d ? "&" : "") + d
      },
      ""
    )
  }
  function Xe(a) {
    var b = a.b
    a = a.a
    return "" === a
      ? b
      : "boolean" === typeof a
      ? a
        ? b
        : ""
      : Array.isArray(a)
      ? 0 === a.length
        ? b
        : b + "=" + a.join()
      : b + "=" + (Ga(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
  }
  function Ye(a) {
    var b = void 0 === b ? !0 : b
    this.a = new Te()
    void 0 !== a && Ue(this.a, a)
    b && this.a.add("v", Sb, -16)
  }
  Ye.prototype.toString = function() {
    var a = "//pagead2.googlesyndication.com//pagead/gen_204",
      b = We(this.a)
    0 < b.length && (a += "?" + b)
    return a
  }
  function Ze(a) {
    var b = [],
      c = []
    Na(a, function(d, e) {
      if (!(e in Object.prototype) && "undefined" != typeof d)
        switch (
          (Array.isArray(d) && (d = d.join(",")), (d = [e, "=", d].join("")), e)
        ) {
          case "adk":
          case "r":
          case "tt":
          case "error":
          case "mtos":
          case "tos":
          case "p":
          case "bs":
            b.unshift(d)
            break
          case "req":
          case "url":
          case "referrer":
          case "iframe_loc":
            c.push(d)
            break
          default:
            b.push(d)
        }
    })
    return b.concat(c)
  }
  function $e() {
    if (Sb && "unreleased" !== Sb) return Sb
  }
  function af() {
    this.a = 0
  }
  w(af)
  function bf(a) {
    this.m = a
    this.l = !1
  }
  bf.prototype.i = function(a, b) {
    this.a = a
    this.b = b
  }
  function cf() {
    bf.call(this, "capability")
  }
  t(cf, bf)
  cf.prototype.j = function() {
    return !0
  }
  cf.prototype.h = function() {
    var a = {}
    return (a.b_name = this.a.U), (a.v_name = this.b.U), a
  }
  function df() {
    bf.call(this, "diff")
  }
  t(df, bf)
  df.prototype.j = function() {
    return !(0.02 >= Math.abs(this.b.o - this.a.o))
  }
  df.prototype.h = function() {
    var a = {}
    return (
      (a.b_name = this.a.U),
      (a.v_name = this.b.U),
      (a.b_vp_off = JSON.stringify(this.a.H)),
      (a.v_vp_off = JSON.stringify(this.b.H)),
      (a.b_vp_sz = JSON.stringify(this.a.Ta)),
      (a.v_vp_sz = JSON.stringify(this.b.Ta)),
      (a.b_exp = this.a.o),
      (a.v_exp = this.b.o),
      (a.efp_occ = this.a.Cb),
      (a.sbv = this.a.ga),
      a
    )
  }
  function ef() {
    bf.call(this, "capt")
    this.f = []
    this.c = []
  }
  t(ef, bf)
  ef.prototype.i = function(a, b) {
    bf.prototype.i.call(this, a, b)
    20 <= this.c.length || (this.f.push(a.o), this.c.push(b.o))
  }
  ef.prototype.j = function() {
    return 20 === this.c.length
  }
  ef.prototype.h = function() {
    var a = ff(this.f, this.c),
      b = gf(this.f, this.c),
      c = {}
    return (
      (c.b_name = this.a.U),
      (c.v_name = this.b.U),
      (c.b_exp = this.f.join(",")),
      (c.v_exp = this.c.join(",")),
      (c.diff = a),
      (c.diff_buckets = b),
      c
    )
  }
  function ff(a, b) {
    return Da(La(a, b), function(c) {
      return c[0] !== c[1]
    })
  }
  function gf(a, b) {
    function c(d) {
      return 0.25 * Math.floor(d / 0.25)
    }
    return ff(Aa(a, c), Aa(b, c))
  }
  function hf(a, b, c, d, e) {
    e = void 0 === e ? [new cf(), new df(), new ef()] : e
    I.call(this)
    this.a = a.Ha(b, c, this.T())
    this.a.wa()
    this.c = e
    this.b = d
  }
  t(hf, I)
  hf.prototype.V = function() {
    this.a && (this.a.N(), this.a.B())
  }
  function jf(a, b, c) {
    x(a.c, function(d) {
      var e = a.b
      if (!d.l && (d.i(b, c), d.j())) {
        d.l = !0
        var f = d.h(),
          g = new Te()
        g.add("id", "av-js")
        g.add("type", "verif")
        g.add("vtype", d.m)
        d = af.g()
        g.add("i", d.a++)
        g.add("adk", e)
        Ve(g, f)
        e = new Ye(g)
        var h = void 0 === h ? 4e3 : h
        e = e.toString()
        ;/&v=[^&]+/.test(e) ||
          (e = (f = $e()) ? e + "&v=" + encodeURIComponent(f) : e)
        e = e.substring(0, h)
        td(e)
      }
    })
  }
  hf.prototype.S = function() {}
  hf.prototype.ba = function() {}
  hf.prototype.T = function() {
    return !1
  }
  function kf() {
    this.a = this.b = this.c = 0
  }
  function lf(a, b, c, d) {
    b && ((a.c += c), (a.b += c), (a.a = Math.max(a.a, a.b)))
    if (void 0 === d ? !b : d) a.b = 0
  }
  var mf = [1, 0.75, 0.5, 0.3, 0]
  function nf(a) {
    this.a = a = void 0 === a ? mf : a
    this.b = Aa(this.a, function() {
      return new kf()
    })
  }
  function of(a) {
    return pf(
      a,
      function(b) {
        return b.c
      },
      !1
    )
  }
  function qf(a) {
    return pf(
      a,
      function(b) {
        return b.a
      },
      !0
    )
  }
  function rf(a, b, c, d, e, f) {
    var g = void 0 === g ? !0 : g
    c = f ? Math.min(b, c) : c
    for (f = 0; f < a.a.length; f++) {
      var h = a.a[f],
        p = 0 < c && c >= h
      h = !(0 < b && b >= h) || d
      lf(a.b[f], g && p, e, !g || h)
    }
  }
  function pf(a, b, c) {
    a = Aa(a.b, function(d) {
      return b(d)
    })
    return c ? a : sf(a)
  }
  function sf(a) {
    return Aa(a, function(b, c, d) {
      return 0 < c ? d[c] - d[c - 1] : d[c]
    })
  }
  function tf() {
    this.a = new nf()
    this.c = new kf()
    this.b = -1
    this.f = new nf([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0])
  }
  function W(a) {
    return 1e3 <= a.c.a
  }
  var uf = new J(0, 0, 0, 0)
  function vf(a, b, c) {
    I.call(this)
    this.Ob = vc(uf)
    this.c = new tf()
    this.ja = -2
    Date.now()
    this.Ab = -1
    this.vb = b
    this.ia = null
    this.J = !1
    this.H = null
    this.Z = -1
    this.pa = c
    this.Bb = this.Da = oa
    this.b = new ad()
    this.b.b = a
    this.b.a = a
    this.l = !1
    this.i = { ya: null, xa: null }
    this.$ = !0
    this.F = null
    R.g().l++
    this.f = new Kc()
    this.yb = this.ra = -1
    this.Ca = 0
    this.P = -1
    this.a = null
    this.Fa = new J(0, 0, 0, 0)
    this.tb = !1
    a = this.h = new Sc()
    N(a, "od", Jc)
    M(N(a, "opac", L))
    M(N(a, "sbeos", L))
    M(N(a, "prf", L))
    M(N(a, "mwt", L))
    N(a, "iogeo", L)
    M(N(a, "xefpls", L))
    ;(a = this.b.b) &&
      a.getAttribute &&
      $c(a, "googleAvInapp") &&
      (U.g().f = !0)
    1 == this.pa ? Tc(this.h, "od", 1) : Tc(this.h, "od", 0)
  }
  t(vf, I)
  l = vf.prototype
  l.V = function() {
    wf(this)
    this.F && this.F.B()
    this.a && this.a.B()
    delete this.c
    delete this.Da
    delete this.Bb
    delete this.b.b
    delete this.b.a
    delete this.i
    delete this.F
    delete this.a
    delete this.h
    I.prototype.V.call(this)
  }
  function xf(a) {
    return a.a ? a.a.a : a.Ob
  }
  l.Na = function(a) {
    var b = R.g()
    "string" === typeof a && 0 != a.length && Vc(b.a, a)
  }
  l.qb = function() {
    return !1
  }
  l.fa = function() {
    this.J = !0
  }
  l.ua = function() {
    return this.J
  }
  l.Qa = function() {
    this.f.o = 0
  }
  function yf(a, b) {
    if (a.a) {
      if (b.C() === a.a.C()) return
      a.a.B()
      a.a = null
    }
    b = b.create(a.b.a, a.h, a.qb())
    if ((b = null != b && b.wa() ? b : null)) a.a = b
  }
  function zf(a, b, c) {
    if (a.a) {
      a.a.R()
      var d = a.a.h,
        e = d.j,
        f = e.a
      if (null != d.c) {
        var g = d.h
        a.H = new F(g.left - f.left, g.top - f.top)
        a.Fa = d.c
      }
      f = a.ga() ? Math.max(d.a, d.f) : d.a
      g = {}
      null !== e.volume && (g.volume = e.volume)
      a.ia && -1 != a.vb && -1 !== d.b && -1 !== a.ia.b
        ? ((e = d.b - a.ia.b), (e = 1e4 < e ? 0 : e))
        : (e = 0)
      a.ia = d
      a.Ra(f, b, c, !1, g, e, d.i)
    }
  }
  function Af(a) {
    if (a.ua() && a.F) {
      var b = 1 == O(a.h, "od"),
        c = U.g().a,
        d = a.F,
        e = new G(tc(c), uc(c))
      c = a.ga()
      a = { U: a.a ? a.a.C() : "ns", H: a.H, Ta: e, ga: c, o: a.f.o, Cb: b }
      if ((b = d.a)) {
        b.R()
        e = b.h
        var f = e.j.a,
          g = null,
          h = null
        null != e.c &&
          f &&
          ((g = e.h),
          (g = new F(g.left - f.left, g.top - f.top)),
          (h = new G(f.right - f.left, f.bottom - f.top)))
        c = {
          U: b.C(),
          H: g,
          Ta: h,
          ga: c,
          Cb: !1,
          o: c ? Math.max(e.a, e.f) : e.a,
        }
      } else c = null
      c && jf(d, a, c)
    }
  }
  l.Ra = function(a, b, c, d, e, f, g) {
    this.l ||
      (this.ua() &&
        ((e = new Kc()),
        (e.c = c),
        (e.b = ne()),
        (e.o = 0 === this.Z && 1 === O(this.h, "opac") ? 0 : a),
        (e.a = this.ea()),
        (e.f = g),
        (a = this.c),
        (c = this.f),
        (d = d && this.f.o >= (this.ea() ? 0.3 : 0.5)),
        (a.b = Math.max(a.b, e.o)),
        rf(a.f, e.f, c.f, e.c, f, d),
        rf(a.a, e.o, c.o, e.c, f, d),
        (d = d || c.a != e.a ? c.isVisible() && e.isVisible() : c.isVisible()),
        (c = !e.isVisible() || e.c),
        lf(a.c, d, f, c),
        (this.vb = b),
        0 < e.o && (-1 === this.ra && (this.ra = b), (this.yb = b)),
        -1 == this.Ab && W(this.c) && (this.Ab = b),
        -2 == this.ja && (this.ja = Ae(xf(this)) ? e.o : -1),
        (this.f = e)),
      this.Da(this))
  }
  l.ea = function() {
    return !1
  }
  l.ga = function() {
    return this.tb || !1
  }
  function Bf(a) {
    a.b.a &&
      ((a.i.ya = ge(
        a.b.a,
        "mouseover",
        function() {
          var b = T()
          a.P = b
        },
        149
      )),
      (a.i.xa = ge(
        a.b.a,
        "mouseout",
        function() {
          var b = T()
          ;-1 == a.P || b < a.P || (a.Ca += b - a.P)
          a.P = -1
        },
        150
      )))
  }
  function wf(a) {
    a.b.a &&
      (a.i.ya && (Wb(a.b.a, "mouseover", a.i.ya), (a.i.ya = null)),
      a.i.xa && (Wb(a.b.a, "mouseout", a.i.xa), (a.i.xa = null)))
  }
  function Cf() {
    Df(this)
  }
  function Df(a) {
    a.a ||
      "function" !== typeof E.Goog_AdSense_getAdAdapterInstance ||
      (a.a = E.Goog_AdSense_getAdAdapterInstance())
    a.b ||
      "function" !== typeof E.Goog_Common_getAdAdapterInstance ||
      (a.b = E.Goog_Common_getAdAdapterInstance())
    !a.c && ac() && (a.c = !0)
  }
  function Ef(a, b, c, d) {
    Df(a)
    var e = U.g().m
    a.a && a.a.getNewBlocks(b, e)
    a.b && a.b.getNewBlocks(b, e)
    a.c && !c() && (d(!0), b(ac(), "", 13, !0))
  }
  function Ff(a) {
    Df(a)
    return (
      (a.a ? a.a.numBlocks() : 0) + (a.b ? a.b.numBlocks() : 0) + (a.c ? 1 : 0)
    )
  }
  function Gf(a) {
    Df(a)
    return a.a ? a.a.getOseId() : a.b ? a.b.getOseId() : 0
  }
  function Hf(a) {
    return db()
      ? ((a = (a = H(a)) && fc(a)),
        !!(
          a &&
          a.location &&
          a.location.ancestorOrigins &&
          0 < a.location.ancestorOrigins.length &&
          a.location.origin == a.location.ancestorOrigins[0]
        ))
      : !0
  }
  var If =
    "StopIteration" in u
      ? u.StopIteration
      : { message: "StopIteration", stack: "" }
  function Jf() {}
  Jf.prototype.next = function() {
    throw If
  }
  Jf.prototype.Ua = function() {
    return this
  }
  function Kf(a) {
    if (a instanceof Jf) return a
    if ("function" == typeof a.Ua) return a.Ua(!1)
    if (qa(a)) {
      var b = 0,
        c = new Jf()
      c.next = function() {
        for (;;) {
          if (b >= a.length) throw If
          if (b in a) return a[b++]
          b++
        }
      }
      return c
    }
    throw Error("Not implemented")
  }
  function Lf(a, b) {
    if (qa(a))
      try {
        x(a, b, void 0)
      } catch (c) {
        if (c !== If) throw c
      }
    else {
      a = Kf(a)
      try {
        for (;;) b.call(void 0, a.next(), void 0, a)
      } catch (c) {
        if (c !== If) throw c
      }
    }
  }
  function Mf(a, b) {
    var c = 1
    Lf(a, function(d) {
      c = b.call(void 0, c, d)
    })
    return c
  }
  function Nf(a, b) {
    var c = Kf(a)
    a = new Jf()
    a.next = function() {
      var d = c.next()
      if (b.call(void 0, d, void 0, c)) return d
      throw If
    }
    return a
  }
  function Of(a) {
    var b = Kf(a)
    a = new Jf()
    var c = 100
    a.next = function() {
      if (0 < c--) return b.next()
      throw If
    }
    return a
  }
  function Pf(a, b) {
    this.c = b
    this.b = null == a
    this.a = a
  }
  t(Pf, Jf)
  Pf.prototype.next = function() {
    if (this.b) throw If
    var a = this.a || null
    this.b = null == a
    var b
    if ((b = a)) {
      b = this.c
      if (
        pb(a, "parentElement") &&
        null != a.parentElement &&
        a != a.parentElement
      )
        var c = a.parentElement
      else if (b) {
        var d = void 0 === d ? Hf : d
        if (d(a))
          try {
            var e = H(a),
              f = e && fc(e),
              g = f && f.frameElement
            c = null == g ? null : g
          } catch (h) {
            c = null
          }
        else c = null
      } else c = null
      b = c
    }
    this.a = b
    return a
  }
  function Qf(a) {
    var b = 1
    a = Of(new Pf(a, !0))
    a = Nf(a, function() {
      return 0 < b
    })
    return Mf(a, function(c, d) {
      var e = 1
      if (pb(d, "style") && d.style) {
        var f = parseFloat
        a: {
          var g = H(d)
          if (
            g.defaultView &&
            g.defaultView.getComputedStyle &&
            (g = g.defaultView.getComputedStyle(d, null))
          ) {
            g = g.opacity || g.getPropertyValue("opacity") || ""
            break a
          }
          g = ""
        }
        if (!g) {
          g = d.style[gb()]
          if ("undefined" !== typeof g) d = g
          else {
            g = d.style
            var h = Ac.opacity
            if (!h) {
              var p = gb()
              h = p
              void 0 === d.style[p] &&
                ((p =
                  (vb ? "Webkit" : ub ? "Moz" : C ? "ms" : sb ? "O" : null) +
                  ib(p)),
                void 0 !== d.style[p] && (h = p))
              Ac.opacity = h
            }
            d = g[h] || ""
          }
          g = d
        }
        f = f(g)
        "number" !== typeof f || isNaN(f) || (e = f)
      }
      return (b = c * e)
    })
  }
  function Rf(a, b, c, d, e, f, g) {
    f = void 0 === f ? oa : f
    g = void 0 === g ? [] : g
    vf.call(this, c, d, e)
    this.Aa = b
    this.Ba = this.m = 0
    this.ib = null
    this.gb = this.$a = ""
    this.bb = []
    this.cb = []
    this.Xa = this.eb = ""
    this.ob = !1
    this.u = 4
    this.wb = !1
    this.Y = []
    this.I = this.j = ""
    this.ub = this.Ya = this.nb = !1
    this.ha = 0
    this.aa = this.mb = ne()
    this.ma = 0
    this.Nb = f
    this.xb = !1
    this.ka = this.Ea = this.za = this.qa = this.A = -1
    this.D = {}
    this.na = g
    Sf(this, this.b.b)
    Xc(R.g().a, this.Aa)
  }
  t(Rf, vf)
  function Tf(a, b, c) {
    return (a = String(a[b] || Zc(a, c) || "")) ? a.split("|") : []
  }
  function Sf(a, b) {
    if (b) {
      if (0 == a.m)
        if (a.b.b) {
          var c = a.b.b._adk_
          c ||
            (c =
              (c = Zc(a.b.b, "googleAvAdk")) && !/[^0-9]/.test(c)
                ? parseInt(c, 10)
                : 0)
        } else c = 0
      else c = a.m
      a.m = c
      "" == a.$a && (a.$a = String(b._avi_ || ""))
      "" == a.gb &&
        (a.gb = b._avihost_
          ? String(b._avihost_)
          : "pagead2.googlesyndication.com")
      a.bb.length || (a.bb = Tf(b, "_avicxn_", "googleAvCxn"))
      a.cb.length || (a.cb = Tf(b, "_avieoscxn_", "googleEOSAvCxn"))
      "" == a.eb &&
        (a.eb = String(b._aviextcxn_ || Zc(b, "googleAvExtCxn") || ""))
      "" == a.Xa && (a.Xa = String(b._cid_ || ""))
      a.ob || (a.ob = !!b._imm_ || $c(b, "googleAvImmediate"))
      "" == a.I && (a.I = String(b._cvu_ || Zc(b, "googleAvCpmav") || ""))
      "" == a.j && (a.j = String(Zc(b, "googleAvBtr") || ""))
      a.Na(String(b._avm_ || Zc(b, "googleAvMetadata") || ""))
    }
  }
  l = Rf.prototype
  l.V = function() {
    delete this.Y
    delete this.na
    vf.prototype.V.call(this)
  }
  function Uf(a, b, c) {
    x(a.na, function(d) {
      return d.a(a, c, b)
    })
  }
  l.ua = function() {
    return this.J && !(1 == this.ma || 3 == this.ma)
  }
  l.Qa = function() {
    vf.prototype.Qa.call(this)
    this.Fa = new J(0, 0, 0, 0)
  }
  l.fa = function() {
    this.J ||
      ((this.za = Dd()),
      Vf(this, !1, this.ja),
      null != this.j && "" != this.j && (yc(this.j), (this.j = "")))
    vf.prototype.fa.call(this)
    Wf(this)
  }
  function Wf(a) {
    if (a.J && u == u.top) {
      var b = u.pageYOffset
      null != b && (a.ka = Math.max(b, a.ka))
      Uf(a, 4, {})
    }
  }
  function Xf(a) {
    return new bd(a.m, a.ib)
  }
  l.Na = function(a) {
    if ("string" === typeof a && 0 != a.length) {
      var b = new Sc(),
        c = R.g()
      N(b, "omid", L)
      Vc(b, a)
      b = O(b, "omid")
      null !== b && (c.a.b.omid = b)
      a = Vc(this.h, a)
      c = a.split("&")
      for (b = 0; b < c.length; b++) {
        var d = c[b]
        "ts=0" == d
          ? (this.$ = !1)
          : 0 == d.lastIndexOf("la=", 0)
          ? ((d = d.split("=")[1]),
            "0" == d ? (this.ha = 2) : "1" == d && (this.ha = 1))
          : 0 == d.lastIndexOf("cr=", 0)
          ? "1" == d.split("=")[1] && (this.tb = !0)
          : "adf=1" == d && (this.xb = !0)
      }
      this.f.a = this.ea()
      vf.prototype.Na.call(this, a)
    }
  }
  l.Ra = function(a, b, c, d, e, f, g) {
    var h = W(this.c),
      p = Math.floor(100 * this.f.o)
    this.ha = 242500 <= Ae(xf(this)) ? 1 : 2
    vf.prototype.Ra.call(this, a, b, c, d, e, f, g)
    ;-1 == this.aa && -1 != this.f.b
      ? (this.aa = this.f.b)
      : 0 == this.aa && 1 == this.f.b && (this.aa = 1)
    a = W(this.c)
    b = Math.floor(100 * this.f.o)
    ;((!h && a) || b != p) && Vf(this, a, b)
    try {
      this.Z = Qf(this.b.a)
    } catch (m) {}
    Wf(this)
  }
  l.ea = function() {
    return wb ? !1 : 1 == this.ha
  }
  function Yf(a, b, c, d) {
    d = void 0 === d ? {} : d
    var e = {},
      f = U.g(),
      g = Uc(a.h),
      h = f.l,
      p = xf(a)
    g.p = [p.top + h.y, p.left + h.x, p.bottom + h.y, p.right + h.x]
    h = a.c
    g.tos = of(h.a)
    g.mtos = qf(h.a)
    g.mcvt = h.c.a
    g.rs = a.pa
    ;(p = 5 == a.pa) || (g.ht = a.Ca)
    0 <= a.ra && ((g.tfs = a.ra), (g.tls = a.yb))
    g.mc = je(h.b)
    g.lte = je(a.ja)
    g.bas = a.mb
    g.bac = a.aa
    f.c && (g["if"] = a.l ? 0 : 1)
    g.met = a.b.c
    p && a.Aa && (g.req = encodeURIComponent(a.Aa).substring(0, 100))
    a.ub && (g.ci = "1")
    a.ea() && (g.la = "1")
    g.avms = a.a ? a.a.C() : "ns"
    a.a && y(g, a.a.L())
    0 != a.ma && (g.md = a.ma)
    g.btr = null != a.j && "" != a.j ? 1 : 0
    g.cpmav = Zf(a) ? 1 : 0
    g.lm = a.u
    y(g, $f(a))
    d && y(g, d)
    g.adk = a.m
    a.xb && a.Ba && (g.adf = a.Ba)
    d = a.l
    f = R.g()
    !c && d && f.b && (c = f.b)
    c && (g.r = c)
    0 === a.Z && (g.invis = 1)
    c = Ze(g).join("&")
    e[3] = c
    e[11] = d
    e[29] = R.g().c
    e[0] = b
    e[7] = a.f.o
    e[9] = oe(a.Fa)
    e[28] = a.pa
    e[32] = a.a ? a.a.C() : "ns"
    e[5] = W(a.c) && 4 != a.u
    e[13] = qf(a.c.a).join(",")
    e[18] = 0 == Ae(xf(a))
    null != a.H && ((e[20] = a.H.y), (e[21] = a.H.x))
    b = U.g()
    null != b.b && ((e[22] = tc(b.b)), (e[23] = uc(b.b)))
    null != b.a && ((e[30] = tc(b.a)), (e[31] = uc(b.a)), (e[38] = oe(b.a)))
    c = b.l
    g = xf(a)
    e[37] = oe(new J(g.top + c.y, g.right + c.x, g.bottom + c.y, g.left + c.x))
    b.h && ((b = b.h), (e[39] = b.width + "-" + b.height))
    ;-1 != a.Z && (e[25] = a.Z)
    if ((a = Xf(a))) a.b && (e[4] = a.b), a.a && (e[12] = a.a)
    return e
  }
  function $f(a) {
    var b = a.A
    var c = a.A
    c = -1 == c || a.qa < c ? -1 : a.qa - c
    var d = -1 == a.A || a.za < a.A ? -1 : a.za - a.A,
      e = ag(a),
      f = {}
    return (
      (f.rst = 0 < b ? b : void 0),
      (f.dlt = 0 <= c ? c : void 0),
      (f.rpt = 0 <= d ? d : void 0),
      (f.isd = 0 <= a.Ea ? a.Ea : void 0),
      (f.msd = 0 <= a.ka ? a.ka : void 0),
      (f.ext = e ? e : void 0),
      f
    )
  }
  function Zf(a) {
    return null != a.I && null != a.I.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)
  }
  function ag(a) {
    return a.D && 0 < pc(a.D).length
      ? encodeURIComponent(
          Aa(pc(a.D), function(b) {
            return b + "=" + a.D[b]
          }).join("&")
        )
      : null
  }
  function bg(a, b) {
    b &&
      oc(b, function(c, d) {
        null == c ? delete a.D[d] : (a.D[d] = c)
      })
  }
  function Vf(a, b, c) {
    if ((b = a.Nb(b, c))) bg(a, b), Uf(a, 3, {})
  }
  l.qb = function() {
    return !1
  }
  function cg(a, b, c, d) {
    Oe.call(this, a, b, c, d)
  }
  t(cg, Oe)
  cg.prototype.kb = function(a) {
    return De(a, this.l, this.c, 1 == O(this.D, "od"))
  }
  cg.prototype.R = function() {
    this.timestamp = T()
    this.Ga()
    this.Za()
    var a = this.a
    var b = this.l
    a =
      a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom
        ? new J(
            Math.max(a.top, b.top),
            Math.min(a.right, b.right),
            Math.min(a.bottom, b.bottom),
            Math.max(a.left, b.left)
          )
        : new J(0, 0, 0, 0)
    b = a.top >= a.bottom || a.left >= a.right ? new J(0, 0, 0, 0) : a
    a = this.b.c
    var c = 0,
      d = 0,
      e = 0
    0 < (this.a.bottom - this.a.top) * (this.a.right - this.a.left) &&
      (this.kb(b)
        ? (b = new J(0, 0, 0, 0))
        : ((c = U.g().j),
          (e = new J(0, c.height, c.width, 0)),
          (c = ze(b, this.a)),
          (d = ze(b, U.g().a)),
          (e = ze(b, e))))
    b =
      b.top >= b.bottom || b.left >= b.right
        ? new J(0, 0, 0, 0)
        : wc(b, -this.a.left, -this.a.top)
    xe() || (d = c = 0)
    this.h = new Fe(a, this.a, b, c, d, this.timestamp, e)
  }
  cg.prototype.C = function() {
    return this.b.C()
  }
  function dg(a) {
    var b = []
    eg(new fg(), a, b)
    return b.join("")
  }
  function fg() {}
  function eg(a, b, c) {
    if (null == b) c.push("null")
    else {
      if ("object" == typeof b) {
        if (Array.isArray(b)) {
          var d = b
          b = d.length
          c.push("[")
          for (var e = "", f = 0; f < b; f++)
            c.push(e), eg(a, d[f], c), (e = ",")
          c.push("]")
          return
        }
        if (b instanceof String || b instanceof Number || b instanceof Boolean)
          b = b.valueOf()
        else {
          c.push("{")
          e = ""
          for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) &&
              ((f = b[d]),
              "function" != typeof f &&
                (c.push(e), gg(d, c), c.push(":"), eg(a, f, c), (e = ",")))
          c.push("}")
          return
        }
      }
      switch (typeof b) {
        case "string":
          gg(b, c)
          break
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null")
          break
        case "boolean":
          c.push(String(b))
          break
        case "function":
          c.push("null")
          break
        default:
          throw Error("Unknown type: " + typeof b)
      }
    }
  }
  var hg = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b",
    },
    ig = /\uffff/.test("\uffff")
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g
  function gg(a, b) {
    b.push(
      '"',
      a.replace(ig, function(c) {
        var d = hg[c]
        d ||
          ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1)),
          (hg[c] = d))
        return d
      }),
      '"'
    )
  }
  function jg() {
    this.key = "goog_adspeed"
    this.c = [3, 4]
    this.b = null
  }
  jg.prototype.a = function(a, b, c) {
    if (!Ga(this.c, c) || !cd(Xf(a))) return !1
    c = {}
    c = ((c[0] = this.key), (c[40] = dg($f(a))), c)
    var d
    if ((d = this.b))
      a: {
        d = this.b
        for (var e in d)
          if (!(e in c) || d[e] !== c[e]) {
            d = !1
            break a
          }
        for (var f in c)
          if (!(f in d)) {
            d = !1
            break a
          }
        d = !0
      }
    if (d) return !1
    this.b = c
    e = {}
    y(e, c, b)
    return kg(a, { Sa: {}, Ma: e })
  }
  function lg() {
    this.key = "goog_update_data"
    this.b = 0
    this.c = !1
  }
  lg.prototype.a = function(a, b, c) {
    if (c != this.b || !cd(Xf(a))) return !1
    c = 1 == a.u
    var d = W(a.c),
      e = {},
      f = {}
    b = {
      Ma: ((e[0] = this.key), (e[40] = dg($f(a))), e),
      Sa: Object.assign({}, b, ((f.r = b.r), f)),
    }
    if (c) return d && !this.c ? ((this.c = d), kg(a, b)) : !1
    this.c = d
    return kg(a, b)
  }
  function mg(a) {
    lg.call(this, a)
    this.key = "goog_image_request"
    this.b = 2
  }
  t(mg, lg)
  function ng(a) {
    lg.call(this, a)
    this.key = "goog_image_request"
    this.b = 1
  }
  t(ng, lg)
  ng.prototype.a = function(a, b, c) {
    var d = !a.Ya
    if ((W(a.c) && a.$) || d) {
      if ((b = lg.prototype.a.call(this, a, b, c)))
        if ((W(a.c) || (a.Ya = !0), W(a.c) || a.$)) a.$ = !1
      return b
    }
    return !1
  }
  function og() {
    this.b = []
    this.a = []
  }
  function pg(a) {
    return Ea(X.a, function(b) {
      b = Xf(b)
      return a.a || b.a ? a.a == b.a : a.b || b.b ? a.b == b.b : !1
    })
  }
  function qg(a) {
    var b = X
    return a
      ? Ea(b.a, function(c) {
          return c.b.b == a
        })
      : null
  }
  function rg(a) {
    return Ea(a.a, function() {
      return !1
    })
  }
  function sg() {
    var a = X
    return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : Ha(a.a, a.b)
  }
  function tg() {
    var a = X
    a.b = []
    a.a = []
  }
  function ug(a, b) {
    a = a.a
    var c = Fa(a, function(d) {
      return d == b
    })
    return -1 != c ? (a.splice(c, 1), b.a && b.a.N(), b.B(), !0) : !1
  }
  function vg(a) {
    var b = X
    if (ug(b, a)) {
      a = function() {
        return null
      }
      a = function() {
        return rg(b)
      }
      for (var c = a(); c; c = a()) ug(b, c)
    }
  }
  w(og)
  var X = og.g()
  function wg() {
    this.a = this.b = null
  }
  function xg(a, b) {
    function c(d, e) {
      b(d, e)
    }
    if (null == a.b) return !1
    a.a = Ea(a.b, function(d) {
      return null != d && d.pb()
    })
    a.a && (a.a.jb(c) ? Le(a.a.a) : b(a.a.a.W(), a.a))
    return null != a.a
  }
  w(wg)
  function yg(a) {
    a = zg(a)
    Pe.call(this, a.length ? a[a.length - 1] : new V(E, 0))
    this.c = a
    this.b = null
  }
  t(yg, Pe)
  l = yg.prototype
  l.C = function() {
    return (this.b ? this.b : this.a).C()
  }
  l.L = function() {
    return (this.b ? this.b : this.a).L()
  }
  l.M = function() {
    return (this.b ? this.b : this.a).M()
  }
  l.jb = function(a) {
    var b = !1
    x(this.c, function(c) {
      c.Ka() && (b = !0)
    })
    b && ((this.f = a), Ke(this.a, this))
    return b
  }
  l.B = function() {
    x(this.c, function(a) {
      a.B()
    })
    Pe.prototype.B.call(this)
  }
  l.pb = function() {
    return Ca(this.c, function(a) {
      return a.X()
    })
  }
  l.va = function() {
    return Ca(this.c, function(a) {
      return a.X()
    })
  }
  l.Ha = function(a, b, c) {
    return new cg(a, this.a, b, c)
  }
  l.S = function(a) {
    this.b = a.b
  }
  function zg(a) {
    if (!a.length) return []
    a = za(a, function(c) {
      return null != c && c.X()
    })
    for (var b = 1; b < a.length; b++) Ke(a[b - 1], a[b])
    return a
  }
  function Ag(a, b, c, d) {
    Oe.call(this, a, b, c, d)
    this.u = this.m = null
  }
  t(Ag, cg)
  l = Ag.prototype
  l.wa = function() {
    var a = this
    this.u || (this.u = T())
    if (
      Ud(298, function() {
        return Bg(a)
      })
    )
      return !0
    Ie(this.b, "msf")
    return !1
  }
  function Cg(a, b) {
    try {
      if (b.length) {
        a.m || (a.m = T())
        var c = Dg(b),
          d = Cc(a.c, a.b.a.s),
          e = d.x,
          f = d.y
        a.a = new J(
          Math.round(f),
          Math.round(e) + c.boundingClientRect.width,
          Math.round(f) + c.boundingClientRect.height,
          Math.round(e)
        )
        var g = me(c.intersectionRect)
        a.l = wc(g, a.a.left - g.left, a.a.top - g.top)
      }
    } catch (h) {
      a.N(), Xd(299, h)
    }
  }
  function Dg(a) {
    return Ba(
      a,
      function(b, c) {
        return b.time > c.time ? b : c
      },
      a[0]
    )
  }
  l.Ga = function() {}
  l.kb = function() {
    return !1
  }
  l.Za = function() {}
  l.L = function() {
    var a = {}
    return Object.assign(
      this.b.L(),
      ((a.niot_obs = this.u), (a.niot_cbk = this.m), a)
    )
  }
  var Eg = { threshold: [0, 0.3, 0.5, 0.75, 1] }
  function Fg(a, b, c, d) {
    Ag.call(this, a, b, c, d)
    this.i = this.j = this.f = null
  }
  t(Fg, Ag)
  Fg.prototype.C = function() {
    return "nio"
  }
  Fg.prototype.N = function() {
    if (this.f && this.c)
      try {
        this.f.unobserve(this.c),
          this.j
            ? (this.j.unobserve(this.c), (this.j = null))
            : this.i && (this.i.disconnect(), (this.i = null))
      } catch (a) {}
  }
  function Gg(a) {
    return a.f && a.f.takeRecords ? a.f.takeRecords() : []
  }
  function Bg(a) {
    if (!a.c) return !1
    var b = a.c,
      c = a.b.a.s,
      d = R.g().f.a
    a.f = new c.IntersectionObserver(
      xd(d, function(e) {
        return Cg(a, e)
      }),
      Eg
    )
    d = xd(d, function() {
      a.f.unobserve(b)
      a.f.observe(b)
      Cg(a, Gg(a))
    })
    c.ResizeObserver
      ? ((a.j = new c.ResizeObserver(d)), a.j.observe(b))
      : c.MutationObserver &&
        ((a.i = new u.MutationObserver(d)),
        a.i.observe(b, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0,
        }))
    a.f.observe(b)
    Cg(a, Gg(a))
    return !0
  }
  Fg.prototype.R = function() {
    var a = Gg(this)
    0 < a.length && Cg(this, a)
    Ag.prototype.R.call(this)
  }
  function Hg(a) {
    a = void 0 === a ? E : a
    Pe.call(this, new V(a, 2))
  }
  t(Hg, Pe)
  Hg.prototype.C = function() {
    return "nio"
  }
  Hg.prototype.va = function() {
    var a = A
    return a && 0 <= a.toLowerCase().indexOf("cobalt")
      ? !1
      : !U.g().f && null != this.a.a.s.IntersectionObserver
  }
  Hg.prototype.Ha = function(a, b, c) {
    return new Fg(a, this.a, b, c)
  }
  function Ig() {
    var a = Jg()
    V.call(this, E.top, a, "geo")
  }
  t(Ig, V)
  Ig.prototype.Ia = function() {
    return U.g().a
  }
  Ig.prototype.X = function() {
    var a = Jg()
    this.i !== a &&
      (this.a != this && a > this.a.i && ((this.a = this), Je(this)),
      (this.i = a))
    return 2 == a
  }
  function Jg() {
    R.g()
    var a = U.g()
    return a.c || a.f ? 0 : 2
  }
  w(Ig)
  var Kg = {},
    Lg =
      ((Kg[1] = function() {
        return new Hg()
      }),
      (Kg[2] = function() {
        return new yg([Ig.g()])
      }),
      Kg)
  function Mg() {
    this.a = null
    this.b = Lg
  }
  function Ng() {
    var a = Mg.g()
    a: {
      var b = O(R.g().a, "mv")
      if (null != b && (b = a.b[b]) && (b = b()) && b.va()) break a
      b = null
    }
    a.a = b
  }
  w(Mg)
  function Og() {
    this.done = !1
    this.a = { Wa: 0, Va: 0, fc: 0, ab: 0, ta: -1, Fb: 0, Eb: 0, Gb: 0 }
    this.j = null
    this.h = this.l = !1
    this.i = ""
    this.b = null
    this.m = 0
    this.c = new Ge(this)
  }
  function Pg(a) {
    var b = Y
    if (!b.l) {
      b.l = !0
      if (a) {
        a = sg()
        for (var c, d = 0; d < a.length; ++d) (c = a[d]), c.b.a && Bf(c)
      }
      Qg(b, function(e) {
        for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g]
        return b.f.apply(b, r(f))
      })
      b.f()
    }
  }
  Og.prototype.zb = function() {
    Rg(this, sg(), !1)
  }
  function Sg() {
    var a = Mg.g()
    null != a.a && a.a.a && Le(a.a.a)
    a = wg.g()
    null != a.a && a.a.a ? Le(a.a.a) : ue(U.g())
  }
  function Rg(a, b, c) {
    if (!a.done)
      if ((a.c.cancel(), 0 == b.length)) a.h = !1
      else {
        a.b = null
        try {
          Sg()
          var d = T(),
            e = R.g()
          e.j = d
          if (null != wg.g().a) for (e = 0; e < b.length; e++) zf(b[e], d, c)
          else Wd(a.i, { strategy_not_selected: 1, bin: e.c })
          for (d = 0; d < b.length; d++) Af(b[d])
          ++a.a.ab
          Tg(a)
        } finally {
          c
            ? x(b, function(f) {
                return f.Qa()
              })
            : He(a.c)
        }
      }
  }
  function Qg(a, b) {
    if (!a.j) {
      b = Qd(142, b)
      Q()
      var c
      D.visibilityState
        ? (c = "visibilitychange")
        : D.mozVisibilityState
        ? (c = "mozvisibilitychange")
        : D.webkitVisibilityState && (c = "webkitvisibilitychange")
      c && Vb(D, c, b, { capture: !1 }) && (a.j = b)
    }
  }
  Og.prototype.f = function() {
    var a = xe(),
      b = T()
    a
      ? (ae ||
          ((Zd = b),
          x(X.b, function(c) {
            return c.c.i(b, !c.j())
          })),
        (ae = !0))
      : ((this.m = Ug(this, b)),
        (ae = !1),
        x(X.b, function(c) {
          c.ua() && c.c.h(b)
        }))
    this.h = !0
    Rg(this, sg(), !a)
  }
  function Vg(a) {
    return !!(
      Date &&
      a &&
      a.screen &&
      a.document &&
      a.document.body &&
      a.document.body.getBoundingClientRect
    )
  }
  function Wg(a, b, c) {
    if (!a.b || c) {
      c = b.document
      var d = 0 <= $d ? T() - $d : -1,
        e = T()
      ;-1 == a.a.ta && (d = e)
      var f = U.g(),
        g = R.g(),
        h = Uc(g.a),
        p = sg()
      try {
        if (0 < p.length) {
          var m = f.a
          m && (h.bs = [tc(m), uc(m)])
          var k = f.h
          k && (h.ps = [k.width, k.height])
          b.screen && (h.ss = [b.screen.width, b.screen.height])
        } else
          (h.url = encodeURIComponent(b.location.href.substring(0, 512))),
            c.referrer &&
              (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)))
        h.tt = d
        h.pt = $d
        h.bin = g.c
        void 0 !== b.google_osd_load_pub_page_exp &&
          (h.olpp = b.google_osd_load_pub_page_exp)
        h.deb = [
          1,
          a.a.Wa,
          a.a.Va,
          a.a.ab,
          a.a.ta,
          ie,
          a.c.b,
          a.a.Fb,
          a.a.Eb,
          a.a.Gb,
        ].join("-")
        h.tvt = Ug(a, e)
        f.f && (h.inapp = 1)
        if (null !== b && b != b.top) {
          0 < p.length &&
            (h.iframe_loc = encodeURIComponent(
              b.location.href.substring(0, 512)
            ))
          var q = f.b
          h.is = [tc(q), uc(q)]
        }
      } catch (xa) {
        h.error = 1
      }
      a.b = h
    }
    b = a.b
    a = {}
    for (var n in b) a[n] = b[n]
    n = R.g().f
    var v
    if (1 == O(n.c, "prf")) {
      b = new vd()
      m = n.a
      k = 0
      ;-1 < m.a && (k = m.f.a.a() - m.a)
      b = Rb(b, 1, m.c + k)
      m = n.a
      b = Rb(b, 5, -1 < m.a ? m.b + 1 : m.b)
      b = Rb(b, 2, n.b.a.f())
      b = Rb(b, 3, n.b.a.c())
      b = Rb(b, 4, n.b.a.b())
      n = {}
      m = new Jb()
      k = Pb(b, 1)
      k = null == k ? k : +k
      k = null == k ? 0 : k
      if (0 !== k && ((q = k), null != q)) {
        mb(m.a, 9)
        k = m.a
        d = q
        d = (q = 0 > d ? 1 : 0) ? -d : d
        if (0 === d) (kb = 0 < 1 / d ? 0 : 2147483648), (jb = 0)
        else if (isNaN(d)) (kb = 2147483647), (jb = 4294967295)
        else if (1.7976931348623157e308 < d)
          (kb = ((q << 31) | 2146435072) >>> 0), (jb = 0)
        else if (2.2250738585072014e-308 > d)
          (d /= Math.pow(2, -1074)),
            (kb = ((q << 31) | (d / 4294967296)) >>> 0),
            (jb = d >>> 0)
        else {
          e = d
          c = 0
          if (2 <= e) for (; 2 <= e && 1023 > c; ) c++, (e /= 2)
          else for (; 1 > e && -1022 < c; ) (e *= 2), c--
          d *= Math.pow(2, -c)
          kb =
            ((q << 31) | ((c + 1023) << 20) | ((1048576 * d) & 1048575)) >>> 0
          jb = (4503599627370496 * d) >>> 0
        }
        nb(k, jb)
        nb(k, kb)
      }
      k = Qb(b, 2)
      0 !== k && null != k && Kb(m, 2, k)
      k = Qb(b, 3)
      0 !== k && null != k && Kb(m, 3, k)
      k = Qb(b, 4)
      0 !== k && null != k && Kb(m, 4, k)
      k = Qb(b, 5)
      if (0 !== k && null != k && null != k)
        if ((mb(m.a, 40), (b = m.a), 0 <= k)) mb(b, k)
        else {
          for (q = 0; 9 > q; q++) b.a.push((k & 127) | 128), (k >>= 7)
          b.a.push(1)
        }
      b = new Uint8Array(m.a.length())
      q = m.b
      c = q.length
      for (d = k = 0; d < c; d++) (e = q[d]), b.set(e, k), (k += e.length)
      q = m.a
      c = q.a
      q.a = []
      b.set(c, k)
      m.b = [b]
      void 0 === v && (v = 0)
      if (!Ib)
        for (
          Ib = {},
            m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            q = 0;
          5 > q;
          q++
        )
          for (
            c = m.concat(k[q].split("")), Hb[q] = c, d = 0;
            d < c.length;
            d++
          )
            (e = c[d]), void 0 === Ib[e] && (Ib[e] = d)
      v = Hb[v]
      m = []
      for (k = 0; k < b.length; k += 3)
        (f = b[k]),
          (g = (q = k + 1 < b.length) ? b[k + 1] : 0),
          (e = (c = k + 2 < b.length) ? b[k + 2] : 0),
          (d = f >> 2),
          (f = ((f & 3) << 4) | (g >> 4)),
          (g = ((g & 15) << 2) | (e >> 6)),
          (e &= 63),
          c || ((e = 64), q || (g = 64)),
          m.push(v[d], v[f], v[g] || "", v[e] || "")
      v = ((n.pf = m.join("")), n)
    } else v = {}
    y(a, v)
    return a
  }
  function Xg() {
    x(sg(), function(a) {
      if (a.b.b) {
        var b = a.m || 0,
          c = Mg.g()
        if ((b = c.a ? new hf(c.a, a.b.a, a.h, b) : null)) a.F = b
      }
    })
  }
  function Yg() {
    var a = wg.g()
    if (null != a.a) {
      var b = a.a
      x(sg(), function(c) {
        return yf(c, b)
      })
    }
  }
  function Tg(a) {
    var b = R.g(),
      c = 1 === O(b.a, "llp")
    "osd" == a.i &&
      x(X.a, function(d) {
        if (c) {
          if (1 == b.c || W(d.c) || d.l) {
            var e = {}
            Uf(d, 0, ((e.r = void 0), e))
          }
        } else (e = {}), Uf(d, 0, ((e.r = void 0), e))
      })
  }
  function Ug(a, b) {
    a = a.m
    ae && (a += b - Zd)
    return a
  }
  function Zg(a) {
    return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length
      ? parseInt(a[1], 10)
      : 0
  }
  function $g(a) {
    return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length
      ? parseInt(a[1], 10)
      : 0
  }
  function ah() {
    var a = Y
    var b =
      void 0 === b
        ? function() {
            return {}
          }
        : b
    Rd.h = "av-js"
    Md.a = 0.01
    Td([
      function(c) {
        var d = R.g(),
          e = {}
        y(c, ((e.bin = d.c), (e.type = "error"), e), Uc(d.a), Wg(a, E), b())
        if ((d = $e())) (e = {}), y(c, ((e.v = encodeURIComponent(d)), e))
      },
    ])
  }
  function bh(a) {
    var b = new ch()
    switch (a) {
      case 0:
      case 5:
        return []
      default:
        return (
          (a = 4 === R.g().c),
          [new lg(b), new ng(b), new mg(b)].concat(r(a ? [] : [new jg()]))
        )
    }
  }
  w(Og)
  var Y = Og.g()
  function ch() {}
  function kg(a, b) {
    var c = b || {}
    b = void 0 === c.Sa ? {} : c.Sa
    c = void 0 === c.Ma ? {} : c.Ma
    var d = c.r,
      e = b[0],
      f = Wg(Y, K(), !1),
      g = {}
    y(g, f, b)
    b = {}
    y(b, Yf(a, e, d, g), c)
    qe(a.b.b, b, a.Y)
    return !0
  }
  function dh() {
    V.call(this, E, 2, "iem")
  }
  t(dh, V)
  l = dh.prototype
  l.Ia = function() {
    function a(n, v) {
      return !!b.s.document.elementFromPoint(n, v)
    }
    var b = this,
      c = new J(
        0,
        this.s.innerWidth || this.s.width,
        this.s.innerHeight || this.s.height,
        0
      ),
      d = ec(document),
      e = Math.floor(c.left - d.x),
      f = Math.floor(c.top - d.y),
      g = Math.floor(c.right - d.x),
      h = Math.floor(c.bottom - d.y)
    c = a(e, f)
    d = a(g, h)
    if (c && d) return new J(f, g, h, e)
    var p = a(g, f),
      m = a(e, h)
    if (c)
      (h = Z(f, h, function(n) {
        return a(e, n)
      })),
        (g = Z(e, g, function(n) {
          return a(n, f)
        }))
    else if (p)
      (h = Z(f, h, function(n) {
        return a(g, n)
      })),
        (e = Z(g, e, function(n) {
          return a(n, f)
        }))
    else if (m)
      (f = Z(h, f, function(n) {
        return a(e, n)
      })),
        (g = Z(e, g, function(n) {
          return a(n, h)
        }))
    else if (d)
      (f = Z(h, f, function(n) {
        return a(g, n)
      })),
        (e = Z(g, e, function(n) {
          return a(n, h)
        }))
    else {
      var k = Math.floor((e + g) / 2),
        q = Math.floor((f + h) / 2)
      if (!a(k, q)) return new J(0, 0, 0, 0)
      f = Z(q, f, function(n) {
        return a(k, n)
      })
      h = Z(q, h, function(n) {
        return a(k, n)
      })
      e = Z(k, e, function(n) {
        return a(n, q)
      })
      g = Z(k, g, function(n) {
        return a(n, q)
      })
    }
    return new J(f, g, h, e)
  }
  function Z(a, b, c) {
    if (c(b)) return b
    for (var d = 15; d--; ) {
      var e = Math.floor((a + b) / 2)
      if (e == a || e == b) break
      c(e) ? (a = e) : (b = e)
    }
    return a
  }
  l.X = function() {
    return U.g().c && C && Db(8) && ee(this.s)
  }
  l.Oa = function() {}
  l.Pa = function() {}
  l.rb = function() {}
  l.sb = function() {}
  w(dh)
  function eh() {
    V.call(this, E, 2, "mraid")
    this.J = 0
    this.A = this.D = !1
    this.h = null
    this.b = de(this.s)
    this.c.a = new J(0, 0, 0, 0)
    this.K = !1
  }
  t(eh, V)
  l = eh.prototype
  l.X = function() {
    return null != this.b.G
  }
  l.fb = function() {
    var a = {}
    this.J && (a.mraid = this.J)
    this.D && (a.mlc = 1)
    a.mtop = this.b.Mb
    this.h && (a.mse = this.h)
    this.K && (a.msc = 1)
    a.mcp = this.b.sa
    return a
  }
  l.O = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d]
    try {
      return this.b.G[a].apply(this.b.G, c)
    } catch (e) {
      Xd(538, e, 0.01, function(f) {
        f.method = a
      })
    }
  }
  function fh(a, b, c) {
    a.O("addEventListener", b, c)
  }
  l.Ka = function() {
    var a = this
    if (this.m) return !this.ca()
    this.m = !0
    if (2 === this.b.sa) return (this.h = "ng"), Ie(this, "w"), !1
    if (1 === this.b.sa) return (this.h = "mm"), Ie(this, "w"), !1
    U.g().u = !0
    this.s.document.readyState && "complete" == this.s.document.readyState
      ? gh(this)
      : ge(
          this.s,
          "load",
          function() {
            Q().setTimeout(
              Vd(292, function() {
                return gh(a)
              }),
              100
            )
          },
          292
        )
    return !0
  }
  function gh(a) {
    R.g().h = !!a.O("isViewable")
    fh(a, "viewableChange", hh)
    "loading" === a.O("getState") ? fh(a, "ready", ih) : jh(a)
  }
  function jh(a) {
    "string" === typeof a.b.G.AFMA_LIDAR
      ? ((a.D = !0), kh(a))
      : ((a.b.sa = 3), (a.h = "nc"), Ie(a, "w"))
  }
  function kh(a) {
    a.A = !1
    var b = 1 == O(R.g().a, "rmmt"),
      c = !!a.O("isViewable")
    ;(b ? !c : 1) &&
      Q().setTimeout(
        Vd(524, function() {
          a.A || (lh(a), Xd(540, Error()), (a.h = "mt"), Ie(a, "w"))
        }),
        500
      )
    mh(a)
    fh(a, a.b.G.AFMA_LIDAR, nh)
  }
  function mh(a) {
    var b = 1 == O(R.g().a, "sneio"),
      c = void 0 !== a.b.G.AFMA_LIDAR_EXP_1,
      d = void 0 !== a.b.G.AFMA_LIDAR_EXP_2
    ;(b = b && d) && (a.b.G.AFMA_LIDAR_EXP_2 = !0)
    c && (a.b.G.AFMA_LIDAR_EXP_1 = !b)
  }
  function lh(a) {
    a.O("removeEventListener", a.b.G.AFMA_LIDAR, nh)
    a.D = !1
  }
  l.Oa = function() {
    var a = U.g(),
      b = oh(this, "getMaxSize")
    a.a = new J(0, b.width, b.height, 0)
  }
  l.Pa = function() {
    U.g().j = oh(this, "getScreenSize")
  }
  function oh(a, b) {
    if ("loading" === a.O("getState")) return new G(-1, -1)
    b = a.O(b)
    if (!b) return new G(-1, -1)
    a = parseInt(b.width, 10)
    b = parseInt(b.height, 10)
    return isNaN(a) || isNaN(b) ? new G(-1, -1) : new G(a, b)
  }
  l.B = function() {
    lh(this)
    V.prototype.B.call(this)
  }
  function ih() {
    try {
      var a = eh.g()
      a.O("removeEventListener", "ready", ih)
      jh(a)
    } catch (b) {
      Xd(541, b)
    }
  }
  function nh(a, b) {
    try {
      var c = eh.g()
      c.A = !0
      var d = a
        ? new J(a.y, a.x + a.width, a.y + a.height, a.x)
        : new J(0, 0, 0, 0)
      var e = T(),
        f = xe()
      var g = new Ee(e, f, c)
      g.a = d
      g.volume = b
      c.S(g)
    } catch (h) {
      Xd(542, h)
    }
  }
  function hh(a) {
    var b = R.g(),
      c = eh.g()
    a && !b.h && ((b.h = !0), (c.K = !0), c.h && Ie(c, "w", !0))
  }
  w(eh)
  function ph(a) {
    return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
  }
  var qh = ["FRAME", "IMG", "IFRAME"],
    rh = /^[01](px)?$/
  function sh(a, b, c) {
    var d = !0,
      e = !1
    d = void 0 === d ? !0 : d
    e = void 0 === e ? !1 : e
    var f = void 0 === f ? !1 : f
    if ((a = "string" === typeof a ? document.getElementById(a) : a)) {
      c ||
        (c = function(xa, Ih, Jh) {
          xa.addEventListener(Ih, Jh)
        })
      for (
        var g = !1,
          h = function(xa) {
            g || ((g = !0), b(xa))
          },
          p,
          m,
          k = 0;
        k < qh.length;
        ++k
      )
        if (qh[k] == a.tagName) {
          m = 3
          p = [a]
          break
        }
      p || ((p = a.querySelectorAll(qh.join(","))), (m = 2))
      var q = 0
      a = !1
      for (k = 0; k < p.length; k++) {
        var n = p[k]
        if (
          f ||
          !("IMG" != n.tagName ||
          !n.complete ||
          (n.naturalWidth && n.naturalHeight)
            ? rh.test(n.getAttribute("width")) &&
              rh.test(n.getAttribute("height"))
            : 1)
        ) {
          if ("IMG" == n.tagName)
            var v = n.naturalWidth && n.naturalHeight ? !0 : !1
          else
            try {
              v =
                "complete" ===
                (n.readyState
                  ? n.readyState
                  : n.contentWindow &&
                    n.contentWindow.document &&
                    n.contentWindow.document.readyState)
                  ? !0
                  : !1
            } catch (xa) {
              v = void 0 === e ? !1 : e
            }
          v
            ? (a = !0)
            : (q++,
              c(n, "load", function() {
                q--
                q || h(m)
              }))
        }
      }
      p = null
      if (0 === q && !a && "complete" === u.document.readyState) m = 5
      else if (q || !a) {
        c(u, "load", function() {
          h(4)
        })
        return
      }
      d && h(m)
    }
  }
  function th(a) {
    this.methodName = a
  }
  var uh = new th(15),
    vh = new th(5)
  function wh(a, b) {
    return b[a.methodName] || function() {}
  }
  function xh() {}
  w(xh)
  function yh() {
    this.b = function(a, b) {
      return void 0 === b ? !1 : b
    }
    this.a = function() {}
  }
  function zh(a, b, c) {
    a.b = function(d, e) {
      return wh(vh, b)(d, e, c)
    }
    a.a = function() {
      wh(uh, b)(c)
    }
  }
  w(yh)
  function Ah(a) {
    var b = void 0 === b ? !1 : b
    return yh.g().b(a, b)
  }
  function Bh() {}
  w(Bh)
  function Ch() {
    this.b = null
    this.f = this.i = this.c = this.h = !1
    Dh(this)
    ah()
  }
  function Eh() {
    var a = void 0,
      b = 4
    if (void 0 === a) {
      var c = void 0 === c ? u : c
      a = c.ggeac || (c.ggeac = {})
    }
    b = void 0 === b ? 0 : b
    xh.g()
    b = void 0 === b ? 0 : b
    zh(yh.g(), a, b)
    Bh.g()
    yh.g().a()
    b = R.g()
    Ah(160) && Tc(b.a, "gtx", 1)
  }
  l = Ch.prototype
  l.Kb = function(a) {
    this.h = a
  }
  l.hb = function() {
    Fh(this)
    Q().clearTimeout(this.b)
    this.b = null
    $d = T()
    Gh(this)
  }
  function Fh(a) {
    R.g().c = 1
    if (!(0 < $d)) {
      try {
        if (!Hh(a)) return
        Sg()
        Kh(a)
      } catch (b) {}
      a.b = Q().setTimeout(
        Vd(129, function() {
          return Fh(a)
        }),
        250
      )
    }
  }
  l.Lb = function(a, b, c, d, e, f, g, h, p) {
    var m = this
    f = void 0 === f ? !1 : f
    h = void 0 === h ? -1 : h
    p = void 0 === p ? -1 : p
    if (Vg(E)) {
      var k = new Rf(E, b, a, -1, c, g)
      k.na = bh(k.u)
      e = R.g()
      0 < h && -1 == k.A && (k.A = h)
      0 <= p && (k.Ea = p)
      k.Da = function(q) {
        for (var n = [], v = 0; v < arguments.length; ++v) n[v] = arguments[v]
        return m.Hb.apply(m, r(n))
      }
      k.Bb = function(q) {
        for (var n = [], v = 0; v < arguments.length; ++v) n[v] = arguments[v]
        return m.Ja.apply(m, r(n))
      }
      13 != c && ((k.m = Zg(b)), (k.ib = ph(b)), (k.Ba = $g(b)))
      f && (k.ub = !0)
      Tc(e.a, "oseid", Gf(this.a))
      X.a.push(k)
      ++Y.a.Va
      e.b
        ? this.Ja(k, e.b)
        : ((b = wg.g().a) && yf(k, b),
          Gh(this),
          e.b ||
            (d
              ? (Lh(k), k.fa())
              : a &&
                sh(
                  a,
                  function() {
                    k.da() || (Lh(k), k.fa())
                  },
                  function(q, n, v) {
                    ge(q, n, v, 130)
                  }
                ),
            Y.h || Y.f()))
    }
  }
  function Kh(a) {
    Mh(a)
    Ef(
      a.a,
      function(b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d]
        return a.Lb.apply(a, r(c))
      },
      function() {
        return a.h
      },
      function(b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d]
        return a.Kb.apply(a, r(c))
      }
    )
  }
  function Nh(a) {
    R.g()
    var b = Ah(382),
      c = [dh.g()]
    b || c.push(eh.g())
    b = [Ig.g()]
    return [new yg(c), new Hg(a), new yg(b)]
  }
  function Gh(a) {
    if (!a.f) {
      a.f = !0
      try {
        var b = K(),
          c = U.g()
        R.g().i = 947190542
        if (Hh(a)) {
          Y.a.Wa = Ff(a.a)
          var d = wg.g()
          if (null == d.b) {
            var e = Nh(b)
            d.b = e
          }
          if (
            xg(d, function(g) {
              return Oh(a, g)
            })
          ) {
            if (!Y.done) {
              Yg()
              c.m = !0
              Kh(a)
              var f
              ;(f =
                U.g().f ||
                z(A, "CrKey") ||
                z(A, "PlayStation") ||
                z(A, "Roku") ||
                re() ||
                z(A, "Xbox") ||
                se() ||
                te()) || (Q(), (f = 0 !== fd()))
              f ? (Ng(), Xg(), Ph(a), Ec()) : Oh(a, "pv")
            }
          } else Oh(a, "i")
        } else Qh(a, "c")
      } catch (g) {
        throw (Oh(a, "x"), tg(), g)
      }
    }
  }
  function Ph(a) {
    if (-1 == Y.a.ta) {
      K()
      var b = 2 == Gf(a.a)
      Pg(b)
      Q().setTimeout(
        Vd(131, function() {
          Qh(a, "t")
        }),
        36e5
      )
      Y.a.ta = T() - $d
    }
  }
  function Oh(a, b) {
    R.g().b = b
    for (var c = fa(X.a), d = c.next(); !d.done; d = c.next()) d.value.l = !0
    Qh(a, b, !1)
  }
  function Qh(a, b, c) {
    c = void 0 === c ? !0 : c
    if (!Y.done) {
      Y.c.cancel()
      a.a || (a.a = new Cf())
      if (2 == Gf(a.a) || a.c)
        for (
          a = X.a, c && 0 < a.length && Rg(Y, a, !0), c = fa(a), a = c.next();
          !a.done;
          a = c.next()
        ) {
          a = a.value
          var d = {}
          Uf(a, 1, ((d.r = b), d))
          a.a && a.a.N()
        }
      Y.done = !0
    }
  }
  function Hh(a) {
    if (!Vg(K())) return !1
    var b = new Cf()
    if (!(b.a || b.b || b.c)) return !1
    a.a = b
    return !0
  }
  l.Ja = function(a, b) {
    a.l = !0
    var c = {}
    Uf(a, 2, ((c.r = b), c))
    a.a && a.a.N()
  }
  l.Hb = function(a) {
    a &&
      W(a.c) &&
      (0 >= Ae(xf(a)) ? 0 : Zf(a) && !a.nb) &&
      (yc(a.I), (a.nb = !0))
  }
  function Rh(a, b) {
    if (b && b.data && b.source) {
      var c = b.data
      if ("string" !== typeof c) var d = null
      else {
        d = {}
        c = c.split("\n")
        for (var e = 0; e != c.length; ++e) {
          var f = c[e],
            g = f.indexOf("=")
          if (!(0 >= g)) {
            var h = Number(f.substr(0, g))
            f = f.substr(g + 1)
            switch (h) {
              case 36:
              case 8:
              case 11:
              case 16:
              case 5:
              case 18:
                f = "true" == f
                break
              case 4:
              case 33:
              case 6:
              case 25:
              case 28:
              case 29:
              case 24:
              case 31:
              case 30:
              case 23:
              case 22:
              case 7:
              case 21:
              case 20:
                f = Number(f)
                break
              case 3:
                if ("function" === typeof decodeURIComponent)
                  try {
                    f = decodeURIComponent(f)
                  } catch (p) {
                    throw Error("Error: URI malformed: " + f)
                  }
            }
            d[h] = f
          }
        }
        d = d[0] ? d : null
      }
      if ((c = d))
        if (
          ((e = c[0]),
          Ga(
            "goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(
              " "
            ),
            e
          ) && (d = pg(new bd(c[4], c[12]))))
        )
          if (
            ((h = c[33]),
            0 < h && -1 == d.qa && (d.qa = h),
            "goog_stop_monitoring" === e)
          )
            vg(d)
          else if (
            (Ga(d.Y, b.source) || d.Y.push(b.source),
            "goog_request_monitoring" === e || !d.wb)
          )
            if (
              ((d.wb = !0),
              void 0 !== c[16] && (d.$ = !!c[16]),
              void 0 !== c[6])
            ) {
              b = c[6]
              c = Sh(b, d.u)
              if (c != d.u) {
                if (5 == c) {
                  d.l = !0
                  vg(d)
                  return
                }
                d.u = c
                d.na = bh(c)
              }
              4 == b && d.fa()
              b = U.g()
              c = Yf(d, "goog_acknowledge_monitoring")
              c[8] = b.c
              c[36] = b.A
              qe(d.b.b, c, d.Y)
              b = R.g()
              d.l && b.b ? (a.Ja(d, b.b), vg(d)) : (a.c = !0)
            }
    }
  }
  function Lh(a) {
    if (a && cd(Xf(a))) {
      var b = Yf(a, "goog_get_mode")
      qe(a.b.b, b)
    }
  }
  function Mh(a) {
    if (!a.i) {
      ge(
        E,
        "message",
        function(c) {
          return Rh(a, c)
        },
        132
      )
      var b = Th().contentWindow
      b &&
        ge(
          b,
          "message",
          function(c) {
            return Rh(a, c)
          },
          132
        )
      a.i = !0
    }
  }
  function Uh(a) {
    ge(
      K(),
      "unload",
      function() {
        Qh(a, "u")
      },
      133
    )
  }
  function Sh(a, b) {
    return (
      Ea([5, 2, 4, 3, 1, 0], function(c) {
        return c === a || c === b
      }) || 0
    )
  }
  l.Ib = function(a) {
    ;(a = qg(a)) && vg(a)
  }
  l.Jb = function(a, b) {
    a &&
      b &&
      ra(a) &&
      1 == a.nodeType &&
      ra(b) &&
      1 == b.nodeType &&
      (a = qg(a)) &&
      (K(),
      wf(a),
      (a.b.a = b),
      Bf(a),
      Sf(a, b),
      a.a && ((a = a.a), a.N(), (a.c = b), a.wa(), a.R()))
  }
  function Th() {
    var a = gc("IFRAME", {
      id: "google_osd_static_frame_" + Math.floor(1e13 * Math.random()),
      name: "google_osd_static_frame",
    })
    a.style.display = "none"
    a.style.width = "0px"
    a.style.height = "0px"
    E.document.body.appendChild(a)
    return a
  }
  function Dh(a) {
    ua(
      "Goog_Osd_UnloadAdBlock",
      Vd(134, function(b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d]
        return a.Ib.apply(a, r(c))
      })
    )
    ua(
      "Goog_Osd_UpdateElementToMeasure",
      Vd(135, function(b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d]
        return a.Jb.apply(a, r(c))
      })
    )
  }
  Ud(155, function() {
    Eh()
    var a = new Ch()
    Y.i = "osd"
    Uh(a)
    Fc()
      ? a.hb()
      : (Fh(a),
        ge(
          K(),
          "load",
          function() {
            Q().setTimeout(
              Vd(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d)
                  c[d] = arguments[d]
                return a.hb.apply(a, r(c))
              }),
              100
            )
          },
          154
        ))
  })
}.call(this, this, this.document))
