;(function(_) {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ba,
    da,
    ha,
    la,
    sa,
    ua,
    ya,
    za,
    Ba,
    Ia,
    Ka,
    Ma,
    Na,
    Oa,
    Pa,
    Ra,
    Sa,
    Ta,
    Xa,
    $a,
    db,
    eb,
    ab,
    ib,
    jb,
    lb,
    tb,
    ub,
    xb,
    zb,
    Ab,
    Cb,
    Gb,
    A,
    Hb,
    Ib,
    Jb,
    Kb,
    Lb,
    t,
    Mb,
    Nb,
    Ob,
    Qb,
    Rb,
    Vb,
    Wb,
    Xb,
    ic,
    lc,
    mc,
    kc,
    jc,
    oc,
    pc,
    qc,
    rc,
    vc,
    tc,
    uc,
    wc,
    xc,
    Ac,
    I
  ba = function(a) {
    return function() {
      return _.aa[a].apply(this, arguments)
    }
  }
  da = function(a) {
    return a ? (a.passive && ca() ? a : a.capture || !1) : !1
  }
  ha = function() {
    return ea(_.q.top, "GoogleSetNPA") || ea(fa(), "GoogleSetNPA")
  }
  la = function(a, b) {
    var c = ia(a, b) || ja(a, b)
    1 === _.r(395) &&
      c &&
      !ka(c) &&
      (a = ja(a, b).parentElement) &&
      a !== b.body &&
      (c = a)
    return c
  }
  sa = function(a, b, c) {
    var d = b.slot,
      e = b.aa,
      f = la(d, a)
    if (!f) return null
    b = ma(f)
    if (!b) return b
    var g = f === ja(d, a),
      h = g || 1 === _.r(395),
      k = na(function() {
        return g ? oa(d, a) || {} : pa(f, window) || {}
      })
    e = qa(e)[0]
    var l = !1
    Array.isArray(e) && (l = c ? h : 0 == b.x && "center" == k()["text-align"])
    l &&
      (b.x += Math.round(
        Math.max(0, (g ? f.clientWidth : f.parentElement.clientWidth) - e[0]) /
          2
      ))
    h &&
      ((b.y += Math.round(
        Math.min(parseInt(k()["padding-top"], 10) || 0, f.clientHeight)
      )),
      l ||
        ((c = f.clientWidth),
        (b.x += Math.round(
          Math.min(parseInt(k()["padding-left"], 10) || 0, c)
        ))))
    return b && ka(f) ? b : new _.ra(-12245933, -12245933)
  }
  ua = function(a) {
    a = _.ta(a.split(/\s+/), function(b) {
      return (b = /^(-?\d+)(px|%)$/.exec(b))
        ? { value: parseFloat(b[1]), type: b[2] }
        : { value: 0, type: "px" }
    })
    a[1] = a[1] || a[0]
    a[2] = a[2] || a[0]
    a[3] = a[3] || a[1]
    return a
  }
  ya = function(a) {
    if (!a) return [0]
    a = "number" === typeof a ? [a] : a
    a = _.va(a, function(b) {
      return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
    })
    wa(a)
    xa(a, function(b, c) {
      return b - c
    })
    return a
  }
  za = function(a) {
    try {
      var b = a.getBoundingClientRect()
    } catch (c) {}
    return b
      ? {
          top: b.top,
          right: b.right,
          bottom: b.bottom,
          left: b.left,
          width: b.width || b.right - b.left,
          height: b.height || b.bottom - b.top,
        }
      : { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }
  }
  Ba = function(a) {
    var b = window,
      c = !0
    c = void 0 === c ? !1 : c
    new t.Promise(function(d, e) {
      function f() {
        g.onload = null
        g.onerror = null
        b.document.body.removeChild(g)
      }
      var g = b.document.createElement("script")
      g.onload = function() {
        f()
        d()
      }
      g.onerror = function() {
        f()
        e(void 0)
      }
      g.type = "text/javascript"
      Aa(g, a)
      c && "complete" !== b.document.readyState
        ? _.v(b, "load", function() {
            b.document.body.appendChild(g)
          })
        : b.document.body.appendChild(g)
    })
  }
  Ia = function(a) {
    return Ca(this, function c() {
      var d, e, f
      return Da(c, function(g) {
        switch (g.j) {
          case 1:
            return (
              (d =
                "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" +
                a.j +
                ("&tv=" + a.l + "&st=") +
                a.$a),
              (e = void 0),
              (g.A = 2),
              Ea(g, Fa(d), 4)
            )
          case 4:
            e = g.o
            Ga(g, 3)
            break
          case 2:
            Ha(g)
          case 3:
            return e
              ? (f = a.mb || e.sodar_query_id) &&
                e.bg_hash_basename &&
                e.bg_binary
                ? g.return({
                    context: a.v,
                    Ic: e.bg_hash_basename,
                    Hc: e.bg_binary,
                    Zc: a.j + "_" + a.l,
                    mb: f,
                    $a: a.$a,
                  })
                : g.return(void 0)
              : g.return(void 0)
        }
      })
    })
  }
  Ka = function(a) {
    Ca(this, function c() {
      var d
      return Da(c, function(e) {
        if (1 == e.j) return Ea(e, Ia(a), 2)
        if ((d = e.o)) {
          var f = "sodar2"
          f = void 0 === f ? "sodar2" : f
          var g = window,
            h = g.GoogleGcLKhOms
          ;(h && "function" === typeof h.push) || (h = g.GoogleGcLKhOms = [])
          var k = {}
          h.push(
            ((k._ctx_ = d.context),
            (k._bgv_ = d.Ic),
            (k._bgp_ = d.Hc),
            (k._li_ = d.Zc),
            (k._jk_ = d.mb),
            (k._st_ = d.$a),
            k)
          )
          if ((h = g.GoogleDX5YKUSk)) (g.GoogleDX5YKUSk = void 0), h[1]()
          f = Ja({ basename: f })
          Ba(f)
        }
        return e.return(d)
      })
    })
  }
  Ma = function(a) {
    if (a !== La) throw Error("Bad secret")
  }
  Na = function(a) {
    return (a = a.querySelector("script[nonce]"))
      ? a.nonce || a.getAttribute("nonce") || ""
      : ""
  }
  Oa = function(a, b) {
    b = void 0 === b ? window : b
    if (w(a, 5))
      try {
        return b.localStorage
      } catch (c) {}
    return null
  }
  Pa = function(a, b) {
    b = void 0 === b ? document : b
    return w(a, 5) ? b.cookie : null
  }
  Ra = function(a, b, c) {
    c = void 0 === c ? document : c
    b = Pa(b, c)
    return null === b ? null : new Qa({ cookie: b }).get(a) || ""
  }
  Sa = function(a) {
    return "number" === typeof a || "string" === typeof a
  }
  Ta = function(a) {
    switch (a) {
      case void 0:
      case null:
      case 2:
        return !1
      case 0:
      case 1:
        return !0
      default:
        throw Error("Unexpected encryption mode: " + a)
    }
  }
  Xa = function() {
    var a = window,
      b = Ua()
    var c = void 0 === c ? Va : c
    if (_.x(215) && !a.goog_sdr_l) {
      Object.defineProperty(a, "goog_sdr_l", { value: !0 })
      var d = function() {
        var e = _.r(37),
          f = function() {
            c(a, "gpt", b, String(Wa(a)))
          }
        e ? a.setTimeout(f, e) : f()
      }
      "complete" === a.document.readyState ? d() : _.v(a, "load", d)
    }
  }
  $a = function(a) {
    var b = Ya(a)
    return (
      ((A = [
        "google_debug",
        "dfpdeb",
        "google_console",
        "google_force_console",
        "googfc",
      ]),
      _.B(A, "find")).call(A, function(c) {
        var d = b.search(Za)
        b: {
          var e = 0
          for (var f = c.length; 0 <= (e = b.indexOf(c, e)) && e < d; ) {
            var g = b.charCodeAt(e - 1)
            if (38 == g || 63 == g)
              if (
                ((g = b.charCodeAt(e + f)), !g || 61 == g || 38 == g || 35 == g)
              )
                break b
            e += f + 1
          }
          e = -1
        }
        if (0 > e) c = null
        else {
          f = b.indexOf("&", e)
          if (0 > f || f > d) f = d
          e += c.length + 1
          c = decodeURIComponent(b.substr(e, f - e).replace(/\+/g, " "))
        }
        return null !== c
      }) || null
    )
  }
  db = function(a, b, c) {
    var d = void 0 === d ? {} : d
    ab(a, b, c, d)
    switch (a) {
      case 0:
      case 9:
        ;(a = cb()),
          (c = a.get(b).Ea)
            ? ((b = (C(c, 4) || 0) + 1), D(c, 4, b), a.set(c))
            : ab(11, b, null, {})
    }
  }
  eb = function(a, b, c) {
    var d = void 0 === d ? {} : d
    ab(a, b, c, d)
  }
  ab = function(a, b, c, d) {
    fb("gpt_3plib", function(e) {
      gb(e)
      E(e, "c", a)
      c && E(e, "em", c)
      E(e, "lid", b)
      _.B(Object, "keys")
        .call(Object, d)
        .forEach(function(f) {
          E(e, f, d[f])
        })
    })
  }
  ib = function(a, b, c, d) {
    return hb(659, c, function(e, f) {
      eb(1, a, f.message)
      return t.Promise.resolve(null)
    }).then(function(e) {
      d && d()
      D(b, 2, e)
      e = cb().set(b)
      e.errorMessage && eb(e.info, a, e.errorMessage)
      return b
    })
  }
  jb = function(a) {
    var b = void 0 === b ? function() {} : b
    return new t.Promise(function(c) {
      setTimeout(function() {
        c(b())
      }, a)
    })
  }
  lb = function(a, b) {
    b = void 0 === b ? function() {} : b
    return new t.Promise(function(c) {
      var d = function() {
        c(b())
        _.kb(a, "load", d)
      }
      _.v(a, "load", d)
    })
  }
  tb = function() {
    var a = new mb(),
      b = new nb(a.F),
      c = new ob(b.F),
      d = new pb(c.m),
      e = new qb()
    rb(e, [a, b, c, d])
    sb(e)
  }
  ub = function(a, b, c) {
    c = void 0 === c ? "" : c
    var d =
      void 0 === d
        ? function(l) {
            return !!l
          }
        : d
    var e = void 0 === e ? "," : e
    var f = [],
      g = !1
    a = _.F(a)
    for (var h = a.next(); !h.done; h = a.next()) {
      h = b(h.value)
      var k = d(h)
      g = g || k
      f.push(String(k ? h : c))
    }
    return g ? f.join(e) : null
  }
  xb = function(a, b) {
    var c =
      b ||
      function() {
        return !0
      }
    a = vb(a)
    var d = []
    _.wb(a, function(e, f) {
      e = e.filter(function(h) {
        return c(h, f)
      })
      if (e.length) {
        e = e.map(encodeURIComponent)
        var g = encodeURIComponent(f)
        d.push(g + "=" + e.join())
      }
    })
    return d
  }
  zb = function(a, b, c, d) {
    fb(
      "gpt_sz",
      function(e) {
        E(e, "r", yb(a))
        E(e, "w", c.width)
        E(e, "h", c.height)
        b && E(e, "f", b)
        null != d && E(e, "a", Number(d))
      },
      { ta: _.r(28) }
    )
  }
  Ab = function(a) {
    return new t.Promise(function(b) {
      return void setTimeout(b, a)
    })
  }
  Cb = function(a, b) {
    return "undefined" === typeof IntersectionObserver
      ? new Bb(b, { rootMargin: a })
      : new IntersectionObserver(b, { rootMargin: a })
  }
  Gb = function() {
    Db("pubadsReady", !0)
    if (_.x(206)) {
      var a = 0
      Object.defineProperty(Eb(), "pubadsReady", {
        get: function() {
          5 > a &&
            fb(
              "gpt_pubads_ready",
              function(b) {
                ++a
                gb(b)
                var c = Error("pubadsReady")
                E(b, "stack", Fb(c.stack, c.message))
              },
              { ta: 0.1 }
            )
          return !0
        },
        configurable: !0,
        enumerable: !0,
      })
    }
  }
  _.aa = []
  Hb = function(a) {
    var b = 0
    return function() {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
    }
  }
  Ib =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function(a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a
          a[b] = c.value
          return a
        }
  Jb = function(a) {
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
  Kb = Jb(this)
  Lb = "function" === typeof Symbol && "symbol" === typeof Symbol("x")
  t = {}
  Mb = {}
  _.B = function(a, b) {
    var c = Mb[b]
    if (null == c) return a[b]
    c = a[c]
    return void 0 !== c ? c : a[b]
  }
  Nb = function(a, b, c) {
    if (b)
      a: {
        var d = a.split(".")
        a = 1 === d.length
        var e = d[0],
          f
        !a && e in t ? (f = t) : (f = Kb)
        for (e = 0; e < d.length - 1; e++) {
          var g = d[e]
          if (!(g in f)) break a
          f = f[g]
        }
        d = d[d.length - 1]
        c = Lb && "es6" === c ? f[d] : null
        b = b(c)
        null != b &&
          (a
            ? Ib(t, d, { configurable: !0, writable: !0, value: b })
            : b !== c &&
              ((Mb[d] = Lb ? Kb.Symbol(d) : "$jscp$" + d),
              (d = Mb[d]),
              Ib(f, d, { configurable: !0, writable: !0, value: b })))
      }
  }
  Nb(
    "Symbol",
    function(a) {
      if (a) return a
      var b = function(e, f) {
        this.j = e
        Ib(this, "description", { configurable: !0, writable: !0, value: f })
      }
      b.prototype.toString = function() {
        return this.j
      }
      var c = 0,
        d = function(e) {
          if (this instanceof d)
            throw new TypeError("Symbol is not a constructor")
          return new b("jscomp_symbol_" + (e || "") + "_" + c++, e)
        }
      return d
    },
    "es6"
  )
  Nb(
    "Symbol.iterator",
    function(a) {
      if (a) return a
      a = (0, t.Symbol)("Symbol.iterator")
      for (
        var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
            " "
          ),
          c = 0;
        c < b.length;
        c++
      ) {
        var d = Kb[b[c]]
        "function" === typeof d &&
          "function" != typeof d.prototype[a] &&
          Ib(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
              return Ob(Hb(this))
            },
          })
      }
      return a
    },
    "es6"
  )
  Ob = function(a) {
    a = { next: a }
    a[_.B(t.Symbol, "iterator")] = function() {
      return this
    }
    return a
  }
  _.F = function(a) {
    var b =
      "undefined" != typeof t.Symbol &&
      _.B(t.Symbol, "iterator") &&
      a[_.B(t.Symbol, "iterator")]
    return b ? b.call(a) : { next: Hb(a) }
  }
  _.Pb = function(a) {
    if (!(a instanceof Array)) {
      a = _.F(a)
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value)
      a = c
    }
    return a
  }
  Qb =
    "function" == typeof Object.create
      ? Object.create
      : function(a) {
          var b = function() {}
          b.prototype = a
          return new b()
        }
  if (Lb && "function" == typeof _.B(Object, "setPrototypeOf"))
    Rb = _.B(Object, "setPrototypeOf")
  else {
    var Sb
    a: {
      var Tb = { a: !0 },
        Ub = {}
      try {
        Ub.__proto__ = Tb
        Sb = Ub.a
        break a
      } catch (a) {}
      Sb = !1
    }
    Rb = Sb
      ? function(a, b) {
          a.__proto__ = b
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible")
          return a
        }
      : null
  }
  Vb = Rb
  _.H = function(a, b) {
    a.prototype = Qb(b.prototype)
    a.prototype.constructor = a
    if (Vb) Vb(a, b)
    else
      for (var c in b)
        if ("prototype" != c)
          if (Object.defineProperties) {
            var d = Object.getOwnPropertyDescriptor(b, c)
            d && Object.defineProperty(a, c, d)
          } else a[c] = b[c]
  }
  Wb = function() {
    this.m = !1
    this.l = null
    this.o = void 0
    this.j = 1
    this.D = this.A = 0
    this.v = null
  }
  Xb = function(a) {
    if (a.m) throw new TypeError("Generator is already running")
    a.m = !0
  }
  Wb.prototype.B = function(a) {
    this.o = a
  }
  var Yb = function(a, b) {
    a.v = { hc: b, Wc: !0 }
    a.j = a.A || a.D
  }
  Wb.prototype.return = function(a) {
    this.v = { return: a }
    this.j = this.D
  }
  var Ea = function(a, b, c) {
      a.j = c
      return { value: b }
    },
    Ga = function(a, b) {
      a.j = b
      a.A = 0
    },
    Ha = function(a) {
      a.A = 0
      var b = a.v.hc
      a.v = null
      return b
    },
    Zb = function(a) {
      this.j = new Wb()
      this.l = a
    },
    bc = function(a, b) {
      Xb(a.j)
      var c = a.j.l
      if (c)
        return $b(
          a,
          "return" in c
            ? c["return"]
            : function(d) {
                return { value: d, done: !0 }
              },
          b,
          a.j.return
        )
      a.j.return(b)
      return ac(a)
    },
    $b = function(a, b, c, d) {
      try {
        var e = b.call(a.j.l, c)
        if (!(e instanceof Object))
          throw new TypeError("Iterator result " + e + " is not an object")
        if (!e.done) return (a.j.m = !1), e
        var f = e.value
      } catch (g) {
        return (a.j.l = null), Yb(a.j, g), ac(a)
      }
      a.j.l = null
      d.call(a.j, f)
      return ac(a)
    },
    ac = function(a) {
      for (; a.j.j; )
        try {
          var b = a.l(a.j)
          if (b) return (a.j.m = !1), { value: b.value, done: !1 }
        } catch (c) {
          ;(a.j.o = void 0), Yb(a.j, c)
        }
      a.j.m = !1
      if (a.j.v) {
        b = a.j.v
        a.j.v = null
        if (b.Wc) throw b.hc
        return { value: b.return, done: !0 }
      }
      return { value: void 0, done: !0 }
    },
    cc = function(a) {
      this.next = function(b) {
        Xb(a.j)
        a.j.l ? (b = $b(a, a.j.l.next, b, a.j.B)) : (a.j.B(b), (b = ac(a)))
        return b
      }
      this.throw = function(b) {
        Xb(a.j)
        a.j.l
          ? (b = $b(a, a.j.l["throw"], b, a.j.B))
          : (Yb(a.j, b), (b = ac(a)))
        return b
      }
      this.return = function(b) {
        return bc(a, b)
      }
      this[_.B(t.Symbol, "iterator")] = function() {
        return this
      }
    },
    Da = function(a, b) {
      b = new cc(new Zb(b))
      Vb && a.prototype && Vb(b, a.prototype)
      return b
    }
  Nb(
    "Reflect.setPrototypeOf",
    function(a) {
      return a
        ? a
        : Vb
        ? function(b, c) {
            try {
              return Vb(b, c), !0
            } catch (d) {
              return !1
            }
          }
        : null
    },
    "es6"
  )
  var dc = function(a, b, c) {
    a instanceof String && (a = String(a))
    for (var d = a.length, e = 0; e < d; e++) {
      var f = a[e]
      if (b.call(c, f, e, a)) return { i: e, Ec: f }
    }
    return { i: -1, Ec: void 0 }
  }
  Nb(
    "Array.prototype.findIndex",
    function(a) {
      return a
        ? a
        : function(b, c) {
            return dc(this, b, c).i
          }
    },
    "es6"
  )
  var ec = function(a, b, c) {
    if (null == a)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          c +
          " must not be null or undefined"
      )
    if (b instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          c +
          " must not be a regular expression"
      )
    return a + ""
  }
  Nb(
    "String.prototype.endsWith",
    function(a) {
      return a
        ? a
        : function(b, c) {
            var d = ec(this, b, "endsWith")
            void 0 === c && (c = d.length)
            c = Math.max(0, Math.min(c | 0, d.length))
            for (var e = b.length; 0 < e && 0 < c; )
              if (d[--c] != b[--e]) return !1
            return 0 >= e
          }
    },
    "es6"
  )
  Nb(
    "Array.prototype.find",
    function(a) {
      return a
        ? a
        : function(b, c) {
            return dc(this, b, c).Ec
          }
    },
    "es6"
  )
  var fc = function(a, b) {
    a instanceof String && (a += "")
    var c = 0,
      d = {
        next: function() {
          if (c < a.length) {
            var e = c++
            return { value: b(e, a[e]), done: !1 }
          }
          d.next = function() {
            return { done: !0, value: void 0 }
          }
          return d.next()
        },
      }
    d[_.B(t.Symbol, "iterator")] = function() {
      return d
    }
    return d
  }
  Nb(
    "Array.prototype.keys",
    function(a) {
      return a
        ? a
        : function() {
            return fc(this, function(b) {
              return b
            })
          }
    },
    "es6"
  )
  Nb(
    "Array.prototype.values",
    function(a) {
      return a
        ? a
        : function() {
            return fc(this, function(b, c) {
              return c
            })
          }
    },
    "es8"
  )
  var gc = function(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b)
    },
    hc =
      Lb && "function" == typeof _.B(Object, "assign")
        ? _.B(Object, "assign")
        : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c]
              if (d) for (var e in d) gc(d, e) && (a[e] = d[e])
            }
            return a
          }
  Nb(
    "Object.assign",
    function(a) {
      return a || hc
    },
    "es6"
  )
  Nb(
    "Promise",
    function(a) {
      function b() {
        this.j = null
      }
      function c(g) {
        return g instanceof e
          ? g
          : new e(function(h) {
              h(g)
            })
      }
      if (a) return a
      b.prototype.l = function(g) {
        if (null == this.j) {
          this.j = []
          var h = this
          this.v(function() {
            h.m()
          })
        }
        this.j.push(g)
      }
      var d = Kb.setTimeout
      b.prototype.v = function(g) {
        d(g, 0)
      }
      b.prototype.m = function() {
        for (; this.j && this.j.length; ) {
          var g = this.j
          this.j = []
          for (var h = 0; h < g.length; ++h) {
            var k = g[h]
            g[h] = null
            try {
              k()
            } catch (l) {
              this.o(l)
            }
          }
        }
        this.j = null
      }
      b.prototype.o = function(g) {
        this.v(function() {
          throw g
        })
      }
      var e = function(g) {
        this.l = 0
        this.m = void 0
        this.j = []
        var h = this.v()
        try {
          g(h.resolve, h.reject)
        } catch (k) {
          h.reject(k)
        }
      }
      e.prototype.v = function() {
        function g(l) {
          return function(m) {
            k || ((k = !0), l.call(h, m))
          }
        }
        var h = this,
          k = !1
        return { resolve: g(this.G), reject: g(this.o) }
      }
      e.prototype.G = function(g) {
        if (g === this)
          this.o(new TypeError("A Promise cannot resolve to itself"))
        else if (g instanceof e) this.H(g)
        else {
          a: switch (typeof g) {
            case "object":
              var h = null != g
              break a
            case "function":
              h = !0
              break a
            default:
              h = !1
          }
          h ? this.T(g) : this.A(g)
        }
      }
      e.prototype.T = function(g) {
        var h = void 0
        try {
          h = g.then
        } catch (k) {
          this.o(k)
          return
        }
        "function" == typeof h ? this.I(h, g) : this.A(g)
      }
      e.prototype.o = function(g) {
        this.B(2, g)
      }
      e.prototype.A = function(g) {
        this.B(1, g)
      }
      e.prototype.B = function(g, h) {
        if (0 != this.l)
          throw Error(
            "Cannot settle(" +
              g +
              ", " +
              h +
              "): Promise already settled in state" +
              this.l
          )
        this.l = g
        this.m = h
        this.D()
      }
      e.prototype.D = function() {
        if (null != this.j) {
          for (var g = 0; g < this.j.length; ++g) f.l(this.j[g])
          this.j = null
        }
      }
      var f = new b()
      e.prototype.H = function(g) {
        var h = this.v()
        g.qb(h.resolve, h.reject)
      }
      e.prototype.I = function(g, h) {
        var k = this.v()
        try {
          g.call(h, k.resolve, k.reject)
        } catch (l) {
          k.reject(l)
        }
      }
      e.prototype.then = function(g, h) {
        function k(u, z) {
          return "function" == typeof u
            ? function(y) {
                try {
                  l(u(y))
                } catch (G) {
                  m(G)
                }
              }
            : z
        }
        var l,
          m,
          n = new e(function(u, z) {
            l = u
            m = z
          })
        this.qb(k(g, l), k(h, m))
        return n
      }
      e.prototype.catch = function(g) {
        return this.then(void 0, g)
      }
      e.prototype.qb = function(g, h) {
        function k() {
          switch (l.l) {
            case 1:
              g(l.m)
              break
            case 2:
              h(l.m)
              break
            default:
              throw Error("Unexpected state: " + l.l)
          }
        }
        var l = this
        null == this.j ? f.l(k) : this.j.push(k)
      }
      e.resolve = c
      e.reject = function(g) {
        return new e(function(h, k) {
          k(g)
        })
      }
      e.race = function(g) {
        return new e(function(h, k) {
          for (var l = _.F(g), m = l.next(); !m.done; m = l.next())
            c(m.value).qb(h, k)
        })
      }
      e.all = function(g) {
        var h = _.F(g),
          k = h.next()
        return k.done
          ? c([])
          : new e(function(l, m) {
              function n(y) {
                return function(G) {
                  u[y] = G
                  z--
                  0 == z && l(u)
                }
              }
              var u = [],
                z = 0
              do
                u.push(void 0),
                  z++,
                  c(k.value).qb(n(u.length - 1), m),
                  (k = h.next())
              while (!k.done)
            })
      }
      return e
    },
    "es6"
  )
  Nb(
    "Object.setPrototypeOf",
    function(a) {
      return a || Vb
    },
    "es6"
  )
  Nb(
    "WeakMap",
    function(a) {
      function b() {}
      function c(g) {
        var h = typeof g
        return ("object" === h && null !== g) || "function" === h
      }
      if (
        (function() {
          if (!a || !Object.seal) return !1
          try {
            var g = Object.seal({}),
              h = Object.seal({}),
              k = new a([
                [g, 2],
                [h, 3],
              ])
            if (2 != k.get(g) || 3 != k.get(h)) return !1
            k.delete(g)
            k.set(h, 4)
            return !k.has(g) && 4 == k.get(h)
          } catch (l) {
            return !1
          }
        })()
      )
        return a
      var d = "$jscomp_hidden_" + Math.random(),
        e = 0,
        f = function(g) {
          this.j = (e += Math.random() + 1).toString()
          if (g) {
            g = _.F(g)
            for (var h; !(h = g.next()).done; )
              (h = h.value), this.set(h[0], h[1])
          }
        }
      f.prototype.set = function(g, h) {
        if (!c(g)) throw Error("Invalid WeakMap key")
        if (!gc(g, d)) {
          var k = new b()
          Ib(g, d, { value: k })
        }
        if (!gc(g, d)) throw Error("WeakMap key fail: " + g)
        g[d][this.j] = h
        return this
      }
      f.prototype.get = function(g) {
        return c(g) && gc(g, d) ? g[d][this.j] : void 0
      }
      f.prototype.has = function(g) {
        return c(g) && gc(g, d) && gc(g[d], this.j)
      }
      f.prototype.delete = function(g) {
        return c(g) && gc(g, d) && gc(g[d], this.j) ? delete g[d][this.j] : !1
      }
      return f
    },
    "es6"
  )
  Nb(
    "Map",
    function(a) {
      if (
        (function() {
          if (
            !a ||
            "function" != typeof a ||
            !_.B(a.prototype, "entries") ||
            "function" != typeof Object.seal
          )
            return !1
          try {
            var h = Object.seal({ x: 4 }),
              k = new a(_.F([[h, "s"]]))
            if (
              "s" != k.get(h) ||
              1 != k.size ||
              k.get({ x: 4 }) ||
              k.set({ x: 4 }, "t") != k ||
              2 != k.size
            )
              return !1
            var l = _.B(k, "entries").call(k),
              m = l.next()
            if (m.done || m.value[0] != h || "s" != m.value[1]) return !1
            m = l.next()
            return m.done ||
              4 != m.value[0].x ||
              "t" != m.value[1] ||
              !l.next().done
              ? !1
              : !0
          } catch (n) {
            return !1
          }
        })()
      )
        return a
      var b = new t.WeakMap(),
        c = function(h) {
          this.l = {}
          this.j = f()
          this.size = 0
          if (h) {
            h = _.F(h)
            for (var k; !(k = h.next()).done; )
              (k = k.value), this.set(k[0], k[1])
          }
        }
      c.prototype.set = function(h, k) {
        h = 0 === h ? 0 : h
        var l = d(this, h)
        l.list || (l.list = this.l[l.id] = [])
        l.ia
          ? (l.ia.value = k)
          : ((l.ia = {
              next: this.j,
              va: this.j.va,
              head: this.j,
              key: h,
              value: k,
            }),
            l.list.push(l.ia),
            (this.j.va.next = l.ia),
            (this.j.va = l.ia),
            this.size++)
        return this
      }
      c.prototype.delete = function(h) {
        h = d(this, h)
        return h.ia && h.list
          ? (h.list.splice(h.index, 1),
            h.list.length || delete this.l[h.id],
            (h.ia.va.next = h.ia.next),
            (h.ia.next.va = h.ia.va),
            (h.ia.head = null),
            this.size--,
            !0)
          : !1
      }
      c.prototype.clear = function() {
        this.l = {}
        this.j = this.j.va = f()
        this.size = 0
      }
      c.prototype.has = function(h) {
        return !!d(this, h).ia
      }
      c.prototype.get = function(h) {
        return (h = d(this, h).ia) && h.value
      }
      c.prototype.entries = function() {
        return e(this, function(h) {
          return [h.key, h.value]
        })
      }
      c.prototype.keys = function() {
        return e(this, function(h) {
          return h.key
        })
      }
      c.prototype.values = function() {
        return e(this, function(h) {
          return h.value
        })
      }
      c.prototype.forEach = function(h, k) {
        for (var l = _.B(this, "entries").call(this), m; !(m = l.next()).done; )
          (m = m.value), h.call(k, m[1], m[0], this)
      }
      c.prototype[_.B(t.Symbol, "iterator")] = _.B(c.prototype, "entries")
      var d = function(h, k) {
          var l = k && typeof k
          "object" == l || "function" == l
            ? b.has(k)
              ? (l = b.get(k))
              : ((l = "" + ++g), b.set(k, l))
            : (l = "p_" + k)
          var m = h.l[l]
          if (m && gc(h.l, l))
            for (h = 0; h < m.length; h++) {
              var n = m[h]
              if ((k !== k && n.key !== n.key) || k === n.key)
                return { id: l, list: m, index: h, ia: n }
            }
          return { id: l, list: m, index: -1, ia: void 0 }
        },
        e = function(h, k) {
          var l = h.j
          return Ob(function() {
            if (l) {
              for (; l.head != h.j; ) l = l.va
              for (; l.next != l.head; )
                return (l = l.next), { done: !1, value: k(l) }
              l = null
            }
            return { done: !0, value: void 0 }
          })
        },
        f = function() {
          var h = {}
          return (h.va = h.next = h.head = h)
        },
        g = 0
      return c
    },
    "es6"
  )
  Nb(
    "Object.is",
    function(a) {
      return a
        ? a
        : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
          }
    },
    "es6"
  )
  Nb(
    "Array.prototype.includes",
    function(a) {
      return a
        ? a
        : function(b, c) {
            var d = this
            d instanceof String && (d = String(d))
            var e = d.length
            c = c || 0
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
              var f = d[c]
              if (f === b || _.B(Object, "is").call(Object, f, b)) return !0
            }
            return !1
          }
    },
    "es7"
  )
  Nb(
    "String.prototype.includes",
    function(a) {
      return a
        ? a
        : function(b, c) {
            return -1 !== ec(this, b, "includes").indexOf(b, c || 0)
          }
    },
    "es6"
  )
  Nb(
    "Number.isFinite",
    function(a) {
      return a
        ? a
        : function(b) {
            return "number" !== typeof b
              ? !1
              : !isNaN(b) && Infinity !== b && -Infinity !== b
          }
    },
    "es6"
  )
  Nb(
    "Number.isInteger",
    function(a) {
      return a
        ? a
        : function(b) {
            return _.B(Number, "isFinite").call(Number, b)
              ? b === Math.floor(b)
              : !1
          }
    },
    "es6"
  )
  Nb(
    "Array.from",
    function(a) {
      return a
        ? a
        : function(b, c, d) {
            c =
              null != c
                ? c
                : function(h) {
                    return h
                  }
            var e = [],
              f =
                "undefined" != typeof t.Symbol &&
                _.B(t.Symbol, "iterator") &&
                b[_.B(t.Symbol, "iterator")]
            if ("function" == typeof f) {
              b = f.call(b)
              for (var g = 0; !(f = b.next()).done; )
                e.push(c.call(d, f.value, g++))
            } else
              for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g))
            return e
          }
    },
    "es6"
  )
  Nb(
    "Array.prototype.entries",
    function(a) {
      return a
        ? a
        : function() {
            return fc(this, function(b, c) {
              return [b, c]
            })
          }
    },
    "es6"
  )
  Nb(
    "Set",
    function(a) {
      if (
        (function() {
          if (
            !a ||
            "function" != typeof a ||
            !_.B(a.prototype, "entries") ||
            "function" != typeof Object.seal
          )
            return !1
          try {
            var c = Object.seal({ x: 4 }),
              d = new a(_.F([c]))
            if (
              !d.has(c) ||
              1 != d.size ||
              d.add(c) != d ||
              1 != d.size ||
              d.add({ x: 4 }) != d ||
              2 != d.size
            )
              return !1
            var e = _.B(d, "entries").call(d),
              f = e.next()
            if (f.done || f.value[0] != c || f.value[1] != c) return !1
            f = e.next()
            return f.done ||
              f.value[0] == c ||
              4 != f.value[0].x ||
              f.value[1] != f.value[0]
              ? !1
              : e.next().done
          } catch (g) {
            return !1
          }
        })()
      )
        return a
      var b = function(c) {
        this.j = new t.Map()
        if (c) {
          c = _.F(c)
          for (var d; !(d = c.next()).done; ) this.add(d.value)
        }
        this.size = this.j.size
      }
      b.prototype.add = function(c) {
        c = 0 === c ? 0 : c
        this.j.set(c, c)
        this.size = this.j.size
        return this
      }
      b.prototype.delete = function(c) {
        c = this.j.delete(c)
        this.size = this.j.size
        return c
      }
      b.prototype.clear = function() {
        this.j.clear()
        this.size = 0
      }
      b.prototype.has = function(c) {
        return this.j.has(c)
      }
      b.prototype.entries = function() {
        return _.B(this.j, "entries").call(this.j)
      }
      b.prototype.values = function() {
        return _.B(this.j, "values").call(this.j)
      }
      b.prototype.keys = _.B(b.prototype, "values")
      b.prototype[_.B(t.Symbol, "iterator")] = _.B(b.prototype, "values")
      b.prototype.forEach = function(c, d) {
        var e = this
        this.j.forEach(function(f) {
          return c.call(d, f, f, e)
        })
      }
      return b
    },
    "es6"
  )
  _.q = this || self
  ic = function(a, b) {
    a = a.split(".")
    var c = _.q
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
  lc = function(a) {
    if (a && a != _.q) return jc(a.document)
    null === kc && (kc = jc(_.q.document))
    return kc
  }
  mc = /^[\w+/_-]+[=]{0,2}$/
  kc = null
  jc = function(a) {
    return (a = a.querySelector && a.querySelector("script[nonce]")) &&
      (a = a.nonce || a.getAttribute("nonce")) &&
      mc.test(a)
      ? a
      : ""
  }
  _.nc = function() {}
  oc = function(a) {
    a.Xa = void 0
    a.C = function() {
      return a.Xa ? a.Xa : (a.Xa = new a())
    }
  }
  pc = function(a) {
    var b = typeof a
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null"
  }
  qc = function(a) {
    var b = pc(a)
    return "array" == b || ("object" == b && "number" == typeof a.length)
  }
  rc = function(a) {
    return "function" == pc(a)
  }
  _.sc = function(a) {
    var b = typeof a
    return ("object" == b && null != a) || "function" == b
  }
  vc = function(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, tc) && a[tc]) || (a[tc] = ++uc)
    )
  }
  tc = "closure_uid_" + ((1e9 * Math.random()) >>> 0)
  uc = 0
  wc = function(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }
  xc = function(a, b, c) {
    if (!a) throw Error()
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2)
      return function() {
        var e = Array.prototype.slice.call(arguments)
        Array.prototype.unshift.apply(e, d)
        return a.apply(b, e)
      }
    }
    return function() {
      return a.apply(b, arguments)
    }
  }
  _.yc = function(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? (_.yc = wc)
      : (_.yc = xc)
    return _.yc.apply(null, arguments)
  }
  _.zc = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1)
    return function() {
      var d = c.slice()
      d.push.apply(d, arguments)
      return a.apply(this, d)
    }
  }
  Ac = Date.now
  I = function(a, b) {
    function c() {}
    c.prototype = b.prototype
    a.prototype = new c()
    a.prototype.constructor = a
  }
  var Bc
  var Dc, Gc, Fc, Ic, Jc, Kc, Lc, wa, xa, Nc, Mc, Oc, Pc, Qc
  _.Cc = function(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
  }
  _.va = function(a, b) {
    return Array.prototype.filter.call(a, b, void 0)
  }
  _.ta = function(a, b) {
    return Array.prototype.map.call(a, b, void 0)
  }
  Dc = function(a, b) {
    return Array.prototype.reduce.call(a, b, 0)
  }
  _.Ec = function(a, b) {
    return Array.prototype.some.call(a, b, void 0)
  }
  Gc = function(a, b) {
    b = Fc(a, b)
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
  }
  Fc = function(a, b) {
    for (
      var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
      e < c;
      e++
    )
      if (e in d && b.call(void 0, d[e], e, a)) return e
    return -1
  }
  _.Hc = function(a, b) {
    return 0 <= Array.prototype.indexOf.call(a, b, void 0)
  }
  Ic = function(a, b) {
    b = Array.prototype.indexOf.call(a, b, void 0)
    var c
    ;(c = 0 <= b) && Array.prototype.splice.call(a, b, 1)
    return c
  }
  Jc = function(a) {
    return Array.prototype.concat.apply([], arguments)
  }
  Kc = function(a) {
    var b = a.length
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]
      return c
    }
    return []
  }
  Lc = function(a, b, c) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(a, b)
      : Array.prototype.slice.call(a, b, c)
  }
  wa = function(a) {
    for (var b = {}, c = 0, d = 0; d < a.length; ) {
      var e = a[d++]
      var f = e
      f = _.sc(f) ? "o" + vc(f) : (typeof f).charAt(0) + f
      Object.prototype.hasOwnProperty.call(b, f) || ((b[f] = !0), (a[c++] = e))
    }
    a.length = c
  }
  xa = function(a, b) {
    a.sort(b || Mc)
  }
  Nc = function(a, b) {
    for (var c = Array(a.length), d = 0; d < a.length; d++)
      c[d] = { index: d, value: a[d] }
    var e = b || Mc
    xa(c, function(f, g) {
      return e(f.value, g.value) || f.index - g.index
    })
    for (d = 0; d < a.length; d++) a[d] = c[d].value
  }
  Mc = function(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
  }
  Oc = function(a, b) {
    return a === b
  }
  Pc = function(a, b) {
    for (var c = {}, d = 0; d < a.length; d++) {
      var e = a[d],
        f = b.call(void 0, e, d, a)
      void 0 !== f && (c[f] || (c[f] = [])).push(e)
    }
    return c
  }
  Qc = function(a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
      var d = arguments[c]
      if (Array.isArray(d))
        for (var e = 0; e < d.length; e += 8192)
          for (
            var f = Qc.apply(null, Lc(d, e, e + 8192)), g = 0;
            g < f.length;
            g++
          )
            b.push(f[g])
      else b.push(d)
    }
    return b
  }
  var Rc = function(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d)
      255 < e && ((b[c++] = e & 255), (e >>= 8))
      b[c++] = e
    }
    return b
  }
  var Sc = function() {
      return !0
    },
    na = function(a) {
      var b = !1,
        c
      return function() {
        b || ((c = a()), (b = !0))
        return c
      }
    },
    Tc = function(a) {
      var b = a
      return function() {
        if (b) {
          var c = b
          b = null
          c()
        }
      }
    },
    Uc = function(a, b, c) {
      var d = 0,
        e = !1,
        f = [],
        g = function() {
          d = 0
          e && ((e = !1), h())
        },
        h = function() {
          d = _.q.setTimeout(g, b)
          a.apply(c, f)
        }
      return function(k) {
        f = arguments
        d ? (e = !0) : h()
      }
    }
  var Vc = function(a, b) {
      for (var c in a) b.call(void 0, a[c], c, a)
    },
    Wc = function(a, b) {
      return null !== a && b in a
    },
    Xc = function(a, b) {
      for (var c in a) if (b.call(void 0, a[c], c, a)) return c
    },
    Yc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    ),
    Zc = function(a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e]
        for (c in d) a[c] = d[c]
        for (var f = 0; f < Yc.length; f++)
          (c = Yc[f]),
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
    },
    $c = function(a) {
      var b = arguments.length
      if (1 == b && Array.isArray(arguments[0]))
        return $c.apply(null, arguments[0])
      for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0
      return c
    }
  var cd = function(a, b) {
    this.j = (a === ad && b) || ""
    this.l = bd
  }
  cd.prototype.jb = !0
  cd.prototype.Oa = function() {
    return this.j
  }
  var dd = function(a) {
      return a instanceof cd && a.constructor === cd && a.l === bd
        ? a.j
        : "type_error:Const"
    },
    bd = {},
    ad = {}
  var gd = function(a, b) {
    this.j = (a === ed && b) || ""
    this.l = fd
  }
  gd.prototype.jb = !0
  gd.prototype.Oa = function() {
    return this.j.toString()
  }
  var hd = function(a) {
      return a instanceof gd && a.constructor === gd && a.l === fd
        ? a.j
        : "type_error:TrustedResourceUrl"
    },
    Ja = function(a) {
      var b = dd(id)
      if (!jd.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b)
      var c = b.replace(kd, function(d, e) {
        if (!Object.prototype.hasOwnProperty.call(a, e))
          throw Error(
            'Found marker, "' +
              e +
              '", in format string, "' +
              b +
              '", but no valid label mapping found in args: ' +
              JSON.stringify(a)
          )
        d = a[e]
        return d instanceof cd ? dd(d) : encodeURIComponent(String(d))
      })
      return new gd(ed, c)
    },
    kd = /%{(\w+)}/g,
    jd = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
    fd = {},
    ed = {}
  var ld = function(a, b) {
      var c = a.length - b.length
      return 0 <= c && a.indexOf(b, c) == c
    },
    md = function(a) {
      return /^[\s\xa0]*$/.test(a)
    },
    nd = function(a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    od = /&/g,
    pd = /</g,
    qd = />/g,
    sd = /"/g,
    td = /'/g,
    ud = /\x00/g,
    vd = /[\x00&<>"']/,
    xd = function(a, b) {
      var c = 0
      a = nd(String(a)).split(".")
      b = nd(String(b)).split(".")
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || ""
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""]
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""]
          if (0 == f[0].length && 0 == g[0].length) break
          c =
            wd(
              0 == f[1].length ? 0 : parseInt(f[1], 10),
              0 == g[1].length ? 0 : parseInt(g[1], 10)
            ) ||
            wd(0 == f[2].length, 0 == g[2].length) ||
            wd(f[2], g[2])
          f = f[3]
          g = g[3]
        } while (0 == c)
      }
      return c
    },
    wd = function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    }
  var Cd, zd, yd
  _.Ad = function(a, b) {
    this.j = (a === yd && b) || ""
    this.l = zd
  }
  _.Ad.prototype.jb = !0
  _.Ad.prototype.Oa = function() {
    return this.j.toString()
  }
  _.Bd = function(a) {
    return a instanceof _.Ad && a.constructor === _.Ad && a.l === zd
      ? a.j
      : "type_error:SafeUrl"
  }
  Cd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
  _.Dd = function(a) {
    if (a instanceof _.Ad) return a
    a = "object" == typeof a && a.jb ? a.Oa() : String(a)
    Cd.test(a) || (a = "about:invalid#zClosurez")
    return new _.Ad(yd, a)
  }
  zd = {}
  yd = {}
  var Ed
  a: {
    var Fd = _.q.navigator
    if (Fd) {
      var Gd = Fd.userAgent
      if (Gd) {
        Ed = Gd
        break a
      }
    }
    Ed = ""
  }
  var J = function(a) {
      return -1 != Ed.indexOf(a)
    },
    Hd = function(a) {
      for (
        var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d;
        (d = b.exec(a));

      )
        c.push([d[1], d[2], d[3] || void 0])
      return c
    }
  var Id = function() {
      return J("Trident") || J("MSIE")
    },
    Jd = function() {
      return J("Firefox") || J("FxiOS")
    },
    Ld = function() {
      return (
        J("Safari") &&
        !(
          Kd() ||
          J("Coast") ||
          J("Opera") ||
          J("Edge") ||
          J("Edg/") ||
          J("OPR") ||
          Jd() ||
          J("Silk") ||
          J("Android")
        )
      )
    },
    Kd = function() {
      return (J("Chrome") || J("CriOS")) && !J("Edge")
    },
    Nd = function() {
      function a(e) {
        e = Gc(e, d)
        return c[e] || ""
      }
      var b = Ed
      if (Id()) return Md(b)
      b = Hd(b)
      var c = {}
      _.Cc(b, function(e) {
        c[e[0]] = e[1]
      })
      var d = _.zc(Wc, c)
      return J("Opera")
        ? a(["Version", "Opera"])
        : J("Edge")
        ? a(["Edge"])
        : J("Edg/")
        ? a(["Edg"])
        : Kd()
        ? a(["Chrome", "CriOS", "HeadlessChrome"])
        : ((b = b[2]) && b[1]) || ""
    },
    Md = function(a) {
      var b = /rv: *([\d\.]*)/.exec(a)
      if (b && b[1]) return b[1]
      b = ""
      var c = /MSIE +([\d\.]+)/.exec(a)
      if (c && c[1])
        if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
          if (a && a[1])
            switch (a[1]) {
              case "4.0":
                b = "8.0"
                break
              case "5.0":
                b = "9.0"
                break
              case "6.0":
                b = "10.0"
                break
              case "7.0":
                b = "11.0"
            }
          else b = "7.0"
        else b = c[1]
      return b
    }
  var Pd = function() {
    this.j = ""
    this.l = Od
  }
  Pd.prototype.jb = !0
  Pd.prototype.Oa = function() {
    return this.j.toString()
  }
  var Od = {}
  var Aa = function(a, b) {
    a.src = hd(b)
    ;(b = lc(a.ownerDocument && a.ownerDocument.defaultView)) &&
      a.setAttribute("nonce", b)
  }
  var Qd, Rd, Sd, Td, Vd
  Qd = function(a) {
    vd.test(a) &&
      (-1 != a.indexOf("&") && (a = a.replace(od, "&amp;")),
      -1 != a.indexOf("<") && (a = a.replace(pd, "&lt;")),
      -1 != a.indexOf(">") && (a = a.replace(qd, "&gt;")),
      -1 != a.indexOf('"') && (a = a.replace(sd, "&quot;")),
      -1 != a.indexOf("'") && (a = a.replace(td, "&#39;")),
      -1 != a.indexOf("\x00") && (a = a.replace(ud, "&#0;")))
    return a
  }
  Rd = String.prototype.repeat
    ? function(a, b) {
        return a.repeat(b)
      }
    : function(a, b) {
        return Array(b + 1).join(a)
      }
  Sd = function(a) {
    a = String(a)
    var b = a.indexOf(".")
    ;-1 == b && (b = a.length)
    return Rd("0", Math.max(0, 2 - b)) + a
  }
  Td = function() {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ Ac()).toString(36)
    )
  }
  _.Ud = function(a) {
    return String(a).replace(/\-([a-z])/g, function(b, c) {
      return c.toUpperCase()
    })
  }
  Vd = function(a) {
    return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
      return c + d.toUpperCase()
    })
  }
  var Wd = 0,
    Xd = 0
  var Yd = function() {
    this.j = []
  }
  Yd.prototype.length = function() {
    return this.j.length
  }
  var Zd = function(a, b) {
    for (; 127 < b; ) a.j.push((b & 127) | 128), (b >>>= 7)
    a.j.push(b)
  }
  var $d = function() {
    return J("iPhone") && !J("iPod") && !J("iPad")
  }
  var ae = function(a) {
    ae[" "](a)
    return a
  }
  ae[" "] = _.nc
  var be = function(a, b) {
      try {
        return ae(a[b]), !0
      } catch (c) {}
      return !1
    },
    de = function(a, b) {
      var c = ce
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a))
    }
  var ee, fe, ge, he, je, ke, le, me, ne, oe, pe, qe
  ee = J("Opera")
  fe = Id()
  ge = J("Edge")
  he = ge || fe
  _.ie =
    J("Gecko") &&
    !(-1 != Ed.toLowerCase().indexOf("webkit") && !J("Edge")) &&
    !(J("Trident") || J("MSIE")) &&
    !J("Edge")
  je = -1 != Ed.toLowerCase().indexOf("webkit") && !J("Edge")
  ke = je && J("Mobile")
  le = J("Android")
  me = $d()
  ne = J("iPad")
  oe = J("iPod")
  pe = function() {
    var a = _.q.document
    return a ? a.documentMode : void 0
  }
  a: {
    var re = "",
      se = (function() {
        var a = Ed
        if (_.ie) return /rv:([^\);]+)(\)|;)/.exec(a)
        if (ge) return /Edge\/([\d\.]+)/.exec(a)
        if (fe) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
        if (je) return /WebKit\/(\S+)/.exec(a)
        if (ee) return /(?:Version)[ \/]?(\S+)/.exec(a)
      })()
    se && (re = se ? se[1] : "")
    if (fe) {
      var te = pe()
      if (null != te && te > parseFloat(re)) {
        qe = String(te)
        break a
      }
    }
    qe = re
  }
  var ue = qe,
    ce = {},
    ve = function(a) {
      return de(a, function() {
        return 0 <= xd(ue, a)
      })
    },
    we
  if (_.q.document && fe) {
    var xe = pe()
    we = xe ? xe : parseInt(ue, 10) || void 0
  } else we = void 0
  var ye = we
  var ze = Kd(),
    Ae = Ld() && !($d() || J("iPad") || J("iPod"))
  var Be = {},
    Ce = null,
    De = _.ie || (je && !Ae) || ee || "function" == typeof _.q.btoa,
    Ee = function(a, b) {
      void 0 === b && (b = 0)
      if (!Ce) {
        Ce = {}
        for (
          var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
              ""
            ),
            d = ["+/=", "+/", "-_=", "-_.", "-_"],
            e = 0;
          5 > e;
          e++
        ) {
          var f = c.concat(d[e].split(""))
          Be[e] = f
          for (var g = 0; g < f.length; g++) {
            var h = f[g]
            void 0 === Ce[h] && (Ce[h] = g)
          }
        }
      }
      b = Be[b]
      c = []
      for (d = 0; d < a.length; d += 3) {
        var k = a[d],
          l = (e = d + 1 < a.length) ? a[d + 1] : 0
        h = (f = d + 2 < a.length) ? a[d + 2] : 0
        g = k >> 2
        k = ((k & 3) << 4) | (l >> 4)
        l = ((l & 15) << 2) | (h >> 6)
        h &= 63
        f || ((h = 64), e || (l = 64))
        c.push(b[g], b[k], b[l] || "", b[h] || "")
      }
      return c.join("")
    }
  var Fe = function() {
      this.l = []
      this.j = new Yd()
    },
    Ge = function(a, b, c) {
      if (null != c) {
        Zd(a.j, 8 * b)
        a = a.j
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
        Wd = b
        Xd = d
        c = Wd
        for (b = Xd; 0 < b || 127 < c; )
          a.j.push((c & 127) | 128),
            (c = ((c >>> 7) | (b << 25)) >>> 0),
            (b >>>= 7)
        a.j.push(c)
      }
    }
  var L = function() {},
    He = "function" == typeof Uint8Array,
    M = function(a, b, c, d) {
      a.j = null
      b || (b = [])
      a.B = void 0
      a.v = -1
      a.ea = b
      a: {
        if ((b = a.ea.length)) {
          --b
          var e = a.ea[b]
          if (
            !(
              null === e ||
              "object" != typeof e ||
              Array.isArray(e) ||
              (He && e instanceof Uint8Array)
            )
          ) {
            a.o = b - a.v
            a.l = e
            break a
          }
        }
        a.o = Number.MAX_VALUE
      }
      a.A = {}
      if (c)
        for (b = 0; b < c.length; b++)
          (e = c[b]),
            e < a.o
              ? ((e += a.v), (a.ea[e] = a.ea[e] || Ie))
              : (Je(a), (a.l[e] = a.l[e] || Ie))
      if (d && d.length)
        for (b = 0; b < d.length; b++) {
          e = c = void 0
          for (var f = a, g = d[b], h = 0; h < g.length; h++) {
            var k = g[h],
              l = C(f, k)
            null != l && ((e = k), (c = l), D(f, k, void 0))
          }
          e && D(f, e, c)
        }
    },
    Ie = [],
    Je = function(a) {
      var b = a.o + a.v
      a.ea[b] || (a.l = a.ea[b] = {})
    },
    C = function(a, b) {
      if (b < a.o) {
        b += a.v
        var c = a.ea[b]
        return c === Ie ? (a.ea[b] = []) : c
      }
      if (a.l) return (c = a.l[b]), c === Ie ? (a.l[b] = []) : c
    },
    Ke = function(a, b) {
      a = C(a, b)
      return null == a ? a : +a
    },
    w = function(a, b) {
      a = C(a, b)
      return null == a ? a : !!a
    },
    Le = function(a) {
      return null == a || "string" === typeof a
        ? a
        : He && a instanceof Uint8Array
        ? Ee(a)
        : null
    },
    Me = function(a, b, c) {
      a = C(a, b)
      return null == a ? c : a
    },
    Ne = function(a) {
      a = w(a, 12)
      return null == a ? !1 : a
    },
    Oe = function(a) {
      a = Ke(a, 2)
      return null == a ? 1 : a
    },
    D = function(a, b, c) {
      b < a.o ? (a.ea[b + a.v] = c) : (Je(a), (a.l[b] = c))
      return a
    },
    Qe = function(a, b, c) {
      return Pe(a, b, c, !1)
    },
    Pe = function(a, b, c, d) {
      c !== d
        ? D(a, b, c)
        : b < a.o
        ? (a.ea[b + a.v] = null)
        : (Je(a), delete a.l[b])
      return a
    },
    Re = function(a, b, c) {
      C(a, b).push(c)
    },
    Se = function(a, b, c) {
      a.j || (a.j = {})
      if (!a.j[c]) {
        var d = C(a, c)
        d && (a.j[c] = new b(d))
      }
      return a.j[c]
    },
    Ue = function(a, b, c) {
      Te(a, b, c)
      b = a.j[c]
      b == Ie && (b = a.j[c] = [])
      return b
    },
    Te = function(a, b, c) {
      a.j || (a.j = {})
      if (!a.j[c]) {
        for (var d = C(a, c), e = [], f = 0; f < d.length; f++)
          e[f] = new b(d[f])
        a.j[c] = e
      }
    },
    Ve = function(a, b, c) {
      a.j || (a.j = {})
      var d = c ? c.ea : c
      a.j[b] = c
      return D(a, b, d)
    },
    We = function(a, b, c) {
      a.j || (a.j = {})
      c = c || []
      for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].ea
      a.j[b] = c
      return D(a, b, d)
    },
    Xe = function(a, b, c, d) {
      Te(a, d, b)
      var e = a.j[b]
      e || (e = a.j[b] = [])
      c = c ? c : new d()
      a = C(a, b)
      e.push(c)
      a.push(c.ea)
    }
  L.prototype.m = He
    ? function() {
        var a = Uint8Array.prototype.toJSON
        Uint8Array.prototype.toJSON = function() {
          return Ee(this)
        }
        try {
          return JSON.stringify(this.ea && this.ea, Ye)
        } finally {
          Uint8Array.prototype.toJSON = a
        }
      }
    : function() {
        return JSON.stringify(this.ea && this.ea, Ye)
      }
  var Ye = function(a, b) {
      return "number" !== typeof b ||
        (!isNaN(b) && Infinity !== b && -Infinity !== b)
        ? b
        : String(b)
    },
    Ze = function(a, b) {
      return new a(b ? JSON.parse(b) : null)
    },
    $e = function(a) {
      if (Array.isArray(a)) {
        for (var b = Array(a.length), c = 0; c < a.length; c++) {
          var d = a[c]
          null != d && (b[c] = "object" == typeof d ? $e(d) : d)
        }
        return b
      }
      if (He && a instanceof Uint8Array) return new Uint8Array(a)
      b = {}
      for (c in a)
        (d = a[c]), null != d && (b[c] = "object" == typeof d ? $e(d) : d)
      return b
    }
  var af = function(a) {
    M(this, a, null, null)
  }
  I(af, L)
  var bf = document,
    cf = window
  var df = function(a) {
    M(this, a, null, null)
  }
  I(df, L)
  var ef = function(a) {
    M(this, a, null, null)
  }
  I(ef, L)
  var Qa = function(a) {
    this.j = a || { cookie: "" }
  }
  Qa.prototype.set = function(a, b, c) {
    var d = !1
    if ("object" === typeof c) {
      var e = c.re
      d = c.nd || !1
      var f = c.domain || void 0
      var g = c.path || void 0
      var h = c.oc
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"')
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"')
    void 0 === h && (h = -1)
    c = f ? ";domain=" + f : ""
    g = g ? ";path=" + g : ""
    d = d ? ";secure" : ""
    h =
      0 > h
        ? ""
        : 0 == h
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Ac() + 1e3 * h).toUTCString()
    this.j.cookie =
      a + "=" + b + c + g + h + d + (null != e ? ";samesite=" + e : "")
  }
  Qa.prototype.get = function(a, b) {
    for (
      var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = nd(d[e])
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length)
      if (f == a) return ""
    }
    return b
  }
  Qa.prototype.isEmpty = function() {
    return !this.j.cookie
  }
  var ff = function(a) {
      return (a = new Qa(a).get("DATA_USE_CONSENT", "")) ? a : null
    },
    gf = function(a) {
      var b = (b = new Qa(a).get("FCCDCF", "")) ? b : null
      try {
        var c = b ? Ze(df, b) : null
      } catch (d) {
        c = null
      }
      if (!c) return ff(a)
      c = Se(c, ef, 3)
      if (!c || null == C(c, 1)) return ff(a)
      a = C(c, 2)
      b = Date.now()
      if (a) {
        if (b < a || b > a + 33696e6) return null
      } else return null
      return C(c, 1)
    }
  var jf = function(a) {
    M(this, a, hf, null)
  }
  I(jf, L)
  var hf = [1, 2, 3, 4]
  var ca
  ca = na(function() {
    var a = !1
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function() {
          a = !0
        },
      })
      _.q.addEventListener("test", null, b)
    } catch (c) {}
    return a
  })
  _.v = function(a, b, c, d) {
    return a.addEventListener ? (a.addEventListener(b, c, da(d)), !0) : !1
  }
  _.kb = function(a, b, c, d) {
    return a.removeEventListener ? (a.removeEventListener(b, c, da(d)), !0) : !1
  }
  var kf = function(a) {
    this.j = this.o = this.A = 0
    this.l = a
    this.m = this.v = 0
  }
  kf.prototype.add = function(a) {
    this.A += a.A
    this.o += a.o
    this.j += a.j
    this.l += a.l
    this.v += a.v
    this.m += a.m
  }
  var nf = function(a, b, c) {
      "number" === typeof a
        ? ((this.j = lf(a, b || 0, c || 1)), mf(this, c || 1))
        : _.sc(a)
        ? ((this.j = lf(a.getFullYear(), a.getMonth(), a.getDate())),
          mf(this, a.getDate()))
        : ((this.j = new Date(Ac())),
          (a = this.j.getDate()),
          this.j.setHours(0),
          this.j.setMinutes(0),
          this.j.setSeconds(0),
          this.j.setMilliseconds(0),
          mf(this, a))
    },
    lf = function(a, b, c) {
      b = new Date(a, b, c)
      0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900)
      return b
    }
  _.p = nf.prototype
  _.p.getFullYear = function() {
    return this.j.getFullYear()
  }
  _.p.getMonth = function() {
    return this.j.getMonth()
  }
  _.p.getDate = function() {
    return this.j.getDate()
  }
  _.p.getTime = function() {
    return this.j.getTime()
  }
  _.p.set = function(a) {
    this.j = new Date(a.getFullYear(), a.getMonth(), a.getDate())
  }
  _.p.add = function(a) {
    if (a.A || a.o) {
      var b = this.getMonth() + a.o + 12 * a.A,
        c = this.getFullYear() + Math.floor(b / 12)
      b %= 12
      0 > b && (b += 12)
      a: {
        switch (b) {
          case 1:
            var d = 0 != c % 4 || (0 == c % 100 && 0 != c % 400) ? 28 : 29
            break a
          case 5:
          case 8:
          case 10:
          case 3:
            d = 30
            break a
        }
        d = 31
      }
      d = Math.min(d, this.getDate())
      this.j.setDate(1)
      this.j.setFullYear(c)
      this.j.setMonth(b)
      this.j.setDate(d)
    }
    a.j &&
      ((a = new Date(
        new Date(
          this.getFullYear(),
          this.getMonth(),
          this.getDate(),
          12
        ).getTime() +
          864e5 * a.j
      )),
      this.j.setDate(1),
      this.j.setFullYear(a.getFullYear()),
      this.j.setMonth(a.getMonth()),
      this.j.setDate(a.getDate()),
      mf(this, a.getDate()))
  }
  _.p.tb = function(a) {
    return [
      this.getFullYear(),
      Sd(this.getMonth() + 1),
      Sd(this.getDate()),
    ].join(a ? "-" : "")
  }
  _.p.toString = function() {
    return this.tb()
  }
  var mf = function(a, b) {
    a.getDate() != b &&
      a.j.setUTCHours(a.j.getUTCHours() + (a.getDate() < b ? 1 : -1))
  }
  nf.prototype.valueOf = function() {
    return this.j.valueOf()
  }
  var of = function(a, b, c, d, e, f, g) {
    this.j =
      "number" === typeof a
        ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0)
        : new Date(a && a.getTime ? a.getTime() : Ac())
  }
  I(of, nf)
  var pf = function(a) {
    var b = new of()
    b.j.setTime(a)
    return b
  }
  of.prototype.add = function(a) {
    nf.prototype.add.call(this, a)
    a.l && this.j.setUTCHours(this.j.getUTCHours() + a.l)
    a.v && this.j.setUTCMinutes(this.j.getUTCMinutes() + a.v)
    a.m && this.j.setUTCSeconds(this.j.getUTCSeconds() + a.m)
  }
  of.prototype.tb = function(a) {
    var b = nf.prototype.tb.call(this, a)
    return a
      ? b +
          "T" +
          Sd(this.j.getHours()) +
          ":" +
          Sd(this.j.getMinutes()) +
          ":" +
          Sd(this.j.getSeconds())
      : b +
          "T" +
          Sd(this.j.getHours()) +
          Sd(this.j.getMinutes()) +
          Sd(this.j.getSeconds())
  }
  of.prototype.toString = function() {
    return this.tb()
  }
  var qf = !fe || 9 <= Number(ye),
    rf = fe || ee || je
  _.ra = function(a, b) {
    this.x = void 0 !== a ? a : 0
    this.y = void 0 !== b ? b : 0
  }
  _.ra.prototype.ceil = function() {
    this.x = Math.ceil(this.x)
    this.y = Math.ceil(this.y)
    return this
  }
  _.ra.prototype.floor = function() {
    this.x = Math.floor(this.x)
    this.y = Math.floor(this.y)
    return this
  }
  _.ra.prototype.round = function() {
    this.x = Math.round(this.x)
    this.y = Math.round(this.y)
    return this
  }
  _.sf = function(a, b) {
    this.width = a
    this.height = b
  }
  _.p = _.sf.prototype
  _.p.aspectRatio = function() {
    return this.width / this.height
  }
  _.p.isEmpty = function() {
    return !(this.width * this.height)
  }
  _.p.ceil = function() {
    this.width = Math.ceil(this.width)
    this.height = Math.ceil(this.height)
    return this
  }
  _.p.floor = function() {
    this.width = Math.floor(this.width)
    this.height = Math.floor(this.height)
    return this
  }
  _.p.round = function() {
    this.width = Math.round(this.width)
    this.height = Math.round(this.height)
    return this
  }
  var vf, xf, wf, Af, Bf, Df, Ef, Hf, If, tf
  vf = function(a) {
    return a ? new tf(_.uf(a)) : Bc || (Bc = new tf())
  }
  xf = function(a, b) {
    Vc(b, function(c, d) {
      c && "object" == typeof c && c.jb && (c = c.Oa())
      "style" == d
        ? (a.style.cssText = c)
        : "class" == d
        ? (a.className = c)
        : "for" == d
        ? (a.htmlFor = c)
        : wf.hasOwnProperty(d)
        ? a.setAttribute(wf[d], c)
        : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
        ? a.setAttribute(d, c)
        : (a[d] = c)
    })
  }
  wf = {
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
  _.zf = function(a) {
    a = a.document
    a = _.yf(a) ? a.documentElement : a.body
    return new _.sf(a.clientWidth, a.clientHeight)
  }
  Af = function(a) {
    return a.scrollingElement
      ? a.scrollingElement
      : !je && _.yf(a)
      ? a.documentElement
      : a.body || a.documentElement
  }
  _.Cf = function(a) {
    return a ? Bf(a) : window
  }
  Bf = function(a) {
    return a.parentWindow || a.defaultView
  }
  Df = function(a, b, c) {
    function d(h) {
      h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
    }
    for (var e = 2; e < c.length; e++) {
      var f = c[e]
      if (!qc(f) || (_.sc(f) && 0 < f.nodeType)) d(f)
      else {
        a: {
          if (f && "number" == typeof f.length) {
            if (_.sc(f)) {
              var g = "function" == typeof f.item || "string" == typeof f.item
              break a
            }
            if (rc(f)) {
              g = "function" == typeof f.item
              break a
            }
          }
          g = !1
        }
        _.Cc(g ? Kc(f) : f, d)
      }
    }
  }
  Ef = function(a, b) {
    b = String(b)
    "application/xhtml+xml" === a.contentType && (b = b.toLowerCase())
    return a.createElement(b)
  }
  _.yf = function(a) {
    return "CSS1Compat" == a.compatMode
  }
  _.Ff = function(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
  }
  _.Gf = function(a) {
    var b
    if (
      rf &&
      !(
        fe &&
        ve("9") &&
        !ve("10") &&
        _.q.SVGElement &&
        a instanceof _.q.SVGElement
      ) &&
      (b = a.parentElement)
    )
      return b
    b = a.parentNode
    return _.sc(b) && 1 == b.nodeType ? b : null
  }
  _.uf = function(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
  }
  Hf = function(a) {
    try {
      return (
        a.contentWindow || (a.contentDocument ? _.Cf(a.contentDocument) : null)
      )
    } catch (b) {}
    return null
  }
  If = function(a, b) {
    if (9 == a.nodeType) var c = [a.documentElement]
    else
      for (c = [], a = a.lastElementChild; a; a = a.previousElementSibling)
        c.push(a)
    for (; 0 < c.length; ) {
      a = c.pop()
      if (b(a)) return a
      for (a = a.lastElementChild; a; a = a.previousElementSibling) c.push(a)
    }
    return null
  }
  tf = function(a) {
    this.j = a || _.q.document || document
  }
  tf.prototype.l = function(a, b, c) {
    var d = this.j,
      e = arguments,
      f = String(e[0]),
      g = e[1]
    if (!qf && g && (g.name || g.type)) {
      f = ["<", f]
      g.name && f.push(' name="', Qd(g.name), '"')
      if (g.type) {
        f.push(' type="', Qd(g.type), '"')
        var h = {}
        Zc(h, g)
        delete h.type
        g = h
      }
      f.push(">")
      f = f.join("")
    }
    f = Ef(d, f)
    g &&
      ("string" === typeof g
        ? (f.className = g)
        : Array.isArray(g)
        ? (f.className = g.join(" "))
        : xf(f, g))
    2 < e.length && Df(d, f, e)
    return f
  }
  var Jf = function(a, b) {
    return Ef(a.j, b)
  }
  var Lf = function(a) {
      Kf()
      return new gd(ed, a)
    },
    Kf = _.nc
  var Mf = function() {
    return J("iPad") || (J("Android") && !J("Mobile")) || J("Silk")
  }
  var Of, Pf, Za
  _.Nf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
  Of = function(a) {
    return a ? decodeURI(a) : a
  }
  Pf = function(a, b, c) {
    if (Array.isArray(b))
      for (var d = 0; d < b.length; d++) Pf(a, String(b[d]), c)
    else
      null != b &&
        c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
  }
  Za = /#|$/
  var Qf,
    Sf,
    fa,
    Rf,
    Tf,
    Uf,
    pa,
    Xf,
    Wf,
    Yf,
    Zf,
    ag,
    bg,
    Vf,
    dg,
    eg,
    cg,
    fg,
    hg,
    ig,
    jg,
    kg,
    lg,
    mg,
    ng,
    og,
    ea,
    pg,
    qg,
    rg,
    tg,
    wg,
    yg,
    Ag,
    Bg,
    zg,
    Cg,
    Dg,
    Eg,
    Fg,
    Gg,
    Hg,
    Ig,
    Jg,
    Kg,
    Wa,
    Lg,
    Mg,
    Ng
  Qf = function(a) {
    try {
      return !!a && null != a.location.href && be(a, "foo")
    } catch (b) {
      return !1
    }
  }
  Sf = function(a) {
    for (var b = _.q, c = 0; b && 40 > c++ && (!Qf(b) || !a(b)); ) b = Rf(b)
  }
  fa = function() {
    var a = _.q
    Sf(function(b) {
      a = b
      return !1
    })
    return a
  }
  Rf = function(a) {
    try {
      var b = a.parent
      if (b && b != a) return b
    } catch (c) {}
    return null
  }
  Tf = function(a) {
    return Qf(a.top) ? a.top : null
  }
  Uf = function(a, b) {
    var c = a.createElement("script")
    Aa(c, Lf(b))
    return (a = a.getElementsByTagName("script")[0]) && a.parentNode
      ? (a.parentNode.insertBefore(c, a), c)
      : null
  }
  pa = function(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
  }
  Xf = function(a, b) {
    if (!Vf()) {
      var c = Math.random()
      if (c < b) return (c = Wf(_.q)), a[Math.floor(c * a.length)]
    }
    return null
  }
  Wf = function(a) {
    if (!a.crypto) return Math.random()
    try {
      var b = new Uint32Array(1)
      a.crypto.getRandomValues(b)
      return b[0] / 65536 / 65536
    } catch (c) {
      return Math.random()
    }
  }
  _.wb = function(a, b, c) {
    if (a)
      for (var d in a)
        Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
  }
  Yf = function(a) {
    for (var b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1
    return !0
  }
  Zf = function(a) {
    var b = []
    _.wb(a, function(c, d) {
      b.push(d)
    })
    return b
  }
  _.$f = function(a) {
    var b = []
    _.wb(a, function(c) {
      b.push(c)
    })
    return b
  }
  ag = function(a, b) {
    return Xc(a, function(c, d) {
      return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
    })
  }
  bg = function(a) {
    var b = a.length
    if (0 == b) return 0
    for (var c = 305419896, d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295
    return 0 < c ? c : 4294967296 + c
  }
  Vf = na(function() {
    return (
      _.Ec(
        [
          "Google Web Preview",
          "Mediapartners-Google",
          "Google-Read-Aloud",
          "Google-Adwords",
        ],
        cg
      ) || 1e-4 > Math.random()
    )
  })
  dg = function(a) {
    return Vf() ? null : Math.floor(1e3 * Wf(a))
  }
  eg = function(a, b) {
    try {
      if (a) return a.setItem("google_experiment_mod", b), b
    } catch (c) {}
    return null
  }
  cg = function(a) {
    return -1 != Ed.indexOf(a)
  }
  fg = /^(-?[0-9.]{1,30})$/
  _.gg = function(a, b) {
    return fg.test(a) && ((a = Number(a)), !isNaN(a))
      ? a
      : void 0 == b
      ? null
      : b
  }
  hg = function() {
    return /^true$/.test("false")
  }
  ig = function(a, b) {
    b = void 0 === b ? !0 : b
    try {
      for (var c = null; c != a; c = a, a = a.parent)
        switch (a.location.protocol) {
          case "https:":
            return !0
          case "file:":
            return b
          case "http:":
            return !1
        }
    } catch (d) {}
    return !0
  }
  jg = function(a) {
    if (!a) return ""
    var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/
    try {
      var c = b.exec(decodeURIComponent(a))
      if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
    } catch (d) {}
    return ""
  }
  kg = {
    Fd: "allow-forms",
    Gd: "allow-modals",
    Hd: "allow-orientation-lock",
    Id: "allow-pointer-lock",
    Jd: "allow-popups",
    Kd: "allow-popups-to-escape-sandbox",
    Ld: "allow-presentation",
    Md: "allow-same-origin",
    Nd: "allow-scripts",
    Od: "allow-top-navigation",
    Pd: "allow-top-navigation-by-user-activation",
  }
  lg = na(function() {
    return _.$f(kg)
  })
  mg = function(a) {
    var b = lg()
    return a.length
      ? _.va(b, function(c) {
          return !_.Hc(a, c)
        })
      : b
  }
  ng = function() {
    var a = Ef(document, "IFRAME"),
      b = {}
    _.Cc(lg(), function(c) {
      a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
    })
    return b
  }
  og = function(a) {
    a = a && a.toString && a.toString()
    return "string" === typeof a && -1 != a.indexOf("[native code]")
  }
  ea = function(a, b) {
    try {
      return !(!a.frames || !a.frames[b])
    } catch (c) {
      return !1
    }
  }
  pg = function(a, b) {
    for (var c = 0; 50 > c; ++c) {
      if (ea(a, b)) return a
      if (!(a = Rf(a))) break
    }
    return null
  }
  qg = na(function() {
    return !Mf() && (J("iPod") || J("iPhone") || J("Android") || J("IEMobile"))
      ? 2
      : Mf()
      ? 1
      : 0
  })
  rg = function(a, b) {
    var c
    for (c = void 0 === c ? 100 : c; a && c--; ) {
      if (a == b) return !0
      a = a.parentElement
    }
    return !1
  }
  _.xg = function(a, b) {
    a.style.setProperty
      ? _.wb(b, function(c, d) {
          a.style.setProperty(d, c, "important")
        })
      : (a.style.cssText = _.sg(
          tg(
            _.vg(a.style.cssText),
            wg(b, function(c) {
              return c + " !important"
            })
          )
        ))
  }
  tg =
    _.B(Object, "assign") ||
    function(a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c]
        if (d)
          for (var e in d)
            Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
      }
      return a
    }
  wg = function(a, b) {
    var c = {},
      d
    for (d in a)
      Object.prototype.hasOwnProperty.call(a, d) &&
        (c[d] = b.call(void 0, a[d], d, a))
    return c
  }
  yg = function(a, b, c) {
    for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a); )
      a = a.parentElement
  }
  Ag = function(a) {
    return zg(a, function(b) {
      return "fixed" == b.position || "sticky" == b.position
    })
  }
  Bg = function(a) {
    return zg(a, function(b) {
      return (
        "left" == b["float"] ||
        "right" == b["float"] ||
        "left" == b.cssFloat ||
        "right" == b.cssFloat
      )
    })
  }
  zg = function(a, b) {
    var c
    for (c = void 0 === c ? 100 : c; a && c--; ) {
      var d = pa(a, window)
      if (d) {
        if (b(d)) return !0
        a = a.parentElement
      }
    }
    return !1
  }
  Cg = function(a) {
    if (!a) return null
    a = a.transform
    if (!a) return null
    a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /)
    return 6 != a.length ? null : _.ta(a, parseFloat)
  }
  _.sg = function(a) {
    var b = []
    _.wb(a, function(c, d) {
      null != c && "" !== c && b.push(d + ":" + c)
    })
    return b.length ? b.join(";") + ";" : ""
  }
  _.vg = function(a) {
    var b = {}
    if (a) {
      var c = /\s*:\s*/
      _.Cc((a || "").split(/\s*;\s*/), function(d) {
        if (d) {
          var e = d.split(c)
          d = e[0]
          e = e[1]
          d && e && (b[d.toLowerCase()] = e)
        }
      })
    }
    return b
  }
  Dg = function(a, b) {
    a && a.setAttribute("data-google-container-id", b)
  }
  Eg = function(a) {
    _.q.console && _.q.console.warn && _.q.console.warn(a)
  }
  Fg = function(a, b) {
    b = Fc(a, b)
    if (0 <= b) {
      var c = a[b]
      Array.prototype.splice.call(a, b, 1)
      return c
    }
    return null
  }
  Gg = []
  Hg = function() {
    var a = Gg
    Gg = []
    a = _.F(a)
    for (var b = a.next(); !b.done; b = a.next()) {
      b = b.value
      try {
        b()
      } catch (c) {}
    }
  }
  Ig = function(a) {
    Gg.push(a)
    1 == Gg.length &&
      (t.Promise
        ? t.Promise.resolve().then(Hg)
        : window.setImmediate
        ? setImmediate(Hg)
        : setTimeout(Hg, 0))
  }
  Jg = function(a) {
    return a.replace(/\\(n|r|\\)/g, function(b, c) {
      return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
    })
  }
  Kg = function() {
    var a = void 0 === a ? window : a
    return (a = Of(a.location.href.match(_.Nf)[3] || null)) ? bg(a) : null
  }
  Wa = function(a) {
    if ("number" !== typeof a.goog_pvsid)
      try {
        Object.defineProperty(a, "goog_pvsid", {
          value: Math.floor(Math.random() * Math.pow(2, 52)),
        })
      } catch (b) {}
    return Number(a.goog_pvsid) || -1
  }
  Lg = function(a) {
    return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
  }
  Mg = function(a) {
    return 0 === a || Lg(a)
  }
  Ng = function(a, b) {
    var c = document.createElement("div")
    c.id = a
    c.textContent = b
    _.xg(c, {
      height: "24px",
      "line-height": "24px",
      "text-align": "center",
      "vertical-align": "middle",
      color: "white",
      "background-color": "black",
      margin: "0",
      "font-family": "Roboto",
      "font-style": "normal",
      "font-weight": "500",
      "font-size": "11px",
      "letter-spacing": "0.08em",
    })
    return c
  }
  var Og = { ae: 0, Vd: 1, Ud: 2, Td: 3, de: 4, ee: 5, Zd: 6, Wd: 7 }
  var Pg = function() {
      return ea(_.q.top, "googlefcPresent")
    },
    Qg = function(a) {
      var b = document
      try {
        var c = gf(b)
        var d = c ? Ze(jf, c) : null
      } catch (e) {
        d = null
      }
      if (!d) return 0
      if (w(d, 7)) return 4
      if (a) {
        if (_.Hc(C(d, 3), a)) return 2
        if (_.Hc(C(d, 4), a)) return 3
      }
      return 1
    },
    Rg = na(function() {
      var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/
      try {
        return a.test(_.q.top.location.href)
      } catch (b) {
        return a.test(_.q.location.href)
      }
    }),
    Sg = function(a, b, c) {
      for (var d = Zf(Og).length, e = [], f = 0; f < d; f++) e[f] = 0
      Rg() && (a = !0)
      e[0] = a ? 1 : 2
      d = void 0 !== c ? c : ha()
      e[5] = d ? 1 : 2
      e[4] = 2
      c = !!_.q.googlefc || Pg()
      e[1] = c ? 1 : 2
      f = Qg(b)
      0 != f
        ? (b = { jc: f, kc: 3 })
        : ((f = _.q.top),
          (b = {
            jc: ea(f, "googlefcInactive")
              ? 4
              : b && ea(f, "googlefcPA-" + b)
              ? 2
              : ea(f, "googlefcNPA")
              ? 3
              : 0,
            kc: 2,
          }))
      f = b
      b = f.jc
      e[f.kc] = b
      if (!d)
        a: switch (b) {
          case 2:
          case 4:
            d = !1
            break a
          case 3:
            d = !0
            break a
          case 1:
            d = a
            break a
          default:
            d = (void 0 === c ? !1 : c) && a
        }
      return { we: b, hd: d, qd: 0 == b && a && c, Tc: e.join(".") }
    },
    Tg = function(a, b, c, d) {
      var e = Sg(a, b, d)
      e.qd
        ? _.q.setTimeout(function() {
            Tg(a, b, c, d)
          }, 1e3)
        : c(e)
    }
  var Ug = function(a) {
    M(this, a, null, null)
  }
  I(Ug, L)
  _.N = function() {
    this.ma = this.ma
    this.T = this.T
  }
  _.N.prototype.ma = !1
  _.N.prototype.sa = function() {
    this.ma || ((this.ma = !0), this.v())
  }
  _.Wg = function(a, b) {
    _.O(a, _.zc(Vg, b))
  }
  _.O = function(a, b) {
    a.ma ? b() : (a.T || (a.T = []), a.T.push(b))
  }
  _.N.prototype.v = function() {
    if (this.T) for (; this.T.length; ) this.T.shift()()
  }
  var Vg = function(a) {
    a && "function" == typeof a.sa && a.sa()
  }
  var Xg = function(a) {
    this.l = 0
    this.v = a || 100
    this.j = []
  }
  Xg.prototype.add = function(a) {
    var b = this.j[this.l]
    this.j[this.l] = a
    this.l = (this.l + 1) % this.v
    return b
  }
  Xg.prototype.get = function(a) {
    a = Yg(this, a)
    return this.j[a]
  }
  Xg.prototype.set = function(a, b) {
    a = Yg(this, a)
    this.j[a] = b
  }
  Xg.prototype.isEmpty = function() {
    return 0 == this.j.length
  }
  var Zg = function(a) {
      for (var b = a.j.length, c = [], d = a.j.length - a.j.length; d < b; d++)
        c.push(a.get(d))
      return c
    },
    Yg = function(a, b) {
      if (b >= a.j.length) throw Error("Out of bounds exception")
      return a.j.length < a.v ? b : (a.l + Number(b)) % a.v
    }
  var Ca = function(a, b) {
    var c = void 0
    return new (c || (c = t.Promise))(function(d, e) {
      function f(k) {
        try {
          h(b.next(k))
        } catch (l) {
          e(l)
        }
      }
      function g(k) {
        try {
          h(b["throw"](k))
        } catch (l) {
          e(l)
        }
      }
      function h(k) {
        k.done
          ? d(k.value)
          : new c(function(l) {
              l(k.value)
            }).then(f, g)
      }
      h((b = b.apply(a, void 0)).next())
    })
  }
  var ah = function(a, b, c) {
    c =
      void 0 === c
        ? function() {
            return !0
          }
        : c
    _.N.call(this)
    var d = this
    this.o = c
    this.j = new Xg(100)
    this.l = []
    var e = function(f) {
      if (d.o(f) && !d.ma) {
        d.j.add(f)
        for (var g = _.F(d.l), h = g.next(); !h.done; h = g.next())
          $g(h.value, f)
      }
    }
    _.v(a, b, e) &&
      _.O(this, function() {
        _.kb(a, b, e)
      })
  }
  _.H(ah, _.N)
  var $g = function(a, b) {
      try {
        a(b)
      } catch (c) {
        "undefined" !== typeof console && console.error && console.error(c)
      }
    },
    bh = function(a, b) {
      if (a.ma) return function() {}
      for (var c = {}, d = 0; d < a.j.j.length; c = { Bb: c.Bb }, d++)
        (c.Bb = a.j.get(d)),
          Ig(
            (function(e) {
              return function() {
                return void $g(b, e.Bb)
              }
            })(c)
          )
      a.l.push(b)
      return function() {
        return void Ic(a.l, b)
      }
    }
  ah.prototype.v = function() {
    _.N.prototype.v.call(this)
    var a = this.j
    a.j.length = 0
    a.l = 0
    this.l.length = 0
  }
  var ch = function(a, b, c, d) {
      this.top = a
      this.right = b
      this.bottom = c
      this.left = d
    },
    dh = function(a) {
      return new ch(a.top, a.right, a.bottom, a.left)
    }
  ch.prototype.ceil = function() {
    this.top = Math.ceil(this.top)
    this.right = Math.ceil(this.right)
    this.bottom = Math.ceil(this.bottom)
    this.left = Math.ceil(this.left)
    return this
  }
  ch.prototype.floor = function() {
    this.top = Math.floor(this.top)
    this.right = Math.floor(this.right)
    this.bottom = Math.floor(this.bottom)
    this.left = Math.floor(this.left)
    return this
  }
  ch.prototype.round = function() {
    this.top = Math.round(this.top)
    this.right = Math.round(this.right)
    this.bottom = Math.round(this.bottom)
    this.left = Math.round(this.left)
    return this
  }
  var eh = function(a, b, c, d) {
      this.left = a
      this.top = b
      this.width = c
      this.height = d
    },
    fh = function(a) {
      return new ch(a.top, a.left + a.width, a.top + a.height, a.left)
    },
    gh = function(a, b) {
      var c = Math.max(a.left, b.left),
        d = Math.min(a.left + a.width, b.left + b.width)
      if (c <= d) {
        var e = Math.max(a.top, b.top)
        a = Math.min(a.top + a.height, b.top + b.height)
        if (e <= a) return new eh(c, e, d - c, a - e)
      }
      return null
    }
  eh.prototype.ceil = function() {
    this.left = Math.ceil(this.left)
    this.top = Math.ceil(this.top)
    this.width = Math.ceil(this.width)
    this.height = Math.ceil(this.height)
    return this
  }
  eh.prototype.floor = function() {
    this.left = Math.floor(this.left)
    this.top = Math.floor(this.top)
    this.width = Math.floor(this.width)
    this.height = Math.floor(this.height)
    return this
  }
  eh.prototype.round = function() {
    this.left = Math.round(this.left)
    this.top = Math.round(this.top)
    this.width = Math.round(this.width)
    this.height = Math.round(this.height)
    return this
  }
  var hh = {
      "AMP-CAROUSEL": "ac",
      "AMP-FX-FLYING-CARPET": "fc",
      "AMP-LIGHTBOX": "lb",
      "AMP-STICKY-AD": "sa",
    },
    ih = function(a) {
      a = void 0 === a ? _.q : a
      var b = a.context || a.AMP_CONTEXT_DATA
      if (!b)
        try {
          b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
      try {
        if (b && b.pageViewId && b.canonicalUrl) return b
      } catch (c) {}
      return null
    },
    jh = function() {
      var a = ih()
      return a && a.mode ? +a.mode.version || null : null
    },
    kh = function() {
      var a = ih()
      if (a && a.container) {
        a = a.container.split(",")
        for (var b = [], c = 0; c < a.length; c++) b.push(hh[a[c]] || "x")
        return b.join()
      }
      return null
    },
    lh = function() {
      var a = ih()
      return a && a.initialIntersection
    },
    mh = function() {
      var a = ih()
      var b
      return (a =
        a &&
        (b = a.initialLayoutRect) &&
        "number" === typeof b.top &&
        "number" === typeof b.left &&
        "number" === typeof b.width &&
        "number" === typeof b.height
          ? new eh(b.left, b.top, b.width, b.height)
          : null)
        ? new _.ra(a.left, a.top)
        : (b = lh()) && _.sc(b.rootBounds)
        ? new _.ra(
            b.rootBounds.left + b.boundingClientRect.left,
            b.rootBounds.top + b.boundingClientRect.top
          )
        : null
    },
    nh = function(a) {
      return (a = a || ih()) ? (Qf(a.master) ? a.master : null) : null
    },
    ph = function(a, b, c, d) {
      var e = (a.ampInaboxIframes = a.ampInaboxIframes || []),
        f = function() {},
        g = function(k) {
          if (a.ampInaboxInitialized) f()
          else {
            var l,
              m = "amp-ini-load" === k.data
            a.ampInaboxPendingMessages &&
              !m &&
              (l = /^amp-(\d{15,20})?/.exec(k.data)) &&
              (a.ampInaboxPendingMessages.push(k), oh(a, l[1]))
          }
        },
        h = function() {}
      b &&
        (e.push(b),
        (h = function() {
          a.AMP &&
            a.AMP.inaboxUnregisterIframe &&
            a.AMP.inaboxUnregisterIframe(b)
          Ic(e, b)
          f()
        }))
      if (a.ampInaboxInitialized) return h
      a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || []
      c && /^\d{15,20}$/.test(c) && oh(a, c)
      d
        ? (f = bh(d, g))
        : e.google_amp_listener_added ||
          ((e.google_amp_listener_added = !0),
          _.v(a, "message", g),
          (f = function() {
            _.kb(a, "message", g)
          }))
      return h
    },
    oh = function(a, b) {
      a.ampInaboxInitialized ||
        (b && !/^\d{15,20}$/.test(b)) ||
        a.document.querySelector('script[src$="amp4ads-host-v0.js"]') ||
        Uf(
          a.document,
          "https://cdn.ampproject.org/" +
            (b ? "rtv/" + b + "/" : "") +
            "amp4ads-host-v0.js"
        )
    },
    qh = !!ih() && _.q != _.q.top,
    rh = function(a) {
      a = ih(a)
      if (!a || !_.sc(a.data) || "string" !== typeof a.data.type) return null
      a = a.data.type.toLowerCase()
      return "doubleclick" == a || "adsense" == a ? null : a
    }
  var sh = function(a, b) {
      a.google_image_requests || (a.google_image_requests = [])
      var c = a.document.createElement("img")
      c.src = b
      a.google_image_requests.push(c)
    },
    uh = function(a, b) {
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b
      _.wb(a, function(d, e) {
        d && (c += "&" + e + "=" + encodeURIComponent(d))
      })
      th(c)
    },
    th = function(a) {
      var b = window
      b.fetch
        ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors",
          })
        : sh(b, a)
    }
  var xh, yh, zh, Ah, Bh, Ch, Hh, Ih
  _.wh = function(a, b, c) {
    if ("string" === typeof b) (b = _.vh(a, b)) && (a.style[b] = c)
    else
      for (var d in b) {
        c = a
        var e = b[d],
          f = _.vh(c, d)
        f && (c.style[f] = e)
      }
  }
  xh = {}
  _.vh = function(a, b) {
    var c = xh[b]
    if (!c) {
      var d = _.Ud(b)
      c = d
      void 0 === a.style[d] &&
        ((d =
          (je ? "Webkit" : _.ie ? "Moz" : fe ? "ms" : ee ? "O" : null) + Vd(d)),
        void 0 !== a.style[d] && (c = d))
      xh[b] = c
    }
    return c
  }
  yh = function(a, b) {
    var c = _.uf(a)
    return c.defaultView &&
      c.defaultView.getComputedStyle &&
      (a = c.defaultView.getComputedStyle(a, null))
      ? a[b] || a.getPropertyValue(b) || ""
      : ""
  }
  zh = function(a, b) {
    return (
      yh(a, b) ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    )
  }
  Ah = function(a) {
    try {
      return a.getBoundingClientRect()
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 }
    }
  }
  Bh = function(a) {
    if (fe && !(8 <= Number(ye))) return a.offsetParent
    var b = _.uf(a),
      c = zh(a, "position"),
      d = "fixed" == c || "absolute" == c
    for (a = a.parentNode; a && a != b; a = a.parentNode)
      if (
        (11 == a.nodeType && a.host && (a = a.host),
        (c = zh(a, "position")),
        (d = d && "static" == c && a != b.documentElement && a != b.body),
        !d &&
          (a.scrollWidth > a.clientWidth ||
            a.scrollHeight > a.clientHeight ||
            "fixed" == c ||
            "absolute" == c ||
            "relative" == c))
      )
        return a
    return null
  }
  Ch = function(a) {
    var b = _.uf(a),
      c = new _.ra(0, 0)
    var d = b ? _.uf(b) : document
    d = !fe || 9 <= Number(ye) || _.yf(vf(d).j) ? d.documentElement : d.body
    if (a == d) return c
    a = Ah(a)
    d = vf(b).j
    b = Af(d)
    d = Bf(d)
    b =
      fe && ve("10") && d.pageYOffset != b.scrollTop
        ? new _.ra(b.scrollLeft, b.scrollTop)
        : new _.ra(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop)
    c.x = a.left + b.x
    c.y = a.top + b.y
    return c
  }
  _.Dh = function(a) {
    a = Ah(a)
    return new _.ra(a.left, a.top)
  }
  _.Eh = function(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px")
    return a
  }
  _.Fh = function(a, b) {
    if ("none" != zh(b, "display")) return a(b)
    var c = b.style,
      d = c.display,
      e = c.visibility,
      f = c.position
    c.visibility = "hidden"
    c.position = "absolute"
    c.display = "inline"
    a = a(b)
    c.display = d
    c.position = f
    c.visibility = e
    return a
  }
  _.Gh = function(a) {
    var b = a.offsetWidth,
      c = a.offsetHeight,
      d = je && !b && !c
    return (void 0 === b || d) && a.getBoundingClientRect
      ? ((a = Ah(a)), new _.sf(a.right - a.left, a.bottom - a.top))
      : new _.sf(b, c)
  }
  Hh = function(a) {
    if (!a.getBoundingClientRect) return null
    a = _.Fh(Ah, a)
    return new _.sf(a.right - a.left, a.bottom - a.top)
  }
  Ih = function(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null
    if (c)
      if (/^\d+px?$/.test(c)) a = parseInt(c, 10)
      else {
        b = a.style.left
        var d = a.runtimeStyle.left
        a.runtimeStyle.left = a.currentStyle.left
        a.style.left = c
        c = a.style.pixelLeft
        a.style.left = b
        a.runtimeStyle.left = d
        a = +c
      }
    else a = 0
    return a
  }
  _.Jh = function(a, b) {
    if (fe) {
      var c = Ih(a, b + "Left"),
        d = Ih(a, b + "Right"),
        e = Ih(a, b + "Top")
      a = Ih(a, b + "Bottom")
      return new ch(e, d, a, c)
    }
    c = yh(a, b + "Left")
    d = yh(a, b + "Right")
    e = yh(a, b + "Top")
    a = yh(a, b + "Bottom")
    return new ch(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
  }
  var Lh = function() {
      var a = Kh()
      "google_onload_fired" in a ||
        ((a.google_onload_fired = !1),
        _.v(a, "load", function() {
          a.google_onload_fired = !0
        }))
    },
    Mh = function() {
      var a = void 0 === a ? cf : a
      try {
        return a.history.length
      } catch (b) {
        return 0
      }
    },
    Nh = function(a) {
      a = nh(ih(a)) || a
      a = a.google_unique_id
      return "number" === typeof a ? a : 0
    },
    Oh = !!window.google_async_iframe_id,
    Ph = (Oh && window.parent) || window,
    Kh = function() {
      if (Oh && !Qf(Ph)) {
        var a = "." + bf.domain
        try {
          for (; 2 < a.split(".").length && !Qf(Ph); )
            (bf.domain = a = a.substr(a.indexOf(".") + 1)), (Ph = window.parent)
        } catch (b) {}
        Qf(Ph) || (Ph = window)
      }
      return Ph
    },
    Qh = function() {
      var a,
        b = window.ActiveXObject
      if (navigator.plugins && navigator.mimeTypes.length) {
        if ((a = navigator.plugins["Shockwave Flash"]) && a.description)
          return a.description
            .replace(/([a-zA-Z]|\s)+/, "")
            .replace(/(\s)+r/, ".")
      } else {
        if (
          navigator.userAgent &&
          0 <= navigator.userAgent.indexOf("Windows CE")
        ) {
          var c = 3
          for (a = 1; a; )
            try {
              ;(a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1))), c++
            } catch (d) {
              a = null
            }
          return c.toString()
        }
        if (Id()) {
          a = null
          try {
            a = new b("ShockwaveFlash.ShockwaveFlash.7")
          } catch (d) {
            c = 0
            try {
              ;(a = new b("ShockwaveFlash.ShockwaveFlash.6")),
                (c = 6),
                (a.AllowScriptAccess = "always")
            } catch (e) {
              if (6 === c) return c.toString()
            }
            try {
              a = new b("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {}
          }
          if (a)
            return (
              (c = a.GetVariable("$version").split(" ")[1]),
              c.replace(/,/g, ".")
            )
        }
      }
      return "0"
    }
  var Rh = function(a) {
      return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
    },
    Sh = function(a, b) {
      b = void 0 === b ? _.q : b
      a = a.scrollingElement || Rh(a)
      return new _.ra(
        b.pageXOffset || a.scrollLeft,
        b.pageYOffset || a.scrollTop
      )
    },
    ka = function(a) {
      try {
        return !(
          !a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
        )
      } catch (b) {
        return !1
      }
    }
  var Th = function(a, b, c) {
    a && null !== b && b != b.top && (b = b.top)
    try {
      return (void 0 === c
      ? 0
      : c)
        ? new _.sf(b.innerWidth, b.innerHeight).round()
        : _.zf(b || window).round()
    } catch (d) {
      return new _.sf(-12245933, -12245933)
    }
  }
  var Vh = function(a) {
    M(this, a, Uh, null)
  }
  I(Vh, L)
  var Uh = [15],
    Wh = function() {
      var a = new Vh(),
        b = _.x(76)
      return Qe(a, 7, b)
    }
  var Xh = function(a) {
    M(this, a, null, null)
  }
  I(Xh, L)
  var Yh = function(a) {
    M(this, a, null, null)
  }
  I(Yh, L)
  var Zh = function(a) {
      return !!a && a.top == a
    },
    $h = function(a, b, c, d) {
      c = c || a.google_ad_width
      d = d || a.google_ad_height
      if (Zh(a)) return !1
      var e = b.documentElement
      if (c && d) {
        var f = 1,
          g = 1
        a.innerHeight
          ? ((f = a.innerWidth), (g = a.innerHeight))
          : e && e.clientHeight
          ? ((f = e.clientWidth), (g = e.clientHeight))
          : b.body && ((f = b.body.clientWidth), (g = b.body.clientHeight))
        if (g > 2 * d || f > 2 * c) return !1
      }
      return !0
    },
    ai = function() {
      var a = Kh()
      if (a == a.top) return 0
      for (; a && a != a.top && Qf(a); a = a.parent) {
        if (a.sf_) return 2
        if (a.$sf) return 3
        if (a.inGptIF) return 4
        if (a.inDapIF) return 5
      }
      return 1
    }
  var bi = [
      /^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i,
      /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i,
      /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i,
      /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i,
      /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i,
      /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i,
    ],
    ci = function(a) {
      return _.Ec(bi, function(b) {
        return b.test(a)
      })
    },
    di = function(a) {
      if ((a = /[-\w]+\.[-\w]+$/.exec(a))) {
        a = a[0].toLowerCase()
        for (var b = 0, c = 0; c < a.length; ++c)
          b = (31 * b + a.charCodeAt(c)) >>> 0
        switch (b) {
          case 1967261364:
            return 0
          case 3147493546:
            return 1
          case 1567346461:
            return 2
          case 2183041838:
            return 3
          case 763236279:
            return 4
          case 1342279801:
            return 5
          case 526831769:
            return 6
          case 352806002:
            return 7
          case 2755048925:
            return 8
          case 3306848407:
            return 9
          case 2207000920:
            return 10
          case 484037040:
            return 11
          case 3506871055:
            return 12
          case 672143848:
            return 13
          case 2528751226:
            return 14
          case 2744854768:
            return 15
          case 3703278665:
            return 16
          case 2014749173:
            return 17
          case 133063824:
            return 18
          case 2749334602:
            return 19
          case 3131239845:
            return 20
          case 2074086763:
            return 21
          case 795772493:
            return 22
          case 290857819:
            return 23
          case 3035947606:
            return 24
          case 2983138003:
            return 25
          case 2197138676:
            return 26
          case 4216016165:
            return 27
          case 239803524:
            return 28
          case 975993579:
            return 29
          case 1794940339:
            return 30
          case 1314429186:
            return 31
          case 1643618937:
            return 32
          case 497159982:
            return 33
          case 3882239661:
            return 34
        }
      }
      return -1
    },
    ei = function(a) {
      if (!a.length) return 0
      for (var b = [], c = 0; 34 >= c; c++) b[c] = 0
      for (c = a.length - 1; 0 <= c; c--) {
        var d = di(a[c])
        0 <= d && (b[34 - d] = 1)
      }
      return parseInt(b.join(""), 2)
    }
  _.fi = function(a, b) {
    var c = void 0 === c ? {} : c
    this.error = a
    this.context = b.context
    this.msg = b.message || ""
    this.id = b.id || "jserror"
    this.meta = c
  }
  var gi = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
    ii = function(a) {
      a = (this.l = a || _.q) || _.q
      this.v = a.top == a ? 1 : Qf(a.top) ? 2 : 3
      3 != this.v && Date.parse(_.q.top.document.lastModified)
      this.j = hi(this.l)
    },
    ji = function(a, b) {
      for (
        var c = 0,
          d =
            (a = a.j[Math.max(a.j.length - 1, 0)].url || null) &&
            Of(a.match(_.Nf)[3] || null),
          e = Math.min(b.length, 26),
          f = 0;
        f < e;
        f++
      )
        (a = (null != b[f] && Of(b[f].match(_.Nf)[3] || null)) || ""),
          (c *= 4),
          a &&
            (d && a == d
              ? (c += 3)
              : ci(b[f])
              ? (c += 2)
              : a && 0 <= di(a) && (c += 1))
      return c
    },
    hi = function(a) {
      var b = a || _.q,
        c = [],
        d = null
      do {
        var e = b
        if (Qf(e)) {
          var f = e.location.href
          d = (e.document && e.document.referrer) || null
        } else (f = d), (d = null)
        c.push(new ki(f || "", e))
        try {
          b = e.parent
        } catch (g) {
          b = null
        }
      } while (b && e != b)
      e = 0
      for (b = c.length - 1; e <= b; ++e) c[e].depth = b - e
      e = a || _.q
      if (
        e.location &&
        e.location.ancestorOrigins &&
        e.location.ancestorOrigins.length == c.length - 1
      )
        for (a = 1; a < c.length; ++a)
          (b = c[a]),
            b.url ||
              ((b.url = e.location.ancestorOrigins[a - 1] || ""), (b.mc = !0))
      return c
    },
    li = function(a, b) {
      this.j = a
      this.l = b
    },
    ki = function(a, b, c) {
      this.url = a
      this.N = b
      this.mc = !!c
      this.depth = null
    }
  var mi = function() {
      this.v = "&"
      this.o = !1
      this.l = {}
      this.m = 0
      this.j = []
    },
    ni = function(a, b) {
      var c = {}
      c[a] = b
      return [c]
    },
    pi = function(a, b, c, d, e) {
      var f = []
      _.wb(a, function(g, h) {
        ;(g = oi(g, b, c, d, e)) && f.push(h + "=" + g)
      })
      return f.join(b)
    },
    oi = function(a, b, c, d, e) {
      if (null == a) return ""
      b = b || "&"
      c = c || ",$"
      "string" == typeof c && (c = c.split(""))
      if (a instanceof Array) {
        if (((d = d || 0), d < c.length)) {
          for (var f = [], g = 0; g < a.length; g++)
            f.push(oi(a[g], b, c, d + 1, e))
          return f.join(c[d])
        }
      } else if ("object" == typeof a)
        return (
          (e = e || 0),
          2 > e ? encodeURIComponent(pi(a, b, c, d, e + 1)) : "..."
        )
      return encodeURIComponent(String(a))
    },
    qi = function(a, b, c, d) {
      a.j.push(b)
      a.l[b] = ni(c, d)
    },
    si = function(a, b, c) {
      b = b + "//pagead2.googlesyndication.com" + c
      var d = ri(a) - c.length
      if (0 > d) return ""
      a.j.sort(function(m, n) {
        return m - n
      })
      c = null
      for (var e = "", f = 0; f < a.j.length; f++)
        for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
          if (!d) {
            c = null == c ? g : c
            break
          }
          var l = pi(h[k], a.v, ",$")
          if (l) {
            l = e + l
            if (d >= l.length) {
              d -= l.length
              b += l
              e = a.v
              break
            }
            a.o &&
              ((e = d),
              l[e - 1] == a.v && --e,
              (b += l.substr(0, e)),
              (e = a.v),
              (d = 0))
            c = null == c ? g : c
          }
        }
      a = ""
      null != c && (a = e + "trn=" + c)
      return b + a
    },
    ri = function(a) {
      var b = 1,
        c
      for (c in a.l) b = c.length > b ? c.length : b
      return 3997 - b - a.v.length - 1
    }
  _.ti = function(a, b) {
    this.v = a
    this.l = b
    this.j = Math.random()
  }
  _.ui = function(a, b, c, d, e) {
    if ((d ? a.j : Math.random()) < (e || a.l))
      try {
        if (c instanceof mi) var f = c
        else
          (f = new mi()),
            _.wb(c, function(h, k) {
              var l = f,
                m = l.m++
              h = ni(k, h)
              l.j.push(m)
              l.l[m] = h
            })
        var g = si(f, a.v, "/pagead/gen_204?id=" + b + "&")
        g && sh(_.q, g)
      } catch (h) {}
  }
  var vi = null,
    wi = function() {
      if (null === vi) {
        vi = ""
        try {
          var a = ""
          try {
            a = _.q.top.location.hash
          } catch (c) {
            a = _.q.location.hash
          }
          if (a) {
            var b = a.match(/\bdeid=([\d,]+)/)
            vi = b ? b[1] : ""
          }
        } catch (c) {}
      }
      return vi
    }
  var zi
  _.xi = function() {
    var a = _.q.performance
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Ac()
  }
  _.yi = function(a) {
    a = void 0 === a ? _.q : a
    return (a = a.performance) && a.now ? a.now() : null
  }
  zi = function(a) {
    var b = _.q.performance
    return (b && b.timing && b.timing[a]) || 0
  }
  var Ai = function(a, b, c, d, e) {
    this.label = a
    this.type = b
    this.value = c
    this.duration = void 0 === d ? 0 : d
    this.uniqueId = Math.random()
    this.slotId = e
  }
  var Bi, Ci, Di, Ei, Gi, Hi, Ji
  Bi = _.q.performance
  Ci = !!(Bi && Bi.mark && Bi.measure && Bi.clearMarks)
  Di = na(function() {
    var a
    if ((a = Ci)) (a = wi()), (a = !!a.indexOf && 0 <= a.indexOf("1337"))
    return a
  })
  Ei = function(a, b) {
    this.events = []
    this.l = b || _.q
    var c = null
    b &&
      ((b.google_js_reporting_queue = b.google_js_reporting_queue || []),
      (this.events = b.google_js_reporting_queue),
      (c = b.google_measure_js_timing))
    this.j = Di() || (null != c ? c : Math.random() < a)
  }
  Gi = function(a) {
    a.j = !1
    a.events != a.l.google_js_reporting_queue &&
      (Di() && _.Cc(a.events, _.Fi), (a.events.length = 0))
  }
  _.Fi = function(a) {
    a &&
      Bi &&
      Di() &&
      (Bi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
      Bi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
  }
  Hi = function(a, b, c, d, e, f) {
    a.j &&
      ((b = new Ai(b, c, d, void 0 === e ? 0 : e, f)),
      !a.j || 2048 < a.events.length || a.events.push(b))
  }
  Ei.prototype.start = function(a, b) {
    if (!this.j) return null
    var c = _.yi() || _.xi()
    a = new Ai(a, b, c)
    b = "goog_" + a.label + "_" + a.uniqueId + "_start"
    Bi && Di() && Bi.mark(b)
    return a
  }
  _.Ii = function(a, b) {
    if (a.j && "number" === typeof b.value) {
      var c = _.yi() || _.xi()
      b.duration = c - b.value
      c = "goog_" + b.label + "_" + b.uniqueId + "_end"
      Bi && Di() && Bi.mark(c)
      !a.j || 2048 < a.events.length || a.events.push(b)
    }
  }
  Ji = function(a, b, c) {
    var d = _.yi()
    d && Hi(a, b, 9, d, 0, c)
  }
  var Fb
  _.Mi = function() {
    var a = Ki
    this.o = Li
    this.l = null
    this.m = this.xb
    this.j = void 0 === a ? null : a
    this.v = !1
  }
  _.p = _.Mi.prototype
  _.p.yc = function(a) {
    this.l = a
  }
  _.p.zc = function(a) {
    this.v = a
  }
  _.p.Aa = ba(1)
  _.p.fa = ba(3)
  _.p.xb = function(a, b, c, d, e) {
    e = e || "jserror"
    try {
      var f = new mi()
      f.o = !0
      qi(f, 1, "context", a)
      ;(b.error && b.meta && b.id) || (b = new _.fi(b, { message: _.Ni(b) }))
      b.msg && qi(f, 2, "msg", b.msg.substring(0, 512))
      var g = b.meta || {}
      if (this.l)
        try {
          this.l(g)
        } catch (z) {}
      if (d)
        try {
          d(g)
        } catch (z) {}
      b = [g]
      f.j.push(3)
      f.l[3] = b
      var h = hi(),
        k = new ki(_.q.location.href, _.q, !1)
      b = null
      var l = h.length - 1
      for (d = l; 0 <= d; --d) {
        var m = h[d]
        !b && gi.test(m.url) && (b = m)
        if (m.url && !m.mc) {
          k = m
          break
        }
      }
      m = null
      var n = h.length && h[l].url
      0 != k.depth && n && (m = h[l])
      var u = new li(k, m)
      u.l && qi(f, 4, "top", u.l.url || "")
      qi(f, 5, "url", u.j.url || "")
      _.ui(this.o, e, f, this.v, c)
    } catch (z) {
      try {
        _.ui(
          this.o,
          e,
          { context: "ecmserr", rctx: a, msg: _.Ni(z), url: u && u.j.url },
          this.v,
          c
        )
      } catch (y) {}
    }
    return !0
  }
  _.Ni = function(a) {
    var b = a.toString()
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name)
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message)
    a.stack && (b = Fb(a.stack, b))
    return b
  }
  Fb = function(a, b) {
    try {
      ;-1 == a.indexOf(b) && (a = b + "\n" + a)
      for (var c; a != c; )
        (c = a),
          (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"))
      return a.replace(/\n */g, "\n")
    } catch (d) {
      return b
    }
  }
  var Oi = hg()
  var Pi = function(a) {
      this.methodName = a
    },
    Qi = new Pi(1),
    Ri = new Pi(15),
    Si = new Pi(2),
    Ti = new Pi(3),
    Ui = new Pi(5),
    Vi = new Pi(6),
    Wi = new Pi(7),
    Xi = new Pi(8),
    Yi = new Pi(14),
    Zi = function(a, b, c) {
      return b[a.methodName] || c || function() {}
    }
  var $i = function() {
      this.l = function() {}
      this.v = function() {
        return []
      }
      this.j = function() {
        return []
      }
    },
    aj = function(a, b, c) {
      a.l = Zi(Qi, b, function() {})
      a.v = function(d) {
        return Zi(Si, b, function() {
          return []
        })(d, c)
      }
      a.j = function() {
        return Zi(Ti, b, function() {
          return []
        })(c)
      }
    }
  oc($i)
  var bj = function(a) {
    return $i.C().v(a)
  }
  var cj = function() {
      this.l = function(a, b) {
        return void 0 === b ? !1 : b
      }
      this.v = function(a, b) {
        return void 0 === b ? 0 : b
      }
      this.o = function(a, b) {
        return void 0 === b ? "" : b
      }
      this.m = function(a, b) {
        return (b = void 0 === b ? [] : b)
      }
      this.j = function() {}
    },
    dj = function(a, b, c) {
      a.l = function(d, e) {
        return Zi(Ui, b)(d, e, c)
      }
      a.v = function(d, e) {
        return Zi(Vi, b)(d, e, c)
      }
      a.o = function(d, e) {
        return Zi(Wi, b)(d, e, c)
      }
      a.m = function(d, e) {
        return Zi(Xi, b)(d, e, c)
      }
      a.j = function() {
        Zi(Ri, b)(c)
      }
    },
    ej
  oc(cj)
  _.x = function(a) {
    var b = void 0 === b ? !1 : b
    return cj.C().l(a, b)
  }
  _.r = function(a, b) {
    b = void 0 === b ? 0 : b
    return cj.C().v(a, b)
  }
  ej = function(a) {
    var b = void 0 === b ? "" : b
    return cj.C().o(a, b)
  }
  _.fj = function(a) {
    var b = void 0 === b ? [] : b
    return cj.C().m(a, b)
  }
  _.hj = function() {
    var a = _.gj(38)
    this.j = null
    this.v = !1
    this.m = Math.random()
    this.l = void 0 === a ? 0.01 : a
    this.o = this.xb
  }
  _.p = _.hj.prototype
  _.p.yc = function(a) {
    this.j = a
  }
  _.p.zc = function(a) {
    this.v = a
  }
  _.p.xb = function(a, b, c, d, e) {
    c = void 0 === c ? this.l : c
    if ((this.v ? this.m : Math.random()) > c) return !1
    ;(b.error && b.meta && b.id) ||
      (b = new _.fi(b, { context: a, id: void 0 === e ? "gpt_exception" : e }))
    if (d || this.j) (b.meta = {}), this.j && this.j(b.meta), d && d(b.meta)
    _.q.google_js_errors = _.q.google_js_errors || []
    _.q.google_js_errors.push(b)
    _.q.error_rep_loaded ||
      (Uf(
        _.q.document,
        _.q.location.protocol +
          "//pagead2.googlesyndication.com/pagead/js/err_rep.js"
      ),
      (_.q.error_rep_loaded = !0))
    return !1
  }
  _.p.Aa = ba(0)
  _.p.fa = ba(2)
  var ij = !1,
    jj = 0,
    kj = function(a, b, c) {
      if (!ij) {
        ij = !0
        var d =
          a.requestAnimationFrame ||
          a.webkitRequestAnimationFrame ||
          a.msRequestAnimationFrame ||
          a.mozRequestAnimationFrame ||
          a.oRequestAnimationFrame
        if (og(d)) {
          var e,
            f,
            g,
            h,
            k = a.requestIdleCallback
          k &&
            (h = function(m) {
              f = m.timeRemaining()
              g = 0
            })
          var l = function(m) {
            ij &&
              (b.push(m - e),
              (e = m),
              k && (c.push(f || 0), g || ((f = 0), (g = k(h)))),
              d(l))
          }
          d(function(m) {
            e = m
            k && (g = k(h))
            d(l)
          })
        }
      }
    },
    lj = function() {
      ij = !1
    },
    mj = function() {
      jj && _.q.clearTimeout(jj)
      jj = ij ? _.q.setTimeout(lj, 1e4) : 0
    }
  var nj = function(a) {
    return (a._google_rum_ns_ = a._google_rum_ns_ || {})
  }
  var oj = function(a, b, c) {
    var d = window
    return function() {
      var e = _.yi(),
        f = 3
      try {
        var g = b.apply(this, arguments)
      } catch (k) {
        f = 13
        if (c) return c(a, k), g
        throw k
      } finally {
        if (d.google_measure_js_timing && e) {
          var h = _.yi() || 0
          e = { label: a.toString(), value: e, duration: h - e, type: f }
          f = d.google_js_reporting_queue = d.google_js_reporting_queue || []
          2048 > f.length && f.push(e)
        }
      }
      return g
    }
  }
  var pj = {},
    qj =
      ((pj.companion_ads = "companionAds"),
      (pj.content = "content"),
      (pj.publisher_ads = "pubads"),
      pj),
    rj = function(a) {
      return (
        a +
        'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
      )
    }
  var Eb = function() {
      return _.q.googletag || (_.q.googletag = {})
    },
    Db = function(a, b) {
      var c = Eb()
      c.hasOwnProperty(a) || (c[a] = b)
    },
    sj = function(a, b) {
      a.addEventListener
        ? a.addEventListener("load", b, !1)
        : a.attachEvent && a.attachEvent("onload", b)
    }
  var tj = new t.Map(),
    uj = new t.Map(),
    vj = function() {},
    wj = function(a, b) {
      return a instanceof b ||
        (a instanceof vj && ((a = tj.get(a)), a instanceof b))
        ? a
        : null
    },
    xj = function(a) {
      return (a = qj[a]) ? Eb()[a]() : null
    }
  var yj = {
      247: "https://securepubads.g.doubleclick.net",
      7: 0.02,
      13: 1500,
      23: 0.001,
      37: 0.01,
      38: 0.001,
      58: 1,
      150: "",
      211: !1,
      152: [],
      172: null,
      191: "",
      192: "",
      190: "",
      245: {},
      180: null,
      246: [],
      227: {},
      226: [],
      248: 0,
      228: "//www.googletagservices.com/pubconsole/",
      249: !1,
      250: null,
      251: null,
    },
    Aj,
    Bj,
    Cj,
    Dj
  yj[6] = ig(window)
  yj[49] = new Date().getTime()
  yj[36] = hg()
  yj[148] = Oi
  yj[221] = hg()
  yj[204] = _.gg("-1", -1)
  var zj = function() {
    for (var a in yj) this[a] = yj[a]
  }
  oc(zj)
  _.gj = function(a) {
    return zj.C()[a]
  }
  Aj = Eb()
  Bj = zj.C()
  Cj = Aj._vars_
  for (Dj in Cj) Bj[Dj] = Cj[Dj]
  Aj._vars_ = Bj
  var Fj = function(a) {
    M(this, a, Ej, null)
  }
  I(Fj, L)
  var Ej = [2],
    Gj = function(a) {
      return C(a, 1)
    },
    Hj = function(a, b) {
      return D(a, 1, b)
    },
    Ij = function(a, b) {
      return D(a, 2, b || [])
    }
  var Jj = function(a) {
    M(this, a, null, null)
  }
  I(Jj, L)
  var Kj = function(a) {
    M(this, a, null, null)
  }
  I(Kj, L)
  var Lj = function(a) {
    M(this, a, null, null)
  }
  I(Lj, L)
  var Mj = function(a, b) {
    return D(a, 3, b)
  }
  var Oj = function(a) {
    M(this, a, Nj, null)
  }
  I(Oj, L)
  var Nj = [2, 3, 7, 14],
    Pj = function(a, b) {
      We(a, 2, b)
    },
    Qj = function(a) {
      return Se(a, Kj, 25)
    }
  var Rj = function(a) {
    M(this, a, null, null)
  }
  I(Rj, L)
  var Sj = function(a, b) {
      return D(a, 1, b)
    },
    Tj = function(a, b) {
      return D(a, 2, b)
    },
    Vj = function() {
      var a = new Rj()
      return D(a, 3, !0)
    }
  var Wj = function(a) {
    M(this, a, null, null)
  }
  I(Wj, L)
  var Yj = function(a) {
    M(this, a, Xj, null)
  }
  I(Yj, L)
  var Xj = [2]
  var ak = function(a) {
    M(this, a, Zj, null)
  }
  I(ak, L)
  var Zj = [3, 4, 5, 6, 8, 9]
  ak.prototype.getAdUnitPath = function() {
    return C(this, 1)
  }
  ak.prototype.getClickUrl = function() {
    return C(this, 7)
  }
  var bk = function(a, b) {
      We(a, 9, b)
    },
    ck = function(a) {
      return Me(a, 15, 0)
    }
  var dk = function(a) {
      return Array.isArray(a) && 2 == a.length
        ? _.x(360)
          ? Lg(a[0]) && Lg(a[1])
          : Mg(a[0]) && Mg(a[1])
        : "string" === typeof a && "fluid" == a
    },
    ek = function(a) {
      return Array.isArray(a) && 2 == a.length && Mg(a[0]) && Mg(a[1])
    },
    fk = function(a) {
      return Array.isArray(a) ? Tj(Sj(new Rj(), a[0]), a[1]) : Vj()
    },
    hk = function(a) {
      var b = []
      if (gk(a)) b.push(fk(a))
      else if (Array.isArray(a))
        for (var c = 0; c < a.length; ++c) {
          var d = a[c]
          gk(d) && b.push(fk(d))
          a: {
            var e = ["fluid"]
            if (qc(d) && qc(e) && d.length == e.length) {
              for (var f = d.length, g = Oc, h = 0; h < f; h++)
                if (!g(d[h], e[h])) {
                  d = !1
                  break a
                }
              d = !0
            } else d = !1
          }
          d && b.push(Vj())
        }
      return b
    },
    ik = function(a) {
      if (!a || !Array.isArray(a) || 2 !== a.length) return null
      var b = a[0]
      a = a[1]
      if ("number" === typeof b && 0 <= b) b = Math.floor(b)
      else if (null !== b) return null
      if ("number" === typeof a && 0 <= a) a = Math.floor(a)
      else if (null !== a) return null
      return Tj(Sj(new Rj(), b), a)
    },
    gk = function(a) {
      if (_.x(361)) return dk(a)
      if (Array.isArray(a) && 1 < a.length) {
        var b = "number" === typeof a[0] && "number" === typeof a[1]
        a = !_.x(360) || (0 < a[0] && 0 < a[1])
        return b && a
      }
      return "string" === typeof a && "fluid" == a
    }
  var jk = function(a, b) {
      a = _.B(a, "find").call(a, function(c) {
        c = Se(c, Rj, 1)
        return C(c, 1) <= C(b, 1) && C(c, 2) <= C(b, 2)
      })
      return null == a ? null : Ue(a, Rj, 2)
    },
    kk = function(a) {
      if (!Array.isArray(a) || 2 != a.length)
        throw Error("Each mapping entry has to be an array of size 2")
      var b = a[0]
      if (!ek(b))
        throw Error("Size has to be an array of two non-negative integers")
      b = Tj(Sj(new Rj(), b[0]), b[1])
      if (Array.isArray(a[1]) && 0 == a[1].length) a = []
      else if (((a = hk(a[1])), 0 == a.length))
        throw Error("At least one slot size must be present")
      var c = new Yj()
      b = Ve(c, 1, b)
      return We(b, 2, a)
    }
  var lk = function(a, b, c) {
      return "number" === typeof b &&
        "number" === typeof c &&
        0 < Ue(a, Yj, 6).length
        ? jk(Ue(a, Yj, 6), Tj(Sj(new Rj(), b), c))
        : Ue(a, Rj, 5)
    },
    qa = function(a) {
      var b = window,
        c = null
      b.top == b && ((b = Th(!1, b)), (c = lk(a, b.width, b.height)))
      null == c && (c = lk(a))
      return c.map(function(d) {
        return w(d, 3) ? "fluid" : [C(d, 1), C(d, 2)]
      })
    },
    yb = function(a) {
      var b = [],
        c = !1
      a = _.F(qa(a))
      for (var d = a.next(); !d.done; d = a.next())
        (d = d.value),
          Array.isArray(d)
            ? b.push(d.join("x"))
            : "fluid" == d
            ? (c = !0)
            : b.push(d)
      c && b.unshift("320x50")
      return b.join("|")
    },
    mk = function(a) {
      return ((A = qa(a)), _.B(A, "includes")).call(A, "fluid")
    },
    nk = function(a, b) {
      b = void 0 === b ? null : b
      var c = 0,
        d = []
      a && (d.push(a.getAdUnitPath()), d.push(yb(a)), d.push(C(a, 2)))
      if (b) {
        a = []
        for (var e = 0; b && 25 > e; b = b.parentNode, ++e)
          9 === b.nodeType ? a.push("") : a.push(b.id)
        ;(b = a.join()) && d.push(b)
      }
      0 < d.length && (c = bg(d.join(":")))
      return c.toString()
    },
    ok = function(a) {
      return 0 !== a && 1 !== a
    }
  var pk = function() {
    var a = _.x(85) || _.x(84)
    _.q.google_measure_js_timing = a || _.q.google_measure_js_timing
    Ei.call(this, a ? 1 : 0, _.q)
    this.v = 0
  }
  _.H(pk, Ei)
  oc(pk)
  var rk = function(a, b, c) {
      if (C(b, 18)) return C(b, 18)
      a = c.get(a.getSlotId())
      return null != a ? qk(a) : null
    },
    sk = function(a, b, c, d) {
      return null != qk(c)
        ? !0
        : a.some(function(e) {
            return null != rk(e, b[e.getSlotElementId()], d)
          })
    },
    tk = function(a) {
      if (_.x(168) || 15360 >= a.length) return a
      var b = _.x(164) && /&supporting_urls=/.test(a),
        c = a
      if (15360 < c.length) {
        var d = b ? -1 : c.lastIndexOf("&", 15352)
        ;-1 !== d
          ? (c = c.substring(0, d))
          : ((c = c.substring(0, 15352)),
            (c = c.replace(/%\w?$/, "")),
            b && (c = c.replace(/&[^=]*=?$/, "")))
        c += "&trunc=1"
      }
      b = c
      Hi(pk.C(), (9).toString(), 9, a.length - b.length + 8)
      return b
    },
    uk = function(a) {
      var b = a
      "about:blank" != a &&
        ((b = b
          .replace(/</g, "%3C")
          .replace(/>/g, "%3E")
          .replace(/"/g, "%22")
          .replace(/'/g, "%27")),
        /^https?:\/\//.test(b) || (b = "unknown:" + b))
      return b
    },
    vk = function() {
      return "https://pagead2.googlesyndication.com"
    },
    Ya = function(a) {
      var b = a.document
      return Zh(a) ? b.URL : b.referrer
    },
    ma = function(a) {
      try {
        var b = window.top,
          c = new _.ra(0, 0),
          d = _.Cf(_.uf(a))
        if (be(d, "parent")) {
          do {
            var e = d == b ? Ch(a) : _.Dh(a)
            c.x += e.x
            c.y += e.y
          } while (
            d &&
            d != b &&
            d != d.parent &&
            (a = d.frameElement) &&
            (d = d.parent)
          )
        }
        var f = c
      } catch (g) {
        f = new _.ra(-12245933, -12245933)
      }
      return f
    },
    wk = function(a) {
      var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
        c = a.indexOf("&", b)
      ;-1 == c && ((c = a.length - 1), --b)
      return a.substring(0, b) + a.substring(c + 1, a.length)
    },
    xk = na(function() {
      return (
        "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest()
      )
    }),
    yk = na(function() {
      return !fe && !ge
    }),
    zk = na(function() {
      return !fe && !ge
    }),
    Ak = na(function() {
      return !!jg(_.q.location.href)
    }),
    Bk = function(a) {
      var b = a.split("/")
      return "/" == a.charAt(0) && 2 <= b.length
        ? b[1]
        : "/" != a.charAt(0) && 1 <= b.length
        ? b[0]
        : ""
    },
    Ck = function(a) {
      var b = []
      b = a.map(function(c) {
        return Bk(c.getAdUnitPath())
      })
      wa(b)
      return b
    },
    Dk = function(a) {
      return a ? (a = Hh(a)) && a.floor() : null
    },
    Ek = function(a) {
      return !!a && !!C(a, 1)
    },
    Fk = function(a, b) {
      for (
        var c = {}, d = _.F(_.B(Object, "keys").call(Object, b)), e = d.next();
        !e.done;
        e = d.next()
      ) {
        e = e.value
        var f = b[e]
        f = new f.constructor($e(f.ea))
        c[e] = f
      }
      return { M: new a.constructor($e(a.ea)), P: c }
    },
    Gk = function() {
      var a = window.crypto || window.msCrypto
      if (void 0 !== a) {
        var b = new Uint8Array(16)
        a.getRandomValues(b)
      } else
        for (b = Array(16), a = 0; 16 > a; ++a)
          b[a] = Math.floor(255 * Math.random())
      a = ""
      b = _.F(b)
      for (var c = b.next(); !c.done; c = b.next())
        (c = c.value), 15 >= c && (a += "0"), (a += c.toString(16))
      return a
    },
    Hk = na(Gk),
    Ik = function(a, b) {
      var c = b.P
      return w(b.M, 6) || w(c[a.getSlotElementId()], 17) ? null : ja(a)
    },
    Jk = function(a, b) {
      var c = a.slot,
        d = a.aa
      a = null
      Array.isArray(qa(d)[0]) &&
        ((d = _.F(qa(d)[0])),
        (a = d.next().value),
        (d = d.next().value),
        (a = { width: a, height: d }))
      a: {
        var e = la(c, b)
        b = { Ac: a, cc: !1 }
        d = void 0 === b ? {} : b
        b = void 0 === d.Ac ? null : d.Ac
        c = void 0 === d.ad ? 100 : d.ad
        a = void 0 === d.ud ? 50 : d.ud
        d = void 0 === d.cc ? !0 : d.cc
        for (var f = Ac(), g = !1; e; ) {
          if (!c-- || Ac() - f >= a) {
            var h = !1
            break a
          }
          switch (e.nodeType) {
            case 9:
              try {
                if ((h = e.parentWindow || e.defaultView)) {
                  var k = h.frameElement
                  if (k && Qf(h.parent)) {
                    e = k
                    break
                  }
                }
              } catch (z) {}
              e = null
              break
            case 1:
              var l = e,
                m
              if ((m = d)) {
                b: {
                  try {
                    if (
                      0 < l.offsetWidth &&
                      0 < l.offsetHeight &&
                      l.style &&
                      "none" !== l.style.display &&
                      "hidden" !== l.style.visibility &&
                      (!l.style.opacity || 0 !== Number(l.style.opacity))
                    ) {
                      var n = l.getBoundingClientRect()
                      var u = 0 < n.right && 0 < n.bottom
                      break b
                    }
                  } catch (z) {}
                  u = !1
                }
                m = !u
              }
              if (m) {
                h = !1
                break a
              }
              g ||
                (/^html|body$/i.test(l.tagName)
                  ? (g = null)
                  : ((g = l.style.position || (pa(l, window) || {}).position),
                    (g = /^fixed/i.test(g) ? l : null)),
                (g =
                  !!g &&
                  (!b ||
                    g.offsetWidth * g.offsetHeight <= 4 * b.width * b.height)))
              e = e.parentNode
          }
        }
        h = g
      }
      return h
    },
    Kk = function() {
      return Math.floor(Math.random() * Math.pow(2, 52))
    },
    Lk = function(a, b, c) {
      try {
        var d = Sh(top.document, top).y,
          e = d + b.height * (c + 1)
        return a.y >= d && a.y <= e
      } catch (f) {
        return !0
      }
    },
    Mk = function(a, b, c) {
      var d = ja(a.slot, b),
        e = d && 2 === _.r(395) && "none" === d.style.display
      e && (d.style.display = "block")
      a = sa(b, a, c)
      e && (d.style.display = "none")
      return a
    },
    Nk = function(a, b) {
      b = void 0 === b ? window : b
      return (a =
        b.URLSearchParams && b.location
          ? new b.URLSearchParams(b.location.search).get(a)
          : null) && a.length
        ? a
        : null
    },
    Ok = function(a, b) {
      b = void 0 === b ? window : b
      return !!Nk(a, b)
    }
  var Ua = function() {
    return "2020072701"
  }
  Db("getVersion", Ua)
  var Pk = function(a, b, c) {
      b = void 0 === b ? "https://pagead2.googlesyndication.com" : b
      if (null == c || 0 > c || 1 < c) c = _.gj(23)
      this.v = Math.random()
      this.A = this.v < c
      this.j = a
      this.m = Wa(_.q)
      this.o = b
      this.l = { pvsid: this.m }
    },
    E = function(a, b, c) {
      "string" != typeof c && (c = String(c))
      ;/^\w+$/.test(b) && c && (a.l[b] = c)
    },
    Rk = function(a, b, c) {
      b = void 0 === b ? null : b
      c = void 0 === c ? !1 : c
      b = void 0 === b ? null : b
      c = void 0 === c ? !1 : c
      if (Ak()) b = !0
      else {
        var d = a.A
        b && 0 <= b && (d = (c ? a.v : Math.random()) < b)
        b = d && !!a.j
      }
      b && (_.x(305) ? uh(a.l, a.j) : ((a = Qk(a) || ""), sh(window, a)))
    },
    Qk = function(a) {
      var b = a.o + "/pagead/gen_204?id=" + encodeURIComponent(a.j)
      _.wb(a.l, function(c, d) {
        c && (b += "&" + d + "=" + encodeURIComponent(c))
      })
      return b
    },
    Sk = function(a, b) {
      b.length &&
        (3 >= b.length
          ? E(a, "nw_id", b.join())
          : ((b = b.slice(0, 3)), b.push("__extra__"), E(a, "nw_id", b.join())))
    },
    gb = function(a, b) {
      b = void 0 === b ? null : b
      var c = void 0 === c ? document : c
      E(a, "vrg", Ua())
      b
        ? (Sk(a, Tk(b)), E(a, "nslots", b.j.size.toString()))
        : (Sk(a, Ck(Uk)), E(a, "nslots", Uk.length.toString()))
      b = $i.C().j()
      b.length && E(a, "eid", b.join())
      E(a, "pub_url", c.URL)
    },
    fb = function(a, b, c) {
      c = void 0 === c ? {} : c
      var d = c.qe || "https://pagead2.googlesyndication.com"
      c = c.ta
      if (void 0 === c || 0 > c || 1 < c) c = _.gj(23)
      Math.random() < c && ((a = new Pk(a, d)), b(a), Rk(a, 1, !0))
    },
    Uk = []
  var Vk = _.gj(38),
    Wk = function(a, b) {
      a = { methodId: a }
      b.name && (a.name = b.name)
      b.message && (a.message = b.message.substring(0, 512))
      b.fileName && (a.fileName = b.fileName)
      b.lineNumber && (a.lineNumber = b.lineNumber)
      b.stack && (a.stack = Fb(b.stack, ""))
      return a
    },
    Yk = function(a, b, c) {
      c = void 0 === c ? !1 : c
      Xk(a, b)
      if (!c) throw b
    },
    Xk = function(a, b, c) {
      c = void 0 === c ? Vk : c
      if (!b.isReported)
        try {
          b.isReported = !0
          var d = Wk(a, b),
            e = new Pk("gpt_exception")
          try {
            gb(e)
          } catch (f) {}
          _.wb(d, function(f, g) {
            return E(e, g, f)
          })
          Rk(e, c)
        } catch (f) {}
    },
    Q = function(a, b, c) {
      return P(a, b, c, _.x(144))
    },
    P = function(a, b, c, d) {
      d = void 0 === d ? !1 : d
      return c || !0 !== _.gj(249)
        ? function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g)
              f[g] = arguments[g]
            g = !1
            var h = null,
              k = c || Yk,
              l = pk.C()
            try {
              var m = _.x(85)
              m && l && (h = l.start(a.toString(), 3))
              var n = b.apply(this, f)
              g = !0
              m && l && _.Ii(l, h)
            } catch (z) {
              g ? Xk(110, z) : (n = k.call(this, a, z)), _.Fi(h)
            }
            if (d && 0.1 > Math.random())
              try {
                var u = Error()
                fb(
                  "gpt_api_usage",
                  function(z) {
                    E(z, "methodId", a)
                    E(z, "args", f.length)
                    E(z, "stack", Fb(u.stack, u.message))
                    gb(z)
                  },
                  { ta: 1 }
                )
              } catch (z) {}
            return n
          }
        : b
    },
    hb = function(a, b, c) {
      return P(a, b, c, !1)()
    },
    $k = function() {
      var a,
        b = window
      if ((a = _.x(86)))
        b._google_rum_ns_ ? ((a = nj(b)), (a = !(!a.raf || !a.ric))) : (a = !1),
          (a = !a)
      if (a) {
        var c = nj(b)
        c.raf = c.raf || []
        c.ric = c.ric || []
        a = c.raf
        c = c.ric
        kj(b, a, c)
        sj(b, Zk)
        b.setTimeout(lj, 6e4)
      }
    },
    Zk = function() {
      mj()
    }
  var al = function(a) {
    this.push = Q(76, function(b) {
      return a.push.apply(a, arguments)
    })
  }
  _.H(al, vj)
  var bl = function(a, b) {
    b = void 0 === b ? [] : b
    this.l = a
    this.j = b
  }
  bl.prototype.getMessageId = function() {
    return this.l
  }
  bl.prototype.getMessageArgs = function() {
    return this.j
  }
  var dl = function(a, b, c, d, e) {
    this.l = new Date()
    this.A = d && cl(d)
    this.m = c && cl(c)
    this.o = a
    this.v = b
    this.j = e
  }
  _.p = dl.prototype
  _.p.getSlot = function() {
    return this.A
  }
  _.p.getService = function() {
    return this.m
  }
  _.p.getLevel = function() {
    return this.o
  }
  _.p.getTimestamp = function() {
    return this.l
  }
  _.p.getMessage = function() {
    return this.v
  }
  _.p.getReference = function() {
    return this.j
  }
  _.p.toString = function() {
    var a = this.l.toTimeString() + ": " + el[this.o] + ": " + this.v
    this.j &&
      (a +=
        " Duration: " +
        (this.l.getTime() - this.j.getTimestamp().getTime()) +
        "ms.")
    return a
  }
  var el = ["Debug", "Info", "Warning", "Error", "Fatal"]
  var fl = function() {
      this.j = new Xg(1e3)
    },
    gl = function(a, b) {
      return Zg(a.j).filter(function(c) {
        return c.getService() === b
      })
    },
    hl = function(a, b) {
      return Zg(a.j).filter(function(c) {
        return c.getSlot() === b
      })
    },
    il = function(a, b) {
      return Zg(a.j).filter(function(c) {
        return c.getLevel() >= b
      })
    }
  fl.prototype.log = function(a, b, c, d, e) {
    a = new dl(
      a,
      b,
      void 0 === c ? null : c,
      void 0 === d ? null : d,
      void 0 === e ? null : e
    )
    this.j.add(a)
    return a
  }
  fl.prototype.info = function(a, b, c, d) {
    return this.log(1, a, b, c, d)
  }
  fl.prototype.J = function(a, b, c, d) {
    return this.log(2, a, b, c, d)
  }
  fl.prototype.error = function(a, b, c, d) {
    return this.log(3, a, b, c, d)
  }
  oc(fl)
  var jl = na(function() {
      var a = _.fj(5).indexOf(String(Kg()))
      a = _.fj(6)[a] || ""
      var b = void 0 === b ? window.document : b
      if (a && b.head) {
        var c = document.createElement("meta")
        c.httpEquiv = "origin-trial"
        c.content = a
        b.head.appendChild(c)
      }
    }),
    kl = function(a) {
      var b = void 0 === b ? navigator : b
      jl()
      b =
        "scheduling" in b &&
        "isInputPending" in b.scheduling &&
        b.scheduling.isInputPending()
      var c = _.r(31)
      b &&
        Math.random() < c &&
        setTimeout(function() {
          fb(
            "gpt_input_pending",
            function(d) {
              gb(d)
              E(d, "ctx", a)
              E(d, "corr", Wa(_.q))
              var e = Error("inputPending")
              E(d, "stack", Fb(e.stack, e.message))
            },
            { ta: 1 }
          )
        }, 1)
      return b
    }
  var ll = function() {
    _.N.call(this)
  }
  _.H(ll, _.N)
  var cl = function(a) {
    var b = uj.get(a)
    if (!b) {
      var c = (b = a.za())
      tj.set(c, a)
      uj.set(a, c)
    }
    return b
  }
  var R = function(a) {
      return function(b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d]
        return new bl(a, _.Pb(c).concat())
      }
    },
    ml = function(a) {
      return (
        "[" +
        a
          .map(function(b) {
            return "string" === typeof b
              ? "'" + b + "'"
              : Array.isArray(b)
              ? ml(b)
              : String(b)
          })
          .join(", ") +
        "]"
      )
    },
    nl = function(a, b) {
      b = ml(b)
      b = b.substring(1, b.length - 1)
      return new bl(96, [a, b])
    },
    ol = R(1),
    pl = R(2),
    ql = R(3),
    rl = R(4),
    sl = R(5),
    tl = R(6),
    ul = R(8),
    vl = R(12),
    wl = R(14),
    xl = R(16),
    yl = R(17),
    zl = R(19),
    Al = R(20),
    Bl = R(23),
    Cl = R(26),
    Dl = R(27),
    El = R(28),
    Fl = R(30),
    Gl = R(31),
    Hl = R(34),
    Il = R(35),
    Jl = R(36),
    Kl = R(37),
    Ll = R(38),
    Ml = R(40),
    Nl = R(43),
    Ol = R(44),
    Pl = R(46),
    Ql = R(47),
    Rl = R(48),
    Sl = R(50),
    Tl = R(57),
    Ul = R(58),
    Vl = R(59),
    Wl = R(60),
    Xl = R(61),
    Yl = R(62),
    Zl = R(63),
    $l = R(64),
    am = R(66),
    bm = R(68),
    cm = R(70),
    dm = R(71),
    em = R(74),
    fm = R(76),
    gm = R(78),
    hm = R(79),
    im = R(80),
    jm = R(82),
    km = R(84),
    lm = R(85),
    mm = R(87),
    nm = R(88),
    om = R(90),
    pm = R(92),
    qm = R(93),
    rm = R(94),
    sm = R(95),
    tm = R(99),
    um = R(100),
    vm = R(101),
    wm = R(102),
    xm = R(103),
    ym = R(104),
    zm = R(105),
    Am = R(106),
    Bm = R(107),
    Cm = R(108),
    Dm = R(109),
    Em = R(110),
    Fm = R(111),
    Gm = R(113),
    Hm = R(114),
    Im = R(115),
    Jm = R(116),
    Km = R(117),
    Lm = R(118),
    Mm = R(119)
  var Nm = function() {
    _.N.call(this)
    this.A = this.j = 0
  }
  _.H(Nm, ll)
  Nm.prototype.za = function() {
    return new al(this)
  }
  Nm.prototype.push = function(a) {
    for (var b = fl.C(), c = 0; c < arguments.length; ++c)
      try {
        "function" === typeof arguments[c] && (arguments[c](), this.j++)
      } catch (d) {
        this.A++,
          window.console &&
            window.console.error &&
            window.console.error("Exception in queued GPT command", d),
          b.error(Fl(String(d.message)))
      }
    b.info(Gl(String(this.j), String(this.A)))
    return this.j
  }
  var Pm = function() {
    Nm.call(this)
    var a = this
    this.o = []
    this.B = !1
    this.m = this.l = 0
    this.D = P(635, function() {
      a.l = 0
      Om(a)
    })
  }
  _.H(Pm, Nm)
  var Qm = function(a) {
      return a.B || !a.o.length
        ? 0
        : _.x(171)
        ? 1
        : _.x(170)
        ? kl(1)
          ? 1
          : 0
        : _.x(247) && kl(1)
        ? 2
        : 0
    },
    Rm = function(a) {
      a.l || (a.l = setTimeout(a.D, _.r(23)))
    },
    Om = function(a) {
      if (a.l) {
        if (!a.B) return
        clearTimeout(a.l)
        a.l = 0
      }
      for (var b = fl.C(); a.o.length; ) {
        var c = a.o.shift()
        try {
          c(), a.j++
        } catch (e) {
          a.A++,
            window.console &&
              window.console.error &&
              window.console.error("Exception in queued GPT command", e),
            b.error(Fl(String(e.message)))
        }
        c = Qm(a)
        if (1 === c) {
          Rm(a)
          break
        } else 2 === c && (a.m = a.m || _.xi())
      }
      b.info(Gl(String(a.j), String(a.A)))
      if (a.m) {
        var d = _.xi() - a.m
        a.m = 0
        setTimeout(function() {
          return void fb(
            "gpt_input_pending",
            function(e) {
              gb(e)
              E(e, "ctx", 4)
              E(e, "corr", Wa(_.q))
              E(e, "ptr", d)
            },
            { ta: 1 }
          )
        }, 1)
      }
    },
    Sm = function(a, b) {
      a.o = _.Pb(a.o).concat(_.Pb(b.filter(rc)))
      _.x(173) && 1 === Qm(a) ? Rm(a) : Om(a)
    }
  Pm.prototype.push = function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c]
    this.B = _.x(172)
    Sm(this, b)
    return this.j
  }
  var Tm = function() {
    if (_.x(176)) {
      var a = Eb().cmd
      if (!a || Array.isArray(a)) {
        var b = new Pm()
        Eb().cmd = cl(b)
        a && 0 < a.length && Sm(b, a)
      }
    } else if (((a = Eb().cmd), !a || Array.isArray(a)))
      (b = new Nm()),
        (Eb().cmd = cl(b)),
        a && 0 < a.length && b.push.apply(b, a)
  }
  Tm = P(77, Tm)
  var Um = function(a) {
    M(this, a, null, null)
  }
  I(Um, L)
  var Wm = function(a) {
    M(this, a, Vm, null)
  }
  I(Wm, L)
  var Vm = [13]
  var Ym = function(a) {
    M(this, a, Xm, null)
  }
  I(Ym, L)
  var Xm = [13]
  var Zm = function(a) {
    M(this, a, null, null)
  }
  I(Zm, L)
  var $m = function(a) {
    M(this, a, null, null)
  }
  I($m, L)
  var an = function(a) {
    M(this, a, null, null)
  }
  I(an, L)
  var dn = function(a) {
    M(this, a, bn, cn)
  }
  I(dn, L)
  var en = function(a) {
    M(this, a, null, null)
  }
  I(en, L)
  var bn = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38],
    cn = [
      [4, 41],
      [39, 48],
    ]
  en.prototype.getHtml = function() {
    return C(this, 1)
  }
  var gn = function(a) {
    M(this, a, fn, null)
  }
  I(gn, L)
  var hn = function(a) {
    M(this, a, null, null)
  }
  I(hn, L)
  var fn = [1],
    jn = function(a) {
      var b = new hn()
      return Pe(b, 1, a, 0)
    },
    kn = function(a, b) {
      return Pe(a, 2, b, 0)
    },
    ln = function(a, b) {
      Xe(a, 1, b, hn)
    }
  var nn = function(a, b) {
      var c = window
      a: {
        try {
          if (a) {
            var d = a.getItem("google_experiment_mod")
            break a
          }
        } catch (h) {}
        d = null
      }
      var e = d || ""
      d = null
      try {
        if (((d = Ze(gn, e)), e)) {
          var f = Ze(gn, e)
          ln(f, kn(jn(1), -1))
          f.m()
        }
      } catch (h) {
        mn(e), (d = new gn())
      }
      f = Ue(d, hn, 1)
      if (
        (f = Gc(f, function(h) {
          return Me(h, 1, 0) === b
        }))
      ) {
        var g = Me(f, 2, 0)
        if (null === g || isNaN(g)) mn(e)
        else return g
      }
      c = dg(c)
      if (null === c) return null
      f ? kn(f, c) : ln(d, kn(jn(b), c))
      return eg(a, d.m()) ? c : null
    },
    mn = function(a) {
      0.01 > Math.random() && uh({ data: a }, "ls_tamp")
    }
  var on = {},
    pn =
      ((on[3] =
        "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"),
      on),
    qn = {},
    rn =
      ((qn[3] =
        "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js"),
      qn)
  var sn = function(a) {
      this.j = a
      this.l = Td()
    },
    tn = function(a) {
      var b = {}
      _.Cc(a, function(c) {
        b[c.j] = c.l
      })
      return b
    }
  var Bb = function(a, b) {
      b = void 0 === b ? {} : b
      this.root = b.root ? b.root : null
      this.B = b.rootMargin
        ? ua(b.rootMargin)
        : [
            { value: 0, type: "px" },
            { value: 0, type: "px" },
            { value: 0, type: "px" },
            { value: 0, type: "px" },
          ]
      this.rootMargin = _.ta(this.B, function(c) {
        return "" + c.value + c.type
      }).join(" ")
      this.T = ya(b.threshold)
      this.D = a
      this.j = []
      this.o = []
      this.m = !1
      this.l = null
      this.v = Uc(this.A, 100, this)
    },
    un = function(a) {
      if (a.root) var b = za(a.root)
      else {
        var c = _.zf(window)
        b = {
          top: 0,
          right: c.width,
          bottom: c.height,
          left: 0,
          width: c.width,
          height: c.height,
        }
      }
      a = _.ta(a.B, function(d, e) {
        return "px" == d.type
          ? d.value
          : (d.value * (e % 2 ? b.width : b.height)) / 100
      })
      return {
        top: b.top - a[0],
        right: b.right + a[1],
        bottom: b.bottom + a[2],
        left: b.left - a[3],
        width: b.width + a[1] + a[3],
        height: b.height + a[0] + a[2],
      }
    },
    vn = function(a, b, c) {
      if (!b || b.isIntersecting != c.isIntersecting) return !0
      var d = b.intersectionRatio,
        e = c.intersectionRatio
      return d == e
        ? !1
        : _.Ec(a.T, function(f) {
            return f < d != f < e
          })
    }
  Bb.prototype.A = function() {
    var a = this,
      b = un(this)
    _.Cc(this.j, function(c) {
      var d = c.target,
        e = za(d),
        f = e.width * e.height
      var g = Math.max(b.top, e.top)
      var h = Math.min(b.right, e.right),
        k = Math.min(b.bottom, e.bottom),
        l = Math.max(b.left, e.left),
        m = h - l,
        n = k - g
      g =
        0 <= m && 0 <= n
          ? { top: g, right: h, bottom: k, left: l, width: m, height: n }
          : null
      h = !!g
      k = g ? g.width * g.height : 0
      f = f ? k / f : h ? 1 : 0
      k = (k = window.performance) && k.now ? k.now() : 0
      d = {
        boundingClientRect: e,
        intersectionRatio: f,
        intersectionRect: g || {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: 0,
          height: 0,
        },
        isIntersecting: h,
        rootBounds: b,
        target: d,
        time: k,
      }
      vn(a, c.ia, d) && a.o.push(d)
      c.ia = d
    })
    this.o.length && this.D(wn(this), this)
  }
  Bb.prototype.observe = function(a) {
    _.Ec(this.j, function(b) {
      return b.target == a
    }) ||
      (this.j.push({ target: a, ia: null }),
      this.A(),
      this.m ||
        ((this.m = !0),
        _.v(_.q, "scroll", this.v),
        _.v(_.q, "resize", this.v),
        _.q.MutationObserver &&
          !this.l &&
          ((this.l = new MutationObserver(this.v)),
          this.l.observe(_.q.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          }))))
  }
  Bb.prototype.unobserve = function(a) {
    this.j = _.va(this.j, function(b) {
      return b.target != a
    })
    0 == this.j.length && this.disconnect()
  }
  Bb.prototype.disconnect = function() {
    this.m = !1
    this.j.length = 0
    _.kb(_.q, "scroll", this.v)
    _.kb(_.q, "resize", this.v)
    this.l && (this.l.disconnect(), (this.l = null))
  }
  var wn = function(a) {
    var b = _.Pb(a.o).concat()
    a.o.length = 0
    return b
  }
  var yn, zn, An
  yn = function() {
    return 0 != _.xn(document)
  }
  _.xn = function(a) {
    return (
      { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
        a.visibilityState ||
          a.webkitVisibilityState ||
          a.mozVisibilityState ||
          ""
      ] || 0
    )
  }
  zn = function(a) {
    var b
    a.visibilityState
      ? (b = "visibilitychange")
      : a.mozVisibilityState
      ? (b = "mozvisibilitychange")
      : a.webkitVisibilityState && (b = "webkitvisibilitychange")
    return b
  }
  An = function(a) {
    return null != a.hidden
      ? a.hidden
      : null != a.mozHidden
      ? a.mozHidden
      : null != a.webkitHidden
      ? a.webkitHidden
      : null
  }
  var Cn, Bn
  Cn = function() {
    this.wasPlaTagProcessed = !1
    this.wasReactiveAdConfigReceived = {}
    this.adCount = {}
    this.wasReactiveAdVisible = {}
    this.stateForType = {}
    this.reactiveTypeEnabledInAsfe = {}
    this.wasReactiveTagRequestSent = !1
    this.reactiveTypeDisabledByPublisher = {}
    this.tagSpecificState = {}
    this.improveCollisionDetection = 1
    this.messageValidationEnabled = !1
    this.floatingAdsStacking = new Bn()
  }
  _.Dn = function(a) {
    a.google_reactive_ads_global_state
      ? null == a.google_reactive_ads_global_state.floatingAdsStacking &&
        (a.google_reactive_ads_global_state.floatingAdsStacking = new Bn())
      : (a.google_reactive_ads_global_state = new Cn())
    return a.google_reactive_ads_global_state
  }
  Bn = function() {
    this.maxZIndexRestrictions = {}
    this.nextRestrictionId = 0
    this.maxZIndexListeners = []
  }
  var En, In, Jn, Kn
  En = 728 * 1.38
  _.Fn = function(a) {
    return a.innerHeight >= a.innerWidth
  }
  _.Hn = function(a) {
    var b = _.Gn(a).clientWidth
    a = a.innerWidth
    return b && a ? b / a : 0
  }
  In = function(a, b) {
    return (a = _.Gn(a).clientWidth)
      ? a > (void 0 === b ? 420 : b)
        ? 32768
        : 320 > a
        ? 65536
        : 0
      : 16384
  }
  Jn = function(a) {
    return (a = _.Hn(a)) ? (1.05 < a ? 262144 : 0.95 > a ? 524288 : 0) : 131072
  }
  _.Gn = function(a) {
    a = a.document
    var b = {}
    a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body)
    return b || {}
  }
  Kn = function(a) {
    var b = _.Dn(window)
    b.adCount = b.adCount || {}
    b.adCount[a] = b.adCount[a] + 1 || 1
  }
  _.Ln = function(a) {
    return void 0 === a.pageYOffset
      ? (
          a.document.documentElement ||
          a.document.body.parentNode ||
          a.document.body
        ).scrollTop
      : a.pageYOffset
  }
  var Mn = function(a, b) {
      a: {
        for (var c = 0; c < a.length; c++) {
          b: {
            var d = _.q
            var e = a[c],
              f = b
            var g = d.document
            g.elementFromPoint(e.x, e.y)
            var h = e.x
            e = e.y
            g.hasOwnProperty("_goog_efp_called_") ||
              (g._goog_efp_called_ = g.elementFromPoint(h, e))
            if ((g = g.elementFromPoint(h, e)))
              if ("fixed" == zh(g, "position")) d = g
              else {
                if (1 == f) {
                  c: {
                    d = d.document
                    for (
                      f = g.offsetParent;
                      f && f != d.body;
                      f = f.offsetParent
                    )
                      if ("fixed" == zh(f, "position")) {
                        d = f
                        break c
                      }
                    d = null
                  }
                  if (d) break b
                }
                d = null
              }
            else d = null
          }
          if (d) {
            a = d
            break a
          }
        }
        a = null
      }
      return null != a
    },
    Nn = function(a, b, c) {
      for (var d = [], e = 0; 3 > e; e++)
        for (var f = 0; 3 > f; f++)
          d.push({ x: (f / 2) * a, y: b + (e / 2) * (c - b) })
      return d
    }
  var On, Pn
  On = function(a) {
    try {
      a.setItem("__storage_test__", "__storage_test__")
      var b = a.getItem("__storage_test__")
      a.removeItem("__storage_test__")
      return "__storage_test__" == b
    } catch (c) {
      return !1
    }
  }
  _.Qn = function(a) {
    try {
      if (null == a || !On(a)) return null
      var b = a.getItem("__lsv__")
      if (!b) return []
      try {
        var c = JSON.parse(b)
      } catch (d) {}
      return !Array.isArray(c) ||
        _.Ec(c, function(d) {
          return !_.B(Number, "isInteger").call(Number, d)
        })
        ? (a.removeItem("__lsv__"), [])
        : Pn(c)
    } catch (d) {
      return null
    }
  }
  Pn = function(a) {
    a = void 0 === a ? [] : a
    var b = Date.now()
    return _.va(a, function(c) {
      return 36e5 > b - c
    })
  }
  _.Rn = function(a) {
    return !!a && 1 > a.length
  }
  var Sn = function(a, b, c) {
    var d = 0
    try {
      ;(d |= a != a.top ? 512 : 0),
        (d |=
          a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0)
    } catch (g) {
      d |= 32
    }
    var e = 0
    try {
      e |= In(a, 2500)
      if (_.x(309)) {
        var f = _.Gn(a).clientHeight
        e |= f ? (320 > f ? -2147483648 : 0) : 1073741824
      }
      e |= Jn(a)
      b && !_.Rn(_.Qn(c)) && (e |= 134217728)
    } catch (g) {
      e |= 32
    }
    return d | e
  }
  var Tn = function(a) {
    M(this, a, null, null)
  }
  I(Tn, L)
  Tn.prototype.getTime = function() {
    return C(this, 4)
  }
  var Un = function() {}
  var Vn = [0.05, 0.1, 0.2, 0.5],
    Wn = [0, 0.5, 1],
    Xn = function(a) {
      a = Tf(a)
      if (!a) return -1
      try {
        var b = Rh(a.document)
        var c = new _.sf(b.clientWidth, b.clientHeight)
      } catch (d) {
        c = new _.sf(-12245933, -12245933)
      }
      return -12245933 == c.width || -12245933 == c.height
        ? -1
        : c.width * c.height
    },
    Yn = function(a, b) {
      return 0 > a
        ? []
        : _.ta(Vn, function(c) {
            return Math.min((a / b) * c, 1)
          })
    },
    ao = function(a) {
      this.j = a.N
      this.l = a.hb
      this.D = a.wd
      this.o = null
      this.m = a.qa
      this.v = Zn(this)
      this.T = a.pd || !1
      this.B = a.se || !1
      this.A = null
      this.B && $n(this)
    }
  ao.prototype.getSlotId = function() {
    return this.o
  }
  var co = function(a, b) {
      if (a.v) {
        if (null != a.o) {
          try {
            bo(a, Math.round(performance.now()), 0, 0, 0, !1)
          } catch (c) {
            a.m && a.m(c)
          }
          a.v && a.v.unobserve(a.l)
          a.A = null
        }
        a.o = b
        a.v.observe(a.l)
        a.B &&
          (performance.now(),
          a.l.getBoundingClientRect(),
          An(a.j.document) || Tf(a.j),
          (a.A = new Un()))
      }
    },
    Zn = function(a) {
      var b = a.l.offsetWidth * a.l.offsetHeight,
        c = Xn(a.j)
      b = _.Pb(Wn).concat(_.Pb(Yn(c, b)))
      wa(b)
      return _.q.IntersectionObserver
        ? new _.q.IntersectionObserver(
            function(d) {
              return eo(a, d)
            },
            { threshold: b }
          )
        : new Bb(
            function(d) {
              return eo(a, d)
            },
            { threshold: b }
          )
    },
    eo = function(a, b) {
      try {
        var c = Xn(a.j)
        _.Cc(b, function(d) {
          var e = Math.round(d.time),
            f = d.boundingClientRect.width * d.boundingClientRect.height,
            g = d.intersectionRect.width * d.intersectionRect.height
          d = d.isIntersecting
          a.T && bo(a, e, f, g, c, d)
        })
      } catch (d) {
        a.m && a.m(d)
      }
    },
    bo = function(a, b, c, d, e, f) {
      if (null == a.o) throw Error("Not Attached.")
      var g = new Tn()
      c = D(g, 1, c)
      d = D(c, 2, d)
      e = D(d, 3, e)
      b = D(e, 4, b)
      b = D(b, 5, f)
      f = new Fe()
      e = C(b, 4)
      null != e && null != e && Ge(f, 4, e)
      e = C(b, 2)
      null != e && null != e && Ge(f, 2, e)
      e = C(b, 1)
      null != e && null != e && Ge(f, 1, e)
      e = C(b, 3)
      null != e && null != e && Ge(f, 3, e)
      e = C(b, 5)
      null != e && ((b = e), null != b && (Zd(f.j, 40), f.j.j.push(b ? 1 : 0)))
      b = new Uint8Array(f.j.length())
      d = f.l
      c = d.length
      for (g = e = 0; g < c; g++) {
        var h = d[g]
        b.set(h, e)
        e += h.length
      }
      d = f.j
      c = d.j
      d.j = []
      b.set(c, e)
      f.l = [b]
      f = Ee(b, 4)
      Hi(a.D, "1", 10, f, void 0, a.o)
    },
    $n = function(a) {
      var b = zn(a.j.document)
      b &&
        _.v(a.j.document, b, function() {
          a.A && performance.now()
        })
    }
  var fo = function() {
    var a = {}
    return (
      (a.adsense_channel_ids = "channel"),
      (a.adsense_ad_types = "ad_type"),
      (a.adsense_ad_format = "format"),
      (a.adsense_background_color = "color_bg"),
      (a.adsense_border_color = "color_border"),
      (a.adsense_link_color = "color_link"),
      (a.adsense_text_color = "color_text"),
      (a.adsense_url_color = "color_url"),
      (a.page_url = "url"),
      (a.adsense_allow_expandable_ads = "ea"),
      (a.adsense_encoding = "oe"),
      (a.adsense_family_safe = "adsafe"),
      (a.adsense_flash_version = "flash"),
      (a.adsense_font_face = "f"),
      (a.adsense_hints = "hints"),
      (a.adsense_keyword_type = "kw_type"),
      (a.adsense_keywords = "kw"),
      (a.adsense_test_mode = "adtest"),
      (a.alternate_ad_iframe_color = "alt_color"),
      (a.alternate_ad_url = "alternate_ad_url"),
      (a.demographic_age = "cust_age"),
      (a.demographic_gender = "cust_gender"),
      a
    )
  }
  var go = function(a, b, c, d, e) {
      var f = null
      Array.isArray(d)
        ? (f = d)
        : qc(d)
        ? (f = _.B(Array, "from").call(Array, d))
        : d
        ? (f = [d])
        : _.x(262) || (f = [])
      var g = "string" === typeof c && !md(c),
        h = _.x(262)
          ? !!f &&
            f.every(function(k) {
              return "string" === typeof k
            })
          : !0
      g && h
        ? (_.x(262) ||
            (f = f.map(function(k) {
              return String(k)
            })),
          (d = ((A = Ue(b, Fj, 9)), _.B(A, "find")).call(A, function(k) {
            return Gj(k) === c
          }))
            ? Ij(d, f)
            : ((d = Ij(Hj(new Fj(), c), f)), Xe(b, 9, d, Fj)),
          e.info(yl(c, f.join(), a.getAdUnitPath()), null, a))
        : e.J(nl("Slot.setTargeting", [c, d]), null, a)
    },
    ho = function(a, b, c, d) {
      if (null == c || "object" !== typeof c)
        d.error(nl("Slot.updateTargetingFromMap", [c]), null, a)
      else
        for (
          var e = _.F(_.B(Object, "keys").call(Object, c)), f = e.next();
          !f.done;
          f = e.next()
        )
          (f = f.value), go(a, b, f, c[f], d)
    }
  var jo = function(a) {
    var b = this
    this.addEventListener = Q(86, function(c, d) {
      a.addEventListener(c, d)
      return b
    })
    this.getSlots = Q(573, function() {
      return a.l.map(function(c) {
        return cl(c)
      })
    })
    this.getSlotIdMap = Q(574, function() {
      for (var c = {}, d = _.F(a.l), e = d.next(); !e.done; e = d.next())
        (e = e.value), (c[e.l.l] = cl(e))
      return c
    })
    this.enable = Q(
      87,
      function() {
        return io(a)
      },
      Xk
    )
    this.getName = Q(575, function() {
      return a.X()
    })
  }
  _.H(jo, vj)
  var ko = function() {
      this.l = {}
      this.j = new Oj()
      D(this.j, 26, Kk())
      _.gj(36) && D(this.j, 15, !0)
    },
    lo = function() {
      return ko.C().l
    },
    mo = function(a, b) {
      return a.l[b] || null
    }
  oc(ko)
  var no = "",
    oo = null,
    po = function() {
      no || (no = ej(2) || "1-0-37")
      return no
    },
    qo = function() {
      if (null == oo) {
        if (_.x(246)) var a = Gk()
        else {
          a = _.fj(1)
          for (var b = [], c = 0; c < a.length; c += 2) Pf(a[c], a[c + 1], b)
          a = b.join("&")
        }
        oo = a
      }
      return oo
    },
    ro = function(a) {
      var b = fl.C(),
        c = new Lj()
      if (!a || !_.sc(a)) return null
      var d = !1
      _.wb(a, function(e, f) {
        switch (f) {
          case "allowOverlayExpansion":
            "boolean" === typeof e
              ? D(c, 1, a.allowOverlayExpansion)
              : (b.error(
                  vm("allowOverlayExpansion", String(a.allowOverlayExpansion))
                ),
                (d = !0))
            break
          case "allowPushExpansion":
            "boolean" === typeof e
              ? D(c, 2, a.allowPushExpansion)
              : (b.error(
                  vm("allowPushExpansion", String(a.allowPushExpansion))
                ),
                (d = !0))
            break
          case "sandbox":
            !0 === e
              ? Mj(c, a.sandbox)
              : (b.error(vm("sandbox", String(a.sandbox))), (d = !0))
            break
          case "useUniqueDomain":
            "boolean" === typeof e
              ? D(c, 4, a.useUniqueDomain)
              : null !== e &&
                (b.error(vm("useUniqueDomain", String(a.useUniqueDomain))),
                (d = !0))
            break
          default:
            b.J(um(f))
        }
      })
      return d ? null : c
    },
    so = function(a) {
      var b = new Lj()
      a = _.F(a)
      for (var c = a.next(); !c.done; c = a.next())
        if ((c = c.value)) {
          if (null != C(c, 1)) {
            var d = w(c, 1)
            D(b, 1, d)
          }
          null != C(c, 2) && ((d = w(c, 2)), D(b, 2, d))
          null != C(c, 3) && Mj(b, w(c, 3))
          null != C(c, 4) && ((c = w(c, 4)), D(b, 4, c))
        }
      return b
    }
  var to = function(a, b) {
    this.l = a
    this.j = b
  }
  to.prototype.getWidth = function() {
    return this.l
  }
  to.prototype.getHeight = function() {
    return this.j
  }
  var vo = function(a) {
    var b = this,
      c = fl.C(),
      d = mo(ko.C(), a.getSlotElementId())
    this.set = Q(40, function(e, f) {
      if ("string" !== typeof e || !f || void 0 === fo()[e])
        return c.J(nl("Slot.set", [e, f]), null, a), b
      var g = ((A = Ue(d, Fj, 3)), _.B(A, "find")).call(A, function(h) {
        return Gj(h) === e
      })
      g ? Ij(g, [f]) : ((g = Hj(new Fj(), e)), Re(g, 2, f), Xe(d, 3, g, Fj))
      return b
    })
    this.get = Q(41, function(e) {
      if ("string" !== typeof e) return c.J(nl("Slot.get", [e]), null, a), null
      var f = ((A = Ue(d, Fj, 3)), _.B(A, "find")).call(A, function(g) {
        return Gj(g) === e
      })
      return (f = f && C(f, 2)) ? f[0] : null
    })
    this.getAttributeKeys = Q(42, function() {
      return Ue(d, Fj, 3).map(function(e) {
        return Gj(e)
      })
    })
    this.addService = Q(43, function(e) {
      e = tj.get(e)
      if (!e) return c.J(rm(a.l.l), null, a), b
      if (((A = C(d, 4)), _.B(A, "includes")).call(A, e.X()))
        return c.J(vl(e.X(), a.l.l), e, a), b
      e.Da(a, d)
      return b
    })
    this.defineSizeMapping = Q(
      44,
      function(e) {
        if (!Array.isArray(e)) throw Error("Size mapping has to be an array")
        e = e.map(kk)
        We(d, 6, e)
        return b
      },
      function(e, f) {
        Xk(e, f)
        Eg("Incorrect usage of googletag.Slot defineSizeMapping: " + f.message)
        return b
      }
    )
    this.setClickUrl = Q(45, function(e) {
      if ("string" !== typeof e)
        return c.J(nl("Slot.setClickUrl", [e]), null, a), b
      D(d, 7, e)
      return b
    })
    this.setCategoryExclusion = Q(46, function(e) {
      "string" !== typeof e || md(e)
        ? c.J(nl("Slot.setCategoryExclusion", [e]), null, a)
        : (((A = C(d, 8)), _.B(A, "includes")).call(A, e) || Re(d, 8, e),
          c.info(wl(e), null, a))
      return b
    })
    this.clearCategoryExclusions = Q(47, function() {
      D(d, 8, [])
      c.info(xl(), null, a)
      return b
    })
    this.getCategoryExclusions = Q(48, function() {
      return C(d, 8).slice()
    })
    this.setTargeting = Q(49, function(e, f) {
      go(a, d, e, f, c)
      return b
    })
    this.updateTargetingFromMap = Q(649, function(e) {
      ho(a, d, e, c)
      return b
    })
    this.clearTargeting = Q(50, function(e) {
      if (void 0 === e)
        return bk(d, []), c.info(zl(a.getAdUnitPath()), null, a), b
      var f = Ue(d, Fj, 9),
        g = _.B(f, "findIndex").call(f, function(h) {
          return Gj(h) === e
        })
      if (0 > g) return c.J(wm(e, a.getAdUnitPath()), null, a), b
      f.splice(g, 1)
      bk(d, f)
      c.info(xm(e, a.getAdUnitPath()), null, a)
      return b
    })
    this.getTargeting = Q(51, function(e) {
      if ("string" !== typeof e)
        return c.J(nl("Slot.getTargeting", [e]), null, a), []
      var f = ((A = Ue(d, Fj, 9)), _.B(A, "find")).call(A, function(g) {
        return Gj(g) === e
      })
      return f ? C(f, 2).slice() : []
    })
    this.getTargetingKeys = Q(52, function() {
      return Ue(d, Fj, 9).map(function(e) {
        return Gj(e)
      })
    })
    this.setCollapseEmptyDiv = Q(53, function(e, f) {
      f = void 0 === f ? !1 : f
      if ("boolean" !== typeof e || "boolean" !== typeof f)
        return c.J(nl("Slot.setCollapseEmptyDiv", [e, f]), null, a), b
      D(d, 10, e)
      D(d, 11, e && f)
      fb("gpt_ced", function(g) {
        var h = w(d, 11) ? "t" : "f"
        E(g, "sc", h)
        E(g, "level", "slot")
        gb(g)
      })
      f && !e && c.J(Al(a.getSlotId().toString()), null, a)
      return b
    })
    this.getAdUnitPath = Q(54, function() {
      return a.getAdUnitPath()
    })
    this.getSlotElementId = Q(598, function() {
      return a.getSlotElementId()
    })
    this.setForceSafeFrame = Q(55, function(e) {
      if ("boolean" !== typeof e)
        return c.J(em("Slot.setForceSafeFrame", String(e)), null, a), b
      D(d, 12, e)
      return b
    })
    this.setSafeFrameConfig = Q(56, function(e) {
      var f = ro(e)
      if (!f) return c.error(nl("Slot.setSafeFrameConfig", [e]), null, a), b
      Ve(d, 13, f)
      return b
    })
    this.getResponseInformation = Q(355, function() {
      return a.K
    })
    this.getName = Q(170, function() {
      window.console &&
        console.error &&
        console.error(
          "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
        )
      var e = new Pk("slot_get_name")
      gb(e)
      Rk(e)
      return a.l.getAdUnitPath()
    })
    this.getSlotId = Q(579, function() {
      return cl(a.getSlotId())
    })
    this.getServices = Q(580, function() {
      return C(d, 4).map(function(e) {
        return xj(e)
      })
    })
    this.getSizes = Q(581, function(e, f) {
      return (e = lk(d, e, f))
        ? e.map(function(g) {
            return w(g, 3) ? "fluid" : new to(C(g, 1), C(g, 2))
          })
        : null
    })
    this.getClickUrl = Q(582, function() {
      return null != C(d, 7) ? d.getClickUrl() : ""
    })
    this.getTargetingMap = Q(583, function() {
      for (
        var e = {}, f = _.F(Ue(d, Fj, 9)), g = f.next();
        !g.done;
        g = f.next()
      )
        (g = g.value), (e[Gj(g)] = C(g, 2))
      return e
    })
    this.getOutOfPage = Q(584, function() {
      return 0 != ck(d)
    })
    this.getCollapseEmptyDiv = Q(585, function() {
      return null != C(d, 10) ? w(d, 10) : null
    })
    this.getDivStartsCollapsed = Q(586, function() {
      return null != C(d, 11) ? w(d, 11) : null
    })
    this.getContentUrl = Q(587, function() {
      return a.ca()
    })
    this.getFirstLook = Q(588, function() {
      Eg(
        "The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method."
      )
      return 0
    })
    this.getEscapedQemQueryId = Q(591, function() {
      return uo(a)
    })
    this.getHtml = Q(592, function() {
      return a.getHtml()
    })
  }
  _.H(vo, vj)
  var wo = function(a) {
    this.getId = Q(593, function() {
      return a.l
    })
    this.getAdUnitPath = Q(594, function() {
      return a.getAdUnitPath()
    })
    this.getName = Q(595, function() {
      var b = new Pk("slot_id_get_name")
      gb(b)
      Rk(b)
      return a.o
    })
    this.toString = Q(596, function() {
      return a.toString()
    })
    this.getDomId = Q(597, function() {
      return a.j
    })
  }
  _.H(wo, vj)
  var xo = { REWARDED: 4, TOP_ANCHOR: 2, BOTTOM_ANCHOR: 3, INTERSTITIAL: 5 },
    yo = function(a) {
      switch (a) {
        case 2:
          return 2
        case 3:
          return 1
        case 5:
          return 8
        default:
          return null
      }
    },
    zo = function() {
      var a = Eb()
      a.enums || (a.enums = { OutOfPageFormat: xo })
    }
  var Ao = function() {
    this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null
    this.isBackfill = !1
    this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
  }
  var Bo = {
      $d: "impressionViewable",
      fe: "rewardedSlotCanceled",
      ge: "rewardedSlotClosed",
      he: "rewardedSlotCompleted",
      ie: "rewardedSlotGranted",
      je: "rewardedSlotReady",
      ke: "slotAdded",
      le: "slotOnload",
      me: "slotRenderEnded",
      ne: "slotRequested",
      oe: "slotResponseReceived",
      pe: "slotVisibilityChanged",
    },
    Co = function(a, b) {
      this.slot = a
      this.serviceName = b
    },
    Do = function(a, b) {
      Co.call(this, a, b)
      this.isEmpty = !1
      this.slotContentChanged = !0
      this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null
      this.isBackfill = !1
      this.companyIds = this.yieldGroupIds = null
    }
  _.H(Do, Co)
  var Eo = function() {
    Co.apply(this, arguments)
  }
  _.H(Eo, Co)
  var Fo = function(a, b, c) {
    Co.call(this, a, b)
    this.inViewPercentage = c
  }
  _.H(Fo, Co)
  var Go = function() {
    Co.apply(this, arguments)
  }
  _.H(Go, Co)
  var Ho = function() {
    Co.apply(this, arguments)
  }
  _.H(Ho, Co)
  var Io = function(a, b, c, d) {
    Co.call(this, a, b)
    this.makeRewardedVisible = c
    this.payload = d
  }
  _.H(Io, Co)
  var Jo = function(a, b, c) {
    Co.call(this, a, b)
    this.payload = c
  }
  _.H(Jo, Co)
  var Ko = function() {
    Co.apply(this, arguments)
  }
  _.H(Ko, Co)
  var Lo = function() {
    Co.apply(this, arguments)
  }
  _.H(Lo, Co)
  var Mo = function() {
    Co.apply(this, arguments)
  }
  _.H(Mo, Co)
  var No = function() {
    Co.apply(this, arguments)
  }
  _.H(No, Co)
  var Oo = function() {
    Co.apply(this, arguments)
  }
  _.H(Oo, Co)
  var Po = function() {
    _.N.call(this)
    this.l = []
    this.j = !1
    this.A = new t.Map()
    this.log = fl.C()
    this.log.info(Il(this.X()), this)
    this.B = []
  }
  _.H(Po, ll)
  Po.prototype.za = function() {
    return new jo(this)
  }
  Po.prototype.getVersion = function() {
    return "unversioned"
  }
  var io = function(a) {
      if (!a.j) {
        a.j = !0
        a.Kb()
        for (var b = _.F(a.B), c = b.next(); !c.done; c = b.next()) {
          c = c.value
          try {
            c()
          } catch (d) {}
        }
        a.B.length = 0
      }
    },
    Qo = function(a, b) {
      if (a.j)
        try {
          b()
        } catch (c) {}
      else a.B.push(b)
    }
  Po.prototype.Da = function(a, b) {
    this.l.push(a)
    var c = new Ho(cl(a), this.X())
    Ro(this, "slotAdded", c)
    this.log.info(Ml(this.X(), a.getAdUnitPath()), this, a)
    Re(b, 4, this.X())
  }
  Po.prototype.destroySlots = function(a) {
    var b = this.l,
      c = b.filter(function(d) {
        return _.B(a, "includes").call(a, d)
      })
    c.forEach(function(d) {
      Ic(b, d)
    })
    return c
  }
  var So = function(a, b) {
    fb("gpt_callback_usage", function(c) {
      gb(c)
      E(c, "type", b)
      var d = 0,
        e = 0
      a.l.forEach(function(f) {
        0 < f.B && d++
        f.D && e++
      })
      E(c, "nfetch", d)
      E(c, "nrend", e)
    })
  }
  Po.prototype.addEventListener = function(a, b) {
    if ("function" !== typeof b || "string" !== typeof a)
      return (
        (a = nl("Service.addEventListener", [a, b])), this.log.J(a, this), this
      )
    a: {
      for (c in Bo)
        if (Bo[c] == a) {
          var c = !0
          break a
        }
      c = !1
    }
    if (!c) return this.log.J(qm(a), this), this
    c = this.A.get(a)
    Array.isArray(c) || ((c = []), this.A.set(a, c))
    c.push(b)
    So(this, a)
    return this
  }
  var Ro = function(a, b, c) {
    var d = a.A.get(b)
    Array.isArray(d) &&
      Ig(function() {
        for (var e = _.F(d), f = e.next(); !f.done; f = e.next()) {
          f = f.value
          try {
            f(c)
          } catch (k) {
            f = k && "string" === typeof k.name ? k.name : null
            var g = k && "string" === typeof k.message ? k.message : null,
              h = ""
            f && g ? (h = f + ": " + g) : f ? (h = f) : g && (h = g)
            a.log.J(pm(h), a)
            window.console && console.error && console.error(k)
          }
        }
      })
  }
  var To = function(a, b, c) {
    _.N.call(this)
    this.o = a
    this.Xa = b
    this.l = this.o + "_" + this.Xa
    this.j = c
  }
  _.H(To, ll)
  To.prototype.getAdUnitPath = function() {
    return this.o
  }
  To.prototype.C = function() {
    return this.Xa
  }
  To.prototype.toString = function() {
    return this.l
  }
  To.prototype.za = function() {
    return new wo(this)
  }
  To.prototype.getInstance = To.prototype.C
  var Vo = function(a, b, c) {
    _.N.call(this)
    this.l = new To(a, b, c)
    _.Wg(this, this.l)
    this.A = fl.C()
    this.A.info(pl(this.l.toString()), null, this)
    this.$ = this.D = this.da = null
    this.ca = function() {
      return ""
    }
    this.G = null
    this.m = Bk(this.l.getAdUnitPath())
    this.gb = ""
    this.K = null
    this.Zb = !1
    this.B = 0
    this.O = this.L = this.I = this.Y = this.ec = null
    Uo(this)
    this.H = ""
    this.j = this.R = null
    this.U = ""
    this.ba = null
    this.V = []
    this.W = []
  }
  _.H(Vo, ll)
  var Wo = function(a, b) {
      a.V.push(b)
    },
    Xo = function(a, b) {
      a.W.push(b)
    }
  Vo.prototype.za = function() {
    return new vo(this, Po)
  }
  Vo.prototype.getAdUnitPath = function() {
    return this.l.getAdUnitPath()
  }
  Vo.prototype.C = function() {
    return this.l.C()
  }
  Vo.prototype.getSlotElementId = function() {
    return this.l.j
  }
  var ja = function(a, b) {
    b = void 0 === b ? document : b
    return a.ec || b.getElementById(a.l.j)
  }
  Vo.prototype.getSlotId = function() {
    return this.l
  }
  var Yo = function(a, b) {
      a.ca = b
    },
    Zo = function(a) {
      a.D = a.A.info(sl(a.getAdUnitPath()), null, a)
    },
    $o = function(a) {
      a.$ = a.A.info(tl(a.getAdUnitPath()), null, a, a.D)
    }
  Vo.prototype.kb = function() {
    this.G = this.G || _.xi()
  }
  var ap = function(a) {
      a.G = null
      a.K = null
      a.j = null
      a.U = ""
      a.R = null
      a.H = ""
      a.ba = null
      a.O = null
      4 === _.r(59) && (a.I = null)
      3 === _.r(59) && (a.L = null)
      for (var b = _.F(a.V), c = b.next(); !c.done; c = b.next())
        (c = c.value), c()
      a.V.length = 0
    },
    bp = function(a) {
      for (var b = _.F(a.W), c = b.next(); !c.done; c = b.next())
        (c = c.value), c()
      a.W.length = 0
    },
    cp = function(a, b) {
      a.j = b
      b = C(a.j, 33) || ""
      a.H = b
      if (!a.j || w(a.j, 8)) b = null
      else {
        b = new Ao()
        var c = !!w(a.j, 9)
        b.isBackfill = c
        var d = C(a.j, 15),
          e = C(a.j, 16)
        d.length &&
          e.length &&
          ((b.sourceAgnosticCreativeId = d[0]),
          (b.sourceAgnosticLineItemId = e[0]),
          c ||
            ((b.creativeId = d[0]),
            (b.lineItemId = e[0]),
            (c = C(a.j, 22)) && c.length && (b.creativeTemplateId = c[0])))
        C(a.j, 17).length && ((c = C(a.j, 17)[0]), (b.advertiserId = c))
        C(a.j, 18).length && ((c = C(a.j, 18)[0]), (b.campaignId = c))
        C(a.j, 19).length && ((c = C(a.j, 19)), (b.yieldGroupIds = c))
        C(a.j, 20).length && ((c = C(a.j, 20)), (b.companyIds = c))
        c = C(a.j, 45)
        c = c.length && "string" !== typeof c[0] ? _.ta(c, Le) : c
        c.length && (b.encryptedTroubleshootingInfo = c[0])
      }
      a.K = b
    },
    uo = function(a) {
      return (a.j && C(a.j, 34)) || ""
    }
  Vo.prototype.getHtml = function() {
    return this.isBackfill()
      ? (window.console &&
          console.warn &&
          console.warn(
            "This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."
          ),
        "")
      : this.U
  }
  Vo.prototype.isBackfill = function() {
    return this.j ? !!w(this.j, 9) : null
  }
  Vo.prototype.v = function() {
    ll.prototype.v.call(this)
    bp(this)
    this.A.info(tm(this.l.toString()), null, this)
  }
  var dp = function(a) {
      return "google_ads_iframe_" + a.l.l
    },
    ep = function(a) {
      return dp(a) + "__container__"
    },
    Uo = function(a, b) {
      b || (b = ++pk.C().v)
      a.o = b
    },
    fp = function(a, b) {
      return (b = ia(a, b))
        ? b.querySelector('iframe[id="' + dp(a) + '"]')
        : null
    },
    ia = function(a, b) {
      b = ja(a, b)
      if (!b) return null
      var c = ep(a)
      return If(b, function(d) {
        return d.id === c
      })
    },
    gp = function(a) {
      if (a.I) return a.I
      var b = ja(a)
      b = b && b.parentElement
      if (!b || !b.getBoundingClientRect) return null
      b = Dk(b)
      1 != _.r(59) && (a.I = b)
      return b
    },
    oa = function(a, b) {
      b = void 0 === b ? document : b
      if (a.O) return a.O
      b = ja(a, b)
      if (!b) return null
      b = pa(b, window)
      1 != _.r(59) && (a.O = b)
      return b
    }
  var hp = function() {
      this.l = []
      this.v = []
      this.j = {}
    },
    ip = function(a, b) {
      return a.j[b] || []
    }
  oc(hp)
  var jp = function() {
    var a = this
    this.j = function() {
      return !1
    }
    this.l = ""
    this.v = null
    var b = ko.C(),
      c = {}
    this[3] =
      ((c[19] = function() {
        return !!w(b.j, 10)
      }),
      (c[14] = xk),
      (c[13] = function(d) {
        for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f]
        return e.some(function(g) {
          return 0 == a.l.lastIndexOf(g, 0)
        })
      }),
      (c[12] = function() {
        return !!w(b.j, 6)
      }),
      (c[11] = yn),
      (c[15] = function(d) {
        return a.j(d)
      }),
      (c[7] = function() {
        return !(!_.q.crypto || !_.q.crypto.subtle)
      }),
      (c[1] = function() {
        return 0 == qg()
      }),
      c)
    c = {}
    this[4] =
      ((c[8] = function(d) {
        return nn(a.v, d)
      }),
      c)
    this[5] = {}
  }
  oc(jp)
  var kp = function() {
    var a = this
    this.j = {}
    this.l = fl.C()
    this.o = this.l.info(ul())
    sj(window, function() {
      return P(92, a.v)
    })
  }
  kp.prototype.add = function(a) {
    this.j[a.X()] = a
  }
  kp.prototype.find = function(a) {
    var b = null
    a in this.j && (b = this.j[a])
    return b
  }
  var lp = function() {
    var a = kp.C()
    bj(6)
    _.wb(a.j, function(b) {
      b.j ? a.l.info(Ll(), b) : io(b)
    })
  }
  kp.prototype.destroySlots = function(a) {
    _.wb(this.j, function(b) {
      return b.destroySlots(a)
    })
  }
  kp.prototype.v = function() {
    this.l.info(ol(), null, null, this.o)
  }
  oc(kp)
  kp.prototype.v = P(92, kp.prototype.v)
  var mp = P(91, function() {
    lp()
  })
  Db("enableServices", mp)
  var np = function(a) {
      return !!ag(xo, function(b) {
        return b == a
      })
    },
    pp = function(a) {
      return ((A = Ck(
        _.B(Array, "from").call(
          Array,
          ((A = op.C().j), _.B(A, "values")).call(A)
        )
      )),
      _.B(A, "includes")).call(A, a)
    },
    qp = Tc(function() {
      Eg(
        "GPT does not support passback slots on the top window. Each passback slot should be defined and rendered within an iframe."
      )
    }),
    rp = function(a) {
      var b = _.q != _.q.top ? 512 : 0
      if (b) return b
      var c = _.Dn(_.q)
      var d = c.adCount
        ? 1 == a || 2 == a
          ? !(!c.adCount[1] && !c.adCount[2])
          : (d = c.adCount[a]) && 27 !== a && 26 !== a && 10 !== a
          ? 1 <= d
          : !1
        : !1
      d && (b |= 64)
      0 === qg() && (b |= 536870912)
      c.improveCollisionDetection = 1
      switch (a) {
        case 2:
        case 1:
          c = _.x(386) ? void 0 : 420
          c = void 0 === c ? En : c
          d = 0
          try {
            d |= _.q != _.q.top ? 512 : 0
            var e = Math.min(_.q.screen.width || 0, _.q.screen.height || 0)
            d |= e ? (320 > e ? 8192 : 0) : 2048
            var f
            if ((f = _.q.navigator)) {
              var g = _.q.navigator.userAgent
              f =
                /Firefox/.test(g) ||
                /Android 2/.test(g) ||
                /iPhone OS [34]_/.test(g) ||
                /Windows Phone (?:OS )?[67]/.test(g)
            }
            d |= f ? 1048576 : 0
          } catch (h) {
            d |= 32
          }
          e = d
          f = 0
          try {
            ;(f |= _.Fn(_.q) ? 0 : 8), (f |= In(_.q, c)), (f |= Jn(_.q))
          } catch (h) {
            f |= 32
          }
          g = !1
          if (!_.x(269)) {
            switch (a) {
              case 2:
                g = _.q.innerWidth
                a = _.Dn(_.q).improveCollisionDetection
                g = Nn(g, 0, Math.round((_.q.innerWidth / 320) * 50 + 15))
                g = Mn(g, a)
                break
              case 1:
                if ((a = _.x(1901)))
                  (g = _.q.innerWidth),
                    (c = _.q.innerHeight),
                    (a = _.Dn(_.q).improveCollisionDetection),
                    (g = Nn(
                      g,
                      c - Math.round((_.q.innerWidth / 320) * 50 + 15),
                      c
                    )),
                    (a = Mn(g, a))
                g = a
            }
            g && (f |= 16777216)
          }
          return b | e | f
        case 8:
          return b | Sn(_.q, !1, null)
        default:
          return b | 32
      }
    },
    op = function() {
      this.j = new t.Map()
      this.o = new t.Map()
      this.l = new t.Map()
      this.v = fl.C()
      this.m = []
      jp.C().j = pp
    }
  op.prototype.add = function(a, b, c) {
    var d = this,
      e = void 0 === c ? {} : c
    c = void 0 === e.hb ? void 0 : e.hb
    var f = void 0 === e.tc ? !1 : e.tc
    if ("string" !== typeof a || 0 >= a.length || !b) return {}
    e = yo(void 0 === e.format ? 0 : e.format)
    if (null != e) {
      if (rp(e)) return {}
      Kn(e)
    }
    f && window == window.top && qp()
    f = this.o.get(a) || Number(f)
    var g = c || "gpt_unit_" + a + "_" + f
    c = sp(a, f, b, g)
    b = c.slot
    c = c.aa
    if (!b || !c) return this.v.error(El(g)), {}
    var h = b.getSlotId()
    this.o.set(a, f + 1)
    this.j.set(h, b)
    this.l.set(g, h)
    _.O(h, function() {
      d.j.delete(h)
      d.l.delete(g)
    })
    Uk.push(b)
    return { slot: b, xa: c }
  }
  var tp = function(a) {
      var b = []
      ip(hp.C(), a).forEach(function(c) {
        ;(c = fp(c, document)) && b.push(c.contentWindow)
      })
      return b
    },
    up = function(a) {
      a = _.F(a)
      for (var b = a.next(); !b.done; b = a.next()) {
        b = b.value
        var c = ko.C(),
          d = b.getSlotElementId(),
          e = c.l[d]
        delete c.l[d]
        c = e
        Vg(b)
        c = yo(ck(c))
        null != c &&
          ((d = _.Dn(window)),
          (e = d.adCount && d.adCount[c]) && (d.adCount[c] = e - 1))
        Ic(Uk, b)
      }
    },
    vp = function(a, b) {
      if (b && !Array.isArray(b))
        return a.v.J(nl("googletag.destroySlots", [b])), !1
      b
        ? (wa(b),
          (a = b.filter(function(c) {
            return c && !c.ma
          })))
        : (a = _.B(Array, "from").call(Array, _.B(a.j, "values").call(a.j)))
      if (!a || 0 == a.length) return !1
      kp.C().destroySlots(a)
      up(a)
      return !0
    },
    wp = function(a, b) {
      a = _.F(_.B(a.j, "values").call(a.j))
      for (var c = a.next(); !c.done; c = a.next())
        if (((c = c.value), c.getSlotId().j === b)) return c
      return null
    },
    xp = function(a, b) {
      return a.j.get(b) || null
    },
    yp = function(a) {
      var b = op.C()
      a = wj(a, Vo)
      return !!a && b.j.has(a.getSlotId())
    },
    zp = function(a, b, c, d) {
      d = void 0 === d ? !1 : d
      if ("string" === typeof a && (void 0 === c || "string" === typeof c)) {
        var e = op.C()
        return e && e.add(a, b, { hb: c, tc: d })
      }
      return {}
    },
    Ap = function(a, b, c) {
      return ((a = zp(a, b, c).slot) && cl(a)) || null
    },
    Bp = function(a) {
      var b = op.C()
      return b && null == a
        ? vp(b)
        : b && Array.isArray(a)
        ? ((a = a.map(function(c) {
            return wj(c, Vo)
          })),
          vp(b, a))
        : !1
    },
    Cp = function(a, b) {
      if (
        "string" !== typeof a ||
        !(
          null == b ||
          "string" === typeof b ||
          ("number" === typeof b && np(b))
        )
      )
        return null
      a: {
        var c = "number" === typeof b ? b : 1
        b = "string" === typeof b ? b : void 0
        b = op.C().add(a, [1, 1], { hb: b, format: c })
        a = b.slot
        b = b.xa
        if (a && b) {
          if (5 === c && _.x(323)) {
            c = null
            break a
          }
          D(b, 15, c)
        }
        c = a || null
      }
      return c && cl(c)
    },
    sp = function(a, b, c, d) {
      if (op.C().l.has(d)) return { slot: null, aa: null }
      var e = new ak(),
        f = D(e, 1, a)
      D(f, 2, d)
      var g = null,
        h = null
      if (
        !c ||
        Array.isArray(c) ||
        (!Array.isArray(c.fixed) && "fluid" !== c.fixed)
      )
        f = hk(c)
      else if (((f = hk(c.fixed)), (h = ik(c.max))))
        c.min
          ? ((g = ik(c.min)) && null === C(g, 1) && Sj(g, 0),
            g && null === C(g, 2) && Tj(g, 0))
          : (g = Tj(Sj(new Rj(), 0), 0))
      if (c && !Array.isArray(c)) {
        if (c.max && !h)
          throw Error("Invalid GPT maximum size: " + JSON.stringify(c))
        if (c.min && !g)
          throw Error("Invalid GPT maximum size: " + JSON.stringify(c))
      }
      if (h) {
        if (0 === C(h, 1) || 0 === C(h, 2))
          throw Error(
            "Invalid GPT size, maximums cannot be zero: " + JSON.stringify(c)
          )
        if (g) {
          var k = C(g, 1),
            l = C(h, 1)
          if (null != k && null != l && k > l)
            throw Error(
              "Invalid GPT size: minimum width larger than maximum width: " +
                JSON.stringify(c)
            )
          k = C(g, 2)
          l = C(h, 2)
          if (null != k && null != l && k > l)
            throw Error(
              "Invalid GPT size: minimum height larger than maximum height: " +
                JSON.stringify(c)
            )
        }
      }
      f.length ||
        Eg("Invalid GPT fixed size specification: " + JSON.stringify(c))
      h && g
        ? ((c = new Wj()), (c = Ve(c, 1, h)), (g = Ve(c, 2, g)))
        : (g = null)
      We(e, 5, f)
      null !== g && Ve(e, 16, g)
      f = ko.C()
      ;(g = C(e, 2)) && !f.l.hasOwnProperty(g) && (f.l[g] = e)
      return { slot: new Vo(a, b, d), aa: e }
    }
  oc(op)
  Ap = P(74, Ap)
  Bp = P(75, Bp)
  Cp = P(73, Cp)
  var Dp = P(95, function(a) {
    var b = fl.C()
    var c = null
    var d = ""
    if ("string" === typeof a) {
      d = a
      var e = wp(op.C(), d)
    } else _.sc(a) && 1 == a.nodeType ? ((c = a), (d = c.id), (e = wp(op.C(), d))) : (e = wj(a, Vo))
    if (e) {
      if (((a = ko.C().j), (d = mo(ko.C(), e.getSlotElementId()))))
        if (((a = Fk(a, lo())), !e.Zb))
          if (((e.ec = c), ja(e) || ok(ck(d))))
            for (
              e.Zb = !0, b = _.F(C(d, 4)), c = b.next();
              !c.done;
              c = b.next()
            )
              (c = xj(c.value)), (c = wj(c, Po)), c.j && c.Ub(a, e)
          else b.J(Bl(String(d.getAdUnitPath()), String(C(d, 2))), null, e)
    } else d ? b.error(Dl(String(d))) : b.error(Cl(String(a)))
  })
  var id = new cd(ad, "https://tpc.googlesyndication.com/sodar/%{basename}.js")
  var Fa = function(a) {
    return new t.Promise(function(b, c) {
      var d = new XMLHttpRequest()
      d.onreadystatechange = function() {
        d.readyState === d.DONE &&
          (200 <= d.status && 300 > d.status
            ? b(JSON.parse(d.responseText))
            : c())
      }
      d.open("GET", a, !0)
      d.send()
    })
  }
  var Ep = function(a) {
      this.j = a.j
      this.l = a.l
      this.v = a.v
      this.mb = a.mb
      this.N = a.N
      this.$a = a.$a
    },
    Fp = function(a, b) {
      this.j = a
      this.l = b
      this.v = "pt"
      this.N = window
      this.$a = "env"
    }
  var Hp = function(a) {
    M(this, a, Gp, null)
  }
  I(Hp, L)
  var Ip = function(a) {
    M(this, a, null, null)
  }
  I(Ip, L)
  var Gp = [1, 2],
    Jp = function(a) {
      var b = new of().getTime()
      return D(a, 3, b)
    }
  var Li,
    Kp,
    Lp = Kh(),
    Ki = new Ei(1, Lp),
    Mp
  Mp = void 0 === Mp ? cf : Mp
  Li = new _.ti("http:" === Mp.location.protocol ? "http:" : "https:", 0.01)
  "number" !== typeof Lp.google_srt && (Lp.google_srt = Math.random())
  var Np = Li,
    Op = Lp.google_srt
  0 <= Op && 1 >= Op && (Np.j = Op)
  Kp = new _.Mi()
  Kp.yc(function(a) {
    var b = cf.jerExpIds
    if (Array.isArray(b) && 0 !== b.length) {
      var c = a.eid
      c
        ? ((b = _.Pb(c.split(",")).concat(_.Pb(b))),
          wa(b),
          (a.eid = b.join(",")))
        : (a.eid = b.join(","))
    }
    ;(b = cf.jerUserAgent) && (a.useragent = b)
  })
  Kp.zc(!0)
  "complete" == Lp.document.readyState
    ? Lp.google_measure_js_timing || Gi(Ki)
    : Ki.j &&
      _.v(Lp, "load", function() {
        Lp.google_measure_js_timing || Gi(Ki)
      })
  var Pp = navigator,
    Qp = function() {
      try {
        return Pp.javaEnabled()
      } catch (a) {
        return !1
      }
    },
    Rp = function(a) {
      var b = 1,
        c
      if (void 0 != a && "" != a)
        for (b = 0, c = a.length - 1; 0 <= c; c--) {
          var d = a.charCodeAt(c)
          b = ((b << 6) & 268435455) + d + (d << 14)
          d = b & 266338304
          b = 0 != d ? b ^ (d >> 21) : b
        }
      return b
    },
    Sp = function(a, b) {
      if (!a || "none" == a) return 1
      a = String(a)
      "auto" == a &&
        ((a = b), "www." == a.substring(0, 4) && (a = a.substring(4, a.length)))
      return Rp(a.toLowerCase())
    },
    Tp = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
    Up = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
    Wp = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/
  var Xp = function(a, b) {
    if (!(window && Math.random && navigator)) return -1
    if (window.__google_ad_urls) {
      var c = window.__google_ad_urls
      try {
        if (c && c.getOseId()) return c.getOseId()
      } catch (e) {}
    }
    if (!window.__google_ad_urls_id) {
      c = window.google_enable_ose
      if (!0 === c) var d = 2
      else
        !1 !== c &&
          ((d = Xf([0], a)), null == d && ((d = Xf([2], b)) || (d = 3)))
      if (!d) return 0
      window.__google_ad_urls_id = d
    }
    return window.__google_ad_urls_id
  }
  var Yp = function() {}
  _.p = Yp.prototype
  _.p.getNewBlocks = function() {}
  _.p.setupOse = function() {}
  _.p.getOseId = function() {
    return -1
  }
  _.p.getCorrelator = function() {
    return ""
  }
  _.p.numBlocks = function() {
    return 0
  }
  _.p.registerAdBlock = function() {}
  _.p.unloadAdBlock = function() {}
  _.p.setLoadOsdJsOnPubWindow = function() {}
  var Zp = new Ei(1, Kh()),
    $p = function() {
      var a = Kh()
      a &&
        "undefined" != typeof a.google_measure_js_timing &&
        (a.google_measure_js_timing || Gi(Zp))
    }
  ;(function() {
    var a = Kh()
    a &&
      a.document &&
      ("complete" == a.document.readyState
        ? $p()
        : Zp.j &&
          _.v(a, "load", function() {
            $p()
          }))
  })()
  Date.now()
  var aq = function(a, b, c) {
      a && (c ? _.v(a, "load", b) : _.kb(a, "load", b))
    },
    bq = function() {
      var a = (Kh() || _.q).google_osd_amcb
      return "function" === typeof a ? a : null
    },
    cq = function(a) {
      return (
        "https://www.googletagservices.com/activeview/js/current/osd.js?cb=" +
        encodeURIComponent(void 0 === a ? "/r20100101" : a)
      )
    }
  var dq = function(a, b) {
      this.l = b && b.l ? b.l : 0
      this.o = b ? b.o : ""
      this.j = b && b.j ? b.j : []
      this.v = !0
      if (b) for (a = 0; a < this.j.length; ++a) this.j[a].o = !0
    },
    fq = function(a) {
      var b = a.v ? Kh() : _.q
      a = eq
      b = b || _.q
      b.google_osd_loaded
        ? (a = !1)
        : (Uf(b.document, a), (a = b.google_osd_loaded = !0))
      a && Lh()
    }
  _.p = dq.prototype
  _.p.getNewBlocks = function(a, b) {
    for (var c = this.j.length, d = 0; d < c; d++) {
      var e = this.j[d]
      !e.v &&
        e.j &&
        ((e.v = !0), a(e.j, e.A, e.G, e.l, void 0, e.o, e.B, e.T, e.D))
    }
    b && ((Kh() || _.q).google_osd_amcb = a)
  }
  _.p.setupOse = function(a) {
    if (this.getOseId()) return this.getOseId()
    var b = Xp(gq, hq)
    if (!b) return 0
    this.l = b
    this.o = String(a || 0)
    return this.getOseId()
  }
  _.p.getOseId = function() {
    return window && Math.random && navigator ? this.l : -1
  }
  _.p.getCorrelator = function() {
    return this.o
  }
  _.p.numBlocks = function() {
    return this.j.length
  }
  _.p.registerAdBlock = function(a, b, c, d, e, f, g) {
    g =
      void 0 === g
        ? function() {
            return null
          }
        : g
    c = bq()
    e = _.xi() || -1
    f = _.q.pageYOffset
    0 <= f || (f = -1)
    c && d
      ? c(d, a, b, !1, void 0, !1, g, e, f)
      : ((g = new iq(a, b, d, g, e, f)),
        this.j.push(g),
        aq(d, g.m, !0),
        eq ||
          (sh(
            _.q,
            "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" +
              b +
              ("&req=" + a)
          ),
          (eq = cq("/r20100101"))),
        fq(this))
  }
  _.p.unloadAdBlock = function(a, b, c) {
    c = void 0 === c ? !1 : c
    b = this.v ? Kh() : window
    void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a)
    c &&
      (c = Fg(this.j, function(d) {
        return d.j == a
      })) &&
      aq(a, c.m, !1)
  }
  _.p.setLoadOsdJsOnPubWindow = function(a) {
    this.v = a
  }
  var jq = function() {
      var a = Kh(),
        b = a.__google_ad_urls
      if (!b) return (a.__google_ad_urls = new dq(a))
      try {
        if (0 <= b.getOseId()) return b
      } catch (c) {}
      try {
        return (a.__google_ad_urls = new dq(a, b))
      } catch (c) {
        return (a.__google_ad_urls = new dq(a))
      }
    },
    eq = "",
    hq = 0,
    gq = 0,
    iq = function(a, b, c, d, e, f) {
      var g = this
      d = void 0 === d ? _.nc : d
      this.A = a
      this.G = b
      this.j = c
      this.o = this.v = this.l = !1
      this.B = d
      this.T = void 0 === e ? -1 : e
      this.D = void 0 === f ? -1 : f
      this.m = function() {
        return (g.l = !0)
      }
    }
  ic("Goog_AdSense_getAdAdapterInstance", jq)
  ic("Goog_AdSense_OsdAdapter", dq)
  var kq = ["auto", "inherit", "100%"],
    lq = kq.concat(["none"]),
    mq = function(a, b, c, d, e, f) {
      e = void 0 === e ? 10 : e
      f = void 0 === f ? 10 : f
      b = b.styleSheets
      if (!b) return !1
      var g =
        a.matches ||
        a.webkitMatchesSelector ||
        a.mozMatchesSelector ||
        a.msMatchesSelector ||
        a.oMatchesSelector
      e = -1 == e ? Infinity : e
      f = -1 == f ? Infinity : f
      for (var h = 0; h < Math.min(b.length, e); ++h) {
        var k = void 0
        try {
          var l = b[h],
            m = null
          try {
            m = l.cssRules || l.rules
          } catch (U) {
            if (15 == U.code) throw ((U.styleSheet = l), U)
          }
          k = m
        } catch (U) {
          continue
        }
        if (k && 0 < k.length)
          for (m = 0; m < Math.min(k.length, f); ++m) {
            var n = k[m],
              u
            if ((u = 1 == n.type)) {
              u = n
              var z = c
              u = g.call(a, u.selectorText) && z(u)
            }
            if (!u && (u = d && 4 == n.type))
              a: {
                u = a
                z = c
                for (
                  var y = f, G = 0;
                  G < Math.min(n.cssRules.length, y);
                  G++
                ) {
                  var S = n.cssRules[G],
                    K = z
                  if (g.call(u, S.selectorText) && K(S)) {
                    u = !0
                    break a
                  }
                }
                u = !1
              }
            if (u) return !0
          }
      }
      return !1
    },
    oq = function(a, b, c) {
      var d = void 0 === d ? 10 : d
      var e = void 0 === e ? 10 : e
      if (!a) return !0
      var f = !0
      yg(
        a,
        function(g) {
          return (f = nq(g, b, !1, d, e))
        },
        void 0 === c ? 100 : c
      )
      return f
    },
    nq = function(a, b, c, d, e) {
      var f = a.style
      return (f && f.height && !_.Hc(kq, f.height)) ||
        (f && f.maxHeight && !_.Hc(lq, f.maxHeight)) ||
        mq(
          a,
          b.document,
          function(g) {
            var h = g.style.height
            g = g.style["max-height"]
            return (h && !_.Hc(kq, h)) || (g && !_.Hc(lq, g))
          },
          c,
          d,
          e
        )
        ? !1
        : !0
    }
  var La = {}
  var pq = function() {},
    qq = function(a, b) {
      Ma(b)
      this.j = a
    }
  _.H(qq, pq)
  qq.prototype.toString = function() {
    return this.j
  }
  var rq = function() {},
    sq = function(a, b) {
      Ma(b)
      this.j = a
    }
  _.H(sq, rq)
  sq.prototype.toString = function() {
    return this.j
  }
  var tq = function() {},
    uq = function(a, b) {
      Ma(b)
      this.j = a
    }
  _.H(uq, tq)
  uq.prototype.toString = function() {
    return this.j
  }
  new sq("about:blank", La)
  new sq("about:invalid#zTSz", La)
  new uq("about:blank", La)
  var vq = void 0,
    wq = function(a, b) {
      if (!(b instanceof qq)) throw Error("wrong type")
      a.textContent = b.j
      ;(b = a.ownerDocument && a.ownerDocument.defaultView) && b !== window
        ? (b = Na(b.document))
        : (void 0 === vq && (vq = Na(document)), (b = vq))
      b && a.setAttribute("nonce", b)
    }
  var xq = function(a) {
      a = void 0 === a ? window : a
      return a._gmptnl
        ? "afma-gpt-sdk-a"
        : a.webkit &&
          a.webkit.messageHandlers &&
          a.webkit.messageHandlers._gmptnl
        ? "afma-gpt-sdk-i"
        : null
    },
    yq = function(a, b) {
      b = void 0 === b ? window : b
      var c = xq(b)
      if (!c) return null
      var d = null
      try {
        "afma-gpt-sdk-a" == c
          ? (d = b._gmptnl.pm("GAM=", a) || "5")
          : ((d = b.__gmptnl_n || "5"),
            b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
      } catch (e) {
        return "3"
      }
      return "string" === typeof d ? d : "3"
    }
  var zq = function() {
    this.l = []
    this.j = -1
  }
  zq.prototype.set = function(a, b) {
    b = void 0 === b ? !0 : b
    0 <= a &&
      52 > a &&
      0 === a % 1 &&
      this.l[a] != b &&
      ((this.l[a] = b), (this.j = -1))
  }
  zq.prototype.get = function(a) {
    return !!this.l[a]
  }
  var Aq = function(a) {
    ;-1 == a.j &&
      (a.j = Dc(a.l, function(b, c, d) {
        return c ? b + Math.pow(2, d) : b
      }))
    return a.j
  }
  var Bq = 0
  var Cq = function() {
    this.j = function() {}
  }
  oc(Cq)
  var Dq = function() {
    var a = jp.C()
    Cq.C().j(a)
  }
  var Eq = function() {
    var a = void 0,
      b = 2
    if (void 0 === a) {
      var c = void 0 === c ? _.q : c
      a = c.ggeac || (c.ggeac = {})
    }
    b = void 0 === b ? 0 : b
    c = a
    var d = b
    d = void 0 === d ? 0 : d
    aj($i.C(), c, d)
    c = a
    b = void 0 === b ? 0 : b
    dj(cj.C(), c, b)
    Cq.C().j = Zi(Yi, a)
    cj.C().j()
  }
  var Fq = function() {
      this.j = window
      this.l = 0
    },
    Gq = function(a, b, c) {
      var d = {
        oc: C(b, 2) - a.j.Date.now() / 1e3,
        path: C(b, 3),
        domain: C(b, 4),
        nd: !1,
      }
      b = C(b, 1)
      a = a.j.document
      a = void 0 === a ? document : a
      w(c, 5) && new Qa(a).set("__gads", b, d)
    }
  var Hq = na(function() {
      return !(ne || oe || me) && (ze || _.ie || he)
    }),
    Iq = function(a, b, c, d, e) {
      d = void 0 === d ? "" : d
      var f = a.createElement("link")
      try {
        ;(f.rel = c),
          (f.href =
            -1 != c.toLowerCase().indexOf("stylesheet")
              ? hd(b).toString()
              : b instanceof gd
              ? hd(b).toString()
              : b instanceof _.Ad
              ? _.Bd(b)
              : _.Bd(_.Dd(b)))
      } catch (g) {
        return null
      }
      d && "preload" == c && (f.as = d)
      e && f.setAttribute("nonce", e)
      a = a.getElementsByTagName("head")[0]
      if (!a) return null
      try {
        a.appendChild(f)
      } catch (g) {}
      return f
    }
  var Jq = /^\.google\.(com?\.)?[a-z]{2,3}$/,
    Kq = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
    Lq = _.q,
    Nq = function(a) {
      a = "https://adservice" + (a + "/adsid/integrator.js")
      var b = ["domain=" + encodeURIComponent(_.q.location.hostname)]
      Mq[3] >= Ac() && b.push("adsid=" + encodeURIComponent(Mq[1]))
      return a + "?" + b.join("&")
    },
    Mq,
    Oq,
    Pq = function() {
      Lq = _.q
      Mq = Lq.googleToken = Lq.googleToken || {}
      var a = Ac()
      ;(Mq[1] && Mq[3] > a && 0 < Mq[2]) ||
        ((Mq[1] = ""), (Mq[2] = -1), (Mq[3] = -1), (Mq[4] = ""), (Mq[6] = ""))
      Oq = Lq.googleIMState = Lq.googleIMState || {}
      a = Oq[1]
      ;(Jq.test(a) && !Kq.test(a)) || (Oq[1] = ".google.com")
      Array.isArray(Oq[5]) || (Oq[5] = [])
      "boolean" !== typeof Oq[6] && (Oq[6] = !1)
      Array.isArray(Oq[7]) || (Oq[7] = [])
      "number" !== typeof Oq[8] && (Oq[8] = 0)
    },
    Qq = {
      Ib: function() {
        return 0 < Oq[8]
      },
      ed: function() {
        Oq[8]++
      },
      fd: function() {
        0 < Oq[8] && Oq[8]--
      },
      gd: function() {
        Oq[8] = 0
      },
      te: function() {
        return !1
      },
      ic: function() {
        return Oq[5]
      },
      bc: function(a) {
        try {
          a()
        } catch (b) {
          _.q.setTimeout(function() {
            throw b
          }, 0)
        }
      },
      vc: function() {
        if (!Qq.Ib()) {
          var a = _.q.document,
            b = function(e) {
              e = Nq(e)
              a: {
                try {
                  var f = lc()
                  break a
                } catch (g) {}
                f = void 0
              }
              Iq(a, e, "preload", "script", f)
              f = a.createElement("script")
              f.type = "text/javascript"
              f.onerror = function() {
                return _.q.processGoogleToken({}, 2)
              }
              e = Lf(e)
              Aa(f, e)
              try {
                ;(a.head || a.body || a.documentElement).appendChild(f), Qq.ed()
              } catch (g) {}
            },
            c = Oq[1]
          b(c)
          ".google.com" != c && b(".google.com")
          b = {}
          var d = ((b.newToken = "FBT"), b)
          _.q.setTimeout(function() {
            return _.q.processGoogleToken(d, 1)
          }, 1e3)
        }
      },
    },
    Rq = function(a) {
      Pq()
      var b = Lq.googleToken[5] || 0
      a && (0 != b || Mq[3] >= Ac() ? Qq.bc(a) : (Qq.ic().push(a), Qq.vc()))
      ;(Mq[3] >= Ac() && Mq[2] >= Ac()) || Qq.vc()
    },
    Sq = function(a) {
      _.q.processGoogleToken =
        _.q.processGoogleToken ||
        function(b, c) {
          var d = b
          d = void 0 === d ? {} : d
          c = void 0 === c ? 0 : c
          b = d.newToken || ""
          var e = "NT" == b,
            f = parseInt(d.freshLifetimeSecs || "", 10),
            g = parseInt(d.validLifetimeSecs || "", 10),
            h = d["1p_jar"] || ""
          d = d.pucrd || ""
          Pq()
          1 == c ? Qq.gd() : Qq.fd()
          var k = (Lq.googleToken = Lq.googleToken || {}),
            l =
              0 == c &&
              b &&
              "string" === typeof b &&
              !e &&
              "number" === typeof f &&
              0 < f &&
              "number" === typeof g &&
              0 < g &&
              "string" === typeof h
          e = e && !Qq.Ib() && (!(Mq[3] >= Ac()) || "NT" == Mq[1])
          var m = !(Mq[3] >= Ac()) && 0 != c
          if (l || e || m)
            (e = Ac()),
              (f = e + 1e3 * f),
              (g = e + 1e3 * g),
              1e-5 > Math.random() &&
                sh(
                  _.q,
                  "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
                    c
                ),
              (k[5] = c),
              (k[1] = b),
              (k[2] = f),
              (k[3] = g),
              (k[4] = h),
              (k[6] = d),
              Pq()
          if (l || !Qq.Ib()) {
            c = Qq.ic()
            for (b = 0; b < c.length; b++) Qq.bc(c[b])
            c.length = 0
          }
        }
      Rq(a)
    }
  var Tq = function(a, b, c, d, e, f) {
    _.N.call(this)
    this.m = a
    this.status = 1
    this.l = b
    this.A = c
    this.K = d
    this.lb = !!e
    this.o = Math.random()
    this.B = {}
    this.j = null
    this.D = (0, _.yc)(this.I, this)
    this.G = f
  }
  _.H(Tq, _.N)
  Tq.prototype.I = function(a) {
    if (a.origin === this.A && (this.lb || a.source == this.l)) {
      var b = null
      try {
        b = JSON.parse(a.data)
      } catch (c) {}
      if (_.sc(b) && ((a = b.i), b.c === this.m && a != this.o)) {
        if (2 !== this.status)
          try {
            ;(this.status = 2), Uq(this), this.j && (this.j(), (this.j = null))
          } catch (c) {}
        a = b.s
        b = b.p
        if (
          "string" === typeof a &&
          ("string" === typeof b || _.sc(b)) &&
          this.B.hasOwnProperty(a)
        )
          this.B[a](b)
      }
    }
  }
  var Uq = function(a) {
    var b = {}
    b.c = a.m
    b.i = a.o
    a.G && (b.e = a.G)
    a.l.postMessage(JSON.stringify(b), a.A)
  }
  Tq.prototype.H = function() {
    if (1 === this.status) {
      try {
        this.l.postMessage && Uq(this)
      } catch (a) {}
      window.setTimeout((0, _.yc)(this.H, this), 50)
    }
  }
  Tq.prototype.connect = function(a) {
    a && (this.j = a)
    _.v(window, "message", this.D)
    this.K && this.H()
  }
  var Vq = function(a, b, c) {
      a.B[b] = c
    },
    Wq = function(a, b, c) {
      var d = {}
      d.c = a.m
      d.i = a.o
      d.s = b
      d.p = c
      try {
        a.l.postMessage(JSON.stringify(d), a.A)
      } catch (e) {}
    }
  Tq.prototype.v = function() {
    this.status = 3
    _.kb(window, "message", this.D)
    _.N.prototype.v.call(this)
  }
  var Xq = function() {
      this.j = []
      this.l = []
      this.v = []
    },
    Yq = function(a, b) {
      a.l.push(b)
    }
  var Zq = function() {
    var a = this
    this.j = new t.Promise(function(b, c) {
      a.resolve = b
      a.reject = c
    })
  }
  var $q = function(a) {
    a = Error.call(this, a)
    this.message = a.message
    "stack" in a && (this.stack = a.stack)
    _.B(Object, "setPrototypeOf").call(Object, this, $q.prototype)
    this.name = "InputError"
  }
  _.H($q, Error)
  var ar = function() {
      this.v = new Zq()
    },
    br = function() {
      ar.apply(this, arguments)
    }
  _.H(br, ar)
  var T = function(a, b) {
      a.l || ((a.j = b), a.v.resolve(b))
    },
    cr = function(a) {
      a.l || ((a.j = null), a.v.resolve(null))
    }
  Kb.Object.defineProperties(br.prototype, {
    m: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.v.j
      },
    },
    l: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return !!this.o || void 0 !== this.j
      },
    },
  })
  var dr = function(a) {
    this.v = new Zq()
    this.l = a
  }
  _.H(dr, ar)
  Kb.Object.defineProperties(dr.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.l.j
      },
    },
    error: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.l.o
      },
    },
  })
  var er = function() {
    dr.apply(this, arguments)
  }
  _.H(er, dr)
  Kb.Object.defineProperties(er.prototype, {
    value: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.l.j
      },
    },
  })
  var fr = function() {
    br.apply(this, arguments)
  }
  _.H(fr, br)
  fr.prototype.notify = function() {
    cr(this)
  }
  var gr = function() {
    _.N.call(this)
    var a = this
    this.o = new Xq()
    this.K = !1
    _.O(this, function() {
      var b = a.o
      b.j.length = 0
      b.v.length = 0
      b.l.length = 0
    })
  }
  _.H(gr, _.N)
  gr.prototype.start = function() {
    return Ca(this, function b() {
      var c = this,
        d,
        e
      return Da(b, function(f) {
        switch (f.j) {
          case 1:
            if (c.K) return f.return()
            c.K = !0
            d = c.o.l.map(function(g) {
              return g.m
            })
            f.A = 2
            return Ea(f, t.Promise.all(d), 4)
          case 4:
            if (c.ma) {
              f.j = 5
              break
            }
            hr(c)
            return Ea(f, c.j(), 5)
          case 5:
            Ga(f, 0)
            break
          case 2:
            e = Ha(f)
            if (c.ma) return f.return()
            e instanceof $q ||
              (ir(c, e), c.o.j.length && jr(c, new $q(e.message)))
            f.j = 0
        }
      })
    })
  }
  gr.prototype.l = function() {
    var a = new br()
    this.o.j.push(a)
    return a
  }
  var kr = function(a) {
      var b = new fr()
      a.o.j.push(b)
      return b
    },
    V = function(a, b) {
      Yq(a.o, b)
      b = new er(b)
      a.o.v.push(b)
      return b
    },
    W = function(a, b) {
      Yq(a.o, b)
      return new dr(b)
    },
    hr = function(a) {
      for (var b = 0, c = _.F(a.o.v), d = c.next(); !d.done; d = c.next()) {
        if (null == d.value.l.j)
          throw Error("missing input: " + a.id() + "/" + b)
        ++b
      }
    },
    jr = function(a, b) {
      a = _.F(a.o.j)
      for (var c = a.next(); !c.done; c = a.next())
        if (((c = c.value), !c.l)) {
          var d = b
          c.o = d
          c.v.reject(d)
        }
    }
  var qb = function() {
    _.N.apply(this, arguments)
    this.j = []
  }
  _.H(qb, _.N)
  var rb = function(a, b) {
      b = _.F(b)
      for (var c = b.next(); !c.done; c = b.next())
        (c = c.value), _.Wg(a, c), a.j.push(c)
    },
    X = function(a, b) {
      rb(a, [b])
    },
    sb = function(a) {
      if (a.j.length) {
        a = _.F(a.j)
        for (var b = a.next(); !b.done; b = a.next()) b.value.start()
      }
    }
  qb.prototype.v = function() {
    _.N.prototype.v.call(this)
    this.j.length = 0
  }
  var lr = function() {
      this.j = []
    },
    nr = function(a, b, c, d, e) {
      a.j.push(new mr(b, c, d, e))
    },
    or = function(a, b, c, d) {
      nr(a, b, c, d + "px", void 0)
    },
    pr = function(a) {
      for (var b = a.j.length - 1; 0 <= b; b--) {
        var c = a.j[b]
        c.l
          ? (c.v.style.removeProperty(c.j),
            c.v.style.setProperty(c.j, String(c.o), c.m))
          : (c.v.style[c.j] = c.o)
      }
      a.j.length = 0
    },
    mr = function(a, b, c, d) {
      this.v = a
      this.j = (this.l = !(
        void 0 === d ||
        !a.style ||
        !a.style.getPropertyPriority
      ))
        ? String(b)
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase()
        : b
      this.o = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j]
      this.m = this.l ? a.style.getPropertyPriority(this.j) : void 0
      this.l
        ? (a.style.removeProperty(this.j),
          a.style.setProperty(this.j, String(c), d))
        : (a.style[this.j] = String(c))
    }
  var qr = function(a, b) {
    if (!a) return a
    var c = a.toLowerCase()
    return -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html")
      ? a
      : "<html><head>" +
          (void 0 === b ? "" : b) +
          "</head><body>" +
          a +
          "</body></html>"
  }
  var rr, sr
  rr = { overflow: "hidden", position: "fixed" }
  _.tr = function(a, b) {
    if (!a.body) return null
    var c = new sr()
    c.apply(a, b)
    return function() {
      _.wh(a.body, {
        filter: c.j,
        webkitFilter: c.j,
        overflow: c.v,
        position: c.o,
        top: c.m,
      })
      b.scrollTo(0, c.l)
    }
  }
  sr = function() {
    this.j = this.m = this.o = this.v = null
    this.l = 0
  }
  sr.prototype.apply = function(a, b) {
    this.v = a.body.style.overflow
    this.o = a.body.style.position
    this.m = a.body.style.top
    this.j = a.body.style.filter
      ? a.body.style.filter
      : a.body.style.webkitFilter
    this.l = _.Ln(b)
    _.wh(a.body, "top", -this.l + "px")
    _.wh(a.body, rr)
  }
  _.ur = function() {
    this.j = null
  }
  oc(_.ur)
  var vr = function(a, b) {
    b = void 0 === b ? 500 : b
    _.N.call(this)
    this.l = a
    this.j = null
    this.m = {}
    this.A = 0
    this.B = b
    this.o = null
  }
  _.H(vr, _.N)
  vr.prototype.v = function() {
    this.m = {}
    this.o && (_.kb(this.l, "message", this.o), delete this.o)
    delete this.m
    delete this.l
    delete this.j
    _.N.prototype.v.call(this)
  }
  var xr = function(a) {
      return "function" === typeof a.l.__uspapi || null != wr(a)
    },
    zr = function(a, b) {
      var c = {}
      if (xr(a)) {
        var d = Tc(function() {
          return b(c)
        })
        yr(a, function(e, f) {
          f && (c = e)
          d()
        })
        setTimeout(d, a.B)
      } else b(c)
    },
    yr = function(a, b) {
      if ("function" === typeof a.l.__uspapi)
        (a = a.l.__uspapi), a("getUSPData", 1, b)
      else if (wr(a)) {
        Ar(a)
        var c = ++a.A
        a.m[c] = b
        a.j &&
          ((b = {}),
          a.j.postMessage(
            ((b.__uspapiCall = {
              command: "getUSPData",
              version: 1,
              callId: c,
            }),
            b),
            "*"
          ))
      }
    },
    wr = function(a) {
      if (a.j) return a.j
      a.j = pg(a.l, "__uspapiLocator")
      return a.j
    },
    Ar = function(a) {
      a.o ||
        ((a.o = function(b) {
          try {
            var c
            "string" === typeof b.data ? (c = JSON.parse(b.data)) : (c = b.data)
            var d = c.__uspapiReturn
            a.m[d.callId](d.returnValue, d.success)
          } catch (e) {}
        }),
        _.v(a.l, "message", a.o))
    }
  var Br = function(a) {
    M(this, a, null, null)
  }
  I(Br, L)
  var Dr = function(a) {
    M(this, a, Cr, null)
  }
  I(Dr, L)
  var Cr = [1, 2]
  var Er = function(a) {
    M(this, a, null, null)
  }
  I(Er, L)
  var Fr = function(a) {
    M(this, a, null, null)
  }
  I(Fr, L)
  var Gr = function(a) {
    _.N.call(this)
    this.l = a
    this.o = this.j = null
    this.m = {}
    this.A = 0
    this.j ||
      (this.l.googlefc
        ? (this.j = this.l)
        : (this.j = pg(this.l, "googlefcPresent")))
  }
  _.H(Gr, _.N)
  var Ir = function(a, b) {
      return new t.Promise(function(c) {
        if (a.j)
          if (a.j === a.l) {
            var d = a.l.googlefc || {}
            d.__fci = d.__fci || []
            d.__fci.push(b, c)
          } else
            Hr(a),
              (d = a.A++),
              (a.m[d] = c),
              (c = {}),
              a.j.postMessage(
                ((c.__fciCall = { command: b, callId: d }), c),
                "*"
              )
      })
    },
    Hr = function(a) {
      a.o ||
        ((a.o = function(b) {
          try {
            var c = new Fr(JSON.parse(b.data.__fciReturn))
            ;(0, a.m[C(c, 1)])(c)
          } catch (d) {}
        }),
        _.v(a.l, "message", a.o))
    },
    Jr = function(a, b, c, d) {
      if (!b) return t.Promise.resolve(null)
      var e = Se(b, Br, 3)
      b = Se(b, Er, 2)
      return e && b && 1 === C(b, 1) && 2 === C(e, 1)
        ? Ir(a, "getM25Consent").then(function(f) {
            var g = Se(f, Dr, 4)
            if (g) {
              if (((f = d), c)) {
                var h = C(g, 1)
                h && _.B(h, "includes").call(h, c) && (f = !1)
                ;(g = C(g, 2)) && _.B(g, "includes").call(g, c) && (f = !0)
              }
            } else f = null
            return f
          })
        : t.Promise.resolve(null)
    }
  var Kr = function(a) {
      return !1 === a.gdprApplies ||
        "error" === a.cmpStatus ||
        ("loaded" === a.cmpStatus &&
          ("tcloaded" === a.eventStatus ||
            "useractioncomplete" === a.eventStatus))
        ? !0
        : !1
    },
    Lr = function(a, b) {
      b = void 0 === b ? 500 : b
      _.N.call(this)
      this.l = a
      this.j = null
      this.m = {}
      this.A = 0
      this.B = b
      this.o = null
    }
  _.H(Lr, _.N)
  Lr.prototype.v = function() {
    this.m = {}
    this.o && (_.kb(this.l, "message", this.o), delete this.o)
    delete this.m
    delete this.l
    delete this.j
    _.N.prototype.v.call(this)
  }
  var Nr = function(a) {
      return "function" === typeof a.l.__tcfapi || null != Mr(a)
    },
    Pr = function(a, b) {
      var c = { internalErrorState: 0 },
        d = Tc(function() {
          return b(c)
        }),
        e = setTimeout(function() {
          c.tcString = "tcunavailable"
          c.internalErrorState = 1
          d()
        }, a.B)
      Or(a, "addEventListener", function(f, g) {
        e && (clearTimeout(e), (e = 0))
        g && (c = f)
        c.internalErrorState =
          (void 0 !== c.tcString && "string" !== typeof c.tcString) ||
          (void 0 !== c.gdprApplies && "boolean" !== typeof c.gdprApplies) ||
          (void 0 !== c.listenerId && "number" !== typeof c.listenerId) ||
          (void 0 !== c.addtlConsent && "string" !== typeof c.addtlConsent)
            ? 2
            : c.cmpStatus && "error" !== c.cmpStatus
            ? 0
            : 3
        0 != c.internalErrorState && (c.tcString = "tcunavailable")
        if (0 != c.internalErrorState || Kr(c))
          Or(a, "removeEventListener", null, c.listenerId), d()
      })
    },
    Or = function(a, b, c, d) {
      c || (c = function() {})
      if ("function" === typeof a.l.__tcfapi) (a = a.l.__tcfapi), a(b, 2, c, d)
      else if (Mr(a)) {
        Qr(a)
        var e = ++a.A
        a.m[e] = c
        a.j &&
          ((c = {}),
          a.j.postMessage(
            ((c.__tcfapiCall = {
              command: b,
              version: 2,
              callId: e,
              parameter: d,
            }),
            c),
            "*"
          ))
      } else c({}, !1)
    },
    Mr = function(a) {
      if (a.j) return a.j
      a.j = pg(a.l, "__tcfapiLocator")
      return a.j
    },
    Qr = function(a) {
      a.o ||
        ((a.o = function(b) {
          try {
            var c
            "string" === typeof b.data ? (c = JSON.parse(b.data)) : (c = b.data)
            var d = c.__tcfapiReturn
            a.m[d.callId](d.returnValue, d.success)
          } catch (e) {}
        }),
        _.v(a.l, "message", a.o))
    }
  var Rr = new cd(ad, "gpt/pubads_impl_"),
    Sr = new cd(ad, "https://securepubads.g.doubleclick.net/")
  var Tr = function(a, b, c, d, e, f) {
      this.v = dh(a)
      this.l = dh(b)
      this.o = c
      this.j = dh(d)
      this.m = e
      this.A = f
    },
    Ur = function(a) {
      return JSON.stringify({
        windowCoords_t: a.v.top,
        windowCoords_r: a.v.right,
        windowCoords_b: a.v.bottom,
        windowCoords_l: a.v.left,
        frameCoords_t: a.l.top,
        frameCoords_r: a.l.right,
        frameCoords_b: a.l.bottom,
        frameCoords_l: a.l.left,
        styleZIndex: a.o,
        allowedExpansion_t: a.j.top,
        allowedExpansion_r: a.j.right,
        allowedExpansion_b: a.j.bottom,
        allowedExpansion_l: a.j.left,
        xInView: a.m,
        yInView: a.A,
      })
    },
    Vr = function(a, b) {
      var c = window,
        d = c.screenX || c.screenLeft || 0,
        e = c.screenY || c.screenTop || 0
      c = new ch(
        e,
        d + (c.outerWidth || document.documentElement.clientWidth || 0),
        e + (c.outerHeight || document.documentElement.clientHeight || 0),
        d
      )
      var f = Ch(a)
      d = _.Fh(_.Gh, a)
      var g = new eh(f.x, f.y, d.width, d.height)
      d = fh(g)
      e = String(zh(a, "zIndex"))
      var h = new ch(0, Infinity, Infinity, 0)
      for (
        var k = vf(a), l = k.j.body, m = k.j.documentElement, n = Af(k.j);
        (a = Bh(a));

      )
        if (
          !(
            (fe && 0 == a.clientWidth) ||
            (je && 0 == a.clientHeight && a == l)
          ) &&
          a != l &&
          a != m &&
          "visible" != zh(a, "overflow")
        ) {
          var u = Ch(a),
            z = new _.ra(a.clientLeft, a.clientTop)
          u.x += z.x
          u.y += z.y
          h.top = Math.max(h.top, u.y)
          h.right = Math.min(h.right, u.x + a.clientWidth)
          h.bottom = Math.min(h.bottom, u.y + a.clientHeight)
          h.left = Math.max(h.left, u.x)
        }
      a = n.scrollLeft
      n = n.scrollTop
      h.left = Math.max(h.left, a)
      h.top = Math.max(h.top, n)
      k = _.zf(Bf(k.j) || window)
      h.right = Math.min(h.right, a + k.width)
      h.bottom = Math.min(h.bottom, n + k.height)
      h = (h =
        0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left
          ? h
          : null)
        ? new eh(h.left, h.top, h.right - h.left, h.bottom - h.top)
        : null
      b
        ? ((k = b.boundingClientRect),
          (b = new eh(
            f.x - k.left,
            f.y - k.top,
            b.rootBounds.width,
            b.rootBounds.height
          )))
        : (b = h)
      k = h ? gh(g, h) : null
      h = f = 0
      k &&
        !new _.sf(k.width, k.height).isEmpty() &&
        ((f = k.width / g.width), (h = k.height / g.height))
      k = new ch(0, 0, 0, 0)
      if ((a = b))
        (g = gh(g, b))
          ? ((n = fh(b)),
            (l = fh(g)),
            (a = l.right != n.left && n.right != l.left),
            (n = l.bottom != n.top && n.bottom != l.top),
            (a = (0 != g.width || a) && (0 != g.height || n)))
          : (a = !1)
      a &&
        (k = new ch(
          Math.max(d.top - b.top, 0),
          Math.max(b.left + b.width - d.right, 0),
          Math.max(b.top + b.height - d.bottom, 0),
          Math.max(d.left - b.left, 0)
        ))
      return new Tr(c, d, e, k, f, h)
    }
  var Wr = function(a) {
    this.m = a
    this.o = null
    this.H = this.status = 0
    this.l = null
    this.ja = "sfchannel" + a
  }
  var Xr = !1,
    Yr = "",
    Zr = function(a) {
      a = a.match(/[\d]+/g)
      if (!a) return ""
      a.length = 3
      return a.join(".")
    }
  ;(function() {
    if (navigator.plugins && navigator.plugins.length) {
      var a = navigator.plugins["Shockwave Flash"]
      if (a && ((Xr = !0), a.description)) {
        Yr = Zr(a.description)
        return
      }
      if (navigator.plugins["Shockwave Flash 2.0"]) {
        Xr = !0
        Yr = "2.0.0.11"
        return
      }
    }
    if (
      navigator.mimeTypes &&
      navigator.mimeTypes.length &&
      ((a = navigator.mimeTypes["application/x-shockwave-flash"]),
      (Xr = !(!a || !a.enabledPlugin)))
    ) {
      Yr = Zr(a.enabledPlugin.description)
      return
    }
    if ("undefined" != typeof ActiveXObject) {
      try {
        var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
        Xr = !0
        Yr = Zr(b.GetVariable("$version"))
        return
      } catch (c) {}
      try {
        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")
        Xr = !0
        Yr = "6.0.21"
        return
      } catch (c) {}
      try {
        ;(b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")),
          (Xr = !0),
          (Yr = Zr(b.GetVariable("$version")))
      } catch (c) {}
    }
  })()
  var $r = Xr,
    as = Yr
  var bs = function(a) {
    this.j = a
  }
  var cs = function(a, b) {
    this.rb = a
    this.sb = b
    this.l = this.j = !1
  }
  var ds = function(a, b, c, d, e, f, g, h, k) {
    k = void 0 === k ? [] : k
    this.m = a
    this.l = b
    this.v = c
    this.permissions = d
    this.o = e
    this.A = f
    this.lb = g
    this.hostpageLibraryTokens = k
    this.j = ""
    this.Wa = h
  }
  var es = function(a, b) {
    this.l = a
    this.o = b
  }
  es.prototype.j = function(a) {
    this.o && a && (a.sentinel = this.o)
    return JSON.stringify(a)
  }
  var fs = function(a, b, c) {
    es.call(this, a, void 0 === c ? "" : c)
    this.version = b
  }
  _.H(fs, es)
  fs.prototype.j = function() {
    return es.prototype.j.call(this, { uid: this.l, version: this.version })
  }
  var gs = function(a, b, c, d) {
    es.call(this, a, void 0 === d ? "" : d)
    this.m = b
    this.v = c
  }
  _.H(gs, es)
  gs.prototype.j = function() {
    return es.prototype.j.call(this, {
      uid: this.l,
      initialWidth: this.m,
      initialHeight: this.v,
    })
  }
  var hs = function(a, b, c) {
    es.call(this, a, void 0 === c ? "" : c)
    this.v = b
  }
  _.H(hs, es)
  hs.prototype.j = function() {
    return es.prototype.j.call(this, { uid: this.l, description: this.v })
  }
  var is = function(a, b, c, d) {
    es.call(this, a, void 0 === d ? "" : d)
    this.v = b
    this.push = c
  }
  _.H(is, es)
  is.prototype.j = function() {
    return es.prototype.j.call(this, {
      uid: this.l,
      expand_t: this.v.top,
      expand_r: this.v.right,
      expand_b: this.v.bottom,
      expand_l: this.v.left,
      push: this.push,
    })
  }
  var js = function(a, b) {
    es.call(this, a, void 0 === b ? "" : b)
  }
  _.H(js, es)
  js.prototype.j = function() {
    return es.prototype.j.call(this, { uid: this.l })
  }
  var ks = function(a, b, c) {
    es.call(this, a, void 0 === c ? "" : c)
    this.m = b
  }
  _.H(ks, es)
  ks.prototype.j = function() {
    var a = { uid: this.l, newGeometry: Ur(this.m) }
    return es.prototype.j.call(this, a)
  }
  var ls = function(a, b, c, d, e, f) {
    ks.call(this, a, c, void 0 === f ? "" : f)
    this.A = b
    this.v = d
    this.push = e
  }
  _.H(ls, ks)
  ls.prototype.j = function() {
    var a = {
      uid: this.l,
      success: this.A,
      newGeometry: Ur(this.m),
      expand_t: this.v.top,
      expand_r: this.v.right,
      expand_b: this.v.bottom,
      expand_l: this.v.left,
      push: this.push,
    }
    this.o && (a.sentinel = this.o)
    return JSON.stringify(a)
  }
  var ms = function(a, b, c, d) {
    es.call(this, a, void 0 === d ? "" : d)
    this.width = b
    this.height = c
  }
  _.H(ms, es)
  ms.prototype.j = function() {
    return es.prototype.j.call(this, {
      uid: this.l,
      width: this.width,
      height: this.height,
    })
  }
  var ns = function(a, b, c, d, e) {
    var f = c
    f && (f = "?" + f)
    b =
      (void 0 === e ? "//tpc.googlesyndication.com" : e) +
      ("/safeframe/" + b + "/html/container.html" + f)
    e = a
    for (f = 0; e != e.parent; ) f++, (e = e.parent)
    ;(e = f) && (b += (c ? "&" : "?") + "n=" + e)
    ;(c = d) || (c = ig(a, !1))
    return (c ? "https:" : "http:") + b
  }
  var ss = function(a) {
    Wr.call(this, a.uniqueId)
    var b = this
    this.D = a.$c
    this.G = 1 == a.size
    this.V = new cs(a.permissions.rb && !this.G, a.permissions.sb && !this.G)
    this.A = a.Qb
    this.oa = a.hostpageLibraryTokens || []
    var c = window.location
    this.ka = "file:" == c.protocol ? "*" : c.protocol + "//" + c.host
    this.la = !!a.lb
    c = !1 === a.Dc ? "https:" : window.location.protocol
    this.U = a.wc
      ? "//" + a.wc + ".safeframe.googlesyndication.com"
      : "//tpc.googlesyndication.com"
    this.ga = Ta(a.Wa) ? "https://secureframe.doubleclick.net" : c + this.U
    this.W = !!a.Mc
    this.ca = os(a)
    this.v = new lr()
    ps(this, a.Qb, a.size)
    this.o = this.ba = Vr(a.Qb)
    this.L = a.ld || "1-0-37"
    this.da = a.Jc || ""
    this.Y = void 0 === a.Wa ? null : a.Wa
    qs(this, a)
    this.R = null
    this.I = oj(
      412,
      function() {
        return rs(b)
      },
      a.qa
    )
    this.K = -1
    this.B = 0
    this.T = null
    !a.ve ||
      "function" !== typeof IntersectionObserver ||
      le ||
      ke ||
      (this.T = new IntersectionObserver(
        oj(
          414,
          function(e) {
            b.R = e[e.length - 1]
            rs(b)
          },
          a.qa
        )
      ))
    this.l = new Tq(this.ja, this.j.contentWindow, this.ga, !1)
    Vq(this.l, "init_done", (0, _.yc)(this.Jb, this))
    Vq(this.l, "register_done", (0, _.yc)(this.Tb, this))
    Vq(this.l, "report_error", (0, _.yc)(this.Vb, this))
    Vq(this.l, "expand_request", (0, _.yc)(this.Hb, this))
    Vq(this.l, "collapse_request", (0, _.yc)(this.Fb, this))
    Vq(this.l, "creative_geometry_update", (0, _.yc)(this.O, this))
    this.l.connect((0, _.yc)(this.Nb, this))
    var d = oj(
      415,
      function() {
        b.j && ((b.j.name = ""), a.qc && a.qc(), _.kb(b.j, "load", d))
      },
      a.qa
    )
    _.v(this.j, "load", d)
    this.Jb = oj(413, this.Jb, a.qa)
    this.Tb = oj(417, this.Tb, a.qa)
    this.Vb = oj(419, this.Vb, a.qa)
    this.Hb = oj(411, this.Hb, a.qa)
    this.Fb = oj(409, this.Fb, a.qa)
    this.O = oj(410, this.O, a.qa)
    this.Nb = oj(416, this.Nb, a.qa)
  }
  _.H(ss, Wr)
  var ps = function(a, b, c) {
      a.G
        ? ((b.style.width = _.Eh("100%", !0)),
          (b.style.height = _.Eh("auto", !0)))
        : ((b.style.width = _.Eh(c.width, !0)),
          (b.style.height = _.Eh(c.height, !0)))
    },
    qs = function(a, b) {
      var c = vf(a.A),
        d = b.content
      d = a.L + ";" + d.length + ";" + d
      var e = new ds(
        a.m,
        a.ka,
        a.ba,
        a.V,
        new bs({
          shared: {
            sf_ver: a.L,
            ck_on: navigator.cookieEnabled ? 1 : 0,
            flash_ver: $r ? as : "0",
          },
        }),
        a.G,
        a.la,
        a.Y,
        a.oa
      )
      var f = {}
      f.uid = e.m
      f.hostPeerName = e.l
      f.initialGeometry = Ur(e.v)
      var g = e.permissions
      g = JSON.stringify({
        expandByOverlay: g.rb,
        expandByPush: g.sb,
        readCookie: g.j,
        writeCookie: g.l,
      })
      f =
        ((f.permissions = g),
        (f.metadata = JSON.stringify(e.o.j)),
        (f.reportCreativeGeometry = e.A),
        (f.isDifferentSourceWindow = e.lb),
        (f.goog_safeframe_hlt = tn(e.hostpageLibraryTokens)),
        (f.encryptionMode = e.Wa),
        f)
      e.j && (f.sentinel = e.j)
      e = JSON.stringify(f)
      e = d + e
      d = !1 === b.Dc
      if (a.W && b.size instanceof _.sf) {
        f = Ta(b.Wa)
          ? "https://secureframe.doubleclick.net"
          : Bf(c.j).location.protocol + a.U
        g = b.lc
        var h = b.size,
          k = Bf(vf(a.A).j)
        Bq ||
          Uf(
            k.document,
            "https://pagead2.googlesyndication.com/pagead/expansion_embed.js"
          )
        Bq++
        k.google_eas_queue = k.google_eas_queue || []
        k.google_eas_queue.push({
          a: g,
          b: f,
          c: h.width,
          d: h.height,
          e: "sf-gdn-exp-" + Bq,
          f: void 0,
          g: void 0,
          h: void 0,
          i: void 0,
        })
      }
      g = b.size
      var l = b.Ca,
        m = b.Uc || ""
      f = g.width
      h = g.height
      g = ""
      a.G && ((h = f = 0), (g = "min-width:100%"))
      k = {}
      k.id = b.lc
      k.title = m
      k.name = e
      b = Bf(c.j)
      d = Ta(a.Y)
        ? "https://secureframe.doubleclick.net/container.html?ecs=" + l
        : ns(b, a.L, a.da, d, a.U)
      e = []
      a.W &&
        ((b = jg(b.location.href)),
        e.push(
          [
            0 < b.length ? "google_debug" + (b ? "=" + b : "") + "&" : "",
            "xpc=",
            "sf-gdn-exp-" + a.m,
            "&p=",
            encodeURIComponent(_.q.document.location.protocol),
            "//",
            encodeURIComponent(_.q.document.location.host),
          ].join("")
        ))
      e.length && (d += "#" + e.join("&"))
      b =
        ((k.src = d),
        (k.scrolling = "no"),
        (k.marginWidth = "0"),
        (k.marginHeight = "0"),
        (k.width = String(f)),
        (k.height = String(h)),
        (k["data-is-safeframe"] = "true"),
        k)
      null !== a.ca && (b.sandbox = a.ca)
      d = g
      e = {}
      d =
        ((e.frameborder = 0),
        (e.allowTransparency = "true"),
        (e.style = "border:0;vertical-align:bottom;" + (void 0 === d ? "" : d)),
        (e.src = "about:blank"),
        e)
      b && Zc(d, b)
      c = c.l("IFRAME", d)
      a.A.appendChild(c)
      a.j = c
    }
  _.p = ss.prototype
  _.p.Nb = function() {
    this.T && this.j
      ? this.T.observe(this.j)
      : (_.v(window, "resize", this.I), _.v(window, "scroll", this.I))
  }
  _.p.Jb = function(a) {
    try {
      if (0 != this.status) throw Error("Container already initialized")
      if ("string" !== typeof a)
        throw Error("Could not parse serialized message")
      var b = JSON.parse(a)
      if (!_.sc(b) || !Sa(b.uid) || "string" !== typeof b.version)
        throw Error("Cannot parse JSON message")
      var c = new fs(b.uid, b.version, b.sentinel)
      if (this.m != c.l || this.L != c.version)
        throw Error("Wrong source container")
      this.status = 1
    } catch (d) {
      this.D.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
    }
  }
  _.p.Tb = function(a) {
    try {
      if (1 != this.status) throw Error("Container not initialized")
      if ("string" !== typeof a)
        throw Error("Could not parse serialized message")
      var b = JSON.parse(a)
      if (
        !_.sc(b) ||
        !Sa(b.uid) ||
        "number" !== typeof b.initialWidth ||
        "number" !== typeof b.initialHeight
      )
        throw Error("Cannot parse JSON message")
      if (
        this.m != new gs(b.uid, b.initialWidth, b.initialHeight, b.sentinel).l
      )
        throw Error("Wrong source container")
      this.status = 2
    } catch (c) {
      this.D.error("Invalid REGISTER_DONE message. Reason: " + c.message)
    }
  }
  _.p.Vb = function(a) {
    try {
      if ("string" !== typeof a)
        throw Error("Could not parse serialized message")
      var b = JSON.parse(a)
      if (!_.sc(b) || !Sa(b.uid) || "string" !== typeof b.description)
        throw Error("Cannot parse JSON message")
      var c = new hs(b.uid, b.description, b.sentinel)
      if (this.m != c.l) throw Error("Wrong source container")
      this.D.info("Ext reported an error. Description: " + c.v)
    } catch (d) {
      this.D.error("Invalid REPORT_ERROR message. Reason: " + d.message)
    }
  }
  _.p.Hb = function(a) {
    try {
      if (2 != this.status) throw Error("Container is not registered")
      if (0 != this.H) throw Error("Container is not collapsed")
      if ("string" !== typeof a)
        throw Error("Could not parse serialized message")
      var b = JSON.parse(a)
      if (
        !_.sc(b) ||
        !Sa(b.uid) ||
        "number" !== typeof b.expand_t ||
        "number" !== typeof b.expand_r ||
        "number" !== typeof b.expand_b ||
        "number" !== typeof b.expand_l ||
        "boolean" !== typeof b.push
      )
        throw Error("Cannot parse JSON message")
      var c = new is(
        b.uid,
        new ch(b.expand_t, b.expand_r, b.expand_b, b.expand_l),
        b.push,
        b.sentinel
      )
      if (this.m != c.l) throw Error("Wrong source container")
      if (!(0 <= c.v.top && 0 <= c.v.left && 0 <= c.v.bottom && 0 <= c.v.right))
        throw Error("Invalid expansion amounts")
      var d
      if ((d = (c.push && this.V.sb) || (!c.push && this.V.rb))) {
        var e = c.v,
          f = c.push,
          g = (this.o = Vr(this.j))
        if (
          e.top <= g.j.top &&
          e.right <= g.j.right &&
          e.bottom <= g.j.bottom &&
          e.left <= g.j.left
        ) {
          if (!f)
            for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
              nr(this.v, h, "overflowX", "visible", "important"),
                nr(this.v, h, "overflowY", "visible", "important")
          var k = this.o.l,
            l = this.o.l,
            m = fh(new eh(0, 0, k.right - k.left, l.bottom - l.top))
          _.sc(e)
            ? ((m.top -= e.top),
              (m.right += e.right),
              (m.bottom += e.bottom),
              (m.left -= e.left))
            : ((m.top -= e),
              (m.right += Number(void 0)),
              (m.bottom += Number(void 0)),
              (m.left -= Number(void 0)))
          nr(this.v, this.A, "position", "relative")
          nr(this.v, this.j, "position", "absolute")
          f
            ? (or(this.v, this.A, "width", m.right - m.left),
              or(this.v, this.A, "height", m.bottom - m.top))
            : nr(this.v, this.j, "zIndex", "10000")
          or(this.v, this.j, "width", m.right - m.left)
          or(this.v, this.j, "height", m.bottom - m.top)
          or(this.v, this.j, "left", m.left)
          or(this.v, this.j, "top", m.top)
          this.H = 2
          this.o = Vr(this.j)
          d = !0
        } else d = !1
      }
      a = d
      Wq(this.l, "expand_response", new ls(this.m, a, this.o, c.v, c.push).j())
      if (!a)
        throw Error(
          "Viewport or document body not large enough to expand into."
        )
    } catch (n) {
      this.D.error("Invalid EXPAND_REQUEST message. Reason: " + n.message)
    }
  }
  _.p.Fb = function(a) {
    try {
      if (2 != this.status) throw Error("Container is not registered")
      if (2 != this.H) throw Error("Container is not expanded")
      if ("string" !== typeof a)
        throw Error("Could not parse serialized message")
      var b = JSON.parse(a)
      if (!_.sc(b) || !Sa(b.uid)) throw Error("Cannot parse JSON message")
      if (this.m != new js(b.uid, b.sentinel).l)
        throw Error("Wrong source container")
      pr(this.v)
      this.H = 0
      this.j && (this.o = Vr(this.j))
      Wq(this.l, "collapse_response", new ks(this.m, this.o).j())
    } catch (c) {
      this.D.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
    }
  }
  var rs = function(a) {
    if (1 == a.status || 2 == a.status)
      switch (a.B) {
        case 0:
          ts(a)
          a.K = window.setTimeout((0, _.yc)(a.$, a), 1e3)
          a.B = 1
          break
        case 1:
          a.B = 2
          break
        case 2:
          a.B = 2
      }
  }
  ss.prototype.O = function(a) {
    try {
      if ("string" !== typeof a)
        throw Error("Could not parse serialized message")
      var b = JSON.parse(a)
      if (
        !_.sc(b) ||
        !Sa(b.uid) ||
        "number" !== typeof b.width ||
        "number" !== typeof b.height ||
        (b.sentinel && "string" !== typeof b.sentinel)
      )
        throw Error("Cannot parse JSON message")
      var c = new ms(b.uid, b.width, b.height, b.sentinel)
      if (this.m != c.l) throw Error("Wrong source container")
      var d = String(c.height)
      this.G
        ? d != this.j.height && ((this.j.height = d), rs(this))
        : this.D.error(
            "Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized."
          )
    } catch (e) {
      this.D.error(
        "Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + e.message
      )
    }
  }
  ss.prototype.$ = function() {
    if (1 == this.status || 2 == this.status)
      switch (this.B) {
        case 1:
          this.B = 0
          break
        case 2:
          ts(this),
            (this.K = window.setTimeout((0, _.yc)(this.$, this), 1e3)),
            (this.B = 1)
      }
  }
  var ts = function(a) {
      a.o = Vr(a.j, a.R)
      a.R = null
      Wq(a.l, "geometry_update", new ks(a.m, a.o).j())
    },
    os = function(a) {
      var b = null
      a.xc && (b = a.xc)
      return null == b ? null : b.join(" ")
    },
    us = ["allow-modals", "allow-orientation-lock", "allow-presentation"],
    vs = ["allow-top-navigation"],
    ws = ["allow-same-origin"],
    xs = mg(_.Pb(us).concat(_.Pb(vs))),
    ys = mg(_.Pb(us).concat(_.Pb(ws))),
    zs = mg(_.Pb(us).concat(_.Pb(vs), _.Pb(ws))),
    As = mg(_.Pb(us).concat(_.Pb(vs), ["allow-pointer-lock"]))
  var Va = function(a, b, c, d) {
    try {
      var e = new Fp(b, c)
      e.mb = d
      e.N = a
      Ka(new Ep(e))
    } catch (f) {}
  }
  var Bs = function() {
    var a = window,
      b = a.google_ltobserver
    b && (b.disconnect(), delete a.google_ltobserver)
    a.google_lt_queue && delete a.google_lt_queue
  }
  var Cs = function(a) {
    var b = _.gj(250)
    a.setTrustToken &&
      b &&
      (b =
        b.issuer && 5 === b.state
          ? {
              type: "send-srr",
              issuer: b.issuer,
              refreshPolicy: "none",
              signRequestData: "include",
              includeTimestampHeader: !0,
              additionalSignedHeaders: [
                "sec-time",
                "Sec-Signed-Redemption-Record",
              ],
            }
          : null) &&
      a.setTrustToken(b)
  }
  var Ds = function(a, b, c) {
      return a.IntersectionObserver
        ? new a.IntersectionObserver(c, b)
        : new Bb(c, b)
    },
    Es = function(a, b, c) {
      _.v(a, b, c)
      return function() {
        return _.kb(a, b, c)
      }
    },
    Fs = null,
    Gs = function() {
      Fs = _.xi()
    },
    Hs = function(a, b) {
      return b
        ? null === Fs
          ? (_.v(a, "mousemove", Gs, { passive: !0 }),
            _.v(a, "scroll", Gs, { passive: !0 }),
            Gs(),
            !1)
          : _.xi() - Fs >= 1e3 * b
        : !1
    },
    Is = function(a) {
      var b = a.N,
        c = a.element,
        d = a.vd,
        e = a.sd,
        f = void 0 === a.Bc ? 0 : a.Bc,
        g = a.Eb,
        h = a.Nc,
        k = void 0 === a.pc ? !0 : a.pc,
        l = null,
        m = !1,
        n = !1,
        u = [],
        z = (void 0 === a.ub ? Ds : a.ub)(
          b,
          void 0 === a.options ? {} : a.options,
          function(y, G) {
            try {
              var S = function() {
                u.length ||
                  (e &&
                    (u.push(
                      Es(c, "mouseenter", function() {
                        m = !0
                        S()
                      })
                    ),
                    u.push(
                      Es(c, "mouseleave", function() {
                        m = !1
                        S()
                      })
                    )),
                  u.push(
                    Es(b.document, "visibilitychange", function() {
                      return S()
                    })
                  ))
                var K = Hs(b, f),
                  U = An(b.document)
                if (n && !m && !K && !U)
                  l =
                    l ||
                    b.setTimeout(function() {
                      Hs(b, f) ? S() : (g(), G.disconnect())
                    }, 1e3 * d)
                else if (k || m || K || U) b.clearTimeout(l), (l = null)
              }
              n = y[y.length - 1].isIntersecting
              S()
            } catch (K) {
              h && h(K)
            }
          }
        )
      z.observe(c)
      return function() {
        z.disconnect()
        for (var y = _.F(u), G = y.next(); !G.done; G = y.next())
          (G = G.value), G()
        null != l && b.clearTimeout(l)
      }
    }
  var Js = function() {
      var a = C(ko.C().j, 26)
      this.j = null
      this.l = 0
      this.v = a
    },
    Ks = function(a) {
      if (!a.j) {
        var b = _.gj(7)
        eq = cq()
        hq = b
        gq = 0
        if (!Id() || 0 <= xd(Nd(), 11)) b = jq()
        else {
          b = Kh()
          var c = b.__google_ad_urls
          b = c ? c : (b.__google_ad_urls = new Yp())
        }
        a.j = b
        a.l = a.j.setupOse(a.v)
      }
      return a.j
    }
  Js.prototype.getOseId = function() {
    this.l || (this.l = Xp(0, _.gj(7)))
    return this.l
  }
  var Ls = function(a, b) {
      a = void 0 === a ? {} : a
      b = void 0 === b ? {} : b
      this.l = a
      this.j = b
    },
    Ms = function(a, b, c, d) {
      if (!(b && b in a.l)) return !1
      if (void 0 === d || d || !a.j[b]) a.j[b] = c || ""
      return !0
    },
    Ns = function(a, b) {
      _.wb(
        b.j,
        function(c, d) {
          this.j[d] || (this.j[d] = c)
        },
        a
      )
    },
    qk = function(a) {
      return a.j.page_url || null
    },
    Os = function(a) {
      var b = {}
      _.wb(a.j, function(c, d) {
        d in a.l && (b[a.l[d]] = c)
      })
      return new Ls(a.l, b)
    },
    Ps = function(a) {
      var b = []
      _.wb(a.j, function(c, d) {
        d in a.l && b.push({ Za: a.l[d], rc: c })
      })
      return b
    },
    Qs = function(a, b, c, d) {
      var e = [],
        f = b.j
      _.wb(d, function(g, h) {
        if (g) {
          g = { Za: g }
          var k = f[h],
            l = []
          a.forEach(function(m, n) {
            ;(m = c.get(m.getSlotId())) && m.j[h] && (l[n] = m.j[h])
          })
          if (l.length || k) l.length && (g.rd = l), k && (g.rc = k), e.push(g)
        }
      })
      return e
    }
  var Rs, Ss, Ts, Us, Vs
  Rs = null
  Ss = function() {
    var a = fo()
    this.j = new t.Map()
    this.m = a
    this.l = new Ls(a)
    this.v = this.o = !1
  }
  Ts = function() {
    return (Rs = Rs || new Ss())
  }
  Us = function(a, b) {
    a.j.set(b, { Ba: !0, Db: new Ls(a.m), Ca: null })
    _.O(b, function() {
      a.j.delete(b)
    })
  }
  Vs = function(a, b) {
    b.forEach(function(c) {
      a.j.has(c) && ap(c)
    })
  }
  _.Ws = function(a, b) {
    var c = b.j ? Se(b.j, Zm, 50) : null
    return c && (null != C(c, 1) || w(c, 6)) ? !1 : a.j.get(b) && a.j.get(b).Ba
  }
  _.Xs = function(a, b) {
    a.j.get(b) && (a.j.get(b).Ba = !1)
  }
  Ss.prototype.toString = function() {
    return (
      "[AdData:" +
      _.B(Array, "from")
        .call(Array, this.j, function(a) {
          a = _.F(a)
          var b = a.next().value
          a.next()
          return b.toString()
        })
        .join() +
      "]"
    )
  }
  var Ys = function(a, b) {
      return a.j.has(b)
    },
    Zs = function(a) {
      return _.B(Array, "from").call(Array, _.B(a.j, "keys").call(a.j))
    },
    $s = function(a) {
      var b = new t.Map()
      a = _.F(_.B(a.j, "entries").call(a.j))
      for (var c = a.next(); !c.done; c = a.next()) {
        var d = _.F(c.value)
        c = d.next().value
        d = d.next().value
        b.set(c.getSlotId(), d.Db)
      }
      return b
    },
    Tk = function(a) {
      a = Zs(a).map(function(b) {
        return b.m
      })
      wa(a)
      return a
    },
    at = function(a, b) {
      b.forEach(function(c) {
        a.j.delete(c)
      })
    },
    bt = function(a, b, c) {
      a.j.get(b) && (a.j.get(b).Ca = c)
    },
    ct = function(a, b) {
      return (a = a.j.get(b)) && a.Ca
    }
  var dt = 0,
    et = function() {
      var a = new of()
      this.Ca =
        a.j.getUTCFullYear() + Sd(a.j.getUTCMonth() + 1) + Sd(a.j.getUTCDate())
      this.j = []
      this.v = NaN
      this.I = "json_html"
      this.o = "fif"
      this.wa = 1
      this.G = []
      this.Fa = this.Ta = this.Ua = NaN
      this.m = 0
      this.K = this.H = this.T = ""
      this.A = []
      this.l = 0
      this.D = new t.Map()
      this.B = new t.Map()
    },
    ft = function(a, b) {
      var c = b.getSlotId()
      b = a.D.get(c)
      b ||
        ((b = window == window.top ? (++dt).toString(36) : Td()),
        a.D.set(c, b),
        _.O(c, function() {
          a.D.delete(c)
        }))
      return b
    },
    gt = function(a, b) {
      var c = b.getSlotId()
      a.B.set(c, b.o)
      _.O(c, function() {
        a.B.delete(c)
      })
    },
    ht = function(a, b) {
      return a.B.get(b.getSlotId()) || b.o
    }
  var it = function(a, b, c, d) {
    var e = !1,
      f = function() {
        !e && b.D && (c(), (e = !0))
      }
    ;((d = d && a.contentWindow ? _.r(5) : 0) && 2 != d) || _.v(a, "load", f)
    d && a.contentWindow && _.v(a.contentWindow, "amp-ini-load", f)
  }
  var jt = null,
    kt = !1,
    lt = !1,
    mt = !1,
    nt = function(a) {
      a = void 0 === a ? _.q : a
      if (!lt) {
        var b = new Pk("gpt_pubconsole_loaded")
        gb(b)
        E(b, "param", String($a(a)))
        E(b, "api", String(mt))
        Rk(b, 1)
        b = "https:" + _.gj(228) + "loader.js"
        Uf(a.document, b)
        lt = !0
      }
    },
    ot = P(94, function(a) {
      a = void 0 === a ? _.q : a
      Eb()._pubconsole_disable_ || (null !== $a(a) && nt(a))
    })
  "complete" === _.q.document.readyState
    ? ot()
    : sj(_.q, function() {
        ot()
      })
  Db(
    "disablePublisherConsole",
    Q(93, function() {
      Eb()._pubconsole_disable_ = !0
    })
  )
  Db(
    "onPubConsoleJsLoad",
    Q(731, function() {
      kt && (Eb().console.openConsole(jt), (jt = null), (kt = !1))
    })
  )
  Db(
    "openConsole",
    Q(732, function(a) {
      a = void 0 === a ? "" : a
      mt = !0
      Eb && Eb().console
        ? Eb().console.openConsole(a)
        : (a && (jt = a), (kt = !0), nt())
    })
  )
  var pt = function() {
    var a = fl.C()
    this.getAllEvents = Q(563, function() {
      return lt ? Zg(a.j).slice() : []
    })
    this.getEventsByService = Q(564, function(b) {
      return lt ? gl(a, b).slice() : []
    })
    this.getEventsBySlot = Q(565, function(b) {
      return lt ? hl(a, b).slice() : []
    })
    this.getEventsByLevel = Q(566, function(b) {
      return lt ? il(a, b).slice() : []
    })
  }
  _.H(pt, vj)
  var qt = function(a) {
    var b = this,
      c = fl.C(),
      d = ko.C().j,
      e = mo(ko.C(), a.j.getSlotElementId())
    this.set = Q(83, function(f, g) {
      a.set(f, g)
      return b
    })
    this.get = Q(84, function(f) {
      return a.get(f)
    })
    this.setClickUrl = Q(79, function(f) {
      if ("string" !== typeof f)
        return c.J(nl("Slot.setClickUrl", [f]), null, a.j), b
      D(e, 7, f)
      return b
    })
    this.setTargeting = Q(81, function(f, g) {
      go(a.j, e, f, g, c)
      return b
    })
    this.updateTargetingFromMap = Q(85, function(f) {
      ho(a.j, e, f, c)
      return b
    })
    this.display = Q(78, function() {
      var f = Fk(d, lo())
      a.display(f)
    })
    this.setTagForChildDirectedTreatment = Q(80, function(f) {
      if (0 === f || 1 === f) {
        var g = Qj(d) || new Kj()
        D(g, 5, f)
        Ve(d, 25, g)
      }
      return b
    })
    this.setForceSafeFrame = Q(567, function(f) {
      if ("boolean" !== typeof f)
        return (
          c.J(em("PassbackSlot.setForceSafeFrame", String(f)), null, a.j), b
        )
      D(e, 12, f)
      return b
    })
    this.setTagForUnderAgeOfConsent = Q(448, function(f) {
      if (0 === f || 1 === f) {
        var g = Qj(d) || new Kj()
        D(g, 6, f)
        Ve(d, 25, g)
      }
      return b
    })
  }
  _.H(qt, vj)
  var rt = function(a, b) {
      return a
        .map(function(c) {
          return wj(c, b)
        })
        .filter(function(c) {
          return !!c
        })
    },
    st = function(a) {
      var b = jp.C(),
        c = []
      a = _.F(a)
      for (var d = a.next(); !d.done; d = a.next()) {
        d = d.value
        b.l = d
        var e = bj(9)
        1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
      }
      return c
    },
    tt = Tc(function() {
      return Eg(
        "google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled."
      )
    }),
    ut = function() {
      Object.defineProperty(window, "google_DisableInitialLoad", {
        get: function() {
          tt()
          return !0
        },
        set: function() {
          tt()
        },
        configurable: !0,
      })
    },
    Ct = function(a, b) {
      jo.call(this, a)
      var c = this,
        d = fl.C(),
        e = ko.C().j,
        f = lo(),
        g = !1
      this.setTargeting = Q(1, function(h, k) {
        var l = null
        "string" === typeof k
          ? (l = [k])
          : Array.isArray(k)
          ? (l = k)
          : qc(k) && (l = _.B(Array, "from").call(Array, k))
        var m = "string" === typeof h && !md(h)
        l = _.x(180) ? l : l && Qc(l)
        var n =
          !!l &&
          l.every(function(u) {
            return "string" === typeof u
          })
        if (!m || !n) return d.J(nl("PubAdsService.setTargeting", [h, k]), a), c
        k = ((A = Ue(e, Fj, 2)), _.B(A, "find")).call(A, function(u) {
          return Gj(u) === h
        })
        if ("gpt-beta" === h) {
          if (a.j) return d.J(Am(l.join())), c
          if (k) return d.J(Bm(l.join())), c
          l = st(l)
        }
        k ? Ij(k, l) : ((k = Ij(Hj(new Fj(), h), l)), Xe(e, 2, k, Fj))
        d.info(nm(h, l.join(), a.X()), a)
        return c
      })
      this.clearTargeting = Q(2, function(h) {
        if (void 0 === h) return Pj(e, []), d.info(ym(a.X()), a), c
        if ("gpt-beta" === h) return d.J(Cm(h)), c
        var k = Ue(e, Fj, 2),
          l = _.B(k, "findIndex").call(k, function(m) {
            return Gj(m) === h
          })
        if (0 > l) return d.J(km(h, a.X()), a), c
        k.splice(l, 1)
        Pj(e, k)
        d.info(jm(h, a.X()), a)
        return c
      })
      this.getTargeting = Q(38, function(h) {
        if ("string" !== typeof h)
          return d.J(nl("PubAdsService.getTargeting", [h]), a), []
        var k = ((A = Ue(e, Fj, 2)), _.B(A, "find")).call(A, function(l) {
          return Gj(l) === h
        })
        return k ? C(k, 2).slice() : []
      })
      this.getTargetingKeys = Q(39, function() {
        return Ue(e, Fj, 2).map(function(h) {
          return Gj(h)
        })
      })
      this.setCategoryExclusion = Q(3, function(h) {
        if ("string" !== typeof h || md(h))
          return d.J(nl("PubAdsService.setCategoryExclusion", [h]), a), c
        ;((A = C(e, 3)), _.B(A, "includes")).call(A, h) || Re(e, 3, h)
        d.info(lm(h), a)
        return c
      })
      this.clearCategoryExclusions = Q(4, function() {
        D(e, 3, [])
        d.info(mm(), a)
        return c
      })
      this.disableInitialLoad = Q(5, function() {
        a.j
          ? d.J(Xl("disableInitialLoad", "pubads"), a)
          : (D(e, 4, !0), g || ((g = !0), ut()))
      })
      this.enableSingleRequest = Q(6, function() {
        if (a.j && !w(e, 6)) return d.J(Wl("enableSingleRequest"), a), !1
        d.info(Zl("single request"), a)
        D(e, 6, !0)
        return !0
      })
      this.enableAsyncRendering = Q(7, function() {
        return !0
      })
      this.enableSyncRendering = Q(8, function() {
        Eg(
          "GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details."
        )
        return !1
      })
      this.enableLazyLoad = Q(485, function(h) {
        var k = new Jj()
        D(k, 1, 800)
        D(k, 2, 400)
        D(k, 3, 3)
        if (_.sc(h)) {
          var l = h.fetchMarginPercent
          "number" === typeof l &&
            (0 <= l ? D(k, 1, l) : -1 == l && D(k, 1, void 0))
          l = h.renderMarginPercent
          "number" === typeof l &&
            (0 <= l ? D(k, 2, l) : -1 == l && D(k, 2, void 0))
          h = h.mobileScaling
          "number" === typeof h && (0 < h ? D(k, 3, h) : -1 == h && D(k, 3, 1))
        }
        Ve(e, 5, k)
      })
      this.setCentering = Q(9, function(h) {
        h = !!h
        d.info($l("centering", String(h)), a)
        D(e, 15, h)
      })
      this.definePassback = Q(10, function(h, k) {
        return (h = vt(a, h, k).slot) && cl(h)
      })
      this.refresh = Q(11, function(h, k) {
        k = void 0 === k ? {} : k
        ;(h && !Array.isArray(h)) ||
        !_.sc(k) ||
        (k.changeCorrelator && "boolean" !== typeof k.changeCorrelator)
          ? d.J(
              nl(
                "PubAdsService.refresh",
                [h, k].filter(function(l) {
                  return void 0 !== l
                })
              ),
              a
            )
          : ((k && 0 == k.changeCorrelator) || D(e, 26, Kk()),
            (h = h ? rt(h, b) : a.l),
            wt(a, Fk(e, f), h))
      })
      this.enableVideoAds = Q(12, function() {
        D(e, 21, !0)
        xt(a, e)
      })
      this.setVideoContent = Q(13, function(h, k) {
        D(e, 21, !0)
        D(e, 22, String(h || ""))
        D(e, 23, String(k || ""))
        xt(a, e)
      })
      this.collapseEmptyDivs = Q(14, function(h) {
        h = void 0 === h ? !1 : h
        w(e, 11)
          ? d.J(hm(), a)
          : a.j
          ? d.J(Wl("collapseEmptyDivs"), a)
          : (h && D(e, 10, !0),
            fb("gpt_ced", function(k) {
              E(k, "sc", h ? "t" : "f")
              E(k, "level", "page")
              gb(k)
            }),
            d.info(gm(String(!!h)), a),
            D(e, 11, !0))
        return !!w(e, 11)
      })
      this.clear = Q(15, function(h) {
        return Array.isArray(h)
          ? ((h = rt(h, b)), yt(a, e, f, h))
          : yt(a, e, f, h)
      })
      this.setLocation = Q(16, function(h) {
        if ("string" !== typeof h) return d.J(fm("Address")), c
        D(e, 8, h)
        return c
      })
      this.setCookieOptions = Q(17, function(h) {
        if (0 !== h && 1 !== h) return d.J(Vl(String(h)), a), c
        D(e, 24, h)
        return c
      })
      this.setTagForChildDirectedTreatment = Q(18, function(h) {
        if (1 !== h && 0 !== h) return d.J(om(String(h)), a), c
        var k = Qj(e) || new Kj()
        D(k, 5, h)
        Ve(e, 25, k)
        return c
      })
      this.clearTagForChildDirectedTreatment = Q(19, function() {
        var h = Qj(e)
        if (!h) return c
        D(h, 5, void 0)
        Ve(e, 25, h)
        return c
      })
      this.setPublisherProvidedId = Q(20, function(h) {
        h = String(h)
        a.j
          ? d.J(Yl("setPublisherProvidedId", h), a)
          : (d.info($l("PPID", h), a), D(e, 16, h))
        return c
      })
      this.set = Q(21, function(h, k) {
        if (
          "string" !== typeof h ||
          !h.length ||
          void 0 === fo()[h] ||
          "string" !== typeof k
        )
          return d.J(nl("PubAdsService.set", [h, k]), a), c
        var l = ((A = Ue(e, Fj, 14)), _.B(A, "find")).call(A, function(m) {
          return Gj(m) === h
        })
        l ? Ij(l, [k]) : ((l = Hj(new Fj(), h)), Re(l, 2, k), Xe(e, 14, l, Fj))
        d.info(Jl(h, String(k), a.X()), a)
        return c
      })
      this.get = Q(22, function(h) {
        if ("string" !== typeof h)
          return d.J(nl("PubAdsService.get", [h]), a), null
        var k = ((A = Ue(e, Fj, 14)), _.B(A, "find")).call(A, function(l) {
          return Gj(l) === h
        })
        return (k = k && C(k, 2)) ? k[0] : null
      })
      this.getAttributeKeys = Q(23, function() {
        return Ue(e, Fj, 14).map(function(h) {
          return Gj(h)
        })
      })
      this.display = Q(24, function(h, k, l, m) {
        return void a.display(
          h,
          k,
          void 0 === l ? "" : l,
          void 0 === m ? "" : m
        )
      })
      this.updateCorrelator = Q(25, function() {
        Eg(rj("update"))
        d.J(Im(), a)
        D(e, 26, Kk())
        return c
      })
      this.defineOutOfPagePassback = Q(35, function(h) {
        var k = vt(a, h, [1, 1])
        h = k.slot
        ;(k = k.xa) && D(k, 15, 1)
        return h && cl(h)
      })
      this.setForceSafeFrame = Q(36, function(h) {
        if ("boolean" !== typeof h) return d.J(em(String(h)), a), c
        D(e, 13, h)
        return c
      })
      this.setSafeFrameConfig = Q(37, function(h) {
        var k = ro(h)
        if (!k) return d.J(nl("PubAdsService.setSafeFrameConfig", [h]), a), c
        Ve(e, 18, k)
        return c
      })
      this.setRequestNonPersonalizedAds = Q(445, function(h) {
        if (0 !== h && 1 !== h) a.log.J(Dm(String(h)), a)
        else if (_.x(373)) {
          var k = ko.C().j
          if (!Qj(k)) {
            var l = new Kj()
            Ve(k, 25, l)
          }
          k = Qj(k)
          D(k, 8, !!h)
        } else if (h) {
          if ((h = fa()) && h.frames && !h.frames.GoogleSetNPA)
            try {
              k = h.document
              l = new tf(k)
              var m = k.body || (k.head && k.head.parentElement)
              if (m) {
                var n = Jf(l, "IFRAME")
                n.name = "GoogleSetNPA"
                n.id = "GoogleSetNPA"
                n.setAttribute(
                  "style",
                  "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;"
                )
                m.appendChild(n)
              }
            } catch (u) {}
        } else
          (h = fa().document.getElementById("GoogleSetNPA")) &&
            h.parentNode &&
            h.parentNode.removeChild(h)
        return c
      })
      this.setTagForUnderAgeOfConsent = Q(447, function(h) {
        h = void 0 === h ? 2 : h
        if (2 !== h && 0 !== h && 1 !== h) return d.J(Em(String(h)), a), c
        var k = Qj(e) || new Kj()
        D(k, 6, h)
        Ve(e, 25, k)
        return c
      })
      this.getCorrelator = Q(27, function() {
        return String(C(e, 26))
      })
      this.getTagSessionCorrelator = Q(631, function() {
        return zt().I
      })
      this.getVideoContent = Q(30, function() {
        return At(a, e)
      })
      this.getVersion = Q(568, function() {
        return a.getVersion()
      })
      this.forceExperiment = Q(569, function(h) {
        h = parseInt(h, 10)
        0 < h && $i.C().l(h)
      })
      this.setCorrelator = Q(28, function(h) {
        Eg(rj("set"))
        d.J(Hm(), a)
        if (Zh(window)) return c
        if (!Lg(h)) return d.J(sm(String(h)), a), c
        D(e, 26, h)
        D(e, 27, !0)
        return c
      })
      this.markAsAmp = Q(570, function() {
        return void Bt(a)
      })
      this.isSRA = Q(571, function() {
        return !!w(e, 6)
      })
      this.setImaContent = Q(328, function(h, k) {
        null != C(e, 22)
          ? (D(e, 21, !0),
            D(e, 22, String(h || "")),
            D(e, 23, String(k || "")),
            xt(a, e))
          : (D(e, 21, !0),
            xt(a, e),
            "string" === typeof h && D(e, 19, h),
            "string" === typeof k && D(e, 20, k))
      })
      this.getImaContent = Q(329, function() {
        return null != C(e, 22)
          ? At(a, e)
          : a.j
          ? { vid: C(e, 19) || "", cmsid: C(e, 20) || "" }
          : null
      })
      this.isInitialLoadDisabled = Q(572, function() {
        return !!w(e, 4)
      })
      this.addSupportingUrl = Q(634, function(h) {
        if ("string" !== typeof h || !h.match(_.Nf)[1])
          return d.J(nl("PubAdsService.addSupportingUrl", [h]), a), c
        ;((A = C(e, 7)), _.B(A, "includes")).call(A, h) || Re(e, 7, h)
        return c
      })
      this.setPrivacySettings = Q(648, function(h) {
        if (!_.sc(h))
          return d.J(nl("PubAdsService.setPrivacySettings", [h]), a), c
        var k = Qj(e) || new Kj(),
          l = h.restrictDataProcessing,
          m = h.childDirectedTreatment,
          n = h.underAgeOfConsent
        h = h.limitedAds
        "boolean" === typeof l
          ? D(k, 1, l)
          : void 0 !== l && d.J(em(String(l)), a)
        _.x(397) ||
          ("boolean" === typeof h
            ? D(k, 9, h)
            : void 0 !== h && d.J(em(String(h)), a))
        void 0 !== n &&
          (null === n
            ? D(k, 6, 2)
            : !1 === n
            ? D(k, 6, 0)
            : !0 === n
            ? D(k, 6, 1)
            : d.J(Em(String(n)), a))
        void 0 !== m &&
          (null === m
            ? D(k, 5, void 0)
            : !1 === m
            ? D(k, 5, 0)
            : !0 === m
            ? D(k, 5, 1)
            : d.J(om(String(m)), a))
        Ve(e, 25, k)
        return c
      })
    }
  _.H(Ct, jo)
  var Dt = function(a, b) {
      a: {
        b = b[0]
        a = a[0]
        for (var c = Mc, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
          var f = c(b[e], a[e])
          if (0 != f) {
            b = f
            break a
          }
        }
        b = Mc(b.length, a.length)
      }
      return b
    },
    Et = function() {
      var a = this,
        b = [],
        c = !1,
        d = fl.C()
      this.addSize = P(88, function(e, f) {
        var g
        ;(g = !ek(e)) || (g = !(dk(f) || (Array.isArray(f) && f.every(dk))))
        if (g) return (c = !0), d.J(nl("SizeMappingBuilder.addSize", [e, f])), a
        b.push([e, f])
        return a
      })
      this.build = P(89, function() {
        if (c) return d.J(Hl()), null
        Nc(b, Dt)
        return b
      })
    }
  var Ft = function() {
      this.errorMessage = this.info = this.error = this.Ea = null
    },
    Gt = function(a, b) {
      a.Ea = b
      return a
    }
  Ft.prototype.getError = function() {
    return this.error
  }
  var Ht = function(a, b) {
      a.errorMessage = b
      return a
    },
    It = function() {
      this.cache = {}
    },
    cb = function() {
      Jt || ((Kt = _.r(38, Kt)), (Lt = _.r(39, Lt)), (Jt = new It()))
      return Jt
    },
    Mt = function(a) {
      var b = C(a, 3)
      if (!b) return 3
      if (!C(a, 2)) return 4
      a = new of()
      var c = pf(b)
      c.add(new kf(Lt))
      if (a.getTime() > c.getTime()) return 2
      b = pf(b)
      b.add(new kf(Kt))
      return a.getTime() > b.getTime() ? 1 : 0
    }
  It.prototype.get = function(a) {
    var b = new Ft()
    if (this.cache[a]) return Gt(b, this.cache[a])
    var c = ""
    try {
      c = window.localStorage.getItem("_GESPSK-" + a)
    } catch (d) {
      return (b.error = 6), Ht(b, d.message)
    }
    if (!c) return new Ft()
    b = null
    try {
      b = Ze(Ip, c)
    } catch (d) {
      return (a = new Ft()), (a.error = 5), Ht(a, d.message)
    }
    b && (this.cache[a] = b)
    return Gt(new Ft(), b)
  }
  It.prototype.set = function(a) {
    Jp(a)
    var b = C(a, 1) || "",
      c = "_GESPSK-" + b,
      d = Gt(new Ft(), a)
    try {
      window.localStorage.setItem(c, a.m())
    } catch (e) {
      ;(d.info = 7), Ht(d, e.message)
    }
    this.cache[b] = a
    return d
  }
  var Jt = null,
    Kt = 24,
    Lt = 72
  var Nt = function(a, b, c) {
      for (var d = 100; a && a != b && --d; ) _.xg(a, c), (a = a.parentElement)
    },
    Ot = function(a, b, c, d, e) {
      _.xg(a, { "margin-left": "0px", "margin-right": "0px" })
      var f = { "z-index": String(_.r(32, 5)) }
      "absolute" !== d.position &&
        "fixed" !== d.position &&
        "relative" !== d.position &&
        (f.position = "relative")
      var g = "rtl" == d.direction,
        h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2
      d = function() {
        var k = a.getBoundingClientRect().left
        return g ? h - k : k - h
      }
      b = d()
      0 !== b &&
        ((c = function(k) {
          g ? (f["margin-right"] = k + "px") : (f["margin-left"] = k + "px")
        }),
        c(-b),
        _.xg(a, f),
        (d = d()),
        0 !== d && b !== d && (c((b / (d - b)) * b), _.xg(a, f)))
      return !0
    },
    Qt = function(a, b, c, d, e, f) {
      var g = b.slot,
        h = yb(b.aa)
      b = P(459, function() {
        return Pt(a, g, c, d, e, h, f)
      })
      _.q.setTimeout(b, 500)
    },
    Pt = function(a, b, c, d, e, f, g) {
      if (_.q.IntersectionObserver) {
        var h = null,
          k = fp(b, a) || ja(b, a),
          l = P(459, function(m) {
            if ((m = m && m[0])) {
              var n = m.boundingClientRect,
                u = window.innerWidth,
                z = Math.round(n.left),
                y = Math.round(n.right),
                G = 0 > z + 2,
                S = 0 < y - (u + 2)
              if (
                m.intersectionRatio >=
                  1 -
                    ((0 <= Math.round(n.left) ? 0 : 2) +
                      (Math.round(n.right) <= window.innerWidth ? 0 : 2)) /
                      d ||
                G ||
                S
              )
                fb(
                  g,
                  function(K) {
                    if (G || S) {
                      var U = new zq()
                      U.set(8)
                      Rt(k) && U.set(10)
                      U = Aq(U)
                    } else U = St(a, b)
                    var bb = Tt(b, k, e),
                      rd = bb.Xc
                    bb = bb.Yc
                    gb(K)
                    E(K, "qid", uo(b))
                    E(K, "iu", b.getAdUnitPath())
                    E(K, "e", String(U))
                    G && E(K, "ofl", String(z))
                    S && E(K, "ofr", String(y - u))
                    E(K, "ret", d + "x" + e)
                    E(K, "req", f)
                    E(K, "bm", String(c))
                    E(K, "efh", Number(rd))
                    E(K, "stk", Number(bb))
                    E(K, "ifi", Nh(window))
                    _.x(60) && E(K, "isc", 1)
                  },
                  { ta: _.r(7) }
                ),
                  h && h.unobserve(k)
            }
          })
        k &&
          ((h = new _.q.IntersectionObserver(l, { threshold: [1] })),
          h.observe(k))
      }
    },
    St = function(a, b) {
      var c = fp(b, a) || ja(b, a),
        d = new zq()
      try {
        var e = function(U, bb) {
            return a.elementsFromPoint(U, bb)
          },
          f = c.getBoundingClientRect(),
          g = f.left,
          h = f.top,
          k = f.width,
          l = f.height,
          m = oa(b)
        if ("hidden" == m.visibility || "none" == m.display) return Aq(d)
        var n = parseInt(m["border-top-width"] || 0, 10) + 1
        b = g + k
        l = h + l
        var u = e(g + n + 2, h + n)
        var z = e(b - n - 2, h + n)
        var y = e(b - n - 2, l - n)
        var G = e(g + n + 2, l - n)
        var S = e(b / 2, l - n)
      } catch (U) {
        return d.set(1), Aq(d)
      }
      if (
        !(
          u &&
          u.length &&
          z &&
          z.length &&
          y &&
          y.length &&
          G &&
          G.length &&
          S &&
          S.length
        )
      )
        return d.set(7), Aq(d)
      e = function(U, bb) {
        for (var rd = !1, Uj = 0; Uj < U.length; Uj++) {
          var ug = U[Uj]
          if (rd) {
            var Vp = pa(ug, window)
            if ("hidden" != Vp.visibility && !Ag(ug) && !K(c, ug)) {
              d.set(bb)
              "absolute" == Vp.position && d.set(11)
              break
            }
          } else c == ug && (rd = !0)
        }
      }
      Bg(c) && d.set(9)
      var K = function(U, bb) {
        return rg(U, bb) || rg(bb, U)
      }
      g = u[0]
      c == g || K(c, g) || Ag(g) || d.set(2)
      g = z[0]
      c == g || K(c, g) || Ag(g) || d.set(3)
      g = y[0]
      c == g || K(c, g) || Ag(g) || d.set(4)
      g = G[0]
      c == g || K(c, g) || Ag(g) || d.set(5)
      if (Ag(c)) return Aq(d)
      e(u, 12)
      e(z, 13)
      e(y, 14)
      e(G, 15)
      e(S, 6)
      return Aq(d)
    },
    Rt = function(a) {
      var b = !1,
        c = !1,
        d = !1
      return zg(a, function(e) {
        "nowrap" == e.whiteSpace && (d = !0)
        if ("scroll" == e.overflowX || "auto" == e.overflowX) c = !0
        "flex" == e.display && (b = !0)
        return b && c && d
      })
    },
    Ut = function(a, b) {
      return a && (a = Se(a, Rj, 1)) ? C(a, 1) || b.innerWidth : 0
    },
    Vt = function(a, b) {
      return a && (a = Se(a, Rj, 1)) ? C(a, 2) || b.innerHeight : 0
    },
    Wt = function(a) {
      return a && (a = Se(a, Rj, 2)) ? C(a, 1) || 0 : 0
    },
    Xt = function(a) {
      return a && (a = Se(a, Rj, 2)) ? C(a, 2) || 0 : 0
    },
    Tt = function(a, b, c) {
      var d = oa(a),
        e = d ? "absolute" != d.position : !0,
        f = !1,
        g = (a = ja(a)) && a.parentElement,
        h = !1
      yg(
        b,
        function(k) {
          var l = k.style
          if (e)
            if (h || (h = k == g)) e = nq(k, _.q, !0, -1, -1)
            else {
              l = l && l.height
              var m =
                ((l && _.B(l, "endsWith").call(l, "px") && parseInt(l, 10)) ||
                  0) >= c
              !l ||
                m ||
                ("string" === typeof l && _.B(kq, "includes").call(kq, l)) ||
                (e = !1)
            }
          f ||
            ((k = pa(k, _.q)),
            "sticky" != k.position && "fixed" != k.position) ||
            (f = !0)
          return !(f && !e)
        },
        100
      )
      return { Xc: e, Yc: f }
    },
    Yt = function(a) {
      var b = a.slot
      mk(a.aa) &&
        setTimeout(function() {
          fb("gpt_fluid_sz", function(c) {
            var d = fp(b, document)
            d = d ? Hh(d) : null
            E(c, "sz", d ? d.width + "x" + d.height : "null")
            E(c, "qqid", uo(b))
          })
        }, 250)
    }
  var Y = function() {
    gr.apply(this, arguments)
  }
  _.H(Y, gr)
  var ir = function(a, b) {
      Xk(a.id(), b)
      window.console && window.console.error && window.console.error(b)
    },
    Zt = function(a, b, c, d, e) {
      var f = null,
        g = P(b, e)
      _.v(c, d, g) &&
        ((f = function() {
          return _.kb(c, d, g)
        }),
        _.O(a, f))
      return f
    },
    $t = function(a, b, c, d) {
      d =
        void 0 === d
          ? function() {
              return !0
            }
          : d
      b = new ah(b, c, P(a.id(), d))
      _.Wg(a, b)
      return b
    }
  var nb = function(a) {
    Y.call(this)
    this.F = this.l()
    this.m = V(this, a)
  }
  _.H(nb, Y)
  nb.prototype.j = function() {
    for (
      var a = this.m.value,
        b = {},
        c = cb(),
        d = _.F(_.B(Object, "keys").call(Object, a)),
        e = d.next();
      !e.done;
      e = d.next()
    ) {
      e = e.value
      var f = a[e],
        g = c.get(e)
      if (g.getError()) db(g.getError(), e, g.errorMessage)
      else {
        ;(g = g.Ea) ||
          ((g = new Ip()),
          (g = D(g, 1, e)),
          (g = D(g, 4, 0)),
          (g = D(g, 5, 0)),
          (g = D(g, 6, 0)),
          (g = Jp(g)))
        a: {
          if ((C(g, 4) || 0) >= _.r(40)) {
            var h = C(g, 6) || 0
            var k = Math.pow(2, h),
              l = C(g, 5) || 0
            if (l >= k) D(g, 5, 0), D(g, 4, 0), D(g, 6, h + 1)
            else {
              D(g, 5, l + 1)
              h = !0
              break a
            }
          }
          h = !1
        }
        h ||
          ((A = _.fj(10)), _.B(A, "includes")).call(A, e) ||
          (b[e] = { Mb: f, Ea: g })
      }
    }
    T(this.F, b)
  }
  nb.prototype.id = function() {
    return 655
  }
  var ob = function(a) {
    Y.call(this)
    this.A = this.l()
    this.m = this.l()
    this.B = V(this, a)
  }
  _.H(ob, Y)
  ob.prototype.j = function() {
    for (
      var a = this,
        b = {},
        c = [],
        d = this.B.value,
        e = _.F(_.B(Object, "keys").call(Object, d)),
        f = e.next();
      !f.done;
      f = e.next()
    ) {
      f = f.value
      var g = d[f],
        h = g.Mb
      g = g.Ea
      var k = Mt(g)
      switch (k) {
        case 0:
          c.push(t.Promise.resolve(g))
          break
        case 1:
          b[f] = { Ea: g, Mb: h }
          c.push(t.Promise.resolve(g))
          break
        case 3:
        case 2:
        case 4:
          3 === k && eb(9, f), D(g, 2, null), c.push(au(f, g, h))
      }
    }
    T(this.m, b)
    t.Promise.all(c).then(function(l) {
      var m = {}
      l.forEach(function(n) {
        var u = C(n, 2)
        u && (m[C(n, 1)] = u)
      })
      T(a.A, m)
    })
  }
  var au = function(a, b, c) {
    var d = _.r(33),
      e = new of().getTime(),
      f = 3
    return t.Promise.race([
      jb(d),
      c.then(function(g) {
        f = 2
        return t.Promise.race([
          jb(d - (e - new of().getTime())),
          ib(a, b, g, function() {
            return (f = null)
          }),
        ])
      }),
    ]).then(function() {
      f && eb(f, a)
      return b
    })
  }
  ob.prototype.id = function() {
    return 658
  }
  var mb = function() {
    Y.apply(this, arguments)
    this.F = this.l()
  }
  _.H(mb, Y)
  mb.prototype.j = function() {
    var a = {},
      b = (Eb() && Eb().encryptedSignalSource) || {}
    _.B(Object, "keys")
      .call(Object, b)
      .forEach(function(g) {
        a[g] = t.Promise.resolve(b[g])
      })
    for (
      var c = window.document.querySelectorAll(
          "script[data-encrypted-signal-source-id]"
        ),
        d = {},
        e = 0;
      e < c.length;
      d = { Ga: d.Ga }, e++
    ) {
      var f = c[e]
      d.Ga = f.getAttribute("data-encrypted-signal-source-id")
      a[d.Ga] =
        a[d.Ga] ||
        lb(
          f,
          (function(g) {
            return function() {
              if (b[g.Ga]) return b[g.Ga]
              db(0, g.Ga)
              return function() {
                return t.Promise.resolve(null)
              }
            }
          })(d)
        )
    }
    T(this.F, a)
  }
  mb.prototype.id = function() {
    return 650
  }
  var pb = function(a) {
    Y.call(this)
    this.m = V(this, a)
  }
  _.H(pb, Y)
  pb.prototype.j = function() {
    var a = this.m.value
    lb(window).then(function() {
      for (
        var b = {}, c = _.F(_.B(Object, "keys").call(Object, a)), d = c.next();
        !d.done;
        b = { nb: b.nb, Cb: b.Cb }, d = c.next()
      )
        (b.nb = d.value),
          (d = a[b.nb]),
          (b.Cb = d.Ea),
          d.Mb.then(
            (function(e) {
              return function(f) {
                ib(e.nb, e.Cb, f)
              }
            })(b)
          )
    })
  }
  pb.prototype.id = function() {
    return 662
  }
  var bu = function(a) {
      var b =
        "performance" in window && "now" in performance
          ? performance.now.bind(performance)
          : Ac
      for (a = b() + a; b() < a; );
      b()
    },
    cu = function(a, b) {
      b >= a.length ||
        (bu(a[b]),
        window.requestAnimationFrame(function() {
          return cu(a, ++b)
        }))
    },
    du = function(a) {
      window.requestAnimationFrame(function() {
        return cu(a, 0)
      })
    },
    eu = function() {
      if ("function" === typeof window.requestAnimationFrame) {
        var a = _.fj(2)
        a.length &&
          ((a = a.map(function(b) {
            return _.gg(b, 0)
          })),
          du(a))
      }
    }
  var fu = function() {
    var a = window,
      b = new Xh(),
      c = new Yh(),
      d = Wa(_.q)
    Pe(b, 1, d, 0)
    d = $i
      .C()
      .j()
      .join()
    Pe(b, 5, d, "")
    Pe(b, 2, 1, 0)
    Ve(c, 1, b)
    b = Wh()
    d = _.x(77)
    b = Qe(b, 8, d)
    d = _.x(78)
    b = Qe(b, 9, d)
    b = Qe(b, 10, !0)
    d = _.x(80)
    b = Qe(b, 13, d)
    d = _.x(81)
    b = Qe(b, 14, d)
    b = Qe(b, 16, !0)
    Ve(c, 2, b)
    a.google_rum_config = c.ea
    c = _.x(188) ? "_debug" : ""
    Uf(
      a.document,
      "https://securepubads.g.doubleclick.net/pagead/js/rum" + c + ".js"
    )
  }
  var gu = 0,
    hu = function() {
      try {
        Eq()
        Dq()
        var a = _.gj(152)
        a &&
          a.forEach(function() {
            $i.C().l(a)
          })
        bj(13)
        bj(3)
      } catch (b) {
        Yk(408, b, !0)
      }
    },
    iu = P(
      297,
      function() {
        var a = _.B(Array, "from").call(
          Array,
          document.getElementsByTagName("script")
        )
        a = _.F(a)
        for (var b = a.next(); !b.done; b = a.next()) {
          var c = (b = b.value),
            d = b.src
          !d ||
            (-1 == d.indexOf("/tag/js/gpt.js") &&
              -1 == d.indexOf("/tag/js/gpt_mobile.js")) ||
            c.googletag_executed ||
            (_.x(329)
              ? b.textContent &&
                ((c.googletag_executed = !0),
                (c = document.createElement("script")),
                wq(c, new qq(b.textContent, La)),
                document.head.appendChild(c),
                document.head.removeChild(c))
              : b.innerHTML && ((c.googletag_executed = !0), eval(b.innerHTML)))
        }
      },
      function(a, b) {
        Xk(a, b)
        window.console && window.console.error && window.console.error(b)
      }
    ),
    ju = function() {
      var a = window,
        b = new Gr(a),
        c = new Lr(a),
        d = new vr(a)
      fb(
        "cmpMet",
        function(e) {
          gb(e)
          E(e, "fc", b.j ? 1 : 0)
          E(e, "tcfv1", a.__cmp ? 1 : 0)
          E(e, "tcfv2", Nr(c) ? 1 : 0)
          E(e, "usp", xr(d) ? 1 : 0)
          E(e, "ptt", 17)
        },
        { ta: _.r(61) }
      )
    },
    ku = function() {
      gu = _.xi()
      hu()
      try {
        if (
          (_.x(377) || Bs(),
          _.r(61) && ju(),
          eu(),
          Db("defineOutOfPageSlot", Cp),
          Db("defineSlot", Ap),
          Db("defineUnit", Ap),
          Db("destroySlots", Bp),
          Db("getWindowsThatCanCommunicateWithHostpageLibrary", tp),
          Db("display", Dp),
          zo(),
          Db("getEventLog", function() {
            return new pt()
          }),
          Db(
            "sizeMapping",
            P(90, function() {
              return new Et()
            })
          ),
          Db("apiReady", !0),
          Eb().fifWin && "complete" != document.readyState
            ? sj(window, function() {
                window.setTimeout(function() {
                  Tm()
                }, 0)
              })
            : Tm(),
          iu(),
          !_.gj(221) && _.x(311) && tb(),
          (_.x(84) || pk.C().j) && fu(),
          $k(),
          _.x(346) && lc())
        ) {
          var a = new Pk("gpt_nonce_csp")
          gb(a)
          Rk(a)
        }
      } catch (b) {
        Yk(106, b)
      }
    }
  var mu = function(a, b) {
      var c = b || lu
      return function() {
        var d = this || _.q
        d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {})
        var e = c(vc(a), arguments)
        return d.hasOwnProperty(e) ? d[e] : (d[e] = a.apply(this, arguments))
      }
    },
    lu = function(a, b) {
      a = [a]
      for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c])
      return a.join("\x0B")
    }
  var nu = mu(
    function(a) {
      return a && a.src
        ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(
            a.src
          )
          ? 0
          : 1
        : 2
    },
    function(a, b) {
      return a + "\x0B" + (b && b[0] && b[0].src)
    }
  )
  var ou = null,
    pu = function(a, b, c, d) {
      try {
        var e
        if (!(e = !b)) {
          var f
          if (!(f = !oq(b, c, void 0 === d ? 100 : d))) {
            a: {
              do {
                var g = pa(b, c)
                if (g && "fixed" == g.position) {
                  var h = !1
                  break a
                }
              } while ((b = b.parentElement))
              h = !0
            }
            f = !h
          }
          e = f
        }
        e && (a.height = -1)
      } catch (k) {
        ;(a.width = -1), (a.height = -1)
      }
    },
    vb = function(a) {
      for (
        var b = {}, c = _.F(Ue(a, Fj, 9)), d = c.next();
        !d.done;
        d = c.next()
      )
        (d = d.value), (b[Gj(d)] = C(d, 2))
      a = C(a, 8)
      a.length && null == b.excl_cat && (b.excl_cat = a)
      return b
    },
    qu = function(a, b) {
      var c = {}
      _.wb(a, function(d, e) {
        if (b[e]) {
          var f = b[e].filter(function(g) {
            return _.B(d, "includes").call(d, g)
          })
          f.length && (c[e] = f)
        }
      })
      return c
    },
    ru = function(a) {
      var b = !1,
        c = Ue(a, Fj, 2).map(function(d) {
          var e = Gj(d)
          b = "excl_cat" === e
          d = C(d, 2)
          return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
        })
      a = C(a, 3)
      !b &&
        a.length &&
        c.push(
          encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join())
        )
      return c
    },
    su = function(a, b, c, d, e, f, g) {
      g = void 0 === g ? !1 : g
      this.v = b
      this.T = c
      this.m = a
      this.B = !g && (a || _.x(139))
      this.model = d
      this.o = e
      this.j = f
      this.D = []
      this.l = ""
      this.K = fo()
      this.A = []
      this.G = []
      this.I = $c(_.fj(7))
      this.H = !g || !_.x(294)
    },
    vu = function(a) {
      var b = void 0 === b ? window : b
      var c = a.model.j
      if (!Array.isArray(c)) return ""
      if (a.m) 0 == c.length && (c = Zs(a.v))
      else {
        if (0 == c.length) return ""
        1 < c.length && (c = [c[0]])
      }
      var d = !!Jn(_.q)
      c = c.filter(function(e) {
        var f = a.j.P[e.getSlotElementId()]
        return d && 4 == ck(f)
          ? (fl.C().J(Gm(String(e.getAdUnitPath()))), !1)
          : !0
      })
      if (!c.length) return ""
      30 < c.length &&
        (fl.C().J(zm("30", String(c.length), String(c.length - 30))),
        (c = c.slice(0, 30)))
      tu(a, c, b)
      uu(a)
      return a.l
    },
    wu = function(a, b) {
      try {
        var c = b.top
        var d = Sh(c.document, c)
      } catch (e) {
        d = new _.ra(-12245933, -12245933)
      }
      Z(a, "scr_x", Math.round(d.x), { ha: !0 })
      Z(a, "scr_y", Math.round(d.y), { ha: !0 })
    },
    xu = function(a) {
      var b = window,
        c = Pa(a.o, b.document) || ""
      var d = b.document.domain
      var e = b.history.length,
        f = b.screen,
        g = b.document.referrer
      if (ih()) d = Kh().gaGlobal || {}
      else {
        var h = Math.round(new Date().getTime() / 1e3),
          k = b.google_analytics_domain_name
        d = "undefined" == typeof k ? Sp("auto", d) : Sp(k, d)
        var l = -1 < c.indexOf("__utma=" + d + "."),
          m = -1 < c.indexOf("__utmb=" + d),
          n
        ;(n = (nh() || Kh()).gaGlobal) ||
          ((n = {}), ((nh() || Kh()).gaGlobal = n))
        var u = !1
        if (l)
          (g = c
            .split("__utma=" + d + ".")[1]
            .split(";")[0]
            .split(".")),
            m ? (n.sid = g[3]) : n.sid || (n.sid = h + ""),
            (n.vid = g[0] + "." + g[1]),
            (n.from_cookie = !0)
        else {
          n.sid || (n.sid = h + "")
          if (!n.vid) {
            u = !0
            m = Math.round(2147483647 * Math.random())
            l = [
              Pp.appName,
              Pp.version,
              Pp.language ? Pp.language : Pp.browserLanguage,
              Pp.platform,
              Pp.userAgent,
              Qp() ? 1 : 0,
            ].join("")
            f
              ? (l += f.width + "x" + f.height + f.colorDepth)
              : _.q.java &&
                _.q.java.awt &&
                ((f = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize()),
                (l += f.screen.width + "x" + f.screen.height))
            l = l + c + (g || "")
            for (g = l.length; 0 < e; ) l += e-- ^ g++
            n.vid = (m ^ (Rp(l) & 2147483647)) + "." + h
          }
          n.from_cookie = !1
        }
        if (!n.cid) {
          b: for (
            h = 999,
              k &&
                ((k = 0 == k.indexOf(".") ? k.substr(1) : k),
                (h = k.split(".").length)),
              k = 999,
              c = c.split(";"),
              g = 0;
            g < c.length;
            g++
          )
            if ((f = Tp.exec(c[g]) || Up.exec(c[g]) || Wp.exec(c[g]))) {
              e = f[1] || 0
              if (e == h) {
                var z = f[2]
                break b
              }
              e < k && ((k = e), (z = f[2]))
            }
          u && z && -1 != z.search(/^\d+\.\d+$/)
            ? ((n.vid = z), (n.from_cookie = !0))
            : z != n.vid && (n.cid = z)
        }
        n.dh = d
        n.hid || (n.hid = Math.round(2147483647 * Math.random()))
        d = n
      }
      Z(a, "ga_vid", d.vid, { Z: !1 })
      Z(a, "ga_sid", d.sid, { Z: !1 })
      Z(a, "ga_hid", d.hid, { Z: !1 })
      Z(a, "ga_fc", d.from_cookie, { Z: !1 })
      Z(a, "ga_cid", d.cid, { Z: !1 })
      Z(a, "ga_wpids", b.google_analytics_uacct)
    },
    yu = function(a, b) {
      if (_.x(370))
        try {
          var c =
            b.external &&
            b.external.getHostEnvironmentValue &&
            b.external.getHostEnvironmentValue.bind(b.external)
          if (c) {
            var d = parseInt(JSON.parse(c("os-mode"))["os-mode"], 10)
            0 <= d && Z(a, "wsm", d + 1)
          }
        } catch (e) {}
    },
    tu = function(a, b, c) {
      c = void 0 === c ? window : c
      var d = c.document,
        e = a.j.M
      Z(a, "gdfp_req", 1, { Z: !1 })
      Z(a, "pvsid", a.model.v)
      Z(a, "correlator", C(e, 26))
      Z(a, "output", a.model.I, { Z: !1 })
      Z(a, "impl", a.model.o, { Z: !1 })
      _.x(200) ||
        (0 == Me(e, 24, 0) &&
          (Z(a, "adsid", a.model.T), Z(a, "pucrd", a.model.K)),
        Z(a, "jar", a.model.H))
      zu(a)
      isNaN(a.model.Ta) || Z(a, "pod", a.model.Ta, { Z: !1 })
      isNaN(a.model.Ua) || Z(a, "ppos", a.model.Ua, { Z: !1 })
      isNaN(a.model.Fa) || Z(a, "scor", a.model.Fa, { Z: !1 })
      Au(a)
      Z(a, "vrg", Ua())
      Bu(a)
      Cu(a)
      Du(a, b[0].m)
      Z(a, "sc", _.gj(6) ? 1 : 0, { ha: !0 })
      window.postMessage && Z(a, "sfv", po())
      Z(a, "ecs", a.model.Ca)
      a.B
        ? (Eu(a, b, d), Fu(a), Gu(a, b))
        : (Hu(a, b[0], d), Fu(a), Iu(a, b[0]))
      Ju(a, b)
      Ku(a, c)
      Ok("google_preview") && Z(a, "gct", Nk("google_preview"))
      if (a.v.v) {
        Z(a, "is_amp", "1")
        Z(a, "amp_v", jh())
        Z(a, "act", kh())
        qh &&
          !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(
            c.location.href
          ) &&
          Z(a, "ati", 1)
        var f = rh(c)
        f && Z(a, "apn", f.substr(0, 10))
        try {
          var g = JSON.parse(c.context.cachedFrameName_)
          g.attributes &&
            g.attributes.useSameDomainRenderingUntilDeprecated &&
            Z(a, "asd", 1)
        } catch (k) {}
      }
      ;(Qf(c.top) || og(window.IntersectionObserver)) && Z(a, "abxe", 1)
      ;(f = ej(10)) && Z(a, "expflags", f)
      Lu(a, b, c)
      f = {}
      f.u_tz = -new Date().getTimezoneOffset()
      f.u_his = Mh()
      f.u_java =
        !!cf.navigator &&
        "unknown" !== typeof cf.navigator.javaEnabled &&
        !!cf.navigator.javaEnabled &&
        cf.navigator.javaEnabled()
      cf.screen &&
        ((f.u_h = cf.screen.height),
        (f.u_w = cf.screen.width),
        (f.u_ah = cf.screen.availHeight),
        (f.u_aw = cf.screen.availWidth),
        (f.u_cd = cf.screen.colorDepth))
      cf.navigator &&
        cf.navigator.plugins &&
        (f.u_nplug = cf.navigator.plugins.length)
      cf.navigator &&
        cf.navigator.mimeTypes &&
        (f.u_nmime = cf.navigator.mimeTypes.length)
      Mu(a, f)
      Nu(a)
      try {
        var h = Qh()
      } catch (k) {
        h = "0"
      }
      Z(a, "flash", h, { Z: !1, ha: !0 })
      Ou(a, b, c)
      _.x(2) || Pu(a, c)
      ;(_.x(84) || pk.C().j) && Z(a, "rumc", a.model.v, { Z: !1 })
      _.x(83) && Z(a, "rume", 1, { Z: !1 })
      Z(a, "vis", _.xn(d), { Z: !1 })
      0 === nu(_.gj(172)) || Z(a, "stss", nu(_.gj(172)))
      !a.v.v && Qu(c) && Z(a, "arp", 1, { Z: !1 })
      _.q.navigator &&
        _.q.navigator.deviceMemory &&
        Z(a, "dmc", _.q.navigator.deviceMemory)
      wu(a, c)
      Ru(a, b, c)
      Su(a, b, c)
      0 < a.model.A.length && Z(a, "psts", a.model.A)
      xu(a)
      yu(a, c)
      _.x(23) && (Z(a, "js", xq(c)), Z(a, "ms", yq(a.model.v.toString(), c)))
      Tu(a, c, b)
      Uu(a, b, c)
      b = C(e, 7)
      c = _.gj(251)
      _.x(363) && c && Z(a, "uach", Ee(Rc(c), 3))
      _.x(164) &&
        b.length &&
        Z(
          a,
          "supporting_urls",
          b.map(function(k) {
            return encodeURIComponent(k)
          })
        )
      Vu(a)
    },
    Ru = function(a, b, c) {
      var d = [],
        e = []
      b = _.F(b)
      for (var f = b.next(); !f.done; f = b.next()) {
        f = f.value
        var g = (g = (g = ja(f)) && g.parentElement) ? pa(g, window) : null
        g = Cg(g)
        if (!g || (1 == g[0] && 1 == g[3])) {
          var h = (g = ja(f)) && g.parentElement,
            k = gp(f) || new _.sf(0, 0)
          pu(k, h, c)
          d.push(k.width + "x" + k.height)
          f.L
            ? (f = f.L)
            : ((h = Dk(ja(f))), 1 != _.r(59) && (f.L = h), (f = h))
          f = f || new _.sf(0, 0)
          pu(f, g, c, 1)
          ;-1 == k.height && (f.height = -1)
          e.push(f.width + "x" + f.height)
        } else d.push("-1x-1"), e.push("-1x-1")
      }
      Z(a, "psz", d, { pa: "|" })
      Z(a, "msz", e, { pa: "|" })
    },
    Su = function(a, b, c) {
      var d = a.j.P
      b = b.map(function(e) {
        return d[e.getSlotElementId()]
      })
      _.x(252) &&
        b.some(function(e) {
          return null != C(e, 16)
        }) &&
        (Z(
          a,
          "rtgs",
          b.map(function(e) {
            return null != C(e, 16) ? "1" : "0"
          }),
          { pa: "!" }
        ),
        Z(
          a,
          "max_w",
          b.map(function(e) {
            return Ut(Se(e, Wj, 16), c)
          }),
          { pa: "!" }
        ),
        Z(
          a,
          "max_h",
          b.map(function(e) {
            return Vt(Se(e, Wj, 16), c)
          }),
          { pa: "!" }
        ),
        Z(
          a,
          "min_w",
          b.map(function(e) {
            return Wt(Se(e, Wj, 16))
          }),
          { pa: "!" }
        ),
        Z(
          a,
          "min_h",
          b.map(function(e) {
            return Xt(Se(e, Wj, 16))
          }),
          { pa: "!" }
        ))
    },
    Tu = function(a, b, c) {
      var d = [],
        e = []
      c.forEach(function(f) {
        var g = new zq(),
          h = ja(f)
        f = 0
        if (h) {
          var k = _.x(291),
            l = k && _.x(327)
          l = Th(!0, b, 0 !== qg() && l).width
          if (null !== b && b != b.top) {
            var m = Th(!1, b).width
            ;(-12245933 == l || -12245933 == m || m < l) && g.set(8)
          }
          k &&
            -12245933 != l &&
            ((k = 1 + _.r(45)),
            l * k < b.document.documentElement.scrollWidth && g.set(10))
          for (k = 0; h && 100 > k; k++, h = h.parentElement)
            if ((m = pa(h, b))) {
              if (m.overflowY && "visible" != m.overflowY) {
                g.set(2)
                var n = Dk(h)
                n && (f = f ? Math.min(f, n.width) : n.width)
                if (g.get(9)) break
              }
              ;("sticky" != m.position && "fixed" != m.position) || g.set(9)
              "none" == m.display && g.set(7)
              "IFRAME" == h.nodeName &&
                ((m = parseInt(m.width, 10)),
                m < l && (g.set(8), (f = f ? Math.min(m, f) : m)))
            } else g.set(3)
        } else g.set(1)
        d.push(Aq(g))
        e.push(f)
      })
      Z(a, "fws", d)
      Z(a, "ohw", e)
    },
    Xu = function(a, b, c) {
      var d = [],
        e = [],
        f = a.j,
        g = f.P,
        h = !!w(f.M, 15)
      if (a.m)
        b.forEach(function(k) {
          k = Mk({ slot: k, aa: g[k.getSlotElementId()] }, c, h) || Wu
          d.push(Math.round(k.x))
          e.push(Math.round(k.y))
        })
      else if (
        (b =
          (a.v.v ? mh() : null) ||
          Mk({ slot: b[0], aa: g[b[0].getSlotElementId()] }, c, h))
      )
        d.push(Math.round(b.x)), e.push(Math.round(b.y))
      a.B
        ? (Z(a, "adxs", d), Z(a, "adys", e))
        : (Z(a, "adx", d[0], { ha: !0 }), Z(a, "ady", e[0], { ha: !0 }))
    },
    Uu = function(a, b, c) {
      if (!a.m) {
        var d = null,
          e = null
        try {
          d = Sh(c.top.document, c.top).y
        } catch (h) {
          return
        }
        var f = a.j,
          g = f.P
        f = !!w(f.M, 15)
        ;(b = Mk(
          { slot: b[0], aa: g[b[0].getSlotElementId()] },
          c.document,
          f
        )) && (e = Math.round(b.y))
        c = Th(!0, c).height
        e &&
          -12245933 !== e &&
          -12245933 !== c &&
          (e < d + c
            ? Z(a, "btvi", 0, { ha: !0 })
            : ((d = _.gj(248) + 1), (zj.C()[248] = d), Z(a, "btvi", d)))
      }
    },
    Zu = function(a, b) {
      var c = a.j.P
      return b
        .map(
          a.m
            ? function(d) {
                var e = c[d.getSlotElementId()],
                  f
                _.x(364) ? (f = d.gb || nk(e, Ik(d, a.j))) : (f = nk(e))
                return (d.gb = f)
              }
            : function(d) {
                return Yu(a, d)
              }
        )
        .join(",")
    },
    Yu = function(a, b) {
      var c = a.j.P[b.getSlotElementId()]
      a = b.gb || nk(c, Ik(b, a.j))
      return (b.gb = a)
    },
    Ou = function(a, b, c) {
      c = void 0 === c ? window : c
      var d = c.document
      b = (_.x(364)
      ? w(a.j.M, 6)
      : a.m)
        ? qk(a.v.l)
        : rk(b[0], a.j.P[b[0].getSlotElementId()], $s(a.v)) || qk(a.v.l)
      var e = Ok("google_preview"),
        f = e ? wk(d.URL) : d.URL
      e = e ? wk(d.referrer) : d.referrer
      d = !1
      if (null != b) {
        var g = f
        Zh(c) || ((e = ""), (d = !0))
      } else b = f
      a.v.v && (e = (e = ih()) && e.referrer)
      if (_.x(2)) Z(a, "url", b), Z(a, "ref", e)
      else {
        f = new ii(c)
        var h = f.j[0].depth,
          k = h && 0 < h
        if (k && (Z(a, "nhd", h), c.location.ancestorOrigins)) {
          c = []
          h = Math.min(f.j.length, 27)
          for (var l = 1; l < h; l++)
            f.j[l] && f.j[l].url && (c[l - 1] = f.j[l].url)
          c = ji(f, c.reverse())
          Z(a, "iag", c)
          c = f.j
          h = []
          for (l = c.length - 1; 0 < l; l--) {
            var m = c[l]
            m && null != m.url && h.push(Of(m.url.match(_.Nf)[3] || null))
          }
          c = ei(h)
          0 < c && Z(a, "mdo", c)
        }
        Z(a, "url", b)
        null != g && g != b && Z(a, "loc", g)
        Z(a, "ref", e)
        k &&
          (g = f.j[Math.max(f.j.length - 1, 0)].url) &&
          Z(a, "top", d ? Of(g.match(_.Nf)[3] || null) : g)
      }
    },
    Pu = function(a, b) {
      b = void 0 === b ? window : b
      var c = b.document,
        d = c.scripts
      d && Z(a, "dssz", d.length)
      b = new ii(b)
      if (
        (d = b.l.document && b.l.document.scripts ? b.l.document.scripts : [])
      ) {
        for (var e = [], f = d.length - 1; 0 <= f && 26 > e.length; )
          d[f].src && e.unshift(d[f].src), f--
        d = ji(b, e)
      } else d = 0
      Z(a, "icsg", d, { ha: !0 })
      if (
        (b = b.l.document && b.l.document.scripts ? b.l.document.scripts : [])
      ) {
        d = []
        for (e = b.length - 1; 0 <= e; e--)
          (f = b[e]) &&
            null != f.src &&
            d.push(Of(f.src.match(_.Nf)[3] || null))
        b = ei(d)
      } else b = 0
      Z(a, "mso", b)
      b = Error()
      b.stack &&
        ((d = b.stack),
        (e = d.split(/\r\n|\r|\n/).length),
        "Error" == d.slice(0, 5) && e--,
        (d = e - 13),
        0 > d &&
          ((d = 0),
          (e = new Pk("gpt_negative_stack_trace", vk(), _.gj(23))),
          gb(e, a.v),
          E(e, "stackTrace", b.stack),
          Rk(e)),
        Z(a, "std", d, { ha: !0 }))
      c.currentScript &&
        c.currentScript.text &&
        Z(a, "csl", c.currentScript.text.length)
    },
    Iu = function(a, b) {
      b = a.j.P[b.getSlotElementId()]
      b = xb(b)
      Z(a, "scp", b, { pa: "&" })
    },
    $u = function(a, b) {
      var c = a.j.P
      a = b.map(function(d) {
        d = c[d.getSlotElementId()]
        return vb(d)
      })
      for (b = a.shift() || {}; a.length; ) b = qu(b, a.shift())
      return b
    },
    Gu = function(a, b) {
      var c = a.j.P,
        d
      _.x(49) && 1 < b.length
        ? (d = av(a, b))
        : (d = b.map(function(e) {
            e = c[e.getSlotElementId()]
            return xb(e).join("&")
          }))
      b = d
      b.join("|").length == d.length - 1 && (b = null)
      Z(a, "prev_scp", b, { pa: "|" })
    },
    av = function(a, b) {
      var c = a.j.P,
        d = [],
        e = $u(a, b)
      b.forEach(function(g) {
        g = c[g.getSlotElementId()]
        g = xb(g, function(h, k) {
          k = e[k]
          return !k || !_.B(k, "includes").call(k, h)
        })
        d.push(g.join("&"))
      })
      var f = []
      _.wb(e, function(g, h) {
        g = g.map(encodeURIComponent)
        h = encodeURIComponent(h)
        f.push(h + "=" + g.join())
      })
      f.length && Z(a, "csp", f, { pa: "&" })
      return d
    },
    Mu = function(a, b) {
      _.wb(b, function(c, d) {
        Z(a, d, c, { Z: !1 })
      })
    },
    Bu = function(a) {
      var b = a.j.M
      0 != Me(b, 24, 0) && Z(a, "co", Me(b, 24, 0), { ha: !0 })
    },
    Du = function(a, b) {
      if (!_.x(367)) {
        var c = _.gj(221)
        b = Sg(c, b)
        b.hd && Z(a, "npa", 1)
        Z(a, "guci", b.Tc)
      }
    },
    Cu = function(a) {
      var b = Qj(a.j.M) || new Kj()
      !0 === w(b, 1) && Z(a, "rdp", "1")
      !0 === w(b, 9) && Z(a, "ltd", "1")
      var c = C(a.o, 2)
      c && Z(a, "gdpr_consent", c)
      null != C(a.o, 3) &&
        ((c = w(a.o, 3)), Z(a, "gdpr", c ? "1" : "0", { ha: !0 }))
      ;(c = C(a.o, 4)) && Z(a, "addtl_consent", c)
      ;(c = C(a.o, 1)) && Z(a, "us_privacy", c)
      ;(w(a.o, 6) || (_.x(373) && w(b, 8))) && Z(a, "npa", 1)
      c = Me(b, 6, 2)
      2 !== c && Z(a, "tfua", c, { ha: !0 })
      null != C(b, 5) && ((b = C(b, 5)), Z(a, "tfcd", b, { ha: !0 }))
    },
    Fu = function(a) {
      var b = a.j.M
      1 != Me(b, 24, 0) &&
        null != C(b, 16) &&
        Z(a, "ppid", C(b, 16), { ha: !0 })
    },
    Ju = function(a, b) {
      var c = a.j,
        d = c.M,
        e = c.P[b[0].getSlotElementId()]
      c = 1 != a.model.wa
      e = !!w(e, 17)
      b = sk(b, a.j.P, a.v.l, $s(a.v))
      d = w(d, 27) || !1
      var f = 3 == a.model.wa,
        g = new zq()
      g.set(0, c)
      g.set(1, e)
      g.set(2, b)
      g.set(3, d)
      g.set(4, f)
      c = Aq(g)
      0 < c && Z(a, "eri", c)
    },
    Ku = function(a, b) {
      var c = a.j.M,
        d = ru(c)
      Z(a, "cust_params", d, { pa: "&" })
      if (a.T && 0 == Me(c, 24, 0)) {
        d = Ra("__gads", a.o, a.T.j.document)
        Z(a, "cookie", d, { ha: !0 })
        var e = a.T
        if (0 === e.l) {
          var f = a.o
          if (Ra("__gads", f, e.j.document)) f = !0
          else {
            var g = e.j.document
            g = void 0 === g ? document : g
            w(f, 5) && new Qa(g).set("GoogleAdServingTest", "Good", void 0)
            if ((g = "Good" === Ra("GoogleAdServingTest", f, e.j.document))) {
              var h = e.j.document
              h = void 0 === h ? document : h
              w(f, 5) &&
                ((f = new Qa(h)),
                f.get("GoogleAdServingTest"),
                f.set("GoogleAdServingTest", "", {
                  oc: 0,
                  path: void 0,
                  domain: void 0,
                }))
            }
            f = g
          }
          e.l = f ? 2 : 1
        }
        2 === e.l && !d && Z(a, "cookie_enabled", "1", { ha: !0 })
      }
      ;(d = C(c, 8))
        ? (50 < d.length && (d = d.substring(0, 50)),
          (d = 'role:1 producer:12 loc:"' + (d + '"')),
          (d = "a " + (De ? _.q.btoa(d) : Ee(Rc(d), void 0))))
        : (d = "")
      d && Z(a, "uule", d)
      0 == Me(c, 24, 0) &&
        ((c = b.document),
        (b = (qk(a.v.l) || Ya(b)) != c.URL ? c.domain : "") && Z(a, "cdm", b))
      _.x(6) ||
        ((b = new zq()),
        _.q.SVGElement && _.q.document.createElementNS && b.set(0),
        (c = ng()),
        c["allow-top-navigation-by-user-activation"] && b.set(1),
        c["allow-popups-to-escape-sandbox"] && b.set(2),
        _.q.crypto && _.q.crypto.subtle && b.set(3),
        _.q.TextDecoder && _.q.TextEncoder && b.set(4),
        (b = Aq(b)),
        Z(a, "bc", b))
    },
    Lu = function(a, b, c) {
      var d = c.document
      0 < navigator.userAgent.indexOf("MSIE ") &&
        Ms(a.v.l, "adsense_encoding", d.charset, !1)
      if (!qk(a.v.l)) {
        try {
          var e = Math.round(Date.parse(c.document.lastModified) / 1e3) || null
        } catch (m) {
          e = null
        }
        Z(a, "lmt", e ? e.toString() : null)
      }
      e = _.x(43) ? _.xi() : new Date().getTime()
      Z(a, "dt", e, { Z: !1 })
      try {
        e = gu
        var f = Math.min(
          zi("domLoading") || Infinity,
          zi("domInteractive") || Infinity
        )
        var g =
          Infinity == f ? Math.max(zi("responseEnd"), zi("navigationStart")) : f
        0 < g &&
          e >= g &&
          (Z(a, "dlt", g, { Z: !1 }), Z(a, "idt", e - g, { Z: !1 }))
      } catch (m) {
        Z(a, "idt", -9, { Z: !1 }), Xk(479, m)
      }
      if (null == ou) {
        a: {
          g = c.navigator
          f = g.userAgent
          e = g.platform
          var h = /WebKit\/(\d+)/,
            k = /rv:(\d+\.\d+)/,
            l = /rv:1\.8([^.]|\.0)/
          if (
            /Win|Mac|Linux|iPad|iPod|iPhone/.test(e) &&
            !/^Opera/.test(f) &&
            ((h = (h.exec(f) || [0, 0])[1]),
            (k = (k.exec(f) || [0, 0])[1]),
            (/Win/.test(e) && /Trident/.test(f) && 11 <= d.documentMode) ||
              (!h && "Gecko" === g.product && 27 <= k && !l.test(f)) ||
              536 <= h)
          ) {
            g = !0
            break a
          }
          g = !1
        }
        f = $h(c, c.document, 500, 300)
        ou = g && !f
      }
      ou || Z(a, "ea", "0", { ha: !0 })
      f = g = Kh()
      for (e = 0; g && g != g.parent; ) (g = g.parent), e++, Qf(g) && (f = g)
      e = f
      g = e.location.href
      e == e.top
        ? (g = { url: g, nc: !0 })
        : ((f = !1),
          (l = e.document) &&
            l.referrer &&
            ((g = l.referrer), e.parent == e.top && (f = !0)),
          (e = e.location.ancestorOrigins) &&
            (e = e[e.length - 1]) &&
            -1 == g.indexOf(e) &&
            ((f = !1), (g = e)),
          (g = { url: g, nc: f }))
      f = g
      g = $h(Kh(), d, c.google_ad_width, c.google_ad_height)
      f = f.nc
      e = Kh()
      e = e.top == e ? 0 : Qf(e.top) ? 1 : 2
      l = 4
      g || 1 != e
        ? g || 2 != e
          ? g && 1 == e
            ? (l = 7)
            : g && 2 == e && (l = 8)
          : (l = 6)
        : (l = 5)
      f && (l |= 16)
      g = "" + l
      ai()
      Z(a, "frm", g || null)
      a.v.v
        ? (g =
            (g = lh()) && _.sc(g.rootBounds)
              ? new _.sf(g.rootBounds.width, g.rootBounds.height)
              : null)
        : (g = Th(!0, c, _.x(280) && 0 !== qg()))
      g && (Z(a, "biw", g.width), Z(a, "bih", g.height))
      !Zh(c) && (g = Th(!1, c)) && (Z(a, "isw", g.width), Z(a, "ish", g.height))
      a.model.m && Z(a, "oid", a.model.m)
      Xu(a, b, d)
      a.B ? Z(a, "adks", Zu(a, b)) : Z(a, "adk", Yu(a, b[0]))
      d = 0
      void 0 === _.q.postMessage && (d |= 1)
      0 < d && Z(a, "osd", d)
      bv(a)
      g = d = a.v.l
      a.B
        ? (g = Qs(b, d, $s(a.v), a.K))
        : ((f = (f = a.v.j.get(b[0])) ? f.Db : null) &&
            (_.x(162) ? Ns(g, f) : Ns(Os(f), d)),
          (g = Ps(g)))
      Z(a, "adsenseParameters", g, { Z: !1 })
      d = Nh(c)
      a.H
        ? (Z(a, "ifi", d + 1),
          (d = c),
          (b = b.length),
          (b = void 0 === b ? 1 : b),
          (d = nh(ih(d)) || d),
          (d.google_unique_id = (d.google_unique_id || 0) + b))
        : Z(a, "ifi", d)
      null !== c && c != c.top
        ? ((b = [c.document.URL]),
          c.name && b.push(c.name),
          (c = Th(!1, c, !1)),
          b.push(c.width.toString()),
          b.push(c.height.toString()),
          (c = bg(b.join(""))))
        : (c = 0)
      0 != c && Z(a, "ifk", c.toString())
    },
    Nu = function(a) {
      var b = _.q.devicePixelRatio
      ;(b = "number" === typeof b ? +b.toFixed(3) : null) &&
        Z(a, "u_sd", b, { Z: !1 })
    },
    Au = function(a) {
      Z(a, "eid", a.model.G)
      var b = wi().split(",")
      b && Z(a, "debug_experiment_id", b)
    },
    Hu = function(a, b, c) {
      var d = a.j,
        e = d.M
      d = d.P[b.getSlotElementId()]
      Z(a, "iu", b.getAdUnitPath())
      Z(a, "sz", yb(d))
      4 == ck(d) && Z(a, "rbv", "1")
      mk(d) && Z(a, "fluid", "height")
      var f = d && w(d, 12)
      e = !!w(e, 13)
      ;(e = (null == f ? e : f) ? 1 : 0) && Z(a, "fsf", e)
      cv(a, b) && Z(a, "fsb", "1")
      dv(a, [b])
      ev(a, d)
      0 != ck(d) && Z(a, "ists", "1")
      e = yo(ck(d))
      Z(a, "fa", e)
      _.x(98) && !e && Jk({ slot: b, aa: d }, c) && Z(a, "pfx", "1")
    },
    Eu = function(a, b, c) {
      b.forEach(function(l) {
        fv(a, l.getAdUnitPath())
      })
      var d = a.j,
        e = d.M,
        f = d.P
      d = b.map(function(l) {
        return f[l.getSlotElementId()]
      })
      Z(a, "iu_parts", a.A)
      Z(a, "enc_prev_ius", a.G)
      Z(
        a,
        "prev_iu_szs",
        d
          .map(function(l) {
            return yb(l)
          })
          .join()
      )
      if (
        d.some(function(l) {
          return mk(l)
        })
      ) {
        var g = d.map(function(l) {
          return mk(l) ? "height" : "0"
        })
        Z(a, "fluid", g)
      }
      Z(
        a,
        "fsfs",
        ub(
          b,
          function(l) {
            l = (l = f[l.getSlotElementId()]) && w(l, 12)
            var m = !!w(e, 13)
            return (null == l ? m : l) ? 1 : 0
          },
          0
        )
      )
      Z(
        a,
        "fsbs",
        ub(
          b,
          function(l) {
            return cv(a, l) ? 1 : 0
          },
          0
        )
      )
      dv(a, b)
      ev(a, f[b[0].getSlotElementId()])
      ;(g = gv(d)) && Z(a, "ists", g)
      Z(
        a,
        "fas",
        ub(d, function(l) {
          return yo(ck(l))
        })
      )
      ;(g = hv(d, function(l) {
        return 4 == ck(l)
      })) && Z(a, "rbvs", g)
      _.x(98) &&
        (b = hv(b, function(l) {
          var m = f[l.getSlotElementId()]
          return !yo(ck(m)) && Jk({ slot: l, aa: m }, c)
        })) &&
        Z(a, "pfxs", b)
      var h = {}
      d.forEach(function(l) {
        ;(l = l.getClickUrl()) && (h[l] = (h[l] || 0) + 1)
      })
      if (!Yf(h)) {
        b = new Pk("gpt_sra_setclickurl")
        var k = []
        _.wb(h, function(l, m) {
          k.push(m.length + ":" + l)
        })
        E(b, "lenfreqs", k.join())
        gb(b)
        Rk(b, _.gj(58))
      }
    },
    ev = function(a, b) {
      ;(_.x(364) ? w(a.j.M, 6) : a.m) ||
        !b.getClickUrl() ||
        Z(a, "click", b.getClickUrl())
    },
    cv = function(a, b) {
      var c = a.j
      a = c.M
      b = c.P[b.getSlotElementId()]
      a = Se(a, Lj, 18)
      return (b = b && Se(b, Lj, 13)) && null != C(b, 3)
        ? !!w(b, 3)
        : !(!a || !w(a, 3))
    },
    iv = function(a, b) {
      for (var c = 0; c < b.length; c++)
        if ("" != b[c]) {
          for (var d = !1, e = 0; e < a.A.length; e++)
            if (b[c] == a.A[e]) {
              d = !0
              break
            }
          d || a.A.push(b[c])
        }
    },
    jv = function(a, b) {
      for (var c = "", d = 0; d < b.length; d++) {
        if (0 < d) c += "/"
        else if ("" == b[0]) continue
        for (var e = 0; e < a.A.length; e++)
          if (b[d] == a.A[e]) {
            c += e
            break
          }
      }
      return c
    },
    fv = function(a, b) {
      var c = ""
      "" != b &&
        ((b = b.split("/").map(function(d) {
          return d.replace(/,/g, ":")
        })),
        iv(a, b),
        (c = jv(a, b)))
      a.G.push(c)
    },
    gv = function(a) {
      return hv(a, function(b) {
        return 0 != ck(b)
      })
    },
    hv = function(a, b) {
      var c = new zq()
      a.forEach(function(d, e) {
        c.set(a.length - e - 1, b(d))
      })
      return Aq(c)
    },
    bv = function(a) {
      if (a.B) {
        var b = a.model.j.map(function(c) {
          return ft(a.model, c)
        })
        Z(a, "ucis", b, { pa: "|" })
      } else 0 < a.model.j.length && Z(a, "uci", ft(a.model, a.model.j[0]))
    },
    zu = function(a) {
      var b = a.j.M
      w(b, 21) &&
        (Z(a, "hxva", 1, { Z: !1 }),
        Z(a, "cmsid", C(b, 23)),
        Z(a, "vid", C(b, 22)))
    },
    dv = function(a, b) {
      b = ub(
        b,
        function(c) {
          a.H && c.B++
          return c.B - 1
        },
        0
      )
      Z(a, a.B ? "rcs" : "rc", b)
    },
    Vu = function(a) {
      if (!_.gj(221) && _.x(308)) {
        var b = new Hp()
        for (
          var c = [], d = /_GESPSK-(\d+)$/, e = 0;
          e < window.localStorage.length;
          e++
        ) {
          var f = (d.exec(window.localStorage.key(e)) || [])[1]
          f && c.push(f)
        }
        c = _.F(c)
        for (d = c.next(); !d.done; d = c.next())
          (d = d.value),
            (e = cb().get(d)),
            e.getError()
              ? db(e.getError(), d, e.errorMessage)
              : ((d = e.Ea), (0 !== Mt(d) && 1 !== Mt(d)) || Xe(b, 2, d, Ip))
        b = Ue(b, Ip, 2).length ? b.m() : null
        Z(a, "a3p", b)
      }
    },
    Z = function(a, b, c, d) {
      d = void 0 === d ? {} : d
      a.I[b] ||
        void 0 === c ||
        null === c ||
        a.D.push({ Za: b, value: c, options: d })
    },
    uu = function(a) {
      var b =
        _.x(387) && !w(a.o, 5)
          ? "https://pagead2.googlesyndication.com/gampad/ads?"
          : "" + _.gj(247) + "/gampad/ads?"
      a.l = b
      for (b = 0; b < a.D.length; b++) {
        var c = a.D[b]
        if ("adsenseParameters" === c.Za) kv(a, c)
        else {
          var d = lv(c)
          if (mv(a, b, c, d)) break
        }
      }
    },
    lv = function(a) {
      var b = a.value,
        c = a.options,
        d = void 0 === c.Z ? !0 : c.Z
      a = void 0 === c.pa ? "," : c.pa
      c = void 0 === c.ha ? !1 : c.ha
      return _.sc(b)
        ? Array.isArray(b) && b.length
          ? b
              .map(function(e) {
                return nv(e, d)
              })
              .join(nv(a, d))
          : null
        : null == b || (!c && 0 == b)
        ? null
        : nv(b, d)
    },
    mv = function(a, b, c, d) {
      if (!d) return !1
      var e = c.Za,
        f = c.value
      c = c.options
      c = void 0 === c.Z ? !0 : c.Z
      d = e + "=" + d
      if (_.x(168) && 15352 <= a.l.length + d.length) {
        if ("supporting_urls" == e)
          for (d = 0; d < f.length; d++) {
            var g = (d ? nv(",", c) : "&" + e + "=") + nv(f[d], c)
            if (15352 < a.l.length + g.length) break
            a.l += g
          }
        fb("gpt_url_trunc", function(h) {
          E(
            h,
            "lps",
            a.D.slice(b)
              .filter(function(k) {
                return !!lv(k)
              })
              .map(function(k) {
                return k.Za
              })
              .join()
          )
          gb(h)
        })
        a.l += "&trunc=1"
        return !0
      }
      "?" !== a.l[a.l.length - 1] && (a.l += "&")
      a.l += d
      return !1
    },
    kv = function(a, b) {
      var c = [],
        d = []
      b = _.F(Array.isArray(b.value) ? b.value : [])
      for (var e = b.next(); !e.done; e = b.next()) {
        var f = e.value
        e = f.Za
        var g = f.rc,
          h = f.rd
        f = g ? encodeURIComponent(g.toString()) : ""
        h
          ? ((g = h
              .map(function(k) {
                return k ? encodeURIComponent(encodeURIComponent(k)) : ""
              })
              .join(",")),
            d.push(e + "," + encodeURIComponent(f) + "," + g))
          : g && "url" != e && c.push(e + "=" + f)
      }
      c.length && (a.l += "&" + c.join("&"))
      d.length && (a.l += "&sps=" + d.join("|"))
    },
    Qu = function(a) {
      a = Qf(a.top) ? a.top : a
      return (
        _.sc(a.AMP) &&
        !!ag(a.AMP, function(b, c) {
          return !/^inabox/i.test(c)
        })
      )
    },
    nv = function(a, b) {
      a = a.toString()
      return b ? encodeURIComponent(a) : a
    },
    Wu = new _.ra(-9, -9)
  var ov = function(a) {
      this.id = a
    },
    pv = new ov(1),
    qv = new ov(2),
    rv = new ov(3),
    sv = new ov(4),
    tv = new ov(5),
    uv = new ov(6),
    vv = new ov(7),
    wv = new ov(8),
    xv = new ov(9),
    yv = new ov(10),
    zv = new ov(11),
    Av = new ov(12),
    Bv = new ov(13),
    Cv = new ov(14),
    Dv = new ov(15),
    Ev = new ov(16),
    Fv = new ov(17)
  var Gv = function() {
      this.j = new t.Map()
    },
    Iv = function(a, b, c) {
      Hv(a, b, c)
    },
    Kv = function(a, b, c, d) {
      return Jv(a, b, c, d)
    },
    Jv = function(a, b, c, d) {
      var e = P(c, d, function(g, h) {
          Yk(g, h, !0)
        }),
        f = String(b.id)
      b = a.j.get(f)
      b || ((b = []), a.j.set(f, b))
      b.push(e)
      return function() {
        var g = a.j.get(f)
        g && (Ic(g, e), g.length || a.j.delete(f))
      }
    },
    Hv = function(a, b, c) {
      a = a.j.get(String(b.id)) || []
      a = _.F(a)
      for (b = a.next(); !b.done; b = a.next()) (b = b.value), b(c)
    }
  oc(Gv)
  var Lv = null,
    Ov = function() {
      var a = this
      this.j = new t.Set()
      this.l = new t.Map()
      this.v = pk.C()
      var b = P(334, function() {
        for (
          var c = _.F(_.B(a.j, "values").call(a.j)), d = c.next();
          !d.done;
          d = c.next()
        )
          (d = d.value), Mv(a, d) && a.j.delete(d)
      })
      _.v(_.q, "DOMContentLoaded", b)
      Kv(Gv.C(), Ev, 724, function(c) {
        ;(c = xp(op.C(), c)) && Nv(a, c)
      })
      Kv(Gv.C(), Fv, 725, function(c) {
        c = _.F(c)
        for (var d = c.next(); !d.done; d = c.next())
          if (((d = d.value), (d = xp(op.C(), d)))) {
            var e = _.x(384) ? a.l.get(d) : d.R
            null != e ? co(e, d.o) : Nv(a, d)
          }
      })
    },
    Nv = function(a, b) {
      Mv(a, b)
        ? a.j.delete(b)
        : (a.j.add(b),
          _.O(b, function() {
            a.j.delete(b)
          }))
    },
    Mv = function(a, b) {
      var c = ja(b, _.q.document)
      if (c && "DIV" == c.nodeName) {
        var d = _.x(87)
        c = new ao({
          N: _.q,
          wd: a.v,
          hb: c,
          qa: function(e) {
            Xk(336, e, 1)
          },
          pd: d,
        })
        if (c.v)
          return (
            co(c, b.o),
            _.x(384)
              ? (a.l.set(b, c),
                Wo(b, function() {
                  return void a.l.delete(b)
                }))
              : (b.R = c),
            !0
          )
      }
      return !1
    }
  var Pv = function(a, b) {
    b = encodeURIComponent(b)
    a.src = hd(new gd(ed, "data:text/html," + b)).toString()
  }
  var Qv = function(a) {
      a && (a.style.display = "none")
    },
    Rv = function(a, b, c, d, e) {
      a = Jf(new tf(a), "DIV")
      a.id = c
      a.name = c
      c = a.style
      c.border = "0pt none"
      d && ((c.margin = "auto"), (c.textAlign = "center"))
      e &&
        ((d = Array.isArray(e)),
        (c.width = d ? e[0] + "px" : "100%"),
        (c.height = d ? e[1] + "px" : "0%"))
      b.appendChild(a)
      return a
    },
    Tv = function(a, b, c, d, e, f, g, h, k, l, m, n) {
      var u = Sv,
        z = hp.C().v,
        y
      Array.isArray(d) ? (y = new _.sf(d[0], d[1])) : (y = 1)
      d = h || w(f, 4) || (_.x(242) && null == C(f, 4)) ? Hk() : void 0
      g = g || void 0
      _.x(354) || ((g = _.x(338) ? As : xs), (g = w(f, 3) ? g : void 0))
      return new ss({
        Qb: a,
        lc: b,
        Uc: u,
        content: null === l ? qr(c) : "<startguard>" + c + "<endguard>",
        size: y,
        $c: { info: function() {}, J: function() {}, error: function() {} },
        Mc: k,
        qc: e,
        xc: g,
        permissions: {
          rb: null != C(f, 1) ? !!w(f, 1) : !h,
          sb: null != C(f, 2) ? !!w(f, 2) : !1,
        },
        lb: !!Eb().fifWin,
        ld: po(),
        Jc: qo(),
        Dc: !1,
        hostpageLibraryTokens: z,
        qa: Xk,
        Wa: null === l ? void 0 : l,
        uniqueId: n,
        Ca: m,
        wc: d,
      })
    },
    Uv = function(a, b) {
      var c = oj(
        495,
        function() {
          a.removeEventListener("load", c)
          b()
        },
        Xk
      )
      a.addEventListener("load", c)
    },
    Vv = function(a, b, c) {
      var d = void 0 === d ? !0 : d
      var e = void 0 === e ? !0 : e
      b = qr(b, "<script>var inDapIF=true,inGptIF=true;\x3c/script>")
      try {
        var f = a.contentWindow ? a.contentWindow.document : a.contentDocument
        d && Jd() && f.open("text/html", "replace")
        c()
        f.write(b)
        a.contentWindow &&
          a.contentWindow.history &&
          a.contentWindow.history.replaceState &&
          ld(a.contentWindow.location.href, "#") &&
          a.contentWindow.history.replaceState(null, "", "#" + Math.random())
        e && f.close()
      } catch (g) {
        Yk(653, g, !0)
      }
    },
    Wv = function(a) {
      try {
        Uv(a, function() {
          a.removeAttribute("name")
        }),
          Pv(
            a,
            '<script>document.open("text/html","replace");var a=window.name;window.name="";document.write(a);document.close();\x3c/script>'
          )
      } catch (b) {
        Yk(668, b, !0)
      }
    }
  var Xv = function(a) {
      var b = _.r(8, -1)
      return -1 != b
        ? b
        : null != C(a, 1)
        ? null != C(a, 3) && 0 != qg()
          ? C(a, 1) * Ke(a, 3)
          : C(a, 1)
        : null
    },
    Yv = function(a) {
      return null != C(a, 2)
        ? null != C(a, 3) && 0 != qg()
          ? C(a, 2) * Ke(a, 3)
          : C(a, 2)
        : null
    },
    Zv = function(a) {
      var b = new Jj()
      a = _.F(a)
      for (var c = a.next(); !c.done; c = a.next()) {
        c = c.value
        if (null != C(c, 1)) {
          var d = C(c, 1)
          D(b, 1, d)
        }
        null != C(c, 2) && ((d = C(c, 2)), D(b, 2, d))
        null != C(c, 3) && ((c = Ke(c, 3)), D(b, 3, c))
      }
      return b
    }
  var $v = function() {
    this.module = 2
  }
  $v.prototype.toString = function() {
    return String(this.module)
  }
  _.aw = new $v()
  var bw, cw, fw
  bw = {}
  cw = ((bw[2] = { bd: "page_level_ads" }), bw)
  _.dw = function() {
    this.l = {}
    this.j = cw
  }
  _.ew = function(a, b) {
    b = b.module
    a.l[b] = a.l[b] || new Zq()
    return a.l[b]
  }
  fw = function(a, b) {
    var c = b.module
    b = "_gpt_js_load_" + c + "_"
    var d = P(340, function(e) {
      if (a.j[c] && "function" === typeof e) {
        var f = a.j[c]
        f = (void 0 === f.Kc ? [] : f.Kc).map(function(g) {
          return _.ew(a, g).j
        })
        t.Promise.all(f).then(function() {
          e.call(_.q, _)
        })
      }
    })
    Object.defineProperty(Eb(), b, {
      value: function(e) {
        if (d) {
          var f = d
          d = null
          f(e)
        }
      },
      writable: !1,
      enumerable: !1,
    })
  }
  _.dw.prototype.load = function(a) {
    var b = _.ew(this, a),
      c = this.j[a.module].bd,
      d = _.x(393) ? "https://www.googletagservices.com/" : Sr.Oa(),
      e = Rr.Oa(),
      f = Ua()
    var g = _.r(25)
    c = d + e + c + "_" + f + ".js"
    g && (c += "?" + g)
    g = c
    fw(this, a)
    Uf(document, g)
    return b.j
  }
  oc(_.dw)
  _.dw.prototype.load = mu(_.dw.prototype.load)
  var Sv = "3rd party ad content"
  Db(
    "setAdIframeTitle",
    Q(729, function(a) {
      Sv = a
    })
  )
  var gw = function(a, b, c) {
    _.N.call(this)
    this.l = c
    D(this.l, 17, !0)
    this.j = a
    b.Da(this.j, c)
    this.o = b
  }
  _.H(gw, ll)
  gw.prototype.za = function() {
    return new qt(this)
  }
  gw.prototype.display = function(a) {
    var b = this.j.getSlotElementId()
    document.write('<div id="' + Qd(b) + '"></div>')
    ja(this.j)
      ? hw(this.o, a, this.j)
      : fb("gpt_pb_write", function(c) {
          gb(c)
        })
  }
  gw.prototype.set = function(a, b) {
    "page_url" == a && b && D(this.l, 18, String(b))
    return this
  }
  gw.prototype.get = function(a) {
    return "page_url" !== a ? null : C(this.l, 18)
  }
  var iw = function() {
      this.j = {}
    },
    kw = function(a, b, c) {
      var d
      c && (d = "//" + c + ".safeframe.googlesyndication.com")
      c = ns(b, po(), qo(), !0, d)
      a.j[c] ||
        ((a.j[c] = 1),
        Hq()
          ? jw(a, c)
          : Eb().fifWin ||
            ((b = b.document),
            (a = Jf(new tf(b), "IFRAME")),
            (a.src = c),
            (a.style.visibility = "hidden"),
            (a.style.display = "none"),
            (b = b.getElementsByTagName("script")),
            0 < b.length &&
              ((b = b[b.length - 1]),
              b.parentNode && b.parentNode.insertBefore(a, b.nextSibling))))
    },
    jw = function(a, b) {
      var c = Iq(document, b, "prefetch", "")
      c &&
        _.v(c, "load", function() {
          a.j[b] = 3
          c && _.Ff(c)
        })
    }
  oc(iw)
  var lw = function(a, b, c, d) {
    var e = P(506, function(f) {
      f = JSON.parse(f.data)
      f.message === c && d(f)
    })
    _.O(a, bh(b, e))
  }
  var mw = function(a, b, c, d, e) {
    _.N.call(this)
    this.slot = b
    this.m = c
    this.na = d
    this.l = null
    this.o = new tf(a)
    this.A = e
  }
  _.H(mw, _.N)
  var nw = function(a, b, c) {
    var d = c.ua,
      e = c.Sa,
      f = c.Ja,
      g = c.Sc,
      h = c.Xb,
      k = c.Ab,
      l = c.Gb,
      m = c.isBackfill,
      n = c.Lb,
      u = c.Wb,
      z = c.Yb
    c = c.Oc || ""
    e && e.setAttribute("data-google-query-id", c)
    Ji(pk.C(), "5", a.slot.o)
    Zo(a.slot)
    a.l = a.j("height" === g ? "fluid" : [b.width, b.height], {
      ua: d,
      Ja: f,
      Xb: h,
      Ab: k,
      Gb: l,
      isBackfill: m,
      Lb: n,
      Wb: u,
      Yb: z,
    })
    u && Dg(a.l, u)
    $o(a.slot)
    Iv(Gv.C(), sv, { slotId: a.slot.getSlotId(), size: b })
    b = _.r(19)
    if (0 < b) {
      var y = setTimeout(function() {
        var G = Gv.C(),
          S = a.slot.getSlotId()
        Hv(G, pv, S)
      }, 1e3 * b)
      _.O(a, function() {
        return void clearTimeout(y)
      })
    }
    return a.l
  }
  mw.prototype.loaded = function(a) {
    a && a.setAttribute("data-load-complete", !0)
    a = Gv.C()
    var b = this.slot.getSlotId()
    Hv(a, Bv, b)
    Ji(pk.C(), "6", this.slot.o)
    _.x(86) && mj()
  }
  mw.prototype.v = function() {
    _.N.prototype.v.call(this)
    var a = ja(this.slot, this.o.j)
    a && a.removeAttribute("data-google-query-id")
    this.l = null
  }
  var ow = function() {
    mw.apply(this, arguments)
  }
  _.H(ow, mw)
  var pw = function(a, b, c) {
      var d = dp(a.slot),
        e = a.o.j
      a = Sv
      e = void 0 === e ? document : e
      e = Jf(new tf(e), "IFRAME")
      e.id = d
      e.title = a
      e.name = c || d
      Array.isArray(b)
        ? null != b[0] &&
          null != b[1] &&
          ((e.width = String(b[0])), (e.height = String(b[1])))
        : ((e.width = "100%"), (e.height = "0"))
      e.allowTransparency = "true"
      e.scrolling = "no"
      e.marginWidth = "0"
      e.marginHeight = "0"
      e.frameBorder = "0"
      e.style.border = "0"
      e.style.verticalAlign = "bottom"
      return e
    },
    qw = function(a, b, c, d) {
      d.appendChild(b)
      "string" !== typeof c &&
        ((b.width = String(c[0])), (b.height = String(c[1])))
      it(
        b,
        a.slot,
        function() {
          return a.loaded(b)
        },
        a.A
      )
    }
  var rw = function() {
    ow.apply(this, arguments)
  }
  _.H(rw, ow)
  rw.prototype.j = function(a, b) {
    var c = b.Ja
    b = pw(this, a, b.ua)
    Wv(b)
    qw(this, b, a, c)
    return b
  }
  rw.prototype.ib = function() {
    return !1
  }
  var sw = function() {
    ow.apply(this, arguments)
  }
  _.H(sw, ow)
  sw.prototype.j = function(a, b) {
    var c = b.ua
    b = b.Ja
    var d = pw(this, a)
    try {
      Pv(d, c)
    } catch (e) {
      Yk(654, e, !0)
    }
    qw(this, d, a, b)
    return d
  }
  sw.prototype.ib = function() {
    return !1
  }
  var tw = function() {
    mw.apply(this, arguments)
  }
  _.H(tw, mw)
  tw.prototype.j = function(a, b) {
    var c = this,
      d = b.ua,
      e = b.Ja,
      f = b.Xb,
      g = b.Ab,
      h = b.Gb,
      k = b.isBackfill,
      l = b.Lb,
      m = b.Wb,
      n = b.Yb,
      u = this.na
    b = u.M
    u = u.P[this.slot.getSlotElementId()]
    f = Mj(new Lj(), !!f)
    null != n && D(f, 4, n)
    f = so([f, Se(b, Lj, 18), u && Se(u, Lj, 13)])
    var z = String(w(f, 4))
    null != n && n !== w(f, 4) && fl.C().J(Jm(z, String(n)))
    k ||
      fb("gpt_sf_r", function(G) {
        gb(G)
        E(G, "GAM", String(n))
        E(G, "Final", z)
      })
    h = h ? C(h, 2) : null
    b = _.x(391) ? ct(this.m, this.slot) : this.slot.ba
    var y = Tv(
      e,
      dp(this.slot),
      d,
      a,
      function() {
        return c.loaded(y.j)
      },
      f,
      g || null,
      !!k,
      !!l,
      h,
      b,
      m
    )
    _.O(this, function() {
      try {
        100 != y.status &&
          (2 == y.H && (pr(y.v), (y.H = 0)),
          window.clearTimeout(y.K),
          (y.K = -1),
          (y.B = 3),
          y.l && (y.l.sa(), (y.l = null)),
          y.T && y.j
            ? y.T.unobserve(y.j)
            : (_.kb(window, "resize", y.I), _.kb(window, "scroll", y.I)),
          y.A && y.j && y.A == _.Gf(y.j) && y.A.removeChild(y.j),
          (y.j = null),
          (y.A = null),
          y.T && (y.T.disconnect(), (y.T = null)),
          (y.status = 100))
      } catch (G) {}
    })
    return y.j
  }
  tw.prototype.loaded = function(a) {
    mw.prototype.loaded.call(this, a)
    a = this.na.P[this.slot.getSlotElementId()]
    Yt({ slot: this.slot, aa: a })
  }
  tw.prototype.ib = function() {
    return !1
  }
  var uw = function() {
    ow.apply(this, arguments)
  }
  _.H(uw, ow)
  uw.prototype.j = function(a, b) {
    var c = b.ua,
      d = b.Ja
    b = b.Ab
    var e = pw(this, a)
    b && e.setAttribute("sandbox", b.join(" "))
    ;-1 == Ed.indexOf("iPhone") && (e.srcdoc = "")
    qw(this, e, a, d)
    Vv(e, c, function() {})
    return e
  }
  uw.prototype.ib = function() {
    return !0
  }
  var vw = function() {
    ow.apply(this, arguments)
  }
  _.H(vw, ow)
  vw.prototype.j = function(a, b) {
    var c = b.ua
    b = b.Ja
    var d = pw(this, a)
    try {
      d.setAttribute("sandbox", ys.join(" "))
      var e = new Pd()
      e.j = c
      d.srcdoc =
        e instanceof Pd && e.constructor === Pd && e.l === Od
          ? e.j
          : "type_error:SafeHtml"
    } catch (f) {
      Yk(656, f, !0)
    }
    qw(this, d, a, b)
    return d
  }
  vw.prototype.ib = function() {
    return !1
  }
  var ww = function(a, b, c, d, e) {
    var f = document
    return e
      ? _.x(263) && zk() && d
        ? new sw(f, a, b, c, d)
        : _.x(267) && yk() && d
        ? new vw(f, a, b, c, d)
        : _.x(286) && zk() && d
        ? new rw(f, a, b, c, d)
        : new tw(f, a, b, c, d)
      : new uw(f, a, b, c, d)
  }
  var xw = function(
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    k,
    l,
    m,
    n,
    u,
    z,
    y,
    G,
    S,
    K,
    U,
    bb,
    rd
  ) {
    Y.call(this)
    this.slot = a
    this.O = b
    this.na = c
    this.N = d
    this.m = this.l()
    this.B = this.l()
    this.H = this.l()
    this.A = this.l()
    this.G = this.l()
    this.D = this.l()
    this.I = this.l()
    this.$ = V(this, e)
    this.ka = V(this, f)
    Yq(this.o, g)
    this.da = V(this, h)
    this.U = V(this, k)
    this.ca = V(this, l)
    Yq(this.o, rd)
    this.R = W(this, m)
    this.V = W(this, n)
    this.W = W(this, u)
    this.Y = W(this, z)
    this.la = W(this, y)
    this.ja = W(this, G)
    this.ba = W(this, S)
    this.L = W(this, K)
    this.ga = W(this, U)
    this.oa = W(this, bb)
  }
  _.H(xw, Y)
  xw.prototype.id = function() {
    return 680
  }
  xw.prototype.j = function() {
    var a,
      b = this.da.value,
      c = this.U.value,
      d = ww(this.slot, this.O, this.na, null != this.R.l.j, !!this.ka.value)
    _.Wg(this, d)
    var e = this.V.value,
      f =
        null !== (a = null === e || void 0 === e ? void 0 : Le(e.getHtml())) &&
        void 0 !== a
          ? a
          : this.$.value
    if (null == f) throw Error("invalid html")
    var g = this.ca.value
    this.slot.U = f
    var h = nw(d, g, {
      ua: f,
      Sa: b,
      Ja: c,
      Oc: this.W.value,
      Sc: this.Y.value,
      Xb: this.la.value,
      Ab: this.ja.value,
      Gb: e,
      isBackfill: this.ba.value,
      Lb: this.L.value,
      Wb: this.ga.value,
      Yb: this.oa.value,
    })
    4 === ck(this.na.P[this.slot.getSlotElementId()])
      ? ((b = $t(this, this.N, "message", function(k) {
          if (h.contentWindow !== k.source) var l = !1
          else
            try {
              l = "rewarded" === JSON.parse(k.data).type
            } catch (m) {
              l = !1
            }
          return l
        })),
        T(this.A, b))
      : cr(this.A)
    T(this.m, h)
    T(this.B, d.ib())
    d = $t(this, window, "message", function(k) {
      return (
        "string" === typeof k.data &&
        -1 !== k.data.indexOf("creative_geometry_update") &&
        k.source === h.contentWindow
      )
    })
    T(this.G, d)
    d = $t(this, window, "message", function(k) {
      return (
        "string" === typeof k.data &&
        (0 == k.data.lastIndexOf("visibility-changed-", 0) ||
          "impression-viewable" === k.data) &&
        k.source === h.contentWindow
      )
    })
    T(this.D, d)
    T(this.I, $t(this, h, "load"))
    d = $t(this, window, "message", function(k) {
      return (
        "string" === typeof k.data &&
        0 == k.data.lastIndexOf("amp-", 0) &&
        !_.x(111) &&
        k.source === h.contentWindow
      )
    })
    T(this.H, d)
  }
  var yw = function(a, b, c, d, e, f, g, h, k, l) {
    Y.call(this)
    this.m = a
    this.slot = b
    this.aa = c
    this.B = d
    this.F = kr(this)
    this.A = W(this, e)
    this.I = V(this, f)
    this.G = V(this, g)
    this.H = V(this, h)
    this.D = W(this, k)
    this.L = V(this, l)
  }
  _.H(yw, Y)
  yw.prototype.id = function() {
    return 699
  }
  yw.prototype.j = function() {
    var a,
      b = this.I.value,
      c = this.G.value
    c.style.width = ""
    c.style.height = ""
    if ("height" !== this.A.value) {
      var d = null !== (a = this.D.value) && void 0 !== a ? a : 0,
        e = this.H.value,
        f = this.L.value,
        g = { slot: this.slot, aa: this.aa },
        h = !1
      switch (d) {
        case 1:
        case 2:
          h = this.m
          var k = this.B,
            l = g.slot
          var m = e.width,
            n = e.height,
            u = 0
          var z = 0
          var y = qa(g.aa)
          y = _.F(y)
          for (var G = y.next(); !G.done; G = y.next())
            if (((G = G.value), Array.isArray(G))) {
              var S = _.F(G)
              G = S.next().value
              S = S.next().value
              u < G && (u = G)
              z < S && (z = S)
            }
          z = [u, z]
          u = z[0] < m
          n = z[1] < n
          u || n
            ? ((z = m + "px"),
              (y = {
                "max-height": "none",
                "max-width": z,
                padding: "0px",
                width: z,
              }),
              n && (y.height = "auto"),
              Nt(c, b, y),
              (c = {}),
              u &&
                m > parseInt(f.width, 10) &&
                ((c.width = z), (c["max-width"] = z)),
              n && ((c.height = "auto"), (c["max-height"] = "none")),
              Yf(c)
                ? (c = !1)
                : ((c["padding-" + ("ltr" == f.direction ? "left" : "right")] =
                    "0px"),
                  _.xg(b, c),
                  (c = !0)))
            : (c = !1)
          b: switch (
            ((m = e.width), (n = h.defaultView || h.parentWindow || _.q), d)
          ) {
            case 2:
              b = Ot(b, n, m, f, k)
              break b
            case 1:
              if ((k = b.parentElement))
                if ((f = gp(l))) {
                  u = f.width
                  f = oa(l)
                  l = f.position
                  y = parseInt(f.width, 10) || 0
                  z = pa(k, n)
                  S = "rtl" == z.direction ? "Right" : "Left"
                  k = S.toLowerCase()
                  n = "absolute" == l ? 0 : parseInt(z["padding" + S], 10)
                  z = parseInt(z["border" + S + "Width"], 10)
                  G = Cg(f)
                  S = ((G && G[4]) || 0) * ("Right" == S ? -1 : 1)
                  m = Math.max(Math.round((u - Math.max(y, m)) / 2), 0)
                  u = {}
                  y = (G && G[3]) || 1
                  if (1 != ((G && G[0]) || 1) || 1 != y)
                    (G[0] = 1),
                      (G[3] = 1),
                      (u.transform = "matrix(" + G.join(",") + ")")
                  y = 0
                  switch (l) {
                    case "fixed":
                    case "relative":
                      y = parseFloat(f[k]) || 0
                      break
                    case "absolute":
                      u[k] = "0"
                  }
                  u["margin-" + k] = m - n - z - y - S + "px"
                  _.xg(b, u)
                  b = !0
                } else b = !1
              else b = !1
              break b
            default:
              b = !1
          }
          c || b
            ? (Qt(h, g, d, e.width, e.height, "gpt_slotexp"), (h = !0))
            : (h = !1)
          break
        case 3:
          ;(h = this.m),
            (m = this.B),
            (l = e.width),
            (k = e.height),
            k >= (parseInt(f.height, 10) || 0) ||
            "none" == f.display ||
            "hidden" == f.visibility ||
            !m ||
            -12245933 === m.width ||
            b.getBoundingClientRect().bottom <= m.height
              ? (h = !1)
              : ((f = { height: k + "px" }),
                Nt(c, b, f),
                _.xg(b, f),
                Qt(h, g, 3, l, k, "gpt_slotred"),
                (h = !0))
      }
      !h && _.x(212) && Qt(this.m, g, 0, e.width, e.height, "gpt_pgbrk")
      zb(this.aa, this.A.value, e, d)
    }
    this.F.notify()
  }
  var zw = function(a, b, c, d) {
    Y.call(this)
    this.m = null
    this.G = W(this, a)
    this.D = W(this, b)
    this.B = W(this, c)
    this.A = V(this, d)
  }
  _.H(zw, Y)
  zw.prototype.id = function() {
    return 717
  }
  zw.prototype.j = function() {
    var a = this,
      b = this.D.value,
      c = this.G.value
    null == this.B.value ||
      b ||
      null == c ||
      ((b = bh(
        this.A.value,
        P(504, function(d) {
          "impression-viewable" === d.data
            ? Hv(c, Dv, { kb: !0 })
            : 0 === d.data.indexOf("visibility-changed-") &&
              (d = /^visibility-changed-(\d+(\.\d+)?)$/.exec(d.data)) &&
              ((d = Number(d[1])),
              0 <= d &&
                1 >= d &&
                ((0 !== d && 1 !== d) || d !== a.m) &&
                (null !== a.m || 0 < d) &&
                ((a.m = d),
                Hv(c, Dv, { kb: !1, inViewPercentage: +(100 * d).toFixed(2) })))
        })
      )),
      _.O(this, b))
  }
  var Aw = function(a, b, c, d, e, f, g, h, k, l) {
    Y.call(this)
    this.L = W(this, a)
    this.O = W(this, b)
    this.I = W(this, c)
    this.H = W(this, d)
    this.R = W(this, e)
    this.A = V(this, f)
    this.m = V(this, g)
    this.B = V(this, h)
    this.D = V(this, k)
    this.G = V(this, l)
  }
  _.H(Aw, Y)
  Aw.prototype.id = function() {
    return 718
  }
  Aw.prototype.j = function() {
    var a = this
    if (Bw(this)) {
      var b = this.B.value,
        c = this.A.value,
        d = this.m.value
      _.wh(d, "visibility", "hidden")
      _.wh(d, "min-width", "100%")
      b
        ? (_.wh(c, "min-width", "100%"),
          (b = bh(
            this.G.value,
            P(505, function() {
              var e = c.contentDocument
              e
                ? Cw(a, c, d, e.body.offsetWidth, e.body.offsetHeight)
                : fb("gpt_amp_fluid_no_iframedoc", function(f) {
                    gb(f)
                  })
            })
          )),
          _.O(this, b))
        : ((b = bh(
            this.D.value,
            P(504, function(e) {
              var f = a.A.value,
                g = a.m.value
              if (-1 !== e.data.indexOf("creative_geometry_update"))
                try {
                  var h = JSON.parse(e.data),
                    k = a.R.value
                  if (
                    null != k &&
                    "creative_geometry_update" === h.s &&
                    h.c === "sfchannel" + k &&
                    h.p
                  ) {
                    var l = JSON.parse(h.p)
                    l.uid === k &&
                      "number" === typeof l.width &&
                      "number" === typeof l.height &&
                      Cw(a, f, g, l.width, l.height)
                  }
                } catch (m) {}
            })
          )),
          _.O(this, b))
    }
  }
  var Bw = function(a) {
      var b = !a.B.value && !(_.x(267) || _.x(263) || _.x(286))
      return null == a.H.value || a.I.value || "height" !== a.O.value || b
        ? !1
        : !0
    },
    Cw = function(a, b, c, d, e) {
      b.setAttribute("height", String(e))
      b.setAttribute("width", String(d))
      _.wh(c, "visibility", "visible")
      Dw(a, e, d)
    },
    Dw = function(a, b, c) {
      var d = a.L.value
      fb("gpt_fluid_sz", function(e) {
        E(e, "sz", c + "x" + b)
        E(e, "qqid", d || "")
        gb(e)
        E(e, "ff", 1)
      })
    }
  var Ew = function(a, b, c, d, e) {
    Y.call(this)
    this.N = a
    this.m = W(this, b)
    this.A = V(this, c)
    this.B = V(this, d)
    this.D = V(this, e)
  }
  _.H(Ew, Y)
  Ew.prototype.id = function() {
    return 685
  }
  Ew.prototype.j = function() {
    var a, b
    if (!_.x(111) && !this.B.value) {
      var c = this.D.value,
        d = this.A.value,
        e =
          null !==
            (b =
              null === (a = this.m.value) || void 0 === a ? void 0 : C(a, 1)) &&
          void 0 !== b
            ? b
            : "",
        f = ph(this.N, d, e, c)
      _.O(this, function() {
        try {
          f()
        } catch (g) {
          Xk(493, g)
        }
      })
    }
  }
  var Fw = /(<head(\s+[^>]*)?>)/i,
    Gw = function(a, b, c, d, e) {
      Y.call(this)
      this.ua = a
      this.m = this.l()
      this.A = W(this, b)
      this.B = W(this, c)
      this.D = W(this, d)
      this.G = W(this, e)
    }
  _.H(Gw, Y)
  Gw.prototype.id = function() {
    return 665
  }
  Gw.prototype.j = function() {
    var a = this.ua || ""
    if (Ek(this.A.value) && null == this.B.l.j) {
      var b = !!this.D.value,
        c = !!this.G.value
      c ||
        Jd() ||
        (a = a.replace(
          Fw,
          _.x(223)
            ? "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src https://tpc.googlesyndication.com/b4a/b4a-runner.html\">"
            : "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"
        ))
      b &&
        !c &&
        (a = a.replace(Fw, '$1<meta name="referrer" content="origin">'))
      T(this.m, a)
    } else T(this.m, a)
  }
  var Hw = function(a, b, c, d, e, f, g) {
    Y.call(this)
    this.N = a
    this.slotId = b
    this.m = c
    this.B = d
    this.ub = g
    this.D = W(this, e)
    this.A = V(this, f)
  }
  _.H(Hw, Y)
  Hw.prototype.id = function() {
    return 686
  }
  Hw.prototype.j = function() {
    var a = this,
      b,
      c,
      d = this.D.value,
      e = null === d || void 0 === d ? void 0 : C(d, 1),
      f = null === d || void 0 === d ? void 0 : Oe(d),
      g =
        null !== (b = null === d || void 0 === d ? void 0 : C(d, 3)) &&
        void 0 !== b
          ? b
          : 0
    d =
      null !== (c = null === d || void 0 === d ? void 0 : w(d, 5)) &&
      void 0 !== c
        ? c
        : !1
    e &&
      f &&
      ((e = Is({
        N: this.N,
        element: this.A.value,
        sd: 0 === this.m,
        Bc: g,
        vd: e,
        Eb: function() {
          Hv(a.B, pv, a.slotId)
        },
        options: { threshold: f },
        pc: d,
        Nc: function(h) {
          Yk(615, h, !0)
        },
        ub: this.ub,
      })),
      _.O(this, e))
  }
  var Iw = function(a, b, c, d) {
    Y.call(this)
    this.format = a
    this.B = b
    this.F = this.l()
    this.m = W(this, c)
    this.A = W(this, d)
  }
  _.H(Iw, Y)
  Iw.prototype.id = function() {
    return 720
  }
  Iw.prototype.j = function() {
    var a = this.A.value
    if (null == a) cr(this.F)
    else {
      var b = Math.round(0.3 * this.B)
      ;(2 !== this.format && 3 !== this.format) ||
      null == this.m.l.j ||
      !Ne(this.m.value) ||
      0 >= b ||
      a <= b
        ? T(this.F, a)
        : T(this.F, b)
    }
  }
  var Jw = function(a, b, c, d, e, f) {
    Y.call(this)
    this.slot = a
    this.M = b
    this.m = d
    this.F = this.l()
    this.A = 2 === c || 3 === c
    this.B = V(this, e)
    this.D = V(this, f)
  }
  _.H(Jw, Y)
  Jw.prototype.id = function() {
    return 674
  }
  Jw.prototype.j = function() {
    var a = this,
      b = this.B.value,
      c = If(b, function(e) {
        return e.id === ep(a.slot)
      }),
      d = c ? c : Rv(this.m, b, ep(this.slot), !!w(this.M, 15))
    this.D.value && !w(this.M, 15) && (d.style.display = "inline-block")
    this.A
      ? Xo(this.slot, function() {
          return void _.Ff(d)
        })
      : _.O(this, function() {
          return void _.Ff(d)
        })
    T(this.F, d)
  }
  var Kw = function(a, b) {
    Y.call(this)
    this.N = a
    this.F = this.l()
    this.m = V(this, b)
  }
  _.H(Kw, Y)
  Kw.prototype.id = function() {
    return 698
  }
  Kw.prototype.j = function() {
    var a = pa(this.m.value, this.N)
    null == a ? cr(this.F) : T(this.F, a)
  }
  var Lw = function(a, b, c, d, e, f, g) {
    Y.call(this)
    this.m = a
    this.format = b
    this.slot = c
    this.N = d
    this.F = kr(this)
    this.A = W(this, e)
    this.B = V(this, f)
    this.D = V(this, g)
  }
  _.H(Lw, Y)
  Lw.prototype.id = function() {
    return 682
  }
  Lw.prototype.j = function() {
    return Ca(this, function b() {
      var c = this,
        d,
        e,
        f,
        g,
        h,
        k
      return Da(b, function(l) {
        if (1 == l.j)
          return (
            (d = c),
            (2 !== c.format && 3 !== c.format) ||
            null == c.A.l.j ||
            !Ne(c.A.value)
              ? l.return()
              : Ea(l, _.dw.C().load(_.aw), 2)
          )
        e = l.o
        f = e.Rc
        if (c.ma) return l.return()
        g = _.Ws(c.m, c.slot)
        h = c.D.value
        k = c.B.value
        _.xg(k, { "max-height": "30vh", overflow: "hidden" })
        Mw
          ? Mw.Ad(k)
          : ((Mw = new f(c.format, k, c.N, h, c.m, c.slot)),
            Mw.od(),
            Xo(c.slot, function() {
              Mw && (Mw.sa(), (Mw = null))
              if (g) {
                var m = d.m,
                  n = d.slot
                m.j.get(n) && (m.j.get(n).Ba = !0)
              }
            }))
        _.O(c, function() {
          return _.Ff(k)
        })
        c.F.notify()
        l.j = 0
      })
    })
  }
  var Mw = null
  var Nw = function(a, b, c, d, e) {
    Y.call(this)
    this.N = a
    this.m = W(this, b)
    this.B = V(this, c)
    this.A = V(this, d)
    this.D = V(this, e)
  }
  _.H(Nw, Y)
  Nw.prototype.id = function() {
    return 721
  }
  Nw.prototype.j = function() {
    var a = this,
      b,
      c,
      d,
      e = this.m.value,
      f =
        null === (b = null === e || void 0 === e ? void 0 : C(e, 1)) ||
        void 0 === b
          ? void 0
          : b.toUpperCase()
    e =
      null === (c = null === e || void 0 === e ? void 0 : C(e, 2)) ||
      void 0 === c
        ? void 0
        : c.toUpperCase()
    if (f && e) {
      var g = this.B.value,
        h = this.A.value,
        k = this.D.value,
        l = k.style.height,
        m = k.style.width,
        n = k.style.display,
        u = k.style.position,
        z = Ng(g.id + "_top", f),
        y = Ng(g.id + "_bottom", e)
      _.xg(y, { position: "relative", top: "calc(100vh - 48px)" })
      k.appendChild(z)
      k.appendChild(y)
      _.xg(h, {
        position: "absolute",
        top: "24px",
        clip: "rect(0, auto, auto, 0)",
        width: "100vw",
        height: "calc(100vh - 48px)",
      })
      _.xg(g, { position: "fixed", top: "0", height: "100vh" })
      _.xg(k, {
        position: "relative",
        display: (null === (d = this.N.screen.orientation) || void 0 === d
        ? 0
        : d.angle)
          ? "none"
          : "block",
        width: "100vw",
        height: "100vh",
      })
      Zt(this, 722, this.N, "orientationchange", function() {
        var G
        ;(null === (G = a.N.screen.orientation) || void 0 === G
        ? 0
        : G.angle)
          ? _.xg(k, { display: "none" })
          : _.xg(k, { display: "block" })
      })
      _.O(this, function() {
        _.Ff(z)
        _.Ff(y)
        k.style.position = u
        k.style.height = l
        k.style.width = m
        k.style.display = n
      })
    }
  }
  var Ow = function(a, b, c, d, e) {
    Y.call(this)
    this.format = a
    this.F = kr(this)
    this.m = W(this, b)
    this.B = V(this, c)
    this.D = V(this, d)
    this.A = W(this, e)
  }
  _.H(Ow, Y)
  Ow.prototype.id = function() {
    return 683
  }
  Ow.prototype.j = function() {
    return Ca(this, function b() {
      var c = this,
        d,
        e,
        f,
        g,
        h,
        k,
        l,
        m,
        n
      return Da(b, function(u) {
        if (1 == u.j) {
          d = c.m.value
          if (!d || 5 !== c.format) return u.return()
          e = c.D.value
          f = c.B.value
          return Ea(u, _.dw.C().load(_.aw), 2)
        }
        g = u.o
        h = g.Vc
        if (c.ma) return u.return()
        k = new _.hj()
        l = new h(window, f, e, k, c.A.value)
        _.Wg(c, l)
        l.Fc()
        m = Ue(d, Um, 13)
        for (var z = {}, y = _.F(m), G = y.next(); !G.done; G = y.next())
          (G = G.value), (z[C(G, 1)] = C(G, 2))
        n = z
        l.uc(n)
        c.F.notify()
        u.j = 0
      })
    })
  }
  var Pw = function() {
    Y.apply(this, arguments)
    this.F = kr(this)
  }
  _.H(Pw, Y)
  Pw.prototype.id = function() {
    return 663
  }
  Pw.prototype.j = function() {
    return Ca(this, function b() {
      var c = this
      return Da(b, function(d) {
        if (1 == d.j) {
          var e = Qw ? 0 : _.r(16),
            f = _.r(17)
          e = Math.max(e, f)
          0 < e && ((Qw = !0), bu(e))
          return Ea(d, Rw(c), 2)
        }
        c.F.notify()
        d.j = 0
      })
    })
  }
  var Rw = function(a) {
      return Ca(a, function c() {
        var d
        return Da(c, function(e) {
          d = _.r(18)
          0 < d
            ? (e = Ea(e, Ab(d), 0))
            : _.x(169) && kl(2)
            ? (e = Ea(e, Ab(0), 0))
            : ((e.j = 0), (e = void 0))
          return e
        })
      })
    },
    Qw = !1
  var Sw = function(a, b, c, d, e) {
    Y.call(this)
    this.slotId = a
    this.P = b
    this.m = c
    this.B = d
    this.A = V(this, e)
  }
  _.H(Sw, Y)
  Sw.prototype.id = function() {
    return 711
  }
  Sw.prototype.j = function() {
    var a = this,
      b = this.A.value,
      c = _.r(35)
    this.m.o ||
      0 >= c ||
      (1 >= lk(this.P).length && !mk(this.P)) ||
      _.O(
        this,
        Kv(this.B, tv, 712, function(d) {
          a.m.o
            ? a.sa()
            : d === a.slotId &&
              ((d = _.Jh(b, "padding").top),
              (b.style.paddingTop = d + c + "px"),
              (a.m.o = !0),
              a.sa())
        })
      )
  }
  var Tw = function(a, b, c, d, e, f, g) {
    Y.call(this)
    this.A = a
    this.I = b
    this.m = null
    this.F = this.l()
    Yq(this.o, c)
    this.D = V(this, d)
    this.H = V(this, e)
    this.G = W(this, f)
    this.B = W(this, g)
  }
  _.H(Tw, Y)
  Tw.prototype.id = function() {
    return 666
  }
  Tw.prototype.j = function() {
    var a = this,
      b = new Jj()
    null != this.B.l.j && (D(b, 2, this.B.value), D(b, 3, 1))
    this.A && (b = Zv([this.A, b]))
    b = Yv(b)
    if (null == b || 0 > b) T(this.F, !1)
    else {
      var c = this.D.value,
        d = this.H.value
      null != d && Lk(d, this.I, b / 100)
        ? (fb(
            "gpt_er",
            function(e) {
              var f
              E(e, "qqid", null !== (f = a.G.value) && void 0 !== f ? f : "")
            },
            { ta: _.r(20) }
          ),
          T(this.F, !1))
        : _.x(145)
        ? T(this.F, !1)
        : Uw(this, b, c)
    }
  }
  var Uw = function(a, b, c) {
    ka(c)
      ? ((a.m = Cb(
          b + "%",
          P(291, function(d, e) {
            d = _.F(d)
            for (var f = d.next(); !f.done; f = d.next())
              if (((f = f.value), !(0 >= f.intersectionRatio))) {
                e.unobserve(f.target)
                T(a.F, !0)
                break
              }
          })
        )),
        a.m.observe(c),
        _.O(a, function() {
          a.m && a.m.disconnect()
        }))
      : T(a.F, !1)
  }
  var Vw = function(a, b) {
    Y.call(this)
    this.N = a
    this.m = b
    this.F = this.l()
  }
  _.H(Vw, Y)
  Vw.prototype.id = function() {
    return 706
  }
  Vw.prototype.j = function() {
    var a = Oa(this.m, this.N)
    a ? T(this.F, a) : cr(this.F)
  }
  var Ww = function(a, b, c, d, e) {
    Y.call(this)
    this.A = a
    this.m = b
    this.B = W(this, c)
    this.D = V(this, d)
    this.G = W(this, e)
  }
  _.H(Ww, Y)
  Ww.prototype.id = function() {
    return 713
  }
  Ww.prototype.j = function() {
    var a = this.G.value
    if (!Ek(this.B.value) && a && this.m.getOseId()) {
      var b = this.D.value,
        c = Ks(this.m)
      c.registerAdBlock(
        "?eid=" +
          $i
            .C()
            .j()
            .join(",") +
          "&adk=" +
          this.A,
        3,
        "ldjh",
        b,
        0,
        0,
        P(this.id(), function(d, e) {
          0 <= e && Hv(a, Dv, { kb: d, inViewPercentage: e })
          return null
        })
      )
      _.O(this, function() {
        try {
          c.unloadAdBlock(b, !1, _.x(101))
        } catch (d) {}
      })
    }
  }
  var Xw = function(a, b, c, d) {
    Y.call(this)
    this.slot = a
    this.B = b
    this.m = new tf()
    this.F = kr(this)
    Yq(this.o, c)
    this.A = W(this, d)
  }
  _.H(Xw, Y)
  Xw.prototype.id = function() {
    return 664
  }
  Xw.prototype.j = function() {
    var a = this
    if (_.x(20)) {
      var b = this.m.j,
        c = zn(b),
        d = function() {
          var f = a.A.value
          return null != f && Lk(f, a.B, 0)
        }
      if (An(b) && c && (0 < this.slot.B - 1 || !d()) && c) {
        var e = Zt(this, 324, b, c, function() {
          An(b) || (e && e(), a.F.notify())
        })
        if (e) return
      }
    }
    this.F.notify()
  }
  var Zw = function(a) {
    Y.call(this)
    this.Ob = a
    this.I = []
    Yw(this, function(b) {
      return C(b, 4)
    })
    this.W = Yw(this, function(b) {
      return C(b, 6)
    })
    this.ga = Yw(this, function(b) {
      return C(b, 7)
    })
    Yw(this, function(b) {
      return w(b, 8)
    })
    this.D = Yw(this, function(b) {
      return C(b, 10)
    })
    Yw(this, function(b) {
      return C(b, 15)
    })
    this.B = Yw(this, function(b) {
      return C(b, 34)
    })
    this.m = Yw(this, function(b) {
      return Se(b, af, 43)
    })
    this.A = Yw(this, function(b) {
      return Se(b, en, 41)
    })
    this.G = Yw(this, function(b) {
      return w(b, 9)
    })
    this.O = Yw(this, function(b) {
      return w(b, 12)
    })
    this.U = Yw(this, function(b) {
      return Se(b, Zm, 50)
    })
    this.V = Yw(this, function(b) {
      return Se(b, Ym, 48)
    })
    this.H = Yw(this, function(b) {
      return Se(b, Wm, 39)
    })
    this.ba = Yw(this, function(b) {
      return C(b, 36)
    })
    this.R = Yw(this, function(b) {
      return w(b, 13)
    })
    this.$ = Yw(this, function(b) {
      return w(b, 3)
    })
    this.L = Yw(this, function(b) {
      return C(b, 49)
    })
    this.da = Yw(this, function(b) {
      return C(b, 29)
    })
    this.Y = Yw(this, function(b) {
      return Se(b, an, 51)
    })
    this.ca = Yw(this, function(b) {
      return w(b, 52)
    })
  }
  _.H(Zw, Y)
  var Yw = function(a, b) {
    var c = Y.prototype.l.call(a)
    a.I.push({ F: c, Pc: b })
    return c
  }
  Zw.prototype.id = function() {
    return 700
  }
  Zw.prototype.j = function() {
    for (var a = _.F(this.I), b = a.next(); !b.done; b = a.next()) {
      var c = b.value
      b = c.F
      c = c.Pc
      c = c(this.Ob)
      null != c ? T(b, c) : cr(b)
    }
  }
  var $w = function(a, b, c, d, e) {
    Y.call(this)
    this.slotId = a
    this.na = b
    this.m = c
    this.A = d
    Yq(this.o, e)
  }
  _.H($w, Y)
  $w.prototype.id = function() {
    return 696
  }
  $w.prototype.j = function() {
    var a = this
    lw(this, this.m, "closed", function() {
      return void ax(a)
    })
    lw(this, this.m, "canceled", function() {
      return void ax(a)
    })
  }
  var ax = function(a) {
    var b = a.slotId,
      c = a.na,
      d = a.A
    Hv(d, xv, b)
    Hv(d, uv, { slotId: b, na: c })
    a.sa()
  }
  var bx = function(a, b, c, d) {
    Y.call(this)
    this.slotId = a
    this.A = b
    this.m = c
    Yq(this.o, d)
  }
  _.H(bx, Y)
  bx.prototype.id = function() {
    return 697
  }
  bx.prototype.j = function() {
    var a = this
    lw(this, this.A, "completed", function() {
      Hv(a.m, yv, a.slotId)
      a.sa()
    })
  }
  var cx = function(a, b, c, d) {
    Y.call(this)
    this.slotId = a
    this.A = b
    this.m = c
    Yq(this.o, d)
  }
  _.H(cx, Y)
  cx.prototype.id = function() {
    return 694
  }
  cx.prototype.j = function() {
    var a = this,
      b = this.slotId,
      c = this.m
    lw(this, this.A, "granted", function(d) {
      var e
      d = {
        slotId: b,
        payload: null !== (e = d.payload) && void 0 !== e ? e : null,
      }
      Hv(c, wv, d)
      a.sa()
    })
  }
  var dx = { width: "100%", height: "100%", left: "0", top: "0" },
    ex = function(a, b, c, d) {
      Y.call(this)
      this.m = a
      this.Sa = b
      this.N = c
      this.F = kr(this)
      Yq(this.o, d)
    }
  _.H(ex, Y)
  ex.prototype.id = function() {
    return 693
  }
  ex.prototype.j = function() {
    var a = this,
      b = _.x(374) && 0 === qg() ? "rgba(1,1,1,0.5)" : "white"
    _.xg(
      this.Sa,
      _.B(Object, "assign").call(
        Object,
        {
          "background-color": b,
          opacity: "1",
          position: "fixed",
          margin: "0",
          padding: "0",
          "z-index": "2147483647",
          display: "block",
        },
        dx
      )
    )
    _.O(this, _.tr(this.N.document, this.N))
    Hf(this.m).postMessage(
      JSON.stringify({ type: "rewarded", message: "visible" }),
      "*"
    )
    this.N === this.N.top &&
      ((this.N.location.hash = "goog_rewarded"),
      _.O(this, function() {
        "goog_rewarded" === a.N.location.hash && (a.N.location.hash = "")
      }))
    this.F.notify()
  }
  var fx = function(a, b, c) {
    Y.call(this)
    this.m = a
    this.N = b
    Yq(this.o, c)
  }
  _.H(fx, Y)
  fx.prototype.id = function() {
    return 695
  }
  fx.prototype.j = function() {
    if (this.N === this.N.top)
      var a = Hf(this.m),
        b = Zt(this, 503, this.N, "hashchange", function(c) {
          ld(c.oldURL, "#goog_rewarded") &&
            (a.postMessage(
              JSON.stringify({ type: "rewarded", message: "back_button" }),
              "*"
            ),
            b())
        })
  }
  var gx = function(a, b, c) {
    Y.call(this)
    this.slotId = a
    this.m = b
    this.F = kr(this)
    this.A = V(this, c)
  }
  _.H(gx, Y)
  gx.prototype.id = function() {
    return 692
  }
  gx.prototype.j = function() {
    var a = this,
      b,
      c = this.A.value,
      d = this.slotId,
      e = this.m
    _.O(
      this,
      Kv(e, rv, 677, function(f) {
        d === f && (a.F.notify(), a.sa())
      })
    )
    Iv(e, vv, {
      slotId: d,
      makeRewardedVisible: Tc(function() {
        Hv(e, rv, d)
      }),
      payload: null !== (b = c.payload) && void 0 !== b ? b : null,
    })
  }
  var hx = { width: "100%", height: "100%", left: "0", top: "0" },
    ix = {
      width: "60%",
      height: "60%",
      transform: "translate(-50%, -50%)",
      left: "50%",
      top: "50%",
    },
    jx = function(a, b) {
      Y.call(this)
      this.m = a
      this.A = b
      this.F = this.l()
    }
  _.H(jx, Y)
  jx.prototype.id = function() {
    return 691
  }
  jx.prototype.j = function() {
    var a = this,
      b = _.x(374) && 0 === qg()
    _.xg(
      this.m,
      _.B(Object, "assign").call(Object, { position: "absolute" }, b ? ix : hx)
    )
    lw(this, this.A, "prefetched", function(c) {
      return void T(a.F, c)
    })
  }
  var kx = function(a, b, c, d, e, f, g, h) {
    Y.call(this)
    this.slotId = a
    this.na = b
    this.format = c
    this.N = d
    this.m = e
    this.A = V(this, f)
    this.D = W(this, g)
    this.B = V(this, h)
  }
  _.H(kx, Y)
  kx.prototype.id = function() {
    return 688
  }
  kx.prototype.j = function() {
    if (4 === this.format) {
      var a = this.A.value,
        b = this.D.value,
        c = this.B.value
      if (!b) throw Error("missing message bus input")
      var d = new qb()
      _.Wg(this, d)
      var e = new jx(a, b)
      X(d, e)
      e = new gx(this.slotId, this.m, e.F)
      X(d, e)
      c = new ex(a, c, this.N, e.F)
      X(d, c)
      X(d, new fx(a, this.N, c.F))
      X(d, new cx(this.slotId, b, this.m, e.F))
      X(d, new $w(this.slotId, this.na, b, this.m, e.F))
      X(d, new bx(this.slotId, b, this.m, e.F))
      sb(d)
    }
  }
  var lx = function(a, b, c, d, e, f) {
    Y.call(this)
    this.M = a
    this.P = b
    this.N = c
    this.F = this.l()
    this.m = W(this, d)
    this.A = W(this, e)
    this.B = W(this, f)
  }
  _.H(lx, Y)
  lx.prototype.id = function() {
    return 669
  }
  lx.prototype.j = function() {
    var a
    if (!(a = null != this.A.l.j)) {
      a = this.P
      var b = this.N
      b = void 0 === b ? window : b
      a = !!(ej(3) || (a && null != C(a, 16) && Ok("google_range_debug", b)))
    }
    a
      ? T(this.F, !0)
      : ((a =
          (Ek(this.m.value) ? w(this.P, 12) || w(this.M, 13) : !1) ||
          !!this.B.value),
        T(this.F, !!a))
  }
  var mx = function(a, b, c, d, e, f) {
    Y.call(this)
    this.M = a
    this.aa = b
    this.F = this.l()
    this.B = V(this, c)
    this.m = W(this, d)
    this.A = W(this, e)
    this.D = W(this, f)
  }
  _.H(mx, Y)
  mx.prototype.id = function() {
    return 719
  }
  mx.prototype.j = function() {
    var a = this.m.value
    if (this.B.value && _.x(354)) {
      if (
        ((a = this.D.value),
        (a = Mj(new Lj(), a)),
        w(so([a, Se(this.M, Lj, 18), Se(this.aa, Lj, 13)]), 3))
      ) {
        T(this.F, _.x(338) ? As : xs)
        return
      }
    } else if (a && _.x(this.A.value ? 136 : 137)) {
      T(this.F, _.x(267) ? zs : xs)
      return
    }
    cr(this.F)
  }
  var nx = function(a, b, c, d, e, f, g, h, k) {
    Y.call(this)
    this.slot = a
    this.aa = b
    this.L = c
    this.window = d
    this.I = this.l()
    this.H = this.l()
    this.D = this.l()
    this.m = ej(3).split(",")
    this.B = _.fj(3)
    this.A = null != C(b, 16) ? Se(b, Wj, 16) : null
    this.G = Nk("google_range_debug", this.window)
    this.O = W(this, e)
    this.W = W(this, f)
    this.R = W(this, g)
    this.U = V(this, h)
    this.V = V(this, k)
  }
  _.H(nx, Y)
  nx.prototype.id = function() {
    return 681
  }
  nx.prototype.j = function() {
    var a
    if ((a = !!(this.m.length || (this.A && this.G)))) {
      var b
      b: if (this.m.length) {
        if (
          this.B.length &&
          ((a = this.slot.getAdUnitPath().split("/")),
          !_.B(this.B, "includes").call(this.B, a[a.length - 1]))
        ) {
          a = !1
          break b
        }
        a = !0
      } else a = !1
      var c = a
      a = c ? ox(this) : null
      if (c && a) {
        c = this.V.value
        var d = Dk(c.parentElement)
        d =
          null !== (b = null === d || void 0 === d ? void 0 : d.width) &&
          void 0 !== b
            ? b
            : 0
        b = "p" === this.m[0]
        var e = Number(this.m[0])
        if (
          (b =
            "f" === this.m[0]
              ? this.L
              : e && 0 < e
              ? e
              : b
              ? Math.min(d, this.L)
              : null)
        ) {
          e = a.width
          var f = a.height,
            g = this.m[1],
            h = Number(g)
          e =
            "ratio" === g && e
              ? Math.floor((f / e) * b)
              : h && 0 < h
              ? f * h
              : f
          px(
            this,
            b,
            e,
            qx(b, e, "<p>Requested size:" + a.width + "x" + a.height + "</p>"),
            b <= d ? 1 : 2,
            c
          )
          a = !0
        } else a = !1
      } else a = !1
      if (!a)
        a: if (this.A && this.G) {
          a = Ut(this.A, this.window)
          c = Vt(this.A, this.window)
          d = Wt(this.A)
          b = Xt(this.A)
          switch (this.G) {
            case "max":
              e = a
              f = c
              break
            case "min":
              e = d
              f = b
              break
            case "banner":
              e = a
              f = 90 > c ? c : 90 < b ? b : 90
              break
            case "skyscraper":
              e = 90 > a ? a : 90 < d ? d : 90
              f = c
              break
            default:
              a = !1
              break a
          }
          px(
            this,
            e,
            f,
            qx(
              e,
              f,
              "<p>Minimum size:" +
                d +
                "x" +
                b +
                "</p><p>Maximum size:" +
                (a +
                  "x" +
                  c +
                  "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>")
            )
          )
          a = !0
        } else a = !1
    }
    if (!a) {
      a = this.W.value
      if (null == a) throw Error("Missing 'width'.")
      c = this.R.value
      if (null == c) throw Error("Missing 'height'.")
      d = this.U.value
      if (null == d) throw Error("Missing 'htmlInput'.")
      px(this, a, c, d)
    }
  }
  var ox = function(a) {
      a = qa(a.aa)[0]
      return Array.isArray(a) &&
        a.every(function(b) {
          return "number" === typeof b
        })
        ? new _.sf(a[0], a[1])
        : null
    },
    qx = function(a, b, c) {
      return (
        '<html><body style="height:' +
        (b -
          2 +
          "px;width:" +
          (a -
            2 +
            'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) +
        c +
        ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
      )
    },
    px = function(a, b, c, d, e, f) {
      e = void 0 === e ? a.O.value : e
      T(a.H, new _.sf(b, c))
      T(a.I, d)
      null == e ? cr(a.D) : T(a.D, e)
      f && _.wh(f, "opacity", 0.5)
    }
  var rx = function(a, b, c, d, e, f, g) {
    Y.call(this)
    this.slot = a
    this.Sa = b
    this.A = c
    this.B = d
    this.D = e
    this.m = f
    this.G = g
    this.F = this.l()
  }
  _.H(rx, Y)
  rx.prototype.id = function() {
    return 673
  }
  rx.prototype.j = function() {
    var a = this
    if (null != this.Sa) sx(this, this.Sa), T(this.F, this.Sa)
    else if (ok(this.m)) T(this.F, tx(this))
    else {
      var b = Kv(this.G, qv, this.id(), function(c) {
        c.id === a.A && (b(), sx(a, c), T(a.F, c))
      })
      _.O(this, b)
    }
  }
  var tx = function(a) {
      var b = Ef(document, "INS")
      b.id = a.A
      _.xg(b, { display: "none" })
      a.D.documentElement.appendChild(b)
      2 === a.m || 3 === a.m
        ? Xo(a.slot, function() {
            return void _.Ff(b)
          })
        : _.O(a, function() {
            return void _.Ff(b)
          })
      return b
    },
    sx = function(a, b) {
      if (2 !== a.m && 3 !== a.m) {
        var c = _.B(Array, "from").call(Array, b.childNodes)
        c = _.F(c)
        for (var d = c.next(); !d.done; d = c.next())
          (d = d.value), 1 === d.nodeType && d.id !== a.B && _.Ff(d)
        _.x(389) ? (b.style.display = "flex") : (b.style.display = "")
      }
    }
  var ux = function(a) {
    Y.call(this)
    this.F = this.l()
    this.m = V(this, a)
  }
  _.H(ux, Y)
  ux.prototype.id = function() {
    return 676
  }
  ux.prototype.j = function() {
    var a = ma(this.m.value)
    T(this.F, a)
  }
  var vx = function(a, b) {
    Y.call(this)
    var c = this
    this.slot = a
    this.m = b
    this.F = this.l()
    this.A = Tc(function() {
      c.slot.kb()
      var d = c.slot.getSlotId()
      Hv(c.m, tv, d)
    })
    this.B = Uc(function() {
      var d = c.inViewPercentage
      d = { slotId: c.slot.getSlotId(), inViewPercentage: d }
      Hv(c.m, Cv, d)
    }, 200)
  }
  _.H(vx, Y)
  vx.prototype.id = function() {
    return 714
  }
  vx.prototype.j = function() {
    var a = this,
      b = new Gv(),
      c = Kv(b, Dv, this.id(), function(d) {
        var e = d.inViewPercentage
        d.kb && a.A()
        void 0 === e ||
          isNaN(e) ||
          ((e = Math.floor(e)),
          a.inViewPercentage !== e && ((a.inViewPercentage = e), a.B()))
      })
    _.O(this, c)
    T(this.F, b)
  }
  var wx = function() {
      this.j = new t.Map()
    },
    xx = function(a, b) {
      var c
      null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.sa()
      a.j.delete(b)
    },
    yx = function(a, b, c, d, e, f, g, h, k) {
      xx(a, b)
      var l = new qb(),
        m = Th(!0, window),
        n = e.M,
        u = e.P[b.getSlotElementId()]
      f = new Zw(f)
      X(l, f)
      var z = new Vw(window.top, k)
      X(l, z)
      var y = new Pw()
      X(l, y)
      k = new rx(b, ja(b, h), b.getSlotElementId(), ep(b), h, ck(u), Gv.C())
      X(l, k)
      var G = new Gw(g, f.m, f.A, f.G, f.O)
      X(l, G)
      var S = new lx(n, u, window, f.m, f.A, f.O)
      X(l, S)
      g = new Jw(b, n, ck(u), h, k.F, S.F)
      X(l, g)
      var K = new Sw(b.getSlotId(), u, c, Gv.C(), g.F)
      X(l, K)
      K = new ux(g.F)
      X(l, K)
      y = new Xw(b, m, y.F, K.F)
      X(l, y)
      y = new Tw(Se(n, Jj, 5), m, y.F, g.F, K.F, f.B, f.da)
      X(l, y)
      K = new Iw(ck(u), m.height, f.H, f.W)
      X(l, K)
      G = new nx(b, u, m.width, window, f.ba, f.ga, K.F, G.m, k.F)
      X(l, G)
      K = new Kw(window, k.F)
      X(l, K)
      h = new yw(h, b, u, m, f.D, k.F, g.F, G.H, G.D, K.F)
      X(l, h)
      n = new mx(n, u, S.F, f.m, f.G, f.R)
      X(l, n)
      n = new xw(
        b,
        c,
        e,
        window,
        G.I,
        S.F,
        y.F,
        k.F,
        g.F,
        G.H,
        f.m,
        f.A,
        f.B,
        f.D,
        f.R,
        n.F,
        f.G,
        f.$,
        f.L,
        f.ca,
        h.F
      )
      X(l, n)
      c = new Lw(c, ck(u), b, window, f.H, n.m, k.F)
      X(l, c)
      c = new Ow(ck(u), f.V, n.m, k.F, z.F)
      X(l, c)
      c = new Ew(window, f.m, n.m, n.B, n.H)
      X(l, c)
      c = new Hw(window, b.getSlotId(), qg(), Gv.C(), f.U, n.m)
      X(l, c)
      e = new kx(b.getSlotId(), e, ck(u), window, Gv.C(), n.m, n.A, k.F)
      X(l, e)
      e = new vx(b, Gv.C())
      X(l, e)
      d = new Ww(b.gb, d, f.m, n.m, e.F)
      X(l, d)
      d = new Aw(f.B, f.D, f.A, f.m, f.L, n.m, g.F, n.B, n.G, n.I)
      X(l, d)
      d = new zw(e.F, f.A, f.m, n.D)
      X(l, d)
      f = new Nw(window, f.Y, n.m, g.F, k.F)
      X(l, f)
      a.j.set(b, l)
      _.O(b, function() {
        xx(a, b)
      })
      _.x(336) &&
        Wo(b, function() {
          xx(a, b)
        })
      sb(l)
    }
  var zx = function(a, b, c) {
      this.url = a
      this.l = b
      this.withCredentials = c
      this.o = 0
      this.v = !1
      this.j = new XMLHttpRequest()
    },
    Cx = function(a) {
      a.j.open("GET", a.url)
      a.j.withCredentials = a.withCredentials
      _.x(312) && Cs(a.j)
      a.j.onreadystatechange = function() {
        Ax(a, !1)
      }
      a.j.onload = function() {
        Ax(a, !0)
      }
      a.j.onerror = function() {
        Bx(a.l, Error("XHR error"))
      }
      a.j.send()
    },
    Ax = function(a, b) {
      try {
        if (3 === a.j.readyState || 4 === a.j.readyState)
          if (300 <= a.j.status)
            a.v || Bx(a.l, Error("xhr_err-" + a.j.status)), (a.v = !0)
          else {
            var c = a.j.responseText.substr(a.o)
            if (c) {
              var d = a.l
              if (c)
                if (1 !== d.state && 2 !== d.state)
                  Bx(
                    d,
                    Error("state err: (" + ([d.state, d.j.length].join() + ")"))
                  )
                else {
                  d.j && (c = d.j + c)
                  var e = 0,
                    f = !1
                  do {
                    var g = c.indexOf("\n", e)
                    f = -1 !== g
                    if (!f) break
                    var h = d,
                      k = c.substr(e, g - e)
                    if (1 === h.state) (h.l = k), ++h.v, (h.state = 2)
                    else {
                      try {
                        h.o(h.v, h.l, Jg(k)), (h.l = "")
                      } catch (m) {}
                      h.state = 1
                    }
                    e = g + 1
                  } while (f && e < c.length)
                  d.j = c.substr(e)
                }
            }
            a.o = a.j.responseText.length
            if (b && 4 === a.j.readyState) {
              var l = a.l
              1 !== l.state || l.j
                ? Bx(
                    l,
                    Error("state err (" + ([l.state, l.j.length].join() + ")"))
                  )
                : ((l.state = 3), l.A())
            }
          }
      } catch (m) {
        Bx(a.l, m)
      }
    }
  var Dx = function(a, b, c) {
      this.o = a
      this.m = b
      this.A = c
      this.l = ""
      this.v = -1
      this.state = 1
      this.j = ""
    },
    Bx = function(a, b) {
      a.state = 4
      try {
        a.m(b)
      } catch (c) {}
    }
  var Ex = function() {
      if (Ld()) {
        if (_.x(109) && 0 <= xd(Nd(), 12)) return !1
        if (0 <= xd(Nd(), 11)) return !0
      } else if (Jd() && 0 <= xd(Nd(), 65)) return !0
      return !1
    },
    Fx = function(a) {
      _.x(200) ? a() : Ex() ? Sq(P(347, a)) : (_.x(239) && Sq(null), a())
    },
    Gx = function(a) {
      var b = function(c) {
        ea(_.q.top, "googlefcLoaded")
          ? c()
          : setTimeout(function() {
              b(P(678, c))
            }, 500)
      }
      Pg() && _.x(302) ? b(a) : a()
    },
    Hx = function(a) {
      var b = Pg()
      _.q.googlefc &&
        !b &&
        fb(
          "gpt_fc_has_namespace_but_no_iframes",
          function(c) {
            gb(c)
            E(c, "networkId", a)
          },
          { ta: 1 }
        )
    },
    Ix = function(a, b, c) {
      var d = _.gj(221),
        e = a.j.length ? a.j[0].m : ""
      a = void 0
      _.x(373) &&
        ((a = !(!b || !w(b, 8))),
        (b = ha()),
        !a &&
          b &&
          fb(
            "gpt_npa_uses_iframe_not_api",
            function(f) {
              gb(f)
              E(f, "networkId", e)
            },
            { ta: 1 }
          ))
      Tg(d, e, P(451, c), a)
    },
    Jx = function(a, b) {
      a = new Lr(_.Cf(a))
      if (_.x(274) && Nr(a)) {
        fl.C().info(Lm())
        var c = P(661, function(d) {
          b(d)
        })
        Pr(a, c)
      } else b(null)
    },
    Kx = function(a, b) {
      a = new vr(_.Cf(a))
      if (xr(a)) {
        var c = P(660, function(d) {
          d && "string" === typeof d.uspString ? b(d.uspString) : b(null)
        })
        fl.C().info(Km())
        zr(a, c)
      } else b(null)
    },
    Lx = function(a, b) {
      var c = 1e3 * _.r(47, 1),
        d = function(e) {
          return Math.max(0, Math.round((c - (a - e)) / 1e3))
        }
      if (null === b.Y) return 0
      switch (_.r(b.isBackfill() ? 52 : 46)) {
        case 0:
          b = b.Y
          if (null === b) break
          return d(b)
        case 1:
          return (b = b.$) ? d(b.getTimestamp().getTime()) : -1
        case 2:
          return (b = b.G) ? d(b) : -1
      }
      return 0
    },
    Mx = function(a) {
      a.length && ((a = a[0]), Ji(pk.C(), "3", a.o))
    },
    Nx = function(a) {
      a = a instanceof Error ? a : Error()
      a.message = a.message || "strm_err"
      Yk(289, a, !0)
    },
    Ox = function(a, b) {
      if (_.x(177)) return !1
      a = w(a, 11)
      null == a && (a = w(b, 10))
      return !!a
    },
    Px = null,
    Qx = null,
    Tx = function() {
      var a = Ts()
      var b = (Qx = Qx || new Fq())
      var c = this
      this.l = a
      this.G = b
      this.H = hp.C()
      this.v = new t.Map()
      this.j = new t.Map()
      this.D = mu(this.D)
      this.o = P(291, this.o)
      this.W = Ok("google_nofetch")
      this.Y = Ok("google_norender")
      this.A = NaN
      this.T = new Js()
      this.V = 0
      this.I = Wa(_.q)
      this.U = {}
      this.R = this.O = NaN
      this.L = {}
      this.m = {}
      this.K = new wx()
      this.B = P(643, this.B)
      Kv(Gv.C(), pv, 614, function(d) {
        if ((d = xp(op.C(), d))) {
          var e = ko.C().j
          e = Fk(e, lo())
          Rx(c, [d], { wa: 2 }, e)
        }
      })
      Kv(Gv.C(), uv, 687, function(d) {
        var e = d.slotId
        d = d.na
        ;(e = xp(op.C(), e)) && Sx(c, [e], d.M, d.P)
      })
    },
    zt = function() {
      return (Px = Px || new Tx())
    },
    Ux = function(a, b, c, d, e) {
      var f = c.slot
      c = c.aa
      if (_.Ws(a.l, f)) {
        if (d) {
          var g = {}
          g[f.getSlotElementId()] = c
          Sx(a, [f], e, g)
        }
        if (d || !fp(f, b))
          (a = w(c, 10)),
            null == a && (a = w(e, 11)),
            a && !_.x(390) && Qv(ja(f, b))
      }
    },
    Vx = function(a, b, c, d, e, f) {
      _.x(391) ? bt(a.l, b, e.Ca) : (b.ba = e.Ca)
      if ((f = f.P[b.getSlotElementId()]))
        cp(b, d),
          Iv(Gv.C(), Av, { slotId: b.getSlotId(), Ob: d }),
          null != C(d, 23) &&
            C(d, 23).forEach(function(g) {
              var h = a.H
              if (!_.B(h.l, "includes").call(h.l, g))
                switch (g) {
                  case 1:
                  case 2:
                  case 3:
                    var k
                    if ((k = _.x(116) ? rn[g] : pn[g])) {
                      var l = g + "_hostpage_library"
                      if ((k = Uf(document, k))) k.id = l
                    }
                    h.l.push(g)
                    l = new sn(g)
                    h.v.push(l)
                    h = Eb()
                    h.hostpageLibraryTokens || (h.hostpageLibraryTokens = {})
                    h.hostpageLibraryTokens[l.j] = l.l
                }
              h = a.H
              h.j[g] || (h.j[g] = [])
              h.j[g].push(b)
            }),
          Ue(d, $m, 14).length && Gq(a.G, Ue(d, $m, 14)[0], c),
          (4 == ck(f) || 5 == ck(f) || w(d, 11)) && _.Xs(a.l, b),
          w(d, 8) || Uo(b, ht(e, b))
    }
  Tx.prototype.D = function(a, b) {
    var c = this
    b = void 0 === b ? !1 : b
    return _.q.IntersectionObserver
      ? new _.q.IntersectionObserver(
          function(d, e) {
            return c.o(d, e, b)
          },
          { rootMargin: a }
        )
      : new Bb(
          function(d, e) {
            return c.o(d, e, b)
          },
          { rootMargin: a }
        )
  }
  Tx.prototype.o = function(a, b, c) {
    var d = this
    c = void 0 === c ? !1 : c
    a.forEach(function(e) {
      if (c || !(0 >= e.intersectionRatio)) {
        b.unobserve(e.target)
        e = e.target.id
        var f = d.v.get(e)
        f && (f.Eb(), d.v.delete(e))
      }
    })
  }
  var Wx = function(a, b) {
      if (!b.length) return []
      var c = op.C().m,
        d = b[0].m
      a = Zs(a.l)
        .filter(function(e) {
          return e.m == d && !!e.H && !_.B(b, "includes").call(b, e)
        })
        .map(function(e) {
          return e.H
        })
      return Jc(c, a)
    },
    Xx = function(a, b, c, d) {
      var e = new et()
      e.I = "ldjh"
      d = w(d.M, 6) || _.x(364) ? "fifs" : "fif"
      e.o = d
      e.v = a.I
      e.wa = c
      e.j = b
      a = _.F(b)
      for (b = a.next(); !b.done; b = a.next()) gt(e, b.value)
      return e
    },
    Yx = function(a, b, c, d, e, f) {
      return new su(b, a.l, a.G, c, d, e, void 0 === f ? !1 : f)
    },
    Zx = function(a, b) {
      b.G = $i.C().j()
      b.m = a.T.getOseId()
      _.x(200) ||
        (Pq(), (b.T = Mq[1]), Pq(), (b.H = Mq[4]), Pq(), (b.K = Mq[6]))
      b.Ta = a.O
      b.Ua = a.R
      b.Fa = a.A
      b.A = Wx(a, b.j)
    },
    by = function(a, b, c, d) {
      var e = $x(a, b, d)
      if ("boolean" === typeof e) e || ay(a, b, c, d)
      else
        return e.then(
          P(750, function() {
            ay(a, b, c, d)
          })
        )
    },
    $x = function(a, b, c) {
      b = b.j
      var d = c.M,
        e = c.P,
        f = Se(d, Jj, 5) || new Jj()
      c = _.x(296)
      f = Xv(f)
      if (null == f) return c ? t.Promise.resolve() : !1
      var g = Math.max(f / 100, 0)
      if (
        !b.every(function(l) {
          var m = e[l.getSlotElementId()],
            n
          if ((n = ka(ja(l))))
            (n = window),
              (l = { slot: l, aa: m }),
              (m = !!w(d, 15)),
              (l = Mk(l, n.document, m)) && -12245933 != l.y
                ? ((n = Th(!0, n)), (n = Lk(l, n, g)))
                : (n = !0),
              (n = !n)
          return n
        })
      )
        return c ? t.Promise.resolve() : !1
      c = a.D(f + "%")
      var h = new Zq()
      f = {}
      b = _.F(b)
      for (var k = b.next(); !k.done; f = { eb: f.eb, pb: f.pb }, k = b.next())
        (k = k.value),
          (f.pb = k.getSlotElementId()),
          (f.eb = ja(k)),
          f.eb &&
            (a.v.set(f.pb, {
              Eb: function() {
                return void h.resolve()
              },
              cd: c,
            }),
            c.observe(f.eb),
            Wo(
              k,
              (function(l) {
                return function() {
                  return cy(a, l.eb, l.pb)
                }
              })(f)
            ))
      return h.j
    },
    ay = function(a, b, c, d) {
      var e = b.j
      a.v.get(e[0].getSlotElementId()) &&
        e.forEach(function(f) {
          var g = f.getSlotElementId()
          cy(a, ja(f), g)
        })
      dy(a, b, c, d)
    },
    dy = function(a, b, c, d) {
      var e = ++a.V
      b.l = e
      a.U[e] = b.j
      bj(2)
      Zx(a, b)
      e = vu(Yx(a, !!w(d.M, 6) || _.x(364), b, c, d))
      ey(a, e, b, c, d)
      a = b.j
      d = (d = Se(d.M, Lj, 18)) && null != C(d, 4) ? w(d, 4) : _.x(242)
      kw(iw.C(), window, Hk())
      d || kw(iw.C(), window)
      d = _.xi()
      a = _.F(a)
      for (b = a.next(); !b.done; b = a.next()) b.value.Y = d
    },
    Rx = function(a, b, c, d) {
      b = b.filter(function(e) {
        var f = e.getSlotId(),
          g = a.j.get(f)
        g
          ? 0 != _.r(46) &&
            _.B(Object, "assign").call(Object, g, { options: c, na: d })
          : (a.j.set(f, { na: d, options: c, Cc: null }),
            _.O(f, function() {
              a.j.delete(f)
            }))
        Wo(e, function() {
          return fy(a, e)
        })
        return !g
      })
      b.length && gy(a, b, c, d)
    },
    gy = function(a, b, c, d) {
      var e = _.xi()
      b = Pc(b, function(f) {
        return Lx(e, f)
      })
      _.wb(b, function(f, g) {
        if ("0" === g) hy(a, f, c, d)
        else if ("-1" === g) iy(a, f)
        else {
          var h = parseInt(g, 10)
          f.forEach(function(k) {
            fl.C().J(Fm(String(h), k.getAdUnitPath()))
          })
          hy(a, f, c, d, 1e3 * h)
        }
      })
    },
    iy = function(a, b) {
      var c = {}
      b = _.F(b)
      for (
        var d = b.next();
        !d.done;
        c = { ra: c.ra, Va: c.Va, fb: c.fb, ab: c.ab, ob: c.ob }, d = b.next()
      ) {
        c.ra = d.value
        c.ob = _.r(c.ra.isBackfill() ? 52 : 46)
        c.Va = []
        c.fb = null
        c.ab = (function(e) {
          return function(f, g) {
            if (e.ra === f) {
              var h = a.j.get(f.getSlotId())
              try {
                hy(a, [f], h.options, h.na, 1e3 * g)
              } finally {
                f = _.F(e.Va)
                for (g = f.next(); !g.done; g = f.next()) (g = g.value), g()
                e.Va.length = 0
                null !== e.fb && clearTimeout(e.fb)
              }
            }
          }
        })(c)
        if ((d = 1e3 * _.r(c.ra.isBackfill() ? 56 : 55)))
          a.j.get(c.ra.getSlotId()),
            (c.fb = setTimeout(
              (function(e) {
                return function() {
                  return e.ab(e.ra, 0)
                }
              })(c),
              d
            ))
        switch (c.ob) {
          case 2:
            c.Va.push(
              Kv(
                Gv.C(),
                tv,
                684,
                (function(e) {
                  return function(f) {
                    f === e.ra.getSlotId() && e.ab(e.ra, _.r(47, 1))
                  }
                })(c)
              )
            )
          case 1:
            c.Va.push(
              Kv(
                Gv.C(),
                sv,
                684,
                (function(e) {
                  return function(f) {
                    var g = f.isEmpty
                    f.slotId === e.ra.getSlotId() &&
                      (2 !== e.ob || g) &&
                      e.ab(e.ra, _.r(47, 1))
                  }
                })(c)
              )
            )
            break
          default:
            return
        }
      }
    },
    fy = function(a, b) {
      var c = a.j.get(b.getSlotId())
      c && (_.x(318) && _.q.clearTimeout(c.Cc), a.j.delete(b.getSlotId()))
    },
    hy = function(a, b, c, d, e) {
      e = void 0 === e ? 0 : e
      var f = _.xi()
      Fx(function() {
        var g = (e || 0) - (_.xi() - f)
        if (0 < g) {
          g = setTimeout(
            P(375, function() {
              jy(a, b, c, d)
            }),
            g
          )
          for (var h = _.F(b), k = h.next(); !k.done; k = h.next())
            if ((k = a.j.get(k.value.getSlotId()))) k.Cc = g
        } else jy(a, b, c, d)
      })
    },
    jy = function(a, b, c, d) {
      var e = d.M,
        f = d.P
      b.forEach(function(k) {
        fy(a, k)
      })
      var g = Pc(b, function(k) {
        return 0 != qa(f[k.getSlotElementId()]).length
      })
      if (g[!1]) {
        var h = _.F(g[!1])
        for (b = h.next(); !b.done; b = h.next())
          (b = b.value),
            Ux(a, document, { slot: b, aa: d.P[b.getSlotElementId()] }, !0, e)
      }
      if ((b = g[!0]))
        if (
          ((e = c.wa),
          b.forEach(function(k) {
            0 < k.B && Uo(k)
          }),
          void 0 !== c.Fa && (a.A = c.Fa),
          (a.O = c.Ta || NaN),
          (a.R = c.Ua || NaN),
          Vs(a.l, b),
          !a.W)
        )
          if (w(d.M, 6) || _.x(364)) (c = ky(b, b[0].m, d)), ly(a, d, c, e)
          else
            for (c = _.F(b), b = c.next(); !b.done; b = c.next())
              ly(a, d, [[b.value]], e)
    },
    Sx = function(a, b, c, d) {
      if (!_.x(336))
        for (var e = _.F(b), f = e.next(); !f.done; f = e.next())
          xx(a.K, f.value)
      a = _.F(b)
      for (f = a.next(); !f.done; f = a.next())
        (f = f.value),
          (b = ja(f)),
          Ox(d[f.getSlotElementId()], c) && Qv(b),
          ap(f)
      return !0
    },
    cy = function(a, b, c) {
      if (b) {
        var d = a.v.get(c)
        d && (d.cd.unobserve(b), a.v.delete(c))
      }
    },
    my = function(a, b, c, d) {
      d = void 0 === d ? document : d
      var e,
        f,
        g,
        h = 0,
        k = d,
        l = function() {
          h++
          if (3 === h) {
            var y = f,
              G = e,
              S = g,
              K = new Ug(),
              U = Qj(c.M)
            U = U && w(U, 9)
            if (_.x(396)) D(K, 5, !1)
            else if (y) {
              if ((U = !U))
                U = Kr(y)
                  ? !y.gdprApplies ||
                    "tcunavailable" === y.tcString ||
                    (y.purposeOneTreatment && "DE" === y.publisherCC)
                    ? !0
                    : (U = y.purpose && y.purpose.consents)
                    ? !!U["1"]
                    : !1
                  : !1
              D(K, 5, U)
              D(K, 2, y.tcString)
              "tcunavailable" === y.tcString
                ? fl.C().info(Mm("failed"))
                : fl.C().info(Mm("succeeded"))
              void 0 !== y.gdprApplies && D(K, 3, y.gdprApplies)
              y.addtlConsent && D(K, 4, y.addtlConsent)
            } else D(K, 5, !U)
            G && D(K, 1, G)
            null !== S && D(K, 6, S)
            b(K)
          }
        }
      Hx(a.j.length ? a.j[0].m : "")
      var m = function() {
        Jx(k, function(y) {
          f = y
          l()
        })
        Kx(k, function(y) {
          e = y
          l()
        })
      }
      if (_.x(367)) {
        var n = new Gr(_.Cf(d)),
          u = a.j.length ? a.j[0].m : "",
          z = _.gj(221)
        d = n.j ? Ir(n, "loaded") : t.Promise.resolve()
        d.then(function(y) {
          return Jr(n, y, u, z)
        }).then(function(y) {
          g = y
          l()
        })
        d.then(m)
      } else
        Gx(function() {
          Ix(a, Qj(c.M), l)
          m()
        })
    },
    oy = function(a, b, c, d) {
      d = void 0 === d ? document : d
      my(
        b,
        function(e) {
          ny(a, b, e, c, d)
          var f = d
          !Eb()._pubconsole_disable_ &&
            (e = Ra("google_pubconsole", e, f)) &&
            ((e = e.split("|")),
            0 < e.length && ("1" == e[0] || "0" == e[0]) && nt())
        },
        c,
        d
      )
    },
    ny = function(a, b, c, d, e) {
      e = void 0 === e ? document : e
      var f = Oa(c)
      jp.C().v = f
      var g = d.M,
        h = d.P
      b.j = b.j.filter(function(m) {
        m = m.getSlotElementId()
        ;(m = 5 !== ck(h[m])) || (m = 0 == Sn(window, !0, f))
        return m
      })
      if (b.j.length) {
        for (var k = _.F(b.j), l = k.next(); !l.done; l = k.next())
          py(e, l.value, d)
        if ((l = by(a, b, c, d)))
          l.then(
            P(751, function() {
              for (var m = _.F(b.j), n = m.next(); !n.done; n = m.next())
                (n = n.value), qy(0, n, g, h[n.getSlotElementId()])
            })
          )
        else
          for (a = _.F(b.j), l = a.next(); !l.done; l = a.next())
            (l = l.value), qy(0, l, g, h[l.getSlotElementId()])
      }
    },
    ky = function(a, b, c) {
      var d = []
      a = Pc(a, function(e) {
        return e.m
      })
      _.wb(a, function(e, f) {
        e = _.x(65) ? ry(e, c) : e
        f == b ? d.unshift(e) : d.push(e)
      })
      return d
    },
    ly = function(a, b, c, d) {
      var e = document
      if (c) {
        c = _.F(c)
        for (var f = c.next(); !f.done; f = c.next())
          (f = Xx(a, f.value, d, b)), oy(a, f, b, e)
      }
    },
    qy = function(a, b, c, d) {
      Ox(d, c) && !b.j && Qv(ja(b))
    },
    py = function(a, b, c) {
      if (!ia(b, a)) {
        var d = ja(b, a)
        if (d) {
          var e = c.M
          c = c.P[b.getSlotElementId()]
          var f = qa(c)
          if (0 == f.length) c = null
          else {
            c = f[0]
            if (1 < f.length) {
              var g
              b: if ((g = ja(b, a)) && g.style.height && g.style.width) {
                g = [g.style.width, g.style.height]
                for (var h = 0; h < g.length; ++h)
                  if (
                    2 < g[h].length &&
                    "px" == g[h].substring(g[h].length - 2)
                  )
                    g[h] = parseInt(g[h], 10)
                  else {
                    g = null
                    break b
                  }
              } else g = null
              c = g || c
            }
            if (_.x(392))
              for (f = _.F(f), g = f.next(); !g.done; g = f.next())
                (g = g.value),
                  !Array.isArray(g) ||
                    300 < g[1] ||
                    (!(g[1] > c[1]) && Array.isArray(c)) ||
                    (c = g)
          }
          _.x(389)
            ? Array.isArray(c) &&
              (a = pa(d, window) || d.style) &&
              ((b = a.display || d.style.display),
              (b && "flex" !== b && "block" !== b) ||
                ((b = a.alignItems || d.style.alignItems),
                (b && "center" !== b && "normal" !== b) ||
                  ((a = a.minHeight || ""),
                  (d.style.minHeight =
                    Math.max(
                      a && _.B(a, "endsWith").call(a, "px")
                        ? parseInt(a, 10)
                        : 0,
                      c[1]
                    ) + "px"),
                  (d.style.display = "flex"),
                  (d.style.alignItems = "center"))))
            : Rv(a, d, ep(b), !!w(e, 15), c)
        }
      }
    },
    ry = function(a, b) {
      var c = b.M,
        d = b.P,
        e = function(g) {
          g = d[g.getSlotElementId()]
          return 0 == ck(g)
        },
        f = []
      a.forEach(function(g) {
        if (e(g)) {
          var h = d[g.getSlotElementId()]
          h = Mk({ slot: g, aa: h }, document, !!w(c, 15)) || {}
          f.push({ ac: void 0 === h.y ? Infinity : h.y, slot: g })
        }
      })
      Nc(f, function(g, h) {
        return Mc(g.ac, h.ac)
      })
      return a.map(function(g) {
        return e(g) ? f.shift().slot : g
      })
    },
    ey = function(a, b, c, d, e) {
      var f = void 0 === f ? _.q.document : f
      var g = void 0 === g ? Nx : g
      var h = c.j
      a.m[c.l] = h.slice()
      var k = P(646, function(m, n, u) {
          sy(a, c, d, e, m, n, u, f)
        }),
        l = P(647, function() {
          for (var m = c.l, n = a.m[m] || [], u = 0; u < n.length; ++u)
            if (n[u]) {
              var z = new dn()
              z = '{"empty":' + D(z, 8, !0).m() + "}"
              sy(a, c, d, e, u, z, "")
            }
          delete a.m[m]
          Xa()
        })
      g = P(289, g)
      b = uk(tk(b))
      Mx(h)
      k = new Dx(k, g, l)
      l = !_.x(385) || !!w(d, 5)
      Cx(new zx(b, k, void 0 === l ? !0 : l))
      h = _.F(h)
      for (k = h.next(); !k.done; k = h.next())
        (k = k.value),
          (k.da = k.A.info(ql(k.getAdUnitPath()), null, k)),
          Hi(pk.C(), "7", 9, k.B - 1, 0, k.o),
          (k.D = null),
          (k.$ = null),
          Iv(Gv.C(), zv, k.getSlotId()),
          a.B(k, b, e)
    }
  Tx.prototype.B = function(a, b, c) {
    if (_.x(139) || w(c.M, 6) || _.x(364)) {
      var d = Xx(this, [a], 1, c)
      Zx(this, d)
      d.o = "fif"
      var e = Yx(this, _.x(364), d, new Ug(), c, !0)
      Yo(
        a,
        na(function() {
          return tk(vu(e))
        })
      )
    } else
      Yo(a, function() {
        return b
      })
  }
  var sy = function(a, b, c, d, e, f, g, h) {
    h = void 0 === h ? document : h
    var k = b.l,
      l = a.m[k] || [],
      m = l[e]
    l[e] = null
    try {
      var n = JSON.parse(f)
      var u = _.sc(n) ? n : null
    } catch (z) {
      u = null
    }
    l = (e = u) && ag(e, Sc)
    e = e && e[l]
    e = "string" === typeof l && Array.isArray(e) ? new dn(e.slice()) : null
    if (m)
      if (
        (a.L[k] || ((a.L[k] = !0), Ji(pk.C(), "4", ht(b, m))),
        m.A.info(rl(m.getAdUnitPath()), null, m, m.da),
        e)
      ) {
        f = pk.C()
        k = m.o
        l = C(e, 34) || ""
        f.j &&
          ((_.q.google_timing_params = _.q.google_timing_params || {}),
          (_.q.google_timing_params["qqid." + k] = l))
        f = C(e, 27)
        f = _.F(f)
        for (k = f.next(); !k.done; k = f.next()) (k = k.value), $i.C().l(k)
        bj(4)
        Vx(a, m, c, e, b, d)
        m.ma ||
          (w(e, 8) || a.Y
            ? ((b = h),
              (c = uo(m)),
              (g = ja(m, b)) && g.setAttribute("data-google-query-id", c),
              Ji(pk.C(), "5", m.o),
              Zo(m),
              (c = _.x(123)),
              Ux(a, b, { slot: m, aa: d.P[m.getSlotElementId()] }, c, d.M),
              (a = Gv.C()),
              (m = {
                slotId: m.getSlotId(),
                isEmpty: !0,
                slotContentChanged: c,
              }),
              Hv(a, sv, m))
            : yx(a.K, m, a.l, a.T, d, e, g, h, c))
      } else Xk(646, Error("invalid response: " + f))
    else Xk(646, Error("missing slot: " + l))
  }
  var ty = function(a, b, c) {
      this.j = a
      this.state = b
      this.options = c
    },
    uy = function(a) {
      this.pubads = a
      this.j = new t.Set()
      this.l = {}
    },
    vy = function(a, b, c) {
      if (w(b.M, 4)) return []
      if (
        !w(b.M, 6) ||
        (b.P[c.getSlotElementId()] && w(b.P[c.getSlotElementId()], 17))
      )
        return (
          a.j.add(c),
          _.O(c, function() {
            return void a.j.delete(c)
          }),
          [c]
        )
      b = []
      for (
        var d = {}, e = _.F(a.pubads.l), f = e.next();
        !f.done;
        d = { Ha: d.Ha }, f = e.next()
      )
        (d.Ha = f.value),
          a.j.has(d.Ha) ||
            (a.j.add(d.Ha),
            _.O(
              d.Ha,
              (function(g) {
                return function() {
                  return void a.j.delete(g.Ha)
                }
              })(d)
            ),
            b.push(d.Ha))
      return b
    }
  uy.prototype.display = function(a, b) {
    var c = vy(this, a, b)
    wy(this.pubads, c, a, { wa: 1 })
    a = b.getAdUnitPath()
    if ((b = this.l[a]) && !_.x(319)) {
      b = _.F(b)
      for (c = b.next(); !c.done; c = b.next())
        (c = c.value), wy(this.pubads, c.j, c.state, c.options)
      delete this.l[a]
    }
  }
  var yy = function(a, b, c, d) {
      if (_.x(319))
        Qo(
          a.pubads,
          P(690, function() {
            for (
              var h = {}, k = _.F(c), l = k.next();
              !l.done;
              h = { bb: h.bb }, l = k.next()
            )
              (h.bb = l.value),
                a.j.add(h.bb),
                _.O(
                  h.bb,
                  (function(m) {
                    return function() {
                      return void a.j.delete(m.bb)
                    }
                  })(h)
                )
            wy(a.pubads, c, b, d)
          })
        )
      else if (a.pubads.j) {
        for (
          var e = {}, f = _.F(c), g = f.next();
          !g.done;
          e = { cb: e.cb }, g = f.next()
        )
          (e.cb = g.value),
            a.j.add(e.cb),
            _.O(
              e.cb,
              (function(h) {
                return function() {
                  return void a.j.delete(h.cb)
                }
              })(e)
            )
        wy(a.pubads, c, b, d)
      } else
        c.length && w(b.M, 6)
          ? ((e = c[0].getAdUnitPath()),
            (f = a.l[e] || []),
            f.push(new ty(c, b, d)),
            (a.l[e] = f))
          : xy(a.pubads)
    },
    zy = function() {
      Po.call(this)
      var a = this
      this.m = this.D = !1
      _.x(87) &&
        (Lv ||
          (window.performance && og(window.performance.now) && (Lv = new Ov())))
      this.o = new uy(this)
      Kv(Gv.C(), vv, 701, function(b) {
        var c = b.slotId,
          d = b.makeRewardedVisible
        b = b.payload
        ;(c = xp(op.C(), c)) &&
          Ro(a, "rewardedSlotReady", new Io(cl(c), a.X(), d, b))
      })
      Kv(Gv.C(), wv, 702, function(b) {
        var c = b.slotId
        b = b.payload
        ;(c = xp(op.C(), c)) &&
          Ro(a, "rewardedSlotGranted", new Jo(cl(c), a.X(), b))
      })
      Kv(Gv.C(), xv, 703, function(b) {
        if ((b = xp(op.C(), b)))
          Ro(a, "rewardedSlotCanceled", new Ko(cl(b), a.X())),
            Ro(a, "rewardedSlotClosed", new Lo(cl(b), a.X()))
      })
      Kv(Gv.C(), yv, 704, function(b) {
        ;(b = xp(op.C(), b)) &&
          Ro(a, "rewardedSlotCompleted", new Mo(cl(b), a.X()))
      })
      Kv(Gv.C(), zv, 705, function(b) {
        ;(b = xp(op.C(), b)) && Ro(a, "slotRequested", new No(cl(b), a.X()))
      })
      Kv(Gv.C(), sv, 708, function(b) {
        var c = b.slotId,
          d = b.size,
          e = b.slotContentChanged
        b = b.isEmpty
        var f = xp(op.C(), c)
        f &&
          ((c = new Do(cl(f), "publisher_ads")),
          b && (c.isEmpty = b),
          e && (c.slotContentChanged = e),
          (e = f.K),
          d &&
            e &&
            ((c.size = [d.width, d.height]),
            (c.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId),
            (c.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId),
            (c.isBackfill = e.isBackfill),
            (c.creativeId = e.creativeId),
            (c.lineItemId = e.lineItemId),
            (c.creativeTemplateId = e.creativeTemplateId),
            (c.advertiserId = e.advertiserId),
            (c.campaignId = e.campaignId),
            (c.yieldGroupIds = e.yieldGroupIds),
            (c.companyIds = e.companyIds)),
          Ro(a, "slotRenderEnded", c))
      })
      Kv(Gv.C(), Av, 709, function(b) {
        b = b.slotId
        ;(b = xp(op.C(), b)) &&
          Ro(a, "slotResponseReceived", new Oo(cl(b), a.X()))
      })
      Kv(Gv.C(), Bv, 710, function(b) {
        ;(b = xp(op.C(), b)) && Ro(a, "slotOnload", new Go(cl(b), a.X()))
      })
      Kv(Gv.C(), tv, 715, function(b) {
        ;(b = xp(op.C(), b)) &&
          Ro(a, "impressionViewable", new Eo(cl(b), a.X()))
      })
      Kv(Gv.C(), Cv, 716, function(b) {
        var c = b.slotId
        b = b.inViewPercentage
        ;(c = xp(op.C(), c)) &&
          Ro(a, "slotVisibilityChanged", new Fo(cl(c), a.X(), b))
      })
    }
  _.H(zy, Po)
  _.p = zy.prototype
  _.p.za = function() {
    return new Ct(this, Vo)
  }
  _.p.display = function(a, b, c, d) {
    c = void 0 === c ? "" : c
    d = void 0 === d ? "" : d
    var e = ""
    if (c)
      if (_.sc(c) && 1 == c.nodeType) {
        var f = c
        e = f.id
      } else e = c
    io(this)
    b = zp(a, b, e)
    a = b.slot
    b = b.xa
    a &&
      b &&
      (f && !e && (f.id = a.getSlotId().j),
      this.Da(a, b),
      D(b, 7, d),
      Dp(f || a.getSlotId().j))
  }
  _.p.Kb = function() {
    var a = ko.C().j
    if (w(a, 6) || _.x(320)) {
      Ay(this, a)
      for (var b = _.F(this.l), c = b.next(); !c.done; c = b.next())
        By(this, c.value)
    }
    xt(this, a)
    this.m && Bt(this)
    Gb()
  }
  _.p.X = function() {
    return "publisher_ads"
  }
  _.p.Da = function(a, b) {
    w(b, 17) || By(this, a)
    var c = Gv.C(),
      d = a.getSlotId()
    Hv(c, Ev, d)
    Po.prototype.Da.call(this, a, b)
  }
  _.p.Ub = function(a, b) {
    io(this)
    Ay(this, a.M)
    By(this, b)
    this.log.info(Sl())
    var c = w(a.M, 6)
    if (Ys(Ts(), b) && (c || !b.j)) {
      if (c && (zt(), (c = ja(b, document)))) {
        var d = Gv.C()
        Hv(d, qv, c)
      }
      w(a.M, 4) && !_.x(394) && qy(zt(), b, a.M, a.P[b.getSlotElementId()])
      this.o.display(a, b)
    }
  }
  var By = function(a, b) {
      a.j && Us(Ts(), b)
      if (a.j) {
        var c = mo(ko.C(), b.getSlotElementId())
        if (c) {
          c = Ue(c, Fj, 3)
          c = _.F(c)
          for (var d = c.next(); !d.done; d = c.next()) {
            var e = d.value
            d = C(e, 2)
            if ((e = Gj(e)) && d && d.length) {
              var f
              if ((f = Ys(Ts(), b))) {
                var g = Ts()
                f = d[0]
                f = (g = g.j.get(b)) && Ms(g.Db, e, f)
              }
              f || a.log.J(Ul(e, d[0], b.getAdUnitPath()), a, b)
            }
          }
        }
      }
    },
    Ay = function(a, b) {
      if ((_.x(148) || !a.D) && a.j) {
        a.D = !0
        b = Ue(b, Fj, 14)
        b = _.F(b)
        for (var c = b.next(); !c.done; c = b.next()) {
          var d = c.value
          c = C(d, 2)
          if ((d = Gj(d)) && c && c.length) {
            var e = Ts()
            Ms(e.l, d, c[0]) || a.log.J(Tl(d, c[0]), a)
          }
        }
      }
    },
    vt = function(a, b, c) {
      if ("string" !== typeof b || 0 >= b.length || !c)
        return (
          a.log.error(nl("PubAdsService.definePassback", [b, c])),
          { slot: null, xa: null }
        )
      c = zp(b, c, void 0, !0)
      b = c.slot
      c = c.xa
      if (!b || !c) return { slot: null, xa: null }
      D(c, 17, !0)
      return { slot: new gw(b, a, c), xa: c }
    },
    hw = function(a, b, c) {
      io(a)
      Us(Ts(), c)
      c.Zb = !0
      a.o.display(b, c)
    },
    wt = function(a, b, c, d) {
      var e = Cy(a, c)
      if (e.length) {
        if (_.x(104)) {
          io(a)
          c = _.F(c)
          for (var f = c.next(); !f.done; f = c.next()) {
            f = f.value
            var g = b.P[f.getSlotElementId()]
            a.Da(f, g)
          }
        }
        yy(a.o, b, e, d || { wa: 2 })
      } else
        a.log.J(
          nl(
            "PubAdsService.refresh",
            [c].filter(function(h) {
              return void 0 !== h
            })
          ),
          a
        )
    },
    wy = function(a, b, c, d) {
      a.log.info(cm(), a)
      Dy(b, d, c) &&
        1 !== d.wa &&
        Iv(
          Gv.C(),
          Fv,
          b.map(function(e) {
            return e.getSlotId()
          })
        )
    },
    Dy = function(a, b, c) {
      a = a.filter(function(e) {
        return Ys(Ts(), e)
      })
      var d = a.filter(function(e) {
        return _.Ws(Ts(), e)
      })
      if (!d.length) return null
      Rx(zt(), d, b, c)
      return a
    },
    At = function(a, b) {
      return a.j ? { vid: C(b, 22) || "", cmsid: C(b, 23) || "" } : null
    },
    xt = function(a, b) {
      w(b, 21) && a.j && (zt().A = Kk())
    },
    Ey = function(a, b, c, d) {
      a = b ? Cy(a, b) : Zs(Ts())
      b = _.F(a)
      for (var e = b.next(); !e.done; e = b.next()) bp(e.value)
      return Sx(zt(), a, c, d)
    },
    yt = function(a, b, c, d) {
      if (!a.j) return a.log.J(bm(), a), !1
      var e = null
      if (d && ((e = Cy(a, d)), 0 == e.length))
        return (
          a.log.J(
            nl(
              "PubAdsService.clear",
              [d].filter(function(f) {
                return void 0 !== f
              })
            ),
            a
          ),
          !1
        )
      a.log.info(dm(), a)
      return Ey(a, e, b, c)
    }
  zy.prototype.getVersion = function() {
    if (this.j) return Ua()
  }
  var Cy = function(a, b) {
      var c = []
      if (!Array.isArray(b)) return c
      b.forEach(function(d, e) {
        ;(d = wj(d, Vo)) && !d.ma ? c.push(d) : a.log.J(im(String(e)), a)
      })
      return c
    },
    Bt = function(a) {
      a.m = !0
      if (a.j) {
        Ts().v = !0
        a = new Pk("gpt_markAsAmp", vk(), _.gj(23))
        gb(a, Ts())
        try {
          var b = rh(_.q)
          b && E(a, "ntype", b)
          var c = _.q.location.ancestorOrigins,
            d =
              null != c
                ? _.B(Array, "from")
                    .call(Array, c)
                    .map(function(e) {
                      return (
                        (/^(?:https?:\/\/)?([^\/\?:#]+)/i.exec(e) || [])[1] || e
                      ).substr(0, 20)
                    })
                : []
          E(a, "ost", d.slice(0, 10).join())
        } catch (e) {}
        Rk(a)
      }
    }
  zy.prototype.destroySlots = function(a) {
    var b = Po.prototype.destroySlots.call(this, a)
    if (!b.length) return b
    if (this.j) {
      var c = ko.C().j
      Ey(this, a, c, lo())
      at(Ts(), a)
    }
    return b
  }
  var xy = function(a) {
      var b = am()
      a.log.J(b, a)
    },
    Fy = P(26, function() {
      var a = kp.C(),
        b = _.B(a, "find").call(a, "publisher_ads")
      b || ((b = new zy()), a.add(b))
      return b
    })
  Db("pubads", function() {
    return cl(Fy())
  })
  var Oy = function(a, b) {
    jo.call(this, a)
    var c = this
    this.set = Q(576, function(d, e) {
      a.set(d, e)
      return c
    })
    this.get = Q(577, function(d) {
      return a.get(d)
    })
    this.getAttributeKeys = Q(578, function() {
      return Zf(a.m)
    })
    this.display = Q(558, function(d, e, f, g) {
      return a.display(d, e, void 0 === f ? "" : f, void 0 === g ? "" : g)
    })
    this.notifyUnfilledSlots = Q(69, function(d) {
      a.Ba && Gy(a, Hy(a, d))
    })
    this.isRoadblockingSupported = Q(111, function() {
      return Iy(a)
    })
    this.refreshAllSlots = Q(60, function() {
      a.Ba && Gy(a)
    })
    this.setVideoSession = Q(61, function(d, e, f) {
      a.H = d
      a.D = e
      a.G = f
    })
    this.getDisplayAdsCorrelator = Q(62, function(d) {
      return Jy(a, void 0 === d ? "" : d)
    })
    this.getVideoStreamCorrelator = Q(63, function() {
      if (Fy().j) {
        var d = zt().A
        d = isNaN(d) ? 0 : d
      } else d = 0
      return d
    })
    this.isSlotAPersistentRoadblock = Q(64, function(d) {
      d = wj(d, b)
      return !!d && Ky(a, d)
    })
    this.onImplementationLoaded = Q(65, function() {
      a.log.info(Rl("GPT CompanionAds"), a)
    })
    this.fillSlot = Q(66, function(d, e) {
      d = wj(d, b)
      var f
      if ((f = !!d))
        d && yp(d) && e && "string" === typeof e
          ? ((Ly(a, d).content = e), (f = My(a, d)))
          : (f = !1)
      return f
    })
    this.slotRenderEnded = Q(67, function(d, e, f) {
      return (d = wj(d, b)) && Ny(a, d, e, f)
    })
    this.setRefreshUnfilledSlots = Q(59, function(d) {
      "boolean" === typeof d && (a.Ba = d)
    })
  }
  _.H(Oy, jo)
  var Qy = function(a, b) {
    jo.call(this, a)
    this.setContent = Q(72, function(c, d) {
      return (c = wj(c, b)) && Py(a, c, d)
    })
    this.display = Q(562, function(c, d, e, f) {
      return a.display(c, d, void 0 === e ? "" : e, void 0 === f ? "" : f)
    })
  }
  _.H(Qy, jo)
  var Ry = function() {
    Po.call(this)
    var a = this
    this.o = new t.Map()
    this.m = {}
    this.Ba = !1
    this.H = 0
    this.G = this.D = void 0
    this.I = this.K = !1
    Kv(Gv.C(), Av, 752, function(b) {
      var c = b.slotId
      w(b.Ob, 11) &&
        (b = _.B(a.l, "find").call(a.l, function(d) {
          return c === d.getSlotId()
        })) &&
        (Ly(a, b).j = !0)
    })
  }
  _.H(Ry, Po)
  _.p = Ry.prototype
  _.p.za = function() {
    return new Oy(this, Vo)
  }
  _.p.set = function(a, b) {
    "string" === typeof a && a.length
      ? ((this.m[a] = b), this.log.info(Jl(a, String(b), this.X()), this, null))
      : this.log.J(Kl(String(a), String(b), this.X()), this, null)
    return this
  }
  _.p.get = function(a) {
    var b
    return null !== (b = this.m[a]) && void 0 !== b ? b : null
  }
  _.p.display = function(a, b, c, d) {
    c = void 0 === c ? "" : c
    d = void 0 === d ? "" : d
    io(this)
    b = zp(a, b, c)
    a = b.slot
    b = b.xa
    this.Da(a, b)
    D(b, 7, d)
    Dp(a.getSlotId().j)
  }
  _.p.Kb = function() {
    Sy(this)
  }
  var Iy = function(a) {
      var b = Fy()
      if (!b.j) return !1
      var c = b.l
      a = a.l
      return c.length !== a.length
        ? !1
        : !a.some(function(d) {
            return !_.B(c, "includes").call(c, d)
          })
    },
    Jy = function(a, b) {
      ;(b = void 0 === b ? "" : b) &&
        !a.I &&
        fb("ima_sdk_v", function(d) {
          a.I = !0
          E(d, "v", b)
        })
      var c = ko.C().j
      return String(C(c, 26))
    },
    Gy = function(a, b) {
      var c = Fy(),
        d = ko.C().j,
        e = lo()
      if (c.j) {
        var f = { wa: 3 }
        void 0 !== a.H && (f.Fa = a.H)
        a.D && (f.Ta = a.D)
        a.G && (f.Ua = a.G)
        a = null !== b && void 0 !== b ? b : a.l
        d = Fk(d, e)
        ;(f.Fa && "number" !== typeof f.Fa) ||
          (f.Ta && "number" !== typeof f.Ta) ||
          (f.Ua && "number" !== typeof f.Ua) ||
          wt(c, d, a, f)
      } else a.log.error(Nl("PubAds", "refresh"))
    },
    Ky = function(a, b) {
      var c
      if (Fy().j && yp(b))
        return (
          (a = a.o.get(b.getSlotId())),
          null !== (c = null === a || void 0 === a ? void 0 : a.j) &&
          void 0 !== c
            ? c
            : !1
        )
      a.log.error(Ol())
      return !1
    },
    Hy = function(a, b) {
      return b
        .map(function(c) {
          return _.B(a.l, "find").call(a.l, function(d) {
            return d.l.l === c
          })
        })
        .filter(function(c) {
          return !!c
        })
    }
  Ry.prototype.X = function() {
    return "companion_ads"
  }
  var Sy = function(a) {
      hb(
        70,
        function() {
          if (!a.K) {
            var b = document
            a.log.info(Pl("GPT CompanionAds"), a)
            Uf(
              b,
              "https://pagead2.googlesyndication.com/pagead/show_companion_ad.js"
            )
            a.K = !0
          }
        },
        function(b, c) {
          Xk(b, c)
          a.log.error(Ql("GPT CompanionAds"), a)
        }
      )
    },
    My = function(a, b) {
      if (!a.j || Ky(a, b)) return !1
      var c = ja(b)
      if (!c) return !1
      var d = (a.o.get(b.getSlotId()) || {}).content
      if (void 0 === d) return !1
      a.o.delete(b.getSlotId())
      Zo(b)
      c.innerHTML = d
      $o(b)
      d = c = null
      var e = mo(ko.C(), b.getSlotElementId())
      e &&
        1 === Ue(e, Rj, 5).length &&
        null != C(Ue(e, Rj, 5)[0], 1) &&
        null != C(Ue(e, Rj, 5)[0], 2) &&
        ((c = C(Ue(e, Rj, 5)[0], 1)), (d = C(Ue(e, Rj, 5)[0], 2)))
      Ny(a, b, c, d)
      return !0
    }
  Ry.prototype.Ub = function(a, b) {
    My(this, b)
  }
  var Ny = function(a, b, c, d) {
      b = new Do(cl(b), a.X())
      null != c && null != d && (b.size = [c, d])
      Ro(a, "slotRenderEnded", b)
    },
    Ly = function(a, b) {
      var c = a.o.get(b.getSlotId())
      c ||
        ((c = {}),
        a.o.set(b.getSlotId(), c),
        _.O(b, function() {
          return a.o.delete(b.getSlotId())
        }))
      return c
    },
    Ty = function() {
      return hb(57, function() {
        var a = kp.C(),
          b = _.B(a, "find").call(a, "companion_ads")
        b || ((b = new Ry()), a.add(b))
        return b
      })
    }
  Db("companionAds", function() {
    return cl(Ty())
  })
  var Uy = function() {
    Po.apply(this, arguments)
    this.content = new t.Map()
  }
  _.H(Uy, Po)
  Uy.prototype.za = function() {
    return new Qy(this, Vo)
  }
  Uy.prototype.X = function() {
    return "content"
  }
  Uy.prototype.display = function(a, b, c, d) {
    c = void 0 === c ? "" : c
    d = void 0 === d ? "" : d
    io(this)
    b = zp(a, b, c)
    a = b.slot
    b = b.xa
    this.Da(a, b)
    D(b, 7, d)
    Dp(a.getSlotId().j)
  }
  Uy.prototype.destroySlots = function(a) {
    a = Po.prototype.destroySlots.call(this, a)
    for (var b = _.F(a), c = b.next(); !c.done; c = b.next())
      this.content.delete(c.value)
    return a
  }
  var Vy = function(a, b) {
    if (a.j && !b.D) {
      var c = ja(b)
      if (c) {
        var d = a.content.get(b)
        void 0 !== d &&
          (Zo(b),
          (c.innerHTML = d),
          $o(b),
          Ro(a, "slotRenderEnded", new Do(cl(b), a.X())))
      }
    }
  }
  Uy.prototype.Kb = function() {}
  Uy.prototype.Ub = function(a, b) {
    Vy(this, b)
  }
  var Py = function(a, b, c) {
      yp(b) &&
        "string" === typeof c &&
        c.length &&
        (a.content.set(b, c),
        _.O(b, function() {
          return void a.content.delete(b)
        }),
        Vy(a, b))
    },
    Wy = function() {
      return hb(71, function() {
        var a = kp.C(),
          b = _.B(a, "find").call(a, "content")
        b || ((b = new Uy()), a.add(b))
        return b
      })
    }
  Db("content", function() {
    return cl(Wy())
  })
  if (window.googletag.evalScripts) window.googletag.evalScripts()
  else {
    var Xy = window,
      Yy = _.yi(Xy)
    if (Yy) {
      var Zy = { label: "2", type: 9, value: Yy },
        $y = (Xy.google_js_reporting_queue = Xy.google_js_reporting_queue || [])
      2048 > $y.length && $y.push(Zy)
    }
    Db("evalScripts", function() {
      iu()
    })
    ku()
  }
}.call(this, {}))
