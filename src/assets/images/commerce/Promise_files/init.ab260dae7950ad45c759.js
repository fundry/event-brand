var init = (function(e) {
  var t = {}
  function n(o) {
    if (t[o]) return t[o].exports
    var s = (t[o] = {
      i: o,
      l: !1,
      exports: {},
    })
    return e[o].call(s.exports, s, s.exports, n), (s.l = !0), s.exports
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, o) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: o,
        })
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        })
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && "object" == typeof e && e && e.__esModule) return e
      var o = Object.create(null)
      if (
        (n.r(o),
        Object.defineProperty(o, "default", {
          enumerable: !0,
          value: e,
        }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          n.d(
            o,
            s,
            function(t) {
              return e[t]
            }.bind(null, s)
          )
      return o
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return n.d(t, "a", t), t
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = "/pack/"),
    n((n.s = 274))
  )
})({
  143: function(e, t) {
    e.exports = class {
      constructor(e = {}) {
        ;(this.options = e),
          this.render(),
          this.setHasClose(void 0 === e.hasClose || e.hasClose),
          (this.onClick = this.onClick.bind(this)),
          (this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this)),
          this.elem.addEventListener("click", this.onClick),
          document.addEventListener("keydown", this.onDocumentKeyDown)
      }
      setHasClose(e) {
        ;(this._hasClose = e),
          this._hasClose
            ? this.elem.classList.add("modal__has-close")
            : this.elem.classList.remove("modal__has-close")
      }
      render() {
        document.body.insertAdjacentHTML(
          "beforeEnd",
          '<div class="modal"><div class="modal__dialog"><button class="close-button modal__close"></button><div class="modal__content"></div></div></div>'
        ),
          document.body.classList.add("paranja-open"),
          (this.elem = document.body.lastChild),
          (this.contentElem = this.elem.querySelector(".modal__content"))
      }
      onClick(e) {
        e.target.classList.contains("modal__close") &&
          (this.remove(), e.preventDefault())
      }
      onDocumentKeyDown(e) {
        27 === e.keyCode && (e.preventDefault(), this.remove())
      }
      showOverlay() {
        this.contentElem.classList.add("modal-overlay_light")
      }
      hideOverlay() {
        this.contentElem.classList.remove("modal-overlay_light")
      }
      setContent(e) {
        "string" == typeof e
          ? (this.contentElem.innerHTML = e)
          : ((this.contentElem.innerHTML = ""), this.contentElem.appendChild(e))
        let t = this.contentElem.querySelector(
          "[data-modal-autofocus],[autofocus]"
        )
        t && t.focus()
      }
      remove() {
        document.body.classList.remove("paranja-open"),
          document.body.removeChild(this.elem),
          document.removeEventListener("keydown", this.onDocumentKeyDown),
          this.elem.dispatchEvent(new CustomEvent("modal-remove"))
      }
    }
  },
  209: function(e, t) {
    window.initSponsorBar = function() {
      let e = document.getElementById("sponsorBar")
      if (
        !document.querySelector(".page").classList.contains("page_sidebar_on")
      )
        return
      let t = !0,
        n = e
      for (; (n = n.parentElement); )
        if ("none" == getComputedStyle(n).display) {
          t = !1
          break
        }
      if (0 == t) return
      let o = document.createElement("script")
      ;(o.src =
        "https://cdn.carbonads.com/carbon.js?serve=CE7D42QJ&placement=javascriptinfo"),
        (o.id = "_carbonads_js"),
        e.append(o)
    }
  },
  274: function(e, t, n) {
    n(275),
      (window.acceptGdpr = n(276)),
      (window.Modal = n(143)),
      n(277),
      (window.fontTest = n(278)),
      (window.showTopNotification = n(279)),
      n(209)
  },
  275: function(e, t) {
    try {
      ;(window.localStorage._test = 1), delete window.localStorage._test
    } catch (e) {
      try {
        window.localStorage = {}
      } catch (e) {}
    }
  },
  276: function(e, t, n) {
    let o = n(143)
    e.exports = function(e) {
      function t(n) {
        t.triggered || ((t.triggered = !0), e(n))
      }
      if (localStorage.gdprAccepted) return t(!0)
      let n = new o()
      n.setContent(
        '<div class="gdpr">\n    <h1 class="gdpr__title">'
          .concat(
            "This website uses cookies",
            '</h1>\n    <form class="gdpr__form">\n      <p class="gdpr__text">'
          )
          .concat(
            'We use browser technologies such as cookies and local storage to store your preferences. You need to accept our <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Use</a> for us to do so.',
            '</p>\n      \n      <input class="button button_action" autofocus name="accept" type="submit" value="'
          )
          .concat(
            "Accept",
            '">\n      <input class="button button_cancel" name="cancel" type="button" value="'
          )
          .concat("Cancel", '">\n      \n    </form>\n    </div>\n  ')
      ),
        n.elem.querySelector("form").addEventListener("submit", e => {
          e.preventDefault(), (localStorage.gdprAccepted = 1), n.remove(), t(!0)
        }),
        n.elem
          .querySelector("form")
          .elements.cancel.addEventListener("click", e => {
            e.preventDefault(), n.remove(), t(!1)
          }),
        n.elem.addEventListener("modal-remove", function() {
          setTimeout(() => t(!1), 10)
        })
    }
  },
  277: function(e, t) {
    document.addEventListener("click", function(e) {
      let t = e.target
      for (; t; ) {
        if (!t.className.match) return
        if (t.className.match(/_unready\b/)) return void e.preventDefault()
        t = t.parentElement
      }
    }),
      document.addEventListener("submit", function(e) {
        e.target.className.match &&
          e.target.className.match(/_unready\b/) &&
          e.preventDefault()
      })
  },
  278: function(e, t) {
    e.exports = function() {
      let e = document.createElement("span")
      document.body.appendChild(e),
        (e.className = "font-test"),
        (e.style.fontFamily = "serif")
      let t = e.offsetWidth
      ;(e.style.fontFamily = ""),
        (function n() {
          t != e.offsetWidth
            ? document.body.classList.remove("no-icons")
            : setTimeout(n, 100)
        })()
    }
  },
  279: function(e, t) {
    e.exports = function() {
      let e,
        t = document.querySelector(".notification_top"),
        n = t.id
      if (!n) throw new Error("Top notification must have an id")
      try {
        e = JSON.parse(localStorage.topNotificationsHidden)
      } catch (t) {
        e = []
      }
      e.includes(n) ||
        ((t.querySelector("button").onclick = () => {
          e.push(n),
            (localStorage.topNotificationsHidden = JSON.stringify(e)),
            (t.style.display = "none"),
            window.dispatchEvent(new CustomEvent("resize-internal"))
        }),
        (t.style.display = ""))
    }
  },
})
