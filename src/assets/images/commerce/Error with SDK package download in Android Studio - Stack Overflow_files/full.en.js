"use strict"
function moveScroller() {
  var e = $("#scroller").width(),
    t = function() {
      var t = "lg" === StackExchange.responsive.currentRange(),
        n = $(window).scrollTop(),
        o = $("#scroller-anchor").offset().top,
        i = $("#scroller"),
        a = StackExchange.scrollPadding.getPaddingTop(),
        r = a + "px"
      t && n > o
        ? i.height() > $(window).height()
          ? i.css({
              position: "fixed",
              top: "",
              bottom: "0",
              width: e,
              "z-index": 3,
            })
          : i.css({
              position: "fixed",
              top: r,
              bottom: "",
              width: e,
              "z-index": 3,
            })
        : i.css({ position: "relative", top: "", bottom: "", width: "" })
    }
  StackExchange.responsive.addBreakpointListener(function() {
    var n = $("#scroller"),
      o = n[0].style.width,
      i = n[0].style.position
    n.css({ position: "relative", width: "" }),
      (e = n.width()),
      n.css({ position: i, width: o }),
      t()
  }),
    $(window)
      .scroll(t)
      .resize(t),
    t()
}
function initTagRenderer(e, t, n) {
  window.tagRenderer ||
    ((n = n || { tags: [], id: "" }),
    (window.tagRendererRaw = function(o, i, a, r) {
      ;(i = i || ""), (a = a || "a")
      var s = "",
        c = r ? "s-tag" : "post-tag"
      i ||
        (e && $.inArray(o, e) > -1
          ? (s = r ? "s-tag__required" : "required-tag")
          : t &&
            $.inArray(o, t) > -1 &&
            (s = r ? "s-tag__moderator" : "moderator-tag"))
      var l = $("<" + a + ">")
        .addClass(c)
        .addClass(s)
        .addClass($.inArray(o, n.tags) > -1 ? "channel" + n.id + "-tag" : "")
        .text(o)
      return (
        "a" === a.toLowerCase() &&
          l.attr({
            rel: "tag",
            href: i + "/questions/tagged/" + encodeURIComponent(o),
            title: (function(e) {
              return "show questions tagged '" + e.tag + "'"
            })({ tag: o }),
          }),
        l.outerHTML()
      )
    }),
    (window.tagRenderer = function(e, t, n, o) {
      return $(tagRendererRaw(e, t, n, o))
    }))
}
function showFadingHelpText(e) {
  e.wrap('<div class="dno" />')
    .show()
    .parent()
    .fadeIn("slow", function() {
      $(this)
        .children()
        .unwrap()
    })
}
function initFadingHelpText() {
  var e = {
      "wmd-input": "#how-to-format",
      tagnames: "#how-to-tag",
      "tag-editor": "#how-to-tag",
      title: "#how-to-title",
      "wmd-input-42": "#how-to-format",
      "edit-comment": "#how-to-comment",
    },
    t = $(
      ".wmd-input, #tagnames, #title, .tag-editor input, #wmd-input-42, .edit-comment"
    ),
    n = function(t) {
      var n = $(t)
      return n.parent().hasClass("tag-editor") &&
        !n.closest(".js-mentions-input").length
        ? e["tag-editor"]
        : n.hasClass("wmd-input")
        ? e["wmd-input"]
        : n.hasClass("edit-comment")
        ? e["edit-comment"]
        : e[$(t).attr("id")]
    }
  $(".js-help-pointer").click(function(e) {
    var t = null
    $(e.target).hasClass("js-dismiss-pointer") ||
    $(e.target).closest(".js-dismiss-pointer").length
      ? $($(this).data("focus-on-dismiss")).focus()
      : (t = $($(this).attr("data-for")))
    var n = this
    return (
      setTimeout(function() {
        $(n).remove(),
          $("html,body").animate({ scrollTop: t.offset().top - 20 })
      }),
      !1
    )
  }),
    $(".js-back-to-edit-field").click(function() {
      var e = $($(this).attr("href")),
        t = $(this).attr("data-focus"),
        n = t ? $(t) : e
      return (
        $("html,body").animate({ scrollTop: e.offset().top - 40 }, function() {
          n.focus()
        }),
        !1
      )
    }),
    t.focus(function() {
      var e = n(this)
      t.each(function() {
        var t = n(this)
        t != e && $(t).hide()
      })
      var o = $(e)
      o.is(":visible") || showFadingHelpText(o),
        $(".js-help-pointer").addClass("d-none")
      var i = $(".js-help-pointer[data-for='" + e + "']")
      i.removeClass("d-none"), i.data("focus-on-dismiss", this)
    })
}
!(function(e) {
  function t() {}
  function n(e, t) {
    if (a) return t.indexOf(e)
    for (var n = t.length; n--; ) if (t[n] === e) return n
    return -1
  }
  var o = t.prototype,
    i = [],
    a = i.indexOf ? !0 : !1
  ;(o.getListeners = function(e) {
    var t = this._events || (this._events = {})
    return t[e] || (t[e] = [])
  }),
    (o.addListener = function(e, t) {
      var o = this.getListeners(e)
      return -1 === n(t, o) && o.push(t), this
    }),
    (o.removeListener = function(e, t) {
      var o = this.getListeners(e),
        i = n(t, o)
      return (
        -1 !== i &&
          (o.splice(i, 1), 0 === o.length && (this._events[e] = null)),
        this
      )
    }),
    (o.addListeners = function(e, t) {
      return this.manipulateListeners(!1, e, t)
    }),
    (o.removeListeners = function(e, t) {
      return this.manipulateListeners(!0, e, t)
    }),
    (o.manipulateListeners = function(e, t, n) {
      var o,
        i,
        a = e ? this.removeListener : this.addListener,
        r = e ? this.removeListeners : this.addListeners
      if ("object" == typeof t)
        for (o in t)
          t.hasOwnProperty(o) &&
            (i = t[o]) &&
            ("function" == typeof i ? a.call(this, o, i) : r.call(this, o, i))
      else for (o = n.length; o--; ) a.call(this, t, n[o])
      return this
    }),
    (o.removeEvent = function(e) {
      return e ? (this._events[e] = null) : (this._events = null), this
    }),
    (o.emitEvent = function(e, t) {
      for (var n = this.getListeners(e), o = n.length; o--; )
        n[o].apply(null, t || i) === !0 && this.removeListener(e, n[o])
      return this
    }),
    "function" == typeof define && define.amd
      ? define(function() {
          return t
        })
      : (e.EventEmitter = t)
})(this)
var StackExchange = StackExchange || {}
;(StackExchange.realtime = (function() {
  function e() {
    return {
      creationfailed: null,
      onopen: null,
      onmessage: null,
      onclose: null,
      onerror: null,
    }
  }
  function t(t) {
    function n() {
      try {
        return "WebSocket" in window ? new WebSocket(t) : new MozWebSocket(t)
      } catch (e) {
        return e.message
      }
    }
    var o
    return {
      on: new e(),
      isOpen: function() {
        return o && 1 === o.readyState
      },
      readyState: function() {
        return o ? o.readyState : null
      },
      start: function() {
        if (!o) {
          var e = this.on,
            t = n()
          "string" == typeof t
            ? e.creationfailed && e.creationfailed(t)
            : ((o = t),
              (o.onopen = function() {
                e.open && e.open()
              }),
              (o.onclose = function() {
                e.close && e.close(), (o = null)
              }),
              (o.onmessage = function(t) {
                e.message && e.message(t)
              }),
              (o.onerror = function() {
                e.error && e.error(), (o = null)
              }))
        }
      },
      close: function() {
        o && (o.close(), (o = null))
      },
      dispose: function() {
        this.close()
      },
      send: function(e) {
        o && o.send(e)
      },
      open: function() {},
    }
  }
  function n() {
    H && (H.dispose(), (H = null))
  }
  function o(e) {
    return new t(e)
  }
  function i(e) {
    var t = e.split(","),
      i = t.length,
      r = K % i,
      l = t[r],
      u = StackExchange.options.realtime.staleDisconnectIntervalInHours
    if ("WebSocket" in window || "MozWebSocket" in window) {
      if (H) return
      if (((H = new o(l)), null === H)) return
      ;(H.on.open = function() {
        if (
          (J || (J = !0),
          (K = 0),
          s("WebSocket opened"),
          H && 1 === H.readyState())
        ) {
          var e = "",
            t = StackExchange.options
          if (t) {
            var e = "|"
            t.routeName && (e += t.routeName.toString()),
              (e += "|"),
              t.user && t.user.userId && (e += t.user.userId.toString()),
              (e += "|"),
              t.user && t.user.accountId && (e += t.user.accountId.toString()),
              (e += "|"),
              t.user && t.user.rep && (e += t.user.rep.toString()),
              (e = e + "|" + window.location.host + "|"),
              t.serverTime && (e += t.serverTime.toString()),
              (e += "|"),
              s("analytic: " + e),
              H.send(e)
          }
        }
        a(), c(), setInterval(U, 6e4), u > 0 && setTimeout(B, 1e3 * u * 60 * 60)
      }),
        (H.on.message = function(e) {
          var t = $.parseJSON(e.data || e)
          if ("realtime-broadcast" === t.action) {
            s("broadcast message - " + t.data)
            var o = $.parseJSON(t.data).a
            ;("killWebSocket" === o || "restartWebSocket" === o) &&
              (s("Applying action: " + o),
              (Z = "killWebSocket" === o),
              Z ? n() : H.close())
          } else
            "debug-info" == t.action
              ? s(t.data)
              : et.emitEvent(t.action, [t.data])
        }),
        (H.on.close = function() {
          ;(H = null),
            s("WebSocket closed"),
            !Z &&
              5 > K &&
              Q > 0 &&
              (K++,
              Q--,
              s("reconnect attempt:" + K + " max retries:" + Q),
              setTimeout(function() {
                StackExchange.realtime.init(e)
              }, ((new Date().getTime() % 50) / 20) * 1e3))
        }),
        (H.on.error = function() {
          s("WebSocket failed"), n()
        }),
        (H.on.creationfailed = function(e) {
          s("Sockets disabled - " + e), n()
        }),
        H.start(),
        Y.length > 0 && H && H.open()
    }
  }
  function a() {
    if (null != H && H.isOpen())
      for (var e = 0, t = Y.length; t > e; e++)
        s("sending " + Y[e]), H.send(Y[e])
  }
  function r(e) {
    et.emitEvent(e.action, [e.data]), console.dir(et)
  }
  function s(e) {
    ;((StackExchange &&
      StackExchange.options &&
      StackExchange.options.enableLogging) ||
      ($ && $.cookie && $.cookie("devlog"))) &&
      console.log("realtime: " + e)
  }
  function c() {
    et.addListener("hb", function(e) {
      s("heartbeat received; responding"), H.send(e)
    })
  }
  function l(e, t) {
    Y.push(e), (t = t === !1 ? !1 : !0), t && a()
  }
  function u(e, t) {
    et.removeListener(e, t), f(e)
  }
  function d(e, t) {
    et.addListener(e, t), l(e)
  }
  function f(e) {
    s("unsubscribing " + e)
    var t = $.inArray(e, Y)
    ;-1 != t && (Y.splice(t, 1), null != H && H.isOpen() && H.send("-" + e))
  }
  function p(e) {
    H ? H.send("debug-" + e) : s("not connected")
  }
  function h(e, t) {
    var n = e + "-question-" + t
    f(n)
  }
  function g(e, t) {
    var n = e + "-question-" + t
    l(n),
      et.addListener(n, function(e) {
        if (!StackExchange.realtime.pauseQuestionNotifications) {
          var t = $.parseJSON(e)
          if (t.acctid != StackExchange.options.user.accountId)
            switch ((s(n + " " + e), t.a)) {
              case "score":
                I(t)
                break
              case "comment-add":
                b(t)
                break
              case "answer-add":
                M(t)
                break
              case "accept":
                v(t)
                break
              case "unaccept":
                v(t, !0)
                break
              case "post-edit":
                D(t)
                break
              case "post-deleted":
                m(t)
            }
        }
      })
  }
  function m(e) {
    var t = e.aId || e.qId,
      n = !!e.aId,
      o = n ? $("#answer-" + e.aId) : $("#question")
    o.css("opacity", 0.1)
    var i = $('<div class="realtime-post-deleted-notification" />')
    i.insertBefore(o)
    var a = StackExchange.options.user.canSeeDeletedPosts
        ? "This post has been deleted - click to refresh the page"
        : "This post has been deleted and is no longer viewable",
      r = $("<p>")
        .text(a)
        .appendTo(i)
    r.click(function() {
      window.location.reload(!0)
    }),
      $(".popup[data-postid=" + t + "]").fadeOutAndRemove()
  }
  function v(e, t) {
    $(".js-accepted-answer-indicator").each(function() {
      var n =
        !t &&
        $(this)
          .closest(".js-voting-container")
          .data("post-id") === e.answerid
      $(this).toggleClass("d-none", !n)
    })
  }
  function b(e) {
    0 == $("#comment-" + e.commentid).length &&
      StackExchange.comments.realtimeMessage(e.id)
  }
  function y(e, t, n, o) {
    var i = e + "-" + t
    l(i),
      et.addListener(i, function(e) {
        s("received (active) on " + i)
        var a = $.parseJSON(e)
        ;(!n || n(a)) && (q(a, t), o && o(a))
      })
  }
  function w(e, t, n, o, i, a) {
    ;(G = n),
      (X = i),
      y(
        e,
        t,
        function(e) {
          if (o)
            for (var t = 0; t < o.length; t++)
              if (-1 == $.inArray(o[t], e.tags)) return !1
          return !0
        },
        a
      )
  }
  function k(e) {
    var t = [],
      n = []
    return (
      e.forEach(function(e) {
        "or" === e
          ? n.length > 0 && (t.push(n), (n = []))
          : e.length > 0 && "and" !== e && n.push(e)
      }),
      n.length > 0 && t.push(n),
      t
    )
  }
  function x(e, t, n, o, i) {
    var a = function(e) {
        return o.noAnswers && !e.noAnswers
          ? (s("ignoring because has answers"), !1)
          : o.hasBounty && !e.hasBounty
          ? (s("ignoring because no bounty"), !1)
          : !0
      },
      r = function(e) {
        for (var t = e.length - 1; t >= 0; t--) if ("-" !== e[t][0]) return e[t]
        return null
      }
    ;(G = i),
      0 === n.length
        ? y(e, "questions-" + t, !1, a)
        : k(n).forEach(function(n) {
            var o = r(n)
            if (null !== o) {
              var i = "questions-" + t + "-tag-" + o
              y(e, i, !1, function(e) {
                if (!a(e)) return !1
                for (var t = 0; t < n.length; t++) {
                  var o = n[t]
                  if ("-" !== o[0]) {
                    if (-1 === $.inArray(o, e.tags))
                      return (
                        s(
                          "ignoring because post does not contain " +
                            o +
                            " in " +
                            i
                        ),
                        !1
                      )
                  } else {
                    var r = o.substr(1)
                    if (-1 !== $.inArray(r, e.tags))
                      return (
                        s("ignoring because post contains " + r + " in " + i),
                        !1
                      )
                  }
                }
                return !0
              })
            }
          })
  }
  function S(e) {
    l(e + "-qcnt-feed"),
      et.addListener(e + "-qcnt-feed", function(e) {
        $("div#q-cnt").html(e)
      }),
      l(e + "-evc-feed"),
      et.addListener(e + "-evc-feed", function(e) {
        $("div#evc-cnt").html(e)
      }),
      l(e + "-acnt-feed"),
      et.addListener(e + "-acnt-feed", function(e) {
        $("div#a-cnt").html(e)
      })
  }
  function C(e) {
    var t = e + "-review-dashboard-update"
    l(t),
      et.addListener(t, function(e) {
        var t = $.parseJSON(e),
          n = $('.dashboard-activity[data-review-task="' + t.i + '"]')
        0 == n.find('.dashboard-user[data-user="' + t.u + '"]').length &&
          (n.find(".dashboard-user:nth-child(6)").remove(),
          n.css("overflow", "hidden"),
          n.children().css({ left: "-44px" }),
          n
            .prepend(t.html)
            .children()
            .animate({ left: 0 }, function() {
              n.css("overflow", "visible")
            }))
      })
  }
  function E() {
    if (null != StackExchange.options.user.accountId) {
      var e = StackExchange.options.user.accountId + "-topbar"
      l(e),
        et.addListener(e, function(e) {
          StackExchange.topbar.handleRealtimeMessage(e)
        })
    }
  }
  function j(e) {
    if (null != StackExchange.options.user.accountId) {
      var t = e + "-" + StackExchange.options.user.userId + "-reputation"
      l(t),
        et.addListener(t, function(e) {
          O(e)
        })
    }
  }
  function T(e) {
    var t = e + "-suggested-edits-count-update"
    l(t),
      et.addListener(t, function() {
        P()
      })
  }
  function I(e) {
    var t = $(".js-voting-container")
      .filter(function() {
        return $(this).data("post-id") === e.id
      })
      .find(".js-vote-count")
    if (t.data("value") !== e.score) {
      var n = StackExchange.vote.normalizePostScore(e.score)
      t.data("value", e.score).text(n),
        0 === $(":animated").length && t.fadeTo("fast", 0.7).fadeTo("fast", 1),
        StackExchange.question.canViewVoteCounts() &&
          StackExchange.vote.bindFetchVoteCounts()
    }
  }
  function O(e) {
    var t = $(
      "#hlinks .reputation-score, .links-container .reputation, .js-header-rep"
    )
    t.text() != e.score &&
      (0 == $(":animated").length && t.fadeTo("fast", 0.8).fadeTo("fast", 1),
      t.text(e).attr(
        "title",
        (function(e) {
          return "your reputation: " + e.reputation
        })({ reputation: e })
      ),
      t.trigger("reputationchange"))
  }
  function P() {
    $.ajax({
      type: "POST",
      url: "/review/suggested-edit-count",
      data: { fkey: StackExchange.options.user.fkey },
      dataType: "json",
      success: function(e) {
        e && e.count && A(e.count)
      },
    })
  }
  function A(e) {
    var t = $(".suggested-edits-count")
    t.text() != e &&
      (0 == $(":animated").length && t.fadeTo("fast", 0.5).fadeTo("fast", 1),
      t.text(e))
  }
  function M(e) {
    if (
      0 == $("#answer-" + e.answerid).length &&
      (W.push(e.answerid), StackExchange.cardiologist)
    ) {
      if (StackExchange.cardiologist.isHeartBeating()) {
        var t = StackExchange.helpers.DelayedReaction(_, 5e3)
        t.trigger()
      } else _()
      StackExchange.cardiologist.notifiedOfNewAnswer()
    }
  }
  function _() {
    $(".js-new-answer-activity").remove(), $("#answers-header").prepend(tt)
  }
  function D(e) {
    var t = $(
      ".question[data-questionid=" +
        e.id +
        "], .answer[data-answerid=" +
        e.id +
        "]"
    )
    if (
      !(t.find(".js-new-post-activity[data-postid=" + e.id + "]").length > 0)
    ) {
      var n = $(
          '<div class="new-post-activity bar-sm ta-center mb16 js-new-post-activity" data-postid="' +
            e.id +
            '">'
        ).append(
          $('<a class="d-block py8" href="#">').text(
            "An edit has been made to this post"
          )
        ),
        o = 0 === t.find(".inline-editor").length,
        i = function() {
          $(".js-new-post-activity[data-postid=" + e.id + "]").remove(),
            o && t.off("click", i),
            0 === $("#review-content").length && nt([e.id]),
            $(document).trigger("refreshEdit", e.id)
        }
      o && t.click(i),
        n
          .prependTo(t)
          .find("a")
          .click(function(e) {
            return e.stopPropagation(), i(), !1
          })
    }
  }
  function L() {
    $("#tabs").show(), $(".js-new-answer-activity").remove()
    var e = $("#answers #answers-header"),
      t = e.find(".answers-subheader h2"),
      n = parseInt(t.text()) + W.length
    isNaN(n) && (n = W.length),
      t.text(
        (function(e) {
          return 1 == e.answerCount
            ? e.answerCount + " Answer"
            : e.answerCount + " Answers"
        })({ answerCount: n })
      ),
      $.ajax({
        url: "/posts/ajax-load-realtime/{postIdsSemiColonDelimited}".formatUnicorn(
          { postIdsSemiColonDelimited: W.join(";") }
        ),
      }).done(function(t) {
        var n = $('<div class="dno" />').append(t)
        n.insertAfter(e).fadeIn(400, function() {
          n.removeClass("dno"),
            styleCode(),
            StackExchange.vote.init($(".question").data("questionid")),
            n.find(".answer").each(function() {
              StackExchange.comments.init({ post: $(this) })
            })
        })
      }),
      StackExchange.question.bindSuggestedEditPopupLinks(),
      U(),
      (W = [])
  }
  function q(e, t) {
    ;(null != StackExchange.options.user.accountId &&
      StackExchange.tagPreferences.isIgnored(e.body)) ||
      ((z[e.id] = {
        id: e.id,
        fetch: !0,
        index: new Date().getTime(),
        siteid: e.siteid,
        channel: t,
      }),
      $(".js-new-post-activity").remove(),
      $("#question-mini-list, #questions").prepend(it),
      $(".tag-sponsorship").length > 0 &&
        $("#question-mini-list, #questions").css("margin-top", "0px"))
  }
  function R(e, t) {
    return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
  }
  function N() {
    var e = []
    for (var t in z) z.hasOwnProperty(t) && e.push(z[t])
    if (0 !== e.length) {
      var n = e.sort(R).slice(0, 50)
      $.post("/posts/ajax-load-realtime-list/", {
        postIdsSemiColonDelimited: n
          .map(function(e) {
            return e.id
          })
          .join(";"),
        channel: n[0].channel,
      }).done(function(e) {
        for (var t = 0; t < n.length; t++) {
          var o = n[t]
          ;(o.body = e[o.id]),
            o.body &&
              ($("#question-summary-" + o.id).remove(),
              $(o.body)
                .prependTo("#question-mini-list, #questions")
                .hide()
                .fadeIn())
        }
        F(0),
          null != StackExchange.options.user.accountId &&
            StackExchange.tagPreferences.applyPrefs(!0, G),
          U(),
          $(".js-new-post-activity").remove()
      }),
        (z = {})
    }
  }
  function F(e) {
    var t = document.title.replace(/^\(\d*\*?\) /, "")
    e > 0 && (t = "(" + e + ") " + t),
      window.setTimeout(function() {
        $(document).attr("title", t)
      }, 200)
  }
  function B() {
    ;(Z = !0),
      StackExchange.notify.show(
        'Instant updates have been disabled due to inactivity <a href=".">refresh</a> to reconnect',
        312
      ),
      H.dispose()
  }
  function U() {
    for (
      var e = $("span.relativetime, span.relativetime-clean"), t = 0;
      t < e.length;
      t++
    )
      if (e[t].title) {
        var n = V(e[t].title)
        n && (e[t].innerHTML = n)
      }
  }
  function V(e) {
    if (e) {
      var t = e.match(/^(\d{4}-\d\d-\d\d) (\d\d:\d\d:\d\dZ)/)
      if (t) {
        var n = t[1] + "T" + t[2],
          o = new Date(n),
          i =
            (new Date().getTime() - o.getTime()) / 1e3 +
            StackExchange.options.serverTimeOffsetSec,
          a = Math.floor(i / 86400)
        if (!(isNaN(a) || 0 > a || a >= 31))
          return (
            0 == a &&
            ((2 > i && "just now") ||
              (60 > i &&
                (X
                  ? (function(e) {
                      return 1 == e.seconds, e.seconds + "s ago"
                    })({ seconds: Math.floor(i) })
                  : (function(e) {
                      return 1 == e.seconds
                        ? e.seconds + " sec ago"
                        : e.seconds + " secs ago"
                    })({ seconds: Math.floor(i) }))) ||
              (120 > i && (X ? "1m ago" : "1 min ago")) ||
              (3600 > i &&
                (X
                  ? (function(e) {
                      return 1 == e.minutes, e.minutes + "m ago"
                    })({ minutes: Math.floor(i / 60) })
                  : (function(e) {
                      return 1 == e.minutes
                        ? e.minutes + " min ago"
                        : e.minutes + " mins ago"
                    })({ minutes: Math.floor(i / 60) }))) ||
              (7200 > i && (X ? "1h ago" : "1 hour ago")) ||
              (86400 > i &&
                (X
                  ? (function(e) {
                      return 1 == e.hours, e.hours + "h ago"
                    })({ hours: Math.floor(i / 3600) })
                  : (function(e) {
                      return 1 == e.hours
                        ? e.hours + " hour ago"
                        : e.hours + " hours ago"
                    })({ hours: Math.floor(i / 3600) }))))
          )
      }
    }
  }
  var G,
    H = null,
    z = {},
    W = [],
    K = 0,
    Y = [],
    Q = 10,
    J = !1,
    X = !1,
    Z = !1,
    et = new EventEmitter(),
    tt = function() {
      var e = Object.keys(W).length
      0 == e && $(".js-new-answer-activity").remove()
      var t = $(
        '<div class="new-answer-activity ta-center bar-sm mb16 js-new-answer-activity">'
      ).append(
        $('<a class="d-block py8" href="#">').text(
          (function(e) {
            return 1 == e.count
              ? e.count + " new answer to this question"
              : e.count + " new answers to this question"
          })({ count: e })
        )
      )
      return (
        t.click(function() {
          StackExchange.realtime.expandAnswers()
        }),
        t.find("a").click(function(e) {
          return e.stopPropagation(), StackExchange.realtime.expandAnswers(), !1
        }),
        t
      )
    },
    nt = function(e, t) {
      var n = [],
        o = {}
      if (
        ($(e).each(function(e, t) {
          var i = $(
            ".question[data-questionid=" +
              t +
              "], .answer[data-answerid=" +
              t +
              "]"
          )
          i.length > 0 && (n.push(+t), (o[+t] = i))
        }),
        0 === n.length)
      )
        return $.Deferred().resolve(o)
      var i = "/posts/ajax-load-realtime/{postIdsSemiColonDelimited}?title=true&includeComments={includeComments}".formatUnicorn(
        { postIdsSemiColonDelimited: n.join(";"), includeComments: !!t }
      )
      return $.ajax({ type: "GET", url: i, dataType: "html" })
        .then(function(e) {
          var n = $(e),
            i = n
              .filter(".question, .answer")
              .map(function() {
                var e = $(this),
                  n = +(e.data("questionid") || e.data("answerid") || 0),
                  i = o[n]
                return ot(i, e, n, t)
              })
              .get()
          return $.when.apply($, i)
        })
        .then(function() {
          return o
        })
    },
    ot = function(e, t, n, o) {
      var i = e.find(".postcell, .answercell"),
        a = t.find(".postcell, .answercell").css({ opacity: 0 }),
        r = e.hasClass("question"),
        s = $("body").hasClass("question-page"),
        c = $("h1 a.question-hyperlink"),
        l = t.data("title"),
        u = r && s && $.trim(c.text()) !== l,
        d = e.find(".js-comments-list"),
        f = 150,
        p = function(e) {
          return e.animate({ opacity: 0 }, f)
        },
        h = function(e) {
          return e.animate({ opacity: 1 }, f)
        }
      if (window.history && s) {
        var g = u
          ? (function(e) {
              return e.pageTitle + " - " + e.siteName
            })({ pageTitle: l, siteName: StackExchange.options.site.name })
          : document.title
        window.history.replaceState(window.history.state, g, "#" + n)
      }
      return $.when(u ? p(c) : !0, o ? p(d) : !0, p(i)).then(function() {
        return (
          e.prop("classList", t.prop("classList")),
          u && c.text(l),
          o && StackExchange.comments.replaceAll(e, t.find(".js-comment")),
          i.replaceWith(a),
          styleCode(),
          $.when(u ? h(c) : !0, o ? h(d) : !0, h(a))
        )
      })
    },
    it = function() {
      var e = Object.keys(z).length
      F(e)
      var t = $(
        '<div class="js-new-post-activity bg-black-050 bar-sm ta-center mt8 ml8">'
      ).append(
        $('<a class="d-block py8" href="#">').text(
          (function(e) {
            return 1 == e.count
              ? e.count + " question with new activity"
              : e.count + " questions with new activity"
          })({ count: e })
        )
      )
      return (
        t.click(function() {
          StackExchange.realtime.expandActiveQuestions()
        }),
        t.find("a").click(function(e) {
          return (
            e.stopPropagation(),
            StackExchange.realtime.expandActiveQuestions(),
            !1
          )
        }),
        t
      )
    }
  return {
    init: i,
    log: s,
    simulate: r,
    expandActiveQuestions: N,
    expandAnswers: L,
    subscribeToActiveQuestions: w,
    subscribeToUQL: x,
    subscribeToQuestion: g,
    unsubscribeToQuestion: h,
    pauseQuestionNotifications: !1,
    subscribeToReputationNotifications: j,
    subscribeToSuggestedEdits: T,
    updateRelativeDates: U,
    subscribeToReviewDashboard: C,
    subscribeToTopBarNotifications: E,
    subscribeToCounts: S,
    genericSubscribe: d,
    genericUnsubscribe: u,
    reloadPosts: nt,
    debug: p,
  }
})()),
  (StackExchange.anonymous = {}),
  !(function(e, t, n) {
    "function" == typeof define
      ? define(n)
      : "undefined" != typeof module
      ? (module.exports = n())
      : (t[e] = n(t))
  })("klass", this, function(e) {
    function t(e) {
      return a.call(n(e) ? e : function() {}, e, 1)
    }
    function n(e) {
      return typeof e === s
    }
    function o(e, t, n) {
      return function() {
        var o = this.supr
        this.supr = n[l][e]
        var i = {}.fabricatedUndefined,
          a = i
        try {
          a = t.apply(this, arguments)
        } finally {
          this.supr = o
        }
        return a
      }
    }
    function i(e, t, i) {
      for (var a in t)
        t.hasOwnProperty(a) &&
          (e[a] = n(t[a]) && n(i[l][a]) && c.test(t[a]) ? o(a, t[a], i) : t[a])
    }
    function a(e, t) {
      function o() {}
      function r() {
        this.initialize
          ? this.initialize.apply(this, arguments)
          : (t || (u && s.apply(this, arguments)), d.apply(this, arguments))
      }
      o[l] = this[l]
      var s = this,
        c = new o(),
        u = n(e),
        d = u ? e : this,
        f = u ? {} : e
      return (
        (r.methods = function(e) {
          return i(c, e, s), (r[l] = c), this
        }),
        (r.methods.call(r, f).prototype.constructor = r),
        (r.extend = a),
        (r[l].implement = r.statics = function(e, t) {
          return (
            (e =
              "string" == typeof e
                ? (function() {
                    var n = {}
                    return (n[e] = t), n
                  })()
                : e),
            i(this, e, s),
            this
          )
        }),
        r
      )
    }
    e = e || this
    var r = e.klass,
      s = "function",
      c = /.*/,
      l = "prototype"
    return (
      (t.noConflict = function() {
        return (e.klass = r), this
      }),
      t
    )
  }),
  (StackExchange.topbar = (function() {
    function e(e, t) {
      var n = e.data("cookie")
      if (n) {
        var o = t($.cookie(n))
        o &&
          $.cookie(n, o, {
            expires: new Date(e.data("expire-date")),
            path: "/",
          })
      }
    }
    function t(e) {
      StackExchange.options.enableLogging && console.log("topbar: " + e)
    }
    function n(e) {
      for (var t = 0; t < A.length; t++) {
        var n = A[t]
        if ((n.$button || $()).get(0) === e) return !0
        if (n.dialog && n.dialog.contains(e)) return !0
      }
      return !1
    }
    function o() {
      for (var e = 0; e < A.length; e++) A[e].toggle(!1)
    }
    function i(e) {
      var n
      if (e && (n = JSON.parse(e))) {
        t("realtime message - " + e)
        for (var o in n)
          for (var i = 0; i < A.length; i++)
            if (o == A[i].name) {
              A[i].handleRealtimeMessage(n[o])
              break
            }
      }
    }
    function a(e, t) {
      var n = this,
        o = {
          enableHints: !0,
          enablePrizm: !0,
          isTopbarAware: !0,
          onChoice: null,
          searchUrl: "/search/ac?q=",
          transformResultsHtml: null,
        }
      ;(this.settings = $.extend({}, o, t)),
        (this.resultsCache = {}),
        (this.searchHintsLoaded = !1),
        (this.refreshResultsOnNextShow = !1),
        e.on("s-popover:show", function() {
          n.refreshResultsOnNextShow &&
            (n.suggest.call(n), (n.refreshResultsOnNextShow = !1))
        })
      var i = $("#" + e.attr("aria-controls")),
        a = i.find(".js-ac-results")
      if (
        (StackExchange.mobile && e.css("font-size", "16px"),
        (this.$searchPopover = i),
        (this.$searchBox = e),
        (this.$resultsDiv = a),
        (this.$screenReaderInfo = i.find(".js-screen-reader-info")),
        (this.$loadingIndicator = i.find(".js-spinner")),
        (this.$searchHintsContainer = i.find(".js-search-hints")),
        this.settings.enableHints
          ? e.on("s-popover:show", this.fetchSearchHints.bind(this))
          : (this.searchHintsLoaded = !0),
        this.settings.isTopbarAware &&
          ($(".js-products-menu").on(
            "s-popover:show",
            this.hidePopover.bind(this)
          ),
          e.on("s-popover:show", StackExchange.topbar.hideAll)),
        e.hasClass("js-search-autocomplete"))
      ) {
        var r = StackExchange.helpers.DelayedReaction(
            this.suggest.bind(this),
            500,
            { sliding: !0 }
          ),
          s = /Trident/.test(navigator.userAgent) ? "textinput" : "input"
        e.on(s, this.onInput.bind(this)),
          e.on(s, r.trigger),
          e.on("keydown", this.searchBoxOnKeyDown.bind(this)),
          i.on("keydown", this.searchPopoverOnKeyDown.bind(this)),
          a.on("click", ".js-ac-result", this.choose.bind(this)),
          this.settings.isTopbarAware &&
            $(".js-top-bar").focusin(this.hideWhenFocusLost.bind(this))
      }
    }
    function r() {
      var e = $(".js-search-field")
      $("#search-channel-selector")
        .change(function() {
          var e = $(this).find("option:selected")
          if (e && 1 == e.length) {
            var t = e.data("url")
            if (t) {
              var n = !!$("#search").data("action")
              n
                ? $("#search").data("action", t)
                : $("#search").attr("action", t)
            }
            var o = e.data("mixed")
            void 0 === o
              ? $("#search-channel-mixed").attr("disabled", "disabled")
              : $("#search-channel-mixed")
                  .removeAttr("disabled")
                  .val(o)
          }
        })
        .trigger("change"),
        $("#search").on("submit", function(e) {
          var t = $(this).data("action")
          if (t) {
            var n = location.pathname + location.hash.replace(/%20/g, "+"),
              o = t + "#" + $(this).serialize()
            return n !== o && (location.href = o), e.preventDefault(), !1
          }
        }),
        new a(e)
    }
    function s() {
      function e(e) {
        n.toggleClass(i, e), t.toggleClass(a, e)
      }
      var t = $(".js-searchbar"),
        n = $(".js-searchbar-trigger"),
        o = $(".js-search-field"),
        i = "topbar-icon-on",
        a = "searchbar__open"
      n.on("click", function(t) {
        t.preventDefault(),
          e(),
          StackExchange.helpers
            .DelayedReaction(function() {
              o.focus()
            }, 0)
            .trigger()
      })
    }
    function c(e) {
      var t = $("html").hasClass("html__unpinned-leftnav")
      if ((arguments.length || (e = !t), t !== !!e)) {
        var n, o
        e
          ? ($("html").addClass("html__unpinned-leftnav"),
            (n = "sm md lg"),
            (o = ""))
          : ($("html").removeClass("html__unpinned-leftnav"),
            (n = "sm"),
            (o = "md lg")),
          $(".js-pinned-left-sidebar").attr("data-is-here-when", o),
          $(".js-unpinned-left-sidebar").attr("data-is-here-when", n),
          StackExchange.responsive.forceCheck()
      }
    }
    function l() {
      function e() {
        if (i.is(":visible")) {
          var e = i.offset(),
            t =
              e.top -
              r.scrollTop() +
              StackExchange.scrollPadding.getPaddingTop(),
            n =
              Math.max(StackExchange.scrollPadding.getPaddingTopMinimal(), t) +
              a,
            s = o.height(),
            c = n + s - t - i.height()
          ;(n -= Math.max(0, c)), o.css("top", n), i.css("min-height", s + a)
        }
      }
      var t = !1,
        n = (navigator.userAgent || "").match(/\bEdge\/(\d+)/)
      if (
        (n && parseInt(n[1], 10) < 17 && (t = !0),
        t ||
          !window.CSS ||
          !CSS.supports ||
          !CSS.supports("(position: sticky) or (position: -webkit-sticky)"))
      ) {
        var o = $(".js-sticky-leftnav")
        if (o.length) {
          t && o.addClass("left-sidebar__fake-sticky")
          var i = $(".js-pinned-left-sidebar"),
            a = parseInt(i.css("padding-top"), 10),
            r = $(window)
          r.on("scroll", e),
            StackExchange.responsive.addBreakpointListener(e),
            e()
        }
      }
    }
    function u() {
      var e = $("#js-gdpr-consent-banner"),
        t = e.find(".js-notice-close")
      t.click(function() {
        t.prop("disabled", !0),
          $.ajax({
            method: "POST",
            url: "/accounts/accept-gdpr-consent-banner",
            data: { fkey: StackExchange.options.user.fkey },
            dataType: "json",
            success: function(t) {
              t && e.remove()
            },
            complete: function() {
              t.prop("disabled", !1)
            },
          })
      })
    }
    var d = klass({
        name: "",
        url: "",
        cssClass: "",
        button: null,
        $dialog: null,
        $loadingPlaceholder: null,
        $preloadedDialog: null,
        $parent: null,
        alignment: null,
        hasRead: !1,
      }).methods({
        isLoading: function() {
          return null != this.$loadingPlaceholder
        },
        isLoaded: function() {
          return null != this.$dialog
        },
        isVisible: function() {
          var e = this.$dialog || this.$loadingPlaceholder
          return null != e && e.is(":visible")
        },
        toggle: function(e, t) {
          if ("boolean" != typeof e)
            throw new Error("showOrHide is a required parameter")
          if (!e) {
            if (this.isLoading()) return this.showOrHide(!1), void 0
            if (!this.isLoaded()) return
          }
          if (
            (this.isLoaded() || this.isLoading()
              ? (this.showOrHide(e),
                e || t || !this.hasRead || this.markAsRead())
              : this.$preloadedDialog
              ? this.loadChildContent()
              : this.loadDialog(),
            e)
          ) {
            for (var n = 0; n < A.length; n++)
              this.button != A[n] && A[n].toggle(!1, t)
            $(".js-top-search-popover").removeClass("is-visible")
          }
        },
        showOrHide: function(e) {
          var t = this.$dialog || this.$loadingPlaceholder || $(),
            n = this.button.$button
          if (e) {
            var o = n.closest("li")
            this.$parent ||
              (StackExchange.mobile
                ? (this.$parent = $(".js-topbar-dialog-corral"))
                : o.length > 0 &&
                  (this.$parent = $('<li role="presentation" />').insertAfter(
                    o
                  ))),
              this.$parent
                ? this.$parent.append(t)
                : t.insertAfter(this.button.$button),
              this._bound_pdub ||
                (this._bound_pdub = this.positionDialogUnderButton.bind(this)),
              this.positionDialogUnderButton(),
              StackExchange.responsive &&
                StackExchange.responsive.addBreakpointListener(this._bound_pdub)
          } else
            StackExchange.responsive &&
              this._bound_pdub &&
              StackExchange.responsive.removeBreakpointListener(
                this._bound_pdub
              )
          t.toggle(e), e && this.isLoaded() && (this.hasRead = !0)
        },
        loadChildContent: function() {
          var e = this.$preloadedDialog.find(".child-content")
          if (
            ((this.$dialog = this.$preloadedDialog),
            this.showOrHide(!0),
            this.url)
          ) {
            $("<div>", { class: "child-content-loading" })
              .addSpinner()
              .appendTo(e)
            var t = this
            this.fetchUrl().done(function(n) {
              e.html(n), t.afterLoad()
            })
          }
        },
        loadDialog: function() {
          if (!this.isLoading()) {
            ;(this.$loadingPlaceholder = this.getLoadingPlaceholder()),
              this.showOrHide(!0)
            var e = this
            this.fetchUrl()
              .done(function(t) {
                ;(e.$dialog = $(t)), e.afterLoad()
                var n = e.$loadingPlaceholder.is(":visible")
                e.showOrHide(n)
              })
              .always(function() {
                e.$loadingPlaceholder.remove(), (e.$loadingPlaceholder = null)
              })
          }
        },
        afterLoad: function() {
          this.$dialog.find(".js-close-button").click(function() {
            StackExchange.topbar.hideAll()
          }),
            StackExchange.gps.bindTrackClicks(this.$dialog)
        },
        getLoadingPlaceholder: function() {
          var e = $("<div/>")
              .append(StackExchange.helpers.getSpinnerImg())
              .html(),
            t =
              this.cssClass +
              (StackExchange.options.user.isAnonymousNetworkWide
                ? " anon"
                : ""),
            n = [
              '<div class="topbar-dialog ',
              t,
              ' dno">',
              '<div class="header">',
              e,
              "</div>",
              '<div class="modal-content"/>',
              "</div>",
            ]
          return $(n.join(""))
        },
        positionDialogUnderButton: function() {
          var e = this.alignment || "right",
            t = this.button.$button.outerHeight(),
            n = this.$dialog || this.$loadingPlaceholder,
            o = n.parent()
          for (
            ["top", "left", "right", "max-width"].forEach(function(e) {
              n[0].style.removeProperty(e)
            });
            o.not("body").length && "static" === o.css("position");

          )
            o = o.parent()
          o = o.length ? o : $("body")
          var i,
            a = this.button.$button.offset().left - o.offset().left
          "right" === e &&
            ((a = o.outerWidth() - a - this.button.$button.outerWidth()),
            (i = o.offset().left + o.outerWidth() - a))
          var r = { top: t }
          ;(StackExchange.responsive &&
            "sm" === StackExchange.responsive.currentRange()) ||
            ((r[e] = a), i && (r.maxWidth = i)),
            (this.$dialog || this.$loadingPlaceholder).css(r)
        },
        fetchUrl: function() {
          t("fetching " + this.url)
          var e = $.ajax({ type: "GET", url: this.url, dataType: "html" })
          return e
        },
        markAsRead: function() {
          this.button.markAsRead(),
            this.isLoaded() &&
              this.$dialog.find(".unread-item").removeClass("unread-item")
        },
        handleRealtimeMessage: function() {
          this.clearLoadedDialog()
        },
        clearLoadedDialog: function() {
          this.isLoaded() &&
            (this.$dialog.remove(), (this.$dialog = null), (this.hasRead = !1))
        },
        hasFocus: function() {
          return this.contains(document.activeElement)
        },
        contains: function(e) {
          var t = this.$dialog || this.$loadingPlaceholder
          return t && t.length && e && $.contains(t.get(0), e)
        },
      }),
      f = klass({
        name: "",
        selector: "",
        dialog: null,
        $button: null,
        onClass: "",
        unreadCountPrefix: "",
        queuedUnreadCount: 0,
        showsOnMouseOver: !1,
        pendingUnread: {},
      }).methods({
        initialize: function() {
          ;(this.dialog.name = name),
            (this.dialog.button = this),
            M.push(this.dialog)
          var e = this
          ;(this.$button = $(this.selector)),
            this.$button.click(function() {
              return e.toggle(), !1
            }),
            this.showsOnMouseOver &&
              this.$button.mouseover(function() {
                e.showOnMouseOver()
              }),
            (this.onClass =
              "topbar-icon-on" + (this.onClass ? " " : "") + this.onClass)
        },
        toggle: function(e, t) {
          ;(e =
            "boolean" == typeof e ? e : !this.$button.hasClass(this.onClass)),
            this.$button.toggleClass(this.onClass, e),
            this.$button.attr("aria-expanded", e),
            this.dialog.toggle(e, t),
            !e && this.dialog.hasFocus() && this.$button.focus()
        },
        showOnMouseOver: function() {
          for (var e = !1, t = 0; t < A.length; t++) {
            var n = A[t]
            if (n != this && n.showsOnMouseOver && n.isOn()) {
              e = !0
              break
            }
          }
          e && this.toggle(!0, !0)
        },
        isOn: function() {
          return this.$button.hasClass(this.onClass)
        },
        markAsRead: function() {
          this.setUnread($.extend({ count: 0, litUp: !1 }, this.pendingUnread))
        },
        setUnread: function(e) {
          return this.isOn()
            ? ($.extend(this.pendingUnread, e), void 0)
            : ((this.pendingUnread = {}),
              this.applyUnreadCount(e.count, e.litUp),
              (e.count > 0 || e.litUp) && this.dialog.clearLoadedDialog(),
              void 0)
        },
        applyUnreadCount: function(e, t) {
          var n = this.$button,
            o = n.find(".unread-count, .js-unread-count"),
            i = n.data("unread-class")
          void 0 !== t && i && n.toggleClass(i, t).data("lit-up", t),
            void 0 !== e &&
              (n.data("unread-count", e),
              e > 0
                ? o
                    .text(this.unreadCountPrefix + e)
                    .fadeIn()
                    .removeClass("d-none")
                : o.fadeOut())
          var a = this.getButtonLabelAndTitle(
            n.data("unread-count") || 0,
            !!n.data("lit-up")
          )
          a && (n.attr("aria-label", a.label), n.attr("title", a.title))
        },
        handleRealtimeMessage: function() {},
        getButtonLabelAndTitle: function() {
          return null
        },
      }),
      p = d
        .extend({
          url: "/topbar/site-switcher/site-list",
          cssClass: "siteSwitcher-dialog",
          $searchItems: null,
          $pinnedSiteSearchItems: null,
          isPreloaded: !0,
          $preloadedDialog: $(".siteSwitcher-dialog"),
        })
        .methods({
          afterLoad: function() {
            this.$dialog
              .find(".js-site-filter-txt")
              .typeWatch({
                highlight: !1,
                wait: 250,
                captureLength: -1,
                callback: $.proxy(this.filterSites, this),
              }),
              (this.$searchItems = this.$dialog
                .find(".js-other-sites li")
                .clone()
                .map(function() {
                  return {
                    title: $(".site-icon", this)
                      .attr("title")
                      .toLowerCase(),
                    description: $(".site-desc", this)
                      .text()
                      .toLowerCase(),
                    hostname: $("a", this)
                      .first()
                      .attr("href"),
                    li: this,
                  }
                }))
            var e = this.$dialog
            this.$dialog.find(".js-site-filter-txt").focus(function() {
              var t = e.offset().top + e.height(),
                n = e.find(".other-sites li:nth-child(2)"),
                o = n.offset().top + n.height()
              o > t && e.animate({ scrollTop: e.scrollTop() + o - t }, 750)
            }),
              (StackExchange.options.user.isAnonymous &&
                !StackExchange.options.user.isAnonymousOnThisSite) ||
                !$(".pinned-site-editor-container").length ||
                ($(".js-found-sites").hide(),
                this.$dialog
                  .find("#js-site-search-txt")
                  .typeWatch({
                    highlight: !1,
                    wait: 100,
                    captureLength: -1,
                    callback: $.proxy(this.findSitesToPin, this),
                  }),
                this.$dialog
                  .find("#edit-pinned-sites")
                  .click($.proxy(this.editPinnedSites, this)),
                this.$dialog
                  .find("#cancel-pinned-sites")
                  .click(
                    {
                      forceListRefresh: $("#save-pinned-sites-btn").is(
                        ":enabled"
                      ),
                    },
                    this.cancelSiteListEdits
                  ),
                this.$dialog
                  .find("#pin-site-btn")
                  .click($.proxy(this.pinSite, this)),
                this.$dialog.on(
                  "click",
                  ".js-remove-pinned-site-link",
                  function() {
                    return (
                      $(this)
                        .parent()
                        .remove(),
                      $("#save-pinned-sites-btn").enable(),
                      $(".js-reset-pinned-sites").show(),
                      !1
                    )
                  }
                ),
                this.$dialog
                  .find("#save-pinned-sites-btn")
                  .click($.proxy(this.savePinnedSites, this)),
                this.$dialog
                  .find(".js-reset-pinned-sites")
                  .click($.proxy(this.resetPinnedSites, this))),
              this.supr()
          },
          showOrHide: function(e) {
            this.supr(e)
          },
          pinSite: function() {
            $("#pin-site-btn").disable()
            var e = $("#js-site-search-txt").val(),
              t = $.grep(this.$pinnedSiteSearchItems, function(t) {
                return t.sitename === e
              })
            if (!t.length) return $("#pin-site-btn").enable(), void 0
            var n = t[0],
              o = $(".pinned-site-link")
                .map(function(e, t) {
                  return $(t).data("id")
                })
                .toArray()
            if (o.indexOf(n.siteid) > -1)
              return $("#pin-site-btn").enable(), void 0
            var i = this
            $.ajax({
              type: "GET",
              url: "/topbar/site-switcher/pin-site",
              data: { siteId: n.siteid },
              dataType: "html",
            })
              .done(function(e) {
                var t = $(e)
                t.hide(),
                  $(".pinned-site-list").append(t),
                  t.fadeIn("slow"),
                  $("#js-site-search-txt").val(""),
                  $("#save-pinned-sites-btn").enable(),
                  i.toggleSiteListResetLink(!0)
              })
              .fail(function() {
                $("#pin-site-btn")
                  .parent()
                  .showErrorMessage("Something bad happened; please try again"),
                  $("#pin-site-btn").enable()
              })
          },
          savePinnedSites: function() {
            var e = $(".pinned-site-list li .pinned-site-link")
                .map(function(e, t) {
                  return $(t).data("id")
                })
                .toArray(),
              t = !$(".js-reset-pinned-sites").is(":visible") || !e.length
            this.toggleSiteListResetLink(!t)
            var n = $(".js-reset-pinned-sites")
              .siblings("input[name=fkey]")
              .val()
            return (
              $.ajax({
                type: "POST",
                url: "/topbar/site-switcher/save-pinned-sites",
                data: {
                  siteIds: t ? [] : e,
                  fkey: n || StackExchange.options.user.fkey,
                },
                dataType: "html",
                traditional: !0,
              })
                .done(
                  $.proxy(function(e) {
                    $(".my-sites").html(e),
                      this.cancelSiteListEdits(!1),
                      $(".pinned-site-list").data("custom-list", !t),
                      StackExchange.using("gps", function() {
                        StackExchange.gps.track("site_switcher.edit", {})
                      })
                  }, this)
                )
                .fail(function() {
                  $("#save-pinned-sites-btn")
                    .parent()
                    .showErrorMessage(
                      "Something bad happened; please try again"
                    )
                }),
              !1
            )
          },
          resetPinnedSites: function() {
            var e = this
            return (
              $.ajax({
                type: "GET",
                url: "/topbar/site-switcher/default-active-sites",
                dataType: "html",
              })
                .done(function(t) {
                  $(".pinned-site-list").html(t),
                    $("#save-pinned-sites-btn").enable(),
                    e.toggleSiteListResetLink(!1)
                })
                .error(function() {
                  $(".js-reset-pinned-sites")
                    .parent()
                    .showErrorMessage(
                      "Something bad happened; please try again"
                    )
                }),
              !1
            )
          },
          doSearch: function(e, t, n) {
            var o
            t = t.toLowerCase()
            var i = []
            return (
              $.each(e, function(e, n) {
                var o = { index: e, li: n.li, item: n },
                  a = n.title.indexOf(t)
                n.title == t
                  ? (o.priority = 1)
                  : 0 == a
                  ? (o.priority = 2)
                  : a > -1
                  ? (o.priority = 3)
                  : n.description.indexOf(t) > -1
                  ? (o.priority = 4)
                  : n.hostname.indexOf(t) > -1 && (o.priority = 5),
                  o.priority && i.push(o)
              }),
              (o = i.sort(function(e, t) {
                return e.priority - t.priority || e.index - t.index
              })),
              n &&
                StackExchange.using("gps", function() {
                  StackExchange.gps.track(
                    "sitesearch.submit",
                    { term: t, numresults: i.length },
                    !1
                  )
                }),
              o
            )
          },
          _findSitesToPin: function(e) {
            var t = $(".js-found-sites"),
              n = this.$pinnedSiteSearchItems
            if ((t.empty(), "" === e))
              return t.hide(), $("#pin-site-btn").disable(), void 0
            if (((n = this.doSearch(n, e, !1)), n.length)) {
              t.show(), $("#pin-site-btn").enable()
              var o = $(".pinned-site-link")
                .map(function(e, t) {
                  return $(t).data("id")
                })
                .toArray()
              $.each(n, function(e, n) {
                var i = $(
                  '<li class="pinned-site-candidate">' +
                    n.item.sitename +
                    "</li>"
                )
                o.indexOf(n.item.siteid) > -1
                  ? i.addClass("already-pinned-site")
                  : i.click(function() {
                      var e = $(this).text()
                      return (
                        $("#js-site-search-txt").val(e),
                        $(".js-found-sites").hide(),
                        !1
                      )
                    }),
                  i.appendTo(t)
              })
            }
          },
          findSitesToPin: function(e) {
            if (this.$pinnedSiteSearchItems)
              return this._findSitesToPin(e), void 0
            var t = this
            $.ajax({
              type: "GET",
              url: "/topbar/site-switcher/all-pinnable-sites",
              dataType: "json",
            }).done(function(n) {
              ;(t.$pinnedSiteSearchItems = n), t._findSitesToPin(e)
            })
          },
          filterSites: function(e) {
            var t = $(".js-other-sites"),
              n = this.$searchItems
            t.empty(),
              "" != e && (n = this.doSearch(n, e, !0)),
              t.append(
                n.map(function(e) {
                  return (this && this.li) || e.li
                })
              )
          },
          editPinnedSites: function() {
            $(".siteSwitcher-dialog .header")
              .not("#your-communities-header")
              .css("opacity", 0.2),
              $(".siteSwitcher-dialog .modal-content")
                .not("#your-communities-section")
                .css("opacity", 0.2),
              $(".my-sites").hide(),
              $(".pinned-site-editor-container").show(),
              $("#edit-pinned-sites").hide(),
              $("#cancel-pinned-sites").show()
            var e = $(".pinned-site-list")
            if ("" === e.html().trim()) {
              var t = $("<div/>")
                .append(StackExchange.helpers.getSpinnerImg())
                .html()
              e.append('<li style="text-align:center;">' + t + "</li>"),
                $.ajax({
                  type: "GET",
                  url: "/topbar/site-switcher/current-pinned-sites",
                  dataType: "html",
                })
                  .done(function(t) {
                    e.html(t)
                  })
                  .fail(function() {
                    e.showErrorMessage(
                      "Something bad happened; please try again"
                    )
                  })
                  .always(function() {
                    e.find(".ajax-loader").remove()
                  })
            }
            this.toggleSiteListResetLink(
              "true" ===
                e
                  .data("custom-list")
                  .toString()
                  .toLowerCase()
            )
            var n = $(".sortable"),
              o = this
            return (
              n.data("isSortable") ||
                StackExchange.loadJqueryUi().done(function() {
                  n.sortable({
                    axis: "y",
                    update: function() {
                      $("#save-pinned-sites-btn").enable(),
                        o.toggleSiteListResetLink(!0)
                    },
                  })
                    .disableSelection()
                    .data("isSortable", !0)
                }),
              !1
            )
          },
          toggleSiteListResetLink: function(e) {
            $(".js-reset-pinned-sites").toggle(e)
          },
          cancelSiteListEdits: function(e) {
            return (
              $(".header")
                .not("#your-communities-header")
                .css("opacity", 1),
              $(".modal-content")
                .not("#your-communities-section")
                .css("opacity", 1),
              $(".my-sites").show(),
              $("#edit-pinned-sites").show(),
              $(".pinned-site-editor-container").hide(),
              $("#cancel-pinned-sites").hide(),
              $("#save-pinned-sites-btn").disable(),
              e &&
                ($(".pinned-site-list").empty(),
                $(".js-found-sites").hide(),
                $("#js-site-search-txt").val(""),
                $("#pin-site-btn").disable()),
              !1
            )
          },
        }),
      h = f.extend({
        name: "SiteSwitcher",
        selector: ".js-site-switcher-button",
        dialog: new p(),
        showsOnMouseOver: !1,
        onClass: "icon-site-switcher-on",
      }),
      g = d
        .extend({ cssClass: "feature-notice-dialog", alignment: "left" })
        .methods({
          loadDialog: function() {
            this.$dialog = $(".js-feature-notice-dialog")
            var e = this.button,
              t = e.$button
            this.$dialog.find(".js-close-button").click(function() {
              return e.mark(4), t.hide(), e.toggle(!1), !1
            }),
              this.$dialog.find(".js-cta-button").click(function() {
                return (e.didClickCTA = !0), e.mark(2), !0
              }),
              this.showOrHide(!0)
          },
        }),
      m = f
        .extend({
          name: "FeatureNotice",
          selector: ".-feature-notice",
          dialog: new g(),
        })
        .methods({
          initialize: function() {
            f.prototype.initialize.apply(this, arguments)
            var t = this.$button
            e(t, function(e) {
              return e
                ? "!" == e.substring(0, 1)
                  ? "!" + (1 + parseInt(e.substring(1)))
                  : null
                : "!1"
            }),
              t.data("autopopup") && this.toggle(!0, !1, !0)
          },
          mark: function(t) {
            e(this.$button, function(e) {
              if (e) {
                var n = e.split(";")
                if (2 == n.length && !isNaN(n[0]) && !isNaN(n[1]))
                  return (n[0] | t) + ";" + n[1]
              }
              return t + ";" + Date.now()
            })
          },
          markAsRead: function() {
            this.didClickCTA && f.prototype.markAsRead.apply(this, arguments)
          },
          toggle: function(e, t, n) {
            ;(e =
              "boolean" == typeof e ? e : !this.$button.hasClass(this.onClass)),
              (n = !!n),
              f.prototype.toggle.apply(this, arguments)
            {
              var o = this.$button
              this.dialog.$dialog
            }
            e &&
              (this.mark(1),
              n || this.mark(8),
              o.hasClass("js-sample") &&
                StackExchange.using("gps", function() {
                  StackExchange.gps.track("new_feature.show", {
                    campaign: o.data("campaign"),
                    location: o.data("location"),
                    auto_popup: n,
                  })
                }))
          },
        }),
      v = d.extend({ url: "/topbar/inbox", cssClass: "inbox-dialog" }),
      b = f
        .extend({
          name: "Inbox",
          selector: ".js-inbox-button",
          dialog: new v(),
          showsOnMouseOver: !1,
        })
        .methods({
          handleRealtimeMessage: function(e) {
            this.setUnread({ count: e.UnreadInboxCount })
          },
          getButtonLabelAndTitle: function(e) {
            var t, n
            return (
              e > 0
                ? ((t = (function(e) {
                    return (
                      1 == e.__count,
                      "Inbox (" + e.__count + " unread messages)"
                    )
                  })({ __count: e })),
                  (n = "You have unread inbox messages"))
                : ((t = "Inbox"), (n = "Recent inbox messages")),
              { label: t, title: n }
            )
          },
        }),
      y = d
        .extend({
          url:
            (StackExchange.options.site.routePrefix || "") +
            "/topbar/achievements",
          cssClass: "achievements-dialog",
        })
        .methods({
          afterLoad: function() {
            this.alignRep(),
              this.bindDateGroupToggles(),
              this.displayUtcTime(),
              this.bindGpsTracker(),
              this.supr()
          },
          alignRep: function() {
            var e = this.$dialog.find(".js-items .js-faux-column"),
              t = 0
            e.filter(".js-rep-change").each(function() {
              var e = $.trim($(this).text()).length
              e > t && (t = e)
            }),
              t > 0 && e.width(6 * (t + 1))
          },
          bindDateGroupToggles: function() {
            this.$dialog.find(".js-date-group-toggle").click(function() {
              var e = $(this),
                t = e.closest(".js-date-group"),
                n = t.find(".js-items"),
                o = t.find(".rep-site-container")
              e.find(".date-group-toggle").toggleClass("toggle-hidden"),
                n.add(o).fadeToggle("fast")
            }),
              this.$dialog.find(".rep-site-container").on("click", function(e) {
                e.stopImmediatePropagation()
              })
          },
          displayUtcTime: function() {
            var e = this.$dialog,
              t = function() {
                var t = new Date()
                t.setTime(
                  t.getTime() + 1e3 * StackExchange.options.serverTimeOffsetSec
                )
                var n = t.getUTCHours(),
                  o = t.getUTCMinutes()
                10 > n && (n = "0" + n),
                  10 > o && (o = "0" + o),
                  e.find(".js-utc-time").text(n + ":" + o)
              }
            t(), setInterval(t, 6e4)
          },
          bindGpsTracker: function() {
            var e = $("#js-gps-container.js-empty-achiev")
            e
              .find("a:first")
              .addClass("js-gps-track")
              .data("gps-track", "achievements_popup.click({ item_type:6 })"),
              e
                .find("a:last")
                .addClass("js-gps-track")
                .data("gps-track", "achievements_popup.click({ item_type:7 })"),
              StackExchange.gps.bindTrackClicks(e)
          },
        }),
      w = f
        .extend({
          name: "Achievements",
          selector: ".js-achievements-button",
          dialog: new y(),
          unreadCountPrefix: "+",
          showsOnMouseOver: !1,
        })
        .methods({
          handleRealtimeMessage: function(e) {
            var t = { count: e.UnreadRepCount }
            void 0 !== e.UnreadNonRepCount &&
              (t.litUp = e.UnreadNonRepCount > 0),
              this.setUnread(t)
          },
          getButtonLabelAndTitle: function(e, t) {
            var n, o
            return (
              e > 0
                ? ((n = (function(e) {
                    return (
                      1 == e.__count,
                      "Achievements (" + e.__count + " new reputation)"
                    )
                  })({ __count: e })),
                  (o = "You have new reputation changes"))
                : t
                ? ((n = "Achievements (unread)"),
                  (o = "You have new achievements"))
                : ((n = "Achievements"),
                  (o =
                    "Recent achievements: reputation, badges, and privileges earned")),
              { label: n, title: o }
            )
          },
        }),
      k = d.extend({ cssClass: "help-dialog" }).methods({
        loadDialog: function() {
          ;(this.$dialog = $(".js-help-dialog")), this.showOrHide(!0)
        },
      }),
      x = f.extend({
        name: "Help",
        selector: ".js-help-button",
        dialog: new k(),
      }),
      S = d
        .extend({ cssClass: "network-logo-dialog", alignment: "left" })
        .methods({
          loadDialog: function() {
            ;(this.$dialog = $(".js-network-logo-dialog")), this.showOrHide(!0)
            var e = this.button
            this.$dialog.find(".js-close-button").click(function() {
              return e.toggle(!1), !1
            })
          },
        }),
      C = f.extend({
        name: "NetworkLogo",
        selector: ".js-network-logo",
        dialog: new S(),
      }),
      E = d.extend({ url: "/topbar/review", cssClass: "review-dialog" }),
      j = f.extend({
        name: "Review",
        selector: ".js-review-button",
        dialog: new E(),
      }),
      T = d
        .extend({ url: "/topbar/mod-inbox", cssClass: "modInbox-dialog" })
        .methods({}),
      I = f.extend({
        name: "ModInbox",
        selector: ".js-mod-inbox-button",
        dialog: new T(),
      }),
      O = d
        .extend({ cssClass: "js-leftnav-dialog", alignment: "left" })
        .methods({
          loadDialog: function() {
            ;(this.$dialog = $(".js-leftnav-dialog")), this.showOrHide(!0)
            var e = this
            StackExchange.responsive &&
              StackExchange.responsive.addBreakpointListener(function(t, n) {
                $("html").hasClass("html__unpinned-leftnav") ||
                  ("sm" === n && e.button.toggle(!1))
              })
          },
        }),
      P = f.extend({
        name: "LeftNav",
        selector: ".js-left-sidebar-toggle",
        dialog: new O(),
      })
    a.prototype = {
      query: function() {
        return this.$searchBox.val().trim()
      },
      hasQuery: function() {
        return !!this.query()
      },
      fetchSearchHints: function() {
        var e = this
        this.searchHintsLoaded ||
          $.ajax({ type: "GET", url: "/search/hints" })
            .success(function(t) {
              e.$searchHintsContainer.append(t), (e.searchHintsLoaded = !0)
            })
            .fail(function(e, t, n) {
              StackExchange.debug.log("Autocomplete Error: " + n.toString())
            })
      },
      hasResults: function() {
        return this.$resultsDiv[0].childElementCount > 0
      },
      hideResults: function() {
        this.showResults("")
      },
      hidePopover: function() {
        this.$searchPopover.removeClass("is-visible")
      },
      hideWhenFocusLost: function(e) {
        $(e.target).is(this.$searchBox) ||
          0 !== $(e.target).parents(".js-top-search-popover").length ||
          this.hidePopover()
      },
      onInput: function() {
        var e = this.hasQuery()
        this.toggleSpinner(e),
          e || this.settings.enableHints || this.hidePopover()
      },
      showResults: function(e) {
        var t = 0 === $.trim(e).length
        this.$searchHintsContainer
          .find(".js-search-hints-text")
          .toggleClass("d-none", !t),
          this.toggleSpinner(!1)
        var n =
            this.settings.transformResultsHtml ||
            function(e) {
              return $(e)
            },
          o = n(e)
        this.$resultsDiv
          .empty()
          .append(o)
          .toggleClass("d-none", t)
        var i = this.$resultsDiv.find(".js-ac-result").length
        this.$screenReaderInfo.text(
          0 === i
            ? "No results"
            : (function(e) {
                return 1 == e.__results, e.__results + " results found"
              })({ __results: i })
        )
      },
      toggleSpinner: function(e) {
        this.$loadingIndicator.toggleClass("d-none", !e)
      },
      suggest: function() {
        var e = this,
          t = e.query()
        if (!e.hasQuery()) return e.hideResults(), void 0
        var n = e.resultsCache[t]
        if (void 0 !== n) e.showResults(n)
        else {
          var o = new URL(
            this.settings.searchUrl + encodeURIComponent(t),
            location.href
          )
          $.get(o.href)
            .done(function(n) {
              ;(e.resultsCache[t] = n), e.showResults(n)
            })
            .fail(function(t, n, o) {
              StackExchange.debug.log("Autocomplete Error: " + o.toString()),
                e.toggleSpinner(!1)
            })
        }
      },
      selected: function(e) {
        if (0 === arguments.length)
          return this.$resultsDiv.find(".js-ac-result:focus")
        if (e) {
          if (((e = $(e)), !e.hasClass("js-ac-result"))) return
          e
            .siblings()
            .find(".js-ac-enter-hint")
            .addClass("d-none"),
            e.siblings().blur(),
            e.focus(),
            e.find(".js-ac-enter-hint").toggleClass("d-none")
        } else this.$resultsDiv.children().blur()
      },
      selectNext: function() {
        if (this.hasResults()) {
          var e = this.selected(),
            t = e.next(".js-ac-result")
          return 0 === e.length
            ? (this.$resultsDiv
                .children(".js-ac-result")
                .first()
                .focus()
                .find(".js-ac-enter-hint")
                .toggleClass("d-none"),
              void 0)
            : (t.length > 0 &&
                (this.selected(t),
                t[0].scrollIntoView({ behavior: "smooth", block: "nearest" })),
              void 0)
        }
      },
      selectPrev: function() {
        if (this.hasResults()) {
          var e = this.selected(),
            t = e.prev(".js-ac-result")
          t.length > 0
            ? (this.selected(t),
              t[0].scrollIntoView({ behavior: "smooth", block: "nearest" }))
            : (this.$searchBox.focus(),
              this.$resultsDiv
                .children(".js-ac-result")
                .first()
                .find(".js-ac-enter-hint")
                .addClass("d-none"))
        }
      },
      searchBoxOnKeyDown: function(e) {
        switch (e.key) {
          case "ArrowDown":
            this.hasResults() && this.selectNext(), e.preventDefault()
            break
          case "Escape":
            this.hidePopover()
        }
      },
      searchPopoverOnKeyDown: function(e) {
        switch (e.key) {
          case "ArrowDown":
            this.hasResults() && this.selectNext(), e.preventDefault()
            break
          case "ArrowUp":
            this.hasResults() && this.selectPrev(), e.preventDefault()
            break
          case "Escape":
            this.hidePopover(), this.$searchBox.focus()
        }
      },
      choose: function(e) {
        var t = $(e.target).closest(".js-ac-result"),
          n = this.$resultsDiv.find(".js-ac-result").index(t)
        return (
          this.settings.enablePrizm &&
            StackExchange.using("gps", function() {
              StackExchange.gps.track("sitesearch.autocomplete.click", {
                completion_index: n,
              })
            }),
          this.settings.onChoice
            ? (e.preventDefault(), this.settings.onChoice(t), !1)
            : void 0
        )
      },
    }
    var A = [],
      M = []
    return {
      init: function(e) {
        ;(e = e || {}),
          window.devicePixelRatio >= 1.5 &&
            $(".js-avatar-me").attr("src", function(e, t) {
              return t.replace("?s=24", "?s=48")
            }),
          A.push(new h()),
          A.push(new C()),
          $(".js-left-sidebar-toggle").length && A.push(new P()),
          StackExchange.settings.userMessaging &&
            StackExchange.settings.userMessaging.showNewFeatureNotice &&
            A.push(new m()),
          A.push(new b()),
          A.push(new w()),
          A.push(new x()),
          A.push(new j()),
          StackExchange.options.user.isModerator && A.push(new I()),
          $(document).click(function(e) {
            n(e.target) || o()
          })
        var t = document.body.style
        "justifyContent" in t ||
          "WebkitJustifyContent" in t ||
          $(".top-bar *:visible")
            .css({
              display: "inline-block",
              "white-space": "nowrap",
              "vertical-align": "middle",
            })
            .not(".-logo, .-logo *, svg, .-badges *")
            .css("width", "auto"),
          r(),
          s(),
          l(),
          u(),
          $(".js-products-menu").click(function() {
            return !1
          })
      },
      hideAll: o,
      handleRealtimeMessage: i,
      toggleUnpinnedLeftNav: c,
      SearchAutoComplete: a,
    }
  })()),
  (StackExchange.notify = (function() {
    function e(e, t) {
      var n = $("#dismissed-messages")
      n.val(n.val() + "~" + e + (t ? " " + t : "") + "~")
    }
    function t(e, t) {
      var n = $("#dismissed-messages").val()
      return n ? new RegExp("~" + e + (t ? " " + t : "") + "~").test(n) : !1
    }
    function n(e, t, n) {
      var o = parseInt(
          $("body")
            .css("margin-top")
            .match(/\d+/)
        ),
        i = (t * o) / e
      n
        ? $(
            "body:not(.no-message-slide), body:not(.no-message-slide) .js-top-bar"
          ).animate({ marginTop: i + "px" }, "fast", "linear")
        : $(
            "body:not(.no-message-slide), body:not(.no-message-slide) .js-top-bar"
          ).css("marginTop", i + "px")
    }
    var o = 0,
      i = function(t, i) {
        var a = $("#notify-" + t + (i ? "-" + i : ""))
        a.length &&
          (t >= 0 &&
            $.post("/messages/mark-as-read", {
              messagetypeid: t,
              id: i ? i : null,
            }),
          e(t, i),
          o--,
          a.fadeOut("fast", function() {
            n(o + 1, o, !0),
              a.remove(),
              0 === $("#notify-container div").length &&
                $("#notify-container").hide()
          }))
      },
      a = function(e) {
        if ((o++, t(e.messageTypeId, e.id))) return !1
        var n = ""
        e.messageTypeId &&
          (n =
            ' id="notify-' + e.messageTypeId + (e.id ? "-" + e.id : "") + '"')
        var a =
          "<div" +
          n +
          ' style="display:none"><span class="notify-close">' +
          $("<a>&times;</a>")
            .attr("title", "dismiss this notification")
            .outerHTML() +
          '</span><span class="notify-text">' +
          e.text +
          "</span>"
        if (e.showProfile) {
          var r = encodeURIComponent(
            "/users/" + e.userId + "?tab=badges&sort=recent"
          )
          a +=
            " " +
            (function(e) {
              return 'See your <a href="' + e.url + '">profile</a>.'
            })({
              url:
                "/messages/mark-as-read?messagetypeid=" +
                e.messageTypeId +
                "&returnurl=" +
                r,
            })
        }
        a += "</div>"
        var s = $(a)
        return (
          e.cssClass && s.addClass(e.cssClass),
          s.find(".notify-close").click(function() {
            e.close && e.close(), i(e.messageTypeId, e.id)
          }),
          $("#notify-container").append(s),
          $("#notify-container").show(),
          !0
        )
      },
      r = function() {
        $("#notify-container div").fadeIn("slow")
      },
      s = function() {
        $(
          "body:not(.no-message-slide), body:not(.no-message-slide) .js-top-bar"
        ).animate({ marginTop: "2.5em" }, "fast", "linear")
      },
      c = function(e, t) {
        var n = $('<div class="link-more">').append(
          $("<a>").text(
            (function(e) {
              return 1 == e.numNotifications
                ? "view " + e.numNotifications + " more notification"
                : "view " + e.numNotifications + " more notifications"
            })({ numNotifications: e })
          )
        )
        $("#notify-container").append(n),
          n.click(function() {
            n.detach()
            for (var e = 0; e < t.length; e++) a(t[e])
            r()
          })
      }
    return {
      showMessages: function(e, t) {
        for (
          var i = 0, s = o, l = t ? 2 : e.length, u = 0;
          l > u && u < e.length;
          u++
        )
          a(e[u]) && i++
        if ((n(s, i, !1), r(), t && i < e.length)) {
          var d = e.slice(l)
          c(e.length - i, d)
        }
      },
      show: function(e, t, n) {
        s(), a({ text: e, messageTypeId: t, cssClass: n }), r()
      },
      close: i,
      getMessageText: function(e) {
        return $("#notify-" + e + " .notify-text").text()
      },
    }
  })())
var styleCode = (function() {
  function e(e) {
    var t = $("#prettify-lang").text()
    return "" != t ? (e.addClass(t), !0) : !1
  }
  return function() {
    "undefined" != typeof MathJax &&
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]),
      StackExchange.ifUsing("snippets", function() {
        StackExchange.snippets.redraw && StackExchange.snippets.redraw()
      })
    var t = !1
    if (
      ($("pre code")
        .parent()
        .each(function() {
          $(this).hasClass("prettyprint-override") &&
            ($(this)
              .removeClass("prettyprint-override")
              .addClass("prettyprint"),
            (t = !0)),
            $(this).hasClass("prettyprint") ||
              (e($(this)) && ($(this).addClass("prettyprint"), (t = !0)))
        }),
      t)
    ) {
      if ("undefined" != typeof jtab) return jtab.renderimplicit(), void 0
      StackExchange.using("prettify", function() {
        StackExchange.prettify.applyCodeStyling()
      })
    }
    $(".spoiler").click(function() {
      $(this).toggleClass("spoiler")
    })
  }
})()
;(styleCode.updateLangdivDelayed = StackExchange.helpers.DelayedReaction(
  function(e) {
    var t = $("#prettify-lang")
    t.length &&
      $.get("/api/tags/langdiv", { tags: e.join(" ") }).done(function(e) {
        e ? t.replaceWith(e) : t.empty(),
          StackExchange.MarkdownEditor.refreshAllPreviews(),
          styleCode()
      })
  },
  1500,
  { sliding: !0 }
)),
  (StackExchange.helpers.MagicPopup = function(e) {
    function t(t, o) {
      if (
        $.contains(document.documentElement, t) &&
        (!e.predicate || e.predicate(t))
      ) {
        var a = $("<div />")
            .attr("id", e.id)
            .addClass(e.className)
            .html(o),
          r = $(".lightbox, .lightbox-panel"),
          s = r.length > 0 ? +r.css("z-index") : 1e3,
          c = $("<div />").css({
            position: "absolute",
            "z-index": s + 2,
            width: 1,
            height: 1,
            top: 0,
            left: 0,
          })
        e.unclipped || c.css({ overflow: "hidden" }),
          c.append(a).appendTo("body"),
          window.MathJax && MathJax.Hub.Typeset(a[0])
        var l = e.showing(t, a),
          u = { left: l.left }
        l.hasOwnProperty("bottom")
          ? ((u.bottom = l.bottom), (u.top = "auto"))
          : (u.top = 0 | l.top)
        var d
        e.shown &&
          (d = function() {
            e.shown(t, a)
          }),
          c.css(u)
        var f = { height: a.outerHeight() + 8, width: a.outerWidth() + 8 }
        e.fade
          ? c
              .css(f)
              .css("display", "none")
              .fadeIn(300, d)
          : c.animate(f, 300, d),
          (n = function() {
            c.stop().remove(),
              e.removed && e.removed(t, a),
              (i = null),
              (n = null)
          }),
          (i = StackExchange.helpers.DelayedReaction(n, e.dismissDelay || 5))
        var p = c
        l.additional && (p = p.add(l.additional)), p.hover(i.cancel, i.trigger)
      }
    }
    var n,
      o,
      i,
      a,
      r = {},
      s = StackExchange.helpers.DelayedReaction(function(o, i) {
        if (!a && o) {
          var s
          e.cache && "c_" + o in r
            ? (s = $.Deferred().resolve(r["c_" + o]))
            : ((s = $.ajax({ type: "GET", url: o, dataType: "html" })),
              e.cache &&
                s.done(function(e) {
                  r["c_" + o] = e
                })),
            s.done(function(e) {
              n && n(), "" != e && t(i, e)
            })
        }
      }, 500)
    $(document).delegate(e.selector, {
      mouseenter: function() {
        return i && this === o
          ? (i.cancel(), void 0)
          : ((o = this), s.trigger(e.getUrl(this), this), (a = !1), !1)
      },
      mouseleave: function() {
        ;(a = !0), s.cancel(), i && i.trigger()
      },
    })
  }),
  (StackExchange.tagmenu = (function() {
    function e(e) {
      return function(n) {
        var o = t(n)
        return null !== o ? o + e : o
      }
    }
    function t(e) {
      var t = $(e)
      if (
        t.closest(
          ".mixed-site-content, .post-text, .js-tag-preferences-container"
        ).length
      )
        return null
      var n = t.attr("href"),
        o = t.data("tag-menu-tagname")
      if ((o && (o = o.toString()), !(o || (n && "/" === n.charAt(0)))))
        return null
      var i = o || t.text()
      return i.indexOf("*") > -1
        ? null
        : (t.attr("title", ""), "/tags/" + encodeURIComponent(i))
    }
    function n(e, t) {
      var n = $(e),
        o = $(window),
        i = t.find(".js-source-arrow"),
        a = $(".left-sidebar:visible"),
        r = n.offset(),
        s = n.outerHeight(),
        c = r.left + n.outerWidth() / 2,
        l = t.outerWidth(),
        u = { left: c - l / 2 },
        d = r.top + s,
        f = o.scrollTop(),
        p = f + o.height() + -StackExchange.scrollPadding.getPaddingTop()
      t.outerHeight() + d > p && r.top + 8 - t.outerHeight() > f
        ? ((u.bottom = o.height() - r.top - 8), i.addClass("-bottom"))
        : ((u.top = d), i.addClass("-top"))
      var h = a.length ? a.offset().left + a.outerWidth() : 0,
        g = o.width()
      r.left + l > g && (u.left = g - l), u.left < h && (u.left = h)
      var m = c - (u.left + l / 2)
      return i.css("margin-left", m + "px"), u
    }
    var o = !1,
      i = function() {
        if (!o && ((o = !0), !StackExchange.options.isMobile)) {
          var t = {
            selector:
              ".post-tag:not(.user-tag,.no-tag-menu,.invalid-tag,.job-link)",
            className: "tag-popup",
            getUrl: e("/popup"),
            showing: n,
            fade: !0,
            unclipped: !0,
          }
          StackExchange.helpers.MagicPopup(t)
        }
      }
    return { init: i }
  })()),
  (StackExchange.usermenu = (function() {
    function e(e, t) {
      var n = $(e),
        o = n.find("img:last"),
        s = o.offset(),
        c = o.height(),
        l = o.width(),
        u = Math.max(l, c),
        d = (64 * c) / u,
        f = (64 * l) / u,
        p = t.find("img:first").css({ width: f, height: d }),
        h = p.offset()
      p.css("visibility", "hidden"),
        (i = o
          .clone()
          .css({
            position: "absolute",
            zIndex: 1003,
            left: s.left,
            top: s.top,
            width: l,
            height: c,
          })
          .appendTo("body"))
      var g = function() {
          return p[0].complete
            ? (p.css("visibility", "visible"), i.fadeOutAndRemove(), void 0)
            : (setTimeout(g, 100), void 0)
        },
        m = Math.max(
          0,
          s.left - h.left + t.outerWidth() - $(window).width() + 8
        )
      i.animate(
        { width: f, height: d, top: s.top + h.top, left: s.left - m },
        200,
        g
      ),
        t.trigger("userhovershowing", e),
        (a = !0)
      var v =
        t.find(
          ".um-header-info a:not(.um-user-link), .um-about-me a, .um-links a"
        ).length > 0
      return (
        StackExchange.gps.track("user_popup.show", { is_own: r, has_links: v }),
        setTimeout(function() {
          a &&
            StackExchange.gps.track("user_popup.read", {
              is_own: r,
              has_links: v,
            })
        }, 2e3),
        t.on("click", ".um-gravatar a, a.um-user-link", function() {
          StackExchange.gps.track("user_popup.click", {
            clicked_link: 0,
            is_own: r,
          })
        }),
        t.on("click", ".um-header-info a:not(.um-user-link)", function() {
          StackExchange.gps.track("user_popup.click", {
            clicked_link: 1,
            is_own: r,
          })
        }),
        t.on("click", ".um-about-me a", function() {
          StackExchange.gps.track("user_popup.click", {
            clicked_link: 2,
            is_own: r,
          })
        }),
        t.on("click", ".um-links a", function() {
          StackExchange.gps.track("user_popup.click", {
            clicked_link: 3,
            is_own: r,
          })
        }),
        { top: s.top, left: s.left - h.left - m, additional: i }
      )
    }
    function t(e, t) {
      t.trigger("userhovershown")
    }
    function n(e) {
      $(e).trigger("userhoverremoved"), i.remove(), (a = !1)
    }
    var o,
      i,
      a,
      r,
      s = function() {
        function i(e) {
          var t = $(e),
            n = t.closest(".user-hover"),
            o = n.find(".user-details a").attr("href"),
            i = new RegExp("/users/([^/]+).*$"),
            a = i.exec(o)
          return a
            ? ((r = StackExchange.options.user.isAnonymous
                ? !1
                : (0 | a[1]) > 0 &&
                  (0 | a[1]) == (0 | StackExchange.options.user.userId)),
              "/users/user-info/" + a[1])
            : null
        }
        o ||
          ((o = !0),
          StackExchange.options.isMobile ||
            StackExchange.helpers.MagicPopup({
              selector:
                ".user-hover .user-gravatar48, .user-hover .user-gravatar32",
              predicate: function(e) {
                return !$(e).closest(".mixed-site-content").length
              },
              getUrl: i,
              cache: !0,
              id: "user-menu",
              showing: e,
              shown: t,
              removed: n,
            }))
      }
    return { init: s }
  })()),
  (StackExchange.chatAd = (function() {
    function e(e) {
      if (
        (/^\/questions\/\d+/i.test(window.location.pathname) && (m = 0),
        (f = e.chatUrl),
        (p = e.reloadUrl),
        e.tagBased)
      ) {
        var n = t()
        if (!n) return
        p && (p += (/\?/.test(p) ? "&" : "?") + "tags=" + encodeURIComponent(n))
      }
      null === e.preloadedData ? a() : d(e.preloadedData, null, null)
    }
    function t() {
      var e = $(".question .post-taglist .post-tag")
      return e.length
        ? e
            .map(function(e, t) {
              return $(t).text()
            })
            .get()
            .join(" ")
        : null
    }
    function n(e) {
      return 10 > e ? "0" + e : e
    }
    function o(e) {
      var t = new Date()
      return (
        t.setTime(1e3 * e),
        [
          t.getUTCFullYear(),
          "-",
          n(t.getUTCMonth() + 1),
          "-",
          n(t.getUTCDate()),
          " ",
          n(t.getUTCHours()),
          ":",
          n(t.getUTCMinutes()),
          ":",
          n(t.getUTCSeconds()),
          "Z",
        ].join("")
      )
    }
    function i(e) {
      var t = Math.floor(new Date().getTime() / 1e3),
        o = t - e,
        i = o % 60,
        a = Math.floor(o / 60),
        r = Math.floor(o / 3600)
      if (1 > o) return "just now"
      if (60 > o)
        return (function(e) {
          return 1 == e.seconds
            ? e.seconds + " sec ago"
            : e.seconds + " secs ago"
        })({ seconds: i })
      if (3600 > o)
        return (function(e) {
          return 1 == e.minutes
            ? e.minutes + " min ago"
            : e.minutes + " mins ago"
        })({ minutes: a })
      if (86400 > o)
        return (function(e) {
          return 1 == e.hours ? e.hours + " hour ago" : e.hours + " hours ago"
        })({ hours: r })
      var s = Math.floor(o / 86400)
      if (1 == s) return "yesterday"
      if (2 >= s)
        return (function(e) {
          return 1 == e.__count
            ? e.__count + " day ago"
            : e.__count + " days ago"
        })({ __count: s })
      var c = new Date(1e3 * e)
      return (function(e) {
        return e.month + " " + e.date + " at " + e.hours + ":" + e.minutes
      })({
        month: v[c.getMonth()],
        date: c.getDate(),
        hours: c.getHours(),
        minutes: n(c.getMinutes()),
      })
    }
    function a() {
      p && $.get(p, null, d)
    }
    function r(e) {
      if ("!" === e.charAt(0)) {
        var t = e.substr(1)
        if (/^https?:\/\/i.stack.imgur.com\//.test(t)) {
          var n = /\?/.test(t) ? "&" : "?"
          t += n + "g&s=32"
        }
        return t
      }
      return "https://www.gravatar.com/avatar/" + e + "?s=23&d=identicon&r=PG"
    }
    function s(e) {
      for (
        var t = $('<div class="grid gs4 ai-center fw-wrap" />'), n = 0;
        n < e.length && 7 > n;
        n++
      ) {
        var o = e[n],
          a = o.name
        o.lastPost && (a += ": " + i(o.lastPost))
        var s = $('<img class="bar-sm">').attr({
            title: a,
            src: r(o.emailhash),
            width: 23,
            height: 23,
          }),
          c = $('<a class="grid--cell">')
            .attr("href", f + "/users/" + o.id)
            .append(s)
        t.append(c)
      }
      return t
    }
    function c(e) {
      return $(
        '<div class="grid--cell"><img src="' +
          f +
          "/rooms/users/" +
          e +
          '.jpeg" /></div>'
      )
    }
    function l(e) {
      var t = e.user,
        n = e.userid
      return n
        ? $("<a>")
            .attr("href", f + "/users/" + n)
            .text(t)
        : $("<span>").text(t)
    }
    function u() {
      p && (m >= h && window.setTimeout(a, 1e3 * h), (h += g))
    }
    function d(e) {
      var t = $(".js-chat-ad-rooms")
      if (e.error) return u(), void 0
      t.empty()
      for (var n = e.rooms, a = 0; a < n.length && 2 > a; a++) {
        var r = n[a],
          d = f + "/rooms/" + r.id,
          p = (r.messages || []).length > 0 ? r.messages[0] : null,
          h = $('<div class="grid fd-column gs2" />')
        $('<a class="grid--cell" />')
          .attr("href", d)
          .text(r.name)
          .appendTo(h),
          p &&
            $('<div class="grid--cell fs-fine fc-black-300 mb4" />')
              .attr("title", o(r.lastPost))
              .html(i(r.lastPost) + " - ")
              .append(l(p))
              .appendTo(h),
          r.singleImage ? h.append(c(r.id)) : h.append(s(r.users)),
          t.append($('<div class="s-sidebarwidget--item" />').append(h))
      }
      t.toggleClass("d-none", 0 === n.length)
      var g = $(".js-chat-ad-link")
      e.activeUsers > 1
        ? g.text(
            (function(e) {
              return 1 == e.num, e.num + " people chatting"
            })({ num: e.activeUsers })
          )
        : g.text("Visit chat"),
        g.attr(
          "title",
          (function(e) {
            return 1 == e.users && 1 == e.rooms
              ? e.users +
                  " user active in " +
                  e.rooms +
                  " room the last 60 minutes"
              : 1 == e.users
              ? e.users +
                " user active in " +
                e.rooms +
                " rooms the last 60 minutes"
              : 1 == e.rooms
              ? e.users +
                " users active in " +
                e.rooms +
                " room the last 60 minutes"
              : e.users +
                " users active in " +
                e.rooms +
                " rooms the last 60 minutes"
          })({ users: e.activeUsers, rooms: e.activeRooms })
        ),
        u()
    }
    var f,
      p,
      h = 180,
      g = 30,
      m = 480,
      v = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ]
    return { init: e }
  })()),
  $.extend(
    StackExchange.helpers,
    (function() {
      function e(e) {
        for (var t in o)
          o.hasOwnProperty(t) &&
            (e = e.replace(new RegExp("[" + t + "]", "g"), o[t]))
        return e
      }
      function t(e) {
        if (((e = $.trim(e)), /^\|.*\|$/.test(e))) return "|"
        var t = StackExchange.settings.tags.allowNonAsciiTags ? i : ""
        return !/\s/.test(e) &&
          RegExp("[A-Za-z" + t + "0-9#\\-.*]\\+[A-za-z" + t + "0-9#\\-.]").test(
            e
          )
          ? "+"
          : /[\s|,;]+/
      }
      function n(e, t, n, o) {
        for (
          var a = $.trim(e).split(StackExchange.helpers.tagSeparator(e)),
            r = [],
            s = 0;
          s < a.length;
          s++
        ) {
          var c = a[s]
          o || (c = c.toLowerCase()),
            StackExchange.settings.tags.allowNonAsciiTags ||
              (c = StackExchange.helpers.noDiacritics(c)),
            (c = c.replace(/_/g, "-"))
          var l =
            (o ? "[^A-Za-z0-9.#+" : "[^a-z0-9.#+") +
            (t ? "*" : "") +
            (StackExchange.settings.tags.allowNonAsciiTags ? i : "") +
            "-]"
          ;(c = c.replace(new RegExp(l, "g"), "")),
            (c = c.replace(/^[#+-]+/, "")),
            (c = c.replace(/[.-]+$/, ""))
          var u = ["or", "and", "not"],
            d = -1 !== u.indexOf(c),
            f = -1 !== r.indexOf(c)
          c.length > 0 && ((!d && !f) || n) && r.push(c)
        }
        return r
      }
      var o = {
          àåáâäãåąɐᵄᶛ: "a",
          æǣǽᴂᵆ: "ae",
          çćčĉ: "c",
          đƍðÐ: "d",
          èéêëęǝᴈᵌ: "e",
          ⅎ: "f",
          ğĝᵷ: "g",
          ĥɥʮᶣ: "h",
          ìíîïıᴉᵎ: "i",
          ĵ: "j",
          ʞ: "k",
          ł: "l",
          ɯɰᵚᶭᴟ: "m",
          ñń: "n",
          òóôõöøő: "o",
          œɶᴔ: "oe",
          řɹɺɻʴʵ: "r",
          śşšŝ: "s",
          ß: "ss",
          ʇ: "t",
          Þ: "th",
          ùúûüŭů: "u",
          ʌᶺ: "v",
          ʍ: "w",
          ýŸÿʎ: "y",
          żźž: "z",
        },
        i =
          "\\u0030-\\u0039\\u0041-\\u005a\\u005f\\u0061-\\u007a\\u00aa\\u00b5\\u00ba\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376-\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0523\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0621-\\u064a\\u0660-\\u0669\\u066e-\\u066f\\u0671-\\u06d3\\u06d5\\u06e5-\\u06e6\\u06ee-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07c0-\\u07ea\\u07f4-\\u07f5\\u07fa\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0966-\\u096f\\u0971-\\u0972\\u097b-\\u097f\\u0985-\\u098c\\u098f-\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc-\\u09dd\\u09df-\\u09e1\\u09e6-\\u09f1\\u0a05-\\u0a0a\\u0a0f-\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32-\\u0a33\\u0a35-\\u0a36\\u0a38-\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a66-\\u0a6f\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2-\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0-\\u0ae1\\u0ae6-\\u0aef\\u0b05-\\u0b0c\\u0b0f-\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32-\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c-\\u0b5d\\u0b5f-\\u0b61\\u0b66-\\u0b6f\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99-\\u0b9a\\u0b9c\\u0b9e-\\u0b9f\\u0ba3-\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0be6-\\u0bef\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58-\\u0c59\\u0c60-\\u0c61\\u0c66-\\u0c6f\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0-\\u0ce1\\u0ce6-\\u0cef\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d28\\u0d2a-\\u0d39\\u0d3d\\u0d60-\\u0d61\\u0d66-\\u0d6f\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32-\\u0e33\\u0e40-\\u0e46\\u0e50-\\u0e59\\u0e81-\\u0e82\\u0e84\\u0e87-\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa-\\u0eab\\u0ead-\\u0eb0\\u0eb2-\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0ed0-\\u0ed9\\u0edc-\\u0edd\\u0f00\\u0f20-\\u0f29\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8b\\u1000-\\u102a\\u103f-\\u1049\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065-\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u1090-\\u1099\\u10a0-\\u10c5\\u10d0-\\u10fa\\u10fc\\u1100-\\u1159\\u115f-\\u11a2\\u11a8-\\u11f9\\u1200-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u1676\\u1681-\\u169a\\u16a0-\\u16ea\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u17e0-\\u17e9\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u1900-\\u191c\\u1946-\\u196d\\u1970-\\u1974\\u1980-\\u19a9\\u19c1-\\u19c7\\u19d0-\\u19d9\\u1a00-\\u1a16\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b50-\\u1b59\\u1b83-\\u1ba0\\u1bae-\\u1bb9\\u1c00-\\u1c23\\u1c40-\\u1c49\\u1c4d-\\u1c7d\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u203f-\\u2040\\u2054\\u2071\\u207f\\u2090-\\u2094\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2183-\\u2184\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2c6f\\u2c71-\\u2c7d\\u2c80-\\u2ce4\\u2d00-\\u2d25\\u2d30-\\u2d65\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3006\\u3031-\\u3035\\u303b-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31b7\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fc3\\ua000-\\ua48c\\ua500-\\ua60c\\ua610-\\ua62b\\ua640-\\ua65f\\ua662-\\ua66e\\ua67f-\\ua697\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78c\\ua7fb-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8d0-\\ua8d9\\ua900-\\ua925\\ua930-\\ua946\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa50-\\uaa59\\uac00-\\ud7a3\\uf900-\\ufa2d\\ufa30-\\ufa6a\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40-\\ufb41\\ufb43-\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe33-\\ufe34\\ufe4d-\\ufe4f\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff10-\\uff19\\uff21-\\uff3a\\uff3f\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc"
      return { noDiacritics: e, tagSeparator: t, sanitizeAndSplitTags: n }
    })()
  ),
  (StackExchange.question = (function() {
    function e() {
      $(".js-answer-help")
        .removeClass("d-none")
        .attr("aria-hidden", "false")
    }
    function t(e) {
      e.preventDefault(),
        $(".js-answer-help")
          .addClass("d-none")
          .attr("aria-hidden", "true")
    }
    function n() {
      $("#qualityBanWarningShown").val("true"),
        $(".js-answer-ban")
          .removeClass("d-none")
          .attr("aria-hidden", "false")
    }
    function o(e) {
      e.preventDefault(),
        $(".js-answer-ban")
          .addClass("d-none")
          .attr("aria-hidden", "true")
    }
    function i() {
      var e = "hashchange.highlightDestination"
      $(window)
        .off(e)
        .on(e, function() {
          var e = window.location.href
          if (!(e.indexOf("#") < 0)) {
            var t = decodeURI(e).match(/#(\d+|comment(\d+)_(\d+))/i)
            t && (t[2] ? u(t[2], t[3]) : d(a(t[1])))
          }
        })
        .trigger(e)
    }
    function a(e) {
      return $(
        ".question[data-questionid=" + e + "], .answer[data-answerid=" + e + "]"
      )
    }
    function r(e) {
      var t = a(e)
      if (0 === t.length) return !1
      var n = t.hasClass("question") ? "#question" : "#" + e
      return (
        location.hash !== n ? (location.hash = n) : t.scrollIntoView(), d(t), !0
      )
    }
    function s(e, t) {
      var n = a(t)
      if (0 === n.length) return !1
      var o = "#comment" + e + "_" + t
      return location.hash !== o ? (location.hash = o) : u(e, t), !0
    }
    var c,
      l = function(e) {
        var t = e ? e.closest(".question") : $(".question"),
          n = t.data("questionid")
        if (!n) throw new Error("getQuestionId could not find an id")
        return n
      },
      u = function(e, t) {
        var n = "#comment-" + e,
          o = $(n)
        if (o.length)
          StackExchange.comments.flashHighlight(o), o[0].scrollIntoView(!0)
        else {
          var i = $("#comments-link-" + t)
          i.length &&
            StackExchange.comments.loadAll(i).done(function() {
              StackExchange.comments.flashHighlight(e),
                ($(n)[0] || i.closest(".question, .answer")[0]).scrollIntoView(
                  !0
                )
            })
        }
      },
      d = function(e) {
        e.addClass("highlighted-post")
      },
      f = function() {
        var e = "click.shareLinks"
        $(document)
          .off(e)
          .on(e, ".bottom-share-links a", function() {
            var e = $(this).attr("href"),
              t = null
            e &&
              e.length &&
              (e.indexOf("%3fsgp%3d") >= 0
                ? (t = 1)
                : e.indexOf("%3fsfb%3d") >= 0
                ? (t = 2)
                : e.indexOf("%3fstw%3d") >= 0
                ? (t = 3)
                : e.indexOf("%3fsem%3d") >= 0 && (t = 4)),
              t &&
                StackExchange.gps.track(
                  "share.click",
                  { location: 3, service: t },
                  !0
                )
          })
        var t = $(".bottom-notice")
        t &&
          t.length &&
          t.data("loc") &&
          t.off(e).on(e, "a", function() {
            var e = 0,
              n = t.data("loc"),
              o = $(this).attr("href")
            $(this).hasClass("post-tag")
              ? (e = 1)
              : /\/ask$/.test(o)
              ? (e = 2)
              : /\/tags$/.test(o)
              ? (e = 4)
              : /\/unanswered$/.test(o)
              ? (e = 5)
              : (/\/questions$/.test(o) || /\/questions[?\/]/.test(o)) &&
                (e = 3),
              StackExchange.gps.track(
                "next_action.click",
                { type: e, location: n },
                !0
              )
          })
      },
      p = function(e, t, n) {
        var o,
          i,
          a = document.title,
          r = n.searchRouteOverride || "/search/titles",
          s = n.onResults || function() {},
          c = 0
        e.attr("autocomplete", "off")
        var l = function(l) {
            var u = e.val()
            if (
              !(
                "" == u ||
                (u == o && l !== !0) ||
                (StackExchange.settings.site.newTitleSearchBoxEnabled &&
                  $(".title-float-selected:visible").length > 0)
              )
            ) {
              for (var d = u.split(" "), f = 0, p = 0; p < d.length; p++)
                $.trim(d[p]).length > 0 && f++
              var h = new Date().getTime(),
                g = (h - c) / 1e3
              ;(l === !0 ||
                !(3 > f || 5 > g) ||
                e.hasClass("edit-field-overlayed")) &&
                ((c = h),
                (o = u),
                n.siteName && (document.title = u ? u + " - " + n.siteName : a),
                $(".js-similar-questions-loader").length
                  ? (t.empty(),
                    StackExchange.helpers.addStacksSpinner(
                      t,
                      "lg",
                      "fc-orange-400 ml16 mt12"
                    ))
                  : (t.empty(), StackExchange.helpers.addSpinner(t)),
                i && i.fadeOutAndRemove(),
                $.ajax({
                  url: r,
                  dataType: "json",
                  data: { title: u },
                  success: function(e) {
                    e && e.content
                      ? (t.html(e.content),
                        setTimeout(function() {
                          s(t.find(".answer-link a").attr("target", "_blank"))
                        }, 1),
                        $(".js-link").attr("target", "_blank"),
                        $(".js-similar-questions-outer-div").length &&
                          ($(".js-similar-questions-outer-div").removeClass(
                            "d-none"
                          ),
                          $(".js-question-summary-scroll").one(
                            "scroll",
                            function() {
                              StackExchange.using("gps", function() {
                                StackExchange.gps.track(
                                  "similarquestions.title_scroll"
                                )
                              })
                            }
                          )))
                      : s(null)
                  },
                  complete: function(e) {
                    e.responseJSON.content.length > 0 &&
                      StackExchange.helpers.removeSpinner(t)
                  },
                }))
            }
          },
          u = !1
        return (
          t
            .mouseenter(function() {
              u = !0
            })
            .mouseleave(function() {
              u = !1
            }),
          e.keyup(l).blur(function() {
            var e = function() {
              ;(c = 0), l()
            }
            u ? t.one("mouseleave", e) : e()
          }),
          e.val() && l(),
          function(e) {
            ;(c = 0), l(e)
          }
        )
      },
      h = function() {
        try {
          localStorage.removeItem("nextPrevTrackState"),
            localStorage.removeItem("nextPrevTrackState2"),
            localStorage.removeItem("nextPrevState")
        } catch (e) {}
      },
      g = function() {
        var e, t
        $(document).on(
          {
            mouseenter: function() {
              var n = $(this),
                o = n.find(".js-new-contributor-label"),
                i = n.find(".js-new-contributor-popover")
              t && this === e
                ? t.cancel()
                : (i
                    .addClass("is-visible")
                    .css({
                      top: n.height() + 4,
                      left: o.position().left + o.width() / 2 - n.width() / 2,
                      width: n.width(),
                    }),
                  (e = this),
                  (t = StackExchange.helpers.DelayedReaction(function() {
                    i.removeClass("is-visible"), (t = null)
                  }, 100)))
            },
            mouseleave: function() {
              t && t.trigger()
            },
          },
          ".js-new-contributor-indicator"
        )
      },
      m = function() {
        var e = window.location.hash.replace("#", "").toLowerCase()
        if (e) {
          var t = e.split("_"),
            n = t[0],
            o = t[1],
            i = !0
          switch (n) {
            case "answer":
              StackExchange.using("editor", function() {
                var e = $("#wmd-input")
                e.is(":visible")
                  ? e.focus()
                  : window.setTimeout(function() {
                      $(".js-add-another-answer").click()
                    }, 10)
              })
              break
            case "addcomment":
              o &&
                $("#comments-link-" + o)
                  .find(".js-add-link")
                  .click()
              break
            case "notify":
              $(".js-inline-mentions-edit-link").click()
              break
            default:
              i = !1
          }
          i &&
            window.history.replaceState(
              null,
              null,
              window.location.href.split("#")[0]
            )
        }
      }
    return {
      initTitleSearch: p,
      getQuestionId: l,
      initShareLinks: f,
      canViewVoteCounts: function() {
        return c
      },
      scrollToPost: r,
      scrollToComment: s,
      instrumentVotingForVotePromptExperiment: function() {
        $(".js-voting-container").each(function(e, t) {
          var n = $(t),
            o = +n.data("post-id"),
            i = n.find(".js-vote-up-btn"),
            a = n.find(".js-vote-down-btn")
          i
            .attr(
              "data-gps-track",
              "post.prompted_vote({post_id:" + o + ", vote_type: 2})"
            )
            .addClass("js-gps-track"),
            a
              .attr(
                "data-gps-track",
                "post.prompted_vote({post_id:" + o + ", vote_type: 3})"
              )
              .addClass("js-gps-track"),
            StackExchange.using("gps", function() {
              StackExchange.gps.bindTrackClicks(n)
            })
        })
      },
      initCollectionWidget: function(e) {
        var t = $("#sidebar")
        t.on("click", ".js-fetch-add-to-collection-modal", function(t) {
          var n = $(t.target)
          n.hasClass("is-loading") ||
            (n.addClass("is-loading"),
            StackExchange.helpers
              .loadModal(
                "/questions/collections/modal-add-to-collection?questionId=" + e
              )
              .always(function() {
                n.removeClass("is-loading")
              }))
        }),
          t.on("click", ".js-collections-widget--show-all", function(e) {
            $(e.target)
              .add(".js-widget-collection.d-none")
              .toggleClass("d-none")
          })
      },
      init: function(a) {
        ;(c = a.canViewVoteCounts),
          StackExchange.question.fullInit
            ? StackExchange.question.fullInit(a)
            : StackExchange.question.bindAnonymousVoteDisclaimers(),
          StackExchange.comments.init({
            autoShowCommentHelp: a.autoShowCommentHelp,
            commentHighlightFocus: a.commentHighlightFocus,
          }),
          f(),
          a.showAnswerBanWarning && $("#wmd-input").one("focus", n),
          $(".js-answer-ban-close-btn").on("click", o),
          a.showAnswerHelp &&
            !a.showAnswerBanWarning &&
            $("#wmd-input").one("focus", e),
          $(".js-answer-help-close-btn").on("click", t),
          a.focusPostEditor &&
            ($("#wmd-input").focus(), $("#post-form")[0].scrollIntoView(!0)),
          a.showCitation &&
            $(document).on("click", "div .cite-link", function() {
              citation.show($(this))
            }),
          i(),
          h(),
          g(),
          window.setTimeout(m, 0)
      },
    }
  })()),
  (StackExchange.question.bindAnonymousVoteDisclaimers = function() {
    function e(e) {
      var t = $(this),
        n = t.closest(".js-voting-container"),
        o = t.hasClass("js-vote-up-btn"),
        i = t.hasClass("js-vote-down-btn"),
        a = t.hasClass("js-bookmark-btn"),
        r = t.hasClass("js-follow-post"),
        s = t.closest(".answer").length
      if ((e.preventDefault(), o || i || r)) {
        if (StackExchange.options.inReadOnly)
          return (
            n.showErrorMessage("Voting isn't available in read-only mode.", {
              transient: !0,
            }),
            void 0
          )
        var c = n.data("post-id")
        if (r) {
          var l = t.closest(".question").length > 0
          ;(s = !l),
            (c = parseInt(
              l
                ? t.closest(".question").data("questionid")
                : t.closest(".answer").data("answerid")
            ))
        }
        var u = r ? 21 : o ? 2 : 3
        if (n.is(":working")) return
        n.working(!0),
          StackExchange.helpers.removeMessages(),
          (o || i) &&
            StackExchange.using("gps", function() {
              StackExchange.gps.track("vote_popup.show", { type: s ? 2 : 1 })
            }),
          $.ajax({
            type: "POST",
            url: "/posts/popup/anon-vote/{postId}?voteTypeId={voteTypeId}".formatUnicorn(
              { postId: c, voteTypeId: u }
            ),
            data: { fkey: StackExchange.options.user.fkey },
            dataType: "html",
            success: function(e) {
              StackExchange.openid.showLoginModal(e, { returnElements: t })
            },
            complete: function() {
              n.working(!1)
            },
          })
      } else if (a) {
        if (StackExchange.options.inReadOnly)
          return (
            n.showErrorMessage(
              "Bookmarking is disabled while the site is in read-only mode.",
              { transient: !0 }
            ),
            void 0
          )
        $(".anon-vote-popup").fadeOutAndRemove()
        var d = (function(e) {
          return (
            "Please " +
            e.startAnchor +
            "log in or register" +
            e.endAnchor +
            " to bookmark this question."
          )
        })({
          startAnchor:
            '<a href="/users/login?ssrc=bookmark_question&returnurl=' +
            escape(document.location) +
            '">',
          endAnchor: "</a>",
        })
        StackExchange.using("gps", function() {
          StackExchange.gps.track("favorite_popup.show", {})
        }),
          StackExchange.helpers.showMessage(t, d, {
            type: "info",
            position: { my: "left top", at: "right center" },
            css: { "margin-left": "-10px" },
          })
      }
    }
    $(
      ".js-vote-down-btn, .js-vote-up-btn, .js-bookmark-btn:not(.disabled), .js-follow-post:not(.disabled)"
    ).each(function() {
      var t = $(this)
      t.data("bound-anonymous") || (t.data("bound-anonymous", !0), t.click(e))
    }),
      StackExchange.question.bindFetchAcceptedAnswerDates()
  }),
  (StackExchange.question.bindFetchAcceptedAnswerDates = function() {
    $(".js-accepted-answer-indicator").on(
      "mouseenter mouseleave focus",
      function() {
        var e = $(this)
        if (!e.is(":working")) {
          e.working(!0)
          var t = e.closest(".answer").data("answerid")
          if (!t) return e.removeAttr("title data-controller"), void 0
          var n = "/posts/" + t + "/accepted-answer-date"
          $.get(n, function(t) {
            e.setTooltipHtml(t)
          })
        }
      }
    )
  }),
  (StackExchange.comments = (function() {
    function e(e, t, n) {
      ;(this.postId = e),
        (this.jPost = t.closest(
          ".question, .answer, div[id^='post-'], .js-article"
        )),
        (this.jDiv = t),
        (this.jCommentsList = t.find(".js-comments-list")),
        (this.jCommentsLinkContainer = $("#comments-link-" + e)),
        (this.context = n)
    }
    function t(e) {
      "string" == typeof e && (e = $("#comment-" + e)),
        e.addClass("comment__highlight"),
        setTimeout(function() {
          e.removeClass("comment__highlight new_comment")
        }, 0)
    }
    function n(e) {
      var t = $("#comments-" + e)
      if (t.length) {
        var n = o(t),
          i = n.jCommentsLinkContainer,
          a = (n.jCommentsList, n.remainingCommentsCount())
        a++,
          i.data("comments-count", a),
          i.attr(
            "title",
            "expand to show all comments on this post, or add one of your own"
          ),
          n.setCommentsMenu(a),
          i.removeClass("disabled-link"),
          n.remainingCommentsCount(a),
          i
            .show()
            .fadeTo("fast", 0.7)
            .fadeTo("fast", 1)
      }
    }
    function o(t) {
      var n = t.constructor === $ ? t : $(t),
        o = n.closest(".js-comments-container")
      0 === o.length &&
        (o = n
          .closest(".question, .answer, div[id^='post-'], .js-article")
          .find(".js-comments-container"))
      var i = o.data("post-id"),
        a = o.data("comment-context") || "none",
        r = i + "-" + a
      if (d[r]) return d[r]
      var s = new e(i, o, a)
      return (d[r] = s), s
    }
    function i(e) {
      return 0 === window.location.pathname.indexOf("/review")
        ? 0
        : e.closest(".question").length
        ? 1
        : e.closest(".answer").length
        ? 2
        : 0
    }
    function a(e) {
      e.preventDefault()
      var t = $(this),
        n = o(t),
        i = 0 === n.remainingCommentsCount(),
        a = t.hasClass("disabled-link"),
        s = n.jCommentsLinkContainer.data("rep")
      i &&
        n.jCommentsLinkContainer.data("anon") &&
        (StackExchange.options.isMobile
          ? StackExchange.helpers.showMessage(
              n.jCommentsLinkContainer,
              (function(e) {
                return (
                  1 == e.rep,
                  "Commenting requires an account with " + e.rep + " reputation"
                )
              })({ rep: s }),
              {
                type: "info",
                position: { my: "left top", at: "right center" },
                relativeToBody: !0,
              }
            )
          : r(n.postId, t)),
        i &&
          n.jCommentsLinkContainer.data("reg") &&
          StackExchange.helpers.showMessage(
            t,
            (function(e) {
              return (
                1 == e.rep,
                "You must have " +
                  e.linkStart +
                  e.rep +
                  " reputation" +
                  e.linkEnd +
                  " to comment"
              )
            })({
              rep: s,
              linkStart: "<a href='/help/privileges/comment'>",
              linkEnd: "</a>",
            }),
            {
              type: "info",
              position: { my: "left top", at: "right center" },
              relativeToBody: !0,
            }
          ),
        t.hasClass("js-show-link") &&
          StackExchange.using("gps", function() {
            StackExchange.gps.track("comment.show")
          })
      var c = !1
      if (t.hasClass("js-add-link")) {
        c = !0
        var l = "other"
        n.jPost.hasClass("question")
          ? (l = "question")
          : n.jPost.hasClass("answer") && (l = "answer")
        var u = i ? "all_shown" : "hidden"
        StackExchange.using("gps", function() {
          StackExchange.gps.track("comment.add", { location: l, type: u })
        })
      }
      a || (e.preventDefault(), n.addShow(!1, c))
    }
    function r(e, t) {
      t.is(":working") ||
        (t.working(!0),
        StackExchange.helpers.removeMessages(),
        StackExchange.using("gps", function() {
          StackExchange.gps.track("comment_popup.show", { type: i(t) })
        }),
        $.ajax({
          type: "POST",
          url: "/posts/popup/anon-comment/{postId}".formatUnicorn({
            postId: e,
          }),
          data: { fkey: StackExchange.options.user.fkey },
          dataType: "html",
          success: function(e) {
            StackExchange.openid.showLoginModal(e, { returnElements: t })
          },
          complete: function() {
            t.working(!1)
          },
        }))
    }
    function s(e) {
      var t = (e && e.post) || document
      ;(d = {}),
        $(t)
          .off("click", "a.js-add-link", a)
          .on("click", "a.js-add-link", a),
        $(t)
          .off("click", "a.js-show-link", a)
          .on("click", "a.js-show-link", a),
        t == document && l(),
        c(null, !0),
        e && e.commentHighlightFocus && (u = e.commentHighlightFocus)
    }
    function c(t, n) {
      n || (p = t), (t = t || p || {})
      for (var o in t) t.hasOwnProperty(o) && (e.prototype[o] = t[o])
    }
    function l() {
      if (0 != $(".question[data-questionid]").length) {
        var e = StackExchange.question.getQuestionId()
        $(".js-comment .comment-date > span").each(function() {
          var t = $(this),
            n = t.closest(".answer"),
            o = n && n.length ? n.data("answerid") : 0,
            i = t
              .closest(".js-comment")
              .attr("id")
              .substr("comment-".length),
            a = o ? o : e,
            r = "#comment" + i + "_" + a
          location.href.indexOf("/questions/") > 0
            ? t.wrap(
                '<a class="comment-link" href="{hash}"></a>'.formatUnicorn({
                  hash: r,
                })
              )
            : t.wrap(
                '<a class="comment-link" href="/q/{pid}/{hash}"></a>'.formatUnicorn(
                  { hash: r, pid: a }
                )
              )
        })
      }
    }
    var u,
      d = {},
      f = function() {}
    e.prototype = {
      checkDiscussion: f,
      ensureInput: f,
      renderTextInput: f,
      alterAddEditDataBeforeSubmit: f,
      saveEditingComments: f,
      restoreEditingComments: f,
      isInputShown: function() {
        var e = this.jDiv.find('form[id^="add-comment-"]')
        return e.children().length && e.is(":visible")
      },
      commentsShown: function() {
        this.remainingCommentsCount(0)
      },
      remainingCommentsCount: function(e) {
        return "undefined" == typeof e
          ? parseInt(this.jCommentsList.data("remaining-comments-count")) || 0
          : (this.jCommentsList.data("remaining-comments-count", e), void 0)
      },
      addShow: function(e, t) {
        var n = this,
          o = this.loadAllComments().done(function() {
            n.checkDiscussion()
          })
        if (t) {
          var i = this.ensureInput()
          i && !e && i.focus()
        }
        o.done(function() {
          i && i.length > 0 && n.jCommentsLinkContainer.hide()
        })
      },
      ajax: function(e, t, n, o) {
        n &&
          !o &&
          StackExchange.helpers.addSpinner(n, { "margin-left": "10px" })
        var i = this
        return $.ajax(e)
          .fail(function(e) {
            var a = e.responseText
            ;(!a || a.indexOf("<html") >= 0) && (a = t || "An error occured"),
              StackExchange.helpers.showErrorMessage(n || i.jDiv, a, {
                transient: 409 == e.status,
              }),
              n && !o && StackExchange.helpers.removeSpinner()
          })
          .done(StackExchange.helpers.removeSpinner)
          .promise()
      },
      setCommentsMenu: function(e) {
        var t = "",
          n = ""
        e > 0 &&
          (n = (function(e) {
            return 1 == e.count
              ? "show <b>" + e.count + "</b> more comment"
              : "show <b>" + e.count + "</b> more comments"
          })({ count: e })),
          this.isInputShown() ||
            (!this.jCommentsList.data("cansee") &&
              !this.jCommentsList.data("canpost")) ||
            (t = StackExchange.settings.comments
              .addButtonSaysSuggestImprovements
              ? "suggest improvements"
              : "add a comment"),
          t.length ||
            n ||
            !this.jCommentsList.data("comments-unavailable") ||
            (t = "comments disabled on deleted / locked posts / reviews"),
          StackExchange.options.inReadOnly && (t = "")
        var o = this.jCommentsLinkContainer.find(".js-add-link"),
          i = this.jCommentsLinkContainer.find(".js-show-link")
        o.html(t),
          i.html(n),
          t.length ? o.removeClass("dno") : o.addClass("dno"),
          n.length ? i.removeClass("dno") : i.addClass("dno"),
          t.length && n.length
            ? this.jCommentsLinkContainer
                .find(".js-link-separator")
                .removeClass("dno")
            : this.jCommentsLinkContainer
                .find(".js-link-separator")
                .addClass("dno"),
          this.jCommentsList.data("addlink-disabled") &&
            o.addClass("disabled-link")
      },
      clearHighlights: function() {
        this.jCommentsList
          .find(".js-comment")
          .removeClass("new_comment")
          .css("background-color", "")
      },
      showComments: function(e, n, o, i) {
        this.saveEditingComments(n)
        var a = !o,
          r = {}
        if (
          (this.clearHighlights(),
          a &&
            this.jCommentsList.find(".js-comment").each(function(e, t) {
              t.id && t.id.length && (r[t.id] = !0)
            }),
          this.jCommentsList.empty().append(e),
          a)
        ) {
          var s = null
          this.jCommentsList.find(".js-comment").each(function(e, t) {
            t.id &&
              t.id.length &&
              !r[t.id] &&
              (s || (s = t), $(t).addClass("new_comment"))
          })
          var c = this.jCommentsList.find(".new_comment")
          t(c), u && c.length && !i && c[0].scrollIntoView(!0)
        }
        this.restoreEditingComments(),
          this.setCommentsMenu(0),
          "undefined" != typeof MathJax &&
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]),
          l(),
          this.commentsShown()
      },
      loadAllComments: function(e, t, n, o) {
        this.jDiv.removeClass("dno")
        var i = 0 === this.remainingCommentsCount()
        if (!e && i)
          return $.Deferred()
            .resolve()
            .promise()
        var a = this
        return this.ajax(
          {
            type: "GET",
            url: "/posts/" + this.postId + "/comments" + (t || ""),
            dataType: "html",
          },
          "An error occurred while fetching comments"
        )
          .done(function(e) {
            a.showComments(e, null, n, o)
          })
          .promise()
      },
    }
    var p
    return {
      init: s,
      loadAll: function(e, t) {
        return o(e).loadAllComments(!0, t, !0, !0)
      },
      replaceAll: function(e, t) {
        o(e).showComments(t, null, !0, !0)
      },
      realtimeMessage: n,
      flashHighlight: t,
      extendPostUi: c,
      uiForPost: o,
    }
  })()),
  (StackExchange.share = (function() {
    function e(e, t, n) {
      window.open(e, t, n) || (window.location.href = e)
    }
    function t(e, t, n) {
      ;(n = "undefined" != typeof n ? n : "1"), (t += "=" + n)
      var o = e.indexOf("?"),
        i = e.indexOf("#")
      return -1 == o
        ? -1 == i
          ? e + "?" + t
          : e.substring(0, i) + "?" + t + e.substring(i)
        : -1 == i
        ? e + "&" + t
        : e.substring(0, i) + "&" + t + e.substring(i)
    }
    return {
      twitter: function(n, o, i, a) {
        o = t(o, "stw", a)
        var r = 257
        i.length > r && (i = i.substring(0, r - 3) + "..."),
          n.click(function() {
            e(
              "https://twitter.com/share?url=" +
                encodeURIComponent(o) +
                "&ref=twitbtn&text=" +
                encodeURIComponent(i),
              "sharetwitter",
              "toolbar=1,status=1,resizable=1,scrollbars=1,width=800,height=526"
            )
          })
      },
      facebook: function(n, o, i, a) {
        ;(o = t(o, "sfb", a)),
          n.click(function() {
            e(
              "https://www.facebook.com/sharer.php?u=" +
                encodeURIComponent(o) +
                "&ref=fbshare&t=" +
                encodeURIComponent(i),
              "sharefacebook",
              "toolbar=1,status=1,resizable=1,scrollbars=1,width=626,height=436"
            )
          })
      },
      devTo: function(n, o, i, a) {
        var r, s
        ;(r = (s = o.match(
          /^.*:\/\/stackoverflow\.com\/[qa]\/(\d+)(?:\/\d+)?$/
        ))
          ? "{% stackoverflow {postId} %}".formatUnicorn({ postId: s[1] })
          : (s = o.match(
              /^.*:\/\/([a-z]*(?:\.meta)?\.stackoverflow)\.com\/[qa]\/(\d+)(?:\/\d+)?$/
            ))
          ? "{% stackexchange {postId} {host} %}".formatUnicorn({
              postId: s[2],
              host: s[1],
            })
          : (s = o.match(
              /^.*:\/\/(([a-z0-9]*(?:\.meta)?)\.stackexchange\.com)\/[qa]\/(\d+)(?:\/\d+)?$/
            ))
          ? "{% stackexchange {postId} {host} %}".formatUnicorn({
              postId: s[3],
              host: s[2] || s[1],
            })
          : (s = o.match(
              /^.*:\/\/((?:meta\.)?[a-z0-9]*)\.(?:com|net|org)\/[qa]\/(\d+)(?:\/\d+)?$/
            ))
          ? "{% stackexchange {postId} {host} %}".formatUnicorn({
              postId: s[2],
              host: s[1],
            })
          : t(o, "sdv", a)),
          n.click(function() {
            e(
              "https://dev.to/new?prefill=---%0Atitle%3A%20{title}%0Apublished%3A%20true%0A---%0A%0A{body}".formatUnicorn(
                { title: encodeURIComponent(i), body: encodeURIComponent(r) }
              ),
              "sharedev",
              "toolbar=1,status=1,resizable=1,scrollbars=1,width=800,height=526"
            )
          })
      },
    }
  })()),
  (StackExchange.newsletterAd = (function() {
    function e(e) {
      var t = $(
        '<div class="popup newsletter-popup lightbox-panel" style="display:block"></div>'
      )
        .append(
          $("<div />", { class: "popup-close" }).append("<a>&times;</a>", {
            title: "close this popup (or hit Esc)",
          })
        )
        .append(e)
      $("body").loadPopup({ lightbox: !0, html: t, target: $("body") })
    }
    function t(t) {
      $("#newsletter-signup").click(function() {
        var e = $(this)
        StackExchange.helpers.addSpinner("#newsletter-signup-container"),
          $.ajax({
            url: t.subscribeUrl.replace(
              /-1/,
              StackExchange.options.user.userId
            ),
            type: "POST",
            dataType: "json",
            data: {
              fkey: StackExchange.options.user.fkey,
              siteId: StackExchange.options.site.id,
            },
            success: function(t) {
              t.url
                ? (window.location.href = t.url)
                : "confirmed" == t.status
                ? $("#newsletter-signup-container").replaceWith(
                    '<div style="line-height: 200%; text-align: center;"><strong>Subscribed!</strong></div>'
                  )
                : "unconfirmed" == t.status
                ? $("#newsletter-signup-container").replaceWith(
                    '<span style="line-height: 120%;"><strong>Success!</strong> Please click the link in the confirmation email to activate your subscription.</span>'
                  )
                : e.parent().showErrorMessage(
                    (function(e) {
                      return (
                        "there was a problem signing up for the newsletter" +
                        e.br +
                        "please try again later"
                      )
                    })({ br: "<br />" })
                  )
            },
            error: function() {
              e.parent().showErrorMessage(
                (function(e) {
                  return (
                    "there was a problem signing up for the newsletter" +
                    e.br +
                    "please try again later"
                  )
                })({ br: "<br />" })
              )
            },
            complete: function() {
              StackExchange.helpers.removeSpinner(
                "#newsletter-signup-container"
              )
            },
          })
      }),
        $("#newsletter-preview").click(function() {
          var t = $(window).height(),
            n = Math.min(600, t - 100),
            o = [
              '<div id="newsleter-preview-pane" style="overflow: hidden; width: 660px; height: ',
              n,
              'px;">',
              '<iframe src="',
              $(this).attr("href"),
              '" width="660" height="',
              n,
              '" frameborder="0"></iframe>',
              "</div>",
            ].join("")
          return e(o), !1
        })
    }
    return { init: t }
  })()),
  (function(e, t, n, o) {
    var i = !("selectionStart" in e("<input type='text' />")[0])
    e.fn.caret = function(e, a) {
      var r,
        s,
        c = this[0]
      if (
        "object" == typeof e &&
        "number" == typeof e.start &&
        "number" == typeof e.end
      )
        (r = e.start), (s = e.end)
      else if ("number" == typeof e && "number" == typeof a) (r = e), (s = a)
      else if ("string" == typeof e)
        (r = c.value.indexOf(e)) > -1 ? (s = r + e[t]) : (r = null)
      else if ("[object RegExp]" === Object.prototype.toString.call(e)) {
        var l = e.exec(c.value)
        null != l && ((r = l.index), (s = r + l[0][t]))
      }
      if ("undefined" != typeof r) {
        if (i) {
          var u = this[0].createTextRange()
          u.collapse(!0),
            u.moveStart("character", r),
            u.moveEnd("character", s - r),
            u.select()
        } else (this[0].selectionStart = r), (this[0].selectionEnd = s)
        return this[0].focus(), this
      }
      if (i) {
        var d = document.selection
        if ("textarea" != this[0].tagName.toLowerCase()) {
          var f = this.val(),
            p = d[n]()[o]()
          p.moveEnd("character", f[t])
          var h = "" == p.text ? f[t] : f.lastIndexOf(p.text)
          ;(p = d[n]()[o]()), p.moveStart("character", -f[t])
          var g = p.text[t]
        } else {
          var p = d[n](),
            m = p[o]()
          m.moveToElementText(this[0]), m.setEndPoint("EndToEnd", p)
          var h = m.text[t] - p.text[t],
            g = h + p.text[t]
        }
      } else
        var h = c.selectionStart,
          g = c.selectionEnd
      var v = c.value.substring(h, g)
      return {
        start: h,
        end: g,
        text: v,
        replace: function(e) {
          return c.value.substring(0, h) + e + c.value.substring(g, c.value[t])
        },
      }
    }
  })(jQuery, "length", "createRange", "duplicate"),
  (StackExchange.nocaptcha = (function() {
    function e(e, n) {
      var o = [
        '<div class="popup captcha-popup lightbox-panel" style="display: block; text-align: left;">',
        '<div class="popup-close">',
        $("<a>", { title: "close this popup (or hit Esc)", text: "×" }).prop(
          "outerHTML"
        ),
        "</div>",
        e,
        "</div>",
      ].join("")
      $("body").loadPopup({
        target: $("body"),
        html: o,
        lightbox: !0,
        loaded: function(e) {
          t(e, n)
        },
      })
    }
    function t(e, t) {
      var n = e.find("form:first")
      StackExchange.helpers.enableSubmitButton(n),
        n.submit(function() {
          return (
            StackExchange.helpers.disableSubmitButton(n),
            n.find('input[type="submit"]').addSpinnerAfter(),
            $.ajax({
              url: "/nocaptcha",
              type: "POST",
              dataType: "json",
              data: n.serialize(),
              success: function(o) {
                o.captchaError
                  ? (StackExchange.helpers.removeSpinner(),
                    StackExchange.helpers.enableSubmitButton(n),
                    n.find(".form-error").html(o.captchaError),
                    Recaptcha.reload())
                  : (e.find(".popup-close a").click(), t(o))
              },
              error: function() {
                StackExchange.helpers.removeSpinner(),
                  StackExchange.helpers.enableSubmitButton(n),
                  StackExchange.helpers.showErrorMessage(
                    n,
                    "An error occurred submitting the CAPTCHA"
                  )
              },
            }),
            !1
          )
        })
    }
    return { init: e }
  })()),
  (StackExchange.gps = (function() {
    function e(e) {
      return m
        ? !0
        : ((m = !0),
          e && t()
            ? ((StackExchange.gps.sendPending = r),
              (StackExchange.gps.track = s),
              l(),
              r(),
              n(
                ".tagged-questions-page, .questions-page, .tags-page",
                ".js-gps-related-tags .post-tag",
                "related_tags.click",
                ", item_type:1"
              ),
              n(
                ".question-page",
                ".js-gps-related-questions .spacer",
                "related_questions.click"
              ),
              n(
                ".question-page .post-taglist",
                ".post-tag",
                "question_tags.click",
                ", location:1"
              ),
              n(
                ".question-page #sidebar .tagged",
                ".post-tag",
                "question_tags.click",
                ", location:2"
              ),
              o(),
              !0)
            : ((StackExchange.gps.track = function(e, t, n, o) {
                o && o()
              }),
              delete StackExchange._gps_track,
              !1))
    }
    function t() {
      if (!window.localStorage) return !1
      try {
        if (
          ((window.localStorage["gps-probe"] = "1"),
          "1" != window.localStorage["gps-probe"])
        )
          return !1
        window.localStorage.removeItem("gps-probe")
      } catch (e) {
        return !1
      }
      return !0
    }
    function n(e, t, n, o) {
      $(e)
        .find(t)
        .each(function(e) {
          $(this)
            .addClass("js-gps-track")
            .data("gps-track", n + "({ position:" + (e + 1) + o + " })")
        })
    }
    function o(e) {
      var t = $(e || document)
        .find(".js-gps-track")
        .off("click.gps")
        .one("click.gps", function() {
          var e = $.trim($(this).data("gps-track"))
          if (e)
            for (var t = i(e), n = 0; n < t.length; n++) {
              var o = t[n]
              StackExchange.gps.track(o[0], o[1], !0)
            }
        })
      h("bindTrackClicks bound {0} elements in {1}", t.length, e || "document")
    }
    function i(e) {
      function t(e) {
        if ("true" === e) return !0
        if ("false" === e) return !1
        if ("'" === e[0] || '"' === e[0]) return e.substring(1, e.length - 1)
        var t = parseFloat(e)
        return isNaN(t) ? e : t
      }
      for (
        var n = [], o = e.match(/([a-z._-]+)(\([^)]+\))?/gi), i = 0;
        i < o.length;
        i++
      ) {
        var a = o[i]
        if (a.indexOf("{") < 0) n.push([a, {}])
        else {
          for (
            var r = a.match(/([a-z._-]+)\s*\(\s*\{([^}]+)\}\s*\)/i) || [],
              s = r[1],
              c = $.trim(r[2]) || "",
              l = c.match(/[^,]+/gi) || [],
              u = {},
              d = 0;
            d < l.length;
            d++
          ) {
            var f = l[d],
              p = f.indexOf(":"),
              h = $.trim(f.substr(0, p)),
              g = $.trim(f.substr(p + 1)),
              m = t(g)
            u[h] = m
          }
          n.push([s, u])
        }
      }
      return n
    }
    function a(e, t) {
      $(e).on(
        "click",
        t + " a[href]:not(.question-hyperlink, .answer-hyperlink)",
        function() {
          var e = $(this),
            t = e.attr("href")
          StackExchange.helpers.isInNetwork(t) ||
            ("undefined" == typeof ga
              ? h("outbound link clicked " + t)
              : ga("send", "event", "outbound", "click", t, { useBeacon: !0 }))
        }
      )
    }
    function r(e) {
      var t = u()
      if (t.length > 0) {
        for (
          var n = new Date().getTime(), o = [], i = 0;
          i < t.length && o.length < 20;
          i++
        ) {
          var a = t[i],
            r = n - a.now
          0 > r || r > 36e5 ? f(a) : o.push(a)
        }
        o.length > 0 ? p(o, e) : e && e()
      }
    }
    function s(e, t, n, o) {
      var i = { evt: e, properties: t || {}, now: new Date().getTime() }
      d(i),
        navigator && navigator.sendBeacon && (n = !1),
        n ? (o && o(), window.setTimeout(r, 1e4)) : r(o)
    }
    function c(e) {
      e &&
        StackExchange.options &&
        StackExchange.options.user &&
        (e.properties &&
          !e.properties.user_type &&
          (e.properties.user_type = StackExchange.options.user.user_type),
        !e.ab &&
          StackExchange.options.user.ab &&
          (e.ab = StackExchange.options.user.ab))
    }
    function l() {
      StackExchange._gps_track &&
        ($.each(StackExchange._gps_track, function(e, t) {
          d(t)
        }),
        delete StackExchange._gps_track)
    }
    function u() {
      var e = localStorage[g]
      return e ? JSON.parse(e) : []
    }
    function d(e) {
      c(e)
      var t,
        n = localStorage[g]
      if (n) {
        var o = JSON.parse(n)
        o.push(e), (t = JSON.stringify(o))
      } else t = JSON.stringify([e])
      h("addToPending " + JSON.stringify(e)), (localStorage[g] = t)
    }
    function f(e) {
      var t = localStorage[g]
      if (t) {
        for (
          var n = JSON.parse(t), o = JSON.stringify(e), i = -1, a = 0;
          a < n.length;
          a++
        ) {
          var r = JSON.stringify(n[a])
          if (o == r) {
            i = a
            break
          }
        }
        if (-1 != i)
          return (
            n.splice(i, 1),
            0 == n.length
              ? (localStorage.removeItem(g), void 0)
              : ((localStorage[g] = JSON.stringify(n)), void 0)
          )
      }
    }
    function p(e, t) {
      $.isArray(e) || (e = [e])
      for (var n = 0; n < e.length; n++) {
        var o = JSON.stringify(e[n])
        v[o] && (e.splice(n, 1), n--)
      }
      for (var n = 0; n < e.length; n++) {
        var o = JSON.stringify(e[n])
        v[o] = !0
      }
      var i = JSON.stringify(e)
      if (navigator && navigator.sendBeacon)
        try {
          h("sending (beacon): " + i)
          var a = "/gps/event"
          if (
            (StackExchange &&
              StackExchange.options &&
              StackExchange.options.site &&
              StackExchange.options.site.routePrefix &&
              StackExchange.options.site.routePrefix.length &&
              (a = StackExchange.options.site.routePrefix + a),
            navigator && navigator.sendBeacon(a, i))
          ) {
            for (var n = 0; n < e.length; n++) {
              f(e[n])
              var o = JSON.stringify(e[n])
              delete v[o]
            }
            return t && t(), void 0
          }
        } catch (r) {
          h(r)
        }
      h("sending (AJAX): " + i),
        $.ajax({
          type: "POST",
          url: "/gps/event",
          data: { data: i },
          success: function() {
            for (var t = 0; t < e.length; t++) f(e[t])
          },
          complete: function() {
            for (var n = 0; n < e.length; n++) {
              var o = JSON.stringify(e[n])
              delete v[o]
            }
            t && t()
          },
        })
    }
    function h(e) {
      if (
        ((StackExchange.options && StackExchange.options.enableLogging) ||
          $.cookie("devlog")) &&
        "string" == typeof e
      ) {
        if (arguments.length > 1) {
          var t = Array.prototype.slice.call(arguments, 1)
          e = String.prototype.formatUnicorn.apply(e, t)
        }
        console.log("gps: " + e)
      }
    }
    var g = "gps-pending",
      m = !1,
      v = {},
      b = StackExchange.gps.track,
      y = StackExchange.gps.sendPending
    return {
      init: e,
      bindTrackClicks: o,
      track: b,
      sendPending: y,
      trackOutboundClicks: a,
    }
  })()),
  (StackExchange.openid = (function() {
    function e(e, t) {
      return e ? (t && $(e).data("ssrc", t), $(e).data("ssrc")) : u
    }
    function t(t, n) {
      var o = e(n)
      t &&
        (StackExchange.gps.track(
          "openid.click",
          { openid_provider: t, location: o },
          !0
        ),
        StackExchange.gps.track(
          "signup.openid.click",
          { openid_provider: t, location: o },
          !0
        )),
        StackExchange.gps.track(
          "signup.start",
          {
            openid_provider: t,
            location: o,
            tid: StackExchange.options.user.tid,
          },
          !0
        )
    }
    function n(n, o, i) {
      var u = decodeURIComponent(o),
        d = "unknown"
      i && i.length
        ? (d = i)
        : (0 === u.indexOf("/questions/") && (d = "question_page"),
          "/questions/ask" === u && (d = "question_ask"))
      var f = $(n)
      e(f, d), f.removeClass("dno")
      var p = f.find(".google-login")
      p.click(function() {
        t("Google", f), r(f)
      })
      var h = f.find(".facebook-login")
      h.click(function() {
        t("Facebook", f), a(f)
      })
      var g = f.find(".github-login")
      g.click(function() {
        t("GitHub", f), s(f)
      })
      var m = f.find(".stackexchange-login")
      m.click(
        c(function() {
          t("Stack Exchange", f),
            StackExchange.navPrevention.stop(),
            (window.location =
              "/users/signup?ssrc=" +
              encodeURIComponent(d) +
              "&returnUrl=" +
              encodeURIComponent(u))
        })
      ),
        f.find(".js-submit-openid").click(function() {
          l(f, u)
        })
    }
    function o() {
      d ||
        ((d = !0),
        Stacks.addController("signup-modal", {
          targets: ["form", "oauthVersion", "oauthServer"],
          connect: function() {
            var e = $(this.element)
            StackExchange.gps.bindTrackClicks(e),
              StackExchange.ga.bindHandlers(e)
          },
          signUp: function(e) {
            e.preventDefault(),
              (this.oauthServerTarget.value = e.currentTarget.getAttribute(
                "data-oauthserver"
              )),
              (this.oauthVersionTarget.value =
                e.currentTarget.getAttribute("data-oauthversion") || "2.0"),
              c(
                function() {
                  this.formTarget.submit()
                }.bind(this)
              )()
          },
          linkClick: function(e) {
            e.preventDefault()
            var t = e.currentTarget.href
            c(function() {
              StackExchange.navPrevention.stop(), (window.location = t)
            })()
          },
        }))
    }
    function i() {
      return (
        o(),
        StackExchange.helpers.showModal.apply(StackExchange.helpers, arguments)
      )
    }
    function a(t) {
      t.find(".ssrc").val(e(t)),
        t.find(".use-facebook").val("true"),
        t.find(".use-google").val(""),
        t.find(".use-github").val(""),
        t.find(".js-submit-openid").click()
    }
    function r(t) {
      t.find(".ssrc").val(e(t)),
        t.find(".use-google").val("true"),
        t.find(".use-facebook").val(""),
        t.find(".use-github").val(""),
        t.find(".js-submit-openid").click()
    }
    function s(t) {
      t.find(".ssrc").val(e(t)),
        t.find(".use-google").val(""),
        t.find(".use-facebook").val(""),
        t.find(".use-github").val("true"),
        t.find(".js-submit-openid").click()
    }
    function c(e) {
      return function() {
        StackExchange.using("editor", function() {
          StackExchange.cardiologist.ensureDraftSaved(e)
        })
      }
    }
    function l(t, n) {
      var o = t.find(".use-facebook").val(),
        i = t.find(".use-google").val(),
        a = t.find(".use-github").val()
      c(function() {
        var r = !!StackExchange.options.site.isChildMeta,
          s =
            (r ? StackExchange.options.site.parentUrl : "") +
            "/users/signup?returnurl=" +
            encodeURIComponent(n),
          c = $('<form method="post" action="' + s + '"></form>'),
          l = $('<input type="hidden" name="oauth_version" />'),
          u = $('<input type="hidden" name="oauth_server" />')
        c.append(l),
          c.append(u),
          l.val("2.0"),
          o
            ? u.val("https://www.facebook.com/v2.0/dialog/oauth")
            : i
            ? u.val("https://accounts.google.com/o/oauth2/auth")
            : a && u.val("https://github.com/login/oauth/authorize"),
          c.append(
            "<input type='hidden' name='fkey' value='" +
              StackExchange.options.user.fkey +
              "' />"
          ),
          $('<input type="hidden" name="ssrc" />')
            .val(e(t))
            .appendTo(c),
          StackExchange.navPrevention.stop(),
          c
            .hide()
            .appendTo("body")
            .submit()
      })()
    }
    var u = "unknown",
      d = !1
    return { initPostLogin: n, showLoginModal: i }
  })())
var UniversalAuth = (function() {
  var e = 1,
    t = 200,
    n = 1e4,
    o = 5 * n,
    i = !1
  return {
    redirectOnCompletion: function(e, a) {
      if (i) return window.location.replace(e), void 0
      var r,
        s = 0,
        c = function() {
          if (i) return window.location.replace(e), clearInterval(r), void 0
          var c = n > s,
            l = o > s
          s += t
          var u = s >= n,
            d = s >= o,
            f = c && u
          f && a && a()
          var p = l && d
          p && clearInterval(r)
        }
      r = setInterval(c, t)
    },
    performAuth: function() {
      if (UniversalAuth.enabled()) {
        var t = $.cookie("uauth")
        null !== t &&
          ($.post(
            "/users/login/universal/request",
            function(t) {
              var n = [],
                o = function() {
                  var e = null !== $.cookie("uauth")
                  if (!e && n) {
                    for (var t = 0; t < n.length; t++) {
                      var o = n[t],
                        a = o[0]
                      if (!a.complete) return
                    }
                    i = !0
                  }
                }
              $.each(t, function(t, i) {
                var a =
                  "//" +
                  i.Host +
                  "/users/login/universal.gif?authToken=" +
                  encodeURIComponent(i.Token) +
                  "&nonce=" +
                  encodeURIComponent(i.Nonce)
                $(document).ready(function() {
                  var t = $("<img/>").attr({
                    style: "display:none",
                    src: a,
                    crossOrigin: "use-credentials",
                  })
                  n.push(t),
                    t.one("load", function() {
                      var i = t[0].width,
                        a = t[0].height
                      if (2 === i && 2 === a && e > 0) {
                        e--
                        var r = $.cookie("uauth")
                        if (!r) {
                          var s = new Date(),
                            c = new Date(s.getTime() + 3e5)
                          $.cookie("uauth", "true", {
                            path: "/",
                            domain: document.domain,
                            expires: c,
                          }),
                            (n = null),
                            setTimeout(function() {
                              UniversalAuth.performAuth()
                            }, 10)
                        }
                      }
                      o()
                    }),
                    $("#footer").append(t)
                })
              })
            },
            "json"
          ),
          $.cookie("uauth", null, { path: "/", domain: document.domain }))
      }
    },
    enabled: function() {
      return !0
    },
  }
})()
StackExchange.ready(function() {
  function e() {
    try {
      $.cookie("fkey", StackExchange.options.user.fkey, {
        path: "/",
        expires: 1 / 144,
      })
    } catch (e) {}
  }
  if (StackExchange.options.user.isAnonymous) {
    var t = /\bfkey=/i
    $(document).ajaxSend(function(n, o, i) {
      "post" === i.type.toLowerCase() &&
        (t.test(i.url) || t.test(i.data)) &&
        e()
    }),
      $(document).on("submit", "form", function() {
        var t = $(this)
        "post" === (t.attr("method") || "").toLowerCase() &&
          t.find("input[name='fkey']").length &&
          e()
      })
  }
}),
  (StackExchange.loadJqueryUi = function() {
    var cssLink = StackExchange.settings.paths.jQueryUICSSPathOverride,
      jsLink = StackExchange.settings.paths.jQueryUIJSPathOverride
    if (
      (cssLink ||
        (cssLink =
          "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/themes/smoothness/jquery-ui.css"),
      jsLink ||
        (jsLink =
          "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"),
      $.ui)
    )
      return $.Deferred().resolve()
    $("<link>")
      .attr({
        href: cssLink,
        rel: "stylesheet",
        type: "text/css",
        media: "all",
      })
      .appendTo("head")
    var result = $.Deferred(),
      locale = StackExchange.options.locale,
      datepickerLanguageGetter,
      datepickerLanguageScript
    return (
      $.ajaxSetup({ cache: !0 }),
      "en" !== locale &&
        (datepickerLanguageGetter = $.ajax({
          url: "/Content/Js/third-party/jquery-ui/datepicker-" + locale + ".js",
          dataType: "text",
          type: "GET",
        }).done(function(e) {
          datepickerLanguageScript = e
        })),
      $.when(
        datepickerLanguageGetter || $.Deferred().resolve(),
        $.getScript(jsLink)
      ).done(function() {
        eval(datepickerLanguageScript), result.resolve()
      }),
      $.ajaxSetup({ cache: !1 }),
      result.promise()
    )
  }),
  (StackExchange.patchJqueryUiForTouch = function() {
    !(function(e) {
      "function" == typeof define && define.amd
        ? define(["jquery", "jquery.ui"], e)
        : e(jQuery)
    })(function(e) {
      function t(e) {
        return {
          x: e.originalEvent.changedTouches[0].pageX,
          y: e.originalEvent.changedTouches[0].pageY,
        }
      }
      function n(e, t) {
        if (!(e.originalEvent.touches.length > 1)) {
          e.cancelable && e.preventDefault()
          var n = e.originalEvent.changedTouches[0],
            o = document.createEvent("MouseEvents")
          o.initMouseEvent(
            t,
            !0,
            !0,
            window,
            1,
            n.screenX,
            n.screenY,
            n.clientX,
            n.clientY,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          ),
            e.target.dispatchEvent(o)
        }
      }
      if (
        ((e.support.touch =
          "ontouchstart" in document ||
          "ontouchstart" in window ||
          window.TouchEvent ||
          (window.DocumentTouch && document instanceof DocumentTouch) ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0),
        e.support.touch && e.ui.mouse)
      ) {
        var o,
          i = e.ui.mouse.prototype,
          a = i._mouseInit,
          r = i._mouseDestroy
        ;(i._touchStart = function(e) {
          var i = this
          ;(this._startedMove = e.timeStamp),
            (i._startPos = t(e)),
            !o &&
              i._mouseCapture(e.originalEvent.changedTouches[0]) &&
              ((o = !0),
              (i._touchMoved = !1),
              n(e, "mouseover"),
              n(e, "mousemove"),
              n(e, "mousedown"))
        }),
          (i._touchMove = function(e) {
            o && ((this._touchMoved = !0), n(e, "mousemove"))
          }),
          (i._touchEnd = function(e) {
            if (o) {
              n(e, "mouseup"), n(e, "mouseout")
              var i = e.timeStamp - this._startedMove
              if (!this._touchMoved || 500 > i) n(e, "click")
              else {
                var a = t(e)
                Math.abs(a.x - this._startPos.x) < 10 &&
                  Math.abs(a.y - this._startPos.y) < 10 &&
                  ((this._touchMoved &&
                    "stylus" !== e.originalEvent.changedTouches[0].touchType) ||
                    n(e, "click"))
              }
              ;(this._touchMoved = !1), (o = !1)
            }
          }),
          (i._mouseInit = function() {
            var t = this
            t.element.on({
              touchstart: e.proxy(t, "_touchStart"),
              touchmove: e.proxy(t, "_touchMove"),
              touchend: e.proxy(t, "_touchEnd"),
            }),
              a.call(t)
          }),
          (i._mouseDestroy = function() {
            var t = this
            t.element.off({
              touchstart: e.proxy(t, "_touchStart"),
              touchmove: e.proxy(t, "_touchMove"),
              touchend: e.proxy(t, "_touchEnd"),
            }),
              r.call(t)
          })
      }
    })
  }),
  (StackExchange.processTimings = (function() {
    function e(e, t) {
      var n = {}
      t = t || e.name || !1
      for (var o in e)
        if ("toJSON" !== o && "entryType" !== o)
          if (t) {
            if ("subresources" === o) continue
            var i = Math.round(e[o])
            n[o] = i ? i : e[o]
          } else
            0 !== e[o] && (n[o] = 0 === e[o] ? null : e[o] - e.navigationStart)
      return n
    }
    function t() {
      if (
        StackExchange.options.timingsGuid &&
        window.performance &&
        window.performance.timing &&
        window.performance.getEntriesByType
      ) {
        var t = [],
          n = [],
          o = !1,
          i = function(i) {
            for (var a = 0; a < n.length; a++) n[a].cancel()
            if (!o) {
              o = !0
              var r = $.extend(e(window.performance.timing, !1), {
                  guid: StackExchange.options.timingsGuid,
                  Info: StackExchange.options.timingsInfo,
                  fkey: StackExchange.options.user.fkey,
                  subresources: t.map(function(t) {
                    return e(t, !0)
                  }),
                }),
                s = JSON.stringify(r)
              if (
                navigator &&
                navigator.sendBeacon &&
                -1 === location.search.indexOf("__debug=1")
              )
                try {
                  var c = "/_/client-timings"
                  StackExchange.options.site &&
                    StackExchange.options.site.routePrefix &&
                    StackExchange.options.site.routePrefix.length &&
                    (c = StackExchange.options.site.routePrefix + c)
                  var l = new Blob([s], { type: "application/json" })
                  if (navigator && navigator.sendBeacon(c, l)) return
                } catch (u) {}
              i ||
                $.ajax({
                  url: "/_/client-timings",
                  type: "POST",
                  contentType: "application/json; charset=utf-8",
                  data: s,
                })
            }
          },
          a = StackExchange.helpers.DelayedReaction(
            i,
            StackExchange.settings.monitoring.clientTimingsDebounceTimeout,
            { sliding: !0 }
          )
        n.push(a)
        var r = StackExchange.helpers.DelayedReaction(
          i,
          StackExchange.settings.monitoring.clientTimingsAbsoluteTimeout
        )
        r.trigger(), n.push(r)
        var s = {},
          c = window.setInterval(function() {
            for (
              var e = window.performance.getEntriesByType("resource"),
                n = !1,
                o = 0;
              o < e.length;
              o++
            )
              if (!s[o]) {
                var i = e[o]
                t.push(i), (n = !0), (s[o] = !0)
              }
            n && a.trigger()
          }, 50)
        n.push({
          cancel: function() {
            c && (window.clearInterval(c), (c = null))
          },
        }),
          (window.performance.onresourcetimingbufferfull = function() {
            window.performance.clearResourceTimings(), (s = {})
          }),
          $(window).unload(function() {
            i(!0)
          })
      }
    }
    return t
  })()),
  (StackExchange.showFlashMessageIfAny = function() {
    var e = "flash-message-json",
      t = $.cookie(e)
    if (t)
      try {
        $.cookie(e, null, { path: "/", domain: document.domain })
        var n = decodeURIComponent(t.replace(/[+]/g, " ")),
          o = JSON.parse(n)
        if (
          (StackExchange.options.enableLogging &&
            console.log("flash message: showing " + n),
          StackExchange.options.isMobile)
        )
          return (
            StackExchange.helpers.showMobileMessage(o.message, o.type), void 0
          )
        switch (o.position) {
          case "toast":
            StackExchange.helpers.showToast(o.message, {
              type: o.type,
              transient: o.transient,
              transientTimeout: o.transientTimeout,
            })
            break
          case "notice":
            StackExchange.helpers.showStacksNotice(o.message, o.type)
            break
          default:
            StackExchange.helpers.showBannerMessage(o.message, o.type)
        }
      } catch (i) {}
  }),
  (StackExchange.prepareEditor = function(e) {
    var t = e.postfix || "",
      n = function() {
        setTimeout(function() {
          StackExchange.editor.initIfShown(e)
        }, 1)
      }
    if (!e.onDemand) return StackExchange.using("editor", n), void 0
    for (
      var o = "bold-button italic-button spacer1 link-button quote-button code-button image-button spacer2 olist-button ulist-button heading-button hr-button spacer3 undo-button redo-button".split(
          " "
        ),
        i = $(
          '<ul id="wmd-button-row' + t + '" class="wmd-button-row" />'
        ).appendTo(".wmd-button-bar"),
        a = 0,
        r = 0;
      r < o.length;
      r++
    ) {
      var s = o[r],
        c = /spacer/.test(s),
        l = $("<li id='wmd-" + s + t + "' />")
          .prop("className", "wmd-" + (c ? "spacer" : "button"))
          .css("left", 25 * r)
          .appendTo(i)
      $("<span />")
        .css("background-position", a + "px -20px")
        .appendTo(l),
        c || (a -= 20)
    }
    var u = document.createElement("li")
    ;(u.className = "wmd-spacer wmd-spacer-max"), i.append(u)
    var d = !1
    $(
      "#wmd-input, #title, #tagnames, #edit-comment, #m-address, #display-name"
    ).one("focus click keydown", function() {
      if (!d) {
        d = !0
        var t = function() {
          i.remove(),
            e.autoShowMarkdownHelp && (e.immediatelyShowMarkdownHelp = !0),
            n()
        }
        i.addSpinner({ float: "right" }), StackExchange.using("editor", t)
      }
    })
  }),
  (StackExchange.Auth = (function() {
    var e = function(e, t) {
        for (var n = !1, o = 0; o < e.length; o++)
          if (e[o].id == t.id) {
            ;(t.changed = e[o].message == t.message),
              (e[o].message = t.message),
              (n = !0)
            break
          }
        n ||
          ((t.changed = !0),
          t.index >= e.length ? e.push(t) : e.splice(t.index, 0, t))
      },
      t = function(t, n, o) {
        var i = 15,
          a = 8,
          r = t.val(),
          s = /[a-z]/.test(r),
          c = /[A-Z]/.test(r),
          l = /\d/.test(r),
          u = /(_|[^\w\d])/.test(r),
          d = 0
        if ((s && d++, c && d++, l && d++, u && d++, 2 === d && r.length >= i))
          return o(n, "pw-weak", t), o(n, "pw-short", t), void 0
        var f = $(
          "<span><p>" +
            (function(e) {
              return (
                "Please add one of the following things to make your password stronger:" +
                e.pEnd +
                " " +
                e.listStart +
                " " +
                e.char +
                " letters " +
                e.itemEnd +
                " " +
                e.num +
                " numbers " +
                e.itemEnd +
                " " +
                e.listEnd
              )
            })({
              pEnd: "</p>",
              listStart: "<ul>",
              listEnd: "</ul>",
              itemEnd: "</li>",
              char: '<li id="ch">',
              num: '<li id="num">',
            }) +
            "</span>"
        )
        ;(s || c) && l
          ? o(n, "pw-weak", t)
          : 3 > d
          ? ((s || c) && f.find("#ch").remove(),
            l && f.find("#num").remove(),
            e(n, { id: "pw-weak", index: 1, attachTo: t, message: f }))
          : o(n, "pw-weak", t)
        var p = t.val().length
        if (a > p) {
          var h = a - p
          e(n, {
            id: "pw-short",
            index: 2,
            attachTo: t,
            message: (function(e) {
              return 1 == e.remaining
                ? "Must contain at least " + e.remaining + " more character."
                : "Must contain at least " + e.remaining + " more characters."
            })({ remaining: h }),
          })
        } else o(n, "pw-short", t)
      }
    return { addOrUpdateError: e, passwordStrengthValidation: t }
  })()),
  (StackExchange.Hero = (function() {
    var e = { name: null, version: null },
      t = function() {
        var t = "hero-dismissed",
          o = { ld: "", d: [] },
          i = $.cookie(t)
        if (i) {
          var a = i.split("!")
          a.shift(), (o.d = a)
        }
        o.ld = new Date().getTime()
        var r = e.name + "_" + e.version,
          s = !0
        for (var c in o.d)
          if (o.d.hasOwnProperty(c)) {
            var l = o.d[c],
              u = l.split("_")
            if (u === e.name) {
              ;(o.d[c] = r), (s = !1)
              break
            }
          }
        s && o.d.push(r), $.cookie(t, n(o), { path: "/", expires: 365 })
      },
      n = function(e) {
        return [e.ld].concat(e.d).join("!")
      },
      o = function(t, n) {
        ;(e.name = t), (e.version = n)
      }
    return { init: o, dismiss: t }
  })()),
  (StackExchange.checklist = (function() {
    function e(e, t, n) {
      return $.post(e, {
        fkey: StackExchange.options.user.fkey,
        preference: t,
        hideCompletedOrDismiss: n,
      })
    }
    $(document).on("click", ".js-toggle-completed-requirements", function(t) {
      var n = $(t.target),
        o = n.closest(".js-checklist"),
        i = n.hasClass("is-visible"),
        a = n.data("preference"),
        r = n.data("url")
      e(r, a, i).always(function() {
        o
          .find(".js-requirement.is-finished")
          .closest("li")
          .toggleClass("dno"),
          n
            .toggleClass("is-visible is-hidden")
            .text(i ? "Show all items" : "Hide completed items")
      })
    })
  })()),
  (StackExchange.responsiveness = StackExchange.responsiveness || {}),
  (function() {
    StackExchange.responsiveness.addSwitcher = function() {
      var e = !!$.cookie("no-responsiveness")
      $('<li class="-item"><a class="-link" role="button" /></a></li>')
        .find("a")
        .text(e ? "Enable Responsiveness" : "Disable Responsiveness")
        .click(function() {
          $.cookie(
            "no-responsiveness",
            e ? null : "1",
            e ? { path: "/" } : { path: "/", expires: 180 }
          ),
            location.reload(!0)
        })
        .end()
        .appendTo(".js-primary-footer-links")
    }
  })(),
  (StackExchange.userQuestionList = (function() {
    function e(e) {
      var t = e.split(/[\s|,;]+/).filter(function(e) {
        return e.length > 0
      })
      t = r(t.join(" ")).split(" ")
      for (var n = t.length - 2; n >= 0; n--)
        "not" === t[n] && t.splice(n, 2, "-" + t[n + 1])
      return t.join(" ")
    }
    function t(e, t) {
      var n = function(t, n) {
          return t.test(e[n])
        },
        o = function(e) {
          return n(/^not$/i, e) ? y : n(/^and$/i, e) ? v : n(/^or$/i, e) ? b : m
        }
      if (0 === t) return ["and", "or"]
      var i = [],
        a = o(t - 1)
      a === y ? i.push("and", "or", "not") : a !== m && i.push("and", "or")
      for (var r = t - 1; r >= 0; r--) {
        var s = o(r)
        if (s === b) break
        s === m && i.push(e[r])
      }
      return i
    }
    function n(e, t) {
      var n = e.map(function() {
          return !0
        }),
        o = function(t, n) {
          return t.test(e[n])
        },
        i = function(e) {
          return o(/^not$/i, e) ? y : o(/^and$/i, e) ? v : o(/^or$/i, e) ? b : m
        },
        a = function(t, o) {
          for (var a = [], r = [], s = -1, c = t; o >= c; c++)
            switch (i(c)) {
              case b:
                ;(a = []), (r = []), (s = -1)
                break
              case v:
                s = -1
                break
              case y:
                s = c
                break
              case m:
                var l = e[c],
                  u = -1 !== s ? r : a
                ;-1 === u.indexOf(l)
                  ? u.push(l)
                  : ((n[c] = !1), -1 !== s && (n[s] = !1)),
                  (s = -1)
            }
        },
        r = function(e, t) {
          for (var o = m, a = t, r = t; r >= e; r--)
            if (n[r]) {
              var s = i(r)
              if (o !== m) {
                if (s === y) {
                  n[r] = !1
                  continue
                }
                if (s === v && (o === v || o === b)) {
                  n[r] = !1
                  continue
                }
                s !== b || (o !== v && o !== b) || (n[a] = !1)
              }
              ;(o = s), (a = r)
            }
        }
      a(0, t - 1), a(t, e.length - 1), r(0, t - 1), r(t, e.length - 1)
      var s
      for (s = 0; t > s && o(g, s); s++) n[s] = !1
      for (s = e.length - 1; s >= t && o(h, s); s--) n[s] = !1
      return n
    }
    function o(e) {
      for (
        var t = e.split(StackExchange.helpers.tagSeparator(e)),
          n = t.length - 1;
        n >= 0;
        n--
      ) {
        var o = t[n]
        ;/^-[^-]/.test(o) &&
          (t.splice(n + 1, 0, o.substring(1)), (t[n] = "not"))
      }
      return (
        StackExchange.helpers.sanitizeAndSplitTags(t.join(" "), !0, !0) || []
      )
    }
    function i(e) {
      var t = o(e)
      return t.length > 1 && "not" === t[0] ? "-" + t[1] : t[0]
    }
    function a(e) {
      var t = /^-/.test(e)
      return $.get(
        "/filter/tags",
        { q: e.replace(/^-/, ""), newstyle: !0 },
        "json"
      ).then(function(n) {
        var o = Math.max(n.length, 6)
        return (
          t &&
            n.forEach(function(e) {
              e.Negated = !0
            }),
          ["not", "or", "and"].forEach(function(t) {
            ;(0 === e.length || -1 !== t.indexOf(e)) && n.unshift({ Name: t })
          }),
          n.length > o ? n.slice(0, o) : n
        )
      })
    }
    function r(e) {
      var t,
        i = o(e || "")
      return (
        i.length > 0 &&
          ((t = n(i, 0)),
          (i = i.filter(function(e, n) {
            return t[n]
          }))),
        i.length > 0 &&
          ((t = n(i, i.length)),
          (i = i.filter(function(e, n) {
            return t[n]
          }))),
        i.join(" ")
      )
    }
    function s(e) {
      var t = ""
      switch (e.tagModeId) {
        case "Watched":
          t = ""
          break
        default:
          t = encodeURIComponent(e.tagQuery)
      }
      var n = []
      e.sortId.length > 0 && n.push("sort=" + e.sortId),
        e.filterIds.length > 0 && n.push("filters=" + e.filterIds),
        "Specified" !== e.tagModeId && n.push("tagMode=" + e.tagModeId),
        e.uqlId && n.push("uqlId=" + e.uqlId),
        n.push("edited=true")
      var o =
          "Watched" === e.tagModeId
            ? "/questions/tagged"
            : t
            ? "/questions/tagged/" + t
            : "/questions",
        i = StackExchange.options.site.routePrefix || ""
      return window.location.origin + i + o + "?" + n.join("&")
    }
    function c(e, t, n, o, i) {
      o.prop("disabled", !0),
        $.ajax({
          type: "POST",
          url: e,
          data: $.extend({}, t, {
            fkey: StackExchange.options.user.fkey,
            name: n,
          }),
          dataType: "json",
          success: function(e) {
            if (e.Success)
              i
                ? i(e)
                : e.RedirectUrl
                ? (location.href = e.RedirectUrl)
                : e.Message &&
                  StackExchange.helpers.showToast(e.Message, {
                    type: "info",
                    transient: !0,
                  })
            else {
              var t = e.Message || "An error occurred during save."
              if ($(".js-modal-container").hasClass("d-none"))
                StackExchange.helpers.showToast(t, {
                  type: "danger",
                  transient: !0,
                })
              else {
                var n = StackExchange.stacksValidation.handlerFor(
                  $("#uql-name-field")
                )
                n.add("error", t)
              }
            }
          },
          error: function(e) {
            var t =
              e.responseText && e.responseText.length < 100
                ? e.responseText
                : "An error occurred during save."
            if ($(".js-modal-container").hasClass("d-none"))
              StackExchange.helpers.showToast(t, {
                type: "danger",
                transient: 409 === e.status,
              })
            else {
              var n = StackExchange.stacksValidation.handlerFor(
                $("#uql-name-field")
              )
              n.add("error", t)
            }
          },
          complete: function() {
            o.prop("disabled", !1)
          },
        })
    }
    function l(e, t, n, o) {
      confirm(
        (function(e) {
          return 'Are you sure you want to delete "' + e.name + '"?'
        })({ name: t })
      ) && c("/questions/user-lists/" + e + "/delete", {}, null, n, o)
    }
    function u(e, r) {
      StackExchange.using("tagEditor", function() {
        StackExchange.tagEditor(e, null, null, {
          excerpts: !1,
          columns: 1,
          operators: h,
          customFilterTags: n,
          customSafeTags: o,
          customExistingTags: t,
          sanitizeSearchTerm: i,
          getDataPromise: a,
          useStacksClasses: !0,
        }),
          e
            .next(".tag-editor")
            .on("change", function() {
              r.prop("checked", !0)
            })
            .on("keypress", function(e) {
              0 !== e.which && r.prop("checked", !0)
            })
            .on("click", ".js-delete-tag", function() {
              r.prop("checked", !0)
            })
      })
    }
    function d() {
      Stacks.addController("se-uql", {
        targets: [
          "tagQuery",
          "name",
          "toggleMoreButton",
          "morePopover",
          "toggleFormButton",
          "form",
          "saveButton",
          "saveTemplate",
          "applyButton",
        ],
        resetForm: function() {
          this.formTarget.reset()
          var e = this.tagQueryTarget
          if (e.func_clear) {
            var t = r(e.value)
            e.func_clear(), t.split(/ +/).forEach(e.func_add, e)
          }
        },
        showSaveModal: function(e) {
          e.preventDefault()
          var t = $($(this.saveTemplateTarget).text())
          t.data("passed-data", this.readForm()),
            StackExchange.helpers.showModal(t, {
              returnElements: $(e.currentTarget),
            })
        },
        toggleEditor: function() {
          $(this.toggleFormButtonTarget)
            .click()
            .focus()
        },
        cancelEditor: function() {
          this.resetForm(),
            $(this.formTarget).hasClass("is-expanded") &&
              $(this.toggleFormButtonTarget).click()
        },
        readForm: function() {
          function t(e) {
            return $(n[e]).filter(":checked")
          }
          var n = this.formTarget.elements,
            o = t("sortId").val() || "",
            i = t("filterId")
              .map(function() {
                return this.value
              })
              .get()
              .join(","),
            a = t("tagModeId").val() || "Specified",
            r = "Specified" === a ? e(this.tagQueryTarget.value || "") : "",
            s = $(n.uqlId).val()
          return { sortId: o, filterIds: i, tagModeId: a, tagQuery: r, id: s }
        },
        navigate: function(e) {
          e.preventDefault()
          var t = this.readForm()
          t.uqlId = this.data.get("id")
          var n = t.tagQuery.trim()
          if ("true" === this.data.get("sanitize-tag-query") && n.length > 0) {
            var o = $(this.applyButtonTarget)
            o.addClass("is-loading"),
              $.ajax({
                type: "POST",
                url: "/questions/sanitize-tag-query",
                data: { fkey: StackExchange.options.user.fkey, tagQuery: n },
                dataType: "json",
                success: function(e) {
                  ;(t.tagQuery = e.TagQuery), (location.href = s(t))
                },
                error: function(e) {
                  var t =
                    e.responseText && e.responseText.length < 100
                      ? e.responseText
                      : "An error occurred processing the tag query."
                  StackExchange.helpers.showToast(t, {
                    type: "danger",
                    transient: 409 === e.status,
                  })
                },
                complete: function() {
                  o.removeClass("is-loading")
                },
              })
          } else location.href = s(t)
        },
        connect: function() {
          var e = $(this.tagQueryTarget)
          e.attr("value", o(e.val()).join(" "))
          var t = $(this.formTarget.elements.tagModeId).filter(
            "[value=Specified]"
          )
          u(e, t)
        },
      })
    }
    function f() {
      Stacks.addController("se-uql-save", {
        targets: ["name", "saveButton"],
        validateName: function(e, t) {
          var n = StackExchange.stacksValidation.handlerFor($(this.nameTarget))
          if (!n) return !0
          if (e && !n.hasType("error")) return !0
          n.clear("error")
          var o = this.nameTarget.value.trim()
          return (
            t || "" !== o || n.add("error", "Title is missing."),
            o.length > 32 &&
              n.add(
                "error",
                (function(e) {
                  return 1 == e.count
                    ? "Title is " + e.count + " character too long."
                    : "Title is " + e.count + " characters too long."
                })({ count: o.length - 32 })
              ),
            "en" !== StackExchange.options.locale ||
              /^[ -~]*$/.test(o) ||
              n.add("error", "Please only include ASCII characters."),
            !n.hasType("error")
          )
        },
        liveValidate: function() {
          this.validateName(!0, !0)
        },
        updateExisting: function(e) {
          if ((e.preventDefault(), this.validateName())) {
            var t = $(this.element).data("passed-data")
            c(
              "/questions/user-lists/" + t.id + "/update",
              t,
              this.nameTarget.value.trim(),
              $(this.saveButtonTargets)
            )
          }
        },
        createNew: function(e) {
          if ((e.preventDefault(), this.validateName())) {
            var t = $(this.element).data("passed-data")
            c(
              "/questions/user-lists/create",
              t,
              this.nameTarget.value.trim(),
              $(this.saveButtonTargets)
            )
          }
        },
      })
    }
    function p() {
      Stacks.addController("se-uql-list", {
        targets: ["item"],
        getParentItem: function(e) {
          return $(this.itemTargets)
            .has(e)
            .get(0)
        },
        deleteCurrent: function(e) {
          var t = e.currentTarget,
            n = this.getParentItem(t)
          l(
            this.getElementData(n, "id"),
            this.getElementData(n, "name"),
            $(t),
            function() {
              location.reload()
            }
          )
        },
        editCurrent: function(e) {
          e.preventDefault(), this.triggerEvent("edit-current-requested")
        },
      })
    }
    var h = /^(?:and|or|not)$/i,
      g = /^(?:and|or)$/i,
      m = 0,
      v = 1,
      b = 2,
      y = 3,
      w = function(e) {
        d(),
          f(),
          p(),
          e.sharingUrl &&
            history.replaceState &&
            history.replaceState(
              {},
              document.title,
              e.sharingUrl + location.hash
            )
      }
    return { init: w }
  })()),
  (StackExchange.stacksValidation = (function() {
    function e(e) {
      var n = e.data("stacks-validation-handler")
      return (
        n || ((n = new t(e)), e.data("stacks-validation-handler", n)),
        n.invalid ? null : n
      )
    }
    function t(e) {
      return (
        (this.hideIcons = !1),
        (this.$input = e),
        (this.$container = e.closest(".js-stacks-validation")),
        this.$container.length
          ? ((this.$message = this.$container.find(
              ".js-stacks-validation-message"
            )),
            (this.messages = []),
            void 0)
          : ((this.invalid = !0), void 0)
      )
    }
    function n(e) {
      return e.html
    }
    function o(e) {
      return e.type
    }
    t.prototype = {
      _updateMessages: function() {
        if (
          (this.$message.empty().toggleClass("d-none", !this.messages.length),
          this.messages.length)
        ) {
          var e
          ;(e =
            1 === this.messages.length
              ? this.messages[0].html
              : "<ul><li>" +
                this.messages.map(n).join("</li><li class='mt8'>") +
                "</li></ul>"),
            this.$message
              .html(e)
              .find("a")
              .attr("target", "_blank")
        }
      },
      _updateIcon: function() {
        if (
          (this.$container.find(".js-stacks-validation-icon").remove(),
          this.messages.length && !this.hideIcons)
        ) {
          var e = this.highestType()
          Svg[i[e]]
            .With("s-input-icon js-stacks-validation-icon")
            .insertAfter(this.$input)
        }
      },
      _updateClass: function() {
        this.$container.removeClass("has-error has-warning has-success"),
          this.messages.length &&
            this.$container.addClass("has-" + this.highestType())
      },
      _update: function() {
        this._updateMessages(), this._updateIcon(), this._updateClass()
      },
      highestType: function() {
        return this.messages.map(o).reduce(function(e, t) {
          return "error" === e || "error" === t
            ? "error"
            : "warning" === e || "warning" === t
            ? "warning"
            : "success"
        })
      },
      hasType: function(e) {
        return this.messages.some(function(t) {
          return t.type === e
        })
      },
      add: function(e, t) {
        this.messages.some(function(n) {
          return n.type === e && n.html === t
        }) || (this.messages.push({ type: e, html: t }), this._update())
      },
      clear: function(e) {
        ;(this.messages = e
          ? this.messages.filter(function(t) {
              return t.type !== e
            })
          : []),
          this._update()
      },
    }
    var i = { error: "AlertCircle", warning: "Alert", success: "Checkmark" }
    return { handlerFor: e }
  })()),
  (StackExchange.Notice = (function() {
    var e = { cookieId: null, expireDate: null },
      t = function(t) {
        $.cookie(e.cookieId, t, { expires: new Date(e.expireDate), path: "/" })
      },
      n = function() {
        t("2;" + Date.now())
      },
      o = function() {
        t("4;" + Date.now())
      },
      i = function() {
        var t = $(".js-announcement-banner")
        ;(e.cookieId = t.data("cookie")), (e.expireDate = t.data("expire-date"))
        var i = 16,
          a = 8,
          r = $(window),
          s = $("#footer"),
          c = !0,
          l = $("#content"),
          u = $("#left-sidebar"),
          d = $("#js-gdpr-consent-banner"),
          f = $(".js-dismissable-hero"),
          p = $(".container")
        t.each(function() {
          var e = $(this),
            h = e.hasClass("js-announcement-sidebar")
          if (h) {
            var g,
              m = function() {
                var e = r.height(),
                  t = s[0].getBoundingClientRect().top,
                  n = e - t,
                  o = i
                return (
                  n > 0 && (o = n + i),
                  d.is(":visible") &&
                    (o += d[0].getBoundingClientRect().height),
                  f.is(":visible") &&
                    (o += f[0].getBoundingClientRect().height),
                  o
                )
              },
              v = function() {
                var t = l[0].getBoundingClientRect().left,
                  n = u.width(),
                  o = e.width(),
                  i = a
                return t > n && (i = t - o - a), Math.max(a, i)
              },
              b = function(t) {
                e.attr(
                  "style",
                  "bottom: " +
                    m() +
                    "px !important; left: " +
                    v() +
                    "px !important;"
                ),
                  c &&
                    (t || p.scrollTop() > 0) &&
                    ((c = !1), e.removeClass("d-none"))
              }
            $(document).on("scroll", function() {
              clearTimeout(g),
                (g = setTimeout(function() {
                  b(!0)
                }, 10))
            })
            var y
            $(window).on("resize", function() {
              clearTimeout(y),
                (y = setTimeout(function() {
                  b(!1)
                }, 10))
            }),
              setTimeout(function() {
                b(!0)
              }, 3e3)
          }
          var w = function() {
            e.animate(
              { height: "0", opacity: 0 },
              "fast",
              "linear",
              function() {
                t.remove()
              }
            )
          }
          e.hasClass("js-link")
            ? e.click(function() {
                n(), w()
              })
            : e.find(".js-link").click(function() {
                n(), w()
              }),
            e.find(".js-dismiss").click(function(e) {
              return (
                e.preventDefault(),
                o(),
                w(),
                $(this).parents(".js-satisfaction-survey").length &&
                  $.post("/survey/site-satisfaction/dismiss", {
                    fkey: StackExchange.options.user.fkey,
                  }),
                !1
              )
            })
        })
      },
      a = function() {
        var t = $(".js-research-banner"),
          i = new Date(),
          a = t.data("days-to-expire")
        ;(e.cookieId = t.data("cookie")),
          (e.expireDate = i.setDate(i.getDate() + a))
        var r = function() {
            var e = $(this).closest(".research-banner__state")
            if (!e) return !1
            var t = $(".js-research-banner"),
              n = t.find(".research-banner__state")
            n.hide()
            var o = n.index(e),
              i = $(n.get(o + 1))
            t.removeClass(e.data("propagateClass")),
              t.addClass(i.data("propagateClass")),
              i.show()
          },
          s = function(e) {
            StackExchange.helpers.showToast(e, {
              type: "danger",
              transientTimeout: 3e3,
            })
          }
        $(".js-research-banner form.js-submit").submit(function(e) {
          return (
            e.preventDefault(),
            $.ajax({
              type: "POST",
              url: t.data("cta-url"),
              data: { fkey: StackExchange.options.user.fkey },
            })
              .done(function(e) {
                e.success ? n() : s(e.message)
              })
              .fail(s),
            r.call(this),
            !1
          )
        }),
          $(".js-research-banner .js-research-dismiss").click(function() {
            return o(), $(".js-research-banner").remove(), !1
          }),
          $(".js-research-banner-state .js-research-confirm").click(r)
      }
    return { announcementBannerInit: i, researchBannerInit: a }
  })()),
  (StackExchange.bindShowMoreHotNetworkQuestions = function() {
    var e = $("#hot-network-questions"),
      t = e.find(".js-show-more"),
      n = e.find(".js-hidden")
    if (e.length && t.length && n.length) {
      var o = $("#mainbar").height(),
        i = $("#sidebar").height() + 550
      n.attr("style", "visibility:hidden").removeClass("dno")
      var a = 0,
        r = []
      n.each(function(e, t) {
        var n = $(t).height()
        r.push(n), (a += n)
      })
      var s = i + a
      if (o >= s) return t.remove(), n.attr("style", "").show(), void 0
      var c = [],
        l = i
      n.each(function(e, t) {
        var n = $(t),
          i = r[e]
        o >= l + i && (c.push(n), (l += i))
      }),
        n.attr("style", "").addClass("dno"),
        c.forEach(function(e) {
          return e.show()
        }),
        t.click(function() {
          return n.show(), t.remove(), !1
        })
    }
  }),
  (StackExchange.mockups = (function() {
    function e() {
      StackExchange.externalEditor.init({
        thingName: "mockup",
        getIframeUrl: function(e) {
          var t = "/plugins/mockups/editor"
          return e && (t += "?edit=" + encodeURIComponent(e)), t
        },
        buttonTooltip: "UI wireframe",
        onShow: function(e) {
          window.addMockupToEditor = e
        },
        onRemove: function() {
          window.addMockupToEditor = null
        },
      })
    }
    return { init: e }
  })()),
  (StackExchange.schematics = (function() {
    function e() {
      if (!window.postMessage) return 0
      var e = document.createElement("div")
      e.innerHTML = "<svg/>"
      var t =
        "http://www.w3.org/2000/svg" ===
        (e.firstChild && e.firstChild.namespaceURI)
      if (!t) return 0
      var n = navigator.userAgent
      return /Firefox|Chrome/.test(n)
        ? 3
        : /Apple/.test(navigator.vendor) || /Opera/.test(n)
        ? 2
        : 1
    }
    function t() {
      var t
      StackExchange.externalEditor.init({
        thingName: "schematic",
        getIframeUrl: function(e) {
          var t = "/plugins/schematics/editor"
          return e && (t += "?edit=" + encodeURIComponent(e)), t
        },
        buttonTooltip: "Schematic",
        checkSupport: function() {
          var t = e()
          switch (t) {
            case 3:
              return !0
            case 2:
              return confirm(
                "Your browser is not officially supported by the schematics editor; however it has been reported to work. Launch the editor?"
              )
            case 1:
              return confirm(
                "Your browser is not officially supported by the schematics editor; it may or may not work. Launch the editor anyway?"
              )
            default:
            case 0:
              return (
                alert(
                  "Sorry, your browser does not support all the necessary features for the schematics editor."
                ),
                !1
              )
          }
        },
        onShow: function(e) {
          var n = $("<div class='popup'>")
            .css("z-index", 1111)
            .text("Loading editor")
            .appendTo("body")
            .show()
            .addSpinner({ marginLeft: 5 })
            .center({ dy: -200 })
          $("<div style='text-align:right;margin-top: 10px'>")
            .append(
              $("<button>cancel</button>").click(function() {
                n.remove(), e()
              })
            )
            .appendTo(n),
            (t = function(t) {
              if (
                ((t = t.originalEvent),
                "https://www.circuitlab.com" === t.origin)
              ) {
                t.data || e()
                var o = $.parseJSON(t.data)
                if (o && "success" === o.load) return n.remove(), void 0
                if (o && o.edit_url && o.image_url) {
                  o.fkey = StackExchange.options.user.fkey
                  var i = $("<div class='popup'>")
                      .css("z-index", 1111)
                      .appendTo("body")
                      .show(),
                    a = function() {
                      i
                        .text("Storing image")
                        .addSpinner({ marginLeft: 5 })
                        .center(),
                        $.post("/plugins/schematics/save", o)
                          .done(function(t) {
                            i.remove(), e(t.img)
                          })
                          .fail(function(e) {
                            if (409 === e.status) {
                              var t = "Storing aborted"
                              e.responseText.length < 200 &&
                                (t = e.responseText),
                                i
                                  .text(t + ", will retry shortly")
                                  .addSpinner({ marginLeft: 5 })
                                  .center(),
                                setTimeout(a, 1e4)
                            } else i.remove(), alert("Failed to upload the schematic image.")
                          })
                    }
                  a()
                }
              }
            }),
            $(window).on("message", t)
        },
        onRemove: function() {
          $(window).off("message", t)
        },
      })
    }
    return { init: t }
  })()),
  (StackExchange.externalEditor = (function() {
    function e(e) {
      if ("function" == typeof e) return e
      var t = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        n =
          "<!-- Begin " +
          t +
          "[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End " +
          t +
          " -->"
      return function(e, t, o, i, a) {
        function r(e, t, n) {
          for (var o = -1, i = -1; ; ) {
            if (((i = t.indexOf(e, i + 1)), -1 === i)) break
            ;(0 > o || Math.abs(i - n) < Math.abs(i - o)) && (o = i)
          }
          return o
        }
        return e.replace(new RegExp(n, "g"), function(e, n, s) {
          var c = {
            payload: n.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g, ""),
            pos: r(e, t, s),
            len: e.length,
          }
          return -1 === c.pos
            ? e
            : (a.push(c), e + "\n\n" + o + i + "-" + (a.length - 1) + "%")
        })
      }
    }
    function t(t) {
      function n(e, t) {
        function n(t) {
          function n() {
            StackExchange.helpers.closePopups(m.add(i)), u()
          }
          var i,
            a = g || v.caret(),
            c = v[0].value || "",
            d = t ? t.pos : a.start,
            f = t ? t.len : a.end - a.start,
            p = c.substring(0, d),
            h = c.substring(d + f)
          g = null
          var m = null,
            b = function(t, i) {
              if (!t) return setTimeout(n, 0), v.focus(), void 0
              StackExchange.navPrevention.start()
              var r = void 0 === i ? o(t) : i,
                s = p.replace(/(?:\r\n|\r|\n){1,2}$/, ""),
                c = s + r + h.replace(/^(?:\r\n|\r|\n){1,2}/, ""),
                l = a.start + r.length - p.length + s.length
              setTimeout(function() {
                e.textOperation(function() {
                  v.val(c)
                    .focus()
                    .caret(l, l)
                }),
                  n()
              }, 0)
            }
          if (r) {
            var y = r(t ? t.payload : null)
            m = $("<iframe>", { src: y })
          } else if (s) {
            var w = s(t ? t.payload : null)
            m = $(w)
          }
          m
            .addClass("esc-remove")
            .css({
              position: "fixed",
              top: "2.5%",
              left: "2.5%",
              width: "95%",
              height: "95%",
              background: "white",
              "z-index": 1001,
            }),
            $("body")
              .loadPopup({ html: m, target: $("body"), lightbox: !0 })
              .done(function() {
                $(window).resize(), l(b)
              })
        }
        $(
          '<style type="text/css"> .wmd-' +
            i +
            "-button span { background-position: 0 0; } .wmd-" +
            i +
            "-button:hover span { background-position: 0 -40px; }</style>)"
        ).appendTo("head")
        var p,
          h,
          g,
          m = e.getConverter().hooks,
          v = $("#wmd-input" + t)
        v.on("keyup", function(e) {
          var t = e.keyCode || e.charCode
          if (8 === t || 46 === t) {
            var n = v.caret().start
            v.caret(n, n)
          }
        }),
          m.chain("preConversion", function(e) {
            var t = (e.match(/%/g) || []).length,
              n = v.length ? v[0].value || "" : ""
            return (p = new Array(t + 2).join("%")), (h = []), a(e, n, p, i, h)
          }),
          m.chain("postConversion", function(e) {
            return e.replace(new RegExp(p + i + "-(\\d+)%", "g"), function(
              e,
              t
            ) {
              return (
                "<sup><a href='#' class='edit-" +
                i +
                "' data-id='" +
                t +
                "'>" +
                d +
                "</a></sup>"
              )
            })
          })
        var b = "The " + i + " editor does not support touch devices.",
          y = !1
        $("#wmd-preview" + t)
          .on("touchend", function() {
            y = !0
          })
          .on("click", "a.edit-" + i, function(e) {
            return y
              ? (alert(b), (y = !1), !1)
              : ((y = !1), (!f || f()) && n(h[$(e.target).attr("data-id")]), !1)
          }),
          $("#wmd-input" + t).keyup(function(e) {
            e.shiftKey ||
              e.altKey ||
              e.metaKey ||
              !e.ctrlKey ||
              77 !== e.which ||
              ((!f || f()) && n())
          }),
          setTimeout(function() {
            var e = $("#wmd-image-button" + t),
              o = $(
                "<li class='wmd-button wmd-" +
                  i +
                  "-button' id='wmd-" +
                  i +
                  "-button" +
                  t +
                  "' title='" +
                  c +
                  " Ctrl-M'>"
              ).insertAfter(e),
              a = !1
            $("<span>")
              .appendTo(o)
              .on("touchend", function() {
                a = !0
              })
              .click(function() {
                return a
                  ? (alert(b), (a = !1), void 0)
                  : ((a = !1), (!f || f()) && n(), void 0)
              })
          }, 0)
      }
      function o(e) {
        return (
          '\n\n<!-- Begin {THING}: In order to preserve an editable {THING}, please\n     don\'t edit this section directly.\n     Click the "edit" link below the image in the preview instead. -->\n\n![{THING}](' +
          e +
          ")\n\n<!-- End {THING} -->\n\n"
        ).replace(/{THING}/g, i)
      }
      var i = t.thingName,
        a = e(t.thingFinder || t.thingName),
        r = t.getIframeUrl,
        s = t.getDivContent,
        c = t.buttonTooltip,
        l = t.onShow,
        u = t.onRemove || function() {},
        d = t.editLabel || "edit the above " + i,
        f = t.checkSupport
      StackExchange.MarkdownEditor.creationCallbacks.add(n)
    }
    return { init: t }
  })()),
  (function(e, t) {
    function n(t) {
      return e("<div>").addClass(t)
    }
    function o() {
      var e = "sif" + E
      return E++, e
    }
    function i() {
      return e("<iframe>").attr({
        name: o(),
        sandbox: "allow-forms allow-modals allow-scripts",
        class: "snippet-box-edit snippet-box-result",
        frameBorder: 0,
      })
    }
    function a(t) {
      return e("<pre>").addClass(
        "prettyprint-override lang-" + t + " snippet-code-" + t
      )
    }
    function r(t) {
      return e("<a>").text(t)
    }
    function s(t, n) {
      return e("<textarea>")
        .attr("name", t)
        .val(n)
    }
    function c(t, n, o) {
      return e("<form>")
        .css("display", "none")
        .attr({ action: t, method: n, target: o })
    }
    function l(t, n) {
      return e("<input>").attr({ type: "text", name: t, value: n })
    }
    function u() {
      return e('<button type="button" class="s-btn">')
    }
    function d(t) {
      return e("<code>").text(t)
    }
    function f(n, o) {
      ;(o = o || {}),
        n.each(function() {
          var n = e(this),
            i = n.data("_snippet")
          if (!i) {
            var a = o.markdownPluginMode
            if (((i = a ? p() : h()), a)) {
              var r = function() {
                i &&
                  (i.setUIInnerHtml(S),
                  i.generate(n),
                  i.resize(),
                  e(t).resize(function() {
                    i && i.resize()
                  }),
                  n.data("_snippet", i),
                  o.state && i.load(o.state))
              }
              StackExchange.using("snippetsJsCodeMirror", function() {
                setTimeout(function() {
                  C().then(r)
                }, 1)
              })
            } else
              i.generate(n), n.data("_snippet", i), o.state && i.load(o.state)
          }
        })
    }
    function p() {
      function n(e) {
        q = e
      }
      function o(n, o, i) {
        function a() {
          var e = i.getValue(),
            t = e.match(s)
          t && t.length > 2 ? n.val(t[1] + ":" + t[2]) : n.val("")
        }
        var r =
            "function" == typeof o
              ? o
              : function(e, t) {
                  return o.replace(/\*version\*/g, e).replace(/\*file\*/g, t)
                },
          s = r("##version##", "##file##")
            .replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            .replace(
              "cdnjs\\.cloudflare\\.com",
              "(?:cdnjs\\.cloudflare\\.com|ajax\\.googleapis\\.com)"
            )
            .replace(/##version##/g, "(.*?)")
            .replace(/##file##/g, "(.*?)")
        n.change(function() {
          var t = e(this)
              .val()
              .split(":"),
            n = t.length > 1 ? t[1] : ""
          t = t[0]
          var o = i.getValue(),
            a = !1,
            c = "" === t ? "" : r(t, n)
          return (
            (o = o.replace(new RegExp(s, "g"), function() {
              return (a = !0), c
            })),
            (o = o.trim()),
            a
              ? (i.setValue(o), void 0)
              : ("" !== t && (i.setValue(c + "\n" + o), i.save()), void 0)
          )
        })
        var c
        i.on("change", function() {
          t.clearTimeout(c), (c = t.setTimeout(a, 1e3))
        })
      }
      function i(n) {
        function i(e, n, o) {
          var i,
            a = CodeMirror.fromTextArea(e, {
              electricChars: !1,
              smartIndent: !1,
              lineNumbers: !0,
              lineWrapping: !0,
              mode: n,
              tabSize: 2,
              indentWithTabs: !1,
              readOnly: !1,
            })
          return (
            a.on("change", function() {
              ;(x = !0),
                t.clearTimeout(i),
                (i = t.setTimeout(function() {
                  a.save()
                }, 500))
            }),
            (a.beautify = function() {
              a.setValue(
                o(a.getValue().trim(), {
                  indent_size: a.options.tabSize,
                  indent_char: " ",
                  unformatted: [
                    "a",
                    "abbr",
                    "area",
                    "audio",
                    "b",
                    "bdi",
                    "bdo",
                    "br",
                    "button",
                    "canvas",
                    "cite",
                    "code",
                    "data",
                    "datalist",
                    "del",
                    "dfn",
                    "em",
                    "embed",
                    "i",
                    "iframe",
                    "img",
                    "input",
                    "ins",
                    "kbd",
                    "keygen",
                    "label",
                    "map",
                    "mark",
                    "math",
                    "meter",
                    "noscript",
                    "object",
                    "output",
                    "progress",
                    "q",
                    "ruby",
                    "s",
                    "samp",
                    "small",
                    "span",
                    "strong",
                    "sub",
                    "sup",
                    "svg",
                    "template",
                    "textarea",
                    "time",
                    "u",
                    "var",
                    "video",
                    "wbr",
                    "text",
                    "acronym",
                    "address",
                    "big",
                    "dt",
                    "ins",
                    "strike",
                    "tt",
                  ],
                })
              )
            }),
            a
          )
        }
        function r(e) {
          return (
            '<script src="https://cdnjs.cloudflare.com/ajax/libs/' +
            e +
            '/*version*/*file*"></script>'
          )
        }
        return m
          ? m
          : ((m = e(q)),
            e(m)
              .find("#snpte-close-button")
              .click(function(t) {
                return (
                  StackExchange.helpers.closePopups(
                    e(this).closest(".snippet-modal"),
                    "esc"
                  ),
                  t.preventDefault(),
                  !1
                )
              }),
            (v = m.find("#snpte-jquery-select")),
            (b = m.find("#snpte-d3-select")),
            (y = m.find("#snpte-knockout-select")),
            (w = m.find("#snpte-angular-select")),
            (k = m.find("#snpte-vue-select")),
            (S = m.find("#snpte-react-select")),
            (C = m.find("#snpte-react-dom-select")),
            (E = m.find("#snpte-hide-snippet")),
            (j = m.find("#snpte-show-console")),
            (T = m.find("#snpte-use-babel")),
            m.find("#snpte-button-run").click(function() {
              a()
            }),
            m.find("#snpte-button-tidy").click(function() {
              _.beautify(), D.beautify(), L.beautify()
            }),
            m.find("#snpte-button-insert").click(function() {
              StackExchange.helpers.closePopups(e(".snippet-modal"))
            }),
            m.find("#snpte-button-reset").click(function() {
              u()
            }),
            n.empty().append(m),
            (I = m.find("#snpte-box-edit-html")),
            (O = m.find("#snpte-box-edit-css")),
            (P = m.find("#snpte-box-edit-js")),
            (M = m.find("#snpte-box-edit-result")),
            (A = M.clone()),
            (CodeMirror.commands.insertTab = CodeMirror.commands.insertSoftTab),
            (CodeMirror.keyMap.default["Shift-Tab"] = "indentLess"),
            (CodeMirror.commands.indentAuto = function(e) {
              e.beautify()
            }),
            (_ = i(I[0], "htmlmixed", html_beautify)),
            (D = i(O[0], "css", css_beautify)),
            (L = i(P[0], "javascript", js_beautify)),
            o(v, r("jquery"), _),
            o(b, r("d3"), _),
            o(y, r("knockout"), _),
            o(w, r("angular.js"), _),
            o(k, r("vue"), _),
            o(
              S,
              function(e, t) {
                var n = (
                    C.find("option[value^='" + e + "']").attr("value") || ""
                  ).split(":"),
                  o = n[1] || t
                return (
                  '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/' +
                  e +
                  "/" +
                  t +
                  '"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/' +
                  e +
                  "/" +
                  o +
                  '"></script>'
                )
              },
              _
            ),
            m.find("#snpte-button-extlib").click(function() {
              function e(e, t) {
                return e.length < t.length
                  ? !1
                  : ((e = e.toLowerCase()),
                    0 != e.indexOf("https://") &&
                    0 != e.indexOf("http://") &&
                    0 != e.indexOf("//")
                      ? !1
                      : e.substr(e.length - t.length, t.length).toLowerCase() ==
                        t.toLowerCase()
                      ? !0
                      : !1)
              }
              var t = prompt(
                "Please enter the URL of an external JS or CSS file"
              )
              if (null != t && "" != t && "" != t.trim()) {
                var n = _.getValue()
                if (e(t, ".css")) {
                  var o = '<link href="' + t + '" rel="stylesheet"/>'
                  _.setValue(o + "\n" + n)
                } else if (e(t, ".js")) {
                  var o = '<script src="' + t + '"></script>'
                  _.setValue(o + "\n" + n)
                } else
                  alert(
                    "Sorry, but that resource is invalid. Resources must begin with http:// or https:// and allowed extensions are: .css, .js"
                  )
              }
            }),
            e.each([_, D, L], function(t, n) {
              n.on("focus", function() {
                e(n.getInputField())
                  .parent()
                  .parent()
                  .parent()
                  .children(".js-name")
                  .hide()
              }),
                n.on("blur", function() {
                  e(n.getInputField())
                    .parent()
                    .parent()
                    .parent()
                    .children(".js-name")
                    .show()
                })
            }),
            void 0)
      }
      function a() {
        d(), f()
      }
      function r(e) {
        var t = e.html,
          n = e.css,
          o = e.js,
          i = e.console,
          a = e.hide,
          r = e.babel
        null != t && ((g.html = t), I.val(t)),
          null != n && ((g.css = n), O.val(n)),
          null != o && ((g.js = o), P.val(o)),
          null != i && ((g.console = i), i === !1 && j.prop("checked", i)),
          a && ((g.hide = a), E.prop("checked", !0)),
          r && ((g.babel = r), T.prop("checked", !0)),
          _.setValue(t),
          D.setValue(n),
          L.setValue(o),
          (x = !1)
      }
      function u() {
        I.val(""),
          O.val(""),
          P.val(""),
          v.val(""),
          b.val(""),
          y.val(""),
          w.val(""),
          k.val(""),
          S.val(""),
          j.prop("checked", !0),
          E.prop("checked", !1),
          T.prop("checked", !1)
        var e = ""
        $ && (e = "//" + $), p()
        var t = e + "/js",
          n = c(t, "GET", M.attr("name")).appendTo("body")
        n.submit(), _.setValue(""), D.setValue(""), L.setValue("")
      }
      function d() {
        return (
          (g.html = I.val()),
          (g.css = O.val()),
          (g.js = P.val()),
          (g.console = j.prop("checked")),
          (g.hide = E.prop("checked")),
          (g.babel = T.prop("checked")),
          g
        )
      }
      function f() {
        var e = g.css,
          t = g.js,
          n = g.html,
          o = g.console,
          i = g.babel
        if ("" != e || "" != t || "" != n) {
          var a = ""
          $ && (a = "//" + $), p()
          var r = a + "/js",
            u = c(r, "POST", M.attr("name"))
          s("js", t).appendTo(u),
            s("css", e).appendTo(u),
            s("html", n).appendTo(u),
            l("console", "" + (o === !0)).appendTo(u),
            l("babel", "" + (i === !0)).appendTo(u),
            u.appendTo("body"),
            u.submit().remove()
        }
      }
      function p() {
        if (!A) throw "No template available for result destination"
        if (!M) throw "Cannot insert new result destination"
        var e = A.clone()
        M.replaceWith(e), (M = e)
      }
      function h() {
        var e = x
        _.refresh(), D.refresh(), L.refresh(), (x = e)
      }
      var g = {
          html: null,
          css: null,
          js: null,
          console: !0,
          hide: !1,
          babel: null,
        },
        m = null,
        v = null,
        b = null,
        y = null,
        w = null,
        k = null,
        S = null,
        C = null,
        E = !1,
        j = !0,
        T = null,
        I = null,
        O = null,
        P = null,
        A = null,
        M = null,
        _ = null,
        D = null,
        L = null,
        q = null
      return {
        setUIInnerHtml: n,
        resize: h,
        writeResult: f,
        save: d,
        clear: u,
        load: r,
        run: a,
        generate: i,
        registerExternalLibChange: o,
      }
    }
    function h() {
      function o(o) {
        var s = null
        if (v) return v
        ;(w = null), (y = i()), (v = !0)
        var c = u()
            .addClass("s-btn__primary")
            .append(
              e('<span class="icon-play-white _hover">'),
              e("<span>").text(" Run code snippet")
            )
            .click(function() {
              a(), s.hide()
            }),
          l = u()
            .addClass("hideResults")
            .text("Hide results")
            .click(function() {
              d(), s.show()
            })
        l.hide(),
          StackExchange.options.isMobile ||
            (s = n("popout-code")
              .append(r("Expand snippet").addClass("snippet-expand-link"))
              .click(function() {
                var n = w
                if (n) {
                  var o = n.element
                  o.removeClass("expanded-snippet"),
                    o.find(".snippet-expand-link").text("Expand snippet"),
                    o
                      .find(".snippet-show-link, .snippet-show-link-chevron")
                      .show()
                  var i = n.parent,
                    a = i.children()
                  a.length
                    ? e(a[n.indexWithinParent]).before(o)
                    : e(i).append(o),
                    (w = null),
                    e(".topbar, .container, .top-bar, #footer").show(),
                    f.show(),
                    e(t).scrollTop(k)
                } else {
                  k = e(t).scrollTop()
                  var o = e(this).closest(".snippet")
                  ;(w = {
                    element: o,
                    indexWithinParent: o.index(),
                    parent: o.parent(),
                  }),
                    o.addClass("expanded-snippet"),
                    o.find(".snippet-expand-link").text("Return to post"),
                    o
                      .find(".snippet-show-link, .snippet-show-link-chevron")
                      .hide(),
                    e(".topbar, .container, .top-bar, #footer").hide(),
                    e("body").append(o),
                    f.hide()
                }
              }))
        var f = e(
          '<input class="copySnippet s-btn s-btn__filled" type="button">'
        ).click(function() {
          var t = e("#show-editor-button"),
            n = e("#post-editor").find("textarea.wmd-input")
          if (t.is(":visible")) {
            var o = t.offset().top
            e("html").animate({ scrollTop: o - 60 }),
              e("body").animate(
                { scrollTop: o - 60 },
                {
                  complete: function() {
                    t.children("input").click()
                  },
                }
              )
          } else {
            var i = n.offset().top
            e("html, body").animate({ scrollTop: i - 60 })
          }
          var a = m(g)
          n.val(n.val() + "\n\n" + a),
            StackExchange.MarkdownEditor.refreshAllPreviews()
        })
        f.val("Copy snippet to answer")
        var p = n("snippet-ctas").append(c, f, l)
        StackExchange.options.isMobile || p.append(s),
          (b = n("snippet-result-code")
            .append(y)
            .hide())
        var h = n("snippet-result").append(p, b)
        return o.append(h), v
      }
      function a() {
        y && y.remove(),
          (y = i()),
          b.append(y),
          y.parent().is(":hidden") &&
            (y
              .closest(".snippet-result")
              .find(".hideResults")
              .css("display", ""),
            y.parent().slideDown(200, function() {
              if (!w) {
                var t = n("popout").append(r("Full page")),
                  o = n("popin")
                    .append(r("Close"))
                    .hide()
                t.click(function() {
                  y.data("_style", y.attr("style")),
                    y.css({
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      "background-color": "#FFFFFF",
                      "z-index": 9e3,
                    }),
                    y.parent().css("position", ""),
                    e(this).hide(),
                    o.show(),
                    e("body").css("overflow", "hidden")
                }),
                  o.click(function() {
                    y.removeAttr("style"),
                      y.attr("style", y.data("_style")),
                      y.parent().css("position", "relative"),
                      e(this).hide(),
                      t.show(),
                      e("body").css("overflow", "")
                  }),
                  e(this).append(t, o)
              }
            })),
          p()
      }
      function d() {
        var t = y.parent()
        t.is(":visible") &&
          (y
            .closest(".snippet-result")
            .find(".hideResults")
            .hide(),
          t.children(".popout, .popin").remove(),
          t.slideUp(200, function() {
            e(this).hide(), y.remove(), (y = null)
          }))
      }
      function f(e) {
        var t = e.css,
          n = e.js,
          o = e.html,
          i = e.console,
          a = e.hide,
          r = e.babel
        null != t && (g.css = t),
          null != n && (g.js = n),
          null != o && (g.html = o),
          i && (g.console = i),
          a && (g.hide = a),
          r && (g.babel = r)
      }
      function p() {
        var e = g.css,
          t = g.js,
          n = g.html,
          o = g.console,
          i = g.babel
        if ("" != e || "" != t || "" != n) {
          var a = ""
          $ && (a = "//" + $)
          var r = a + "/js",
            u = c(r, "POST", y.attr("name")).append(
              s("js", t),
              s("css", e),
              s("html", n),
              l("console", "" + (o === !0)),
              l("babel", "" + (i === !0))
            )
          u.appendTo("body")
            .submit()
            .remove()
        }
      }
      function h() {}
      var g = {
          html: null,
          css: null,
          js: null,
          console: !1,
          hide: !1,
          babel: null,
        },
        v = null,
        b = null,
        y = null,
        w = null
      return {
        resize: h,
        writeResult: p,
        load: f,
        hide: d,
        run: a,
        generate: o,
      }
    }
    function g(e, t, n) {
      return e.replace(/^(?=.)/gm, new Array(t * n + 1).join(" "))
    }
    function m(e) {
      var t =
          "\n\n<!-- begin snippet: js hide: " +
          e.hide +
          " console: " +
          e.console +
          " babel: " +
          e.babel +
          " -->\n\n",
        n = e.js,
        o = e.css,
        i = e.html
      return (
        "" != n &&
          (t += "<!-- language: lang-js -->\n\n" + g(n, 1, 4) + "\n\n"),
        "" != o &&
          (t += "<!-- language: lang-css -->\n\n" + g(o, 1, 4) + "\n\n"),
        "" != i &&
          (t += "<!-- language: lang-html -->\n\n" + g(i, 1, 4) + "\n\n"),
        (t += "<!-- end snippet -->\n\n")
      )
    }
    function v(e, t, n, o) {
      var i = /<!--\s+language:\s*lang-js\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi,
        a = /<!--\s+language:\s*lang-css\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi,
        r = /<!--\s+language:\s*lang-html\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi
      try {
        var s = i.exec(e),
          c = a.exec(e),
          l = r.exec(e),
          u = "",
          d = "",
          f = ""
        if (
          (s && (u = s[1].trim().replace(/^    /gm, "")),
          c && (d = c[1].trim().replace(/^    /gm, "")),
          l && (f = l[1].trim().replace(/^    /gm, "")),
          "" == u && "" == d && "" == f)
        )
          return null
        var p = { js: u, css: d, html: f, console: n, hide: t, babel: o }
        return p
      } catch (h) {
        return null
      }
    }
    function b(e) {
      var t = StackExchange.snippets.renderer
      if (!t) return e
      var n = t,
        o = "sandbox" in document.createElement("iframe")
      if (!o) return e
      var i = /<!--\s+begin snippet:\s*[a-z]+\s*(?:hide:\s*([a-zA-Z]+))?\s*(?:console:\s*([a-zA-Z]+))?\s*(?:babel:\s*([a-zA-Z]+))?\s+-->([\s\S]*?)<!--\s+end snippet\s+-->/gi
      return (e = e.replace(i, function(e, t, o, i, a) {
        return n(a, t, o, i)
      }))
    }
    function y() {
      ;(StackExchange.snippets.renderer && StackExchange.snippets.redraw) ||
        ((StackExchange.snippets.redraw = function() {
          e("div.snippet").each(function() {
            var t = e(this)
            return t.closest(".downvoted-answer").length > 0
              ? !0
              : (w(t), void 0)
          })
        }),
        (StackExchange.snippets.renderer = function(e, t, i, r) {
          ;(t = t === !0 || "true" === (t || "").toLowerCase()),
            (i = i === !0 || "true" === (i || "").toLowerCase()),
            (r = r === !0 || "true" === (r || "").toLowerCase())
          var s = v(e, t, i, r)
          if (!s) return e
          var c = n("snippet").data({ lang: "js", hide: t, console: i }),
            l = n("snippet-code")
          t && l.addClass("snippet-currently-hidden"), c.append(l)
          var u = s.js,
            p = s.css,
            h = s.html
          u && l.append(a("js").append(d(u))),
            p && l.append(a("css").append(d(p))),
            h && l.append(a("html").append(d(h)))
          var g = o()
          return f(l, { state: s }), (j[g] = c), "<pre>" + g + "</pre>"
        }),
        StackExchange.snippets.redraw())
    }
    function w(t) {
      var o = t.find(".snippet-code")
      0 == o.length && (o = t)
      var i = o.find("pre.snippet-code-js").text(),
        a = o.find("pre.snippet-code-css").text(),
        r = o.find("pre.snippet-code-html").text(),
        s = {
          js: i,
          css: a,
          html: r,
          console: t.data("console") === !0,
          hide: t.data("hide") === !0,
          babel: t.data("babel") === !0,
        }
      if (
        (f(o, { state: s }),
        (StackExchange.options.user.isAnonymous ||
          0 == t.parent().length ||
          0 == e("textarea#wmd-input").length ||
          e(".popup-suggested-edit").length) &&
          t.find(".copySnippet").hide(),
        t.data("hide") === !0)
      ) {
        o.hide(),
          o.addClass("snippet-currently-hidden"),
          t.find(".snippet-display").remove()
        var c = n("snippet-display")
          .attr("style", "vertical-align: center")
          .append(
            e("<p>").append(
              e(
                '<a class="snippet-show-link-chevron"><span class="expander-arrow-hide" style="vertical-align: middle;"></span><a class="snippet-show-link"><span class="show-hide" data-ishidden="true" style="vertical-align: middle"></span></a>'
              )
            )
          )
        c.find("span.show-hide").text("Show code snippet"),
          c.click(function() {
            o.toggle()
            var t = e(this),
              n = t.find(".show-hide")
            n.data("ishidden") === !0
              ? (n.text("Hide code snippet"),
                t
                  .find(".expander-arrow-hide")
                  .removeClass("expander-arrow-hide")
                  .addClass("expander-arrow-show"),
                n.data("ishidden", !1))
              : (n.text("Show code snippet"),
                t
                  .find(".expander-arrow-show")
                  .removeClass("expander-arrow-show")
                  .addClass("expander-arrow-hide"),
                n.data("ishidden", !0))
          }),
          t.prepend(c)
      } else
        o.show().removeClass("snippet-currently-hidden"),
          t.find(".snippet-display").remove()
    }
    if (StackExchange.settings && StackExchange.settings.snippets) {
      var k,
        x = !1,
        $ = StackExchange.settings.snippets.renderDomain,
        S = null,
        C = function() {
          return S
            ? e.when()
            : e.ajax("/snippets/editor-ui", {
                success: function(e) {
                  S = e
                },
              })
        },
        E = 1,
        j = {}
      StackExchange.snippets = (function() {
        function t(e, t, n, o, i) {
          function a(e, t, n) {
            for (var o = -1, i = -1; ; ) {
              if (((i = t.indexOf(e, i + 1)), -1 == i)) break
              ;(0 > o || Math.abs(i - n) < Math.abs(i - o)) && (o = i)
            }
            return o
          }
          return e.replace(
            /<!--\s+begin snippet:\s*[a-z]+\s*(?:hide:\s*([a-zA-Z]+))?\s*(?:console:\s*([a-zA-Z]+))?\s*(?:babel:\s*([a-zA-Z]+))?\s+-->([\s\S]*?)<!--\s+end snippet\s+-->/gi,
            function(e, r, s, c, l, u) {
              var d = {
                payload: {
                  code: l,
                  hide: "true" === (r || "").toLowerCase(),
                  console: "true" === (s || "").toLowerCase(),
                  babel: "true" === (c || "").toLowerCase(),
                },
                pos: a(e, t, u),
                len: e.length,
              }
              return -1 === d.pos
                ? e
                : (i.push(d), e + "\n\n" + n + o + "-" + (i.length - 1) + "%")
            }
          )
        }
        function o() {
          y()
          var o = StackExchange.MarkdownEditor && StackExchange.externalEditor
          o &&
            i &&
            ((i = !1),
            StackExchange.externalEditor.init({
              thingName: "snippet",
              thingFinder: t,
              editLabel: "edit the above snippet",
              getDivContent: function(e) {
                var t = e ? v(e.code, e.hide, e.console, e.babel) : null,
                  o = n("modal auto-center snippet-modal")
                return f(o, { markdownPluginMode: !0, state: t }), o
              },
              buttonTooltip: "JavaScript/HTML/CSS snippet",
              buttonImageUrl: "/Content/Shared/balsamiq/wmd-mockup-button.png",
              onShow: function(t) {
                var n = e(".snippet-modal"),
                  o = function(e) {
                    var o = n.data("_snippet").save()
                    if (e || ("" == o.html && "" == o.css && "" == o.js))
                      t(null)
                    else {
                      var i = m(o)
                      t(i, i)
                    }
                  }
                n.on("popupClosing", function(e) {
                  var t = "esc" == e.closeTrigger
                  if (!t || x)
                    return t &&
                      !confirm("Are you sure you want to abandon any changes?")
                      ? (e.preventDefault(), void 0)
                      : (o(t), void 0)
                })
              },
            })),
            StackExchange.MarkdownEditor &&
              StackExchange.MarkdownEditor.creationCallbacks.add(function(
                t,
                n
              ) {
                var o = t.getConverter().hooks
                o.chain("preConversion", b)
                var i = e("#wmd-preview" + n)
                i.on("wmdrefresh", function() {
                  i.find("pre").each(function() {
                    var t = e(this),
                      n = t.text()
                    if (j[n]) {
                      var o = j[n]
                      delete j[n], w(o), t.replaceWith(e("<p>").append(o))
                    }
                  })
                })
              })
        }
        var i = !0
        return { init: o, initSnippetRenderer: y, makeSnippets: b }
      })()
    }
  })(jQuery, window),
  $(document).on("click", ".js-feed-link", function(e) {
    var t = $(this),
      n = t.siblings(".js-feed-link-modal").clone()
    n.length > 0 &&
      (e.preventDefault(),
      StackExchange.helpers.showModal(n, {
        returnElements: t,
        shown: function() {
          n.find(".s-input")
            .focus()
            .select()
        },
      }))
  }),
  (StackExchange.ga = (function() {
    function e(e) {
      try {
        if (!StackExchange.options.enableLogging) return
        console.log("StackExchange.ga: " + e)
      } catch (t) {}
    }
    var t,
      n = 0,
      o = null,
      i = {},
      a = function(e) {
        e.find("[data-ga]").each(function() {
          var e = $(this),
            t = e.is("form"),
            n = t ? "submit" : "click"
          e.on(n, function() {
            var n = m(e)
            null !== n && (d(e, n), t && h(e, n))
          })
        }),
          e.find("[data-ga-action]").each(function() {
            var e = $(this)
            e.on("change", function() {
              return g(e)
            })
          })
      },
      r = function(e, n, o) {
        if (t)
          for (var i = 0; i < t.trackingCodes.length; i++) {
            var a = b(i, "set")
            e && t.tracker(a, "campaignMedium", e),
              n && t.tracker(a, "campaignName", n),
              o && t.tracker(a, "campaignSource", o)
          }
      },
      s = function(e, n) {
        if (t)
          for (var o = 0; o < t.trackingCodes.length; o++)
            t.tracker(b(o, "set"), e, n)
      },
      c = function(e) {
        if (t)
          for (var n = 0; n < t.trackingCodes.length; n++)
            t.tracker(b(n, "set"), "page", e)
      },
      l = function(e) {
        if (t)
          for (var n = 0; n < t.trackingCodes.length; n++)
            t.tracker(b(n, "set"), "title", e)
      },
      u = function(n, o, i, a) {
        if (
          (e(
            "track: category: '" +
              n +
              "', action: '" +
              o +
              "', label: '" +
              i +
              "'"
          ),
          t && null != n && null != o)
        )
          for (var r = 0; r < t.trackingCodes.length; r++)
            t.sendTitles || t.tracker(b(r, "set"), "title", "Channel Page"),
              t.tracker(b(r, "send"), "event", n, o, i, void 0, a)
      },
      d = function(e, n) {
        t &&
          (void 0 === n && (n = m(e)),
          null !== n && u(n.category, n.action, n.label, n.fields))
      },
      f = ["auth", "email", "e"],
      p = function() {
        if (t) {
          for (
            var e = location.pathname + location.search, n = 0;
            n < f.length;
            n++
          )
            e = e
              .replace(
                new RegExp("^([^#]*?)(([^#]*)&)?" + f[n] + "(=[^&#]*)?(&|#|$)"),
                "$1$3$5"
              )
              .replace(/^([^#]*)((\?)&|\?(#|$))/, "$1$3$4")
          for (var n = 0; n < t.trackingCodes.length; n++)
            t.sendTitles || t.tracker(b(n, "set"), "title", "Channel Page"),
              t.tracker(b(n, "send"), "pageview", e)
        }
      },
      h = function(e, n) {
        if (t && (void 0 === n && (n = m(e)), null !== n)) {
          var o = e.attr("id"),
            a = i[o]
          if (void 0 !== a) {
            for (var r in a) {
              var s = n.inputActionPrefix + " | " + r,
                c = a[r]
              u(n.category, s, c, { nonInteraction: !1 })
            }
            i[o] = {}
          }
        }
      },
      g = function(e) {
        if (t) {
          var o
          o = e.is(":checkbox")
            ? e.is(":checked")
            : e.is("select")
            ? e
                .find(":selected")
                .toArray()
                .map(function(e) {
                  return $(e).data("ga-value") || $(e).val()
                })
                .join(" ")
            : e.data("ga-value") || e.val()
          var a = e.closest("form")
          if (0 !== a.length && null !== o) {
            var r = a.attr("id")
            void 0 === r && ((r = "ga-form-" + n++), a.attr("id", r))
            var s = i[r]
            void 0 === s && (s = i[r] = {})
            var c = e.attr("data-ga-action"),
              l = "false" === e.attr("data-ga-is-pii") ? !1 : !0,
              u = l ? "PII Omitted" : o
            s[c] = u
          }
        }
      },
      m = function(e) {
        var t = e.data("ga")
        return void 0 === t
          ? null
          : {
              category: t[0],
              action: t[1],
              label: t[2],
              inputActionPrefix: t[3],
              fields: t[4],
            }
      },
      v = function(e) {
        return "tracker_" + e
      },
      b = function(e, t) {
        if (0 == e) return t
        var n = v(e)
        return n + "." + t
      },
      y = function() {
        return t ? o : void 0
      }
    return {
      init: function(e) {
        if (e && e.tracker && e.trackingCodes && 0 !== e.trackingCodes.length) {
          t = e
          var n = {},
            i = "auto"
          window.location.host.indexOf("stackexchange.com") >= 0 &&
            (i = "stackexchange.com"),
            StackExchange.options.user.accountId &&
              (n.userId = StackExchange.options.user.accountId.toString()),
            t.tracker("create", e.trackingCodes[0], i, n),
            t.tracker("set", "transport", "beacon")
          for (var r = 1; r < e.trackingCodes.length; r++)
            t.tracker("create", e.trackingCodes[r], i, v(r), n)
          if (e.checkDimension) {
            var s = document.createElement("ins")
            ;(s.className = "AdSense"),
              (s.style.display = "block"),
              (s.style.position = "absolute"),
              (s.style.top = "-1px"),
              (s.style.height = "1px"),
              document.body.appendChild(s),
              StackExchange.ga.setDimension(
                e.checkDimension,
                s.clientHeight ? "0" : "1"
              ),
              document.body.removeChild(s)
          }
          a($(document)),
            t.tracker(function(e) {
              e && (o = e.get("clientId")),
                StackExchange.gaInitialized.resolve()
            })
        }
      },
      bindHandlers: a,
      setCampaign: r,
      setDimension: s,
      setTitle: l,
      setUrl: c,
      track: u,
      trackElement: d,
      trackFormInputs: h,
      trackPageView: p,
      recordInputChange: g,
      getClientId: y,
    }
  })())
var StackOverflow
!(function(e) {
  var t
  !(function(e) {
    var t
    !(function(e) {
      ;(e[(e.Question = 1)] = "Question"),
        (e[(e.Answer = 2)] = "Answer"),
        (e[(e.Wiki = 3)] = "Wiki"),
        (e[(e.TagWikiExcerpt = 4)] = "TagWikiExcerpt"),
        (e[(e.TagWiki = 5)] = "TagWiki"),
        (e[(e.ModeratorNomination = 6)] = "ModeratorNomination"),
        (e[(e.WikiPlaceholder = 7)] = "WikiPlaceholder"),
        (e[(e.PrivilegeWiki = 8)] = "PrivilegeWiki"),
        (e[(e.Article = 9)] = "Article"),
        (e[(e.HelpArticle = 10)] = "HelpArticle")
    })((t = e.PostTypeId || (e.PostTypeId = {})))
  })((t = e.Models || (e.Models = {})))
})(StackOverflow || (StackOverflow = {}))
var StackExchange
!(function(StackExchange) {
  var ads
  !(function(ads) {
    function init(e, t, n) {
      adReports || (adReports = new AdReports(e, t, n))
    }
    var modalClass = ".js-ad-report",
      adReports,
      AdReports = (function() {
        function AdReports(e, t, n) {
          var o,
            i,
            a = this
          if (
            ((this.googletag = e),
            (this.adReportUrl = t),
            (this.adReportText = n),
            (this.handleSlotRendered = function(e) {
              if (e && e.slot) {
                var t = e.slot.getSlotElementId()
                if (t) {
                  var n = $("#" + t),
                    o = n
                      .parent(".js-zone-container")
                      .find(".js-report-ad-button-container")
                  if (
                    (e.creativeId || e.lineItemId) &&
                    (!clc.options.dh ||
                      -1 === clc.options.dh.indexOf(e.lineItemId))
                  ) {
                    var i = $(
                      '<button class="js-report-ad s-btn s-btn__link mt6">' +
                        a.adReportText +
                        "</button>"
                    )
                    o.append(i),
                      i.data("modal-url", a.adReportUrl),
                      i.data("ad-unit", e.slot.getSlotElementId())
                    var r = JSON.stringify(e)
                    i.data("google-event-data", r), a.initButton(i)
                  }
                }
              }
            }),
            this.googletag
              .pubads()
              .addEventListener("slotRenderEnded", this.handleSlotRendered),
            Array.isArray(
              null ===
                (i = null === (o = clc) || void 0 === o ? void 0 : o.dfp) ||
                void 0 === i
                ? void 0
                : i.slotsRenderedEvents
            ))
          )
            for (var r = 0; r < clc.dfp.slotsRenderedEvents.length; r++)
              this.handleSlotRendered(clc.dfp.slotsRenderedEvents[r])
        }
        return (
          (AdReports.prototype.initButton = function(e) {
            var t = this
            e.off().on("click", function(n) {
              n.preventDefault()
              var o = e.data("modal-url"),
                i = e.data("google-event-data")
              return t.loadModal(o, e, i), !1
            })
          }),
          (AdReports.prototype.loadModal = function(
            url,
            $link,
            googleEventData
          ) {
            var _this = this
            StackExchange.helpers
              .loadModal(url, { returnElements: $link })
              .then(function() {
                _this.initForm(googleEventData)
              })
              .fail(function(responseText) {
                var messageHtml = "",
                  response = eval("(" + responseText + ")")
                ;(messageHtml =
                  response && response.isLoggedOut
                    ? $("<span>")
                        .text(
                          "Your login session has expired, please login and try again."
                        )
                        .html()
                    : $("<span>")
                        .text(
                          "An error occurred when loading the report form - please try again"
                        )
                        .html()),
                  StackExchange.helpers.showToast(messageHtml, {
                    type: "danger",
                  })
              })
          }),
          (AdReports.prototype.removeModal = function() {
            StackExchange.helpers.closePopups($(modalClass), "dismiss")
          }),
          (AdReports.prototype.initForm = function(e) {
            var t = this,
              n = $(".js-ad-report-form"),
              o = n.find(".js-json-data"),
              i = n.find(".js-ad-report-reason"),
              a = n.find(".js-ad-report-reason-other"),
              r = n.find(".js-file-uploader-input"),
              s = n.find(".js-image-uploader"),
              c = n.find(".js-clear-image-upload"),
              l = n.find(".js-image-uploader-text"),
              u = n.find(".js-image-uploader-preview"),
              d = n.find(".js-image-uploader-link"),
              f = n.find(".js-file-error"),
              p = ["image/png", "image/jpg", "image/jpeg"],
              h = n.find(".js-drag-drop-enabled"),
              g = n.find(".js-drag-drop-disabled")
            d.on("click", function(e) {
              e.preventDefault(), r.trigger("click")
            }),
              o.val(e),
              i.on("change", function(e) {
                a.toggleClass("d-none", "3" !== $(e.target).val())
              })
            var m = function(e) {
                e.preventDefault(), e.stopPropagation()
              },
              v = function() {
                s.removeClass("bas-dashed"),
                  s.addClass("bas-solid bc-black-100")
              },
              b = function() {
                s.removeClass("bas-solid bc-black-100"),
                  s.addClass("bas-dashed")
              },
              y = function(e) {
                var t = e.originalEvent.dataTransfer.files
                if (FileReader && t && 1 === t.length) {
                  var n = r[0]
                  ;(n.files = t), w() && x(t)
                }
              }
            r.change(function() {
              var e = r[0]
              w() && x(e.files)
            })
            var w = function() {
                var e = "Please select a PNG or JPG file",
                  t = "The file must be under 2 MiB",
                  n = r[0]
                if (null == n.files) return !1
                var o = n.files[0]
                return null == o
                  ? (k(!0), !1)
                  : p.indexOf(o.type) < 0
                  ? (f.text(e), f.removeClass("d-none"), k(!0), !1)
                  : o.size > 2097152
                  ? (f.text(t), f.removeClass("d-none"), k(!0), !1)
                  : (f.addClass("d-none"), k(!1), !0)
              },
              k = function(e) {
                f.parent().toggleClass("has-error", e)
              },
              x = function(e) {
                s.removeClass("p16 ba bas-dashed bc-black-100"),
                  c.removeClass("d-none"),
                  l.addClass("d-none")
                var t = new FileReader()
                ;(t.onload = function(e) {
                  null != e.target &&
                    (u.prop("src", e.target.result), u.removeClass("d-none"))
                }),
                  t.readAsDataURL(e[0])
              }
            c.on("click", function(e) {
              e.preventDefault(),
                r.val(""),
                u.prop("src", ""),
                u.addClass("d-none"),
                c.addClass("d-none"),
                l.removeClass("d-none"),
                s.addClass("p16 ba bas-dashed bc-black-100")
            })
            try {
              var S = r[0]
              ;(S.files = null),
                s.on("dragenter dragover dragleave drop", m),
                s.on("dragenter dragover", v),
                s.on("dragleave drop", b),
                s.on("drop", y)
            } catch (C) {
              h.addClass("d-none"), g.removeClass("d-none")
            }
            n.off().on("submit", function(e) {
              if ((e.preventDefault(), !w())) return !1
              n.find("[type=submit]").prop("disabled", !0)
              var i = JSON.parse(o.val() || "{}")
              ;(i.Reason = parseInt(
                n.find(".js-ad-report-reason:checked").val(),
                10
              )),
                (i.Description = a.val()),
                o.val(JSON.stringify(i))
              var r = new FormData(n[0])
              return (
                $.ajax({
                  type: n.prop("method"),
                  url: n.prop("action"),
                  data: r,
                  cache: !1,
                  contentType: !1,
                  processData: !1,
                })
                  .then(
                    function(e, n, o) {
                      var i = o.getResponseHeader("content-type") || ""
                      if ("string" == typeof e && 0 == i.indexOf("text/html")) {
                        var a = $(e).find(".js-modal-content")
                        a.length > 0 && $(".js-modal-content").replaceWith(a)
                      } else
                        t.removeModal(),
                          StackExchange.helpers.showToast(
                            "Thanks for your feedback. We’ll review this against our code of conduct and take action if necessary.",
                            { type: "success" }
                          )
                    },
                    function() {
                      StackExchange.helpers.showToast(
                        "Error uploading ad report.",
                        { type: "danger" }
                      )
                    }
                  )
                  .always(function() {
                    n.find("[type=submit]").prop("disabled", !1)
                  }),
                !1
              )
            })
          }),
          AdReports
        )
      })()
    ads.init = init
  })((ads = StackExchange.ads || (StackExchange.ads = {})))
})(StackExchange || (StackExchange = {}))
var StackExchange
!(function(e) {
  var t
  !(function(t) {
    function n(n) {
      var o = $(
          '\n<aside class="s-modal" role="dialog" aria-labelledby="confirm-modal-title" aria-describedby="confirm-modal-body" aria-hidden="true">\n    <div class="s-modal--dialog ps-relative" data-controller="se-draggable" role="document">\n        <h1 class="s-modal--header fw-bold" id="confirm-modal-title" data-target="se-draggable.handle"></h1>\n        <div class="s-modal--body fs-body2" id="confirm-modal-body"></div>\n        <div class="grid gs8 gsx s-modal--footer">\n            <button class="grid--cell s-btn js-ok-button s-btn__primary" type="button"></button>\n            <button class="grid--cell s-btn js-cancel-button js-modal-close js-modal-initial-focus" type="button"></button>\n        </div>\n    </div>\n</aside>\n'
        ),
        i = function(e, t, n) {
          var i = o.find(e)
          t ? i.append(t) : n && i.text(n)
        }
      return (
        i("#confirm-modal-title", n.titleHtml, n.title),
        i("#confirm-modal-body", n.bodyHtml, n.body),
        i(".js-ok-button", n.buttonLabelHtml, n.buttonLabel || "OK"),
        i(".js-cancel-button", void 0, "Cancel"),
        new Promise(function(n) {
          t.showModal(o),
            o.find(".js-ok-button").click(function(t) {
              t.preventDefault(), n(!0), e.helpers.closePopups(o, "dismiss")
            }),
            o.on("popupClose", function() {
              return n(!1)
            })
        })
      )
    }
    t.showConfirmModal = n
  })((t = e.helpers || (e.helpers = {})))
})(StackExchange || (StackExchange = {}))
var Svg = (function() {
  function e() {}
  return (
    (e.GetImage = function() {
      return (
        e._placeholder ||
          ((e._placeholder = function() {
            throw "Svg icon getters must be initialized before an icon can be retrieved"
          }),
          (e._placeholder.With = e._placeholder)),
        e._placeholder
      )
    }),
    (e.init = function(t, n) {
      function o(t) {
        var n = function() {
          return e.get(t)
        }
        return (
          (n.With = function(n) {
            var o = e.get(t)
            return o.addClass(n), o
          }),
          n
        )
      }
      "/" !== t[t.length - 1] && (t += "/"),
        (e.rootPath = t),
        (e.cacheBreaker = n)
      var i = []
      for (var a in e)
        e.hasOwnProperty(a) && e[a] === e._placeholder && i.push(a)
      for (var r = 0; r < i.length; r++) e[i[r]] = o(i[r])
    }),
    (e.ensureCSS = function() {
      if (!e.cssAdded) {
        var t = document.createElement("style")
        t.setAttribute("type", "text/css"),
          (t.textContent =
            ".svg-skeleton-element-during-loading { display: none !important; }"),
          document.head && (document.head.appendChild(t), (e.cssAdded = !0))
      }
    }),
    (e.get = function(t) {
      e.ensureCSS()
      var n,
        o = e.cache[t]
      if ("string" == typeof o) {
        var i = document.createElement("div")
        i.innerHTML = o
        var a = i.children[0]
        return i.removeChild(a), $(a)
      }
      o && o.done
        ? (n = o)
        : ((n = $.ajax({
            url: e.rootPath + t + ".svg",
            data: { v: e.cacheBreaker },
            cache: !0,
            dataType: "text",
          })),
          (e.cache[t] = n))
      var r = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        s = $(r)
      return (
        s.addClass("svg-skeleton-element-during-loading"),
        n.done(function(n) {
          ;(n = n || ""), (e.cache[t] = n)
          for (
            var o = $("<div>" + n + "</div>"), i = o.children()[0];
            i.attributes.length;

          ) {
            var a = i.attributes[0]
            if ((i.removeAttributeNode(a), "class" === a.name))
              s.addClass(a.value)
            else {
              var c = a.namespaceURI
                ? r.hasAttributeNS(a.namespaceURI, a.name)
                : r.hasAttribute(a.name)
              c || r.setAttributeNodeNS(a)
            }
          }
          for (; i.childNodes.length; ) {
            var l = i.childNodes[0]
            i.removeChild(l), r.appendChild(l)
          }
          s.removeClass("svg-skeleton-element-during-loading")
        }),
        s
      )
    }),
    (e.Achievements = e.GetImage()),
    (e.AchievementsSm = e.GetImage()),
    (e.Alert = e.GetImage()),
    (e.AlertCircle = e.GetImage()),
    (e.AlertCircleSm = e.GetImage()),
    (e.AlertSm = e.GetImage()),
    (e.Answer = e.GetImage()),
    (e.Approve = e.GetImage()),
    (e.ArrowDoubleDown = e.GetImage()),
    (e.ArrowDoubleUp = e.GetImage()),
    (e.ArrowDown = e.GetImage()),
    (e.ArrowDownAlt = e.GetImage()),
    (e.ArrowDownLg = e.GetImage()),
    (e.ArrowDownSm = e.GetImage()),
    (e.ArrowLeft = e.GetImage()),
    (e.ArrowLeftAlt = e.GetImage()),
    (e.ArrowLeftSm = e.GetImage()),
    (e.ArrowRight = e.GetImage()),
    (e.ArrowRightAlt = e.GetImage()),
    (e.ArrowRightAltSm = e.GetImage()),
    (e.ArrowRightSm = e.GetImage()),
    (e.ArrowUp = e.GetImage()),
    (e.ArrowUpAlt = e.GetImage()),
    (e.ArrowUpDown = e.GetImage()),
    (e.ArrowUpDownSm = e.GetImage()),
    (e.ArrowUpLg = e.GetImage()),
    (e.ArrowUpSm = e.GetImage()),
    (e.Badge = e.GetImage()),
    (e.Balloon = e.GetImage()),
    (e.Bell = e.GetImage()),
    (e.Bold = e.GetImage()),
    (e.Book = e.GetImage()),
    (e.Briefcase = e.GetImage()),
    (e.BriefcaseSm = e.GetImage()),
    (e.Bullhorn = e.GetImage()),
    (e.BullhornSm = e.GetImage()),
    (e.Calendar = e.GetImage()),
    (e.Chair = e.GetImage()),
    (e.Checkmark = e.GetImage()),
    (e.CheckmarkLg = e.GetImage()),
    (e.CheckmarkSm = e.GetImage()),
    (e.Clap = e.GetImage()),
    (e.Clear = e.GetImage()),
    (e.ClearSm = e.GetImage()),
    (e.Clock = e.GetImage()),
    (e.Code = e.GetImage()),
    (e.Coins = e.GetImage()),
    (e.Columns = e.GetImage()),
    (e.Computer = e.GetImage()),
    (e.Copy = e.GetImage()),
    (e.CreditCard = e.GetImage()),
    (e.Crosshairs = e.GetImage()),
    (e.Currency = e.GetImage()),
    (e.DevTo = e.GetImage()),
    (e.Document = e.GetImage()),
    (e.Download = e.GetImage()),
    (e.DownloadSm = e.GetImage()),
    (e.Dropbox = e.GetImage()),
    (e.EllipsisHorizontal = e.GetImage()),
    (e.EllipsisVertical = e.GetImage()),
    (e.Eye = e.GetImage()),
    (e.EyeOff = e.GetImage()),
    (e.Eyes = e.GetImage()),
    (e.Facebook = e.GetImage()),
    (e.FaceFrown = e.GetImage()),
    (e.FaceJoy = e.GetImage()),
    (e.FaceMindBlown = e.GetImage()),
    (e.FaceNeutral = e.GetImage()),
    (e.FaceSad = e.GetImage()),
    (e.FaceShocked = e.GetImage()),
    (e.FaceSmile = e.GetImage()),
    (e.Female = e.GetImage()),
    (e.Fire = e.GetImage()),
    (e.FireSm = e.GetImage()),
    (e.Fitness = e.GetImage()),
    (e.Flag = e.GetImage()),
    (e.FlagSm = e.GetImage()),
    (e.Float = e.GetImage()),
    (e.Food = e.GetImage()),
    (e.Gear = e.GetImage()),
    (e.GearSm = e.GetImage()),
    (e.GitHub = e.GetImage()),
    (e.Gitlab = e.GetImage()),
    (e.Globe = e.GetImage()),
    (e.Google = e.GetImage()),
    (e.GoogleDrive = e.GetImage()),
    (e.Grabber = e.GetImage()),
    (e.Graph = e.GetImage()),
    (e.Grid = e.GetImage()),
    (e.Hamburger = e.GetImage()),
    (e.HandNice = e.GetImage()),
    (e.HandPointRight = e.GetImage()),
    (e.HandRock = e.GetImage()),
    (e.HandsTogether = e.GetImage()),
    (e.Header = e.GetImage()),
    (e.Health = e.GetImage()),
    (e.Heart = e.GetImage()),
    (e.Help = e.GetImage()),
    (e.HelpSm = e.GetImage()),
    (e.History = e.GetImage()),
    (e.Home = e.GetImage()),
    (e.HorizontalRule = e.GetImage()),
    (e.Hundred = e.GetImage()),
    (e.Image = e.GetImage()),
    (e.Inbox = e.GetImage()),
    (e.Indent = e.GetImage()),
    (e.Industry = e.GetImage()),
    (e.Info = e.GetImage()),
    (e.InfoSm = e.GetImage()),
    (e.International = e.GetImage()),
    (e.Italic = e.GetImage()),
    (e.Jira = e.GetImage()),
    (e.KeySmall = e.GetImage()),
    (e.Laptop = e.GetImage()),
    (e.LaunchPad = e.GetImage()),
    (e.Lightbulb = e.GetImage()),
    (e.Link = e.GetImage()),
    (e.LinkedIn = e.GetImage()),
    (e.Location = e.GetImage()),
    (e.Lock = e.GetImage()),
    (e.LockSm = e.GetImage()),
    (e.Logo = e.GetImage()),
    (e.LogoEnterprise = e.GetImage()),
    (e.LogoEnterpriseWordmarkSm = e.GetImage()),
    (e.LogoGlyph = e.GetImage()),
    (e.LogoGlyphMd = e.GetImage()),
    (e.LogoGlyphSm = e.GetImage()),
    (e.LogoGlyphXSm = e.GetImage()),
    (e.LogoGlyphXxs = e.GetImage()),
    (e.LogoJobs = e.GetImage()),
    (e.LogoMd = e.GetImage()),
    (e.LogoSE = e.GetImage()),
    (e.LogoSEAlternativeSm = e.GetImage()),
    (e.LogoSEGlyphMd = e.GetImage()),
    (e.LogoSEXxs = e.GetImage()),
    (e.LogoSm = e.GetImage()),
    (e.LogoTalent = e.GetImage()),
    (e.LogoTeams = e.GetImage()),
    (e.LogoTeamsAlt = e.GetImage()),
    (e.LogoTeamsAltMd = e.GetImage()),
    (e.LogoWordmark = e.GetImage()),
    (e.LogoWordmarkMd = e.GetImage()),
    (e.LogoWordmarkSm = e.GetImage()),
    (e.Mail = e.GetImage()),
    (e.Medal = e.GetImage()),
    (e.Merge = e.GetImage()),
    (e.Message = e.GetImage()),
    (e.Microsoft = e.GetImage()),
    (e.Migrate = e.GetImage()),
    (e.Milestone = e.GetImage()),
    (e.Minus = e.GetImage()),
    (e.MinusSm = e.GetImage()),
    (e.Moderator = e.GetImage()),
    (e.ModeratorSm = e.GetImage()),
    (e.Money = e.GetImage()),
    (e.NotInterested = e.GetImage()),
    (e.OpenSource = e.GetImage()),
    (e.OrderedList = e.GetImage()),
    (e.Outdent = e.GetImage()),
    (e.Paperclip = e.GetImage()),
    (e.Peak = e.GetImage()),
    (e.Pencil = e.GetImage()),
    (e.PencilSm = e.GetImage()),
    (e.People = e.GetImage()),
    (e.Person = e.GetImage()),
    (e.Phone = e.GetImage()),
    (e.Play = e.GetImage()),
    (e.Plus = e.GetImage()),
    (e.PlusOne = e.GetImage()),
    (e.PlusSm = e.GetImage()),
    (e.PromoteDemote = e.GetImage()),
    (e.Question = e.GetImage()),
    (e.Quote = e.GetImage()),
    (e.Refresh = e.GetImage()),
    (e.RefreshSm = e.GetImage()),
    (e.Relocation = e.GetImage()),
    (e.Remote = e.GetImage()),
    (e.ReviewQueue = e.GetImage()),
    (e.Rss = e.GetImage()),
    (e.School = e.GetImage()),
    (e.SchoolSm = e.GetImage()),
    (e.Search = e.GetImage()),
    (e.SearchSm = e.GetImage()),
    (e.Share = e.GetImage()),
    (e.ShareSm = e.GetImage()),
    (e.Shield = e.GetImage()),
    (e.ShieldSm = e.GetImage()),
    (e.ShieldXSm = e.GetImage()),
    (e.Skull = e.GetImage()),
    (e.Slack = e.GetImage()),
    (e.SmartPhone = e.GetImage()),
    (e.SOS = e.GetImage()),
    (e.SpeechBubble = e.GetImage()),
    (e.SpeechBubbleError = e.GetImage()),
    (e.SpeechBubbleSm = e.GetImage()),
    (e.StackExchange = e.GetImage()),
    (e.Star = e.GetImage()),
    (e.Stroller = e.GetImage()),
    (e.Subway = e.GetImage()),
    (e.Sync = e.GetImage()),
    (e.Tack = e.GetImage()),
    (e.Tada = e.GetImage()),
    (e.ThumbsDown = e.GetImage()),
    (e.ThumbsUp = e.GetImage()),
    (e.TIL = e.GetImage()),
    (e.Tool = e.GetImage()),
    (e.Trash = e.GetImage()),
    (e.TrashSm = e.GetImage()),
    (e.TrendingDown = e.GetImage()),
    (e.TrendingNone = e.GetImage()),
    (e.TrendingUp = e.GetImage()),
    (e.Twitter = e.GetImage()),
    (e.Undo = e.GetImage()),
    (e.UndoSm = e.GetImage()),
    (e.UnorderedList = e.GetImage()),
    (e.Vacation = e.GetImage()),
    (e.VK = e.GetImage()),
    (e.Wave = e.GetImage()),
    (e.Yandex = e.GetImage()),
    (e.cache = Object.create(null)),
    (e.cssAdded = !1),
    e
  )
})()
!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t((e.Stimulus = {}))
})(this, function(e) {
  function t(e) {
    if ("immediatePropagationStopped" in e) return e
    var t = e.stopImmediatePropagation
    return Object.assign(e, {
      immediatePropagationStopped: !1,
      stopImmediatePropagation: function() {
        ;(this.immediatePropagationStopped = !0), t.call(this)
      },
    })
  }
  function n(e) {
    var t = e.trim(),
      n = t.match(j) || []
    return {
      eventTarget: o(n[4]),
      eventName: n[2],
      identifier: n[5],
      methodName: n[7],
    }
  }
  function o(e) {
    return "window" == e ? window : "document" == e ? document : void 0
  }
  function i(e) {
    return e == window ? "window" : e == document ? "document" : void 0
  }
  function a(e) {
    var t = e.tagName.toLowerCase()
    return t in I ? I[t](e) : void 0
  }
  function r(e) {
    throw new Error(e)
  }
  function s(e, t, n) {
    l(e, t).add(n)
  }
  function c(e, t, n) {
    l(e, t).delete(n), u(e, t)
  }
  function l(e, t) {
    var n = e.get(t)
    return n || ((n = new Set()), e.set(t, n)), n
  }
  function u(e, t) {
    var n = e.get(t)
    null != n && 0 == n.size && e.delete(t)
  }
  function d(e, t, n) {
    return e
      .trim()
      .split(/\s+/)
      .filter(function(e) {
        return e.length
      })
      .map(function(e, o) {
        return { element: t, attributeName: n, content: e, index: o }
      })
  }
  function f(e, t) {
    var n = Math.max(e.length, t.length)
    return Array.from({ length: n }, function(n, o) {
      return [e[o], t[o]]
    })
  }
  function p(e, t) {
    return e && t && e.index == t.index && e.content == t.content
  }
  function h(e) {
    return {
      identifier: e.identifier,
      controllerConstructor: g(e.controllerConstructor),
    }
  }
  function g(e) {
    var t = F(e)
    return t.bless(), t
  }
  function m(e) {
    return e.replace(/([A-Z])/g, function(e, t) {
      return "-" + t.toLowerCase()
    })
  }
  function v(e, t) {
    return "[" + e + '~="' + t + '"]'
  }
  function b() {
    return new Promise(function(e) {
      "loading" == document.readyState
        ? document.addEventListener("DOMContentLoaded", e)
        : e()
    })
  }
  function y(e) {
    var t = e.prototype,
      n = w(e)
    n.forEach(function(e) {
      var n
      return $(
        t,
        ((n = {}),
        (n[e + "Target"] = {
          get: function() {
            var t = this.targets.find(e)
            if (t) return t
            throw new Error(
              'Missing target element "' + this.identifier + "." + e + '"'
            )
          },
        }),
        (n[e + "Targets"] = {
          get: function() {
            return this.targets.findAll(e)
          },
        }),
        (n["has" + S(e) + "Target"] = {
          get: function() {
            return this.targets.has(e)
          },
        }),
        n)
      )
    })
  }
  function w(e) {
    var t = k(e)
    return Array.from(
      t.reduce(function(e, t) {
        return (
          x(t).forEach(function(t) {
            return e.add(t)
          }),
          e
        )
      }, new Set())
    )
  }
  function k(e) {
    for (var t = []; e; ) t.push(e), (e = Object.getPrototypeOf(e))
    return t
  }
  function x(e) {
    var t = e.targets
    return Array.isArray(t) ? t : []
  }
  function $(e, t) {
    Object.keys(t).forEach(function(n) {
      if (!(n in e)) {
        var o = t[n]
        Object.defineProperty(e, n, o)
      }
    })
  }
  function S(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
  }
  var C = (function() {
      function e(e, t) {
        ;(this.eventTarget = e),
          (this.eventName = t),
          (this.unorderedBindings = new Set())
      }
      return (
        (e.prototype.connect = function() {
          this.eventTarget.addEventListener(this.eventName, this, !1)
        }),
        (e.prototype.disconnect = function() {
          this.eventTarget.removeEventListener(this.eventName, this, !1)
        }),
        (e.prototype.bindingConnected = function(e) {
          this.unorderedBindings.add(e)
        }),
        (e.prototype.bindingDisconnected = function(e) {
          this.unorderedBindings.delete(e)
        }),
        (e.prototype.handleEvent = function(e) {
          for (var n = t(e), o = 0, i = this.bindings; o < i.length; o++) {
            var a = i[o]
            if (n.immediatePropagationStopped) break
            a.handleEvent(n)
          }
        }),
        Object.defineProperty(e.prototype, "bindings", {
          get: function() {
            return Array.from(this.unorderedBindings).sort(function(e, t) {
              var n = e.index,
                o = t.index
              return o > n ? -1 : n > o ? 1 : 0
            })
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      )
    })(),
    E = (function() {
      function e(e) {
        ;(this.application = e),
          (this.eventListenerMaps = new Map()),
          (this.started = !1)
      }
      return (
        (e.prototype.start = function() {
          this.started ||
            ((this.started = !0),
            this.eventListeners.forEach(function(e) {
              return e.connect()
            }))
        }),
        (e.prototype.stop = function() {
          this.started &&
            ((this.started = !1),
            this.eventListeners.forEach(function(e) {
              return e.disconnect()
            }))
        }),
        Object.defineProperty(e.prototype, "eventListeners", {
          get: function() {
            return Array.from(this.eventListenerMaps.values()).reduce(function(
              e,
              t
            ) {
              return e.concat(Array.from(t.values()))
            },
            [])
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.bindingConnected = function(e) {
          this.fetchEventListenerForBinding(e).bindingConnected(e)
        }),
        (e.prototype.bindingDisconnected = function(e) {
          this.fetchEventListenerForBinding(e).bindingDisconnected(e)
        }),
        (e.prototype.handleError = function(e, t, n) {
          void 0 === n && (n = {}),
            this.application.handleError(e, "Error " + t, n)
        }),
        (e.prototype.fetchEventListenerForBinding = function(e) {
          var t = e.eventTarget,
            n = e.eventName
          return this.fetchEventListener(t, n)
        }),
        (e.prototype.fetchEventListener = function(e, t) {
          var n = this.fetchEventListenerMapForEventTarget(e),
            o = n.get(t)
          return o || ((o = this.createEventListener(e, t)), n.set(t, o)), o
        }),
        (e.prototype.createEventListener = function(e, t) {
          var n = new C(e, t)
          return this.started && n.connect(), n
        }),
        (e.prototype.fetchEventListenerMapForEventTarget = function(e) {
          var t = this.eventListenerMaps.get(e)
          return t || ((t = new Map()), this.eventListenerMaps.set(e, t)), t
        }),
        e
      )
    })(),
    j = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/,
    T = (function() {
      function e(e, t, n) {
        ;(this.element = e),
          (this.index = t),
          (this.eventTarget = n.eventTarget || e),
          (this.eventName = n.eventName || a(e) || r("missing event name")),
          (this.identifier = n.identifier || r("missing identifier")),
          (this.methodName = n.methodName || r("missing method name"))
      }
      return (
        (e.forToken = function(e) {
          return new this(e.element, e.index, n(e.content))
        }),
        (e.prototype.toString = function() {
          var e = this.eventTargetName ? "@" + this.eventTargetName : ""
          return (
            "" +
            this.eventName +
            e +
            "->" +
            this.identifier +
            "#" +
            this.methodName
          )
        }),
        Object.defineProperty(e.prototype, "eventTargetName", {
          get: function() {
            return i(this.eventTarget)
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      )
    })(),
    I = {
      a: function() {
        return "click"
      },
      button: function() {
        return "click"
      },
      form: function() {
        return "submit"
      },
      input: function(e) {
        return "submit" == e.getAttribute("type") ? "click" : "change"
      },
      select: function() {
        return "change"
      },
      textarea: function() {
        return "change"
      },
    },
    O = (function() {
      function e(e, t) {
        ;(this.context = e), (this.action = t)
      }
      return (
        Object.defineProperty(e.prototype, "index", {
          get: function() {
            return this.action.index
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "eventTarget", {
          get: function() {
            return this.action.eventTarget
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "identifier", {
          get: function() {
            return this.context.identifier
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.handleEvent = function(e) {
          this.willBeInvokedByEvent(e) && this.invokeWithEvent(e)
        }),
        Object.defineProperty(e.prototype, "eventName", {
          get: function() {
            return this.action.eventName
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "method", {
          get: function() {
            var e = this.controller[this.methodName]
            if ("function" == typeof e) return e
            throw new Error(
              'Action "' +
                this.action +
                '" references undefined method "' +
                this.methodName +
                '"'
            )
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.invokeWithEvent = function(e) {
          try {
            this.method.call(this.controller, e)
          } catch (t) {
            var n = this,
              o = n.identifier,
              i = n.controller,
              a = n.element,
              r = n.index,
              s = {
                identifier: o,
                controller: i,
                element: a,
                index: r,
                event: e,
              }
            this.context.handleError(
              t,
              'invoking action "' + this.action + '"',
              s
            )
          }
        }),
        (e.prototype.willBeInvokedByEvent = function(e) {
          var t = e.target
          return this.element === t
            ? !0
            : t instanceof Element && this.element.contains(t)
            ? this.scope.containsElement(t)
            : !0
        }),
        Object.defineProperty(e.prototype, "controller", {
          get: function() {
            return this.context.controller
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "methodName", {
          get: function() {
            return this.action.methodName
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "element", {
          get: function() {
            return this.scope.element
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "scope", {
          get: function() {
            return this.context.scope
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      )
    })(),
    P = (function() {
      function e(e, t) {
        var n = this
        ;(this.element = e),
          (this.started = !1),
          (this.delegate = t),
          (this.elements = new Set()),
          (this.mutationObserver = new MutationObserver(function(e) {
            return n.processMutations(e)
          }))
      }
      return (
        (e.prototype.start = function() {
          this.started ||
            ((this.started = !0),
            this.mutationObserver.observe(this.element, {
              attributes: !0,
              childList: !0,
              subtree: !0,
            }),
            this.refresh())
        }),
        (e.prototype.stop = function() {
          this.started &&
            (this.mutationObserver.takeRecords(),
            this.mutationObserver.disconnect(),
            (this.started = !1))
        }),
        (e.prototype.refresh = function() {
          if (this.started) {
            for (
              var e = new Set(this.matchElementsInTree()),
                t = 0,
                n = Array.from(this.elements);
              t < n.length;
              t++
            ) {
              var o = n[t]
              e.has(o) || this.removeElement(o)
            }
            for (var i = 0, a = Array.from(e); i < a.length; i++) {
              var o = a[i]
              this.addElement(o)
            }
          }
        }),
        (e.prototype.processMutations = function(e) {
          if (this.started)
            for (var t = 0, n = e; t < n.length; t++) {
              var o = n[t]
              this.processMutation(o)
            }
        }),
        (e.prototype.processMutation = function(e) {
          "attributes" == e.type
            ? this.processAttributeChange(e.target, e.attributeName)
            : "childList" == e.type &&
              (this.processRemovedNodes(e.removedNodes),
              this.processAddedNodes(e.addedNodes))
        }),
        (e.prototype.processAttributeChange = function(e, t) {
          var n = e
          this.elements.has(n)
            ? this.delegate.elementAttributeChanged && this.matchElement(n)
              ? this.delegate.elementAttributeChanged(n, t)
              : this.removeElement(n)
            : this.matchElement(n) && this.addElement(n)
        }),
        (e.prototype.processRemovedNodes = function(e) {
          for (var t = 0, n = Array.from(e); t < n.length; t++) {
            var o = n[t],
              i = this.elementFromNode(o)
            i && this.processTree(i, this.removeElement)
          }
        }),
        (e.prototype.processAddedNodes = function(e) {
          for (var t = 0, n = Array.from(e); t < n.length; t++) {
            var o = n[t],
              i = this.elementFromNode(o)
            i && this.elementIsActive(i) && this.processTree(i, this.addElement)
          }
        }),
        (e.prototype.matchElement = function(e) {
          return this.delegate.matchElement(e)
        }),
        (e.prototype.matchElementsInTree = function(e) {
          return (
            void 0 === e && (e = this.element),
            this.delegate.matchElementsInTree(e)
          )
        }),
        (e.prototype.processTree = function(e, t) {
          for (var n = 0, o = this.matchElementsInTree(e); n < o.length; n++) {
            var i = o[n]
            t.call(this, i)
          }
        }),
        (e.prototype.elementFromNode = function(e) {
          return e.nodeType == Node.ELEMENT_NODE ? e : void 0
        }),
        (e.prototype.elementIsActive = function(e) {
          return e.isConnected != this.element.isConnected
            ? !1
            : this.element.contains(e)
        }),
        (e.prototype.addElement = function(e) {
          this.elements.has(e) ||
            (this.elementIsActive(e) &&
              (this.elements.add(e),
              this.delegate.elementMatched && this.delegate.elementMatched(e)))
        }),
        (e.prototype.removeElement = function(e) {
          this.elements.has(e) &&
            (this.elements.delete(e),
            this.delegate.elementUnmatched && this.delegate.elementUnmatched(e))
        }),
        e
      )
    })(),
    A = (function() {
      function e(e, t, n) {
        ;(this.attributeName = t),
          (this.delegate = n),
          (this.elementObserver = new P(e, this))
      }
      return (
        Object.defineProperty(e.prototype, "element", {
          get: function() {
            return this.elementObserver.element
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "selector", {
          get: function() {
            return "[" + this.attributeName + "]"
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.start = function() {
          this.elementObserver.start()
        }),
        (e.prototype.stop = function() {
          this.elementObserver.stop()
        }),
        (e.prototype.refresh = function() {
          this.elementObserver.refresh()
        }),
        Object.defineProperty(e.prototype, "started", {
          get: function() {
            return this.elementObserver.started
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.matchElement = function(e) {
          return e.hasAttribute(this.attributeName)
        }),
        (e.prototype.matchElementsInTree = function(e) {
          var t = this.matchElement(e) ? [e] : [],
            n = Array.from(e.querySelectorAll(this.selector))
          return t.concat(n)
        }),
        (e.prototype.elementMatched = function(e) {
          this.delegate.elementMatchedAttribute &&
            this.delegate.elementMatchedAttribute(e, this.attributeName)
        }),
        (e.prototype.elementUnmatched = function(e) {
          this.delegate.elementUnmatchedAttribute &&
            this.delegate.elementUnmatchedAttribute(e, this.attributeName)
        }),
        (e.prototype.elementAttributeChanged = function(e, t) {
          this.delegate.elementAttributeValueChanged &&
            this.attributeName == t &&
            this.delegate.elementAttributeValueChanged(e, t)
        }),
        e
      )
    })(),
    M = (function() {
      function e() {
        this.valuesByKey = new Map()
      }
      return (
        Object.defineProperty(e.prototype, "values", {
          get: function() {
            var e = Array.from(this.valuesByKey.values())
            return e.reduce(function(e, t) {
              return e.concat(Array.from(t))
            }, [])
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "size", {
          get: function() {
            var e = Array.from(this.valuesByKey.values())
            return e.reduce(function(e, t) {
              return e + t.size
            }, 0)
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.add = function(e, t) {
          s(this.valuesByKey, e, t)
        }),
        (e.prototype.delete = function(e, t) {
          c(this.valuesByKey, e, t)
        }),
        (e.prototype.has = function(e, t) {
          var n = this.valuesByKey.get(e)
          return null != n && n.has(t)
        }),
        (e.prototype.hasKey = function(e) {
          return this.valuesByKey.has(e)
        }),
        (e.prototype.hasValue = function(e) {
          var t = Array.from(this.valuesByKey.values())
          return t.some(function(t) {
            return t.has(e)
          })
        }),
        (e.prototype.getValuesForKey = function(e) {
          var t = this.valuesByKey.get(e)
          return t ? Array.from(t) : []
        }),
        (e.prototype.getKeysForValue = function(e) {
          return Array.from(this.valuesByKey)
            .filter(function(t) {
              var n = (t[0], t[1])
              return n.has(e)
            })
            .map(function(e) {
              {
                var t = e[0]
                e[1]
              }
              return t
            })
        }),
        e
      )
    })(),
    _ =
      void 0 ||
      (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }
        return function(t, n) {
          function o() {
            this.constructor = t
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o()))
        }
      })(),
    D =
      ((function(e) {
        function t() {
          var t = e.call(this) || this
          return (t.keysByValue = new Map()), t
        }
        return (
          _(t, e),
          Object.defineProperty(t.prototype, "values", {
            get: function() {
              return Array.from(this.keysByValue.keys())
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.add = function(t, n) {
            e.prototype.add.call(this, t, n), s(this.keysByValue, n, t)
          }),
          (t.prototype.delete = function(t, n) {
            e.prototype.delete.call(this, t, n), c(this.keysByValue, n, t)
          }),
          (t.prototype.hasValue = function(e) {
            return this.keysByValue.has(e)
          }),
          (t.prototype.getKeysForValue = function(e) {
            var t = this.keysByValue.get(e)
            return t ? Array.from(t) : []
          }),
          t
        )
      })(M),
      (function() {
        function e(e, t, n) {
          ;(this.attributeObserver = new A(e, t, this)),
            (this.delegate = n),
            (this.tokensByElement = new M())
        }
        return (
          Object.defineProperty(e.prototype, "started", {
            get: function() {
              return this.attributeObserver.started
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.start = function() {
            this.attributeObserver.start()
          }),
          (e.prototype.stop = function() {
            this.attributeObserver.stop()
          }),
          (e.prototype.refresh = function() {
            this.attributeObserver.refresh()
          }),
          Object.defineProperty(e.prototype, "element", {
            get: function() {
              return this.attributeObserver.element
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "attributeName", {
            get: function() {
              return this.attributeObserver.attributeName
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.elementMatchedAttribute = function(e) {
            this.tokensMatched(this.readTokensForElement(e))
          }),
          (e.prototype.elementAttributeValueChanged = function(e) {
            var t = this.refreshTokensForElement(e),
              n = t[0],
              o = t[1]
            this.tokensUnmatched(n), this.tokensMatched(o)
          }),
          (e.prototype.elementUnmatchedAttribute = function(e) {
            this.tokensUnmatched(this.tokensByElement.getValuesForKey(e))
          }),
          (e.prototype.tokensMatched = function(e) {
            var t = this
            e.forEach(function(e) {
              return t.tokenMatched(e)
            })
          }),
          (e.prototype.tokensUnmatched = function(e) {
            var t = this
            e.forEach(function(e) {
              return t.tokenUnmatched(e)
            })
          }),
          (e.prototype.tokenMatched = function(e) {
            this.delegate.tokenMatched(e),
              this.tokensByElement.add(e.element, e)
          }),
          (e.prototype.tokenUnmatched = function(e) {
            this.delegate.tokenUnmatched(e),
              this.tokensByElement.delete(e.element, e)
          }),
          (e.prototype.refreshTokensForElement = function(e) {
            var t = this.tokensByElement.getValuesForKey(e),
              n = this.readTokensForElement(e),
              o = f(t, n).findIndex(function(e) {
                var t = e[0],
                  n = e[1]
                return !p(t, n)
              })
            return -1 == o ? [[], []] : [t.slice(o), n.slice(o)]
          }),
          (e.prototype.readTokensForElement = function(e) {
            var t = this.attributeName,
              n = e.getAttribute(t) || ""
            return d(n, e, t)
          }),
          e
        )
      })()),
    L = (function() {
      function e(e, t, n) {
        ;(this.tokenListObserver = new D(e, t, this)),
          (this.delegate = n),
          (this.parseResultsByToken = new WeakMap()),
          (this.valuesByTokenByElement = new WeakMap())
      }
      return (
        Object.defineProperty(e.prototype, "started", {
          get: function() {
            return this.tokenListObserver.started
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.start = function() {
          this.tokenListObserver.start()
        }),
        (e.prototype.stop = function() {
          this.tokenListObserver.stop()
        }),
        (e.prototype.refresh = function() {
          this.tokenListObserver.refresh()
        }),
        Object.defineProperty(e.prototype, "element", {
          get: function() {
            return this.tokenListObserver.element
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "attributeName", {
          get: function() {
            return this.tokenListObserver.attributeName
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.tokenMatched = function(e) {
          var t = e.element,
            n = this.fetchParseResultForToken(e).value
          n &&
            (this.fetchValuesByTokenForElement(t).set(e, n),
            this.delegate.elementMatchedValue(t, n))
        }),
        (e.prototype.tokenUnmatched = function(e) {
          var t = e.element,
            n = this.fetchParseResultForToken(e).value
          n &&
            (this.fetchValuesByTokenForElement(t).delete(e),
            this.delegate.elementUnmatchedValue(t, n))
        }),
        (e.prototype.fetchParseResultForToken = function(e) {
          var t = this.parseResultsByToken.get(e)
          return (
            t || ((t = this.parseToken(e)), this.parseResultsByToken.set(e, t)),
            t
          )
        }),
        (e.prototype.fetchValuesByTokenForElement = function(e) {
          var t = this.valuesByTokenByElement.get(e)
          return (
            t || ((t = new Map()), this.valuesByTokenByElement.set(e, t)), t
          )
        }),
        (e.prototype.parseToken = function(e) {
          try {
            var t = this.delegate.parseValueForToken(e)
            return { value: t }
          } catch (n) {
            return { error: n }
          }
        }),
        e
      )
    })(),
    q = (function() {
      function e(e, t) {
        ;(this.context = e),
          (this.delegate = t),
          (this.bindingsByAction = new Map())
      }
      return (
        (e.prototype.start = function() {
          this.valueListObserver ||
            ((this.valueListObserver = new L(
              this.element,
              this.actionAttribute,
              this
            )),
            this.valueListObserver.start())
        }),
        (e.prototype.stop = function() {
          this.valueListObserver &&
            (this.valueListObserver.stop(),
            delete this.valueListObserver,
            this.disconnectAllActions())
        }),
        Object.defineProperty(e.prototype, "element", {
          get: function() {
            return this.context.element
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "identifier", {
          get: function() {
            return this.context.identifier
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "actionAttribute", {
          get: function() {
            return this.schema.actionAttribute
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "schema", {
          get: function() {
            return this.context.schema
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "bindings", {
          get: function() {
            return Array.from(this.bindingsByAction.values())
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.connectAction = function(e) {
          var t = new O(this.context, e)
          this.bindingsByAction.set(e, t), this.delegate.bindingConnected(t)
        }),
        (e.prototype.disconnectAction = function(e) {
          var t = this.bindingsByAction.get(e)
          t &&
            (this.bindingsByAction.delete(e),
            this.delegate.bindingDisconnected(t))
        }),
        (e.prototype.disconnectAllActions = function() {
          var e = this
          this.bindings.forEach(function(t) {
            return e.delegate.bindingDisconnected(t)
          }),
            this.bindingsByAction.clear()
        }),
        (e.prototype.parseValueForToken = function(e) {
          var t = T.forToken(e)
          return t.identifier == this.identifier ? t : void 0
        }),
        (e.prototype.elementMatchedValue = function(e, t) {
          this.connectAction(t)
        }),
        (e.prototype.elementUnmatchedValue = function(e, t) {
          this.disconnectAction(t)
        }),
        e
      )
    })(),
    R = (function() {
      function e(e, t) {
        ;(this.module = e),
          (this.scope = t),
          (this.controller = new e.controllerConstructor(this)),
          (this.bindingObserver = new q(this, this.dispatcher))
        try {
          this.controller.initialize()
        } catch (n) {
          this.handleError(n, "initializing controller")
        }
      }
      return (
        (e.prototype.connect = function() {
          this.bindingObserver.start()
          try {
            this.controller.connect()
          } catch (e) {
            this.handleError(e, "connecting controller")
          }
        }),
        (e.prototype.disconnect = function() {
          try {
            this.controller.disconnect()
          } catch (e) {
            this.handleError(e, "disconnecting controller")
          }
          this.bindingObserver.stop()
        }),
        Object.defineProperty(e.prototype, "application", {
          get: function() {
            return this.module.application
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "identifier", {
          get: function() {
            return this.module.identifier
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "schema", {
          get: function() {
            return this.application.schema
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "dispatcher", {
          get: function() {
            return this.application.dispatcher
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "element", {
          get: function() {
            return this.scope.element
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "parentElement", {
          get: function() {
            return this.element.parentElement
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.handleError = function(e, t, n) {
          void 0 === n && (n = {})
          var o = this,
            i = o.identifier,
            a = o.controller,
            r = o.element
          ;(n = Object.assign({ identifier: i, controller: a, element: r }, n)),
            this.application.handleError(e, "Error " + t, n)
        }),
        e
      )
    })(),
    N =
      void 0 ||
      (function() {
        var e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }
        return function(t, n) {
          function o() {
            this.constructor = t
          }
          e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o()))
        }
      })(),
    F = (function() {
      function e(e) {
        function t() {
          var n = this && this instanceof t ? this.constructor : void 0
          return Reflect.construct(e, arguments, n)
        }
        return (
          (t.prototype = Object.create(e.prototype, {
            constructor: { value: t },
          })),
          Reflect.setPrototypeOf(t, e),
          t
        )
      }
      function t() {
        var t = function() {
            this.a.call(this)
          },
          n = e(t)
        return (n.prototype.a = function() {}), new n()
      }
      try {
        return t(), e
      } catch (n) {
        return function(e) {
          return (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this
            }
            return N(t, e), t
          })(e)
        }
      }
    })(),
    B = (function() {
      function e(e, t) {
        ;(this.application = e),
          (this.definition = h(t)),
          (this.contextsByScope = new WeakMap()),
          (this.connectedContexts = new Set())
      }
      return (
        Object.defineProperty(e.prototype, "identifier", {
          get: function() {
            return this.definition.identifier
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "controllerConstructor", {
          get: function() {
            return this.definition.controllerConstructor
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "contexts", {
          get: function() {
            return Array.from(this.connectedContexts)
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.connectContextForScope = function(e) {
          var t = this.fetchContextForScope(e)
          this.connectedContexts.add(t), t.connect()
        }),
        (e.prototype.disconnectContextForScope = function(e) {
          var t = this.contextsByScope.get(e)
          t && (this.connectedContexts.delete(t), t.disconnect())
        }),
        (e.prototype.fetchContextForScope = function(e) {
          var t = this.contextsByScope.get(e)
          return t || ((t = new R(this, e)), this.contextsByScope.set(e, t)), t
        }),
        e
      )
    })(),
    U = (function() {
      function e(e) {
        this.scope = e
      }
      return (
        Object.defineProperty(e.prototype, "element", {
          get: function() {
            return this.scope.element
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "identifier", {
          get: function() {
            return this.scope.identifier
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.get = function(e) {
          return (e = this.getFormattedKey(e)), this.element.getAttribute(e)
        }),
        (e.prototype.set = function(e, t) {
          return (
            (e = this.getFormattedKey(e)),
            this.element.setAttribute(e, t),
            this.get(e)
          )
        }),
        (e.prototype.has = function(e) {
          return (e = this.getFormattedKey(e)), this.element.hasAttribute(e)
        }),
        (e.prototype.delete = function(e) {
          return this.has(e)
            ? ((e = this.getFormattedKey(e)),
              this.element.removeAttribute(e),
              !0)
            : !1
        }),
        (e.prototype.getFormattedKey = function(e) {
          return "data-" + this.identifier + "-" + m(e)
        }),
        e
      )
    })(),
    V = (function() {
      function e(e) {
        this.scope = e
      }
      return (
        Object.defineProperty(e.prototype, "element", {
          get: function() {
            return this.scope.element
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "identifier", {
          get: function() {
            return this.scope.identifier
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "schema", {
          get: function() {
            return this.scope.schema
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.has = function(e) {
          return null != this.find(e)
        }),
        (e.prototype.find = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          var n = this.getSelectorForTargetNames(e)
          return this.scope.findElement(n)
        }),
        (e.prototype.findAll = function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          var n = this.getSelectorForTargetNames(e)
          return this.scope.findAllElements(n)
        }),
        (e.prototype.getSelectorForTargetNames = function(e) {
          var t = this
          return e
            .map(function(e) {
              return t.getSelectorForTargetName(e)
            })
            .join(", ")
        }),
        (e.prototype.getSelectorForTargetName = function(e) {
          var t = this.identifier + "." + e
          return v(this.schema.targetAttribute, t)
        }),
        e
      )
    })(),
    G = (function() {
      function e(e, t, n) {
        ;(this.schema = e),
          (this.identifier = t),
          (this.element = n),
          (this.targets = new V(this)),
          (this.data = new U(this))
      }
      return (
        (e.prototype.findElement = function(e) {
          return this.findAllElements(e)[0]
        }),
        (e.prototype.findAllElements = function(e) {
          var t = this.element.matches(e) ? [this.element] : [],
            n = this.filterElements(
              Array.from(this.element.querySelectorAll(e))
            )
          return t.concat(n)
        }),
        (e.prototype.filterElements = function(e) {
          var t = this
          return e.filter(function(e) {
            return t.containsElement(e)
          })
        }),
        (e.prototype.containsElement = function(e) {
          return e.closest(this.controllerSelector) === this.element
        }),
        Object.defineProperty(e.prototype, "controllerSelector", {
          get: function() {
            return v(this.schema.controllerAttribute, this.identifier)
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      )
    })(),
    H = (function() {
      function e(e, t, n) {
        ;(this.element = e),
          (this.schema = t),
          (this.delegate = n),
          (this.valueListObserver = new L(
            this.element,
            this.controllerAttribute,
            this
          )),
          (this.scopesByIdentifierByElement = new WeakMap()),
          (this.scopeReferenceCounts = new WeakMap())
      }
      return (
        (e.prototype.start = function() {
          this.valueListObserver.start()
        }),
        (e.prototype.stop = function() {
          this.valueListObserver.stop()
        }),
        Object.defineProperty(e.prototype, "controllerAttribute", {
          get: function() {
            return this.schema.controllerAttribute
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.parseValueForToken = function(e) {
          var t = e.element,
            n = e.content,
            o = this.fetchScopesByIdentifierForElement(t),
            i = o.get(n)
          return i || ((i = new G(this.schema, n, t)), o.set(n, i)), i
        }),
        (e.prototype.elementMatchedValue = function(e, t) {
          var n = (this.scopeReferenceCounts.get(t) || 0) + 1
          this.scopeReferenceCounts.set(t, n),
            1 == n && this.delegate.scopeConnected(t)
        }),
        (e.prototype.elementUnmatchedValue = function(e, t) {
          var n = this.scopeReferenceCounts.get(t)
          n &&
            (this.scopeReferenceCounts.set(t, n - 1),
            1 == n && this.delegate.scopeDisconnected(t))
        }),
        (e.prototype.fetchScopesByIdentifierForElement = function(e) {
          var t = this.scopesByIdentifierByElement.get(e)
          return (
            t || ((t = new Map()), this.scopesByIdentifierByElement.set(e, t)),
            t
          )
        }),
        e
      )
    })(),
    z = (function() {
      function e(e) {
        ;(this.application = e),
          (this.scopeObserver = new H(this.element, this.schema, this)),
          (this.scopesByIdentifier = new M()),
          (this.modulesByIdentifier = new Map())
      }
      return (
        Object.defineProperty(e.prototype, "element", {
          get: function() {
            return this.application.element
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "schema", {
          get: function() {
            return this.application.schema
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "controllerAttribute", {
          get: function() {
            return this.schema.controllerAttribute
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "modules", {
          get: function() {
            return Array.from(this.modulesByIdentifier.values())
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "contexts", {
          get: function() {
            return this.modules.reduce(function(e, t) {
              return e.concat(t.contexts)
            }, [])
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.start = function() {
          this.scopeObserver.start()
        }),
        (e.prototype.stop = function() {
          this.scopeObserver.stop()
        }),
        (e.prototype.loadDefinition = function(e) {
          this.unloadIdentifier(e.identifier)
          var t = new B(this.application, e)
          this.connectModule(t)
        }),
        (e.prototype.unloadIdentifier = function(e) {
          var t = this.modulesByIdentifier.get(e)
          t && this.disconnectModule(t)
        }),
        (e.prototype.getContextForElementAndIdentifier = function(e, t) {
          var n = this.modulesByIdentifier.get(t)
          return n
            ? n.contexts.find(function(t) {
                return t.element == e
              })
            : void 0
        }),
        (e.prototype.handleError = function(e, t, n) {
          this.application.handleError(e, t, n)
        }),
        (e.prototype.scopeConnected = function(e) {
          this.scopesByIdentifier.add(e.identifier, e)
          var t = this.modulesByIdentifier.get(e.identifier)
          t && t.connectContextForScope(e)
        }),
        (e.prototype.scopeDisconnected = function(e) {
          this.scopesByIdentifier.delete(e.identifier, e)
          var t = this.modulesByIdentifier.get(e.identifier)
          t && t.disconnectContextForScope(e)
        }),
        (e.prototype.connectModule = function(e) {
          this.modulesByIdentifier.set(e.identifier, e)
          var t = this.scopesByIdentifier.getValuesForKey(e.identifier)
          t.forEach(function(t) {
            return e.connectContextForScope(t)
          })
        }),
        (e.prototype.disconnectModule = function(e) {
          this.modulesByIdentifier.delete(e.identifier)
          var t = this.scopesByIdentifier.getValuesForKey(e.identifier)
          t.forEach(function(t) {
            return e.disconnectContextForScope(t)
          })
        }),
        e
      )
    })(),
    W = {
      controllerAttribute: "data-controller",
      actionAttribute: "data-action",
      targetAttribute: "data-target",
    },
    K =
      void 0 ||
      function(e, t, n, o) {
        return new (n || (n = Promise))(function(i, a) {
          function r(e) {
            try {
              c(o.next(e))
            } catch (t) {
              a(t)
            }
          }
          function s(e) {
            try {
              c(o["throw"](e))
            } catch (t) {
              a(t)
            }
          }
          function c(e) {
            e.done
              ? i(e.value)
              : new n(function(t) {
                  t(e.value)
                }).then(r, s)
          }
          c((o = o.apply(e, t || [])).next())
        })
      },
    Y =
      void 0 ||
      function(e, t) {
        function n(e) {
          return function(t) {
            return o([e, t])
          }
        }
        function o(n) {
          if (i) throw new TypeError("Generator is already executing.")
          for (; c; )
            try {
              if (
                ((i = 1),
                a &&
                  (r = a[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) &&
                  !(r = r.call(a, n[1])).done)
              )
                return r
              switch (((a = 0), r && (n = [0, r.value]), n[0])) {
                case 0:
                case 1:
                  r = n
                  break
                case 4:
                  return c.label++, { value: n[1], done: !1 }
                case 5:
                  c.label++, (a = n[1]), (n = [0])
                  continue
                case 7:
                  ;(n = c.ops.pop()), c.trys.pop()
                  continue
                default:
                  if (
                    ((r = c.trys),
                    !(r = r.length > 0 && r[r.length - 1]) &&
                      (6 === n[0] || 2 === n[0]))
                  ) {
                    c = 0
                    continue
                  }
                  if (3 === n[0] && (!r || (n[1] > r[0] && n[1] < r[3]))) {
                    c.label = n[1]
                    break
                  }
                  if (6 === n[0] && c.label < r[1]) {
                    ;(c.label = r[1]), (r = n)
                    break
                  }
                  if (r && c.label < r[2]) {
                    ;(c.label = r[2]), c.ops.push(n)
                    break
                  }
                  r[2] && c.ops.pop(), c.trys.pop()
                  continue
              }
              n = t.call(e, c)
            } catch (o) {
              ;(n = [6, o]), (a = 0)
            } finally {
              i = r = 0
            }
          if (5 & n[0]) throw n[1]
          return { value: n[0] ? n[1] : void 0, done: !0 }
        }
        var i,
          a,
          r,
          s,
          c = {
            label: 0,
            sent: function() {
              if (1 & r[0]) throw r[1]
              return r[1]
            },
            trys: [],
            ops: [],
          }
        return (
          (s = { next: n(0), throw: n(1), return: n(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function() {
              return this
            }),
          s
        )
      },
    Q = (function() {
      function e(e, t) {
        void 0 === e && (e = document.documentElement),
          void 0 === t && (t = W),
          (this.element = e),
          (this.schema = t),
          (this.dispatcher = new E(this)),
          (this.router = new z(this))
      }
      return (
        (e.start = function(t, n) {
          var o = new e(t, n)
          return o.start(), o
        }),
        (e.prototype.start = function() {
          return K(this, void 0, void 0, function() {
            return Y(this, function(e) {
              switch (e.label) {
                case 0:
                  return [4, b()]
                case 1:
                  return (
                    e.sent(), this.router.start(), this.dispatcher.start(), [2]
                  )
              }
            })
          })
        }),
        (e.prototype.stop = function() {
          this.router.stop(), this.dispatcher.stop()
        }),
        (e.prototype.register = function(e, t) {
          this.load({ identifier: e, controllerConstructor: t })
        }),
        (e.prototype.load = function(e) {
          for (var t = this, n = [], o = 1; o < arguments.length; o++)
            n[o - 1] = arguments[o]
          var i = Array.isArray(e) ? e : [e].concat(n)
          i.forEach(function(e) {
            return t.router.loadDefinition(e)
          })
        }),
        (e.prototype.unload = function(e) {
          for (var t = this, n = [], o = 1; o < arguments.length; o++)
            n[o - 1] = arguments[o]
          var i = Array.isArray(e) ? e : [e].concat(n)
          i.forEach(function(e) {
            return t.router.unloadIdentifier(e)
          })
        }),
        Object.defineProperty(e.prototype, "controllers", {
          get: function() {
            return this.router.contexts.map(function(e) {
              return e.controller
            })
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.getControllerForElementAndIdentifier = function(e, t) {
          var n = this.router.getContextForElementAndIdentifier(e, t)
          return n ? n.controller : null
        }),
        (e.prototype.handleError = function(e, t, n) {
          console.error("%s\n\n%o\n\n%o", t, e, n)
        }),
        e
      )
    })(),
    J = (function() {
      function e(e) {
        this.context = e
      }
      return (
        (e.bless = function() {
          y(this)
        }),
        Object.defineProperty(e.prototype, "application", {
          get: function() {
            return this.context.application
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "scope", {
          get: function() {
            return this.context.scope
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "element", {
          get: function() {
            return this.scope.element
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "identifier", {
          get: function() {
            return this.scope.identifier
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "targets", {
          get: function() {
            return this.scope.targets
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "data", {
          get: function() {
            return this.scope.data
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.initialize = function() {}),
        (e.prototype.connect = function() {}),
        (e.prototype.disconnect = function() {}),
        (e.targets = []),
        e
      )
    })()
  ;(e.Application = Q),
    (e.Context = R),
    (e.Controller = J),
    (e.defaultSchema = W),
    Object.defineProperty(e, "__esModule", { value: !0 })
}),
  (function(e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : ((e = e || self), t((e.Popper = {})))
  })(this, function(e) {
    function t(e) {
      var t = e.getBoundingClientRect()
      return {
        width: t.width,
        height: t.height,
        top: t.top,
        right: t.right,
        bottom: t.bottom,
        left: t.left,
        x: t.left,
        y: t.top,
      }
    }
    function n(e) {
      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument
        return t ? t.defaultView : window
      }
      return e
    }
    function o(e) {
      var t = n(e),
        o = t.pageXOffset,
        i = t.pageYOffset
      return { scrollLeft: o, scrollTop: i }
    }
    function i(e) {
      var t = n(e).Element
      return e instanceof t || e instanceof Element
    }
    function a(e) {
      var t = n(e).HTMLElement
      return e instanceof t || e instanceof HTMLElement
    }
    function r(e) {
      return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    }
    function s(e) {
      return e !== n(e) && a(e) ? r(e) : o(e)
    }
    function c(e) {
      return e ? (e.nodeName || "").toLowerCase() : null
    }
    function l(e) {
      return (i(e) ? e.ownerDocument : e.document).documentElement
    }
    function u(e) {
      return t(l(e)).left + o(e).scrollLeft
    }
    function d(e) {
      return n(e).getComputedStyle(e)
    }
    function f(e) {
      var t = d(e),
        n = t.overflow,
        o = t.overflowX,
        i = t.overflowY
      return /auto|scroll|overlay|hidden/.test(n + i + o)
    }
    function p(e, n, o) {
      void 0 === o && (o = !1)
      var i = l(n),
        r = t(e),
        d = { scrollLeft: 0, scrollTop: 0 },
        p = { x: 0, y: 0 }
      return (
        o ||
          (("body" !== c(n) || f(i)) && (d = s(n)),
          a(n)
            ? ((p = t(n)), (p.x += n.clientLeft), (p.y += n.clientTop))
            : i && (p.x = u(i))),
        {
          x: r.left + d.scrollLeft - p.x,
          y: r.top + d.scrollTop - p.y,
          width: r.width,
          height: r.height,
        }
      )
    }
    function h(e) {
      return {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: e.offsetWidth,
        height: e.offsetHeight,
      }
    }
    function g(e) {
      return "html" === c(e)
        ? e
        : e.assignedSlot || e.parentNode || e.host || l(e)
    }
    function m(e) {
      return ["html", "body", "#document"].indexOf(c(e)) >= 0
        ? e.ownerDocument.body
        : a(e) && f(e)
        ? e
        : m(g(e))
    }
    function v(e, t) {
      void 0 === t && (t = [])
      var o = m(e),
        i = "body" === c(o),
        a = n(o),
        r = i ? [a].concat(a.visualViewport || [], f(o) ? o : []) : o,
        s = t.concat(r)
      return i ? s : s.concat(v(g(r)))
    }
    function b(e) {
      return ["table", "td", "th"].indexOf(c(e)) >= 0
    }
    function y(e) {
      return a(e) && "fixed" !== d(e).position ? e.offsetParent : null
    }
    function w(e) {
      for (var t = n(e), o = y(e); o && b(o); ) o = y(o)
      return o && "body" === c(o) && "static" === d(o).position ? t : o || t
    }
    function k(e) {
      function t(e) {
        o.add(e.name)
        var a = [].concat(e.requires || [], e.requiresIfExists || [])
        a.forEach(function(e) {
          if (!o.has(e)) {
            var i = n.get(e)
            i && t(i)
          }
        }),
          i.push(e)
      }
      var n = new Map(),
        o = new Set(),
        i = []
      return (
        e.forEach(function(e) {
          n.set(e.name, e)
        }),
        e.forEach(function(e) {
          o.has(e.name) || t(e)
        }),
        i
      )
    }
    function x(e) {
      var t = k(e)
      return Nt.reduce(function(e, n) {
        return e.concat(
          t.filter(function(e) {
            return e.phase === n
          })
        )
      }, [])
    }
    function $(e) {
      var t
      return function() {
        return (
          t ||
            (t = new Promise(function(n) {
              Promise.resolve().then(function() {
                ;(t = void 0), n(e())
              })
            })),
          t
        )
      }
    }
    function S(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        t > o;
        o++
      )
        n[o - 1] = arguments[o]
      return [].concat(n).reduce(function(e, t) {
        return e.replace(/%s/, t)
      }, e)
    }
    function C(e) {
      e.forEach(function(t) {
        Object.keys(t).forEach(function(n) {
          switch (n) {
            case "name":
              "string" != typeof t.name &&
                console.error(
                  S(
                    Ft,
                    String(t.name),
                    '"name"',
                    '"string"',
                    '"' + String(t.name) + '"'
                  )
                )
              break
            case "enabled":
              "boolean" != typeof t.enabled &&
                console.error(
                  S(
                    Ft,
                    t.name,
                    '"enabled"',
                    '"boolean"',
                    '"' + String(t.enabled) + '"'
                  )
                )
            case "phase":
              Nt.indexOf(t.phase) < 0 &&
                console.error(
                  S(
                    Ft,
                    t.name,
                    '"phase"',
                    "either " + Nt.join(", "),
                    '"' + String(t.phase) + '"'
                  )
                )
              break
            case "fn":
              "function" != typeof t.fn &&
                console.error(
                  S(Ft, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"')
                )
              break
            case "effect":
              "function" != typeof t.effect &&
                console.error(
                  S(
                    Ft,
                    t.name,
                    '"effect"',
                    '"function"',
                    '"' + String(t.fn) + '"'
                  )
                )
              break
            case "requires":
              Array.isArray(t.requires) ||
                console.error(
                  S(
                    Ft,
                    t.name,
                    '"requires"',
                    '"array"',
                    '"' + String(t.requires) + '"'
                  )
                )
              break
            case "requiresIfExists":
              Array.isArray(t.requiresIfExists) ||
                console.error(
                  S(
                    Ft,
                    t.name,
                    '"requiresIfExists"',
                    '"array"',
                    '"' + String(t.requiresIfExists) + '"'
                  )
                )
              break
            case "options":
            case "data":
              break
            default:
              console.error(
                'PopperJS: an invalid property has been provided to the "' +
                  t.name +
                  '" modifier, valid properties are ' +
                  Ut.map(function(e) {
                    return '"' + e + '"'
                  }).join(", ") +
                  '; but "' +
                  n +
                  '" was provided.'
              )
          }
          t.requires &&
            t.requires.forEach(function(n) {
              null ==
                e.find(function(e) {
                  return e.name === n
                }) && console.error(S(Bt, String(t.name), n, n))
            })
        })
      })
    }
    function E(e, t) {
      var n = new Set()
      return e.filter(function(e) {
        var o = t(e)
        return n.has(o) ? void 0 : (n.add(o), !0)
      })
    }
    function j(e) {
      return e.split("-")[0]
    }
    function T(e) {
      var t = e.reduce(function(e, t) {
        var n = e[t.name]
        return (
          (e[t.name] = n
            ? Object.assign({}, n, {}, t, {
                options: Object.assign({}, n.options, {}, t.options),
                data: Object.assign({}, n.data, {}, t.data),
              })
            : t),
          e
        )
      }, {})
      return Object.keys(t).map(function(e) {
        return t[e]
      })
    }
    function I() {
      for (var e = arguments.length, t = new Array(e), n = 0; e > n; n++)
        t[n] = arguments[n]
      return !t.some(function(e) {
        return !(e && "function" == typeof e.getBoundingClientRect)
      })
    }
    function O(e) {
      void 0 === e && (e = {})
      var t = e,
        n = t.defaultModifiers,
        o = void 0 === n ? [] : n,
        a = t.defaultOptions,
        r = void 0 === a ? Ht : a
      return function(e, t, n) {
        function a() {
          c.orderedModifiers.forEach(function(e) {
            var t = e.name,
              n = e.options,
              o = void 0 === n ? {} : n,
              i = e.effect
            if ("function" == typeof i) {
              var a = i({ state: c, name: t, instance: f, options: o }),
                r = function() {}
              l.push(a || r)
            }
          })
        }
        function s() {
          l.forEach(function(e) {
            return e()
          }),
            (l = [])
        }
        void 0 === n && (n = r)
        var c = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Ht, {}, r),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          l = [],
          u = !1,
          f = {
            state: c,
            setOptions: function(n) {
              s(),
                (c.options = Object.assign({}, r, {}, c.options, {}, n)),
                (c.scrollParents = {
                  reference: i(e)
                    ? v(e)
                    : e.contextElement
                    ? v(e.contextElement)
                    : [],
                  popper: v(t),
                })
              var l = x(T([].concat(o, c.options.modifiers)))
              c.orderedModifiers = l.filter(function(e) {
                return e.enabled
              })
              var u = E([].concat(l, c.options.modifiers), function(e) {
                var t = e.name
                return t
              })
              if ((C(u), j(c.options.placement) === wt)) {
                var p = c.orderedModifiers.find(function(e) {
                  var t = e.name
                  return "flip" === t
                })
                p ||
                  console.error(
                    [
                      'Popper: "auto" placements require the "flip" modifier be',
                      "present and enabled to work.",
                    ].join(" ")
                  )
              }
              var h = d(t),
                g = h.marginTop,
                m = h.marginRight,
                b = h.marginBottom,
                y = h.marginLeft
              return (
                [g, m, b, y].some(function(e) {
                  return parseFloat(e)
                }) &&
                  console.warn(
                    [
                      'Popper: CSS "margin" styles cannot be used to apply padding',
                      "between the popper and its reference element or boundary.",
                      "To replicate margin, use the `offset` modifier, as well as",
                      "the `padding` option in the `preventOverflow` and `flip`",
                      "modifiers.",
                    ].join(" ")
                  ),
                a(),
                f.update()
              )
            },
            forceUpdate: function() {
              if (!u) {
                var e = c.elements,
                  t = e.reference,
                  n = e.popper
                if (!I(t, n)) return console.error(Vt), void 0
                ;(c.rects = {
                  reference: p(t, w(n), "fixed" === c.options.strategy),
                  popper: h(n),
                }),
                  (c.reset = !1),
                  (c.placement = c.options.placement),
                  c.orderedModifiers.forEach(function(e) {
                    return (c.modifiersData[e.name] = Object.assign({}, e.data))
                  })
                for (var o = 0, i = 0; i < c.orderedModifiers.length; i++) {
                  if (((o += 1), o > 100)) {
                    console.error(Gt)
                    break
                  }
                  if (c.reset !== !0) {
                    var a = c.orderedModifiers[i],
                      r = a.fn,
                      s = a.options,
                      l = void 0 === s ? {} : s,
                      d = a.name
                    "function" == typeof r &&
                      (c =
                        r({ state: c, options: l, name: d, instance: f }) || c)
                  } else (c.reset = !1), (i = -1)
                }
              }
            },
            update: $(function() {
              return new Promise(function(e) {
                f.forceUpdate(), e(c)
              })
            }),
            destroy: function() {
              s(), (u = !0)
            },
          }
        return I(e, t)
          ? (f.setOptions(n).then(function(e) {
              !u && n.onFirstUpdate && n.onFirstUpdate(e)
            }),
            f)
          : (console.error(Vt), f)
      }
    }
    function P(e) {
      var t = e.state,
        o = e.instance,
        i = e.options,
        a = i.scroll,
        r = void 0 === a ? !0 : a,
        s = i.resize,
        c = void 0 === s ? !0 : s,
        l = n(t.elements.popper),
        u = [].concat(t.scrollParents.reference, t.scrollParents.popper)
      return (
        r &&
          u.forEach(function(e) {
            e.addEventListener("scroll", o.update, zt)
          }),
        c && l.addEventListener("resize", o.update, zt),
        function() {
          r &&
            u.forEach(function(e) {
              e.removeEventListener("scroll", o.update, zt)
            }),
            c && l.removeEventListener("resize", o.update, zt)
        }
      )
    }
    function A(e) {
      return e.split("-")[1]
    }
    function M(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }
    function _(e) {
      var t,
        n = e.reference,
        o = e.element,
        i = e.placement,
        a = i ? j(i) : null,
        r = i ? A(i) : null,
        s = n.x + n.width / 2 - o.width / 2,
        c = n.y + n.height / 2 - o.height / 2
      switch (a) {
        case mt:
          t = { x: s, y: n.y - o.height }
          break
        case vt:
          t = { x: s, y: n.y + n.height }
          break
        case bt:
          t = { x: n.x + n.width, y: c }
          break
        case yt:
          t = { x: n.x - o.width, y: c }
          break
        default:
          t = { x: n.x, y: n.y }
      }
      var l = a ? M(a) : null
      if (null != l) {
        var u = "y" === l ? "height" : "width"
        switch (r) {
          case xt:
            t[l] = Math.floor(t[l]) - Math.floor(n[u] / 2 - o[u] / 2)
            break
          case $t:
            t[l] = Math.floor(t[l]) + Math.ceil(n[u] / 2 - o[u] / 2)
        }
      }
      return t
    }
    function D(e) {
      var t = e.state,
        n = e.name
      t.modifiersData[n] = _({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement,
      })
    }
    function L(e) {
      var t = e.x,
        n = e.y,
        o = window,
        i = o.devicePixelRatio || 1
      return { x: Math.round(t * i) / i || 0, y: Math.round(n * i) / i || 0 }
    }
    function q(e) {
      var t,
        o = e.popper,
        i = e.popperRect,
        a = e.placement,
        r = e.offsets,
        s = e.position,
        c = e.gpuAcceleration,
        u = e.adaptive,
        d = L(r),
        f = d.x,
        p = d.y,
        h = r.hasOwnProperty("x"),
        g = r.hasOwnProperty("y"),
        m = yt,
        v = mt,
        b = window
      if (u) {
        var y = w(o)
        y === n(o) && (y = l(o)),
          a === mt &&
            ((v = vt), (p -= y.clientHeight - i.height), (p *= c ? 1 : -1)),
          a === yt &&
            ((m = bt), (f -= y.clientWidth - i.width), (f *= c ? 1 : -1))
      }
      var k = Object.assign({ position: s }, u && Yt)
      if (c) {
        var x
        return Object.assign(
          {},
          k,
          ((x = {}),
          (x[v] = g ? "0" : ""),
          (x[m] = h ? "0" : ""),
          (x.transform =
            (b.devicePixelRatio || 1) < 2
              ? "translate(" + f + "px, " + p + "px)"
              : "translate3d(" + f + "px, " + p + "px, 0)"),
          x)
        )
      }
      return Object.assign(
        {},
        k,
        ((t = {}),
        (t[v] = g ? p + "px" : ""),
        (t[m] = h ? f + "px" : ""),
        (t.transform = ""),
        t)
      )
    }
    function R(e) {
      var t = e.state,
        n = e.options,
        o = n.gpuAcceleration,
        i = void 0 === o ? !0 : o,
        a = n.adaptive,
        r = void 0 === a ? !0 : a,
        s = d(t.elements.popper).transitionProperty || ""
      r &&
        ["transform", "top", "right", "bottom", "left"].some(function(e) {
          return s.indexOf(e) >= 0
        }) &&
        console.warn(
          [
            "Popper: Detected CSS transitions on at least one of the following",
            'CSS properties: "transform", "top", "right", "bottom", "left".',
            "\n\n",
            'Disable the "computeStyles" modifier\'s `adaptive` option to allow',
            "for smooth transitions, or remove these properties from the CSS",
            "transition declaration on the popper element if only transitioning",
            "opacity or background-color for example.",
            "\n\n",
            "We recommend using the popper element as a wrapper around an inner",
            "element that can have any CSS property transitioned for animations.",
          ].join(" ")
        )
      var c = {
        placement: j(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: i,
      }
      null != t.modifiersData.popperOffsets &&
        (t.styles.popper = Object.assign(
          {},
          t.styles.popper,
          {},
          q(
            Object.assign({}, c, {
              offsets: t.modifiersData.popperOffsets,
              position: t.options.strategy,
              adaptive: r,
            })
          )
        )),
        null != t.modifiersData.arrow &&
          (t.styles.arrow = Object.assign(
            {},
            t.styles.arrow,
            {},
            q(
              Object.assign({}, c, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
              })
            )
          )),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-placement": t.placement,
        }))
    }
    function N(e) {
      var t = e.state
      Object.keys(t.elements).forEach(function(e) {
        var n = t.styles[e] || {},
          o = t.attributes[e] || {},
          i = t.elements[e]
        a(i) &&
          c(i) &&
          (Object.assign(i.style, n),
          Object.keys(o).forEach(function(e) {
            var t = o[e]
            t === !1
              ? i.removeAttribute(e)
              : i.setAttribute(e, t === !0 ? "" : t)
          }))
      })
    }
    function F(e) {
      var t = e.state,
        n = {
          popper: {
            position: t.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        }
      return (
        Object.assign(t.elements.popper.style, n.popper),
        t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
        function() {
          Object.keys(t.elements).forEach(function(e) {
            var o = t.elements[e],
              i = t.attributes[e] || {},
              r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]),
              s = r.reduce(function(e, t) {
                return (e[t] = ""), e
              }, {})
            a(o) &&
              c(o) &&
              (Object.assign(o.style, s),
              Object.keys(i).forEach(function(e) {
                o.removeAttribute(e)
              }))
          })
        }
      )
    }
    function B(e, t, n) {
      var o = j(e),
        i = [yt, mt].indexOf(o) >= 0 ? -1 : 1,
        a =
          "function" == typeof n
            ? n(Object.assign({}, t, { placement: e }))
            : n,
        r = a[0],
        s = a[1]
      return (
        (r = r || 0),
        (s = (s || 0) * i),
        [yt, bt].indexOf(o) >= 0 ? { x: s, y: r } : { x: r, y: s }
      )
    }
    function U(e) {
      var t = e.state,
        n = e.options,
        o = e.name,
        i = n.offset,
        a = void 0 === i ? [0, 0] : i,
        r = It.reduce(function(e, n) {
          return (e[n] = B(n, t.rects, a)), e
        }, {}),
        s = r[t.placement],
        c = s.x,
        l = s.y
      null != t.modifiersData.popperOffsets &&
        ((t.modifiersData.popperOffsets.x += c),
        (t.modifiersData.popperOffsets.y += l)),
        (t.modifiersData[o] = r)
    }
    function V(e) {
      return e.replace(/left|right|bottom|top/g, function(e) {
        return Zt[e]
      })
    }
    function G(e) {
      return e.replace(/start|end/g, function(e) {
        return en[e]
      })
    }
    function H(e) {
      var t = n(e),
        o = t.visualViewport,
        i = t.innerWidth,
        a = t.innerHeight
      return (
        o &&
          /iPhone|iPod|iPad/.test(navigator.platform) &&
          ((i = o.width), (a = o.height)),
        { width: i, height: a, x: 0, y: 0 }
      )
    }
    function z(e) {
      var t = n(e),
        i = o(e),
        a = p(l(e), t)
      return (
        (a.height = Math.max(a.height, t.innerHeight)),
        (a.width = Math.max(a.width, t.innerWidth)),
        (a.x = -i.scrollLeft),
        (a.y = -i.scrollTop),
        a
      )
    }
    function W(e) {
      return parseFloat(e) || 0
    }
    function K(e) {
      var t = a(e) ? d(e) : {}
      return {
        top: W(t.borderTopWidth),
        right: W(t.borderRightWidth),
        bottom: W(t.borderBottomWidth),
        left: W(t.borderLeftWidth),
      }
    }
    function Y(e) {
      var t = n(e),
        o = K(e),
        i = "html" === c(e),
        a = u(e),
        r = e.clientWidth + o.right,
        s = e.clientHeight + o.bottom
      return (
        i &&
          t.innerHeight - e.clientHeight > 50 &&
          (s = t.innerHeight - o.bottom),
        {
          top: i ? 0 : e.clientTop,
          right:
            e.clientLeft > o.left
              ? o.right
              : i
              ? t.innerWidth - r - a
              : e.offsetWidth - r,
          bottom: i ? t.innerHeight - s : e.offsetHeight - s,
          left: i ? a : e.clientLeft,
        }
      )
    }
    function Q(e, t) {
      var n = Boolean(t.getRootNode && t.getRootNode().host)
      if (e.contains(t)) return !0
      if (n) {
        var o = t
        do {
          if (o && e.isSameNode(o)) return !0
          o = o.parentNode || o.host
        } while (o)
      }
      return !1
    }
    function J(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      })
    }
    function X(e, n) {
      return n === Ct ? J(H(e)) : a(n) ? t(n) : J(z(l(e)))
    }
    function Z(e) {
      var t = v(e),
        n = ["absolute", "fixed"].indexOf(d(e).position) >= 0,
        o = n && a(e) ? w(e) : e
      return i(o)
        ? t.filter(function(e) {
            return i(e) && Q(e, o)
          })
        : []
    }
    function et(e, t, n) {
      var o = "clippingParents" === t ? Z(e) : [].concat(t),
        i = [].concat(o, [n]),
        r = i[0],
        s = i.reduce(function(t, n) {
          var o = X(e, n),
            i = Y(a(n) ? n : l(e))
          return (
            (t.top = Math.max(o.top + i.top, t.top)),
            (t.right = Math.min(o.right - i.right, t.right)),
            (t.bottom = Math.min(o.bottom - i.bottom, t.bottom)),
            (t.left = Math.max(o.left + i.left, t.left)),
            t
          )
        }, X(e, r))
      return (
        (s.width = s.right - s.left),
        (s.height = s.bottom - s.top),
        (s.x = s.left),
        (s.y = s.top),
        s
      )
    }
    function tt() {
      return { top: 0, right: 0, bottom: 0, left: 0 }
    }
    function nt(e) {
      return Object.assign({}, tt(), {}, e)
    }
    function ot(e, t) {
      return t.reduce(function(t, n) {
        return (t[n] = e), t
      }, {})
    }
    function it(e, n) {
      void 0 === n && (n = {})
      var o = n,
        a = o.placement,
        r = void 0 === a ? e.placement : a,
        s = o.boundary,
        c = void 0 === s ? St : s,
        u = o.rootBoundary,
        d = void 0 === u ? Ct : u,
        f = o.elementContext,
        p = void 0 === f ? Et : f,
        h = o.altBoundary,
        g = void 0 === h ? !1 : h,
        m = o.padding,
        v = void 0 === m ? 0 : m,
        b = nt("number" != typeof v ? v : ot(v, kt)),
        y = p === Et ? jt : Et,
        w = e.elements.reference,
        k = e.rects.popper,
        x = e.elements[g ? y : p],
        $ = et(i(x) ? x : x.contextElement || l(e.elements.popper), c, d),
        S = t(w),
        C = _({ reference: S, element: k, strategy: "absolute", placement: r }),
        E = J(Object.assign({}, k, {}, C)),
        j = p === Et ? E : S,
        T = {
          top: $.top - j.top + b.top,
          bottom: j.bottom - $.bottom + b.bottom,
          left: $.left - j.left + b.left,
          right: j.right - $.right + b.right,
        },
        I = e.modifiersData.offset
      if (p === Et && I) {
        var O = I[r]
        Object.keys(T).forEach(function(e) {
          var t = [bt, vt].indexOf(e) >= 0 ? 1 : -1,
            n = [mt, vt].indexOf(e) >= 0 ? "y" : "x"
          T[e] += O[n] * t
        })
      }
      return T
    }
    function at(e, t) {
      void 0 === t && (t = {})
      var n = t,
        o = n.placement,
        i = n.boundary,
        a = n.rootBoundary,
        r = n.padding,
        s = n.flipVariations,
        c = n.allowedAutoPlacements,
        l = void 0 === c ? It : c,
        u = A(o),
        d = (u
          ? s
            ? Tt
            : Tt.filter(function(e) {
                return A(e) === u
              })
          : kt
        ).filter(function(e) {
          return l.indexOf(e) >= 0
        }),
        f = d.reduce(function(t, n) {
          return (
            (t[n] = it(e, {
              placement: n,
              boundary: i,
              rootBoundary: a,
              padding: r,
            })[j(n)]),
            t
          )
        }, {})
      return Object.keys(f).sort(function(e, t) {
        return f[e] - f[t]
      })
    }
    function rt(e) {
      if (j(e) === wt) return []
      var t = V(e)
      return [G(e), t, G(t)]
    }
    function st(e) {
      var t = e.state,
        n = e.options,
        o = e.name
      if (!t.modifiersData[o]._skip) {
        for (
          var i = n.mainAxis,
            a = void 0 === i ? !0 : i,
            r = n.altAxis,
            s = void 0 === r ? !0 : r,
            c = n.fallbackPlacements,
            l = n.padding,
            u = n.boundary,
            d = n.rootBoundary,
            f = n.altBoundary,
            p = n.flipVariations,
            h = void 0 === p ? !0 : p,
            g = n.allowedAutoPlacements,
            m = t.options.placement,
            v = j(m),
            b = v === m,
            y = c || (b || !h ? [V(m)] : rt(m)),
            w = [m].concat(y).reduce(function(e, n) {
              return e.concat(
                j(n) === wt
                  ? at(t, {
                      placement: n,
                      boundary: u,
                      rootBoundary: d,
                      padding: l,
                      flipVariations: h,
                      allowedAutoPlacements: g,
                    })
                  : n
              )
            }, []),
            k = t.rects.reference,
            x = t.rects.popper,
            $ = new Map(),
            S = !0,
            C = w[0],
            E = 0;
          E < w.length;
          E++
        ) {
          var T = w[E],
            I = j(T),
            O = A(T) === xt,
            P = [mt, vt].indexOf(I) >= 0,
            M = P ? "width" : "height",
            _ = it(t, {
              placement: T,
              boundary: u,
              rootBoundary: d,
              altBoundary: f,
              padding: l,
            }),
            D = P ? (O ? bt : yt) : O ? vt : mt
          k[M] > x[M] && (D = V(D))
          var L = V(D),
            q = []
          if (
            (a && q.push(_[I] <= 0),
            s && q.push(_[D] <= 0, _[L] <= 0),
            q.every(function(e) {
              return e
            }))
          ) {
            ;(C = T), (S = !1)
            break
          }
          $.set(T, q)
        }
        if (S)
          for (
            var R = h ? 3 : 1,
              N = function(e) {
                var t = w.find(function(t) {
                  var n = $.get(t)
                  return n
                    ? n.slice(0, e).every(function(e) {
                        return e
                      })
                    : void 0
                })
                return t ? ((C = t), "break") : void 0
              },
              F = R;
            F > 0;
            F--
          ) {
            var B = N(F)
            if ("break" === B) break
          }
        t.placement !== C &&
          ((t.modifiersData[o]._skip = !0), (t.placement = C), (t.reset = !0))
      }
    }
    function ct(e) {
      return "x" === e ? "y" : "x"
    }
    function lt(e, t, n) {
      return Math.max(e, Math.min(t, n))
    }
    function ut(e) {
      var t = e.state,
        n = e.options,
        o = e.name,
        i = n.mainAxis,
        a = void 0 === i ? !0 : i,
        r = n.altAxis,
        s = void 0 === r ? !1 : r,
        c = n.boundary,
        l = n.rootBoundary,
        u = n.altBoundary,
        d = n.padding,
        f = n.tether,
        p = void 0 === f ? !0 : f,
        g = n.tetherOffset,
        m = void 0 === g ? 0 : g,
        v = it(t, { boundary: c, rootBoundary: l, padding: d, altBoundary: u }),
        b = j(t.placement),
        y = A(t.placement),
        k = !y,
        x = M(b),
        $ = ct(x),
        S = t.modifiersData.popperOffsets,
        C = t.rects.reference,
        E = t.rects.popper,
        T =
          "function" == typeof m
            ? m(Object.assign({}, t.rects, { placement: t.placement }))
            : m,
        I = { x: 0, y: 0 }
      if (S) {
        if (a) {
          var O = "y" === x ? mt : yt,
            P = "y" === x ? vt : bt,
            _ = "y" === x ? "height" : "width",
            D = S[x],
            L = S[x] + v[O],
            q = S[x] - v[P],
            R = p ? -E[_] / 2 : 0,
            N = y === xt ? C[_] : E[_],
            F = y === xt ? -E[_] : -C[_],
            B = t.elements.arrow,
            U = p && B ? h(B) : { width: 0, height: 0 },
            V = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : tt(),
            G = V[O],
            H = V[P],
            z = lt(0, C[_], U[_]),
            W = k ? C[_] / 2 - R - z - G - T : N - z - G - T,
            K = k ? -C[_] / 2 + R + z + H + T : F + z + H + T,
            Y = t.elements.arrow && w(t.elements.arrow),
            Q = Y ? ("y" === x ? Y.clientTop || 0 : Y.clientLeft || 0) : 0,
            J = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement][x]
              : 0,
            X = S[x] + W - J - Q,
            Z = S[x] + K - J,
            et = lt(p ? Math.min(L, X) : L, D, p ? Math.max(q, Z) : q)
          ;(S[x] = et), (I[x] = et - D)
        }
        if (s) {
          var nt = "x" === x ? mt : yt,
            ot = "x" === x ? vt : bt,
            at = S[$],
            rt = at + v[nt],
            st = at - v[ot],
            ut = lt(rt, at, st)
          ;(S[$] = ut), (I[$] = ut - at)
        }
        t.modifiersData[o] = I
      }
    }
    function dt(e) {
      var t,
        n = e.state,
        o = e.name,
        i = n.elements.arrow,
        a = n.modifiersData.popperOffsets,
        r = j(n.placement),
        s = M(r),
        c = [yt, bt].indexOf(r) >= 0,
        l = c ? "height" : "width"
      if (i && a) {
        var u = n.modifiersData[o + "#persistent"].padding,
          d = h(i),
          f = "y" === s ? mt : yt,
          p = "y" === s ? vt : bt,
          g =
            n.rects.reference[l] +
            n.rects.reference[s] -
            a[s] -
            n.rects.popper[l],
          m = a[s] - n.rects.reference[s],
          v = w(i),
          b = v ? ("y" === s ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
          y = g / 2 - m / 2,
          k = u[f],
          x = b - d[l] - u[p],
          $ = b / 2 - d[l] / 2 + y,
          S = lt(k, $, x),
          C = s
        n.modifiersData[o] = ((t = {}), (t[C] = S), (t.centerOffset = S - $), t)
      }
    }
    function ft(e) {
      var t = e.state,
        n = e.options,
        o = e.name,
        i = n.element,
        r = void 0 === i ? "[data-popper-arrow]" : i,
        s = n.padding,
        c = void 0 === s ? 0 : s
      if (
        null != r &&
        ("string" != typeof r || (r = t.elements.popper.querySelector(r)))
      ) {
        if (
          (a(r) ||
            console.error(
              [
                'Popper: "arrow" element must be an HTMLElement (not an SVGElement).',
                "To use an SVG arrow, wrap it in an HTMLElement that will be used as",
                "the arrow.",
              ].join(" ")
            ),
          !Q(t.elements.popper, r))
        )
          return (
            console.error(
              [
                'Popper: "arrow" modifier\'s `element` must be a child of the popper',
                "element.",
              ].join(" ")
            ),
            void 0
          )
        ;(t.elements.arrow = r),
          (t.modifiersData[o + "#persistent"] = {
            padding: nt("number" != typeof c ? c : ot(c, kt)),
          })
      }
    }
    function pt(e, t, n) {
      return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
          top: e.top - t.height - n.y,
          right: e.right - t.width + n.x,
          bottom: e.bottom - t.height + n.y,
          left: e.left - t.width - n.x,
        }
      )
    }
    function ht(e) {
      return [mt, bt, vt, yt].some(function(t) {
        return e[t] >= 0
      })
    }
    function gt(e) {
      var t = e.state,
        n = e.name,
        o = t.rects.reference,
        i = t.rects.popper,
        a = t.modifiersData.preventOverflow,
        r = it(t, { elementContext: "reference" }),
        s = it(t, { altBoundary: !0 }),
        c = pt(r, o),
        l = pt(s, i, a),
        u = ht(c),
        d = ht(l)
      ;(t.modifiersData[n] = {
        referenceClippingOffsets: c,
        popperEscapeOffsets: l,
        isReferenceHidden: u,
        hasPopperEscaped: d,
      }),
        (t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-reference-hidden": u,
          "data-popper-escaped": d,
        }))
    }
    var mt = "top",
      vt = "bottom",
      bt = "right",
      yt = "left",
      wt = "auto",
      kt = [mt, vt, bt, yt],
      xt = "start",
      $t = "end",
      St = "clippingParents",
      Ct = "viewport",
      Et = "popper",
      jt = "reference",
      Tt = kt.reduce(function(e, t) {
        return e.concat([t + "-" + xt, t + "-" + $t])
      }, []),
      It = [].concat(kt, [wt]).reduce(function(e, t) {
        return e.concat([t, t + "-" + xt, t + "-" + $t])
      }, []),
      Ot = "beforeRead",
      Pt = "read",
      At = "afterRead",
      Mt = "beforeMain",
      _t = "main",
      Dt = "afterMain",
      Lt = "beforeWrite",
      qt = "write",
      Rt = "afterWrite",
      Nt = [Ot, Pt, At, Mt, _t, Dt, Lt, qt, Rt],
      Ft =
        'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',
      Bt =
        'Popper: modifier "%s" requires "%s", but "%s" modifier is not available',
      Ut = ["name", "enabled", "phase", "fn", "effect", "requires", "options"],
      Vt =
        "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",
      Gt =
        "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",
      Ht = { placement: "bottom", modifiers: [], strategy: "absolute" },
      zt = { passive: !0 },
      Wt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: P,
        data: {},
      },
      Kt = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: D,
        data: {},
      },
      Yt = { top: "auto", right: "auto", bottom: "auto", left: "auto" },
      Qt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: R,
        data: {},
      },
      Jt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: N,
        effect: F,
        requires: ["computeStyles"],
      },
      Xt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: U,
      },
      Zt = { left: "right", right: "left", bottom: "top", top: "bottom" },
      en = { start: "end", end: "start" },
      tn = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: st,
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      },
      nn = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: ut,
        requiresIfExists: ["offset"],
      },
      on = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: dt,
        effect: ft,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      },
      an = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: gt,
      },
      rn = [Wt, Kt, Qt, Jt, Xt, tn, nn, on, an],
      sn = O({ defaultModifiers: rn })
    ;(e.createPopper = sn),
      (e.defaultModifiers = rn),
      (e.detectOverflow = it),
      (e.popperGenerator = O),
      Object.defineProperty(e, "__esModule", { value: !0 })
  })
var __extends =
    (this && this.__extends) ||
    (function() {
      var e = function(t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          })(t, n)
      }
      return function(t, n) {
        function o() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((o.prototype = n.prototype), new o()))
      }
    })(),
  __spreadArrays =
    (this && this.__spreadArrays) ||
    function() {
      for (var e = 0, t = 0, n = arguments.length; n > t; t++)
        e += arguments[t].length
      for (var o = Array(e), i = 0, t = 0; n > t; t++)
        for (var a = arguments[t], r = 0, s = a.length; s > r; r++, i++)
          o[i] = a[r]
      return o
    },
  Stacks
!(function(e) {
  function t(e) {
    var t,
      n = e.hasOwnProperty("targets")
        ? ((t = (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this
            }
            return __extends(t, e), t
          })(i)),
          (t.targets = e.targets),
          t)
        : (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this
            }
            return __extends(t, e), t
          })(i)
    for (var o in e)
      "targets" !== o &&
        e.hasOwnProperty(o) &&
        Object.defineProperty(
          n.prototype,
          o,
          Object.getOwnPropertyDescriptor(e, o)
        )
    return n
  }
  function n(n, o) {
    e.application.register(n, t(o))
  }
  var o = (function(t) {
    function n() {
      return (null !== t && t.apply(this, arguments)) || this
    }
    return (
      __extends(n, t),
      (n.prototype.load = function(n) {
        for (var o = [], i = 1; i < arguments.length; i++)
          o[i - 1] = arguments[i]
        for (
          var a = Array.isArray(n) ? n : __spreadArrays([n], o), r = 0, s = a;
          r < s.length;
          r++
        ) {
          var c = s[r],
            l = /^s-/.test(c.identifier)
          if (e._initializing && !l)
            throw 'Stacks-created Stimulus controller names must start with "s-".'
          if (!e._initializing && l)
            throw 'The "s-" prefix on Stimulus controller names is reserved for Stacks-created controllers.'
        }
        t.prototype.load.call(this, a)
      }),
      (n.start = function(e, t) {
        var o = new n(e, t)
        return o.start(), o
      }),
      n
    )
  })(Stimulus.Application)
  ;(e.application = o.start()), (e._initializing = !0)
  var i = (function(e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this
    }
    return (
      __extends(t, e),
      (t.prototype.getElementData = function(e, t) {
        return e.getAttribute("data-" + this.identifier + "-" + t)
      }),
      (t.prototype.setElementData = function(e, t, n) {
        e.setAttribute("data-" + this.identifier + "-" + t, n)
      }),
      (t.prototype.removeElementData = function(e, t) {
        e.removeAttribute("data-" + this.identifier + "-" + t)
      }),
      (t.prototype.triggerEvent = function(e, t, n) {
        var o,
          i = this.identifier + ":" + e
        try {
          o = new CustomEvent(i, { bubbles: !0, cancelable: !0, detail: t })
        } catch (a) {
          ;(o = document.createEvent("CustomEvent")),
            o.initCustomEvent(i, !0, !0, t)
        }
        return (n || this.element).dispatchEvent(o), o
      }),
      t
    )
  })(Stimulus.Controller)
  ;(e.StacksController = i), (e.createController = t), (e.addController = n)
})(Stacks || (Stacks = {}))
var __extends =
  (this && this.__extends) ||
  (function() {
    var e = function(t, n) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(t, n)
    }
    return function(t, n) {
      function o() {
        this.constructor = t
      }
      e(t, n),
        (t.prototype =
          null === n
            ? Object.create(n)
            : ((o.prototype = n.prototype), new o()))
    }
  })()
!(function() {
  function e(e) {
    var t = e.target
    t instanceof HTMLInputElement &&
      "INPUT" === t.nodeName &&
      "radio" === t.type &&
      document
        .querySelectorAll('input[type="radio"][name="' + t.name + '"]')
        .forEach(function(t) {
          if (t !== e.target) {
            var o
            try {
              o = new Event(n)
            } catch (i) {
              ;(o = document.createEvent("Event")), o.initEvent(n, !0, !0)
            }
            t.dispatchEvent(o)
          }
        })
  }
  function t(t) {
    t
      ? (o++, 1 === o && document.body.addEventListener("change", e))
      : (o--, 0 === o && document.body.removeEventListener("change", e))
  }
  var n = "s-expandable-control:radio-off",
    o = 0
  Stacks.application.register(
    "s-expandable-control",
    (function(e) {
      function o() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        __extends(o, e),
        (o.prototype.initialize = function() {
          "INPUT" === this.element.nodeName &&
          ["radio", "checkbox"].indexOf(this.element.type) >= 0
            ? ((this.isCollapsed = this._isCollapsedForCheckable),
              (this.events = ["change", n]),
              (this.isCheckable = !0),
              (this.isRadio = "radio" === this.element.type))
            : ((this.isCollapsed = this._isCollapsedForClickable),
              (this.events = ["click", "keydown"])),
            (this.listener = this.listener.bind(this))
        }),
        (o.prototype._isCollapsedForClickable = function() {
          var e = this.controlledCollapsible
          return e
            ? !e.classList.contains("is-expanded")
            : "false" === this.element.getAttribute("aria-expanded")
        }),
        (o.prototype._isCollapsedForCheckable = function() {
          return !this.element.checked
        }),
        Object.defineProperty(o.prototype, "controlledCollapsible", {
          get: function() {
            var e = this.element.getAttribute("aria-controls")
            if (!e) throw "couldn't find controls"
            var t = document.getElementById(e)
            if (!t) throw "couldn't find controls"
            return t
          },
          enumerable: !1,
          configurable: !0,
        }),
        (o.prototype._dispatchShowHideEvent = function(e) {
          this.triggerEvent(e ? "show" : "hide")
        }),
        (o.prototype._toggleClass = function(e) {
          if (this.data.has("toggle-class")) {
            var t = this.element.classList,
              n = this.data.get("toggle-class")
            if (!n) throw "couldn't find toggle class"
            n.split(/\s+/).forEach(function(n) {
              t.toggle(n, !!e)
            })
          }
        }),
        (o.prototype.listener = function(e) {
          var t
          if (this.isCheckable) t = !this.element.checked
          else {
            if (
              "keydown" == e.type &&
              e instanceof KeyboardEvent &&
              13 != e.keyCode &&
              32 != e.keyCode
            )
              return
            if (
              e.target !== e.currentTarget &&
              ["A", "BUTTON"].indexOf(e.target.nodeName) >= 0
            )
              return
            ;(t = "true" === this.element.getAttribute("aria-expanded")),
              e.preventDefault(),
              "click" === e.type && this.element.blur()
          }
          this.element.setAttribute("aria-expanded", t ? "false" : "true"),
            this.controlledCollapsible.classList.toggle("is-expanded", !t),
            this._dispatchShowHideEvent(!t),
            this._toggleClass(!t)
        }),
        (o.prototype.connect = function() {
          var e = this
          if (
            (this.events.forEach(function(t) {
              e.element.addEventListener(t, e.listener)
            }, this),
            this.isRadio && t(!0),
            this.element.setAttribute(
              "aria-expanded",
              this.isCollapsed() ? "false" : "true"
            ),
            this.isCheckable)
          ) {
            var n = this.controlledCollapsible
            if (n) {
              var o = !this.isCollapsed(),
                i = n.classList.contains("is-expanded")
              o !== i &&
                (n.classList.toggle("is-expanded", o),
                this._dispatchShowHideEvent(o),
                this._toggleClass(o))
            }
          }
        }),
        (o.prototype.disconnect = function() {
          var e = this
          this.events.forEach(function(t) {
            e.element.removeEventListener(t, e.listener)
          }, this),
            this.isRadio && t(!1)
        }),
        o
      )
    })(Stacks.StacksController)
  )
})()
var __extends =
    (this && this.__extends) ||
    (function() {
      var e = function(t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          })(t, n)
      }
      return function(t, n) {
        function o() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((o.prototype = n.prototype), new o()))
      }
    })(),
  Stacks
!(function(e) {
  function t(e) {
    o(e, !0)
  }
  function n(e) {
    o(e, !1)
  }
  function o(t, n) {
    var o = e.application.getControllerForElementAndIdentifier(t, "s-modal")
    if (!o) throw "Unable to get s-modal controller from element"
    n ? o.show() : o.hide()
  }
  var i = (function(e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this
    }
    return (
      __extends(t, e),
      (t.prototype.connect = function() {
        this.validate()
      }),
      (t.prototype.disconnect = function() {
        this.unbindDocumentEvents()
      }),
      (t.prototype.toggle = function(e) {
        void 0 === e && (e = null), this._toggle(void 0, e)
      }),
      (t.prototype.show = function(e) {
        void 0 === e && (e = null), this._toggle(!0, e)
      }),
      (t.prototype.hide = function(e) {
        void 0 === e && (e = null), this._toggle(!1, e)
      }),
      (t.prototype.validate = function() {
        var e = this.data.get("return-element")
        if (
          e &&
          ((this.returnElement = document.querySelector(e)),
          !this.returnElement)
        )
          throw "Unable to find element by return-element selector: " + e
      }),
      (t.prototype._toggle = function(e, t) {
        var n = this
        void 0 === t && (t = null)
        var o = e,
          i = "false" === this.modalTarget.getAttribute("aria-hidden")
        if (("undefined" == typeof o && (o = !i), !((o && i) || (!o && !i)))) {
          var a = this.getDispatcher(t),
            r = this.triggerEvent(o ? "show" : "hide", {
              returnElement: this.returnElement,
              dispatcher: this.getDispatcher(a),
            })
          if (!r.defaultPrevented) {
            ;(this.returnElement = r.detail.returnElement),
              this.modalTarget.setAttribute(
                "aria-hidden",
                o ? "false" : "true"
              ),
              o
                ? this.bindDocumentEvents()
                : (this.unbindDocumentEvents(),
                  this.focusReturnElement(),
                  this.removeModalOnHide())
            var s = void 0 !== this.modalTarget.ontransitionend
            s
              ? this.modalTarget.addEventListener(
                  "transitionend",
                  function() {
                    n.triggerEvent(o ? "shown" : "hidden", { dispatcher: a })
                  },
                  { once: !0 }
                )
              : this.triggerEvent(o ? "shown" : "hidden", { dispatcher: a })
          }
        }
      }),
      (t.prototype.focusReturnElement = function() {
        var e = this
        this.returnElement &&
          this.modalTarget.addEventListener(
            "s-modal:hidden",
            function() {
              e.returnElement &&
                document.body.contains(e.returnElement) &&
                e.returnElement.focus()
            },
            { once: !0 }
          )
      }),
      (t.prototype.removeModalOnHide = function() {
        var e = this
        "true" === this.data.get("remove-when-hidden") &&
          this.modalTarget.addEventListener(
            "s-modal:hidden",
            function() {
              e.element.remove()
            },
            { once: !0 }
          )
      }),
      (t.prototype.handleFocusableElements = function() {
        var e = this,
          t = Array.from(
            this.modalTarget.querySelectorAll(
              "[href], input, select, textarea, button, [tabindex]"
            )
          ).filter(function(e) {
            return e.matches(":not([disabled]):not([tabindex='-1'])")
          })
        if (t.length) {
          var n = t[0]
          this.hasInitialFocusTarget && (n = this.initialFocusTarget),
            this.modalTarget.addEventListener(
              "s-modal:shown",
              function() {
                n && document.body.contains(n) && n.focus()
              },
              { once: !0 }
            )
          var o = t[0],
            i = t[t.length - 1]
          return (
            (this._boundTabTrap =
              this._boundTabTrap ||
              function(t) {
                e.modalTarget.contains(t.target) ||
                  (t.preventDefault(), o.focus()),
                  t.target == o &&
                    9 === t.keyCode &&
                    t.shiftKey &&
                    (t.preventDefault(), i.focus()),
                  t.target != i ||
                    9 !== t.keyCode ||
                    t.shiftKey ||
                    (t.preventDefault(), o.focus())
              }),
            document.addEventListener("keydown", this._boundTabTrap),
            n
          )
        }
      }),
      (t.prototype.bindDocumentEvents = function() {
        ;(this._boundClickFn =
          this._boundClickFn || this.hideOnOutsideClick.bind(this)),
          (this._boundKeypressFn =
            this._boundKeypressFn || this.hideOnEscapePress.bind(this)),
          document.addEventListener("mousedown", this._boundClickFn),
          document.addEventListener("keyup", this._boundKeypressFn),
          this.handleFocusableElements()
      }),
      (t.prototype.unbindDocumentEvents = function() {
        document.removeEventListener("mousedown", this._boundClickFn),
          document.removeEventListener("keyup", this._boundKeypressFn),
          document.removeEventListener("keydown", this._boundTabTrap)
      }),
      (t.prototype.hideOnOutsideClick = function(e) {
        var t = e.target
        !this.modalTarget.querySelector(".s-modal--dialog").contains(t) &&
          document.body.contains(t) &&
          this._toggle(!1, e)
      }),
      (t.prototype.hideOnEscapePress = function(e) {
        27 === e.which &&
          "true" !== this.modalTarget.getAttribute("aria-hidden") &&
          this._toggle(!1, e)
      }),
      (t.prototype.getDispatcher = function(e) {
        return (
          void 0 === e && (e = null),
          e instanceof Event
            ? e.target
            : e instanceof Element
            ? e
            : this.element
        )
      }),
      (t.targets = ["modal", "initialFocus"]),
      t
    )
  })(e.StacksController)
  ;(e.ModalController = i), (e.showModal = t), (e.hideModal = n)
})(Stacks || (Stacks = {})),
  Stacks.application.register("s-modal", Stacks.ModalController)
var __extends =
    (this && this.__extends) ||
    (function() {
      var e = function(t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          })(t, n)
      }
      return function(t, n) {
        function o() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((o.prototype = n.prototype), new o()))
      }
    })(),
  Stacks
!(function(e) {
  var t = (function(e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this
    }
    return (
      __extends(t, e),
      Object.defineProperty(t.prototype, "isVisible", {
        get: function() {
          var e = this.popoverElement
          return e ? e.classList.contains("is-visible") : !1
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.connect = function() {
        e.prototype.connect.call(this),
          this.validate(),
          this.isVisible && this.initializePopper()
      }),
      (t.prototype.disconnect = function() {
        this.hide(),
          this.popper && (this.popper.destroy(), (this.popper = null)),
          e.prototype.disconnect.call(this)
      }),
      (t.prototype.toggle = function(e) {
        void 0 === e && (e = null), this.isVisible ? this.hide(e) : this.show(e)
      }),
      (t.prototype.show = function(e) {
        if ((void 0 === e && (e = null), !this.isVisible)) {
          var t = this.getDispatcher(e)
          this.triggerEvent("show", { dispatcher: t }).defaultPrevented ||
            (this.popper || this.initializePopper(),
            this.popoverElement.classList.add("is-visible"),
            this.scheduleUpdate(),
            this.shown())
        }
      }),
      (t.prototype.hide = function(e) {
        if ((void 0 === e && (e = null), this.isVisible)) {
          var t = this.getDispatcher(e)
          this.triggerEvent("hide", { dispatcher: t }).defaultPrevented ||
            (this.popoverElement.classList.remove("is-visible"),
            this.popper && (this.popper.destroy(), (this.popper = null)),
            this.hidden())
        }
      }),
      (t.prototype.shown = function(e) {
        void 0 === e && (e = null),
          this.bindDocumentEvents(),
          this.triggerEvent("shown", { dispatcher: e })
      }),
      (t.prototype.hidden = function(e) {
        void 0 === e && (e = null),
          this.unbindDocumentEvents(),
          this.triggerEvent("hidden", { dispatcher: e })
      }),
      (t.prototype.generatePopover = function() {
        return null
      }),
      (t.prototype.initializePopper = function() {
        this.popper = Popper.createPopper(
          this.referenceElement,
          this.popoverElement,
          {
            placement: this.data.get("placement") || "bottom",
            modifiers: [{ name: "offset", options: { offset: [0, 10] } }],
          }
        )
      }),
      (t.prototype.validate = function() {
        var e = this.data.get("reference-selector")
        if (
          ((this.referenceElement = this.element),
          e &&
            ((this.referenceElement = this.element.querySelector(e)),
            !this.referenceElement))
        )
          throw "Unable to find element by reference selector: " + e
        var t = this.referenceElement.getAttribute(
            this.popoverSelectorAttribute
          ),
          n = null
        if (t) {
          if (((n = document.getElementById(t)), !n))
            throw "[" +
              this.popoverSelectorAttribute +
              '="{POPOVER_ID}"] required'
        } else n = this.generatePopover()
        if (!n) throw "unable to find or generate popover element"
        this.popoverElement = n
      }),
      (t.prototype.getDispatcher = function(e) {
        return (
          void 0 === e && (e = null),
          e instanceof Event
            ? e.target
            : e instanceof Element
            ? e
            : this.element
        )
      }),
      (t.prototype.scheduleUpdate = function() {
        this.popper && this.isVisible && this.popper.update()
      }),
      t
    )
  })(e.StacksController)
  e.BasePopoverController = t
  var n = (function(e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (t.popoverSelectorAttribute = "aria-controls"), t
    }
    return (
      __extends(t, e),
      (t.prototype.shown = function(t) {
        void 0 === t && (t = null),
          this.toggleOptionalClasses(!0),
          e.prototype.shown.call(this, t)
      }),
      (t.prototype.hidden = function(t) {
        void 0 === t && (t = null),
          this.toggleOptionalClasses(!1),
          e.prototype.hidden.call(this, t)
      }),
      (t.prototype.bindDocumentEvents = function() {
        ;(this.boundHideOnOutsideClick =
          this.boundHideOnOutsideClick || this.hideOnOutsideClick.bind(this)),
          (this.boundHideOnEscapePress =
            this.boundHideOnEscapePress || this.hideOnEscapePress.bind(this)),
          document.addEventListener("mousedown", this.boundHideOnOutsideClick),
          document.addEventListener("keyup", this.boundHideOnEscapePress)
      }),
      (t.prototype.unbindDocumentEvents = function() {
        document.removeEventListener("mousedown", this.boundHideOnOutsideClick),
          document.removeEventListener("keyup", this.boundHideOnEscapePress)
      }),
      (t.prototype.hideOnOutsideClick = function(e) {
        var t = e.target
        this.referenceElement.contains(t) ||
          this.popoverElement.contains(t) ||
          !document.body.contains(t) ||
          this.hide(e)
      }),
      (t.prototype.hideOnEscapePress = function(e) {
        27 === e.which &&
          this.isVisible &&
          (this.popoverElement.contains(e.target) &&
            this.referenceElement.focus(),
          this.hide(e))
      }),
      (t.prototype.toggleOptionalClasses = function(e) {
        if (this.data.has("toggle-class")) {
          var t = this.referenceElement.classList
          this.data
            .get("toggle-class")
            .split(/\s+/)
            .forEach(function(n) {
              t.toggle(n, e)
            })
        }
      }),
      (t.targets = []),
      t
    )
  })(t)
  e.PopoverController = n
})(Stacks || (Stacks = {})),
  Stacks.application.register("s-popover", Stacks.PopoverController)
var __extends =
  (this && this.__extends) ||
  (function() {
    var e = function(t, n) {
      return (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t
          }) ||
        function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        })(t, n)
    }
    return function(t, n) {
      function o() {
        this.constructor = t
      }
      e(t, n),
        (t.prototype =
          null === n
            ? Object.create(n)
            : ((o.prototype = n.prototype), new o()))
    }
  })()
!(function() {
  function e(e) {
    var t = n(e)
    if (!(t instanceof Array)) throw "shouldn't happen"
    return t
  }
  function t(e) {
    if (
      !(
        e.parentElement &&
        e.parentElement.parentElement instanceof HTMLTableSectionElement
      )
    )
      throw "invalid table"
    var t = n(e.parentElement.parentElement, e)
    if ("number" != typeof t) throw "shouldn't happen"
    return t
  }
  function n(e, t) {
    for (
      var n = [], o = e.children[0], i = [], a = [];
      o ||
      a.some(function(e) {
        return 0 !== e
      });

    ) {
      var r = []
      n.push(r)
      var s = 0
      if (o)
        for (var c = 0; c < o.children.length; c++) {
          for (; a[s]; ) a[s]--, (r[s] = i[s]), s++
          var l = o.children[c]
          if (!(l instanceof HTMLTableCellElement)) throw "invalid table"
          if ("none" !== getComputedStyle(l).display) {
            if (l === t) return s
            for (var u = s + l.colSpan; u > s; s++)
              (a[s] = l.rowSpan - 1), (i[s] = l), (r[s] = l)
          }
        }
      for (; s < i.length; ) a[s] && (a[s]--, (r[s] = i[s])), s++
      o && (o = o.nextElementSibling)
    }
    return t ? -1 : n
  }
  var o
  Stacks.application.register(
    "s-table",
    ((o = (function(n) {
      function o() {
        return (null !== n && n.apply(this, arguments)) || this
      }
      return (
        __extends(o, n),
        (o.prototype.setCurrentSort = function(e, t) {
          if (["asc", "desc", "none"].indexOf(t) < 0)
            throw "direction must be one of asc, desc, or none"
          var n = this
          this.columnTargets.forEach(function(o) {
            var i = o === e
            o.classList.toggle("is-sorted", i && "none" !== t),
              o.querySelectorAll(".js-sorting-indicator").forEach(function(e) {
                var n = i ? t : "none"
                e.classList.toggle(
                  "d-none",
                  !e.classList.contains("js-sorting-indicator-" + n)
                )
              }),
              i && "none" !== t
                ? n.setElementData(o, "sort-direction", t)
                : n.removeElementData(o, "sort-direction")
          })
        }),
        (o.prototype.sort = function(n) {
          var o = this,
            i = n.currentTarget
          if (!(i instanceof HTMLTableCellElement)) throw "invalid event target"
          var a = this.element,
            r = a.tBodies[0],
            s = t(i)
          if (!(0 > s)) {
            var c,
              l = e(r),
              u = "asc" === this.getElementData(i, "sort-direction") ? -1 : 1,
              d = Array.from(a.tBodies[0].rows),
              f = !1,
              p = []
            d.forEach(function(e, t) {
              var n = o.getElementData(e, "sort-to")
              if ("top" !== n) {
                if ("bottom" === n) return c || (c = e), void 0
                var i = l[t][s]
                if (!i) return p.push(["", t]), void 0
                var a = o.getElementData(i, "sort-val"),
                  r = "string" == typeof a ? a : i.textContent.trim()
                "" !== r && parseInt(r, 10) + "" !== r && (f = !0),
                  p.push([r, t])
              }
            }),
              f ||
                p.forEach(function(e) {
                  e[0] = "" === e[0] ? Number.MIN_VALUE : parseInt(e[0], 10)
                }),
              p.sort(function(e, t) {
                return e[0] > t[0]
                  ? 1 * u
                  : e[0] < t[0]
                  ? -1 * u
                  : e[1] > t[1]
                  ? 1
                  : -1
              }),
              p.forEach(function(e) {
                var t = d[e[1]]
                t.parentElement.removeChild(t),
                  c ? r.insertBefore(t, c) : r.appendChild(t)
              }),
              this.setCurrentSort(i, 1 === u ? "asc" : "desc")
          }
        }),
        o
      )
    })(Stacks.StacksController)),
    (o.targets = ["column"]),
    o)
  )
})()
var __extends =
    (this && this.__extends) ||
    (function() {
      var e = function(t, n) {
        return (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function(e, t) {
              e.__proto__ = t
            }) ||
          function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          })(t, n)
      }
      return function(t, n) {
        function o() {
          this.constructor = t
        }
        e(t, n),
          (t.prototype =
            null === n
              ? Object.create(n)
              : ((o.prototype = n.prototype), new o()))
      }
    })(),
  Stacks
!(function(e) {
  function t(e, t, n) {
    e.setAttribute("data-s-tooltip-html-title", t),
      e.removeAttribute("title"),
      o(e, n)
  }
  function n(e, t, n) {
    e.setAttribute("title", t),
      e.removeAttribute("data-s-tooltip-html-title"),
      o(e, n)
  }
  function o(t, n) {
    n && n.placement && t.setAttribute("data-s-tooltip-placement", n.placement)
    var o = e.application.getControllerForElementAndIdentifier(t, "s-tooltip")
    o
      ? o.applyTitleAttributes()
      : t.setAttribute(
          "data-controller",
          t.getAttribute("data-controller") + " s-tooltip"
        )
  }
  var i = (function(t) {
    function n() {
      var e = (null !== t && t.apply(this, arguments)) || this
      return (e.popoverSelectorAttribute = "aria-describedby"), e
    }
    return (
      __extends(n, t),
      (n.prototype.connect = function() {
        t.prototype.connect.call(this),
          window.matchMedia("(hover: hover)").matches && this.bindMouseEvents()
      }),
      (n.prototype.disconnect = function() {
        this.unbindMouseEvents(), t.prototype.disconnect.call(this)
      }),
      (n.prototype.show = function(n) {
        void 0 === n && (n = null)
        var o = e.application.getControllerForElementAndIdentifier(
          this.element,
          "s-popover"
        )
        ;(o && o.isVisible) || t.prototype.show.call(this, n)
      }),
      (n.prototype.applyTitleAttributes = function() {
        var e,
          t = this.data.get("html-title")
        if (t) e = document.createRange().createContextualFragment(t)
        else {
          var o = this.element.getAttribute("title")
          if (!o) return null
          e = document.createTextNode(o)
        }
        this.data.delete("html-title"), this.element.removeAttribute("title")
        var i = this.element.getAttribute("aria-describedby")
        i ||
          ((i = n.generateId()),
          this.element.setAttribute("aria-describedby", i))
        var a = document.getElementById(i)
        if (!a) {
          ;(a = document.createElement("div")),
            (a.id = i),
            (a.className = "s-popover s-popover__tooltip pe-none"),
            a.setAttribute("aria-hidden", "true"),
            a.setAttribute("role", "tooltip")
          var r = this.element.parentNode
          r
            ? r.insertBefore(a, this.element.nextSibling)
            : document.body.appendChild(a)
        }
        var s = a.querySelector(".s-popover--arrow")
        return (
          (a.innerHTML = ""),
          a.appendChild(e),
          s
            ? a.appendChild(s)
            : a.insertAdjacentHTML(
                "beforeend",
                '<div class="s-popover--arrow"></div>'
              ),
          this.scheduleUpdate(),
          a
        )
      }),
      (n.prototype.bindDocumentEvents = function() {
        ;(this.boundHideIfWithin =
          this.boundHideIfWithin || this.hideIfWithin.bind(this)),
          document.addEventListener("s-popover:shown", this.boundHideIfWithin)
      }),
      (n.prototype.unbindDocumentEvents = function() {
        document.removeEventListener("s-popover:shown", this.boundHideIfWithin)
      }),
      (n.prototype.generatePopover = function() {
        return this.applyTitleAttributes()
      }),
      (n.prototype.hideIfWithin = function(e) {
        e.target.contains(this.referenceElement) && this.hide()
      }),
      (n.prototype.bindMouseEvents = function() {
        ;(this.boundShow = this.boundShow || this.show.bind(this)),
          (this.boundHide = this.boundHide || this.hide.bind(this)),
          this.referenceElement.addEventListener("mouseover", this.boundShow),
          this.referenceElement.addEventListener("mouseout", this.boundHide)
      }),
      (n.prototype.unbindMouseEvents = function() {
        this.referenceElement.removeEventListener("mouseover", this.boundShow),
          this.referenceElement.removeEventListener("mouseout", this.boundHide)
      }),
      (n.generateId = function() {
        return (
          "--stacks-s-tooltip-" +
          Math.random()
            .toString(36)
            .substring(2, 10)
        )
      }),
      (n.targets = []),
      n
    )
  })(e.BasePopoverController)
  ;(e.TooltipController = i), (e.setTooltipHtml = t), (e.setTooltipText = n)
})(Stacks || (Stacks = {})),
  Stacks.application.register("s-tooltip", Stacks.TooltipController),
  (Stacks._initializing = !1),
  (function() {
    Stacks.addController("se-char-counter", {
      targets: ["field", "output"],
      connect: function() {
        $(this.fieldTarget).charCounter({
          min: +(this.data.get("min") || "0"),
          max: +(this.data.get("max") || "0"),
          target: $(this.outputTarget),
          setIsValid: this.setIsValid.bind(this),
        })
      },
      setIsValid: function(e) {
        var t = "data-is-valid-length",
          n = $(this.fieldTarget)
        "true" !== this.data.get("allow-empty") || n.val() || (e = !0)
        var o = e.toString()
        n.attr(t) !== o && (n.attr(t, o), this.triggerEvent("validated"))
      },
    })
  })(),
  (function() {
    var e,
      t,
      n,
      o = function() {
        ;(e = t = null), $("body").removeClass("c-move")
      }
    Stacks.addController("se-draggable", {
      targets: ["handle"],
      connect: function() {
        if (!StackExchange.options.isMobile && this.hasHandleTarget) {
          var i = $(this.element),
            a = $(this.handleTarget)
          a.hasClass("c-move") || a.addClass("c-move"),
            a.unbind("mousedown").bind("mousedown", function(n) {
              i.css({ minWidth: i.outerWidth() })
              var o = i.offset()
              ;(t = { x: o.left - n.pageX, y: o.top - n.pageY }), (e = i)
              var a = e.offset()
              e.offset(a).offset(a),
                $("body").addClass("c-move"),
                n.preventDefault()
            }),
            n ||
              ((n = !0),
              $(document)
                .on("mousemove", function(n) {
                  if (e) {
                    e.removeClass(
                      "responsively-horizontally-centered-legacy-popup"
                    )
                    var o = n.pageY + t.y,
                      i = n.pageX + t.x
                    e.offset({ top: o, left: i })
                  }
                })
                .on("keypress", o)
                .on("mouseup", o))
        }
      },
    })
  })(),
  (function() {
    function e() {
      return "se-share-sheet-" + t++
    }
    var t = 0,
      n = !1
    Stacks.addController("se-share-sheet", {
      get $el() {
        return $(this.element)
      },
      get controlId() {
        var t = this.$el.attr("aria-controls")
        return t || ((t = e()), this.$el.attr("aria-controls", t)), t
      },
      get $sheet() {
        var e = this.controlId,
          t = $("#" + e)
        return (
          0 === t.length && ((t = this.generateSheet(e)), this.$el.after(t)), t
        )
      },
      get location() {
        return +this.data.get("location") || 0
      },
      initialize: function() {
        function e(e, n) {
          var o = t.attr(e) || ""
          ;-1 === o.indexOf(n) && t.attr(e, o + " " + n)
        }
        var t = this.$el
        this.updateSheet(!1),
          e("data-action", "s-popover#toggle"),
          e("data-action", this.identifier + "#preventNavigation"),
          e("data-action", "s-popover:show->" + this.identifier + "#willShow"),
          e("data-action", "s-popover:shown->" + this.identifier + "#didShow"),
          e("data-controller", "s-popover")
      },
      generateSheet: function(e) {
        var t = $(
          '<div class="s-popover z-dropdown" style="width: unset; max-width: 28em;"><div class="s-popover--arrow"></div></div>'
        )
          .attr("id", e)
          .append(
            '<div><span class="js-title fw-bold"></span> <span class="js-subtitle"></span></div>'
          )
          .append(
            '<div class="my8"><input type="text" class="js-input s-input wmn3 sm:wmn-initial" readonly /></div>'
          )
          .append(
            '<div class="d-flex jc-space-between mbn4"><button class="js-copy-link-btn s-btn s-btn__link"></button><a href="#" rel="license" class="s-block-link fc-blue-600 js-license" target="_blank"></a><div class="js-social-container"></div></div>'
          )
          .insertAfter($(this.element))
        return (
          t
            .find(".js-copy-link-btn")
            .text("Copy link")
            .click(this.copy.bind(this)),
          t.find(".js-input").on("copy", this.didCopy.bind(this)),
          t
        )
      },
      willShow: function() {
        this.updateSheet(!0)
      },
      didShow: function() {
        var e = this.$sheet.find(".js-input")
        setTimeout(function() {
          e.focus().select()
        })
        var t = this.location
        t && StackExchange.gps.track("share.show", { location: t })
      },
      copy: function() {
        var e = this
        this.tryCopy().then(
          function() {
            StackExchange.helpers.showToast(
              $("<span>").text("Link copied to clipboard."),
              { transientTimeout: 3e3, type: "success" }
            ),
              e.didCopy()
          },
          function() {
            StackExchange.helpers.showToast(
              $("<span>").text("Could not copy link to clipboard."),
              { transientTimeout: 5e3, type: "danger" }
            )
          }
        )
      },
      didCopy: function() {
        if (!n) {
          var e = this.location
          e &&
            StackExchange.gps.track("share.click", { location: e, service: 6 })
        }
      },
      tryCopy: function() {
        var e = this.$sheet.find(".js-input")
        if (navigator.clipboard) return navigator.clipboard.writeText(e.val())
        e.focus().select()
        var t
        n = !0
        try {
          t = document.execCommand("copy")
        } catch (o) {
          t = !1
        }
        n = !1
        var i = $.Deferred()
        return t ? i.resolve() : i.reject(), i.promise()
      },
      preventNavigation: function(e) {
        e.ctrlKey || e.metaKey || e.preventDefault()
      },
      updateSheet: function(e) {
        this.triggerEvent("update")
        var t = this.$sheet
        t
          .find(".js-title")
          .text(this.data.get("title") || "Copy and share this link:"),
          t.find(".js-subtitle").text(this.data.get("subtitle") || ""),
          t.find(".js-input").val(this.element.href)
        var n = t.find(".js-license"),
          o = this.data.get("license-url")
        if (o) {
          n.attr("href", decodeURIComponent(this.data.get("license-url")))
          var i = this.data.get("license-name")
          n.text(i),
            n.attr(
              "title",
              (function(e) {
                return "The current license for this post: " + e.licenseName
              })({ licenseName: i })
            )
        } else n.remove()
        t.find(".js-social-container").empty()
        var a = this.data.get("post-type")
        if (e && ("question" === a || "answer" === a)) {
          var r = (this.data.get("social") || "").split(/\s+/)
          ;-1 !== r.indexOf("facebook") &&
            this.addSocialComponent(
              "question" === a,
              "Facebook",
              Svg.Facebook.With("native"),
              "Share on Facebook",
              2,
              StackExchange.share.facebook
            ),
            -1 !== r.indexOf("twitter") &&
              this.addSocialComponent(
                "question" === a,
                "Twitter",
                Svg.Twitter.With("native"),
                "Share on Twitter",
                3,
                StackExchange.share.twitter
              ),
            -1 !== r.indexOf("devto") &&
              this.addSocialComponent(
                "question" === a,
                "DEV",
                Svg.DevTo.With("native"),
                "Share on DEV",
                5,
                StackExchange.share.devTo
              )
        }
      },
      addSocialComponent: function(e, t, n, o, i, a) {
        var r = e
            ? (function(e) {
                return "Share link to this question on " + e.socialNetwork
              })({ socialNetwork: t })
            : (function(e) {
                return "Share link to this answer on " + e.socialNetwork
              })({ socialNetwork: t }),
          s = $("<button>", {
            class: "s-btn p4",
            role: "button",
            title: r,
            "aria-label": o,
          }).append(n),
          c = $("#question-header a.question-hyperlink").text(),
          l = e
            ? c
            : (function(e) {
                return "Answer: " + e.title
              })({ title: c })
        a(s, this.element.href, l, "2")
        var u = this.location
        s.click(function() {
          u &&
            StackExchange.gps.track("share.click", { location: u, service: i })
        }).appendTo(this.$sheet.find(".js-social-container"))
      },
    })
  })(),
  (StackExchange.loggedIn = {}),
  (StackExchange.question.fullInit = function(e) {
    if (
      ((window.votesCast = e.votesCast),
      StackExchange.vote.init(e.questionId),
      StackExchange.question.bindSuggestedEditPopupLinks(),
      StackExchange.vote_bounty.init(e),
      $(document).on("click", ".post-menu .js-error-click", function() {
        var e = $(this)
        return e.parent().showErrorMessage(e.data("error-message")), !1
      }),
      /^#autocomment/.test(window.location.hash))
    ) {
      var t = $(".comments-link:first"),
        n = "#comment-" + window.location.hash.substring(12),
        o = function() {
          var e = $(n),
            t = $("<span><b>Trivial answer converted to comment</b></span>")
          e
            .find(".comment-date")
            .append($("<br>"))
            .append(t),
            StackExchange.comments.flashHighlight(e),
            e[0].scrollIntoView(!0)
        }
      e.totalCommentCount &&
      e.shownCommentCount &&
      e.totalCommentCount != e.shownCommentCount
        ? StackExchange.comments.loadAll(t).done(o)
        : o()
    }
    StackExchange.question.initInlineNewFeaturePopovers()
  }),
  (StackExchange.question.initInlineNewFeaturePopovers = function() {
    StackExchange.question.initAndShowCloseReopenNotificationPopover() ||
      StackExchange.question.initQuestionFollowFeaturePopover()
  }),
  (StackExchange.question.initQuestionFollowFeaturePopover = function() {
    var e = $(".js-follow-question")
    if (0 == e.length || 0 == $(".js-question-follow-feature-popover").length)
      return !1
    StackExchange.helpers.queueStacksPopover(e, 60)
    var t = !1
    return (
      $(".js-question-follow-feature-popover .js-dismiss").click(function() {
        ;(t = !0), StackExchange.helpers.toggleStacksPopover(e, !1)
      }),
      e.on("s-popover:hide", function(e) {
        t || e.preventDefault()
      }),
      e.on("s-popover:hidden", function() {
        e.removeAttr("aria-controls"),
          e.attr("data-controller", "s-tooltip"),
          StackExchange.helpers.toggleUserFlags(
            StackOverflow.Models.UserFlags.DismissFollowQuestionIntroPopover,
            !0
          )
      }),
      !0
    )
  }),
  (StackExchange.question.initAndShowCloseReopenNotificationPopover = function() {
    var e = $(".js-close-question-link"),
      t = $(".js-close-reopen-popover")
    return e.length && t.length
      ? (e.attr({
          "aria-controls": "close-reopen-popover",
          "data-controller": "s-popover",
          "data-s-popover-placement": "bottom",
        }),
        e.after(t),
        t.find(".js-learn-more").on("click", function() {
          StackExchange.helpers
            .loadModal("/questions/close-reopen-explanation-modal")
            .done(function() {
              e.data("show-interstitial", !1)
            })
            .fail(function(e) {
              StackExchange.helpers.showToast(e, { type: "danger" })
            })
        }),
        t.find(".js-dismiss").on("click", function() {
          StackExchange.helpers.toggleStacksPopover(e, !1)
        }),
        e.on("s-popover:hidden", function() {
          StackExchange.helpers.toggleUserFlags(
            StackOverflow.Models.UserFlags.DismissCloseReopenPrivilegePopover,
            !0
          ),
            t.remove()
        }),
        StackExchange.helpers.queueStacksPopover(e, 150),
        StackExchange.using("gps", function() {
          StackExchange.gps.track("close_popover.view")
        }),
        !0)
      : !1
  }),
  (StackExchange.question.bindSuggestedEditPopupLinks = function() {
    function e(e) {
      var t = e.parent(),
        n = e.attr("id").substring("edit-pending-".length)
      e.data("working") ||
        e
          .data("working", !0)
          .loadPopup({
            url: "/review/suggested-edit-popup/" + n,
            lightbox: !0,
            dontShow: !0,
            target: t,
            defaultErrorMessage:
              "Unable to load suggested edit - please try again",
          })
          .done(function(e, t) {
            t.fadeIn("fast")
            {
              var n = $(window).height()
              e.find(".popup-suggested-edit").css({ "max-height": n - 100 })
            }
            e.css("height", "600px")
              .center()
              .css("height", "")
              .fadeIn("fast")
          })
          .always(function() {
            e.removeData("working")
          })
    }
    $('div.post-menu a[id^="edit-pending-"]').each(function() {
      $(this)
        .unbind("click")
        .click(function() {
          return e($(this)), !1
        })
    })
  }),
  (StackExchange.vote = (function() {
    var e = StackExchange.helpers,
      t = {
        informModerator: -1,
        undoMod: 0,
        acceptedByOwner: 1,
        upMod: 2,
        downMod: 3,
        offensive: 4,
        bookmark: 5,
        close: 6,
        reopen: 7,
        bountyClose: 9,
        deletion: 10,
        undeletion: 11,
        spam: 12,
        interesting: 17,
        helpful: 18,
        thankYou: 19,
        wellWritten: 20,
        follow: 21,
      },
      n = function(e) {
        switch (e) {
          case t.interesting:
          case t.helpful:
          case t.thankYou:
          case t.wellWritten:
            return !0
          default:
            return !1
        }
      },
      o = { placement: "right" },
      i = function(e) {
        var t = e ? w(e) : k(),
          n = $("body.read-only").length > 0
        t.find(".js-vote-down-btn, .js-vote-up-btn").each(function() {
          var e,
            i = $(this),
            a = i.hasClass("js-vote-up-btn"),
            r = StackExchange.loggedIn && m(i),
            s = b(i)
          if (n) e = "Voting is disabled while the site is in read-only mode."
          else {
            if (t.data("is-election")) return
            var c = r ? " (click again to undo)" : ""
            e = a
              ? s
                ? "This answer is useful" + c
                : "This question shows research effort; it is useful and clear" +
                  c
              : s
              ? "This answer is not useful" + c
              : "This question does not show any research effort; it is unclear or not useful" +
                c
          }
          i.setTooltipText(e, o)
        })
      },
      a = function(e) {
        var t = e ? w(e) : k()
        t.find(".js-bookmark-btn").each(function() {
          var e = $(this)
          e.setTooltipText(
            m(e)
              ? "You have bookmarked this question (click to undo)."
              : "Bookmark this question.",
            o
          )
        })
      },
      r = function(e) {
        var t = e ? w(e) : k()
        s(e),
          t.find(".js-vote-up-btn").unadornedButtonClick(
            function() {
              d($(this))
            },
            { namespace: "vote" }
          ),
          t.find(".js-vote-down-btn").unadornedButtonClick(
            function() {
              f($(this))
            },
            { namespace: "vote" }
          )
      },
      s = function(e) {
        var t = e ? w(e) : k()
        return t
          .find(".js-vote-down-btn, .js-vote-up-btn")
          .unbind("keypress.vote click.vote")
      },
      c = function(e) {
        var o = {}
        $.each(e, function() {
          var e = this.PostId,
            i = k().filter(function() {
              return x($(this)) === e
            }),
            r = this.VoteTypeId
          switch (r) {
            case t.upMod:
              v(i.find(".js-vote-up-btn"), !0)
              break
            case t.downMod:
              v(i.find(".js-vote-down-btn"), !0)
              break
            case t.bookmark:
              var s = i.find(".js-bookmark-btn")
              v(s, !0), a(s)
              break
            case t.follow:
              var c = i.closest(".question, .answer"),
                l = c.hasClass("question"),
                s = c.find(".js-follow-post")
              M(s, l, !0)
              break
            default:
              n(r)
                ? o[e]
                  ? o[e].votesCast.push(r)
                  : (o[e] = { $el: i.find(".js-reactions"), votesCast: [r] })
                : StackExchange.debug.log(
                    "site.vote.js > highlightExistingVotes has no case for " + r
                  )
          }
        }),
          Object.values(o).forEach(function(e) {
            e.$el
              .attr("data-votes-cast", JSON.stringify(e.votesCast))
              .dispatchEvent("post:reactionsInit")
          }),
          (votesCast = null)
      },
      l = function(e) {
        $.ajax({
          type: "GET",
          url: "/posts/" + e + "/votes",
          dataType: "json",
          success: c,
        })
      },
      u = function(e) {
        null == window.votesCast ? l(e) : c(window.votesCast), r(), i(), Q()
      },
      d = function(e) {
        var n = w(e),
          o = n.find(".js-vote-up-btn"),
          i = n.find(".js-vote-down-btn"),
          a = !m(o),
          r = m(i),
          s = a ? (r ? 2 : 1) : -1
        T(n, s), v(o, a), v(i, !1), I(e, a ? t.upMod : t.undoMod)
      },
      f = function(e) {
        var n = w(e),
          o = n.find(".js-vote-up-btn"),
          i = n.find(".js-vote-down-btn"),
          a = !m(i),
          r = m(o),
          s = a ? (r ? -2 : -1) : 1
        T(n, s), v(i, a), v(o, !1), I(e, a ? t.downMod : t.undoMod)
      },
      p = function() {
        return k().find(".js-accept-answer-btn")
      },
      h = function() {
        return $("div.post-menu [id^='protect-post-']")
      },
      g = function() {
        return $("div.post-menu [id^='unprotect-post-']")
      },
      m = function(e) {
        return "true" === e.attr("aria-pressed")
      },
      v = function(e, t) {
        e.attr("aria-pressed", t ? "true" : "false").each(function() {
          var e = $(this).data("selected-classes")
          e && $(this).toggleClass(e, t)
        })
      },
      b = function(e) {
        return e.closest(".answer").length > 0
      },
      y = function(e) {
        return b(e) ? "answer" : "question"
      },
      w = function(e) {
        return e.closest(".js-voting-container")
      },
      k = function() {
        return $(".js-voting-container")
      },
      x = function(e) {
        return w(e).data("post-id")
      },
      S = function(e) {
        return w(e).data("ltu")
      },
      C = function(t, n, o) {
        var i = {
            dismissable: !0,
            transient: !1,
            transientTimeout: e.suggestedTransientTimeout(n, !0),
            type: "danger",
            actions: [],
          },
          a = $.extend({}, i, o)
        StackExchange.helpers.showToast(n, a)
      },
      E = function() {
        C(
          null,
          $("<span>")
            .text("An error has occurred - please retry your request.")
            .html(),
          { transient: !0 }
        )
      },
      j = function(e, t, n) {
        StackExchange.helpers.showToast(t, n)
      },
      T = function(e, t) {
        var n = e.find(".js-vote-count"),
          o = n.data("value") + t,
          i = H(o)
        n.data("value", o).text(i), n.data("had-split") && K(n)
      },
      I = function(e, t) {
        s(e), (StackExchange.realtime.pauseQuestionNotifications = !0)
        var n = x(e)
        O({
          $target: e,
          postId: n,
          voteTypeId: t,
          success: P,
          data: { ltu: S(e) },
        })
      },
      O = function(e) {
        var t = e.$target,
          n = e.postId,
          o = e.data,
          i = e.voteTypeId,
          a = function(o) {
            o.Warning
              ? confirm(o.Message) && ((c.ignoreWarnings = "true"), d())
              : e.success && e.success(t, n, o),
              e.complete && e.complete()
          },
          r = function(o) {
            E(), e.error && e.error(t, n, o), e.complete && e.complete()
          },
          s = t.data("vote-stub")
        if (s)
          return (
            setTimeout(function() {
              a(s)
            }, 0),
            void 0
          )
        var c = { fkey: StackExchange.options.user.fkey }
        if (o) for (var l in o) c[l] = o[l]
        var u = "/posts/" + n + "/vote/" + i
        e.undo && (u += "?undo=true")
        var d = function() {
          $.ajax({
            type: "POST",
            url: u,
            data: c,
            dataType: "json",
            success: a,
            error: r,
          })
        }
        d()
      },
      P = function(e, n, o) {
        if (o.Success)
          o.Message && j(e, o.Message, { transient: o.Transient }),
            o.LastVoteTypeId == t.upMod
              ? $(document).trigger("upVote", n)
              : o.LastVoteTypeId == t.downMod
              ? $(document).trigger("downVote", n)
              : $(document).trigger("undoVote", n)
        else {
          o.Message
            ? o.Info
              ? j(e, o.Message, { transient: !0 })
              : C(e, o.Message, { transient: !0 })
            : E(),
            v(e, !1)
          var a = H(o.NewScore)
          w(e)
            .find(".js-vote-count")
            .data("value", o.NewScore)
            .text(a),
            o.LastVoteTypeId && A(e, o.LastVoteTypeId)
        }
        r(e.parent()),
          (StackExchange.realtime.pauseQuestionNotifications = !1),
          i(e)
      },
      A = function(e, n) {
        var o = w(e)
        n === t.upMod
          ? v(o.find(".js-vote-up-btn"), !0)
          : n === t.downMod && v(o.find(".js-vote-down-btn"), !0)
      },
      M = function(e, t, n) {
        if (e && e.length) {
          e.attr("aria-pressed", n ? "true" : "false")
          var o = n
            ? t
              ? "Unfollow this question to stop receiving notifications"
              : "Unfollow this answer to stop receiving notifications"
            : t
            ? "Follow this question to receive notifications"
            : "Follow this answer to receive notifications"
          e.setTooltipText(o)
          var i = e.data("gps-track"),
            a = n ? 15 : 14,
            r = i.replace(/item:[ ]?[\d]+/, "item: " + a)
          e.data("gps-track", r), e.html(n ? "following" : "follow")
        }
      },
      _ = function(e) {
        e.prop("disabled", !0)
        var n = e.closest(".question").length > 0,
          o = parseInt(
            n
              ? e.closest(".question").data("questionid")
              : e.closest(".answer").data("answerid")
          ),
          i = "true" === e.attr("aria-pressed"),
          a = !i
        M(e, n, a),
          O({
            $target: e,
            postId: o,
            voteTypeId: t.follow,
            undo: i,
            success: function(t, r, s) {
              if (s.Success) {
                var c = $("#divFollowingConfirm-" + o).length
                s.Message &&
                  (c || ($(s.Message).insertAfter(e), (c = !0)),
                  e.attr("aria-controls", "divFollowingConfirm-" + o),
                  e.attr("data-controller", "s-popover s-tooltip")),
                  a
                    ? c
                      ? (StackExchange.helpers.hideToasts(),
                        StackExchange.helpers.toggleStacksPopover(e, !0))
                      : n
                      ? j(e, "You’re now following this question", {
                          transient: !0,
                        })
                      : j(e, "You’re now following this answer", {
                          transient: !0,
                        })
                    : (n
                        ? j(e, "You’re no longer following this question", {
                            transient: !0,
                          })
                        : j(e, "You’re no longer following this answer", {
                            transient: !0,
                          }),
                      c && StackExchange.helpers.toggleStacksPopover(e, !1))
              } else M(i), C(e, s.Message)
              e.prop("disabled", !1)
            },
            error: function() {
              M(e, n, i), e.prop("disabled", !1)
            },
          })
      },
      D = function() {
        StackExchange.question.fullInit &&
          ($(document).unadornedButtonClick(
            function() {
              _($(this))
            },
            { selector: ".js-follow-post" }
          ),
          $(document).unadornedButtonClick(
            function() {
              var e = $(this),
                t = e.closest(".js-following-confirm"),
                n = t.prev(".js-follow-post")
              _(n)
            },
            { selector: ".js-unfollow-post-confirm" }
          ))
      },
      L = function() {
        a(),
          $(document).unadornedButtonClick(
            function() {
              q($(this))
            },
            { selector: ".js-bookmark-btn:not(.disabled)" }
          )
      },
      q = function(e) {
        if (!e.data("loading")) {
          e.data("loading", !0)
          var n = x(e),
            o = w(e).find(".js-bookmark-count"),
            i = m(e),
            r = o.data("value") || 0,
            s = !i,
            c = s ? r + 1 : r - 1,
            l = function(t, n) {
              v(e, t),
                e.attr("aria-label", n ? "Bookmark(" + n + ")" : "Bookmark"),
                a(e),
                o
                  .data("value", n)
                  .text(n)
                  .toggleClass("d-none", 0 === n)
            }
          l(s, c),
            O({
              $target: e,
              postId: n,
              voteTypeId: t.bookmark,
              undo: i,
              success: function(t, n, o) {
                e.data("loading", !1), o.Success || (l(i, r), C(e, o.Message))
              },
            })
        }
      },
      R = function(e, t) {
        var n =
            "div.post-menu *[id^='delete-post-'], table.flagged-posts *[id^='delete-post-']",
          o = $(document)
        o.off("click", n),
          o.on("click", n, function(n) {
            n.preventDefault(), F($(this), e, t)
          }),
          o.off("mouseenter mouseleave", n),
          o.on("mouseenter mouseleave", n, function() {
            var e = $(this)
            if (e.hasClass("load-tooltip-on-hover")) {
              e.removeClass("load-tooltip-on-hover")
              var t = e.attr("id").substring("delete-post-".length),
                n = "/posts/" + t + "/delete-tooltip"
              $.get(n, function(t) {
                e.attr("title", t)
              })
            }
          }),
          o
            .off("click", ".js-post-notice-delete-post")
            .on("click", ".js-post-notice-delete-post", function() {
              $(this)
                .closest(".question, .answer")
                .find(n)
                .first()
                .click()
            })
      },
      N = function(e, n, o, i) {
        e.loadPopup({
          url: "/posts/{postId}/fancy-deletion-prompt".formatUnicorn({
            postId: n,
          }),
          loaded: function(a) {
            StackExchange.helpers.bindMovablePopups(),
              $(a)
                .find("a")
                .each(function(e, t) {
                  var n = $(t).attr("href")
                  n && n.length > 1 && $(t).attr("target", "__blank")
                }),
              $(a)
                .find(".cancel-delete")
                .click(function(e) {
                  return (
                    StackExchange.helpers.closePopups(a), e.preventDefault(), !1
                  )
                }),
              $(a)
                .find(".delete-question")
                .click(function(r) {
                  return (
                    StackExchange.helpers.closePopups(a),
                    O({
                      $target: e,
                      postId: n,
                      voteTypeId: t.deletion,
                      success: o,
                      data: i,
                    }),
                    r.preventDefault(),
                    !1
                  )
                })
          },
        })
      },
      F = function(e, n, o) {
        var i = e.attr("id").substring("delete-post-".length),
          a = e.text().indexOf("undelete") > -1,
          r = e.data(a ? "undelete-prompt" : "delete-prompt")
        r ||
          (r = StackExchange.options.user.isModerator
            ? a
              ? "Undelete this post?"
              : "Delete this post?"
            : a
            ? "Vote to undelete this post?"
            : "Vote to delete this post?")
        var s = a ? !1 : !!e.data("fancy-delete"),
          c = n || B
        return s
          ? (N(e, i, c, o), void 0)
          : (confirm(r) &&
              ((StackExchange.realtime.pauseQuestionNotifications = !0),
              O({
                $target: e,
                postId: i,
                voteTypeId: a ? t.undeletion : t.deletion,
                success: c,
                data: o,
              })),
            void 0)
      },
      B = function(e, t, n) {
        var o = e.text().indexOf("undelete") > -1
        if (n && n.Success) {
          if (
            (e.html(n.Message),
            e.addClass("load-tooltip-on-hover"),
            n.NewScore < 0)
          ) {
            var i =
                $(".question:has(a[id='delete-post-" + t + "'])").length > 0,
              a = i ? ".question, div.answer" : "#answer-" + t
            U($(a), !o), o || e.trigger("post:deleted", [+t])
          } else
            j(
              e,
              o
                ? "Your undelete vote has been recorded"
                : "Your delete vote has been recorded"
            )
          $(".js-post-notice-delete-post[data-post-id=" + t + "]").remove()
        } else {
          var r =
            n && n.Message
              ? n.Message
              : o
              ? "A problem occurred during undeletion"
              : "A problem occurred during deletion"
          C(e, r)
        }
        StackExchange.realtime.pauseQuestionNotifications = !1
      },
      U = function(e, t) {
        t
          ? ($("div.question-status:has(span:contains('delete'))").show(),
            e
              .addClass("deleted-answer")
              .find("a[id^='delete-post-']")
              .addClass("deleted-post")
              .end()
              .find("div[id^='comments-']")
              .addClass("comments-container-deleted")
              .end()
              .find("div[id^='comments-link-']>a")
              .addClass("comments-link-deleted"))
          : document.location.reload(!0)
      },
      V = function() {
        var e = $(this),
          n = x(e),
          o = p()
        if (!e.is(":working")) {
          var i = $('<div class="grid--cell as-center" />')
            .addStacksSpinner("sm")
            .appendTo(w(e))
          o.working(!0),
            O({
              $target: e,
              postId: n,
              voteTypeId: t.acceptedByOwner,
              success: function(n, a, r) {
                r.Success
                  ? (v(o, !1),
                    parseInt(r.Message, 10) == t.acceptedByOwner && v(e, !0))
                  : C(e, r.Message, { transient: r.Transient }),
                  i.remove(),
                  o.working(!1).trigger("update")
              },
            })
        }
      },
      G = function() {
        var e = $(this),
          t = m(e) ? "unaccept" : "accept"
        e.setTooltipText(e.data("title-" + t), o)
        var n = e.data("verb-" + t)
        n && e.text(n)
      },
      H = function(e) {
        var t = StackExchange.options.site.negativeVoteScoreFloor
        return null === t ? e : Math.max(t, e)
      },
      z = !1,
      W = function(e) {
        if (!z) {
          z = !0
          var t = x(e)
          e.addStacksSpinner("sm", "fc-black-200"),
            $.ajax({
              type: "GET",
              url: "/posts/{postId}/vote-counts".formatUnicorn({ postId: t }),
              dataType: "json",
              success: function(t) {
                StackExchange.helpers.removeMessages()
                var n =
                    '<div class="fc-green-600">' +
                    t.up +
                    '</div><div class="vote-count-separator"></div><div class="fc-red-600">' +
                    t.down +
                    "</div>",
                  i = Math.abs(+t.up),
                  a = Math.abs(+t.down),
                  r = (function(e) {
                    return 1 == e.upCount && 1 == e.downCount
                      ? e.upCount + " up / " + e.downCount + " down"
                      : 1 == e.upCount
                      ? e.upCount + " up / " + e.downCount + " down"
                      : (1 == e.downCount,
                        e.upCount + " up / " + e.downCount + " down")
                  })({ upCount: i, downCount: a }),
                  s = (function(e) {
                    return 1 == e.upCount && 1 == e.downCount
                      ? "This " +
                          e.postType +
                          " has received " +
                          e.upCount +
                          " upvote and " +
                          e.downCount +
                          " downvote."
                      : 1 == e.upCount
                      ? "This " +
                        e.postType +
                        " has received " +
                        e.upCount +
                        " upvote and " +
                        e.downCount +
                        " downvotes."
                      : 1 == e.downCount
                      ? "This " +
                        e.postType +
                        " has received " +
                        e.upCount +
                        " upvotes and " +
                        e.downCount +
                        " downvote."
                      : "This " +
                        e.postType +
                        " has received " +
                        e.upCount +
                        " upvotes and " +
                        e.downCount +
                        " downvotes."
                  })({ upCount: i, downCount: a, postType: y(e) })
                e.html(n)
                  .data("value", Math.abs(+t.up) - Math.abs(+t.down))
                  .off("keypress click")
                  .data("bound", !1)
                  .data("had-split", !0)
                  .removeClass("c-pointer")
                  .removeAttr("tabindex")
                  .removeAttr("role")
                  .attr("aria-label", r)
                  .setTooltipText(s, o)
              },
              error: function(t) {
                e.removeSpinner(),
                  C(
                    e,
                    t.responseText && t.responseText.length < 100
                      ? t.responseText
                      : "An error occurred during vote count fetch",
                    { transient: 409 == t.status }
                  )
              },
              complete: function() {
                z = !1
              },
            })
        }
      },
      K = function(e) {
        ;(e || $(".js-vote-count"))
          .not(".mobile-vote-count")
          .not(":data(bound)")
          .filter(function() {
            return x($(this))
          })
          .attr({ role: "button", tabindex: "0" })
          .setTooltipText("View upvote and downvote totals.", o)
          .addClass("c-pointer")
          .unadornedButtonClick(function() {
            W($(this))
          })
          .data("bound", !0)
      },
      Y = function(e) {
        u(e),
          h()
            .unbind("click")
            .click(function(e) {
              e.preventDefault()
              var t = this.id.substring("protect-post-".length)
              return (
                $.ajax({
                  type: "POST",
                  url: "/question/protect",
                  data: { id: t, fkey: StackExchange.options.user.fkey },
                  success: function() {
                    location.reload(!0)
                  },
                }),
                !1
              )
            }),
          g()
            .unbind("click")
            .click(function(e) {
              e.preventDefault()
              var t = this.id.substring("unprotect-post-".length)
              return (
                $.ajax({
                  type: "POST",
                  url: "/question/unprotect",
                  data: { id: t, fkey: StackExchange.options.user.fkey },
                  success: function() {
                    location.reload(!0)
                  },
                }),
                !1
              )
            }),
          StackExchange.vote_closingAndFlagging.init(),
          L(),
          Q(),
          D(),
          $(document).on(
            {
              "s-tooltip:show": function(e) {
                $(this).has(".s-popover.is-visible:not(.s-popover__tooltip)")
                  .length && e.preventDefault()
              },
              "s-tooltip:shown": function(e) {
                var t = $(e.target).attr("aria-describedby")
                $("#" + t).addClass("wmx2")
              },
            },
            ".js-voting-container"
          )
      },
      Q = function() {
        function n() {
          return (
            i ||
              (i = $.ajax("/posts/popover/reactions", {
                dataType: "text",
              }).fail(function() {
                ;(i = null), E()
              })),
            i
          )
        }
        Q = function() {}
        var i = null
        Stacks.addController("reactions", {
          targets: ["button", "toggle", "count", "onboarding"],
          connect: function() {
            this.hasOnboardingTarget &&
              StackExchange.helpers.queueStacksPopover(
                $(this.onboardingTarget),
                60
              ),
              this.updateUI()
          },
          dismissOnboarding: function() {
            this.hasOnboardingTarget &&
              StackExchange.helpers.toggleStacksPopover(
                $(this.onboardingTarget),
                !1
              )
          },
          onboardingDismissed: function() {
            this.hasOnboardingTarget &&
              (StackExchange.helpers.toggleUserFlags(
                StackOverflow.Models.UserFlags.DismissPostReactionIntroPopover,
                !0
              ),
              $(this.onboardingTarget).remove(),
              $(this.element).removeClass("ps-relative"))
          },
          tryToggle: function(e) {
            "keypress" !== e.type || (32 !== e.keyCode && 13 !== e.keyCode)
              ? "click" === e.type &&
                (e.currentTarget.blur(), e.preventDefault(), this.toggle(e))
              : (e.preventDefault(), this.toggle(e))
          },
          toggle: function(e) {
            if (this.tryStartWork()) {
              var n = $(e.currentTarget),
                o = this.allowsMultiple ? +n.attr("data-vote-id") : t.thankYou,
                i = this.toggleVoteTypeId(o)
              O({
                $target: n,
                postId: this.postId,
                voteTypeId: o,
                undo: !i,
                success: this.handleVoteResponse.bind(this),
                error: this.abortWork.bind(this),
                complete: this.completeWork.bind(this),
              })
            }
          },
          loadPopover: function() {
            var e = "reactions-popover-" + this.postId,
              t = this.$btn,
              o = this
            n().done(function(n) {
              $("#" + e).length > 0 ||
                ($(n)
                  .attr("id", e)
                  .insertAfter(t),
                t.attr({
                  "aria-controls": e,
                  "data-controller": "s-popover " + t.attr("data-controller"),
                  "data-action": "s-popover#toggle " + t.attr("data-action"),
                  "data-s-popover-placement": "right",
                }),
                o.updateUI(),
                StackExchange.helpers.toggleStacksPopover(t, !0))
            })
          },
          showVotes: function() {
            $.ajax(
              "/posts/modal/reactions/{postId}".formatUnicorn({
                postId: this.postId,
              })
            )
              .then(this._showVotes.bind(this))
              .fail(E)
          },
          _showVotes: function(t) {
            if (t.Message) j(null, t.Message)
            else if (t.ModalHtml) {
              var n = e.showModal($(t.ModalHtml).elementNodesOnly(), {
                returnElements: $(this.countTarget),
              })
              StackExchange.gps.bindTrackClicks(n)
            }
            var o = this.stateFromData(t)
            o && (this.state = o)
          },
          get $el() {
            return $(this.element)
          },
          get $btn() {
            return $(this.buttonTarget)
          },
          get postId() {
            return +x(this.$el)
          },
          get allowsMultiple() {
            return "true" === this.$btn.attr("aria-haspopup")
          },
          get state() {
            var e = JSON.parse(this.$el.attr("data-votes-cast") || "[]")
            return (
              e && e.sort(),
              { votesCast: e, count: +this.$el.attr("data-count") }
            )
          },
          set state(e) {
            this.$el.attr({
              "data-votes-cast": JSON.stringify(e.votesCast),
              "data-count": e.count,
            }),
              this.updateUI()
          },
          tryStartWork: function() {
            return this.workData ? !1 : ((this.workData = this.state), !0)
          },
          abortWork: function() {
            this.workData &&
              ((this.state = this.workData), (this.workData = null))
          },
          completeWork: function() {
            this.workData = null
          },
          toggleVoteTypeId: function(e) {
            for (
              var t, n = this.state, o = !1;
              -1 !== (t = n.votesCast.indexOf(e));

            )
              (o = !0), n.votesCast.splice(t, 1)
            return (
              o ? n.count-- : (n.votesCast.push(e), n.count++),
              (this.state = n),
              !o
            )
          },
          stateFromData: function(e) {
            var t = { count: e.NewScore, votesCast: e.SelectedVoteTypeIds }
            return "number" == typeof t.count && Array.isArray(t.votesCast)
              ? t
              : null
          },
          handleVoteResponse: function(e, t, n) {
            var o = n.Success,
              i = n.Message,
              a = this.stateFromData(n)
            a ? (this.state = a) : o || this.abortWork(),
              o &&
                this.allowsMultiple &&
                StackExchange.helpers.toggleStacksPopover(this.$btn, !1),
              i &&
                (o
                  ? j(e, i, { transient: n.Transient })
                  : n.Info
                  ? j(e, i, { transient: !0 })
                  : C(e, i, { transient: !0 }))
          },
          updateUI: function() {
            var e = this.state,
              t = e.count,
              n = e.votesCast,
              i = n.length > 0,
              a = t > n.length,
              r = $(this.countTarget)
            r.toggleClass("d-none", 0 >= t)
              .toggleClass("fc-yellow-700", i)
              .toggleClass("fc-black-200", !i)
              .text(t)
            var s = this.allowsMultiple
              ? (function(e) {
                  return 1 == e.__count, "Reactions (" + e.__count + ")"
                })({ __count: t })
              : (function(e) {
                  return 1 == e.__count, "Thanks (" + e.__count + ")"
                })({ __count: t })
            this.$btn
              .attr({ "aria-label": s, "aria-pressed": i.toString() })
              .find("svg")
              .toggleClass("native", i),
              this.toggleTargets.forEach(function(e) {
                var t = $(e),
                  o = +t.attr("data-vote-id"),
                  i = -1 !== n.indexOf(o)
                t.toggleClass("is-selected", i)
                  .attr("aria-pressed", i.toString())
                  .find("svg")
                  .toggleClass("native", i)
              }, this)
            var c = y(this.$btn)
            if (this.allowsMultiple) {
              var l = (function() {
                var e = {
                    "17": "celebrate",
                    "18": "help",
                    "19": "thanks",
                    "20": "100",
                  },
                  t = n.map(function(t) {
                    return e[t]
                  })
                if (-1 !== t.indexOf(void 0)) return null
                switch (t.length) {
                  case 1:
                    return (function(e) {
                      return "You reacted <b>" + e.reaction1 + "</b>."
                    })({ reaction1: t[0] })
                  case 2:
                    return (function(e) {
                      return (
                        "You reacted <b>" +
                        e.reaction1 +
                        "</b> and <b>" +
                        e.reaction2 +
                        "</b>."
                      )
                    })({ reaction1: t[0], reaction2: t[1] })
                  case 3:
                    return (function(e) {
                      return (
                        "You reacted <b>" +
                        e.reaction1 +
                        "</b>, <b>" +
                        e.reaction2 +
                        "</b>, and <b>" +
                        e.reaction3 +
                        "</b>."
                      )
                    })({ reaction1: t[0], reaction2: t[1], reaction3: t[2] })
                  case 4:
                    return (function(e) {
                      return (
                        "You reacted <b>" +
                        e.reaction1 +
                        "</b>, <b>" +
                        e.reaction2 +
                        "</b>, <b>" +
                        e.reaction3 +
                        "</b>, and <b>" +
                        e.reaction4 +
                        "</b>."
                      )
                    })({
                      reaction1: t[0],
                      reaction2: t[1],
                      reaction3: t[2],
                      reaction4: t[3],
                    })
                  default:
                    return null
                }
              })()
              l
                ? this.$btn.setTooltipHtml(l, o)
                : this.$btn.setTooltipText(
                    i
                      ? (function(e) {
                          return 1 == e.__count
                            ? "You have reacted to this " +
                                e.postType +
                                " " +
                                e.__count +
                                " time."
                            : "You have reacted to this " +
                                e.postType +
                                " " +
                                e.__count +
                                " times."
                        })({ __count: n.length, postType: c })
                      : (function(e) {
                          return "React to this " + e.postType + "."
                        })({ postType: c }),
                    o
                  ),
                r.setTooltipText(
                  i
                    ? a
                      ? (function(e) {
                          return 1 == e.__count
                            ? "You and " +
                                e.__count +
                                " other reacted to this " +
                                e.postType +
                                "."
                            : "You and " +
                                e.__count +
                                " others reacted to this " +
                                e.postType +
                                "."
                        })({ __count: t - n.length, postType: c })
                      : (function(e) {
                          return "You reacted to this " + e.postType + "."
                        })({ __count: t - n.length, postType: c })
                    : (function(e) {
                        return 1 == e.__count
                          ? e.__count +
                              " other reacted to this " +
                              e.postType +
                              "."
                          : e.__count +
                              " others reacted to this " +
                              e.postType +
                              "."
                      })({ __count: t, postType: c }),
                  o
                )
            } else
              this.$btn.setTooltipHtml(
                i
                  ? "You reacted <b>thanks</b> (click to undo)."
                  : (function(e) {
                      return "Say <b>thanks</b> for this " + e.postType + "."
                    })({ postType: c }),
                o
              ),
                r.setTooltipHtml(
                  i
                    ? a
                      ? (function(e) {
                          return 1 == e.__count
                            ? "You and " +
                                e.__count +
                                " other reacted with <b>thanks</b>."
                            : "You and " +
                                e.__count +
                                " others reacted with <b>thanks</b>."
                        })({ __count: t - 1 })
                      : "You reacted with <b>thanks</b>."
                    : (function(e) {
                        return 1 == e.__count
                          ? e.__count + " other reacted with <b>thanks</b>."
                          : e.__count + " others reacted with <b>thanks</b>."
                      })({ __count: t }),
                  o
                )
          },
        }),
          Stacks.addController("se-tab-ui", {
            connect: function() {
              ;(this.boundSelectTab = this.selectTab.bind(this)),
                (this.boundHandleKeydown = this.handleKeydown.bind(this)),
                this.tabTargets.forEach(function(e) {
                  e.addEventListener("click", this.boundSelectTab),
                    e.addEventListener("keydown", this.boundHandleKeydown)
                }, this)
            },
            disconnect: function() {
              this.tabTargets.forEach(function(e) {
                e.removeEventListener("click", this.boundSelectTab),
                  e.removeEventListener("keydown", this.boundHandleKeydown)
              }, this)
            },
            get tabTargets() {
              return [].slice.call(
                this.element.querySelectorAll('[role="tab"]')
              )
            },
            get tabPanelTargets() {
              return [].slice.call(
                this.element.querySelectorAll('[role="tabpanel"]')
              )
            },
            selectTab: function(e) {
              e.preventDefault(), this._setTab(e.currentTarget)
            },
            handleKeydown: function(e) {
              if (32 === e.keyCode) return this.selectTab(e)
              var t = this.tabTargets,
                n = t.indexOf(e.currentTarget)
              if (39 === e.keyCode) n++
              else {
                if (37 !== e.keyCode) return
                n--
              }
              0 > n && (n = t.length - 1),
                n >= t.length && (n = 0),
                this._setTab(t[n], !0)
            },
            _setTab: function(e, t) {
              var n = $(e),
                o = $(this.tabTargets).not(n),
                i = $(this.tabPanelTargets).filter(
                  "#" + n.attr("aria-controls")
                ),
                a = $(this.tabPanelTargets).not(i)
              i.removeClass("d-none"),
                a.addClass("d-none"),
                n
                  .removeAttr("tabindex")
                  .addClass("is-selected")
                  .attr("aria-selected", "true"),
                o
                  .attr("tabindex", "-1")
                  .removeClass("is-selected")
                  .attr("aria-selected", "false"),
                t && e.focus()
            },
          })
      }
    return {
      init: function(e) {
        var t = !StackExchange.options.user.isRegistered
        t ? StackExchange.question.bindAnonymousVoteDisclaimers() : Y(e),
          p()
            .not(":data(bound)")
            .unadornedButtonClick(V)
            .on("update", G)
            .data("bound", !0)
            .trigger("update"),
          StackExchange.question.bindFetchAcceptedAnswerDates(),
          StackExchange.question.canViewVoteCounts() && K(),
          R()
      },
      election_init: function(e, t) {
        e && (c(t), K()), r()
      },
      up: d,
      down: f,
      vote_init: u,
      bookmark_init: L,
      delete_init: R,
      bindFetchVoteCounts: K,
      highlightExistingVotes: c,
      normalizePostScore: H,
      submit: O,
      voteTypeIds: t,
      getPostId: x,
    }
  })()),
  (StackExchange.vote_closingAndFlagging = (function() {
    function e() {
      P = A = M = _ = D = null
    }
    function t(e) {
      var t = A.data("isclosed")
      t ? (e ? v() : o(v)) : i(!0)
    }
    function n(n, o) {
      e(), (P = n.data("questionid")), (A = n)
      var i = A.data("show-interstitial") === !0
      i
        ? StackExchange.helpers
            .loadModal("/questions/close-reopen-explanation-modal")
            .done(function(e) {
              A.data("show-interstitial", !1),
                e.on("popupClosing", function() {
                  t(o)
                })
            })
            .fail(function(e) {
              StackExchange.helpers.showToast(e, { type: "danger" })
            })
        : t(o)
    }
    function o(e) {
      StackExchange.helpers
        .showConfirmModal({
          title: "Nominate this question for reopening?",
          bodyHtml: (function(e) {
            return (
              "Vote to reopen questions that have been improved or shouldn’t have been closed on " +
              e.siteName +
              ". " +
              e.startLink +
              "Learn more" +
              e.endLink +
              " about reopening questions."
            )
          })({
            siteName: StackExchange.options.site.name,
            startLink: '<a href="/help/reopen-questions" target="_blank">',
            endLink: "</a>",
          }),
          buttonLabel: "Vote to reopen",
        })
        .then(function(t) {
          t && e()
        })
    }
    function i(e) {
      StackExchange.helpers.closePopups($("#popup-close-question"))
      var t = A.closest(".post-menu")
      if (0 == t.length) {
        var n = A.closest(".js-post-flag-bar")
        t =
          n.length > 0
            ? n.siblings(".js-post-flag-close-container")
            : A.parent()
      }
      var o = { loadedTimestamp: A.data(q) }
      I && I.reviewTaskIdGetter && (o.reviewTaskId = I.reviewTaskIdGetter())
      var i = A.loadPopup({
        url: "/flags/questions/{questionId}/close/popup".formatUnicorn({
          questionId: P,
        }),
        data: o,
        dontShow: !0,
        target: t,
        errorTarget: I ? I.errorTarget : null,
      }).done(function(n) {
        ;(M = n),
          M.appendTo(t),
          a(),
          I && I.closeShowPopup
            ? I.closeShowPopup(M, A)
            : e && M.center().fadeIn("fast")
      })
      return i
    }
    function a() {
      M.on("popupClose", function() {
        _ && StackExchange.helpers.closePopups(_)
      }),
        M.find("input[type=radio]")
          .closest("li")
          .bind("show-action", function() {
            c($(this))
          }),
        $("#close-question-form").submit(function(e) {
          return e.preventDefault(), m(), !1
        }),
        $(".js-retract-close-vote").click(function() {
          x($(this))
        }),
        $(".action-list a").attr("target", "_blank"),
        r(),
        s()
    }
    function r() {
      var e = $(".close-as-duplicate-pane"),
        t = e.find(".js-duplicate-search-field")
      e
        .on("show", function() {
          t.focus(),
            $("#close-question-form .js-popup-submit").enable(
              $("#original-question-id").val()
            )
        })
        .addClass("handles-submit-button-enabling"),
        t.typeWatch({
          highlight: !1,
          wait: 750,
          captureLength: -1,
          callback: function() {
            h(t)
          },
        })
    }
    function s() {
      var e = M.find("[name=siteSpecificOtherText]"),
        t = e.closest("li"),
        n = t.find("[name=siteSpecificCloseReasonId]"),
        o = $.trim(e.val()),
        i = function() {
          return $.trim(e.val()) !== o
        },
        a = function(t) {
          var n = t && i()
          e.is(":focus") && M.find(".js-popup-submit").enable(n)
        }
      e.charCounter({
        target: t.find(".text-counter"),
        min: 30,
        max: 500,
        setIsValid: a,
      }),
        n.click(function() {
          setTimeout(function() {
            e.focus()
            var t = e.val()
            e.val("").val(t)
          })
        }),
        e.focus(function() {
          n.is(":checked") || n.attr("checked", "checked")
        })
    }
    function c(e) {
      var t = e.find("input:radio"),
        n = M.find(".popup-subpane").filter(function() {
          var e = t.data("subpane-name")
          return e && e == $(this).data("subpane-name")
        }),
        o = M.find(".js-popup-submit")
      n.length
        ? (l(n, $(".popup-active-pane"), !0),
          n.hasClass("handles-submit-button-enabling") || o.disable())
        : o.enable()
    }
    function l(e, t, n) {
      if (
        (M.find(".popup-active-pane")
          .removeClass("popup-active-pane")
          .hide(),
        M.find(".popup-title").html(e.data("title")),
        n)
      ) {
        var o = t.data("breadcrumb") || t.data("title")
        d(o, function() {
          l(t, e, !1)
        })
      }
      if ((u(e), t.data("clear-input-selector"))) {
        t.find(t.data("clear-input-selector")).val("")
        var i = M.find(".js-popup-submit")
        i.attr("disabled", "disabled")
      }
      e.addClass("popup-active-pane")
        .show()
        .trigger("show")
        .asyncLoad()
    }
    function u(e) {
      e.find("input[type=radio]:checked").removeAttr("checked"),
        e.find("li.action-selected").removeClass("action-selected"),
        M.find(".js-popup-submit").disable()
    }
    function d(e, t) {
      function n() {
        var e = o.find(".s-breadcrumbs--item").length > 0
        o.add(a).toggleClass("d-none", !e),
          i.toggleClass("d-none", e),
          o
            .find(".s-breadcrumbs--divider")
            .removeClass("d-none")
            .last()
            .addClass("d-none")
      }
      var o = M.find(".js-breadcrumbs"),
        i = M.find(".js-popup-cancel"),
        a = M.find(".js-popup-back"),
        r = $('<div class="s-breadcrumbs--item" />').appendTo(o)
      a.off("click").click(function() {
        o.find(".s-breadcrumbs--link")
          .last()
          .click()
      }),
        $(
          '<span class="s-breadcrumbs--link c-pointer" tabindex="0" role="button">'
        )
          .text(e)
          .click(function() {
            r
              .nextAll()
              .andSelf()
              .remove(),
              n(),
              t()
          })
          .appendTo(r),
        Svg.ArrowRightAltSm()
          .addClass("s-breadcrumbs--divider")
          .appendTo(r),
        n()
    }
    function f() {
      d("Flagging", function() {
        var e = M.position()
        StackExchange.options.isMobile || _.css({ top: e.top, left: e.left }),
          M.hide(),
          _.fadeIn("fast"),
          l(M.find("#pane-main"), M.find(".popup-active-pane"), !1)
      })
    }
    function p(e) {
      var t = e.find(".list-originals")
      return 0 == t.children().length
        ? (t.hide(), void 0)
        : (t.show(),
          g(t, !0),
          styleCode(),
          t
            .find(".item")
            .click(function() {
              var e = $(this)
                  .find(" .post-link > a")
                  .addSpinner({ "padding-left": "3px" }),
                t = $(e)
                  .closest(".close-as-duplicate-pane")
                  .find(".js-duplicate-search-field")
                  .val(e.attr("href"))
              return h(t, e), !1
            })
            .hover(function() {
              $(this).toggleClass("hover")
            }),
          void 0)
    }
    function h(e, t) {
      var n = e.closest(".popup-subpane"),
        o = n.find(".preview"),
        i = n.find(".list-container"),
        a = n.find(".search-errors").empty(),
        r = $("#original-question-id"),
        s = n.closest("#popup-close-question").find(".js-popup-submit")
      if ((s.disable(), o.html("").hide(), 0 != $.trim(e.val()).length)) {
        t || n.find(".search-spinner").addSpinner()
        var c = { q: e.val() }
        I && I.reviewTaskIdGetter && (c.reviewTaskId = I.reviewTaskIdGetter()),
          $.ajax({
            type: "GET",
            url:
              "/posts/popup/close/search-originals/" +
              $("#popup-close-question").data("questionid"),
            data: c,
            dataType: "html",
          })
            .done(function(e) {
              var t = $(e)
                .elementNodesOnly()
                .mathjax()
              if (t.hasClass("show-original"))
                i.hide(),
                  g(t),
                  o
                    .empty()
                    .append(t)
                    .show(),
                  t.find(".question .show-title a").attr("target", "_blank"),
                  t.find(".post-tag").addClass("user-tag"),
                  r.val(t.find(".question").data("questionid")),
                  s.enable()
              else {
                if (!t.hasClass("list-originals"))
                  throw "these are not the results you were looking for"
                i
                  .empty()
                  .append(t)
                  .show(),
                  p(i)
              }
            })
            .fail(function(e) {
              var t =
                e.responseText && e.responseText.length < 100
                  ? e.responseText
                  : "An error occurred while searching; please try again"
              a.text(t),
                s.disable(),
                r.val(""),
                n.find(".navi-container .instructions").remove()
            })
            .always(function() {
              StackExchange.helpers.removeSpinner()
            })
      }
    }
    function g(e, t) {
      var n = $(".close-as-duplicate-pane"),
        o = n.find(".original-display .navi-container"),
        i = e.find(".navi"),
        a = n.find(".js-duplicate-search-field")
      if (t) o.empty()
      else {
        var r = o.find(".navi")
        if (1 != r.length) return
        r.empty(),
          $("<a>")
            .text(r.data("abbr"))
            .click(function() {
              r
                .html(r.data("text"))
                .siblings()
                .remove(),
                o.siblings(".preview").hide(),
                o.siblings(".list-container").show(),
                $("#original-question-id").val(""),
                $("#popup-close-question")
                  .find(".js-popup-submit")
                  .disable(),
                $(".close-as-duplicate-pane")
                  .find(".search-errors")
                  .empty(),
                a.val(r.data("search-text")).focus()
            })
            .appendTo(r)
      }
      i.data("search-text", a.val())
        .text(i.data("text"))
        .prependTo(o)
    }
    function m() {
      var e = M.find(".js-popup-submit")
      if (!e.attr("disabled")) {
        $(".remaining-votes").addSpinner({
          position: "absolute",
          margin: "18px 0 0 3px",
        }),
          e.disable()
        var t = function(e, t) {
          return M.find(e + ' input[type=radio][name="' + t + '"]:checked')
        }
        return I && I.closeSubmitting && I.closeSubmitting() === !1
          ? (StackExchange.helpers.closePopups(M), void 0)
          : ($.ajax({
              type: "POST",
              url: "/flags/questions/{questionId}/close/add".formatUnicorn({
                questionId: P,
              }),
              dataType: "json",
              data: {
                fkey: StackExchange.options.user.fkey,
                closeReasonId: t("#pane-main", "closeReasonId").val(),
                duplicateOfQuestionId: $("#original-question-id").val(),
                siteSpecificCloseReasonId: t(
                  ".site-specific-pane",
                  "siteSpecificCloseReasonId"
                ).val(),
                belongsOnBaseHostAddress: t(
                  ".migration-pane",
                  "belongsOnBaseHostAddress"
                ).val(),
                siteSpecificOtherText: M.find(
                  "[name=siteSpecificOtherText]"
                ).val(),
                siteSpecificOtherCommentId: t(
                  ".site-specific-pane",
                  "siteSpecificCloseReasonId"
                ).data("other-comment-id"),
                originalSiteSpecificOtherText: M.find(
                  '[name="originalSiteSpecificOtherText"]'
                ).val(),
              },
            })
              .done(function(e) {
                b(e)
              })
              .fail(function() {
                j(A, "An error occurred; please try again")
              })
              .always(function() {
                StackExchange.helpers.closePopups(M)
              }),
            void 0)
      }
    }
    function v() {
      A.is(":working") ||
        (A.working(!0).addSpinner({ margin: "0 3px" }),
        $.ajax({
          type: "POST",
          url: "/flags/questions/{questionId}/reopen/add".formatUnicorn({
            questionId: P,
          }),
          dataType: "json",
          data: { fkey: StackExchange.options.user.fkey },
        })
          .done(function(e) {
            b(e)
          })
          .fail(function() {
            A.working(!1), j(A, "An error occurred; please try again")
          })
          .always(function() {
            StackExchange.helpers.removeSpinner()
          }))
    }
    function b(e) {
      ;(e.isClose = "QuestionClose" == e.FlagType),
        (e.isRecommendClose = "QuestionRecommendClose" == e.FlagType),
        (e.isReopen = "QuestionReopen" == e.FlagType),
        (e.verb = e.isRecommendClose ? "flag" : e.isReopen ? "reopen" : "close")
      var t = A
      e.isClose &&
        A.is('[class*="flag-post-"]') &&
        (t = A.parent().find("a[class*='close-question']")),
        e.Success ? y(e, t) : k(e, t)
    }
    function y(e, t) {
      if (
        !(I && I.closeCallback && I.closeCallback(t, e, e.isRecommendClose))
      ) {
        var n = function() {
          var e = window.location.href.splitOnLast("#")[0],
            t = "noredirect=1"
          e.indexOf(t) < 0 &&
            (e += (e.indexOf("?") < 0 ? "?" : "&") + "noredirect=1"),
            (window.location.href = e)
        }
        return e.ResultChangedState
          ? (n(), void 0)
          : (("Duplicate" != e.CloseReason &&
              e.SiteSpecificCloseReasonId != L) ||
              0 != t.closest(".mod-post-header").length ||
              StackExchange.comments.loadAll(t),
            e.Tooltip && t.attr("title", e.Tooltip),
            e.Message ? (w(e, t), void 0) : (n(), void 0))
      }
    }
    function w(e, t) {
      var n = (e.Message || "").length < 150,
        o = {
          transient: n,
          css: { "max-width": "600px", "line-height": n ? "inherit" : "25px" },
        }
      if ((t.parent().showInfoMessage(e.Message, o), !e.isRecommendClose)) {
        t = t.closest(".post-menu").find(".close-question-link")
        var i = t.find(".existing-flag-count")
        e.Count > 0
          ? (0 == i.length &&
              (t.text(t.text() + " "),
              (i = $('<span class="existing-flag-count">').appendTo(t))),
            i.text(e.Count))
          : 0 === e.Count &&
            i &&
            (i.remove(),
            t.attr("title", "You retracted your close vote for this question"))
      }
    }
    function k(e, t) {
      var n = e.Message
      if (!n)
        switch (e.verb) {
          case "flag":
            n = "A problem occurred when trying to flag"
            break
          case "reopen":
            n = "A problem occurred when trying to reopen"
            break
          case "close":
            n = "A problem occurred when trying to close"
        }
      ;(I && I.closeErrorCallback && I.closeErrorCallback(n)) ||
        (j(t, n),
        e.RefreshClient &&
          setTimeout(function() {
            location.reload(!0)
          }, 2500))
    }
    function x(e) {
      !e.is(":disabled") &&
        confirm("Are you sure (you cannot vote again after retracting)?") &&
        (e
          .disable()
          .addSpinnerBefore({ position: "absolute", margin: "18px 0 0 -25px" }),
        $.ajax({
          type: "POST",
          url: "/flags/questions/{questionId}/close/retract".formatUnicorn({
            questionId: P,
          }),
          dataType: "json",
          data: { fkey: StackExchange.options.user.fkey },
        })
          .done(function(e) {
            w(e, A)
          })
          .fail(function() {
            j(A, "An error occurred; please try again")
          })
          .always(function() {
            StackExchange.helpers.closePopups(M)
          }))
    }
    function S(t) {
      e(), (P = t.data("postid")), (A = t)
      var n = { loadedTimestamp: t.data(q) }
      I && I.reviewTaskIdGetter && (n.reviewTaskId = I.reviewTaskIdGetter()),
        t.loadPopup({
          url: "/flags/posts/{postId}/popup".formatUnicorn({ postId: P }),
          loaded: C,
          data: n,
          hideDescriptions: !1,
          subformShow: N,
          dontShow: I && I.flagShowPopup,
          errorTarget: I ? I.errorTarget : null,
        })
    }
    function C(e) {
      ;(_ = e),
        R(),
        _.find(".js-flag-load-close")
          .unbind("click")
          .click(function() {
            O ? O(_, $(this)) : F($(this))
          })
      var t = _.find("form"),
        n = StackExchange.settings.flags.allowRetractingFlags
          ? t.attr("data-showretract")
          : null
      t.submit(function(e) {
        return e.preventDefault(), n ? B(n) : U(), !1
      }),
        E(),
        I && I.flagShowPopup && I.flagShowPopup(e, A)
    }
    function E() {
      _.find(".action-list > .disabled-action").each(function() {
        var e = $(this)
        e.find("input[type=radio]").attr("disabled", "disabled"),
          e.find(".action-name").addClass("disabled-button")
      })
    }
    function j(e, t, n) {
      var o = I && I.errorTarget ? I.errorTarget : e.parent()
      n ? o.showInfoMessage(t) : o.showErrorMessage(t)
    }
    function T(e, t) {
      var n = I && I.errorTarget ? I.errorTarget : e.parent()
      n.showErrorMessage(t, { type: "warning" })
    }
    var I,
      O,
      P,
      A,
      M,
      _,
      D,
      L = 3,
      q = "loaded-timestamp",
      R = function() {
        var e = _.find(".js-popup-submit"),
          t = _.find('textarea[name="otherText"]'),
          n = _.find('input[value="PostOther"]')
        t
          .focus(function() {
            n.is(":checked") || n.attr("checked", "checked")
          })
          .charCounter({
            min: 10,
            max: 500,
            setIsValid: function(t) {
              n.is(":checked") && e.enable(t)
            },
          }),
          n.click(function() {
            t.focus()
          })
      },
      N = function(e) {
        if (e.is(".mod-attention-subform")) {
          var t = e.find('textarea[name="otherText"]')
          e.find('input[value="PostOther"]:checked').length > 0
            ? t.focus()
            : 0 == e.find("input:radio:checked").length &&
              e
                .closest(".popup")
                .find(".js-popup-submit")
                .disable()
        }
      },
      F = function(e) {
        var t = _.position(),
          n = _.fadeOut("fast").promise()
        M ||
          (e.siblings(".action-name").addSpinner({ margin: "0 5px" }),
          (n = i(!1))),
          n.done(function() {
            f(),
              e.is(".js-flag-load-close-duplicate") &&
                M.find("input[value=Duplicate]").click(),
              StackExchange.options.isMobile ||
                M.css({ top: t.top, left: t.left }),
              M.fadeIn("fast")
          }),
          _.find(".js-popup-submit").disable(),
          e.removeAttr("checked"),
          _.find(".action-list li").trigger("hide-action")
      },
      B = function(e) {
        V("/flags/posts/{postId}/retract/{flagType}", e, "")
      },
      U = function() {
        var e = _.find('textarea[name="otherText"]'),
          t = function(t) {
            return t.Success
              ? (StackExchange.helpers.closePopups(_),
                t.Message && j(A, t.Message, t.Success),
                !1)
              : (1 === t.Outcome
                  ? T(e, t.Message)
                  : j(_.find(".popup-actions"), t.Message),
                !0)
          },
          n = _.find('input[name="top-form"]:checked').val(),
          o = ""
        "PostOther" == n && (o = e.val())
        var i = D === o
        return (
          (D = o),
          I && I.flagSubmitting && I.flagSubmitting() === !1
            ? (StackExchange.helpers.closePopups(_), void 0)
            : (V("/flags/posts/{postId}/add/{flagType}", n, o, i, t), void 0)
        )
      },
      V = function(e, t, n, o, i) {
        _.find(".js-popup-submit")
          .disable()
          .addClass("is-loading"),
          $.ajax({
            type: "POST",
            url: e.formatUnicorn({ postId: P, flagType: t }),
            dataType: "json",
            data: {
              fkey: StackExchange.options.user.fkey,
              otherText: n,
              overrideWarning: o,
            },
          })
            .always(function() {
              i || StackExchange.helpers.closePopups(_),
                _.find(".js-popup-submit")
                  .enable()
                  .removeClass("is-loading")
            })
            .done(function(e) {
              ;(i && i(e)) ||
                (I && I.flagCallback && I.flagCallback(A, e)) ||
                (e.ResultChangedState
                  ? location.reload(!0)
                  : e.Message && j(A, e.Message, e.Success))
            })
            .fail(function(e) {
              var t =
                e.responseText && e.responseText.length < 100
                  ? e.responseText
                  : "An error occurred during flagging"
              j(_.find(".popup-actions"), t)
            })
      }
    return {
      close_afterLoadListOriginals: p,
      close_initDuplicateSubPane: r,
      updateCloseLinkCount: w,
      showReopenConfirmation: o,
      init: function(e) {
        I || (I = e)
        var t = ".close-question-link, .close-question-button",
          o = function(e, t) {
            e.preventDefault(), n($(this), !!t)
          }
        $("body")
          .off("click", t)
          .on("click", t, o)
        var i = ".flag-post-link, .flag-post-button",
          a = function(e) {
            e.preventDefault(), S($(this))
          }
        $("body")
          .off("click", i)
          .on("click", i, a)
        var r = Date.now()
        $(t)
          .add(i)
          .each(function() {
            var e = $(this)
            e.data(q) || e.data(q, r)
          })
      },
    }
  })()),
  (function() {
    function e(e, t) {
      ;(this.commentId = e), (this.jComment = t), (this.postUi = l(t))
    }
    function t(t, n) {
      n || (d = t), (t = t || d || {})
      for (var o in t) t.hasOwnProperty(o) && (e.prototype[o] = t[o])
    }
    function n(e, t) {
      if (!e) throw new Error("$txt is required")
      e instanceof $ || (e = $(e))
      var n = StackExchange.helpers.hasContentEditable(e)
      return 1 === arguments.length
        ? n
          ? e.html()
          : e.val()
        : (n
            ? e.html(
                $("<div/>")
                  .text(t)
                  .html()
              )
            : e.val(t),
          void 0)
    }
    function o(e, t, n, o, a, r) {
      var c,
        l = t.hasClass("mobile-comment-form")
      ;(c = l
        ? '<div class="js-comment-text-input-container"></div><button type="submit" class="s-btn s-btn__primary"></button> <button type="button" class="js-edit-comment-cancel s-btn d-none"></button><span class="comment-text"><span class="text-counter"></span></span>'
        : '<div class="js-comment-form-layout d-flex fw-wrap jc-end mt8"><div class="w75 fl-grow1"><div class="js-comment-text-input-container"/><span class="text-counter"></span> <span class="form-error"></span></div><div class="d-flex fd-column jc-space-between pb4 mb16 ml8"><button type="submit" class="s-btn s-btn__primary"></button><button type="button" class="js-edit-comment-cancel s-btn s-btn__link ta-left px2 mt4"></button><br/><button type="button" class="js-comment-help-link s-btn s-btn__link ta-left px2"></button></div></div>'),
        t
          .append(c)
          .find("[type=submit]")
          .text(n)
      var u = e.renderTextInput(t, l),
        d = t.find(".js-comment-text-input-container")
      a &&
        (d.append(
          '<div class="new-contributor-indicator fc-black py12 btr-sm ta-center">' +
            a +
            "</div>"
        ),
        u.addClass("btr0")),
        d.append(u),
        o &&
          (t
            .find(".js-edit-comment-cancel")
            .text("cancel")
            .removeClass("d-none")
            .click(function() {
              i(t).cancelEdit()
            }),
          t.keyup(function(e) {
            27 !== e.which ||
              0 !== t.find("#tabcomplete > li:visible").length ||
              t.hasClass("js-prevent-submit-form-on-enter-press") ||
              i(t).cancelEdit()
          }))
      var p = !1,
        h = function(e) {
          p = e
        },
        g = $(".js-comments-container").data("min-length")
      return (
        u
          .attr("placeholder", t.data("placeholdertext"))
          .charCounter({ min: g, max: 600, setIsValid: h })
          .focus(function() {
            StackExchange.comments.tabCompleter.init($(this))
          }),
        s && u.one("focus", f),
        t
          .find(".js-comment-help-link")
          .text("help")
          .click(f),
        t.submit(function() {
          return (
            p
              ? (StackExchange.helpers.disableSubmitButton(t), r(t))
              : t
                  .find("span.text-counter")
                  .animate({ opacity: 0 }, 100, function() {
                    $(this).animate({ opacity: 1 }, 100)
                  }),
            !1
          )
        }),
        StackExchange.settings.comments.doNotSubmitOnEnter ||
          StackExchange.helpers.submitFormOnEnterPress(t),
        u
      )
    }
    function i(t) {
      var n = $(t).closest(".js-comment"),
        o = (n.data("comment-id") || "").toString()
      return new e(o, n)
    }
    function a(e, t, n) {
      ;/Android/.test(navigator.userAgent) &&
        $(t, e).bind("touchstart", function(e) {
          var t = $(e.target)
          if (!t.is(n)) return !0
          var o = t.length ? $._data(t[0], "events") : null
          return o && o.click && o.click.length
            ? !0
            : (t.click(function() {}).attr("data-nothing-to-see-here", "X"), !0)
        })
    }
    function r(e, t, n) {
      var o = function(e) {
        e.preventDefault()
        var t = i(this),
          o = t[n]
        o.apply(t)
      }
      $(".js-comments-container", e).delegate(t, "click", o),
        a(e, ".js-comments-container", t)
    }
    var s,
      c = StackExchange.comments,
      l = c.uiForPost
    c.extendPostUi({
      ensureInput: function() {
        var e = this.jDiv.find('form[id^="add-comment-"]'),
          t = this
        return e.children().length
          ? (e.add(e.prev()).show(), e.find(".js-comment-text-input"))
          : o(
              t,
              e,
              "Add Comment",
              !1,
              this.jDiv.find(".js-add-comment-message").html(),
              function() {
                t.submitNewComment()
              }
            )
      },
      renderTextInput: function(e, t) {
        var n = $(
          '<textarea name="comment" class="s-textarea js-comment-text-input"></textarea>'
        )
        return t ? n.attr("rows", 2) : n.attr("rows", 3).attr("cols", 68), n
      },
      saveEditingComments: function(e) {
        var t = (this.editingComments = [])
        this.jDiv.find(".js-edit-comment-form:visible").each(function() {
          var n = i(this)
          if (n.commentId !== e) {
            var o = $(this).find("textarea")
            t.push([n.commentId, o.val()])
          }
        })
      },
      restoreEditingComments: function() {
        if (this.editingComments) {
          var e = this.jDiv
          $.each(this.editingComments, function(t, n) {
            var o = n[0],
              a = n[1],
              r = e.find("#comment-" + o)
            r.length && i(r).edit(a, !0)
          }),
            delete this.editingComments
        }
      },
      commentsShown: function() {
        try {
          var e = this.jDiv.find(
            "form[id^='add-comment-'] .js-comment-text-input:focus"
          )
          e.length && StackExchange.comments.tabCompleter.init(e),
            this.remainingCommentsCount(0)
        } catch (t) {}
      },
      submitNewComment: function() {
        var e = this.jDiv.find('form[id^="add-comment-"]'),
          t = e.find(".js-comment-text-input"),
          o = this
        if (!e.is(":working")) {
          e.working(!0)
          var i = { comment: n(t), fkey: StackExchange.options.user.fkey }
          this.alterAddEditDataBeforeSubmit(i),
            this.ajax(
              {
                type: "POST",
                url: "/posts/" + this.postId + "/comments",
                dataType: "html",
                data: i,
              },
              "An error occurred while adding this comment",
              e
            )
              .done(function(i) {
                n(t, ""),
                  t.keyup().blur(),
                  StackExchange.helpers.enableSubmitButton(e),
                  e.add(e.prev()).hide(),
                  e.find(".message-dismissable").fadeOutAndRemove(),
                  o.showComments(i, null, !1, !0),
                  o.jCommentsLinkContainer.show(),
                  $(document).trigger("comment", o.postId)
              })
              .fail(function() {
                StackExchange.helpers.enableSubmitButton(e)
              })
              .always(function() {
                e.working(!1)
              })
        }
      },
      checkDiscussion: function() {
        var e = this.jDiv.find(".is-comment-discussion"),
          t = this
        if (e.length) {
          e.remove()
          var n = this.jDiv.find(".comment-form")
          if (!n.find(".discussion-info").length) {
            {
              $(
                "<div style='margin:12px 0 3px; font-weight:bold' class='discussion-info'>" +
                  (function(e) {
                    return (
                      "Please avoid extended discussions in comments. Would you like to " +
                      e.aStart +
                      "automatically move this discussion to chat?"
                    )
                  })({ aStart: "<a href='#'>" }) +
                  "</a></div>"
              )
                .find("a")
                .click(function(e) {
                  $(this).unbind("click"),
                    e.preventDefault(),
                    t
                      .ajax(
                        {
                          url:
                            "/posts/" + t.postId + "/move-discussion-to-chat",
                          data: { fkey: StackExchange.options.user.fkey },
                          type: "POST",
                        },
                        "An error occurred when trying to move the discussion to chat",
                        n
                      )
                      .done(function(e) {
                        e.success
                          ? (window.location.href = e.message)
                          : StackExchange.helpers.showErrorMessage(n, e.message)
                      })
                })
                .end()
                .prependTo(n)
            }
            e.remove()
          }
        }
      },
    })
    var u = function() {}
    e.prototype = {
      undoVoteUp: u,
      voteUp: u,
      delete: u,
      undelete: u,
      flag: u,
      submitFlag: u,
      edit: u,
      cancelEdit: u,
      submitEdit: u,
      submitVote: u,
      renderScore: u,
      showEdits: u,
    }
    var d
    t({
      undoVoteUp: function() {
        if (
          confirm(
            "Are you sure you want to undo your upvote on this comment? You will not be able to upvote it again."
          )
        ) {
          var e = this.jComment
              .find(".comment-up-on")
              .addClass("comment-up comment-up-off")
              .removeClass("comment-up-on comment-up-undo"),
            t = this
          this.submitVote(0)
            .done(function(n) {
              return n.Success
                ? (t.renderScore(n.NewScore),
                  e
                    .prop(
                      "title",
                      "this comment adds something useful to the post"
                    )
                    .attr("aria-label", "Upvote Comment"),
                  $(document).trigger("undoUpVoteComment", t.postUi.postId),
                  void 0)
                : (e
                    .removeClass("comment-up-off comment-up")
                    .addClass("comment-up-on"),
                  void 0)
            })
            .fail(function(t) {
              409 === t.status && e.addClass("comment-up-undo"),
                e.removeClass("comment-up").addClass("comment-up-on")
            })
        }
      },
      voteUp: function() {
        var e = this.jComment
            .find(".comment-up")
            .addClass("comment-up-on")
            .removeClass("comment-up"),
          t = this
        this.submitVote(2)
          .done(function(n) {
            if (!n.Success)
              return (
                e.removeClass("comment-up-on").addClass("comment-up"), void 0
              )
            e.removeClass("comment-up-off"),
              e.addClass("comment-up-undo"),
              t.renderScore(n.NewScore)
            var o =
              "you've voted for this as a useful comment (click again to undo)"
            e.prop("title", o).attr("aria-label", o),
              $(document).trigger("upVoteComment", t.postUi.postId)
          })
          .fail(function() {
            e.removeClass("comment-up-on").addClass("comment-up")
          })
      },
      delete: function() {
        var e = this.jComment,
          t = this.postUi.jDiv,
          n = this.commentId
        confirm("Really delete this comment?") &&
          this.submitVote(10).done(function(o) {
            o.Success &&
              (e.remove(),
              0 === t.find(".js-comment, textarea:visible").length &&
                t.addClass("dno"),
              t.trigger("comment:deleted", [+n]))
          })
      },
      flag: function() {
        function e(e) {
          function a(e) {
            if (u) {
              var t = !1
              r.each(function() {
                var n = $(this),
                  o = n
                    .closest(".js-comment-flag-option")
                    .find(".js-required-comment"),
                  i = o.find("textarea").val() || "",
                  a = n.is(":checked")
                o.toggleClass("d-none", !a),
                  a &&
                    (0 == o.length || (i.length >= 6 && i.length <= 200)) &&
                    (t = !0),
                  e && o.find("textarea").focus()
              }),
                s.enable(t)
            }
          }
          var r = e.find('input[name="comment-flag-type"]'),
            s = e.find(".js-modal-submit"),
            c = e.find("form"),
            l = c.data("submittype"),
            u = "add" === l,
            d = "retract" === l,
            f = ""
          e.find(".js-comment-flag-option a").attr("target", "_blank"),
            e.find(".js-required-comment").each(function() {
              $(this)
                .find("textarea")
                .charCounter({
                  min: 6,
                  max: 200,
                  setIsValid: function() {
                    a(!1)
                  },
                  target: $(this).find(".js-input-message"),
                })
            }),
            r.click(function() {
              a(!0)
            }),
            a(!1),
            c.submit(function(a) {
              function c(e) {
                var n = "fc-red-500",
                  o = "fc-black-100",
                  a = "c-pointer",
                  r =
                    !e ||
                    StackExchange.settings.flags.allowRetractingCommentFlags,
                  s =
                    e && r
                      ? "You have flagged this comment (click to review your flag)"
                      : e
                      ? "You have already flagged this comment"
                      : "Flag this comment for serious problems or moderator attention"
                t.find(".comment-voting").toggleClass("d-none", e),
                  i
                    .toggleClass(n, e)
                    .toggleClass(o, !e)
                    .toggleClass(a, r)
                    .attr("aria-pressed", e)
                    .prop("disabled", !r)
                    .prop("title", s)
              }
              a.preventDefault()
              var l = r.filter(":checked"),
                p = l.val(),
                h =
                  l
                    .closest(".js-comment-flag-option")
                    .find(".js-required-comment textarea")
                    .val() || "",
                g = h === f
              ;(f = h),
                s.addClass("is-loading"),
                u
                  ? $.ajax({
                      type: "POST",
                      url: "/flags/comments/{commentId}/add/{flagTypeId}".formatUnicorn(
                        { commentId: n, flagTypeId: p }
                      ),
                      data: {
                        fkey: StackExchange.options.user.fkey,
                        otherText: h,
                        overrideWarning: g,
                      },
                      dataType: "json",
                    })
                      .done(function(i) {
                        if (!i.Success) {
                          var a = { closeOthers: !1 }
                          return (
                            1 === i.Outcome && (a.type = "warning"),
                            s
                              .removeClass("is-loading")
                              .parent()
                              .showErrorMessage(
                                i.Message ||
                                  "An error occurred during flagging",
                                a
                              ),
                            void 0
                          )
                        }
                        StackExchange.helpers.closePopups(e, "submit"),
                          StackExchange.helpers.showToast(
                            "Thanks for flagging! We take your reports seriously.",
                            { type: "success", transientTimeout: 3e3 }
                          ),
                          i.ResultChangedState
                            ? (t.remove(),
                              o.jDiv.trigger("comment:deleted", [+n]))
                            : c(!0)
                      })
                      .fail(function(e) {
                        var t = e.responseText
                        ;(!t || t.indexOf("<html") >= 0) &&
                          (t = "An error occurred during flagging"),
                          s
                            .removeClass("is-loading")
                            .parent()
                            .showErrorMessage(t, {
                              transient: 409 == e.status,
                              closeOthers: !1,
                            })
                      })
                  : d &&
                    $.ajax({
                      type: "POST",
                      url: "/flags/comments/{commentId}/retract/{flagTypeId}".formatUnicorn(
                        { commentId: n, flagTypeId: p }
                      ),
                      data: {
                        fkey: StackExchange.options.user.fkey,
                        otherText: h,
                        overrideWarning: g,
                      },
                      dataType: "json",
                    })
                      .done(function(t) {
                        return t.Success
                          ? (StackExchange.helpers.closePopups(e, "submit"),
                            StackExchange.helpers.showToast(
                              "The comment flag has been successfully retracted.",
                              { type: "success", transientTimeout: 3e3 }
                            ),
                            c(!1),
                            void 0)
                          : (StackExchange.helpers.showToast(
                              t.Message || "An error occurred during flagging",
                              { type: "danger", $parent: e }
                            ),
                            void 0)
                      })
                      .fail(function(e) {
                        var t = e.responseText
                        ;(!t || t.indexOf("<html") >= 0) &&
                          (t = "An error occurred during retraction of flag"),
                          s
                            .removeClass("is-loading")
                            .parent()
                            .showErrorMessage(t, {
                              transient: 409 == e.status,
                              closeOthers: !1,
                            })
                      })
            }),
            e.focus()
        }
        var t = this.jComment,
          n = this.commentId,
          o = this.postUi,
          i = t.find(".js-comment-flag"),
          a = i
            .addAtEnd(t.next().find(".js-comment-flag"))
            .addAtEnd(
              o.jCommentsLinkContainer.find(".js-add-link, .js-show-link")
            )
        i.addSpinnerAfter({}),
          StackExchange.helpers
            .loadModal(
              "/flags/comments/{commentId}/popup".formatUnicorn({
                commentId: this.commentId,
              }),
              { returnElements: a }
            )
            .done(e)
            .fail(function(e) {
              i.parent().showErrorMessage(e)
            })
            .always(function() {
              StackExchange.helpers.removeSpinner()
            })
      },
      edit: function(e, t) {
        var i = this.jComment,
          a = i.find(".js-edit-comment-form"),
          r = a.find(".js-comment-text-input"),
          s = this,
          c = s.postUi
        "string" != typeof e && (e = null),
          a.length &&
            (i.find(".js-comment-edit-hide").addClass("d-none"),
            i.find(".js-comment-text-and-form").addClass("comment-form"),
            a
              .removeClass("d-none")
              .toggleClass(
                "mobile-comment-form",
                StackExchange.options.isMobile || !1
              ),
            r.length ||
              ((r = o(c, a, "Save Edits", !0, "", function() {
                s.submitEdit()
              })),
              n(r, e || a.data("markdown") || "")),
            r.trigger("charCounterUpdate").trigger("editReady"),
            t ||
              (r.focus(),
              StackExchange.helpers.hasContentEditable(r) &&
                StackExchange.helpers.placeCaretAtEnd(r[0])))
      },
      cancelEdit: function() {
        var e = this.jComment,
          t = e.find(".js-edit-comment-form")
        e.find(".js-comment-edit-hide").removeClass("d-none"),
          e.find(".js-comment-text-and-form").removeClass("comment-form"),
          t.addClass("d-none").removeClass("mobile-comment-form"),
          t.children().remove(),
          t.unbind("submit"),
          e
            .find(".js-comment-edit.js-return-focus")
            .removeClass("js-return-focus")
            .focus()
      },
      submitEdit: function() {
        var e = this.jComment,
          t = e.find(".js-edit-comment-form"),
          o = t.find(".js-comment-text-input"),
          i = n(o),
          a = this.commentId,
          r = this.postUi,
          s = e.find(".js-comment-edit.js-return-focus").length > 0,
          c = { comment: i, fkey: StackExchange.options.user.fkey }
        r.alterAddEditDataBeforeSubmit(c),
          r
            .ajax(
              {
                type: "POST",
                url: "/posts/comments/" + a + "/edit",
                dataType: "html",
                data: c,
              },
              "An error occurred while editing this comment",
              t
            )
            .done(function(e) {
              o
                .val("")
                .keyup()
                .blur(),
                StackExchange.helpers.enableSubmitButton(t),
                r.showComments(e, a, !1, !0),
                r.jDiv.trigger("comment:edited", [+a, e])
              var n = r.jDiv.find(".js-comment[data-comment-id=" + a + "]")
              s && n.find(".js-comment-edit").focus()
            })
            .fail(function() {
              StackExchange.helpers.enableSubmitButton(t)
            })
      },
      submitVote: function(e, t) {
        var n = this.jComment.find(".js-comment-actions"),
          o = { fkey: StackExchange.options.user.fkey }
        if (t) for (var i in t) o[i] = t[i]
        var a = {
          type: "POST",
          url: "/posts/comments/" + this.commentId + "/vote/" + e,
          dataType: "json",
          data: o,
          success: function(e) {
            !e.Success &&
              e.Message &&
              StackExchange.helpers.showErrorMessage(n, e.Message)
          },
        }
        return this.postUi.ajax(a, "An error occurred during voting", n, !0)
      },
      renderScore: function(e) {
        var t = ""
        if (e && e > 0) {
          var n = 5 > e ? "" : 15 >= e ? "warm" : 30 >= e ? "hot" : "supernova"
          t +=
            '<span title="number of \'useful comment\' votes received" class="' +
            n +
            '">' +
            e +
            "</span>"
        }
        this.jComment.find(".comment-score").html(t)
      },
      showEdits: function() {
        var e = this.jComment,
          t = $("#comment-" + this.commentId + " .js-show-edits"),
          n = {
            type: "GET",
            url: "/posts/comments/{commentId}/edit-history".formatUnicorn({
              commentId: this.commentId,
            }),
            dataType: "html",
          }
        this.postUi.ajax(n, null, t.parent()).done(function(t) {
          StackExchange.helpers.showMessage(
            e.find(".js-comment-text-and-form"),
            null,
            {
              messageElement: t,
              type: "config",
              relativeToBody: !0,
              position: {
                my: "top center",
                at: "bottom center",
                offsetTop: -10,
                offsetLeft: 60,
              },
              fixedTo$elem: !0,
            }
          )
        })
      },
    })
    var f = function(e) {
        var t,
          n = $(this).closest(".js-comment-form-layout"),
          o = n.find(".comment-help-link"),
          i = $(".comment-help", n)
        if ("click" == e.type)
          (t = 0 == i.length || !i.is(":visible")), t || (f.manualOnly = !0)
        else {
          if (f.manualOnly) return
          t = !0
        }
        var a = function() {
          o.text(t ? "hide help" : "help")
        }
        if (i.length > 0) return t ? i.slideDown(a) : i.slideUp(a), void 0
        if (t) {
          var r = $("<div class='w100' />").appendTo(n)
          if (f.helpText) r.html(f.helpText), $(".comment-help", r).slideDown(a)
          else {
            if (f.inProgress) return
            ;(f.inProgress = !0),
              StackExchange.helpers.addSpinner(o),
              r.load("/posts/comment-help", function(e) {
                ;(f.helpText = e),
                  StackExchange.helpers.removeSpinner(),
                  $(".comment-help", this).slideDown(a),
                  (f.inProgress = !1)
              })
          }
        }
      },
      p = c.init
    ;(c.init = function(e) {
      p(e), (s = e && e.autoShowCommentHelp)
      var n = (e && e.post) || document
      r(n, ".comment-up", "voteUp"),
        r(n, ".js-comment-delete", "delete"),
        r(n, ".js-comment-undelete", "undelete"),
        r(n, ".js-comment-flag", "flag"),
        r(n, ".js-comment-edit", "edit"),
        r(n, ".comment-up-undo", "undoVoteUp"),
        r(n, ".js-show-edits", "showEdits"),
        $(".js-comments-container", n).on(
          "keypress",
          ".js-comment-edit",
          function(e) {
            ;(32 === e.keyCode || 13 === e.keyCode) &&
              $(this).addClass("js-return-focus")
          }
        ),
        $("form.comment-form-expanded", n).each(function() {
          l(this).addShow(!0, !0)
        }),
        t(null, !0)
    }),
      (c.extendCommentUi = t)
  })(),
  (StackExchange.comments.tabCompleter = (function() {
    function e(e) {
      return StackExchange.helpers.noDiacritics(
        e.replace(/ /g, "").toLowerCase()
      )
    }
    function t(e) {
      var t = $("#tabcomplete")
      t.empty(),
        e.length > 5 ||
          !e.length ||
          $.each(e, function(e, n) {
            var o = $("<li/>")
              .text(n)
              .appendTo(t)
            n.toLowerCase() == d.toLowerCase() && o.addClass("chosen")
          })
    }
    function n() {
      var e = u.caret().start,
        t = u.val(),
        n = !1
      if (/@[^\s!?();:+"].*@/.test(t)) {
        if (!/`/.test(t)) return null
        n = !0
      }
      var o = t.substring(e).search(/[\s!?();:+"\[\]\\]/)
      ;-1 == o && (o = t.length - e),
        StackExchange.options.site.insertSpaceAfterNameTabCompletion &&
          0 === o &&
          " " === t.substring(e - 1, e) &&
          (o = -1)
      var i = t.substring(0, e + o).match(/@[^\s!?();:+"\[\]\\]*$/)
      if (!i) return null
      var a = i[0].substr(1),
        r = e + o,
        s = r - a.length
      return n && /@[^\s!?();:+"]/.test(t.substr(0, s - 1))
        ? null
        : { start: s, pos: e, end: r, name: a }
    }
    function o(e) {
      var t = n()
      if (t.name === e) return u.is(":focus") || u.focus(), void 0
      StackExchange.options.site.insertSpaceAfterNameTabCompletion && (e += " ")
      var o = u.val()
      u.val(o.substring(0, t.start) + e + o.substring(t.end))
      var i = t.start + e.length
      u.caret(i, i)
    }
    function i(e) {
      var t, n
      if (9 == e.which) {
        if (((n = $("#tabcomplete li")), !n.length)) return
        var i = n.filter(".chosen").removeClass("chosen"),
          a = e.shiftKey ? i.prev() : i.next()
        a.length || (a = e.shiftKey ? n.last() : n.first()),
          (t = a.addClass("chosen").text())
      } else {
        if (27 != e.which) return
        if (((n = $("#tabcomplete li")), !n.length)) return
        ;(t = d), (d = null)
      }
      e.preventDefault(), o(t)
    }
    function a(o) {
      if (o.which)
        switch (o.which) {
          case 9:
          case 16:
          case 17:
          case 18:
          case 220:
            return
        }
      var i = n()
      if (!i) return (d = null), t([]), void 0
      if (d != i.name) {
        var a = []
        d = i.name
        var r
        r = i.name
          ? new RegExp("^" + e(i.name).replace(/\./g, "\\."), "i")
          : /^\W/
        for (var s = l.length, c = 0; s > c; c++) {
          var u = l[c],
            f = u.name,
            p = i.name ? e(f) : f
          p.match(r) && a.push(f.replace(/ /g, ""))
        }
        t(a)
      }
    }
    function r(e) {
      if (!e) return null
      var t = e.match(f)
      return t ? parseInt(t[1], 10) || null : null
    }
    function s(e) {
      return e
        .closest(".question, .answer")
        .find(".post-signature:last .user-details a[href^='/']")
        .filter(function() {
          return f.test($(this).attr("href"))
        })
    }
    function c(e, t, n, o) {
      if (
        !StackExchange.options.isMobile &&
        !StackExchange.helpers.hasContentEditable(e)
      ) {
        var c = t || e.closest("div.comments"),
          f = n || s(c),
          p = r(f.attr("href")),
          h = []
        c.find("a.comment-user").each(function(e, t) {
          var n = t.firstChild
          if (3 !== n.nodeType)
            return (
              StackExchange.debug.log(
                "unexpected structure in comment owner link"
              ),
              void 0
            )
          var o = n.nodeValue,
            i = r($(t).attr("href"))
          i !== StackExchange.options.user.userId && h.push({ id: i, name: o })
        }),
          (l = [])
        for (var g = {}, m = h.length - 1; m >= 0; m--) {
          var v = h[m]
          g[v.id] || (l.push(v), (g[v.id] = !0))
        }
        if (
          ($("#tabcomplete").remove(),
          u &&
            u
              .unbind($.browser.opera ? "keypress" : "keydown", i)
              .unbind("keyup click", a),
          0 === l.length || (1 === l.length && l[0].id === p))
        )
          return (u = null), void 0
        ;(u = e), (d = null)
        var b = $("<ul id='tabcomplete' />")
        o ? o.append(b) : b.insertBefore(e),
          e.bind("keydown", i).bind("keyup click", a)
      }
    }
    var l,
      u,
      d = null,
      f = /^(?:\/c\/[^\/]+)?\/users\/(\d+)/i
    return (
      $("body").on("mousedown", "#tabcomplete > li", function() {
        var e = $(this)
        return (
          e
            .parent()
            .find("li.chosen")
            .removeClass("chosen"),
          o(e.addClass("chosen").text()),
          !1
        )
      }),
      { init: c }
    )
  })()),
  (StackExchange.inlineEditing = {
    init: function() {
      function e(e, t, n, o) {
        t.fadeIn(n, o), e.hide()
      }
      function t(e) {
        return (
          "string" == typeof e &&
            ((e = e.replace(/\.{3,}/g, "…")),
            (e = e.replace(/---?(\s)/g, "—$1")),
            (e = e.replace(/"(.*?)"/g, "“$1”"))),
          e
        )
      }
      document.referrer &&
        $("#post-form input[name='referrer']").val(document.referrer),
        $(document).on("click", ".post-menu .edit-post", function(n) {
          if (!(n.ctrlKey || n.altKey || n.metaKey || n.shiftKey)) {
            var o = $(this),
              i = o.closest(".question, .answer")
            if (1 == o.data("handling-event")) return !1
            o.data("handling-event", 1),
              StackExchange.inlineTagEditing &&
                StackExchange.inlineTagEditing.cancelForFullEditor(i)
            var a = $("#show-editor-button"),
              r = a.is(":visible")
            r && a.hide(), o.addSpinner()
            var s = "",
              c = i.hasClass("answer")
            c && (s = " class='answer'")
            var l = i.find(".postcell,.answercell"),
              u = l.find("> *"),
              d = $('<div class="inline-editor"/>')
                .hide()
                .appendTo(l)
            return (
              d.load(o.attr("href") + "-inline", function(n, s) {
                var f
                if (
                  (d.find("[tabindex]").each(function() {
                    $(this).attr(
                      "tabindex",
                      parseInt($(this).attr("tabindex") - 20)
                    )
                  }),
                  StackExchange.helpers.removeSpinner(),
                  i.offset().top < $(window).scrollTop() &&
                    $("html, body").animate(
                      { scrollTop: $(i).offset().top - 55 },
                      200
                    ),
                  "error" == s)
                )
                  StackExchange.helpers.showErrorMessage(
                    l,
                    "The post could not be loaded"
                  ),
                    d.remove(),
                    o.data("handling-event", 0)
                else {
                  e(u, d, 300)
                  var p = function(t) {
                      if (StackExchange.navPrevention) {
                        if (
                          !StackExchange.navPrevention.confirm(
                            "You have started editing this post. Abandon this edit?"
                          )
                        )
                          return !1
                        StackExchange.navPrevention.stop()
                      }
                      return (
                        StackExchange.using("beginEditEvent", function() {
                          StackExchange.beginEditEvent.cancel()
                        }),
                        r && a.show(),
                        o.data("handling-event", 0),
                        e(d, t, 300, function() {
                          d.remove()
                        }),
                        t.offset().top < $(window).scrollTop() &&
                          $("html, body").animate(
                            { scrollTop: $(i).offset().top - 55 },
                            200
                          ),
                        !1
                      )
                    },
                    h = "input keyup",
                    g = function() {
                      w.unbind(h, m), S.trigger(f)
                    },
                    m = function() {
                      return S.trigger(w[0].value), !0
                    }
                  d.find(".cancel-edit").click(function() {
                    g(), p(u)
                  })
                  var v = StackExchange.helpers.DelayedReaction(
                      function(e) {
                        $.ajax({
                          type: "POST",
                          data: {
                            fkey: StackExchange.options.user.fkey,
                            hide: e,
                          },
                          url:
                            "/user/save-pref/hide-preview-for-inline-editing",
                        })
                      },
                      1e3,
                      { sliding: !0 }
                    ),
                    b = d.find(".hide-preview")
                  b.click(function() {
                    var e = d.find(".wmd-preview"),
                      t = e.is(":visible")
                    return (
                      t
                        ? (e.slideUp(), b.text("show preview"))
                        : (e.slideDown(), b.text("hide preview")),
                      v.trigger(t),
                      !1
                    )
                  })
                  var y = d.find("form"),
                    w = d.find("#title"),
                    k = $("#question-header a.question-hyperlink"),
                    x = w.data("question-state-suffix")
                  ;(x = x ? " " + x : ""), (f = w.val())
                  var S = StackExchange.helpers.DelayedReaction(
                    function(e) {
                      "undefined" != typeof e &&
                        (k.text(t(e) + x),
                        "undefined" != typeof MathJax &&
                          MathJax.Hub.Queue(["Typeset", MathJax.Hub, k[0]]))
                    },
                    { sliding: !0 }
                  )
                  w.bind(h, m),
                    d
                      .find("#title,.wmd-input,#tagnames,.edit-comment")
                      .keydown(function(e) {
                        return e.ctrlKey === !0 && 13 == e.keyCode
                          ? (y.submit(), !1)
                          : 27 == e.keyCode
                          ? (g(), p(u), !1)
                          : void 0
                      }),
                    StackExchange.using("postValidation", function() {
                      StackExchange.postValidation.initOnBlurAndSubmit(
                        y,
                        c ? 2 : 1,
                        "edit",
                        !1,
                        function(e) {
                          var n = e.html,
                            o = $(n).hide()
                          l.replaceWith(o),
                            c ||
                              $("#question-header a.question-hyperlink").text(
                                t(e.title)
                              ),
                            $("html").trigger("inline-edit-complete", [
                              o,
                              e.title,
                            ]),
                            styleCode(),
                            p(o)
                        }
                      )
                    }),
                    StackExchange.using("beginEditEvent", function() {
                      StackExchange.beginEditEvent.init()
                    })
                }
              }),
              !1
            )
          }
        })
    },
  }),
  (StackExchange.tagPreferences = (function() {
    function e(e) {
      return $(".js-tag-preferences-container").find(e)
    }
    function t(e) {
      m !== g.Full && m !== e && ((m = m === g.None ? e : g.Full), i())
    }
    function n() {
      m !== g.None && ((m = g.None), i(), o())
    }
    function o() {
      v && (v.remove(), (v = null))
    }
    function i() {
      function t(t, n) {
        n ? e(t).removeClass("d-none") : e(t).addClass("d-none")
      }
      var n = m == g.Full,
        o = n || m == g.Watching,
        i = n || m == g.Ignored,
        s = e(".js-watched-tag-list .post-tag").length > 0,
        l = e(".js-ignored-tag-list .post-tag").length > 0
      t(".js-watched-tag-list", s),
        t(".js-ignored-tag-list", l),
        o
          ? (r(".js-watched-tag-list"),
            a(".js-add-watched-container", function(e) {
              I(".js-ignored-tag-list", e),
                S(e, ".js-watched-tag-list", 20, !0, !1, !0)
            }),
            e(".js-watched-tag-list.js-has-subscriptions").addClass(
              "fd-column"
            ))
          : (e(
              ".js-add-watched-container form, .js-watched-tag-list .delete-tag"
            ).remove(),
            e(".js-watched-tag-list.js-has-subscriptions").removeClass(
              "fd-column"
            ),
            e(".js-watched-tag-list .dropdown").addClass("d-none")),
        i
          ? (c(),
            r(".js-ignored-tag-list"),
            a(".js-add-ignored-container", function(e) {
              b(),
                I(".js-watched-tag-list", e),
                S(e, ".js-ignored-tag-list", 25, !0, !1, !0)
            }))
          : e(
              ".js-add-ignored-container form, .js-ignored-tag-list .delete-tag"
            ).remove(),
        t(".js-edit-all-tags", !n),
        t(".js-edit-watched-tags", !o && s),
        t(".js-show-add-watched, .js-show-add-watched-container", !o && !s),
        t(".js-edit-ignored-tags", !i && l),
        t(".js-show-add-ignored, .js-show-add-ignored-container", !i && !l),
        t(".js-full-edit-visible", n),
        t(".js-watched-edit-visible", o),
        t(".js-ignored-edit-visible", i),
        e(".post-tag").addClass("user-tag"),
        $(document).off("click", h),
        m != g.None && $(document).on("click", h)
    }
    function a(t, n) {
      var o = e(t)
      if (!(o.children("form").length > 0)) {
        var i = $(
            '\n            <form class="mt8 grid">\n                <input type="text" class="grid--cell fl1 m0 mrn1 s-input s-input__sm brr0">\n                <button type="submit" class="grid--cell s-btn s-btn__primary blr0 m0">Add</button>\n            </form>'
          ),
          a = i.find("input[type=text]")
        StackExchange.using("tagAutocomplete", function() {
          bindTagFilterAutoComplete(a)
        }),
          i.on("submit", function(e) {
            e.preventDefault(), n(a)
          }),
          o.append(i)
      }
    }
    function r(t) {
      e(t)
        .find(".post-tag")
        .each(function() {
          var e = $(this)
          0 === e.children(".delete-tag").length &&
            $("<span>")
              .addClass("delete-tag")
              .attr("title", "Remove tag")
              .appendTo(e)
              .click(function(t) {
                s(e), t.preventDefault()
              })
        })
    }
    function s(e) {
      var t = e.closest(".js-tag"),
        n = e.closest(".js-ignored-tag-list, .js-watched-tag-list")
      if (0 !== n.length) {
        t.remove()
        var o = n.is(".js-ignored-tag-list") ? 25 : 20,
          a = E(n).join(" ")
        u(o, a), p(), i()
      }
    }
    function c() {
      e(".js-ignored-section").removeClass("d-none")
    }
    function l(e) {
      return (
        (e = e
          .replace(/#/g, "ñ")
          .replace(/\+/g, "ç")
          .replace(/\./g, "û")),
        /\*/.test(e)
          ? e.indexOf("*") == e.length - 1
            ? "[class*=' t-" + e.substr(0, e.length - 1) + "']"
            : ":regex(class, t-" + e.replace(/\*/g, ".*") + ")"
          : ".t-" + e
      )
    }
    function u(e, t, n, o) {
      var i = ""
      "undefined" != typeof k && (i = String(k))
      var a = {
        fkey: StackExchange.options.user.fkey,
        key: e,
        value: t,
        forUserId: i,
      }
      return o && (a.render = 1), $.post("/users/save-preference", a, n)
    }
    function d(e) {
      e.each(function(e, t) {
        var n = $(t)
        n.is(".post-tag") && (x[n.text()] = n)
      })
    }
    function f(e, t, n, o) {
      if (window.performance && window.performance.now) {
        var i = window.performance.now()
        t()
        var a = window.performance.now() - i,
          r =
            StackExchange.options &&
            StackExchange.options.user &&
            StackExchange.options.user.isDeveloper
        ;(r || a > n) &&
          (console.log("'" + e + "' took " + a.toString() + "ms"),
          r && o && a > n && console.log(o))
      } else t()
    }
    function p(t, n, o) {
      if (((k = o), n))
        for (var i = 0; i < n.length; i++) -1 == y.indexOf(n[i]) && y.push(n[i])
      n = y
      var a = e(".js-ignored-tag-list .post-tag"),
        r = e(".js-watched-tag-list .post-tag")
      if (!t || 0 != a.length || 0 != r.length) {
        $("div.question-summary").removeClass(
          "tagged-ignored tagged-ignored-hidden tagged-interesting"
        )
        var s = w(a, n),
          c = w(r, n)
        if (s.length > 0) {
          var l = j() ? "tagged-ignored-hidden" : "tagged-ignored"
          f(
            "ignored",
            function() {
              $("div.tags")
                .filter(s)
                .closest("div.question-summary")
                .addClass(l)
            },
            1500,
            s
          )
        }
        c.length > 0 &&
          f(
            "interesting",
            function() {
              $("div.tags")
                .filter(c)
                .closest("div.question-summary")
                .addClass("tagged-interesting")
            },
            1500,
            c
          )
      }
    }
    function h(e) {
      !$.contains(document.documentElement, e.target) ||
        $(e.target).closest(
          ".js-tag-preferences-container, .js-edit-interesting, .s-modal, .message"
        ).length > 0 ||
        n()
    }
    var g
    !(function(e) {
      ;(e[(e.Full = 0)] = "Full"),
        (e[(e.Watching = 1)] = "Watching"),
        (e[(e.Ignored = 2)] = "Ignored"),
        (e[(e.None = 3)] = "None")
    })(g || (g = {}))
    var m = g.None,
      v = null,
      b = function() {
        $(".js-show-remaining-ignored").addClass("d-none"),
          $(".js-ignored-tag-list .js-tag").removeClass("d-none")
      },
      y = [],
      w = function(e, t) {
        return e
          .map(function(e, t) {
            return $(t).text()
          })
          .filter(function(e, n) {
            if (!t) return !0
            var o
            ;/\*/.test(n) &&
              (o = new RegExp(
                n.replace(/([.+])/g, "\\$1").replace(/\*/g, ".*")
              ))
            for (var i = 0; i < t.length; i++) {
              var a = t[i]
              if (n === a) return !1
              if (o && o.test(a)) return !1
            }
            return !0
          })
          .map(function(e, t) {
            return l(t)
          })
          .get()
          .join(",")
      },
      k = void 0,
      x = {},
      S = function(e, t, n, a, r, s) {
        void 0 === a && (a = !1),
          void 0 === r && (r = !1),
          void 0 === s && (s = !1)
        var c = $(e),
          l = $(t),
          d = c.val(),
          f = StackExchange.helpers.sanitizeAndSplitTags(d, !0, !1),
          h = !1
        o()
        for (
          var g,
            m,
            v,
            b,
            y = function(e) {
              if (0 == $.trim(e).length) return "continue"
              var t = l.find(".post-tag")
              t.each(function() {
                return $(this).text() == e
                  ? ($(this)
                      .fadeTo(500, 0.1)
                      .fadeTo(500, 1),
                    (h = !0),
                    void 0)
                  : void 0
              }),
                h ||
                  ((g = encodeURIComponent(e)),
                  (m = $(l.find(".js-tag-template").html())),
                  (v = x[e]),
                  v
                    ? m.find(".post-tag").replaceWith(v)
                    : m
                        .find(".post-tag")
                        .attr({
                          href:
                            (StackExchange.options.site.routePrefix || "") +
                            "/questions/tagged/" +
                            g,
                          title: (function(e) {
                            return "show questions tagged '" + e.tag + "'"
                          })({ tag: e }),
                        })
                        .text(e),
                  /~\*/.test(e) &&
                    m.find(".js-tag-frequency-menu-toggle").remove(),
                  (b = l
                    .children(".js-tag")
                    .filter(function(t, n) {
                      var o = $(n)
                        .find(".post-tag")
                        .text()
                      return o && e.localeCompare(o) < 0
                    })
                    .first()),
                  b.length > 0 ? m.insertBefore(b) : l.append(m)),
                (h = !1)
            },
            w = 0,
            k = f;
          w < k.length;
          w++
        ) {
          var S = k[w]
          y(S)
        }
        c.val(""), a && c.focus()
        var j = E(l),
          T = j.join(" ")
        r ||
          u(
            n,
            T,
            function(e) {
              e &&
                s &&
                (e.html &&
                  (l.find(".js-tag").remove(), l.append(e.html), p(), i()),
                e.error && C(c, e.error))
            },
            s
          ).fail(function() {
            C(c, "An error occurred; please try again")
          }),
          p(),
          i()
      },
      C = function(e, t) {
        m !== g.None &&
          e.parents("html").length > 0 &&
          (v = StackExchange.helpers.showErrorMessage(e, t, {
            position: { my: "top left", at: "bottom left", offsetLeft: 10 },
          }))
      },
      E = function(e) {
        var t = Array()
        return (
          e.find(".post-tag").each(function(e, n) {
            var o = $(n)
              .text()
              .trim()
            o && t.push(o)
          }),
          t
        )
      },
      j = function() {
        return e(".js-hide-ignored").is(":checked")
      },
      T = function(t) {
        if (!j()) return !1
        var n = e(".js-ignored-tag-list .post-tag"),
          o = w(n, !0)
        return (
          o.length > 0 &&
          $(t)
            .find("div.tags")
            .filter(o).length > 0
        )
      },
      I = function(t, n) {
        var o = StackExchange.helpers.sanitizeAndSplitTags($(n).val(), !0, !1)
        e(t)
          .find(".js-tag")
          .filter(function() {
            return (
              -1 !==
              o.indexOf(
                $(this).data("tag-name") ||
                  $(this)
                    .find(".post-tag")
                    .text()
              )
            )
          })
          .remove()
      },
      O = function(e, t) {
        var n = $("<input>").val(e)
        "favorite" == t &&
          (I(".js-ignored-tag-list", n),
          S(n, ".js-watched-tag-list", 20, !1, !0)),
          "ignore" == t &&
            (I(".js-watched-tag-list", n),
            c(),
            b(),
            S(n, ".js-ignored-tag-list", 25, !1, !0)),
          "clear" == t &&
            (I(".js-watched-tag-list, .js-ignored-tag-list", n), p(), i())
      },
      P = function() {
        var o = $(".js-tag-preferences-container")
        o.on("click", ".js-show-add-ignored, .js-edit-ignored-tags", function(
          e
        ) {
          e.preventDefault(),
            t(g.Ignored),
            o.find(".js-add-ignored-container input[type=text]").focus()
        }),
          o.on("click", ".js-show-add-watched, .js-edit-watched-tags", function(
            e
          ) {
            e.preventDefault(),
              t(g.Watching),
              o.find(".js-add-watched-container input[type=text]").focus()
          }),
          o.on("click", ".js-edit-all-tags", function(e) {
            t(g.Full), e.preventDefault()
          }),
          o.on("click", ".js-show-remaining-ignored", function() {
            return b()
          }),
          o.on("click", ".js-hide-ignored, .js-dim-ignored", function() {
            u(30, j()), p()
          }),
          o.on("click", ".js-hide-editor", function() {
            return n()
          }),
          o.on("click", ".js-tag-frequency-menu-toggle", function() {
            var e = $(this)
            e.find(".dropdown")
              .toggleClass("d-none")
              .find("a")
              .each(function(t, n) {
                var o = $(n)
                o.data("frequency") ===
                e.find(".js-tag-frequency-label").data("frequency")
                  ? o.addClass("selected")
                  : o.removeClass("selected")
              })
          }),
          o.on("click", ".dropdown a", function() {
            var e = $(this),
              t = e
                .closest(".js-tag")
                .find(".post-tag")
                .text(),
              n = e.data("frequency")
            return (
              t &&
                M(t, n, function() {
                  e.closest(".dropdown").addClass("d-none")
                }),
              !1
            )
          }),
          o.on("click", function(t) {
            var n = $(t.target)
              .closest(".js-tag-frequency-menu-toggle")
              .find(".dropdown")
              .get(0)
            e(".dropdown")
              .filter(function(e, t) {
                return t != n
              })
              .addClass("d-none")
          }),
          $(".js-edit-interesting").on("click", function(e) {
            e.preventDefault(),
              o.length &&
                (t(g.Watching),
                $("html, body").animate(
                  { scrollTop: o.offset().top },
                  400,
                  function() {
                    return o
                      .find(".js-add-watched-container input[type=text]")
                      .focus()
                  }
                ))
          })
      },
      A = function() {
        StackExchange.tagmenu.init(), R(), P(), i()
      },
      M = function(t, n, o) {
        var i = null
        "undefined" != typeof forUserId && (i = String(forUserId))
        var a = {
          fkey: StackExchange.options.user.fkey,
          tagName: t,
          notificationFrequencyId: n,
          forUserId: i,
        }
        $.post("/users/tags/subscribe", a, function(i, a, r) {
          i &&
            e(".js-watched-tag-list.js-has-subscriptions .js-tag").each(
              function() {
                var e = $(this)
                e.find(".post-tag").text() === t &&
                  e
                    .find(".js-tag-frequency-label")
                    .text(_(n))
                    .data("frequency", n)
              }
            ),
            o && o(i, a, r)
        })
      },
      _ = function(e) {
        switch (e) {
          case StackOverflow.Models.NotificationFrequencyTypeId.None:
            return "None"
          case StackOverflow.Models.NotificationFrequencyTypeId.Daily:
            return "Daily"
          case StackOverflow.Models.NotificationFrequencyTypeId.FifteenMinutes:
            return "15 min"
          default:
            return "Unknown"
        }
      },
      D = function(e, t) {
        var n = e.data("tag-name"),
          o = e.data("slug").toString()
        d(e.find(".js-templates .post-tag")),
          O(n, t),
          $.ajax({
            type: "POST",
            url: "/tags/" + encodeURIComponent(o) + "/prefs",
            data: { action: t, fkey: StackExchange.options.user.fkey },
            dataType: "html",
            success: function(e) {
              $(".js-embedded-tag-preferences").each(function(t, n) {
                var i = $(n)
                if (i.data("slug").toString() === o) {
                  var a = $("" + e).addClass(n.className)
                  a.find(".js-tag-frequency-popup").remove(), i.replaceWith(a)
                }
              }),
                L(n, e)
            },
            error: function() {},
            complete: function() {
              e.find(".is-loading").removeClass("is-loading")
            },
          })
      },
      L = function(e, t) {
        var n = $("" + t),
          o = n.find(".js-tag-frequency-popup").remove(),
          i = n.data("new-frequency")
        o.length > 0
          ? (StackExchange.helpers.showModal(o, {
              dismissing: function() {
                M(e, StackOverflow.Models.NotificationFrequencyTypeId.None)
              },
            }),
            o.find(".js-frequency").click(function() {
              var t =
                StackOverflow.Models.NotificationFrequencyTypeId[$(this).val()]
              M(e, t, function(n) {
                n && (o.fadeOutAndRemove(), q(e, t))
              })
            }),
            o
              .find(".js-frequency:checked + .js-frequency-label")
              .click(function() {
                o.fadeOutAndRemove(), q(e, i)
              }))
          : q(e, i)
      },
      q = function(e, t) {
        var n
        if (t == StackOverflow.Models.NotificationFrequencyTypeId.Daily)
          n =
            "You'll receive daily emails when there is new activity in this tag."
        else {
          if (
            t != StackOverflow.Models.NotificationFrequencyTypeId.FifteenMinutes
          )
            return
          n =
            "You'll receive an email within 15 minutes when there is new activity in this tag."
        }
        var o = (function(e) {
            return "You&#39;re now watching " + e.tag + "."
          })({
            tag:
              '<span class="d-inline-block bg-green-200 px4 py2 bar-sm">' +
              e +
              "</span>",
          }),
          i = StackExchange.helpers.showToast(o + " " + n, {
            type: "success",
            actions: [
              {
                labelContents: Svg.UndoSm().add($("<span/>").text("Undo")),
                click: function() {
                  return M(
                    e,
                    StackOverflow.Models.NotificationFrequencyTypeId.None,
                    function(e) {
                      e && i.fadeOutAndRemove()
                    }
                  )
                },
              },
            ],
          })
      },
      R = function() {
        $(document).on(
          "click",
          ".js-embedded-tag-preferences button",
          function() {
            var e = $(this),
              t = e.closest(".js-embedded-tag-preferences"),
              n = e.data("action")
            e.is(".is-loading") || (e.addClass("is-loading"), D(t, n))
          }
        )
      }
    return {
      applyPrefs: p,
      isIgnored: T,
      resetDontApplyCache: function() {
        y = []
      },
      init: A,
    }
  })())
var StackExchange
!(function(e) {
  var t
  !(function(t) {
    function n(t, n, o) {
      var i = e.options.user
      return $.post("/users/toggle-flag/" + t + "/" + !!n, {
        fkey: i.fkey,
        userId: o || i.proxiedUserId || i.userId,
      }).then(function(e) {
        return e.hasFlags
      })
    }
    t.toggleUserFlags = n
  })((t = e.helpers || (e.helpers = {})))
})(StackExchange || (StackExchange = {}))
var StackOverflow
!(function(e) {
  var t
  !(function(e) {
    var t
    !(function(e) {
      ;(e[(e.None = 0)] = "None"),
        (e[(e.FifteenMinutes = 1)] = "FifteenMinutes"),
        (e[(e.Daily = 2)] = "Daily")
    })(
      (t =
        e.NotificationFrequencyTypeId || (e.NotificationFrequencyTypeId = {}))
    )
  })((t = e.Models || (e.Models = {})))
})(StackOverflow || (StackOverflow = {})),
  (function(e) {
    var t
    !(function(e) {
      var t
      !(function(e) {
        ;(e[(e.None = 0)] = "None"),
          (e[(e.DisableSideNav = 1073741824)] = "DisableSideNav"),
          (e[(e.TeamGuide = 1)] = "TeamGuide"),
          (e[(e.DismissMarkdownEditorHelp = 2)] = "DismissMarkdownEditorHelp"),
          (e[(e.HideLeftNavigation = 4)] = "HideLeftNavigation"),
          (e[(e.DismissMentionsCallout = 8)] = "DismissMentionsCallout"),
          (e[(e.DismissQuestionPageProductBanner = 16)] =
            "DismissQuestionPageProductBanner"),
          (e[(e.DismissWelcomeModal = 32)] = "DismissWelcomeModal"),
          (e[(e.DismissCloseReopenPrivilegePopover = 64)] =
            "DismissCloseReopenPrivilegePopover"),
          (e[(e.DismissCloseReopenPrivilegeExplanationModal = 128)] =
            "DismissCloseReopenPrivilegeExplanationModal"),
          (e[(e.DismissPostReactionIntroPopover = 256)] =
            "DismissPostReactionIntroPopover"),
          (e[(e.DismissFollowQuestionIntroPopover = 512)] =
            "DismissFollowQuestionIntroPopover"),
          (e[(e.DismissClosedEditModal = 1024)] = "DismissClosedEditModal"),
          (e[(e.DismissModalForCompletedEditOnClosedQuestion = 2048)] =
            "DismissModalForCompletedEditOnClosedQuestion"),
          (e[(e.DismissAddAdminNotice = 4096)] = "DismissAddAdminNotice")
      })((t = e.UserFlags || (e.UserFlags = {})))
    })((t = e.Models || (e.Models = {})))
  })(StackOverflow || (StackOverflow = {})),
  (StackExchange.vote_bounty = (function() {
    function e(e, n, o) {
      if (o.Success) {
        var i = e.data("award-if-applied")
        e
          .closest(".js-bounty-award-container")
          .find(".js-bounty-award")
          .removeClass("d-none")
          .text("+" + i)
          .setTooltipText(
            (function(e) {
              return (
                "This answer has been awarded bounties worth " +
                e.bountyAmount +
                " reputation"
              )
            })({ bountyAmount: i }),
            { placement: "right" }
          ),
          $(
            ".js-bounty-notification, .js-bounty-vote, .js-bounty-award-container:not(:has(.js-bounty-award:not(.d-none)))"
          ).remove()
      } else
        t(!0), StackExchange.helpers.showToast(o.Message, { type: "danger" })
    }
    function t(e) {
      $(".js-bounty-vote")
        .prop("disabled", !e)
        .find(".s-badge")
        .toggleClass("bg-black-500")
    }
    function n(n) {
      if (
        confirm(
          "Are you sure you want to award your bounty to this answer? You can’t undo this!"
        )
      ) {
        var o = StackExchange.vote.getPostId(n)
        t(!1),
          n.dispatchEvent("mouseout"),
          StackExchange.vote.submit({
            $target: n,
            postId: o,
            voteTypeId: StackExchange.vote.voteTypeIds.bountyClose,
            success: e,
          })
      }
    }
    var o = function() {
        $(document).on("click", ".js-bounty-vote", function() {
          n($(this))
        })
      },
      i = function(e, t) {
        return (
          (t = $(t || $(".bounty-link"))),
          (t = t.off("click", a)),
          e && t.on("click", a),
          t
        )
      },
      a = function() {
        var e = i(!1, this),
          t = $(e)
            .closest(".question")
            .data("questionid")
        e.loadPopup({ url: "/posts/bounty/" + t }).always(function() {
          i(!0, e)
        })
      },
      r = function() {
        i(!0)
      }
    return {
      init: function(e) {
        e.canOpenBounty && r(), e.hasOpenBounty && o()
      },
    }
  })())
