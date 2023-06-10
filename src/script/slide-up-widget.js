/* eslint-disable */
(() => {
  var e = {
      424: (e, t, n) => {
        n.r(t), n.d(t, { default: () => o });
        var i = n(645),
          r = n.n(i)()(!1);
        r.push([
          e.id,
          ".slide-up-widget {\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 1px;\r\n    right: 1px;\r\n    height: 99%;\r\n    max-width: 100vw;\r\n    background: #fff;\r\n    z-index: 999999999;\r\n    color: #000;\r\n    padding: 20px 15px;\r\n    font-weight: 700;\r\n    border-radius: 25px 25px 0 0;\r\n    -webkit-box-shadow: 0 0 10px -5px #000;\r\n    box-shadow: 0 0 10px -5px #000;\r\n    font-size: 13px;\r\n    font-family: \"Helvetica Neue\", Helvetica, sans-serif;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box\r\n}\r\n\r\n.slide-up-widget__header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    font-weight: 400;\r\n    margin-bottom: 7px\r\n}\r\n\r\n.slide-up-widget__title {\r\n    text-decoration: none;\r\n    margin: 20px 10px 10px;\r\n    font-size: 13px\r\n}\r\n\r\n.slide-up-widget__header-close-btn {\r\n    width: 25px;\r\n    height: 25px;\r\n    background: #e4e4e4;\r\n    position: absolute;\r\n    right: 20px;\r\n    content: '1';\r\n    border-radius: 50%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    line-height: 1;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n    color: rgba(72, 72, 72, .6);\r\n    font-family: serif\r\n}\r\n\r\n.slide-up-widget__header-image {\r\n    max-width: 100px;\r\n    margin-bottom: 5px;\r\n    border-radius: 10px\r\n}\r\n\r\n.slide-up-widget__header-text {\r\n    max-width: 240px;\r\n    text-align: center;\r\n    line-height: 16px\r\n}\r\n\r\n.slide-up-widget__bank {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    background: red;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    background: #f4f4f4;\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n    margin-bottom: 10px;\r\n    min-height: 60px;\r\n    color: #000\r\n}\r\n\r\n.slide-up-widget__bank--hide,\r\n.slide-up-widget__title--hide {\r\n    display: none\r\n}\r\n\r\n.slide-up-widget__bank-logo {\r\n    margin-right: 10px;\r\n    max-width: 50px;\r\n    border-radius: 10px\r\n}\r\n\r\n.slide-up-widget__input {\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin-bottom: 10px;\r\n    background-color: #f4f4f4;\r\n    padding: 15px 8px;\r\n    outline: 0;\r\n    border: none;\r\n    border-radius: 8px\r\n}\r\n\r\n.slide-up-widget__empty {\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    padding: 0 10px\r\n}",
          "",
        ]);
        const o = r;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = (function (e, t) {
                  var n,
                    i,
                    r,
                    o = e[1] || "",
                    a = e[3];
                  if (!a) return o;
                  if (t && "function" == typeof btoa) {
                    var s =
                        ((n = a),
                        (i = btoa(
                          unescape(encodeURIComponent(JSON.stringify(n)))
                        )),
                        (r =
                          "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                            i
                          )),
                        "/*# ".concat(r, " */")),
                      d = a.sources.map(function (e) {
                        return "/*# sourceURL="
                          .concat(a.sourceRoot || "")
                          .concat(e, " */");
                      });
                    return [o].concat(d).concat([s]).join("\n");
                  }
                  return [o].join("\n");
                })(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, i) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var r = {};
              if (i)
                for (var o = 0; o < this.length; o++) {
                  var a = this[o][0];
                  null != a && (r[a] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var d = [].concat(e[s]);
                (i && r[d[0]]) ||
                  (n &&
                    (d[2]
                      ? (d[2] = "".concat(n, " and ").concat(d[2]))
                      : (d[2] = n)),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      548: (e, t, n) => {
        var i = n(379),
          r = n(424);
        "string" == typeof (r = r.__esModule ? r.default : r) &&
          (r = [[e.id, r, ""]]);
        i(r, { insert: "head", singleton: !1 }), (e.exports = r.locals || {});
      },
      379: (e, t, n) => {
        var i,
          r = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          o = [];
        function a(e) {
          for (var t = -1, n = 0; n < o.length; n++)
            if (o[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function s(e, t) {
          for (var n = {}, i = [], r = 0; r < e.length; r++) {
            var s = e[r],
              d = t.base ? s[0] + t.base : s[0],
              c = n[d] || 0,
              l = "".concat(d, " ").concat(c);
            n[d] = c + 1;
            var u = a(l),
              p = { css: s[1], media: s[2], sourceMap: s[3] };
            -1 !== u
              ? (o[u].references++, o[u].updater(p))
              : o.push({ identifier: l, updater: h(p, t), references: 1 }),
              i.push(l);
          }
          return i;
        }
        function d(e) {
          var t = document.createElement("style"),
            i = e.attributes || {};
          if (void 0 === i.nonce) {
            var o = n.nc;
            o && (i.nonce = o);
          }
          if (
            (Object.keys(i).forEach(function (e) {
              t.setAttribute(e, i[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var a = r(e.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(t);
          }
          return t;
        }
        var c,
          l =
            ((c = []),
            function (e, t) {
              return (c[e] = t), c.filter(Boolean).join("\n");
            });
        function u(e, t, n, i) {
          var r = n
            ? ""
            : i.media
            ? "@media ".concat(i.media, " {").concat(i.css, "}")
            : i.css;
          if (e.styleSheet) e.styleSheet.cssText = l(t, r);
          else {
            var o = document.createTextNode(r),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]),
              a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
          }
        }
        function p(e, t, n) {
          var i = n.css,
            r = n.media,
            o = n.sourceMap;
          if (
            (r ? e.setAttribute("media", r) : e.removeAttribute("media"),
            o &&
              "undefined" != typeof btoa &&
              (i +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                  " */"
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = i;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(i));
          }
        }
        var m = null,
          g = 0;
        function h(e, t) {
          var n, i, r;
          if (t.singleton) {
            var o = g++;
            (n = m || (m = d(t))),
              (i = u.bind(null, n, o, !1)),
              (r = u.bind(null, n, o, !0));
          } else
            (n = d(t)),
              (i = p.bind(null, n, t)),
              (r = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            i(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                i((e = t));
              } else r();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === i &&
                (i = Boolean(
                  window && document && document.all && !window.atob
                )),
              i));
          var n = s((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var i = 0; i < n.length; i++) {
                var r = a(n[i]);
                o[r].references--;
              }
              for (var d = s(e, t), c = 0; c < n.length; c++) {
                var l = a(n[c]);
                0 === o[l].references && (o[l].updater(), o.splice(l, 1));
              }
              n = d;
            }
          };
        };
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = (t[i] = { id: i, exports: {} });
    return e[i](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nc = void 0),
    (() => {
      n(548);
      class e {
        static get ENTER_BANK_NAME() {
          return "Введите название банка";
        }
        static get PAYMENT_TITLE() {
          return "Выберите банк для подтверждения оплаты";
        }
        static get SUBSCRIPTION_TITLE() {
          return "Выберите банк для привязки счёта";
        }
        static get NO_MATCHING_ITEMS() {
          return "По Вашему запросу результатов не найдено";
        }
      }
      class t {
        constructor(e) {
          this.browser = e;
        }
        getOS() {
          const e = this.browser.userAgent,
            t = this.browser.platform;
          let n = "Other";
          return (
            this.isMobile() &&
              (-1 !==
                [
                  "iPad Simulator",
                  "iPhone Simulator",
                  "iPod Simulator",
                  "iPad",
                  "iPhone",
                  "iPod",
                  "MacIntel",
                ].indexOf(t) || /iPhone/.test(e)
                ? (n = "iOS")
                : /Android/.test(e) && (n = "Android")),
            n
          );
        }
        isMobile() {
          return (
            new RegExp(
              /webOS|(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i
            ).test(this.browser.userAgent) ||
            new RegExp(
              "/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i"
            ).test(this.browser.userAgent.substring(0, 4))
          );
        }
      }
      function i(e) {
        if (!/https:\/\/(qr|sub).nspk.ru\/\w{0,32}(\?)?/.test(e))
          throw new Error("invalidURLString");
        return -1 === e.indexOf("sub.nspk.ru") ? "qr" : "sub";
      }
      function r(e, t, n) {
        let i = t.replace("https://", `${e.schema}://`);
        const r =
          e.isWebClientActive &&
          (!0 === e.isWebClientActive || "true" === e.isWebClientActive);
        if ("iOS" === n && r) {
          const n = t.split("/").pop().split("?")[0];
          i = `${e.webClientUrl}/${n}`;
        }
        return i;
      }
      var o = function (e, t, n, i) {
        return new (n || (n = Promise))(function (r, o) {
          function a(e) {
            try {
              d(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              d(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function d(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          d((i = i.apply(e, t || [])).next());
        });
      };
      const a = "slideUpWidget.v1";
      window.SlideUpWidget = class {
        constructor(e, n) {
          (this.localStorage = e),
            (this.platform = new t(
              n || { userAgent: "", platform: "" }
            ).getOS());
        }
        saveInLocalStorage(e) {
          this.localStorage.setItem(a, JSON.stringify(e));
        }
        loadFromLocalStorage() {
          return this.localStorage.getItem(a);
        }
        loadBankDictionary(e) {
          return o(this, void 0, void 0, function* () {
            try {
              return (yield fetch(e)).json();
            } catch (e) {
              throw new Error("banksCacheIsEmpty");
            }
          });
        }
        getBankList(e) {
          return o(this, void 0, void 0, function* () {
            try {
              const t = `https://${i(e)}.nspk.ru/proxyapp/c2bmembers.json`;
              return (yield this.loadBankDictionary(t)).dictionary.map((t) => ({
                bankName: t.bankName,
                logoURL: t.logoURL,
                dboLink: r(t, e, this.platform),
              }));
            } catch (e) {
              console.error(e);
            }
          });
        }
        showBankSelector(t) {
          return o(this, void 0, void 0, function* () {
            this.closeWidget();
            const n = document.head,
              r = document.createElement("meta");
            r.setAttribute("id", "widget-nspk"),
              r.setAttribute("name", "viewport"),
              r.setAttribute(
                "content",
                "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
              ),
              n.appendChild(r);
            const o = yield this.getBankList(t),
              a = document.createElement("div");
            a.className = "slide-up-widget";
            const s = document.createElement("div"),
              d = document.createElement("img"),
              c = document.createElement("div"),
              l = document.createElement("div");
            (c.innerText =
              "sub" === i(t) ? e.SUBSCRIPTION_TITLE : e.PAYMENT_TITLE),
              (l.innerText = "×"),
              (d.src = "https://sbp.nspk.ru/i/logo-black.svg"),
              (s.className = "slide-up-widget__header"),
              (d.className = "slide-up-widget__header-image"),
              (c.className = "slide-up-widget__header-text"),
              (l.className = "slide-up-widget__header-close-btn"),
              l.addEventListener("click", () => {
                this.closeWidget();
              }),
              s.appendChild(d),
              s.appendChild(l),
              s.appendChild(c),
              a.appendChild(s);
            const u = document.createElement("input");
            u.setAttribute("placeholder", e.ENTER_BANK_NAME),
              (u.className = "slide-up-widget__input"),
              u.addEventListener("input", (t) => {
                const n = t.target.value;
                if (n && n.length > 1) {
                  document
                    .querySelectorAll(".slide-up-widget__bank-title")
                    .forEach((e) => {
                      const t = e.closest(".slide-up-widget__bank"),
                        i = t.className;
                      -1 ===
                        e.innerText.toLowerCase().indexOf(n.toLowerCase()) ||
                      -1 !== t.className.indexOf("used")
                        ? -1 === i.indexOf("hide") &&
                          (t.className = i + " slide-up-widget__bank--hide")
                        : t.classList.remove("slide-up-widget__bank--hide");
                    });
                  const e = document.querySelector(
                    ".slide-up-widget__title--used"
                  );
                  e &&
                    -1 === e.className.indexOf("hide") &&
                    (e.className =
                      e.className + " slide-up-widget__title--hide");
                } else {
                  document
                    .querySelectorAll(".slide-up-widget__bank--hide")
                    .forEach((e) => {
                      e.classList.remove("slide-up-widget__bank--hide");
                    });
                  const e = document.querySelector(
                    ".slide-up-widget__title--used"
                  );
                  e && e.classList.remove("slide-up-widget__title--hide");
                }
                if (
                  document.querySelectorAll(
                    ".slide-up-widget__bank--hide:not(.slide-up-widget__bank--used)"
                  ).length >= o.length
                ) {
                  if (!document.querySelector(".slide-up-widget__empty")) {
                    const t = document.createElement("div");
                    (t.innerText = e.NO_MATCHING_ITEMS),
                      (t.className = "slide-up-widget__empty"),
                      a.appendChild(t);
                  }
                } else
                  document.querySelector(".slide-up-widget__empty") &&
                    document.querySelector(".slide-up-widget__empty").remove();
              }),
              a.appendChild(u);
            const p = this.loadFromLocalStorage();
            let m = o;
            if (p) {
              const e = JSON.parse(p),
                t = [];
              e.forEach((e) => {
                const n = m.find((t) => t.bankName === e);
                n && t.push(n);
              }),
                (m = [
                  ...t,
                  ...o.filter((t) => e.every((e) => t.bankName !== e)),
                ]);
            }
            m.forEach((e) => {
              const t = document.createElement("a"),
                n = document.createElement("img"),
                i = document.createElement("div"),
                r = e.dboLink;
              (t.className = "slide-up-widget__bank"),
                (n.className = "slide-up-widget__bank-logo"),
                (i.className = "slide-up-widget__bank-title"),
                t.setAttribute("href", r),
                (n.src = e.logoURL),
                (i.innerText = e.bankName),
                t.appendChild(n),
                t.appendChild(i),
                a.appendChild(t);
            }),
              a.addEventListener("click", (e) => {
                console.log(e);
                const t = e.target.closest(".slide-up-widget__bank");
                if (t) {
                  const e = t.querySelector(
                      ".slide-up-widget__bank-title"
                    ).innerText,
                    n = JSON.parse(this.loadFromLocalStorage());
                  if (!n || n.some((t) => t === e))
                    if ((null == n ? void 0 : n.length) > 0) {
                      const t = n.splice(n.indexOf(e), 1);
                      this.saveInLocalStorage([...t, ...n]);
                    } else this.saveInLocalStorage([e]);
                  else
                    (null == n ? void 0 : n.length) > 2 && n.pop(),
                      this.saveInLocalStorage([e, ...n]);
                }
              }),
              document.body.appendChild(a);
          });
        }
        closeWidget() {
          const e = document.head.querySelector("#widget-nspk");
          e && e.remove();
          const t = document.querySelector(".slide-up-widget");
          t && t.parentNode.removeChild(t);
        }
      };
    })();
})();
/* eslint-enable */
