/* Copyright (c) 2008-2020, Quantcast Corp. */
!(function(window) {
  function RequireDependencyError(n) {
    Error.apply(this),
      (this.name = "RequireDependencyError"),
      (this.message = n || "")
  }
  RequireDependencyError.prototype = Error.prototype
  var amd = {},
    definitions = {}
  amd.require = function(n, e) {
    "function" == typeof n && ((e = n), (n = []))
    for (var t = [], r = 0; r < n.length; r++) {
      var a = n[r]
      if (!definitions.hasOwnProperty(a))
        throw new RequireDependencyError(
          "No module named " + a + " has been defined"
        )
      t[r] = definitions[a]
    }
    return e.apply({}, t)
  }
  var array = Array.prototype,
    available = function(n, e) {
      return "function" == typeof n[e]
    },
    map = "map",
    forEach = "forEach",
    reduce = "reduce",
    indexOf = "indexOf"
  with ((available(array, map) ||
    (array[map] = function(n, e) {
      var t = []
      e || (e = this)
      for (var r = 0; r < this.length; r++) t[r] = n.call(e, this[r], r, this)
      return t
    }),
  available(array, forEach) || (array[forEach] = array[map]),
  available(array, reduce) ||
    (array[reduce] = function(n, e) {
      var t = 0
      for (void 0 === e && (e = this[t++]); t < this.length; t++)
        e = n.call(this, e, this[t], t, this)
      return e
    }),
  available(array, indexOf) ||
    (array[indexOf] = function(n) {
      for (var e = 0; e < this.length; e++) if (this[e] == n) return e
      return -1
    }),
  (amd.define = function(n, e, t) {
    definitions.hasOwnProperty(n) || (definitions[n] = amd.require(e, t))
  }),
  amd))
    define("quant/origin", [], function() {
      return function(n) {
        for (
          var e = n.domain || "",
            t = new Date(0).toUTCString(),
            r = e.split("."),
            a = 1;
          a <= r.length;
          a++
        ) {
          var i = r.slice(-a).join("."),
            o = "_dlt=1; domain=" + i
          if (((n.cookie = o), /_dlt=1/.test(n.cookie)))
            return (n.cookie = o + "; expires=" + t), i
        }
        return e
      }
    }),
      define("quant/windows", [], function() {
        return function(n, e) {
          if (void 0 === n) throw new Error("window many not be undefined")
          if (void 0 === e) throw new Error("top may not be undefined")
          ;(e = e.self), (this.depth = 0)
          var t = n.self
          for (this.top = t; t !== e; ) {
            t = t.parent.self
            try {
              t.location.href && ((this.url = t.location.href), (this.top = t))
            } catch (n) {}
            this.depth++
          }
          this.locate = function(t) {
            for (var r = n; ; ) {
              try {
                if (t in r.frames) return r
              } catch (n) {}
              if (r === e) break
              r = r.parent.self
            }
          }
        }
      }),
      define("quant/log", [], function() {
        function n(n, e) {
          this.isDebug = /qcdbgc=1$/.test(window.location.toString())
          var t = function() {
              return new Date().toString()
            },
            r = function(r, a) {
              "undefined" != typeof console &&
                console.log(r + " " + t() + " " + a),
                e &&
                  "ERROR" == r &&
                  n.beacon(
                    "//" +
                      e +
                      "/log/" +
                      r.toLowerCase() +
                      "?msg=" +
                      encodeURI(a)
                  )
            }
          ;(this.error = function(n, e) {
            void 0 !== e &&
              void 0 !== e.stack &&
              (n += " caused by " + e.message + " at:\n" + e.stack),
              r("ERROR", n)
          }),
            (this.debug = function(n) {
              this.isDebug && r("DEBUG", n)
            })
        }
        return n
      }),
      define("quant/ready", [], function() {
        function n() {
          var n = !1,
            e = []
          document.readyState in { complete: !0, interactive: !0 } && (n = !0)
          var t = function() {
            for (n = !0; e.length > 0; ) e.shift()()
          }
          document.addEventListener
            ? (document.addEventListener("DOMContentLoaded", t, !1),
              window.addEventListener("load", t, !1))
            : document.attachEvent &&
              (document.attachEvent("onreadystatechange", t, !1),
              window.attachEvent("onload", t)),
            (this.ready = function(t) {
              n ? t() : e.push(t)
            })
        }
        return new n().ready
      }),
      define("quant/promise", [], function() {
        function n(u) {
          var c,
            s,
            f = [],
            l = e,
            d = function(n) {
              return n
            },
            p = function(n, e, t, r) {
              try {
                var i = n(r)
                a(i) ? (i.then(e), i.catch(t)) : e(i)
              } catch (n) {
                t(n)
              }
            },
            v = function(n) {
              ;(c = n),
                (l = t),
                f.forEach(function(e) {
                  e.push(n), p.apply(0, e)
                })
            },
            h = function(n) {
              ;(s = n),
                (l = r),
                f.forEach(function(e) {
                  e[r](n)
                })
            },
            g = function(n, e, t) {
              return function(r) {
                p(n, e, t, r)
              }
            }
          try {
            u(v, h)
          } catch (n) {
            h(n)
          }
          return {
            then: function(a) {
              switch (l) {
                case e:
                  return new n(function(n, e) {
                    f.push([a, n, e])
                  })
                case t:
                  return i(a(c))
                case r:
                  return o(s)
              }
            },
            catch: function(a) {
              switch (l) {
                case e:
                  return new n(function(n, e) {
                    f.push([d, n, g(a, n, e)])
                  })
                case t:
                  return i(c)
                case r:
                  return i(a(s))
              }
            },
          }
        }
        var e = 0,
          t = 1,
          r = 2,
          a = function(n) {
            return (
              "object" == typeof n && "then" in n && "function" == typeof n.then
            )
          },
          i = function(n) {
            return a(n)
              ? n
              : {
                  then: function(e) {
                    return i(e(n))
                  },
                  catch: function(n) {
                    return this
                  },
                }
          },
          o = function(n) {
            return {
              then: function(n) {
                return this
              },
              catch: function(e) {
                return i(e(n))
              },
            }
          }
        return (
          (n.resolve = i),
          (n.reject = o),
          (n.all = function(n) {
            return n.length
              ? n
                  .map(function(n) {
                    return n.then(function(n) {
                      return [n]
                    })
                  })
                  .reduce(function(n, e) {
                    return n.then(function(n) {
                      return e.then(function(e) {
                        return n.concat(e)
                      })
                    })
                  })
              : i([])
          }),
          n
        )
      }),
      define("quant/loader", ["quant/ready", "quant/promise"], function(n, e) {
        function t(t, r) {
          var a,
            i = []
          n(function() {
            a = r.getElementsByTagName("head")[0]
          })
          var o = function(n) {
            var e = new Image()
            return (e.src = n), e
          }
          ;(this.image = function(n) {
            return new e(function(e, t) {
              var r = o(n)
              i.push(r),
                (r.onload = function() {
                  e(r), i.shift(), delete r.onload, delete r.onerror
                }),
                (r.onerror = t)
            })
          }),
            (this.beacon = function(n) {
              var e = t.navigator
              e && e.sendBeacon ? e.sendBeacon(n) : o(n)
            })
          var u = function(n, e, t) {
            var a = r.createElement("script")
            ;(a.type = "text/javascript"), (a.src = n)
            var i = function() {
              e(a),
                (a.onreadystatechange = null),
                (a.onload = null),
                (a.onerror = null)
            }
            return (
              (a.onload = i),
              (a.onreadystatechange = function() {
                a.readyState in { loaded: 1, complete: 1 } && i()
              }),
              (a.onerror = t),
              a
            )
          }
          this.script = function(t) {
            return new e(function(e, r) {
              n(function() {
                var n = u(t, e, r)
                a.firstChild
                  ? a.insertBefore(n, a.firstChild)
                  : a.appendChild(n)
              })
            })
          }
        }
        return t
      }),
      define("quant/json", [], function() {
        var localJSON = window.JSON || {}
        return (
          (void 0 !== localJSON.stringify &&
            '{"test":["1"]}' === localJSON.stringify({ test: ["1"] })) ||
            ((localJSON.stringify = function(n) {
              var e = typeof n
              if ("object" !== e || null === n)
                return "string" === e && (n = '"' + n + '"'), String(n)
              var t,
                r,
                a = [],
                i = n && n.constructor === Array
              for (t in n)
                (r = n[t]),
                  "function" !== (e = typeof r) &&
                    ("string" === e
                      ? (r = '"' + r + '"')
                      : "object" === e &&
                        null !== r &&
                        (r = localJSON.stringify(r)),
                    a.push((i ? "" : '"' + t + '":') + String(r)))
              return (i ? "[" : "{") + String(a) + (i ? "]" : "}")
            }),
            (localJSON.parse =
              localJSON.parse ||
              function(string) {
                return eval("(" + string + ")")
              })),
          localJSON
        )
      }),
      define("quant/event", [], function() {
        function n() {
          ;(this.add = function(n, e, t) {
            n.addEventListener
              ? n.addEventListener(e, t)
              : "function" == typeof jQuery
              ? jQuery(n).on(e, t)
              : n.attachEvent && n.attachEvent("on" + e, t)
          }),
            (this.remove = function(n, e, t) {
              n.removeEventListener
                ? n.removeEventListener(e, t)
                : "function" == typeof jQuery
                ? jQuery(n).off(e, t)
                : n.detachEvent && n.detachEvent("on" + e, t)
            }),
            (this.trigger = function(n, e, t) {
              var r = n.ownerDocument
              if (n.dispatchEvent && r.createEvent) {
                var a = r.createEvent("Event")
                if ((a.initEvent(e, !0, !0), void 0 !== t))
                  for (var i in t) i in a || (a[i] = t[i])
                n.dispatchEvent(a)
              } else "function" == typeof jQuery && jQuery(n).trigger(e, t)
            })
        }
        return new n()
      }),
      define("quant/now", [], function() {
        return function() {
          return new Date().getTime()
        }
      }),
      define("quant/consent/truste", [
        "quant/json",
        "quant/promise",
        "quant/event",
        "quant/now",
      ], function(n, e, t, r) {
        return function(a, i, o, u, c, s, f, l) {
          var d,
            p = {},
            v = function(n) {
              var e = n.source[0]
              return "p" + n.consent[0] + ("a" == e ? "e" : "i")
            }
          "object" == typeof u && "function" == typeof u.callApi
            ? (!0,
              (d = function(n, t, r, a) {
                var i = u.callApi(t, a, l, c, r)
                return (n.cm = v(i)), e.resolve(!0)
              }))
            : (d = function(u, s, f, d) {
                return (
                  a.depth > 0 &&
                    (t.add(i, "message", function(e) {
                      var t = e.data
                      if (
                        "string" == typeof t &&
                        t.indexOf("PrivacyManagerAPI") > 0
                      )
                        try {
                          t = n.parse(t)
                        } catch (n) {
                          return
                        }
                      else if (void 0 !== t.PrivacyManagerAPI) {
                        var r = t.PrivacyManagerAPI
                        u.cm = v(r)
                      }
                    }),
                    o.postMessage(
                      n.stringify({
                        PrivacyManagerAPI: {
                          timestamp: r(),
                          action: s,
                          self: d,
                          domain: l,
                          authority: c,
                          type: f,
                        },
                      })
                    )),
                  e.resolve(!0)
                )
              }),
            (this.consent = function(n) {
              return d(n, "getConsent", s, f)
            }),
            (this.parameters = p)
        }
      }),
      define("quant/consent/uspapi", [
        "quant/promise",
        "quant/json",
        "quant/event",
        "quant/now",
      ], function(n, e, t, r) {
        return function(a, i, o, u, c) {
          var s
          if ("function" == typeof u)
            s = function(e, t) {
              return new n(function(n, e) {
                u("getUSPData", t, function(t, r) {
                  r && void 0 !== t ? n(t.uspString) : e(t)
                })
              }).catch(function(n) {
                return o.error("[USPAPI] unsuccessful: " + n), !0
              })
            }
          else {
            var f = (a.locate(c), {})
            t.add(i, "message", function(n) {
              var t = n.data
              if ("string" == typeof t && "{" == t[0])
                try {
                  t = e.parse(t)
                } catch (n) {
                  return
                }
              if (t.hasOwnProperty("__uspapiReturn")) {
                var r = t.__uspapiReturn,
                  a = r.callId,
                  i = f[a]
                if (void 0 === i) return
                r.success ? i[RESOLVE](r.returnValue) : i[REJECT](r.returnValue)
              }
            }),
              (s = function(e, t) {
                var i = a.locate(c)
                if (void 0 === i) return n.resolve(void 0)
                var o = r()
                return new n(function(n, r) {
                  ;(f[o] = [n, r]),
                    i.postMessage({
                      __uspapiCall: { command: e, version: t, callId: o },
                    })
                })
              })
          }
          this.consent = function(n) {
            return s("getUSPData", 1).then(function(e) {
              return (
                e &&
                  "string" == typeof e.uspString &&
                  (n.us_privacy = e.uspString),
                !0
              )
            })
          }
        }
      }),
      define("quant/consent/tcf1.1", [
        "quant/promise",
        "quant/json",
        "quant/event",
        "quant/now",
      ], function(n, e, t, r) {
        return function(a, i, o, u, c) {
          var s, f
          if ("function" == typeof u)
            f = function(e, t) {
              return new n(function(n, r) {
                u(e, t, function(e, t) {
                  t ? n(e) : r(e)
                })
              })
            }
          else {
            var l = {}
            t.add(i, "message", function(n) {
              var t = n.data
              if (void 0 === t)
                return void o.error("[TCF]: Recieved undefined message")
              if ("string" == typeof t && "{" == t[0])
                try {
                  t = e.parse(t)
                } catch (n) {
                  return
                }
              if (t.hasOwnProperty("__cmpReturn")) {
                var r = t.__cmpReturn,
                  a = r.callId,
                  i = l[a]
                if (void 0 === i) return
                r.success ? i[0](r.returnValue) : i[1](r.returnValue)
              }
            }),
              (f = function(t, i) {
                var o = a.locate(c)
                if (void 0 === o) return n.resolve({ gdprApplies: !1 })
                var u = r()
                return new n(function(n, r) {
                  ;(l[u] = [n, r]),
                    o.postMessage(
                      e.stringify({
                        __cmpCall: { command: t, parameter: i, callId: u },
                      }),
                      "*"
                    )
                })
              })
          }
          this.consent = function(n) {
            return (
              void 0 === s &&
                (s = f("getVendorConsents", [11])
                  .then(function(e) {
                    return e.gdprApplies && "false" != e.gdprApplies
                      ? ((n.gdpr = 1),
                        f("getConsentData", null).then(function(t) {
                          n.gdpr_consent = t.consentData
                          var r = e.purposeConsents || e.purposes,
                            a = !0
                          return (
                            "object" == typeof r && (a = r[1]),
                            a &&
                              (a = !e.vendorConsents || e.vendorConsents[11]),
                            a
                          )
                        }))
                      : ((n.gdpr = n.gdpr || 0), !0)
                  })
                  .catch(function(e) {
                    return o.error(e), (n.gdpr = n.gdpr || 0), !0
                  })),
              s
            )
          }
        }
      }),
      define("quant/consent-manager", ["quant/promise", "quant/json"], function(
        n,
        e
      ) {
        return function(e) {
          var t,
            r = {},
            a = function(a) {
              return (
                void 0 === t &&
                  (t = n
                    .all(
                      e.map(function(n) {
                        return n.consent(r)
                      })
                    )
                    .then(function(n) {
                      return n.reduce(function(n, e) {
                        return n && e
                      }, !0)
                    })),
                t.then(function(n) {
                  if (n) return a()
                })
              )
            }
          ;(this.consent = a),
            (this.wrap = function(n) {
              return function() {
                var e = this,
                  t = arguments
                return a(function() {
                  return n.apply(e, t)
                })
              }
            }),
            (this.parameters = r)
        }
      }),
      define("quant/consent/tcf2.0", [
        "quant/promise",
        "quant/json",
        "quant/event",
        "quant/now",
      ], function(n, e, t, r) {
        function a(n, e) {
          var t = e.gdprApplies,
            r = e.purpose,
            a = e.vendor,
            i = a && a.consents && a.consents[f],
            o = a && a.legitimateInterests && a.legitimateInterests[f],
            u = e.publisher ? e.publisher.restrictions : {}
          return (
            !t ||
            n
              .map(function(n) {
                var e = !!r.consents && r.consents[n],
                  t = !!r.legitimateInterests && r.legitimateInterests[n],
                  a = u && u[n] ? u[n][f] : null
                return (
                  0 !== a &&
                  (!(!i || !e || 2 === a || (-1 == d.indexOf(n) && 1 !== a)) ||
                    !(
                      1 === a ||
                      !o ||
                      !t ||
                      n === s ||
                      (-1 != d.indexOf(n) && 2 !== a)
                    ))
                )
              })
              .reduce(function(n, e) {
                return n && e
              }, !0)
          )
        }
        function i(i, s, f, d, y) {
          var m, q
          if ("function" == typeof d)
            q = function(e, t) {
              return new n(function(n, r) {
                d(
                  e,
                  p,
                  function(t, a) {
                    if (a) {
                      var i = t.eventStatus
                      ;(e === v &&
                        t.gdprApplies &&
                        "useractioncomplete" !== i &&
                        "tcloaded" !== i) ||
                        n(t)
                    } else r(t)
                  },
                  t
                )
              })
            }
          else {
            var w = {},
              _ = {}
            t.add(s, "message", function(n) {
              var t = n.data
              if (void 0 === t)
                return void f.error(o + "Recieved undefined message")
              if ("string" == typeof t && "{" == t[0])
                try {
                  t = e.parse(t)
                } catch (n) {
                  return
                }
              if (t.hasOwnProperty(h)) {
                var r = t[h],
                  a = r.callId,
                  i = w[a]
                if (void 0 === i) return
                var s = r.returnValue
                r.success
                  ? (_[a] === v &&
                      s.gdprApplies &&
                      "useractioncomplete" !== s.eventStatus) ||
                    i[u](s)
                  : i[c](s)
              }
            }),
              (q = function(t, a) {
                var o = i.locate(y)
                if (void 0 === o) return n.resolve({ gdprApplies: !1 })
                var u = r()
                return new n(function(n, r) {
                  ;(w[u] = [n, r]), (_[u] = t)
                  var i = {}
                  ;(i[g] = { command: t, parameter: a, version: p, callId: u }),
                    o.postMessage(e.stringify(i), "*")
                })
              })
          }
          this.consent = function(n) {
            return (
              void 0 === m &&
                (m = q(v)
                  .then(function(e) {
                    return (
                      e.gdprApplies && "false" != e.gdprApplies
                        ? ((n.gdpr = 1), (n.gdpr_consent = e.tcString))
                        : (n.gdpr = n.gdpr || 0),
                      a(l, e)
                    )
                  })
                  .catch(function(e) {
                    return f.error(e), (n.gdpr = n.gdpr || 0), !0
                  })),
              m
            )
          }
        }
        var o = "[TCF2]: ",
          u = 0,
          c = 1,
          s = "1",
          f = 11,
          l = [s, "3", "7", "8", "9", "10"],
          d = [s, "3"],
          p = 2,
          v = "addEventListener",
          h = "__tcfapiReturn",
          g = "__tcfapiCall"
        return (i.resolveConsent = a), i
      }),
      define("quant.js", [
        "quant/origin",
        "quant/windows",
        "quant/log",
        "quant/loader",
        "quant/consent/truste",
        "quant/consent/uspapi",
        "quant/consent/tcf1.1",
        "quant/consent-manager",
        "quant/consent/tcf2.0",
      ], function(n, e, t, r, a, i, o, u, c) {
        return (
          void 0 === window.__qc &&
            (window.__qc = (function(s, f, l) {
              if (s.__qc) return s.__qc
              var d,
                p,
                v,
                h,
                g,
                y,
                m,
                q,
                w,
                _,
                b,
                E,
                O,
                S,
                j,
                P,
                x,
                C,
                D,
                I,
                R,
                A,
                T,
                M,
                N,
                z,
                L,
                k,
                J,
                U,
                B,
                V,
                Q,
                F,
                G,
                Z,
                $,
                H,
                K,
                W,
                X,
                Y,
                nn,
                en,
                tn,
                rn,
                an,
                on,
                un,
                cn = n(f),
                sn = new e(s, s.top),
                fn = new r(s, f),
                ln = new t(fn, "quantcount.com"),
                dn = new u([
                  new a(
                    sn,
                    s,
                    s.top,
                    s.PrivacyManagerAPI,
                    "truste.com",
                    "advertising",
                    "quantserve.com",
                    cn
                  ),
                  new i(sn, s, ln, s.__uspapi, "__uspapiLocator"),
                  new o(sn, s, ln, s.__cmp, "__cmpLocator"),
                  new c(sn, s, ln, s.__tcfapi, "__tcfapiLocator"),
                ]),
                pn = [
                  "a",
                  "ce",
                  "cm",
                  "dst",
                  "enc",
                  "fpa",
                  "fpan",
                  "je",
                  "ns",
                  "ogl",
                  "rf",
                  "tzo",
                  "sr",
                ],
                vn = [
                  "4dcfa7079941",
                  "127fdf7967f31",
                  "588ab9292a3f",
                  "32f92b0727e5",
                  "22f9aa38dfd3",
                  "a4abfe8f3e04",
                  "18b66bc1325c",
                  "958e70ea2f28",
                  "bdbf0cb4bbb",
                  "65118a0d557",
                  "40a1d9db1864",
                  "18ae3d985046",
                  "3b26460f55d",
                ],
                hn = !1,
                gn = !1,
                yn = 0,
                mn = [],
                qn = [],
                wn = [],
                _n = [],
                bn = {},
                En = 0,
                On = null,
                Sn = {},
                jn = {},
                Pn = null,
                xn = [].slice
              !(function() {
                var n
                ;(n = f.createElement("script")),
                  (d = "async" in n ? 1 : n.readyState ? 2 : 3),
                  (n = null)
              })()
              var Cn = function(n) {
                try {
                  return {
                    init: O,
                    hash: E,
                    push: S,
                    rules: G,
                    require: require,
                    hasRules: $,
                    defaults: X,
                    __qc: function() {
                      return !0
                    },
                  }[n].apply(null, xn.call(arguments, 1))
                } catch (n) {
                  return ln.error(n), !1
                }
              }
              return (
                (Cn.evts = 0),
                (Cn.v = 2),
                (Cn.SD = vn),
                (Cn.qpixelsent = []),
                (F = function(n) {
                  var e,
                    t = n ? n.length || 0 : 0
                  for (e = 0; e < t; e++) if (!n[e]) return !1
                  return !0
                }),
                (W = function(n) {
                  ;(n = n || s._qacct) && (J(_n, n) || _n.push(n))
                }),
                (J = function(n, e) {
                  var t,
                    r = n.length
                  for (t = 0; t < r; t++) if (n[t] === e) return !0
                  return !1
                }),
                (V = function(n) {
                  return {}.toString
                    .call(n)
                    .match(/\s([a-zA-Z]+)/)[1]
                    .toLowerCase()
                }),
                (Q = function(n) {
                  var e, t, r
                  if ("array" === (t = V(n))) return n.slice(0)
                  if ("object" === t) {
                    e = {}
                    for (r in n) n.hasOwnProperty(r) && (e[r] = n[r])
                    return e
                  }
                  return "string" === t ? "" + n : n
                }),
                (S = function(n, e) {
                  D(n, e)
                }),
                ($ = function(n) {
                  return J(wn, n)
                }),
                (X = function(n, e) {
                  var t
                  n &&
                    ((t = Sn[n]),
                    t && (e = rn(e, t)),
                    e.qacct && delete e.qacct,
                    (Sn[n] = e))
                }),
                (Y = function(n) {
                  var e, t, r, a, i, o
                  if (g(n)) {
                    i = n
                    for (a in i) {
                      if ("string" == typeof i[a]) {
                        ;(e = n.event || "load"),
                          (t = n.media || "webpage"),
                          ("rule" !== e && "load" !== e) ||
                          ("webpage" !== t && "ad" !== t)
                            ? D(n)
                            : ((o = n.qacct || s._qacct),
                              (n.qacct = o),
                              (r = jn[o]),
                              (r = r ? rn(r, n) : n),
                              (jn[o] = r)),
                          W(n.qacct)
                        break
                      }
                      "object" == typeof i[a] && null != i[a] && Y(i[a])
                    }
                  }
                }),
                (rn = function(n, e) {
                  var t = {}
                  return (
                    (t.qacct = n.qacct || e.qacct),
                    "load" === n.event || "load" === e.event
                      ? (t.event = "load")
                      : n.event && e.event
                      ? (t.event = n.event || e.event)
                      : (t.event = null),
                    (t.media = null),
                    "webpage" === n.media || "webpage" === e.media
                      ? (t.media = "webpage")
                      : "ad" === n.media || "ad" === e.media
                      ? (t.media = "ad")
                      : (t.media = n.media || e.media),
                    z(t, n, e),
                    z(t, e, n),
                    t.event || delete t.event,
                    t.media || delete t.media,
                    t
                  )
                }),
                (z = function(n, e, t) {
                  var r, a, i, o, u, c
                  for (r in e)
                    e.hasOwnProperty(r) &&
                      !n.hasOwnProperty(r) &&
                      ((a = e[r]),
                      (i = t[r]),
                      (o = ""),
                      (u = !!a && "string" == typeof a),
                      (c = !!i && "string" == typeof i),
                      u && (o = a),
                      u && c && (o += ","),
                      c && (o += i),
                      (n[r] = o))
                }),
                (nn = function() {
                  var n,
                    e,
                    t = []
                  if (!(En > 0)) {
                    B()
                    for (n in jn)
                      jn.hasOwnProperty(n) &&
                        jn[n] &&
                        ((e = jn[n]), t.push(e), delete jn[n])
                    1 == t.length && D(t[0]), t.length > 1 && D(t)
                  }
                }),
                (en = function() {
                  var n,
                    e,
                    t,
                    r = []
                  for (t = _n.slice(0), n = 0; n < t.length; n++)
                    (e = t[n]), $(e) || r.push(e)
                  if (0 === r.length) nn()
                  else
                    for (n = 0; n < r.length; n++) (e = r[n]), wn.push(e), L(e)
                }),
                (k = function(n, e, t, r) {
                  var a
                  if (
                    ((n = s.location.protocol + "//" + n),
                    (On = On || f.scripts[0]),
                    (a = f.createElement("script")),
                    1 === d)
                  )
                    (a.src = n),
                      (a.async = !0),
                      (a.onload = e),
                      t &&
                        (a.onerror = function(n) {
                          ;(a.onerror = null), t(n)
                        }),
                      On.parentNode.insertBefore(a, On)
                  else if (2 === d) {
                    var i = !1
                    ;(a.onload = a.onreadystatechange = function() {
                      i ||
                        ("loaded" != a.readyState &&
                          "complete" != a.readyState) ||
                        ((i = !0), (a.onreadystatechange = null), e())
                    }),
                      (a.src = n),
                      On.parentNode.insertBefore(a, On)
                  } else r && r()
                }),
                (L = function(n) {
                  En++,
                    k(
                      "rules.quantcount.com/rules-" + n + ".js",
                      function() {
                        ;(bn[n] = 2 === d ? 2 : 0), tn()
                      },
                      function(e) {
                        ;(bn[n] = 1), tn()
                      },
                      function() {
                        ;(bn[n] = 4), tn()
                      }
                    )
                }),
                (tn = function() {
                  ;(En -= En > 0 ? 1 : 0), nn()
                }),
                (G = function() {
                  var n,
                    e,
                    t,
                    r = !0
                  if (arguments.length) {
                    for (
                      t = function(n) {
                        r ? Y(n) : D(n, !0)
                      },
                        n = 0;
                      n < arguments.length;
                      n++
                    )
                      (e = xn.call(arguments[n], 0)),
                        e.splice(1, 0, t),
                        Z.apply(null, e)
                    ;(r = !1), hn && nn()
                  }
                }),
                (Z = function(n, e) {
                  var t,
                    r,
                    a,
                    i,
                    o,
                    u,
                    c,
                    s = [],
                    f = [],
                    l = e || D
                  if ((r = xn.call(arguments, 2)) && r.length) {
                    for (
                      a = r[0] || F, i = r[1], o = r[2], t = o.length, u = 0;
                      u < t;
                      u++
                    )
                      s.push(!1), f.push(null)
                    ;(c = { p: n, f: s, r: a, c: o, a: i, v: f }),
                      $(n) || wn.push(n),
                      qn.push(c),
                      H(c, l)
                  } else wn.push(n), (bn[n] = 6)
                }),
                (H = function(n, e) {
                  var t,
                    r = n && n.c ? n.c.length : 0
                  for (t = 0; t < r; t++)
                    !(function(t) {
                      var r, a
                      try {
                        ;(r = n.c[t][0]),
                          (a = n.c[t].slice(1)),
                          a.splice(0, 0, function(r) {
                            ;(n.f[t] = !0), (n.v[t] = r), K(n, e)
                          }),
                          r.apply(null, a)
                      } catch (r) {
                        ;(n.f[t] = !0), (n.v[t] = !1), K(n, e)
                      }
                    })(t)
                }),
                (K = function(n, e) {
                  var t,
                    r,
                    a,
                    i,
                    o,
                    u,
                    c,
                    s = n.a,
                    f = n.f,
                    l = n.v,
                    d = n.r || F
                  if (((t = F(f)), t && (t = t && d(l)), t))
                    for (o = 0; o < s.length; o++)
                      try {
                        ;(r = s[o][0]),
                          (a = s[o].length > 1 ? s[o].slice(1) : []),
                          (a = a.concat(n.v)),
                          (i = r.apply(null, a)),
                          (u = { qacct: n.p, event: "rule" })
                        for (c in i)
                          i.hasOwnProperty(c) && "qacct" !== c && (u[c] = i[c])
                        e(u)
                      } catch (n) {
                        continue
                      }
                }),
                (p = function() {
                  return v(0) !== v(6) ? 1 : 0
                }),
                (v = function(n) {
                  var e = new Date(2e3, n, 1, 0, 0, 0, 0),
                    t = e.toGMTString()
                  return e - new Date(t.substring(0, t.lastIndexOf(" ") - 1))
                }),
                (h = function(n) {
                  return n.replace(/\./g, "%2E").replace(/,/g, "%2C")
                }),
                (y =
                  "function" == typeof encodeURIComponent
                    ? encodeURIComponent
                    : h),
                (g = function(n) {
                  return void 0 !== n && null != n
                }),
                (m = function() {
                  return Math.round(2147483647 * Math.random())
                }),
                (q = function(n) {
                  var e,
                    t,
                    r,
                    a = "",
                    i = f.cookie
                  return i
                    ? ((e = i.indexOf(n + "=")),
                      (t = e + n.length + 1),
                      e > -1 &&
                        ((r = i.indexOf(";", t)),
                        r < 0 && (r = i.length),
                        (a = i.substring(t, r))),
                      a)
                    : a
                }),
                (x = function(n) {
                  return "P0-" + m() + "-" + n.getTime()
                }),
                (P = function(n, e, t) {
                  return [
                    "__qca=",
                    n,
                    "; expires=",
                    e.toGMTString(),
                    "; path=/; domain=",
                    t,
                  ].join("")
                }),
                (j = function() {
                  var n,
                    e,
                    t,
                    r,
                    a = ["", ""]
                  if (1 === yn) return (a[0] = ";fpan=u;fpa="), a
                  for (n = E(cn), r = 0; r < vn.length; r++)
                    if (vn[r] === n) return (a[0] = ";fpan=u;fpa="), a
                  return (
                    (e = new Date()),
                    (t = q("__qca")),
                    t.length > 0 || Pn
                      ? (0 === t.length &&
                          ((t = Pn),
                          (a[1] = P(Pn, new Date(e.getTime() + 338688e5), cn))),
                        (a[0] = ";fpan=0;fpa=" + t))
                      : ((Pn = x(e)),
                        (a[1] = P(Pn, new Date(e.getTime() + 338688e5), cn)),
                        (a[0] = ";fpan=1;fpa=" + Pn)),
                    a
                  )
                }),
                (w = function() {
                  var n = j()[1]
                  n && (f.cookie = n)
                }),
                (_ = function(n) {
                  f.cookie =
                    n +
                    "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain=" +
                    cn
                }),
                (b = function(n, e) {
                  var t
                  for (t = 0; t < e.length; t++)
                    (n ^= e.charCodeAt(t)),
                      (n +=
                        (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24))
                  return n
                }),
                (E = function(n) {
                  var e, t, r, a
                  return (
                    (e = 2166136261),
                    (t = 3386659096),
                    (r = b(e, n)),
                    (a = b(t, n)),
                    Math.round(Math.abs(r * a) / 65536).toString(16)
                  )
                }),
                (M = function(n) {
                  var e, t
                  if (n && "object" === V(n))
                    for (t = 0; t < pn.length; t++)
                      (e = pn[t]), n.hasOwnProperty(e) && n[e] && delete n[e]
                }),
                (T = function(n, e, t) {
                  var r,
                    a,
                    i,
                    o,
                    u,
                    c = {},
                    f = s._qacct,
                    l = null,
                    d = "webpage",
                    p = "load",
                    v = {}
                  if (
                    ((f = e ? e.qacct || s._qacct : s._qacct),
                    (u = jn[f]),
                    e ? u && (e = rn(e, u)) : (e = u),
                    f && delete jn[f],
                    M(e),
                    null != e)
                  )
                    for (i in e)
                      (v[i] = void 0 !== e[i]),
                        e.hasOwnProperty(i) &&
                          "string" == typeof i &&
                          "string" == typeof e[i] &&
                          ("uid" !== i && "uh" !== i
                            ? "qacct" !== i &&
                              (e[i].length > 0
                                ? (c[i + n] = y(e[i]))
                                : (v[i] = !1),
                              "media" === i && (d = e[i]),
                              "event" === i && (p = e[i]))
                            : (C() || (l = E(e[i])), delete e[i]))
                  if ("string" != typeof f) {
                    if (!g(s._qacct) || 0 === s._qacct.length) return null
                    f = s._qacct
                  }
                  if (!f) return null
                  if ((a = Sn[f]))
                    for (i in a)
                      "string" == typeof i &&
                        a.hasOwnProperty(i) &&
                        !v[i] &&
                        ((c[i + n] = y(a[i])),
                        "media" === i && (d = a[i]),
                        "event" === i && (p = a[i]))
                  if (
                    ((r = bn[f]),
                    g(r) || (r = 3),
                    (c["rf" + n] = "" + r),
                    "string" == typeof l && ((e.uh = l), (c["uh" + n] = y(l))),
                    "webpage" === d && "load" === p)
                  ) {
                    for (o = 0; o < Cn.qpixelsent.length; o++)
                      if (Cn.qpixelsent[o] === f && !t) return null
                    Cn.qpixelsent.push(f)
                  }
                  return "ad" === d && (yn = 1), (c["a" + n] = f), c
                }),
                (A = function(n) {
                  var e,
                    t = []
                  for (e in n)
                    n[e] && n.hasOwnProperty(e) && t.push(e + "=" + n[e])
                  return t.join(";")
                }),
                (N = function() {
                  var n,
                    e,
                    t,
                    r,
                    a,
                    i = f.getElementsByTagName("meta"),
                    o = ""
                  for (n = 0; n < i.length; n++) {
                    if (((a = i[n]), o.length >= 1e3)) return o
                    g(a) &&
                      g(a.attributes) &&
                      g(a.attributes.property) &&
                      g(a.attributes.property.value) &&
                      g(a.content) &&
                      ((e = a.attributes.property.value),
                      (t = a.content),
                      e.length > 3 &&
                        "og:" === e.substring(0, 3) &&
                        (o.length > 0 && (o += ","),
                        (r = t.length > 80 ? 80 : t.length),
                        (o +=
                          h(e.substring(3, e.length)) +
                          "." +
                          h(t.substring(0, r)))))
                  }
                  return y(o)
                }),
                (C = function() {
                  var n,
                    e = !1
                  return (
                    g(s.external) &&
                      ((n = s.external),
                      (e =
                        "function" == typeof n.InPrivateFilteringEnabled &&
                        !0 === n.InPrivateFilteringEnabled())),
                    e ||
                      "1" == l.doNotTrack ||
                      "yes" === l.doNotTrack ||
                      "1" == l.msDoNotTrack
                  )
                }),
                (D = function(n, e) {
                  var t,
                    r,
                    a,
                    i,
                    o,
                    u,
                    c,
                    d,
                    v,
                    h,
                    q = "function" == typeof encodeURIComponent ? "n" : "s",
                    w = m(),
                    _ = "",
                    b = "",
                    E = "",
                    O = "",
                    S = "",
                    P = "u",
                    x = "1",
                    C = []
                  if (
                    ((yn = 0), g(Cn.qpixelsent) || (Cn.qpixelsent = []), g(n))
                  ) {
                    if ("object" === (v = V(n))) a = T("", n, e)
                    else if ("array" === v)
                      for (o = 0; o < n.length; o++)
                        (h = T("." + (o + 1), n[o], e)),
                          (a = 0 === o ? h : rn(a, h))
                  } else "string" == typeof _qacct && (a = T("", null, e))
                  a &&
                    ((t = l.cookieEnabled ? "1" : "0"),
                    void 0 !== l.javaEnabled &&
                      (P = l.javaEnabled() ? "1" : "0"),
                    g(s._qmeta) &&
                      ((b = ";m=" + y(s._qmeta)), (s._qmeta = null)),
                    self.screen &&
                      (_ =
                        screen.width +
                        "x" +
                        screen.height +
                        "x" +
                        screen.colorDepth),
                    (u = new Date()),
                    (c = p()),
                    (d = j()[0]),
                    s.location && s.location.href && (E = y(s.location.href)),
                    f && f.referrer && (S = y(f.referrer)),
                    s.self === s.top && (x = "0"),
                    a.url ? (O = E) : (a.url = E),
                    a.ref || (a.ref = S || ""),
                    (r = N()),
                    (i = A(a)),
                    C.push(
                      "/pixel;r=" +
                        w +
                        ";" +
                        i +
                        d +
                        ";ns=" +
                        x +
                        ";ce=" +
                        t +
                        ";qjs=1;qv=35f667c6-20200713111428"
                    ),
                    C.push(
                      (a.ref ? "" : ";ref=") +
                        ";d=" +
                        cn +
                        ";je=" +
                        P +
                        ";sr=" +
                        _ +
                        ";enc=" +
                        q +
                        ";dst=" +
                        c +
                        ";et=" +
                        u.getTime() +
                        ";tzo=" +
                        u.getTimezoneOffset() +
                        (O ? ";ourl=" + O : "") +
                        b +
                        ";ogl=" +
                        r
                    ),
                    mn.push(C),
                    R())
                }),
                (I = function(n) {
                  dn.consent(function() {
                    return !0
                  })
                    .then(function(n) {
                      return n ? "quantserve.com" : "quantcount.com"
                    })
                    .then(function(e) {
                      var t = dn.parameters
                      return fn
                        .image(
                          [
                            "//pixel.",
                            e,
                            n[0],
                            ";cm=",
                            t.cm,
                            1 === t.gdpr
                              ? ";gdpr=1;gdpr_consent=" + t.gdpr_consent
                              : ";gdpr=0",
                            t.us_privacy ? ";us_privacy=" + t.us_privacy : "",
                            n[1],
                          ].join("")
                        )
                        .then(function(n) {
                          n && "number" == typeof n.width && 3 === n.width
                            ? _("__qca")
                            : w()
                        })
                    })
                }),
                (R = function() {
                  for (; mn.length; ) I(mn.shift())
                }),
                (an = function() {
                  var n,
                    e,
                    t = arguments
                  for (U([].slice.call(t)), e = 0; e < t.length; e++)
                    (n = t[e]), D(n)
                  _n.length ? en() : nn()
                }),
                (U = function(n) {
                  var e,
                    t = V(n)
                  if ("array" === t) for (e = 0; e < n.length; e++) U(n[e])
                  else "object" === t && W(n.qacct || s._qacct)
                }),
                (B = function() {
                  var n
                  if (
                    (gn ||
                      s._qevents.length ||
                      s.ezt.length ||
                      "undefined" == typeof _qacct ||
                      (D({ qacct: s._qacct }), (gn = !0)),
                    !Cn.evts)
                  ) {
                    for (n in s._qevents)
                      s._qevents[n] !== s._qevents.push &&
                        s._qevents.hasOwnProperty(n) &&
                        D(s._qevents[n])
                    for (n in s.ezt)
                      s.ezt[n] !== s.ezt.push &&
                        s.ezt.hasOwnProperty(n) &&
                        D(s.ezt[n])
                    ;(s._qevents = { push: an }),
                      (s.ezt.push = function() {
                        var n,
                          e = arguments
                        if (g(s.queueManager))
                          for (n = 0; n < e.length; n++)
                            s.queueManager.push(e[n])
                        else an.apply(this, arguments)
                      }),
                      (Cn.evts = 1)
                  }
                }),
                (un = function(n) {
                  var e
                  n && ((e = Q(n)), U(n), s._qevents.push(e), (n = null))
                }),
                (on = function(n) {
                  n.push = function() {
                    return (
                      U([].slice.call(arguments)),
                      en(),
                      [].push.apply(n, arguments)
                    )
                  }
                }),
                (O = function() {
                  g(s._qevents) || (s._qevents = []),
                    g(s.ezt) || (s.ezt = []),
                    un(s._qoptions),
                    un(s.qcdata),
                    un(s.smarttagdata),
                    Cn.evts || (on(s._qevents), on(s.ezt)),
                    U(s.ezt),
                    U(s._qevents),
                    U({ qacct: s._qacct }),
                    (s._qoptions = null),
                    _n.length ? en() : nn(),
                    (hn = !0)
                }),
                (s.quantserve = s.quantserve || O),
                (Cn.quantserve = O),
                Cn
              )
            })(window, window.document, window.navigator)),
          window.quantserve(),
          window.__qc
        )
      })
})(window)
