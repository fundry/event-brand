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
  function ha(a) {
    if (!(a instanceof Array)) {
      a = fa(a)
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value)
      a = c
    }
    return a
  }
  var ia =
      "function" == typeof Object.create
        ? Object.create
        : function(a) {
            function b() {}
            b.prototype = a
            return new b()
          },
    ja
  if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf
  else {
    var ka
    a: {
      var la = { wb: !0 },
        ma = {}
      try {
        ma.__proto__ = la
        ka = ma.wb
        break a
      } catch (a) {}
      ka = !1
    }
    ja = ka
      ? function(a, b) {
          a.__proto__ = b
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible")
          return a
        }
      : null
  }
  var na = ja
  function r(a, b) {
    a.prototype = ia(b.prototype)
    a.prototype.constructor = a
    if (na) na(a, b)
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c)
            d && Object.defineProperty(a, c, d)
          } else a[c] = b[c]
  }
  var oa =
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
    return a || oa
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
  var t = this || self
  function pa(a, b) {
    a = a.split(".")
    var c = t
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
  function qa() {}
  function u(a) {
    a.Na = void 0
    a.g = function() {
      return a.Na ? a.Na : (a.Na = new a())
    }
  }
  function ra(a) {
    var b = typeof a
    b = "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null"
    return "array" == b || ("object" == b && "number" == typeof a.length)
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
    function c() {}
    c.prototype = b.prototype
    a.prototype = new c()
    a.prototype.constructor = a
  }
  var va
  function wa(a, b) {
    if ("string" === typeof a)
      return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0)
    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c
    return -1
  }
  function v(a, b, c) {
    for (
      var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0;
      f < d;
      f++
    )
      f in e && b.call(c, e[f], f, a)
  }
  function xa(a, b) {
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
  function ya(a, b, c) {
    for (
      var d = a.length,
        e = Array(d),
        f = "string" === typeof a ? a.split("") : a,
        g = 0;
      g < d;
      g++
    )
      g in f && (e[g] = b.call(c, f[g], g, a))
    return e
  }
  function za(a, b, c) {
    var d = c
    v(a, function(e, f) {
      d = b.call(void 0, d, e, f, a)
    })
    return d
  }
  function Aa(a, b) {
    for (
      var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
      e < c;
      e++
    )
      if (e in d && b.call(void 0, d[e], e, a)) return !0
    return !1
  }
  function Ba(a, b) {
    a: {
      for (
        var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
        e < c;
        e++
      )
        if (e in d && b.call(void 0, d[e], e, a)) {
          b = e
          break a
        }
      b = -1
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
  }
  function w(a, b) {
    return 0 <= wa(a, b)
  }
  function Ca(a) {
    return Array.prototype.concat.apply([], arguments)
  }
  function Da(a) {
    var b = a.length
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]
      return c
    }
    return []
  }
  function Ea(a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c)
  }
  function Fa(a, b) {
    a.sort(b || Ga)
  }
  function Ga(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  }
  function Ha(a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      var d = arguments[c]
      if (Array.isArray(d))
        for (var e = 0; e < d.length; e += 8192)
          for (
            var f = Ha.apply(null, Ea(d, e, e + 8192)), g = 0;
            g < f.length;
            g++
          )
            b.push(f[g])
      else b.push(d)
    }
    return b
  }
  function Ia(a, b, c) {
    return Ca.apply([], ya(a, b, c))
  }
  function Ja(a) {
    var b = !1,
      c
    return function() {
      b || ((c = a()), (b = !0))
      return c
    }
  }
  function Ka(a) {
    var b = a
    return function() {
      if (b) {
        var c = b
        b = null
        c()
      }
    }
  }
  function La(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
  }
  function Ma(a, b) {
    var c = {},
      d
    for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d])
    return c
  }
  function Na(a) {
    var b = Oa,
      c
    for (c in b) if (!a.call(void 0, b[c], c, b)) return !1
    return !0
  }
  function Pa(a) {
    var b = [],
      c = 0,
      d
    for (d in a) b[c++] = a[d]
    return b
  }
  function Qa(a) {
    var b = {},
      c
    for (c in a) b[c] = a[c]
    return b
  }
  var Ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  )
  function x(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e]
      for (c in d) a[c] = d[c]
      for (var f = 0; f < Ra.length; f++)
        (c = Ra[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
  function Ta(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
  }
  function y(a, b) {
    return -1 != a.toLowerCase().indexOf(b.toLowerCase())
  }
  function Ua(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
  }
  var z
  a: {
    var Va = t.navigator
    if (Va) {
      var Wa = Va.userAgent
      if (Wa) {
        z = Wa
        break a
      }
    }
    z = ""
  }
  function A(a) {
    return -1 != z.indexOf(a)
  }
  function Xa() {
    return (
      A("Safari") &&
      !(
        Ya() ||
        A("Coast") ||
        A("Opera") ||
        A("Edge") ||
        A("Edg/") ||
        A("OPR") ||
        A("Firefox") ||
        A("FxiOS") ||
        A("Silk") ||
        A("Android")
      )
    )
  }
  function Ya() {
    return (A("Chrome") || A("CriOS")) && !A("Edge")
  }
  function Za(a) {
    var b = Number(a)
    return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b
  }
  function $a() {
    return "opacity".replace(/\-([a-z])/g, function(a, b) {
      return b.toUpperCase()
    })
  }
  function ab(a) {
    return String(a)
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
  }
  function bb(a) {
    return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
      return c + d.toUpperCase()
    })
  }
  var cb = 0,
    db = 0
  function eb() {
    this.a = []
  }
  eb.prototype.length = function() {
    return this.a.length
  }
  function fb(a, b) {
    for (; 127 < b; ) a.a.push((b & 127) | 128), (b >>>= 7)
    a.a.push(b)
  }
  function gb(a, b) {
    a.a.push((b >>> 0) & 255)
    a.a.push((b >>> 8) & 255)
    a.a.push((b >>> 16) & 255)
    a.a.push((b >>> 24) & 255)
  }
  function hb(a) {
    hb[" "](a)
    return a
  }
  hb[" "] = qa
  function ib(a, b) {
    try {
      return hb(a[b]), !0
    } catch (c) {}
    return !1
  }
  function jb(a, b) {
    var c = kb
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a))
  }
  var lb = A("Opera"),
    B = A("Trident") || A("MSIE"),
    mb = A("Edge"),
    nb =
      A("Gecko") &&
      !(y(z, "WebKit") && !A("Edge")) &&
      !(A("Trident") || A("MSIE")) &&
      !A("Edge"),
    ob = y(z, "WebKit") && !A("Edge"),
    pb = ob && A("Mobile")
  function qb() {
    var a = t.document
    return a ? a.documentMode : void 0
  }
  var rb
  a: {
    var sb = "",
      tb = (function() {
        var a = z
        if (nb) return /rv:([^\);]+)(\)|;)/.exec(a)
        if (mb) return /Edge\/([\d\.]+)/.exec(a)
        if (B) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        if (ob) return /WebKit\/(\S+)/.exec(a)
        if (lb) return /(?:Version)[ \/]?(\S+)/.exec(a)
      })()
    tb && (sb = tb ? tb[1] : "")
    if (B) {
      var ub = qb()
      if (null != ub && ub > parseFloat(sb)) {
        rb = String(ub)
        break a
      }
    }
    rb = sb
  }
  var vb = rb,
    kb = {}
  function wb(a) {
    return jb(a, function() {
      for (
        var b = 0,
          c = Ta(String(vb)).split("."),
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
            Ua(
              0 == g[1].length ? 0 : parseInt(g[1], 10),
              0 == h[1].length ? 0 : parseInt(h[1], 10)
            ) ||
            Ua(0 == g[2].length, 0 == h[2].length) ||
            Ua(g[2], h[2])
          g = g[3]
          h = h[3]
        } while (0 == b)
      }
      return 0 <= b
    })
  }
  var xb
  if (t.document && B) {
    var yb = qb()
    xb = yb ? yb : parseInt(vb, 10) || void 0
  } else xb = void 0
  var zb = xb
  var Ab = {},
    Bb = null
  function Cb() {
    this.b = []
    this.a = new eb()
  }
  function Db(a, b, c) {
    if (null != c) {
      fb(a.a, 8 * b)
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
      cb = b
      db = d
      c = cb
      for (b = db; 0 < b || 127 < c; )
        a.a.push((c & 127) | 128),
          (c = ((c >>> 7) | (b << 25)) >>> 0),
          (b >>>= 7)
      a.a.push(c)
    }
  }
  function Eb() {}
  var Fb = "function" == typeof Uint8Array,
    Gb = []
  function Hb(a) {
    var b = a.c + a.f
    a.a[b] || (a.b = a.a[b] = {})
  }
  function Ib(a, b) {
    if (b < a.c) {
      b += a.f
      var c = a.a[b]
      return c === Gb ? (a.a[b] = []) : c
    }
    if (a.b) return (c = a.b[b]), c === Gb ? (a.b[b] = []) : c
  }
  function Jb(a, b) {
    a = Ib(a, b)
    return null == a ? 0 : a
  }
  function Kb(a, b, c) {
    0 !== c
      ? b < a.c
        ? (a.a[b + a.f] = c)
        : (Hb(a), (a.b[b] = c))
      : b < a.c
      ? (a.a[b + a.f] = null)
      : (Hb(a), delete a.b[b])
    return a
  }
  Eb.prototype.toString = function() {
    return this.a.toString()
  }
  var Lb
  Lb = ["av.key", "js", "20200731"].slice(-1)[0]
  function Mb(a, b, c, d, e) {
    if (e) c = a + ("&" + b + "=" + c)
    else {
      var f = "&" + b + "=",
        g = a.indexOf(f)
      0 > g
        ? (c = a + f + c)
        : ((g += f.length),
          (f = a.indexOf("&", g)),
          (c =
            0 <= f
              ? a.substring(0, g) + c + a.substring(f)
              : a.substring(0, g) + c))
    }
    return 2e3 < c.length ? (void 0 !== d ? Mb(a, b, d, void 0, e) : a) : c
  }
  var C = document,
    D = window
  var Nb = Ja(function() {
    var a = !1
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function() {
          a = !0
        },
      })
      t.addEventListener("test", null, b)
    } catch (c) {}
    return a
  })
  function Ob(a) {
    return a ? (a.passive && Nb() ? a : a.capture || !1) : !1
  }
  function Pb(a, b, c, d) {
    return a.addEventListener ? (a.addEventListener(b, c, Ob(d)), !0) : !1
  }
  function Qb(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, Ob(void 0))
  }
  var Rb = B || lb || ob
  function E(a, b) {
    this.x = void 0 !== a ? a : 0
    this.y = void 0 !== b ? b : 0
  }
  E.prototype.ceil = function() {
    this.x = Math.ceil(this.x)
    this.y = Math.ceil(this.y)
    return this
  }
  E.prototype.floor = function() {
    this.x = Math.floor(this.x)
    this.y = Math.floor(this.y)
    return this
  }
  E.prototype.round = function() {
    this.x = Math.round(this.x)
    this.y = Math.round(this.y)
    return this
  }
  function F(a, b) {
    this.width = a
    this.height = b
  }
  F.prototype.aspectRatio = function() {
    return this.width / this.height
  }
  F.prototype.ceil = function() {
    this.width = Math.ceil(this.width)
    this.height = Math.ceil(this.height)
    return this
  }
  F.prototype.floor = function() {
    this.width = Math.floor(this.width)
    this.height = Math.floor(this.height)
    return this
  }
  F.prototype.round = function() {
    this.width = Math.round(this.width)
    this.height = Math.round(this.height)
    return this
  }
  function Sb(a) {
    return a ? new Tb(G(a)) : va || (va = new Tb())
  }
  function Ub(a, b, c) {
    var d = document
    c = c || d
    a = a && "*" != a ? String(a).toUpperCase() : ""
    if (c.querySelectorAll && c.querySelector && (a || b))
      return c.querySelectorAll(a + (b ? "." + b : ""))
    if (b && c.getElementsByClassName) {
      c = c.getElementsByClassName(b)
      if (a) {
        d = {}
        for (var e = 0, f = 0, g; (g = c[f]); f++)
          a == g.nodeName && (d[e++] = g)
        d.length = e
        return d
      }
      return c
    }
    c = c.getElementsByTagName(a || "*")
    if (b) {
      d = {}
      for (f = e = 0; (g = c[f]); f++)
        (a = g.className),
          "function" == typeof a.split && w(a.split(/\s+/), b) && (d[e++] = g)
      d.length = e
      return d
    }
    return c
  }
  function Vb(a) {
    var b = a.scrollingElement
      ? a.scrollingElement
      : ob || "CSS1Compat" != a.compatMode
      ? a.body || a.documentElement
      : a.documentElement
    a = a.parentWindow || a.defaultView
    return B && wb("10") && a.pageYOffset != b.scrollTop
      ? new E(b.scrollLeft, b.scrollTop)
      : new E(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
  }
  function Wb(a) {
    return a ? a.parentWindow || a.defaultView : window
  }
  function Xb(a, b) {
    if (!a || !b) return !1
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b)
    if ("undefined" != typeof a.compareDocumentPosition)
      return a == b || !!(a.compareDocumentPosition(b) & 16)
    for (; b && a != b; ) b = b.parentNode
    return b == a
  }
  function G(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }
  function Yb(a) {
    try {
      return (
        a.contentWindow || (a.contentDocument ? Wb(a.contentDocument) : null)
      )
    } catch (b) {}
    return null
  }
  function Zb(a, b) {
    a && (a = a.parentNode)
    for (var c = 0; a; ) {
      if (b(a)) return a
      a = a.parentNode
      c++
    }
    return null
  }
  function Tb(a) {
    this.a = a || t.document || document
  }
  function $b() {
    return A("iPad") || (A("Android") && !A("Mobile")) || A("Silk")
  }
  var ac = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
  function bc(a, b) {
    if (a) {
      a = a.split("&")
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          e = null
        if (0 <= d) {
          var f = a[c].substring(0, d)
          e = a[c].substring(d + 1)
        } else f = a[c]
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
      }
    }
  }
  function cc(a) {
    try {
      return !!a && null != a.location.href && ib(a, "foo")
    } catch (b) {
      return !1
    }
  }
  function dc(a, b) {
    if (a)
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
  }
  function ec(a) {
    var b = []
    dc(a, function(c, d) {
      b.push(d)
    })
    return b
  }
  function fc() {
    var a = gc
    if (!a) return ""
    var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/
    try {
      var c = b.exec(decodeURIComponent(a))
      if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
    } catch (d) {}
    return ""
  }
  var hc = { Yb: 1, $b: 2, Xb: 3 }
  function ic() {
    this.C = this.C
    this.Z = this.Z
  }
  ic.prototype.C = !1
  ic.prototype.na = function() {
    return this.C
  }
  ic.prototype.K = function() {
    this.C || ((this.C = !0), this.ia())
  }
  ic.prototype.ia = function() {
    if (this.Z) for (; this.Z.length; ) this.Z.shift()()
  }
  function H(a, b, c, d) {
    this.top = a
    this.right = b
    this.bottom = c
    this.left = d
  }
  function jc(a) {
    return a.right - a.left
  }
  function kc(a) {
    return a.bottom - a.top
  }
  function lc(a) {
    return new H(a.top, a.right, a.bottom, a.left)
  }
  H.prototype.ceil = function() {
    this.top = Math.ceil(this.top)
    this.right = Math.ceil(this.right)
    this.bottom = Math.ceil(this.bottom)
    this.left = Math.ceil(this.left)
    return this
  }
  H.prototype.floor = function() {
    this.top = Math.floor(this.top)
    this.right = Math.floor(this.right)
    this.bottom = Math.floor(this.bottom)
    this.left = Math.floor(this.left)
    return this
  }
  H.prototype.round = function() {
    this.top = Math.round(this.top)
    this.right = Math.round(this.right)
    this.bottom = Math.round(this.bottom)
    this.left = Math.round(this.left)
    return this
  }
  function mc(a, b, c) {
    b instanceof E
      ? ((a.left += b.x), (a.right += b.x), (a.top += b.y), (a.bottom += b.y))
      : ((a.left += b),
        (a.right += b),
        "number" === typeof c && ((a.top += c), (a.bottom += c)))
    return a
  }
  function nc(a, b, c) {
    a.google_image_requests || (a.google_image_requests = [])
    var d = a.document.createElement("img")
    c && (d.referrerPolicy = "no-referrer")
    d.src = b
    a.google_image_requests.push(d)
  }
  function oc(a) {
    if (pc()) nc(window, a, !0)
    else {
      var b = t.document
      if (b.body) {
        var c = b.getElementById("goog-srcless-iframe")
        if (!c) {
          c = new Tb(b).a
          var d = "IFRAME"
          "application/xhtml+xml" === c.contentType && (d = d.toLowerCase())
          c = c.createElement(d)
          c.style.display = "none"
          c.id = "goog-srcless-iframe"
          b.body.appendChild(c)
        }
        b = c
      } else b = null
      b && b.contentWindow && nc(b.contentWindow, a, !0)
    }
  }
  var pc = Ja(function() {
    return "referrerPolicy" in t.document.createElement("img")
  })
  var qc = {}
  function rc(a) {
    try {
      return a.getBoundingClientRect()
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 }
    }
  }
  function sc(a, b) {
    var c = new E(0, 0),
      d = Wb(G(a))
    if (!ib(d, "parent")) return c
    do {
      if (d == b) {
        var e = a,
          f = G(e)
        var g = new E(0, 0)
        var h = f ? G(f) : document
        h =
          !B || 9 <= Number(zb) || "CSS1Compat" == Sb(h).a.compatMode
            ? h.documentElement
            : h.body
        e != h &&
          ((e = rc(e)),
          (f = Vb(Sb(f).a)),
          (g.x = e.left + f.x),
          (g.y = e.top + f.y))
      } else (g = rc(a)), (g = new E(g.left, g.top))
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
  var tc = !!window.google_async_iframe_id,
    uc = (tc && window.parent) || window
  function vc() {
    if (tc && !cc(uc)) {
      var a = "." + C.domain
      try {
        for (; 2 < a.split(".").length && !cc(uc); )
          (C.domain = a = a.substr(a.indexOf(".") + 1)), (uc = window.parent)
      } catch (b) {}
      cc(uc) || (uc = window)
    }
    return uc
  }
  function wc(a, b, c) {
    try {
      a && (b = b.top)
      var d = void 0
      var e = b
      c = void 0 === c ? !1 : c
      a && null !== e && e != e.top && (e = e.top)
      try {
        if (void 0 === c ? 0 : c)
          var f = new F(e.innerWidth, e.innerHeight).round()
        else {
          var g = (e || window).document,
            h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body
          f = new F(h.clientWidth, h.clientHeight).round()
        }
        d = f
      } catch (p) {
        d = new F(-12245933, -12245933)
      }
      a = d
      var m = Vb(Sb(b.document).a)
      if (-12245933 == a.width) {
        var k = a.width
        var n = new H(k, k, k, k)
      } else n = new H(m.y, m.x + a.width, m.y + a.height, m.x)
      return n
    } catch (p) {
      return new H(-12245933, -12245933, -12245933, -12245933)
    }
  }
  var xc = { vb: "ts=0", ub: "opp=1", Ob: "adf=1" },
    yc = { NONE: 0, Nb: 1 }
  function zc() {
    this.D = 0
    this.c = !1
    this.b = -1
    this.a = !1
    this.f = 0
  }
  zc.prototype.isVisible = function() {
    return this.a ? 0.3 <= this.D : 0.5 <= this.D
  }
  var I = { Mb: 0, Pb: 1 },
    Ac = { 668123728: 0, 668123729: 1 },
    Bc = { NONE: 0, Vb: 1, Qb: 2 },
    Cc = { 480596784: 0, 480596785: 1, 21063355: 2 }
  function Dc() {
    this.a = null
    this.f = !1
    this.c = null
  }
  function J(a) {
    a.f = !0
    return a
  }
  function Ec(a, b) {
    a.c &&
      v(b, function(c) {
        c = a.c[c]
        void 0 !== c && a.b(c)
      })
  }
  function Fc(a) {
    Dc.call(this)
    this.h = a
  }
  r(Fc, Dc)
  Fc.prototype.b = function(a) {
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
  function Gc() {
    Dc.call(this)
  }
  r(Gc, Dc)
  Gc.prototype.b = function(a) {
    null === this.a && "number" === typeof a && (this.a = a)
  }
  function Hc() {
    this.a = {}
    this.b = {}
  }
  function K(a, b, c) {
    a.a[b] || (a.a[b] = new Fc(c))
    return a.a[b]
  }
  function L(a, b) {
    var c = a.b
    if (null !== c && b in c) return a.b[b]
    if ((a = a.a[b])) return a.a
  }
  function Ic(a) {
    var b = {},
      c = Ma(a.a, function(d) {
        return d.f
      })
    La(
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
  function Jc(a, b) {
    b = b.split("&")
    for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c].split("="),
        e = d[0]
      d = 1 < d.length ? parseInt(d[1], 10) : 1
      isNaN(d) || ((e = a.a[e]) && e.b(d))
    }
    return b.join("&")
  }
  function Kc(a, b) {
    v(Pa(a.a), function(c) {
      return Ec(c, b)
    })
  }
  function Lc(a, b) {
    b &&
      "string" === typeof b &&
      (b = b.match(/[&;?]eid=([^&;]+)/)) &&
      2 === b.length &&
      ((b = decodeURIComponent(b[1]).split(",")),
      (b = ya(b, function(c) {
        return Number(c)
      })),
      Kc(a, b))
  }
  function Mc(a) {
    K(a, "od", yc)
    J(K(a, "opac", I))
    J(K(a, "sbeos", I))
    J(K(a, "prf", I))
    J(K(a, "mwt", I))
    K(a, "iogeo", I)
    J(K(a, "xefpls", I))
  }
  var Nc = !B && !Xa()
  function Oc(a, b) {
    if (/-[a-z]/.test(b)) return null
    if (Nc && a.dataset) {
      if (
        !(
          !A("Android") ||
          Ya() ||
          A("Firefox") ||
          A("FxiOS") ||
          A("Opera") ||
          A("Silk") ||
          b in a.dataset
        )
      )
        return null
      a = a.dataset[b]
      return void 0 === a ? null : a
    }
    return a.getAttribute("data-" + ab(b))
  }
  function Pc(a, b) {
    return /-[a-z]/.test(b)
      ? !1
      : Nc && a.dataset
      ? b in a.dataset
      : a.hasAttribute
      ? a.hasAttribute("data-" + ab(b))
      : !!a.getAttribute("data-" + ab(b))
  }
  function Qc() {
    this.b = this.a = null
    this.f = this.h = 0
    this.c = "no"
    this.i = !1
  }
  function Rc(a) {
    if (!a) return !1
    try {
      var b = a.getBoundingClientRect()
      return b && 30 <= b.height && 30 <= b.width
    } catch (c) {
      return !1
    }
  }
  function Sc(a) {
    return xa(a, function(b) {
      return Rc(b)
    })
  }
  function Tc(a, b) {
    b = void 0 === b ? !0 : b
    return xa(a, function(c) {
      return "SCRIPT" != c.nodeName && (!b || "FONT" != c.nodeName)
    })
  }
  function Uc(a, b) {
    b = void 0 === b ? !0 : b
    if (!a) return null
    if (!a.children) return a
    for (var c = Tc(Da(a.children), b); c.length; ) {
      var d = Sc(c)
      if (1 == d.length) return d[0]
      if (1 < d.length) break
      c = Ia(
        c,
        function(e) {
          return e.children ? Tc(Da(e.children)) : []
        },
        b
      )
    }
    return a
  }
  function Vc(a, b) {
    return Ha(
      ya(b, function(c) {
        var d = a || document
        return Da(
          d.querySelectorAll && d.querySelector
            ? d.querySelectorAll("." + c)
            : Ub("*", c, a)
        )
      })
    )
  }
  function Wc(a) {
    var b = !0
    b = void 0 === b ? !1 : b
    var c = void 0 === c ? !1 : c
    a.b = a.a
    a.c = "mue"
    if (!Rc(a.a)) {
      var d = Uc(a.a),
        e = Uc(a.a, !1)
      Rc(e) && e != d && (a.i = !0)
      Rc(d)
        ? ((a.b = d), (a.c = "ie"))
        : b &&
          (c || D !== D.top) &&
          ((b = Vc(D.document.body, ["GoogleActiveViewInnerContainer"])),
          1 == b.length && ((a.b = b[0]), (a.c = "ce")))
    }
  }
  function Xc(a, b) {
    this.b = (void 0 === a ? 0 : a) || 0
    this.a = (void 0 === b ? "" : b) || ""
  }
  function Yc(a) {
    return !!a.b || !!a.a
  }
  Xc.prototype.toString = function() {
    return this.b + (this.a ? "-" : "") + this.a
  }
  function M() {}
  M.prototype.a = function() {
    return 0
  }
  M.prototype.c = function() {
    return 0
  }
  M.prototype.f = function() {
    return 0
  }
  M.prototype.b = function() {
    return 0
  }
  function Zc() {
    if (!$c()) throw Error()
  }
  r(Zc, M)
  function $c() {
    return !(!D || !D.performance)
  }
  Zc.prototype.a = function() {
    return $c() && D.performance.now
      ? D.performance.now()
      : M.prototype.a.call(this)
  }
  Zc.prototype.c = function() {
    return $c() && D.performance.memory
      ? D.performance.memory.totalJSHeapSize || 0
      : M.prototype.c.call(this)
  }
  Zc.prototype.f = function() {
    return $c() && D.performance.memory
      ? D.performance.memory.usedJSHeapSize || 0
      : M.prototype.f.call(this)
  }
  Zc.prototype.b = function() {
    return $c() && D.performance.memory
      ? D.performance.memory.jsHeapSizeLimit || 0
      : M.prototype.b.call(this)
  }
  function ad() {
    return (
      { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
        C.visibilityState ||
          C.webkitVisibilityState ||
          C.mozVisibilityState ||
          ""
      ] || 0
    )
  }
  function bd() {}
  bd.prototype.isVisible = function() {
    return 1 === ad()
  }
  var cd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/
  function dd() {
    var a = t,
      b = [],
      c = null
    do {
      var d = a
      if (cc(d)) {
        var e = d.location.href
        c = (d.document && d.document.referrer) || null
      } else (e = c), (c = null)
      b.push(new ed(e || "", d))
      try {
        a = d.parent
      } catch (f) {
        a = null
      }
    } while (a && d != a)
    d = 0
    for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d
    d = t
    if (
      d.location &&
      d.location.ancestorOrigins &&
      d.location.ancestorOrigins.length == b.length - 1
    )
      for (a = 1; a < b.length; ++a)
        (e = b[a]),
          e.url ||
            ((e.url = d.location.ancestorOrigins[a - 1] || ""), (e.ib = !0))
    return b
  }
  function fd(a, b) {
    this.a = a
    this.b = b
  }
  function ed(a, b, c) {
    this.url = a
    this.o = b
    this.ib = !!c
    this.depth = null
  }
  function gd() {
    this.c = "&"
    this.f = !1
    this.b = {}
    this.h = 0
    this.a = []
  }
  function hd(a, b) {
    var c = {}
    c[a] = b
    return [c]
  }
  function id(a, b, c, d, e) {
    var f = []
    dc(a, function(g, h) {
      ;(g = jd(g, b, c, d, e)) && f.push(h + "=" + g)
    })
    return f.join(b)
  }
  function jd(a, b, c, d, e) {
    if (null == a) return ""
    b = b || "&"
    c = c || ",$"
    "string" == typeof c && (c = c.split(""))
    if (a instanceof Array) {
      if (((d = d || 0), d < c.length)) {
        for (var f = [], g = 0; g < a.length; g++)
          f.push(jd(a[g], b, c, d + 1, e))
        return f.join(c[d])
      }
    } else if ("object" == typeof a)
      return (
        (e = e || 0), 2 > e ? encodeURIComponent(id(a, b, c, d, e + 1)) : "..."
      )
    return encodeURIComponent(String(a))
  }
  function kd(a, b, c, d) {
    a.a.push(b)
    a.b[b] = hd(c, d)
  }
  function ld(a, b, c) {
    b = b + "//pagead2.googlesyndication.com" + c
    var d = md(a) - c.length
    if (0 > d) return ""
    a.a.sort(function(n, p) {
      return n - p
    })
    c = null
    for (var e = "", f = 0; f < a.a.length; f++)
      for (var g = a.a[f], h = a.b[g], m = 0; m < h.length; m++) {
        if (!d) {
          c = null == c ? g : c
          break
        }
        var k = id(h[m], a.c, ",$")
        if (k) {
          k = e + k
          if (d >= k.length) {
            d -= k.length
            b += k
            e = a.c
            break
          }
          a.f &&
            ((e = d),
            k[e - 1] == a.c && --e,
            (b += k.substr(0, e)),
            (e = a.c),
            (d = 0))
          c = null == c ? g : c
        }
      }
    a = ""
    null != c && (a = e + "trn=" + c)
    return b + a
  }
  function md(a) {
    var b = 1,
      c
    for (c in a.b) b = c.length > b ? c.length : b
    return 3997 - b - a.c.length - 1
  }
  function nd() {
    this.b = new bd()
    this.a = $c() ? new Zc() : new M()
  }
  nd.prototype.setInterval = function(a, b) {
    return D.setInterval(a, b)
  }
  nd.prototype.clearInterval = function(a) {
    D.clearInterval(a)
  }
  nd.prototype.setTimeout = function(a, b) {
    return D.setTimeout(a, b)
  }
  nd.prototype.clearTimeout = function(a) {
    D.clearTimeout(a)
  }
  function od(a) {
    N()
    var b = vc() || D
    nc(b, a, !1)
  }
  u(nd)
  function pd() {}
  function N() {
    var a = pd.g()
    if (!a.a) {
      if (!D) throw Error("Context has not been set and window is undefined.")
      a.a = nd.g()
    }
    return a.a
  }
  u(pd)
  function qd(a) {
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
            (Fb && b instanceof Uint8Array)
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
  ua(qd, Eb)
  function rd(a) {
    this.f = a
    this.a = -1
    this.b = this.c = 0
  }
  function sd(a, b) {
    return function(c) {
      for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e]
      if (-1 < a.a) return b.apply(null, ha(d))
      try {
        return (a.a = a.f.a.a()), b.apply(null, ha(d))
      } finally {
        ;(a.c += a.f.a.a() - a.a), (a.a = -1), (a.b += 1)
      }
    }
  }
  function td(a, b) {
    this.b = a
    this.c = b
    this.a = new rd(a)
  }
  function O() {
    this.j = void 0
    this.m = 0
    this.c = new Xc(0, "")
    this.b = 0
    this.l = -1
    this.a = new Hc()
    J(K(this.a, "mv", Bc)).c = void 0 === Cc ? null : Cc
    K(this.a, "omid", I)
    J(K(this.a, "epoh", I))
    J(K(this.a, "epph", I))
    J(K(this.a, "umt", I)).c = void 0 === Ac ? null : Ac
    J(K(this.a, "phel", I))
    J(K(this.a, "phell", I))
    J(K(this.a, "oseid", hc))
    var a = this.a
    a.a.sloi || (a.a.sloi = new Gc())
    J(a.a.sloi)
    J(K(this.a, "xdi", I))
    J(K(this.a, "amp", I))
    J(K(this.a, "prf", I))
    J(K(this.a, "gtx", I))
    J(K(this.a, "mvp_lv", I))
    J(K(this.a, "eocm", I))
    J(K(this.a, "rxlist", I))
    this.f = new td(N(), this.a)
    this.h = null
    this.i = !1
  }
  function ud(a, b) {
    "string" === typeof b && 0 != b.length && Jc(a.a, b)
  }
  u(O)
  function vd() {
    var a = "https:"
    D && D.location && "http:" === D.location.protocol && (a = "http:")
    this.b = a
    this.a = 0.01
    this.c = Math.random()
  }
  function wd(a, b, c, d, e) {
    if ((d ? a.c : Math.random()) < (e || a.a))
      try {
        if (c instanceof gd) var f = c
        else
          (f = new gd()),
            dc(c, function(h, m) {
              var k = f,
                n = k.h++
              h = hd(m, h)
              k.a.push(n)
              k.b[n] = h
            })
        var g = ld(f, a.b, "/pagead/gen_204?id=" + b + "&")
        g && od(g)
      } catch (h) {}
  }
  function xd(a, b, c) {
    c = void 0 === c ? {} : c
    this.error = a
    this.context = b.context
    this.msg = b.message || ""
    this.id = b.id || "jserror"
    this.meta = c
  }
  var yd = null
  function zd() {
    var a = t.performance
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : ta()
  }
  function Ad() {
    var a = void 0 === a ? t : a
    return (a = a.performance) && a.now ? a.now() : null
  }
  function Bd(a, b, c) {
    this.label = a
    this.type = b
    this.value = c
    this.duration = 0
    this.uniqueId = Math.random()
    this.slotId = void 0
  }
  var P = t.performance,
    Cd = !!(P && P.mark && P.measure && P.clearMarks),
    Dd = Ja(function() {
      var a
      if ((a = Cd)) {
        var b
        if (null === yd) {
          yd = ""
          try {
            a = ""
            try {
              a = t.top.location.hash
            } catch (c) {
              a = t.location.hash
            }
            a && (yd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
          } catch (c) {}
        }
        b = yd
        a = !!b.indexOf && 0 <= b.indexOf("1337")
      }
      return a
    })
  function Ed() {
    var a = vc()
    this.b = []
    this.c = a || t
    var b = null
    a &&
      ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
      (this.b = a.google_js_reporting_queue),
      (b = a.google_measure_js_timing))
    this.a = Dd() || (null != b ? b : 1 > Math.random())
  }
  function Fd(a) {
    a &&
      P &&
      Dd() &&
      (P.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
      P.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
  }
  Ed.prototype.start = function(a, b) {
    if (!this.a) return null
    var c = Ad() || zd()
    a = new Bd(a, b, c)
    b = "goog_" + a.label + "_" + a.uniqueId + "_start"
    P && Dd() && P.mark(b)
    return a
  }
  function Gd() {
    var a = Hd
    this.i = Id
    this.h = "jserror"
    this.f = !0
    this.b = null
    this.j = this.c
    this.a = void 0 === a ? null : a
  }
  function Jd(a, b, c) {
    return sd(O.g().f.a, function() {
      try {
        if (a.a && a.a.a) {
          var d = a.a.start(b.toString(), 3)
          var e = c()
          var f = a.a,
            g = d
          if (f.a && "number" === typeof g.value) {
            var h = Ad() || zd()
            g.duration = h - g.value
            var m = "goog_" + g.label + "_" + g.uniqueId + "_end"
            P && Dd() && P.mark(m)
            !f.a || 2048 < f.b.length || f.b.push(g)
          }
        } else e = c()
      } catch (k) {
        f = a.f
        try {
          Fd(d), (f = a.j(b, new Kd(Ld(k)), void 0, void 0))
        } catch (n) {
          a.c(217, n)
        }
        if (!f) throw k
      }
      return e
    })()
  }
  function Md(a, b) {
    var c = Nd
    return sd(O.g().f.a, function(d) {
      for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f]
      return Jd(c, a, function() {
        return b.apply(void 0, e)
      })
    })
  }
  Gd.prototype.c = function(a, b, c, d, e) {
    e = e || this.h
    try {
      var f = new gd()
      f.f = !0
      kd(f, 1, "context", a)
      ;(b.error && b.meta && b.id) || (b = new Kd(Ld(b)))
      b.msg && kd(f, 2, "msg", b.msg.substring(0, 512))
      var g = b.meta || {}
      if (this.b)
        try {
          this.b(g)
        } catch (R) {}
      if (d)
        try {
          d(g)
        } catch (R) {}
      b = [g]
      f.a.push(3)
      f.b[3] = b
      var h = dd(),
        m = new ed(t.location.href, t, !1)
      b = null
      var k = h.length - 1
      for (d = k; 0 <= d; --d) {
        var n = h[d]
        !b && cd.test(n.url) && (b = n)
        if (n.url && !n.ib) {
          m = n
          break
        }
      }
      n = null
      var p = h.length && h[k].url
      0 != m.depth && p && (n = h[k])
      var q = new fd(m, n)
      q.b && kd(f, 4, "top", q.b.url || "")
      kd(f, 5, "url", q.a.url || "")
      wd(this.i, e, f, !1, c)
    } catch (R) {
      try {
        wd(
          this.i,
          e,
          { context: "ecmserr", rctx: a, msg: Ld(R), url: q && q.a.url },
          !1,
          c
        )
      } catch (Sa) {}
    }
    return this.f
  }
  function Ld(a) {
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
  function Kd(a) {
    xd.call(this, Error(a), { message: a })
  }
  r(Kd, xd)
  var Id,
    Nd,
    Hd = new Ed()
  function Od() {
    var a = vc()
    a &&
      "undefined" != typeof a.google_measure_js_timing &&
      !a.google_measure_js_timing &&
      ((a = Hd),
      (a.a = !1),
      a.b != a.c.google_js_reporting_queue &&
        (Dd() && v(a.b, Fd), (a.b.length = 0)))
  }
  ;(function() {
    Id = new vd()
    Nd = new Gd()
    var a = vc()
    a &&
      a.document &&
      ("complete" == a.document.readyState
        ? Od()
        : Hd.a &&
          Pb(a, "load", function() {
            Od()
          }))
  })()
  function Pd(a) {
    Nd.b = function(b) {
      v(a, function(c) {
        c(b)
      })
    }
  }
  function Qd(a, b) {
    return Jd(Nd, a, b)
  }
  function Q(a, b) {
    return Md(a, b)
  }
  function Rd(a, b) {
    wd(Id, a, b, "jserror" != a, void 0)
  }
  function Sd(a, b, c, d) {
    Nd.c(a, b, c, d)
  }
  var Td = Date.now(),
    Ud = -1,
    Vd = !1
  function S() {
    return Date.now() - Td
  }
  function Wd() {
    var a = O.g().j,
      b = Vd ? S() - Ud : -1
    if (947190542 == a) return 100
    if (79463069 == a) return 200
    a = [2e3, 4e3]
    var c = [250, 500, 1e3]
    Sd(637, Error(), 0.001)
    var d = -1
    ;-1 != b && -1 > b && (d = b)
    for (b = 0; b < a.length; ++b)
      if (d < a[b]) {
        var e = c[b]
        break
      }
    void 0 === e && (e = c[a.length])
    return e
  }
  function Xd(a) {
    for (var b = 0, c = a, d = 0; a && a != a.parent; )
      (a = a.parent), d++, cc(a) && ((c = a), (b = d))
    return { o: c, level: b }
  }
  var Oa = {
    Lb: "addEventListener",
    Rb: "getMaxSize",
    Sb: "getScreenSize",
    Tb: "getState",
    Ub: "getVersion",
    Zb: "removeEventListener",
    Wb: "isViewable",
  }
  function Yd(a) {
    var b = a !== a.top,
      c = a.top === Xd(a).o,
      d = -1,
      e = 0
    if (b && c && a.top.mraid) {
      d = 3
      var f = a.top.mraid
    } else d = (f = a.mraid) ? (b ? (c ? 2 : 1) : 0) : -1
    f &&
      (f.IS_GMA_SDK || (e = 2),
      Na(function(g) {
        return "function" === typeof f[g]
      }) || (e = 1))
    return { L: f, sa: e, Hb: d }
  }
  function Zd(a) {
    return (a = a.document) && "function" === typeof a.elementFromPoint
  }
  if (C && C.URL) {
    var $d,
      gc = C.URL
    $d = !!gc && 0 < fc().length
    Nd.f = !$d
  }
  function T(a, b, c, d) {
    var e = void 0 === e ? !1 : e
    c = Md(d, c)
    Pb(a, b, c, { capture: e })
    return c
  }
  function ae(a, b) {
    a && (a.b && (b[4] = a.b), a.a && (b[12] = a.a))
  }
  function be(a) {
    var b = []
    La(a, function(c, d) {
      d = encodeURIComponent(d)
      "string" === typeof c && (c = encodeURIComponent(c))
      b.push(d + "=" + c)
    })
    b.push("24=" + Date.now())
    return b.join("\n")
  }
  var ce = 0
  function de(a) {
    var b = Math.pow(10, 2)
    return Math.floor(a * b) / b
  }
  function ee(a, b) {
    try {
      ce++, b.postMessage(a, "*")
    } catch (c) {}
  }
  function fe(a, b) {
    b &&
      (a(b),
      b.frames &&
        v(b.frames, function(c) {
          fe(a, c)
        }))
  }
  function ge(a) {
    return new H(a.top, a.right, a.bottom, a.left)
  }
  function he() {
    var a = N().b
    return 0 === ad() ? -1 : a.isVisible() ? 0 : 1
  }
  function ie(a) {
    return [a.top, a.left, a.bottom, a.right].join("-")
  }
  function je(a) {
    if (!a) return null
    a = a.split("-")
    return 4 == a.length ? new H(Za(a[0]), Za(a[3]), Za(a[2]), Za(a[1])) : null
  }
  function ke(a, b, c) {
    if (b && a)
      if (c && 0 < c.length)
        for (
          c = xa(c, function(e) {
            var f = e.parent && e.parent !== e
            return e === D.top || f
          }),
            a = fa(c),
            c = a.next();
          !c.done;
          c = a.next()
        )
          ee(b, c.value)
      else {
        c = []
        var d = Yb(a)
        d && c.push(d)
        if (0 === c.length)
          try {
            c = ya(Ub("IFRAME".toString().toLowerCase(), void 0, a), function(
              e
            ) {
              return Yb(e)
            })
          } catch (e) {}
        a = fa(c)
        for (c = a.next(); !c.done; c = a.next()) {
          c = c.value
          try {
            b && fe(sa(ee, b), c)
          } catch (e) {}
        }
      }
  }
  function le(a) {
    if (!a) return 0
    if (Pc(a, "googleAvDm"))
      switch (Oc(a, "googleAvDm")) {
        case "1":
          return 1
        case "2":
          break
        case "3":
          return 3
        default:
          return 1
      }
    return 2
  }
  function me(a) {
    var b = {}
    if (void 0 == a) return b
    "?" === a.charAt(0) && (a = a.substring(1))
    bc(a, function(c, d) {
      return (b[c] = d)
    })
    return b
  }
  function ne() {
    var a = z
    return a
      ? Aa(
          "Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(
            ";"
          ),
          function(b) {
            return y(a, b)
          }
        ) ||
        (y(a, "OMI/") && !y(a, "XiaoMi/"))
        ? !0
        : y(a, "Presto") &&
          y(a, "Linux") &&
          !y(a, "X11") &&
          !y(a, "Android") &&
          !y(a, "Mobi")
      : !1
  }
  function oe() {
    var a = z
    return (
      y(a, "AppleTV") || y(a, "Apple TV") || y(a, "CFNetwork") || y(a, "tvOS")
    )
  }
  function pe() {
    var a = z
    return y(a, "sdk_google_atv_x86") || y(a, "Android TV")
  }
  function U() {
    this.h = !cc(D.top)
    this.i =
      $b() ||
      (!$b() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile")))
    var a = dd()
    a =
      0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url
        ? ((a = a[a.length - 1].url.match(ac)[3] || null) ? decodeURI(a) : a) ||
          ""
        : ""
    this.domain = a
    this.a = new H(0, 0, 0, 0)
    this.l = new F(0, 0)
    this.c = new F(0, 0)
    this.b = new H(0, 0, 0, 0)
    this.j = new E(0, 0)
    this.m = null
    this.s = !1
    this.f = !(!D || !Yd(D).L)
    qe(this)
  }
  function re(a, b) {
    b && b.screen && (a.l = new F(b.screen.width, b.screen.height))
  }
  function se(a, b) {
    var c = a.a ? new F(jc(a.a), kc(a.a)) : new F(0, 0)
    b = void 0 === b ? D : b
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
        var m = h.scrollHeight,
          k = h.scrollWidth,
          n = h.offsetHeight,
          p = h.offsetWidth
        h.clientHeight != n &&
          ((m = g.scrollHeight),
          (k = g.scrollWidth),
          (n = g.offsetHeight),
          (p = g.offsetWidth))
        m > c.height
          ? m > n
            ? ((d = m), (e = k))
            : ((d = n), (e = p))
          : m < n
          ? ((d = m), (e = k))
          : ((d = n), (e = p))
      }
      var q = new F(e, d)
    } catch (R) {
      q = new F(-12245933, -12245933)
    }
    a.c = q
  }
  function qe(a) {
    D &&
      D.document &&
      ((a.b = wc(!1, D, a.i)),
      (a.a = wc(!0, D, a.i)),
      (a.m = a.a),
      se(a, D),
      re(a, D))
  }
  function te() {
    if (U.g().s) return !0
    var a = N().b.isVisible(),
      b = 0 === ad()
    return a || b
  }
  u(U)
  var ue = new H(0, 0, 0, 0)
  function ve(a, b) {
    b = we(b)
    return 0 === b ? 0 : we(a) / b
  }
  function we(a) {
    return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
  }
  function xe(a, b) {
    if (!a || !b) return !1
    for (var c = 0; null !== a && 100 > c++; ) {
      if (a === b) return !0
      try {
        a: {
          var d = void 0
          if (
            Rb &&
            !(
              B &&
              wb("9") &&
              !wb("10") &&
              t.SVGElement &&
              a instanceof t.SVGElement
            ) &&
            (d = a.parentElement)
          ) {
            var e = d
            break a
          }
          d = a.parentNode
          var f = typeof d
          e =
            (("object" == f && null != d) || "function" == f) && 1 == d.nodeType
              ? d
              : null
        }
        if ((a = e || a)) {
          var g = G(a),
            h = g && Wb(g),
            m = h && h.frameElement
          m && (a = m)
        }
      } catch (k) {
        break
      }
    }
    return !1
  }
  function ye(a, b, c) {
    if (!a || !b) return !1
    b = mc(lc(a), -b.left, -b.top)
    a = (b.left + b.right) / 2
    b = (b.top + b.bottom) / 2
    var d = vc()
    cc(d.top) && d.top && d.top.document && (d = d.top)
    if (!Zd(d)) return !1
    a = d.document.elementFromPoint(a, b)
    if (!a) return !1
    b =
      (b = (b = G(c)) && b.defaultView && b.defaultView.frameElement) &&
      xe(b, a)
    d = a === c
    a =
      !d &&
      a &&
      Zb(a, function(e) {
        return e === c
      })
    return !(b || d || a)
  }
  function ze(a, b, c, d) {
    return U.g().h
      ? !1
      : 0 >= jc(a) || 0 >= kc(a)
      ? !0
      : c && d
      ? Qd(208, function() {
          return ye(a, b, c)
        })
      : !1
  }
  function Ae(a, b, c) {
    var d = new H(0, 0, 0, 0)
    this.time = a
    this.volume = null
    this.c = b
    this.a = d
    this.b = c
  }
  function Be(a, b, c, d, e, f, g) {
    this.j = a
    this.h = b
    this.c = c
    this.a = d
    this.f = e
    this.b = f
    this.i = g
  }
  function Ce(a) {
    this.c = a
    this.b = 0
    this.a = null
  }
  Ce.prototype.cancel = function() {
    N().clearTimeout(this.a)
    this.a = null
  }
  function De(a) {
    var b = N()
    a.a = b.setTimeout(
      sd(
        O.g().f.a,
        Q(143, function() {
          a.b++
          a.c.tb()
        })
      ),
      Wd()
    )
  }
  function V(a, b, c) {
    this.o = a
    this.C = void 0 === c ? "na" : c
    this.f = []
    this.l = !1
    this.c = new Ae(-1, !0, this)
    this.b = this
    this.h = b
    this.s = this.H = this.m = !1
    this.I = "uk"
    this.J = !1
    this.j = !0
  }
  l = V.prototype
  l.Sa = function() {
    return this.ba()
  }
  l.ba = function() {
    return !1
  }
  l.ma = function() {
    return (this.l = !0)
  }
  l.ea = function() {
    return this.b.I
  }
  l.fa = function() {
    return this.b.s
  }
  function W(a, b, c) {
    if (!a.s || (void 0 === c ? 0 : c))
      (a.s = !0), (a.I = b), (a.h = 0), a.pa(), a.b != a || Ee(a)
  }
  l.G = function() {
    return this.b.C
  }
  l.M = function() {
    return this.b.La()
  }
  l.La = function() {
    return {}
  }
  l.O = function() {
    return this.b.h
  }
  function Fe(a, b) {
    w(a.f, b) || (a.f.push(b), b.ka(a.b), b.U(a.c), b.ha() && (a.m = !0))
  }
  function Ge(a, b) {
    var c = a.f,
      d = wa(c, b)
    0 <= d && Array.prototype.splice.call(c, d, 1)
    a.m && b.ha() && He(a)
  }
  l.wa = function() {
    var a = U.g()
    a.a = wc(!0, this.o, a.i)
  }
  l.xa = function() {
    re(U.g(), this.o)
  }
  l.Ra = function() {
    se(U.g(), this.o)
  }
  l.qb = function() {
    var a = U.g()
    a.b = wc(!1, this.o, a.i)
  }
  l.Ma = function() {
    return this.c.a
  }
  function Ie(a) {
    a = a.b
    a.xa()
    a.wa()
    a.qb()
    a.Ra()
    a.c.a = a.Ma()
  }
  function Je(a) {
    var b = S(),
      c = te()
    return new Ae(b, c, a)
  }
  l.tb = function() {}
  function He(a) {
    a.m = a.f.length
      ? Aa(a.f, function(b) {
          return b.ha()
        })
      : !1
  }
  l.pa = function() {}
  function Ke(a) {
    var b = Da(a.f)
    v(b, function(c) {
      c.U(a.c)
    })
  }
  function Ee(a) {
    var b = Da(a.f)
    v(b, function(c) {
      c.ka(a.b)
    })
    a.b != a || Ke(a)
  }
  l.ka = function(a) {
    var b = this.b,
      c = a.O()
    this.b = c >= this.h ? a : this
    b !== this.b
      ? (this.b == this || (1 == c && 0 != this.h) || this.pa(),
        (this.j = this.b.j),
        Ee(this))
      : this.j !== this.b.j && ((this.j = this.b.j), Ee(this))
  }
  l.U = function(a) {
    if (a.b === this.b) {
      var b
      if (!(b = this.H)) {
        b = this.c
        var c = this.m
        if (
          (c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c)
        )
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
        b = !c
      }
      this.c = a
      b && Ke(this)
    }
  }
  function Le(a, b) {
    a.h !== b && (a.b != a && b > a.b.h && ((a.b = a), Ee(a)), (a.h = b))
  }
  l.ha = function() {
    return this.m
  }
  l.K = function() {
    this.J = !0
  }
  l.na = function() {
    return this.J
  }
  function Me(a, b, c, d) {
    this.c = a
    this.a = new H(0, 0, 0, 0)
    this.l = new H(0, 0, 0, 0)
    this.b = b
    this.A = c
    this.C = d
    this.u = !1
    this.timestamp = -1
    this.h = new Be(b.c, this.a, new H(0, 0, 0, 0), 0, 0, S(), 0)
  }
  l = Me.prototype
  l.pb = function() {
    return !0
  }
  l.va = function() {}
  l.Ka = function() {
    if (this.c) {
      var a = this.c,
        b = this.b.b.o
      try {
        try {
          var c = ge(a.getBoundingClientRect())
        } catch (k) {
          c = new H(0, 0, 0, 0)
        }
        var d = c.right - c.left,
          e = c.bottom - c.top,
          f = sc(a, b),
          g = f.x,
          h = f.y
        var m = new H(
          Math.round(h),
          Math.round(g + d),
          Math.round(h + e),
          Math.round(g)
        )
      } catch (k) {
        m = lc(ue)
      }
      this.a = m
    }
  }
  l.Ya = function() {
    this.l = this.b.c.a
  }
  l.da = function() {
    this.Ka()
    this.h = new Be(
      this.b.c,
      this.a,
      this.h.c,
      this.h.a,
      this.h.f,
      S(),
      this.h.i
    )
  }
  l.K = function() {
    this.na() || (Ge(this.b, this), this.va(), (this.u = !0))
  }
  l.na = function() {
    return this.u
  }
  l.M = function() {
    return this.b.M()
  }
  l.O = function() {
    return this.b.O()
  }
  l.ea = function() {
    return this.b.ea()
  }
  l.fa = function() {
    return this.b.fa()
  }
  l.ka = function() {}
  l.U = function() {
    this.da()
  }
  l.ha = function() {
    return this.C
  }
  function Ne(a) {
    this.h = !1
    this.a = a
    this.f = qa
  }
  l = Ne.prototype
  l.O = function() {
    return this.a.O()
  }
  l.ea = function() {
    return this.a.ea()
  }
  l.fa = function() {
    return this.a.fa()
  }
  l.create = function(a, b, c) {
    var d = null
    this.a && ((d = this.Za(a, b, c)), Fe(this.a, d))
    return d
  }
  l.nb = function() {
    return this.Pa()
  }
  l.Pa = function() {
    return !1
  }
  l.mb = function(a) {
    return this.a.ma() ? (Fe(this.a, this), (this.f = a), !0) : !1
  }
  l.ka = function(a) {
    0 == a.O() && this.f(a.ea(), this)
  }
  l.U = function() {}
  l.ha = function() {
    return !1
  }
  l.K = function() {
    this.h = !0
  }
  l.na = function() {
    return this.h
  }
  l.M = function() {
    return {}
  }
  function Oe(a, b, c) {
    this.c = void 0 === c ? 0 : c
    this.b = a
    this.a = null == b ? "" : b
  }
  function Pe(a) {
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
  function Qe(a, b) {
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
  function Re() {
    this.c = 0
    this.a = []
    this.b = !1
  }
  Re.prototype.add = function(a, b, c) {
    ++this.c
    a = new Oe(a, b, c)
    this.a.push(new Oe(a.b, a.a, a.c + this.c / 4096))
    this.b = !0
    return this
  }
  function Se(a, b) {
    v(b.a, function(c) {
      a.add(c.b, c.a, Pe(c))
    })
  }
  function Te(a, b) {
    var c = void 0 === c ? 0 : c
    var d = void 0 === d ? !0 : d
    dc(b, function(e, f) {
      ;(d && void 0 === e) || a.add(f, e, c)
    })
    return a
  }
  function Ue(a) {
    var b = Ve
    a.b &&
      (Fa(a.a, function(c, d) {
        return Qe(d, c) ? 1 : Qe(c, d) ? -1 : 0
      }),
      (a.b = !1))
    return za(
      a.a,
      function(c, d) {
        d = b(d)
        return "" + c + ("" != c && "" != d ? "&" : "") + d
      },
      ""
    )
  }
  function Ve(a) {
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
      : b + "=" + (w(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
  }
  function We(a) {
    var b = void 0 === b ? !0 : b
    this.a = new Re()
    void 0 !== a && Se(this.a, a)
    b && this.a.add("v", Lb, -16)
  }
  We.prototype.toString = function() {
    var a = "//pagead2.googlesyndication.com//pagead/gen_204",
      b = Ue(this.a)
    0 < b.length && (a += "?" + b)
    return a
  }
  function Xe(a) {
    var b = [],
      c = []
    La(a, function(d, e) {
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
  function Ye() {
    if (Lb && "unreleased" !== Lb) return Lb
  }
  function Ze(a) {
    if (/&v=[^&]+/.test(a)) return a
    var b = Ye()
    return b ? a + "&v=" + encodeURIComponent(b) : a
  }
  function $e(a) {
    var b = void 0 === b ? 4e3 : b
    a = Ze(a.toString())
    a = a.substring(0, b)
    od(a)
  }
  function af() {
    this.a = 0
  }
  u(af)
  function bf(a, b, c) {
    v(a.c, function(d) {
      var e = a.a
      if (!d.a && (d.c(b, c), d.f())) {
        d.a = !0
        var f = d.b(),
          g = new Re()
        g.add("id", "av-js")
        g.add("type", "verif")
        g.add("vtype", d.h)
        d = af.g()
        g.add("i", d.a++)
        g.add("adk", e)
        Te(g, f)
        e = new We(g)
        $e(e)
      }
    })
  }
  function cf() {
    this.a = this.b = this.c = 0
  }
  function df(a, b, c, d) {
    b && ((a.c += c), (a.b += c), (a.a = Math.max(a.a, a.b)))
    if (void 0 === d ? !b : d) a.b = 0
  }
  var ef = [1, 0.75, 0.5, 0.3, 0]
  function ff(a) {
    this.a = a = void 0 === a ? ef : a
    this.b = ya(this.a, function() {
      return new cf()
    })
  }
  function gf(a) {
    return hf(
      a,
      function(b) {
        return b.c
      },
      !1
    )
  }
  function jf(a) {
    return hf(
      a,
      function(b) {
        return b.a
      },
      !0
    )
  }
  function kf(a, b, c, d, e, f) {
    var g = void 0 === g ? !0 : g
    c = f ? Math.min(b, c) : c
    for (f = 0; f < a.a.length; f++) {
      var h = a.a[f],
        m = 0 < c && c >= h
      h = !(0 < b && b >= h) || d
      df(a.b[f], g && m, e, !g || h)
    }
  }
  function hf(a, b, c) {
    a = ya(a.b, function(d) {
      return b(d)
    })
    return c ? a : lf(a)
  }
  function lf(a) {
    return ya(a, function(b, c, d) {
      return 0 < c ? d[c] - d[c - 1] : d[c]
    })
  }
  function mf() {
    this.a = new ff()
    this.c = new cf()
    this.b = -1
    this.f = new ff([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0])
  }
  function nf(a) {
    return 1e3 <= a.c.a
  }
  var of = new H(0, 0, 0, 0)
  function X(a, b, c) {
    ic.call(this)
    this.Gb = lc(of)
    this.c = new mf()
    this.X = -2
    Date.now()
    this.sb = -1
    this.jb = b
    this.T = null
    this.s = !1
    this.ca = null
    this.H = -1
    this.$ = c
    this.Ja = this.Ha = qa
    this.b = new Qc()
    this.b.a = a
    this.b.b = a
    this.A = !1
    this.i = { za: null, ya: null }
    this.aa = !0
    this.I = null
    O.g().m++
    this.f = new zc()
    this.rb = this.qa = -1
    this.Ga = 0
    this.B = -1
    this.a = null
    this.ra = new H(0, 0, 0, 0)
    this.gb = !1
    this.j = new Hc()
    Mc(this.j)
    ;(a = this.b.a) &&
      a.getAttribute &&
      Pc(a, "googleAvInapp") &&
      (U.g().f = !0)
    1 == this.$ ? (a = this.j.a.od) && a.b(1) : (a = this.j.a.od) && a.b(0)
  }
  r(X, ic)
  l = X.prototype
  l.ia = function() {
    this.b.b &&
      (this.i.za && (Qb(this.b.b, "mouseover", this.i.za), (this.i.za = null)),
      this.i.ya && (Qb(this.b.b, "mouseout", this.i.ya), (this.i.ya = null)))
    this.I && this.I.K()
    this.a && this.a.K()
    delete this.c
    delete this.Ha
    delete this.Ja
    delete this.b.a
    delete this.b.b
    delete this.i
    delete this.I
    delete this.a
    delete this.j
    ic.prototype.ia.call(this)
  }
  function pf(a) {
    return a.a ? a.a.a : a.Gb
  }
  l.ua = function(a) {
    ud(O.g(), a)
  }
  l.ob = function() {
    return !1
  }
  l.Qa = function() {
    this.s = !0
  }
  l.ga = function() {
    return this.s
  }
  l.Ta = function() {
    this.f.D = 0
  }
  l.Ua = function() {
    this.c = new mf()
  }
  function qf(a, b) {
    if (a.a) {
      if (b.G() === a.a.G()) return
      a.a.K()
      a.a = null
    }
    b = b.create(a.b.b, a.j, a.ob())
    if ((b = null != b && b.pb() ? b : null)) a.a = b
  }
  function rf(a, b, c) {
    if (a.a) {
      a.a.da()
      var d = a.a.h,
        e = d.j,
        f = e.a
      if (null != d.c) {
        var g = d.h
        a.ca = new E(g.left - f.left, g.top - f.top)
        a.ra = d.c
      }
      f = a.Aa() ? Math.max(d.a, d.f) : d.a
      g = {}
      null !== e.volume && (g.volume = e.volume)
      a.T && -1 != a.jb && -1 !== d.b && -1 !== a.T.b
        ? ((e = d.b - a.T.b), (e = 1e4 < e ? 0 : e))
        : (e = 0)
      a.T = d
      a.Va(f, b, c, !1, g, e, d.i)
    }
  }
  function sf(a) {
    if (a.ga() && a.I) {
      var b = 1 == L(a.j, "od"),
        c = U.g().a,
        d = a.I,
        e = new F(jc(c), kc(c))
      c = a.Aa()
      a = { Ib: a.a ? a.a.G() : "ns", ca: a.ca, Kb: e, Aa: c, D: a.f.D, Jb: b }
      if ((b = d.b)) {
        b.da()
        e = b.h
        var f = e.j.a,
          g = null,
          h = null
        null != e.c &&
          f &&
          ((g = e.h),
          (g = new E(g.left - f.left, g.top - f.top)),
          (h = new F(f.right - f.left, f.bottom - f.top)))
        c = {
          Ib: b.G(),
          ca: g,
          Kb: h,
          Aa: c,
          Jb: !1,
          D: c ? Math.max(e.a, e.f) : e.a,
        }
      } else c = null
      c && bf(d, a, c)
    }
  }
  l.Va = function(a, b, c, d, e, f, g) {
    this.A ||
      (this.ga() &&
        ((e = new zc()),
        (e.c = c),
        (e.b = he()),
        (e.D = 0 === this.H && 1 === L(this.j, "opac") ? 0 : a),
        (e.a = this.oa()),
        (e.f = g),
        (a = this.c),
        (c = this.f),
        (d = d && this.f.D >= (this.oa() ? 0.3 : 0.5)),
        (a.b = Math.max(a.b, e.D)),
        kf(a.f, e.f, c.f, e.c, f, d),
        kf(a.a, e.D, c.D, e.c, f, d),
        (d = d || c.a != e.a ? c.isVisible() && e.isVisible() : c.isVisible()),
        (c = !e.isVisible() || e.c),
        df(a.c, d, f, c),
        (this.jb = b),
        0 < e.D && (-1 === this.qa && (this.qa = b), (this.rb = b)),
        -1 == this.sb && nf(this.c) && (this.sb = b),
        -2 == this.X && (this.X = we(pf(this)) ? e.D : -1),
        (this.f = e)),
      this.Ha(this))
  }
  l.oa = function() {
    return !1
  }
  l.Aa = function() {
    return this.gb || !1
  }
  function tf(a) {
    a.b.b &&
      ((a.i.za = T(
        a.b.b,
        "mouseover",
        function() {
          var b = S()
          a.B = b
        },
        149
      )),
      (a.i.ya = T(
        a.b.b,
        "mouseout",
        function() {
          var b = S()
          ;-1 == a.B || b < a.B || (a.Ga += b - a.B)
          a.B = -1
        },
        150
      )))
  }
  function uf(a, b, c) {
    b && (a.Ha = b)
    c && (a.Ja = c)
  }
  function vf(a) {
    return Xa()
      ? ((a = (a = G(a)) && Wb(a)),
        !!(
          a &&
          a.location &&
          a.location.ancestorOrigins &&
          0 < a.location.ancestorOrigins.length &&
          a.location.origin == a.location.ancestorOrigins[0]
        ))
      : !0
  }
  var wf =
    "StopIteration" in t
      ? t.StopIteration
      : { message: "StopIteration", stack: "" }
  function xf() {}
  xf.prototype.next = function() {
    throw wf
  }
  xf.prototype.Xa = function() {
    return this
  }
  function yf(a) {
    if (a instanceof xf) return a
    if ("function" == typeof a.Xa) return a.Xa(!1)
    if (ra(a)) {
      var b = 0,
        c = new xf()
      c.next = function() {
        for (;;) {
          if (b >= a.length) throw wf
          if (b in a) return a[b++]
          b++
        }
      }
      return c
    }
    throw Error("Not implemented")
  }
  function zf(a, b) {
    if (ra(a))
      try {
        v(a, b, void 0)
      } catch (c) {
        if (c !== wf) throw c
      }
    else {
      a = yf(a)
      try {
        for (;;) b.call(void 0, a.next(), void 0, a)
      } catch (c) {
        if (c !== wf) throw c
      }
    }
  }
  function Af(a, b) {
    var c = 1
    zf(a, function(d) {
      c = b.call(void 0, c, d)
    })
    return c
  }
  function Bf(a, b) {
    var c = yf(a)
    a = new xf()
    a.next = function() {
      var d = c.next()
      if (b.call(void 0, d, void 0, c)) return d
      throw wf
    }
    return a
  }
  function Cf(a) {
    var b = yf(a)
    a = new xf()
    var c = 100
    a.next = function() {
      if (0 < c--) return b.next()
      throw wf
    }
    return a
  }
  function Df(a, b) {
    this.c = b
    this.b = null == a
    this.a = a
  }
  r(Df, xf)
  Df.prototype.next = function() {
    if (this.b) throw wf
    var a = this.a || null
    this.b = null == a
    var b
    if ((b = a)) {
      b = this.c
      if (
        ib(a, "parentElement") &&
        null != a.parentElement &&
        a != a.parentElement
      )
        var c = a.parentElement
      else if (b) {
        var d = void 0 === d ? vf : d
        if (d(a))
          try {
            var e = G(a),
              f = e && Wb(e),
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
  function Ef(a) {
    var b = 1
    a = Cf(new Df(a, !0))
    a = Bf(a, function() {
      return 0 < b
    })
    return Af(a, function(c, d) {
      var e = 1
      if (ib(d, "style") && d.style) {
        var f = parseFloat
        a: {
          var g = G(d)
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
          g = d.style[$a()]
          if ("undefined" !== typeof g) d = g
          else {
            g = d.style
            var h = qc.opacity
            if (!h) {
              var m = $a()
              h = m
              void 0 === d.style[m] &&
                ((m =
                  (ob ? "Webkit" : nb ? "Moz" : B ? "ms" : lb ? "O" : null) +
                  bb(m)),
                void 0 !== d.style[m] && (h = m))
              qc.opacity = h
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
  function Ff(a, b, c, d, e, f, g) {
    f = void 0 === f ? qa : f
    g = void 0 === g ? [] : g
    X.call(this, c, d, e)
    this.Ea = b
    this.Fa = this.l = 0
    this.P = null
    this.cb = this.Ia = ""
    this.F = []
    this.N = []
    this.Ca = this.bb = ""
    this.fb = !1
    this.W = 4
    this.Ba = []
    this.R = this.m = ""
    this.$a = !1
    this.Da = null
    this.S = 0
    this.J = this.eb = he()
    this.h = 0
    this.Fb = f
    this.lb = !1
    this.Y = -1
    this.u = {}
    this.kb = g
    if ((a = this.b.a))
      0 == this.l
        ? this.b.a
          ? ((b = this.b.a._adk_),
            b ||
              (b =
                (b = Oc(this.b.a, "googleAvAdk")) && !/[^0-9]/.test(b)
                  ? parseInt(b, 10)
                  : 0))
          : (b = 0)
        : (b = this.l),
        (this.l = b),
        "" == this.Ia && (this.Ia = String(a._avi_ || "")),
        "" == this.cb &&
          (this.cb = a._avihost_
            ? String(a._avihost_)
            : "pagead2.googlesyndication.com"),
        this.F.length || (this.F = Gf(a, "_avicxn_", "googleAvCxn")),
        this.N.length || (this.N = Gf(a, "_avieoscxn_", "googleEOSAvCxn")),
        "" == this.bb &&
          (this.bb = String(a._aviextcxn_ || Oc(a, "googleAvExtCxn") || "")),
        "" == this.Ca && (this.Ca = String(a._cid_ || "")),
        this.fb || (this.fb = !!a._imm_ || Pc(a, "googleAvImmediate")),
        "" == this.R &&
          (this.R = String(a._cvu_ || Oc(a, "googleAvCpmav") || "")),
        "" == this.m && (this.m = String(Oc(a, "googleAvBtr") || "")),
        this.ua(String(a._avm_ || Oc(a, "googleAvMetadata") || ""))
    Lc(O.g().a, this.Ea)
  }
  r(Ff, X)
  function Gf(a, b, c) {
    return (a = String(a[b] || Oc(a, c) || "")) ? a.split("|") : []
  }
  l = Ff.prototype
  l.ia = function() {
    delete this.Ba
    delete this.kb
    X.prototype.ia.call(this)
  }
  function Hf(a, b, c) {
    v(a.kb, function(d) {
      return d.a(a, c, b)
    })
  }
  l.ga = function() {
    return this.s && !(1 == this.h || 3 == this.h)
  }
  function If(a, b) {
    a.h == b ||
      2 == a.h ||
      (1 == a.h && 3 == b) ||
      ((a.h = b), (1 != a.h && 3 != a.h) || a.Ua())
  }
  l.Ta = function() {
    X.prototype.Ta.call(this)
    this.ra = new H(0, 0, 0, 0)
  }
  l.Ua = function() {
    X.prototype.Ua.call(this)
    this.ra = new H(0, 0, 0, 0)
  }
  l.Qa = function() {
    this.s ||
      (zd(),
      Jf(this, !1, this.X),
      null != this.m && "" != this.m && (oc(this.m), (this.m = "")))
    X.prototype.Qa.call(this)
    Kf(this)
  }
  function Kf(a) {
    if (a.s && t == t.top) {
      var b = t.pageYOffset
      null != b && (a.Y = Math.max(b, a.Y))
      Hf(a, 4, {})
    }
  }
  l.ua = function(a) {
    if ("string" === typeof a && 0 != a.length) {
      var b = new Hc(),
        c = O.g()
      K(b, "omid", I)
      Jc(b, a)
      b = L(b, "omid")
      null !== b && (c.a.b.omid = b)
      a = Jc(this.j, a)
      c = a.split("&")
      for (b = 0; b < c.length; b++) {
        var d = c[b]
        "ts=0" == d
          ? (this.aa = !1)
          : 0 == d.lastIndexOf("la=", 0)
          ? ((d = d.split("=")[1]),
            "0" == d ? (this.S = 2) : "1" == d && (this.S = 1))
          : 0 == d.lastIndexOf("cr=", 0)
          ? "1" == d.split("=")[1] && (this.gb = !0)
          : "adf=1" == d && (this.lb = !0)
      }
      this.f.a = this.oa()
      X.prototype.ua.call(this, a)
    }
  }
  l.Va = function(a, b, c, d, e, f, g) {
    var h = nf(this.c),
      m = Math.floor(100 * this.f.D)
    this.S = 242500 <= we(pf(this)) ? 1 : 2
    X.prototype.Va.call(this, a, b, c, d, e, f, g)
    ;-1 == this.J && -1 != this.f.b
      ? (this.J = this.f.b)
      : 0 == this.J && 1 == this.f.b && (this.J = 1)
    a = nf(this.c)
    b = Math.floor(100 * this.f.D)
    ;((!h && a) || b != m) && Jf(this, a, b)
    try {
      this.H = Ef(this.b.b)
    } catch (k) {}
    Kf(this)
  }
  l.oa = function() {
    return pb ? !1 : 1 == this.S
  }
  function Lf(a, b, c) {
    var d = [],
      e = []
    d = void 0 === d ? [] : d
    e = void 0 === e ? [] : e
    a.F.length || ((a.Ia = b), d && (a.F = d), (a.Ca = void 0 === c ? "" : c))
    !a.N.length && e && (a.N = e)
  }
  function Mf(a) {
    if (a.Da) return a.Da
    var b = Nf(a),
      c = {}
    return (
      (c.rst = void 0),
      (c.dlt = void 0),
      (c.rpt = void 0),
      (c.isd = void 0),
      (c.msd = 0 <= a.Y ? a.Y : void 0),
      (c.ext = b ? b : void 0),
      c
    )
  }
  function Nf(a) {
    return a.u && 0 < ec(a.u).length
      ? encodeURIComponent(
          ya(ec(a.u), function(b) {
            return b + "=" + a.u[b]
          }).join("&")
        )
      : null
  }
  function Of(a, b) {
    b &&
      dc(b, function(c, d) {
        null == c ? delete a.u[d] : (a.u[d] = c)
      })
  }
  function Jf(a, b, c) {
    if ((b = a.Fb(b, c))) Of(a, b), Hf(a, 3, {})
  }
  l.ob = function() {
    return !1
  }
  function Pf(a, b, c, d) {
    Me.call(this, a, b, c, d)
  }
  r(Pf, Me)
  Pf.prototype.hb = function(a) {
    return ze(a, this.l, this.c, 1 == L(this.A, "od"))
  }
  Pf.prototype.da = function() {
    this.timestamp = S()
    this.Ka()
    this.Ya()
    var a = this.a
    var b = this.l
    a =
      a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom
        ? new H(
            Math.max(a.top, b.top),
            Math.min(a.right, b.right),
            Math.min(a.bottom, b.bottom),
            Math.max(a.left, b.left)
          )
        : new H(0, 0, 0, 0)
    b = a.top >= a.bottom || a.left >= a.right ? new H(0, 0, 0, 0) : a
    a = this.b.c
    var c = 0,
      d = 0,
      e = 0
    0 < (this.a.bottom - this.a.top) * (this.a.right - this.a.left) &&
      (this.hb(b)
        ? (b = new H(0, 0, 0, 0))
        : ((c = U.g().l),
          (e = new H(0, c.height, c.width, 0)),
          (c = ve(b, this.a)),
          (d = ve(b, U.g().a)),
          (e = ve(b, e))))
    b =
      b.top >= b.bottom || b.left >= b.right
        ? new H(0, 0, 0, 0)
        : mc(b, -this.a.left, -this.a.top)
    te() || (d = c = 0)
    this.h = new Be(a, this.a, b, c, d, this.timestamp, e)
  }
  Pf.prototype.G = function() {
    return this.b.G()
  }
  function Qf(a) {
    var b = []
    Rf(new Sf(), a, b)
    return b.join("")
  }
  function Sf() {}
  function Rf(a, b, c) {
    if (null == b) c.push("null")
    else {
      if ("object" == typeof b) {
        if (Array.isArray(b)) {
          var d = b
          b = d.length
          c.push("[")
          for (var e = "", f = 0; f < b; f++)
            c.push(e), Rf(a, d[f], c), (e = ",")
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
                (c.push(e), Tf(d, c), c.push(":"), Rf(a, f, c), (e = ",")))
          c.push("}")
          return
        }
      }
      switch (typeof b) {
        case "string":
          Tf(b, c)
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
  var Uf = {
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
    Vf = /\uffff/.test("\uffff")
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g
  function Tf(a, b) {
    b.push(
      '"',
      a.replace(Vf, function(c) {
        var d = Uf[c]
        d ||
          ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1)),
          (Uf[c] = d))
        return d
      }),
      '"'
    )
  }
  function Wf() {
    this.key = "goog_adspeed"
    this.c = [3, 4]
    this.b = null
  }
  Wf.prototype.a = function(a, b, c) {
    if (!w(this.c, c) || !Yc(new Xc(a.l, a.P))) return !1
    c = {}
    c = ((c[0] = this.key), (c[40] = Qf(Mf(a))), c)
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
    x(e, c, b)
    return Xf(a, { Wa: {}, Oa: e })
  }
  function Yf() {
    this.key = "goog_update_data"
    this.b = 0
    this.c = !1
  }
  Yf.prototype.a = function(a, b, c) {
    if (c != this.b || !Yc(new Xc(a.l, a.P))) return !1
    c = 1 == a.W
    var d = nf(a.c),
      e = {},
      f = {}
    b = {
      Oa: ((e[0] = this.key), (e[40] = Qf(Mf(a))), e),
      Wa: Object.assign({}, b, ((f.r = b.r), f)),
    }
    if (c) return d && !this.c ? ((this.c = d), Xf(a, b)) : !1
    this.c = d
    return Xf(a, b)
  }
  function Zf(a) {
    Yf.call(this, a)
    this.key = "goog_image_request"
    this.b = 2
  }
  r(Zf, Yf)
  function $f(a) {
    Yf.call(this, a)
    this.key = "goog_image_request"
    this.b = 1
  }
  r($f, Yf)
  $f.prototype.a = function(a, b, c) {
    var d = !a.$a
    if ((nf(a.c) && a.aa) || d) {
      if ((b = Yf.prototype.a.call(this, a, b, c)))
        if ((nf(a.c) || (a.$a = !0), nf(a.c) || a.aa)) a.aa = !1
      return b
    }
    return !1
  }
  function ag() {
    this.b = []
    this.a = []
  }
  function bg() {
    var a = cg
    return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : Ca(a.a, a.b)
  }
  u(ag)
  var cg = ag.g()
  function dg() {
    this.a = this.b = null
  }
  function eg(a, b) {
    function c(d, e) {
      b(d, e)
    }
    if (null == a.b) return !1
    a.a = Ba(a.b, function(d) {
      return null != d && d.nb()
    })
    a.a && (a.a.mb(c) ? Ie(a.a.a) : b(a.a.a.ea(), a.a))
    return null != a.a
  }
  u(dg)
  function fg(a) {
    a = gg(a)
    Ne.call(this, a.length ? a[a.length - 1] : new V(D, 0))
    this.c = a
    this.b = null
  }
  r(fg, Ne)
  l = fg.prototype
  l.G = function() {
    return (this.b ? this.b : this.a).G()
  }
  l.M = function() {
    return (this.b ? this.b : this.a).M()
  }
  l.O = function() {
    return (this.b ? this.b : this.a).O()
  }
  l.mb = function(a) {
    var b = !1
    v(this.c, function(c) {
      c.ma() && (b = !0)
    })
    b && ((this.f = a), Fe(this.a, this))
    return b
  }
  l.K = function() {
    v(this.c, function(a) {
      a.pa()
      a.K()
    })
    Ne.prototype.K.call(this)
  }
  l.nb = function() {
    return Aa(this.c, function(a) {
      return a.Sa()
    })
  }
  l.Pa = function() {
    return Aa(this.c, function(a) {
      return a.ba()
    })
  }
  l.Za = function(a, b, c) {
    return new Pf(a, this.a, b, c)
  }
  l.U = function(a) {
    this.b = a.b
  }
  function gg(a) {
    if (!a.length) return []
    a = xa(a, function(c) {
      return null != c && c.Sa()
    })
    for (var b = 1; b < a.length; b++) Fe(a[b - 1], a[b])
    return a
  }
  function hg(a, b, c, d) {
    Me.call(this, a, b, c, d)
    this.s = this.m = null
  }
  r(hg, Pf)
  l = hg.prototype
  l.pb = function() {
    var a = this
    this.s || (this.s = S())
    if (
      Qd(298, function() {
        return ig(a)
      })
    )
      return !0
    W(this.b, "msf")
    return !1
  }
  function jg(a, b) {
    try {
      if (b.length) {
        a.m || (a.m = S())
        var c = kg(b),
          d = sc(a.c, a.b.b.o),
          e = d.x,
          f = d.y
        a.a = new H(
          Math.round(f),
          Math.round(e) + c.boundingClientRect.width,
          Math.round(f) + c.boundingClientRect.height,
          Math.round(e)
        )
        var g = ge(c.intersectionRect)
        a.l = mc(g, a.a.left - g.left, a.a.top - g.top)
      }
    } catch (h) {
      a.va(), Sd(299, h)
    }
  }
  function kg(a) {
    return za(
      a,
      function(b, c) {
        return b.time > c.time ? b : c
      },
      a[0]
    )
  }
  l.Ka = function() {}
  l.hb = function() {
    return !1
  }
  l.Ya = function() {}
  l.M = function() {
    var a = {}
    return Object.assign(
      this.b.M(),
      ((a.niot_obs = this.s), (a.niot_cbk = this.m), a)
    )
  }
  var lg = { threshold: [0, 0.3, 0.5, 0.75, 1] }
  function mg(a, b, c, d) {
    hg.call(this, a, b, c, d)
    this.i = this.j = this.f = null
  }
  r(mg, hg)
  mg.prototype.G = function() {
    return "nio"
  }
  mg.prototype.va = function() {
    if (this.f && this.c)
      try {
        this.f.unobserve(this.c),
          this.j
            ? (this.j.unobserve(this.c), (this.j = null))
            : this.i && (this.i.disconnect(), (this.i = null))
      } catch (a) {}
  }
  function ng(a) {
    return a.f && a.f.takeRecords ? a.f.takeRecords() : []
  }
  function ig(a) {
    if (!a.c) return !1
    var b = a.c,
      c = a.b.b.o,
      d = O.g().f.a
    a.f = new c.IntersectionObserver(
      sd(d, function(e) {
        return jg(a, e)
      }),
      lg
    )
    d = sd(d, function() {
      a.f.unobserve(b)
      a.f.observe(b)
      jg(a, ng(a))
    })
    c.ResizeObserver
      ? ((a.j = new c.ResizeObserver(d)), a.j.observe(b))
      : c.MutationObserver &&
        ((a.i = new t.MutationObserver(d)),
        a.i.observe(b, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0,
        }))
    a.f.observe(b)
    jg(a, ng(a))
    return !0
  }
  mg.prototype.da = function() {
    var a = ng(this)
    0 < a.length && jg(this, a)
    hg.prototype.da.call(this)
  }
  function og(a) {
    a = void 0 === a ? D : a
    Ne.call(this, new V(a, 2))
  }
  r(og, Ne)
  og.prototype.G = function() {
    return "nio"
  }
  og.prototype.Pa = function() {
    var a = z
    return a && 0 <= a.toLowerCase().indexOf("cobalt")
      ? !1
      : !U.g().f && null != this.a.b.o.IntersectionObserver
  }
  og.prototype.Za = function(a, b, c) {
    return new mg(a, this.a, b, c)
  }
  function pg() {
    var a = qg()
    V.call(this, D.top, a, "geo")
  }
  r(pg, V)
  pg.prototype.Ma = function() {
    return U.g().a
  }
  pg.prototype.ba = function() {
    var a = qg()
    Le(this, a)
    return 2 == a
  }
  function qg() {
    O.g()
    var a = U.g()
    return a.h || a.f ? 0 : 2
  }
  u(pg)
  function rg() {}
  u(rg)
  function sg() {
    this.done = !1
    this.a = { yb: 0, xb: 0, ac: 0, ab: 0, ta: -1, Cb: 0, Bb: 0, Db: 0 }
    this.i = null
    this.j = !1
    this.h = ""
    this.b = null
    this.l = 0
    this.f = new Ce(this)
  }
  function tg() {
    var a = Y
    if (!a.j) {
      a.j = !0
      for (var b = bg(), c, d = 0; d < b.length; ++d) (c = b[d]), c.b.b && tf(c)
      ug(a, function(e) {
        for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g]
        return a.c.apply(a, ha(f))
      })
      a.c()
    }
  }
  sg.prototype.tb = function() {
    vg(this, bg(), !1)
  }
  function wg() {
    rg.g()
    var a = dg.g()
    null != a.a && a.a.a ? Ie(a.a.a) : qe(U.g())
  }
  function vg(a, b, c) {
    if (!a.done && (a.f.cancel(), 0 != b.length)) {
      a.b = null
      try {
        wg()
        var d = S(),
          e = O.g()
        e.l = d
        if (null != dg.g().a) for (e = 0; e < b.length; e++) rf(b[e], d, c)
        else Rd(a.h, { strategy_not_selected: 1, bin: e.b })
        for (d = 0; d < b.length; d++) sf(b[d])
        ++a.a.ab
        xg(a)
      } finally {
        c
          ? v(b, function(f) {
              return f.Ta()
            })
          : De(a.f)
      }
    }
  }
  function ug(a, b) {
    if (!a.i) {
      b = Md(142, b)
      N()
      var c
      C.visibilityState
        ? (c = "visibilitychange")
        : C.mozVisibilityState
        ? (c = "mozvisibilitychange")
        : C.webkitVisibilityState && (c = "webkitvisibilitychange")
      c && Pb(C, c, b, { capture: !1 }) && (a.i = b)
    }
  }
  sg.prototype.c = function() {
    var a = te(),
      b = S()
    a
      ? (Vd ||
          ((Ud = b),
          v(cg.b, function(c) {
            return c.c.i(b, !c.h())
          })),
        (Vd = !0))
      : ((this.l = yg(this, b)),
        (Vd = !1),
        v(cg.b, function(c) {
          c.ga() && c.c.h(b)
        }))
    vg(this, bg(), !a)
  }
  function zg(a, b, c) {
    if (!a.b || c) {
      c = b.document
      var d = -1,
        e = S()
      ;-1 == a.a.ta && (d = e)
      var f = U.g(),
        g = O.g(),
        h = Ic(g.a),
        m = bg()
      try {
        if (0 < m.length) {
          var k = f.a
          k && (h.bs = [jc(k), kc(k)])
          var n = f.c
          n && (h.ps = [n.width, n.height])
          b.screen && (h.ss = [b.screen.width, b.screen.height])
        } else
          (h.url = encodeURIComponent(b.location.href.substring(0, 512))),
            c.referrer &&
              (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)))
        h.tt = d
        h.pt = -1
        h.bin = g.b
        void 0 !== b.google_osd_load_pub_page_exp &&
          (h.olpp = b.google_osd_load_pub_page_exp)
        h.deb = [
          1,
          a.a.yb,
          a.a.xb,
          a.a.ab,
          a.a.ta,
          ce,
          a.f.b,
          a.a.Cb,
          a.a.Bb,
          a.a.Db,
        ].join("-")
        h.tvt = yg(a, e)
        f.f && (h.inapp = 1)
        if (null !== b && b != b.top) {
          0 < m.length &&
            (h.iframe_loc = encodeURIComponent(
              b.location.href.substring(0, 512)
            ))
          var p = f.b
          h.is = [jc(p), kc(p)]
        }
      } catch (R) {
        h.error = 1
      }
      a.b = h
    }
    a = Qa(a.b)
    b = O.g().f
    var q
    if (1 == L(b.c, "prf")) {
      k = new qd()
      n = b.a
      p = 0
      ;-1 < n.a && (p = n.f.a.a() - n.a)
      k = Kb(k, 1, n.c + p)
      n = b.a
      k = Kb(k, 5, -1 < n.a ? n.b + 1 : n.b)
      k = Kb(k, 2, b.b.a.f())
      k = Kb(k, 3, b.b.a.c())
      k = Kb(k, 4, b.b.a.b())
      b = {}
      n = new Cb()
      p = Ib(k, 1)
      p = null == p ? p : +p
      p = null == p ? 0 : p
      if (0 !== p && ((c = p), null != c)) {
        fb(n.a, 9)
        p = n.a
        e = c
        e = (c = 0 > e ? 1 : 0) ? -e : e
        if (0 === e) (db = 0 < 1 / e ? 0 : 2147483648), (cb = 0)
        else if (isNaN(e)) (db = 2147483647), (cb = 4294967295)
        else if (1.7976931348623157e308 < e)
          (db = ((c << 31) | 2146435072) >>> 0), (cb = 0)
        else if (2.2250738585072014e-308 > e)
          (e /= Math.pow(2, -1074)),
            (db = ((c << 31) | (e / 4294967296)) >>> 0),
            (cb = e >>> 0)
        else {
          f = e
          d = 0
          if (2 <= f) for (; 2 <= f && 1023 > d; ) d++, (f /= 2)
          else for (; 1 > f && -1022 < d; ) (f *= 2), d--
          e *= Math.pow(2, -d)
          db =
            ((c << 31) | ((d + 1023) << 20) | ((1048576 * e) & 1048575)) >>> 0
          cb = (4503599627370496 * e) >>> 0
        }
        gb(p, cb)
        gb(p, db)
      }
      p = Jb(k, 2)
      0 !== p && null != p && Db(n, 2, p)
      p = Jb(k, 3)
      0 !== p && null != p && Db(n, 3, p)
      p = Jb(k, 4)
      0 !== p && null != p && Db(n, 4, p)
      p = Jb(k, 5)
      if (0 !== p && null != p && null != p)
        if ((fb(n.a, 40), (k = n.a), 0 <= p)) fb(k, p)
        else {
          for (c = 0; 9 > c; c++) k.a.push((p & 127) | 128), (p >>= 7)
          k.a.push(1)
        }
      k = new Uint8Array(n.a.length())
      c = n.b
      d = c.length
      for (e = p = 0; e < d; e++) (f = c[e]), k.set(f, p), (p += f.length)
      c = n.a
      d = c.a
      c.a = []
      k.set(d, p)
      n.b = [k]
      void 0 === q && (q = 0)
      if (!Bb)
        for (
          Bb = {},
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
            p = ["+/=", "+/", "-_=", "-_.", "-_"],
            c = 0;
          5 > c;
          c++
        )
          for (
            d = n.concat(p[c].split("")), Ab[c] = d, e = 0;
            e < d.length;
            e++
          )
            (f = d[e]), void 0 === Bb[f] && (Bb[f] = e)
      q = Ab[q]
      n = []
      for (p = 0; p < k.length; p += 3)
        (g = k[p]),
          (h = (c = p + 1 < k.length) ? k[p + 1] : 0),
          (f = (d = p + 2 < k.length) ? k[p + 2] : 0),
          (e = g >> 2),
          (g = ((g & 3) << 4) | (h >> 4)),
          (h = ((h & 15) << 2) | (f >> 6)),
          (f &= 63),
          d || ((f = 64), c || (h = 64)),
          n.push(q[e], q[g], q[h] || "", q[f] || "")
      q = ((b.pf = n.join("")), b)
    } else q = {}
    x(a, q)
    return a
  }
  function Ag() {
    v(bg(), function(a) {
      a.b.a && rg.g()
    })
  }
  function xg(a) {
    var b = O.g(),
      c = 1 === L(b.a, "llp")
    "osd" == a.h &&
      v(cg.a, function(d) {
        if (c) {
          if (1 == b.b || nf(d.c) || d.A) {
            var e = {}
            Hf(d, 0, ((e.r = void 0), e))
          }
        } else (e = {}), Hf(d, 0, ((e.r = void 0), e))
      })
  }
  function yg(a, b) {
    a = a.l
    Vd && (a += b - Ud)
    return a
  }
  function Bg(a) {
    return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length
      ? parseInt(a[1], 10)
      : 0
  }
  function Cg() {
    var a = Y
    var b =
      void 0 === b
        ? function() {
            return {}
          }
        : b
    Nd.h = "av-js"
    Id.a = 0.01
    Pd([
      function(c) {
        var d = O.g(),
          e = {}
        x(c, ((e.bin = d.b), (e.type = "error"), e), Ic(d.a), zg(a, D), b())
        if ((d = Ye())) (e = {}), x(c, ((e.v = encodeURIComponent(d)), e))
      },
    ])
  }
  function Dg(a) {
    var b = new Eg()
    switch (a) {
      case 0:
      case 5:
        return []
      default:
        return (
          (a = 4 === O.g().b),
          [new Yf(b), new $f(b), new Zf(b)].concat(ha(a ? [] : [new Wf()]))
        )
    }
  }
  u(sg)
  var Y = sg.g()
  function Eg() {}
  function Xf(a, b) {
    b = b || {}
    var c = void 0 === b.Wa ? {} : b.Wa
    b = void 0 === b.Oa ? {} : b.Oa
    var d = b.r,
      e = c[0],
      f = zg(Y, vc(), !1),
      g = {}
    x(g, f, c)
    c = {}
    var h = g
    h = void 0 === h ? {} : h
    g = {}
    var m = U.g()
    f = Ic(a.j)
    var k = m.j,
      n = pf(a)
    f.p = [n.top + k.y, n.left + k.x, n.bottom + k.y, n.right + k.x]
    k = a.c
    f.tos = gf(k.a)
    f.mtos = jf(k.a)
    f.mcvt = k.c.a
    f.rs = a.$
    ;(n = 5 == a.$) || (f.ht = a.Ga)
    0 <= a.qa && ((f.tfs = a.qa), (f.tls = a.rb))
    f.mc = de(k.b)
    f.lte = de(a.X)
    f.bas = a.eb
    f.bac = a.J
    m.h && (f["if"] = a.A ? 0 : 1)
    f.met = a.b.c
    n && a.Ea && (f.req = encodeURIComponent(a.Ea).substring(0, 100))
    a.oa() && (f.la = "1")
    f.avms = a.a ? a.a.G() : "ns"
    a.a && x(f, a.a.M())
    0 != a.h && (f.md = a.h)
    f.btr = null != a.m && "" != a.m ? 1 : 0
    f.cpmav =
      null != a.R && null != a.R.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)
        ? 1
        : 0
    f.lm = a.W
    x(f, Mf(a))
    h && x(f, h)
    f.adk = a.l
    a.lb && a.Fa && (f.adf = a.Fa)
    h = a.A
    m = O.g()
    !d && h && m.h && (d = m.h)
    d && (f.r = d)
    0 === a.H && (f.invis = 1)
    d = Xe(f).join("&")
    g[3] = d
    g[11] = h
    g[29] = O.g().b
    g[0] = e
    g[7] = a.f.D
    g[9] = ie(a.ra)
    g[28] = a.$
    g[32] = a.a ? a.a.G() : "ns"
    g[5] = nf(a.c) && 4 != a.W
    g[13] = jf(a.c.a).join(",")
    g[18] = 0 == we(pf(a))
    null != a.ca && ((g[20] = a.ca.y), (g[21] = a.ca.x))
    e = U.g()
    null != e.b && ((g[22] = jc(e.b)), (g[23] = kc(e.b)))
    null != e.a && ((g[30] = jc(e.a)), (g[31] = kc(e.a)), (g[38] = ie(e.a)))
    d = e.j
    f = pf(a)
    g[37] = ie(new H(f.top + d.y, f.right + d.x, f.bottom + d.y, f.left + d.x))
    e.c && ((e = e.c), (g[39] = e.width + "-" + e.height))
    ;-1 != a.H && (g[25] = a.H)
    ae(new Xc(a.l, a.P), g)
    x(c, g, b)
    b = a.b.a
    a = a.Ba
    try {
      var p = be(c)
      ke(b, p, a)
    } catch (q) {}
    return !0
  }
  function Fg() {
    V.call(this, D, 2, "iem")
  }
  r(Fg, V)
  l = Fg.prototype
  l.Ma = function() {
    function a(q, R) {
      return !!b.o.document.elementFromPoint(q, R)
    }
    var b = this,
      c = new H(
        0,
        this.o.innerWidth || this.o.width,
        this.o.innerHeight || this.o.height,
        0
      ),
      d = Vb(document),
      e = Math.floor(c.left - d.x),
      f = Math.floor(c.top - d.y),
      g = Math.floor(c.right - d.x),
      h = Math.floor(c.bottom - d.y)
    c = a(e, f)
    d = a(g, h)
    if (c && d) return new H(f, g, h, e)
    var m = a(g, f),
      k = a(e, h)
    if (c)
      (h = Z(f, h, function(q) {
        return a(e, q)
      })),
        (g = Z(e, g, function(q) {
          return a(q, f)
        }))
    else if (m)
      (h = Z(f, h, function(q) {
        return a(g, q)
      })),
        (e = Z(g, e, function(q) {
          return a(q, f)
        }))
    else if (k)
      (f = Z(h, f, function(q) {
        return a(e, q)
      })),
        (g = Z(e, g, function(q) {
          return a(q, h)
        }))
    else if (d)
      (f = Z(h, f, function(q) {
        return a(g, q)
      })),
        (e = Z(g, e, function(q) {
          return a(q, h)
        }))
    else {
      var n = Math.floor((e + g) / 2),
        p = Math.floor((f + h) / 2)
      if (!a(n, p)) return new H(0, 0, 0, 0)
      f = Z(p, f, function(q) {
        return a(n, q)
      })
      h = Z(p, h, function(q) {
        return a(n, q)
      })
      e = Z(n, e, function(q) {
        return a(q, p)
      })
      g = Z(n, g, function(q) {
        return a(q, p)
      })
    }
    return new H(f, g, h, e)
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
  l.ba = function() {
    return U.g().h && B && wb(8) && Zd(this.o)
  }
  l.wa = function() {}
  l.xa = function() {}
  l.Ra = function() {}
  l.qb = function() {}
  u(Fg)
  function Gg() {
    V.call(this, D, 2, "mraid")
    this.B = 0
    this.u = this.A = !1
    this.i = null
    this.a = Yd(this.o)
    this.c.a = new H(0, 0, 0, 0)
    this.F = !1
  }
  r(Gg, V)
  l = Gg.prototype
  l.ba = function() {
    return null != this.a.L
  }
  l.La = function() {
    var a = {}
    this.B && (a.mraid = this.B)
    this.A && (a.mlc = 1)
    a.mtop = this.a.Hb
    this.i && (a.mse = this.i)
    this.F && (a.msc = 1)
    a.mcp = this.a.sa
    return a
  }
  l.V = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d]
    try {
      return this.a.L[a].apply(this.a.L, c)
    } catch (e) {
      Sd(538, e, 0.01, function(f) {
        f.method = a
      })
    }
  }
  function Hg(a, b, c) {
    a.V("addEventListener", b, c)
  }
  l.ma = function() {
    var a = this
    if (this.l) return !this.fa()
    this.l = !0
    if (2 === this.a.sa) return (this.i = "ng"), W(this, "w"), !1
    if (1 === this.a.sa) return (this.i = "mm"), W(this, "w"), !1
    U.g().s = !0
    this.o.document.readyState && "complete" == this.o.document.readyState
      ? Ig(this)
      : T(
          this.o,
          "load",
          function() {
            N().setTimeout(
              Q(292, function() {
                return Ig(a)
              }),
              100
            )
          },
          292
        )
    return !0
  }
  function Ig(a) {
    O.g().i = !!a.V("isViewable")
    Hg(a, "viewableChange", Jg)
    "loading" === a.V("getState") ? Hg(a, "ready", Kg) : Lg(a)
  }
  function Lg(a) {
    "string" === typeof a.a.L.AFMA_LIDAR
      ? ((a.A = !0), Mg(a))
      : ((a.a.sa = 3), (a.i = "nc"), W(a, "w"))
  }
  function Mg(a) {
    a.u = !1
    var b = 1 == L(O.g().a, "rmmt"),
      c = !!a.V("isViewable")
    ;(b ? !c : 1) &&
      N().setTimeout(
        Q(524, function() {
          a.u || (Ng(a), Sd(540, Error()), (a.i = "mt"), W(a, "w"))
        }),
        500
      )
    Og(a)
    Hg(a, a.a.L.AFMA_LIDAR, Pg)
  }
  function Og(a) {
    var b = 1 == L(O.g().a, "sneio"),
      c = void 0 !== a.a.L.AFMA_LIDAR_EXP_1,
      d = void 0 !== a.a.L.AFMA_LIDAR_EXP_2
    ;(b = b && d) && (a.a.L.AFMA_LIDAR_EXP_2 = !0)
    c && (a.a.L.AFMA_LIDAR_EXP_1 = !b)
  }
  function Ng(a) {
    a.V("removeEventListener", a.a.L.AFMA_LIDAR, Pg)
    a.A = !1
  }
  l.wa = function() {
    var a = U.g(),
      b = Qg(this, "getMaxSize")
    a.a = new H(0, b.width, b.height, 0)
  }
  l.xa = function() {
    U.g().l = Qg(this, "getScreenSize")
  }
  function Qg(a, b) {
    if ("loading" === a.V("getState")) return new F(-1, -1)
    b = a.V(b)
    if (!b) return new F(-1, -1)
    a = parseInt(b.width, 10)
    b = parseInt(b.height, 10)
    return isNaN(a) || isNaN(b) ? new F(-1, -1) : new F(a, b)
  }
  l.K = function() {
    Ng(this)
    V.prototype.K.call(this)
  }
  function Kg() {
    try {
      var a = Gg.g()
      a.V("removeEventListener", "ready", Kg)
      Lg(a)
    } catch (b) {
      Sd(541, b)
    }
  }
  function Pg(a, b) {
    try {
      var c = Gg.g()
      c.u = !0
      var d = a
        ? new H(a.y, a.x + a.width, a.y + a.height, a.x)
        : new H(0, 0, 0, 0)
      var e = Je(c)
      e.a = d
      e.volume = b
      c.U(e)
    } catch (f) {
      Sd(542, f)
    }
  }
  function Jg(a) {
    var b = O.g(),
      c = Gg.g()
    a && !b.i && ((b.i = !0), (c.F = !0), c.i && W(c, "w", !0))
  }
  u(Gg)
  function Rg() {
    V.call(this, D, 1, "osd")
    this.a = null
    this.B = []
    this.F = this.u = this.i = this.A = 0
    this.H = !0
  }
  r(Rg, V)
  l = Rg.prototype
  l.La = function() {
    var a = {}
    return (a.exg = 1), a
  }
  l.zb = function(a) {
    w(this.B, a) || this.B.push(a)
  }
  function Sg(a) {
    var b = 0
    a = a.o
    try {
      if (a && a.Goog_AdSense_getAdAdapterInstance) return a
    } catch (c) {}
    for (; a && 5 > b; ) {
      try {
        if (a.google_osd_static_frame) return a.google_osd_static_frame
      } catch (c) {}
      try {
        if (a.aswift_0 && a.aswift_0.google_osd_static_frame)
          return a.aswift_0.google_osd_static_frame
      } catch (c) {}
      b++
      a = a != a.parent ? a.parent : null
    }
    return null
  }
  function Tg(a, b) {
    var c = {}
    ae(O.g().c, c)
    c[0] = "goog_request_monitoring"
    c[6] = 4
    c[16] = !1
    a.a && Ug(a.a, c)
    try {
      var d = be(c)
      b.postMessage(d, "*")
    } catch (e) {}
  }
  function Vg(a) {
    ++a.u
    if (2 == a.A) Wg(a)
    else {
      if (10 < a.u) {
        if (20 < a.u) {
          W(a, "no")
          return
        }
        11 == a.u &&
          (N().clearInterval(a.i),
          (a.i = N().setInterval(
            Q(197, function() {
              return Vg(a)
            }),
            500
          )))
      }
      if (a.o.postMessage)
        if (Yc(O.g().c)) {
          var b = Sg(a)
          b && Tg(a, b)
        } else W(a, "ib")
      else W(a, "c")
    }
  }
  l.ma = function() {
    var a = this
    if (this.l) return !this.fa()
    this.l = !0
    if (!Yc(O.g().c)) return W(this, "ib"), !1
    T(
      t,
      "message",
      function(c) {
        if (null != c && c.data && "string" === typeof c.data) {
          var d = c.data
          if ("string" !== typeof d) var e = null
          else {
            e = {}
            d = d.split("\n")
            for (var f = 0; f != d.length; ++f) {
              var g = d[f],
                h = g.indexOf("=")
              if (!(0 >= h)) {
                var m = Number(g.substr(0, h))
                g = g.substr(h + 1)
                switch (m) {
                  case 36:
                  case 8:
                  case 11:
                  case 16:
                  case 5:
                  case 18:
                    g = "true" == g
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
                    g = Number(g)
                    break
                  case 3:
                    if ("function" === typeof decodeURIComponent)
                      try {
                        g = decodeURIComponent(g)
                      } catch (n) {
                        throw Error("Error: URI malformed: " + g)
                      }
                }
                e[m] = g
              }
            }
            e = e[0] ? e : null
          }
          if ((d = e))
            (d = new Xc(e[4], e[12])),
              (f = O.g().c),
              (d = f.a || d.a ? f.a == d.a : f.b || d.b ? f.b == d.b : !1)
          if (
            d &&
            ((d = e[29]),
            (f = e[0]),
            w(
              [
                "goog_acknowledge_monitoring",
                "goog_get_mode",
                "goog_update_data",
                "goog_image_request",
                "goog_adspeed",
              ],
              f
            ))
          ) {
            Xg(a, e)
            if ("goog_get_mode" == f && c.source) {
              m = {}
              ae(O.g().c, m)
              m[0] = "goog_provide_mode"
              m[6] = 4
              m[16] = !1
              a.a && Ug(a.a, m)
              try {
                var k = be(m)
                c.source.postMessage(k, c.origin)
                Yg(a, k)
              } catch (n) {
                Sd(406, n)
              }
            }
            if ("goog_get_mode" == f || "goog_acknowledge_monitoring" == f)
              a.a && (a.a.Z = e[28]), (a.A = 2), Wg(a)
            if (a.a || a.f.length) {
              c = 4 == d
              if (!c) {
                m = e[0]
                d = !1
                f = U.g()
                k = a.c.a
                ;(g = e[32]) &&
                  "osd" !== g &&
                  (1 == L(O.g().a, "rxlist") ? (a.C = "osd") : (a.C = g))
                "goog_acknowledge_monitoring" == m &&
                  ((void 0 !== e[36] ? e[36] : !e[8]) ? Le(a, 2) : Le(a, 0),
                  Ee(a))
                e[37] &&
                  (m = je(e[37])) &&
                  ((d = !0), (f.j = new E(m.left, m.top)))
                if (e[38]) {
                  if ((m = je(e[38]))) (d = !0), (f.a = m)
                } else
                  isNaN(e[30]) ||
                    isNaN(e[31]) ||
                    (f.a || (f.a = new H(0, 0, 0, 0)),
                    (d = !0),
                    (f.a.right = f.a.left + e[30]),
                    (f.a.bottom = f.a.top + e[31]))
                e[9] && ((d = !0), (m = je(e[9]))) && ((k = m), (f.m = m))
                e[39] &&
                  ((m = e[39])
                    ? ((m = m.split("-")),
                      (m = 2 == m.length ? new F(Za(m[0]), Za(m[1])) : null))
                    : (m = null),
                  m && (f.c = m))
                d && ((d = Je(a)), (d.a = k), a.U(d))
              }
              k = me(e[3]).r
              if (c)
                switch (
                  ((d = e[0]),
                  (c = 100 * e[25]),
                  "number" !== typeof c ||
                    isNaN(c) ||
                    (a.a && (window.document["4CGeArbVQ"] = c | 0)),
                  void 0 != e[18] && a.a && (a.a.Y = e[18]),
                  (c = e[7]),
                  void 0 != c &&
                    0 < c &&
                    a.a &&
                    ((c = a.a),
                    c.T &&
                      ((f =
                        "//pagead2.googlesyndication.com/pagead/gen_204?id=ac_opp&vsblt=" +
                        e[7]),
                      c.F && (f += "&avi=" + c.F),
                      $e(f),
                      (c.T = !1))),
                  (f = !!e[5]),
                  (c = !!e[11]),
                  ("goog_update_data" != d && "goog_image_request" != d) ||
                    !a.a ||
                    ((m = a.a), (m.j = me(e[3])), ++m.$),
                  (m = !c && "goog_update_data" == d && !e[18]),
                  d)
                ) {
                  case "goog_image_request":
                    a.a && Zg(a.a, k || "u", f, c)
                  case "goog_update_data":
                    if (
                      m &&
                      a.a &&
                      ((k = a.a),
                      (k.C = !0),
                      $g(k) && k.S && ((d = k.j), 3 != k.b))
                    ) {
                      d.r = "m"
                      for (m = 0; m < k.f.length; ++m)
                        (g = ah(k, k.f[m], d, !0)), $e(g)
                      k.S = !1
                    }
                    f &&
                      a.a &&
                      ((k = a.a),
                      $g(k) &&
                        ((k.B = !0),
                        bh(k, "1"),
                        k.H && 3 != k.b && !k.Y && (oc(k.H), (k.H = "")),
                        k.l && ((d = Qa(k.j)), (d.r = "v"), ch(k, d, !0)),
                        k.l || 1 != k.c || (k.R = !0)))
                    c &&
                      a.a &&
                      ((c = a.a),
                      $g(c) &&
                        ((c.h = !1),
                        (c.S = !1),
                        bh(c, "3"),
                        c.l &&
                          ((k = Qa(c.j)),
                          (null !== k && "r" in k) || (k.r = "uk"),
                          ch(c, k, !0))))
                }
              else "ac" == k && a.a && Zg(a.a, "ac", void 0, void 0)
              ;(c = e[40]) &&
                a.a &&
                ((c = JSON.parse(decodeURIComponent(c))),
                (k = {}),
                dh(
                  ((k.rst = c.rst),
                  (k.dlt = c.dlt),
                  (k.rpt = c.rpt),
                  (k.isd = c.isd),
                  (k.msd = c.msd),
                  (k.ext = c.ext),
                  k)
                ))
              e[11] && ((e = me(e[3]).r || "msf"), W(a, e))
            }
          }
        }
      },
      118
    )
    var b = Q(197, function() {
      Vg(a)
    })
    this.A = 1
    b()
    this.i = N().setInterval(b, 100)
    return !0
  }
  l.pa = function() {
    var a = {}
    ae(O.g().c, a)
    a[0] = "goog_stop_monitoring"
    Yg(this, be(a))
    Wg(this)
  }
  function Wg(a) {
    N().clearInterval(a.i)
    a.i = 0
  }
  function Yg(a, b) {
    var c = Sg(a),
      d = !c
    d && (c = a.o.parent)
    if (c && c.postMessage)
      try {
        c.postMessage(b, "*"), d && a.o.postMessage(b, "*"), a.F++
      } catch (e) {}
  }
  function Xg(a, b) {
    v(a.B, function(c) {
      c(b)
    })
  }
  l.Sa = function() {
    return 4 === O.g().b ? !0 : this.ba()
  }
  l.wa = function() {}
  l.xa = function() {}
  l.Ra = function() {}
  l.ba = function() {
    return U.g().h && !this.s
  }
  u(Rg)
  function eh() {
    var a = /[&\?#]exk=([^& ]+)/.exec(D.location.href)
    return a && 2 == a.length ? a[1] : null
  }
  var fh = ["FRAME", "IMG", "IFRAME"],
    gh = /^[01](px)?$/
  function hh(a, b, c) {
    function d(Sa) {
      h || ((h = !0), b(Sa))
    }
    var e = !1,
      f = !0,
      g = !1
    e = void 0 === e ? !0 : e
    f = void 0 === f ? !1 : f
    g = void 0 === g ? !1 : g
    a = "string" === typeof a ? document.getElementById(a) : a
    if (!a) return !1
    c ||
      (c = function(Sa, oh, ph) {
        Sa.addEventListener(oh, ph)
      })
    for (var h = !1, m, k, n = 0; n < fh.length; ++n)
      if (fh[n] == a.tagName) {
        k = 3
        m = [a]
        break
      }
    m || ((m = a.querySelectorAll(fh.join(","))), (k = 2))
    var p = 0
    a = !1
    for (n = 0; n < m.length; n++) {
      var q = m[n]
      if (
        g ||
        !("IMG" != q.tagName ||
        !q.complete ||
        (q.naturalWidth && q.naturalHeight)
          ? gh.test(q.getAttribute("width")) &&
            gh.test(q.getAttribute("height"))
          : 1)
      ) {
        if ("IMG" == q.tagName)
          var R = q.naturalWidth && q.naturalHeight ? !0 : !1
        else
          try {
            R =
              "complete" ===
              (q.readyState
                ? q.readyState
                : q.contentWindow &&
                  q.contentWindow.document &&
                  q.contentWindow.document.readyState)
                ? !0
                : !1
          } catch (Sa) {
            R = void 0 === f ? !1 : f
          }
        R
          ? (a = !0)
          : (p++,
            c(q, "load", function() {
              p--
              p || d(k)
            }))
      }
    }
    m = null
    if (0 === p && !a && "complete" === t.document.readyState) k = 5
    else if (p || !a)
      return (
        c(t, "load", function() {
          d(4)
        }),
        !1
      )
    e && d(k)
    return !0
  }
  function ih() {
    this.u = 0
    this.F = ""
    this.f = []
    this.W = ""
    this.Y = this.C = this.B = this.A = this.h = this.l = this.S = !1
    this.I = new Xc(null, null)
    var a = {}
    this.j =
      ((a.mtos = "0,0,0,0,0"),
      (a.mcvt = "0"),
      (a.p = "0,0,0,0"),
      (a.tos = "0,0,0,0,0"),
      a)
    this.P = []
    this.R = !1
    this.H = this.N = ""
    this.a = new Qc()
    this.J = !1
    this.b = 0
    this.m = this.s = null
    this.$ = this.c = 0
    this.X = ""
    this.T = !1
    this.i = null
    this.aa = this.Z = 0
    Mc(O.g().a)
    Cg()
  }
  l = ih.prototype
  l.ka = function(a) {
    var b = dg.g().a
    switch (a.O()) {
      case 0:
        b && Ge(b.a, this)
        jh(this, a)
        break
      case 2:
        b && Ge(b.a, this)
    }
  }
  l.U = function() {}
  l.ha = function() {
    return !1
  }
  function ch(a, b, c, d) {
    c = void 0 === c ? !1 : c
    d = void 0 === d ? !1 : d
    a: {
      for (e in b) {
        var e = !1
        break a
      }
      e = !0
    }
    if (!(e || a.R || (2 != a.c && !c)) && 3 != a.b) {
      for (e = 0; e < a.f.length; ++e) {
        var f = ah(a, a.f[e], b, c, d)
        if (L(O.g().a, "sbeos") && !c) {
          var g = vc() || D
          if (g.navigator && g.navigator.sendBeacon) {
            var h = Ze(f.toString()).split("?")
            g = g.navigator.sendBeacon(h[0], h[1])
          } else g = !1
          g || $e(f.toString() + "&sberr=1")
        } else $e(f)
      }
      d || (c ? (a.l = !1) : (a.R = !0))
    }
  }
  function kh(a, b) {
    var c = []
    a && c.push("avi=" + a)
    b && c.push("cid=" + b)
    return c.length
      ? "//pagead2.googlesyndication.com/activeview?" + c.join("&")
      : "//pagead2.googlesyndication.com/activeview"
  }
  function ah(a, b, c, d, e) {
    var f = void 0 === f ? 4e3 : f
    d = (void 0 === e
    ? 0
    : e)
      ? "osdexp"
      : (void 0 === d
        ? 0
        : d)
      ? 1 == L(O.g().a, "avxm")
        ? "osdxm"
        : "osdim"
      : a.A
      ? "osd2"
      : "osdtos"
    b += -1 < b.indexOf("?") ? "&" : "?"
    e = O.g()
    x(c, Ic(e.a))
    c.id = d
    c.vs = a.B ? 4 : a.C ? 3 : 2
    "osd2" == d && a.h && a.B && (c.tsf = 1)
    c.uc = a.$
    d = Rg.g().F
    c.upc = d
    c.tgt = a.a.a ? (a.a.a ? a.a.a.tagName : "") : "nf"
    c.cl = a.J ? 1 : 0
    if ((d = a.a))
      (c.cec = d.h),
        (c.wf = d.i ? 1 : 0),
        (c.cac = d.f),
        (d = d.a),
        (c.cd = d ? d.clientWidth + "x" + d.clientHeight : "nf"),
        (c.itpl = d ? Number(Oc(d, "googleAvItpl")) || 0 : -1)
    for (d = 0; d < a.P.length; d++) {
      var g = (e = void 0),
        h = void 0
      try {
        var m = fa(a.P[d]())
        e = m.next().value
        g = m.next().value
        h = m.next().value
      } catch (k) {}
      c[e] = g.length < f ? g : h || "max_length"
    }
    a = void 0 !== c ? Ue(Te(new Re(), c)) : ""
    return b + a
  }
  function bh(a, b) {
    if (a.N) {
      try {
        oc(Mb(a.N, "vi", b))
      } catch (c) {}
      w(lh, b) && (a.N = "")
    }
  }
  function Zg(a, b, c, d) {
    c = void 0 === c ? !1 : c
    d = void 0 === d ? !1 : d
    var e = Qa(a.j)
    e.r = b
    b = !0
    1 == L(O.g().a, "avxm") && (b = c || d)
    b &&
      ((b = c ? 4 : d ? 2 : 3),
      (b = void 0 === b ? 3 : b),
      a.l && 3 != (void 0 === b ? 3 : b) && ch(a, e, !0),
      (b = a.B || a.C),
      a.A || (a.h && b)) &&
      (ch(a, e), (a.A = !1), (a.h = !1))
    c || d || bh(a, "0")
  }
  function $g(a) {
    return 1 == a.c || 2 == a.c || a.l
  }
  l.Ab = function(a) {
    this.P.push(a)
  }
  function mh(a) {
    var b = Rg.g()
    O.g().c = a.I
    b.a = a
    b.ma()
  }
  function nh(a) {
    a.b = le(a.a.a)
    if (1 == a.b || 3 == a.b) {
      var b = a.a.a
      a.m = Q(283, function() {
        a.b = le(a.a.a)
        if (0 != a.b) {
          if (a.i) {
            var d = a.i,
              e = a.b
            d.h != e && (If(d, e), d.ga() && Y.c())
          }
          2 == a.b &&
            ((d = a.a.a),
            a.s
              ? (a.s.disconnect(), (a.s = null))
              : d &&
                d.removeEventListener &&
                d.removeEventListener("DOMAttrModified", a.m))
          a.m = null
        }
      })
      if (MutationObserver && b) {
        var c = { attributes: !0 }
        c.attributeFilter = ["data-" + ab("googleAvDm")]
        a.s = new t.MutationObserver(a.m)
        a.s.observe(b, c)
      } else
        b && b.addEventListener
          ? b.addEventListener("DOMAttrModified", a.m)
          : Sd(286, Error())
    }
  }
  function qh(a) {
    a.J = !0
    rh(a)
    a = a.i
    a.s || (a.Qa(), a.ga() && Y.c())
  }
  function Ug(a, b) {
    var c = O.g()
    b[6] = 4
    b[16] = a.h
    a = t.performance
    b[33] = (a && a.timing && a.timing.domLoading) || -1
    b[29] = c.b
  }
  function sh() {
    var a = O.g()
    if (1 == L(a.a, "rxlist"))
      return (
        (a = [Gg.g(), pg.g(), Fg.g(), Rg.g()]),
        nb ? [new fg(a), new og(D)] : [new og(D), new fg(a)]
      )
    var b = 1 === L(a.a, "xefpls"),
      c = [pg.g()]
    b || c.push(Fg.g())
    b = 1 == L(a.a, "amp")
    ;(1 != L(a.a, "xdi") || b) && c.unshift(Rg.g())
    return [new fg(c), new og(D)]
  }
  function jh(a, b) {
    if (a.i && !a.i.na()) {
      var c = [new og(D)],
        d = dg.g()
      d.b = c
      eg(d, function(e, f) {
        th(a, e, f)
      })
        ? qf(a.i, d.a)
        : th(a, "i", b)
    }
  }
  function uh(a) {
    var b = dg.g()
    if (null == b.a) {
      if (null == b.b) {
        var c = sh()
        b.b = c
      }
      eg(b, function() {
        return null
      })
        ? Y.done || (Fe(b.a.a, a), vh())
        : th(a, "i")
    }
  }
  function rh(a) {
    var b = O.g(),
      c = D.location.href,
      d = Dg(a.c)
    d = new Ff(D, c, a.a.a, -1, a.Z, qa, d)
    Wc(d.b)
    a.i = d
    d.W = a.c
    d.Ba = [D]
    d.Ja = a.ja
    d.ua(a.X)
    d.l = a.I.b
    d.P = a.I.a
    d.Fa = Bg(c)
    Lf(d, a.F, a.W)
    cg.a.push(d)
    If(d, a.b)
    Ag()
    c = dg.g()
    null != c.a
      ? qf(d, c.a)
      : uf(
          d,
          function() {
            return null
          },
          function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g)
              f[g] = arguments[g]
            return a.ja.apply(a, ha(f))
          }
        )
    b.h && a.ja(d, b.h)
    return d
  }
  function th(a, b, c) {
    O.g().h = b
    for (var d = fa(cg.a), e = d.next(); !e.done; e = d.next()) a.ja(e.value, b)
    wh(b, c)
  }
  function dh(a) {
    v(cg.a, function(b) {
      b.Da = a
    })
  }
  l.ja = function(a, b) {
    a.A = !0
    var c = {}
    Hf(a, 2, ((c.r = b), c))
    a.a && a.a.va()
  }
  function wh(a, b) {
    if (!Y.done && cg.a.length) {
      Y.f.cancel()
      var c = zg(Y, vc(), !1)
      b && ((c.avms = b.G()), x(c, b.M()))
      c = {}
      a = ((c.r = a), c)
      b && ((a.avms = b.G()), x(a, b.M()))
      b = cg.a
      0 < b.length && vg(Y, b, !0)
      b = fa(b)
      for (c = b.next(); !c.done; c = b.next())
        (c = c.value), (c.A = !0), Hf(c, 1, a)
      Y.done = !0
      Rg.g().pa()
    }
  }
  function xh(a, b) {
    a.X = b
    if ("string" === typeof b) {
      b = Jc(O.g().a, b).split("&")
      for (var c = b.length - 1; 0 <= c; c--) {
        var d = b[c],
          e = xc
        d == e.vb
          ? ((a.h = !1), b.splice(c, 1))
          : d == e.ub && ((a.T = !0), b.splice(c, 1))
      }
      ud(O.g(), b.join("&"))
    }
  }
  function vh() {
    if (-1 == Y.a.ta) {
      var a = vc()
      tg()
      a.setTimeout(
        Q(131, function() {
          wh("t")
        }),
        36e5
      )
      Y.a.ta = S() - -1
    }
  }
  function yh(a) {
    function b(e) {
      ;(d && c) || ((d = !0), Zg(a, e, a.B, !a.C))
    }
    var c = 1 == L(O.g().a, "phel"),
      d = !1
    T(
      D,
      "unload",
      function() {
        b("u")
      },
      119
    )
    c &&
      T(
        D,
        "pagehide",
        function() {
          b("ph")
        },
        490
      )
  }
  function zh(a) {
    nh(a)
    a.J = hh(
      a.a.a,
      function() {
        return qh(a)
      },
      function(b, c, d) {
        T(b, c, d, 116)
      }
    )
    a.J && qh(a)
  }
  function Ah(a, b) {
    function c() {
      if (!a.a.a) {
        var e = a.a,
          f = null
        var g = (D.document || document).getElementsByTagName("SCRIPT")
        0 < g.length &&
          (g = g[g.length - 1]) &&
          g.parentElement &&
          (f = g.parentElement)
        f || (f = D.document.body)
        if ((g = f)) {
          f = String(b)
          g = Vc(g, ["GoogleActiveViewElement"])
          for (var h = [], m = fa(g), k = m.next(); !k.done; k = m.next())
            (k = k.value),
              Pc(k, "googleAvAdk") && Oc(k, "googleAvAdk") == f && h.push(k)
          2 == h.length &&
            (Xb(h[0], h[1]) ? (h = [h[1]]) : Xb(h[1], h[0]) && (h = [h[0]]))
          e.h = g.length
          e.f = h.length
          1 == h.length
            ? (e.a = h[0])
            : ((f = h),
              f.length
                ? ((g = Sc(f)), (f = 0 < g.length ? g[0] : f[0]))
                : (f = null),
              (e.a = f))
        }
        d--
        a.a.a
          ? zh(a)
          : 0 < d
          ? D.setTimeout(Md(122, c), 100)
          : ((e = rh(a)), a.ja(e, "n"))
      }
    }
    var d = 10
    c()
  }
  l.Eb = function(a, b, c, d, e, f, g, h, m, k, n) {
    var p = this
    Date &&
      D &&
      D.screen &&
      D.document &&
      D.document.body &&
      D.document.body.getBoundingClientRect &&
      ((O.g().b = 4),
      (this.u = a),
      (this.N = b),
      (this.H = d),
      (this.l = f),
      g && xh(this, g),
      (a = O.g()),
      (a.b = 4),
      (this.h = f),
      (this.I = new Xc(e, eh())),
      T(
        D,
        "load",
        function() {
          bh(p, "-1")
        },
        117
      ),
      (this.F = c || ""),
      (this.W = m),
      (c = k || kh(c, m)),
      w(this.f, c) || this.f.push(c),
      n && !w(this.f, n) && this.f.push(n),
      yh(this),
      (n =
        U.g().f ||
        y(z, "CrKey") ||
        y(z, "PlayStation") ||
        y(z, "Roku") ||
        ne() ||
        y(z, "Xbox") ||
        oe() ||
        pe()) || (N(), (n = 0 !== ad())),
      n
        ? (1 == L(a.a, "epoh") &&
            T(
              D.document,
              "visibilitychange",
              function() {
                var q = D.document
                ;(null != q.hidden
                  ? q.hidden
                  : null != q.mozHidden
                  ? q.mozHidden
                  : null != q.webkitHidden && q.webkitHidden) &&
                  !(3 <= p.aa) &&
                  (p.aa++, (q = Qa(p.j)), (q.r = "hvc"), ch(p, q, !1, !0))
              },
              455
            ),
          1 == L(a.a, "epph") &&
            T(
              D,
              "pagehide",
              Ka(function() {
                if (p.C) {
                  var q = Qa(p.j)
                  q.r = "ph"
                  ch(p, q, !1, !0)
                }
              }),
              457
            ),
          -1 == this.u
            ? (this.c = f ? 3 : 1)
            : -2 == this.u
            ? (this.c = 3)
            : 0 < this.u && ((this.c = 2), (this.A = !0)),
          this.h && !this.A && -1 == this.u && (this.c = 2),
          (Y.h = "osd"),
          (a.j = 947190542),
          mh(this),
          uh(this),
          Ah(this, e))
        : ((e = {}),
          (e = ((e.r = "pv"), e)),
          ch(this, e, !0),
          (this.c = 5),
          mh(this)))
  }
  u(ih)
  var lh = ["1", "0", "3"],
    Bh = Q(123, function(a) {
      for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c]
      var d
      return (d = ih.g()).Eb.apply(d, ha(b))
    })
  pa("osdlfm", Bh)
  var Ch = Q(124, function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c]
    var d
    return (d = ih.g()).Ab.apply(d, ha(b))
  })
  pa("osdlac", Ch)
  var Dh = Q(125, function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c]
    var d
    return (d = Rg.g()).zb.apply(d, ha(b))
  })
  pa("osdlamrc", Dh)
}.call(this, this, this.document))
