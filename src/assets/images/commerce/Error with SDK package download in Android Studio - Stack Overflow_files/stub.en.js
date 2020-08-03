"use strict"
function IsMalwareProxy() {
  try {
    return (
      window.location.host.endsWith(".kinokrad-co.com") ||
      window.location.host.endsWith(".cryptoo.online")
    )
  } catch (e) {
    return !1
  }
}
if (
  ((window.StackExchange = {}),
  window.jQuery &&
    !(function(e) {
      var t = function(e) {
        e = e.toLowerCase()
        var t =
          /(chrome)[ \/]([\w.]+)/.exec(e) ||
          /(webkit)[ \/]([\w.]+)/.exec(e) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
          /(msie) ([\w.]+)/.exec(e) ||
          (e.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
          []
        return { browser: t[1] || "", version: t[2] || "0" }
      }
      if (!e.browser) {
        var n = t(navigator.userAgent),
          r = {}
        n.browser && ((r[n.browser] = !0), (r.version = n.version)),
          r.chrome ? (r.webkit = !0) : r.webkit && (r.safari = !0),
          (e.browser = r)
      }
    })(jQuery),
  top !== self &&
    0 !==
      window.location.pathname.toLowerCase().indexOf("/integrations/embedded"))
)
  throw (top.location.replace(document.location),
  $(function() {
    $("body")
      .empty()
      .text("For security reasons, framing is not allowed."),
      $("head").remove()
  }),
  new Error())
if (
  ((StackExchange.init = (function() {
    function e() {
      $(document).on("click", ".convert-to-post", function(e) {
        e.preventDefault()
        var t = $(this).attr("data-confirm")
        if (!t || confirm(t)) {
          var n = $("<form method='post'/>")
            .attr("action", $(this).attr("href"))
            .appendTo("body")
          n.append(
            $("<input type='hidden' name='fkey' />").attr(
              "value",
              $(this).attr("data-fkey")
            )
          ).submit()
        }
      })
    }
    function t() {
      function e(e) {
        StackExchange.options.site.prefixFkey &&
          StackExchange.options.site.routePrefix &&
          (e = StackExchange.options.site.routePrefix + "/" + e),
          StackExchange.options.user.fkey !== e &&
            ((StackExchange.options.user.fkey = e),
            $("input[name=fkey]").val(e))
      }
      function t(e, t) {
        try {
          var n = e.lastIndexOf("/")
          n >= 0 && (e = e.substr(n + 1)), localStorage.setItem(r, e + "," + t)
        } catch (i) {}
      }
      function n() {
        var e = localStorage.getItem(r)
        if (!e) return { time: 0 }
        var t = e.split(/,/)
        return { fkey: t[0], time: parseInt(t[1], 10) }
      }
      var r = "se:fkey"
      $(window).on("storage", function(t) {
        ;(t = t.originalEvent),
          t.key === r && t.newValue && e(t.newValue.split(/,/)[0])
      })
      try {
        var i = StackExchange.options.user.fkey,
          a = n()
        a.fkey !== i &&
          (StackExchange.options.serverTime > a.time
            ? t(i, StackExchange.options.serverTime)
            : e(a.fkey))
      } catch (o) {}
    }
    function n() {
      function e(e) {
        var t = i.filter('[data-name="' + e + '"]')
        i.removeClass("site-footer--col__visible"),
          t.addClass("site-footer--col__visible")
      }
      var t = $(".js-footer-category-trigger"),
        n = $(".js-footer"),
        r = $(".js-footer-back"),
        i = $(".js-footer-col")
      t.on("click", function(r) {
        r.preventDefault()
        var i = $(this).data("target")
        t.removeClass("_active"),
          $(this).addClass("_active"),
          n.addClass("site-footer__open"),
          e(i)
      }),
        r.on("click", function(r) {
          r.preventDefault(),
            t.removeClass("_active"),
            n.removeClass("site-footer__open"),
            e("default")
        })
    }
    var r = function(e) {
        if (!window.jQuery) {
          if ("complete" !== document.readyState)
            return (
              setTimeout(function() {
                r(e)
              }, 1e3),
              void 0
            )
          var t = document.createElement("div")
          ;(t.id = "noscript-warning"),
            (t.innerHTML = (function(e) {
              return (
                e.siteName +
                ' requires external JavaScript from another domain, which is blocked or failed to load. <a href="' +
                e.cookieUrl +
                '">Retry using another source</a>.'
              )
            })({ siteName: e, cookieUrl: "/home/get-jquery-fallback-cookie" })),
            document.body.appendChild(t)
          var n = document.getElementById("noscript-css")
          if (!n) return
          var i = document.createElement("div")
          ;(i.innerHTML = n.innerText),
            document.head.appendChild(i.getElementsByTagName("style")[0])
        }
      },
      i = function() {
        var e = function(t, n) {
          if (t) {
            var r = $(t).filter(":not(.popup-stack-hidden)")
            if (!r.length) return
            r.each(function(e, t) {
              var n = $(t),
                i = n.data("_popup"),
                a = n.data("_lightbox")
              i && (r = r.add(i)), a && (r = r.add(a))
            }),
              (r = $($.unique(r.get()))),
              (r = r.not(".popup-closing").addClass("popup-closing"))
            var i = { closeTrigger: n },
              a = $.Event("popupClosing", i)
            if ((r.trigger(a), a.isDefaultPrevented()))
              return r.removeClass("popup-closing"), void 0
            ;(r = r.not(".popup-closed").addClass("popup-closed")),
              r.filter(":not(.esc-hide)").fadeOutAndRemove(),
              r.filter(".esc-hide").fadeOut("fast", function() {
                r.removeClass("popup-closing").removeClass("popup-closed")
              }),
              r.trigger("popupClose", i)
          } else
            StackExchange.topbar && StackExchange.topbar.hideAll(),
              e(
                ".lightbox:not(.no-auto-close), .message-dismissable, .popup:not(.no-auto-close), .s-modal.js-stacks-managed-popup:not(.no-auto-close), .esc-remove, .esc-hide",
                "esc"
              )
        }
        $(document).keyup(function(t) {
          27 === t.which && e()
        }),
          $("body").mousedown(function(t) {
            var n = $(t.target)
            if (
              !n.closest(
                ".ac_results, .popup, .wmd-prompt-dialog, .message, .modal, .body-click-hide"
              ).length
            ) {
              var r = "click outside"
              if (1 === t.which) {
                if (n.is(".wmd-prompt-background"))
                  return (
                    e(
                      ".wmd-prompt-dialog, .wmd-prompt-background, .popup#image-upload",
                      r
                    ),
                    void 0
                  )
                n.closest(".popup, .modal, .s-modal--dialog, .s-toast")
                  .length ||
                  e(
                    ".popup:not(.no-auto-close), .lightbox:not(.no-auto-close), .modal:not(.no-auto-close), .s-modal.js-stacks-managed-popup:not(.no-auto-close)",
                    r
                  ),
                  n.closest(".message-config").length ||
                    e(".message-config.message-dismissable", r),
                  n.closest(".body-click-hide").length || e(".esc-hide")
              }
            }
          }),
          $(document).bind("closePopups", function(t) {
            e(t.selectorToClose, t.closeTrigger)
          })
        var t = []
        $(document)
          .on("popupLoad", function(e) {
            var n = e.popup
            if (e.lightbox)
              for (var r = 0; r < t.length; r++)
                t[r].css("display", "none").addClass("popup-stack-hidden")
            var i = n.data("_lightbox")
            i && (n = n.add(i)),
              n.data("popup-stack-index", t.length),
              t.push(n)
          })
          .on("popupClosing", function(n) {
            if (!n.isDefaultPrevented()) {
              var r,
                i = $(n.target).data("popup-stack-index")
              if (i && !isNaN(i)) {
                for (
                  (0 > i || i >= t.length) &&
                  StackExchange.debug.log("popupStack index out of bounds");
                  t.length > i;

                )
                  (r = t.pop()),
                    r.data("popup-stack-index", null),
                    e(r, n.closeTrigger)
                for (
                  ;
                  i > 0 &&
                  ((r = t[--i]),
                  r.removeClass("popup-stack-hidden").css("display", "block"),
                  !r.filter(".lightbox").length);

                );
              }
            }
          })
      },
      a = 2
    return function(o, s) {
      ;(StackExchange.options = o),
        (StackExchange.settings = s),
        (o.serverTimeOffsetSec = o.serverTime - new Date().getTime() / 1e3),
        r(o.site.name),
        $.ajaxSetup({ cache: !1 }),
        StackExchange.init.createJqueryExtensions(),
        (o.enableLogging =
          (o.user.isEmployee || o.isDebugBuild) &&
          "undefined" != typeof console &&
          "undefined" != typeof console.log),
        $(function() {
          function r() {
            StackExchange.using(
              StackExchange.options.user.isAnonymous ? "anonymous" : "loggedIn",
              function() {
                Svg.init(o.svgIconPath, o.svgIconHash),
                  StackExchange.initialized.resolve()
              },
              a,
              o.fullPostfix
            )
          }
          IsMalwareProxy() &&
            (window.location.href =
              "https://stackexchange.com/about/malware?host=" +
              window.location.hostname),
            i(),
            t(),
            e(),
            n(),
            r()
          var c = StackExchange.settings.site.styleCodeAdditionalLang
          c &&
            StackExchange.ifUsing("prettify", function() {
              return StackExchange.loadJsFile(
                "third-party/prettify/additional-langs/" + c
              )
            }),
            StackExchange.scrollPadding.ensureInitialized(),
            StackExchange.ready(function() {
              o.user.messages &&
                StackExchange.notify.showMessages(o.user.messages, o.isMobile),
                s.site.enableUserHovercards && StackExchange.usermenu.init(),
                o.site.universalAuthDisabled || UniversalAuth.performAuth(),
                StackExchange.tagPreferences
                  ? StackExchange.tagPreferences.init()
                  : StackExchange.tagmenu.init(),
                o.timingsGuid &&
                  $(window).on("load", function() {
                    setTimeout(StackExchange.processTimings, 50)
                  }),
                $("*[data-tracker]").track(),
                StackExchange.bindShowMoreHotNetworkQuestions()
              var e = function() {
                var e = !1
                $("body > script:not([src])").each(function() {
                  return this.textContent.length > 4e4 &&
                    /currentSelectable/.test(this.textContent)
                    ? ((e = !0), !1)
                    : void 0
                }),
                  (e || o.user.keyboardShortcuts) &&
                    StackExchange.using("keyboardShortcuts", function() {
                      StackExchange.keyboardShortcuts.init(e)
                    })
              }
              document.readyState && "complete" !== document.readyState
                ? $(window).on("load", function() {
                    setTimeout(e, 10)
                  })
                : setTimeout(e, 10),
                StackExchange.showFlashMessageIfAny()
            })
        })
    }
  })()),
  (StackExchange.debug = {
    log: function() {},
    init: function() {
      this.log = function(e) {
        $(function() {
          var t = $("#debug-messages")
          t.length ||
            (t = $(
              "<div id='debug-messages' style='text-align:left;position:fixed;top:50px;left:50px;z-index:1000;background:white;border:2px solid black;width:300px;padding:10px;' />"
            )
              .append(
                $(
                  "<span style='cursor:pointer;color:#999'>(close debug messages)</span>"
                ).click(function() {
                  $("#debug-messages").remove()
                })
              )
              .appendTo("body")),
            $("<div style='margin-top:10px' />")
              .text(e)
              .appendTo(t)
        })
      }
    },
  }),
  (StackExchange.initialized = $.Deferred()),
  (StackExchange.gaInitialized = $.Deferred()),
  (StackExchange.ready = function(e) {
    StackExchange.initialized.done(e)
  }),
  (StackExchange.gaReady = function(e) {
    StackExchange.gaInitialized.done(e)
  }),
  window.serq)
)
  for (var i = 0; i < window.serq.length; i++)
    StackExchange.ready(window.serq[i])
!(function() {
  var e,
    t = {
      adops: "adops.js",
      anonymous: "full-anon.js",
      ask: "ask.js",
      autocomplete: "tageditor.js",
      beginEditEvent: "begin-edit-event.js",
      editor: "wmd.js",
      eventCharts: "events.js",
      exploreQuestions: "explore-qlist.js",
      externalEditor: ["full-anon.js", "full.js"],
      gps: ["full-anon.js", "full.js"],
      help: "help.js",
      inlineEditing: "full.js",
      inlineTagEditing: "inline-tag-editing.js",
      keyboardShortcuts: "keyboard-shortcuts.js",
      loggedIn: "full.js",
      mathjaxEditing: "mathjax-editing.js",
      mathjaxEditingBeta: "mathjax-editing.beta.js",
      markdownit: "markdown-it-loader.js",
      mobile: "mobile.js",
      mockups: ["full-anon.js", "full.js"],
      moderator: "moderator.js",
      "StackOverflow.Scripts.PostCollections": "postCollections-transpiled.js",
      postValidation: "post-validation.js",
      prettify: "prettify-full.js",
      review: "review.js",
      revisions: "revisions.js",
      schematics: ["full-anon.js", "full.js"],
      snippets: ["full-anon.js", "full.js"],
      snippetsJsCodeMirror: "snippet-javascript-codemirror.js",
      tagAutocomplete: "tageditor.js",
      tagEditor: "tageditornew.js",
      tagSuggestions: "tagsuggestions.js",
      translation: "full.js",
      virtualKeyboard: "virtual-keyboard.js",
    },
    n = {},
    r = {},
    i = {},
    a = {},
    o = {},
    s = function(e, t) {
      return function(n) {
        var r = e[n]
        return r || (r = e[n] = t(n)), r
      }
    },
    c = function(e) {
      var t,
        n,
        r = i[e],
        a = $.Deferred(),
        o = $.when(a)
      if (r)
        for (t = 0; t < r.length; t++)
          (n = r[t].call(null)),
            n && $.isFunction(n.promise) && (o = $.when(o, n))
      return a.resolve(), o
    },
    l = function() {
      if (!e) {
        var t = $("script[src]")
          .filter(function() {
            return /stub.*\.js/.test($(this).attr("src"))
          })
          .first()
        0 === t.length
          ? (StackExchange.debug.log("couldn't figure out location of stub.js"),
            (e = "/Content/Js/"))
          : (e = t.attr("src").replace(/\/stub.*\.js.*$/, "/"))
      }
      return e
    },
    u = function(e) {
      var t = o["js/" + e]
      return t
        ? "?v=" + t
        : (StackExchange.debug.log("no cache breaker for " + e), "")
    },
    d = function(e) {
      return (
        e &&
          StackExchange.options.locale &&
          -1 === e.indexOf("third-party") &&
          (e = e.replace(
            /^(.*)(\.js)(\?.*)?$/,
            "$1." + StackExchange.options.locale + "$2$3"
          )),
        e
      )
    },
    p = function(e, t) {
      var n = $.Deferred(),
        r = document.createElement("script")
      return (
        (r.async = "async"),
        (r.src = t ? e : d(e)),
        (r.onload = r.onreadystatechange = function(e, t) {
          ;(!r.readyState || /loaded|complete/.test(r.readyState)) &&
            (t ? n.reject() : n.resolve())
        }),
        (r.onerror = function() {
          n.reject()
        }),
        $("head")[0].appendChild(r),
        n.promise()
      )
    },
    f = function(e) {
      var n = t[e]
      if (!n)
        return $.Deferred()
          .reject()
          .promise()
      if (n instanceof Array) {
        if (0 === n.length)
          return $.Deferred()
            .reject()
            .promise()
        for (var i = 0; i < n.length; i++) {
          var a = n[i],
            o = r[a]
          if (o) return o
        }
        return h(n[0])
      }
      return h(n)
    },
    h = s(r, function(e) {
      return p(l() + e + u(d(e)))
    }),
    g = s(n, function(e) {
      function t() {
        if (!e) return void 0
        if ("string" != typeof e || e.indexOf(".") < 0) return StackExchange[e]
        for (
          var t = window, n = e.split("."), r = 0;
          r < n.length && ((t = t[n[r]]), t);
          r++
        );
        return t
      }
      function n() {
        return (i = t())
          ? (c(e).done(function() {
              r.resolve()
            }),
            void 0)
          : a > 0
          ? (a--,
            StackExchange.debug.log("retrying " + e),
            setTimeout(n, 20),
            void 0)
          : (StackExchange.debug.log(
              "object StackExchange." +
                e +
                " not available although file was loaded"
            ),
            r.reject(),
            void 0)
      }
      var r = $.Deferred(),
        i = t(),
        a = 3
      return (
        i
          ? r.resolve()
          : f(e)
              .done(n)
              .fail(r.reject),
        r.promise()
      )
    }),
    m = $.Deferred(),
    v = 0,
    b = 2,
    y = function(e, n, r, i) {
      if (((r = r || v), r === v && "resolved" !== m.state()))
        return (
          m.done(function() {
            y(e, n)
          }),
          void 0
        )
      if (r === b)
        for (var a in t)
          if (t.hasOwnProperty(a)) {
            var o,
              s = t[a]
            if (s instanceof Array) {
              o = []
              for (var c = 0; c < s.length; c++) {
                var l = s[c].replace(
                  /^(full(?:-anon)?).js$/,
                  "$1" + (i || "") + ".js"
                )
                o.push(l)
              }
              t[a] = o
            } else
              t[a] = s.replace(
                /^(full(?:-anon)?).js$/,
                "$1" + (i || "") + ".js"
              )
          }
      var u = g(e)
      return (
        r === v
          ? (u = $.when(u, StackExchange.initialized))
          : r === b && m.resolve(),
        u
          .done(function() {
            n()
          })
          .fail(function() {
            StackExchange.debug.log("failed to provide object " + e)
          }),
        u
      )
    }
  y.setCacheBreakers = function(e) {
    for (var t in e) e.hasOwnProperty(t) && (o[t] = e[t])
  }
  var w = function(e, t, n) {
    if ("undefined" != typeof n) {
      if (a["u_" + n]) return
      a["u_" + n] = !0
    }
    if (StackExchange[e]) return t(), void 0
    var r = i[e]
    r || (r = i[e] = []), r.push(t)
  }
  ;(StackExchange.using = y),
    (StackExchange.ifUsing = w),
    (StackExchange.loadJsFile = function(e, t) {
      return p(l() + e, t)
    })
})(),
  (String.prototype.formatUnicorn = function() {
    var e = this.toString()
    if (!arguments.length) return e
    var t = typeof arguments[0],
      n =
        "string" === t || "number" === t
          ? Array.prototype.slice.call(arguments)
          : arguments[0]
    for (var r in n) e = e.replace(new RegExp("\\{" + r + "\\}", "gi"), n[r])
    return e
  }),
  (String.prototype.truncate = function(e, t) {
    var n = this.toString()
    return e && n.length > e && (n = n.substr(0, e) + t), n
  }),
  (String.prototype.splitOnLast = function(e) {
    var t = this.lastIndexOf(e)
    return 0 > t ? [this] : [this.substr(0, t), this.substr(t)]
  }),
  (String.prototype.contains = function(e) {
    return this.indexOf(e) > -1
  }),
  String.prototype.endsWith ||
    (String.prototype.endsWith = function(e) {
      return -1 !== this.indexOf(e, this.length - e.length)
    }),
  (StackExchange.init.createJqueryExtensions = function() {
    var e = StackExchange.helpers
    $.extend($.expr[":"], {
      working: function(e) {
        var t = $(e).data("working")
        return "undefined" != typeof t && t
      },
      data: function(e, t, n) {
        var r = n[3],
          i = $(e).data(r)
        switch (typeof i) {
          case "undefined":
            return !1
          case "boolean":
            return i
          case "object":
            return null !== i
        }
        return !0
      },
      containsCI: function(e, t, n) {
        return (
          jQuery(e)
            .text()
            .toUpperCase()
            .indexOf(n[3].toUpperCase()) >= 0
        )
      },
      viewport: function(e) {
        var t = e.getBoundingClientRect()
        return (
          t.top >= 0 &&
          t.left >= 0 &&
          t.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          t.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
      },
    }),
      $.fn.extend({
        working: function(e) {
          return this.each(function() {
            $(this).data("working", e)
          })
        },
        track: function() {
          return this.each(function() {
            var e = $(this),
              t = e.is("a[href]") ? e : e.find("a[href]"),
              n = e.data("tracker")
            t.each(function() {
              var e = this.href.splitOnLast("#"),
                t = e[0]
              ;(t += (t.contains("?") ? "&" : "?") + n + (e[1] || "")),
                (this.href = t)
            })
          })
        },
        fadeOutAndRemove: function() {
          return this.each(function() {
            var e = $(this)
            e.is(".js-fades-with-aria-hidden")
              ? (e.attr("aria-hidden", "true"),
                e.on("transitionend", function(t) {
                  "opacity" === t.originalEvent.propertyName &&
                    e.trigger("removing").remove()
                }))
              : e.fadeOut("fast", function() {
                  e.trigger("removing").remove()
                })
          })
        },
        charCounter: function(t) {
          return this.each(function() {
            var n = t.target
                ? $(t.target)
                : $(this)
                    .parents("form")
                    .find("span.text-counter"),
              r = this,
              i = function() {
                var e = t.min,
                  i = t.max,
                  a = (t.setIsValid || function() {}).bind(r),
                  o = 0,
                  s = r.tagName && "DIV" === r.tagName ? r.textContent : r.value
                s &&
                  (o = t.ignoreWhitespace
                    ? s
                        .replace(/\s+/g, " ")
                        .replace(/^\s+/, "")
                        .replace(/\s+$/, "").length
                    : s.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n").length)
                var c =
                    o > 0.8 * i
                      ? "supernova"
                      : o > 0.6 * i
                      ? "hot"
                      : o > 0.4 * i
                      ? "warm"
                      : "cool",
                  l = ""
                if (0 === o)
                  0 === e
                    ? ((l = (function(e) {
                        return 1 == e.max
                          ? "enter up to " + e.max + " character"
                          : "enter up to " + e.max + " characters"
                      })({ max: i })),
                      a(!0))
                    : ((l = (function(e) {
                        return 1 == e.min
                          ? "enter at least " + e.min + " character"
                          : "enter at least " + e.min + " characters"
                      })({ min: e })),
                      a(!1))
                else if (e > o)
                  (l = (function(e) {
                    return 1 == e.count, e.count + " more to go..."
                  })({ count: e - o })),
                    a(!1)
                else {
                  var u = i - o
                  ;(l =
                    u >= 0
                      ? (function(e) {
                          return 1 == e.count
                            ? e.count + " character left"
                            : e.count + " characters left"
                        })({ count: u })
                      : (function(e) {
                          return 1 == e.count
                            ? "too long by " + e.count + " character"
                            : "too long by " + e.count + " characters"
                        })({ count: Math.abs(u) })),
                    a(i >= o)
                }
                n.text(l),
                  n.hasClass(c) ||
                    n.removeClass("supernova hot warm cool").addClass(c)
              }
            $(this).bind(
              "blur focus keyup paste charCounterUpdate",
              e.DelayedReaction(i, 100, { sliding: !0 }).trigger
            )
          })
        },
        selectRange: function(e, t) {
          return this.each(function() {
            if (this.setSelectionRange)
              this.focus(), this.setSelectionRange(e, t)
            else if (this.createTextRange) {
              var n = this.createTextRange()
              n.collapse(!0),
                n.moveEnd("character", t),
                n.moveStart("character", e),
                n.select()
            }
          })
        },
        addSpinner: function(t) {
          return this.each(function() {
            e.addSpinner(this, t)
          })
        },
        addSpinnerAfter: function(t) {
          return this.each(function() {
            $(this).after(e.getSpinnerImg(t))
          })
        },
        addSpinnerBefore: function(t) {
          return this.each(function() {
            $(this).before(e.getSpinnerImg(t))
          })
        },
        addStacksSpinner: function(t, n) {
          return this.each(function() {
            e.addStacksSpinner(this, t, n)
          })
        },
        setTooltipText: function(e, t) {
          return this.each(function() {
            Stacks.setTooltipText(this, e, t)
          })
        },
        setTooltipHtml: function(e, t) {
          return this.each(function() {
            Stacks.setTooltipHtml(this, e, t)
          })
        },
        removeSpinner: function() {
          return this.each(function() {
            $(this)
              .find("img.ajax-loader, .s-spinner")
              .remove()
          })
        },
        showErrorMessage: function(t, n) {
          return this.each(function() {
            e.showErrorMessage(this, t, n)
          })
        },
        showErrorPopup: function(t, n) {
          return this.each(function() {
            e.showErrorMessage(this, t, n)
          })
        },
        showInfoMessage: function(t, n) {
          return this.each(function() {
            e.showInfoMessage(this, t, n)
          })
        },
        center: function(e) {
          if (StackExchange.options.isMobile) return this
          e = e || {}
          var t = this.parent()
          "static" === t.css("position") && (t = t.offsetParent())
          var n = t.offset(),
            r = $(window),
            i =
              e.top ||
              Math.max(
                (r.height() - this.outerHeight()) / 2 +
                  r.scrollTop() -
                  StackExchange.scrollPadding.getPaddingTop() -
                  n.top +
                  (e.dy || 0),
                65
              )
          this.css("position", "absolute"), this.css("top", i + "px")
          var a = Math.max(
            20,
            (r.width() - this.outerWidth()) / 2 + r.scrollLeft() - n.left
          )
          this.css("left", a + "px")
          var o = "calc(50% - " + this.outerWidth() / 2 + "px)"
          return this.css("left", o), this.css("left", "-webkit-" + o), this
        },
        enable: function() {
          return (
            0 === arguments.length || arguments[0]
              ? this.removeAttr("disabled")
                  .css("cursor", "pointer")
                  .removeClass("disabled-button")
              : this.attr("disabled", "disabled")
                  .css("cursor", "default")
                  .addClass("disabled-button"),
            this
          )
        },
        disable: function() {
          return this.enable(!1)
        },
        checked: function(e) {
          return (
            e ? this.attr("checked", "checked") : this.removeAttr("checked"),
            this
          )
        },
        loadPopup: function(t) {
          var n = $.Deferred(),
            r = this,
            i = t.target || r.parent()
          if (!t.html && !t.noSpinner) {
            var a = t.addSpinnerFn || $.fn.addSpinnerAfter
            a.call(r, { padding: "0 3px" })
          }
          t.loaded && n.done(t.loaded)
          var o = function(a) {
            var o,
              s = $(a).elementNodesOnly()
            s
              .find(
                ".popup-actions-cancel, .popup-close a, .modal-close, .js-popup-close"
              )
              .click(function() {
                StackExchange.helpers.closePopups(o ? s.add(o) : s)
              }),
              s
                .find("input:radio[disabled=disabled] + label.action-label")
                .addClass("action-disabled"),
              t.hideDescriptions &&
                s
                  .addClass("_hidden-descriptions")
                  .find(
                    "ul.action-list > li:not(.action-selected) .action-desc"
                  )
                  .hide()
            var c = s.find("input:radio:not(.action-subform input)")
            c
              .closest("li")
              .bind("hide-action", function() {
                var e = $(this),
                  n =
                    ".action-subform" +
                    (t.hideDescriptions ? ", .action-desc" : "")
                e.removeClass("action-selected")
                  .find(n)
                  .slideUp("fast")
              })
              .bind("show-action", function(e) {
                var n = $(this)
                return n.hasClass("action-selected")
                  ? (e.stopImmediatePropagation(), void 0)
                  : (n.siblings(".action-selected").trigger("hide-action"),
                    n
                      .addClass("action-selected")
                      .find(".action-subform")
                      .slideDown("fast", function() {
                        if (
                          (t.subformShow && t.subformShow($(this)),
                          t.subformFocusInput)
                        ) {
                          var e = $(this)
                            .find("input[type=text], textarea")
                            .not(".actual-edit-overlay")
                            .eq(0)
                          e.length && e.focus()
                        }
                      }),
                    t.hideDescriptions &&
                      n.find(".action-desc").slideDown("fast"),
                    t.actionSelected && t.actionSelected(n),
                    s.find(".popup-submit, .js-popup-submit").enable(),
                    void 0)
              })
              .filter(".show-action-onload")
              .each(function() {
                var e = $(this)
                n.done(function() {
                  e.find("input[type=radio]").click()
                })
              }),
              c.on("click", function() {
                $(this)
                  .closest("li")
                  .trigger("show-action")
              }),
              (
                t.insert ||
                function(e) {
                  t.prepend ? e.prependTo(i) : e.appendTo(i)
                }
              )(s),
              t.lightbox &&
                ((o = StackExchange.helpers.addLightbox().data("_popup", s)),
                s.css("z-index", +o.css("z-index") + 1).data("_lightbox", o)),
              n.resolveWith(r, [s, o]),
              i.trigger($.Event("popupLoad", { popup: s, lightbox: o }))
            var l = function() {}
            if (t.subformShow) {
              var u = s.find("li.action-selected .action-subform")
              u.length > 0 &&
                (l = function() {
                  u.each(function() {
                    t.subformShow($(this))
                  })
                })
            }
            var d = !!t.dontShow
            d || (s.center().fadeIn("fast", l), o && o.fadeIn("fast")),
              e.bindMovablePopups()
          }
          return (
            t.html
              ? o(t.html)
              : $.ajax({
                  type: "GET",
                  url: t.url,
                  dataType: "html",
                  data: t.data,
                  success: o,
                  error: function(e) {
                    var r =
                      e.responseText && e.responseText.length < 200
                        ? e.responseText
                        : t.defaultErrorMessage ||
                          "Unable to load popup - please try again"
                    ;(t.errorTarget || i).showErrorMessage(r, {
                      transient: 409 === e.status,
                    }),
                      n.reject(r)
                  },
                  complete: e.removeSpinner,
                }),
            n.promise()
          )
        },
        asyncLoad: function(e) {
          return (
            (e = $.extend({ callback: null, cache: {} }, e)),
            this.each(function() {
              var t = ".async-load",
                n = $(this),
                r = n.find(t)
              n.is(t) && (r = r.add(n)),
                r.each(function() {
                  var t = $(this),
                    n = t.data("load-url") || ""
                  if (n && !t.is(":working")) {
                    t.working(!0).addSpinner()
                    var r = function(n) {
                        t.html(n)
                          .removeClass("async-load")
                          .mathjax()
                        var r = t.data("after-load") || ""
                        if (r || e.callback) {
                          for (
                            var i, a = r ? r.split(".") : [], o = 0;
                            o < a.length;
                            o++
                          )
                            i = (i || window)[a[o]]
                          ;(i = i || e.callback), "function" == typeof i && i(t)
                        }
                      },
                      i = e.cache[n]
                    i
                      ? window.setTimeout(function() {
                          r(i)
                        }, 0)
                      : $.ajax({ type: "GET", url: n, dataType: "html" })
                          .done(function(t) {
                            ;(e.cache[n] = t), r(t)
                          })
                          .fail(function() {
                            t.removeSpinner().showErrorMessage(
                              "An error has occurred; please try again"
                            )
                          })
                  }
                })
            })
          )
        },
        mathjax: function() {
          return this.each(function() {
            "undefined" != typeof MathJax && MathJax.Hub.Typeset(this)
          })
        },
        elementNodesOnly: function() {
          return this.filter(function() {
            return 1 === this.nodeType
          })
        },
        scrollIntoView: function(e) {
          if (0 === this.length) return this
          var t = { duration: 100, complete: null },
            n = $.extend({}, t, e),
            r = this.first()
          return (
            "contents" === r.css("display") && (r = r.find(">*:first")),
            r.is(":viewport")
              ? "function" == typeof n.complete && n.complete()
              : $("html, body").animate({ scrollTop: r.offset().top }, n),
            this
          )
        },
        outerHTML: function() {
          return $("<div>")
            .append(this.eq(0).clone())
            .html()
        },
        unadornedButtonClick: function(e, t) {
          var n = { namespace: "button", selector: null },
            r = $.extend({}, n, t)
          return this.on("keypress." + r.namespace, r.selector, function(t) {
            ;(32 === t.keyCode || 13 === t.keyCode) &&
              (e.apply(this, arguments), t.preventDefault())
          }).on("click." + r.namespace, r.selector, function(t) {
            this.blur(), e.apply(this, arguments), t.preventDefault()
          })
        },
        addAtEnd: function(e) {
          var t = this.get()
          return t.push.apply(t, $(e).get()), this.pushStack(t)
        },
        dispatchEvent: function(e, t) {
          var n,
            r = this.get(0)
          try {
            n = new CustomEvent(e, {
              cancelable: !0,
              bubbles: !0,
              detail: t || {},
            })
          } catch (i) {
            ;(n = document.createEvent("CustomEvent")),
              n.initCustomEvent(e, !0, !0, t || {})
          }
          return r && r.dispatchEvent(n), n
        },
      })
  }),
  (StackExchange.helpers = (function() {
    function e(e, t) {
      $(e)
        .find("input[type='submit'], button[type='submit']")
        .prop("disabled", t)
    }
    var t = function() {
        var e = $("div.popup:not([data-controller~=se-draggable])")
        e.attr("data-controller", "se-draggable")
          .find(".handle")
          .attr("data-target", "se-draggable.handle")
      },
      n = {
        addLightbox: function() {
          return $('<div class="lightbox"/>')
            .appendTo($("body"))
            .css("height", $(document).height())
        },
        bindMovablePopups: t,
        onClickDraftSave: function(e) {
          return (
            $(e).click(function(e) {
              if (StackExchange.cardiologist) {
                e.preventDefault()
                var t = this.href
                return (
                  StackExchange.cardiologist.ensureDraftSaved(function() {
                    ;(window.onbeforeunload = null), (window.location.href = t)
                  }),
                  !1
                )
              }
            }),
            !0
          )
        },
        showMessage: function(e, t, r) {
          if (((e = $(e)), e.length)) {
            var i = {
                messageElement: null,
                position: "inside",
                dismissable: !0,
                type: "error",
                closeOthers: !0,
                shown: function() {},
                relativeToBody: !1,
                lightbox: !1,
                stopBodyScroll: !1,
                fixedTo$elem: !1,
                slideDown: !1,
              },
              a = $.extend({}, i, r),
              o = 9
            a.closeOthers &&
              $(".message, .js-stacks-managed-popup").fadeOutAndRemove()
            var s = $(
                '<div class="message"><div class="message-inner"><div class="message-text"></div></div></div>'
              ),
              c = s.find(".message-inner"),
              l = s.find(".message-text")
            if (
              (s.addClass("message-" + a.type),
              a.cssClass && s.addClass(a.cssClass),
              a.messageElement ? l.append(a.messageElement) : l.html(t),
              a.dismissable &&
                (s.addClass("message-dismissable"),
                l.css("padding-right", "48px"),
                c.prepend(
                  $("<div />", {
                    title: a.closeTitle || "close this message (or hit Esc)",
                    class: "message-close",
                    text: "×",
                  })
                ),
                s.click(function(e) {
                  var t = $(e.target),
                    n =
                      (a.dismissable === !0 && !t.is("a")) ||
                      ("x-or-esc" === a.dismissable &&
                        t.is(".message-close, .message-close-inner"))
                  n &&
                    (a.dismissing && a.dismissing(),
                    s.fadeOutAndRemove(),
                    a.lightbox && $(".lightbox").fadeOutAndRemove())
                })),
              a.dismissing &&
                s.on("popupClose", function(e, t) {
                  "esc" === t.closeTrigger && a.dismissing()
                }),
              a.css && s.css(a.css),
              "inside" === a.position ||
                "inline" === a.position ||
                "toast" === a.position ||
                a.tip ||
                (a.tip = a.position.my),
              a.tip &&
                c.addClass(
                  "message-tip message-tip-" + a.tip.replace(" ", "-")
                ),
              "inline" === a.position)
            )
              e.append(s)
            else if ("inside" === a.position)
              s.css("position", "absolute"), e.append(s)
            else if ("toast" === a.position) s.addClass("toast").appendTo(e)
            else {
              s.css("position", "absolute")
              var u = a.relativeToBody ? $("body") : e.offsetParent()
              u.append(s)
              var d,
                p = a.relativeToBody ? e.offset() : e.position(),
                f = e.outerWidth(!0),
                h = e.outerHeight(!0),
                g = s.outerWidth(),
                m = s.outerHeight(),
                v = f - e.outerWidth(!1),
                b = v / 2
              switch (a.position.at) {
                case "top left":
                  d = { top: 0, left: 0 }
                  break
                case "top center":
                  d = { top: 0, left: f / 2 + b }
                  break
                case "top right":
                  d = { top: 0, left: f }
                  break
                case "right top":
                  d = { top: 0, left: f }
                  break
                case "right center":
                  d = { top: h / 2, left: f }
                  break
                case "right bottom":
                  d = { top: h, left: f }
                  break
                case "bottom right":
                  d = { top: h, left: f }
                  break
                case "bottom center":
                  d = { top: h, left: f / 2 + b }
                  break
                case "bottom left":
                  d = { top: h, left: 0 }
                  break
                case "left bottom":
                  d = { top: h, left: 0 }
                  break
                case "left center":
                  d = { top: h / 2, left: 0 }
                  break
                case "left top":
                  d = { top: 0, left: 0 }
              }
              var y
              switch (a.position.my) {
                case "left top":
                  y = { top: 0, left: -o }
                  break
                case "top left":
                  y = { top: -o, left: 0 }
                  break
                case "top center":
                  y = { top: -o, left: g / 2 + o }
                  break
                case "top right":
                  y = { top: -o, left: g }
                  break
                case "right top":
                  y = { top: 0, left: g + o }
                  break
                case "right bottom":
                  y = { top: m, left: g + o }
                  break
                case "bottom right":
                  y = { top: m + o, left: g }
                  break
                case "bottom center":
                  y = { top: m + o, left: g / 2 + o }
                  break
                case "bottom left":
                  y = { top: m + o, left: 0 }
                  break
                case "left bottom":
                  y = { top: m, left: -o }
              }
              var w = {
                left: p.left + d.left - y.left,
                top: p.top + d.top - y.top,
              }
              if (
                (s.data("initialTop", w.top),
                (s.animateOffsetTop = function(e) {
                  s.animate({ top: s.data("initialTop") + e })
                }),
                a.position.offsetTop && (w.top += a.position.offsetTop),
                a.position.offsetLeft && (w.left += a.position.offsetLeft),
                s.css({ top: w.top, left: w.left }),
                a.fixedTo$elem)
              ) {
                var x = null,
                  k = e.offset(),
                  S = $(window).width(),
                  E = "resize.message scroll.message"
                $(window).on(E, function() {
                  x = x || s.offset()
                  var t = e.offset().top - k.top,
                    n = $(window).width() - S,
                    r = n / 2
                  s.offset({ top: x.top + t, left: x.left + r })
                }),
                  s.on("removing", function() {
                    $(window).off(E)
                  })
              }
            }
            if ((a.showing && a.showing(), a.lightbox)) {
              var C = $("body"),
                _ = $('<div class="lightbox"/>')
                  .appendTo(C)
                  .css("height", $(document).height())
                  .fadeIn()
              a.stopBodyScroll && C.addClass("stop-scrolling"),
                s.on("removing", function() {
                  _.fadeOutAndRemove(),
                    a.stopBodyScroll && C.removeClass("stop-scrolling")
                })
            }
            if (a.slideDown) {
              var T = 500,
                j = e.css("margin-top"),
                I = e.css("margin-bottom")
              e.css("margin-top", 0),
                e.css("margin-bottom", 0),
                s.css("height", 0),
                e.css("display", "block"),
                s.css("display", "block"),
                e.animate({ "margin-top": j, "margin-bottom": I }, T),
                s.animate({ height: s.get(0).scrollHeight }, T)
            } else s.fadeIn(a.shown)
            if (a.transient) {
              var A =
                r.transientTimeout ||
                n.suggestedTransientTimeout(t, "toast" === r.position)
              setTimeout(function() {
                s.fadeOutAndRemove()
              }, A)
            }
            return (
              a.removing && s.on("removing", a.removing),
              StackExchange.options.enableLogging && s.data("settings", a),
              s
            )
          }
        },
        suggestedTransientTimeout: function(e, t) {
          var n = 40
          return (
            "jp" === StackExchange.options.locale ? (n = 80) : t && (n = 55),
            Math.max(4e3, e.length * n)
          )
        },
        showErrorMessage: function(e, t, n) {
          var r = { position: "inside", type: "error" },
            i = $.extend({}, r, n)
          return this.showMessage(e, t, i)
        },
        showErrorPopup: function(e, t, n) {
          return this.showErrorMessage(e, t, n)
        },
        showInfoMessage: function(e, t, n) {
          var r = { position: "inside", transient: !0, type: "info" },
            i = $.extend({}, r, n)
          return this.showMessage(e, t, i)
        },
        showSuccessMessage: function(e, t, n) {
          var r = {
              type: "success",
              position: "toast",
              transient: !0,
              transientTimeout: 1e4,
            },
            i = $.extend({}, r, n)
          return this.showMessage(e, t, i)
        },
        showMobileMessage: function(e, t) {
          var n = -2
          StackExchange.notify.show(e, n, "_" + t)
        },
        showBannerMessage: function(e, t) {
          var n = $(".banner-message-container").last()
          0 === n.length &&
            (n = $("<div/>")
              .addClass("top-banner-message-container")
              .css("display", "none")
              .insertAfter("#header"))
          var r = {
            type: t,
            position: "inline",
            cssClass: "banner-message",
            slideDown: !0,
          }
          return this.showMessage(n, e, r)
        },
        showStacksNotice: function(e, t, n) {
          var r = { transient: !1, transientTimeout: 2e4 },
            i = $.extend({}, r, n),
            a = i.target || $(".js-notice-message-container").last()
          0 === a.length &&
            (a = $("<div/>")
              .addClass("top-notice-message-container")
              .insertAfter($("header").first()))
          var o = $(
              '<aside class="s-notice py8" role="status" aria-hidden="false"><div class="grid gs16 gsx ai-center jc-space-between" aria-describedby="notice-message"><div class="grid--cell message-text" aria-label="notice-message"></div><div class="grid--cell mr0 dismiss-btn" aria-label="notice-dismiss"></div></div></aside>'
            ),
            s = o.find(".message-text"),
            c = o.find(".dismiss-btn"),
            l = $("<a>", {
              class: "message-close p8 s-btn grid grid__center fc-dark",
              title: "Close this message",
            })
          return (
            l.append(Svg.ClearSm.With("pe-none")),
            c.append(l),
            c.click(function(e) {
              var t = $(e.target)
              t.is(".message-close") && (o.remove(), a.addClass("d-none"))
            }),
            i.transient &&
              o.delay(i.transientTimeout).slideUp(void 0, function() {
                this.remove()
              }),
            o.addClass("s-notice__" + t),
            s.html(e),
            a.removeClass("d-none").append(o),
            o
          )
        },
        showModal: function(e, t) {
          var r = $(e).addClass("js-stacks-managed-popup")
          if (0 !== r.length) {
            var i = { closeOthers: !0, shown: function() {} },
              a = $.extend({}, i, t),
              o = $("body")
            a.closeOthers &&
              $(".message, .js-stacks-managed-popup")
                .not(r)
                .fadeOutAndRemove()
            var s = function() {
              var e = a.returnElements
              e &&
                r.one("transitionend", function() {
                  e.filter(function(e, t) {
                    return $.contains(document.body, t)
                  })
                    .first()
                    .focus()
                })
            }
            r.on("popupClose", function(e, t) {
              var n = ["esc", "click outside", "dismiss", "submit"]
              n.indexOf(t.closeTrigger) >= 0 &&
                (a.dismissing && a.dismissing(), s())
            }),
              a.showing && a.showing(),
              r.find(".js-modal-close").click(function(e) {
                e.preventDefault(), n.closePopups(r, "dismiss")
              }),
              r.addClass("s-modal").appendTo(o)
            var c = r
                .find("a, button, [tabindex]")
                .filter(":not([disabled]):not([tabindex=-1])"),
              l = r.find(".js-first-tabbable"),
              u = r.find(".js-last-tabbable")
            return (
              0 === l.length && (l = c.first()),
              0 === u.length && (u = c.last()),
              l.keydown(function(e) {
                9 === e.keyCode && e.shiftKey && (e.preventDefault(), u.focus())
              }),
              u.keydown(function(e) {
                9 !== e.keyCode || e.shiftKey || (e.preventDefault(), l.focus())
              }),
              setTimeout(function() {
                r
                  .addClass("js-fades-with-aria-hidden")
                  .attr("aria-hidden", "false"),
                  r.one("transitionend", function() {
                    r
                      .find(".js-modal-initial-focus:not([disabled])")
                      .first()
                      .focus(),
                      a.shown && a.shown()
                  })
              }, 16),
              a.removing && r.on("removing", a.removing),
              r
            )
          }
        },
        loadModal: function(e, t) {
          var r = $.Deferred()
          return (
            (t = t || {}),
            $.ajax({
              type: "GET",
              url: e,
              dataType: "html",
              success: function(e) {
                var i = n.showModal($(e).elementNodesOnly(), t)
                r.resolve(i)
              },
              error: function(e) {
                var n =
                  e.responseText && e.responseText.length < 200
                    ? e.responseText
                    : t.defaultErrorMessage ||
                      "Unable to load popup - please try again"
                r.reject(n)
              },
            }),
            r.promise()
          )
        },
        toggleStacksPopover: function(e, t) {
          StackExchange.helpers
            .DelayedReaction(function() {
              var n = Stacks.application.getControllerForElementAndIdentifier(
                e.get(0),
                "s-popover"
              )
              t === !0 ? n.show() : t === !1 ? n.hide() : n.toggle()
            }, 50)
            .trigger()
        },
        queueStacksPopover: function(e, t) {
          function r() {
            var n = $(window).scrollTop(),
              r =
                n +
                $(window).height() -
                StackExchange.scrollPadding.getPaddingTop(),
              i = e.offset().top,
              a = i + e.height()
            return r >= i - (t || 0) && a + (t || 0) >= n
          }
          var i = $.Deferred()
          i.then(function() {
            n.toggleStacksPopover(e, !0)
          })
          var a = function() {
            0 === e.closest("body").length
              ? i.reject()
              : r() &&
                (0 ===
                $(".s-popover.is-visible, .s-modal[aria-hidden=false]").length
                  ? i.resolve()
                  : i.reject())
          }
          a(),
            "pending" === i.state() &&
              ($(document).on("scroll.qSP", a),
              i.done(function() {
                $(document).off("scroll.qSP", a)
              }))
        },
        showToast: function(e, t) {
          var n = {
              dismissable: !0,
              transient: !0,
              transientTimeout: 2e4,
              type: "info",
              actions: [],
            },
            r = $.extend({}, n, t)
          ;/^(?:info|success|warning|danger)$/.test("" + r.type) ||
            (StackExchange.debug.log(
              "" + t.type + " is not a valid notice type"
            ),
            (r.type = n.type))
          var i =
              '<div class="s-toast js-toast js-stacks-managed-popup" aria-hidden="true">  <aside class="s-notice">    <div class="grid gs16 gsx ai-center jc-space-between">      <div class="grid--cell">        <p class="m0 js-toast-body" id="js-notice-toast-message" role="status" tabindex="0"></p>      </div>      <div class="grid--cell mr0 js-notice-actions d-none">        <div class="grid"></div>      </div>    </div>  </aside></div>',
            a =
              '<button class="p8 s-btn grid grid__center fc-dark" tabindex="0" role="button"></button>',
            o = $(i).css("top", StackExchange.scrollPadding.getPaddingTop())
          return (
            o.find(".s-notice").addClass("s-notice__" + r.type),
            o.find(".js-toast-body").html(e),
            r.dismissable &&
              r.actions.push({
                labelContents: Svg.ClearSm.With("m0"),
                ariaLabel: "Dismiss",
                click: function() {
                  o.fadeOutAndRemove()
                },
              }),
            r.actions.forEach(function(e) {
              var t = $(a)
              t.append(e.labelContents).click(function(t) {
                t.preventDefault(), e.click(t)
              }),
                e.ariaLabel && t.attr("aria-label", e.ariaLabel),
                o
                  .find(".js-notice-actions")
                  .removeClass("d-none")
                  .children()
                  .append(t)
            }),
            this.hideToasts(),
            o.appendTo(r.$parent || $("body")),
            o.delay(16).queue(function() {
              $(this)
                .addClass("js-fades-with-aria-hidden")
                .attr("aria-hidden", "false")
                .dequeue()
            }),
            r.transient &&
              o.delay(r.transientTimeout).queue(function() {
                o.fadeOutAndRemove().dequeue()
              }),
            o
          )
        },
        hideToasts: function() {
          $(".js-toast.js-stacks-managed-popup").fadeOutAndRemove()
        },
        removeMessages: function(e) {
          e ? $(".message").remove() : $(".message").fadeOutAndRemove()
        },
        addSpinner: function(e, t) {
          $(e).append(n.getSpinnerImg(t))
        },
        addStacksSpinner: function(e, t, n) {
          var r = $(
            '<div class="s-spinner" role="alert" aria-busy="true" />'
          ).addClass(n || "")
          t && r.addClass("s-spinner__" + t),
            $("<div />")
              .css({ "font-size": "0px", color: "transparent", float: "left" })
              .text("loading...")
              .appendTo(r),
            $(e).append(r)
        },
        getSpinnerImg: function(e) {
          var t = $("<img />", {
            class: "ajax-loader",
            src: "/Content/Img/progress-dots.gif",
            title: "loading...",
            alt: "loading...",
          })
          return e && t.css(e), t
        },
        removeSpinner: function() {
          $("img.ajax-loader, .s-spinner").remove()
        },
        closePopups: function(e, t) {
          var n = $.Event("closePopups")
          ;(n.selectorToClose = e),
            (n.closeTrigger = t || "closePopups"),
            $(document).trigger(n)
        },
        enableSubmitButton: function(t) {
          e(t, !1)
        },
        disableSubmitButton: function(t) {
          e(t, !0)
        },
        loadTicks: function(e) {
          var t
          ;(t = e ? e.find(".edit-block") : $(".edit-block")),
            0 === t.find("input[name=i1l]").length &&
              (t.data("loading-ticks") ||
                (t.data("loading-ticks", !0),
                $.ajax({
                  url: "/questions/ticks",
                  cache: !1,
                  success: function(e) {
                    t.append(
                      "<input type='hidden' name='i1l' value='" + e + "' />"
                    )
                  },
                  complete: function() {
                    t.data("loading-ticks", !1)
                  },
                })))
        },
        showFancyOverlay: function(e) {
          e = e || {}
          var t = $("body:visible")
          if (0 === t.length)
            return (
              setTimeout(function() {
                StackExchange.helpers.showFancyOverlay(e)
              }, 10),
              void 0
            )
          var n = $('<div id="overlay-header"></div>').prependTo(t),
            r = e.message || ""
          e.showClose !== !1 &&
            (r += '<br><a class="close-overlay">close this message</a>'),
            n
              .html(r)
              .animate({ opacity: 1, height: "show" }, "slow", e.complete)
              .find(".close-overlay")
              .click(function() {
                n.animate({ opacity: 0, height: "hide" }, "fast")
              })
        },
        DelayedReaction: function(e, t, n) {
          n = n || {}
          var r,
            i,
            a = n.always,
            o = function() {
              ;(r = null), e.apply(null, i)
            }
          return {
            trigger: function() {
              if (((i = arguments), a && a.apply(null, i), r)) {
                if (!n.sliding) return
                clearTimeout(r), (r = setTimeout(o, t))
              } else r = setTimeout(o, t)
            },
            cancel: function() {
              r && (clearTimeout(r), (r = null))
            },
          }
        },
        fireAndForget: function(e) {
          $.ajax({
            type: "POST",
            url: e,
            data: { fkey: StackExchange.options.user.fkey },
            async: !0,
          })
        },
        updateQueryStringParameter: function(e, t, n) {
          var r = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
            i = -1 !== e.indexOf("?") ? "&" : "?"
          return e.match(r)
            ? e.replace(r, "$1" + t + "=" + n + "$2")
            : e + i + t + "=" + n
        },
        parseUrl: function(e) {
          var t = document.createElement("a")
          return (t.href = e), "" === t.host && (t.href = t.href), t
        },
        isEmailAddress: function(e) {
          return "string" != typeof e || e.length < 3
            ? !1
            : /^[A-Z0-9._%+'-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,63}$/i.test(e)
        },
        getLikelyErrorMessage: function(e) {
          if (
            !e ||
            "string" != typeof e.responseText ||
            e.responseText.length > 250
          )
            return ""
          var t = e.responseText
          try {
            var n = JSON.parse(t)
            return n.ErrorMessage || n.Message || ""
          } catch (r) {
            return t
          }
        },
        getRejectedMockXhr: function(e) {
          return $.Deferred().reject({ responseText: e })
        },
        submitFormOnEnterPress: function(e) {
          var t = e.find("textarea, div[contenteditable]")
          if (
            !t.is("[contenteditable]") ||
            StackExchange.helpers.hasContentEditable(t)
          ) {
            var n = !1,
              r = !1,
              i = !1
            t
              .keyup(function(a) {
                if (n || r) return (r = !1), void 0
                if (13 === a.which && !a.shiftKey) {
                  if (t.prev("#tabcomplete > li:visible").length) return
                  if (e.hasClass("js-prevent-submit-form-on-enter-press"))
                    return
                  if (!i) return
                  e.submit()
                }
              })
              .keypress(function(e) {
                return (i = !0), 13 !== e.which || e.shiftKey
              }),
              t
                .on("compositionstart", function() {
                  n = !0
                })
                .on("compositionend", function() {
                  ;(n = !1), (r = !0)
                })
                .on("keydown", function(e) {
                  229 !== e.which && (r = !1)
                })
          }
        },
        isInNetwork: function(e) {
          if ("string" != typeof e) throw new TypeError()
          try {
            var t = StackExchange.helpers.parseUrl(e.trim()).hostname
            if (t === window.location.hostname) return !0
            for (
              var n = [
                  "stackoverflow.com",
                  "stackexchange.com",
                  "serverfault.com",
                  "superuser.com",
                  "stackauth.com",
                  "stackapps.com",
                  "askubuntu.com",
                  "askdifferent.com",
                  "mathoverflow.net",
                  "askpatents.com",
                ],
                r = 0;
              r < n.length;
              r++
            ) {
              var i = n[r]
              if (t === i || t.endsWith("." + i)) return !0
            }
          } catch (a) {}
          return !1
        },
        removeParameterFromQueryString: function(e) {
          var t = window.location.href
          if (
            window.history &&
            window.history.replaceState &&
            -1 !== t.indexOf(e + "=")
          ) {
            var n = t
              .replace(
                new RegExp("^([^#]*?)(([^#]*)&)?" + e + "(=[^&#]*)?(&|#|$)"),
                "$1$3$5"
              )
              .replace(/^([^#]*)((\?)&|\?(#|$))/, "$1$3$4")
            if (n !== t)
              try {
                window.history.replaceState({}, document.title, n)
              } catch (r) {}
          }
        },
        placeCaretAtEnd: function(e) {
          if (
            (e.focus(),
            "undefined" != typeof window.getSelection &&
              "undefined" != typeof document.createRange)
          ) {
            var t = document.createRange()
            t.selectNodeContents(e), t.collapse(!1)
            var n = window.getSelection()
            n.removeAllRanges(), n.addRange(t)
          }
        },
        hasContentEditable: function(e) {
          if (!e) return !1
          var t = e instanceof HTMLElement ? e : e instanceof $ ? e[0] : null
          return t && "true" === t.contentEditable
        },
        copyTextToClipboard: function(e) {
          var t = $("<textarea>")
            .css("height", "0")
            .appendTo("body")
          t.val(e).select(),
            document.execCommand("copy"),
            t.remove(),
            StackExchange.helpers.showToast("Text copied to clipboard.", {
              type: "success",
              transientTimeout: 3e3,
            })
        },
      }
    return n
  })()),
  (StackExchange.switchMobile = function(e) {
    $.post(
      "/mobile/" + e,
      {
        returnurl: window.location.href,
        fkey: StackExchange.options.user.fkey,
      },
      function(e) {
        window.location.href = e
      }
    )
  }),
  (StackExchange.scrollPadding = (function() {
    function e() {
      function e(e) {
        var t = e.filter(function(e, t) {
          return (
            t === window ||
            t === document.body ||
            t === document.body.parentElement
          )
        })
        return e.length > 0 && e.length === t.length
      }
      function t(e, t) {
        return function() {
          if (l) return e.apply(this, arguments)
          l = !0
          try {
            return t.apply(this, arguments)
          } finally {
            l = !1
          }
        }
      }
      function r() {
        var e = $(":target")
        if (
          e.length ||
          (location.hash.length > 1 &&
            /edge|msie|trident/i.test(navigator.userAgent) &&
            (e = $(
              document.getElementsByName(location.hash.substr(1))
            ).first()),
          e.length)
        ) {
          var t = 1
          e.is(":empty") &&
            "inline" === e.css("display") &&
            (t += parseInt(e.next().css("margin-top"), 10))
          var r = e.offset().top
          e.length && Math.abs(o.scrollTop() - r - n) < t && o.scrollTop(r)
        }
      }
      var i = jQuery.fn.animate
      jQuery.fn.animate = t(i, function(t) {
        if ("scrollTop" in t && e(this)) {
          var r = {}
          $.extend(r, t),
            (r.scrollTop = parseInt(r.scrollTop, 10) - n),
            (arguments[0] = r)
        }
        return i.apply(this, arguments)
      })
      var a = jQuery.fn.scrollTop
      jQuery.fn.scrollTop = t(a, function() {
        if (e(this)) {
          if (0 === arguments.length) return a.apply(this, arguments) + n
          arguments[0] -= n
        }
        return a.apply(this, arguments)
      })
      for (
        var s = document.body.__proto__;
        s && !s.hasOwnProperty("scrollIntoView");

      )
        s = s.__proto__
      if (s) {
        var c = s.scrollIntoView
        s.scrollIntoView = t(c, function(e) {
          var t = this
          if (
            ("contents" === getComputedStyle(t).display &&
              (t = t.children[0] || t),
            e === !0 ||
              null === e ||
              void 0 === e ||
              ("smooth" !== e.behavior && "end" !== e.block))
          ) {
            var r = document.body.style.marginTop,
              i = parseInt(getComputedStyle(document.body).marginTop, 10)
            document.body.style.marginTop = i - n + "px"
            var a = c.apply(t, arguments)
            return (document.body.style.marginTop = r), a
          }
          c.apply(t, arguments)
        })
      }
      var l = !1
      $("body").on("click", "a", function() {
        var e = $(this).attr("href")
        e &&
          /#/.test(e) &&
          (o.on("scroll", r),
          setTimeout(function() {
            o.off("scroll", r)
          }, 500))
      }),
        o.on("hashchange", r),
        $(function() {
          setTimeout(r, 10), setTimeout(r, 100), setTimeout(r, 1e3)
        })
    }
    function t() {
      var e,
        t,
        r,
        i,
        a = performance.now
          ? performance.now.bind(performance)
          : Date.now.bind(Date),
        s = null,
        c = null,
        l = !1,
        u = StackExchange.helpers.DelayedReaction(
          function() {
            s = null
          },
          100,
          { sliding: !0 }
        )
      o.on("keydown", function(n) {
        if (n.target !== document.body) return (s = null), void 0
        var d = n.which
        return 32 > d || d > 34
          ? ((s = null), void 0)
          : ((e = s = o.scrollTop()),
            (t = 0),
            (i = 0),
            (l = !1),
            (c = null),
            (r = a()),
            u.trigger(),
            void 0)
      }),
        o.on("scroll", function() {
          if (null !== s) {
            if (l) return o.scrollTop(c), void 0
            var d = a(),
              p = o.scrollTop(),
              f = d - r,
              h = p - e,
              g = h / f,
              m = 0 > h ? -1 : 1
            null === c && (c = s + m * (o.height() - n - 20))
            var v = g - t,
              b = v / f,
              y = b + (b - i)
            if (0 > g * y) {
              var w = -g / y,
                x = p + w * (g + 0.5 * y * w),
                k = c - x
              Math.abs(k) < 100 &&
                (p + (g + 0.5 * y * f) * f - c) * m > -20 &&
                (o.scrollTop(c), (l = !0))
            }
            u.trigger(), (e = p), (r = d), (t = g), (i = b)
          }
        })
    }
    var n = 0,
      r = 0,
      i = 0,
      a = !1,
      o = $(window)
    return {
      setPaddingTop: function(o, s) {
        ;(i = s || 0),
          (n = o + i),
          (r = o),
          a ||
            ((a = !0),
            e(),
            /^mac/i.test(navigator.platform) &&
              !/firefox/i.test(navigator.userAgent) &&
              t())
      },
      getPaddingTop: function() {
        return n
      },
      getPaddingTopMinimal: function() {
        return r
      },
      getWindowScrollTopMinimal: function() {
        return o.scrollTop() - i
      },
      ensureInitialized: function() {
        a || StackExchange.scrollPadding.setPaddingTop(0, 0)
      },
    }
  })()),
  (StackExchange.responsive = (function() {
    function e() {
      return o ? ($("html").hasClass("html__unpinned-leftnav") ? u : l) : null
    }
    function t() {
      if (!o) return "lg"
      var t = "lg"
      return c.matches ? (t = "sm") : e().matches && (t = "md"), t
    }
    function n() {
      var e = d,
        n = t()
      n !== e &&
        ((d = n),
        p.forEach(function(t) {
          t(n, e)
        }))
    }
    function r(e) {
      p.push(e)
    }
    function i(e) {
      var t = p.indexOf(e)
      t >= 0 && p.splice(t, 1)
    }
    function a(e) {
      for (
        var t = document.querySelectorAll(
            "*[data-can-be][data-is-here-when~='" + e + "']"
          ),
          n = 0;
        n < t.length;
        n++
      ) {
        var r = t[n],
          i = r.dataset.canBe,
          a = document.getElementById(i)
        if (a) {
          r.childNodes.length &&
            StackExchange.debug.log(
              "can-be target for id " + i + " at size '" + e + "' is not empty"
            )
          var o = Array.prototype.slice.call(a.childNodes)
          o.forEach(function(e) {
            f.indexOf(e.nodeType) >= 0 && r.appendChild(e)
          }),
            a.removeAttribute("id"),
            (a.dataset.canBe = i),
            delete r.dataset.canBe,
            (r.id = i)
        } else StackExchange.debug.log("no element with id " + i + " found")
      }
    }
    var o = $("html").hasClass("html__responsive"),
      s = { S: 640, L: 980, L_UNPINNED: 816 }
    if (o) {
      var c = matchMedia("(max-width: " + s.S + "px)"),
        l = matchMedia("(max-width: " + s.L + "px)"),
        u = matchMedia("(max-width: " + s.L_UNPINNED + "px)")
      c.addListener(n), l.addListener(n), u.addListener(n)
    }
    var d = null,
      p = [],
      f = [Node.ELEMENT_NODE, Node.TEXT_NODE, Node.COMMENT_NODE]
    return (
      r(a),
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", n)
        : setTimeout(n, 0),
      {
        addBreakpointListener: r,
        removeBreakpointListener: i,
        currentRange: function() {
          return d || t()
        },
        forceCheck: function() {
          var e = d
          n(), e === d && a(e)
        },
      }
    )
  })()),
  (jQuery.cookie = function(e, t, n) {
    if ("undefined" == typeof t) {
      var r = null
      if (document.cookie && "" !== document.cookie)
        for (var i = document.cookie.split(";"), a = 0; a < i.length; a++) {
          var o = jQuery.trim(i[a])
          if (o.substring(0, e.length + 1) === e + "=") {
            r = decodeURIComponent(o.substring(e.length + 1))
            break
          }
        }
      return r
    }
    ;(n = n || {}), null === t && ((t = ""), (n.expires = -1))
    var s = ""
    if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
      var c
      if ("number" == typeof n.expires) {
        c = new Date()
        var l = 24 * n.expires * 60 * 60 * 1e3
        c.setTime(c.getTime() + l)
      } else c = n.expires
      s = "; expires=" + c.toUTCString()
    }
    var u = n.path ? "; path=" + n.path : "",
      d = n.domain ? "; domain=" + n.domain : "",
      p = n.secure ? "; secure" : ""
    document.cookie = [e, "=", encodeURIComponent(t), s, u, d, p].join("")
  }),
  (jQuery.expr[":"].regex = function(e, t, n) {
    var r = n[3].split(","),
      i = /^(data|css):/,
      a = {
        method: r[0].match(i) ? r[0].split(":")[0] : "attr",
        property: r.shift().replace(i, ""),
      },
      o = "ig",
      s = new RegExp(r.join("").replace(/^\s+|\s+$/g, ""), o)
    return s.test(jQuery(e)[a.method](a.property))
  }),
  $.extend($.expr[":"], {
    containsExact: function(e, t, n) {
      return $.trim(e.innerHTML.toLowerCase()) === n[3].toLowerCase()
    },
    containsExactCase: function(e, t, n) {
      return $.trim(e.innerHTML) === n[3]
    },
    containsRegex: function(e, t, n) {
      var r = /^\/((?:\\\/|[^\/])+)\/([mig]{0,3})$/,
        i = r.exec(n[3])
      return RegExp(i[1], i[2]).test($.trim(e.innerHTML))
    },
  }),
  (function(e) {
    e.fn.typeWatch = function(t) {
      function n(t, n) {
        var r = e(t.el).val()
        ;((r.length > i.captureLength && r.toUpperCase() !== t.text) ||
          (n && r.length > i.captureLength)) &&
          ((t.text = r.toUpperCase()), t.cb(r))
      }
      function r(t) {
        if (
          "TEXT" === t.type.toUpperCase() ||
          "TEXTAREA" === t.nodeName.toUpperCase()
        ) {
          var r = {
            timer: null,
            text: e(t)
              .val()
              .toUpperCase(),
            cb: i.callback,
            el: t,
            wait: i.wait,
          }
          i.highlight &&
            e(t).focus(function() {
              this.select()
            })
          var a = function(e) {
            var t = r.wait,
              i = !1
            13 === e.keyCode &&
              "TEXT" === this.type.toUpperCase() &&
              ((t = 1), (i = !0))
            var a = function() {
              n(r, i)
            }
            clearTimeout(r.timer), (r.timer = setTimeout(a, t))
          }
          e(t)
            .keydown(a)
            .bind("paste", null, function(e) {
              e.which || a(this)
            })
            .bind("input", null, function(e) {
              e.which || a(this)
            })
        }
      }
      var i = e.extend(
        { wait: 750, callback: function() {}, highlight: !0, captureLength: 2 },
        t
      )
      return this.each(function() {
        r(this)
      })
    }
  })(jQuery),
  (function(e) {
    function t(t) {
      var n
      return t && t.constructor === Array && 3 === t.length
        ? t
        : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(
            t
          ))
        ? [parseInt(n[1]), parseInt(n[2]), parseInt(n[3])]
        : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
            t
          ))
        ? [
            2.55 * parseFloat(n[1]),
            2.55 * parseFloat(n[2]),
            2.55 * parseFloat(n[3]),
          ]
        : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t))
        ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
        : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))
        ? [
            parseInt(n[1] + n[1], 16),
            parseInt(n[2] + n[2], 16),
            parseInt(n[3] + n[3], 16),
          ]
        : (n = /rgba\(0, 0, 0, 0\)/.exec(t))
        ? r.transparent
        : r[e.trim(t).toLowerCase()]
    }
    function n(n, r) {
      var i
      do {
        if (
          ((i = e.css(n, r)),
          ("" !== i && "transparent" !== i) || e.nodeName(n, "body"))
        )
          break
        r = "backgroundColor"
      } while ((n = n.parentNode))
      return t(i)
    }
    e.each(
      [
        "backgroundColor",
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor",
        "color",
        "outlineColor",
      ],
      function(r, i) {
        e.fx.step[i] = function(e) {
          e.colorInit ||
            ((e.start = n(e.elem, i)), (e.end = t(e.end)), (e.colorInit = !0)),
            (e.elem.style[i] =
              "rgb(" +
              [
                Math.max(
                  Math.min(
                    parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0]),
                    255
                  ),
                  0
                ),
                Math.max(
                  Math.min(
                    parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1]),
                    255
                  ),
                  0
                ),
                Math.max(
                  Math.min(
                    parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2]),
                    255
                  ),
                  0
                ),
              ].join(",") +
              ")")
        }
      }
    )
    var r = { transparent: [255, 255, 255] }
  })(jQuery),
  (StackExchange.gps = (function() {
    function e(e, t, n, r) {
      t = t || {}
      var i = null
      StackExchange.options &&
        StackExchange.options.user &&
        ((t.user_type = StackExchange.options.user.userType),
        (i = StackExchange.options.user.ab))
      var a = { evt: e, properties: t, now: new Date().getTime() }
      i && (a.ab = i), StackExchange._gps_track.push(a), r && r()
    }
    return (
      (StackExchange._gps_track = []),
      window.location.href.indexOf("utm_") >= 0 &&
        StackExchange.ready(function() {
          if (StackExchange.options && StackExchange.options.utm);
          else {
            var t = function(e) {
                var t = new RegExp("[\\?&]utm_" + e + "=([^&#]*)").exec(
                  window.location.href
                )
                return t ? decodeURIComponent(t[1]) || void 0 : void 0
              },
              n = {
                source: t("source"),
                medium: t("medium") || "unknown",
                medium_s: t("medium") || "unknown",
                campaign: t("campaign"),
                content: t("content"),
                term: t("term"),
              }
            n.source && n.campaign && e("utm.view", n, !1),
              StackExchange.using("gps", function() {
                StackExchange.gps.sendPending()
              })
          }
        }),
      {
        track: e,
        sendPending: function(e) {
          e && e()
        },
      }
    )
  })()),
  (StackExchange.stacksEditor = (function() {
    return {
      createAsync: function(e, t, n) {
        var r = $.Deferred().resolve()
        return (
          (window.stacksEditor && window.stacksEditor.ComboEditor) ||
            (r = StackExchange.loadJsFile(
              "third-party/stacks-editor/app.bundle.js",
              !0
            )),
          r.then(function() {
            return (
              window.incorrectUrlObserver &&
                window.incorrectUrlObserver.disconnect &&
                (window.incorrectUrlObserver.disconnect(),
                console.log("Successfully disconnected observer")),
              new window.stacksEditor.ComboEditor(e, t, n)
            )
          })
        )
      },
    }
  })())
