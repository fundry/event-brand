﻿;(function(g, h, z) {
  function u(a, b, c) {
    return function() {
      try {
        return a.apply(this, arguments)
      } catch (d) {
        c || za(d, b)
      }
    }
  }
  function za(a, b) {
    var c
    if (0.01 > Math.random())
      try {
        var d = (a && a.message) || ""
        ;(c =
          -1 < d.indexOf("network error occurred") ||
          (-1 < d.indexOf("send beacon") &&
            -1 < d.indexOf("Content Security Policy"))) ||
          new ia().log(
            "jserrs",
            sa,
            a.message,
            b,
            J.href,
            "",
            "string" === typeof a.stack && a.stack.replace(/\n/g, "\\n")
          )
      } catch (f) {}
  }
  function xb(a, b, c, d, f) {
    function r(a, b) {
      b = Math.max(0, Math.min(b, 65535))
      e.mergeArrays(a, [b >> 8, b & 255])
    }
    function p(a, b) {
      e.mergeArrays(a, [b & 255])
    }
    function k(a, b) {
      for (b = Math.max(0, b | 0); 127 < b; )
        e.mergeArrays(a, [(b & 127) | 128]), (b >>= 7)
      e.mergeArrays(a, [b])
    }
    function C(a, b) {
      255 < b.length && (b = b.substr(0, 255))
      e.mergeArrays(a, [b.length])
      for (var c = 0; c < b.length; c++) r(a, b.charCodeAt(c))
    }
    function t(a, b) {
      k(a, b.length)
      for (var c = 0; c < b.length; c++) k(a, b.charCodeAt(c))
    }
    function D(a) {
      if (!a.nodeName) return (a[A] = -1), null
      var b = +a[A]
      if (!isFinite(b) || 0 >= b) return null
      if (a.attributes)
        for (var c = a; c; ) {
          if (c.attributes.__ym_wv_ign) return null
          c = c.parentElement
        }
      c = 64
      var d = 0,
        f = n.getElementParent(a),
        e = f && f[A] ? f[A] : 0
      0 > e && (e = 0)
      var g = a.nodeName.toUpperCase(),
        ta = zb[g]
      ta || (c |= 2)
      var t = n.getElementNeighborPosition(a)
      t || (c |= 4)
      var D = n.getElementRegion(a)
      ;(f = f ? n.getElementRegion(f) : null) &&
        D[0] == f[0] &&
        D[1] == f[1] &&
        D[2] == f[2] &&
        D[3] == f[3] &&
        (c |= 8)
      Ma[b].pos = D[0] + "x" + D[1]
      Ma[b].size = D[2] + "x" + D[3]
      a.id && "string" == typeof a.id && (c |= 32)
      ;(f = n.calcTextChecksum(a)) && (c |= 16)
      var I = n.calcAttribChecksum(a)
      I && (d |= 2)
      a: {
        var v = n.getElementChildren(n.getElementParent(a), a.tagName)
        for (var h = 0; h < v.length; h++)
          if (
            (!v[h].id || "string" != typeof v[h].id) &&
            n.calcAttribChecksum(v[h]) == I &&
            n.calcTextChecksum(v[h]) == f
          ) {
            v = !0
            break a
          }
        v = !1
      }
      if (v) {
        c |= 1
        var l = n.calcChildrenChecksum(a)
      }
      v = []
      p(v, 1)
      k(v, b)
      p(v, c)
      k(v, e)
      ta ? p(v, ta) : C(v, g)
      t && k(v, t)
      c & 8 || (k(v, D[0]), k(v, D[1]), k(v, D[2]), k(v, D[3]))
      c & 32 && C(v, a.id)
      f && r(v, f)
      c & 1 && r(v, l)
      p(v, d)
      I && r(v, I)
      return v
    }
    function m(a, b, c, d, f, e) {
      for (var r; c && (r = n.getElementSize(c)) && (!r[0] || !r[1]); )
        c = n.getElementParent(c)
      if (!c) return null
      r = c[A]
      if (!r || 0 > r) return null
      var g = {
        mousemove: 2,
        click: 32,
        dblclick: 33,
        mousedown: 4,
        mouseup: 30,
        touch: 12,
      }[b]
      if (!g) return null
      var ta = n.getElementXY(c)
      c = []
      p(c, g)
      k(c, a)
      k(c, r)
      k(c, Math.max(0, d[0] - ta[0]))
      k(c, Math.max(0, d[1] - ta[1]))
      ;/^mouse(up|down)|click$/.test(b) &&
        ((a = f || e), p(c, 2 > a ? 1 : a == (f ? 2 : 4) ? 4 : 2))
      return c
    }
    function Bb(a, b, c, d) {
      b = b[A]
      if (!b || 0 > b) return null
      var f = []
      p(f, 31)
      k(f, a)
      k(f, b)
      k(f, c[0])
      k(f, c[1])
      p(f, 0)
      p(f, 0)
      p(f, d)
      return f
    }
    function Aa(a, b) {
      var c = []
      p(c, 3)
      k(c, a)
      k(c, b[0])
      k(c, b[1])
      return c
    }
    function ib(a, b, c) {
      var d = []
      c = c[A]
      if (!c || 0 > c) return null
      p(d, 16)
      k(d, a)
      k(d, b[0])
      k(d, b[1])
      k(d, c)
      return d
    }
    function w(a, b, c) {
      var d = []
      p(d, 28)
      k(d, a)
      k(d, b[0])
      k(d, b[1])
      k(d, c[0])
      k(d, c[1])
      return d
    }
    function u(a, b, c, d, f) {
      var e = []
      p(e, 38)
      k(e, a)
      r(e, b)
      p(e, c)
      a = d[A]
      if (!a || 0 > a) a = 0
      k(e, a)
      p(e, f ? 1 : 0)
      return e
    }
    function Cb(a, b) {
      var c
      if (0 == b.length) var d = (c = "")
      else
        100 >= b.length
          ? ((c = b), (d = ""))
          : 200 >= b.length
          ? ((c = b.substr(0, 100)), (d = b.substr(100)))
          : ((c = b.substr(0, 97)), (d = b.substr(b.length - 97)))
      var f = []
      p(f, 29)
      k(f, a)
      t(f, c)
      t(f, d)
      return f
    }
    function ja(a) {
      var b = []
      p(b, 27)
      k(b, a)
      return b
    }
    function Db(a) {
      var b = []
      p(b, 14)
      k(b, a)
      return b
    }
    function ua(a) {
      var b = []
      p(b, 15)
      k(b, a)
      return b
    }
    function z(a, b) {
      var c = []
      p(c, 17)
      k(c, a)
      k(c, b[A])
      return c
    }
    function y(a, b) {
      var c = []
      p(c, 18)
      k(c, a)
      k(c, b[A])
      return c
    }
    function F(a, b, c, d) {
      var f = []
      p(f, 39)
      k(f, a)
      k(f, b[A])
      C(f, String(c))
      p(f, d ? 1 : 0)
      return f
    }
    function E(a) {
      var b = a[A]
      if (
        !b ||
        0 > b ||
        !/^INPUT|SELECT|TEXTAREA$/.test(a.nodeName) ||
        !a.form ||
        R(a.form)
      )
        return null
      var c = n.getFormNumber(a.form)
      if (0 > c) return null
      var d =
        "INPUT" == a.nodeName
          ? {
              text: 0,
              color: 0,
              date: 0,
              datetime: 0,
              "datetime-local": 0,
              email: 0,
              number: 0,
              range: 0,
              search: 0,
              tel: 0,
              time: 0,
              url: 0,
              month: 0,
              week: 0,
              password: 2,
              radio: 3,
              checkbox: 4,
              file: 6,
              image: 7,
            }[a.type]
          : { SELECT: 1, TEXTAREA: 5 }[a.nodeName]
      if ("number" != typeof d) return null
      for (
        var f = -1, e = a.form.elements, r = e.length, g = 0, C = 0;
        g < r;
        g++
      )
        if (e[g].name == a.name) {
          if (e[g] == a) {
            f = C
            break
          }
          C++
        }
      if (0 > f) return null
      e = []
      p(e, 7)
      k(e, b)
      k(e, c)
      k(e, d)
      t(e, a.name || "")
      k(e, f)
      return e
    }
    function J(a, b) {
      var c = n.getFormNumber(b)
      if (0 > c) return null
      for (var d = b.elements, f = d.length, r = [], g = 0; g < f; g++)
        if (!n.isEmptyField(d[g])) {
          var C = d[g][A]
          C && 0 < C && e.mergeArrays(r, [C])
        }
      d = []
      p(d, 11)
      k(d, a)
      k(d, c)
      k(d, r.length)
      for (c = 0; c < r.length; c++) k(d, r[c])
      return d
    }
    function L() {
      var a = []
      p(a, 13)
      return a
    }
    function G(a, b, c) {
      a = a.apply(g, b)
      Z.append(a, c)
    }
    function M(a) {
      if (a[A])
        a: {
          var b = q.nowEventTime()
          var c = a[A]
          if (0 < c) {
            var d = []
            a = n.getElementRegion(a)
            var f = Ma[c],
              e = a[0] + "x" + a[1],
              r = a[2] + "x" + a[3]
            e != f.pos &&
              ((f.pos = e), p(d, 9), k(d, b), k(d, c), k(d, a[0]), k(d, a[1]))
            r != f.size &&
              ((f.size = r), p(d, 10), k(d, b), k(d, c), k(d, a[2]), k(d, a[3]))
            if (d.length) {
              b = d
              break a
            }
          }
          b = null
        }
      else
        (b = n.getElementParent(a)) && M(b),
          (a[A] = Wa),
          (Ma[Wa] = {}),
          Wa++,
          (b = D(a)),
          Z.append(b, void 0),
          (b = E(a))
      Z.append(b, void 0)
    }
    function O(a, b) {
      var c = a && n.classNameExists(a, "(ym-disable-keys|-metrika-nokeys)")
      b &&
        a &&
        (c =
          c ||
          !!n.getElementsByClassName("(ym-disable-keys|-metrika-nokeys)", a)
            .length)
      return c
    }
    function R(a) {
      return a && n.classNameExists(a, "(ym-disable-submit|-metrika-noform)")
    }
    function K(a) {
      var b = H.getTarget(a)
      if (b && "SCROLLBAR" != b.nodeName) {
        if (/^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b.tagName))
          if (b[A]) M(b)
          else {
            var c = b.form
            if (c) {
              c = c.elements
              for (var d = c.length, f = 0; f < d; f++)
                /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(c[f].tagName) &&
                  !c[f][A] &&
                  M(c[f])
            } else M(b)
          }
        else M(b)
        G(m, [q.nowEventTime(), a.type, b, H.getPos(a), a.which, a.button])
      }
    }
    function X(a) {
      K(a)
      ma()
    }
    function B(a) {
      var b = q.nowTime(),
        c = b - jb
      if (!(10 > c)) {
        var d = H.getPos(a),
          f = Xa[0] - d[0],
          p = Xa[1] - d[1]
        f = f * f + p * p
        0 >= f ||
          (16 > f && 100 > c) ||
          (20 > c && 256 > f) ||
          ((jb = b), (Xa = d), K(a))
      }
    }
    function da() {
      var a = n.getDocumentScroll(),
        b = q.nowTime()
      10 > b - kb ||
        (10 > Math.abs(a[0] - Za[0]) && 10 > Math.abs(a[1] - Za[1])) ||
        ((kb = b), (Za = a), G(Aa, [q.nowEventTime(), a]))
    }
    function ca(a) {
      if ((a = H.getTarget(a))) {
        var b = Math.random(),
          c = [a.scrollLeft, a.scrollTop]
        if (a.localId) {
          if (
            ((b = $a[a.localId]),
            !b || (10 > Math.abs(c[0] - b[0]) && 10 > Math.abs(c[1] - b[1])))
          )
            return
        } else {
          for (; $a[b]; ) b = Math.random()
          a.localId = b
        }
        $a[a.localId] = c
        a !== h && (M(a), G(ib, [q.nowEventTime(), c, a]))
      }
    }
    function T() {
      G(w, [q.nowEventTime(), n.getViewportSize(), n.getDocumentSize()])
    }
    function aa() {
      G(L, [], !0)
    }
    function ka(a) {
      return (
        (a.shiftKey ? 2 : 0) |
        (a.ctrlKey ? 4 : 0) |
        (a.altKey ? 1 : 0) |
        (a.metaKey ? 8 : 0) |
        (a.ctrlKey || a.altKey ? 16 : 0)
      )
    }
    function fa(a) {
      return "INPUT" == a.tagName
        ? "password" == a.type ||
            (a.name && Oa.test(a.name)) ||
            (a.id && Oa.test(a.id))
        : !1
    }
    function Y(a) {
      if (!a)
        return {
          ignore: !0,
          forceRecord: !1,
          isPrivate: !1,
          privateFlag: !1,
          recordData: !0,
        }
      var b = "password" === a.type || Oa.test(a.name) || Oa.test(a.id),
        c =
          e.reduce(
            function(b, c) {
              return b || Da.generalRegex.test(a[c])
            },
            !1,
            ["className", "id", "name"]
          ) || Da.placeholderRegex.test(a.placeholder),
        d = Da.forceRecordRegex.test(a.className)
      return {
        forceRecord: d,
        ignore: b,
        isPrivate: c,
        privateFlag: !d && (c || b),
        recordData: d || !((c && f.get("isEU")) || b),
      }
    }
    function N(a, b, c) {
      a = H.getTarget(a)
      var d = Y(a)
      d.ignore ||
        (!d.forceRecord && ((d.isPrivate && f.get("isEU")) || O(a))) ||
        (M(a), G(u, [q.nowEventTime(), b, c, a, d.privateFlag]))
    }
    function ha(a) {
      var b = a.keyCode,
        c = ka(a)
      if (
        {
          3: 1,
          8: 1,
          9: 1,
          13: 1,
          16: 1,
          17: 1,
          18: 1,
          19: 1,
          20: 1,
          27: 1,
          33: 1,
          34: 1,
          35: 1,
          36: 1,
          37: 1,
          38: 1,
          39: 1,
          40: 1,
          45: 1,
          46: 1,
          91: 1,
          92: 1,
          93: 1,
          106: 1,
          110: 1,
          111: 1,
          144: 1,
          145: 1,
        }[b] ||
        (112 <= b && 123 >= b) ||
        (96 <= b && 105 >= b) ||
        c & 16
      )
        19 == b && 4 == (c & -17) && (b = 144),
          N(a, b, c | 16),
          (ab = !1),
          e.setTimeout(
            function() {
              ab = !0
            },
            1,
            "wvl.keyDown"
          ),
          !(67 == b && c & 4) || c & 1 || c & 2 || va()
    }
    function ia(a) {
      ab &&
        !W &&
        0 !== a.which &&
        (N(a, a.charCode || a.keyCode, ka(a)),
        (W = !0),
        e.setTimeout(
          function() {
            W = !1
          },
          1,
          "vwl.keyPress"
        ))
    }
    function ma() {
      if (g.getSelection) {
        try {
          var a = g.getSelection()
        } catch (yb) {
          return
        }
        var b = a.toString()
        var c = a.anchorNode
      } else
        h.selection &&
          h.selection.createRange &&
          ((a = h.selection.createRange()),
          (b = a.text),
          (c = a.parentElement()))
      if ("string" == typeof b) {
        try {
          for (; c && 1 != c.nodeType; ) c = c.parentNode
        } catch (yb) {
          return
        }
        if (c) {
          a = Y(c).privateFlag || O(c, !0)
          c = c.getElementsByTagName("*")
          for (var d = 0; d < c.length && !a; )
            (a = Y(c[d]).privateFlag || O(c[d], !0)), d++
          b != bb &&
            ((bb = b),
            (b = a
              ? e
                  .map(function() {
                    return Da.obfuscatedSymbol
                  }, b.split(""))
                  .join("")
              : b),
            G(Cb, [q.nowEventTime(), b]))
        }
      }
    }
    function va() {
      cb ||
        ((cb = !0),
        bb && G(ja, [q.nowEventTime()]),
        e.setTimeout(
          function() {
            cb = !1
          },
          1,
          "wvl.copy"
        ))
    }
    function ba() {
      Ea || ((Ea = !0), G(Db, [q.nowEventTime()]))
    }
    function na() {
      Ea && ((Ea = !1), G(ua, [q.nowEventTime()]))
    }
    function U(a) {
      ;(!Ea || (a && !a.fromElement)) && ba()
    }
    function la(a) {
      a && !a.toElement && na()
    }
    function oa(a) {
      if (
        (a = H.getTarget(a)) &&
        /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName)
      ) {
        if (a[A]) M(a)
        else {
          var b = a.form
          if (b) {
            b = b.elements
            for (var c = b.length, d = 0; d < c; d++)
              /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(b[d].tagName) &&
                !b[d][A] &&
                M(b[d])
          } else M(a)
        }
        G(z, [q.nowEventTime(), a])
      }
    }
    function I(a) {
      ;(a = H.getTarget(a)) &&
        /^INPUT|SELECT|TEXTAREA|BUTTON$/.test(a.tagName) &&
        (M(a), G(y, [q.nowEventTime(), a]))
    }
    function v(a) {
      if (
        (a = H.getTarget(a)) &&
        !fa(a) &&
        !O(a) &&
        /^INPUT|SELECT|TEXTAREA$/.test(a.tagName)
      ) {
        var b = Y(a),
          c = /^(checkbox|radio)$/.test(a.type) ? a.checked : a.value
        c = b.recordData
          ? c
          : e
              .map(function() {
                return Da.obfuscatedSymbol
              }, c.split(""))
              .join("")
        M(a)
        G(F, [q.nowEventTime(), a, c, b.privateFlag])
      }
    }
    function V(a) {
      if ((a = H.getTarget(a)) && !R(a) && "FORM" == a.nodeName) {
        for (var b = a.elements, c = 0; c < b.length; c++)
          n.isEmptyField(b[c]) || M(b[c])
        G(J, [q.nowEventTime(), a], !0)
      }
    }
    function P(a) {
      da()
      if (a.touches && a.touches.length) {
        var b = H.getTarget(a)
        if (b && b != h) {
          M(b)
          for (var c = 0; c < a.touches.length; c++)
            G(m, [
              q.nowEventTime(),
              "touch",
              b,
              [a.touches[c].pageX, a.touches[c].pageY],
              0,
              0,
            ])
        }
      }
    }
    function S(a) {
      var b = H.getTarget(a)
      if (b) {
        var c
        "wheel" == a.type
          ? (c = 0 < a.deltaY ? 1 : 0 > a.deltaY ? 2 : 0)
          : "mousewheel" == a.type &&
            (c = 0 < a.wheelDelta ? 2 : 0 > a.wheelDelta ? 1 : 0)
        c && (M(b), G(Bb, [q.nowEventTime(), b, H.getPos(a), c]))
      }
    }
    function pa(a) {
      ;(a = H.getTarget(a)) && "BODY" == a.tagName && Z.append([], !0)
    }
    var Z = new Pa({
        protocol: a,
        globalConfig: f,
        counterId: b,
        counterType: c,
        meta: { url: x().href, hitId: d, timezone: db, timestamp: eb },
      }),
      lb = n.getBody(),
      zb = {
        A: 1,
        ABBR: 2,
        ACRONYM: 3,
        ADDRESS: 4,
        APPLET: 5,
        AREA: 6,
        B: 7,
        BASE: 8,
        BASEFONT: 9,
        BDO: 10,
        BIG: 11,
        BLOCKQUOTE: 12,
        BODY: 13,
        BR: 14,
        BUTTON: 15,
        CAPTION: 16,
        CENTER: 17,
        CITE: 18,
        CODE: 19,
        COL: 20,
        COLGROUP: 21,
        DD: 22,
        DEL: 23,
        DFN: 24,
        DIR: 25,
        DIV: 26,
        DL: 27,
        DT: 28,
        EM: 29,
        FIELDSET: 30,
        FONT: 31,
        FORM: 32,
        FRAME: 33,
        FRAMESET: 34,
        H1: 35,
        H2: 36,
        H3: 37,
        H4: 38,
        H5: 39,
        H6: 40,
        HEAD: 41,
        HR: 42,
        HTML: 43,
        I: 44,
        IFRAME: 45,
        IMG: 46,
        INPUT: 47,
        INS: 48,
        ISINDEX: 49,
        KBD: 50,
        LABEL: 51,
        LEGEND: 52,
        LI: 53,
        LINK: 54,
        MAP: 55,
        MENU: 56,
        META: 57,
        NOFRAMES: 58,
        NOSCRIPT: 59,
        OBJECT: 60,
        OL: 61,
        OPTGROUP: 62,
        OPTION: 63,
        P: 64,
        PARAM: 65,
        PRE: 66,
        Q: 67,
        S: 68,
        SAMP: 69,
        SCRIPT: 70,
        SELECT: 71,
        SMALL: 72,
        SPAN: 73,
        STRIKE: 74,
        STRONG: 75,
        STYLE: 76,
        SUB: 77,
        SUP: 78,
        TABLE: 79,
        TBODY: 80,
        TD: 81,
        TEXTAREA: 82,
        TFOOT: 83,
        TH: 84,
        THEAD: 85,
        TITLE: 86,
        TR: 87,
        TT: 88,
        U: 89,
        UL: 90,
        VAR: 91,
        NOINDEX: 100,
      },
      Da = (function() {
        var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(
          " "
        )
        return {
          generalRegex: new RegExp("(" + a.join("|") + ")", "i"),
          placeholderRegex: new RegExp(
            "(" +
              a
                .concat(
                  "\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(
                    ";"
                  )
                )
                .join("|") +
              ")",
            "i"
          ),
          forceRecordRegex: /ym-record-keys/i,
          obfuscatedSymbol: String.fromCharCode(8226),
          obfuscatedKeyCode: 88,
        }
      })(),
      Wa = 1,
      jb = 0,
      Xa = [0, 0],
      kb = 0,
      Za = [0, 0],
      $a = {},
      Oa = /^(password|passwd|pswd)$/,
      ab = !0,
      W = !1,
      bb = "",
      cb = !1,
      Ea = !0
    q.initCorrector()
    q.nowTime()
    var A = "metrikaId_" + Math.random(),
      Ma = {},
      Q = ":submit" + Math.random()
    if (!e.isMetrikaPlayer()) {
      l.on(h, "mousemove", B)
      l.on(h, "click,dblclick,mousedown", K)
      l.on(h, "mouseup", X)
      l.on(g, "scroll", da)
      if ("onmousewheel" in h) l.on(h, "mousewheel", S)
      else l.on(h, "wheel", S)
      l.on(g, "beforeunload", aa)
      if (!Eb) l.on(g, "unload", aa)
      l.on(g, "resize", T)
      l.on(h, "keydown", ha)
      l.on(h, "keypress", ia)
      l.on(h, "copy", va)
      l.on(h, "touchmove,touchstart", P)
      if (lb) l.on(h, "mouseleave", pa)
      h.attachEvent && !g.opera
        ? (l.on(h, "focusin", U), l.on(h, "focusout", la))
        : (l.on(g, "focus", ba), l.on(g, "blur", na), l.on(h, "blur", na))
      h.addEventListener
        ? (l.on(h, "scroll", ca),
          l.on(h, "focus", oa),
          l.on(h, "blur", I),
          l.on(h, "change", v),
          l.on(h, "submit", V))
        : h.attachEvent &&
          (l.on(h, "focusin", oa),
          l.on(h, "focusout", I),
          (function() {
            for (
              var a = h.getElementsByTagName("form"), b = 0;
              b < a.length;
              b++
            ) {
              for (
                var c = a[b].getElementsByTagName("*"), d = 0;
                d < c.length;
                d++
              )
                if (/^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName))
                  l.on(c[d], "change", v)
              l.on(a[b], "submit", V)
            }
          })())
      ;(function() {
        var a = h.getElementsByTagName("form")
        if (a.length)
          for (var b = 0; b < a.length; b++) {
            var c = a[b].submit
            if (
              "function" === typeof c ||
              ("object" === typeof c &&
                /^\s*function submit\(\)/.test(String(c)))
            )
              (a[b][Q] = c),
                (a[b].submit = function() {
                  V({ target: this })
                  return this[Q]()
                })
          }
      })()
      "0:0" !== n.getDocumentScroll().join(":") && da()
      T()
    }
    return {
      start: function() {
        Z.activate()
      },
      stop: function() {
        Z.clear()
        l.un(h, "mousemove", B)
        l.un(h, "click", K)
        l.un(h, "dblclick", K)
        l.un(h, "mousedown", K)
        l.un(h, "mouseup", X)
        l.un(h, "mousewheel", S)
        l.un(h, "wheel", S)
        l.un(g, "scroll", da)
        l.un(g, "beforeunload", aa)
        l.un(g, "unload", aa)
        l.un(g, "resize", T)
        l.un(h, "keydown", ha)
        l.un(h, "keypress", ia)
        l.un(h, "copy", va)
        l.un(h, "touchmove", P)
        l.un(h, "touchstart", P)
        lb && l.un(h, "mouseleave", pa)
        l.un(h, "focusin", U)
        l.un(h, "focusout", la)
        l.un(g, "focus", ba)
        l.un(g, "blur", na)
        l.un(h, "blur", na)
        h.removeEventListener
          ? (l.un(h, "scroll", ca),
            l.un(h, "focus", oa),
            l.un(h, "blur", I),
            l.un(h, "change", v),
            l.un(h, "submit", V))
          : h.detachEvent &&
            (l.un(h, "focusin", oa),
            l.un(h, "focusout", I),
            (function() {
              for (
                var a = h.getElementsByTagName("form"), b = 0;
                b < a.length;
                b++
              ) {
                for (
                  var c = a[b].getElementsByTagName("*"), d = 0;
                  d < c.length;
                  d++
                )
                  /^INPUT|SELECT|TEXTAREA$/.test(c[d].tagName) &&
                    l.un(c[d], "change", v)
                l.un(a[b], "submit", V)
              }
            })())
        ;(function() {
          for (var a = h.getElementsByTagName("form"), b = 0; b < a.length; b++)
            a[b][Q] && (a[b].submit = a[b][Q])
        })()
      },
    }
  }
  function x() {
    for (
      var a = {},
        b = "hash host hostname href pathname port protocol search".split(" "),
        c = b.length,
        d = c,
        f,
        e;
      d--;

    )
      a[b[d]] = ""
    try {
      for (f = g.location, d = c; d--; ) (e = b[d]), (a[e] = "" + f[e])
    } catch (p) {
      J && (a = J)
    }
    return a
  }
  function U() {
    return (
      0 ==
      x().hostname.search(
        /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site)$/
      )
    )
  }
  function wa(a) {
    return -1 !== ("" + g.navigator.userAgent).toLowerCase().search(a)
  }
  function mb(a) {
    return (a = a && a.innerHTML && a.innerHTML.replace(/<\/?[^>]+>/gi, ""))
      ? ("" + a).replace(/^\s+/, "").replace(/\s+$/, "")
      : ""
  }
  function nb(a, b) {
    var c
    if (!a || !b) return !1
    var d = []
    for (c = 0; c < b.length; c++)
      d.push(
        b[c]
          .replace(/\^/g, "\\^")
          .replace(/\$/g, "\\$")
          .replace(/\./g, "\\.")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/\|/g, "\\|")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
          .replace(/\?/g, "\\?")
          .replace(/\*/g, "\\*")
          .replace(/\+/g, "\\+")
          .replace(/\{/g, "\\{")
          .replace(/\}/g, "\\}")
      )
    return new RegExp("\\.(" + d.join("|") + ")$", "i").test(a)
  }
  function Fb(a, b) {
    function c(a) {
      a = a.split(":")
      a = a[1] || ""
      a = a.replace(/^\/*/, "").replace(/^www\./, "")
      return a.split("/")[0]
    }
    return a && b ? c(a) == c(b) : a || b ? !1 : !0
  }
  function ob() {
    var a = g.performance || g.webkitPerformance,
      b = a && a.timing,
      c,
      d = []
    if (b && (c = b.navigationStart))
      for (
        d = [
          b.domainLookupEnd - b.domainLookupStart,
          b.connectEnd - b.connectStart,
          b.responseStart - b.requestStart,
          b.responseEnd - b.responseStart,
          b.fetchStart - c,
          b.redirectEnd - b.redirectStart,
          b.redirectCount || (a.navigation && a.navigation.redirectCount),
        ],
          d.push(
            b.domInteractive && b.domLoading
              ? b.domInteractive - b.domLoading
              : null
          ),
          d.push(
            b.domContentLoadedEventStart && b.domContentLoadedEventEnd
              ? b.domContentLoadedEventEnd - b.domContentLoadedEventStart
              : null
          ),
          d.push(b.domComplete ? b.domComplete - c : null),
          d.push(b.loadEventStart ? b.loadEventStart - c : null),
          d.push(
            b.loadEventStart && b.loadEventEnd
              ? b.loadEventEnd - b.loadEventStart
              : null
          ),
          d.push(
            b.domContentLoadedEventStart
              ? b.domContentLoadedEventStart - c
              : null
          ),
          a = 0;
        a < d.length;
        a++
      )
        (b = d[a]), null !== b && (0 > b || 36e5 < b) && (d[a] = null)
    return d
  }
  function Gb(a) {
    var b = [],
      c = a._lastPerformanceTiming,
      d = ob(),
      f
    if (c) {
      var e = 0
      for (f = c.length; e < f; e++)
        null === d[e] ? b.push(d[e]) : b.push(c[e] === d[e] ? "" : d[e])
    } else b = d
    a._lastPerformanceTiming = d
    return b.join(",")
  }
  function Hb(a) {
    return "first-contentful-paint" === a.name
  }
  function Ib() {
    var a = g.performance && g.performance.getEntriesByType,
      b = a ? e.filter(Hb, g.performance.getEntriesByType("paint")) : []
    if (b.length) return (b = b[0]), Math.round(b.startTime)
    if (a) return 0
    if ("object" == typeof g.chrome && g.chrome.loadTimes) {
      if (
        ((b = g.chrome.loadTimes()),
        b.requestTime &&
          b.firstPaintTime &&
          g.performance &&
          g.performance.timing)
      )
        return Math.round(
          1e3 * b.firstPaintTime - g.performance.timing.navigationStart
        )
    } else if (
      g.performance &&
      g.performance.timing &&
      ((b = g.performance.timing), b.navigationStart && b.msFirstPaint)
    )
      return b.msFirstPaint - b.navigationStart
    return null
  }
  var Qa = !1,
    W =
      "undefined" !== typeof Object &&
      "function" === typeof Object.defineProperty
  try {
    if (W) {
      var xa = (function(a) {
        function b(d) {
          if (c[d]) return c[d].f
          var f = (c[d] = { ia: d, X: !1, f: {} })
          return a[d].call(f.f, f, f.f, b), (f.X = !0), f.f
        }
        var c = {}
        return (
          (b.ka = a),
          (b.fa = c),
          (b.i = function(a, c, e) {
            b.O(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: e })
          }),
          (b.s = function(a) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
            Object.defineProperty(a, "__esModule", { value: !0 })
          }),
          (b.ja = function(a, c) {
            if (
              (1 & c && (a = b(a)), 8 & c) ||
              (4 & c && "object" == typeof a && a && a.a)
            )
              return a
            var d = Object.create(null)
            if (
              (b.s(d),
              Object.defineProperty(d, "default", { enumerable: !0, value: a }),
              2 & c && "string" != typeof a)
            )
              for (var f in a)
                b.i(
                  d,
                  f,
                  function(b) {
                    return a[b]
                  }.bind(null, f)
                )
            return d
          }),
          (b.ga = function(a) {
            var c =
              a && a.a
                ? function() {
                    return a["default"]
                  }
                : function() {
                    return a
                  }
            return b.i(c, "a", c), c
          }),
          (b.O = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
          }),
          (b.ha = ""),
          b((b.la = 0))
        )
      })([
        function(a, b, c) {
          var d =
            (this && this.da) ||
            function() {
              return (d =
                Object.assign ||
                function(a) {
                  for (var b, c = 1, d = arguments.length; c < d; c++)
                    for (var f in (b = arguments[c]))
                      Object.prototype.hasOwnProperty.call(b, f) &&
                        (a[f] = b[f])
                  return a
                }).apply(this, arguments)
            }
          b.a = !0
          var f = c(1),
            e = c(2),
            p = c(3),
            k = c(4),
            g = c(5),
            t = c(7),
            D = c(8),
            h = c(9),
            l = c(10),
            n = c(11),
            m = c(12),
            q = c(13)
          a = (function() {
            function a(a) {
              var b = this
              this.l = a
              this.S = {
                webGL: f.M,
                dnt: D.C,
                font: e.D,
                screen: k.J,
                speech: p.K,
                jsHeap: n.F,
                navi: l.H,
                mMedia: h.G,
                plugins: g.I,
                video: m.L,
                applePay: t.B,
              }
              this.l = d({ webGL: !1, dnt: !1, plugins: !1, applePay: !1 }, a)
              this.R = Object.keys(this.l)
                .filter(function(a) {
                  return b.l[a]
                })
                .map(function(a) {
                  return new b.S[a]()
                })
            }
            return (
              (a.prototype.toString = function(a) {
                void 0 === a && (a = !0)
                var b = this.R.map(function(a) {
                  var b = ""
                  try {
                    b = a.b()
                  } catch (Na) {}
                  return b
                })
                return a
                  ? [q.hash(b.join(""), 210)]
                  : b.map(function(a) {
                      return q.hash(a, 210)
                    })
              }),
              a
            )
          })()
          b.ca = a
          b["default"] = a
        },
        function(a, b) {
          var c =
            (this && this.ea) ||
            (function() {
              function a(b, c) {
                return (a =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function(a, b) {
                      a.__proto__ = b
                    }) ||
                  function(a, b) {
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                  })(b, c)
              }
              return function(b, c) {
                function d() {
                  this.constructor = b
                }
                a(b, c)
                b.prototype =
                  null === c
                    ? Object.create(c)
                    : ((d.prototype = c.prototype), new d())
              }
            })()
          b.a = !0
          var d = (function(a) {
            function b() {
              var b = a.call(this, "webgl") || this
              return b.g && !b.V() && (b.g = !1), b
            }
            return (
              c(b, a),
              (b.prototype.V = function() {
                var a =
                  this.canvas.getContext &&
                  (this.canvas.getContext("webgl") ||
                    this.canvas.getContext("experimental-webgl"))
                return !!g.WebGLRenderingContext && !!a
              }),
              (b.prototype.j = function(a) {
                var b = this.c
                return (
                  b.clearColor(0, 0, 0, 1),
                  b.enable(b.DEPTH_TEST),
                  b.depthFunc(b.LEQUAL),
                  b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT),
                  "[" + a[0] + ", " + a[1] + "]"
                )
              }),
              (b.prototype.Y = function(a) {
                var b,
                  c =
                    a.getExtension("EXT_texture_filter_anisotropic") ||
                    a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                    a.getExtension("MOZ_EXT_texture_filter_anisotropic")
                return c
                  ? (0 ===
                      (b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) &&
                      (b = 2),
                    b)
                  : null
              }),
              (b.prototype.u = function() {
                var a = this.c,
                  b = [],
                  c = a.createBuffer()
                a.bindBuffer(a.ARRAY_BUFFER, c)
                a.bufferData(
                  a.ARRAY_BUFFER,
                  new Float32Array([
                    -0.2,
                    -0.9,
                    0,
                    0.4,
                    -0.26,
                    0,
                    0,
                    0.732134444,
                    0,
                  ]),
                  a.STATIC_DRAW
                )
                c.W = 3
                c.Z = 3
                var d = a.createProgram(),
                  f = a.createShader(a.VERTEX_SHADER)
                a.shaderSource(
                  f,
                  "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate\x3dattrVertex+uniformOffset;gl_Position\x3dvec4(attrVertex,0,1);}"
                )
                a.compileShader(f)
                var e = a.createShader(a.FRAGMENT_SHADER)
                a.shaderSource(
                  e,
                  "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor\x3dvec4(varyinTexCoordinate,0,1);}"
                )
                a.compileShader(e)
                a.attachShader(d, f)
                a.attachShader(d, e)
                a.linkProgram(d)
                a.useProgram(d)
                d.aa = a.getAttribLocation(d, "attrVertex")
                d.$ = a.getUniformLocation(d, "uniformOffset")
                a.enableVertexAttribArray(d.ma)
                a.vertexAttribPointer(d.aa, c.W, a.FLOAT, !1, 0, 0)
                a.uniform2f(d.$, 1, 1)
                a.drawArrays(a.TRIANGLE_STRIP, 0, c.Z)
                null != a.canvas && b.push(a.canvas.toDataURL())
                b.push("extensions:" + a.getSupportedExtensions().join(";"))
                b.push(
                  "webgl aliased line width range:" +
                    this.j(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE))
                )
                b.push(
                  "webgl aliased point size range:" +
                    this.j(a.getParameter(a.ALIASED_POINT_SIZE_RANGE))
                )
                b.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS))
                b.push(
                  "webgl antialiasing:" +
                    (a.getContextAttributes().antialias ? "yes" : "no")
                )
                b.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS))
                b.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS))
                b.push("webgl green bits:" + a.getParameter(a.GREEN_BITS))
                b.push("webgl max anisotropy:" + this.Y(a))
                b.push(
                  "webgl max combined texture image units:" +
                    a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
                )
                b.push(
                  "webgl max cube map texture size:" +
                    a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)
                )
                b.push(
                  "webgl max fragment uniform vectors:" +
                    a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS)
                )
                b.push(
                  "webgl max render buffer size:" +
                    a.getParameter(a.MAX_RENDERBUFFER_SIZE)
                )
                b.push(
                  "webgl max texture image units:" +
                    a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)
                )
                b.push(
                  "webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE)
                )
                b.push(
                  "webgl max varying vectors:" +
                    a.getParameter(a.MAX_VARYING_VECTORS)
                )
                b.push(
                  "webgl max vertex attribs:" +
                    a.getParameter(a.MAX_VERTEX_ATTRIBS)
                )
                b.push(
                  "webgl max vertex texture image units:" +
                    a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
                )
                b.push(
                  "webgl max vertex uniform vectors:" +
                    a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS)
                )
                b.push(
                  "webgl max viewport dims:" +
                    this.j(a.getParameter(a.MAX_VIEWPORT_DIMS))
                )
                b.push("webgl red bits:" + a.getParameter(a.RED_BITS))
                b.push("webgl renderer:" + a.getParameter(a.RENDERER))
                b.push(
                  "webgl shading language version:" +
                    a.getParameter(a.SHADING_LANGUAGE_VERSION)
                )
                b.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS))
                b.push("webgl vendor:" + a.getParameter(a.VENDOR))
                b.push("webgl version:" + a.getParameter(a.VERSION))
                try {
                  var r = a.getExtension("WEBGL_debug_renderer_info")
                  r &&
                    (b.push(
                      "webgl unmasked vendor:" +
                        a.getParameter(r.UNMASKED_VENDOR_WEBGL)
                    ),
                    b.push(
                      "webgl unmasked renderer:" +
                        a.getParameter(r.UNMASKED_RENDERER_WEBGL)
                    ))
                } catch (Aa) {}
                return a.getShaderPrecisionFormat
                  ? (b.push(
                      "webgl vertex shader high float precision:" +
                        a.getShaderPrecisionFormat(
                          a.VERTEX_SHADER,
                          a.HIGH_FLOAT
                        ).precision
                    ),
                    b.push(
                      "webgl vertex shader high float precision rangeMin:" +
                        a.getShaderPrecisionFormat(
                          a.VERTEX_SHADER,
                          a.HIGH_FLOAT
                        ).rangeMin
                    ),
                    b.push(
                      "webgl vertex shader high float precision rangeMax:" +
                        a.getShaderPrecisionFormat(
                          a.VERTEX_SHADER,
                          a.HIGH_FLOAT
                        ).rangeMax
                    ),
                    b.push(
                      "webgl vertex shader medium float precision:" +
                        a.getShaderPrecisionFormat(
                          a.VERTEX_SHADER,
                          a.MEDIUM_FLOAT
                        ).precision
                    ),
                    b.push(
                      "webgl vertex shader medium float precision rangeMin:" +
                        a.getShaderPrecisionFormat(
                          a.VERTEX_SHADER,
                          a.MEDIUM_FLOAT
                        ).rangeMin
                    ),
                    b.push(
                      "webgl vertex shader medium float precision rangeMax:" +
                        a.getShaderPrecisionFormat(
                          a.VERTEX_SHADER,
                          a.MEDIUM_FLOAT
                        ).rangeMax
                    ),
                    b.push(
                      "webgl vertex shader low float precision:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)
                          .precision
                    ),
                    b.push(
                      "webgl vertex shader low float precision rangeMin:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)
                          .rangeMin
                    ),
                    b.push(
                      "webgl vertex shader low float precision rangeMax:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)
                          .rangeMax
                    ),
                    b.push(
                      "webgl fragment shader high float precision:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.HIGH_FLOAT
                        ).precision
                    ),
                    b.push(
                      "webgl fragment shader high float precision rangeMin:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.HIGH_FLOAT
                        ).rangeMin
                    ),
                    b.push(
                      "webgl fragment shader high float precision rangeMax:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.HIGH_FLOAT
                        ).rangeMax
                    ),
                    b.push(
                      "webgl fragment shader medium float precision:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.MEDIUM_FLOAT
                        ).precision
                    ),
                    b.push(
                      "webgl fragment shader medium float precision rangeMin:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.MEDIUM_FLOAT
                        ).rangeMin
                    ),
                    b.push(
                      "webgl fragment shader medium float precision rangeMax:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.MEDIUM_FLOAT
                        ).rangeMax
                    ),
                    b.push(
                      "webgl fragment shader low float precision:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.LOW_FLOAT
                        ).precision
                    ),
                    b.push(
                      "webgl fragment shader low float precision rangeMin:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.LOW_FLOAT
                        ).rangeMin
                    ),
                    b.push(
                      "webgl fragment shader low float precision rangeMax:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.LOW_FLOAT
                        ).rangeMax
                    ),
                    b.push(
                      "webgl vertex shader high int precision:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)
                          .precision
                    ),
                    b.push(
                      "webgl vertex shader high int precision rangeMin:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)
                          .rangeMin
                    ),
                    b.push(
                      "webgl vertex shader high int precision rangeMax:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)
                          .rangeMax
                    ),
                    b.push(
                      "webgl vertex shader medium int precision:" +
                        a.getShaderPrecisionFormat(
                          a.VERTEX_SHADER,
                          a.MEDIUM_INT
                        ).precision
                    ),
                    b.push(
                      "webgl vertex shader medium int precision rangeMin:" +
                        a.getShaderPrecisionFormat(
                          a.VERTEX_SHADER,
                          a.MEDIUM_INT
                        ).rangeMin
                    ),
                    b.push(
                      "webgl vertex shader medium int precision rangeMax:" +
                        a.getShaderPrecisionFormat(
                          a.VERTEX_SHADER,
                          a.MEDIUM_INT
                        ).rangeMax
                    ),
                    b.push(
                      "webgl vertex shader low int precision:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)
                          .precision
                    ),
                    b.push(
                      "webgl vertex shader low int precision rangeMin:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)
                          .rangeMin
                    ),
                    b.push(
                      "webgl vertex shader low int precision rangeMax:" +
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)
                          .rangeMax
                    ),
                    b.push(
                      "webgl fragment shader high int precision:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.HIGH_INT
                        ).precision
                    ),
                    b.push(
                      "webgl fragment shader high int precision rangeMin:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.HIGH_INT
                        ).rangeMin
                    ),
                    b.push(
                      "webgl fragment shader high int precision rangeMax:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.HIGH_INT
                        ).rangeMax
                    ),
                    b.push(
                      "webgl fragment shader medium int precision:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.MEDIUM_INT
                        ).precision
                    ),
                    b.push(
                      "webgl fragment shader medium int precision rangeMin:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.MEDIUM_INT
                        ).rangeMin
                    ),
                    b.push(
                      "webgl fragment shader medium int precision rangeMax:" +
                        a.getShaderPrecisionFormat(
                          a.FRAGMENT_SHADER,
                          a.MEDIUM_INT
                        ).rangeMax
                    ),
                    b.push(
                      "webgl fragment shader low int precision:" +
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)
                          .precision
                    ),
                    b.push(
                      "webgl fragment shader low int precision rangeMin:" +
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)
                          .rangeMin
                    ),
                    b.push(
                      "webgl fragment shader low int precision rangeMax:" +
                        a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)
                          .rangeMax
                    ),
                    b.join("~"))
                  : b.join("~")
              }),
              b
            )
          })(
            (a = (function() {
              function a(a) {
                this.P = a
                this.g = !0
                this.canvas = h.createElement("canvas")
                this.U() || (this.g = !1)
              }
              return (
                (a.prototype.U = function() {
                  return (
                    (this.c = this.canvas.getContext(this.P)),
                    !(!this.canvas.getContext || !this.c)
                  )
                }),
                (a.prototype.b = function() {
                  return this.g ? this.u() : this.id
                }),
                a
              )
            })())
          )
          b.M = d
          a = (function(a) {
            function b() {
              return a.call(this, "2d") || this
            }
            return (
              c(b, a),
              (b.prototype.u = function() {
                var a = this.canvas,
                  b = this.c,
                  c = []
                return (
                  (a.width = 2e3),
                  (a.height = 200),
                  (a.style.display = "inline"),
                  b.rect(0, 0, 10, 10),
                  b.rect(2, 2, 6, 6),
                  c.push(
                    "canvas winding:" +
                      (!1 === b.isPointInPath(5, 5, "evenodd") ? "yes" : "no")
                  ),
                  (b.textBaseline = "alphabetic"),
                  (b.fillStyle = "#f60"),
                  b.fillRect(125, 1, 62, 20),
                  (b.fillStyle = "#069"),
                  (b.font = "11pt Arial"),
                  b.fillText(
                    "Cwm fjordbank glyphs vext quiz, \ud83d\ude03",
                    2,
                    15
                  ),
                  (b.fillStyle = "rgba(102, 204, 0, 0.2)"),
                  (b.font = "18pt Arial"),
                  b.fillText(
                    "Cwm fjordbank glyphs vext quiz, \ud83d\ude03",
                    4,
                    45
                  ),
                  (b.globalCompositeOperation = "multiply"),
                  (b.fillStyle = "rgb(255,0,255)"),
                  b.beginPath(),
                  b.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                  b.closePath(),
                  b.fill(),
                  (b.fillStyle = "rgb(0,255,255)"),
                  b.beginPath(),
                  b.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                  b.closePath(),
                  b.fill(),
                  (b.fillStyle = "rgb(255,255,0)"),
                  b.beginPath(),
                  b.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                  b.closePath(),
                  b.fill(),
                  (b.fillStyle = "rgb(255,0,255)"),
                  b.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                  b.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                  b.fill("evenodd"),
                  c.push("canvas fp:" + a.toDataURL()),
                  c.join("~")
                )
              }),
              b
            )
          })(a)
          b.ba = a
        },
        function(a, b) {
          b.a = !0
          a = (function() {
            function a() {
              this.N = ["monospace", "sans-serif", "serif"]
              this.T = "Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(
                ";"
              )
              this.o = "mmmmmmmmmmlli"
            }
            return (
              (a.prototype.b = function() {
                var a = this.N.concat(this.T)
                try {
                  var b = h.createElement("canvas")
                } catch (t) {
                  return ""
                }
                if (!(b && b.getContext && b.getContext("2d"))) return ""
                var c = []
                ;(b = b.getContext("2d")).font = "30px " + this.o
                for (
                  var e = b.measureText(this.o).width, g = 0, C = a.length;
                  g < C;
                  g++
                )
                  (b.font = "30px " + a[g]),
                    c.push(b.measureText(this.o).width === e)
                return c.join("x")
              }),
              a
            )
          })()
          b.D = a
        },
        function(a, b) {
          b.a = !0
          a = (function() {
            function a() {}
            return (
              (a.prototype.b = function() {
                if (!(c = g.speechSynthesis)) return ""
                for (var a, b = [], c = c.getVoices(), e = 0; e < c.length; e++)
                  (a = c[e]),
                    b.push(
                      "" +
                        a.name +
                        a.lang +
                        a.localService +
                        a.voiceURI +
                        a["default"]
                    )
                return b.join("")
              }),
              a
            )
          })()
          b.K = a
        },
        function(a, b) {
          b.a = !0
          a = (function() {
            function a() {}
            return (
              (a.prototype.b = function() {
                var a = g.screen
                return [
                  a.width,
                  a.height,
                  a.availWidth,
                  a.availHeight,
                  a.availTop,
                ].join("x")
              }),
              a
            )
          })()
          b.J = a
        },
        function(a, b, c) {
          b.a = !0
          var d = c(6)
          a = (function() {
            function a() {}
            return (
              (a.prototype.b = function() {
                return d
                  .A(navigator.plugins)
                  .sort(function(a, b) {
                    return a.name > b.name ? 1 : 2
                  })
                  .map(function(a) {
                    return [
                      a.name,
                      a.description,
                      d
                        .A(a)
                        .map(function(a) {
                          return [a.description, a.suffixes, a.type].join()
                        })
                        .join(),
                    ].join()
                  })
                  .join()
              }),
              a
            )
          })()
          b.I = a
        },
        function(a, b) {
          b.a = !0
          b.A = function(a) {
            return Array.prototype.slice.call(a)
          }
        },
        function(a, b) {
          b.a = !0
          a = (function() {
            function a() {
              this.m = g.ApplePaySession
            }
            return (
              (a.prototype.b = function() {
                var a = !1
                try {
                  a = g.self !== g.top
                } catch (r) {}
                if (!this.m || "https:" !== J.protocol || a) return ""
                a = ""
                for (var b = 1; 10 >= b; b++)
                  a += this.m.supportsVersion(b) ? b : "0"
                return a + this.m.canMakePayments()
              }),
              a
            )
          })()
          b.B = a
        },
        function(a, b) {
          b.a = !0
          a = (function() {
            function a() {
              this.h = g.navigator
            }
            return (
              (a.prototype.b = function() {
                return this.h.doNotTrack
                  ? this.h.doNotTrack
                  : this.h.msDoNotTrack
                  ? this.h.msDoNotTrack
                  : "unknown"
              }),
              a
            )
          })()
          b.C = a
        },
        function(a, b) {
          b.a = !0
          a = (function() {
            function a() {}
            return (
              (a.prototype.b = function() {
                function a(a) {
                  return (
                    "" +
                    (a = g.matchMedia("(" + a + ")")).media +
                    (a.matches ? 1 : 0)
                  )
                }
                return [
                  a("prefers-reduced-motion"),
                  a("prefers-reduced-transparency"),
                  a("prefers-color-scheme: dark"),
                  a("prefers-color-scheme: light"),
                  a("pointer: none"),
                  a("pointer: coarse"),
                  a("pointer: fine"),
                  a("any-pointer: none"),
                  a("any-pointer: coarse"),
                  a("any-pointer: fine"),
                  a("scan: interlace"),
                  a("scan: progressive"),
                  a("color-gamut: srgb"),
                  a("color-gamut: p3"),
                  a("color-gamut: rec2020"),
                  a("update: fast"),
                  a("update: slow"),
                  a("update: none"),
                  a("grid: 0"),
                  a("grid: 1"),
                  a("hover: hover"),
                  a("inverted-colors: inverted"),
                  a("inverted-colors: none"),
                ].join("x")
              }),
              a
            )
          })()
          b.G = a
        },
        function(a, b) {
          b.a = !0
          a = (function() {
            function a() {}
            return (
              (a.prototype.b = function() {
                var a = g.navigator
                return [
                  a.appName,
                  a.vendor,
                  a.i,
                  a.s,
                  a.maxTouchPoints,
                  a.appVersion,
                  a.productSub,
                  a.appCodeName,
                  a.vendorSub,
                  a.getGamepads && a.getGamepads().length,
                ].join("x")
              }),
              a
            )
          })()
          b.H = a
        },
        function(a, b) {
          b.a = !0
          a = (function() {
            function a() {}
            return (
              (a.prototype.b = function() {
                var a = g.performance
                return a && a.memory && a.memory.jsHeapSizeLimit
              }),
              a
            )
          })()
          b.F = a
        },
        function(a, b) {
          b.a = !0
          a = (function() {
            function a() {
              this.types = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(
                " "
              )
              this.v = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(
                " "
              )
            }
            return (
              (a.prototype.w = function(a) {
                return a || "0"
              }),
              (a.prototype.b = function() {
                for (
                  var a = h.createElement("video"), b = [], c = 1;
                  c < this.types.length;
                  c++
                ) {
                  b.push(this.w(a.canPlayType(this.types[c] + ";")))
                  for (var e = 1; e < this.v.length; e++)
                    b.push(
                      a.canPlayType(
                        this.w(
                          this.types[c] + '; codecs\x3d"' + this.v[e] + '"'
                        )
                      )
                    )
                }
                return b.join("")
              }),
              a
            )
          })()
          b.L = a
        },
        function(a, b) {
          function c(a, b) {
            a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]]
            b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]]
            var c = [0, 0, 0, 0]
            return (
              (c[3] += a[3] * b[3]),
              (c[2] += c[3] >>> 16),
              (c[3] &= 65535),
              (c[2] += a[2] * b[3]),
              (c[1] += c[2] >>> 16),
              (c[2] &= 65535),
              (c[2] += a[3] * b[2]),
              (c[1] += c[2] >>> 16),
              (c[2] &= 65535),
              (c[1] += a[1] * b[3]),
              (c[0] += c[1] >>> 16),
              (c[1] &= 65535),
              (c[1] += a[2] * b[2]),
              (c[0] += c[1] >>> 16),
              (c[1] &= 65535),
              (c[1] += a[3] * b[1]),
              (c[0] += c[1] >>> 16),
              (c[1] &= 65535),
              (c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0]),
              (c[0] &= 65535),
              [(c[0] << 16) | c[1], (c[2] << 16) | c[3]]
            )
          }
          function d(a, b) {
            a = [a[0] >>> 16, 65535 & a[0], a[1] >>> 16, 65535 & a[1]]
            b = [b[0] >>> 16, 65535 & b[0], b[1] >>> 16, 65535 & b[1]]
            var c = [0, 0, 0, 0]
            return (
              (c[3] += a[3] + b[3]),
              (c[2] += c[3] >>> 16),
              (c[3] &= 65535),
              (c[2] += a[2] + b[2]),
              (c[1] += c[2] >>> 16),
              (c[2] &= 65535),
              (c[1] += a[1] + b[1]),
              (c[0] += c[1] >>> 16),
              (c[1] &= 65535),
              (c[0] += a[0] + b[0]),
              (c[0] &= 65535),
              [(c[0] << 16) | c[1], (c[2] << 16) | c[3]]
            )
          }
          function f(a, b) {
            return 32 === (b %= 64)
              ? [a[1], a[0]]
              : 32 > b
              ? [
                  (a[0] << b) | (a[1] >>> (32 - b)),
                  (a[1] << b) | (a[0] >>> (32 - b)),
                ]
              : ((b -= 32),
                [
                  (a[1] << b) | (a[0] >>> (32 - b)),
                  (a[0] << b) | (a[1] >>> (32 - b)),
                ])
          }
          function e(a, b) {
            return 0 === (b %= 64)
              ? a
              : 32 > b
              ? [(a[0] << b) | (a[1] >>> (32 - b)), a[1] << b]
              : [a[1] << (b - 32), 0]
          }
          function g(a, b) {
            return [a[0] ^ b[0], a[1] ^ b[1]]
          }
          function k(a) {
            return (
              (a = g(a, [0, a[0] >>> 1])),
              (a = g((a = c(a, [4283543511, 3981806797])), [0, a[0] >>> 1])),
              g((a = c(a, [3301882366, 444984403])), [0, a[0] >>> 1])
            )
          }
          b.a = !0
          b.hash = function(a, b) {
            b = b || 0
            var r = (a = a || "").length % 16,
              p = a.length - r,
              h = [0, b]
            b = [0, b]
            for (
              var t,
                l,
                C = [2277735313, 289559509],
                n = [1291169091, 658871167],
                m = 0;
              m < p;
              m += 16
            )
              (t = [
                (255 & a.charCodeAt(m + 4)) |
                  ((255 & a.charCodeAt(m + 5)) << 8) |
                  ((255 & a.charCodeAt(m + 6)) << 16) |
                  ((255 & a.charCodeAt(m + 7)) << 24),
                (255 & a.charCodeAt(m)) |
                  ((255 & a.charCodeAt(m + 1)) << 8) |
                  ((255 & a.charCodeAt(m + 2)) << 16) |
                  ((255 & a.charCodeAt(m + 3)) << 24),
              ]),
                (l = [
                  (255 & a.charCodeAt(m + 12)) |
                    ((255 & a.charCodeAt(m + 13)) << 8) |
                    ((255 & a.charCodeAt(m + 14)) << 16) |
                    ((255 & a.charCodeAt(m + 15)) << 24),
                  (255 & a.charCodeAt(m + 8)) |
                    ((255 & a.charCodeAt(m + 9)) << 8) |
                    ((255 & a.charCodeAt(m + 10)) << 16) |
                    ((255 & a.charCodeAt(m + 11)) << 24),
                ]),
                (t = f((t = c(t, C)), 31)),
                (h = d((h = f((h = g(h, c(t, n))), 27)), b)),
                (h = d(c(h, [0, 5]), [0, 1390208809])),
                (l = f((l = c(l, n)), 33)),
                (b = d((b = f((b = g(b, c(l, C))), 31)), h)),
                (b = d(c(b, [0, 5]), [0, 944331445]))
            switch (((t = [0, 0]), (l = [0, 0]), r)) {
              case 15:
                l = g(l, e([0, a.charCodeAt(m + 14)], 48))
              case 14:
                l = g(l, e([0, a.charCodeAt(m + 13)], 40))
              case 13:
                l = g(l, e([0, a.charCodeAt(m + 12)], 32))
              case 12:
                l = g(l, e([0, a.charCodeAt(m + 11)], 24))
              case 11:
                l = g(l, e([0, a.charCodeAt(m + 10)], 16))
              case 10:
                l = g(l, e([0, a.charCodeAt(m + 9)], 8))
              case 9:
                ;(l = c((l = g(l, [0, a.charCodeAt(m + 8)])), n)),
                  (b = g(b, c(f(l, 33), C)))
              case 8:
                t = g(t, e([0, a.charCodeAt(m + 7)], 56))
              case 7:
                t = g(t, e([0, a.charCodeAt(m + 6)], 48))
              case 6:
                t = g(t, e([0, a.charCodeAt(m + 5)], 40))
              case 5:
                t = g(t, e([0, a.charCodeAt(m + 4)], 32))
              case 4:
                t = g(t, e([0, a.charCodeAt(m + 3)], 24))
              case 3:
                t = g(t, e([0, a.charCodeAt(m + 2)], 16))
              case 2:
                t = g(t, e([0, a.charCodeAt(m + 1)], 8))
              case 1:
                ;(t = c((t = g(t, [0, a.charCodeAt(m)])), C)),
                  (h = g(h, c(f(t, 31), n)))
            }
            return (
              (h = d((h = g(h, [0, a.length])), (b = g(b, [0, a.length])))),
              (b = d(b, h)),
              (h = d((h = k(h)), (b = k(b)))),
              (b = d(b, h)),
              ("00000000" + (h[0] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (h[1] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (b[0] >>> 0).toString(16)).slice(-8) +
                ("00000000" + (b[1] >>> 0).toString(16)).slice(-8)
            )
          }
        },
      ])
      xa = xa["default"]
    }
  } catch (a) {
    Qa = { error: a, scope: "fip" }
  }
  var Ra = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(
      " "
    ),
    e = {
      mixin: function(a) {
        var b, c
        for (b = 1; b < arguments.length; b++)
          if (arguments[b]) {
            for (c in arguments[b])
              arguments[b].hasOwnProperty(c) && (a[c] = arguments[b][c])
            arguments[b].hasOwnProperty("toString") &&
              (a.toString = arguments[b].toString)
          }
        return a
      },
    },
    E = function(a) {
      a = a || {}
      e.mixin(this, a)
      this._initComponent()
    }
  E.prototype._initComponent = function() {}
  E.inherit = function(a) {
    a = a || {}
    var b = "function" == typeof this ? this : Object
    a.hasOwnProperty("constructor") ||
      (a.constructor = function() {
        b.apply(this, arguments)
      })
    var c = function() {}
    c.prototype = b.prototype
    a.constructor.prototype = new c()
    e.mixin(a.constructor.prototype, a)
    a.constructor.prototype.constructor = a.constructor
    a.constructor.superclass = b.prototype
    a.constructor.inherit = E.inherit
    return a.constructor
  }
  e.forEachKey = function(a, b, c) {
    for (var d in a) a.hasOwnProperty(d) && b.call(c, d, a[d], a)
  }
  e.isEqual = function(a, b) {
    var c = !0
    e.forEachKey(a, function(a, f) {
      ;(b.hasOwnProperty(a) && b[a] === f) || (c = !1)
    })
    if (!c) return c
    e.forEachKey(b, function(b, f) {
      ;(a.hasOwnProperty(b) && a[b] === f) || (c = !1)
    })
    return c
  }
  e.getNativeFunction = function(a, b) {
    b = b || g
    var c =
      (b.constructor &&
        b.constructor.prototype &&
        b.constructor.prototype[a]) ||
      b[a]
    try {
      if (c && c.apply)
        return function() {
          return c.apply(b, arguments)
        }
    } catch (d) {
      return b[a]
    }
    return c
  }
  e.setTimeout = function(a, b, c) {
    return e.getNativeFunction("setTimeout")(u(a, c || "setTimeout"), b)
  }
  var l = E.inherit({
    _initComponent: function() {
      l.superclass._initComponent.apply(this, arguments)
      this._listeners = []
    },
    on: function(a, b, c, d, f) {
      f = l._getOpts(f)
      b = b.split(",")
      var e = b.length,
        p = this._listeners,
        k
      for (k = 0; k < e; k++) {
        var h = b[k]
        var t = u(function(a) {
          c.call(d || this, a || g.event)
        }, "on" + (h || "") + (f.name || ""))
        p[p.length] = [a, h, c, d, f, t]
        a.addEventListener
          ? a.addEventListener(h, t, l._prepOpts(f))
          : a.attachEvent && a.attachEvent("on" + h, t)
      }
    },
    un: function(a, b, c, d, f) {
      f = l._getOpts(f)
      var g = this._listeners,
        p = g.length,
        k
      for (k = 0; k < p; k++) {
        var h = g[k]
        if (
          h[0] == a &&
          h[1] == b &&
          h[2] == c &&
          h[3] == d &&
          e.isEqual(h[4], f)
        ) {
          g.splice(k, 1)
          this._removeListener(a, b, h[5], f)
          break
        }
      }
    },
    unAll: function() {
      var a = this._listeners,
        b = a.length,
        c
      for (c = 0; c < b; c++) {
        var d = a[c]
        this._removeListener(d[0], d[1], d[5], d[4])
      }
      a.length = 0
    },
    _removeListener: function(a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, l._prepOpts(d))
        : a.detachEvent && a.detachEvent("on" + b, c)
    },
  })
  l.supportsPassive = function() {
    if (l._supportsPassive !== z) return l._supportsPassive
    l._supportsPassive = !1
    try {
      var a = Object.defineProperty({}, "passive", {
        get: function() {
          return (l._supportsPassive = !0)
        },
      })
      g.addEventListener("test", null, a)
    } catch (b) {}
    return l._supportsPassive
  }
  l._getOpts = function(a) {
    return e.mixin({ capture: !0, passive: !0 }, a || {})
  }
  l._prepOpts = function(a) {
    return l.supportsPassive() ? a : !!a.capture
  }
  l.on = function() {
    l._instance || (l._instance = new l())
    l._instance.on.apply(l._instance, arguments)
  }
  l.un = function() {
    l._instance && l._instance.un.apply(l._instance, arguments)
  }
  var q = {
    UNLOAD_MS: 0,
    isPerfomance:
      g.performance &&
      g.performance.timing &&
      g.performance.timing.navigationStart &&
      g.performance.now,
    getMs: function() {
      return 0 < this.UNLOAD_MS
        ? this.UNLOAD_MS
        : this.isPerfomance
        ? Math.round(g.performance.timing.navigationStart + g.performance.now())
        : q.oldMs()
    },
    getFormStart: function() {
      return this.isPerfomance
        ? Math.round(g.performance.now())
        : this.getMs() - this.initTime
    },
  }
  q.oldMs = Date.now
    ? Date.now
    : function() {
        return new Date().getTime()
      }
  q.initTime = q.getMs()
  l.on(g, "beforeunload,unload", function() {
    0 === q.UNLOAD_MS && (q.UNLOAD_MS = q.getMs())
  })
  e.pad = function(a) {
    return (10 > a ? "0" : "") + a
  }
  q.getTimestamp = function() {
    var a = new Date()
    a = [
      a.getFullYear(),
      a.getMonth() + 1,
      a.getDate(),
      a.getHours(),
      a.getMinutes(),
      a.getSeconds(),
    ]
    var b = "",
      c
    for (c = 0; c < a.length; c++) b += e.pad(a[c])
    return b
  }
  q.getTimezone = function() {
    return -new Date().getTimezoneOffset()
  }
  q.getMinutes = function() {
    return Math.floor(this.getMs() / 1e3 / 60)
  }
  q.getSeconds = function() {
    return Math.round(this.getMs() / 1e3)
  }
  q.isPerfomance ||
    ((q.deltaTime = 0),
    (q.lastNowTime = 0),
    (q.correctTime = 0),
    (q.timeCorrector = function(a) {
      q.correctTime = q.getMs()
      a && q.correctTime < q.lastTime && (q.deltaTime += a - q.correctTime + 20)
      e.setTimeout(
        function() {
          q.timeCorrector(q.correctTime)
        },
        20,
        "timeCorrector"
      )
    }))
  q.initCorrector = function() {
    q.isPerfomance || q.timeCorrector(0)
  }
  q.nowTime = function() {
    if (this.isPerfomance) return this.getMs()
    var a = this.getMs() + q.deltaTime
    a < q.lastNowTime && (a += q.lastNowTime + 10)
    return (q.lastNowTime = a)
  }
  q.nowEventTime = function() {
    return Math.round((q.nowTime() - q.initTime) / 50)
  }
  e.toString = function(a) {
    return Object.prototype.toString.call(a)
  }
  e.isFunction = function(a) {
    return "function" === typeof a
  }
  e.isArray = function(a) {
    return e.isFunction(Array.isArray)
      ? Array.isArray(a)
      : "[object Array]" === e.toString(a)
  }
  e.mergeArrays = function(a) {
    var b,
      c,
      d = arguments.length
    for (b = 1; b < d; b++) {
      var f = arguments[b]
      if (e.isArray(f) || (f && "[object Arguments]" === f.toString()))
        for (c = 0; c < f.length; c++) a[a.length] = f[c]
    }
    return a
  }
  e.defer = function(a, b, c, d, f) {
    return e.setTimeout(
      function() {
        a.apply(c, d || [])
      },
      b,
      f
    )
  }
  e.throttle = function(a, b, c, d) {
    var f, g, p
    return function() {
      g = arguments
      p = this
      f ||
        (function() {
          f = null
          g &&
            (a.apply(c || p, g),
            (g = null),
            (f = e.setTimeout(arguments.callee, b, d)))
        })()
    }
  }
  var Fa = E.inherit({
      storage: null,
      storageKey: "dataBuffer",
      store: {
        _keys: [],
        _values: [],
        get: function(a) {
          a = e.arrayIndexOf(this._keys, a)
          return -1 == a ? null : this._values[a]
        },
        set: function(a, b) {
          this._keys.push(a)
          this._values.push(b)
        },
        pop: function(a) {
          a = e.arrayIndexOf(this._keys, a)
          if (-1 == a) return null
          var b = this._values[a]
          this._keys.splice(a, 1)
          this._values.splice(a, 1)
          return b
        },
      },
      maxBufferSize: 255,
      flushTimeout: 1e4,
      startBufferTime: 0,
      active: !0,
      meta: null,
      onFlush: function() {},
      onFlushCtx: null,
      bufferExpireTime: 864e5,
      _initComponent: function() {
        var a
        Fa.superclass._initComponent.apply(this, arguments)
        this.wrappers = []
        this._data = []
        this._packetNumber = 0
        this._flushTID = null
        this._saveToStorageThrottled = e.throttle(
          this._saveToStorage,
          300,
          this,
          "DataBuffer._saveToStorage"
        )
        this.storage &&
          (a = this.storage.get(this.storageKey)) &&
          a.data &&
          a.meta &&
          a.time &&
          a.time + this.bufferExpireTime > +q.getMs() &&
          this.onFlush.call(
            this.onFlushCtx || this,
            this.dataFromStorage(a.data),
            a.meta,
            a.pnum
          )
        this.clear()
      },
      setWVType: function(a) {
        this.wvType = a
        this._sender.version = a
      },
      getFlushSize: function() {
        return this._data.length
      },
      mergeData: function(a, b) {
        e.mergeArrays(a, b)
      },
      updateStamp: function(a, b) {
        a.stamp !== z &&
          ((b.stamp = a.stamp), "eof" !== a.type && delete a.stamp)
      },
      append: function(a, b) {
        this.mergeData(this._data, a)
        this._saveToStorageThrottled()
        this.active &&
          ((b ||
            this.getFlushSize() >= this.maxBufferSize ||
            this.getFlushSize() === this.maxChunkSize) &&
            this._flush(b),
          this._flushTID ||
            (this._flushTID = e.defer(
              this._flush,
              this.flushTimeout,
              this,
              [b],
              "DataBuffer._flush"
            )))
      },
      activate: function() {
        this.active || ((this.active = !0), this.append([]))
      },
      clear: function() {
        this._data.length = 0
        this._flushTID = null
        this.storage && this.storage.remove(this.storageKey)
      },
      _flush: function(a) {
        if (!this.getFlushSize()) return this.clear(), !1
        this.onFlush.call(
          this.onFlushCtx || this,
          this._data,
          this.meta,
          this._packetNumber,
          a
        )
        this._packetNumber++
        this.clear()
      },
      dataFromStorage: function(a) {
        return a
      },
      dataToStorage: function(a) {
        return a
      },
      _saveToStorage: function() {
        this.storage &&
          this._data.length &&
          this.storage.set(this.storageKey, {
            data: this.dataToStorage(this._data),
            meta: this.meta,
            pnum: this._packetNumber,
            time: q.getMs(),
          })
      },
    }),
    w = {
      storage: {},
      init: function() {
        var a = this
        u(
          function() {
            g.Ya = g.Ya || {}
            g.Ya._metrika = g.Ya._metrika || {}
            a.storage = g.Ya._metrika
          },
          "",
          !0
        )()
        return this
      },
      setSafe: function(a, b) {
        var c = this
        u(
          function() {
            c.storage[a] === z && (c.storage[a] = b)
          },
          "",
          !0
        )()
        return this
      },
      set: function(a, b) {
        u(
          function() {
            g.Ya._metrika[a] = b
          },
          "",
          !0
        )()
        return this
      },
      get: function(a, b) {
        return u(
          function() {
            var c = g.Ya._metrika[a]
            return c === z ? b : c
          },
          "",
          !0
        )()
      },
    }
  e.async = function(a, b, c) {
    if (g.postMessage) {
      var d = "__ym__promise" + Math.random() + "_" + q.getMs()
      var f = function(c) {
        try {
          var e = c.data
        } catch (k) {
          return
        }
        e === d &&
          (c.stopPropagation && c.stopPropagation(),
          a.call(b),
          l.un(g, "message", f, null, { passive: !1 }))
      }
      l.on(g, "message", f, null, { passive: !1, name: ".async." + (c || "") })
      g.postMessage(d, "*")
    } else
      e.setTimeout(function() {
        a.call(b)
      }, 0)
  }
  var ya = E.inherit({
      transports: [],
      globalConfig: w,
      postParams: [],
      isDisabled: function() {
        return this.globalConfig.get("oo")
      },
      send: function(a, b, c, d) {
        var f = [a],
          g = this,
          p = c || function() {}
        g.isDisabled()
          ? p.call(d)
          : function t(a) {
              if (a < this.transports.length)
                try {
                  var c = new this.transports[a]({
                    postParams: this.postParams,
                    queryStringParams: this.queryStringParams,
                  })
                  b["browser-info"] = c.logInfo(b["browser-info"])
                  ;(function Aa(r) {
                    r >= f.length
                      ? c.blockNext() || t.call(this, a + 1)
                      : c.request(
                          f[r],
                          b,
                          function(a, b, c) {
                            a
                              ? p.call(d, b, c)
                              : e.async(
                                  function() {
                                    Aa.call(g, r + 1)
                                  },
                                  this,
                                  "senderCall"
                                )
                          },
                          this
                        )
                  }.call(this, 0))
                } catch (Ab) {
                  za(Ab, "send by " + (c && c.id)), t.call(this, a + 1)
                }
            }.call(this, 0)
      },
    }),
    fa = {}
  e.keys = function(a) {
    var b,
      c = []
    for (b in a) a.hasOwnProperty(b) && c.push(b)
    return c
  }
  e.map = function(a, b) {
    var c,
      d = []
    for (c = 0; c < b.length; c++) d.push(a(b[c], c))
    return d
  }
  fa.stringify = function(a, b) {
    var c = [],
      d = b || {},
      f = {},
      g = e.keys(a).length,
      p,
      k
    if (d.lastOrdering !== z)
      for (k = 1; k <= b.lastOrdering.length; k++)
        f[b.lastOrdering[k - 1]] = g + k
    if (d.firstOrdering !== z)
      for (k = 0; k < b.firstOrdering.length; k++) f[b.firstOrdering[k]] = k
    for (p in a)
      if (a.hasOwnProperty(p))
        if (((d = a[p]), e.isArray(d)))
          for (k = 0; k < d.length; k++)
            c.push({
              key: p,
              value:
                encodeURIComponent(p) +
                "\x3d" +
                encodeURIComponent(String(d[k])),
            })
        else
          c.push({
            key: p,
            value:
              encodeURIComponent(p) + "\x3d" + encodeURIComponent(String(d)),
          })
    c.sort(function(a, b) {
      var c = f[a.key],
        d = f[b.key]
      "undefined" === typeof c && (c = g)
      "undefined" === typeof d && (d = g)
      return c - d
    })
    return e
      .map(function(a) {
        return a.value
      }, c)
      .join("\x26")
  }
  e.inArray = function(a, b) {
    var c
    for (c = 0; c < a.length; c++) if (a[c] == b) return !0
    return !1
  }
  var Q = E.inherit({
    postParams: [],
    index: 0,
    blockNext: function() {
      return !1
    },
    logInfo: function(a) {
      var b
      if (a)
        return (
          (a = (b = a.match(/^ti:\d:/)) ? a.replace(b[0], "") : a),
          "ti:" + this.index + ":" + a
        )
    },
    _buildUrl: function(a, b) {
      var c = fa.stringify(b, this.queryStringParams)
      return a + (-1 < a.indexOf("?") ? "\x26" : c ? "?" : "") + c
    },
    _splitParams: function(a) {
      var b = {},
        c = {}
      e.forEachKey(
        a,
        function(a, f) {
          e.inArray(this.postParams, a) ? (c[a] = f) : (b[a] = f)
        },
        this
      )
      return { get: b, post: c }
    },
    _parseResp: function(a) {
      return a
    },
  })
  W = Q.inherit({
    id: "XHR",
    index: 7,
    method: "POST",
    withCredentials: !0,
    request: function(a, b, c, d) {
      var f = this,
        e
      if (
        /[^a-z0-9.:-]/.test(J.host) &&
        g.opera &&
        "function" === typeof g.opera.version
      ) {
        var p = g.opera.version()
        if ("string" === typeof p && "12" === p.split(".")[0])
          return c.call(d, !1)
      }
      if (g.XMLHttpRequest) {
        var k = new XMLHttpRequest()
        if ("withCredentials" in k) {
          b = this._splitParams(b)
          a = this._buildUrl(a, b.get)
          try {
            k.open(this.method, a, !0)
          } catch (C) {
            return c.call(d, !1)
          }
          k.withCredentials = this.withCredentials
          this._setHeaders(k)
          k.send(this._preparePostParams(b))
          k.onreadystatechange = function() {
            if (4 === k.readyState) {
              try {
                e = f._parseResp(k.responseText)
              } catch (C) {
                return c.call(d, !1)
              }
              c.apply(d, [200 === k.status].concat(e))
            }
          }
          this._timeOutCheck(k, c, d)
          return
        }
      }
      c.call(d, !1)
    },
    _timeOutCheck: function(a, b, c) {
      this.timeout &&
        ((a.timeout = this.timeout),
        e.setTimeout(function() {
          a.abort ? a.abort() : b.call(c, !1)
        }, this.timeout + 100))
    },
    setMethod: function(a) {
      this.method = a
    },
    _preparePostParams: function(a) {
      return fa.stringify(a.post)
    },
    _setHeaders: function(a) {
      a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    },
  })
  var m = {}
  e.memorize = function(a, b) {
    var c = "memorize"
    return function() {
      "memorize" === c && (c = a.apply(b || this, arguments))
      return c
    }
  }
  m.isAndroidWebView = u(function() {
    var a = navigator.userAgent || ""
    return (
      a.match(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]/) ||
      a.match(
        /Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*/
      ) ||
      a.match(/; wv\).*Chrome\/[0-9][0-9.]*\sMobile/)
    )
  }, "isAndroidWebView")
  var Jb = Q.inherit({
    id: "beacon",
    index: 1,
    request: function(a, b, c, d) {
      "function" === typeof navigator.sendBeacon &&
      !m.isAndroidWebView() &&
      navigator.onLine
        ? ((b = this._splitParams(b)),
          (b.get["force-urlencoded"] = 1),
          c.call(
            d,
            navigator.sendBeacon(this._buildUrl(a, b.get), fa.stringify(b.post))
          ))
        : c.call(d, !1)
    },
  })
  e.random = function(a, b) {
    2 > arguments.length && ((b = a), (a = 0))
    1 > arguments.length && (b = 1073741824)
    return Math.floor(Math.random() * (b - a)) + a
  }
  var qa = Q.inherit({
      id: "form",
      index: 2,
      enctype: "application/x-www-form-urlencoded",
      htmlfileOnly: !1,
      _initComponent: function() {
        qa.superclass._initComponent.apply(this, arguments)
        "_htmlfile" in qa.prototype ||
          (qa.prototype._htmlfile = this._createHtmlfile())
        this._doc = this._htmlfile || (this.htmlfileOnly ? null : h)
      },
      request: function(a, b, c, d) {
        var f = this._doc
        if (!f) return c.call(d, !1)
        b = this._splitParams(b)
        var g = "ifr" + e.random()
        var p = f.createElement("div")
        p.style.position = "absolute"
        p.style.left = "-99999px"
        p.style.top = "-99999px"
        var k = [
          '\x3ciframe name\x3d"',
          g,
          '"\x3e\x3c/iframe\x3e',
          '\x3cform action\x3d"',
          this._buildUrl(a, b.get),
          '" method\x3d"post" target\x3d"',
          g,
          '" enctype\x3d"',
          this.enctype,
          '"\x3e',
        ]
        e.forEachKey(b.post, function(a) {
          e.mergeArrays(k, [
            '\x3cinput type\x3d"hidden" autocomplete\x3d"off" autocorrect\x3d"off"',
            ' autocapitalize\x3d"off" spellcheck\x3d"false" name\x3d"',
            a,
            '"/\x3e',
          ])
        })
        e.mergeArrays(k, ["\x3c/form\x3e"])
        p.innerHTML = k.join("")
        f.body.appendChild(p)
        var h = p.getElementsByTagName("form")[0]
        e.forEachKey(b.post, function(a, b) {
          h[a].value = b
        })
        h.submit()
        e.setTimeout(
          function() {
            f.body.removeChild(p)
          },
          1e4,
          "TransportForm.request.2"
        )
        return c.call(d, !0, "tf.request")
      },
      _createHtmlfile: function() {
        try {
          if (g.ActiveXObject) {
            var a = new ActiveXObject("htmlfile")
            a.open()
            a.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e")
            a.close()
            return a
          }
        } catch (b) {}
        return null
      },
    }),
    Kb = qa.inherit({ id: "htmlfile", index: 3, htmlfileOnly: !0 }),
    ra = Q.inherit({
      id: "img",
      index: 4,
      request: function(a, b, c, d) {
        a = this._buildUrl(a, b)
        var f = !1
        b = h.createElement("img")
        c = c || function() {}
        b.onload = u(function() {
          f || (c.call(d, !0), (f = !0))
        }, "TransportImage.request")
        b.onerror = u(function() {
          f || (c.call(d, !1), (f = !0))
        }, "TransportImage.request")
        b.src = a
        this.timeout &&
          e.setTimeout(
            function() {
              f || (c.call(d, !1), (f = !0))
            },
            this.timeout,
            "ti.request"
          )
      },
    }),
    X = {
      stringify: function(a) {
        try {
          var b = JSON.stringify(a)
        } catch (c) {}
        return e.inArray(["{}", z], b) ? "null" : b
      },
    }
  e.toJSON = function(a) {
    var b
    if (a === z) return ""
    if (null === a) return "null"
    switch (a.constructor) {
      case Boolean:
        return a.toString()
      case Number:
        return isFinite(a) ? a.toString() : "null"
      case String:
        return (
          '"' +
          a
            .replace(/\\/g, "\\\\")
            .replace(/"/g, '\\"')
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r") +
          '"'
        )
      case Array:
        var c = []
        var d = 0
        for (b = a.length; d < b; d++) c[c.length] = e.toJSON(a[d])
        return "[" + c.join(",") + "]"
      case Object:
        c = []
        for (d in a)
          a.hasOwnProperty(d) &&
            a[d] !== z &&
            (c[c.length] = e.toJSON(d) + ":" + e.toJSON(a[d]))
        return "{" + c.join(",") + "}"
      default:
        return X.stringify(a)
    }
  }
  var O = E.inherit({
    counterId: "",
    _initComponent: function() {
      O.superclass._initComponent.apply(this, arguments)
      this._ls = null
      try {
        this._ls = g.localStorage
      } catch (a) {}
    },
    set: function(a, b) {
      if (this.isEnabled())
        try {
          !b || (b && e.isArray(b) && !b.length)
            ? this.remove(a)
            : this._ls.setItem(this._getLsKey(a), e.toJSON(b))
        } catch (c) {}
    },
    get: function(a) {
      if (this.isEnabled())
        try {
          return JSON.parse(this._ls.getItem(this._getLsKey(a)))
        } catch (b) {}
      return null
    },
    remove: function(a) {
      if (this.isEnabled())
        try {
          this._ls.removeItem(this._getLsKey(a))
        } catch (b) {}
    },
    isEnabled: function() {
      return (
        this._ls &&
        g.JSON &&
        "object" == typeof this._ls &&
        "object" == typeof g.JSON
      )
    },
    getStorageId: function() {
      var a = this.get("lsid")
      a || ((a = Math.round(Math.random() * q.getMs())), this.set("lsid", a))
      return a
    },
    clearStorageId: function() {
      this.remove("lsid")
    },
    _getLsKey: function(a) {
      return "_ym" + this.counterId + "_" + a
    },
  })
  e.fnv32a = function(a) {
    var b = 2166136261,
      c
    var d = 0
    for (c = a.length; d < c; ++d)
      (b ^= a.charCodeAt(d)),
        (b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24))
    return b >>> 0
  }
  e.clearTimeout = function(a) {
    return e.getNativeFunction("clearTimeout")(a)
  }
  e.getTld = function() {
    if (!this._tld) {
      var a = J.hostname.split(".")
      this._tld = a[a.length - 1]
    }
    return this._tld
  }
  var K = {
      abc: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      tail: "+/\x3d",
      tailSafe: "*-_",
      encode: function(a, b) {
        var c = (K.abc + (b ? K.tailSafe : K.tail)).split(""),
          d = a.length,
          f = [],
          g = d - (d % 3),
          p
        for (p = 0; p < g; p += 3) {
          var k = (a[p] << 16) + (a[p + 1] << 8) + a[p + 2]
          e.mergeArrays(f, [
            c[(k >> 18) & 63],
            c[(k >> 12) & 63],
            c[(k >> 6) & 63],
            c[k & 63],
          ])
        }
        switch (d - g) {
          case 1:
            k = a[g] << 4
            e.mergeArrays(f, [c[(k >> 6) & 63], c[k & 63], c[64], c[64]])
            break
          case 2:
            ;(k = (a[g] << 10) + (a[g + 1] << 2)),
              e.mergeArrays(f, [
                c[(k >> 12) & 63],
                c[(k >> 6) & 63],
                c[k & 63],
                c[64],
              ])
        }
        return f.join("")
      },
      decode: function(a, b) {
        for (
          var c = K.abc + (b ? K.tailSafe : K.tail),
            d = 0,
            f = "",
            e,
            g,
            k,
            h,
            t;
          a.length % 4;

        )
          a += "\x3d"
        do {
          e = c.indexOf(a.charAt(d++))
          g = c.indexOf(a.charAt(d++))
          h = c.indexOf(a.charAt(d++))
          t = c.indexOf(a.charAt(d++))
          if (0 > e || 0 > g || 0 > h || 0 > t) return null
          k = (e << 18) | (g << 12) | (h << 6) | t
          e = (k >> 16) & 255
          g = (k >> 8) & 255
          k &= 255
          f =
            64 == h
              ? f + String.fromCharCode(e)
              : 64 == t
              ? f + String.fromCharCode(e, g)
              : f + String.fromCharCode(e, g, k)
        } while (d < a.length)
        return f
      },
    },
    Ga = {
      encode: function(a) {
        var b = [],
          c
        var d = 0
        for (c = a.length; d < c; d++) {
          var f = a.charCodeAt(d)
          128 > f
            ? b.push(f)
            : (127 < f && 2048 > f
                ? b.push((f >> 6) | 192)
                : (b.push((f >> 12) | 224), b.push(((f >> 6) & 63) | 128)),
              b.push((f & 63) | 128))
        }
        return b
      },
    },
    F = E.inherit({
      counterId: "",
      onlyCurrentDomain: !1,
      skipPrefix: !1,
      _initComponent: function() {
        var a
        F.superclass._initComponent.apply(this, arguments)
        this._domain = null
        if (!this.onlyCurrentDomain) {
          var b = g.location.host.split(".")
          for (a = 2; ; )
            if (a <= b.length) {
              if (
                ((this._domain = "." + b.slice(-a).join(".")),
                a++,
                this.isEnabled())
              )
                break
            } else {
              this._domain = null
              break
            }
        }
      },
      create: function(a, b, c) {
        a = [this._prepareName(a) + "\x3d" + encodeURIComponent(b)]
        c &&
          ((b = new Date()),
          b.setTime(b.getTime() + 6e4 * c),
          a.push("expires\x3d" + b.toGMTString()))
        this._domain && a.push("domain\x3d" + this._domain)
        a.push("path\x3d/")
        try {
          h.cookie = a.join(";")
        } catch (d) {}
      },
      read: function(a) {
        try {
          var b = h.cookie
        } catch (c) {}
        return b &&
          b.match(
            new RegExp("(?:^|;\\s*)" + this._prepareName(a) + "\x3d([^;]*)")
          )
          ? decodeURIComponent(RegExp.$1)
          : null
      },
      erase: function(a) {
        this.create(a, "", -1)
      },
      isEnabled: function() {
        this.create("metrika_enabled", "1", 60)
        var a = !!this.read("metrika_enabled")
        this.erase("metrika_enabled")
        return a
      },
      _prepareName: function(a) {
        return (
          (this.skipPrefix ? "" : "_ym_") +
          a +
          (this.counterId ? "_" + this.counterId : "")
        )
      },
    })
  F.get = function(a) {
    return new F({ onlyCurrentDomain: !0 }).read(a)
  }
  F.set = function(a, b, c) {
    return new F({ onlyCurrentDomain: !0 }).create(a, b, c)
  }
  F.isEnabled = function() {
    return new F({ onlyCurrentDomain: !0 }).isEnabled()
  }
  e.isNativeFunction = function(a, b) {
    return a && "function" === typeof a
      ? new RegExp(
          "function\\s*" +
            b +
            "\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}",
          "i"
        ).test(a.toString())
      : !1
  }
  var n = {
    removeNode: function(a) {
      var b = a && a.parentNode
      b && b.removeChild(a)
    },
  }
  m.isSafariWebView = u(function() {
    var a = navigator.userAgent || ""
    return (
      navigator.vendor &&
      -1 < navigator.vendor.indexOf("Apple") &&
      ((!a.match(/Safari/) && a.match(/Mobile/)) ||
        a.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) ||
        -1 !== a.indexOf("FB_IAB") ||
        -1 !== a.indexOf("FBAV") ||
        -1 !== a.indexOf("OKApp") ||
        -1 !== a.indexOf("GSA/"))
    )
  }, "isSafariWebView")
  m.isSafari = function() {
    try {
      return (
        navigator.vendor &&
        -1 < navigator.vendor.indexOf("Apple") &&
        navigator.userAgent &&
        !navigator.userAgent.match("CriOS")
      )
    } catch (a) {}
    return !1
  }
  m.getMacOSVersion = u(
    function() {
      var a = navigator.userAgent.match(/Mac OS X ([0-9]+)_([0-9]+)_([0-9]+)/)
      return a ? [+a[1], +a[2], +a[3]] : [0, 0, 0]
    },
    "",
    !0
  )
  m.getPlatform = u(
    function() {
      return "" + navigator.platform
    },
    "",
    !0
  )
  m.isIOS = u(
    function() {
      var a = m.getPlatform() || ""
      return "iPhone" === a || "iPad" === a
    },
    "",
    !0
  )
  m.getITPYaBroVersion = function() {
    var a = /\sYptp\/\d\.(\d+)\s/,
      b = null
    g.navigator &&
      navigator.userAgent &&
      (a = a.exec(navigator.userAgent)) &&
      1 < a.length &&
      (b = parseInt(a[1], 10))
    return b
  }
  m.edgVersion = e.memorize(function() {
    var a = null
    var b = /Edg\/(\d+)\./
    g.navigator &&
      navigator.userAgent &&
      (b = navigator.userAgent.match(b)) &&
      1 < b.length &&
      (a = parseInt(b[1], 10))
    return a
  })
  m.isFF = u(function(a) {
    var b = !1
    g &&
      g.document &&
      g.document.documentElement &&
      g.document.documentElement.style &&
      (b =
        "MozAppearance" in g.document.documentElement.style &&
        "undefined" !== typeof g.InstallTrigger)
    if (
      b &&
      a &&
      g.navigator &&
      g.navigator.userAgent &&
      g.navigator.userAgent.match
    ) {
      var c = g.navigator.userAgent.match(/Firefox\/([0-9]+)/)
      b = !1
      c && c.length && ((c = +c[1]), (b = c >= a))
    }
    return b
  }, "isFF")
  var Y = {
      _storage: new O(),
      globalConfig: null,
      key: "zzlc",
      userInfo: "",
      updateInfo: function(a) {
        e.forEachKey(
          this.getInfoFlags(),
          function(b, c) {
            var d = c.call(this)
            d && (a[b] = d)
          },
          this
        )
        return a
      },
      getYm: function() {
        var a = this._storage.get(this.ymKey) || {}
        return a.resp ? a.resp : this.genYm.call(this, a)
      },
      getYmD: function() {
        var a = this._storage.get(this.ymKey) || {}
        if (a.dmn) return a.dmn
      },
      getZZ: function() {
        return this._storage.get(this.key)
          ? this._storage.get(this.key)
          : this.zz
      },
      getPP: function() {
        return this.globalConfig && this.globalConfig.get("pp")
          ? this.globalConfig.get("pp")
          : this.pp
      },
      getPU: function() {
        return this.globalConfig && this.globalConfig.get("pu")
          ? this.globalConfig.get("pu")
          : this.pu
      },
      getFip: function() {
        if (this._storage.get(this.fipKey))
          return this._storage.get(this.fipKey)
      },
      getInfoFlags: function() {
        return {
          pi: this.getYm,
          pid: this.getYmD,
          zz: this.getZZ,
          pp: this.getPP,
          pu: this.getPU,
          fip: this.getFip,
        }
      },
      checkVersion: function() {
        var a = m.edgVersion()
        var b = m.getITPYaBroVersion()
        if (this.globalConfig.get("isEU")) return 1
        if ((50 <= b && 99 >= b) || (a && 79 <= a)) return 0
        a = m.getMacOSVersion()
        return (
          !(
            (m.isIOS() || 10 < a[0] || (10 === a[0] && 13 <= a[1])) &&
            m.isSafari()
          ) || m.isSafariWebView()
        )
      },
      noop: function() {},
      genPu: function(a) {
        var b = e.fnv32a(g.location.host) + this.userInfo
        this.pu = b
        a.set("pu", b)
        return b
      },
      ymKey: "pi",
      genYm: function(a) {
        var b = this,
          c = x(),
          d = q.getMinutes()
        if (
          !this.checkVersion() &&
          g.fetch &&
          this._storage.get("retryReqs") &&
          "yandex.ru" == c.hostname &&
          "/" == c.pathname &&
          !(a.lt && a.lt + 1440 > d)
        ) {
          a.lt = d
          c = [
            "auto.ru/daiku",
            "thequestion.ru/daiku",
            "www.kinopoisk.ru/daiku",
            "www.maximonline.ru/_ym",
          ]
          var f = c[e.random(0, c.length)]
          fetch("//" + f, { credentials: "include" })
            .then(function(a) {
              return a.json()
            })
            .then(function(c) {
              c &&
                ((a.resp = c._ym_uid),
                (a.dmn = K.encode(Ga.encode(f))),
                b._storage.set(b.ymKey, a))
            })
            ["catch"](function() {
              b._storage.set(b.ymKey, a)
            })
        }
      },
      initPU: function(a, b) {
        var c = this
        var d = m.isFF(68)
        this.globalConfig = b
        b.get("pu") !== z ||
          (this.checkVersion() && !d) ||
          (b.setSafe("pu", null),
          a.addHandler(
            "gpu-get",
            function() {
              return { type: "gpu-get", pu: b.get("pu") }
            },
            this
          ),
          g.opener
            ? ((d = e.setTimeout(
                function() {
                  c.genPu(b)
                },
                200,
                "pu"
              )),
              a.sendToIframe(
                g.opener,
                { type: "gpu-get" },
                this.handleGpu(d),
                this
              ))
            : this.genPu(b))
      },
      handleGpu: function(a) {
        return function(b) {
          b = b.pu
          e.clearTimeout(a)
          b && ((this.pu = b), this.globalConfig.set("pu", b))
        }
      },
      onicecandidate: u(function(a) {
        var b
        try {
          var c =
            (b = a.localDescription.sdp) &&
            b.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
        } catch (d) {
          a.onicecandidate = this.noop
          "closed" !== a.iceConnectionState && a.close()
          return
        }
        c &&
          0 < c.length &&
          ((this.pp = e.fnv32a(c[1])), this.globalConfig.set("pp", this.pp))
        a.onicecandidate = this.noop
        a.close()
      }, "wrt"),
      onOffer: function(a, b) {
        e.isFunction(a.setLocalDescription) &&
          a.setLocalDescription(b, this.noop, this.noop)
      },
      initPP: u(function(a) {
        var b =
          g.RTCPeerConnection ||
          g.mozRTCPeerConnection ||
          g.webkitRTCPeerConnection
        this.globalConfig = a
        if (
          g.navigator.onLine &&
          b &&
          a.get("pp") == z &&
          (this.globalConfig.setSafe("pp", null),
          b &&
            b.prototype &&
            b.prototype.constructor &&
            b.prototype.constructor.name)
        ) {
          try {
            var c = new b({ iceServers: [] })
            c.createDataChannel("y.metrika")
          } catch (f) {
            return
          }
          if (e.isFunction(c.createOffer) && !c.createOffer.length) {
            try {
              var d = c.createOffer()
            } catch (f) {
              return
            }
            e.isFunction(d.then) && d.then(e.bind(this.onOffer, this, c))
            c.onicecandidate = e.bind(this.onicecandidate, this, c)
          }
        }
      }, "rcinit"),
      initZZ: function() {
        var a = "ru"
        var b = m.isFF(68)
        var c = m.edgVersion(),
          d = this
        if (!this.getZZ() && (!this.checkVersion() || b)) {
          if (b || (c && 79 <= c)) a = "md"
          b = e.getNativeFunction("createElement", h)("iframe")
          b.style.display = "none"
          b.style.width = "1px"
          b.style.height = "1px"
          b.style.visibility = "hidden"
          b.src =
            "https://mc.yandex." + a + K.decode("L21ldHJpa2EvenpsYy5odG1s")
          g.document.documentElement.appendChild(b)
          l.on(g, "message", this.onMessage, this, { passive: !1 })
          this.frame = b
          this.timeout = e.setTimeout(
            function() {
              l.un(g, "message", d.onMessage, d, { passive: !1 })
              n.removeNode(d.frame)
              d.zz = "na"
            },
            3e3,
            "cd.initZZ"
          )
        }
      },
      onMessage: function(a) {
        a.data &&
          a.data.substr &&
          "__ym__zz" === a.data.substr(0, 8) &&
          ((this.zz = a.data.substr(8)),
          n.removeNode(this.frame),
          this._storage.set(this.key, this.zz),
          l.un(g, "message", this.onMessage, this, { passive: !1 }),
          e.clearTimeout(this.timeout))
      },
      fipKey: "fip",
      fpFactors: "webGL plugins applePay dnt font navi jsHeap screen speech video mMedia".split(
        " "
      ),
      initFip: function() {
        var a = 0
        a = m.isFF(68)
        !Object.keys ||
          (this.checkVersion() && !a) ||
          this._storage.get(this.fipKey) ||
          ((a = new xa(
            e.reduce(
              function(a, c) {
                a[c] = 1
                return a
              },
              {},
              this.fpFactors
            )
          )),
          (a = a.toString(!1).join("-")),
          this._storage.set(this.fipKey, a))
      },
    },
    L = ya.inherit({
      protocol: "",
      host: "mc.yandex.ru",
      queryStringParams: {
        firstOrdering: ["wmode", "callback", "cnt-class"],
        lastOrdering: ["browser-info"],
      },
      resource: "",
      counterId: "",
      counterType: 0,
      retry: !1,
      transports: [Jb, W, ra, Kb],
      _initComponent: function() {
        L.superclass._initComponent.apply(this, arguments)
        this.retry && (this._storage = new O())
      },
      send: function(a, b, c, d) {
        var f = this.globalConfig.get(ca.globalKey),
          e = this
        f && 3 !== this.counterId
          ? f(function() {
              var f = e._registerRequest(a, b)
              e._sendSavedRequest(f, a, b, c, d)
            }, a)
          : ((f = e._registerRequest(a, b)), e._sendSavedRequest(f, a, b, c, d))
      },
      _sendSavedRequest: function(a, b, c, d, f) {
        var g = this.globalConfig.get("firstReqStatus"),
          p = b.forceNoRedirect
        if ("process" == g)
          this.globalConfig.set(
            "firstReqCallbacks",
            e.mergeArrays(this.globalConfig.get("firstReqCallbacks") || [], [
              [this, arguments],
            ])
          )
        else {
          g || this.globalConfig.set("firstReqStatus", "process")
          this.counterType && (b["cnt-class"] = this.counterType)
          this.globalConfig.get("pri") && (c.pri = this.globalConfig.get("pri"))
          c.st = q.getSeconds()
          c.u = L._userID
          this.globalConfig.get("isEU") || (c = Y.updateInfo(c))
          g = [
            this.protocol,
            "//",
            this.host,
            "/",
            this.resource,
            "/",
            this.counterId,
            p ? "/1" : "",
          ].join("")
          delete b.forceNoRedirect
          var k = []
          c &&
            (e.forEachKey(c, function(a, b) {
              "t" != a && e.mergeArrays(k, [a, b])
            }),
            c.t && e.mergeArrays(k, ["t", c.t]))
          k.length && (b["browser-info"] = k.join(":"))
          return L.superclass.send.call(
            this,
            g,
            b,
            function() {
              var b
              this.globalConfig.set("firstReqStatus", "complete")
              this._unregisterRequest(a)
              var c = this.globalConfig.get("firstReqCallbacks")
              this.globalConfig.set("firstReqCallbacks", null)
              if (c)
                for (b = 0; b < c.length; b++)
                  c[b][0]._sendSavedRequest.apply(c[b][0], c[b][1])
              d && d.apply(f, arguments)
            },
            this
          )
        }
      },
      _isRetryEnabled: function() {
        return this.retry && this._storage && this._storage.isEnabled()
      },
      _registerRequest: function(a, b) {
        var c
        if (this._isRetryEnabled()) {
          b.rqnl = b.rqnl || 0
          b.rqnl++
          var d = this._storage.get("retryReqs") || {}
          for (c = 1; d[c]; ) c++
          d[c] = {
            protocol: this.protocol,
            host: this.host,
            resource: this.resource,
            counterId: this.counterId,
            counterType: this.counterType,
            postParams: this.postParams,
            params: a,
            browserInfo: b,
            ghid: this.globalConfig.get("_globalMetrikaHitId"),
            time: q.getMs(),
          }
          this._storage.set("retryReqs", d)
          return c
        }
      },
      _unregisterRequest: function(a) {
        if (a && this._isRetryEnabled()) {
          var b = this._storage.get("retryReqs") || {}
          b[a] && (delete b[a], this._storage.set("retryReqs", b))
        }
      },
      _getVersion: u(
        function() {
          return sa
        },
        "",
        !0
      ),
    })
  L._storage = new O()
  L.initCookie = function(a) {
    var b = new F({ onlyCurrentDomain: "uid" !== a }),
      c = b.read(a),
      d = L._storage.get(a),
      f = !1,
      g = b.read("d"),
      p = q.getSeconds()
    d &&
      !c &&
      ((c = d), (f = !0), b.create(a, c, 525600), b.create("d", p, 525600))
    if (!c)
      (c = p + "" + e.random()),
        b.create(a, c, 525600),
        b.create("d", p, 525600)
    else if (!g || 15768e3 < p - parseInt(g))
      b.create(a, c, 525600), b.create("d", p, 525600)
    L._storage.set(a, c)
    L._userID = c
    return f
  }
  L.retransmit = function(a) {
    var b = L._storage,
      c = b.get("retryReqs") || {},
      d
    b.remove("retryReqs")
    e.forEachKey(c, function(b, c) {
      var f = q.getMs()
      a.get("firstReqStatus") || a.set("firstReqStatus", "complete")
      c.ghid &&
        c.ghid != a.get("_globalMetrikaHitId") &&
        c.time &&
        c.time + 1728e5 > f &&
        500 < f - c.time &&
        2 >= c.browserInfo.rqnl &&
        ((d = new L({
          protocol: c.protocol,
          host: c.host,
          resource: c.resource,
          counterId: c.counterId,
          counterType: c.counterType,
          postParams: c.postParams || [],
          retry: !0,
        })),
        d.send(c.params, c.browserInfo))
    })
  }
  e.fletcher = function(a) {
    for (var b = a.length, c = 0, d = 255, f = 255, e, g, k; b; ) {
      e = 21 < b ? 21 : b
      b -= e
      do
        (g = "string" == typeof a ? a.charCodeAt(c) : a[c]),
          c++,
          255 < g && ((k = g >> 8), (g &= 255), (g ^= k)),
          (d += g),
          (f += d)
      while (--e)
      d = (d & 255) + (d >> 8)
      f = (f & 255) + (f >> 8)
    }
    a = (((d & 255) + (d >> 8)) << 8) | ((f & 255) + (f >> 8))
    return 65535 == a ? 0 : a
  }
  var Lb = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
    Mb = e.memorize(function() {
      var a = new F(),
        b = x()
      return function(c) {
        return c(a, b)
      }
    }),
    Nb = function(a, b) {
      var c = b.search.match(Lb),
        d = null,
        f = a.read("turbo_uid")
      c && 2 <= c.length
        ? ((d = c[2]), a.create("turbo_uid", d, 86400))
        : f && (d = f)
      return d
    }
  e.arrayEvery = function(a, b, c) {
    var d
    for (d = 0; d < a.length; d++) if (!b.call(c, a[d], d, a)) return !1
    return !0
  }
  e.is4Bytes = function(a) {
    return !e.arrayEvery(
      (encodeURIComponent(a).match(/(%[A-F,\d]{2})+/g) || [])
        .join("")
        .split("%"),
      function(a) {
        return 240 > parseInt(a, 16)
      }
    )
  }
  e.trim = function(a, b) {
    a = String(a).replace(/^\s+|\s+$/g, "")
    b && a.length > b && (a = a.substr(0, b))
    return a
  }
  e.isNumber = function(a) {
    return isFinite(a) && !isNaN(a) && "[object Number]" === e.toString(a)
  }
  e.isString = function(a) {
    return "[object String]" === e.toString(a)
  }
  e._hasIndexOf = [].indexOf && 0 === [z].indexOf(z)
  e.arrayIndexOf = e._hasIndexOf
    ? function(a, b) {
        return a.indexOf(b)
      }
    : function(a, b) {
        var c
        for (c = 0; c < a.length; c++) if (a[c] === b) return c
        return -1
      }
  e.warning = function() {
    g.console &&
      "function" === typeof g.console.warn &&
      console.warn.apply(console, arguments)
  }
  e.isObject = function(a) {
    try {
      return a && null !== a && "[object Object]" === e.toString(a)
    } catch (b) {
      return !1
    }
  }
  e._urlParser = null
  e.parseUrl = function(a) {
    if (!this._urlParser)
      try {
        this._urlParser = h.createElement("a")
      } catch (b) {}
    return this._urlParser
      ? ((this._urlParser.href = a),
        {
          protocol: this._urlParser.protocol,
          host: this._urlParser.host,
          port: this._urlParser.port,
          hostname: this._urlParser.hostname,
          hash: this._urlParser.hash,
          search: this._urlParser.search,
          query: this._urlParser.search.replace(/^\?/, ""),
          pathname: this._urlParser.pathname || "/",
          path: (this._urlParser.pathname || "/") + this._urlParser.search,
          href: this._urlParser.href,
        })
      : {}
  }
  e._playerRegexp = /^.+\.mtproxy\.yandex\.net$/
  e.isMetrikaPlayer = function() {
    return (
      "MetrikaPlayer" == g.name || this._playerRegexp.test(g.location.hostname)
    )
  }
  n.getDocumentCharset = function() {
    return ("" + (h.characterSet || h.charset || "")).toLowerCase()
  }
  n.getBody = function() {
    for (var a = h.getElementsByTagName("body"); 0 < a.length; ) return a[0]
  }
  n.getRootElement = function() {
    var a = h.documentElement,
      b = n.getBody()
    return "CSS1Compat" == h.compatMode ? a : b || a
  }
  n.getViewportSize = function() {
    var a = n.getRootElement()
    return [a.clientWidth || g.innerWidth, a.clientHeight || g.innerHeight]
  }
  n.getDocumentTitle = function() {
    var a = h.title
    "string" != typeof a &&
      (a =
        (a = h.getElementsByTagName("title")) && a.length ? a[0].innerHTML : "")
    return a
  }
  m.getSilverlightVersion = e.memorize(function() {
    if (g.ActiveXObject)
      try {
        var a = new ActiveXObject("AgControl.AgControl")
        var b = function(a, b, d, f) {
          for (; c(a, b); ) b[d] += f
          b[d] -= f
        }
        var c = function(a, b) {
          return a.isVersionSupported(
            b[0] + "." + b[1] + "." + b[2] + "." + b[3]
          )
        }
        var d = [1, 0, 0, 0]
        b(a, d, 0, 1)
        b(a, d, 1, 1)
        b(a, d, 2, 1e4)
        b(a, d, 2, 1e3)
        b(a, d, 2, 100)
        b(a, d, 2, 10)
        b(a, d, 2, 1)
        b(a, d, 3, 1)
        var f = d.join(".")
      } catch (r) {}
    else if (
      ((b = g.navigator), (b = b.plugins && b.plugins["Silverlight Plug-In"]))
    )
      f = b.description
    return f || ""
  })
  m.getFlashVersion = e.memorize(function() {
    var a = g.navigator
    if (
      "undefined" != typeof a.plugins &&
      "object" == typeof a.plugins["Shockwave Flash"]
    ) {
      var b = a.plugins["Shockwave Flash"]
      var c = b.version
      if ((b = b.description) || c)
        if (
          ((a = a.mimeTypes),
          "undefined" == typeof a ||
            !a["application/x-shockwave-flash"] ||
            a["application/x-shockwave-flash"].enabledPlugin)
        )
          c
            ? (m._flashVersion = c)
            : b &&
              (m._flashVersion = b
                .replace(/([a-zA-Z]|\s)+/, "")
                .replace(/(\s+r|\s+b[0-9]+)/, "."))
    } else if ("undefined" != typeof g.ActiveXObject)
      try {
        if (
          ((c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")),
          (b = c.GetVariable("$version")))
        )
          m._flashVersion = b
            .split(" ")[1]
            .replace(/,/g, ".")
            .replace(/[^.\d]/g, "")
      } catch (d) {}
    return m._flashVersion
  })
  m.getLanguage = e.memorize(function() {
    var a = (g.navigator
      ? navigator.language ||
        navigator.userLanguage ||
        navigator.browserLanguage ||
        navigator.systemLanguage
      : ""
    ).toLowerCase()
    return e.isString(a) ? a : ""
  })
  m.getJavaEnabled = e.memorize(function() {
    try {
      return navigator.javaEnabled()
    } catch (a) {
      return !1
    }
  })
  m.getFingerPrint = e.memorize(function() {
    var a = [],
      b
    if (navigator.plugins && navigator.plugins.length)
      for (b = 0; b < navigator.plugins.length; b++) {
        var c = navigator.plugins[b]
        e.mergeArrays(a, [c.name, c.version, c.description, c.filename])
      }
    if (navigator.mimeTypes && navigator.mimeTypes.length)
      for (b = 0; b < navigator.mimeTypes.length; b++)
        (c = navigator.mimeTypes[b]),
          e.mergeArrays(a, [c.type, c.description, c.suffixes])
    return e.fnv32a(a.join(";")) + "01"
  })
  m.getNotificationPermission = function() {
    try {
      var a = Notification.permission
    } catch (b) {}
    switch (a) {
      case "denied":
        return 1
      case "granted":
        return 2
    }
  }
  m.isIframe = e.memorize(function() {
    try {
      return g.top != g
    } catch (a) {
      return !1
    }
  })
  m._nMap = {
    other: "0",
    none: "1",
    unknown: "2",
    wifi: "3",
    ethernet: "4",
    bluetooth: "5",
    cellular: "6",
    wimax: "7",
    mixed: "8",
  }
  m.netType = function() {
    var a = (navigator.connection || { type: "" }).type
    return m._nMap[a] || a
  }
  m.isHeadLess = e.memorize(function() {
    var a,
      b = ["_phantom", "__nightmare", "callPhantom"]
    for (a = 0; a < b.length; a++) if (g[b[a]]) return !0
    return /PhantomJS/.test(g.navigator.userAgent) ||
      g.navigator.webdriver ||
      (g.isChrome && !g.chrome)
      ? !0
      : /HeadlessChrome/.test(g.navigator.userAgent)
  })
  m.getNavigationStart = e.memorize(function() {
    var a = g.performance || g.webkitPerformance
    return a && a.timing && a.timing.navigationStart
  })
  m.isSameOriginTopFrame = function() {
    try {
      return g.top.contentWindow || !0
    } catch (a) {
      return !1
    }
  }
  m.isDesktop = function(a) {
    var b = a.get("bt", {})
    a.get("bt") === z &&
      ((b.p = navigator.getBattery ? navigator.getBattery() : null),
      a.set("bt", b),
      b.p &&
        b.p.then &&
        b.p.then(function(a) {
          b.v = a.charging && 0 === a.chargingTime
        }))
    return b.v
  }
  m.isSelenium = e.memorize(function() {
    var a = ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"],
      b = ["selenium", "webdriver", "driver"],
      c,
      d = g.document,
      f = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(
        " "
      )
    for (c = 0; c < a.length; c++) if (g[a[c]]) return !0
    for (c = 0; c < f.length; c++) if (d && d[f[c]]) return !0
    if (
      g.external &&
      g.external.toString &&
      0 <= g.external.toString().indexOf("Sequentum")
    )
      return !0
    if (d.documentElement && d.documentElement.getAttribute)
      for (c = 0; c < b.length; c++)
        if (d.documentElement.getAttribute(b[c])) return !0
    return !1
  })
  l.ready = function(a) {
    var b = h.readyState
    if ("interactive" === b || "complete" === b)
      e.setTimeout(a, 0, "evt::ready")
    else {
      var c = function() {
        l.un(h, "DOMContentLoaded", c)
        l.un(g, "load", c)
        a()
      }
      l.on(h, "DOMContentLoaded", c)
      l.on(g, "load", c)
    }
  }
  var pb = {
    url: "https://mc.yandex.ru/metrika/",
    _value: null,
    init: function(a) {
      var b = this._getLs().read("isad")
      this.globalConfig = a || w
      b ? this._set(b) : this._getReqStatus() || this._send()
    },
    getVal: function() {
      return this._value
    },
    _set: function(a) {
      this._value = "1" == a || "2" == a ? a : null
    },
    _send: function() {
      var a = this
      this._setReqStatus("process")
      l.ready(function() {
        var b = h.createElement("img")
        b.onload = function() {
          a._saveReq(!1)
          n.removeNode(this)
        }
        b.onerror = function() {
          a._saveReq(!0)
          n.removeNode(this)
        }
        b.src =
          a.url +
          String.fromCharCode(97, 100, 118, 101, 114, 116, 46, 103, 105, 102)
        m.isSafari() &&
          ((b.style.position = "absolute"),
          (b.style.visibility = "hidden"),
          (b.style.width = "0px"),
          (b.style.height = "0px"),
          n.getRootElement().appendChild(b))
      })
    },
    _saveReq: function(a) {
      this._value = a = a ? "1" : "2"
      this._setReqStatus("complete")
      this._getLs().create("isad", a, 1200)
    },
    _setReqStatus: function(a) {
      try {
        this.globalConfig.set("adStatus", a)
      } catch (b) {}
    },
    _getReqStatus: function() {
      try {
        return this.globalConfig.get("adStatus")
      } catch (a) {
        return "complete"
      }
    },
    _getLs: function() {
      this._ls || (this._ls = new F())
      return this._ls
    },
  }
  Ga.decode = function(a) {
    for (var b = "", c = 0, d, f, e; c < a.length; )
      (d = a.charCodeAt(c)),
        128 > d
          ? ((b += String.fromCharCode(d)), c++)
          : 191 < d && 224 > d
          ? ((f = a.charCodeAt(c + 1)),
            (b += String.fromCharCode(((d & 31) << 6) | (f & 63))),
            (c += 2))
          : ((f = a.charCodeAt(c + 1)),
            (e = a.charCodeAt(c + 2)),
            (b += String.fromCharCode(
              ((d & 15) << 12) | ((f & 63) << 6) | (e & 63)
            )),
            (c += 3))
    return b
  }
  e.reduce = function(a, b, c) {
    var d = 0
    b == z && ((b = c[0]), d++)
    for (; d < c.length; ) (b = a(b, c[d])), d++
    return b
  }
  e.filter = function(a, b) {
    var c,
      d = []
    for (c = 0; c < b.length; c++) a(b[c]) && d.push(b[c])
    return d
  }
  X.parse = function(a) {
    try {
      return JSON.parse(a)
    } catch (b) {
      return null
    }
  }
  var Ha = L.inherit({
    hitId: 0,
    trackHash: !1,
    trimParams: !1,
    webvisor: !1,
    counter: null,
    counterNum: 0,
    windowName: null,
    resource: "watch",
    retry: !0,
    paramsQueue: {
      paramsQueue: [],
      length: function() {
        return this.paramsQueue.length
      },
      push: function(a) {
        this.paramsQueue.push(a)
      },
      _reduce: function(a) {
        return function(b, c) {
          e.arrayEvery(e.keys(c), function(d) {
            if (b.hasOwnProperty(d)) return 1
            ;-1 == e.arrayIndexOf(a, d) && ((b[d] = c[d]), delete c[d])
            return 1
          })
          return b
        }
      },
      _filter: function(a) {
        return e.keys(a).length
      },
      mixin: function(a) {
        var b = {}
        this.paramsQueue.length &&
          ((b = e.reduce(this._reduce(e.keys(a)), {}, this.paramsQueue)),
          (this.paramsQueue = e.filter(this._filter, this.paramsQueue)))
        return e.mixin({}, a, b)
      },
    },
    postParams: ["site-info"],
    countersNoTitle: "22836271 9928105 26128362 29850769 22327510 40081755 16082914 279297 23323747 16082899".split(
      " "
    ),
    fake: !1,
    sendTitle: !0,
    _initComponent: function() {
      Ha.superclass._initComponent.apply(this, arguments)
      this._trackHash = this.trackHash
      this.turboState = Mb()
      "0" === "" + this.counterType &&
        (this.sendTitle =
          -1 === e.arrayIndexOf(this.countersNoTitle, "" + this.counterId))
    },
    setTrackHash: function(a) {
      this._trackHash = a
    },
    sendHit: function(a) {
      this._hitExt(
        {
          url: a.url,
          title: a.title,
          referrer: a.referrer,
          vParams: a.vParams,
          modes: e.mixin(a.modes || {}, { ar: !0, saveRef: !0, pv: !0 }),
          callback: a.callback,
          hasPrerender: a.hasPrerender,
          ctx: a.ctx,
        },
        "hit"
      )
    },
    sendExperiments: function(a) {
      this._hitExt(
        {
          url: x().href,
          title: "",
          referrer: "",
          modes: { ex: !0, ar: !0 },
          experiments: a.experiments,
          callback: a.callback,
          ctx: a.ctx,
        },
        "exp"
      )
    },
    sendPrerenderHit: function(a) {
      this._hitExt(
        {
          url: a.url,
          vParams: a.vParams,
          title: a.title,
          referrer: a.referrer,
          modes: { ar: !0, pq: !0 },
        },
        "hit"
      )
    },
    sendAjaxHit: function(a) {
      this._hitExt(
        { url: a.url, title: a.title, referrer: a.referrer, modes: a.modes },
        "hit"
      )
    },
    sendParams: function(a, b, c, d) {
      this._hitExt(
        {
          url: d || x().href,
          title: "",
          referrer: "",
          forceNoRedirect: !0,
          vParams: a,
          modes: { ar: !0, pa: !0, onlyData: !0 },
          callback: b,
          ctx: c,
        },
        "pa"
      )
    },
    sendGoal: function(a, b) {
      if (/[/&=?#]/.test(a)) e.warning("Incorrect goal")
      else if (a) {
        var c = b.url ? e.parseUrl(b.url) : x()
        this._hitExt(
          {
            url: "goal://" + c.hostname + "/" + encodeURIComponent(a),
            title: n.getDocumentTitle(),
            referrer: c.href,
            forceNoRedirect: !0,
            vParams: b.vParams,
            modes: { ar: !0 },
            callback: b.callback,
            ctx: b.ctx,
          },
          "go"
        )
      } else e.warning("Empty goal")
    },
    sendClickLink: function(a, b) {
      this._hitExt({
        url: a.url,
        title: a.title,
        referrer: b || x().href,
        modes: a.modes,
      })
    },
    sendExtLink: function(a, b) {
      this._hitExt(
        {
          url: a.url,
          title: a.title || "",
          referrer: b || x().href,
          vParams: a.vParams,
          modes: { ar: !0, ln: !0, ut: fb },
          callback: a.callback,
          ctx: a.ctx,
        },
        "cl"
      )
    },
    sendFileUpload: function(a) {
      this._hitExt(
        {
          url: a.url,
          title: a.title || "",
          referrer: x().href,
          vParams: a.vParams,
          modes: { ar: !0, ln: !0, dl: !0 },
          callback: a.callback,
          ctx: a.ctx,
        },
        "fu"
      )
    },
    sendNotBounce: function(a, b) {
      this._hitExt(
        {
          url: b.url || x().href,
          title: "",
          referrer: "",
          modes: { cl: a, ar: !0, nb: !0, onlyData: !0 },
          callback: b.callback,
          ctx: b.ctx,
        },
        "nb"
      )
    },
    sendDevice: function(a) {
      this._hitExt(
        {
          browserInfo: { di: a.data, dip: a.port },
          callback: a.callback,
          ctx: a.ctx,
        },
        "de"
      )
    },
    _hitExt: function(a, b) {
      function c(a, b) {
        b && (n[a] = b)
      }
      var d,
        f,
        g,
        p = {}
      if (!e.isMetrikaPlayer()) {
        var k = a.modes || {}
        var h = a.browserInfo || {}
        var l = "undefined" !== typeof a.referrer ? a.referrer : Sa.lastReferrer
        var m = a.url || ""
        var n = {}
        a.nohit && c("nohit", 1)
        k.ar &&
          !k.onlyData &&
          ((l = null === l || "" === l ? "" : this._prepareHitUrl(l)),
          (m = this._prepareHitUrl(a.url)))
        c("forceNoRedirect", a.forceNoRedirect)
        c("page-ref", e.trim(l, Ia))
        c("page-url", e.trim(m, Ia))
        e.is4Bytes(a.title) && c("charset", "utf-8")
        ;-1 != x().hostname.search(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)
          ? c("ut", fb)
          : "undefined" != typeof k.ut && c("ut", e.trim(k.ut, Ob))
        c("exp", a.experiments)
        ;(f = a.vParams) &&
          this.counter &&
          f.__ym &&
          (e.isNumber(f.__ym.turbo_page) &&
            (this.counter.tp = f.__ym.turbo_page),
          e.isNumber(f.__ym.turbo_page_id) &&
            (this.counter.tpid = f.__ym.turbo_page_id))
        ;(!f || (e.isObject(f) && !f.__ym && !f.__ymu)) &&
          this.paramsQueue.length() &&
          e.inArray(["go", "hit", "pa"], b) &&
          (f = this.paramsQueue.mixin(f))
        f &&
          ((m = e.toJSON(f)),
          this.trimParams && m.length > Pb
            ? (g = !0)
            : 7e5 < m
            ? e.warning("Too big params")
            : c("site-info", m))
        k.saveRef && (Sa.lastReferrer = l)
        p = (function(a, b) {
          var c = {}
          e.forEachKey(b, function(a, b) {
            ;-1 === e.arrayIndexOf(["", 0, z, null], b) && (c[a] = b)
          })
          return e.mixin({}, a, c)
        })(p, {
          gdpr: ca.getState(this.globalConfig),
          tp: this.counter && this.counter.tp,
          tpid: this.counter && this.counter.tpid,
          fu: this.getFu(a.url, a.referrer),
          eu: this.globalConfig.get("isEU"),
          td: this.turboState(Nb),
          v: this._getVersion(),
          pr: a.hasPrerender ? 1 : null,
        })
        this.fake ||
          (d = this._getTechInfo(
            a.title,
            k,
            this.counterId,
            a.ts,
            a.tz,
            this._trackHash,
            this.hitId,
            this.webvisor,
            this.counter,
            a.nohit
          ))
        e.mixin(h, d, p)
        this.send(
          n,
          h,
          function() {
            g && this.counter.params(f)
            a.userParams && this.counter.userParams(a.userParams)
            e.isFunction(a.callback) && a.callback.apply(a.ctx, arguments)
          },
          this
        )
      }
    },
    _prepareHitUrl: function(a) {
      var b = x(),
        c = b.host
      b = b.href
      if (!e.isString(a)) return b
      if (-1 != a.search(/^[a-z][\w.+-]+:\/\//i)) return a
      var d = a.charAt(0)
      if ("?" == d)
        return (d = b.search(/\?/)), -1 == d ? b + a : b.substr(0, d) + a
      if ("#" == d)
        return (d = b.search(/#/)), -1 == d ? b + a : b.substr(0, d) + a
      if ("/" == d) {
        if (((d = b.search(c)), -1 != d)) return b.substr(0, d + c.length) + a
      } else return (c = b.split("/")), (c[c.length - 1] = a), c.join("/")
      return a
    },
    getFu: function(a, b) {
      var c = a !== x().href,
        d = h.referrer.replace(/\/$/, ""),
        f = (b || "").replace(/\/$/, "")
      d = d !== f
      f = 0
      d && c ? (f = 3) : d ? (f = 1) : c && (f = 2)
      return f
    },
    _getTechInfo: function(a, b, c, d, f, h, p, k, l, t) {
      function r(a, b, c) {
        var d = "" + b
        a && b && (c || -1 === d.indexOf(":")) && (u[a] = d)
      }
      function C(a) {
        b[a] && r(a, "1")
      }
      var u = {}
      b = b || {}
      d = d || q.getTimestamp()
      f = f || q.getTimezone()
      r("j", m.getJavaEnabled() ? "1" : "")
      var x = m.isDesktop(this.globalConfig)
      x !== z && r("dp", x ? "1" : "0")
      r("nt", m.netType())
      r("ns", m.getNavigationStart())
      ea &&
        r(
          "s",
          ea.width + "x" + ea.height + "x" + (ea.colorDepth || ea.pixelDepth)
        )
      g.devicePixelRatio && r("sk", g.devicePixelRatio)
      m.isSelenium() && r("iss", "1")
      m.isHeadLess() && r("hdl", "1")
      m.isIframe() &&
        (r("ifr", "1"), r("sti", m.isSameOriginTopFrame() ? "1" : "0"))
      g.ia_document &&
        g.ia_document.shareURL &&
        g.ia_document.referrer &&
        r("iia", "1")
      r("adb", pb.getVal())
      r("f", m.getFlashVersion())
      r("l", m.getSilverlightVersion())
      r("fpr", m.getFingerPrint())
      r("cn", this.counterNum)
      b.pa || ((x = n.getViewportSize()), r("w", x[0] + "x" + x[1]))
      r("z", f)
      r("i", d)
      r("et", q.getSeconds())
      r("en", n.getDocumentCharset())
      r("c", navigator.cookieEnabled ? "1" : "")
      r("la", m.getLanguage())
      r("ntf", m.getNotificationPermission())
      e.random(100) ||
        r("np", K.encode(Ga.encode(e.trim(m.getPlatform(), 100))))
      h && r("wh", "1")
      f = "ar ln re dl cpf ad nb pa pq pv ex".split(" ")
      for (d = 0; d < f.length; d++) C(f[d])
      f = "va vt sn sa he pai".split(" ")
      b.nb && f.push("cl")
      for (d = 0; d < f.length; d++) (h = f[d]), r(h, b[h])
      f = new O({ counterId: c })
      f.isEnabled() &&
        ((c = f.getStorageId()),
        (d = f.get("reqNum")),
        t || (d ? d++ : (d = 1)),
        f.set("reqNum", d),
        f.get("reqNum") == d
          ? (r("ls", c), r("rqn", d))
          : (f.remove("reqNum"),
            f.clearStorageId(),
            1 < d && (r("ls", c), r("rqn", 0))))
      r("rn", e.random())
      r("hid", p)
      t || 3 == this.counterId || b.pq || r("ds", Gb(l))
      l._firstPaint || t || ((l._firstPaint = Ib()), r("fp", l._firstPaint))
      if (k) {
        p = w.get("winNameNum")
        if (!p) {
          if ((p = +g.name || Math.round(65535 * Math.random())))
            0 > p && (p *= -1), (p %= 65535)
          p = p || e.fletcher(g.name)
          w.set("winNameNum", p)
        }
        r("wn", p)
        try {
          g.history && r("hl", String(g.history.length))
        } catch (ib) {}
      }
      p = ""
      this.sendTitle && (p = this._getTitle(a))
      r("t", p, !0)
      return u
    },
    _getTitle: function(a) {
      a =
        "undefined" == typeof a
          ? (a = n.getDocumentTitle())
            ? e.trim(a, Ja)
            : ""
          : e.trim(a, Ja)
      return a
    },
  })
  e.array2Props = function(a) {
    var b = a.length,
      c = {},
      d = c,
      f
    for (f = 0; f < b - 1; f++) {
      var e = a[f]
      d[e] = {}
      f < b - 2 && (d = d[e])
    }
    d[e] = a[b - 1]
    return c
  }
  var ia = E.inherit({
      sampling: 1,
      counterId: 26302566,
      _initComponent: function() {
        ia.superclass._initComponent.apply(this, arguments)
        this._sender = new Ha({
          protocol: "https:",
          counterId: this.counterId,
          retry: !1,
          counter: {},
        })
      },
      log: function() {
        this.logParams(e.array2Props(arguments))
      },
      logParams: function(a) {
        Math.random() < this.sampling &&
          this._sender.sendHit({
            url: J.href,
            title: "",
            referrer: "",
            vParams: a,
          })
      },
    }),
    Qb = L.inherit({
      resource: "webvisor",
      retry: !0,
      postParams: ["wv-data"],
      sendPacket: function(a, b, c, d, f, r, p, k) {
        if (!a || !a.length) return !1
        var h = K.encode(a, !0)
        if (0 == h.indexOf("AAAAAAAAADw") && g.Error) {
          var l = Error()
          "string" == typeof l.stack &&
            new ia({ sampling: 0.1 }).log("bad visor packet 5", 1)
        }
        a = {
          rn: e.random(),
          "page-url": b,
          wmode: 0,
          "wv-type": 0,
          "wv-hit": c,
          "wv-part": d + 1,
          "wv-check": e.fletcher(a),
          "wv-data": h,
        }
        f = { v: this._getVersion(), z: f, i: r }
        return this.send(a, f, p, k)
      },
    }),
    Pa = Fa.inherit({
      protocol: "",
      counterId: "",
      counterType: "",
      meta: null,
      maxBufferSize: 7500,
      flushTimeout: 3e4,
      storageKey: "visorbuff",
      active: !1,
      _initComponent: function() {
        this.storage = new O({ counterId: this.counterId })
        this._sender = new Qb({
          globalConfig: this.globalConfig,
          protocol: this.protocol,
          counterId: this.counterId,
          counterType: this.counterType,
        })
        Pa.superclass._initComponent.apply(this, arguments)
      },
      onFlush: function(a, b, c) {
        this._sender.sendPacket(a, b.url, b.hitId, c, b.timezone, b.timestamp)
      },
    })
  n.getDocumentHTML = function() {
    var a = ""
    var b = h.documentElement
    var c = b.outerHTML,
      d,
      f
    if (c) b = c
    else {
      c = b.attributes
      var e = ""
      for (d = 0; d < c.length; d++)
        (f = c[d]) && (e += " " + f.name + '\x3d"' + (f.value || "") + '"')
      b = "\x3chtml" + e + "\x3e" + b.innerHTML + "\x3c/html\x3e"
    }
    if ((c = h.doctype))
      (a = c.publicId ? ' PUBLIC "' + c.publicId + '"' : ""),
        (e = c.systemId ? ' "' + c.systemId + '"' : ""),
        (a = "\x3c!DOCTYPE " + c.name + a + e + "\x3e\n")
    return a + b
  }
  n.getDocumentScroll = function() {
    var a = n.getBody()
    return [
      g.pageXOffset ||
        (h.documentElement && h.documentElement.scrollLeft) ||
        (a && a.scrollLeft) ||
        0,
      g.pageYOffset ||
        (h.documentElement && h.documentElement.scrollTop) ||
        (a && a.scrollTop) ||
        0,
    ]
  }
  n.getElementParent = function(a) {
    if (!a || a == h.documentElement) return null
    if (a == n.getBody()) return h.documentElement
    var b = null
    try {
      b = a.parentNode
    } catch (c) {}
    return b
  }
  n.getElementChildren = function(a, b) {
    var c = [],
      d,
      f,
      g
    if (a && (d = a.childNodes)) {
      var h = 0
      for (g = d.length; h < g; h++) {
        var k = d[h]
        ;(f =
          "INPUT" == k.nodeName &&
          k.type &&
          "hidden" == k.type.toLocaleLowerCase()) ||
          (b && k.nodeName != b) ||
          e.mergeArrays(c, [k])
      }
    }
    return c
  }
  n.getElementNeighborPosition = function(a) {
    var b = n.getElementParent(a),
      c
    if (b) {
      var d = 0
      b = b.childNodes
      var f = a && a.nodeName
      for (c = 0; c < b.length; c++) {
        var e = b[c] && b[c].nodeName
        if (f == e) {
          if (a == b[c]) return d
          d++
        }
      }
    }
    return 0
  }
  n.getElementXY = function(a) {
    var b
    if (
      !a ||
      !a.ownerDocument ||
      "PARAM" == a.tagName ||
      a == n.getBody() ||
      a == h.documentElement
    )
      return [0, 0]
    if (a.getBoundingClientRect) {
      a = a.getBoundingClientRect()
      var c = n.getDocumentScroll()
      return [Math.round(a.left + c[0]), Math.round(a.top + c[1])]
    }
    for (b = c = 0; a; )
      (c += a.offsetLeft), (b += a.offsetTop), (a = a.offsetParent)
    return [c, b]
  }
  n.getDocumentSize = function() {
    var a = n.getRootElement(),
      b = n.getViewportSize()
    return [Math.max(a.scrollWidth, b[0]), Math.max(a.scrollHeight, b[1])]
  }
  n.getElementSize = function(a) {
    var b
    return a == n.getBody() || a == h.documentElement
      ? n.getDocumentSize()
      : (b = a.getBoundingClientRect && a.getBoundingClientRect())
      ? [b.width, b.height]
      : [a.offsetWidth, a.offsetHeight]
  }
  n.getElementRegion = function(a) {
    var b = n.getElementXY(a)
    a = n.getElementSize(a)
    return [b[0], b[1], a[0], a[1]]
  }
  n.calcChildrenChecksum = function(a) {
    var b =
      u(
        function() {
          return a.innerHTML
        },
        "",
        !0
      )() || ""
    return e.fletcher(b.replace(/(<[^>]*>|[\u0000-\u0020])/g, ""))
  }
  n.getFormNumber = function(a) {
    var b = h.getElementsByTagName("form"),
      c
    var d = 0
    for (c = b.length; d < c; d++) if (b[d] == a) return d
    return -1
  }
  n.isEmptyField = function(a) {
    return "INPUT" == a.nodeName &&
      "submit" != a.type &&
      "image" != a.type &&
      "hidden" != a.type
      ? "radio" == a.type || "checkbox" == a.type
        ? !a.checked
        : !a.value
      : "TEXTAREA" == a.nodeName
      ? !a.value
      : "SELECT" == a.nodeName
      ? 0 > a.selectedIndex
      : !0
  }
  n.calcTextChecksum = function(a) {
    var b = ""
    a = a.childNodes
    var c
    var d = 0
    for (c = a.length; d < c; d++)
      a[d] && 3 == a[d].nodeType && (b += a[d].nodeValue)
    return e.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
  }
  n.calcAttribChecksum = function(a) {
    var b = "",
      c = "width height align title alt name".split(" "),
      d
    "IMG" == a.tagName && (b += a.src.toLowerCase())
    "A" == a.tagName && (b += a.href.toLowerCase())
    b += String(a.className || "").toLowerCase()
    for (d = 0; d < c.length; d++)
      a.getAttribute && (b += String(a.getAttribute(c[d]) || "").toLowerCase())
    return e.fletcher(b.replace(/[\u0000-\u0020]+/g, ""))
  }
  n.classNameExists = function(a, b) {
    try {
      return new RegExp("(?:^|\\s)" + b + "(?:\\s|$)").test(a.className)
    } catch (c) {
      return !1
    }
  }
  n.getElementsByClassName = function(a, b) {
    var c
    b = b || h
    var d = b.getElementsByTagName("*")
    var f = []
    for (c = 0; c < d.length; c++) n.classNameExists(d[c], a) && f.push(d[c])
    return f
  }
  e.toArray = function(a) {
    var b,
      c = []
    if (a && !isNaN(a.length) && 0 <= a.length)
      for (b = 0; b < a.length; b++) c.push(a[b])
    return c
  }
  e.arrayFilter = function(a, b, c) {
    var d = [],
      f
    for (f = 0; f < a.length; f++) b.call(c, a[f], f, a) && d.push(a[f])
    return d
  }
  e.arrDiff = function(a, b) {
    return e.arrayFilter(a, function(a) {
      return -1 === e.arrayIndexOf(b, a)
    })
  }
  e.encodeURIComponent = function(a, b) {
    a = String(a)
    b && a.length > b && (a = a.substr(0, b))
    return (g.encodeURIComponent || g.escape)(a).replace(/\+/g, "%2B")
  }
  e.bind = function(a, b) {
    var c = [].slice.call(arguments, 2)
    return function() {
      return a.apply(b || this, c.concat([].slice.call(arguments, 0)))
    }
  }
  e.safeDecodeURIComponent = function(a) {
    try {
      return decodeURIComponent(a)
    } catch (b) {
      return ""
    }
  }
  e.isDev = function() {
    return !1
  }
  e.noop = function() {}
  var Eb = !wa(/webkit/) && wa(/gecko/),
    qb = E.inherit({
      hid: 0,
      tz: 0,
      ts: 0,
      counterId: 0,
      counterType: 0,
      url: "",
      protocol: "",
      enabled: !1,
      _initComponent: function() {
        if (this.isEnabled()) {
          var a = this._getStorage()
          var b = a.read("visorc")
          "b" !== b && "w" !== b && (b = "")
          if (!a.isEnabled() || wa("opera mini")) b = "b"
          this._vc = b
          "b" !== b &&
            (this._recorder = new xb(
              this.protocol,
              this.counterId,
              this.counterType,
              this.hid,
              this.globalConfig
            ))
          qb.superclass._initComponent.apply(this, arguments)
        }
      },
      start: function(a) {
        var b = this._vc
        if (this.isEnabled() && this._recorder) {
          a = a || {}
          a = +a.recp
          if (!isFinite(a) || 0 > a || 1 < a) b = "w"
          b || (b = (this.hid % 1e4) / 1e4 < a ? "w" : "b")
          this._getStorage().create("visorc", b, 30)
          "w" === b ? this._recorder.start() : this._recorder.stop()
        }
      },
      stop: function() {
        this._recorder && this._recorder.stop()
      },
      isEnabled: function() {
        var a = !this.globalConfig.get("oo")
        return this.enabled && a
      },
      getVc: function() {
        return this._vc
      },
      _getStorage: function() {
        this._storage || (this._storage = new F({ counterId: this.counterId }))
        return this._storage
      },
    })
  n.loadScript = function(a, b) {
    b = b || g
    var c = e.mixin(
        { type: "text/javascript", charset: "utf-8", async: !0 },
        a
      ),
      d = b.document,
      f = e.getNativeFunction("createElement", d),
      r = f("script")
    if (r) {
      r.type = c.type
      r.charset = c.charset
      r.src = c.src
      c.async && (r.async = !0)
      try {
        var h = d.getElementsByTagName("head")[0]
        if (!h) {
          var k = d.getElementsByTagName("html")[0]
          h = f("head")
          k && k.appendChild(h)
        }
        h.insertBefore(r, h.firstChild)
        return r
      } catch (C) {}
    }
  }
  ya = Q.inherit({
    id: "script",
    index: 6,
    request: function(a, b, c, d) {
      var f = !1,
        r = e.getNativeFunction("createElement", h)("script")
      this.timeout &&
        e.setTimeout(
          function() {
            f || ((f = !0), n.removeNode(r), c.call(d, !1))
          },
          this.timeout,
          "ts.request"
        )
      if (!r) return (f = !0), c.call(d, !1), !1
      var p = "_ymjsp" + e.random()
      g[p] = u(function() {
        if (!f) {
          try {
            delete g[p]
          } catch (C) {
            g[p] = z
          }
          c.apply(d, e.mergeArrays([!0], arguments))
          f = !0
          n.removeNode(r)
        }
      }, "transport.script")
      r.type = "text/javascript"
      r.src = this._buildUrl(a, e.mixin({ wmode: 5, callback: p }, b))
      r.async = "async"
      var k = h.getElementsByTagName("head")[0]
      k || ((k = h.createElement("head")), h.documentElement.appendChild(k))
      e.async(function() {
        k.insertBefore(r, k.firstChild)
      })
      r.onerror = function() {
        f = !0
        c.call(d, !1)
        g[p] = z
      }
      return !0
    },
  })
  var Ta = W.inherit({
      id: "XHRhit",
      index: 10,
      _buildUrl: function(a, b) {
        b.wmode = 7
        return Ta.superclass._buildUrl.apply(this, [a, b])
      },
      _parseResp: function(a) {
        var b = X.parse(a)
        if (!b) throw ""
        return e.map(function(a) {
          return b[a]
        }, e.keys(b))
      },
    }),
    gb = Ha.inherit({
      transports: [Ta, ya],
      trimParams: !0,
      _initComponent: function() {
        gb.superclass._initComponent.apply(this, arguments)
        this._ilStorage = new O({ counterId: this.counterId })
      },
      postParams: [],
      checkYandexHost: function(a) {
        if (a) {
          a: {
            if (
              (a = e
                .parseUrl(a)
                .host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/))
            )
              if (
                ((a = a[0]
                  .split("yandex")
                  .reverse()[0]
                  .substring(1)),
                -1 != e.arrayIndexOf(Ra, a))
              )
                break a
            a = !1
          }
          a && (this.host = "mc.yandex." + a)
        }
      },
      sendHit: function(a) {
        var b = {},
          c = this._ilStorage.get("il")
        a.visitColor && (b.vc = a.visitColor)
        c &&
          (this._ilStorage.remove("il"),
          (b.ilt = K.encode(Ga.encode(e.trim(c, rb)))))
        this.checkYandexHost(a.referrer)
        this._hitExt(
          {
            url: a.url,
            forceNoRedirect: a.forceNoRedirect,
            nohit: a.nohit,
            hasPrerender: a.hasPrerender,
            title: a.title,
            referrer: a.referrer,
            vParams: a.vParams,
            userParams: a.userParams,
            experiments: a.experiments,
            modes: a.modes,
            browserInfo: b,
            ts: a.ts,
            tz: a.tz,
            callback: a.callback,
            ctx: a.ctx,
          },
          "hit"
        )
      },
    }),
    Ka = E.inherit({
      cid: 3,
      cnt: 0,
      KEY_NAME: "wasSynced",
      _initComponent: function() {
        this._storage = new O()
        this._cookie = new F()
      },
      hit: function(a, b) {
        var c = this,
          d = b === z ? !0 : !1,
          f = d ? this._storage.get(this.KEY_NAME) : !1,
          g = [],
          h = this.globalConfig.get("fakeHit")
        if (h && d)
          return h(function(b) {
            a(b)
          })
        !f && d && (f = this._cookie.read(this.KEY_NAME)) && (f = X.parse(f))
        f && f.params && f.time + 864e5 > q.getMs()
          ? (c.globalConfig.set("isEU", f.params.eu), a(f))
          : (this.globalConfig.set("fakeHit", function(a) {
              g.push(a)
            }),
            this._getSender().sendHit({
              forceNoRedirect: this.forceNoRedirect,
              callback: function(b, d) {
                var k = b || {}
                f = { time: q.getMs(), params: k, bkParams: d }
                c.globalConfig.set("isEU", k.eu)
                c._storage.set(c.KEY_NAME, f)
                c._cookie.create(c.KEY_NAME, X.stringify(f), 1728)
                a(f)
                c.globalConfig.set("fakeHit", function(a) {
                  a(f)
                })
                e.arrayEvery(g, function(a) {
                  a(f)
                  return 1
                })
              },
            }))
      },
      _getSender: function() {
        this._sender ||
          (this._sender = new gb({
            protocol: "https:",
            counterType: this.cnt,
            counterId: this.cid,
            sendTitle: !1,
            globalConfig: this.globalConfig,
            fake: !0,
          }))
        return this._sender
      },
    }),
    sb = E.inherit({
      baseUrl: "mc.yandex.",
      globalConfig: w,
      baseTld: "ru",
      partners: {
        "mc.yandexsport.ru": {
          regex: /^([^/]+\.)?yandexsport\.ru$/,
          tld: "ru",
        },
        "mc.beru.ru": { regex: /^([^/]+\.)?beru\.ru$/, tld: "ru" },
        "mc.kinopoisk.ru": { regex: /^([^/]+\.)?kinopoisk\.ru$/, tld: "ru" },
      },
      _initComponent: function() {
        var a = this
        sb.superclass._initComponent.apply(this, arguments)
        this.syncTlds = e.reduce(
          function(a, c) {
            return c(a)
          },
          Ra,
          [
            e.bind(e.filter, null, function(b) {
              return b !== a.baseTld
            }),
            e.bind(
              e.reduce,
              null,
              function(a, c) {
                a[c] = [c]
                return a
              },
              {}
            ),
          ]
        )
        e.forEachKey(
          this.partners,
          function(a, c) {
            c.regex.test(g.location.hostname) &&
              (this.syncTlds[c.tld] || (this.syncTlds[c.tld] = []),
              this.syncTlds[c.tld].push(a),
              (this._replaceBase[a] = !0))
          },
          this
        )
      },
      _replaceBase: {},
      langToDomain: {
        ka: "ge",
        ro: "md",
        tg: "tj",
        tk: "tm",
        et: "ee",
        hy: "com.am",
        he: "co.li",
        ky: "kg",
        uk: "ua",
        be: "by",
        tr: "com.tr",
        kk: "kz",
      },
      sync: function(a) {
        var b = this,
          c = this._need(),
          d =
            -1 !=
            x().hostname.search(
              /(?:^|\.)(?:ya|yandex(sport)?|beru|kinopoisk)\.(?:\w+|com?\.\w+)$/
            )
        if (m.isIframe()) return a()
        this._is()
          ? a()
          : (d && b._syncAdmetrica(),
            c
              ? (this._setStatus(!0),
                d
                  ? this._getCn().hit(function() {
                      b._sync(c, a)
                    })
                  : a())
              : a())
        d && this._addMda()
      },
      _addMda: function() {
        var a = new F({ skipPrefix: !0 }),
          b = new F(),
          c = a.read("mda")
        "0" !== c && "1" !== c && a.create("mda", "0", 1036800)
        b.read("mda") && b.erase("mda")
      },
      _is: function() {
        try {
          return !!this.globalConfig.get("startSync")
        } catch (a) {
          return !1
        }
      },
      _setStatus: function(a) {
        try {
          this.globalConfig.set("startSync", a)
        } catch (b) {}
      },
      _need: function() {
        var a = this._getDomainByLang(),
          b = this._getTld(),
          c = [],
          d
        ;(d = this.syncTlds[b]) && c.push.apply(c, d)
        d = this.syncTlds[a]
        a !== b && d && c.push.apply(c, d)
        var f = this._getLs().get("synced") || {}
        c = e.arrayFilter(c, function(a) {
          return (f[a] || 1) + 1440 < q.getMinutes()
        })
        return (c.length && c) || !1
      },
      _syncAdmetrica: function() {
        var a = new ra({}),
          b = this._getLs()
        ;((b.get("synced") || {}).SYNCED_ADM || 1) + 1440 < q.getMinutes() &&
          a.request(
            "https://mc.admetrica.ru/sync_cookie_image_check",
            {},
            function(a) {
              b.get("synced")
              var c = q.getMinutes()
              a || (c -= 1435)
              a = b.get("synced") || {}
              a.SYNCED_ADM = c
              b.set("synced", a)
            }
          )
      },
      _sync: function(a, b) {
        var c,
          d = 0,
          f = a.length,
          e = this
        if (0 < f) {
          b = b || function() {}
          var g = function() {
            d++
            f === d && b()
          }
          var k = e._getLs()
          var h = new ra({})
          for (c = 0; c < f; c++)
            (function(a) {
              h.request(
                "https://" +
                  (e._replaceBase[a] ? a : e.baseUrl + a) +
                  "/sync_cookie_image_check",
                {},
                function(b) {
                  g()
                  var c = q.getMinutes()
                  b || (c -= 1435)
                  b = k.get("synced") || {}
                  b[a] = c
                  k.set("synced", b)
                }
              )
            })(a[c])
        } else b()
      },
      _getCn: function() {
        this._cn ||
          (this._cn = new Ka({ fake: !0, globalConfig: this.globalConfig }))
        return this._cn
      },
      _getLs: function() {
        this._ls || (this._ls = new O())
        return this._ls
      },
      _getTld: function() {
        var a = e.getTld()
        return (
          {
            am: "com.am",
            tr: "com.tr",
            ge: "com.ge",
            il: "co.il",
            рф: "ru",
            "xn--p1ai": "ru",
            укр: "ua",
            "xn--j1amh": "ua",
            бел: "by",
            "xn--90ais": "by",
          }[a] || a
        )
      },
      _getDomainByLang: function() {
        if (!g.navigator) return "ru"
        try {
          var a = navigator.languages ? navigator.languages[0] : m.getLanguage()
        } catch (b) {}
        a && a.toLowerCase && (a = a.toLowerCase().split("-")[0])
        return this.langToDomain[a] || "ru"
      },
    }),
    Rb = function(a, b) {
      var c = { s: new O(), k: a, c: b }
      return function(a) {
        return a(c)
      }
    },
    Ua = function(a) {
      a.c._isDestructing = !0
      a.c.destruct ? a.c.destruct() : null
    },
    Sb = function(a, b) {
      0 === parseFloat(a.c_recp) &&
        (Ua(b), b.s.set("ymoo" + b.k, q.getMinutes()))
    },
    Tb = function(a) {
      var b = q.getMinutes(),
        c
      a.s.isEnabled() && (c = a.s.get("ymoo" + a.k)) && 30 > b - c && Ua(a)
    },
    Ub = W.inherit({
      id: "RawBodyXHR",
      index: 9,
      postParams: ["body"],
      _setHeaders: function() {},
      _preparePostParams: function(a) {
        return a.post.body || ""
      },
    })
  m.isAndroid = u(
    function() {
      var a = navigator.userAgent.toLowerCase(),
        b = m.getPlatform() || ""
      return (
        -1 < a.indexOf("android") &&
        -1 < a.indexOf("mobile") &&
        b.match(/^android|linux armv/i)
      )
    },
    "",
    !0
  )
  var La = {
      _url: "https://mc.yandex.ru/user_storage_set?",
      _params: {},
      init: function(a) {
        this._params = a || {}
      },
      save: function(a, b) {
        this._getReq().request(
          this._url + fa.stringify({ key: a, value: e.toJSON(b) })
        )
        this._getLs().set(a, b)
      },
      get: function(a) {
        return { remote: this._params[a], local: this._getLs().get(a) }
      },
      getNum: function(a) {
        a = this.get(a)
        return Math.max(+a.remote || 0, +a.local || 0)
      },
      _getLs: function() {
        this._ls || (this._ls = new O())
        return this._ls
      },
      _getReq: function() {
        this._req || (this._req = new ra())
        return this._req
      },
    },
    Vb = {
      sync: u(function(a, b, c, d) {
        var f = { t: 'UV|L7,!"T[rwe\x26D_\x3eZIb\\aW#98Y.PC6k' }
        this.globalConfig = d || w
        if (this._enabled(a, b, c)) {
          this._setStatus(!0)
          var e = new Ub({ method: "GET", withCredentials: !1 })
          var g = this._getHosts()
          var k = g.length
          ;(function D(a) {
            var b = g[a]
            a < k
              ? e.request(
                  b[0] + ":" + b[1] + "/p",
                  f,
                  function(c, d) {
                    c ? this._save(c, d, b[1]) : D.call(this, a + 1)
                  },
                  this
                )
              : this._save(!1)
          }.call(this, 0))
        }
      }, "ds"),
      _getHosts: function() {
        var a = [],
          b = J.protocol,
          c = m.isIOS()
        ;(m.isAndroid() || (c && "http:" === b)) &&
          a.push(["http://127.0.0.1", "30102"], ["http://127.0.0.1", "29009"])
        c &&
          "https:" === b &&
          a.push(
            ["https://yandexmetrica.com", "30103"],
            ["https://yandexmetrica.com", "29010"]
          )
        return a
      },
      _save: function(a, b, c) {
        var d = q.getMinutes()
        a
          ? new Ha({
              protocol: "https:",
              counterType: 0,
              counterId: 42822899,
              sendTitle: !1,
              fake: !0,
            }).sendDevice({ data: e.trim(b), port: c })
          : (d -= 45)
        La.save("ds", d)
      },
      _is: function() {
        try {
          return !!this.globalConfig.get("dSync")
        } catch (a) {
          return !1
        }
      },
      _enabled: function(a, b, c) {
        if (
          !(60 < q.getMinutes() - La.getNum("ds")) ||
          this._is() ||
          e.isDev(this.globalConfig)
        )
          return !1
        a =
          0 === b &&
          0 <=
            e.arrayIndexOf(
              [
                39370095,
                1282253,
                29302335,
                43653484,
                41734944,
                31048081,
                16443139,
                27737346,
                41870499,
                33911514,
                30744873,
                5564395,
                2580487,
              ],
              a
            )
        a = U() || (!c && 0.1 >= Math.random() && a)
        c = m.isIOS() && a
        return (m.isAndroid() && a) || c
      },
      _setStatus: function(a) {
        try {
          this.globalConfig.set("dSync", a)
        } catch (b) {}
      },
    },
    H = {
      getPos: function(a) {
        var b = n.getRootElement(),
          c = n.getDocumentScroll()
        return [
          a.pageX || a.clientX + c[0] - (b.clientLeft || 0) || 0,
          a.pageY || a.clientY + c[1] - (b.clientTop || 0) || 0,
        ]
      },
      getTarget: function(a) {
        var b = null
        try {
          if ((b = a.target || a.srcElement))
            !b.ownerDocument && b.documentElement
              ? (b = b.documentElement)
              : b.ownerDocument !== h && (b = null)
        } catch (c) {}
        return b
      },
      getMouseButton: function(a) {
        return a.which || a.button == z
          ? a.which
          : a.button & 1
          ? 1
          : a.button & 2
          ? 3
          : a.button & 4
          ? 2
          : 0
      },
      prevent: function(a) {
        a = a || g.event
        a.preventDefault ? a.preventDefault() : (a.returnValue = !1)
      },
    }
  H.dispatchCustomEvent = u(function(a, b) {
    var c
    b = b || h
    if ((c = e.getNativeFunction("createEvent", h)("Event")))
      c.initEvent(a, !1, !1), e.getNativeFunction("dispatchEvent", b)(c)
  }, "evt.dispatch")
  var Sa = { lastReferrer: null },
    ha = E.inherit({
      counter: null,
      prefsEcommerce: null,
      status: { NEW: z, PENDING: 1, OK: 2, FAIL: 3 },
      overrideTimeout: null,
      dataLayerName: "dataLayer",
      _initComponent: function() {
        ha.superclass._initComponent.apply(this, arguments)
        this.frameConnector &&
          this.frameConnector.addHandler(
            "params",
            function(a, b) {
              if (this.counter && this.counter.params)
                this.onCookies(
                  function(a) {
                    this.counter.params(a.data)
                  },
                  this,
                  b
                )
            },
            this
          )
        this._overridePush(this.globalConfig.get("dataLayer"))
      },
      waitPool: [],
      destruct: function() {
        this.frameConnector &&
          this.frameConnector.destruct &&
          (this.frameConnector.destruct(),
          (this._send = function() {}),
          (this.waitPool = []),
          (this.onCookies = function() {}))
        e.clearTimeout(this.overrideTimeout)
      },
      onCookies: function(a, b) {
        this.waitPool.push({ fn: a, ctx: b, args: [].slice.call(arguments, 2) })
      },
      initUserLayer: function() {
        var a = "customArr"
        e.arrayEvery(this.waitPool, function(a) {
          a.fn.apply(a.ctx, a.args)
          return 1
        })
        this.onCookies = function(a, c) {
          a.apply(c, [].slice.call(arguments, 2))
        }
        if (this.prefsEcommerce || this.prefsUseDataLayer)
          this._overridePush(this.prefsEcommerce) ||
            (e.isString(this.prefsEcommerce) &&
              (this.dataLayerName = this.prefsEcommerce),
            (a = this.dataLayerName),
            (this._tryTimeout = e.bind(this._tryTimeout, this)),
            this._tryTimeout()),
            (this.counter._ecommerce = a)
      },
      _overridePush: function(a) {
        if (a && "function" == typeof a.push) {
          var b = this
          b._send(a)
          var c = a.push
          a.push = function() {
            var a = c.apply(this, arguments)
            b._send([].slice.call(arguments, 0))
            return a
          }
          return !0
        }
        return !1
      },
      _tryTimeout: function() {
        this._overridePush(g[this.dataLayerName]) ||
          (this.overrideTimeout = e.setTimeout(
            this._tryTimeout,
            1e3,
            "dlObserver"
          ))
      },
      _callHandlers: function(a) {
        e.arrayEvery(ha.handlers, function(b) {
          b &&
            b.type &&
            e.arrayEvery(b.type.split(","), function(c) {
              c.replace(" ", "") === a.type && b.callback && b.callback(a)
              return 1
            })
          return 1
        })
      },
      allowedEvents: "currencyCode add delete remove purchase checkout detail".split(
        " "
      ),
      _convert: function(a, b) {
        var c = e.keys(b),
          d = !1,
          f = { transaction_id: "id", value: "revenue" }
        if (b.items) {
          var g = {}
          g[a] = { products: b.items }
          1 < c.length &&
            (g[a].actionField = e.reduce(
              function(a, c) {
                f[c]
                  ? (a[f[c]] = b[c])
                  : "currency" === c
                  ? (d = b[c])
                  : "items" !== c && b[c] && (a[c] = b[c])
                return a
              },
              {},
              c
            ))
          d && (g.currencyCode = d)
          return g
        }
      },
      _checkGtag: function(a) {
        var b = {
            view_item: "detail",
            add_to_cart: "add",
            remove_from_cart: "remove",
            begin_checkout: "checkout",
            purchase: "purchase",
          },
          c = []
        a &&
          "event" === a[0] &&
          b[a[1]] &&
          (a = this._convert(b[a[1]], a[2])) &&
          c.push(a)
        return c
      },
      _send: function(a) {
        var b = [],
          c = this.allowedEvents,
          d,
          f
        var h = 0
        for (f = a.length; h < f; h++) {
          if ((d = a[h]) && d.ymetrikaEvent) {
            var p = d.ymetrikaEvent
            this._callHandlers(p)
            if ("params" === p.type && p.data) {
              p.sended || (p.sended = [])
              if (p.counter)
                this.counter &&
                  this.counter.params &&
                  this.counterId == p.counter &&
                  (this.onCookies(
                    function(a) {
                      this.counter.params(a.data)
                    },
                    this,
                    e.mixin({}, p)
                  ),
                  p.sended.push(this.counterId))
              else
                this.onCookies(
                  function(a) {
                    e.forEachKey(
                      this.globalConfig.get("counters"),
                      function(b, c) {
                        var d = b.split(":")[0]
                        !e.inArray(a.sended, d) &&
                          c &&
                          c.params &&
                          (c.params(a.data), a.sended.push(d))
                      },
                      this
                    )
                  },
                  this,
                  e.mixin({}, p)
                )
              p.status == this.status.NEW &&
                p.parent &&
                this.frameConnector &&
                this.frameConnector.checkFrame(g.parent) &&
                g.parent !== g &&
                (this.frameConnector.sendToParents(
                  { type: "params", data: p.data },
                  function() {
                    p.status = this.status.OK
                  },
                  this
                ),
                (p.status = this.status.PENDING))
            }
          }
          if (d && d.ecommerce) {
            var k = {}
            var l = !1
            e.forEachKey(d.ecommerce, function(a, b) {
              0 <= e.arrayIndexOf(c, a) && ((l = !0), (k[a] = b))
            })
            l && b.push(k)
          }
          b = b.concat(this._checkGtag(d))
        }
        if (b.length)
          this.onCookies(
            function(a) {
              this.counter.params({ __ym: { ecommerce: a } })
            },
            this,
            b
          )
      },
    })
  ha.handlers = []
  var Wb = {
    asyncChunk: 400,
    maxDuration: 20,
    restTime: 100,
    asyncBuffer: [],
    timeout: null,
    rest: 0,
    addAsyncItem: function(a, b, c, d, f) {
      var g = this
      this.asyncBuffer.push({
        fn: a,
        ctx: b,
        args: d || [],
        loggerName: f || "",
      })
      c
        ? (clearTimeout(this.timeout), g.flushAsync(!0))
        : q.getMs() - this.rest >= this.restTime && !this.timeout
        ? ((this.rest = q.getMs()), g.flushAsync())
        : this.timeout ||
          (this.timeout = e.setTimeout(function() {
            g.rest = q.getMs()
            g.flushAsync()
            g.timeout = !1
          }, this.restTime))
    },
    chain: function(a, b, c, d) {
      var f = this
      a.push = function(a) {
        throw 'Try to push in Executor when it started "' + a + '"'
      }
      ;(function t(b, c, e) {
        f.addAsyncItem(
          function(b, c, d) {
            c = a[b++](c)
            b <= a.length - 1 && t(b, c, d)
          },
          null,
          e,
          [b, c],
          d + "." + b
        )
      })(0, b, c)
    },
    callByTimeout: function(a, b) {
      for (
        var c = q.getMs(), d = 0, f, g = (b || 0) + 1, h = 0, k = this;
        this.asyncBuffer.length;

      )
        if (
          ((f = this.asyncBuffer.shift()),
          (h += 1),
          !f.isExecuted &&
            (u(function() {
              f.fn.apply(f.ctx, f.args)
            }, "AsyncExecutor." + f.loggerName)(),
            (d = q.getMs() - c),
            (f.isExecuted = !0),
            !a && (h >= this.asyncChunk || d >= this.maxDuration)))
        ) {
          e.setTimeout(function() {
            k.callByTimeout(a, g)
          }, this.restTime)
          break
        }
    },
    flushAsync: function(a) {
      this.asyncBuffer.length && this.callByTimeout(a)
    },
  }
  fa.parse = function(a, b) {
    var c = {},
      d
    a = (a && a.replace(/^\?/, "")) || ""
    if (a.length) {
      var f = a.split("\x26")
      for (d = 0; d < f.length; d++)
        if (f[d]) {
          var g = f[d].split("\x3d")
          if (g[0]) {
            var h = e.safeDecodeURIComponent(g[0])
            g = e.safeDecodeURIComponent((g[1] || "").replace(/\+/g, "%20"))
            b && h in c
              ? e.isArray(c[h])
                ? c[h].push(g)
                : (c[h] = [c[h], g])
              : (c[h] = g)
          }
        }
    }
    return c
  }
  var tb = "GDPR-ok GDPR-cross GDPR-cancel GDPR-skip GDPR-frame-skip GDPR-frame-ya GDPR-frame-noya GDPR-open-start GDPR-eu-skip GDPR-open-fail GDPR-open-success GDPR-cookie-success GDPR-cookie-fail GDPR-skip-login GDPR-skip-domain GDPR-skip-na GDPR-skip-eu-na GDPR-skip-wv GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(
      " "
    ),
    Xb = [
      "https://brozen.yandex.ru",
      "https://yabro1.zen-test.yandex.ru/yabro/index.html",
      "https://yabro2.zen-test.yandex.ru/yabro/index.html",
    ],
    ca = E.inherit({
      globalKey: "f1",
      MAX_SIZE: 1e6,
      isYAN: !1,
      trigger: function(a) {
        this.globalConfig.get("dataLayer").push({ ymetrikaEvent: { type: a } })
      },
      initCounter: function() {},
      enabled: U() && -1 < g.location.href.indexOf("yagdprcheck\x3d1"),
      _initComponent: function() {
        this._cookie = ca.cookie
        this._sender = new Ka({
          fake: !0,
          globalConfig: this.globalConfig,
          forceNoRedirect: !0,
        })
      },
      realise: function(a, b) {
        this.initCounter.apply(g, a)
        this.globalConfig.set(this.globalKey, function(a) {
          a()
        })
        b.length &&
          Wb.chain(
            b.concat([
              function() {
                b = []
              },
            ]),
            null,
            !1,
            "GDPR"
          )
      },
      accept: function(a, b, c) {
        c.create("gdpr", "0", 525600)
        this.realise(a, b)
        this.frameConnector.sendToChildren({ type: "GDPR-ok" })
      },
      showPopup: function(a, b, c, d, f) {
        var g = this,
          h = "",
          k = "",
          l = []
        h = "https://yastatic.net/q/global-notifications/cc/_lego-cc" + a + "."
        k = "21"
        l = "ru en kk be ky tr tt uk".split(" ")
        e.inArray(l, b) || (b = "en")
        h
          ? ((a = n.loadScript({ src: h + b + ".js" })),
            g.trigger("GDPR-open-start"),
            (a.onerror = function(a) {
              u(function() {
                throw a
              }, "gdpr-popup")()
              g.trigger("GDPR-open-fail")
              g.realise(c, d)
              g.frameConnector.sendToChildren({ type: "GDPR-ok" })
            }),
            (a.onload = function() {
              g.trigger("GDPR-open-success")
              g.trigger(k)
              ha.handlers = ha.handlers.concat([
                {
                  type: "GDPR-ok, GDPR-cross",
                  callback: function(a) {
                    a.once || (g.accept(c, d, f), (a.once = !0))
                  },
                },
                {
                  type: "GDPR-cancel",
                  callback: function() {
                    f.create("gdpr", "1")
                    g.logCancel()
                    g.frameConnector.sendToChildren({ type: "GDPR-cancel" })
                  },
                },
              ])
            }))
          : (g.trigger("GDPR-open-success"), g.trigger(k), g.accept(c, d, f))
      },
      askGDPR: function(a, b, c, d, f, g) {
        if (e.inArray([null, ""], a)) this.showPopup(b, c, d, f, g)
        else if ("0" === a)
          this.trigger("GDPR-cookie-success"), this.realise(d, f)
        else if ("1" === a)
          return this.trigger("GDPR-cookie-fail"), this.logCancel(), !1
      },
      logCancel: function() {
        this._sender.hit(function() {}, !1)
      },
      handle: function() {
        var a = this._sender,
          b = [],
          c = (m.getLanguage() || "").toLowerCase().split("-")[0],
          d = "ontouchstart" in g ? "-touch" : "",
          f = this._cookie,
          h = f.read("gdpr"),
          l = f.read("yaGdprCheck"),
          k = this,
          n = this.globalConfig.get(this.globalKey),
          t = arguments
        b.size = 0
        if (n)
          return n(function() {
            k.realise(t, b)
          })
        if (
          !this.enabled &&
          ("0" === h ||
            m.isSafariWebView() ||
            m.isAndroidWebView() ||
            e.inArray(Xb, g.location.href.split("?")[0]) ||
            !U() ||
            f.read("yandex_login") ||
            this.disable)
        )
          return (
            f.read("yandex_login")
              ? (this.trigger("GDPR-skip-login"), f.create("gdpr", "0", 525600))
              : U()
              ? "0" === h
                ? this.trigger("GDPR-skip")
                : m.isSafariWebView() || m.isAndroidWebView()
                ? this.trigger("GDPR-skip-wv")
                : this.trigger("GDPR-skip-na")
              : this.trigger("GDPR-skip-domain"),
            this.realise(t, b)
          )
        this.globalConfig.set(this.globalKey, function(a, c) {
          var d = 0
          try {
            d = JSON.stringify(c).length || 0
          } catch (Aa) {}
          b.size + d < k.MAX_SIZE
            ? (b.push(a), (b.size += d))
            : e.warning("GDPR buffer is exceeded")
        })
        a.hit(function(a) {
          if (a.params.eu || l || k.enabled)
            if (
              (k.frameConnector &&
                k.frameConnector.addHandler("isYandex", function() {
                  return { type: "isYandex", isYandex: U() }
                }),
              k.frameConnector.isIframe)
            ) {
              k.frameConnector.sendToParents({ type: "isYandex" }, function(
                a,
                c
              ) {
                var d = !1
                clearTimeout(g)
                c[0].isYandex
                  ? (k.trigger("GDPR-frame-ya"),
                    k.frameConnector.addHandler("GDPR-ok", function() {
                      d ||
                        (f.create("gdpr", "0", 525600),
                        k.realise(c, b),
                        (d = !0))
                    }),
                    k.frameConnector.addHandler("GDPR-cancel", function() {
                      f.create("gdpr", "1")
                    }))
                  : (k.trigger("GDPR-frame-noya"), k.realise(c, b))
              })
              var g = e.setTimeout(function() {
                k.trigger("GDPR-frame-skip")
                k.realise(t, b)
              }, 2e3)
            } else k.askGDPR(h, d, c, t, b, f)
          else
            return (
              a.params.eu
                ? k.trigger("GDPR-skip-eu-na")
                : (f.create("gdpr", "0"), k.trigger("GDPR-eu-skip")),
              k.realise(t, b)
            )
        })
      },
    })
  ca.globalKey = "f1"
  ca.cookie = new F({ skipPrefix: !0 })
  ca.getState = function(a) {
    var b = ca.cookie.read("gdpr")
    a = e.reduce(
      function(a, b) {
        b.ymetrikaEvent &&
          e.inArray(tb, b.ymetrikaEvent.type) &&
          a.push(e.arrayIndexOf(tb, b.ymetrikaEvent.type))
        return a
      },
      [],
      a.get("dataLayer")
    )
    return a.length
      ? ((a = a.join(",")),
        b && (a += "-" + (e.inArray(["0", "1"], b) ? b : "2")),
        a)
      : ""
  }
  var Yb = {
    init: function(a, b, c) {
      "22663942" == c &&
        ((c = h.createElement("img")),
        a &&
          a.account &&
          a.tmsec &&
          b &&
          (c.src =
            "https://www.tns-counter.ru/V13a****" +
            a.account +
            "/ru/UTF-8/tmsec\x3d" +
            a.tmsec +
            "/" +
            b))
    },
  }
  m.isIE = e.memorize(function() {
    return (h && !h.addEventListener) || !1
  })
  m.isChromePdf = e.memorize(function() {
    var a,
      b = navigator.plugins
    if (b && b.length)
      for (a = 0; a < b.length; a++)
        if (/Chrome PDF Viewer/.test(b[a].name)) return !0
    return !1
  })
  m.isPrivate = u(function(a) {
    var b = e.bind(a, null, 0)
    a = e.bind(a, null, 1)
    if (e.isFunction(g.webkitRequestFileSystem) && !m.isAndroid())
      return g.webkitRequestFileSystem(0, 0, b, a)
    if (m.isFF())
      return "undefined" == typeof navigator.serviceWorker ? a() : b()
    if (m.isSafari() && e.isFunction(g.openDatabase))
      try {
        g.openDatabase(null, null, null, null), b()
      } catch (c) {
        a()
      }
    else {
      if (g.indexedDB || (!g.PointerEvent && !g.MSPointerEvent)) return b()
      a()
    }
  }, "isPrivate")
  m.findTarget = function(a) {
    a = a.target || a.srcElement
    var b
    if (!a) return !1
    3 == a.nodeType && (a = a.parentNode)
    for (
      b = a && a.nodeName && a.nodeName.toString().toLowerCase();
      a &&
      a.parentNode &&
      a.parentNode.nodeName &&
      (("a" !== b && "area" !== b) || (!a.href && !a["xlink:href"]));

    )
      b =
        (a = a.parentNode) && a.nodeName && a.nodeName.toString().toLowerCase()
    return a.href ? a : !1
  }
  m.getHref = function(a) {
    if (!a) return ""
    a = a.href
    return e.isString(a)
      ? "" + a
      : "[object SVGAnimatedString]" === e.toString(a)
      ? "" + a.baseVal
      : ""
  }
  m.getLinkComponents = function(a) {
    return a && "A" === a.nodeName
      ? {
          href: a.href,
          hostname: a.hostname || e.parseUrl(a.href).hostname || "",
          host: a.host,
          protocol: a.protocol,
          pathname: a.pathname,
          hash: a.hash,
          port: a.port,
          search: a.search,
          query: a.search.slice(Math.min(1, a.search.length)),
          path: (a.pathname || "/") + a.search,
        }
      : e.isString(a)
      ? e.parseUrl(a)
      : {
          href: "",
          hostname: "",
          host: "",
          protocol: "",
          pathname: "",
          hash: "",
          port: "",
          search: "",
          query: "",
          path: "",
        }
  }
  var R = {}
  R._cookie = new F({ onlyCurrentDomain: !0 })
  R._check = u(function() {
    return (
      -1 < g.location.href.indexOf("_ym_debug\x3d1") ||
      g._ym_debug ||
      "1" === R._cookie.read("debug")
    )
  })
  R.enabled = R._check()
  R.log = u(function() {
    ;(-1 < J.href.indexOf("_ym_debug\x3d1") || g._ym_debug) &&
      this._cookie.create("debug", "1")
    g.console &&
      console.log &&
      this._check() &&
      ((R.enabled = !0), console.log.apply(console, arguments))
  }, "DebugConsole.log")
  var Zb = L.inherit({
      resource: "clmap",
      retry: !0,
      transports: [ra],
      sendClick: function(a, b, c, d) {
        this.send({ "page-url": a, "pointer-click": b }, {}, c, d)
      },
    }),
    $b = E.inherit({
      filter: null,
      ignoreTags: [],
      quota: 0,
      isTrackHash: !1,
      protocol: "",
      counterId: 0,
      counterType: 0,
      startTime: 0,
      MAX_LEN_PATH: 128,
      TIMEOUT_CLICK: 50,
      TIMEOUT_SAME_CLICKS: 1e3,
      DELTA_SAME_CLICKS: 2,
      tags: "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(
        " "
      ),
      _initComponent: function() {
        var a, b
        this._lastClick = null
        this.hasQuota = !!this.quota
        this._quota = this.quota
        this._ignoreTags = []
        if (this.ignoreTags)
          for (a = 0; a < this.ignoreTags.length; a++)
            this.ignoreTags[a] &&
              e.mergeArrays(this._ignoreTags, [
                String(this.ignoreTags[a]).toUpperCase(),
              ])
        this._cacheTags = {}
        a = 59
        var c = String.fromCharCode
        for (b = 0; b < this.tags.length; b++)
          (this._cacheTags[this.tags[b]] = c(a)), c(a), a++
        this._sender = new Zb({
          globalConfig: this.globalConfig,
          protocol: this.protocol,
          counterId: this.counterId,
          counterType: this.counterType,
        })
        this._start = !1
        this.start()
      },
      destroy: function() {
        this.stop()
      },
      start: function() {
        if (!this._start) l.on(h, "click", this._handler, this)
        this._start = !0
      },
      stop: function() {
        this._start && l.un(h, "click", this._handler, this)
        this._start = !1
      },
      setTrackHash: function(a) {
        this.isTrackHash = a
      },
      _isIgnore: function(a) {
        return n.classNameExists(a, "(ym-disable-clickmap|ym-clickmap-ignore)")
      },
      _handler: function(a) {
        a = {
          el: H.getTarget(a),
          pos: H.getPos(a),
          button: H.getMouseButton(a),
          time: +new Date(),
        }
        if (this._isTrackingClick(a)) {
          var b = n.getElementSize(a.el)
          var c = n.getElementXY(a.el)
          b = [
            "rn",
            e.random(),
            "x",
            Math.floor((65535 * (a.pos[0] - c[0])) / (b[0] || 1)),
            "y",
            Math.floor((65535 * (a.pos[1] - c[1])) / (b[1] || 1)),
            "t",
            Math.floor((a.time - this.startTime) / 100),
            "p",
            this._getElPath(a.el),
            "X",
            a.pos[0],
            "Y",
            a.pos[1],
          ]
          c = x().href
          this.isTrackHash
            ? e.mergeArrays(b, ["wh", "1"])
            : (c = c.split("#")[0])
          this._sender.sendClick(e.trim(c, Ia), b.join(":"))
          this._lastClick = a
        }
      },
      _isTrackingClick: function(a) {
        var b
        if (g.ymDisabledClickmap || e.isMetrikaPlayer() || !a.el) return !1
        var c = a.el.tagName
        if (
          ((2 == a.button || 3 == a.button) && "A" != c) ||
          (this.filter && !this.filter(a.el, c))
        )
          return !1
        for (b = 0; b < this._ignoreTags.length; b++)
          if (this._ignoreTags[b] == c) return !1
        for (c = a.el; c; ) {
          if (this._isIgnore(c)) return !1
          c = c.parentNode
        }
        if (this._lastClick) {
          if (a.time - this._lastClick.time < this.TIMEOUT_CLICK) return !1
          c = Math.abs(this._lastClick.pos[0] - a.pos[0])
          b = Math.abs(this._lastClick.pos[1] - a.pos[1])
          var d = a.time - this._lastClick.time
          if (
            this._lastClick.el == a.el &&
            c < this.DELTA_SAME_CLICKS &&
            b < this.DELTA_SAME_CLICKS &&
            d < this.TIMEOUT_SAME_CLICKS
          )
            return !1
        }
        if (this.hasQuota) {
          if (!this._quota) return !1
          this._quota--
        }
        return !0
      },
      _getElPath: function(a) {
        for (
          var b = "";
          a && a.parentNode && "BODY" != a.tagName && "HTML" != a.tagName;

        )
          (b += this._cacheTags[a.tagName] || "*"),
            (b += n.getElementNeighborPosition(a) || ""),
            (a = a.parentNode)
        return e.trim(b, this.MAX_LEN_PATH)
      },
    }),
    ub = E.inherit({
      injectHash: {
        Wjw75ghm7fa7JW8p:
          "https://yastatic.net/metrika-static-watch/assessor-init.js",
        Z4RhWJNDJanzkGJa:
          "https://yastatic.net/metrika-static-watch/assessor-compare.js",
      },
      ASSESSOR_COOKIE: "assessor",
      REMOTE_CONTROL: "i",
      getInjectHash: function() {
        var a = {}
        e.forEachKey(
          this.injectHash,
          function(b) {
            a[sa + ("" + e.fnv32a(b))] = this.injectHash[b]
          },
          this
        )
        return a
      },
      checkAssessor: function() {
        var a = [],
          b = this.getInjectHash()
        e.forEachKey(
          b,
          function(c) {
            if (
              new RegExp(c).test(g.location.hash) ||
              F.get(this.ASSESSOR_COOKIE + c)
            )
              F.set(this.ASSESSOR_COOKIE + c), a.push(b[c])
          },
          this
        )
        return a
      },
      _initComponent: function() {
        var a = this.checkAssessor()
        this.globalConfig.get(this.REMOTE_CONTROL) ||
          (this.globalConfig.set(this.REMOTE_CONTROL, !0),
          ub.superclass._initComponent.apply(this, arguments),
          (this._executedMsgs = {}),
          l.on(g, "message", this._onMessage, this),
          a.length &&
            (this.globalConfig.set("oo", !0),
            this.globalConfig.get("stopRecoder", function() {})(),
            e.arrayEvery(a, function(a) {
              n.loadScript({ src: a }, g)
              return 1
            })))
      },
      _buildRemoteIframe: function(a) {
        var b = e.getNativeFunction("createElement", h)("div"),
          c = n.getBody() || h.documentElement
        if (c) {
          b.innerHTML =
            '\x3ciframe name\x3d"RemoteIframe" allowtransparency\x3d"true" style\x3d"position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"\x3e\x3c/iframe\x3e'
          var d = b.firstChild
          d.onload = function() {
            n.loadScript({ src: a }, d.contentWindow)
          }
          g._ym__remoteIframeEl = d
          b.createShadowRoot || b.webkitCreateShadowRoot
            ? (c.appendChild(b),
              b.removeChild(d),
              (c = b.createShadowRoot
                ? b.createShadowRoot()
                : b.webkitCreateShadowRoot()) && c.appendChild(d),
              (g._ym__remoteIframeContainer = b))
            : (c.appendChild(d), (g._ym__remoteIframeContainer = d))
        }
      },
      _isAllowedLang: function(a) {
        return -1 !== e.arrayIndexOf("ru uk en tr es de".split(" "), a)
      },
      _isAllowedOrigin: function(a) {
        return /^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/.test(a)
      },
      _isAllowedStatic: function(a) {
        return /^(([\w\-.]+\.)?dev\.metrika\.yandex\.ru|internal-metrika-betas\.s3\.mds\.yandex\.net|yastatic\.net)$/.test(
          a
        )
      },
      _onMessage: function(a) {
        try {
          var b = a.origin
        } catch (c) {}
        b &&
          this._isAllowedOrigin(b) &&
          (b = X.parse(a.data)) &&
          "appendremote" === b.action &&
          this._isAllowedStatic(e.parseUrl(b.domain).host) &&
          this._isAllowedLang(b.lang) &&
          !this._executedMsgs[b.id] &&
          ((this._executedMsgs[b.id] = !0),
          (g._ym__postMessageEvent = a),
          (g._ym__inpageMode = b.inpageMode),
          (g._ym__initMessage = b.initMessage),
          this._buildRemoteIframe(
            b.domain +
              "/cdn/inpage-remote/" +
              (b.newScriptAddr ? "_inpage-remote_" : "inpage-remote.") +
              b.lang +
              ".js"
          ))
      },
    }),
    ac = {
      match: function() {
        this.enabled() &&
          l.ready(function() {
            var a = e.getNativeFunction("createElement", h)("iframe")
            a.onload = function() {
              La.save("cm", q.getMinutes())
              n.removeNode(a)
            }
            a.style.display = "none"
            a.src = "https://mc.yandex.ru/metrika/watch_match.html"
            h.documentElement.appendChild(a)
          })
      },
      enabled: function() {
        return 1440 < q.getMinutes() - La.getNum("cm") && "tr" === e.getTld()
      },
    }
  u(
    function() {
      ;(function(a) {
        function b(d) {
          if (c[d]) return c[d].exports
          var f = (c[d] = { i: d, l: !1, exports: {} })
          a[d].call(f.exports, f, f.exports, b)
          f.l = !0
          return f.exports
        }
        var c = {}
        b.m = a
        b.c = c
        b.d = function(a, c, e) {
          b.o(a, c) ||
            Object.defineProperty(a, c, {
              configurable: !1,
              enumerable: !0,
              get: e,
            })
        }
        b.n = function(a) {
          var c =
            a && a.__esModule
              ? function() {
                  return a["default"]
                }
              : function() {
                  return a
                }
          b.d(c, "a", c)
          return c
        }
        b.o = function(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b)
        }
        b.p = ""
        return b((b.s = 3))
      })({
        0: function(a, b, c) {
          b.__esModule = !0
          b.listToArray = function(a) {
            return a ? [].slice.call(a) : []
          }
        },
        1: function(a, b, c) {
          b.__esModule = !0
          var d = [".googlesyndication.com/", "/googleads"]
          b.isGoogleSrc = function(a) {
            return !(
              !a ||
              !d.filter(function(b) {
                return 0 < a.indexOf(b)
              }).length
            )
          }
        },
        3: function(a, b, c) {
          b.__esModule = !0
          a = { detectAd: c(4).detectAd }
          g.Ya
            ? g.Ya.AdDetector
              ? (a = g.Ya.AdDetector)
              : (g.Ya.AdDetector = a)
            : (g.Ya = { AdDetector: a })
          b.AdDetector = a
        },
        34: function(a, b, c) {
          b.__esModule = !0
          b.getParentElementsCount = function(a) {
            for (var b = 0; ; )
              if ((a = a.parentElement)) b++
              else return b
          }
        },
        4: function(a, b, c) {
          b.__esModule = !0
          var d = c(5),
            f = c(9),
            e = c(34),
            l = c(6),
            k = h.body,
            m = h.documentElement
          b.detectAd = function() {
            var a = g.pageYOffset || m.scrollTop || k.scrollTop,
              b = g.pageXOffset || m.scrollLeft || k.scrollLeft,
              c = m.clientTop || k.clientTop || 0,
              h = m.clientLeft || k.clientLeft || 0,
              p = m.scrollWidth || m.offsetWidth || g.innerWidth,
              r = m.scrollHeight || m.offsetHeight || g.innerHeight,
              n = l.getFrienlyWindowsTree(g),
              q = []
            l.windowsTreeEach(n, function(a) {
              var b = a.window,
                c = a.parent,
                e =
                  0 <
                  d.getParentFriendlyIFrames(b.document.documentElement).length,
                g = f.getAdsInWindow(b, { isInIFrame: e })
              e = g.adElements
              g = g.iframeProviders
              if (c) {
                var h = b.frameElement,
                  k = q.filter(function(a) {
                    return a.windowsTree === c
                  })[0].adElements
                g.forEach(function(a) {
                  k.push({ provider: a, element: h })
                })
              }
              q.push({ windowsTree: a, adElements: e })
            })
            q.forEach(function(a) {
              a.adElements = a.adElements.sort(function(a, b) {
                return (
                  e.getParentElementsCount(a.element) -
                  e.getParentElementsCount(b.element)
                )
              })
            })
            var w = [],
              ja = []
            q.forEach(function(a) {
              var b = a.windowsTree,
                c = b.parent
              a = a.adElements
              b = d.getParentFriendlyIFrames(b.window.document.documentElement)
              var f = b[b.length - 1]
              a.forEach(function(a) {
                var b = a.element
                ja.push({ provider: a.provider, element: c ? f : b })
              })
            })
            ja.forEach(function(d) {
              var f = d.element
              var e = f.getBoundingClientRect()
              var g = e.top + a - c
              e = e.left + b - h
              var k = f.clientWidth
              f = f.clientHeight
              var l = e + k,
                m = g + f,
                n = 0 > e ? 0 : e < p ? e : p,
                t = 0 > g ? 0 : g < r ? g : r
              100 <=
                ((l > p ? p : l > n ? l : n) - n) *
                  ((m > r ? r : m > t ? m : t) - t) &&
                w.push({
                  top: g,
                  left: e,
                  width: k,
                  height: f,
                  provider: d.provider,
                })
            })
            return {
              page: { width: p, height: r },
              window: {
                top: a,
                left: b,
                width: g.innerWidth,
                height: g.innerHeight,
              },
              ads: w,
            }
          }
        },
        5: function(a, b, c) {
          b.__esModule = !0
          b.getParentFriendlyIFrames = function(a) {
            for (var b = []; ; )
              try {
                if ((a = a.ownerDocument.defaultView.frameElement)) b.push(a)
                else return b
              } catch (r) {
                return b
              }
          }
        },
        6: function(a, b, c) {
          function d(a) {
            return h
              .listToArray(a.document.getElementsByTagName("iframe"))
              .filter(function(a) {
                if (g.isSafari) return !1
                try {
                  return a.contentWindow.document
                } catch (D) {
                  return !1
                }
              })
              .map(function(a) {
                return a.contentWindow
              })
          }
          function f(a, b) {
            var c = { window: a, children: [], parent: b }
            c.children = d(a).map(function(a) {
              return f(a, c)
            })
            return c
          }
          function e(a, b) {
            b(a)
            a.children.forEach(function(a) {
              return e(a, b)
            })
          }
          b.__esModule = !0
          var g = c(7),
            h = c(0)
          b.getFrienlyWindowsTree = f
          b.windowsTreeEach = e
        },
        7: function(a, b, c) {
          b.__esModule = !0
          a = c(8)
          b.isSafari = a.isSafari()
        },
        8: function(a, b, c) {
          b.__esModule = !0
          b.isSafari = function() {
            var a = navigator.userAgent.toLowerCase()
            return (
              -1 !== a.indexOf("safari") &&
              -1 === a.indexOf("chrome") &&
              -1 === a.indexOf("android")
            )
          }
        },
        9: function(a, b, c) {
          b.__esModule = !0
          var d = c(0),
            f = c(1)
          b.getAdsInWindow = function(a, b) {
            function c(a, b) {
              b.forEach(function(b) {
                r.push({ provider: a, element: b })
              })
            }
            var e = b.isInIFrame,
              g = a.document.body,
              h = d.listToArray(g.querySelectorAll("img")),
              l = d.listToArray(g.querySelectorAll("iframe")),
              p = d.listToArray(g.querySelectorAll("script")),
              m = d.listToArray(g.querySelectorAll("div")),
              r = [],
              n = [],
              q = d.listToArray(g.querySelectorAll("yatag")),
              w = d.listToArray(g.querySelectorAll("yatag yatag"))
            c(
              "yandex",
              q.filter(function(a) {
                return -1 === w.indexOf(a)
              })
            )
            c(
              "adriver",
              l.filter(function(a) {
                return (a = a.src) && -1 < a.indexOf(".adriver.ru/")
              })
            )
            c(
              "adfox",
              l.filter(function(a) {
                return (a = a.id) && -1 < a.toLowerCase().indexOf("adfox")
              })
            )
            c(
              "adfox",
              h.filter(function(a) {
                return (a = a.src) && -1 < a.indexOf("/banners.adfox.ru/")
              })
            )
            c(
              "adfox",
              m.filter(function(a) {
                return -1 < a.id.indexOf("AdFox_banner_")
              })
            )
            e &&
              h.filter(function(a) {
                return (a = a.src) && -1 < a.indexOf(".adfox.ru/")
              }).length &&
              n.push("adfox")
            l.filter(function(a) {
              return f.isGoogleSrc(a.src)
            }).forEach(function(a) {
              r.push({ provider: "google", element: a })
            })
            e &&
              p.filter(function(a) {
                return f.isGoogleSrc(a.src)
              }).length &&
              n.push("google")
            c(
              "awaps",
              l.filter(function(a) {
                return (a = a.src) && -1 < a.indexOf("awaps.yandex.net/")
              })
            )
            c(
              "criteo",
              l.filter(function(a) {
                var b = a.src
                a = a.id
                return b &&
                  (-1 < b.indexOf(".criteo.com/") ||
                    (a && -1 < a.indexOf("cto_iframe_")))
                  ? !0
                  : !1
              })
            )
            return { adElements: r, iframeProviders: n }
          }
        },
      })
    },
    "",
    !0
  )()
  var bc = {
      init: function(a, b) {
        if (Math.random() < (b || 0.005) && !w.get("adDetect")) {
          w.set("adDetect", !0)
          var c = function(b) {
            var c = g.Ya.AdDetector.detectAd()
            var d = c.window
            var f = c.page
            a.sendParams({
              __ym: {
                ads: {
                  w: { t: d.top, l: d.left, w: d.width, h: d.height },
                  p: { w: f.width, h: f.height },
                  a: e.map(function(a) {
                    return {
                      t: a.top,
                      l: a.left,
                      w: a.width,
                      h: a.height,
                      p: a.provider,
                    }
                  }, c.ads),
                  full: b ? 1 : 0,
                },
              },
            })
          }
          var d = u(
            function() {
              l.un(g, "load", d)
              c(!0)
            },
            "",
            !0
          )
          l.on(g, "load", d)
          e.setTimeout(c, 1e4, "AdDetector", !0)
        }
      },
    },
    vb = E.inherit({
      message: g.postMessage,
      spliter: ":",
      nameSpace: "__yminfo",
      pending: {},
      childs: {},
      isIframe: !1,
      parents: {},
      dataToSend: { parents: [], childs: [] },
      checkFrame: function(a) {
        try {
          var b = a && a.postMessage
        } catch (c) {
          return !1
        }
        return b
      },
      checkChildrenData: function(a, b) {
        e.arrayEvery(
          this.dataToSend.childs,
          function(c) {
            ;-1 == e.arrayIndexOf(c.tryTo, b.counterId) &&
              (c.tryTo.push(b.counterId),
              e.mixin(c.data, { toCounter: b.counterId }),
              this.sendToIframe(a, c.data, function() {
                c.sendedTo.push(b.counterId)
                c.callback && c.callback(b, arguments)
              }))
            return !0
          },
          this
        )
      },
      checkParentData: function(a, b) {
        e.arrayEvery(
          this.dataToSend.parents,
          function(c) {
            ;-1 == e.arrayIndexOf(c.tryTo, b.counterId) &&
              (c.tryTo.push(b.counterId),
              e.mixin(c.data, { toCounter: b.counterId }),
              this.sendToIframe(a, c.data, function() {
                c.sendedTo.push(b.counterId)
                c.callback && c.callback(b, arguments)
              }))
            return !0
          },
          this
        )
      },
      getHandlers: function() {
        return {
          initToChild: [
            {
              fn: function(a, b) {
                a.source === g.top && this.trigger("parentConnect", a, b)
              },
            },
          ],
          initToParent: [
            {
              fn: function(a, b) {
                this.childs[b.counterId] = { info: b, window: a.source }
                this.checkChildrenData(a.source, b)
              },
            },
          ],
          parentConnect: [
            {
              fn: function(a, b) {
                this.parents[b.counterId] = { info: b, window: a.source }
                this.checkParentData(a.source, b)
              },
            },
          ],
        }
      },
      genMessage: function(a, b) {
        var c = { date: q.getMs(), key: Math.random(), dir: 0 }
        b && (c = { date: b[0], key: b[1], dir: b[2] })
        e.mixin(a, { counterId: this.counterId, hid: this.hid })
        var d = { data: a }
        d[this.nameSpace] = [this.nameSpace, c.date, c.key, c.dir].join(
          this.spliter
        )
        return { meta: c, string: X.stringify(d) }
      },
      sendToIframe: function(a, b, c, d) {
        b = this.genMessage(b)
        var f = this,
          g = [b.meta.date, b.meta.key].join(this.spliter)
        this.checkFrame(a) &&
          (a.postMessage(b.string, "*"),
          (this.pending[g] = e.bind(c, d || this)),
          e.setTimeout(
            function() {
              delete f.pending[g]
            },
            5e3,
            this,
            "fc.toSendToIframe"
          ))
      },
      sendToChildren: function(a, b, c) {
        var d = this,
          f =
            this.dataToSend.childs.push({
              sendedTo: [],
              tryTo: [],
              callback: b ? e.bind(b, c || this) : !1,
              data: a,
            }) - 1
        e.forEachKey(
          this.childs,
          function(a) {
            this.dataToSend.childs[f].tryTo.push(a)
            return 1
          },
          this
        )
        e.keys(this.childs).length &&
          e.forEachKey(
            this.childs,
            function(b) {
              this.sendToIframe(
                d.childs[b].window,
                e.mixin(a, { toCounter: b }),
                function(a) {
                  this.dataToSend.childs[f].sendedTo.push(b)
                  this.dataToSend.childs[f].callback &&
                    this.dataToSend.childs[f].callback(a)
                },
                this
              )
            },
            this
          )
      },
      sendToParents: function(a, b, c) {
        var d =
          this.dataToSend.parents.push({
            sendedTo: [],
            tryTo: [],
            callback: b ? e.bind(b, c || this) : !1,
            data: a,
          }) - 1
        e.forEachKey(
          this.parents,
          function(a) {
            this.dataToSend.parents[d].tryTo.push(a)
            return 1
          },
          this
        )
        e.keys(this.parents).length &&
          this.sendToIframe(
            g.parent,
            a,
            function(a) {
              e.forEachKey(
                this.parents,
                function(b) {
                  this.dataToSend.parents[d].sendedTo.push(b)
                  this.dataToSend.parents[d].callback &&
                    this.dataToSend.parents[d].callback(a)
                },
                this
              )
            },
            this
          )
      },
      addHandler: function(a, b, c) {
        this.handlers[a] || (this.handlers[a] = [])
        this.handlers[a].push({ fn: b, ctx: c })
      },
      destruct: function() {
        l.un(g, "message", this.onMessage, this, {
          passive: !1,
          name: "FrameConnector",
        })
        this.sendToIframe = function() {}
        this.parents = []
        this.pending = {}
        this.childs = {}
        this.dataToSend = { parents: [], childs: [] }
      },
      _initComponent: function() {
        var a = g.document.getElementsByTagName("iframe"),
          b = 0
        vb.superclass._initComponent.apply(this, arguments)
        this.handlers = e.mixin({}, this.getHandlers())
        this.isIframe = m.isIframe()
        if (this.message) {
          for (b = 0; b < a.length; b++) {
            var c = a[b]
            ;(function(a, b) {
              a.sendToIframe(b.contentWindow, { type: "initToChild" }, function(
                c
              ) {
                a.childs[c.counterId] = { info: c, window: b.contentWindow }
              })
            })(this, c)
          }
          this.isIframe &&
            this.sendToIframe(g.parent, { type: "initToParent" }, function(a) {
              this.trigger("parentConnect", { source: g.parent }, a)
            })
          l.on(g, "message", this.onMessage, this, {
            passive: !1,
            name: "FrameConnector",
          })
        }
      },
      trigger: function(a, b, c) {
        var d = this
        return e.map(function(a) {
          a = a.fn.call(a.ctx || d, b, c) || {}
          return e.mixin(a, { counterId: d.counterId, hid: d.hid })
        }, this.handlers[a])
      },
      DIR_INDEX: 2,
      onMessage: function(a) {
        var b,
          c = []
        try {
          var d = a.data
          d = X.parse(a.data)
          var f = d[this.nameSpace]
        } catch (p) {
          return
        }
        if (
          f &&
          f.substring &&
          f.substring(0, this.nameSpace.length) == this.nameSpace
        ) {
          for (b = 0; 3 >= b; b++) {
            var g = e.arrayIndexOf(f, this.spliter)
            ;-1 !== g ? c.push(f.substring(0, g)) : c.push(f)
            f = f.substring(g + 1)
          }
          b = c.splice(1, 3)
          if (
            (d = d.data) &&
            d.type &&
            this.handlers[d.type] &&
            "0" === b[this.DIR_INDEX]
          ) {
            if (!d.toCounter || d.toCounter == this.counterId) {
              try {
                a.source
              } catch (p) {
                return
              }
              d.counterId &&
                this.checkFrame(a.source) &&
                ((g = this.trigger(d.type, a, d)),
                a.source.postMessage(
                  this.genMessage(g, [b[0], b[1], d.counterId]).string,
                  "*"
                ))
            }
          } else
            b[this.DIR_INDEX] == this.counterId &&
              e.isArray(d) &&
              e.arrayEvery(d, function(a) {
                return a.counterId && a.hid
              }) &&
              (a = this.pending[[b[0], b[1]].join(this.spliter)]) &&
              a.apply(this, d)
        }
      },
    }),
    J = x(),
    db = q.getTimezone(),
    eb = q.getTimestamp(),
    ea = g.screen,
    Ob = 64,
    Ia = m.isIE() ? 512 : 2048,
    Pb = m.isIE() ? 512 : 2048,
    Ja = m.isIE() ? 100 : 400,
    rb = 100,
    fb = "noindex",
    wb = /\.(3gp|7z|aac|ac3|acs|ai|avi|ape|apk|asf|bmp|bz2|cab|cdr|crc32|css|csv|cue|divx|dmg|djvu?|doc(x|m|b)?|emf|eps|exe|flac?|flv|iso|swf|gif|t?gz|jpe?g?|js|m3u8?|m4a|mp(3|4|e?g?)|m4v|md5|mkv|mov|msi|ods|og(g|m|v)|psd|rar|rss|rtf|sea|sfv|sit|sha1|svg|tar|tif?f|torrent|ts|txt|vob|wave?|wma|wmv|wmf|webm|ppt(x|m|b)?|xls(x|m|b)?|pdf|phps|png|xpi|g?zip)$/i,
    cc = new ia({ sampling: 0.01 }),
    dc = +new Date(),
    hb,
    Va,
    sa = (function() {
      return "1902"
    })()
  w.init()
    .setSafe("counters", {})
    .setSafe("hitParam", {})
    .setSafe("counterNum", 0)
    .setSafe("dataLayer", [])
    .setSafe("hitId", e.random(1, 1073741824))
    .setSafe("_globalMetrikaHitId", e.random())
    .setSafe("v", sa)
  Y.globalConfig = w
  g.Ya.Metrika = function(a, b, c, d) {
    var f = this
    return u(function() {
      function r(a) {
        var b = h.referrer || "",
          c,
          d
        if (new RegExp("^https?://" + J.host + "/").test(b)) return !1
        var f = a.patterns
        for (c = 0; c < f.length; c++) {
          var g = new RegExp(f[c], "i")
          if (b.match(g))
            if (((g = a.params || []), g.length)) {
              var k = e.safeDecodeURIComponent(
                (RegExp.$1 || "").replace(/\+/g, "%20")
              )
              for (d = 0; d < g.length; d++)
                if (k == e.safeDecodeURIComponent(g[d])) return !0
            } else return !0
        }
        return !1
      }
      function p(a, b) {
        var c = !1,
          d
        if (a && "string" != typeof a && a.length)
          for (d = 0; d < a.length; d++) {
            var e = a[d].selector
            var f = a[d].text
            var g = e.charAt(0)
            e = e.slice(1)
            if ("#" == g) {
              if ((g = h.getElementById(e)))
                (c = !0), b && Ca.unshift([g, g.innerHTML]), (g.innerHTML = f)
            } else if ("." == g)
              for (g = n.getElementsByClassName(e), e = 0; e < g.length; e++) {
                c = !0
                var k = g[e],
                  l = f
                b && Ca.unshift([k, k.innerHTML])
                k.innerHTML = l
              }
          }
        return c
      }
      function k() {
        var a
        for (a = 0; a < Ca.length; a++) Ca[a][0].innerHTML = Ca[a][1]
      }
      function C(a, b) {
        var c,
          d = ""
        a = a && a.replace(/^\?/, "")
        b = (b && b.replace(/^#/, "")) || ""
        if (a) {
          var f = a.split("\x26")
          for (c = 0; c < f.length; c++) {
            var g = f[c].split("\x3d")
            "_openstat" === g[0] && (d = g[1])
          }
        }
        var h = b.split("?")
        for (c = 0; c < h.length; c++) {
          var k = h[c].split("\x26")
          for (f = 0; f < k.length; f++)
            (g = k[f].split("\x3d")), "_openstat" === g[0] && (d = g[1])
        }
        d &&
          (d =
            -1 < d.indexOf(";")
              ? e.safeDecodeURIComponent(d)
              : Ga.decode(
                  K.decode(
                    d.replace(/[-*_]/g, function(a) {
                      return { "*": "+", "-": "/", _: "\x3d" }[a] || a
                    })
                  )
                ))
        return d && ((c = d.split(";")), 4 == c.length)
          ? { service: c[0], campaign: c[1], ad: c[2], source: c[3] }
          : null
      }
      function t(b, c, d) {
        return u(function() {
          if (!f.isDestructing())
            return (
              d && cc.log("privateFields", c, a, 1), b.apply(this, arguments)
            )
        }, c || "")
      }
      function D() {
        var I = !1,
          v = !1
        Ra || ((v = L.initCookie(M)), (Y.userInfo = L._userID), pb.init(w))
        Y.initPU(ka, w)
        m.isAndroidWebView() || Y.initPP(w)
        L.retransmit(w)
        za && Yb.init(za, aa, a)
        w.get("pri") != z ||
          m.isAndroidWebView() ||
          (w.setSafe("pri", null),
          m.isPrivate(
            u(function(a) {
              w.set("pri", a)
            }, "privCb")
          ))
        if (w.get("hitParam")[T]) {
          if (1 != c || w.get("counters")[T]) return !1
          I = !0
        }
        w.get("counters")[T] = f
        w.get("hitParam")[T] = 1
        e.async(
          function() {
            Y.initFip(w)
          },
          this,
          "initFip"
        )
        f._webvisor = y.webvisor || !1
        f._directCampaign = y.directCampaign
        y.trackHash && ja(!0)
        if (!I) {
          G = new qb({
            protocol: "https:",
            globalConfig: w,
            counterId: a,
            counterType: c,
            hid: aa,
            tz: db,
            ts: eb,
            url: J.href,
            enabled: f._webvisor,
            trustedDomains: y.trustedDomains,
            childIframe: y.childIframe,
          })
          f.replacePhones()
          I = new sb({ globalConfig: w })
          var q = function(I) {
            var q = new gb({
                protocol: "https:",
                counterType: c,
                counterId: a,
                trackHash: ba,
                hitId: aa,
                webvisor: f._webvisor,
                counter: f,
                globalConfig: w,
                counterNum: Fa,
              }),
              t = {
                ut: Na,
                re: v,
                he: ~~y.httpError,
                ad: 1 == c && g.Ya && g.Ya.Direct,
                pv: !0,
                cpf: m.isChromePdf(),
                saveRef: !0,
              }
            hb = +new Date()
            q.sendHit({
              url: B,
              referrer: da,
              title: n.getDocumentTitle(),
              vParams: b,
              userParams: Ia,
              nohit: d,
              experiments: Pa,
              modes: t,
              visitColor: G.getVc(),
              hasPrerender: Ba,
              ts: eb,
              tz: db,
              callback: function(v, m) {
                Va || (Va = +new Date())
                d || (Ba = !1)
                v = v || {}
                var n = "0" !== v.pcs
                Ja(e.bind(Sb, null, v))
                n || Y.initZZ()
                v.eu !== z && w.set("isEU", v.eu)
                La.init(m)
                ac.match()
                Vb.sync(a, c, n, w)
                d ||
                  R.log(
                    "PageView. Counter ",
                    a,
                    ". URL: ",
                    J.href,
                    ". Referrer: " + h.referrer,
                    ". Params: ",
                    b
                  )
                v.webvisor && (v.webvisor.isEU = w.get("isEU"))
                if (!f.isDestructing()) {
                  G.start(v.webvisor, v.publisher)
                  var q = v.mp2
                  n = new F({ counterId: a })
                  n.erase("mp2_substs")
                  if (q) {
                    b: {
                      var t = q.conditions
                      var V
                      if (t && t.length)
                        for (V = 0; V < t.length; V++) {
                          var P = t[V]
                          if ("ref" == P.type) P = r(P)
                          else if ("adv" == P.type) {
                            var u
                            var x = P
                            var y = g.Ya._metrika.counter._directCampaign
                            var S = x.ServiceNamePattern
                            var pa = x.RefererPattern
                            P = y ? x.direct_orders : x.direct_camp
                            var E = h.referrer,
                              D = fa.parse(J.search),
                              B = C(J.search, J.hash),
                              Z = {}
                            var A = [
                              "source",
                              "medium",
                              "campaign",
                              "term",
                              "content",
                            ]
                            for (u = 0; u < A.length; u++)
                              D["utm_" + A[u]] && (Z[A[u]] = D["utm_" + A[u]])
                            var H = y
                              ? "direct.yandex.ru"
                              : (B && B.service) || Z.source
                            u = !1
                            if (!u && S && S.length)
                              for (A = 0; A < S.length; A++)
                                if (new RegExp(S[A], "i").test(H)) {
                                  u = !0
                                  break
                                }
                            if (!u && !x.yandex_direct && pa && pa.length)
                              for (S = 0; S < pa.length; S++)
                                if (new RegExp(pa[S], "i").test(E)) {
                                  u = !0
                                  break
                                }
                            !u && x.google_adwords && D.gclid && (u = !0)
                            if (
                              u &&
                              P &&
                              P.length &&
                              ((u = !1),
                              (y = y || (B && B.campaign) || (Z && Z.campaign)))
                            )
                              for (x = 0; x < P.length; x++)
                                if (P[x] == y) {
                                  u = !0
                                  break
                                }
                            P = u
                          } else P = !1
                          if (P) {
                            t[V].track_id &&
                              n.create("mp2_track", t[V].track_id, 43200)
                            break b
                          }
                        }
                    }
                    t = n.read("mp2_track")
                    q = q.substs && q.substs[t]
                    t && q
                      ? (n.create("mp2_substs", e.toJSON(q)),
                        (n = p(q)),
                        f.params(
                          "__ym",
                          n ? "mp_trackid" : "mp_trackid_bad",
                          t
                        ))
                      : k()
                  } else k()
                  l.on(g, "load", f.replacePhones, f)
                }
                f._inited = !0
                I && I()
              },
            })
          }
          I.sync(q)
        }
        Q(!1)
        l.on(h, "click", W, null, { name: "extLinkClick" })
        0 != e.keys(y).length &&
          (la && la.initUserLayer(),
          y.enableAll
            ? (Q(!0), U(!0), ea())
            : (y.clickmap && U(y.clickmap),
              y.trackLinks && Q(y.trackLinks),
              y.accurateTrackBounce && ea(y.accurateTrackBounce)),
          y.triggerEvent &&
            e.async(
              function() {
                H.dispatchCustomEvent("yacounter" + a + "inited")
              },
              this,
              "yacounterInit"
            ))
      }
      function E(a) {
        var b = new ca({
          frameConnector: ka,
          globalConfig: w,
          initCounter: D,
          disable: y.yaDisableGDPR,
        })
        f._isDestructing || ((Ba = a), b.handle.apply(b, arguments))
      }
      function Q(a) {
        var b = {}
        switch (typeof a) {
          case "string":
            b.on = !0
            break
          case "object":
            b.on = !0
            break
          case "boolean":
            b.on = a
            break
          default:
            return
        }
        f._trackLinks = b
      }
      function W(a) {
        if (f._trackLinks && f._trackLinks.on) {
          a = m.findTarget(a)
          var b = m.getLinkComponents(a),
            c = b.href,
            d = w.get("pai", e.noop)()
          if (c && !n.classNameExists(a, "ym-disable-tracklink")) {
            var g = b.protocol + "//" + b.hostname + b.pathname
            d = { pai: d && d + "-" + aa, ln: !0 }
            var h = mb(a)
            h = c === h ? "" : h
            if (n.classNameExists(a, "ym-external-link"))
              N.sendClickLink({ url: c, title: h, modes: d }, B)
            else {
              var k = y.url ? e.parseUrl(B).hostname : x().hostname
              d.dl = wb.test(g) || wb.test(c) || nb(c, ma) || nb(g, ma)
              b = b.hostname
              ;(k ? k.replace(/^www\./, "") : "").toLowerCase() ==
              (b ? b.replace(/^www\./, "") : "").toLowerCase()
                ? d.dl
                  ? ((d.ln = !1),
                    N.sendClickLink({ url: c, title: h, modes: d }, B))
                  : ((h = mb(a)),
                    Ka.set("pai", d.pai),
                    h && h !== c && Ka.set("il", e.trim(h, rb)))
                : (c && -1 !== c.search(/^ *(data|javascript):/i)) ||
                  ((d.ut = fb),
                  N.sendClickLink({ url: c, title: h, modes: d }, B))
            }
          }
        }
      }
      function U(b) {
        "undefined" === typeof b && (b = !0)
        !0 === b && (b = {})
        f._clickmap && f._clickmap.destroy()
        b &&
          (f._clickmap = new $b({
            globalConfig: w,
            filter: b.filter,
            ignoreTags: b.ignoreTags,
            quota: b.quota,
            isTrackHash: b.isTrackHash,
            protocol: "https:",
            counterId: a,
            counterType: c,
            startTime: dc,
          }))
      }
      function ra(a, b) {
        function c() {
          if (!I) {
            r && e.clearTimeout(r)
            var c = p ? n : n + +new Date() - q
            c = b - c
            0 > c && (c = 0)
            r = e.setTimeout(
              function() {
                I = !0
                f(!1)
                a()
              },
              c,
              "trackUserTime"
            )
          }
        }
        function d() {
          v || ((k = !0), (p = !1), (v = !0), c())
        }
        function f(a) {
          var b
          for (b = 0; b < t.length; b += 3)
            if (a) l.on(t[b], t[b + 1], t[b + 2], { name: "tabTrack" })
            else l.un(t[b], t[b + 1], t[b + 2])
        }
        var k = !1,
          v = !1,
          p = !0,
          n = 0,
          q = +new Date(),
          r = null,
          I = !1
        if (m.isIE()) e.setTimeout(a, b, "trackUserTime")
        else {
          var t = [
            g,
            "blur",
            function() {
              p = k = v = !0
              n += +new Date() - q
              q = +new Date()
              c()
            },
            g,
            "focus",
            function() {
              k || v || (n = 0)
              q = +new Date()
              k = v = !0
              p = !1
              c()
            },
            h,
            "click",
            d,
            h,
            "mousemove",
            d,
            h,
            "keydown",
            d,
            h,
            "scroll",
            d,
          ]
          f(!0)
          c()
        }
      }
      function ea(b) {
        var c = y.referrer ? da : h.referrer,
          d = y.url ? B : x().href
        "number" !== typeof b && (b = 15e3)
        if (!f._isAccurateTrackBounce) {
          f._isAccurateTrackBounce = !0
          var e = new O({ counterId: a })
          var g = e.get("lastHit")
          e.set("lastHit", q.getMs())
          ;(((e = e.get("lastHit")) && (!g || g < e - 18e5)) ||
            !Fb(c, d) ||
            0.1 > Math.random()) &&
            ra(function() {
              f.notBounce()
              Ta.init(0.002, ya)
            }, b)
        }
      }
      function sa(a) {
        var b = function() {
          var a = x().hash.split("#")[1]
          if ("undefined" == typeof a) return !1
          var b = a.indexOf("?")
          0 < b && (a = a.substring(0, b))
          return a
        }
        var c = b()
        ;(function S() {
          var d = b()
          d !== c && (a(), (c = d))
          va = e.setTimeout(S, 200, "trackHash")
        })()
      }
      function ja(a) {
        if (!1 === a)
          ba &&
            ("onhashchange" in g
              ? l.un(g, "hashchange", qa)
              : e.clearTimeout(va),
            (ba = !1))
        else if (((a = qa), !ba)) {
          if ("onhashchange" in g) l.on(g, "hashchange", a)
          else sa(a)
          ba = !0
        }
        N.setTrackHash(ba)
        f._trackHash = ba
      }
      function qa() {
        var a = {
          ut: Na,
          ad: 1 == c && g.Ya && g.Ya.Direct,
          wh: !0,
          saveRef: !0,
          pv: !0,
        }
        wa = Sa.lastReferrer = xa
        N.sendAjaxHit({
          url: y.url ? B : x().href,
          title: n.getDocumentTitle(),
          referrer: wa,
          modes: a,
        })
        xa = x().href
      }
      function ua(a, b, c) {
        a = na.parseValidate(a, b)
        b = []
        a &&
          (b.push(a),
          (c = c || {}),
          e.isFunction(c.callback) &&
            (b.push(c.callback), c.ctx && b.push(c.ctx)))
        b.length && f.params.apply(f, b)
      }
      var Na = "",
        y = {},
        wa = "",
        xa = (Sa.lastReferrer = J.href),
        ya = 0.002,
        Ba = !1,
        G
      w.setSafe("counter", f)
      Qa &&
        u(function() {
          throw Qa.error
        }, "include." + Qa.scope)()
      if ("object" === typeof a) {
        y = a
        d = a.defer
        Na = a.ut
        var M = a.ldc || "uid"
        c = a.type
        b = a.params
        var Ia = a.userParams
        var za = a.tns
        var Pa = y.experiments
        var Ra = y.nck
        var B = a.url
        var da = a.referrer
        a = a.id
      }
      if (!g["disableYaCounter" + a]) {
        var Ca = []
        B = B ? B : x().href
        da = da ? da : h.referrer
        a = a || 0
        ;/^\d+$/.test(a) || (a = 0)
        c = c || 0
        var T = a + ":" + c
        if (w.get("counters")[T])
          return (
            R.log("Duplicate counter " + T + " initialization"),
            w.get("counters")[T]
          )
        var aa = w.get("hitId")
        var ka = new vb({ counterId: a, hid: aa })
        w.set("counterNum", w.get("counterNum") + 1)
        var Fa = w.get("counterNum")
        var Ja = Rb(T, f)
        Ja(Tb)
        var N = new Ha({
          protocol: "https:",
          counterType: c,
          counterId: a,
          hitId: aa,
          counter: f,
          globalConfig: w,
          counterNum: Fa,
        })
        var Ta = {
          init: function(a, b) {
            if (
              g.performance &&
              "function" === typeof performance.getEntriesByType
            ) {
              a === z && (a = 1)
              b === z && (b = 1)
              var c = Math.random() > a,
                d = Math.random() > b
              if (!c || !d) {
                var f = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1,
                  },
                  h = performance.getEntriesByType("resource"),
                  k = {},
                  l = {},
                  m = { counterId: 51533966 },
                  p = {},
                  v
                for (v = 0; v < h.length; v++) {
                  var n = h[v]
                  var q = n.name.replace(/^https?:\/\//, "").split("?")[0]
                  var r = e.fnv32a(q)
                  "script" !== n.initiatorType ||
                    c ||
                    (l[q] = {
                      dns: Math.round(n.domainLookupEnd - n.domainLookupStart),
                      tcp: Math.round(n.connectEnd - n.connectStart),
                      duration: Math.round(n.duration),
                      response: Math.round(n.responseEnd - n.requestStart),
                      name: n.name,
                      decodedBodySize: n.decodedBodySize,
                    })
                  !f[r] ||
                    k[q] ||
                    d ||
                    (k[q] = {
                      dns: Math.round(n.domainLookupEnd - n.domainLookupStart),
                      tcp: Math.round(n.connectEnd - n.connectStart),
                      duration: Math.round(n.duration),
                      response: Math.round(n.responseEnd - n.requestStart),
                      pages: J.href,
                    })
                }
                e.keys(k).length && (p.timings8 = k)
                e.keys(l).length && (p.scripts = l)
                e.keys(p).length && new ia(m).logParams(p)
              }
            }
          },
        }
        24226447 == a && (ya = 1)
        f.replacePhones = t(function() {
          var b, c
          try {
            ;(b = new F({ counterId: a }).read("mp2_substs")) &&
              (c = X.parse(b)) &&
              p(c, !0)
          } catch (V) {}
          return f
        }, "counter.replacePhones")
        f.reachGoal = t(function(b, c, d, e) {
          2 <= arguments.length &&
            "function" === typeof c &&
            ((e = d), (d = c), (c = z))
          R.log(
            "Reach goal. Counter: " + a + ". Goal id: " + b + ". Params: ",
            c
          )
          N.sendGoal(b, {
            url: y.url ? B : x().href,
            vParams: c,
            callback: d,
            ctx: e,
          })
          return f
        }, "counter.reachGoal")
        f.trackLinks = t(function(a) {
          Q(a)
          return f
        }, "counter.trackLinks")
        var Ka = new O({ counterId: a })
        f.hit = t(function(b, c, d, g, h, k) {
          ;(b = b && e.isFunction(b.toString) ? b.toString() : !1)
            ? (e.isObject(c) &&
                ((d = c.referer),
                (g = c.params),
                (h = c.callback),
                (k = c.ctx),
                (c = c.title)),
              (B = b),
              R.log(
                "PageView. Counter " + a,
                ". URL: " + b,
                ". Referrer: " + d,
                ". Params: ",
                g
              ),
              N.sendHit({
                url: b,
                title: c,
                hasPrerender: Ba,
                referrer: d,
                vParams: g,
                callback: h,
                ctx: k,
              }),
              (Ba = !1))
            : e.warning("Empty hit url")
          return f
        }, "counter.hit")
        f.params = t(function(b) {
          var c = arguments.length,
            d = c,
            g = [].slice.call(arguments, 0)
          if (b) {
            if (1 < arguments.length) {
              if (e.isFunction(arguments[c - 1])) {
                var h = arguments[c - 1]
                d = c - 1
              } else if (e.isFunction(arguments[c - 2])) {
                h = arguments[c - 2]
                var k = arguments[c - 1]
                d = c - 2
              }
              g = [].slice.call(g, 0, d)
              1 < g.length && (g = [e.array2Props(g)])
            }
            c = -1 !== e.arrayIndexOf(e.keys(g[0]), "__ymu")
            ;(d =
              -1 !== e.arrayIndexOf(e.keys(g[0]), "__ym") && g[0].__ym.user_id)
              ? R.log('Set user id "' + g[0].__ym.user_id + '"')
              : R.log(
                  (c ? "User p" : "P") + "arams. Counter " + a + ". Params: ",
                  g[0]
                )
            N.sendParams(g[0], h, k, y.url ? B : x().href)
          } else e.warning("Wrong params")
          return f
        }, "counter.params")
        ka.addHandler(
          "pluginInfo",
          function() {
            return y
          },
          this
        )
        ka.addHandler(
          "parentConnect",
          function(a, b) {
            N.paramsQueue.push({
              __ym: { parentIframe: { counterId: b.counterId, hid: b.hid } },
            })
          },
          this
        )
        f.file = t(function(a, b) {
          a
            ? ((b = b || {}),
              N.sendFileUpload({
                url: a,
                title: b.title,
                vParams: b.params,
                callback: b.callback,
                ctx: b.ctx,
                referrer: y.url ? B : x().href,
              }))
            : e.warning("Empty file url")
          return f
        }, "counter.file")
        f.extLink = t(function(a, b) {
          a
            ? ((b = b || {}),
              N.sendExtLink(
                {
                  url: a,
                  title: b.title,
                  vParams: b.params,
                  callback: b.callback,
                  ctx: b.ctx,
                  referrer: y.url ? B : x().href,
                },
                B
              ))
            : e.warning("Empty link")
          return f
        }, "counter.extLink")
        f.notBounce = t(function(a) {
          var b = 0
          a = a || {}
          hb && Va && (b = Va - hb)
          N.sendNotBounce(b, {
            url: y.url ? B : x().href,
            callback: a.callback,
            ctx: a.ctx,
          })
          return f
        }, "counter.notBounce")
        var ma = []
        f.addFileExtension = t(function(a) {
          if (!a) return e.warning("Empty extension"), f
          "string" === typeof a ? ma.push(a) : (ma = ma.concat(a))
          return f
        })
        f.clickmap = t(function(a) {
          U(a)
          return f
        }, "that.clickmap")
        f.accurateTrackBounce = t(function(a) {
          ea(a)
          return f
        })
        var va = null
        var ba = !1
        f.trackHash = t(function(a) {
          ja(a)
          return f
        })
        var na = {
          requiredEcommerceFields: ["currency", "goods"],
          parseValidate: function(a, b) {
            var c = this.validate(a, b),
              d
            if (!c.isValid) return console && console.log(c.message), !1
            c = {}
            c[a] = {}
            b.currency && (c.currencyCode = b.currency)
            b.goods && (c[a].products = b.goods)
            for (d in b)
              b.hasOwnProperty(d) &&
                -1 === e.arrayIndexOf(this.requiredEcommerceFields, d) &&
                (c[a].actionField || (c[a].actionField = {}),
                (c[a].actionField[d] = b[d]))
            return { __ym: { ecommerce: [c] } }
          },
          validate: function(a, b) {
            var c = !1,
              d = ""
            if (e.isObject(b))
              switch (a) {
                case "detail":
                case "add":
                case "remove":
                  e.isArray(b.goods) && b.goods.length
                    ? (c = e.arrayEvery(b.goods, function(a) {
                        return (
                          e.isObject(a) &&
                          (e.isString(a.id) ||
                            e.isNumber(a.id) ||
                            e.isString(a.name) ||
                            e.isString(a.name))
                        )
                      })) ||
                      (d =
                        "All items in 'goods' should be objects and contain 'id' or 'name' field")
                    : (d =
                        "Ecommerce data should contain 'goods' non-empty array")
                  break
                case "purchase":
                  e.isNumber(b.id) || e.isString(b.id)
                    ? (c = !0)
                    : (d =
                        "Purchase object should contain string or number 'id' field")
              }
            else d = "Ecommerce data should be an object"
            return { isValid: c, message: d }
          },
        }
        f.ecommerceDetail = t(
          function(a, b) {
            ua("detail", a, b)
            return f
          },
          "ecommerce.detail",
          !0
        )
        f.ecommerceAdd = t(
          function(a, b) {
            ua("add", a, b)
            return f
          },
          "ecommerce.add",
          !0
        )
        f.ecommerceRemove = t(
          function(a, b) {
            ua("remove", a, b)
            return f
          },
          "ecommerce.remove",
          !0
        )
        f.ecommercePurchase = t(
          function(a, b) {
            ua("purchase", a, b)
            return f
          },
          "ecommerce.purchase",
          !0
        )
        f.userParams = t(function(a, b, c) {
          e.isObject(a)
            ? f.params({ __ymu: a }, b || function() {}, c)
            : e.warning("Wrong user params")
          return f
        }, "uparams")
        f.experiments = t(function(a, b, c) {
          N.sendExperiments({ callback: b, ctx: c, experiments: a })
          return f
        }, "exps")
        f.id = f.setUserID = t(function(a, b, c) {
          e.isString(a) || e.isNumber(a)
            ? f.params({ __ym: { user_id: a } }, b || function() {}, c)
            : e.warning("Incorrect user ID")
          return f
        }, "id")
        var Ua = new F()
        f.getClientID = t(function(a) {
          var b = Ua.read(M)
          a && e.isFunction(a) && a(b)
          return b
        }, "guid")
        f.enableAll = t(
          function() {
            Q(!0)
            U(!0)
            ea()
            return f
          },
          "enableAll",
          !0
        )
        f.uploadPage = t(function() {}, "uploadPage", !0)
        f.destruct = t(function() {
          f._isDestructing = !0
          l.un(h, "click", W, null, { name: "extLinkClick" })
          l.un(g, "load", f.replacePhones, f)
          ja(!1)
          G && G.stop()
          w.set("stopRecoder", z)
          w.set("counter", z)
          la && la.destruct && la.destruct()
          U(!1)
          try {
            delete g["yaCounter" + a],
              delete w.get("counters")[T],
              delete w.get("hitParam")[T]
          } catch (I) {}
        })
        f.isDestructing = function() {
          return !!f._isDestructing
        }
        bc.init(N)
        f._performanceTiming = ob
        if (a) {
          var la = new ha({
            counter: f,
            counterId: a,
            globalConfig: w,
            frameConnector: ka,
            prefsEcommerce: y.ecommerce,
            prefsUseDataLayer: y.useDataLayer,
          })
          if (
            "prerender" === h.webkitVisibilityState ||
            "prerender" === h.visibilityState
          ) {
            N.sendPrerenderHit({
              url: B,
              vParams: b,
              title: n.getDocumentTitle(),
              referrer: h.referrer,
            })
            var oa = function() {
              "prerender" !== h.webkitVisibilityState &&
                "prerender" !== h.visibilityState &&
                (l.un(h, "webkitvisibilitychange,visibilitychange", oa), E(!0))
            }
            l.on(h, "webkitvisibilitychange,visibilitychange", oa)
          } else E(!1)
        }
      }
    }, "init")()
  }
  new ub({ globalConfig: w })
  g.Ya.Metrika.counters = function() {
    var a = []
    e.forEachKey(w.get("counters"), function(b, c) {
      var d = b.split(":")
      a.push({
        id: +d[0],
        type: +d[1],
        accurateTrackBounce: c._isAccurateTrackBounce,
        clickmap: c._clickmap && c._clickmap._start,
        oldCode: !!g.ya_cid,
        trackHash: !!c._trackHash,
        trackLinks: c._trackLinks && c._trackLinks.on,
        webvisor: !!c._webvisor,
      })
    })
    return a
  }
  w.setSafe("getCounters", function() {
    var a = []
    e.forEachKey(w.get("counters"), function(b, c) {
      var d = b.split(":")
      a.push({
        id: +d[0],
        type: +d[1],
        accurateTrackBounce: c._isAccurateTrackBounce,
        clickmap: c._clickmap && c._clickmap._start,
        oldCode: !!g.ya_cid,
        trackHash: !!c._trackHash,
        trackLinks: c._trackLinks && c._trackLinks.on,
        webvisor: !!c._webvisor,
      })
    })
    return a
  })
  g.ya_cid &&
    g.Ya.Metrika &&
    new g.Ya.Metrika(g.ya_cid, g.ya_params, g.ya_class)
  g.ya_cid &&
    !g.ya_hit &&
    (g.ya_hit = function(a, b) {
      g.Ya._metrika.counter && g.Ya._metrika.counter.reachGoal(a, b)
    })
  ;(function() {
    function a(a) {
      try {
        delete g[a]
      } catch (p) {
        g[a] = z
      }
    }
    var b = g.yandex_metrika_callback,
      c = g.yandex_metrika_callbacks,
      d
    "function" == typeof b && b()
    if ("object" == typeof c) {
      var e = c.length
      for (b = 0; b < e; b++) if ((d = c[b])) (c[b] = null), d()
    }
    a("yandex_metrika_callback")
    a("yandex_metrika_callbacks")
  })()
  g.Ya.Metrika.informer = function(a) {
    var b = !!g.Ya.Metrika._informer
    Ya.Metrika._informer = a
    Ya.Metrika._informer.domain = "informer.yandex.ru"
    b || n.loadScript({ src: "https://informer.yandex.ru/metrika/informer.js" })
  }
  l.on(
    h,
    "click",
    u(function(a) {
      var b = H.getTarget(a)
      if (
        b &&
        ("ym-advanced-informer" === b.className ||
          (b.classList && b.classList.contains("ym-advanced-informer")))
      ) {
        var c = b.getAttribute("data-lang")
        var d = b.getAttribute("data-cid")
        g.Ya.Metrika.informer({ i: b, id: +d, lang: c })
        H.prevent(a)
      }
    }, "adv-inf"),
    null,
    { passive: !1 }
  )
})(this, this.document)
