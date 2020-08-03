StackExchange.postValidation = (function() {
  function e(e, t, n) {
    var r = {
      Title: ".js-post-title-field",
      Body: ".js-post-body-field[data-post-type-id=" + t + "]",
      Tags: ".js-post-tags-field",
      Mentions: ".js-post-mentions-field",
      EditComment: ".js-post-edit-comment-field",
      Excerpt: ".js-post-excerpt-field",
      Email: ".js-post-email-field",
      ArticleType: ".js-article-type-field",
    }
    return r[n] ? e.find(r[n]) : $()
  }
  function t(t, n, r) {
    var i = e(t, n, r)
    return r === L || r === R
      ? t.find(".js-tag-editor").filter(function() {
          return $(this).data("target-field") === i.get(0)
        })
      : i
  }
  function n(e, t, n, r) {
    var i = e.find(
        'input[type="submit"]:visible, button[type="submit"]:visible'
      ),
      o = i.length && i.is(":enabled")
    o && i.prop("disabled", !0),
      l(e, t, n),
      u(e, t, n, r),
      p(e, t, n),
      h(e, t, n),
      g(e, t, n),
      k(e, t, function() {
        d(e, t, n), o && i.prop("disabled", !1)
      })
  }
  function r(r, s, c, l, u) {
    n(r, s, c, l)
    var d,
      p = function(e) {
        if (
          (r.trigger("post:submit-completed", [
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
                window.location.protocol + "//" + window.location.hostname + n),
              (d = !0),
              (window.location = e.redirectTo),
              t.toLowerCase() === n.toLowerCase() && window.location.reload(!0)
          }
        else
          e.captchaHtml
            ? StackExchange.nocaptcha.init(e.captchaHtml, p)
            : e.errors
            ? (r.find(".js-post-prior-attempt-count").val(function(e, t) {
                return (+t + 1 || 0).toString()
              }),
              w(r, s, c, e.errors, e.warnings))
            : b(
                r,
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
    r.submit(function() {
      if (r.find(".js-post-answer-while-asking-checkbox").is(":checked"))
        return !0
      if (f(r, s, c)) return StackExchange.helpers.enableSubmitButton(r), !1
      if (
        (a(),
        StackExchange.navPrevention && StackExchange.navPrevention.stop(),
        r
          .find('input[type="submit"]:visible, button[type="submit"]')
          .addClass("is-loading"),
        StackExchange.helpers.disableSubmitButton(r),
        StackExchange.options.site.enableNewTagCreationWarning)
      ) {
        var n = e(r, s, L),
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
                          o(r, s, c, d, p),
                          e.preventDefault(),
                          !1
                        )
                      })
                    },
                    dismissing: function() {
                      i(r, d)
                    },
                    returnElements: t(r, s, L).find("input:visible"),
                  }
                  StackExchange.helpers.showModal(
                    $(e.html).elementNodesOnly(),
                    n
                  ),
                    StackExchange.helpers.bindMovablePopups()
                } else o(r, s, c, d, p)
              },
            }),
            !1
          )
      }
      return (
        setTimeout(function() {
          o(r, s, c, d, p)
        }, 0),
        !1
      )
    })
  }
  function i(e, t) {
    e
      .find('input[type="submit"]:visible, button[type="submit"]')
      .removeClass("is-loading"),
      t || StackExchange.helpers.enableSubmitButton(e)
  }
  function o(e, t, n, r, o) {
    $.ajax({
      type: "POST",
      dataType: "json",
      data: e.serialize(),
      url: e.attr("action"),
      success: o,
      error: function() {
        var r = v(n, 0)
        b(
          e,
          t,
          n,
          {
            General: [
              $("<span/>")
                .text(r)
                .html(),
            ],
          },
          0
        )
      },
      complete: function() {
        i(e, r)
      },
    })
  }
  function a() {
    for (var e = 0; e < V.length; e++) clearTimeout(V[e])
    V = []
  }
  function s(t, n, r, i, o) {
    e(t, n, i).blur(function() {
      var e = this,
        a = $(this),
        s = function(e) {
          C(t, n, r, i, e)
        },
        c = function(e) {
          return x(e, t, n, r, [i])
        }
      V.push(
        setTimeout(function() {
          var t = StackExchange.stacksValidation.handlerFor(a)
          t && !M && t.clear(), o.call(e, a, s, c)
        }, z)
      )
    })
  }
  function c(t, n, r, i, o) {
    if (1 === n)
      return x(
        {
          type: "POST",
          url: "/posts/validate-question",
          data: {
            title: e(t, n, O).val(),
            body: e(t, n, D).val(),
            tags: e(t, n, L).val(),
            fkey: StackExchange.options.user.fkey,
          },
        },
        t,
        n,
        r,
        [O, D, L],
        o
      ).promise()
    if (2 === n)
      return x(
        {
          type: "POST",
          url: "/posts/validate-body",
          data: {
            body: e(t, n, D).val(),
            oldBody: e(t, n, D).prop("defaultValue"),
            isQuestion: !1,
            isSuggestedEdit: i || !1,
            fkey: StackExchange.options.user.fkey,
          },
        },
        t,
        n,
        r,
        [D],
        o
      ).promise()
    var a = $.Deferred()
    return a.reject(), a.promise()
  }
  function l(e, t, n) {
    s(e, t, n, O, function(e, t, n) {
      var r = e.val(),
        i = $.trim(r).length,
        o = e.data("min-length"),
        a = e.data("max-length")
      return 0 !== i || M
        ? o && o > i
          ? (t(
              (function(e) {
                return 1 == e.minLength
                  ? "Title must be at least " + e.minLength + " character."
                  : "Title must be at least " + e.minLength + " characters."
              })({ minLength: o })
            ),
            void 0)
          : a && i > a
          ? (t(
              (function(e) {
                return 1 == e.maxLength
                  ? "Title cannot be longer than " + e.maxLength + " character."
                  : "Title cannot be longer than " +
                      e.maxLength +
                      " characters."
              })({ maxLength: a })
            ),
            void 0)
          : (n({
              type: "POST",
              url: "/posts/validate-title",
              data: { title: r, fkey: StackExchange.options.user.fkey },
            }),
            void 0)
        : (t(), void 0)
    })
  }
  function u(e, t, n, r) {
    s(e, t, n, D, function(e, n, i) {
      var o = e.val(),
        a = $.trim(o).length,
        s = e.data("min-length")
      return 0 !== a || M
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
              i({
                type: "POST",
                url: "/posts/validate-body",
                data: {
                  body: o,
                  oldBody: e.prop("defaultValue"),
                  isQuestion: 1 === t,
                  isSuggestedEdit: r,
                  fkey: StackExchange.options.user.fkey,
                },
              }),
            void 0)
        : (n(), void 0)
    })
  }
  function d(e, t, n) {
    s(e, t, n, L, function(e, t, n) {
      var r = e.val(),
        i = $.trim(r).length
      return 0 !== i || M
        ? (n({
            type: "POST",
            url: "/posts/validate-tags",
            data: {
              tags: r,
              oldTags: e.prop("defaultValue"),
              fkey: StackExchange.options.user.fkey,
            },
            success: function(t) {
              var n = e.closest(".js-post-form").find(".js-warned-tags-field")
              if (n.length) {
                var r = n.val(),
                  i = n.data("warned-tags") || [],
                  o = ((t.source || {}).Tags || []).filter(function(e) {
                    return e && -1 === i.indexOf(e)
                  })
                o.length > 0 &&
                  StackExchange.using("gps", function() {
                    o.forEach(function(e) {
                      StackExchange.gps.track(
                        "tag_warning.show",
                        { tag: e },
                        !0
                      ),
                        (r += " " + e),
                        i.push(e)
                    }),
                      n.val($.trim(r)).data("warned-tags", i),
                      StackExchange.gps.sendPending()
                  })
              }
            },
          }),
          void 0)
        : (t(), void 0)
    })
  }
  function f(t, n, r) {
    return "[Edit removed during grace period]" === $.trim(e(t, n, F).val())
      ? (C(
          t,
          n,
          r,
          F,
          "Comment reserved for system use. Please use an appropriate comment."
        ),
        !0)
      : !1
  }
  function p(e, t, n) {
    s(e, t, n, F, function(r, i) {
      var o = r.val(),
        a = $.trim(o).length,
        s = r.data("min-length"),
        c = r.data("max-length")
      return 0 === a
        ? (i(), void 0)
        : s && s > a
        ? (i(
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
        ? (i(
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
        : (f(e, t, n) || i(), void 0)
    })
  }
  function h(e, t, n) {
    s(e, t, n, q, function(e, t) {
      var n = e.val(),
        r = $.trim(n).length,
        i = e.data("min-length"),
        o = e.data("max-length")
      return 0 === r
        ? (t(), void 0)
        : i && i > r
        ? (t(
            (function(e) {
              return (
                "Wiki Excerpt must be at least " +
                e.minLength +
                " characters; you entered " +
                e.actual +
                "."
              )
            })({ minLength: i, actual: r })
          ),
          void 0)
        : o && r > o
        ? (t(
            (function(e) {
              return (
                "Wiki Excerpt cannot be longer than " +
                e.maxLength +
                " characters; you entered " +
                e.actual +
                "."
              )
            })({ maxLength: o, actual: r })
          ),
          void 0)
        : (t(), void 0)
    })
  }
  function g(e, t, n) {
    s(e, t, n, B, function(e, t) {
      var n = e.val(),
        r = $.trim(n),
        i = r.length
      return 0 === i
        ? (t(), void 0)
        : StackExchange.helpers.isEmailAddress(r)
        ? (t(), void 0)
        : (t("This email does not appear to be valid."), void 0)
    })
  }
  function m(e, t) {
    var n =
        $("#sidebar, .sidebar")
          .first()
          .width() || 270,
      r = "lg" === StackExchange.responsive.currentRange()
    return e === U
      ? {
          position: "inline",
          css: { display: "inline-block", "margin-bottom": "10px" },
          closeOthers: !1,
          dismissable: !1,
          type: t,
        }
      : {
          position: {
            my: r ? "left top" : "top center",
            at: r ? "right center" : "bottom center",
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
  function b(e, t, n, r, i) {
    var o = e
      .find(".js-general-error")
      .text("")
      .removeClass("d-none")
    if (!E(e, o, r, null, U, t, n))
      return i > 0 ? (o.text(v(n, i)), void 0) : (o.addClass("d-none"), void 0)
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
    var r
    e.find(".validation-error, .js-stacks-validation.has-error").each(
      function() {
        var e = $(this).offset().top
        ;(!r || r > e) && (r = e)
      }
    )
    var i = function() {
      for (var t = 0; 3 > t; t++)
        e.find(".message")
          .animate({ left: "+=5px" }, 100)
          .animate({ left: "-=5px" }, 100)
    }
    if (r) {
      var o = $(".review-bar").length
      ;(r = Math.max(0, r - (o ? 125 : 30))),
        $("html, body").animate({ scrollTop: r }, i)
    } else i()
  }
  function w(e, t, n, r, i) {
    r &&
      k(e, t, function() {
        var o = S(e, t, n, [O, D, L, R, F, q, B, N], r, i).length
        b(e, t, n, r, o), y(e)
      })
  }
  function k(e, n, r) {
    var i = function() {
      1 !== n || t(e, n, L).length ? r() : setTimeout(i, 250)
    }
    i()
  }
  function x(e, t, n, r, i, o) {
    return $.ajax(e)
      .then(function(e) {
        return o
          ? $.when(o()).then(function() {
              return e
            })
          : e
      })
      .done(function(e) {
        S(t, n, r, i, e.errors, e.warnings)
      })
      .fail(function() {
        S(t, n, r, i, {}, {})
      })
  }
  function S(e, n, r, i, o, a) {
    for (var s = [], c = 0; c < i.length; c++) {
      var l = i[c]
      E(e, t(e, n, l), o, a, l, n, r) && s.push(l)
    }
    return s
  }
  function C(e, n, r, i, o) {
    j(
      e,
      t(e, n, i),
      o
        ? [
            $("<span/>")
              .text(o)
              .html(),
          ]
        : [],
      [],
      i,
      n,
      r
    )
  }
  function E(e, t, n, r, i, o, a) {
    var s = n[i] || [],
      c = (r || {})[i] || []
    return j(e, t, s, c, i, o, a)
  }
  function j(e, t, n, r, i, o, a) {
    var s = StackExchange.stacksValidation.handlerFor(t)
    return (
      s ? _(s, o, a, n, r, i) : T(t, i, n),
      e.find(".validation-error, .js-stacks-validation.has-error").length ||
        e.find(".js-general-error").text(""),
      t.trigger("post:validated-field", [
        { errors: n, warnings: r, field: i, postTypeId: o, formType: a },
      ]),
      n.length > 0
    )
  }
  function _(e, t, n, r, i) {
    e.clear("error"),
      r.forEach(function(t) {
        e.add("error", t)
      }),
      "edit" === n ||
        ("question" === n && M) ||
        (e.clear("warning"),
        i.forEach(function(t) {
          e.add("warning", t)
        }))
  }
  function T(e, t, n) {
    e &&
      e.length &&
      (0 === n.length ||
      (1 === n.length && "" === n[0]) ||
      !$("html").has(e).length
        ? I(e)
        : A(e, n, m(t, "error")))
  }
  function A(e, t, n) {
    var r =
        1 === t.length ? t[0] : "<ul><li>" + t.join("</li><li>") + "</li></ul>",
      i = e.data("error-popup")
    if (i && i.is(":visible")) {
      var o = e.data("error-message")
      if (o === r) return i.animateOffsetTop && i.animateOffsetTop(0), void 0
      i.fadeOutAndRemove()
    }
    var s = StackExchange.helpers.showMessage(e, r, n)
    s.find("a").attr("target", "_blank"),
      s.click(a),
      e
        .addClass("validation-error")
        .data("error-popup", s)
        .data("error-message", r)
  }
  function I(e) {
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
  var M = $("body").hasClass("js-ask-page-v2"),
    O = "Title",
    D = "Body",
    L = "Tags",
    R = "Mentions",
    F = "EditComment",
    q = "Excerpt",
    B = "Email",
    U = "General",
    N = "ArticleType",
    V = [],
    z = 250
  return {
    initOnBlur: n,
    initOnBlurAndSubmit: r,
    showErrorsAfterSubmission: w,
    validatePostFields: c,
    scrollToErrors: y,
  }
})()
