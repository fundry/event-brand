var Commonmark
;(Commonmark =
  "object" == typeof exports && "function" == typeof require ? exports : {}),
  (function() {
    function e(e) {
      return e
    }
    function t() {
      return !1
    }
    function n() {}
    function i(e) {
      return e.replace(o, "<!-- language: $1 --><pre><code>")
    }
    function r(e) {
      if (!/\t/.test(e)) return e
      var t,
        n = ["    ", "   ", "  ", " "],
        i = 0
      return e.replace(/[\n\t]/g, function(e, r) {
        return "\n" === e
          ? ((i = r + 1), e)
          : ((t = (r - i) % 4), (i = r + 1), n[t])
      })
    }
    ;(n.prototype = {
      chain: function(t, n) {
        var i = this[t]
        if (!i) throw new Error("unknown hook " + t)
        this[t] =
          i === e
            ? n
            : function() {
                var e = Array.prototype.slice.call(arguments, 0)
                return (e[0] = i.apply(null, e)), n.apply(null, e)
              }
      },
      set: function(e, t) {
        if (!this[e]) throw new Error("unknown hook " + e)
        this[e] = t
      },
      addNoop: function(t) {
        this[t] = e
      },
      addFalse: function(e) {
        this[e] = t
      },
    }),
      (Commonmark.HookCollection = n),
      (Commonmark.Converter = function(e) {
        ;(e = e || {}), (Commonmark.markdownit = null)
        var t = (this.hooks = new n())
        t.addNoop("plainLinkText"),
          t.addNoop("preConversion"),
          t.addNoop("postNormalization"),
          t.addNoop("preBlockGamut"),
          t.addNoop("postBlockGamut"),
          t.addNoop("preSpanGamut"),
          t.addNoop("postSpanGamut"),
          t.addNoop("postConversion"),
          (this.makeHtmlAsync = function(e) {
            var t = $.Deferred()
            if (!e) return t.resolve(e), t.promise()
            if (null === Commonmark.markdownit) {
              var n = this.makeHtml
              return this.loadMarkdownRendererAsync().then(function() {
                return n(e)
              })
            }
            return t.resolve(this.makeHtml(e)), t.promise()
          }),
          (this.loadMarkdownRendererAsync = function() {
            var t = $.Deferred()
            return (
              null === Commonmark.markdownit &&
                StackExchange.using("markdownit", function() {
                  return (
                    (Commonmark.markdownit = StackExchange.markdownit.init(e)),
                    t.resolve()
                  )
                }),
              t.promise()
            )
          }),
          (this.makeHtml = function(e) {
            if (null === Commonmark.markdownit)
              throw new Error("Markdown renderer is not initialized")
            return (
              (e = t.preConversion(e)),
              (e = r(e)),
              (e = e.replace(/^[ \t]+$/gm, "")),
              (e = t.postNormalization(e)),
              (e = Commonmark.markdownit.render(e)),
              (e = i(e)),
              (e = t.postConversion(e))
            )
          })
      })
    var o = /<pre><code class="language-([a-z0-9#+\-.]+)">/gi
  })()
var Markdown
;(Markdown =
  "object" == typeof exports && "function" == typeof require ? exports : {}),
  (function() {
    function e(e) {
      return e
    }
    function t() {
      return !1
    }
    function n() {}
    function i() {}
    ;(n.prototype = {
      chain: function(t, n) {
        var i = this[t]
        if (!i) throw new Error("unknown hook " + t)
        this[t] =
          i === e
            ? n
            : function() {
                var e = Array.prototype.slice.call(arguments, 0)
                return (e[0] = i.apply(null, e)), n.apply(null, e)
              }
      },
      set: function(e, t) {
        if (!this[e]) throw new Error("unknown hook " + e)
        this[e] = t
      },
      addNoop: function(t) {
        this[t] = e
      },
      addFalse: function(e) {
        this[e] = t
      },
    }),
      (Markdown.HookCollection = n),
      (i.prototype = {
        set: function(e, t) {
          this["s_" + e] = t
        },
        get: function(e) {
          return this["s_" + e]
        },
      }),
      (Markdown.Converter = function(t) {
        function r(e) {
          return (e = e.replace(
            /^[ ]{0,3}\[([^\[\]]+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(\n+)/gm,
            function(e, t, n, i, r, o, a) {
              return (
                (t = t.toLowerCase()),
                B.set(t, _(n)),
                r ? i + a : (o && F.set(t, o.replace(/"/g, "&quot;")), "")
              )
            }
          ))
        }
        function o(e) {
          return (
            (e = e.replace(
              /^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,
              s
            )),
            (e = e.replace(
              /^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,
              s
            )),
            (e = e.replace(
              /\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
              s
            )),
            (e = e.replace(
              /\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,
              s
            )),
            (e = e.replace(
              /(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
              s
            ))
          )
        }
        function a(e) {
          return (
            (e = e.replace(/(^\n+|\n+$)/g, "")),
            "\n\n§K" + (q.push(e) - 1) + "K\n\n"
          )
        }
        function s(e, t) {
          return a(t)
        }
        function c(e, n, i, r) {
          ;(e = U.preBlockGamut(e, W)),
            t.codeFences && !r && (e = w(e)),
            (e = m(e))
          var a = "<hr />\n"
          return (
            (e = e.replace(/^[ ]{0,2}( ?\*){3,}[ \t]*$/gm, a)),
            (e = e.replace(/^[ ]{0,2}( ?-){3,}[ \t]*$/gm, a)),
            (e = e.replace(/^[ ]{0,2}( ?_){3,}[ \t]*$/gm, a)),
            (e = v(e)),
            (e = y(e)),
            (e = C(e)),
            (e = U.postBlockGamut(e, W)),
            (e = o(e)),
            (e = T(e, n, i))
          )
        }
        function l(e) {
          return (
            (e = U.preSpanGamut(e)),
            (e = k(e)),
            (e = u(e)),
            (e = j(e)),
            (e = p(e)),
            (e = d(e)),
            (e = A(e)),
            (e = e.replace(/§P/g, "://")),
            (e = _(e)),
            (e = z(e)),
            (e = t.autoNewlines
              ? e.replace(/\n/g, "<br>\n")
              : e.replace(/  +\n/g, " <br>\n")),
            (e = U.postSpanGamut(e))
          )
        }
        function u(e) {
          var t = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi
          return (e = e.replace(t, function(e) {
            var t = e.replace(/(.)<\/?code>(?=.)/g, "$1`")
            return (t = D(t, "!" == e.charAt(1) ? "\\`*_/" : "\\`*_"))
          }))
        }
        function d(e) {
          return -1 === e.indexOf("[")
            ? e
            : ((e = e.replace(
                /(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,
                f
              )),
              (e = e.replace(
                /(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,
                f
              )),
              (e = e.replace(/(\[([^\[\]]+)\])()()()()()/g, f)))
        }
        function f(e, t, n, i, r, o, a, s) {
          void 0 == s && (s = "")
          var c = t,
            l = n.replace(/:\/\//g, "§P"),
            u = i.toLowerCase(),
            d = r,
            f = s
          if ("" == d)
            if (
              ("" == u && (u = l.toLowerCase().replace(/ ?\n/g, " ")),
              (d = "#" + u),
              void 0 != B.get(u))
            )
              (d = B.get(u)), void 0 != F.get(u) && (f = F.get(u))
            else {
              if (!(c.search(/\(\s*\)$/m) > -1)) return c
              d = ""
            }
          d = M(d)
          var p = '<a href="' + d + '"'
          return (
            "" != f &&
              ((f = h(f)), (f = D(f, "*_")), (p += ' title="' + f + '"')),
            (p += ">" + l + "</a>")
          )
        }
        function p(e) {
          return -1 === e.indexOf("![")
            ? e
            : ((e = e.replace(
                /(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,
                g
              )),
              (e = e.replace(
                /(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,
                g
              )))
        }
        function h(e) {
          return e
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
        }
        function g(e, t, n, i, r, o, a, s) {
          var c = t,
            l = n,
            u = i.toLowerCase(),
            d = r,
            f = s
          if ((f || (f = ""), "" == d)) {
            if (
              ("" == u && (u = l.toLowerCase().replace(/ ?\n/g, " ")),
              (d = "#" + u),
              void 0 == B.get(u))
            )
              return c
            ;(d = B.get(u)), void 0 != F.get(u) && (f = F.get(u))
          }
          ;(l = D(h(l), "*_[]()")), (d = D(d, "*_"))
          var p = '<img src="' + d + '" alt="' + l + '"'
          return (
            (f = h(f)),
            (f = D(f, "*_")),
            (p += ' title="' + f + '"'),
            (p += " />")
          )
        }
        function m(e) {
          return (
            (e = e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(e, t) {
              return "<h1>" + l(t) + "</h1>\n\n"
            })),
            (e = e.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(e, t) {
              return "<h2>" + l(t) + "</h2>\n\n"
            })),
            (e = e.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(
              e,
              t,
              n
            ) {
              var i = t.length
              return "<h" + i + ">" + l(n) + "</h" + i + ">\n\n"
            }))
          )
        }
        function v(e, t) {
          e += "§0"
          var n = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(§0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm
          return (
            H
              ? (e = e.replace(n, function(e, n, i) {
                  var r,
                    o = n,
                    a = i.search(/[*+-]/g) > -1 ? "ul" : "ol"
                  "ol" === a && (r = parseInt(i, 10))
                  var s = b(o, a, t)
                  s = s.replace(/\s+$/, "")
                  var c = "<" + a
                  return (
                    r && 1 !== r && (c += ' start="' + r + '"'),
                    (s = c + ">" + s + "</" + a + ">\n")
                  )
                }))
              : ((n = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(§0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g),
                (e = e.replace(n, function(e, t, n, i) {
                  var r,
                    o = t,
                    a = n,
                    s = i.search(/[*+-]/g) > -1 ? "ul" : "ol"
                  "ol" === s && (r = parseInt(i, 10))
                  var c = b(a, s),
                    l = "<" + s
                  return (
                    r && 1 !== r && (l += ' start="' + r + '"'),
                    (c = o + l + ">\n" + c + "</" + s + ">\n")
                  )
                }))),
            (e = e.replace(/§0/, ""))
          )
        }
        function b(e, t) {
          H++, (e = e.replace(/\n{2,}$/, "\n")), (e += "§0")
          var n = K[t],
            i = new RegExp(
              "(^[ \\t]*)(" +
                n +
                ")[ \\t]+([^\\r]+?(\\n+))(?=(§0|\\1(" +
                n +
                ")[ \\t]+))",
              "gm"
            ),
            r = !1
          return (
            (e = e.replace(i, function(e, t, n, i) {
              var o = i,
                a = /\n\n$/.test(o),
                s = a || o.search(/\n{2,}/) > -1,
                l = s || r
              return (o = c(R(o), !0, !l)), (r = a), "<li>" + o + "</li>\n"
            })),
            (e = e.replace(/§0/g, "")),
            H--,
            e
          )
        }
        function y(e) {
          return (
            (e += "§0"),
            (e = e.replace(
              /(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=§0))/g,
              function(e, t, n) {
                var i = t,
                  r = n
                return (
                  (i = x(R(i))),
                  (i = L(i)),
                  (i = i.replace(/^\n+/g, "")),
                  (i = i.replace(/\n+$/g, "")),
                  (i = "<pre><code>" + i + "\n</code></pre>"),
                  "\n\n" + i + "\n\n" + r
                )
              }
            )),
            (e = e.replace(/§0/, ""))
          )
        }
        function w(e) {
          return (e = e.replace(
            /(?:\n|^)([ ]{0,3})(([`~])\3{2,})([^`\n]*)(?=\n)([^\r]*?)(?:(\n\n$)|\n([ ]{0,3})\2\3*[ ]*(?=\n|$))/g,
            function(e, t, n, i, r, o, s) {
              if ((o.length && (o = o.substr(1)), t.length)) {
                var c = new RegExp("^[ ]{1," + t.length + "}", "gm")
                o = o.replace(c, "")
              }
              r = r.trim()
              var l = ""
              ;/^[a-z0-9#+\-.]+$/i.test(r) &&
                (l = "<!-- language: " + r + " -->\n\n")
              var u = "<pre><code>" + x(o) + "\n</code></pre>"
              return (u = a(u)), "\n\n" + l + u + (s || "")
            }
          ))
        }
        function k(e) {
          return (e = e.replace(
            /(^|[^\\`])(`+)(?!`)([^\r]*?[^`])\2(?!`)/gm,
            function(e, t, n, i) {
              var r = i
              return (
                (r = r.replace(/^([ \t]*)/g, "")),
                (r = r.replace(/[ \t]*$/g, "")),
                (r = x(r)),
                (r = r.replace(/:\/\//g, "§P")),
                t + "<code>" + r + "</code>"
              )
            }
          ))
        }
        function x(e) {
          return (
            (e = e.replace(/&/g, "&amp;")),
            (e = e.replace(/</g, "&lt;")),
            (e = e.replace(/>/g, "&gt;")),
            (e = D(e, "*_{}[]\\`~", !1))
          )
        }
        function S(e) {
          return -1 === e.indexOf("*") && -1 === e.indexOf("_")
            ? e
            : ((e = V(e)),
              (e = e.replace(
                /(^|[\W_])(?:(?!\1)|(?=^))(\*|_)\2(?=\S)([^\r]*?\S)\2\2(?!\2)(?=[\W_]|$)/g,
                "$1<strong>$3</strong>"
              )),
              (e = e.replace(
                /(^|[\W_])(?:(?!\1)|(?=^))(\*|_)(?=\S)((?:(?!\2)[^\r])*?\S)\2(?!\2)(?=[\W_]|$)/g,
                "$1<em>$3</em>"
              )),
              G(e))
        }
        function E(e) {
          return -1 === e.indexOf("*") && -1 === e.indexOf("_")
            ? e
            : ((e = V(e)),
              (e = e.replace(
                /(?=[^\r][*_]|[*_])(^|(?=\W__|(?!\*)[\W_]\*\*|\w\*\*\w)[^\r])(\*\*|__)(?!\2)(?=\S)((?:|[^\r]*?(?!\2)[^\r])(?=\S_|\w|\S\*\*(?:[\W_]|$)).)(?=__(?:\W|$)|\*\*(?:[^*]|$))\2/g,
                "$1<strong>$3</strong>"
              )),
              (e = e.replace(
                /(?=[^\r][*_]|[*_])(^|(?=\W_|(?!\*)(?:[\W_]\*|\D\*(?=\w)\D))[^\r])(\*|_)(?!\2\2\2)(?=\S)((?:(?!\2)[^\r])*?(?=[^\s_]_|(?=\w)\D\*\D|[^\s*]\*(?:[\W_]|$)).)(?=_(?:\W|$)|\*(?:[^*]|$))\2/g,
                "$1<em>$3</em>"
              )),
              G(e))
        }
        function C(e) {
          return (e = e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(
            e,
            t
          ) {
            var n = t
            return (
              (n = n.replace(/^[ \t]*>[ \t]?/gm, "§0")),
              (n = n.replace(/§0/g, "")),
              (n = n.replace(/^[ \t]+$/gm, "")),
              (n = c(n)),
              (n = n.replace(/(^|\n)/g, "$1  ")),
              (n = n.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, t) {
                var n = t
                return (
                  (n = n.replace(/^  /gm, "§0")), (n = n.replace(/§0/g, ""))
                )
              })),
              a("<blockquote>\n" + n + "\n</blockquote>")
            )
          }))
        }
        function T(e, t, n) {
          ;(e = e.replace(/^\n+/g, "")), (e = e.replace(/\n+$/g, ""))
          for (
            var i = e.split(/\n{2,}/g),
              r = [],
              o = /§K(\d+)K/,
              a = i.length,
              s = 0;
            a > s;
            s++
          ) {
            var c = i[s]
            o.test(c)
              ? r.push(c)
              : /\S/.test(c) &&
                ((c = l(c)),
                (c = c.replace(/^([ \t]*)/g, n ? "" : "<p>")),
                n || (c += "</p>"),
                r.push(c))
          }
          if (!t) {
            a = r.length
            for (var s = 0; a > s; s++)
              for (var u = !0; u; )
                (u = !1),
                  (r[s] = r[s].replace(/§K(\d+)K/g, function(e, t) {
                    return (u = !0), q[t]
                  }))
          }
          return r.join("\n\n")
        }
        function _(e) {
          return (
            (e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")),
            (e = e.replace(/<(?![a-z\/?!]|§D)/gi, "&lt;"))
          )
        }
        function j(e) {
          return (
            (e = e.replace(/\\(\\)/g, N)),
            (e = e.replace(/\\([`*_{}\[\]()>#+-.!])/g, N))
          )
        }
        function I(e, t, n, i) {
          if (t) return e
          if (")" !== i.charAt(i.length - 1)) return "<" + n + i + ">"
          for (var r = i.match(/[()]/g), o = 0, a = 0; a < r.length; a++)
            "(" === r[a] ? (0 >= o ? (o = 1) : o++) : o--
          var s = ""
          if (0 > o) {
            var c = new RegExp("\\){1," + -o + "}$")
            i = i.replace(c, function(e) {
              return (s = e), ""
            })
          }
          if (s) {
            var l = i.charAt(i.length - 1)
            Z.test(l) || ((s = l + s), (i = i.substr(0, i.length - 1)))
          }
          return "<" + n + i + ">" + s
        }
        function A(e) {
          ;(e = V(e)), (e = e.replace(J, I)), (e = G(e))
          var n = function(e, t) {
            var n = M(t)
            return '<a href="' + n + '">' + U.plainLinkText(t) + "</a>"
          }
          return (
            (e = e.replace(/<((https?|ftp):[^'">\s]+)>/gi, n)),
            t.linkEmails &&
              ((e = e.replace(
                /(<|=")?(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)/gi,
                P
              )),
              (e = e.replace(
                /<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
                function(e, t) {
                  var n = O(t)
                  return '<a href="mailto:' + n + '">' + n + "</a>"
                }
              ))),
            e
          )
        }
        function P(e) {
          return e
            ? e.length > 0 && "<" === e[0]
              ? e
              : e.length > 1 && "=" === e[0] && '"' === e[1]
              ? e
              : "<" + e + ">"
            : ""
        }
        function O(e) {
          return (e = e.replace(/§E(\d+)E/g, function(e, t) {
            var n = parseInt(t)
            return String.fromCharCode(n)
          }))
        }
        function R(e) {
          return (
            (e = e.replace(/^(\t|[ ]{1,4})/gm, "§0")),
            (e = e.replace(/§0/g, ""))
          )
        }
        function L(e) {
          if (!/\t/.test(e)) return e
          var t,
            n = ["    ", "   ", "  ", " "],
            i = 0
          return e.replace(/[\n\t]/g, function(e, r) {
            return "\n" === e
              ? ((i = r + 1), e)
              : ((t = (r - i) % 4), (i = r + 1), n[t])
          })
        }
        function M(e) {
          return (e = h(e)), (e = D(e, "*_:()[]"))
        }
        function D(e, t, n) {
          var i = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])"
          n && (i = "\\\\" + i)
          var r = new RegExp(i, "g")
          return (e = e.replace(r, N))
        }
        function N(e, t) {
          var n = t.charCodeAt(0)
          return "§E" + n + "E"
        }
        var U = (this.hooks = new n())
        U.addNoop("plainLinkText"),
          U.addNoop("preConversion"),
          U.addNoop("postNormalization"),
          U.addNoop("preBlockGamut"),
          U.addNoop("postBlockGamut"),
          U.addNoop("preSpanGamut"),
          U.addNoop("postSpanGamut"),
          U.addNoop("postConversion")
        var B, F, q, H
        t = t || {}
        var V = e,
          G = e
        t.nonAsciiLetters &&
          !(function() {
            var e = /[Q\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u0660-\u0669\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07c0-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0966-\u096f\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09e6-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0ae6-\u0aef\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b66-\u0b6f\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0be6-\u0bef\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c66-\u0c6f\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0ce6-\u0cef\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d66-\u0d6f\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edd\u0f00\u0f20-\u0f29\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f-\u1049\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u1090-\u1099\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1946-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u19d0-\u19d9\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b50-\u1b59\u1b83-\u1ba0\u1bae-\u1bb9\u1c00-\u1c23\u1c40-\u1c49\u1c4d-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u203f-\u2040\u2054\u2071\u207f\u2090-\u2094\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183-\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3006\u3031-\u3035\u303b-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua62b\ua640-\ua65f\ua662-\ua66e\ua67f-\ua697\ua717-\ua71f\ua722-\ua788\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8d0-\ua8d9\ua900-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa50-\uaa59\uac00-\ud7a3\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/g,
              t = "Q".charCodeAt(0),
              n = "A".charCodeAt(0),
              i = "Z".charCodeAt(0),
              r = "a".charCodeAt(0) - i - 1
            ;(V = function(o) {
              return o.replace(e, function(e) {
                for (var o, a = e.charCodeAt(0), s = ""; a > 0; )
                  (o = (a % 51) + n),
                    o >= t && o++,
                    o > i && (o += r),
                    (s = String.fromCharCode(o) + s),
                    (a = (a / 51) | 0)
                return "Q" + s + "Q"
              })
            }),
              (G = function(e) {
                return e.replace(/Q([A-PR-Za-z]{1,3})Q/g, function(e, o) {
                  for (var a, s = 0, c = 0; c < o.length; c++)
                    (a = o.charCodeAt(c)),
                      a > i && (a -= r),
                      a > t && a--,
                      (a -= n),
                      (s = 51 * s + a)
                  return String.fromCharCode(s)
                })
              })
          })()
        var z = t.asteriskIntraWordEmphasis ? E : S
        ;(this.makeHtmlAsync = function(e) {
          var t = $.Deferred()
          return t.resolve(this.makeHtml(e)), t.promise()
        }),
          (this.loadMarkdownRendererAsync = function() {
            return $.when()
          }),
          (this.makeHtml = function(e) {
            if (B) throw new Error("Recursive call to converter.makeHtml")
            return (
              (B = new i()),
              (F = new i()),
              (q = []),
              (H = 0),
              (e = U.preConversion(e)),
              (e = e.replace(/§/g, "§T")),
              (e = e.replace(/\$/g, "§D")),
              (e = e.replace(/\r\n/g, "\n")),
              (e = e.replace(/\r/g, "\n")),
              (e = "\n\n" + e + "\n\n"),
              (e = L(e)),
              (e = e.replace(/^[ \t]+$/gm, "")),
              (e = U.postNormalization(e)),
              (e = w(e)),
              (e = o(e)),
              (e = r(e)),
              (e = c(e, !1, !1, !0)),
              (e = O(e)),
              (e = e.replace(/§D/g, "$$")),
              (e = e.replace(/§T/g, "§")),
              (e = U.postConversion(e)),
              (q = F = B = null),
              e
            )
          })
        var W = function(e) {
            return c(e)
          },
          K = { ol: "\\d+[.]", ul: "[*+-]" },
          Y = "[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]",
          Q = "[-A-Z0-9+&@#/%=~_|[\\])]",
          J = new RegExp(
            '(="|<)?\\b(https?|ftp)(://' + Y + "*" + Q + ")(?=$|\\W)",
            "gi"
          ),
          Z = new RegExp(Q, "i")
      })
  })(),
  (function() {
    function e() {}
    function t(e) {
      ;(this.buttonBar = d.getElementById("wmd-button-bar" + e)),
        (this.preview = d.getElementById("wmd-preview" + e)),
        (this.input = d.getElementById("wmd-input" + e))
    }
    function n(e, t) {
      var n,
        r,
        o,
        a = this,
        s = [],
        l = 0,
        u = "none",
        d = function(e, t) {
          u != e && ((u = e), t || p()),
            g.isIE && "moving" == u ? (o = null) : (r = setTimeout(f, 1))
        },
        f = function(e) {
          ;(o = new i(t, e)), (r = void 0)
        }
      ;(this.setCommandMode = function() {
        ;(u = "command"), p(), (r = setTimeout(f, 0))
      }),
        (this.canUndo = function() {
          return l > 1
        }),
        (this.canRedo = function() {
          return s[l + 1] ? !0 : !1
        }),
        (this.undo = function() {
          a.canUndo() &&
            (n
              ? (n.restore(), (n = null))
              : ((s[l] = new i(t)), s[--l].restore(), e && e())),
            (u = "none"),
            t.input.focus(),
            f()
        }),
        (this.redo = function() {
          a.canRedo() && (s[++l].restore(), e && e()),
            (u = "none"),
            t.input.focus(),
            f()
        })
      var p = function() {
          var r = o || new i(t)
          return r
            ? "moving" == u
              ? (n || (n = r), void 0)
              : (n && (s[l - 1].text != n.text && (s[l++] = n), (n = null)),
                (s[l++] = r),
                (s[l + 1] = null),
                e && e(),
                void 0)
            : !1
        },
        h = function(e) {
          var t = !1
          if ((e.ctrlKey || e.metaKey) && !e.altKey) {
            var n = e.charCode || e.keyCode,
              i = String.fromCharCode(n)
            switch (i.toLowerCase()) {
              case "y":
                a.redo(), (t = !0)
                break
              case "z":
                e.shiftKey ? a.redo() : a.undo(), (t = !0)
            }
          }
          return t
            ? (e.preventDefault && e.preventDefault(),
              window.event && (window.event.returnValue = !1),
              void 0)
            : void 0
        },
        m = function(e) {
          if (!e.ctrlKey && !e.metaKey) {
            var t = e.keyCode
            ;(t >= 33 && 40 >= t) || (t >= 63232 && 63235 >= t)
              ? d("moving")
              : 8 == t || 46 == t || 127 == t
              ? d("deleting")
              : 13 == t
              ? d("newlines")
              : 27 == t
              ? d("escape")
              : (16 > t || t > 20) && 91 != t && d("typing")
          }
        },
        v = function() {
          c.addEvent(t.input, "keypress", function(e) {
            ;(!e.ctrlKey && !e.metaKey) ||
              e.altKey ||
              (89 != e.keyCode && 90 != e.keyCode) ||
              e.preventDefault()
          })
          var e = function() {
            ;(g.isIE || (o && o.text != t.input.value)) &&
              void 0 == r &&
              ((u = "paste"), p(), f())
          }
          c.addEvent(t.input, "keydown", h),
            c.addEvent(t.input, "keydown", m),
            c.addEvent(t.input, "mousedown", function() {
              d("moving")
            }),
            (t.input.onpaste = e),
            (t.input.ondrop = e)
        },
        b = function() {
          v(), f(!0), p()
        }
      b()
    }
    function i(t, n) {
      var i = this,
        r = t.input
      ;(this.init = function() {
        c.isVisible(r) &&
          (n || !d.activeElement || d.activeElement === r) &&
          (this.setInputAreaSelectionStartEnd(),
          (this.scrollTop = r.scrollTop),
          ((!this.text && r.selectionStart) || 0 === r.selectionStart) &&
            (this.text = r.value))
      }),
        (this.setInputAreaSelection = function() {
          if (c.isVisible(r))
            if (void 0 === r.selectionStart || g.isOpera) {
              if (d.selection) {
                if (d.activeElement && d.activeElement !== r) return
                r.focus()
                var e = r.createTextRange()
                e.moveStart("character", -r.value.length),
                  e.moveEnd("character", -r.value.length),
                  e.moveEnd("character", i.end),
                  e.moveStart("character", i.start),
                  e.select()
              }
            } else
              r.focus(),
                (r.selectionStart = i.start),
                (r.selectionEnd = i.end),
                (r.scrollTop = i.scrollTop)
        }),
        (this.setInputAreaSelectionStartEnd = function() {
          if (
            t.ieCachedRange ||
            (!r.selectionStart && 0 !== r.selectionStart)
          ) {
            if (d.selection) {
              i.text = c.fixEolChars(r.value)
              var e = t.ieCachedRange || d.selection.createRange(),
                n = c.fixEolChars(e.text),
                o = "",
                a = o + n + o
              e.text = a
              var s = c.fixEolChars(r.value)
              e.moveStart("character", -a.length),
                (e.text = n),
                (i.start = s.indexOf(o)),
                (i.end = s.lastIndexOf(o) - o.length)
              var l = i.text.length - c.fixEolChars(r.value).length
              if (l) {
                for (e.moveStart("character", -n.length); l--; )
                  (n += "\n"), (i.end += 1)
                e.text = n
              }
              t.ieCachedRange && (i.scrollTop = t.ieCachedScrollTop),
                (t.ieCachedRange = null),
                this.setInputAreaSelection()
            }
          } else (i.start = r.selectionStart), (i.end = r.selectionEnd)
        }),
        (this.restore = function() {
          void 0 != i.text && i.text != r.value && (r.value = i.text),
            this.setInputAreaSelection(),
            (r.scrollTop = i.scrollTop)
        }),
        (this.getChunks = function() {
          var t = new e()
          return (
            (t.before = c.fixEolChars(i.text.substring(0, i.start))),
            (t.startTag = ""),
            (t.selection = c.fixEolChars(i.text.substring(i.start, i.end))),
            (t.endTag = ""),
            (t.after = c.fixEolChars(i.text.substring(i.end))),
            (t.scrollTop = i.scrollTop),
            t
          )
        }),
        (this.setChunks = function(e) {
          ;(e.before = e.before + e.startTag),
            (e.after = e.endTag + e.after),
            (this.start = e.before.length),
            (this.end = e.before.length + e.selection.length),
            (this.text = e.before + e.selection + e.after),
            (this.scrollTop = e.scrollTop)
        }),
        this.init()
    }
    function r(e, t, n) {
      var i,
        r,
        o,
        a = 3e3,
        s = "delayed",
        u = function(e, t) {
          c.addEvent(e, "input", t),
            (e.onpaste = t),
            (e.ondrop = t),
            c.addEvent(e, "keypress", t),
            c.addEvent(e, "keydown", t)
        },
        f = function() {
          var e = 0
          return (
            window.innerHeight
              ? (e = window.pageYOffset)
              : d.documentElement && d.documentElement.scrollTop
              ? (e = d.documentElement.scrollTop)
              : d.body && (e = d.body.scrollTop),
            e
          )
        },
        p = function() {
          if (t.preview) {
            var n = t.input.value
            if (!n || n != o) {
              o = n
              var i = new Date().getTime()
              e.makeHtmlAsync(n).then(function(e) {
                var t = new Date().getTime()
                ;(r = t - i), S(e)
              })
            }
          }
        },
        h = function() {
          if ((i && (clearTimeout(i), (i = void 0)), "manual" !== s)) {
            var e = 0
            "delayed" === s && (e = r), e > a && (e = a), (i = setTimeout(p, e))
          }
        },
        m = function(e) {
          return e.scrollHeight <= e.clientHeight
            ? 1
            : e.scrollTop / (e.scrollHeight - e.clientHeight)
        },
        v = function() {
          t.preview &&
            (t.preview.scrollTop =
              (t.preview.scrollHeight - t.preview.clientHeight) * m(t.preview))
        }
      ;(this.refresh = function(e) {
        e ? ((o = ""), p()) : h()
      }),
        (this.processingTime = function() {
          return r
        })
      var b,
        y = !0,
        w = function(e) {
          var n = t.preview,
            i = n.parentNode,
            r = n.nextSibling
          i.removeChild(n),
            (n.innerHTML = e),
            r ? i.insertBefore(n, r) : i.appendChild(n)
        },
        k = function(e) {
          t.preview.innerHTML = e
        },
        x = function(e) {
          if (b) return b(e)
          try {
            k(e), (b = k)
          } catch (t) {
            ;(b = w), b(e)
          }
        },
        S = function(e) {
          var i = l.getTop(t.input) - f()
          if ((t.preview && (x(e), n()), v(), y)) return (y = !1), void 0
          var r = l.getTop(t.input) - f()
          g.isIE
            ? setTimeout(function() {
                window.scrollBy(0, r - i)
              }, 0)
            : window.scrollBy(0, r - i)
        },
        E = function() {
          u(t.input, h), p(), t.preview && (t.preview.scrollTop = 0)
        }
      E()
    }
    function o(e, t, n, r, o, a, s) {
      function l(e, a) {
        if ((v.focus(), e.id && !a)) {
          var s = e.id.replace(/^wmd-(\w+)-.*$/, "$1")
          if (
            w[s] &&
            o.hooks.interceptButtonClick(e, s, function() {
              l(e, !0)
            })
          )
            return
        }
        if (e.textOp) {
          n && n.setCommandMode()
          var c = new i(t)
          if (!c) return
          var u = c.getChunks(),
            d = function() {
              v.focus(), u && c.setChunks(u), c.restore(), r.refresh()
            },
            f = e.textOp(u, d)
          f || d()
        }
        e.execute && e.execute(n)
      }
      function u(e, n) {
        var i = "0px",
          r = "-20px",
          o = "-40px",
          a = e.getElementsByTagName("span")[0]
        n
          ? ((a.style.backgroundPosition = e.XShift + " " + i),
            (e.onmouseover = function() {
              a.style.backgroundPosition = this.XShift + " " + o
            }),
            (e.onmouseout = function() {
              a.style.backgroundPosition = this.XShift + " " + i
            }),
            g.isIE &&
              (e.onmousedown = function() {
                ;(d.activeElement && d.activeElement !== t.input) ||
                  ((t.ieCachedRange = document.selection.createRange()),
                  (t.ieCachedScrollTop = t.input.scrollTop))
              }),
            e.isHelp ||
              (e.onclick = function() {
                return this.onmouseout && this.onmouseout(), l(this), !1
              }))
          : ((a.style.backgroundPosition = e.XShift + " " + r),
            (e.onmouseover = e.onmouseout = e.onclick = function() {}))
      }
      function f(e) {
        return (
          "string" == typeof e && (e = o[e]),
          function() {
            e.apply(o, arguments)
          }
        )
      }
      function h() {
        var n = t.buttonBar,
          i = document.createElement("ul")
        ;(i.id = "wmd-button-row" + e),
          (i.className = "wmd-button-row"),
          (i = n.appendChild(i))
        var r = function(t, n, r, o) {
            var a = document.createElement("li")
            a.className = "wmd-button"
            var s = document.createElement("span")
            return (
              (a.id = t + e),
              a.appendChild(s),
              (a.title = n),
              (a.XShift = r),
              o && (a.textOp = o),
              u(a, !0),
              i.appendChild(a),
              a
            )
          },
          o = function(t) {
            var n = document.createElement("li")
            ;(n.className = "wmd-spacer wmd-spacer" + t),
              (n.id = "wmd-spacer" + t + e),
              i.appendChild(n)
          }
        ;(b.bold = r("wmd-bold-button", s("bold"), "0px", f("doBold"))),
          (b.italic = r(
            "wmd-italic-button",
            s("italic"),
            "-20px",
            f("doItalic")
          )),
          o(1),
          (b.link = r(
            "wmd-link-button",
            s("link"),
            "-40px",
            f(function(e, t) {
              return this.doLinkOrImage(e, t, !1)
            })
          )),
          (b.quote = r(
            "wmd-quote-button",
            s("quote"),
            "-60px",
            f("doBlockquote")
          )),
          (b.code = r("wmd-code-button", s("code"), "-80px", f("doCode"))),
          (b.image = r(
            "wmd-image-button",
            s("image"),
            "-100px",
            f(function(e, t) {
              return this.doLinkOrImage(e, t, !0)
            })
          )),
          o(2),
          (b.olist = r(
            "wmd-olist-button",
            s("olist"),
            "-120px",
            f(function(e, t) {
              this.doList(e, t, !0)
            })
          )),
          (b.ulist = r(
            "wmd-ulist-button",
            s("ulist"),
            "-140px",
            f(function(e, t) {
              this.doList(e, t, !1)
            })
          )),
          (b.heading = r(
            "wmd-heading-button",
            s("heading"),
            "-160px",
            f("doHeading")
          )),
          (b.hr = r("wmd-hr-button", s("hr"), "-180px", f("doHorizontalRule"))),
          o(3),
          (b.undo = r("wmd-undo-button", s("undo"), "-200px", null)),
          (b.undo.execute = function(e) {
            e && e.undo()
          })
        var c = /win/.test(p.platform.toLowerCase()) ? s("redo") : s("redomac")
        ;(b.redo = r("wmd-redo-button", c, "-220px", null)),
          (b.redo.execute = function(e) {
            e && e.redo()
          })
        var l = document.createElement("li")
        if (
          ((l.className = "wmd-spacer wmd-spacer-max"), i.appendChild(l), a)
        ) {
          var d = $("body").hasClass("js-ask-page-v2"),
            h = document.createElement("li"),
            g = document.createElement("span")
          h.appendChild(g),
            d
              ? ((h.className = "s-btn s-btn__muted s-btn__sm as-center"),
                (h.innerText = "Show formatting tips"))
              : (h.className = "wmd-button wmd-help-button"),
            (h.id = "wmd-help-button" + e),
            (h.XShift = "-240px"),
            (h.isHelp = !0),
            (h.style.right = "0px"),
            (h.title = s("help")),
            (h.onclick = a.handler),
            d || u(h, !0),
            i.appendChild(h),
            (b.help = h)
        }
        m()
      }
      function m() {
        n && (u(b.undo, n.canUndo()), u(b.redo, n.canRedo()))
      }
      var v = t.input,
        b = {}
      h()
      var y = "keydown"
      g.isOpera && (y = "keypress"),
        c.addEvent(v, y, function(e) {
          if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
            var t = e.charCode || e.keyCode,
              n = String.fromCharCode(t).toLowerCase()
            switch (n) {
              case "b":
                l(b.bold)
                break
              case "i":
                l(b.italic)
                break
              case "l":
                l(b.link)
                break
              case "q":
                l(b.quote)
                break
              case "k":
                l(b.code)
                break
              case "g":
                l(b.image)
                break
              case "o":
                l(b.olist)
                break
              case "u":
                l(b.ulist)
                break
              case "h":
                l(b.heading)
                break
              case "r":
                l(b.hr)
                break
              case "y":
                l(b.redo)
                break
              case "z":
                e.shiftKey ? l(b.redo) : l(b.undo)
                break
              default:
                return
            }
            e.preventDefault && e.preventDefault(),
              window.event && (window.event.returnValue = !1)
          }
        }),
        c.addEvent(v, "keyup", function(e) {
          if (e.shiftKey && !e.ctrlKey && !e.metaKey) {
            var t = e.charCode || e.keyCode
            if (13 === t) {
              var n = {}
              ;(n.textOp = f("doAutoindent")), l(n)
            }
          }
        }),
        g.isIE &&
          c.addEvent(v, "keydown", function(e) {
            var t = e.keyCode
            return 27 === t ? !1 : void 0
          })
      var w = { link: !0, image: !0 }
      this.setUndoRedoButtonStates = m
    }
    function a(e, t, n, i, r) {
      ;(this.hooks = e),
        (this.getString = t),
        (this.converter = n),
        (this.wrapImageInLink = i),
        (this.convertImagesToLinks = r)
    }
    function s(e) {
      return e.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/, function(e, t, n) {
        var i = !1
        return (
          (t = t.replace(/%(?:[\da-fA-F]{2})|\?|\+|[^\w\d-./[\]]/g, function(
            e
          ) {
            if (3 === e.length && "%" == e.charAt(0)) return e.toUpperCase()
            switch (e) {
              case "?":
                return (i = !0), "?"
              case "+":
                if (i) return "%20"
            }
            return encodeURI(e)
          })),
          n &&
            ((n = n.trim
              ? n.trim()
              : n.replace(/^\s*/, "").replace(/\s*$/, "")),
            (n = n
              .replace(/"/g, "quot;")
              .replace(/\(/g, "&#40;")
              .replace(/\)/g, "&#41;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;"))),
          n ? t + ' "' + n + '"' : t
        )
      })
    }
    var c = {},
      l = {},
      u = {},
      d = window.document,
      f = window.RegExp,
      p = window.navigator,
      h = { lineLength: 72 },
      g = {
        isIE: /msie/.test(p.userAgent.toLowerCase()),
        isIE_5or6:
          /msie 6/.test(p.userAgent.toLowerCase()) ||
          /msie 5/.test(p.userAgent.toLowerCase()),
        isOpera: /opera/.test(p.userAgent.toLowerCase()),
      },
      m = {
        bold: "Strong <strong> Ctrl+B",
        boldexample: "strong text",
        italic: "Emphasis <em> Ctrl+I",
        italicexample: "emphasized text",
        link: "Hyperlink <a> Ctrl+L",
        linkdescription: "enter link description here",
        linkdialog:
          '<p><b>Insert Hyperlink</b></p><p>http://example.com/ "optional title"</p>',
        quote: "Blockquote <blockquote> Ctrl+Q",
        quoteexample: "Blockquote",
        code: "Code Sample <pre><code> Ctrl+K",
        codeexample: "enter code here",
        image: "Image <img> Ctrl+G",
        imagedescription: "enter image description here",
        imagedialog:
          '<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg "optional title"</p>',
        olist: "Numbered List <ol> Ctrl+O",
        ulist: "Bulleted List <ul> Ctrl+U",
        litem: "List item",
        heading: "Heading <h1>/<h2> Ctrl+H",
        headingexample: "Heading",
        hr: "Horizontal Rule <hr> Ctrl+R",
        undo: "Undo - Ctrl+Z",
        redo: "Redo - Ctrl+Y",
        redomac: "Redo - Ctrl+Shift+Z",
        help: "Markdown Editing Help",
        ok: "OK",
        cancel: "Cancel",
      },
      v = "http://",
      b = "http://"
    ;(Markdown.Editor = function(e, i, s) {
      ;(s = s || {}),
        "function" == typeof s.handler && (s = { helpButton: s }),
        (s.strings = s.strings || {}),
        s.helpButton && (s.strings.help = s.strings.help || s.helpButton.title)
      var c = function(e) {
        return s.strings[e] || m[e]
      }
      ;(i = i || ""),
        (this.getPostfix = function() {
          return i
        })
      var l = (this.hooks = new Markdown.HookCollection())
      l.addNoop("onPreviewRefresh"),
        l.addNoop("postBlockquoteCreation"),
        l.addFalse("insertImageDialog"),
        l.addNoop("imageConvertedToLink"),
        l.addFalse("insertLinkDialog"),
        l.addFalse("interceptButtonClick"),
        l.addFalse("skipModalBackground"),
        (this.getConverter = function() {
          return e
        })
      var u,
        f = this
      this.run = function() {
        if (!u) {
          u = new t(i)
          var p,
            h,
            g = new a(l, c, e, s.wrapImageInLink, s.convertImagesToLinks),
            m = new r(e, u, function() {
              l.onPreviewRefresh()
            })
          ;/\?noundo/.test(d.location.href) ||
            ((p = new n(function() {
              m.refresh(), h && h.setUndoRedoButtonStates()
            }, u)),
            (this.textOperation = function(e) {
              p.setCommandMode(), e(), f.refreshPreview()
            })),
            (h = new o(i, u, p, m, g, s.helpButton, c)),
            h.setUndoRedoButtonStates()
          var v = (f.refreshPreview = function() {
            m.refresh(!0)
          })
          v()
        }
      }
    }),
      (e.prototype.findTags = function(e, t) {
        var n,
          i = this
        e &&
          ((n = c.extendRegExp(e, "", "$")),
          (this.before = this.before.replace(n, function(e) {
            return (i.startTag = i.startTag + e), ""
          })),
          (n = c.extendRegExp(e, "^", "")),
          (this.selection = this.selection.replace(n, function(e) {
            return (i.startTag = i.startTag + e), ""
          }))),
          t &&
            ((n = c.extendRegExp(t, "", "$")),
            (this.selection = this.selection.replace(n, function(e) {
              return (i.endTag = e + i.endTag), ""
            })),
            (n = c.extendRegExp(t, "^", "")),
            (this.after = this.after.replace(n, function(e) {
              return (i.endTag = e + i.endTag), ""
            })))
      }),
      (e.prototype.trimWhitespace = function(e) {
        var t,
          n,
          i = this
        e
          ? (t = n = "")
          : ((t = function(e) {
              return (i.before += e), ""
            }),
            (n = function(e) {
              return (i.after = e + i.after), ""
            })),
          (this.selection = this.selection
            .replace(/^(\s*)/, t)
            .replace(/(\s*)$/, n))
      }),
      (e.prototype.skipLines = function(e, t, n) {
        void 0 === e && (e = 1), void 0 === t && (t = 1), e++, t++
        var i, r
        if (
          (navigator.userAgent.match(/Chrome/) && "X".match(/()./),
          (this.selection = this.selection.replace(/(^\n*)/, "")),
          (this.startTag = this.startTag + f.$1),
          (this.selection = this.selection.replace(/(\n*$)/, "")),
          (this.endTag = this.endTag + f.$1),
          (this.startTag = this.startTag.replace(/(^\n*)/, "")),
          (this.before = this.before + f.$1),
          (this.endTag = this.endTag.replace(/(\n*$)/, "")),
          (this.after = this.after + f.$1),
          this.before)
        ) {
          for (i = r = ""; e--; ) (i += "\\n?"), (r += "\n")
          n && (i = "\\n*"),
            (this.before = this.before.replace(new f(i + "$", ""), r))
        }
        if (this.after) {
          for (i = r = ""; t--; ) (i += "\\n?"), (r += "\n")
          n && (i = "\\n*"), (this.after = this.after.replace(new f(i, ""), r))
        }
      }),
      (c.isVisible = function(e) {
        return window.getComputedStyle
          ? "none" !==
              window.getComputedStyle(e, null).getPropertyValue("display")
          : e.currentStyle
          ? "none" !== e.currentStyle.display
          : void 0
      }),
      (c.addEvent = function(e, t, n) {
        e.attachEvent
          ? e.attachEvent("on" + t, n)
          : e.addEventListener(t, n, !1)
      }),
      (c.removeEvent = function(e, t, n) {
        e.detachEvent
          ? e.detachEvent("on" + t, n)
          : e.removeEventListener(t, n, !1)
      }),
      (c.fixEolChars = function(e) {
        return (e = e.replace(/\r\n/g, "\n")), (e = e.replace(/\r/g, "\n"))
      }),
      (c.extendRegExp = function(e, t, n) {
        ;(null === t || void 0 === t) && (t = ""),
          (null === n || void 0 === n) && (n = "")
        var i,
          r = e.toString()
        return (
          (r = r.replace(/\/([gim]*)$/, function(e, t) {
            return (i = t), ""
          })),
          (r = r.replace(/(^\/|\/$)/g, "")),
          (r = t + r + n),
          new f(r, i)
        )
      }),
      (l.getTop = function(e, t) {
        var n = e.offsetTop
        if (!t) for (; (e = e.offsetParent); ) n += e.offsetTop
        return n
      }),
      (l.getHeight = function(e) {
        return e.offsetHeight || e.scrollHeight
      }),
      (l.getWidth = function(e) {
        return e.offsetWidth || e.scrollWidth
      }),
      (l.getPageSize = function() {
        var e, t, n, i
        self.innerHeight && self.scrollMaxY
          ? ((e = d.body.scrollWidth), (t = self.innerHeight + self.scrollMaxY))
          : d.body.scrollHeight > d.body.offsetHeight
          ? ((e = d.body.scrollWidth), (t = d.body.scrollHeight))
          : ((e = d.body.offsetWidth), (t = d.body.offsetHeight)),
          self.innerHeight
            ? ((n = self.innerWidth), (i = self.innerHeight))
            : d.documentElement && d.documentElement.clientHeight
            ? ((n = d.documentElement.clientWidth),
              (i = d.documentElement.clientHeight))
            : d.body && ((n = d.body.clientWidth), (i = d.body.clientHeight))
        var r = Math.max(e, n),
          o = Math.max(t, i)
        return [r, o, n, i]
      }),
      (u.createBackground = function() {
        var e = d.createElement("div"),
          t = e.style
        ;(e.className = "wmd-prompt-background"),
          (t.position = "absolute"),
          (t.top = "0"),
          (t.zIndex = "8950"),
          g.isIE ? (t.filter = "alpha(opacity=50)") : (t.opacity = "0.5")
        var n = l.getPageSize()
        return (
          (t.height = n[1] + "px"),
          g.isIE
            ? ((t.left = d.documentElement.scrollLeft),
              (t.width = d.documentElement.clientWidth))
            : ((t.left = "0"), (t.width = "100%")),
          d.body.appendChild(e),
          e
        )
      }),
      (u.prompt = function(e, t, n, i, r) {
        var o, a
        void 0 === t && (t = "")
        var s = function(e) {
            var t = e.charCode || e.keyCode
            return 27 === t
              ? (e.stopPropagation && e.stopPropagation(), u(!0), !1)
              : void 0
          },
          u = function(e) {
            c.removeEvent(d.body, "keyup", s)
            var t = a.value
            return (
              e
                ? (t = null)
                : ((t = t.replace(/^http:\/\/(https?|ftp):\/\//, "$1://")),
                  /^(?:https?|ftp):\/\//.test(t) || (t = "http://" + t)),
              o.parentNode.removeChild(o),
              r(t),
              !1
            )
          },
          f = function() {
            ;(o = d.createElement("div")),
              (o.className = "wmd-prompt-dialog"),
              (o.style.padding = "10px;"),
              (o.style.position = "fixed"),
              (o.style.width = "400px"),
              (o.style.zIndex = "9000")
            var n = d.createElement("div")
            ;(n.innerHTML = e), (n.style.padding = "5px"), o.appendChild(n)
            var i = d.createElement("form"),
              r = i.style
            ;(i.onsubmit = function() {
              return u(!1)
            }),
              (r.padding = "0"),
              (r.margin = "0"),
              (r.cssFloat = "left"),
              (r.width = "100%"),
              (r.textAlign = "center"),
              (r.position = "relative"),
              o.appendChild(i),
              (a = d.createElement("input")),
              (a.type = "text"),
              (a.className = "s-input mb16"),
              (a.value = t),
              (r = a.style),
              (r.display = "block"),
              (r.width = "80%"),
              (r.marginLeft = r.marginRight = "auto"),
              i.appendChild(a)
            var f = d.createElement("button")
            ;(f.className = "s-btn s-btn__primary"),
              (f.type = "button"),
              (f.onclick = function() {
                return u(!1)
              }),
              (f.innerText = "Insert")
            var p = d.createElement("button")
            ;(p.type = "button"),
              (p.onclick = function() {
                return u(!0)
              }),
              (p.className = "s-btn ml8"),
              (p.innerText = "Cancel"),
              i.appendChild(f),
              i.appendChild(p),
              c.addEvent(d.body, "keyup", s),
              (o.style.top = "50%"),
              (o.style.left = "50%"),
              (o.style.display = "block"),
              g.isIE_5or6 &&
                ((o.style.position = "absolute"),
                (o.style.top = d.documentElement.scrollTop + 200 + "px"),
                (o.style.left = "50%")),
              d.body.appendChild(o),
              (o.style.marginTop = -(l.getHeight(o) / 2) + "px"),
              (o.style.marginLeft = -(l.getWidth(o) / 2) + "px")
          }
        setTimeout(function() {
          f(n, i)
          var e = t.length
          if (void 0 !== a.selectionStart)
            (a.selectionStart = 0), (a.selectionEnd = e)
          else if (a.createTextRange) {
            var r = a.createTextRange()
            r.collapse(!1),
              r.moveStart("character", -e),
              r.moveEnd("character", e),
              r.select()
          }
          a.focus()
        }, 0)
      })
    var y = a.prototype
    ;(y.prefixes =
      "(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)"),
      (y.unwrap = function(e) {
        var t = new f("([^\\n])\\n(?!(\\n|" + this.prefixes + "))", "g")
        e.selection = e.selection.replace(t, "$1 $2")
      }),
      (y.wrap = function(e, t) {
        this.unwrap(e)
        var n = new f("(.{1," + t + "})( +|$\\n?)", "gm"),
          i = this
        ;(e.selection = e.selection.replace(n, function(e, t) {
          return new f("^" + i.prefixes, "").test(e) ? e : t + "\n"
        })),
          (e.selection = e.selection.replace(/\s+$/, ""))
      }),
      (y.doBold = function(e, t) {
        return this.doBorI(e, t, 2, this.getString("boldexample"))
      }),
      (y.doItalic = function(e, t) {
        return this.doBorI(e, t, 1, this.getString("italicexample"))
      }),
      (y.doBorI = function(e, t, n, i) {
        e.trimWhitespace(), (e.selection = e.selection.replace(/\n{2,}/g, "\n"))
        var r = /(\**$)/.exec(e.before)[0],
          o = /(^\**)/.exec(e.after)[0],
          a = Math.min(r.length, o.length)
        if (a >= n && (2 != a || 1 != n))
          (e.before = e.before.replace(f("[*]{" + n + "}$", ""), "")),
            (e.after = e.after.replace(f("^[*]{" + n + "}", ""), ""))
        else if (!e.selection && o) {
          ;(e.after = e.after.replace(/^([*_]*)/, "")),
            (e.before = e.before.replace(/(\s?)$/, ""))
          var s = f.$1
          e.before = e.before + o + s
        } else {
          e.selection || o || (e.selection = i)
          var c = 1 >= n ? "*" : "**"
          ;(e.before = e.before + c), (e.after = c + e.after)
        }
      }),
      (y.stripLinkDefs = function(e, t) {
        return (e = e.replace(
          /^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,
          function(e, n, i, r, o) {
            return (
              (t[n] = e.replace(/\s*$/, "")),
              r ? ((t[n] = e.replace(/["(](.+?)[")]$/, "")), r + o) : ""
            )
          }
        ))
      }),
      (y.addLinkDef = function(e, t) {
        var n = 0,
          i = {}
        ;(e.before = this.stripLinkDefs(e.before, i)),
          (e.selection = this.stripLinkDefs(e.selection, i)),
          (e.after = this.stripLinkDefs(e.after, i))
        for (
          var r = "",
            o = /\[(\d+)\]/g,
            a = e.before + e.selection + e.after,
            s = this.converter.makeHtml(a),
            c = "https://this-is-a-real-link.biz/";
          -1 != s.indexOf(c);

        )
          c += "nicetry/"
        var l = "\n\n",
          u = a.replace(o, function(e, t, n) {
            return (l += " [" + n + "]: " + c + n + "/unicorn\n"), "[" + n + "]"
          })
        s = this.converter.makeHtml(u + l)
        var d = function(e) {
            return -1 !== s.indexOf(c + e + "/unicorn")
          },
          f = {},
          p = function(e) {
            var t = e.replace(/^[ ]{0,3}\[(\d+)\]:/, ""),
              i = "L_" + t
            return i in f
              ? f[i]
              : (n++,
                (e = "  [" + n + "]:" + t),
                (r += "\n" + e),
                (f[i] = n),
                n)
          },
          h = 0,
          g = function(e, t, n) {
            if (!d(h + n)) return e
            if (i[t]) {
              var r = p(i[t])
              return "[" + r + "]"
            }
            return e
          },
          m = e.before.length
        ;(e.before = e.before.replace(o, g)), (h += m), (m = e.selection.length)
        var v
        return (
          t ? (v = p(t)) : (e.selection = e.selection.replace(o, g)),
          (h += m),
          (e.after = e.after.replace(o, g)),
          e.after && (e.after = e.after.replace(/\n*$/, "")),
          e.after || (e.selection = e.selection.replace(/\n*$/, "")),
          (e.after += "\n\n" + r),
          v
        )
      }),
      (y.doLinkOrImage = function(e, t, n) {
        this.converter.loadMarkdownRendererAsync(),
          e.trimWhitespace(),
          e.findTags(/\s*!?\[/, /\][ ]?(?:\n[ ]*)?(\[.*?\])?/)
        var i,
          r = this.wrapImageInLink,
          o = this.convertImagesToLinks
        if (!(e.endTag.length > 1 && e.startTag.length > 0)) {
          if (
            ((e.selection = e.startTag + e.selection + e.endTag),
            (e.startTag = e.endTag = ""),
            /\n\n/.test(e.selection))
          )
            return this.addLinkDef(e, null), void 0
          var a = this,
            c = function(c) {
              if (
                (i && i.parentNode && i.parentNode.removeChild(i), null !== c)
              ) {
                e.selection = (" " + e.selection)
                  .replace(/([^\\](?:\\\\)*)(?=[[\]])/g, "$1\\")
                  .substr(1)
                var l = " [999]: " + s(c),
                  u = a.addLinkDef(e, l)
                ;(!n || (r && !o)) &&
                  ((e.startTag = "["), (e.endTag = "][" + u + "]")),
                  n &&
                    ((e.startTag += o ? "[" : "!["),
                    (e.endTag = "][" + u + "]" + e.endTag)),
                  e.selection ||
                    (e.selection = n
                      ? a.getString("imagedescription")
                      : a.getString("linkdescription")),
                  n && o && a.hooks.imageConvertedToLink()
              }
              t()
            }
          return (
            this.hooks.skipModalBackground(n ? "image" : "link") ||
              (i = u.createBackground()),
            n
              ? this.hooks.insertImageDialog(c) ||
                u.prompt(
                  this.getString("imagedialog"),
                  v,
                  this.getString("ok"),
                  this.getString("cancel"),
                  c
                )
              : this.hooks.insertLinkDialog(c) ||
                u.prompt(
                  this.getString("linkdialog"),
                  b,
                  this.getString("ok"),
                  this.getString("cancel"),
                  c
                ),
            !0
          )
        }
        ;(e.startTag = e.startTag.replace(/!?\[/, "")),
          (e.endTag = ""),
          this.addLinkDef(e, null)
      }),
      (y.doAutoindent = function(e) {
        var t = this,
          n = !1
        ;(e.before = e.before.replace(
          /(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/,
          "\n\n"
        )),
          (e.before = e.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/, "\n\n")),
          (e.before = e.before.replace(/(\n|^)[ \t]+\n$/, "\n\n")),
          e.selection ||
            /^[ \t]*(?:\n|$)/.test(e.after) ||
            ((e.after = e.after.replace(/^[^\n]*/, function(t) {
              return (e.selection = t), ""
            })),
            (n = !0)),
          /(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(e.before) &&
            t.doList &&
            t.doList(e),
          /(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(e.before) &&
            t.doBlockquote &&
            t.doBlockquote(e),
          /(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before) && t.doCode && t.doCode(e),
          n && ((e.after = e.selection + e.after), (e.selection = ""))
      }),
      (y.doBlockquote = function(e) {
        ;(e.selection = e.selection.replace(/^(\n*)([^\r]+?)(\n*)$/, function(
          t,
          n,
          i,
          r
        ) {
          return (e.before += n), (e.after = r + e.after), i
        })),
          (e.before = e.before.replace(/(>[ \t]*)$/, function(t, n) {
            return (e.selection = n + e.selection), ""
          })),
          (e.selection = e.selection.replace(/^(\s|>)+$/, "")),
          (e.selection = e.selection || this.getString("quoteexample"))
        var t,
          n = "",
          i = ""
        if (e.before) {
          for (
            var r = e.before.replace(/\n$/, "").split("\n"), o = !1, a = 0;
            a < r.length;
            a++
          ) {
            var s = !1
            ;(t = r[a]),
              (o = o && t.length > 0),
              /^>/.test(t)
                ? ((s = !0), !o && t.length > 1 && (o = !0))
                : (s = /^[ \t]*$/.test(t) ? !0 : o),
              s ? (n += t + "\n") : ((i += n + t), (n = "\n"))
          }
          ;/(^|\n)>/.test(n) || ((i += n), (n = ""))
        }
        ;(e.startTag = n),
          (e.before = i),
          e.after && (e.after = e.after.replace(/^\n?/, "\n")),
          (e.after = e.after.replace(
            /^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,
            function(t) {
              return (e.endTag = t), ""
            }
          ))
        var c = function(t) {
          var n = t ? "> " : ""
          e.startTag &&
            (e.startTag = e.startTag.replace(/\n((>|\s)*)\n$/, function(e, t) {
              return "\n" + t.replace(/^[ ]{0,3}>?[ \t]*$/gm, n) + "\n"
            })),
            e.endTag &&
              (e.endTag = e.endTag.replace(/^\n((>|\s)*)\n/, function(e, t) {
                return "\n" + t.replace(/^[ ]{0,3}>?[ \t]*$/gm, n) + "\n"
              }))
        }
        ;/^(?![ ]{0,3}>)/m.test(e.selection)
          ? (this.wrap(e, h.lineLength - 2),
            (e.selection = e.selection.replace(/^/gm, "> ")),
            c(!0),
            e.skipLines())
          : ((e.selection = e.selection.replace(/^[ ]{0,3}> ?/gm, "")),
            this.unwrap(e),
            c(!1),
            !/^(\n|^)[ ]{0,3}>/.test(e.selection) &&
              e.startTag &&
              (e.startTag = e.startTag.replace(/\n{0,2}$/, "\n\n")),
            !/(\n|^)[ ]{0,3}>.*$/.test(e.selection) &&
              e.endTag &&
              (e.endTag = e.endTag.replace(/^\n{0,2}/, "\n\n"))),
          (e.selection = this.hooks.postBlockquoteCreation(e.selection)),
          /\n/.test(e.selection) ||
            (e.selection = e.selection.replace(/^(> *)/, function(t, n) {
              return (e.startTag += n), ""
            }))
      }),
      (y.doCode = function(e) {
        var t = /\S[ ]*$/.test(e.before),
          n = /^[ ]*\S/.test(e.after)
        if ((!n && !t) || /\n/.test(e.selection)) {
          e.before = e.before.replace(/[ ]{4}$/, function(t) {
            return (e.selection = t + e.selection), ""
          })
          var i = 1,
            r = 1
          ;/(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before) && (i = 0),
            /^\n(\t|[ ]{4,})/.test(e.after) && (r = 0),
            e.skipLines(i, r),
            e.selection
              ? /^[ ]{0,3}\S/m.test(e.selection)
                ? /\n/.test(e.selection)
                  ? (e.selection = e.selection.replace(/^/gm, "    "))
                  : (e.before += "    ")
                : (e.selection = e.selection.replace(
                    /^(?:[ ]{4}|[ ]{0,3}\t)/gm,
                    ""
                  ))
              : ((e.startTag = "    "),
                (e.selection = this.getString("codeexample")))
        } else
          e.trimWhitespace(),
            e.findTags(/`/, /`/),
            e.startTag || e.endTag
              ? e.endTag && !e.startTag
                ? ((e.before += e.endTag), (e.endTag = ""))
                : (e.startTag = e.endTag = "")
              : ((e.startTag = e.endTag = "`"),
                e.selection || (e.selection = this.getString("codeexample")))
      }),
      (y.doList = function(e, t, n) {
        var i = /(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,
          r = /^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,
          o = "-",
          a = 1,
          s = function() {
            var e
            return n ? ((e = " " + a + ". "), a++) : (e = " " + o + " "), e
          },
          c = function(e) {
            return (
              void 0 === n && (n = /^\s*\d/.test(e)),
              (e = e.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm, function() {
                return s()
              }))
            )
          }
        if (
          (e.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/, null),
          !e.before ||
            /\n$/.test(e.before) ||
            /^\n/.test(e.startTag) ||
            ((e.before += e.startTag), (e.startTag = "")),
          e.startTag)
        ) {
          var l = /\d+[.]/.test(e.startTag)
          if (
            ((e.startTag = ""),
            (e.selection = e.selection.replace(/\n[ ]{4}/g, "\n")),
            this.unwrap(e),
            e.skipLines(),
            l && (e.after = e.after.replace(r, c)),
            n == l)
          )
            return
        }
        var u = 1
        ;(e.before = e.before.replace(i, function(e) {
          return (
            /^\s*([*+-])/.test(e) && (o = f.$1),
            (u = /[^\n]\n\n[^\n]/.test(e) ? 1 : 0),
            c(e)
          )
        })),
          e.selection || (e.selection = this.getString("litem"))
        var d = s(),
          p = 1
        ;(e.after = e.after.replace(r, function(e) {
          return (p = /[^\n]\n\n[^\n]/.test(e) ? 1 : 0), c(e)
        })),
          e.trimWhitespace(!0),
          e.skipLines(u, p, !0),
          (e.startTag = d)
        var g = d.replace(/./g, " ")
        this.wrap(e, h.lineLength - g.length),
          (e.selection = e.selection.replace(/\n/g, "\n" + g))
      }),
      (y.doHeading = function(e) {
        if (
          ((e.selection = e.selection.replace(/\s+/g, " ")),
          (e.selection = e.selection.replace(/(^\s+|\s+$)/g, "")),
          !e.selection)
        )
          return (
            (e.startTag = "## "),
            (e.selection = this.getString("headingexample")),
            (e.endTag = " ##"),
            void 0
          )
        var t = 0
        e.findTags(/#+[ ]*/, /[ ]*#+/),
          /#+/.test(e.startTag) && (t = f.lastMatch.length),
          (e.startTag = e.endTag = ""),
          e.findTags(null, /\s?(-+|=+)/),
          /=+/.test(e.endTag) && (t = 1),
          /-+/.test(e.endTag) && (t = 2),
          (e.startTag = e.endTag = ""),
          e.skipLines(1, 1)
        var n = 0 == t ? 2 : t - 1
        if (n > 0) {
          var i = n >= 2 ? "-" : "=",
            r = e.selection.length
          for (r > h.lineLength && (r = h.lineLength), e.endTag = "\n"; r--; )
            e.endTag += i
        }
      }),
      (y.doHorizontalRule = function(e) {
        ;(e.startTag = "----------\n"),
          (e.selection = ""),
          e.skipLines(2, 1, !0)
      })
  })(),
  (function() {
    function e() {
      for (var e = 0; e < S.length; e++) S[e].refreshPreview()
    }
    function t(e) {
      var t = '<p>http://example.com/ "optional title"</p>',
        n = "Insert Hyperlink"
      return {
        bold: "Strong <strong> Ctrl+B",
        boldexample: "strong text",
        italic: "Emphasis <em> Ctrl+I",
        italicexample: "emphasized text",
        link: "Hyperlink <a> Ctrl+L",
        linkdescription: "enter link description here",
        linkdialog: "<p><b>" + n + "</b></p>" + t,
        linktabtitle: n,
        quote: "Blockquote <blockquote> Ctrl+Q",
        quoteexample: "Blockquote",
        code: e
          ? "Preformatted text <pre><code> Ctrl-K"
          : "Code Sample <pre><code> Ctrl+K",
        codeexample: e ? "enter preformatted text here" : "enter code here",
        image: "Image <img> Ctrl+G",
        imagedescription: "enter image description here",
        imagedialog:
          '<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg "optional title"</p>',
        olist: "Numbered List <ol> Ctrl+O",
        ulist: "Bulleted List <ul> Ctrl+U",
        litem: "List item",
        heading: "Heading <h1>/<h2> Ctrl+H",
        headingexample: "Heading",
        hr: "Horizontal Rule <hr> Ctrl+R",
        undo: "Undo - Ctrl+Z",
        redo: "Redo - Ctrl+Y",
        redomac: "Redo - Ctrl+Shift+Z",
        help: "Markdown Editing Help",
        ok: "OK",
        cancel: "Cancel",
      }
    }
    function n(e) {
      var t = e.match(/^\s*>\s*!/gm)
      if (t && t.length == e.split("\n").length) {
        var n = !1
        ;(e = e.replace(/(.*) (\w)/, function(e, t, i) {
          return (n = !0), t + "\n> " + i
        })),
          n || (e = e.replace(/^(\s*>\s*)!/m, "$1&#33;"))
      }
      return e
    }
    function i(e) {
      var t = /\<blockquote\>[\n\s]*?\<p\>[\n\s]*?(![\s\S]*?)\<\/p\>[\n\s]*?\<\/blockquote\>/g,
        n = /^\s*?[^\s!]/m,
        i = /^\s*?!/gm
      return (e = e.replace(t, function(e, t) {
        return n.test(t)
          ? e
          : ((e = e.replace(t, t.replace(i, "").replace(/[$]/g, "$$$$"))),
            (e = e.replace("<blockquote>", '<blockquote class="spoiler">')))
      }))
    }
    function r(e) {
      for (var t, n = [], i = /<(a|code)[^>]*>/gi; null != (t = i.exec(e)); ) {
        n.push(t.index)
        var r = new RegExp("</" + t[1] + ">", "ig")
        r.lastIndex = i.lastIndex
        var o = r.exec(e)
        if (null == o) break
        n.push(r.lastIndex), (i.lastIndex = r.lastIndex)
      }
      return n
    }
    function o(e) {
      if (!window.tagRendererRaw) return e
      var t,
        n,
        i = StackExchange.settings.tags.allowNonAsciiTags
          ? /\[(meta-)?tag:([a-z0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF#+.-]+)\]/gi
          : /\[(meta-)?tag:([a-z0-9#+.-]+)\]/gi
      return (e = e.replace(i, function(i, o, a, s) {
        if (!x && o) return i
        t || ((t = r(e)), (n = t.length))
        for (var c = !1, l = 0; n > l && !(t[l] > s); l++) c = !c
        if (c) return i
        var u = null
        StackExchange.options.site.parentUrl &&
          !o &&
          (u = StackExchange.options.site.parentUrl),
          StackExchange.options.site.routePrefix &&
            !u &&
            (u = StackExchange.options.site.routePrefix)
        var d = StackExchange.helpers.sanitizeAndSplitTags(a)
        return 1 !== d.length ? i : tagRendererRaw(d[0], u)
      }))
    }
    function a(e) {
      var t, n, i
      "undefined" == typeof j && (j = StackExchange.settings.site.styleCode),
        j && ((t = u(e)), (n = u(t + e)), (e = p(e, t, n)))
      var i = s(e)
      return j && (i = h(i, t, n)), i
    }
    function s(e) {
      return e.replace(/<[^>]*>?/gi, c)
    }
    function c(e) {
      if (
        e.match(I) ||
        e.match(A) ||
        e.match(P) ||
        (StackExchange.settings.markdown.linkEmails === !0 && e.match(O))
      )
        return e
      var t = !1,
        n = e.replace(/^(<a href="|<img src=")([^"]*)/i, function(e, n, i) {
          return (
            n +
            i.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)*[\]$]/g, function(e) {
              return (t = !0), "'" == e ? "%27" : encodeURIComponent(e)
            })
          )
        })
      return t && (n.match(A) || n.match(P)) ? n : ""
    }
    function l(e) {
      if ("" == e) return ""
      var t = /<\/?\w+[^>]*(\s|$|>)/g,
        n = e.toLowerCase().match(t),
        i = (n || []).length
      if (0 == i) return e
      for (
        var r, o, a, s = "<p><img><br><li><hr>", c = [], l = [], u = !1, d = 0;
        i > d;
        d++
      )
        if (
          ((r = n[d].replace(/<\/?(\w+).*/, "$1")),
          !(c[d] || s.search("<" + r + ">") > -1))
        ) {
          if (((o = n[d]), (a = -1), !/^<\//.test(o)))
            for (var f = d + 1; i > f; f++)
              if (!c[f] && n[f] == "</" + r + ">") {
                a = f
                break
              }
          ;-1 == a ? (u = l[d] = !0) : (c[a] = !0)
        }
      if (!u) return e
      var d = 0
      return (e = e.replace(t, function(e) {
        var t = l[d] ? "" : e
        return d++, t
      }))
    }
    function u(e) {
      var t = (e.match(/~/g) || []).length
      return new Array(t + 2).join("~")
    }
    function d(e) {
      var t = M.length
      t > 0 && 0 === e.indexOf(M[t - 1]) ? (M[t - 1] = e) : M.push(e),
        D.trigger()
    }
    function f(e) {
      if (/^lang-/.test(e)) return e
      var t = "c_" + e,
        n = R[t]
      return n ? n : L[t] ? null : ((L[t] = !0), d(e), null)
    }
    function p(e, t, n) {
      return (
        (e = e.replace(N, function(e, n, i) {
          return t + n + t + i
        })),
        e.replace(U, function(e, t) {
          return n + t + n
        })
      )
    }
    function h(e, t, n) {
      var i = new RegExp(t + "([a-z0-9#+.-]+)" + t + "(\\s*?<pre)", "gi")
      e = e.replace(i, function(e, t, n) {
        var i = f(t)
        return i ? n + " class='" + i + " prettyprint-override'" : n
      })
      var r,
        o = new RegExp(
          "(" + n + "([a-z0-9#+.-]+)" + n + ")|(<pre><code>)",
          "gi"
        )
      return e.replace(o, function(e, t, n) {
        if (t) return (r = n), ""
        if (!r) return e
        var i = f(r)
        return i ? "<pre class='" + i + " prettyprint-override'><code>" : e
      })
    }
    function g(e) {
      function t(e) {
        e.is(":animated") ||
          e
            .animate({ marginTop: -15 }, 400)
            .animate({ marginTop: 0 }, 400)
            .animate({ marginTop: -8 }, 300)
            .animate({ marginTop: 0 }, 300)
            .animate({ marginTop: -4 }, 200)
            .animate({ marginTop: 0 }, 200)
            .animate({ marginTop: -2 }, 100)
            .animate({ marginTop: 0 }, 100)
            .animate({ marginTop: -1 }, 50)
            .animate({ marginTop: 0 }, 50)
      }
      function n(e) {
        if (c) return e(), void 0
        if (!u) {
          u = !0
          var n = p.offset()
          l = $("#wmd-help-button" + d)
          {
            var i = l.offset().left + l.outerWidth(),
              r = n.left,
              o = p.outerWidth() + r
            Math.max(i, o)
          }
          s(!0)
          var a = f ? " bg-black-025 " : ""
          ;(c = $(
            '<div id="mdhelp' +
              d +
              '" class="mdhelp"><ul id="mdhelp-tabs' +
              d +
              '" class="mdhelp-tabs' +
              a +
              '"><li /></ul></div>'
          )
            .find("li")
            .addSpinner()
            .end()
            .hide()
            .insertAfter(l.parent().parent())
            .slideDown("fast")),
            $.get("/posts/markdown-help", { postfix: d, useV2: f }).done(
              function(n) {
                c.remove(),
                  (c = $(n).insertAfter(l.parent().parent())),
                  $("#mdhelp-tabs" + d).delegate(
                    "li:not(:last-child)",
                    "click",
                    function() {
                      var e = $(this).hasClass("selected")
                      if (
                        (c.find(".mdhelp-tab").slideUp("fast"),
                        $("#mdhelp-tabs" + d + " li").removeClass(
                          "selected fw-bold"
                        ),
                        !e)
                      ) {
                        $("#" + $(this).attr("data-tab")).slideDown("fast"),
                          $(this).addClass("selected fw-bold" + a)
                        var n = $(this).attr("data-buttons")
                        if (n)
                          for (var i = n.split(","), r = 0; r < i.length; r++)
                            t($("#wmd-" + i[r] + "-button" + d))
                      }
                    }
                  ),
                  StackExchange.gps.bindTrackClicks(c),
                  (u = !1),
                  e()
              }
            )
        }
      }
      function i() {
        ;(h = !0),
          n(function() {
            s(!0), c.slideDown("fast")
          })
      }
      function r() {
        h || i()
      }
      function o(e) {
        c.slideUp("fast"),
          s(!1),
          e ||
            StackExchange.options.user.isAnonymous ||
            StackExchange.helpers.toggleUserFlags(
              StackOverflow.Models.UserFlags.DismissMarkdownEditorHelp,
              !0
            )
      }
      function a() {
        c && c.is(":visible") ? o() : i()
      }
      function s(e) {
        l.toggleClass("active-help", e),
          f &&
            (e
              ? l.addClass("is-selected").text("Hide formatting tips")
              : l.removeClass("is-selected").text("Show formatting tips"))
      }
      var c,
        l,
        u = !1
      e = e || {}
      var d = e.postfix || "",
        f = $("body").hasClass("js-ask-page-v2"),
        p = $("#wmd-input" + d),
        h = !1
      ;(this.toggle = a),
        (this.showOnce = r),
        (this.hide = function() {
          c && c.is(":visible") && o(!0)
        })
    }
    function m(e) {
      function t(e, t) {
        var i = d[e + "|" + t]
        return i ? i : (n(e, t), null)
      }
      function n(e, t) {
        if (!f[e + "|" + t] && !i(e)) {
          f[e + "|" + t] = !0
          var n = p[e]
          n || (n = p[e] = []), n.push(t), m.trigger()
        }
      }
      function i(e) {
        return e === s
          ? !1
          : v["s_" + e]
          ? !0
          : u && e === u
          ? !1
          : l && e === l
          ? !1
          : StackExchange.options.site.isMetaSite &&
            e === StackExchange.options.networkMetaHostname
          ? !1
          : s === StackExchange.options.networkMetaHostname
          ? !1
          : !0
      }
      function r(e) {
        var t = e
          .toLowerCase()
          .replace(/\./g, "$")
          .replace(/-/g, "_")
          .replace(/[^_$a-z]/, "")
        return (
          window.apiCallbacks[t] ||
            (window.apiCallbacks[t] = function(t) {
              b(t, e)
            }),
          "apiCallbacks." + t
        )
      }
      function o(e, t) {
        if (e === s) return !0
        var n = y[e]
        return (
          n || (n = y[e] = { count: 0, ids: {} }),
          n.ids[t] ? !0 : n.count >= w ? !1 : (n.count++, (n.ids[t] = !0), !0)
        )
      }
      var a = /<a href="((\S+)\/q(?:uestions)?\/(\d+)(?:|\/\S*?))">\1<\/a>/g,
        s = window.location.hostname.toLowerCase(),
        c = StackExchange.options.site,
        l = c.parentUrl && StackExchange.helpers.parseUrl(c.parentUrl).hostname,
        u = c.childUrl && StackExchange.helpers.parseUrl(c.childUrl).hostname,
        d = {},
        f = {},
        p = {},
        h = "6AU78DZ)GcdjNjAszYmTLQ((",
        g = "!6G7RPxWUNTleV",
        m = StackExchange.helpers.DelayedReaction(
          function() {
            var e = !1
            for (var t in p)
              if (p.hasOwnProperty(t)) {
                var n,
                  i = r(t)
                p[t].length > 30
                  ? (n = p[t].splice(0, 30).join(";"))
                  : ((n = p[t].join(";")), delete p[t]),
                  (e = !0),
                  $.ajax({
                    url:
                      "https://api.stackexchange.com/2.0/questions/" +
                      n +
                      "?pagesize=30&key=" +
                      h +
                      "&filter=" +
                      g +
                      "&site=" +
                      t,
                    crossDomain: !0,
                    jsonpCallback: i,
                    dataType: "jsonp",
                  })
                break
              }
            e && m.trigger()
          },
          1e3,
          { sliding: !0 }
        ),
        v = {}
      window.apiCallbacks = {}
      var b = function(t, n) {
          if (t) {
            if (t.error_message)
              return (
                /^No site found/.test(t.error_message) && (v["s_" + n] = !0),
                void 0
              )
            if (t.items) {
              for (var i = t.items, r = i.length, o = 0; r > o; o++) {
                var a = i[o]
                d[n + "|" + a.question_id] = a.title
              }
              e && e()
            }
          }
        },
        y = {},
        w = StackExchange.options.site.isMetaSite ? 40 : 10
      return function(e) {
        return (
          (y = {}),
          e.replace(a, function(e, n, i, r) {
            if (
              ((i = i.toLowerCase().replace(/^https?:\/\//, "")),
              /[^a-z0-9.]/.test(i))
            )
              return e
            if (!o(i, r)) return e
            var a = t(i, r)
            return a ? '<a href="' + n + '">' + a + "</a>" : e
          })
        )
      }
    }
    function v() {
      return function(e) {
        return e.replace(
          /<(a\shref|img\ssrc)="(http:)?(\/\/([^""\/]+?\.)?imgur.com\/[^""]+?)"/gi,
          '<$1="https:$3"'
        )
      }
    }
    function b(e, t, n, i) {
      function r(e) {
        ;(p = null),
          $("#wmd-button-bar" + n + " .wmd-button__active").removeClass(
            "wmd-button__active"
          ),
          e
            ? $(".js-wmd-inline-dialog-" + n).remove()
            : $(".js-wmd-inline-dialog-" + n).slideUp(100, function() {
                $(this).remove()
              }),
          $("#wmd-input" + n)
            .prop("disabled", !1)
            .focus(),
          $("#wmd-button-bar" + n).removeClass("has-active-button"),
          d && (d(), (d = null))
      }
      function o(e) {
        $("#wmd-image-button" + n + ".wmd-button__active").length
          ? p(e)
          : ((f = e),
            setTimeout(function() {
              f = null
            }, 500),
            $("#wmd-image-button" + n).click())
      }
      function a(e) {
        e = e.originalEvent || e
        var t = e.dataTransfer.items,
          n = !1
        if (t)
          for (var i = 0; i < t.length; i++) {
            if (/^image\//.test(t[i].type)) return "yes"
            "file" === t[i].kind && (n = !0)
          }
        if (n) return "no"
        var r = e.dataTransfer.types
        if (r)
          for (var i = 0; i < r.length; i++)
            if ("Files" === r[i]) return "maybe"
        return "no"
      }
      function s(e) {
        var t = c(e)
        return t ? (t.getAsFile ? t.getAsFile() : t) : null
      }
      function c(e) {
        if (!e) return null
        e = e.originalEvent || e
        var t
        try {
          switch (e.type) {
            case "change":
              t = e.target.files
              break
            case "paste":
              t = e.clipboardData.items
              break
            case "drop":
            case "dragover":
            case "dragenter":
              t = e.dataTransfer.items || e.dataTransfer.files
          }
        } catch (n) {}
        if (!t || !t.length) return null
        for (var i, r = 0; r < t.length; r++)
          if (/^image\//.test(t[r].type)) {
            i = t[r]
            break
          }
        return i
      }
      function l(e) {
        var t = $("#wmd-button-bar" + n)
        r(!0),
          i.hide(),
          e.addClass("wmd-button__active"),
          t.addClass("has-active-button")
      }
      function u(e) {
        e.find(".js-cancel-button").click(function() {
          return r(), !1
        }),
          e.keydown(function(e) {
            return 27 === e.which ? (r(), !1) : void 0
          })
      }
      var d
      e.hooks.set("skipModalBackground", function() {
        return !0
      })
      var f,
        p,
        h,
        g = $("#post-editor" + n)
      return (
        $(document).on("paste", function(e) {
          if (
            $(e.target)
              .add(":focus")
              .closest(g).length
          ) {
            var t = s(e)
            if (t) return o(t), !1
            if (
              $("#wmd-image-button" + n + ".wmd-button__active").length &&
              !$(e.target).is("input[type=text], textarea")
            ) {
              var i = e.originalEvent.clipboardData.getData("text/plain")
              if (i) return h(i), !1
            }
          }
        }),
        $("#wmd-input" + n)
          .on("dragenter dragover", function(e) {
            var t = "no" !== a(e)
            return (
              (e.originalEvent.dataTransfer.dropEffect = t ? "copy" : "none"),
              !1
            )
          })
          .on("drop", function(e) {
            var t = s(e)
            return t && o(t), !1
          }),
        e.hooks.set("interceptButtonClick", function(e, t) {
          return "image" !== t && "link" !== t
            ? !1
            : $(e).hasClass("wmd-button__active")
            ? (r(), !0)
            : !1
        }),
        e.hooks.set("insertLinkDialog", function(e) {
          var t = $("#wmd-link-button" + n)
          l(t)
          var i = $("#wmd-button-bar" + n),
            o = $(
              "<div class='wmd-inline-dialog js-wmd-inline-dialog-" +
                n +
                "'><p><b>Insert Hyperlink</p></b><div class='grid'><input class='s-input' /><button class='s-btn s-btn__outlined ws-nowrap ml16 js-insert-link-button'/><button class=\"s-btn ml4 js-cancel-button\">Cancel</button></div></div>"
            )
          return (
            o
              .find(".js-insert-link-button")
              .text("Add link")
              .click(function() {
                var t = $(this)
                  .parent()
                  .find("input")
                  .val()
                return (
                  (t = t.replace(/^https:\/\/(https?|ftp):\/\//, "$1://")),
                  /^(?:https?|ftp):\/\//.test(t) || (t = "http://" + t),
                  (d = null),
                  r(),
                  e(t),
                  !1
                )
              })
              .end()
              .insertAfter(i)
              .hide()
              .slideDown(100)
              .find("input")
              .val("https://")
              .keydown(function(e) {
                return 13 === e.which
                  ? (o.find(".js-insert-link-button").click(), !1)
                  : void 0
              }),
            $("#wmd-input" + n).prop("disabled", !0),
            setTimeout(function() {
              var e = o.find("input")
              e.caret(0, 8), e.focus()
            }, 0),
            (d = function() {
              e(null)
            }),
            u(o),
            !0
          )
        }),
        e.hooks.set("insertImageDialog", function(e) {
          function i() {
            y && (URL.revokeObjectURL(y), (y = null))
          }
          var o = $("#wmd-image-button" + n)
          l(o)
          var c = $("#wmd-button-bar" + n),
            g = $(
              "<div class='wmd-inline-dialog p0 js-wmd-inline-dialog-" +
                n +
                '\'><input class="ps-absolute o0" type="file" name="file" accept="image/*" id="image-upload-file-input' +
                n +
                "\" /><div class='grid fd-column js-stacks-validation'>" +
                (t.imageUploader.showLowRepImageUploadWarning
                  ? "<div class='s-notice s-notice__warning m16 mb0'>Images are useful in a post, but <b>make sure the post is still clear without them</b>.  If you post images of code or error messages, copy and paste or type the actual code or message into the post directly.</div>"
                  : "") +
                "<div class='grid--cell grid ps-relative p16 hmn1 js-drop-target'><div class='grid--cell grid ai-center fl-grow1 js-pseudo-input'><img class='grid--cell hmx1 wmx2 mr32 d-none js-image-upload-preview' /><div class='grid--cell grid fl-grow1 ai-baseline sm:fd-column sm:ai-stretch d-none js-url-input-container'><label class='s-label mr8 sm:mr0 sm:mb4' for='image-upload-url-input" +
                n +
                "'>" +
                (t.imageUploader.allowUrls
                  ? "Paste image or link:"
                  : "Paste image:") +
                "</label><div class='fl1 ps-relative'><input type='text' class='s-input' id='image-upload-url-input" +
                n +
                "' /></div><button class='s-btn sm:as-start js-cancel-url'>Cancel</button></div><div class='grid-cell grid gs8 gsy fd-column js-cta-container'><div class='grid--cell fs-body2'>" +
                (t.imageUploader.allowUrls
                  ? (function(e) {
                      return (
                        e.browseStart +
                        "Browse" +
                        e.browseEnd +
                        ", drag &amp; drop, or " +
                        e.pasteStart +
                        "paste" +
                        e.pasteEnd +
                        " an image or link"
                      )
                    })({
                      browseStart:
                        "<label class='s-link js-image-upload-label' for='image-upload-file-input" +
                        n +
                        "'>",
                      browseEnd: "</label>",
                      pasteStart:
                        "<button class='s-btn s-btn__link js-show-url-input'>",
                      pasteEnd: "</button>",
                    })
                  : (function(e) {
                      return (
                        e.browseStart +
                        "Browse" +
                        e.browseEnd +
                        ", drag &amp; drop, or " +
                        e.pasteStart +
                        "paste" +
                        e.pasteEnd +
                        " an image"
                      )
                    })({
                      browseStart:
                        "<label class='s-link js-image-upload-label' for='image-upload-file-input" +
                        n +
                        "'>",
                      browseEnd: "</label>",
                      pasteStart:
                        "<button class='s-btn s-btn__link js-show-url-input'>",
                      pasteEnd: "</button>",
                    })) +
                '</div><div class=\'fs-caption fc-black-300\'>(max 2 MiB)</div></div></div></div><p class=\'grid--cell px16 s-input-message d-none js-stacks-validation-message\' /><div class=\'grid ai-center p16 bt bc-black-4\'><div class="grid gs8 gsx"><button class="grid--cell s-btn s-btn__primary ws-nowrap js-add-picture" disabled>Add picture</button><button class="grid--cell s-btn ws-nowrap js-cancel-button">Cancel</button></div><div class="ml64 grid fd-column fs-caption fc-black-300 s-anchors s-anchors__muted">' +
                (t.imageUploader.brandingHtml
                  ? "<span>" + t.imageUploader.brandingHtml + "</span>"
                  : "") +
                (t.imageUploader.contentPolicyHtml
                  ? "<span>" + t.imageUploader.contentPolicyHtml + "</span>"
                  : "") +
                "</div></div></div></div>"
            )
          g
            .insertAfter(c)
            .hide()
            .slideDown(100, function() {
              var e = g.find(".js-add-picture")
              e.prop("disabled")
                ? setTimeout(function() {
                    $("#image-upload-file-input" + n).focus()
                  }, 100)
                : e.focus()
            }),
            g.find(".js-url-input-container input").keydown(function(e) {
              return 13 === e.which
                ? (g.find(".js-add-picture").click(), !1)
                : void 0
            })
          var m = StackExchange.stacksValidation.handlerFor(
              g.find(".js-pseudo-input")
            ),
            v = !1
          $("#wmd-input" + n).prop("disabled", !0)
          var b,
            y,
            w,
            k = "file"
          ;(h = function(e) {
            ;(!e || t.imageUploader.allowUrls) &&
              (e && !/^https?:\/\//i.test(e) && (e = "https://" + e),
              m.clear(),
              (m = StackExchange.stacksValidation.handlerFor(
                $("#image-upload-url-input" + n)
              )),
              i(),
              (k = "url"),
              (w = e),
              g
                .find(".js-image-upload-preview, .js-cta-container")
                .addClass("d-none"),
              g
                .find(".js-url-input-container")
                .removeClass("d-none")
                .find("input")
                .val(e)
                .trigger("input")
                .focus())
          }),
            (p = function(e) {
              if (!v) {
                if (
                  (m.clear(),
                  (m = StackExchange.stacksValidation.handlerFor(
                    g.find(".js-pseudo-input")
                  )),
                  i(),
                  (k = "file"),
                  g.find(".js-url-input-container").addClass("d-none"),
                  g.find(".js-cta-container").removeClass("d-none"),
                  e)
                ) {
                  ;(y = URL.createObjectURL(e)),
                    g
                      .find(".js-image-upload-preview")
                      .attr("src", y)
                      .removeClass("d-none")
                  var t = e.size >= 2097152
                  t &&
                    m.add(
                      "error",
                      "Your image is too large to upload (over 2 MiB)."
                    ),
                    g
                      .find(".js-add-picture")
                      .prop("disabled", t)
                      .focus()
                } else
                  g
                    .find(".js-image-upload-preview")
                    .removeAttr("src")
                    .addClass("d-none"),
                    g.find(".js-add-picture").prop("disabled", !0)
                b = e
              }
            })
          var x = !1
          ;(d = function() {
            ;(x = !0), i(), e(null)
          }),
            f && (p(f), (f = null))
          var S = $("#image-upload-file-input" + n).on("change", function(e) {
            p(s(e))
          })
          return (
            $("#image-upload-url-input" + n).on("input", function() {
              var e
              t.imageUploader.allowUrls
                ? (e = !$(this).val())
                : (m.clear(),
                  $(this).val() &&
                    m.add(
                      "error",
                      (function(e) {
                        return (
                          "Uploading images via web links is not supported on this site. Paste an image from the clipboard or " +
                          e.browseStart +
                          "browse" +
                          e.browseEnd +
                          " files on your device."
                        )
                      })({
                        browseStart:
                          "<label class='s-link fc-red-800 td-underline' for='image-upload-file-input" +
                          n +
                          "'>",
                        browseEnd: "</label>",
                      })
                    )),
                g.find(".js-add-picture").prop("disabled", e)
            }),
            g.find(".js-show-url-input").click(function() {
              return h(""), !1
            }),
            g.find(".js-cancel-url").click(function() {
              return p(null), !1
            }),
            g
              .find(".js-drop-target")
              .on("drop", function(e) {
                return v || p(s(e)), !1
              })
              .on("dragenter dragover", function(e) {
                var t = "no" !== a(e)
                return (
                  (e.originalEvent.dataTransfer.dropEffect =
                    t && !v ? "copy" : "none"),
                  !1
                )
              }),
            g.find(".js-add-picture").on("click", function(t) {
              t.preventDefault(), (v = !0), m.clear()
              var o = S.add("#image-upload-url-input" + n).prop("disabled", !0),
                a = new FormData()
              "file" === k
                ? a.append("file", b)
                : (h($("#image-upload-url-input" + n).val()),
                  a.append("upload-url", w))
              var s = $(this)
                .addClass("is-loading")
                .prop("disabled", !0)
              a.append("fkey", StackExchange.options.user.fkey),
                $.ajax({
                  url: "/upload/image?method=json&https=true",
                  data: a,
                  cache: !1,
                  contentType: !1,
                  processData: !1,
                  type: "POST",
                })
                  .done(function(t) {
                    if (!x)
                      if (t.Success) {
                        var n = t.UploadedImage
                        ;(d = null), i(), r(), e(n)
                      } else
                        t.ErrorMessage
                          ? m.add(
                              "error",
                              $("<span/>")
                                .text(t.ErrorMessage)
                                .html()
                            )
                          : m.add(
                              "error",
                              "An error occured when uploading the image."
                            )
                  })
                  .fail(function(e, t, n) {
                    m.add(
                      "error",
                      (function(e) {
                        return (
                          "An error occured when uploading the image: " +
                          e.message
                        )
                      })({ message: n })
                    )
                  })
                  .always(function() {
                    s.removeClass("is-loading").prop("disabled", !1),
                      o.prop("disabled", !1),
                      (v = !1)
                  })
            }),
            u(g),
            !0
          )
        }),
        { closeInlineDialog: r }
      )
    }
    function y(e) {
      clearTimeout(V), w(e)
    }
    function w(e) {
      $(e)
        .find("p > a:not(a:has(img))")
        .each(function() {
          var e = $(this),
            t = $(this).attr("href"),
            n = e
              .closest("p")
              .text()
              .trim()
          t == n &&
            (E.hasOwnProperty(t)
              ? e.parent().html(E[t])
              : (e.parent().addSpinner({ "padding-left": "3px" }),
                (V = setTimeout(k, 1e3, e.parent(), t))))
        })
    }
    function k(e, t) {
      $.post("/posts/onebox", {
        url: t,
        fkey: StackExchange.options.user.fkey,
      }).done(function(n) {
        n.success
          ? ((E[t] = n.data),
            e.html(E[t]),
            n.poll &&
              (e.addSpinner({ "padding-left": "3px" }),
              setTimeout(k, 3e3, e, t)))
          : ((E[t] = n.data), e.removeSpinner())
      })
    }
    if (!StackExchange.MarkdownEditor) {
      var x,
        S = [],
        E = {},
        C = m(e),
        T = v(),
        _ = $.Callbacks()
      ;(StackExchange.MarkdownEditor = function(e) {
        function r() {
          return new Markdown.Converter({
            nonAsciiLetters: !0,
            asteriskIntraWordEmphasis:
              StackExchange.settings.markdown.asteriskIntraWordEmphasis,
            autoNewlines: StackExchange.settings.markdown.autoNewlines,
            linkEmails: StackExchange.settings.markdown.linkEmails,
            codeFences: !StackExchange.settings.markdown.disableCodeFences,
          })
        }
        function s() {
          return new Commonmark.Converter({
            autoNewlines: StackExchange.settings.markdown.autoNewlines,
          })
        }
        var c = e.postfix || ""
        x = StackExchange.options.site.isMetaSite
        var u = StackExchange.settings.markdown.enableCommonmark ? s() : r()
        e.mutateConverter && (u = e.mutateConverter(u))
        var d = e.sanitizeAndHighlight || a,
          f = u.hooks
        f.addNoop("preSafe"),
          e.disableAutoQuestionLinks || f.chain("postConversion", C),
          f.chain("postConversion", function(e) {
            return f.preSafe(e)
          }),
          f.chain("postConversion", d),
          f.chain("postConversion", l),
          f.chain("postConversion", i),
          f.chain("postConversion", o),
          window.modSuspendTokens &&
            f.chain("postConversion", window.modSuspendTokens)
        var p,
          h = new g({ postfix: c, userId: e.userId })
        !e.imageUploader ||
          "showLowRepImageUploadWarning" in e.imageUploader ||
          (e.imageUploader.showLowRepImageUploadWarning =
            e.showLowRepImageUploadWarning)
        var m = {
            helpButton: {
              handler: function() {
                p && p(), h.toggle()
              },
            },
            strings: t(e.noCode),
            wrapImageInLink: !e.disableImageLinkWrapping,
            convertImagesToLinks: e.convertImagesToLinks,
            imageUploader: e.imageUploader,
          },
          v = new Markdown.Editor(u, c, m)
        v.hooks.chain("postBlockquoteCreation", n),
          StackExchange.settings.site.allowImageUploads &&
            !e.noModals &&
            (e.showLowRepImageUploadWarning &&
              StackExchange.imageUploader.enableLowRepWarning(),
            v.hooks.set(
              "insertImageDialog",
              StackExchange.imageUploader.uploadImageDialog
            )),
          e.noModals && (p = b(v, m, c, h).closeInlineDialog),
          StackExchange.settings.site.enableImgurHttps &&
            f.chain("postConversion", T),
          _.fire(v, e.postfix)
        var w = $("#wmd-preview" + c)
        return (
          v.hooks.chain("onPreviewRefresh", function() {
            w.trigger("wmdrefresh"), e.oneboxEnabled && y(w)
          }),
          S.push(v),
          v.run(),
          e.immediatelyShowMarkdownHelp
            ? h.showOnce(e)
            : e.autoShowMarkdownHelp &&
              $("#wmd-input" + c).one("focus", function() {
                h.showOnce(e)
              }),
          (v.disableSubmission = function() {
            $("#submit-button" + c).attr("disabled", "disabled"),
              StackExchange.navPrevention.stop()
          }),
          v
        )
      }),
        (StackExchange.MarkdownEditor.creationCallbacks = _),
        (StackExchange.MarkdownEditor.refreshAllPreviews = e)
      var j
      StackExchange.MarkdownEditor.sanitizeHtml = s
      var I = /^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol(?: start="\d+")?|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,
        A = /^(<a\s(class="s-link"\s)?href="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)*[\]$]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,
        P = /^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)*[\]$]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i,
        O = /^(<a\shref="mailto:[-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+">$)/i
      StackExchange.MarkdownEditor.balanceTags = l
      var R = {},
        L = {},
        M = [],
        D = StackExchange.helpers.DelayedReaction(
          function() {
            0 != M.length &&
              ($.ajax(
                "/api/tags/" +
                  encodeURIComponent(M.join(";")) +
                  "/syntax-highlight",
                { cache: !0 }
              ).done(function(e) {
                var t = !1
                for (var n in e)
                  e.hasOwnProperty(n) && ((R["c_" + n] = e[n]), (t = !0))
                t &&
                  (StackExchange.MarkdownEditor.refreshAllPreviews(),
                  styleCode())
              }),
              (M = []))
          },
          2e3,
          { sliding: !0 }
        ),
        N = /<!-- language: ([a-z0-9#+\-.]+) -->(\s*?<pre>\s*?<code>)/gi,
        U = /<!-- language-all: ([a-z0-9#+\-.]+) -->/gi
      if (
        (StackExchange.settings.site.forceHttpsImages &&
          StackExchange.MarkdownEditor.creationCallbacks.add(function(e, t) {
            t = t || ""
            var n = e.getConverter().hooks,
              i = $("#wmd-input" + t),
              r = $("#wmd-preview" + t)
            n.chain("postConversion", function(e) {
              return (
                (e = e.replace(
                  new RegExp(
                    /<a[^>]*?>/.source +
                      /(?!.*?<a)/.source +
                      /(?=.*?<img\ssrc="(?:http:)?\/\/)/.source +
                      /(.*?)<\/a>/.source,
                    "gi"
                  ),
                  "$1"
                )),
                (e = e.replace(
                  /<img\ssrc="((?:http:)?\/\/[^"]*)"[^>]*?>/gi,
                  function(e, t) {
                    return (
                      '<span class="message error centered-block text-centered" >All image URLs must start with <strong>https://</strong><br /><a href="javascript: void(0)" data-image-url="' +
                      t +
                      '" class="js-wmd-upload-image">Upload to imgur</a> or specify an HTTPS URL</span>'
                    )
                  }
                ))
              )
            }),
              r.on("click", ".js-wmd-upload-image", function(t) {
                var n = $(t.target).data("image-url")
                return (
                  StackExchange.imageUploader.createImageUploadBackground(),
                  StackExchange.imageUploader.uploadImageDialog(
                    function(t) {
                      t &&
                        e.textOperation(function() {
                          var e = i.val()
                          ;(e = e.replace(n, t)), i.val(e)
                        }),
                        StackExchange.imageUploader.removeImageUploadBackground(),
                        i.focus()
                    },
                    { imageUrl: n }
                  ),
                  t.preventDefault(),
                  !1
                )
              })
          }),
        "undefined" != typeof MathJax)
      ) {
        var B = MathJax.Hub.config,
          F = !1,
          q = $.Callbacks(),
          H = function(e, t) {
            StackExchange.mathjaxEditing.prepareWmdForMathJax(
              e,
              t,
              B.tex2jax.inlineMath
            )
          }
        StackExchange.MarkdownEditor.creationCallbacks.add(function(e, t) {
          F
            ? H(e, t)
            : q.add(function() {
                H(e, t), e.refreshPreview()
              })
        }),
          StackExchange.using(
            B.SEEditor,
            function() {
              ;(F = !0), q.fire(), q.empty()
            },
            "mathjax-editing"
          )
      }
      var V
    }
  })(),
  (StackExchange.editor = (function() {
    var e = function(e) {
        e = e || {}
        var t,
          n,
          i = e.postfix || "",
          r = void 0 === e.resize ? !0 : e.resize,
          o = e.heartbeatType,
          a = e.bindNavPrevention,
          s = $("#post-form" + i),
          c = $("#wmd-input" + i)
        ;(n = $("#title, #edit-comment, #m-address, .edit-comment")),
          (t = n.add(".tag-editor input")),
          s.submit(function() {
            var e = !0
            return (
              e &&
                (StackExchange.helpers.disableSubmitButton(s),
                StackExchange.navPrevention.stop()),
              e
            )
          }),
          r &&
            ($(".original-question")
              .not(".processed")
              .TextAreaResizer(),
            c.not(".processed").TextAreaResizer()),
          c.typeWatch({
            highlight: !1,
            wait: 5e3,
            captureLength: 5,
            callback: styleCode,
          })
        var l = new StackExchange.MarkdownEditor(e)
        if (o) {
          var u = e.discardSelector ? $(e.discardSelector) : null
          StackExchange.cardiologist.addHeart(
            o,
            c,
            l,
            u,
            e.postId,
            e.autoActivateHeartbeat
          )
        }
        if (
          (l.hooks.chain("imageConvertedToLink", function() {
            var t = c.parent(),
              n =
                "You're not allowed to embed images in your posts yet, so we've included a link instead."
            e.reputationToPostImages &&
              (n +=
                "<br/><br/>" +
                (function(e) {
                  return (
                    "As soon as you earn " +
                    e.rep +
                    " reputation on the site, you'll be able to embed images."
                  )
                })({ rep: e.reputationToPostImages })),
              StackExchange.helpers.showInfoMessage(t, n, {
                position: { at: "right top", my: "left bottom" },
                cssClass: "convert-image-to-link",
              })
          }),
          "ask" == o || "answer" == o)
        ) {
          var d = c.add(t),
            f = function() {
              return (
                StackExchange.helpers.loadTicks(s), d.unbind("keydown", f), !0
              )
            }
          d.bind("keydown", f)
        }
        if (a) {
          var p =
            "edit" == o || "ask" == o ? c.add("#title").add("#tagnames") : c
          StackExchange.navPrevention.init(p)
        }
        if (
          (s.find(".wmd-preview").click(function(e) {
            if (
              "show-hide" !== e.target.className &&
              !e.target.localName.startsWith("input")
            ) {
              if (window.getSelection) {
                var t = window.getSelection()
                if (
                  t.anchorNode !== t.focusNode ||
                  t.anchorOffset !== t.focusOffset
                )
                  return
              }
              2 != e.which &&
                $(this)
                  .siblings()
                  .find("textarea")
                  .focus()
            }
          }),
          0 == $("#ask-page-has-errors").length &&
            $("#title").is("input") &&
            0 === s.find(":focus").length,
          e.onCreated && e.onCreated(l),
          e.discardSelector &&
            ("ask" == o || "answer" == o || "moderatormessage" == o))
        ) {
          var h = $(e.discardSelector)
          h.click(function(t) {
            if (
              (t.preventDefault(),
              confirm("Are you sure you want to discard your draft?"))
            ) {
              $("#title")
                .val("")
                .blur(),
                $("#question-suggestions").empty(),
                $("#wmd-input-42").val(""),
                $("#wmd-preview-42").html(""),
                $(".js-post-answer-while-asking-checkbox")
                  .filter(":visible")
                  .filter(":checked")
                  .click()
              var n = h.closest(".post-form").find("#tagnames")
              return (
                n.length > 0 &&
                  n[0].func_clear &&
                  (n[0].func_clear(), n.blur()),
                c.val("").blur(),
                l.refreshPreview(),
                $.post(
                  "/post/discard-draft",
                  { fkey: StackExchange.options.user.fkey, postType: o },
                  function() {
                    $("#draft-saved").hide(), $("#draft-discarded").show()
                    var e = null
                    ;(e = function() {
                      $("#draft-discarded").hide(),
                        $("#title").unbind("keypress", e),
                        c.unbind("keypress", e)
                    }),
                      $("#title").bind("keypress", e),
                      c.bind("keypress", e)
                  }
                ),
                h.hide(),
                e.onDraftDiscarded && e.onDraftDiscarded(),
                !1
              )
            }
          })
        }
        $(".js-post-editor input[type=checkbox][name=communitymode]")
          .off("click")
          .one("click", function() {
            return confirm(
              (function(e) {
                return (
                  "Are you sure you want to make this post Community Wiki?" +
                  e.blankLine +
                  "Doing so will remove explicit ownership and you will no longer earn reputation for upvotes on it. Once saved, this option cannot be unchecked without moderator assistance."
                )
              })({ blankLine: "\n\n" })
            )
          })
      },
      t = function(t) {
        var n = (t || {}).postfix || "",
          i =
            0 != $("#wmd-preview" + n).length &&
            ("-42" !== n ||
              0 === $(".js-post-answer-while-asking-checkbox").length) &&
            0 === $("#show-editor-button" + n).length
        i
          ? (e(t),
            StackExchange.editor.finallyInit ||
              (StackExchange.editor.finallyInit = function() {}))
          : (StackExchange.editor.finallyInit = function() {
              e(t)
            })
      }
    return { init: e, initIfShown: t }
  })()),
  (StackExchange.cardiologist = (function() {
    function e(e) {
      var n = "number" == typeof e ? e : 1e3 * (m + v)
      f && (n = Math.max(n, 6e3 - (new Date().getTime() - f))),
        p && clearTimeout(p),
        (p = setTimeout(t, n))
    }
    function t() {
      if (((p = null), g.length || n(), !g.length)) return e(), void 0
      var t = g.shift()
      t.checkActive() ? t.beat() : e()
    }
    function n() {
      var e
      ;(g = []), u && !u.isDisabled && u.beatCount < 30 && g.push(u)
      for (var t = 0; t < h.length; t++)
        (e = h[t]), e != u && !e.isDisabled && e.beatCount < 30 && g.push(e)
      m = Math.max(15, Math.min(45, 60 / (g.length || 1)))
    }
    function i() {}
    function r(e) {
      var t = []
      $.get(
        "/questions/" + e,
        function(n) {
          var i = $(n)
          if (
            (i.find("div.answer").each(function() {
              var e = this.id.substring("answer-".length)
              0 == $("#answer-" + e).length && t.push(this.id)
            }),
            t.length > 0)
          ) {
            var r = "#" + t.join(",#"),
              o = i.find(r),
              a = $("div.answer:last")
            0 == a.length && (a = $("#answers-header")),
              o.hide(),
              a.after(o),
              o.fadeIn("slow")
            var s = i.find("#answers-header .answers-subheader h2"),
              c = $("#answers-header .answers-subheader h2")
            s.length && c.length && c.replaceWith(s),
              StackExchange.vote.init(e),
              StackExchange.comments.init({ post: o })
          }
          StackExchange.notify.close(y), (b = !1)
        },
        "html"
      )
    }
    function o(e, t, n, r, o, a) {
      var s,
        c = new i()
      switch (((c.type = e), (c.jTextarea = t), (c.discardDraftLink = r), e)) {
        case "ask":
          s = 0
          break
        case "answer":
          s =
            $("#post-id").val() || location.href.match(/\/questions\/(\d+)/i)[1]
          break
        case "edit":
          s =
            o ||
            $("#post-id").val() ||
            t
              .closest(".question, .answer")
              .find(".vote input")
              .val()
          var l = t.closest(".inline-post"),
            u = null
          l.length > 0 && (u = l[0].action.split("/").pop()),
            u || (u = $("#client-revision-guid").val()),
            (c.revisionGuid = u)
          break
        case "moderatormessage":
          s = +$("#moderator-message-to-user").attr("data-userid")
      }
      ;(c.postId = s),
        (c.editor = n),
        t.keypress(function() {
          c.activate()
        }),
        a && c.activate()
    }
    function a(e, t) {
      return u && u.checkActive() ? (u.beat(t).done(e), void 0) : (e(), void 0)
    }
    function s() {
      e(1)
    }
    function c() {
      b = !0
    }
    function l() {
      if (null == h) return !1
      for (var e = 0; e < h.length; e++) if (1 == h[e].checkActive()) return !0
      return !1
    }
    var u,
      d,
      f,
      p,
      h = [],
      g = [],
      m = 45,
      v = 0,
      b = !1,
      y = -2,
      w = {
        ask: function(e) {
          if (e.relatedQuestions) {
            var t = $(".js-similar-questions")
            t.empty().append(e.relatedQuestions),
              StackExchange.gps.bindTrackClicks(
                $(".js-similar-questions-data-track")
              ),
              $(".js-similar-questions-outer-div").removeClass("d-none"),
              $(".js-question-summary-scroll").one("scroll", function() {
                StackExchange.using("gps", function() {
                  StackExchange.gps.track("similarquestions.body_scroll")
                })
              })
          }
          e.suggestedTags &&
            StackExchange.tagSuggestions &&
            StackExchange.tagSuggestions.suggest(e.suggestedTags)
        },
        answer: function(e, t) {
          if (e && !b)
            if (e.disableEditor)
              StackExchange.notify.show(e.message, y), (b = !0)
            else {
              var n = parseInt(e.message)
              if (n > 0) {
                var i = (function(e) {
                  return 1 == e.count
                    ? e.count +
                        " new answer has been posted - " +
                        e.startAnchor +
                        "load new answers." +
                        e.endAnchor
                    : e.count +
                        " new answers have been posted - " +
                        e.startAnchor +
                        "load new answers." +
                        e.endAnchor
                })({
                  count: n,
                  startAnchor: '<a id="load-new-answers">',
                  endAnchor: "</a>",
                })
                StackExchange.notify.show(i, y),
                  (b = !0),
                  $("#load-new-answers").click(function() {
                    r(t.postId)
                  })
              }
            }
        },
        edit: function(e) {
          if (e && e.message) {
            var t = StackExchange.notify.getMessageText(y)
            t !=
              $("<span />")
                .html(e.message)
                .text() &&
              (StackExchange.notify.close(y),
              StackExchange.notify.show(e.message, y))
          }
        },
        moderatormessage: function() {},
      }
    i.prototype = {
      activate: function() {
        ;(u = this),
          this.isActive ||
            ((this.isActive = !0),
            (this.beatCount = 0),
            h.push(this),
            1 === h.length && e())
      },
      checkActive: function() {
        return !this.isActive || this.isDisabled
          ? !1
          : this.jTextarea.closest("body").length
          ? !0
          : (delete this.jTextarea, (this.isDisabled = !0), !1)
      },
      beat: function(e) {
        var t = this,
          n = {
            type: "POST",
            url: "/posts/" + this.postId + "/editor-heartbeat/" + this.type,
            dataType: "json",
            data: { fkey: StackExchange.options.user.fkey },
          }
        if (
          (e ||
            ((n.success = function(e) {
              t.success(e)
            }),
            (n.error = function() {
              t.error()
            }),
            (n.complete = function() {
              t.complete()
            })),
          this.shouldSendDraft())
        ) {
          var i = { text: this.jTextarea.val() }
          "ask" === this.type &&
            ((i.title = $("#title").val()),
            (i.tagnames = $("#tagnames").val()),
            (i.answertext = $("#wmd-input-42").val())),
            (d &&
              d.heart === this &&
              d.title === i.title &&
              d.tagnames === i.tagnames &&
              d.text === i.text &&
              d.answertext === i.answertext) ||
              ((n.data = i),
              (d = {
                heart: this,
                title: i.title,
                tagnames: i.tagnames,
                text: i.text,
                answertext: i.answertext,
              }))
        }
        if (e && !("text" in n.data))
          return $.Deferred()
            .resolve()
            .promise()
        if (
          (this.revisionGuid && (n.data.clientRevisionGuid = this.revisionGuid),
          "answer" === this.type)
        ) {
          var r = $("#answers-header .answers-subheader h2"),
            o = r.data("answercount")
          null == o && (o = r.text().replace(/ answers?/i, "") || "0"),
            (n.data.clientCount = o)
        }
        return (
          (n.data.fkey = StackExchange.options.user.fkey),
          (f = new Date().getTime()),
          $.ajax(n).promise()
        )
      },
      shouldSendDraft: function() {
        return "edit" !== this.type && u === this
      },
      success: function(e) {
        w[this.type](e, this),
          e.disableEditor &&
            (this.editor.disableSubmission(), (this.isDisabled = !0)),
          e.draftSaved && k(this.jTextarea, this.discardDraftLink),
          this.beatCount++,
          (v = 0)
      },
      error: function() {
        $("#draft-saved").hide(),
          u === this && g.unshift(this),
          (v = (new Date().getTime() % 100) / 10)
      },
      complete: function() {
        e()
      },
    }
    var k = function(e, t) {
      var n = $("#draft-saved"),
        i = function() {
          n.text("Draft saved").fadeIn("fast")
        }
      n.is(":visible") ? n.fadeOut("fast", i) : i(),
        t && t.removeClass("dno").show()
      var r = function(t) {
        ;(115 != t.which || !t.ctrlKey || t.shiftKey || t.altKey) &&
          (e.unbind("keypress", r), $("#draft-saved").fadeOut("fast"))
      }
      e.bind("keypress", r), $("#draft-discarded").hide()
    }
    return {
      addHeart: o,
      ensureDraftSaved: a,
      beatASAP: s,
      notifiedOfNewAnswer: c,
      isHeartBeating: l,
    }
  })()),
  (StackExchange.navPrevention = (function() {
    var e,
      t,
      n = function() {
        var n = !1
        return (
          e.each(function(e) {
            n =
              n ||
              $(this)
                .val()
                .replace(/\s+$/g, "") !== t[e].replace(/\s+$/g, "")
          }),
          n
        )
      },
      i = function(t) {
        window.onbeforeunload = t
          ? function() {
              return e && n() ? t : void 0
            }
          : null
      },
      r = function() {
        i("You have started writing or editing a post.")
      }
    return {
      init: function(n) {
        ;(e = n.one("keypress", r)),
          (t = []),
          n.each(function() {
            t.push($(this).val())
          })
      },
      start: function() {
        e && r()
      },
      stop: function() {
        e && (e.unbind("keypress", r), i(null), (e = null))
      },
      confirm: function(t) {
        return e && n() ? confirm(t) : !0
      },
    }
  })()),
  (function(e) {
    function t(t) {
      return (
        (o = e(t.data.el)),
        o.blur(),
        (s = r(t).y),
        (a = o.height() - s),
        e(document)
          .mousemove(n)
          .mouseup(i),
        !1
      )
    }
    function n(e) {
      var t = r(e).y,
        n = a + t
      return (
        s >= t && (n -= 5),
        (s = t),
        (n = Math.max(c, n)),
        o.height(n + "px"),
        c > n && i(e),
        !1
      )
    }
    function i() {
      e(document)
        .unbind("mousemove", n)
        .unbind("mouseup", i),
        o.focus(),
        (o = null),
        (a = null),
        (s = 0)
    }
    function r(e) {
      return {
        x: e.clientX + document.documentElement.scrollLeft,
        y: e.clientY + document.documentElement.scrollTop,
      }
    }
    var o,
      a,
      s = 0,
      c = 32
    e.fn.TextAreaResizer = function() {
      return this.each(function() {
        ;(o = e(this).addClass("processed")),
          (a = null),
          e(this)
            .parent()
            .append(
              e('<div class="grippie bbr-sm"></div>').bind(
                "mousedown",
                { el: this },
                t
              )
            )
        var n = e("div.grippie", e(this).parent())[0]
        n.style.marginRight = n.offsetWidth - e(this)[0].offsetWidth + "px"
      })
    }
  })(jQuery),
  (StackExchange.imageUploader = (function() {
    var e = window.URL || window.webkitURL,
      t = {},
      n = function() {
        var e,
          t,
          n,
          i,
          r = window.document,
          o = window.self
        o.innerHeight && o.scrollMaxY
          ? ((e = r.body.scrollWidth), (t = o.innerHeight + o.scrollMaxY))
          : r.body.scrollHeight > r.body.offsetHeight
          ? ((e = r.body.scrollWidth), (t = r.body.scrollHeight))
          : ((e = r.body.offsetWidth), (t = r.body.offsetHeight)),
          o.innerHeight
            ? ((n = o.innerWidth), (i = o.innerHeight))
            : r.documentElement && r.documentElement.clientHeight
            ? ((n = r.documentElement.clientWidth),
              (i = r.documentElement.clientHeight))
            : r.body && ((n = r.body.clientWidth), (i = r.body.clientHeight))
        var a = Math.max(e, n),
          s = Math.max(t, i)
        return [a, s, n, i]
      },
      i = { uploadUrl: "/upload/image?https=true", showLowRepWarning: !1 },
      r = function() {
        $(".wmd-prompt-background").remove()
      },
      o = function() {
        var e = window.document,
          t = (window.navigator, e.createElement("div")),
          i = t.style
        ;(t.className = "wmd-prompt-background"),
          (i.position = "absolute"),
          (i.top = "0"),
          (i.zIndex = "1000"),
          (i.opacity = "0.5")
        var r = n()
        return (
          (i.height = r[1] + "px"),
          (i.left = "0"),
          (i.width = "100%"),
          e.body.appendChild(t),
          t
        )
      }
    return {
      createImageUploadBackground: o,
      removeImageUploadBackground: r,
      enableLowRepWarning: function() {
        i.showLowRepWarning = !0
      },
      uploadImageDialog: function(n, r) {
        "string" === $.type(r) && (r = { uploadUrl: r }), (r = $.extend(i, r))
        var o,
          a = "upload-iframe-" + new Date().getTime(),
          s = "/render/image-upload?uploadUrl={0}&showLowRepWarning={2}".formatUnicorn(
            encodeURIComponent(r.uploadUrl),
            r.showLowRepWarning ? "true" : "false"
          ),
          c = $(
            '<div class="modal image-upload wmd-prompt-dialog auto-center" tabindex="-1"></div>'
          )
            .addClass("async-load")
            .data("load-url", s),
          l = 0,
          u = function(e) {
            c && c.fadeOutAndRemove(),
              $("body")
                .off("keydown", v.checkEscape)
                .off("paste", v.paste),
              void 0 !== e && n(e)
          },
          d = function(e) {
            return 0 === e.type.indexOf("image/")
          },
          f = function(e) {
            var t
            return e.items && ((t = $.grep(e.items, d)), t.length > 0)
              ? t[0].getAsFile()
              : e.files && ((t = $.grep(e.files, d)), t.length > 0)
              ? t[0]
              : void 0
          },
          p = function(e, t) {
            var n = c.find("." + e)
            n.find(".tab-page").hide(),
              n.find("." + e + "-" + t).show(),
              n.data("active-tab", t)
          },
          h = function(e) {
            var t = c.find("." + e)
            return t.data("active-tab")
          },
          g = function() {
            ;(window.closeDialog = u),
              (window.displayUploadError = m.uploadError)
          },
          m = {
            resetInputs: function() {
              c.find(".js-modal-input-file, .js-modal-input-url")
                .prop("disabled", !1)
                .attr("value", "")
            },
            uploadError: function(e) {
              m.resetInputs(),
                c
                  .find(".modal-options-error .modal-options-error-message")
                  .text(e),
                p("modal-options", "error")
            },
            ajaxResult: function(e) {
              $("#" + a)
                .contents()
                .find("html")
                .html(e)
            },
            ajaxError: function(e, t, n) {
              m.uploadError(
                (function(e) {
                  return (
                    "Request returned an error: [" + e.status + "] " + e.error
                  )
                })({ status: t, error: n })
              )
            },
          },
          v = {
            showLink: function(e) {
              e && e.preventDefault(),
                p("modal-options", "url"),
                c.find(".js-modal-input-url").focus()
            },
            resetView: function(e) {
              e && e.preventDefault(),
                p("modal-dropzone", "default"),
                p("modal-options", "default"),
                c.find(".js-modal-cta-submit").prop("disabled", !0),
                c.find(".modal-dropzone-preview").empty(),
                c.find(".js-modal-input-file").val(""),
                m.resetInputs(),
                (l = 0),
                o.removeClass("hover"),
                c
                  .find("form")
                  .off("submit")
                  .on("submit", v.oldSchoolSubmit),
                c
                  .find("form input[name=fkey]")
                  .val(StackExchange.options.user.fkey)
            },
            inputFileOrUrl: function() {
              var e = !!c.find(".js-user-input").filter(function() {
                return this.value.length
              }).length
              c.find(".js-modal-cta-submit").prop("disabled", !e)
            },
            disablePasteHandling: function() {
              $("body").off("paste", v.previewImage)
            },
            enablePasteHandling: function() {
              $("body").on(
                "paste",
                { property: "clipboardData" },
                v.previewImage
              )
            },
            selectFile: function(e) {
              e.preventDefault(), c.find(".js-modal-input-file").click()
            },
            clickFile: function(e) {
              e.stopPropagation()
            },
            previewImage: function(t) {
              t.preventDefault()
              var n,
                i,
                r,
                o = f(t.originalEvent[t.data.property])
              o &&
                ((n = o.size >= 2097152),
                (i = c.find(".modal-dropzone-preview")),
                i.empty(),
                (r = e.createObjectURL(o)),
                $("<img>")
                  .attr("src", r)
                  .css({ maxWidth: i.css("width"), maxHeight: i.css("height") })
                  .on("load", { url: r }, v.loadPreviewImage)
                  .appendTo(i),
                c
                  .find("form")
                  .off("submit")
                  .on("submit", o, v.ajaxSubmit),
                c.find(".js-modal-cta-submit").prop("disabled", n),
                p("modal-dropzone", "preview"),
                p("modal-options", n ? "toobig" : "preview"))
            },
            dragEnter: function(e) {
              e.preventDefault(), l++, o.addClass("hover")
            },
            dragLeave: function() {
              0 === --l && o.removeClass("hover")
            },
            clickClose: function(e) {
              e.preventDefault(), u(null)
            },
            loadPreviewImage: function(t) {
              e.revokeObjectURL(t.data.url)
            },
            oldSchoolSubmit: function(e) {
              var t = "url" === h("modal-options")
              p("modal-options", "uploading"),
                c.find(".js-modal-input-file").prop("disabled", t),
                c.find(".js-modal-input-url").prop("disabled", !t),
                (e.target.target = a),
                g()
            },
            ajaxSubmit: function(e) {
              e.preventDefault(), p("modal-options", "uploading")
              var t = new window.FormData()
              t.append("file", e.data),
                t.append("fkey", StackExchange.options.user.fkey),
                g(),
                $.ajax({
                  url: r.uploadUrl,
                  data: t,
                  cache: !1,
                  contentType: !1,
                  processData: !1,
                  type: "POST",
                  success: m.ajaxResult,
                  error: m.ajaxError,
                })
            },
            checkEscape: function(e) {
              27 === e.which && (e.preventDefault(), u(null))
            },
          },
          b = function() {
            c.css("height", "auto"),
              c.find(".modal-options-uploading p").addSpinner(),
              c.find(".modal-options-default a").click(v.showLink),
              c.find(".modal-options-cancel").click(v.resetView),
              c
                .find(".js-modal-input-file")
                .on("click", v.clickFile)
                .on("change", v.inputFileOrUrl)
            var e = c
              .find(".js-modal-input-url")
              .on("input keydown", v.inputFileOrUrl)
            c.find(".modal-dropzone-default").click(v.selectFile),
              c
                .find(".js-modal-input-file")
                .change({ property: "target" }, v.previewImage),
              c
                .find(".js-modal-input-url")
                .focus(v.disablePasteHandling)
                .blur(v.enablePasteHandling),
              v.enablePasteHandling(),
              (o = c
                .find(".modal-dropzone-default")
                .on("dragenter", v.dragEnter)
                .on("dragleave", v.dragLeave)
                .on("dragover", !1)
                .on("drop", { property: "dataTransfer" }, v.previewImage)),
              c.find(".modal-close").click(v.clickClose),
              v.resetView(),
              c.focus(),
              r.imageUrl &&
                (v.showLink(), e.val(r.imageUrl), v.inputFileOrUrl())
          },
          y = function() {
            c.asyncLoad({
              callback: function() {
                w(c), b()
              },
              cache: t,
            })
          },
          w = function(e) {
            $('<iframe style="display: none;" src="about:blank" />')
              .attr("id", a)
              .attr("name", a)
              .appendTo(e)
          }
        return (
          c
            .appendTo("body")
            .center()
            .fadeIn("fast")
            .promise()
            .done(y),
          c.on("popupClose", v.disablePasteHandling),
          $("body").on("keydown", v.checkEscape),
          !0
        )
      },
    }
  })()),
  (StackExchange.postValidation = (function() {
    function e(e, t, n) {
      var i = {
        Title: ".js-post-title-field",
        Body: ".js-post-body-field[data-post-type-id=" + t + "]",
        Tags: ".js-post-tags-field",
        Mentions: ".js-post-mentions-field",
        EditComment: ".js-post-edit-comment-field",
        Excerpt: ".js-post-excerpt-field",
        Email: ".js-post-email-field",
        ArticleType: ".js-article-type-field",
      }
      return i[n] ? e.find(i[n]) : $()
    }
    function t(t, n, i) {
      var r = e(t, n, i)
      return i === M || i === D
        ? t.find(".js-tag-editor").filter(function() {
            return $(this).data("target-field") === r.get(0)
          })
        : r
    }
    function n(e, t, n, i) {
      var r = e.find(
          'input[type="submit"]:visible, button[type="submit"]:visible'
        ),
        o = r.length && r.is(":enabled")
      o && r.prop("disabled", !0),
        l(e, t, n),
        u(e, t, n, i),
        p(e, t, n),
        h(e, t, n),
        g(e, t, n),
        k(e, t, function() {
          d(e, t, n), o && r.prop("disabled", !1)
        })
    }
    function i(i, s, c, l, u) {
      n(i, s, c, l)
      var d,
        p = function(e) {
          if (
            (i.trigger("post:submit-completed", [
              { formType: c, postTypeId: s, response: e },
            ]),
            e.success)
          )
            if (u) u(e)
            else {
              var t = window.location.href.split("#")[0],
                n = e.redirectTo.split("#")[0]
              0 === n.indexOf("/") &&
                (n =
                  window.location.protocol +
                  "//" +
                  window.location.hostname +
                  n),
                (d = !0),
                (window.location = e.redirectTo),
                t.toLowerCase() === n.toLowerCase() &&
                  window.location.reload(!0)
            }
          else
            e.captchaHtml
              ? StackExchange.nocaptcha.init(e.captchaHtml, p)
              : e.errors
              ? (i.find(".js-post-prior-attempt-count").val(function(e, t) {
                  return (+t + 1 || 0).toString()
                }),
                w(i, s, c, e.errors, e.warnings))
              : b(
                  i,
                  s,
                  c,
                  {
                    General: [
                      $("<span/>")
                        .text(e.message)
                        .html(),
                    ],
                  },
                  0
                )
        }
      i.submit(function() {
        if (i.find(".js-post-answer-while-asking-checkbox").is(":checked"))
          return !0
        if (f(i, s, c)) return StackExchange.helpers.enableSubmitButton(i), !1
        if (
          (a(),
          StackExchange.navPrevention && StackExchange.navPrevention.stop(),
          i
            .find('input[type="submit"]:visible, button[type="submit"]')
            .addClass("is-loading"),
          StackExchange.helpers.disableSubmitButton(i),
          StackExchange.options.site.enableNewTagCreationWarning)
        ) {
          var n = e(i, s, M),
            l = n.prop("defaultValue")
          if (n.val() !== l)
            return (
              $.ajax({
                type: "GET",
                url: "/posts/new-tags-warning",
                dataType: "json",
                data: { tags: n.val() },
                success: function(e) {
                  if (e.showWarning) {
                    var n = {
                      closeOthers: !0,
                      shown: function() {
                        $(".js-confirm-tag-creation").on("click", function(e) {
                          return (
                            StackExchange.helpers.closePopups(),
                            o(i, s, c, d, p),
                            e.preventDefault(),
                            !1
                          )
                        })
                      },
                      dismissing: function() {
                        r(i, d)
                      },
                      returnElements: t(i, s, M).find("input:visible"),
                    }
                    StackExchange.helpers.showModal(
                      $(e.html).elementNodesOnly(),
                      n
                    ),
                      StackExchange.helpers.bindMovablePopups()
                  } else o(i, s, c, d, p)
                },
              }),
              !1
            )
        }
        return (
          setTimeout(function() {
            o(i, s, c, d, p)
          }, 0),
          !1
        )
      })
    }
    function r(e, t) {
      e
        .find('input[type="submit"]:visible, button[type="submit"]')
        .removeClass("is-loading"),
        t || StackExchange.helpers.enableSubmitButton(e)
    }
    function o(e, t, n, i, o) {
      $.ajax({
        type: "POST",
        dataType: "json",
        data: e.serialize(),
        url: e.attr("action"),
        success: o,
        error: function() {
          var i = v(n, 0)
          b(
            e,
            t,
            n,
            {
              General: [
                $("<span/>")
                  .text(i)
                  .html(),
              ],
            },
            0
          )
        },
        complete: function() {
          r(e, i)
        },
      })
    }
    function a() {
      for (var e = 0; e < H.length; e++) clearTimeout(H[e])
      H = []
    }
    function s(t, n, i, r, o) {
      e(t, n, r).blur(function() {
        var e = this,
          a = $(this),
          s = function(e) {
            E(t, n, i, r, e)
          },
          c = function(e) {
            return x(e, t, n, i, [r])
          }
        H.push(
          setTimeout(function() {
            var t = StackExchange.stacksValidation.handlerFor(a)
            t && !O && t.clear(), o.call(e, a, s, c)
          }, V)
        )
      })
    }
    function c(t, n, i, r, o) {
      if (1 === n)
        return x(
          {
            type: "POST",
            url: "/posts/validate-question",
            data: {
              title: e(t, n, R).val(),
              body: e(t, n, L).val(),
              tags: e(t, n, M).val(),
              fkey: StackExchange.options.user.fkey,
            },
          },
          t,
          n,
          i,
          [R, L, M],
          o
        ).promise()
      if (2 === n)
        return x(
          {
            type: "POST",
            url: "/posts/validate-body",
            data: {
              body: e(t, n, L).val(),
              oldBody: e(t, n, L).prop("defaultValue"),
              isQuestion: !1,
              isSuggestedEdit: r || !1,
              fkey: StackExchange.options.user.fkey,
            },
          },
          t,
          n,
          i,
          [L],
          o
        ).promise()
      var a = $.Deferred()
      return a.reject(), a.promise()
    }
    function l(e, t, n) {
      s(e, t, n, R, function(e, t, n) {
        var i = e.val(),
          r = $.trim(i).length,
          o = e.data("min-length"),
          a = e.data("max-length")
        return 0 !== r || O
          ? o && o > r
            ? (t(
                (function(e) {
                  return 1 == e.minLength
                    ? "Title must be at least " + e.minLength + " character."
                    : "Title must be at least " + e.minLength + " characters."
                })({ minLength: o })
              ),
              void 0)
            : a && r > a
            ? (t(
                (function(e) {
                  return 1 == e.maxLength
                    ? "Title cannot be longer than " +
                        e.maxLength +
                        " character."
                    : "Title cannot be longer than " +
                        e.maxLength +
                        " characters."
                })({ maxLength: a })
              ),
              void 0)
            : (n({
                type: "POST",
                url: "/posts/validate-title",
                data: { title: i, fkey: StackExchange.options.user.fkey },
              }),
              void 0)
          : (t(), void 0)
      })
    }
    function u(e, t, n, i) {
      s(e, t, n, L, function(e, n, r) {
        var o = e.val(),
          a = $.trim(o).length,
          s = e.data("min-length")
        return 0 !== a || O
          ? 5 === t
            ? (s && s > a
                ? n(
                    (function(e) {
                      return (
                        "Wiki Body must be at least " +
                        e.minLength +
                        " characters. You entered " +
                        e.actual +
                        "."
                      )
                    })({ minLength: s, actual: a })
                  )
                : n(),
              void 0)
            : ((1 === t || 2 === t) &&
                r({
                  type: "POST",
                  url: "/posts/validate-body",
                  data: {
                    body: o,
                    oldBody: e.prop("defaultValue"),
                    isQuestion: 1 === t,
                    isSuggestedEdit: i,
                    fkey: StackExchange.options.user.fkey,
                  },
                }),
              void 0)
          : (n(), void 0)
      })
    }
    function d(e, t, n) {
      s(e, t, n, M, function(e, t, n) {
        var i = e.val(),
          r = $.trim(i).length
        return 0 !== r || O
          ? (n({
              type: "POST",
              url: "/posts/validate-tags",
              data: {
                tags: i,
                oldTags: e.prop("defaultValue"),
                fkey: StackExchange.options.user.fkey,
              },
              success: function(t) {
                var n = e.closest(".js-post-form").find(".js-warned-tags-field")
                if (n.length) {
                  var i = n.val(),
                    r = n.data("warned-tags") || [],
                    o = ((t.source || {}).Tags || []).filter(function(e) {
                      return e && -1 === r.indexOf(e)
                    })
                  o.length > 0 &&
                    StackExchange.using("gps", function() {
                      o.forEach(function(e) {
                        StackExchange.gps.track(
                          "tag_warning.show",
                          { tag: e },
                          !0
                        ),
                          (i += " " + e),
                          r.push(e)
                      }),
                        n.val($.trim(i)).data("warned-tags", r),
                        StackExchange.gps.sendPending()
                    })
                }
              },
            }),
            void 0)
          : (t(), void 0)
      })
    }
    function f(t, n, i) {
      return "[Edit removed during grace period]" === $.trim(e(t, n, N).val())
        ? (E(
            t,
            n,
            i,
            N,
            "Comment reserved for system use. Please use an appropriate comment."
          ),
          !0)
        : !1
    }
    function p(e, t, n) {
      s(e, t, n, N, function(i, r) {
        var o = i.val(),
          a = $.trim(o).length,
          s = i.data("min-length"),
          c = i.data("max-length")
        return 0 === a
          ? (r(), void 0)
          : s && s > a
          ? (r(
              (function(e) {
                return 1 == e.minLength
                  ? "Your edit summary must be at least " +
                      e.minLength +
                      " character."
                  : "Your edit summary must be at least " +
                      e.minLength +
                      " characters."
              })({ minLength: s })
            ),
            void 0)
          : c && a > c
          ? (r(
              (function(e) {
                return 1 == e.maxLength
                  ? "Your edit summary cannot be longer than " +
                      e.maxLength +
                      " character."
                  : "Your edit summary cannot be longer than " +
                      e.maxLength +
                      " characters."
              })({ maxLength: c })
            ),
            void 0)
          : (f(e, t, n) || r(), void 0)
      })
    }
    function h(e, t, n) {
      s(e, t, n, U, function(e, t) {
        var n = e.val(),
          i = $.trim(n).length,
          r = e.data("min-length"),
          o = e.data("max-length")
        return 0 === i
          ? (t(), void 0)
          : r && r > i
          ? (t(
              (function(e) {
                return (
                  "Wiki Excerpt must be at least " +
                  e.minLength +
                  " characters; you entered " +
                  e.actual +
                  "."
                )
              })({ minLength: r, actual: i })
            ),
            void 0)
          : o && i > o
          ? (t(
              (function(e) {
                return (
                  "Wiki Excerpt cannot be longer than " +
                  e.maxLength +
                  " characters; you entered " +
                  e.actual +
                  "."
                )
              })({ maxLength: o, actual: i })
            ),
            void 0)
          : (t(), void 0)
      })
    }
    function g(e, t, n) {
      s(e, t, n, B, function(e, t) {
        var n = e.val(),
          i = $.trim(n),
          r = i.length
        return 0 === r
          ? (t(), void 0)
          : StackExchange.helpers.isEmailAddress(i)
          ? (t(), void 0)
          : (t("This email does not appear to be valid."), void 0)
      })
    }
    function m(e, t) {
      var n =
          $("#sidebar, .sidebar")
            .first()
            .width() || 270,
        i = "lg" === StackExchange.responsive.currentRange()
      return e === F
        ? {
            position: "inline",
            css: { display: "inline-block", "margin-bottom": "10px" },
            closeOthers: !1,
            dismissable: !1,
            type: t,
          }
        : {
            position: {
              my: i ? "left top" : "top center",
              at: i ? "right center" : "bottom center",
            },
            css: { "max-width": n, "min-width": n },
            closeOthers: !1,
            type: t,
          }
    }
    function v(e, t) {
      if (t > 0)
        switch (e) {
          case "question":
            return (function(e) {
              return 1 == e.specificErrorCount
                ? "Your question couldn't be submitted. Please see the error above."
                : "Your question couldn't be submitted. Please see the errors above."
            })({ specificErrorCount: t })
          case "answer":
            return (function(e) {
              return 1 == e.specificErrorCount
                ? "Your answer couldn't be submitted. Please see the error above."
                : "Your answer couldn't be submitted. Please see the errors above."
            })({ specificErrorCount: t })
          case "edit":
            return (function(e) {
              return 1 == e.specificErrorCount
                ? "Your edit couldn't be submitted. Please see the error above."
                : "Your edit couldn't be submitted. Please see the errors above."
            })({ specificErrorCount: t })
          case "tags":
            return (function(e) {
              return 1 == e.specificErrorCount
                ? "Your tags couldn't be submitted. Please see the error above."
                : "Your tags couldn't be submitted. Please see the errors above."
            })({ specificErrorCount: t })
          case "article":
            return (function(e) {
              return (
                1 == e.specificErrorCount,
                "Your article couldn't be submitted. Please see the errors above."
              )
            })({ specificErrorCount: t })
          default:
            return (function(e) {
              return 1 == e.specificErrorCount
                ? "Your post couldn't be submitted. Please see the error above."
                : "Your post couldn't be submitted. Please see the errors above."
            })({ specificErrorCount: t })
        }
      else
        switch (e) {
          case "question":
            return "An error occurred submitting the question."
          case "answer":
            return "An error occurred submitting the answer."
          case "edit":
            return "An error occurred submitting the edit."
          case "tags":
            return "An error occurred submitting the tags."
          case "article":
            return "An error occurred submitting the article."
          default:
            return "An error occurred submitting the post."
        }
    }
    function b(e, t, n, i, r) {
      var o = e
        .find(".js-general-error")
        .text("")
        .removeClass("d-none")
      if (!C(e, o, i, null, F, t, n))
        return r > 0
          ? (o.text(v(n, r)), void 0)
          : (o.addClass("d-none"), void 0)
    }
    function y(e) {
      var t = $(".js-post-review-summary").closest(
        ".js-post-review-summary-container"
      )
      if (t.length > 0) return t.filter(":visible").scrollIntoView(), void 0
      var n
      P() &&
        ($("#sidebar").animate({ opacity: 0.4 }, 500),
        (n = setInterval(function() {
          P() || ($("#sidebar").animate({ opacity: 1 }, 500), clearInterval(n))
        }, 500)))
      var i
      e.find(".validation-error, .js-stacks-validation.has-error").each(
        function() {
          var e = $(this).offset().top
          ;(!i || i > e) && (i = e)
        }
      )
      var r = function() {
        for (var t = 0; 3 > t; t++)
          e.find(".message")
            .animate({ left: "+=5px" }, 100)
            .animate({ left: "-=5px" }, 100)
      }
      if (i) {
        var o = $(".review-bar").length
        ;(i = Math.max(0, i - (o ? 125 : 30))),
          $("html, body").animate({ scrollTop: i }, r)
      } else r()
    }
    function w(e, t, n, i, r) {
      i &&
        k(e, t, function() {
          var o = S(e, t, n, [R, L, M, D, N, U, B, q], i, r).length
          b(e, t, n, i, o), y(e)
        })
    }
    function k(e, n, i) {
      var r = function() {
        1 !== n || t(e, n, M).length ? i() : setTimeout(r, 250)
      }
      r()
    }
    function x(e, t, n, i, r, o) {
      return $.ajax(e)
        .then(function(e) {
          return o
            ? $.when(o()).then(function() {
                return e
              })
            : e
        })
        .done(function(e) {
          S(t, n, i, r, e.errors, e.warnings)
        })
        .fail(function() {
          S(t, n, i, r, {}, {})
        })
    }
    function S(e, n, i, r, o, a) {
      for (var s = [], c = 0; c < r.length; c++) {
        var l = r[c]
        C(e, t(e, n, l), o, a, l, n, i) && s.push(l)
      }
      return s
    }
    function E(e, n, i, r, o) {
      T(
        e,
        t(e, n, r),
        o
          ? [
              $("<span/>")
                .text(o)
                .html(),
            ]
          : [],
        [],
        r,
        n,
        i
      )
    }
    function C(e, t, n, i, r, o, a) {
      var s = n[r] || [],
        c = (i || {})[r] || []
      return T(e, t, s, c, r, o, a)
    }
    function T(e, t, n, i, r, o, a) {
      var s = StackExchange.stacksValidation.handlerFor(t)
      return (
        s ? _(s, o, a, n, i, r) : j(t, r, n),
        e.find(".validation-error, .js-stacks-validation.has-error").length ||
          e.find(".js-general-error").text(""),
        t.trigger("post:validated-field", [
          { errors: n, warnings: i, field: r, postTypeId: o, formType: a },
        ]),
        n.length > 0
      )
    }
    function _(e, t, n, i, r) {
      e.clear("error"),
        i.forEach(function(t) {
          e.add("error", t)
        }),
        "edit" === n ||
          ("question" === n && O) ||
          (e.clear("warning"),
          r.forEach(function(t) {
            e.add("warning", t)
          }))
    }
    function j(e, t, n) {
      e &&
        e.length &&
        (0 === n.length ||
        (1 === n.length && "" === n[0]) ||
        !$("html").has(e).length
          ? A(e)
          : I(e, n, m(t, "error")))
    }
    function I(e, t, n) {
      var i =
          1 === t.length
            ? t[0]
            : "<ul><li>" + t.join("</li><li>") + "</li></ul>",
        r = e.data("error-popup")
      if (r && r.is(":visible")) {
        var o = e.data("error-message")
        if (o === i) return r.animateOffsetTop && r.animateOffsetTop(0), void 0
        r.fadeOutAndRemove()
      }
      var s = StackExchange.helpers.showMessage(e, i, n)
      s.find("a").attr("target", "_blank"),
        s.click(a),
        e
          .addClass("validation-error")
          .data("error-popup", s)
          .data("error-message", i)
    }
    function A(e) {
      var t = e.data("error-popup")
      t && t.is(":visible") && t.fadeOutAndRemove(),
        e.removeClass("validation-error"),
        e.removeData("error-popup"),
        e.removeData("error-message")
    }
    function P() {
      var e = !1,
        t = $("#sidebar, .sidebar").first()
      if (!t.length) return !1
      var n = t.offset().left
      return (
        $(".message").each(function() {
          var t = $(this)
          return t.offset().left + t.outerWidth() > n ? ((e = !0), !1) : void 0
        }),
        e
      )
    }
    var O = $("body").hasClass("js-ask-page-v2"),
      R = "Title",
      L = "Body",
      M = "Tags",
      D = "Mentions",
      N = "EditComment",
      U = "Excerpt",
      B = "Email",
      F = "General",
      q = "ArticleType",
      H = [],
      V = 250
    return {
      initOnBlur: n,
      initOnBlurAndSubmit: i,
      showErrorsAfterSubmission: w,
      validatePostFields: c,
      scrollToErrors: y,
    }
  })())
