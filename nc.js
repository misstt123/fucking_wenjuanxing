!function () {
    function cond() {
        return Math.random()
    }

    function chkQuerySet() {
        var e, t = window[QUERY_KEY];
        return isNaN(t) ? (e = location.href.split(QUERY_KEY + "=")[1], t = parseFloat(e), void (isNaN(t) || (GREY_RATIO = t))) : void (GREY_RATIO = t)
    }

    var GREY_RATIO = 1, QUERY_KEY = "aq-nc-grey-ratio", STABLE_ACTION = function () {
    }, NEW_ACTION = function () {
        !function (e) {
            function t(o) {
                if (n[o]) return n[o].exports;
                var i = n[o] = {i: o, l: !1, exports: {}};
                return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
            }

            var n = {};
            return t.m = e, t.c = n, t.i = function (e) {
                return e
            }, t.d = function (e, n, o) {
                t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: o})
            }, t.n = function (e) {
                var n = e && e.__esModule ? function () {
                    return e["default"]
                } : function () {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 106)
        }([, function (e, t, n) {
            "use strict";

            function o(e) {
                return this instanceof o ? (this._state = l, this._onFulfilled = [], this._onRejected = [], this._value = null, this._reason = null, void (p(e) && e(a(this.resolve, this), a(this.reject, this)))) : new o(e)
            }

            function i(e, t, n) {
                return function (o) {
                    if (p(t)) try {
                        var i = t(o);
                        r(i) ? i.then(function (t) {
                            e.resolve(t)
                        }, function (t) {
                            e.reject(t)
                        }) : e.resolve(i)
                    } catch (a) {
                        e.reject(a)
                    } else e[n](o)
                }
            }

            function r(e) {
                return e && p(e.then)
            }

            function a(e, t) {
                var n = [].slice, o = n.call(arguments, 2), i = function () {
                }, r = function () {
                    return e.apply(this instanceof i ? this : t, o.concat(n.call(arguments)))
                };
                return i.prototype = e.prototype, r.prototype = new i, r
            }

            function c(e) {
                return function (t) {
                    return {}.toString.call(t) == "[object " + e + "]"
                }
            }

            function s(e, t) {
                for (var n = 0, o = e.length; n < o; n++) t(e[n], n)
            }

            var l = 0, d = 1, u = 2;
            o.prototype = {
                constructor: o, then: function (e, t) {
                    var n = new o, r = i(n, e, "resolve"), a = i(n, t, "reject");
                    return this._state === d ? r(this._value) : this._state === u ? a(this._reason) : (this._onFulfilled.push(r), this._onRejected.push(a)), n
                }, resolve: function (e) {
                    this._state === l && (this._state = d, this._value = e, s(this._onFulfilled, function (t) {
                        t(e)
                    }), this._onFulfilled = [])
                }, reject: function (e) {
                    this._state === l && (this._state = u, this._reason = e, s(this._onRejected, function (t) {
                        t(e)
                    }), this._onRejected = [])
                }, "catch": function (e) {
                    return this.then(null, e)
                }, always: function (e) {
                    return this.then(e, e)
                }
            }, o.defer = function () {
                var e = {};
                return e.promise = new o(function (t, n) {
                    e.resolve = t, e.reject = n
                }), e
            }, o.race = function (e) {
                var t = o.defer();
                return e.length, s(e, function (e) {
                    e.then(function (e) {
                        t.resolve(e)
                    }, function (e) {
                        t.reject(e)
                    })
                }), t.promise
            }, o.all = function (e) {
                var t = o.defer(), n = e.length, i = [];
                return s(e, function (e, o) {
                    e.then(function (e) {
                        i[o] = e, n--, 0 === n && t.resolve(i)
                    }, function (e) {
                        t.reject(e)
                    })
                }), t.promise
            }, o.resolve = function (e) {
                return new o(function (t) {
                    t(e)
                })
            }, o.reject = function (e) {
                return new o(function (t, n) {
                    n(e)
                })
            };
            var p = c("Function");
            e.exports = o
        }, function (e, t, n) {
            "use strict";

            function o(e, t, n) {
                if (e) {
                    var o = 0, i = e.length;
                    if (i === +i) for (; o < i && t.call(n, e[o], o, e) !== !1; o++) ; else for (o in e) if (e.hasOwnProperty(o) && t.call(n, e[o], o, e) === !1) break
                }
            }

            function i(e, t) {
                if (!t) return !1;
                if (e.classList) {
                    for (var n = t.split(/\s+/), o = 0; o < n.length; o++) if (!e.classList.contains(n[o])) return !1;
                    return !0
                }
                return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className)
            }

            function r(e, t) {
                t && !i(e, t) && (e.classList ? e.classList.add.apply(e.classList, t.split(/\s+/)) : e.className += " " + t)
            }

            function a(e, t) {
                t && i(e, t) && (e.classList ? e.classList.remove.apply(e.classList, t.split(/\s+/)) : e.className = e.className.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, ""))
            }

            function c(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return t.join("&")
            }

            function s(e) {
                for (var t = e.offsetLeft, n = e.offsetParent; null !== n;) t += n.offsetLeft, n = n.offsetParent;
                return t
            }

            function l(e) {
                for (var t = e.offsetTop, n = e.offsetParent; null !== n;) t += n.offsetTop, n = n.offsetParent;
                return t
            }

            var d = window, u = document, p = n(1), _ = t.rndId = function (e) {
                return ((e || "") + Math.random()).replace(".", "")
            };
            t.each = o, t.hasClass = i, t.addClass = r, t.removeClass = a, t.toggleClass = function (e, t) {
                i(e, t) ? a(e, t) : r(e, t)
            }, t.getElementsByClassName = function (e, t, n) {
                if (t = t || u, n = n || "*", u.getElementsByClassName) return t.getElementsByClassName(e);
                for (var o = [], r = "*" === n && t.all ? t.all : t.getElementsByTagName(n), a = r.length; --a >= 0;) i(r[a], e) && o.push(r[a]);
                return o
            }, t.setCookie = function (e, t, n) {
                n = n || 7;
                var o = new Date;
                o.setTime(o.getTime() + 864e5 * n), document.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + t), ";expires=", o.toGMTString()].join("")
            }, t.send = function (e) {
                var t = _("_nc_r_"), n = d[t] = new Image;
                n.onload = n.onerror = function () {
                    d[t] = null
                }, n.src = e
            }, t.obj2param = c, t.addHourStamp = function (e, t) {
                var n = Math.floor((new Date).getTime() / (36e5 * (t || 2))), o = e.indexOf("?") === -1 ? "?" : "&";
                return e + o + "_t=" + n
            };
            var f = {};
            t.isIEX = function (e) {
                if (e in f) return f[e];
                var t = u.createElement("b");
                return t.innerHTML = "<!--[if IE " + e + "]><i></i><![endif]-->", f[e] = 1 === t.getElementsByTagName("i").length
            };
            var s = t.getElementLeft = function (e) {
                for (var t = e.offsetLeft, n = e.offsetParent; null !== n;) t += n.offsetLeft, n = n.offsetParent;
                return t
            }, l = t.getElementTop = function (e) {
                for (var t = e.offsetTop, n = e.offsetParent; null !== n;) t += n.offsetTop, n = n.offsetParent;
                return t
            };
            t.getClientRect = function (e) {
                var t = u.documentElement.scrollTop;
                if (u.documentElement.scrollLeft, e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect();
                    return {left: n.left, right: n.right, top: n.top - t, bottom: n.bottom - t}
                }
                var o = s(e), i = l(e);
                return {left: o, right: o + e.offsetWidth, top: i, bottom: i + e.offsetHeight}
            }, t.getOffset = function (e) {
                var t = e.target;
                void 0 === t.offsetLeft && (t = t.parentNode);
                var n = g(t), o = {x: d.pageXOffset + e.clientX, y: d.pageYOffset + e.clientY};
                return {offsetX: o.x - n.x, offsetY: o.y - n.y}
            };
            var g = t.getPageCoord = function (e) {
                for (var t = {x: 0, y: 0}; e;) t.x += e.offsetLeft, t.y += e.offsetTop, e = e.offsetParent;
                return t
            }, h = {
                before: function (e, t) {
                    return function () {
                        return e.call(this), t.apply(this, arguments)
                    }
                }, after: function (e, t) {
                    return function () {
                        var n = e.apply(this, arguments);
                        return t.call(this, n, arguments), n
                    }
                }
            };
            t.decorator = h, t.mix = function (e) {
                for (var t, n, o = [].slice.call(arguments), i = o.length, r = 1; r < i; r++) {
                    t = o[r];
                    for (n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }
                return e
            }, t.clone = function (e) {
                var t = {};
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }, t.addHandler = function (e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            }, t.removeHandler = function (e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }, t.getEvent = function (e) {
                return e ? e : d.event
            }, t.getTarget = function (e) {
                return e.target || e.srcElement
            }, t.bind = function (e, t) {
                var n = [].slice, o = n.call(arguments, 2), i = function () {
                }, r = function () {
                    return e.apply(this instanceof i ? this : t, o.concat(n.call(arguments)))
                };
                return i.prototype = e.prototype, r.prototype = new i, r
            }, t.imageLoaded = function (e) {
                var t = p.defer(), n = new Image;
                return n.onload = function () {
                    t.resolve(this)
                }, n.onerror = function (e) {
                    t.reject({type: "img", error: e})
                }, setTimeout(function () {
                    t.reject({type: "img", error: "timeout"})
                }, 5e3), n.src = e, t.promise
            }, t.request = function (e) {
                var t = p.defer(), n = e.data || {}, o = ("jsonp_" + Math.random()).replace(".", "");
                d[o] = function (e) {
                    t.resolve(e)
                }, n[e.callback || "callback"] = o, t.promise.always(function () {
                    try {
                        delete d[o]
                    } catch (e) {
                        d[o] = null
                    }
                });
                var i = u.createElement("script");
                i.src = e.url + (e.url.indexOf("?") === -1 ? "?" : "&") + c(n);
                var r = u.getElementsByTagName("script")[0];
                return r.parentNode.insertBefore(i, r), setTimeout(function () {
                    t.reject({type: "request", error: "timeout"})
                }, 5e3), t.promise
            }, t.getElementLeft = s, t.getElementTop = l
        }, function (e, t, n) {
            "use strict";
            var o = n(2),
                i = {log: "https://log.mmstat.com/", gm: "https://gm.mmstat.com/", gj: "https://gj.mmstat.com/"};
            t.mmstat_base = i;
            var r = o.isIEX(8), a = o.isIEX(7), c = o.isIEX(6), s = !!(c || a || r),
                l = document.getElementsByTagName("script"), d = "";
            if (null != l && l.length >= 1) for (var u = l.length - 1; u >= 0; u--) if (l[u].src.indexOf("ncpc/nc.js") != -1) {
                d = l[u].src;
                break
            }
            var p = "";
            p = d.indexOf("g.alicdn.com") != -1 ? "https://g.alicdn.com/AWSC/AWSC/awsc.js" : "https://aeis.alicdn.com/AWSC/AWSC/awsc.js";
            var _ = {
                0: {
                    analyze: s ? "https://cf2.aliyun.com/nocaptcha/analyze.jsonp" : "https://cf.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "https://cf.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "https://diablo.alibaba.com/captcha/click/get.jsonp",
                    get_captcha_pre: "https://diablo.alibaba.com/captcha/click/pre_get.jsonp",
                    get_img: "https://diablo.alibaba.com/captcha/image/get.jsonp",
                    get_img_pre: "https://diablo.alibaba.com/captcha/image/pre_get.jsonp",
                    checkcode: s ? "https://cf2.aliyun.com/captcha/checkcode.jsonp" : "https://cf.aliyun.com/captcha/checkcode.jsonp",
                    cc: "https://diablo.alibaba.com/diablo/captcha_api/get.jsonp",
                    cc_pre: "https://diablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
                    awsc_Url: p,
                    umid_serUrl: "https://ynuf.aliapp.org/service/um.json",
                    api_prepare: "https://cf.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "https://cf.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "https://cf.aliyun.com/scratchCardSlide/analyze.jsonp"
                },
                1: {
                    analyze: "https://cfus.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "https://cfus.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "https://usdiablo.alibaba.com/captcha/click/get.jsonp",
                    get_captcha_pre: "https://usdiablo.alibaba.com/captcha/click/pre_get.jsonp",
                    get_img: "https://usdiablo.alibaba.com/captcha/image/get.jsonp",
                    get_img_pre: "https://usdiablo.alibaba.com/captcha/image/pre_get.jsonp",
                    checkcode: "https://cfus.aliyun.com/captcha/checkcode.jsonp",
                    cc: "https://usdiablo.alibaba.com/diablo/captcha_api/get.jsonp",
                    cc_pre: "https://usdiablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
                    awsc_Url: p,
                    umid_serUrl: "https://us.ynuf.aliapp.org/service/um.json",
                    api_prepare: "https://cfus.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "https://cfus.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "https://cfus.aliyun.com/scratchCardSlide/analyze.jsonp"
                },
                2: {
                    analyze: "https://cfun.aliyun.com/nocaptcha/analyze.jsonp",
                    initialize: "https://cfun.aliyun.com/nocaptcha/initialize.jsonp",
                    get_captcha: "https://diablo.alibaba.com/captcha/click/get.jsonp",
                    get_captcha_pre: "https://diablo.alibaba.com/captcha/click/pre_get.jsonp",
                    get_img: "https://diablo.alibaba.com/captcha/image/get.jsonp",
                    get_img_pre: "https://diablo.alibaba.com/captcha/image/pre_get.jsonp",
                    checkcode: "https://cfun.aliyun.com/captcha/checkcode.jsonp",
                    cc: "https://diablo.alibaba.com/diablo/captcha_api/get.jsonp",
                    cc_pre: "https://diablo.alibaba.com/diablo/captcha_api/pre_get.jsonp",
                    awsc_Url: p,
                    umid_serUrl: "https://ynuf.aliapp.org/service/um.json",
                    api_prepare: "https://cfun.aliyun.com/scratchCardSlide/prepare.jsonp",
                    api_report: "https://cfun.aliyun.com/scratchCardSlide/dataReport.jsonp",
                    api_analyze: "https://cfun.aliyun.com/scratchCardSlide/analyze.jsonp"
                }
            };
            t.URL_MAP = _
        }, function (e, t, n) {
            "use strict";
            var o = window, i = n(2);
            i.loadScript = n(104).loadScript;
            var r = {};
            i.getImgSize = function (e, t) {
                r[e] && t(null, r[e]);
                var n = new Image;
                n.onreadystatechange = function () {
                    n.readyState
                }, n.onload = function () {
                    var o = n.naturalWidth ? [n.naturalWidth, n.naturalHeight] : [n.width, n.height];
                    r[e] = o, t(null, o)
                }, n.onerror = function (e) {
                    t(e)
                }, n.src = e
            }, i.addEventHandler = function (e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, function (e) {
                    return n(e || o.event)
                }) : e["on" + t] = function (e) {
                    return n(e || o.event)
                }
            }, i.on = i.addEventHandler, i.map = function (e, t) {
                for (var n = [], o = 0, i = e.length; o < i; o++) n.push(t(e[o], o));
                return n
            }, i.getOS = n(18), i.obj2style = function (e) {
                var t = "", n = void 0;
                for (n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
                return t
            }, i.fill = function (e, t) {
                if ("function" == typeof e.fill) e.fill(t); else for (var n = 0, o = e.length; n < o; n++) e[n] = t;
                return e
            }, e.exports = i
        }, function (e, t, n) {
            "use strict";

            function o(e) {
                var t = ("_nc_r_" + Math.random()).replace(/\./, ""), n = r[t] = new Image;
                n.onload = n.onerror = function () {
                    r[t] = null
                }, n.src = e
            }

            var i = (n(3).URL_MAP, "//cf.aliyun.com/scratchCardSlide/dataReport.jsonp"), r = window;
            t.log = function (e, t) {
                var n, r, a = t || i, c = ["a", "t", "scene", "ns", "jsv", "usa", "p", "jsType", "os", "em", "ec"],
                    s = [], l = c.length;
                for (n = 0; n < l; n++) r = c[n], e.hasOwnProperty(r) && s.push(r + "=" + encodeURIComponent(e[r]));
                s.push("r=" + Math.random()), o(a + "?" + s.join("&"))
            }
        }, function (e, t, n) {
            "use strict";
            t.v = 1e3
        }, function (e, t, n) {
            "use strict";

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function i(e, t) {
                var n, o, i = t ? {} : e;
                for (n in e) e.hasOwnProperty(n) && (o = e[n], "string" == typeof o && (o = [o]), i[n] = '<span class="nc-lang-cnt" data-nc-lang="' + n + '">' + r(h[n], o) + "</span>");
                return i
            }

            function r(e, t) {
                return (e + "").replace(/\\?\{\s*([^{}\s]+)\s*\}/g, function (e, n) {
                    return "\\" === e.charAt(0) ? e.slice(1) : t[n] || ""
                })
            }

            function a(e, t) {
                var n, o = m[e] = m[e] || {};
                t = i(t, !0);
                for (n in t) t.hasOwnProperty(n) && (o[n] = t[n])
            }

            function c(e, t) {
                return e.replace(/(javascript:noCaptcha.reset\()(\))/gi, "$1" + t + "$2")
            }

            var s, l, d = "javascript:noCaptcha.reset()", u = "https://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
                p = "https://survey.taobao.com/survey/40BtED_K?token=%TOKEN",
                _ = "https://survey.taobao.com/survey/Q0dcgfAv?token=%TOKEN",
                f = "https://survey.taobao.com/survey/AMnMVgrS4?type=%TYPE&str=%STR", g = "{0}", h = {
                    _startTEXT: g,
                    _yesTEXT: "<b>{0}</b>",
                    _noTEXT: g,
                    _errorTEXT: g,
                    _errorClickTEXT: g,
                    _errorActionTimeout: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _errorLOADING: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _errorTooMuch: '{0}<a target="_blank" href="{1}">{2}</a>',
                    _errorTooMuchClick: '{0}<a target="_blank" href="{1}">{2}</a>',
                    _errorVerify: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _Loading: "<b>{0}</b>",
                    _errorServer: g,
                    _error300: '{0}<a href="{1}">{2}</a>{3}',
                    _errorNetwork: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _infoTEXT: g,
                    _submit: g,
                    _learning: g,
                    _closeHelp: g,
                    _slideToVerify: g,
                    _notVerified: g,
                    _captcha: g,
                    _OK: g,
                    _sthWrong: g,
                    _reload: g,
                    _feedback: g,
                    _cc_select: g,
                    _cc_title: g,
                    _cc_fail: g,
                    _wait: g,
                    _cc_refresh: g,
                    _verify: g,
                    _cancel: g,
                    _retry: g,
                    _cc_contact: '{0}<a href="{1}" target="_blank">{2}</a>',
                    _cc_img_fail: g,
                    _cc_req_fail: g,
                    _close: g,
                    _ggk_start: g,
                    _ggk_net_err: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _ggk_too_fast: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _ggk_action_timeout: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _ggk_fail: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _ggk_success: g
                }, m = {
                    cn: {
                        _startTEXT: "\u8bf7\u6309\u4f4f\u6ed1\u5757\uff0c\u62d6\u52a8\u5230\u6700\u53f3\u8fb9",
                        _yesTEXT: "\u9a8c\u8bc1\u901a\u8fc7",
                        _noTEXT: "\u8bf7\u5728\u4e0b\u65b9\u8f93\u5165\u9a8c\u8bc1\u7801",
                        _errorTEXT: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
                        _errorClickTEXT: "\u9a8c\u8bc1\u7801\u70b9\u51fb\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5",
                        _errorLOADING: ["\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7", d, "\u70b9\u51fb\u5237\u65b0", "\uff0c\u6216", u, "\u63d0\u4ea4\u53cd\u9988"],
                        _errorTooMuch: ["\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff0c\u6216", u, "\u63d0\u4ea4\u53cd\u9988"],
                        _errorTooMuchClick: ["\u70b9\u51fb\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff0c\u6216", u, "\u63d0\u4ea4\u53cd\u9988"],
                        _errorVerify: ["\u9a8c\u8bc1\u5931\u8d25\uff0c\u8bf7", d, "\u70b9\u51fb\u5237\u65b0", "\uff0c\u6216", u, "\u63d0\u4ea4\u53cd\u9988"],
                        _Loading: "\u52a0\u8f7d\u4e2d",
                        _errorServer: "\u670d\u52a1\u5668\u9519\u8bef\u6216\u8005\u8d85\u65f6",
                        _error300: ["\u54ce\u5440\uff0c\u51fa\u9519\u4e86\uff0c\u70b9\u51fb", d, "\u5237\u65b0", "\u518d\u6765\u4e00\u6b21"],
                        _errorNetwork: ["\u7f51\u7edc\u4e0d\u7ed9\u529b\uff0c\u8bf7", d, "\u70b9\u51fb\u5237\u65b0", "\uff0c\u6216", u, "\u63d0\u4ea4\u53cd\u9988"],
                        _infoTEXT: "",
                        _submit: "\u63d0\u4ea4",
                        _learning: "\u4e86\u89e3\u65b0\u529f\u80fd",
                        _closeHelp: "\u5173\u95ed\u5e2e\u52a9",
                        _slideToVerify: "\u5411\u53f3\u6ed1\u52a8\u9a8c\u8bc1",
                        _notVerified: "\u9a8c\u8bc1\u672a\u901a\u8fc7",
                        _captcha: "\u9a8c\u8bc1\u7801",
                        _OK: "\u786e\u5b9a",
                        _sthWrong: "\u975e\u5e38\u62b1\u6b49\uff0c\u8fd9\u51fa\u9519\u4e86...",
                        _reload: "\u5237\u65b0",
                        _feedback: "\u53cd\u9988",
                        _cc_select: "\u8bf7\u9009\u62e9\u56fe\u7247\u9a8c\u8bc1",
                        _cc_title: "\u8bf7\u9009\u62e9\u4e0b\u9762\u4e0e\u5de6\u56fe\u540c\u4e00\u7c7b\u522b\u7684\u56fe\u7247",
                        _cc_fail: "\u56fe\u7247\u9009\u62e9\u4e0d\u6b63\u786e\uff0c\u8bf7\u91cd\u8bd5",
                        _wait: "\u8bf7\u7a0d\u5019",
                        _cc_refresh: "\u6362\u4e00\u6279",
                        _verify: "\u9a8c\u8bc1",
                        _cancel: "\u53d6\u6d88",
                        _retry: "\u91cd\u8bd5",
                        _cc_contact: ["\u9047\u5230\u95ee\u9898\u4e86\uff1f", u, "\u70b9\u6b64\u53cd\u9988"],
                        _cc_img_fail: "\u56fe\u7247\u9a8c\u8bc1\u7801\u83b7\u53d6\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u5e76\u91cd\u8bd5\u3002",
                        _cc_req_fail: "\u65e0\u6cd5\u8fde\u63a5\u670d\u52a1\u5668\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u5e76\u91cd\u8bd5\u3002",
                        _close: "\u5173\u95ed",
                        _ggk_guide: "\u8bf7\u6441\u4f4f\u9f20\u6807\u5de6\u952e\uff0c\u522e\u51fa\u4e24\u53ea\u5c0f\u9e21",
                        _ggk_start: "",
                        _ggk_net_err: ["\u7f51\u7edc\u5b9e\u5728\u4e0d\u7ed9\u529b<br/>\u8bf7", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u9988\u95ee\u9898"],
                        _ggk_too_fast: ["\u60a8\u522e\u5f97\u592a\u5feb\u5566<br/>\u8bf7", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u9988\u95ee\u9898"],
                        _ggk_action_timeout: ["\u6211\u7b49\u5f97\u592a\u4e45\u5566<br/>\u8bf7", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u9988\u95ee\u9898"],
                        _ggk_fail: ["\u5440\uff0c\u5c0f\u9e21\u9003\u8dd1\u4e86<br/>\u8bf7", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u9988\u95ee\u9898"],
                        _ggk_success: "\u606d\u559c\u60a8\u6210\u529f\u522e\u51fa\u5c0f\u9e21\uff0c\u7ee7\u7eed\u4e0b\u4e00\u6b65\u64cd\u4f5c\u5427"
                    },
                    tw: {
                        _startTEXT: "\u8acb\u6309\u4f4f\u6ed1\u584a\uff0c\u62d6\u52d5\u5230\u6700\u53f3\u908a",
                        _yesTEXT: "\u9a57\u8b49\u901a\u904e",
                        _noTEXT: "\u8acb\u5728\u4e0b\u65b9\u8f38\u5165\u9a57\u8b49\u78bc",
                        _errorTEXT: "\u9a57\u8b49\u78bc\u8f38\u5165\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165",
                        _errorClickTEXT: "\u9a57\u8b49\u78bc\u9ede\u64ca\u932f\u8aa4\uff0c\u8acb\u91cd\u8a66",
                        _errorLOADING: ["\u52a0\u8f09\u5931\u6557\uff0c\u8acb", d, "\u9ede\u64ca\u5237\u65b0", "\uff0c\u6216", p, "\u63d0\u4ea4\u53cd\u994b"],
                        _errorTooMuch: ["\u8f38\u5165\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\uff0c\u6216", p, "\u63d0\u4ea4\u53cd\u994b"],
                        _errorTooMuchClick: ["\u9ede\u64ca\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\uff0c\u6216", p, "\u63d0\u4ea4\u53cd\u994b"],
                        _errorVerify: ["\u9a57\u8b49\u5931\u6557\uff0c\u8acb", d, "\u9ede\u64ca\u5237\u65b0", "\uff0c\u6216", p, "\u63d0\u4ea4\u53cd\u994b"],
                        _Loading: "\u52a0\u8f09\u4e2d",
                        _errorServer: "\u670d\u52d9\u5668\u932f\u8aa4\u6216\u8005\u8d85\u6642",
                        _error300: ["\u54ce\u5440\uff0c\u51fa\u932f\u4e86\uff0c\u9ede\u64ca", d, "\u5237\u65b0", "\u518d\u4f86\u58f9\u6b21"],
                        _errorNetwork: ["\u7db2\u7d61\u4e0d\u7d66\u529b\uff0c\u8acb", d, "\u9ede\u64ca\u5237\u65b0", "\uff0c\u6216", p, "\u63d0\u4ea4\u53cd\u994b"],
                        _infoTEXT: "",
                        _submit: "\u63d0\u4ea4",
                        _learning: "\u4e86\u89e3\u65b0\u529f\u80fd",
                        _closeHelp: "\u5173\u95ed\u5e2e\u52a9",
                        _slideToVerify: "\u5411\u53f3\u6ed1\u52d5\u9a57\u8b49",
                        _notVerified: "\u9a57\u8b49\u672a\u901a\u904e",
                        _captcha: "\u9a57\u8b49\u78bc",
                        _OK: "\u78ba\u5b9a",
                        _sthWrong: "\u975e\u5e38\u62b1\u6b49\uff0c\u9019\u51fa\u932f\u4e86...",
                        _reload: "\u5237\u65b0",
                        _feedback: "\u53cd\u994b",
                        _ggk_guide: "\u8acb\u6309\u4f4f\u6ed1\u9f20\u5de6\u9375\uff0c\u522e\u51fa\u5169\u96bb\u5c0f\u96de",
                        _ggk_start: "",
                        _ggk_net_err: ["\u7db2\u8def\u5be6\u5728\u4e0d\u7d66\u529b<br/>\u8acb", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u6620\u554f\u984c"],
                        _ggk_too_fast: ["\u60a8\u522e\u5f97\u592a\u5feb\u5566<br/>\u8acb", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u6620\u554f\u984c"],
                        _ggk_action_timeout: ["\u6211\u7b49\u5f97\u592a\u4e45\u5566<br/>\u8acb", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u6620\u554f\u984c"],
                        _ggk_fail: ["\u5440\uff0c\u5c0f\u96de\u9003\u8dd1\u4e86<br/>\u8acb", d, "\u518d\u6765\u4e00\u6b21", "\u6216", f, "\u53cd\u6620\u554f\u984c"],
                        _ggk_success: "\u606d\u559c\u60a8\u6210\u529f\u522e\u51fa\u5c0f\u96de\uff0c\u7e7c\u7e8c\u4e0b\u4e00\u6b65\u64cd\u4f5c\u5427"
                    },
                    en: (s = {
                        _startTEXT: "Please slide to verify",
                        _yesTEXT: "Verified",
                        _noTEXT: "Please input verification code",
                        _errorTEXT: "Please try again",
                        _errorClickTEXT: "Please try again",
                        _errorLOADING: ["Loading failed, ", d, "refresh", " or ", _, "provide feedback"],
                        _errorTooMuch: ["Please try again or ", _, "provide feedback"],
                        _errorTooMuchClick: ["Please try again or ", _, "provide feedback"],
                        _errorVerify: ["Verify failed, ", d, "refresh", " or ", _, "provide feedback"],
                        _errorServer: "Server Error",
                        _Loading: "Loading",
                        _error300: ["Oops... something's wrong. Please ", d, "refresh", " and try again."],
                        _errorNetwork: ["Net Err. Please ", d, "refresh", ", or ", _, "feedback"],
                        _infoTEXT: "",
                        _submit: "Submit",
                        _learning: "help",
                        _closeHelp: "Close",
                        _slideToVerify: "slide to verify",
                        _notVerified: "Not Verified",
                        _captcha: "Captcha",
                        _OK: "OK",
                        _sthWrong: "Sorry, something wrong....",
                        _reload: "Reload",
                        _feedback: "Feedback",
                        _ggk_action_timeout: ["Action timeout, ", d, "refresh", " or ", _, "provide feedback"],
                        _ggk_guide: "Hold your left mouse button down to scratch out two chickens",
                        _ggk_start: "",
                        _ggk_net_err: ["Problem with the network<br/>Please", d, "try again", "or", f, "report your problem"],
                        _ggk_too_fast: ["You were being too fast<br/>Please", d, "try again", "or", f, "report your problem"]
                    }, o(s, "_ggk_action_timeout", ["You've been idled for too long<br/>Please", d, "try again", "or", f, "report your problem"]), o(s, "_ggk_fail", ["Oops, the chickens ran away<br/>Please", d, "try again", "or", f, "report your problem"]), o(s, "_ggk_success", "Congratulations! You've got the chickens!"), s),
                    ar_SA: {
                        _startTEXT: "\u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0645\u0631\u064a\u0631 \u0644\u0644\u062a\u062d\u0642\u0642",
                        _yesTEXT: "\u062a\u0645 \u0627\u0644\u062a\u062d\u0642\u0642",
                        _noTEXT: "\u064a\u0631\u062c\u0649 \u0625\u062f\u062e\u0627\u0644 \u0631\u0645\u0632 \u0627\u0644\u062a\u062d\u0642\u0642",
                        _errorTEXT: "\u064a\u0631\u062c\u0649 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629",
                        _errorClickTEXT: "\u064a\u0631\u062c\u0649 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629",
                        _errorLOADING: ["\u0641\u0634\u0644 \u0627\u0644\u062a\u062d\u0645\u064a ", d, "\u0644\u060c", " \u0627\u0644\u062a\u0646\u0634\u064a\u0637 ", _, "\u0623\u0648 \u062a\u0642\u062f\u064a\u0645 \u062a\u0639\u0644\u064a\u0642"],
                        _errorTooMuch: ["\u064a\u0631\u062c\u0649 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0623\u0648 ", _, "\u062a\u0642\u062f\u064a\u0645 \u062a\u0639\u0644\u064a\u0642"],
                        _errorTooMuchClick: ["\u064a\u0631\u062c\u0649 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0623\u0648 ", _, "\u062a\u0642\u062f\u064a\u0645 \u062a\u0639\u0644\u064a\u0642"],
                        _Loading: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644",
                        _errorServer: "\u062e\u0637\u0623 \u0628\u0627\u0644\u0645\u0644\u0642\u0645",
                        _error300: ["\u0639\u0641\u0648\u0627... \u0634\u064a\u0621 \u0645\u0627 \u062e\u0637\u0623. \u064a\u0631\u062c\u0649 ", d, "\u0627\u0644\u062a\u0646\u0634\u064a\u0637", " \u0648\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629"],
                        _errorNetwork: ["\u062e\u0637\u0623 \u0628\u0627\u0644 \u0644\u0634 \u0643\u0629. \u064a\u0631\u062c\u0649 ", d, "\u0627\u0644\u062a\u0646\u0634\u064a\u0637\u060c", " \u0623\u0648 ", _, "\u0627\u0644\u062a\u0639\u0644\u064a\u0642"],
                        _infoTEXT: "",
                        _submit: "\u0625\u0631\u0633\u0627\u0644",
                        _learning: "\u0645\u0633\u0627\u0639\u062f\u0629",
                        _closeHelp: "\u0625\u063a\u0644\u0627\u0642",
                        _slideToVerify: "\u0642\u0645 \u0628\u0627\u0644\u062a\u0645\u0631\u064a\u0631 \u0644\u0644\u062a\u062d\u0642\u0642",
                        _notVerified: "\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u062a\u062d\u0642\u0642",
                        _captcha: "\u0631\u0645\u0632 \u0627\u0644\u062d\u0645\u0627\u064a\u0629",
                        _OK: "\u0645\u0648\u0627\u0641\u0642",
                        _sthWrong: "\u0639\u0630\u0631\u0627\u060c \u0634\u064a\u0621 \u0645\u0627 \u062e\u0637\u0623....",
                        _reload: "\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u062a\u062d\u0645\u064a\u0644",
                        _feedback: "\u062a\u0639\u0644\u064a\u0642"
                    },
                    de_DE: {
                        _startTEXT: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bitte schieben Sie, um zu \xfcberpr\xfcfen",
                        _yesTEXT: "Verifiziert",
                        _noTEXT: "Bitte geben Sie den Best\xe4tigungs-Code ein",
                        _errorTEXT: "Bitte versuchen Sie es erneut",
                        _errorClickTEXT: "Bitte versuchen Sie es erneut",
                        _errorLOADING: ["Laden gescheitert, ", d, "aktualisieren", " oder ", _, "feedback angeben"],
                        _errorTooMuch: ["Bitte versuchen Sie es erneut oder ", _, "geben Sie feedback an"],
                        _errorTooMuchClick: ["Bitte versuchen Sie es erneut oder ", _, "geben Sie feedback an"],
                        _Loading: "Lade",
                        _errorServer: "Serverfehler",
                        _error300: ["Huch ... etwas ist schief gelaufen. Bitte ", d, "aktualisieren", " Sie und versuchen Sie es erneut"],
                        _errorNetwork: ["Netzfehler. Bitte ", d, "aktualisieren", " oder ", _, "feedback angeben."],
                        _infoTEXT: "",
                        _submit: "abschicken",
                        _learning: "Hilfe",
                        _closeHelp: "schlie\xdfen",
                        _slideToVerify: "Schieben um zu \xfcberpr\xfcfen",
                        _notVerified: "Nicht verifiziert",
                        _captcha: "captcha",
                        _OK: "OK",
                        _sthWrong: "Sorry, etwas ist schief gelaufen ....",
                        _reload: "Neu laden",
                        _feedback: "Feedback"
                    },
                    es_ES: {
                        _startTEXT: "Por favor, deslice para verificar",
                        _yesTEXT: "Verificado",
                        _noTEXT: "Por favor el c\xf3digo de verificaci\xf3n de entrada",
                        _errorTEXT: "Por favor, int\xe9ntelo de nuevo",
                        _errorClickTEXT: "Por favor, int\xe9ntelo de nuevo",
                        _errorLOADING: ["Carga fallida, ", d, "actualizar", " o ", _, "realizar un comentario"],
                        _errorTooMuch: ["Por favor, int\xe9ntelo de nuevo o ", _, "realice un comentario"],
                        _errorTooMuchClick: ["Por favor, int\xe9ntelo de nuevo o ", _, "m\xe1ndenos un comentario"],
                        _Loading: "Cargando",
                        _errorServer: "Error del Servidor",
                        _error300: ["Vaya ... algo est\xe1 mal. Por favor ", d, "actualizar", " y volver a intentar"],
                        _errorNetwork: ["Error de red. Por favor, ", d, "actualice", " o ", _, "inf\xf3rmenos"],
                        _infoTEXT: "",
                        _submit: "Enviar",
                        _learning: "Ayuda",
                        _closeHelp: "Cerca",
                        _slideToVerify: "deslice para verificar",
                        _notVerified: "No verificado",
                        _captcha: "Captcha",
                        _OK: "OK",
                        _sthWrong: "Lo sentimos, pero algo est\xe1 mal ....",
                        _reload: "Recargar",
                        _feedback: "Comentar"
                    },
                    fr_FR: {
                        _startTEXT: "Faites glisser pour verifier ",
                        _yesTEXT: "V\xe9rifi\xe9",
                        _noTEXT: "Veuillez entrer le code de v\xe9rification",
                        _errorTEXT: "Veuillez r\xe9essayer",
                        _errorClickTEXT: "Veuillez r\xe9essayer",
                        _errorLOADING: ["\xc9chec du chargement, ", d, "actualiser", " ou ", _, "formuler des commentaires"],
                        _errorTooMuch: ["Veuillez r\xe9essayer ou ", _, "formuler des commentaires"],
                        _errorTooMuchClick: ["Veuillez r\xe9essayer ou ", _, "formuler des commentaires"],
                        _Loading: "Chargement",
                        _errorServer: "Erreur du serveur",
                        _error300: ["Oups\u2026. Il y a eu un probl\xe8me. ", d, "Actualisez", " et r\xe9essayez "],
                        _errorNetwork: ["Erreur de r\xe9seau. ", d, "Actualisez", " ou ", _, "formuler des commentaires"],
                        _infoTEXT: "",
                        _submit: "Soumettre",
                        _learning: "Aide",
                        _closeHelp: "Fermer",
                        _slideToVerify: "Faites glisser pour v\xe9rifier",
                        _notVerified: "Non v\xe9rifi\xe9",
                        _captcha: "Captcha",
                        _OK: "OK",
                        _sthWrong: "D\xe9sol\xe9, il y a un probl\xe8me ....",
                        _reload: "Recharger",
                        _feedback: "Commentaires"
                    },
                    in_ID: {
                        _startTEXT: "Silahkan geser untuk memverifikasi",
                        _yesTEXT: "Terverifikasi",
                        _noTEXT: "Silakan masukkan kode verifikasi",
                        _errorTEXT: "Silakan coba lagi",
                        _errorClickTEXT: "Silakan coba lagi",
                        _errorLOADING: ["Memuat gagal, ", d, "refresh", " atau ", _, "berikan umpan balik"],
                        _errorTooMuch: ["Silakan coba lagi atau ", _, "berikan umpan balik"],
                        _errorTooMuchClick: ["Silakan coba lagi atau ", _, "berikan umpan balik"],
                        _Loading: "Memuat",
                        _errorServer: "Kesalahan server",
                        _error300: ["Ups... Ada yang salah. Silakan ", d, "refresh", " dan coba lagi"],
                        _errorNetwork: ["Kesalahan jaringan. Silakan ", d, "refresh", ", atau ", _, "umpan balik"],
                        _infoTEXT: "",
                        _submit: "Serahkan",
                        _learning: "Bantuan",
                        _closeHelp: "Tutup",
                        _slideToVerify: "Geser untuk memverifikasi",
                        _notVerified: "Tidak terverifikasi",
                        _captcha: "Captcha",
                        _OK: "OK",
                        _sthWrong: "Maaf, ada yang salah...",
                        _reload: "Muat ulang",
                        _feedback: "Umpan balik"
                    },
                    it_IT: {
                        _startTEXT: "Per favore scorri per verificare",
                        _yesTEXT: "Verificato",
                        _noTEXT: "Per favore inserisci il codice di verifica",
                        _errorTEXT: "Per favore riprova",
                        _errorClickTEXT: "Per favore riprova",
                        _errorLOADING: ["La pagina non ha caricato, per favore ", d, "rinfresca", " o ", _, "mandaci un commento"],
                        _errorTooMuch: ["Per favore riprova o ", _, "mandaci un commento"],
                        _errorTooMuchClick: ["Per favore riprova o ", _, "mandaci un commento"],
                        _Loading: "Sto caricando",
                        _errorServer: "Errore del Server",
                        _error300: ["Oooops... C'\xe8 qualcosa che non va. Per favore ", d, "rinfresca", " la pagina o riprova."],
                        _errorNetwork: ["Errore della Rete. Per favore ", d, "rinfresca", " la pagina o ", _, "mandaci un commento."],
                        _infoTEXT: "",
                        _submit: "Sottoponi",
                        _learning: "Aiuto",
                        _closeHelp: "",
                        _slideToVerify: "Scorri per verificare",
                        _notVerified: "Non verificato",
                        _captcha: "Captcha",
                        _OK: "OK",
                        _sthWrong: "Mi spiace, c'\xe8 qualcosa di sbagliato",
                        _reload: "Ricarica",
                        _feedback: "retroazione"
                    },
                    iw_HE: {
                        _startTEXT: "\u05d0\u05e0\u05d0 \u05d4\u05d7\u05dc\u05e7 \u05e2\u05dc \u05d4\u05de\u05e1\u05da \u05dc\u05d0\u05d9\u05de\u05d5\u05ea",
                        _yesTEXT: "\u05d0\u05d5\u05de\u05ea",
                        _noTEXT: "\u05d0\u05e0\u05d0 \u05d4\u05d6\u05df \u05e7\u05d5\u05d3 \u05d0\u05d9\u05de\u05d5\u05ea",
                        _errorTEXT: "\u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05e9\u05d5\u05d1",
                        _errorClickTEXT: "\u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05e9\u05d5\u05d1",
                        _errorLOADING: ["\u05d4\u05d8\u05e2\u05d9\u05e0\u05d4 \u05e0\u05db\u05e9 ", d, "\u05dc\u05d4. \u05d9\u05e9 \u05dc", " \u05e2\u05e0 ", _, "\u05d0\u05d5 \u05dc\u05e9\u05dc\u05d5\u05d7 \u05de\u05e9\u05d5\u05d1"],
                        _errorTooMuch: ["\u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05e9\u05d5\u05d1 \u05d0\u05d5 ", _, "\u05e9\u05dc\u05d7 \u05de\u05e9\u05d5\u05d1"],
                        _errorTooMuchClick: ["\u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05e9\u05d5\u05d1 \u05d0\u05d5 ", _, "\u05e9\u05dc\u05d7 \u05de\u05e9\u05d5\u05d1"],
                        _Loading: "\u05d8\u05d5\u05e2\u05df",
                        _errorServer: "\u05e9\u05d2\u05d9\u05d0\u05ea \u05e9\u05e8\u05ea",
                        _error300: ["\u05d0\u05d5\u05e4\u05e1... \u05d0\u05d9\u05e8\u05e2\u05d4 \u05ea\u05e7\u05dc\u05d4. ", d, "\u05d9\u05e9 \u05dc\u05e8\u05e2\u05e0\u05df", " \u05d5\u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1"],
                        _errorNetwork: ["\u05e9\u05d2\u05d9\u05d0\u05ea \u05e8\u05e9\u05ea. ", d, "\u05d9\u05e9 \u05dc\u05e8\u05e2\u05e0\u05df", " \u05d0\u05d5 \u05dc\u05e9\u05dc\u05d5\u05d7 ", _, "\u05de\u05e9\u05d5\u05d1"],
                        _infoTEXT: "",
                        _submit: "\u05e9\u05dc\u05d7",
                        _learning: "\u05e2\u05d6\u05e8\u05d4",
                        _closeHelp: "\u05e1\u05d2\u05d9\u05e8\u05d4",
                        _slideToVerify: "\u05d4\u05d7\u05dc\u05e7 \u05e2\u05dc \u05d4\u05de\u05e1\u05da \u05dc\u05d0\u05d9\u05de\u05d5\u05ea",
                        _notVerified: "\u05dc\u05d0 \u05de\u05d0\u05d5\u05de\u05ea",
                        _captcha: "Captcha",
                        _OK: "\u05d0\u05d9\u05e9\u05d5\u05e8",
                        _sthWrong: "\u05de\u05e6\u05d8\u05e2\u05e8\u05d9\u05dd, \u05d9\u05e9 \u05ea\u05e7\u05dc\u05d4...",
                        _reload: "\u05d8\u05e2\u05df \u05de\u05d7\u05d3\u05e9",
                        _feedback: "\u05de\u05e9\u05d5\u05d1"
                    },
                    ja_JP: {
                        _startTEXT: "\u30b9\u30e9\u30a4\u30c9\u3057\u3066\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044",
                        _yesTEXT: "\u691c\u8a3c",
                        _noTEXT: "\u691c\u8a3c\u30b3\u4e00\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",
                        _errorTEXT: "\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044",
                        _errorClickTEXT: "\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044",
                        _errorLOADING: ["", d, "\u66f4\u65b0", "\u5931\u6557\u3057\u305f\u30ed\u30fc\u30c9\u3001\u307e\u305f\u306f", _, "\u30d5\u30a3\u30f3\u30c9\u30d0\u30c3\u30b0\u3092\u63d0\u4f9b\u3057\u307e\u3059"],
                        _errorTooMuch: ["\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3042\u308b\u3044\u306f\u3001 ", _, "\u30d5\u30a3\u30f3\u30c9\u30d0\u30c3\u30b0\u3092\u63d0\u4f9b\u3057\u307e\u3059"],
                        _errorTooMuchClick: ["\u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3042\u308b\u3044\u306f\u3001 ", _, "\u30d5\u30a3\u30f3\u30c9\u30d0\u30c3\u30b0\u3092\u63d0\u4f9b\u3057\u307e\u3059"],
                        _Loading: "\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059",
                        _errorServer: "\u30b5\u4e00\u30d0\u4e00\u30a8\u30e9\u4e00",
                        _error300: ["\u4f55\u304b\u304c\u9593\u9055\u3044\u3067\u3001 ", d, "\u66f4\u65b0\u3057\u3066", " \u3082\u3046\u4e00\u5ea6\u3084\u308a\u76f4\u3057\u3057\u3066\u304f\u3060\u3055\u3044"],
                        _errorNetwork: ["Net Err.\u306f\u8aa4\u308b\u3002 ", d, "\u66f4\u65b0\u3057\u3066", " \u304f\u3060\u3055\u3044\u3002\u3042\u308b\u3044\u306f\u3001 ", _, "\u30d5\u30a3\u30f3\u30c9\u30d0\u30c3\u30b0\u3092\u63d0\u4f9b\u3066\u3057\u3066\u304f\u3060\u3055\u3044\u3002"],
                        _infoTEXT: "",
                        _submit: "\u63d0\u51fa\u3059\u308b",
                        _learning: "\u52a9\u3051\u308b",
                        _closeHelp: "\u9589\u307e\u308b",
                        _slideToVerify: "\u30b9\u30e9\u30a4\u30c9\u3057\u3066\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044",
                        _notVerified: "\u78ba\u8a8d\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
                        _captcha: "\u30ad\u30e3\u30d7\u30c1\u30e3",
                        _OK: "\u306f\u3044",
                        _sthWrong: "\u3059\u307f\u307e\u305b\u3093\u304c\u3001\u4f55\u304b\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059...",
                        _reload: "\u3082\u3046\u4e00\u5ea6\u8aad\u307f\u8fbc\u3080",
                        _feedback: "\u30d5\u30a3\u30f3\u30c9\u30d0\u30c3\u30b0"
                    },
                    ko_KR: {
                        _startTEXT: "\ubc00\uc5b4\uc11c \ud655\uc778\ud558\uae30",
                        _yesTEXT: "\ud655\uc778\ub428",
                        _noTEXT: "\uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694",
                        _errorTEXT: "\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694",
                        _errorClickTEXT: "\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694",
                        _errorLOADING: ["\ub85c\ub529 \uc2e4\ud328, ", d, " \uc0c8\ub85c\uace0\uce68", " \ub610\ub294 ", _, "\ud53c\ub4dc\ubc31 \uc81c\uacf5\ud558\uae30"],
                        _errorTooMuch: ["\ub2e4\uc2dc \uc2dc\ub3c4 \ub610\ub294 ", _, "\ud53c\ub4dc\ubc31\uc744 \uc81c\uacf5\ud574", "\uc8fc\uc138\uc694"],
                        _errorTooMuchClick: ["\ub2e4\uc2dc \uc2dc\ub3c4 \ub610\ub294 ", _, "\ud53c\ub4dc\ubc31\uc744 \uc81c\uacf5\ud574", "\uc8fc\uc138\uc694"],
                        _Loading: "\ub85c\ub529",
                        _errorServer: "\uc11c\ubc84 \uc624\ub958",
                        _error300: ["\uc6c1\uc2a4\u2026\ubb34\uc5c7\uc778\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4. ", d, "\uc0c8\ub85c \uace0\uce58\uace0", " \uc0c8\ub85c \uace0\uce58\uace0"],
                        _errorNetwork: ["\ub124\ud2b8 \uc624\ub958. ", d, "\uc0c8\ub85c \uace0\uce68", "\ub610\ub294", _, "\ud53c\ub4dc\ubc31"],
                        _infoTEXT: "",
                        _submit: "\uc81c\ucd9c",
                        _learning: "\ud57c\ud504",
                        _closeHelp: "\ub044\uae30",
                        _slideToVerify: "\ubc00\uc5b4\uc11c \ud655\uc778\ud558\uae30",
                        _notVerified: "\uc778\uc99d\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4",
                        _captcha: "\ubcf4\uc548\ubb38\uc790",
                        _OK: "\uc608",
                        _sthWrong: "\ubbf8\uc548\ud569\ub2c8\ub2e4, \ubb34\uc5c7\uc778\uac00 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4\u2026",
                        _reload: "\ub9ac\ub85c\ub4dc",
                        _feedback: "\ud53c\ub4dc\ubc31"
                    },
                    nl_NL: {
                        _startTEXT: "Schuif om te bevestigen",
                        _yesTEXT: "Geverifieerd",
                        _noTEXT: "Geef de verificatiecode in",
                        _errorTEXT: "Probeer opnieuw",
                        _errorClickTEXT: "Probeer opnieuw",
                        _errorLOADING: ["Laden mislukt, ", d, "vernieuw", " of ", _, "geef feedback"],
                        _errorTooMuch: ["Probeer opnieuw of ", _, "geef feedback"],
                        _errorTooMuchClick: ["Probeer opnieuw of ", _, "geef feedback"],
                        _Loading: "Laden",
                        _errorServer: "Serverfout",
                        _error300: ["Oeps\u2026er is iets fout. Vernieuw en ", d, "probeer opnieuw", ""],
                        _errorNetwork: ["Netfout. ", d, "vernieuw,", " of ", _, "feedback"],
                        _infoTEXT: "",
                        _submit: "verstuur",
                        _learning: "help",
                        _closeHelp: "Sluit",
                        _slideToVerify: "schuiven om te bevestigen",
                        _notVerified: "Niet geverifieerd",
                        _captcha: "Captcha",
                        _OK: "OK",
                        _sthWrong: "Sorry, er is iets fout\u2026",
                        _reload: "Herlaad",
                        _feedback: "Feedback"
                    },
                    pt_BR: {
                        _startTEXT: "Por favor, deslize para verificar",
                        _yesTEXT: "Verificado",
                        _noTEXT: "Por favor, insira o c\xf3digo de ativa\xe7\xe3o",
                        _errorTEXT: "Por favor, tente novamente",
                        _errorClickTEXT: "Por favor, tente novamente",
                        _errorLOADING: ["Falha no carregamento, ", d, "atualize", " ou ", _, "envie-nos uma mensagem sobre o erro"],
                        _errorTooMuch: ["Por favor, tente novamente ou ", _, "envie-nos uma mensagem sobre o erro"],
                        _errorTooMuchClick: ["Por favor, tente novamente ou ", _, "envie-nos uma mensagem sobre o erro"],
                        _Loading: "Carregando",
                        _errorServer: "Erro no Servidor",
                        _error300: ["Opa... Aconteceu um erro. Por favor, ", d, "atualize", " e tente novamente"],
                        _errorNetwork: ["Erro de Rede. Por favor, ", d, "atualize", " ou ", _, "envie-nos uma mensagem sobre o erro"],
                        _infoTEXT: "",
                        _submit: "enviar",
                        _learning: "ajuda",
                        _closeHelp: "Fechar",
                        _slideToVerify: "Deslize para verificar",
                        _notVerified: "N\xe3o verificado",
                        _captcha: "C\xf3digo de verifica\xe7\xe3o",
                        _OK: "OK",
                        _sthWrong: "Desculpa, aconteceu algum erro...",
                        _reload: "Recarregar",
                        _feedback: "Envie-nos uma mensagem de erro"
                    },
                    ru_RU: {
                        _startTEXT: "\u041f\u0440\u043e\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043f\u0440\u0430\u0432\u043e",
                        _yesTEXT: "\u041f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043e",
                        _noTEXT: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u0447\u043d\u044b\u0439 \u043a\u043e\u0434",
                        _errorTEXT: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",
                        _errorClickTEXT: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437",
                        _errorLOADING: ["\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c, ", d, "\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c", " \u0438\u043b\u0438 ", _, "\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"],
                        _errorTooMuch: ["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430 \u0438\u043b\u0438 ", _, "\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"],
                        _errorTooMuchClick: ["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430 \u0438\u043b\u0438 ", _, "\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"],
                        _Loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
                        _errorServer: "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                        _error300: ["\u041e\u0439, \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, ", d, "\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435", " \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"],
                        _errorNetwork: ["\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0442\u0438, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, ", d, "\u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435", " \u0438\u043b\u0438 ", _, "\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"],
                        _infoTEXT: "",
                        _submit: "\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c",
                        _learning: "\u041f\u043e\u043c\u043e\u0449\u044c",
                        _closeHelp: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
                        _slideToVerify: "\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",
                        _notVerified: "\u043d\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043e",
                        _captcha: "\u043a\u043e\u0434 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438",
                        _OK: "\u0445\u043e\u0440\u043e\u0448\u043e",
                        _sthWrong: "\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a\u2026",
                        _reload: "\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
                        _feedback: "\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c"
                    },
                    th_TH: {
                        _startTEXT: "\u0e42\u0e1b\u0e23\u0e14\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19 ",
                        _yesTEXT: "\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e41\u0e25\u0e49\u0e27",
                        _noTEXT: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e43\u0e2a\u0e48\u0e23\u0e2b\u0e31\u0e2a\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19",
                        _errorTEXT: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
                        _errorClickTEXT: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
                        _errorLOADING: ["\u0e01\u0e32\u0e23\u0e42\u0e2b\u0e25\u0e14\u0e44\u0e21\u0e48\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08, ", d, "\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a ", " \u0e2b\u0e23\u0e37\u0e2d ", _, "\u0e43\u0e2b\u0e49\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30 "],
                        _errorTooMuch: ["\u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e2b\u0e23\u0e37\u0e2d ", _, "\u0e43\u0e2b\u0e49\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30 "],
                        _errorTooMuchClick: ["\u0e01\u0e23\u0e38\u0e13\u0e32\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e2b\u0e23\u0e37\u0e2d ", _, "\u0e43\u0e2b\u0e49\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30"],
                        _Loading: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14",
                        _errorServer: "\u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e02\u0e31\u0e14\u0e02\u0e49\u0e2d\u0e07",
                        _error300: ["Oops... \u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e02\u0e31\u0e14\u0e02\u0e49\u0e2d\u0e07. \u0e01\u0e23\u0e38\u0e13 ", d, "\u0e32\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a ", " \u0e41\u0e25\u0e30\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07"],
                        _errorNetwork: ["\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e02\u0e31\u0e14\u0e02\u0e49\u0e2d\u0e07 \u0e01\u0e23\u0e38\u0e13\u0e32 ", d, "\u0e23\u0e35\u0e40\u0e1f\u0e23\u0e0a", " \u0e2b\u0e23\u0e37\u0e2d ", _, "\u0e43\u0e2b\u0e49\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30 "],
                        _infoTEXT: "",
                        _submit: "\u0e2a\u0e48\u0e07",
                        _learning: "\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e2b\u0e25\u0e37\u0e2d",
                        _closeHelp: "\u0e1b\u0e34\u0e14",
                        _slideToVerify: "\u0e40\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19",
                        _notVerified: "\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19",
                        _captcha: "Captcha",
                        _OK: "OK",
                        _sthWrong: "\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22 \u0e21\u0e35\u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14",
                        _reload: "\u0e42\u0e2b\u0e25\u0e14\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
                        _feedback: "\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30"
                    },
                    tr_TR: {
                        _startTEXT: "Do\u011frulamak i\xe7in kayd\u0131r\u0131n",
                        _yesTEXT: "Do\u011fruland\u0131",
                        _noTEXT: "L\xfctfen do\u011frulama kodunu giriniz",
                        _errorTEXT: "L\xfctfen tekrar deneyiniz",
                        _errorClickTEXT: "L\xfctfen tekrar deneyiniz",
                        _errorLOADING: ["Y\xfckleme ba\u015far\u0131s\u0131z, ", d, "yenileyin", " veya ", _, "geri bildirin"],
                        _errorTooMuch: ["L\xfctfen tekrar deneyin ve ya ", _, "geri bildirin."],
                        _errorTooMuchClick: ["L\xfctfen tekrar deneyin ve ya ", _, "geri bildirin."],
                        _Loading: "Y\xfckleniyor",
                        _errorServer: "Sunucu Hatas\u0131",
                        _error300: ["T\xfch\u2026bir \u015feyler's ters. L\xfctfen ", d, "yenileyin", " ve tekrar deneyin."],
                        _errorNetwork: ["A\u011f Hatas\u0131. L\xfctfen ", d, "yenileyin", " veya ", _, "geri bildirin"],
                        _infoTEXT: "",
                        _submit: "g\xf6nder",
                        _learning: "yard\u0131m",
                        _closeHelp: "Kapat",
                        _slideToVerify: "Do\u011frulamak i\xe7in kayd\u0131r\u0131n",
                        _notVerified: "Do\u011frulanmam\u0131\u015f",
                        _captcha: "Captcha",
                        _OK: "TAMAM",
                        _sthWrong: "Maalesef, bir \u015feyler ters gitti\u2026",
                        _reload: "Yeniden Y\xfckle",
                        _feedback: "Geri Bildirim"
                    },
                    vi_VN: {
                        _startTEXT: "Vui l\xf2ng tr\u01b0\u1ee3t \u0111\u1ec3 x\xe1c th\u1ef1c",
                        _yesTEXT: "\u0110\xe3 x\xe1c th\u1ef1c",
                        _noTEXT: "Vui l\xf2ng nh\u1eadp m\xe3 s\u1ed1 x\xe1c th\u1ef1c",
                        _errorTEXT: "Vui l\xf2ng th\u1eed l\u1ea1i",
                        _errorClickTEXT: "Vui l\xf2ng th\u1eed l\u1ea1i",
                        _errorLOADING: ["T\u1ea3i kh\xf4ng th\xe0nh c\xf4ng, ", d, "l\xe0m m\u1edbi", " ho\u1eb7c ", _, "g\u1eedi ph\u1ea3n h\u1ed3i"],
                        _errorTooMuch: ["Vui l\xf2ng th\u1eed l\u1ea1i ho\u1eb7c ", _, "g\u1eedi ph\u1ea3n h\u1ed3i"],
                        _errorTooMuchClick: ["Vui l\xf2ng th\u1eed l\u1ea1i ho\u1eb7c ", _, "g\u1eedi ph\u1ea3n h\u1ed3i"],
                        _Loading: "\u0110ang t\u1ea3i",
                        _errorServer: "L\u1ed7i M\xe1y ch\u1ee7",
                        _error300: ["R\u1ea5t ti\u1ebfc... \u0111\xe3 x\u1ea3y ra sai s\xf3t. Vui l\xf2ng ", d, "l\xe0m m\u1edbi", " v\xe0 th\u1eed l\u1ea1i."],
                        _errorNetwork: ["L\u1ed7i m\u1ea1ng. Vui l\xf2ng ", d, "l\xe0m m\u1edbi", ", ho\u1eb7c g\u1eedi ", _, "ph\u1ea3n h\u1ed3i"],
                        _infoTEXT: "",
                        _submit: "g\u1eedi",
                        _learning: "tr\u1ee3 gi\xfap",
                        _closeHelp: "\u0110\xf3ng",
                        _slideToVerify: "tr\u01b0\u1ee3t \u0111\u1ec3 x\xe1c th\u1ef1c",
                        _notVerified: "Ch\u01b0a X\xe1c th\u1ef1c",
                        _captcha: "M\xe3 x\xe1c nh\u1eadn",
                        _OK: "OK",
                        _sthWrong: "R\u1ea5t ti\u1ebfc, \u0111\xe3 x\u1ea3y ra sai s\xf3t...",
                        _reload: "T\u1ea3i l\u1ea1i",
                        _feedback: "Ph\u1ea3n h\u1ed3i"
                    }
                };
            for (l in m) m.hasOwnProperty(l) && i(m[l]);
            m.zh_CN = m.cn, m.zh_TW = m.tw, m.en_US = m.en, m.iw_IL = m.iw_HE, m.pt_PT = m.pt_BR, m.ar_MA = m.ar_SA, t.language = m, t.upLang = a, t.upResetIndex = c
        }, function (e, t, n) {
            "use strict";
            e.exports = function () {
                var e = [];
                return e.toString = function () {
                    for (var e = [], t = 0; t < this.length; t++) {
                        var n = this[t];
                        n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                    }
                    return e.join("")
                }, e.i = function (t, n) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    for (var o = {}, i = 0; i < this.length; i++) {
                        var r = this[i][0];
                        "number" == typeof r && (o[r] = !0)
                    }
                    for (i = 0; i < t.length; i++) {
                        var a = t[i];
                        "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                    }
                }, e
            }
        }, function (e, t, n) {
            "use strict";
            t.names = {
                init: "init",
                ready: "ready",
                actionstart: "actionstart",
                actionend: "actionend",
                beforeverify: "beforeverify",
                afterverify: "afterverify",
                error: "error",
                fail: "fail",
                success: "success",
                switchevent: "switch",
                slide_start: "slide_start",
                slide_end: "slide_end",
                before_code: "before_code",
                after_code: "after_code",
                error300: "error300"
            }, t.deprecated = {
                slide_start: "actionstart",
                slide_end: "actionend",
                before_code: "beforeverify",
                after_code: "afterverify",
                error300: "error"
            }
        }, function (e, t) {
            function n(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n], i = p[o.id];
                    if (i) {
                        i.refs++;
                        for (var r = 0; r < i.parts.length; r++) i.parts[r](o.parts[r]);
                        for (; r < o.parts.length; r++) i.parts.push(s(o.parts[r], t))
                    } else {
                        for (var a = [], r = 0; r < o.parts.length; r++) a.push(s(o.parts[r], t));
                        p[o.id] = {id: o.id, refs: 1, parts: a}
                    }
                }
            }

            function o(e) {
                for (var t = [], n = {}, o = 0; o < e.length; o++) {
                    var i = e[o], r = i[0], a = i[1], c = i[2], s = i[3], l = {css: a, media: c, sourceMap: s};
                    n[r] ? n[r].parts.push(l) : t.push(n[r] = {id: r, parts: [l]})
                }
                return t
            }

            function i(e, t) {
                var n = g(), o = v[v.length - 1];
                if ("top" === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), v.push(t); else {
                    if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                    n.appendChild(t)
                }
            }

            function r(e) {
                e.parentNode.removeChild(e);
                var t = v.indexOf(e);
                t >= 0 && v.splice(t, 1)
            }

            function a(e) {
                var t = document.createElement("style");
                return t.type = "text/css", i(e, t), t
            }

            function c(e) {
                var t = document.createElement("link");
                return t.rel = "stylesheet", i(e, t), t
            }

            function s(e, t) {
                var n, o, i;
                if (t.singleton) {
                    var s = m++;
                    n = h || (h = a(t)), o = l.bind(null, n, s, !1), i = l.bind(null, n, s, !0)
                } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t), o = u.bind(null, n), i = function () {
                    r(n), n.href && URL.revokeObjectURL(n.href)
                }) : (n = a(t), o = d.bind(null, n), i = function () {
                    r(n)
                });
                return o(e), function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        o(e = t)
                    } else i()
                }
            }

            function l(e, t, n, o) {
                var i = n ? "" : o.css;
                if (e.styleSheet) e.styleSheet.cssText = b(t, i); else {
                    var r = document.createTextNode(i), a = e.childNodes;
                    a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
                }
            }

            function d(e, t) {
                var n = t.css, o = t.media;
                if (o && e.setAttribute("media", o), e.styleSheet) e.styleSheet.cssText = n; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }

            function u(e, t) {
                var n = t.css, o = t.sourceMap;
                o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var i = new Blob([n], {type: "text/css"}), r = e.href;
                e.href = URL.createObjectURL(i), r && URL.revokeObjectURL(r)
            }

            var p = {}, _ = function (e) {
                var t;
                return function () {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            }, f = _(function () {
                return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
            }), g = _(function () {
                return document.head || document.getElementsByTagName("head")[0]
            }), h = null, m = 0, v = [];
            e.exports = function (e, t) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                t = t || {}, "undefined" == typeof t.singleton && (t.singleton = f()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
                var i = o(e);
                return n(i, t), function (e) {
                    for (var r = [], a = 0; a < i.length; a++) {
                        var c = i[a], s = p[c.id];
                        s.refs--, r.push(s)
                    }
                    if (e) {
                        var l = o(e);
                        n(l, t)
                    }
                    for (var a = 0; a < r.length; a++) {
                        var s = r[a];
                        if (0 === s.refs) {
                            for (var d = 0; d < s.parts.length; d++) s.parts[d]();
                            delete p[s.id]
                        }
                    }
                }
            };
            var b = function () {
                var e = [];
                return function (t, n) {
                    return e[t] = n, e.filter(Boolean).join("\n")
                }
            }()
        }, , , function (e, t, n) {
            "use strict";
            !function () {
                var n = {
                    VERSION: "2.4.0",
                    Result: {SUCCEEDED: 1, NOTRANSITION: 2, CANCELLED: 3, PENDING: 4},
                    Error: {INVALID_TRANSITION: 100, PENDING_TRANSITION: 200, INVALID_CALLBACK: 300},
                    WILDCARD: "*",
                    ASYNC: "async",
                    create: function (e, t) {
                        var o = "string" == typeof e.initial ? {state: e.initial} : e.initial,
                            i = e.terminal || e["final"], r = t || e.target || {}, a = e.events || [],
                            c = e.callbacks || {}, s = {}, l = {}, d = function (e) {
                                var t = Array.isArray(e.from) ? e.from : e.from ? [e.from] : [n.WILDCARD];
                                s[e.name] = s[e.name] || {};
                                for (var o = 0; o < t.length; o++) l[t[o]] = l[t[o]] || [], l[t[o]].push(e.name), s[e.name][t[o]] = e.to || t[o];
                                e.to && (l[e.to] = l[e.to] || [])
                            };
                        o && (o.event = o.event || "startup", d({name: o.event, from: "none", to: o.state}));
                        for (var u = 0; u < a.length; u++) d(a[u]);
                        for (var p in s) s.hasOwnProperty(p) && (r[p] = n.buildEvent(p, s[p]));
                        for (var p in c) c.hasOwnProperty(p) && (r[p] = c[p]);
                        return r.current = "none", r.is = function (e) {
                            return Array.isArray(e) ? e.indexOf(this.current) >= 0 : this.current === e
                        }, r.can = function (e) {
                            return !this.transition && void 0 !== s[e] && (s[e].hasOwnProperty(this.current) || s[e].hasOwnProperty(n.WILDCARD))
                        }, r.cannot = function (e) {
                            return !this.can(e)
                        }, r.transitions = function () {
                            return (l[this.current] || []).concat(l[n.WILDCARD] || [])
                        }, r.isFinished = function () {
                            return this.is(i)
                        }, r.error = e.error || function (e, t, n, o, i, r, a) {
                            throw a || r
                        }, r.states = function () {
                            return Object.keys(l).sort()
                        }, o && !o.defer && r[o.event](), r
                    },
                    doCallback: function (e, t, o, i, r, a) {
                        if (t) try {
                            return t.apply(e, [o, i, r].concat(a))
                        } catch (c) {
                            return e.error(o, i, r, a, n.Error.INVALID_CALLBACK, "an exception occurred in a caller-provided callback function", c)
                        }
                    },
                    beforeAnyEvent: function (e, t, o, i, r) {
                        return n.doCallback(e, e.onbeforeevent, t, o, i, r)
                    },
                    afterAnyEvent: function (e, t, o, i, r) {
                        return n.doCallback(e, e.onafterevent || e.onevent, t, o, i, r)
                    },
                    leaveAnyState: function (e, t, o, i, r) {
                        return n.doCallback(e, e.onleavestate, t, o, i, r)
                    },
                    enterAnyState: function (e, t, o, i, r) {
                        return n.doCallback(e, e.onenterstate || e.onstate, t, o, i, r)
                    },
                    changeState: function (e, t, o, i, r) {
                        return n.doCallback(e, e.onchangestate, t, o, i, r)
                    },
                    beforeThisEvent: function (e, t, o, i, r) {
                        return n.doCallback(e, e["onbefore" + t], t, o, i, r)
                    },
                    afterThisEvent: function (e, t, o, i, r) {
                        return n.doCallback(e, e["onafter" + t] || e["on" + t], t, o, i, r)
                    },
                    leaveThisState: function (e, t, o, i, r) {
                        return n.doCallback(e, e["onleave" + o], t, o, i, r)
                    },
                    enterThisState: function (e, t, o, i, r) {
                        return n.doCallback(e, e["onenter" + i] || e["on" + i], t, o, i, r)
                    },
                    beforeEvent: function (e, t, o, i, r) {
                        if (!1 === n.beforeThisEvent(e, t, o, i, r) || !1 === n.beforeAnyEvent(e, t, o, i, r)) return !1
                    },
                    afterEvent: function (e, t, o, i, r) {
                        n.afterThisEvent(e, t, o, i, r), n.afterAnyEvent(e, t, o, i, r)
                    },
                    leaveState: function (e, t, o, i, r) {
                        var a = n.leaveThisState(e, t, o, i, r), c = n.leaveAnyState(e, t, o, i, r);
                        return !1 !== a && !1 !== c && (n.ASYNC === a || n.ASYNC === c ? n.ASYNC : void 0)
                    },
                    enterState: function (e, t, o, i, r) {
                        n.enterThisState(e, t, o, i, r), n.enterAnyState(e, t, o, i, r)
                    },
                    buildEvent: function (e, t) {
                        return function () {
                            var o = this.current, i = t[o] || (t[n.WILDCARD] != n.WILDCARD ? t[n.WILDCARD] : o) || o,
                                r = Array.prototype.slice.call(arguments);
                            if (this.transition) return this.error(e, o, i, r, n.Error.PENDING_TRANSITION, "event " + e + " inappropriate because previous transition did not complete");
                            if (this.cannot(e)) return this.error(e, o, i, r, n.Error.INVALID_TRANSITION, "event " + e + " inappropriate in current state " + this.current);
                            if (!1 === n.beforeEvent(this, e, o, i, r)) return n.Result.CANCELLED;
                            if (o === i) return n.afterEvent(this, e, o, i, r), n.Result.NOTRANSITION;
                            var a = this;
                            this.transition = function () {
                                return a.transition = null, a.current = i, n.enterState(a, e, o, i, r), n.changeState(a, e, o, i, r), n.afterEvent(a, e, o, i, r), n.Result.SUCCEEDED
                            }, this.transition.cancel = function () {
                                a.transition = null, n.afterEvent(a, e, o, i, r)
                            };
                            var c = n.leaveState(this, e, o, i, r);
                            return !1 === c ? (this.transition = null, n.Result.CANCELLED) : n.ASYNC === c ? n.Result.PENDING : this.transition ? this.transition() : void 0
                        }
                    }
                };
                "undefined" != typeof e && e.exports && (t = e.exports = n), t.StateMachine = n
            }()
        }, , , , function (e, t, n) {
            "use strict";
            t.fail = function (e) {
                throw new Error("NC Fail: " + e)
            }
        }, function (e, t, n) {
            "use strict";
            e.exports = function () {
                var e = navigator.userAgent;
                return /Windows/.test(e) ? "win" : /Macintosh/.test(e) ? "mac" : /Android/.test(e) ? "Android" : /(iPhone|iPad)/.test(e) ? "iOS" : /Linux/.test(e) ? "linux" : "unknow"
            }
        }, function (e, t, n) {
            "use strict";

            function o(e, t) {
                if ("string" == typeof t && t.indexOf(".") !== -1) {
                    var n = t.split("."), i = n[0], r = n.slice(1).join(".");
                    return e.hasOwnProperty(i) ? o(e[i], r) : ""
                }
                return e.hasOwnProperty(t) ? e[t] : ""
            }

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e.replace(/\{\{([\w\.]+)\}\}/g, function (e, n) {
                    return o(t, n)
                })
            }

            t.render = i
        }, function (e, t, n) {
            "use strict";

            function o(e) {
                var t, n = "", o = f.getElementById("umFlash");
                if (o && !n) try {
                    t = o.getCookie(e) || "", n = t
                } catch (i) {
                }
                try {
                    _.localStorage && !n && (t = localStorage[e] || "", n = t)
                } catch (i) {
                }
                if (_.navigator.cookieEnabled && !n) {
                    var r = f.cookie.indexOf(e + "=");
                    if (r != -1) {
                        r += e.length + 1;
                        var a = f.cookie.indexOf(";", r);
                        a == -1 && (a = f.cookie.length), t = decodeURIComponent(f.cookie.substring(r, a)) || "", n = t
                    }
                }
                return n
            }

            function i(e, t, n) {
                n = n || 7;
                var o = new Date;
                o.setTime(o.getTime() + 864e5 * n), f.cookie = [encodeURIComponent(e), "=", encodeURIComponent("" + t), ";expires=", o.toGMTString()].join("")
            }

            function r() {
                var e, t = /Firefox/.test(navigator.userAgent);
                if (t) try {
                    e = localStorage.getItem(g)
                } catch (n) {
                }
                return e = e || o(g), e || (e = h + a(11), i(g, e, 3650)), e
            }

            function a(e) {
                for (var t = ""; t.length < e;) t += Math.random().toString().substr(2);
                return t.substring(t.length - e)
            }

            function c() {
                var e = _._sec_module = _._sec_module || {};
                if (d = e.token) return d;
                var t = r();
                return d = t + h + a(3), e.token = d, d
            }

            function s() {
                if (u) return u;
                var e = "_umdata";
                try {
                    _.localStorage && (u = localStorage.getItem(e))
                } catch (t) {
                }
                return u ? u : (u = o(e), u || "")
            }

            function l() {
                return p ? p : p = s() || c()
            }

            var d, u, p, _ = window, f = document, g = "_uab_collina",
                h = _.pointman && pointman._now ? pointman._now : (new Date).getTime();
            t.getSecToken = c, t.getNCToken = l
        }, function (e, t, n) {
            "use strict";

            function o(e, t) {
                this.id = function (e) {
                    return 0 === e.indexOf("#") ? a.getElementById(e.slice(1)) : a.getElementById(e)
                }, this.tag = function (e) {
                    var t = e.split(" ");
                    return this.id(t[0]).getElementsByTagName(t[1])
                }, this.toggle = function (e) {
                    var t = this.id(e);
                    "none" == t.style.display || "" === t.style.display ? t.style.display = "block" : t.style.display = "none"
                }, this.clone = function (e) {
                    var t, n, o = e;
                    if (e && ((n = e instanceof Array) || e instanceof Object)) {
                        o = n ? [] : {};
                        for (t in e) e.hasOwnProperty(t) && (o[t] = this.clone(e[t]))
                    }
                    return o
                }, this.extend = function (e, t, n) {
                    var o, i;
                    if (t instanceof Array) for (o = 0, i = t.length; o < i; o++) this.extend(e, t[o], n);
                    for (o in t) o in e && t.hasOwnProperty(o) && (e[o] = t[o]);
                    return e
                }, this.objUpdate = function (e, t) {
                    var n;
                    for (n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }, this.loadjs = function (e, t, n) {
                    function o() {
                        clearTimeout(l), s || (s = !0, t())
                    }

                    var i = a.createElement("script");
                    i.type = "text/javascript";
                    var r = n || "";
                    c.getElementsByClassName(r), i.className = r;
                    var s;
                    i.onreadystatechange = function () {
                        "loaded" != i.readyState && "complete" != i.readyState || (i.onreadystatechange = null, o())
                    }, i.onload = o, i.src = e;
                    var l = setTimeout(function () {
                        i.onerror("timeout")
                    }, 2e4);
                    i.onerror = function (e) {
                        clearTimeout(l), t(e), i.onload = null
                    };
                    var d = a.getElementsByTagName("script")[0];
                    d.parentNode.insertBefore(i, d)
                }, this.jsonp = function (n) {
                    var o = 0;
                    n.timeout = e.timeout || 3e3, n.times = e.times || 3;
                    var i;
                    if (n = n || {}, !n.url || !n.callback) throw new Error("\u53c2\u6570\u4e0d\u5408\u6cd5");
                    var c = ("jsonp_" + Math.random()).replace(".", ""), s = a.getElementsByTagName("script")[0],
                        l = "";
                    n.data ? (n.data[n.callback] = c, l += t(n.data)) : l += n.callback + "=" + c;
                    var d = a.createElement("script");
                    s.parentNode.insertBefore(d, s), r[c] = function (e) {
                        r[c] = function () {
                            report("\u56de\u8c03\u5df2\u6267\u884c\u8fc7,\u4e0d\u518d\u6267\u884c"), r[c] = null
                        };
                        try {
                            d.parentNode && d.parentNode.removeChild(d)
                        } catch (t) {
                        }
                        clearInterval(i), n.success && n.success(e)
                    }, d.src = n.url + (n.url.indexOf("?") == -1 ? "?" : "&") + l, n.timeout && (i = setInterval(function () {
                        o++;
                        var e;
                        if (o >= n.times) {
                            r[c] = function () {
                            }, clearInterval(i);
                            try {
                                d.parentNode && d.parentNode.removeChild(d)
                            } catch (t) {
                            }
                            n.fail(1)
                        } else try {
                            d.parentNode && d.parentNode.removeChild(d), d = a.createElement("script"), e = a.getElementsByTagName("script")[0], e.parentNode.insertBefore(d, e), d.src = n.url + (n.url.indexOf("?") == -1 ? "?" : "&") + l + "&t=" + Math.random()
                        } catch (t) {
                        }
                    }, n.timeout))
                }, this.obj2str = function n(e) {
                    var t, o = [], r = n;
                    if ("string" == typeof e) return '"' + e.replace(/(['"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + '"';
                    if ("undefined" == typeof e) return "undefined";
                    if ("object" == ("undefined" == typeof e ? "undefined" : i(e))) {
                        if (null === e) return "null";
                        if (e.sort) {
                            for (t = 0; t < e.length; t++) o.push(r(e[t]));
                            o = "[" + o.join() + "]"
                        } else {
                            for (t in e) e.hasOwnProperty(t) && o.push('"' + t + '":' + r(e[t]));
                            o = "{" + o.join() + "}"
                        }
                        return o
                    }
                    return e.toString()
                }, this.addHandler = function (e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                }, this.removeEvt = function (e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                }
            }

            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, r = window, a = document, c = n(2);
            t.BaseFun = o
        }, function (e, t, n) {
            "use strict";
            var o = n(20), i = {
                renderTo: "",
                isEnabled: !0,
                foreign: 0,
                cssUrl: !1,
                uaUrl: "",
                appkey: "",
                trans: {},
                token: o.getNCToken(),
                elementID: "",
                audio: !1,
                timeout: 3e3,
                times: 3,
                is_Opt: 0,
                language: "cn",
                umidServer: "h",
                scene: "",
                is_tbLogin: 0,
                tb_errMsg: "",
                glog: .05,
                apimap: {},
                callback: function () {
                },
                error: function () {
                },
                verifycallback: function () {
                }
            };
            t.default_opt = i
        }, function (e, t, n) {
            "use strict";
            var o = "//cf.aliyun.com";
            e.exports = {
                min_width: 300,
                min_height: 100,
                default_stroke_width: 16,
                min_events_count: 30,
                max_retry: 3,
                api_prepare: o + "/scratchCardSlide/prepare.jsonp",
                api_report: o + "/scratchCardSlide/dataReport.jsonp",
                api_analyze: o + "/scratchCardSlide/analyze.jsonp",
                obj_ok: "//img.alicdn.com/tfs/TB1OLQ7SFXXXXaoapXXXXXXXXXX-57-70.png",
                obj_fail: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                obj_size: 70,
                bg_back: "//img.alicdn.com/tps/TB1ml9hPFXXXXcjXFXXXXXXXXXX-100-80.png",
                bg_front: "//img.alicdn.com/tps/TB1531mPFXXXXc_XpXXXXXXXXXX-100-80.png",
                err_TIMEOUT_uab: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                err_TIMEOUT_um: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                err_fail_prepare: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                err_fail_analyze: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                grid_size: 8,
                action_timeout: 6e4,
                default_options: {
                    language: "cn",
                    objects: ["//img.alicdn.com/tfs/TB1NYk7SFXXXXcWaXXXXXXXXXXX-57-69.png", "//img.alicdn.com/tfs/TB12q8sSVXXXXcSXFXXXXXXXXXX-57-67.png"],
                    elements: ["//img.alicdn.com/tfs/TB1NYk7SFXXXXcWaXXXXXXXXXXX-57-69.png", "//img.alicdn.com/tfs/TB12q8sSVXXXXcSXFXXXXXXXXXX-57-67.png"],
                    obj_ok: "//img.alicdn.com/tfs/TB1OLQ7SFXXXXaoapXXXXXXXXXX-57-70.png",
                    obj_fail: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                    obj_error: "//img.alicdn.com/tfs/TB1N4lDSVXXXXcFXpXXXXXXXXXX-57-66.png",
                    bg_front: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefk5w+ruswAAAAfSURBVFjD7cExAQAAAMKg9U9tCU+gAAAAAAAAAIC3AR+QAAFPlUGoAAAAAElFTkSuQmCC",
                    bg_back_prepared: "//img.alicdn.com/tps/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png",
                    bg_back: "//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png",
                    bg_back_fail: "//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png",
                    bg_back_pass: "//img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png"
                }
            }
        }, function (e, t, n) {
            "use strict";

            function o(e, t) {
                var n, o, r = t ? {} : e;
                for (n in e) e.hasOwnProperty(n) && (o = e[n], "string" == typeof o && (o = [o]), r[n] = '<span class="nc-lang-cnt" data-nc-lang="' + n + '">' + i(p[n], o) + "</span>");
                return r
            }

            function i(e, t) {
                return (e + "").replace(/\\?\{\s*([^{}\s]+)\s*\}/g, function (e, n) {
                    return "\\" === e.charAt(0) ? e.slice(1) : t[n] || ""
                })
            }

            function r(e, t) {
                var n, i = _[e] = _[e] || {};
                t = o(t, !0);
                for (n in t) t.hasOwnProperty(n) && (i[n] = t[n])
            }

            function a(e, t) {
                var n, i = {}, r = _[e] = _[e] || {};
                for (n in r) r.hasOwnProperty(n) && (i[n] = r[n]);
                t = o(t, !0);
                for (n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
                return i
            }

            function c(e, t) {
                return e.replace(/(javascript:noCaptcha.reset\()(\))/gi, "$1" + t + "$2")
            }

            var s, l = "javascript:noCaptcha.reset()",
                d = "https://survey.taobao.com/survey/AMnMVgrS4?type=%TYPE&str=%STR", u = "{0}", p = {
                    _ggk_guide: "{0}",
                    _ggk_start: u,
                    _ggk_net_err: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _ggk_too_fast: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _ggk_action_timeout: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _ggk_fail: '{0}<a href="{1}">{2}</a>{3}<a target="_blank" href="{4}">{5}</a>',
                    _ggk_success: u,
                    _ggk_loading: "{0}"
                }, _ = {
                    cn: {
                        _ggk_guide: "\u8bf7\u6441\u4f4f\u9f20\u6807\u5de6\u952e\uff0c\u522e\u51fa\u4e24\u53ea\u5c0f\u9e21",
                        _ggk_start: "",
                        _ggk_net_err: ["\u7f51\u7edc\u5b9e\u5728\u4e0d\u7ed9\u529b<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u9988\u95ee\u9898"],
                        _ggk_too_fast: ["\u60a8\u522e\u5f97\u592a\u5feb\u5566<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u9988\u95ee\u9898"],
                        _ggk_action_timeout: ["\u6211\u7b49\u5f97\u592a\u4e45\u5566<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u9988\u95ee\u9898"],
                        _ggk_fail: ["\u5440\uff0c\u5c0f\u9e21\u9003\u8dd1\u4e86<br/>\u8bf7", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u9988\u95ee\u9898"],
                        _ggk_success: "\u606d\u559c\u60a8\u6210\u529f\u522e\u51fa\u5c0f\u9e21\uff0c\u7ee7\u7eed\u4e0b\u4e00\u6b65\u64cd\u4f5c\u5427",
                        _ggk_loading: "\u52a0\u8f7d\u4e2d"
                    },
                    tw: {
                        _ggk_guide: "\u8acb\u6309\u4f4f\u6ed1\u9f20\u5de6\u9375\uff0c\u522e\u51fa\u5169\u96bb\u5c0f\u96de",
                        _ggk_start: "",
                        _ggk_net_err: ["\u7db2\u8def\u5be6\u5728\u4e0d\u7d66\u529b<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u6620\u554f\u984c"],
                        _ggk_too_fast: ["\u60a8\u522e\u5f97\u592a\u5feb\u5566<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u6620\u554f\u984c"],
                        _ggk_action_timeout: ["\u6211\u7b49\u5f97\u592a\u4e45\u5566<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u6620\u554f\u984c"],
                        _ggk_fail: ["\u5440\uff0c\u5c0f\u96de\u9003\u8dd1\u4e86<br/>\u8acb", l, "\u518d\u6765\u4e00\u6b21", "\u6216", d, "\u53cd\u6620\u554f\u984c"],
                        _ggk_success: "\u606d\u559c\u60a8\u6210\u529f\u522e\u51fa\u5c0f\u96de\uff0c\u7e7c\u7e8c\u4e0b\u4e00\u6b65\u64cd\u4f5c\u5427",
                        _ggk_loading: "\u52a0\u8f09\u4e2d"
                    },
                    en: {
                        _ggk_guide: "Hold your left mouse button down to scratch out two chickens",
                        _ggk_start: "",
                        _ggk_net_err: ["Problem with the network<br/>Please ", l, "try again ", "or", d, " report your problem"],
                        _ggk_too_fast: ["You were being too fast<br/>Please ", l, "try again ", "or", d, " report your problem"],
                        _ggk_action_timeout: ["You've been idled for too long<br/>Please ", l, "try again ", "or", d, " report your problem"],
                        _ggk_fail: ["Oops, the chickens ran away<br/>Please ", l, "try again ", "or", d, " report your problem"],
                        _ggk_success: "Congratulations! You've got the chickens!",
                        _ggk_loading: "Loading"
                    },
                    es_ES: {
                        _ggk_guide: "Mant\xe9n pulsado el bot\xf3n izquierdo del rat\xf3n para rascar dos pollos",
                        _ggk_start: "",
                        _ggk_net_err: ["Hay problemas con la red.", l, "Vuelve a intentarlo ", "o", d, " informa del problema"],
                        _ggk_too_fast: ["\xa1Has sido demasiado r\xe1pido.", l, "Vuelve a intentarlo ", "o", d, " informa del problema"],
                        _ggk_action_timeout: ["Se ha acabado el tiempo.", l, "Vuelve a intentarlo ", "o", d, " informa del problema"],
                        _ggk_fail: ["\xa1Vaya! Los pollos han huido.", l, "Vuelve a intentarlo ", "o", d, " informa del problema"],
                        _ggk_loading: "Cargando",
                        _ggk_success: "\xa1Enhorabuena! \xa1Has atrapado los pollos!"
                    },
                    pl_PL: {
                        _ggk_guide: "Przytrzymaj lewy przycisk myszy, aby zdoby\u0107 dwa kurczaki",
                        _ggk_start: "",
                        _ggk_net_err: ["Problem z sieci\u0105.", l, "Spr\xf3buj ponownie ", "lub", d, " zg\u0142o\u015b sw\xf3j problem"],
                        _ggk_too_fast: ["Za szybko.", l, "Spr\xf3buj ponownie ", "lub", d, " zg\u0142o\u015b sw\xf3j problem"],
                        _ggk_action_timeout: ["Bezczynno\u015b\u0107 trwa\u0142a zbyt d\u0142ugo.", l, "Spr\xf3buj ponownie ", "lub", d, " zg\u0142o\u015b sw\xf3j problem"],
                        _ggk_fail: ["Ups, kurczaki uciek\u0142y.", l, "Spr\xf3buj ponownie ", "lub", d, " zg\u0142o\u015b sw\xf3j problem"],
                        _ggk_loading: "\u0141aduj\u0119",
                        _ggk_success: "Gratulacje! Uda\u0142o Ci si\u0119 zdoby\u0107 kurczaki!"
                    },
                    fr_FR: {
                        _ggk_guide: "Maintenez appuy\xe9 le bouton gauche de la souris pour gratter deux poulets",
                        _ggk_start: "",
                        _ggk_net_err: ["Probl\xe8me de r\xe9seau.", l, "Veuillez r\xe9essayer ", "ou", d, " signaler votre probl\xe8me"],
                        _ggk_too_fast: ["Vous avez \xe9t\xe9 trop rapide.", l, "Veuillez r\xe9essayer ", "ou", d, " signaler votre probl\xe8me"],
                        _ggk_action_timeout: ["D\xe9lai d'attente d\xe9pass\xe9.", l, "Veuillez r\xe9essayer ", "ou", d, " signaler votre probl\xe8me"],
                        _ggk_fail: ["Oups, les poulets se sont enfuit.", l, "Veuillez r\xe9essayer ", "ou", d, " signaler votre probl\xe8me"],
                        _ggk_loading: "Chargement",
                        _ggk_success: "Bravo\xa0! Les poulets sont \xe0 vous'!"
                    },
                    de_DE: {
                        _ggk_guide: "Halten Sie die linke Maustaste gedr\xfcckt, um zwei H\xfchner zu kratzen",
                        _ggk_start: "",
                        _ggk_net_err: ["Netzwerkproblem. Bitte.", l, "versuchen Sie es erneut ", "oder", d, " melden Sie ein Problem"],
                        _ggk_too_fast: ["Zu schnell. Bitte.", l, "versuchen Sie es erneut ", "oder", d, " melden Sie ein Problem"],
                        _ggk_action_timeout: ["Zeit\xfcberschreitung, bitte.", l, "versuchen Sie es erneut ", "oder", d, " melden Sie ein Problem"],
                        _ggk_fail: ["Hoppla, die H\xfchner sind davongelaufen.", l, "versuchen Sie es erneut ", "oder", d, " melden Sie ein Problem"],
                        _ggk_loading: "Lade",
                        _ggk_success: "Gl\xfcckwunsch! Sie haben die H\xfchner erwischt!"
                    },
                    it_IT: {
                        _ggk_guide: "Tieni premuto il tasto sinistro del mouse per grattare due polli",
                        _ggk_start: "",
                        _ggk_net_err: ["Problemi con la rete.", l, "Riprova ", "o", d, " segnala il problema"],
                        _ggk_too_fast: ["Sei stato troppo veloce.", l, "Riprova ", "o", d, " segnala il problema"],
                        _ggk_action_timeout: ["Tempo scaduto.", l, "Riprova ", "o", d, " segnala il problema"],
                        _ggk_fail: ["Ops... i polli sono scappati.", l, "Riprova ", "o", d, " segnala il problema"],
                        _ggk_loading: "Sto caricando",
                        _ggk_success: "Complimenti! Hai preso i polli!"
                    },
                    ru_RU: {
                        _ggk_guide: "\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043d\u0430\u0436\u0430\u0442\u043e\u0439 \u043b\u0435\u0432\u0443\u044e \u043a\u043d\u043e\u043f\u043a\u0443 \u043c\u044b\u0448\u0438, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0446\u0430\u0440\u0430\u043f\u0430\u0442\u044c \u0434\u0432\u0443\u0445 \u0446\u044b\u043f\u043b\u044f\u0442",
                        _ggk_start: "",
                        _ggk_net_err: ["\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441 \u0441\u0435\u0442\u044c\u044e.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", d, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                        _ggk_too_fast: ["\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u044b\u0441\u0442\u0440\u043e.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", d, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                        _ggk_action_timeout: ["\u0412\u0440\u0435\u043c\u044f \u0438\u0441\u0442\u0435\u043a\u043b\u043e.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", d, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                        _ggk_fail: ["\u041e\u0439, \u0446\u044b\u043f\u043b\u044f\u0442\u0430 \u0443\u0431\u0435\u0436\u0430\u043b\u0438.", l, "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 ", "\u0438\u043b\u0438", d, " \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"],
                        _ggk_loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",
                        _ggk_success: "\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c! \u0412\u044b \u043f\u043e\u0439\u043c\u0430\u043b\u0438 \u0446\u044b\u043f\u043b\u044f\u0442!"
                    },
                    ja_JP: {
                        _ggk_guide: "\u30de\u30a6\u30b9\u306e\u5de6\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u30662\u5339\u306e\u30cb\u30ef\u30c8\u30ea\u3092\u6d88\u3057\u307e\u3059",
                        _ggk_start: "",
                        _ggk_net_err: ["\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", d, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                        _ggk_too_fast: ["\u901f\u3059\u304e\u307e\u3059.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", d, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                        _ggk_action_timeout: ["\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", d, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                        _ggk_fail: ["\u304a\u3063\u3068\u3001\u30cb\u30ef\u30c8\u30ea\u304c\u9003\u3052\u3066\u3057\u307e\u3044\u307e\u3057\u305f.", l, "\u518d\u8a66\u884c ", "\u3059\u308b\u304b", d, " \u554f\u984c\u3092\u5831\u544a\u3057\u3066\u304f\u3060\u3055\u3044"],
                        _ggk_loading: "\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059",
                        _ggk_success: "\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01\u30cb\u30ef\u30c8\u30ea\u3092\u6355\u307e\u3048\u3089\u308c\u307e\u3057\u305f!"
                    },
                    ko_KR: {
                        _ggk_guide: "\uc67c\ucabd \ub9c8\uc6b0\uc2a4 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ub2ed \ub450 \ub9c8\ub9ac\ub97c \uc9c0\uc6b0\uc138\uc694",
                        _ggk_start: "",
                        _ggk_net_err: ["\ub124\ud2b8\uc6cc\ud06c\uc5d0 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4\u3059.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", d, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                        _ggk_too_fast: ["\ub108\ubb34 \ube60\ub985\ub2c8\ub2e4.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", d, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                        _ggk_action_timeout: ["\uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", d, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                        _ggk_fail: ["\uc774\ub7f0, \ub2ed\uc774 \ub2ec\uc544\ub0ac\uc2b5\ub2c8\ub2e4.", l, "\ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc ", "\uac70\ub098", d, " \ubb38\uc81c\ub97c \ubcf4\uace0\ud574 \uc8fc\uc138\uc694"],
                        _ggk_loading: "\ub85c\ub529",
                        _ggk_success: "\ucd95\ud558\ud569\ub2c8\ub2e4! \ub2ed\uc744 \uc7a1\uc73c\uc168\uad70\uc694!"
                    },
                    ar_SA: {
                        _ggk_guide: "\u0627\u0633\u062a\u0645\u0631 \u0641\u064a \u0627\u0644\u0636\u063a\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u0645\u0627\u0648\u0633 \u0627\u0644\u0623\u064a\u0633\u0631 \u0644\u062d\u0630\u0641 \u062f\u062c\u0627\u062c\u062a\u064a\u0646",
                        _ggk_start: "",
                        _ggk_net_err: ["\u062a\u0648\u062c\u062f \u0645\u0634\u0643\u0644\u0629 \u0628\u0627\u0644\u0634\u0628\u0643\u0629. \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", d, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                        _ggk_too_fast: ["\u0643\u0646\u062a \u0633\u0631\u064a\u0639\u064b\u0627 \u062c\u062f\u064b\u0627. \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", d, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                        _ggk_action_timeout: ["\u0627\u0646\u062a\u0647\u062a \u0627\u0644\u0645\u0647\u0644\u0629\u060c \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", d, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                        _ggk_fail: ["\u0639\u0630\u0631\u064b\u0627\u060c \u0644\u0642\u062f \u0647\u0631\u0628\u062a \u0627\u0644\u062f\u062c\u0627\u062c\u0627\u062a. \u064a\u064f\u0631\u062c\u0649.", l, "\u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649 ", "\u0623\u0648", d, " \u0627\u0644\u0625\u0628\u0644\u0627\u063a \u0639\u0646 \u0627\u0644\u0645\u0634\u0643\u0644\u0629"],
                        _ggk_loading: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644",
                        _ggk_success: "\u062a\u0647\u0627\u0646\u064a\u0646\u0627! \u0644\u0642\u062f \u062d\u0635\u0644\u062a \u0639\u0644\u0649 \u0627\u0644\u062f\u062c\u0627\u062c\u062a\u064a\u0646!"
                    },
                    tr_TR: {
                        _ggk_guide: "2 adet tavu\u011fun \xfcst\xfcn\xfc \xe7izmek i\xe7in farenin sol tu\u015funu bas\u0131l\u0131 tutun",
                        _ggk_start: "",
                        _ggk_net_err: ["A\u011fla ilgili bir sorun. L\xfctfen.", l, "tekrar deneyin ", "veya", d, " sorununuzu bildirin"],
                        _ggk_too_fast: ["Fazla h\u0131zl\u0131yd\u0131n\u0131z. L\xfctfen.", l, "tekrar deneyin ", "veya", d, " sorununuzu bildirin"],
                        _ggk_action_timeout: ["S\xfcre doldu, l\xfctfen.", l, "tekrar deneyin ", "veya", d, " sorununuzu bildirin"],
                        _ggk_fail: ["T\xfch, tavuklar ka\xe7t\u0131. L\xfctfen.", l, "tekrar deneyin ", "veya", d, " sorununuzu bildirin"],
                        _ggk_loading: "Y\xfckleniyor",
                        _ggk_success: "Tebrikler! Tavuklar\u0131 ald\u0131n\u0131z!"
                    },
                    th_TH: {
                        _ggk_guide: "\u0e01\u0e14\u0e1b\u0e38\u0e21\u0e40\u0e21\u0e32\u0e2a\u0e4c\u0e14\u0e49\u0e32\u0e19\u0e0b\u0e49\u0e32\u0e22\u0e04\u0e49\u0e32\u0e07\u0e44\u0e27\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e02\u0e39\u0e14\u0e40\u0e2d\u0e32\u0e44\u0e01\u0e48\u0e2a\u0e2d\u0e07\u0e15\u0e31\u0e27",
                        _ggk_start: "",
                        _ggk_net_err: ["\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e01\u0e31\u0e1a\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", d, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                        _ggk_too_fast: ["\u0e04\u0e38\u0e13\u0e17\u0e33\u0e40\u0e23\u0e47\u0e27\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", d, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                        _ggk_action_timeout: ["\u0e2b\u0e21\u0e14\u0e40\u0e27\u0e25\u0e32.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", d, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                        _ggk_fail: ["\u0e2d\u0e38\u0e4a\u0e1b\u0e2a\u0e4c \u0e44\u0e01\u0e48\u0e27\u0e34\u0e48\u0e07\u0e2b\u0e19\u0e35\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27.", l, "\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ", "\u0e2b\u0e23\u0e37\u0e2d", d, " \u0e23\u0e32\u0e22\u0e07\u0e32\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13"],
                        _ggk_loading: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14",
                        _ggk_success: "\u0e02\u0e2d\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e27\u0e32\u0e21\u0e22\u0e34\u0e19\u0e14\u0e35! \u0e04\u0e38\u0e13\u0e08\u0e31\u0e1a\u0e44\u0e01\u0e48\u0e44\u0e14\u0e49!"
                    },
                    vi_VN: {
                        _ggk_guide: "Nh\u1ea5n gi\u1eef n\xfat chu\u1ed9t tr\xe1i \u0111\u1ec3 c\xe0o ra hai con g\xe0",
                        _ggk_start: "",
                        _ggk_net_err: ["M\u1ea1ng g\u1eb7p s\u1ef1 c\u1ed1.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", d, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                        _ggk_too_fast: ["B\u1ea1n \u0111\xe3 qu\xe1 nhanh.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", d, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                        _ggk_action_timeout: ["H\u1ebft gi\u1edd.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", d, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                        _ggk_fail: ["R\u1ea5t ti\u1ebfc, l\u0169 g\xe0 \u0111\xe3 ch\u1ea1y \u0111i r\u1ed3i.", l, "Vui l\xf2ng th\u1eed l\u1ea1i ", "ho\u1eb7c", d, " b\xe1o c\xe1o s\u1ef1 c\u1ed1 c\u1ee7a b\u1ea1n"],
                        _ggk_loading: "\u0110ang t\u1ea3i",
                        _ggk_success: "Xin ch\xfac m\u1eebng! B\u1ea1n \u0111\xe3 b\u1eaft \u0111\u01b0\u1ee3c g\xe0!"
                    },
                    nl_NL: {
                        _ggk_guide: "Houd de linkermuisknop ingedrukt om twee kippen weg te strepen",
                        _ggk_start: "",
                        _ggk_net_err: ["Probleem met het netwerk.", l, "Probeer het opnieuw ", "of", d, " rapporteer uw probleem"],
                        _ggk_too_fast: ["U was te snel.", l, "Probeer het opnieuw ", "of", d, " rapporteer uw probleem"],
                        _ggk_action_timeout: ["Time-out.", l, "Probeer het opnieuw ", "of", d, " rapporteer uw probleem"],
                        _ggk_fail: ["Oeps, de kippen zijn weggerend.", l, "Probeer het opnieuw ", "of", d, " rapporteer uw probleem"],
                        _ggk_loading: "Laden",
                        _ggk_success: "Gefeliciteerd! U hebt de kippen!"
                    },
                    iw_HE: {
                        _ggk_guide: "\u05d4\u05d7\u05d6\u05e7 \u05d0\u05ea \u05dc\u05d7\u05e6\u05df \u05d4\u05e2\u05db\u05d1\u05e8 \u05d4\u05e9\u05de\u05d0\u05dc\u05d9 \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05d2\u05e8\u05d3 \u05d5\u05dc\u05d7\u05e9\u05d5\u05e3 \u05e9\u05ea\u05d9 \u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05d5\u05ea",
                        _ggk_start: "",
                        _ggk_net_err: ["\u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", d, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                        _ggk_too_fast: ["\u05d4\u05d9\u05d9\u05ea \u05de\u05d4\u05d9\u05e8 \u05de\u05d3\u05d9.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", d, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                        _ggk_action_timeout: ["\u05d4\u05d6\u05de\u05df \u05ea\u05dd.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", d, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                        _ggk_fail: ["\u05d0\u05d5\u05e4\u05e1, \u05d4\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05d5\u05ea \u05d1\u05e8\u05d7\u05d5.", l, "\u05d1\u05e2\u05d9\u05d9\u05ea \u05e8\u05e9\u05ea ", "\u05d0\u05d5", d, " \u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d1\u05e2\u05d9\u05d4"],
                        _ggk_loading: "\u05d8\u05d5\u05e2\u05df",
                        _ggk_success: "\u05de\u05d6\u05dc \u05d8\u05d5\u05d1! \u05d4\u05e9\u05d2\u05ea \u05d0\u05ea \u05d4\u05ea\u05e8\u05e0\u05d2\u05d5\u05dc\u05d5\u05ea!"
                    },
                    in_ID: {
                        _ggk_guide: "Tahan tombol mouse kiri Anda untuk menggurat dua ekor ayam",
                        _ggk_start: "",
                        _ggk_net_err: ["Masalah dengan jaringan.", l, "Coba lagi ", "atau", d, " laporkan masalah Anda"],
                        _ggk_too_fast: ["Anda terlalu cepat.", l, "Coba lagi ", "atau", d, " laporkan masalah Anda"],
                        _ggk_action_timeout: ["Waktu habis.", l, "Coba lagi ", "atau", d, " laporkan masalah Anda"],
                        _ggk_fail: ["Ups, ayamnya lari.", l, "Coba lagi ", "atau", d, " laporkan masalah Anda"],
                        _ggk_loading: "Memuat",
                        _ggk_success: "Selamat! Anda mendapatkan ayamnya!"
                    }
                };
            for (s in _) _.hasOwnProperty(s) && o(_[s]);
            _.zh_CN = _.cn, _.zh_TW = _.tw, _.en_US = _.en, _.iw_IL = _.iw_HE, _.pt_PT = _.pt_BR, _.ar_MA = _.ar_SA, t.language = _, t.upLang = r, t.replaceLang = a, t.upResetIndex = c
        }, function (e, t, n) {
            t = e.exports = n(8)(), t.push([e.i, ".nc-container div#nc-loading-circle {\n  background: transparent;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.nc-container div#nc-loading-circle .sk-circle {\n  background: transparent;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.nc-container #nc-loading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #818181;\n  border-radius: 100%;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n.nc-container #nc-loading-circle .sk-circle2 {\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n.nc-container #nc-loading-circle .sk-circle3 {\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n.nc-container #nc-loading-circle .sk-circle4 {\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.nc-container #nc-loading-circle .sk-circle5 {\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n.nc-container #nc-loading-circle .sk-circle6 {\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n.nc-container #nc-loading-circle .sk-circle7 {\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.nc-container #nc-loading-circle .sk-circle8 {\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n.nc-container #nc-loading-circle .sk-circle9 {\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n.nc-container #nc-loading-circle .sk-circle10 {\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.nc-container #nc-loading-circle .sk-circle11 {\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n.nc-container #nc-loading-circle .sk-circle12 {\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n.nc-container #nc-loading-circle .sk-circle2:before {\n  animation-delay: -1.1s;\n}\n.nc-container #nc-loading-circle .sk-circle3:before {\n  animation-delay: -1s;\n}\n.nc-container #nc-loading-circle .sk-circle4:before {\n  animation-delay: -0.9s;\n}\n.nc-container #nc-loading-circle .sk-circle5:before {\n  animation-delay: -0.8s;\n}\n.nc-container #nc-loading-circle .sk-circle6:before {\n  animation-delay: -0.7s;\n}\n.nc-container #nc-loading-circle .sk-circle7:before {\n  animation-delay: -0.6s;\n}\n.nc-container #nc-loading-circle .sk-circle8:before {\n  animation-delay: -0.5s;\n}\n.nc-container #nc-loading-circle .sk-circle9:before {\n  animation-delay: -0.4s;\n}\n.nc-container #nc-loading-circle .sk-circle10:before {\n  animation-delay: -0.3s;\n}\n.nc-container #nc-loading-circle .sk-circle11:before {\n  animation-delay: -0.2s;\n}\n.nc-container #nc-loading-circle .sk-circle12:before {\n  animation-delay: -0.1s;\n}\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0;\n  }\n  40% {\n    opacity: 1;\n  }\n}\n.nc-container .scale_text2 #nc-loading-circle .sk-circle:before {\n  background-color: #fff;\n}\n", ""])
        }, function (e, t, n) {
            var o = n(25);
            "string" == typeof o && (o = [[e.i, o, ""]]), n(10)(o, {}), o.locals && (e.exports = o.locals)
        }, , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
            "use strict";
            var o = window, i = n(2);
            t.makeLog = function (e) {
                function t(e, t, n) {
                    var o = i.obj2param({appkey: encodeURIComponent(e), token: encodeURIComponent(t), flag: n});
                    i.send(r + "?cache=" + Math.random() + "&gmkey=evt&gokey=" + encodeURIComponent(o))
                }

                function n(t) {
                    o.console && void 0;
                    var n = e + "jstracker.2", r = i.obj2param({
                        type: "9",
                        id: "jstracker",
                        v: "1",
                        nick: "",
                        islogin: "",
                        msg: t,
                        file: "",
                        ua: "",
                        line: "",
                        scrolltop: "",
                        screen: "",
                        t: +new Date
                    });
                    i.send(n + "?" + r)
                }

                e = e || "//gm.mmstat.com/";
                var r = e + "aq.1.1.3", a = {};
                return a.log = t, a.report = n, a
            }
        }, function (e, t, n) {
            "use strict";
            var o = n(4);
            t.init = function (e) {
                var t = e.fsm;
                t.onenteractiontimeout = function () {
                    o.addClass(e.el, "nc-fail")
                }, t.onleaveactiontimeout = function () {
                    o.removeClass(e.el, "nc-fail")
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterdestroyed = function () {
                    e.el.innerHTML = ""
                }, t.onleavedestroyed = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onentererror = function () {
                }, t.onleaveerror = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            var o = n(4), i = n(23);
            t.init = function (e) {
                var t = e.fsm, n = o.mix({}, i.default_options, e.options || {});
                t.onenterfail = function () {
                    var t = (e.index > 0 ? e.index : 1, e.scrape.prefix);
                    o.addClass(e.el, "nc-fail");
                    var i = document.getElementById(t + "container");
                    if (i && n.bg_back_fail) {
                        var r = o.getElementsByClassName("nc-bg", i)[0];
                        r && (r.style.background = "url(" + n.bg_back_fail + ")")
                    }
                }, t.onleavefail = function () {
                    o.removeClass(e.el, "nc-fail")
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterinitially = function () {
                }, t.onleaveinitially = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterload_error = function () {
                }, t.onleaveload_error = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            var o = n(126), i = n(127), r = n(125), a = n(4), c = r.names, s = n(1);
            t.init = function (e) {
                var t = e.fsm;
                t.onenterloading = function () {
                    UA_Opt.resetSA && UA_Opt.resetSA();
                    var n = e.scrape || i.create(e);
                    e.scrape = n, s.resolve().then(function () {
                        var t = e._custom_state._on_loading;
                        return t = Array.isArray(t) ? t : [], t.length > 0 ? s.all(a.map(t, function (e) {
                            return e()
                        })) : 0
                    }).then(function () {
                        return new s(function (t, n) {
                            o.load(e, function (e) {
                                return e ? n(e) : t()
                            })
                        })
                    }).then(function () {
                        var t = e._custom_state.loading;
                        return t = Array.isArray(t) ? t : [], t.length > 0 ? s.all(a.map(t, function (e) {
                            return e()
                        })) : 0
                    }).then(function () {
                        return new s(function (t, o) {
                            i.render(n, function (n) {
                                return n ? void o(n) : (e.fire(c.ready), void t())
                            })
                        })
                    }).then(function () {
                        return t.load()
                    })["catch"](function (e) {
                        t.loaderror()
                    })
                }, t.onleaveloading = function () {
                    e.on_leave_loading && e.on_leave_loading()
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterneed_two_step_verify = function () {
                }, t.onleaveneed_two_step_verify = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            var o = n(4), i = n(23);
            t.init = function (e) {
                var t = e.fsm, n = o.mix({}, i.default_options, e.options || {});
                t.onenterpass = function () {
                    var t = (e.index > 0 ? e.index : 1, e.scrape.prefix);
                    o.addClass(e.el, "nc-pass");
                    var i = document.getElementById(t + "container");
                    if (i && n.bg_back_pass) {
                        var r = o.getElementsByClassName("nc-bg", i)[0];
                        r && (r.style.background = "url(" + n.bg_back_pass + ")")
                    }
                }, t.onleavepass = function () {
                    o.removeClass(e.el, "nc-pass")
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterready = function () {
                }, t.onleaveready = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterreseting = function () {
                    t.resetdone()
                }, t.onleavereseting = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterts_error = function () {
                }, t.onleavets_error = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterts_fail = function () {
                }, t.onleavets_fail = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterts_loading = function () {
                }, t.onleavets_loading = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterts_pass = function () {
                }, t.onleavets_pass = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterts_ready = function () {
                }, t.onleavets_ready = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterts_verifying = function () {
                }, t.onleavets_verifying = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            t.init = function (e) {
                var t = e.fsm;
                t.onenterverifying = function () {
                }, t.onleaveverifying = function () {
                }
            }
        }, function (e, t, n) {
            "use strict";
            e.exports = n(3)
        }, function (e, t, n) {
            "use strict";
            !function (e, t) {
                var n = e.createElement("style");
                if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t); else try {
                    n.innerHTML = t
                } catch (o) {
                    n.innerText = t
                }
            }(document, '@charset "utf-8";\n@font-face{font-family:\'nc_iconfont\';src:url("//at.alicdn.com/t/font_1465353706_4784257.eot");src:url("//at.alicdn.com/t/font_1465353706_4784257.eot?#iefix") format(\'embedded-opentype\'),url("//at.alicdn.com/t/font_1465353706_4784257.woff") format(\'woff\'),url("//at.alicdn.com/t/font_1465353706_4784257.ttf") format(\'truetype\'),url("//at.alicdn.com/t/font_1465353706_4784257.svg#iconfont") format(\'svg\')}@font-face{font-family:\'ncpc_iconfont\';src:url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.eot");src:url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.eot?#iefix") format(\'embedded-opentype\'),url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.woff") format(\'woff\'),url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.ttf") format(\'truetype\'),url("//at.alicdn.com/t/font_384029_rhzpmteb25oecdi.svg#ncpc_iconfont") format(\'svg\')}.nc-container div#nc-loading-circle{background:transparent;width:20px;height:20px;display:inline-block;position:relative;vertical-align:middle}.nc-container div#nc-loading-circle .sk-circle{background:transparent;width:100%;height:100%;position:absolute;left:0;top:0}.nc-container #nc-loading-circle .sk-circle:before{content:\'\';display:block;margin:0 auto;width:15%;height:15%;background-color:#818181;border-radius:100%;-webkit-animation:sk-circleFadeDelay 1.2s infinite ease-in-out both;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.nc-container #nc-loading-circle .sk-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.nc-container #nc-loading-circle .sk-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.nc-container #nc-loading-circle .sk-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.nc-container #nc-loading-circle .sk-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.nc-container #nc-loading-circle .sk-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.nc-container #nc-loading-circle .sk-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.nc-container #nc-loading-circle .sk-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.nc-container #nc-loading-circle .sk-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.nc-container #nc-loading-circle .sk-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.nc-container #nc-loading-circle .sk-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.nc-container #nc-loading-circle .sk-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.nc-container #nc-loading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.nc-container #nc-loading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.nc-container #nc-loading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.nc-container #nc-loading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.nc-container #nc-loading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.nc-container #nc-loading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.nc-container #nc-loading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.nc-container #nc-loading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.nc-container #nc-loading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.nc-container #nc-loading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.nc-container #nc-loading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}@-webkit-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}.nc-container .scale_text2 #nc-loading-circle .sk-circle:before{background-color:#fff}.nc_iconfont{font-family:"nc_iconfont";color:#ff3f08;font-size:16px;font-style:normal}.ncpc_iconfont{font-family:"ncpc_iconfont";color:#ff3f08;font-size:16px;font-style:normal}.captcha-error .icon_ban{float:left;font-size:16px;padding-right:5px;line-height:14px}.clickCaptcha_text .btn_refresh{font-style:normal;cursor:pointer;background:#fff;color:#737383}.imgCaptcha .btn_refresh{font-size:20px;cursor:pointer;background:#fff;color:#737383}.nc_voice{display:none;position:relative;margin-top:-34px;z-index:99;width:auto;height:34px;background:#fff}.omeo-code-img,.omeo-code-audio{font-size:0;text-align:left}.omeo-code-audiobox,.omeo-code-img a,.omeo-code-audio a,.omeo-code-state{display:inline-block;*display:inline;zoom:1;height:32px;vertical-align:top;font-size:12px}.omeo-code .omeo-code-refresh{background:transparent;width:32px;height:32px;font-size:20px;color:#888;text-align:center;text-decoration:none;padding-left:4px;line-height:32px}.omeo-code .omeo-switch{display:none;width:32px;height:32px;border-left:1px solid #e1e1e1;background-image:url("//g.alicdn.com/sd/ncpc/images/checkcode.png");background-repeat:no-repeat}.omeo-img-active .omeo-code-img{display:block}.omeo-img-active .omeo-code-audio{display:none}.omeo-code-img img{border:1px solid #cdcdcd;cursor:pointer}.omeo-code-img .omeo-switch{background-position:9px -41px}.omeo-audio-active .omeo-code-audio{display:block}.omeo-audio-active .omeo-code-img{display:none}.omeo-code-refresh{position:relative;left:95px}.omeo-code-audiobox{position:relative;height:30px;line-height:32px;border:1px solid #e1e1e1;text-align:center;overflow:hidden;left:100px;top:1px;width:45%;min-width:80px;background-color:#eee}.omeo-code-audiobox a{display:block;text-decoration:none;color:#06c}.omeo-code-audiobox-playing a{visibility:hidden}.omeo-code-audiobox span,.omeo-code-audiobox b{visibility:hidden;position:absolute;top:0;left:0;height:30px;font-weight:100;overflow:hidden}.omeo-code-audiobox-playing span,.omeo-code-audiobox-playing b{visibility:visible}.omeo-code-audiobox span{z-index:0;width:0;background:#186bca}.omeo-code-audiobox b{width:100%;z-index:1;text-align:left;text-indent:30px;color:#999;background:url("//g.alicdn.com/sd/ncpc/images/checkcode.png") no-repeat 14px -89px}.omeo-code-audio .omeo-switch{background-position:5px 10px}input[type=text]::-ms-clear{display:none}.omeo-box{position:relative;background-color:#fff}.omeo-code-echo{position:absolute;top:2px;left:2px}.omeo-code-echo input{padding:5px;height:18px;line-height:18px;border:1px solid #ddd;width:80px;outline:0}.omeo-code-state{height:30px;line-height:30px;text-indent:25px;white-space:nowrap;background-image:url("//g.alicdn.com/sd/ncpc/images/checkcode.png");background-repeat:no-repeat;background-position:100px 100px}.omeo-code-echo .omeo-code-state-error{width:auto;background-position:7px -193px}.omeo-code-echo .omeo-code-state-success{position:absolute;width:30px;background-position:7px -243px}.omeo-code-state{position:absolute;left:0;top:28px}.nc_voice_close{display:inline-block;position:relative;cursor:pointer;left:95px;top:0;border-left:#ddd 2px solid;padding:0 0 0 7px;background-color:#fff;font-size:20px;color:#888;line-height:32px}.nc_help{position:absolute;width:100%;height:100%;left:0;top:0;z-index:99999}.nc_help .mask{background-color:#000;opacity:.5;filter:alpha(opacity=50);width:100%;height:100%;top:0;left:0}.nc_btn_close{position:absolute;height:20px;left:500px;border-radius:20px;padding:10px 30px;background-color:#aaa;color:#fff;cursor:pointer;z-index:10}.nc_btn_close:hover{background-color:#afafaf}.nc_hand{position:absolute;width:68px;height:53px;background-image:url("//g.alicdn.com/sd/ncpc/images/hand.png");z-index:3}.nc_slide_bg{z-index:3;font-size:12px;text-align:center;color:#fff;line-height:34px}.nc_voicebtn{position:absolute;padding:0;right:-25px;font-size:23px;color:#888;cursor:pointer;line-height:34px}.nc_helpbtn{position:absolute;cursor:pointer;right:-95px;top:4px;font-size:12px;background-color:#ffb668;color:#fff;padding:4px;border-radius:2px;line-height:18px;display:none}.nc_helpbtn:before{width:0;height:0;content:"";position:absolute;left:-2px;top:6px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-right:4px solid #ffb668}.nc-container .errloading{border:#faf1d5 1px solid;text-indent:3px;background-image:none;font-size:12px;width:290px;line-height:20px;padding:7px 5px 8px 5px;color:#ef9f06;}.nc-container .errloading a{color:#30a7fc}.nc_captcha_text .nc_err{float:left;text-indent:0}.button_move{transition:left .5s;-moz-transition:left .5s;-webkit-transition:left .5s;-o-transition:left .5s}.bg_move{transition:width .5s;-moz-transition:width .5s;-webkit-transition:width .5s;-o-transition:width .5s}.nc_slide_box{position:absolute}.nc_captcha_text{height:auto;line-height:20px;visibility:hidden;font-size:12px;color:#999;font-weight:normal}.nc-container .nc_captcha_img_text{width:auto;height:auto;line-height:20px;visibility:hidden;font-size:12px;color:#999;font-weight:normal;display:none;padding:0 0 10px 0;background-position:0 0;}.nc-container .nc_captcha_img_text span.nc-lang-cnt{line-height:inherit}.nc-container .imgCaptcha .nc_captcha_img_text{width:auto}.nc_captcha_img_text{height:auto;line-height:20px;visibility:hidden;font-size:12px;color:#999;font-weight:normal;display:none;padding:0 0 10px 3px;background-position:0 0}.nc-container .nc_wrapper{width:auto}.nc_scale{width:auto;height:34px;background:#e8e8e8;position:relative;margin:0;padding:0}.nc_scale.is_audio{margin-right:25px}.nc-container .nc_scale div{height:auto}.nc-container .nc_scale ul{list-style:none}.nc-container .nc_scale .btn_slide{color:#737383;background-image:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.nc-container .nc_scale span{text-align:center;width:40px;height:32px;line-height:32px;border:1px solid #ccc;position:absolute;left:0;cursor:move;background:#fff;z-index:2}.nc-container .nc_scale span.nc-lang-cnt{*line-height:34px;float:none;width:auto;height:auto;*height:34px;border:none;position:static;cursor:inherit;background:none;z-index:0;display:inline}.nc_slide_button{width:40px;height:32px;border:1px solid #ccc;position:absolute;left:0;cursor:move;background:#fff url("//g.alicdn.com/sd/ncpc/images/rt.png") no-repeat center;z-index:2}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.nc_scale span{height:32px}}.nc-container .nc_scale .btnok{cursor:default;background:#fff url("//g.alicdn.com/sd/ncpc/images/yes.png") no-repeat center;z-index:3}.nc-container .nc_scale .btnok2{cursor:default;font-size:20px;background:#fff url("//g.alicdn.com/sd/ncpc/images/no.png") no-repeat center;z-index:3}.nc-container .nc_scale .btn_warn{cursor:default;color:#ff3f08;line-height:34px;text-align:center;font-size:20px;background:#fff;z-index:3}.nc-container .clickCaptcha_text .btn_refresh{font-size:20px}.nc-container .clickCaptcha_text .icon_close{line-height:30px;margin-left:8px;cursor:default;color:#ff3f08;font-size:16px;float:left;margin-right:2px;background:transparent;z-index:3}.nc-container .nc_captcha_img_text .icon_close{cursor:default;color:#ff3f08;font-size:16px;float:left;margin-right:4px;background:transparent;z-index:3;line-height:18px}.nc-container .errloading .icon_warn{cursor:default;color:#ff3f08;font-size:18px;float:left;background:transparent;z-index:3}.nc-container .nc_scale .btn_ok{cursor:default;line-height:34px;text-align:center;font-size:20px;background:#fff;z-index:3;color:#76c61d}.nc-container .nc_scale .nc_ok,.nc-container .nc_scale .nc_bg{background:#7ac23c}.nc-container .nc_scale .nc_bg{position:absolute;height:100%;_height:34px;left:0;width:10px}.nc-container .nc_scale div.redbar{background:#fc461e;opacity:.5;filter:alpha(opacity=50)}.nc-container .nc_scale div.orange{background:#f00}.nc-container .nc_scale .scale_text{width:100%;height:100%;text-align:center;position:absolute;z-index:1;background:transparent;color:#9c9c9c;line-height:34px;font-size:12px;cursor:pointer}.nc-container .nc_scale .scale_text2{text-align:left;color:#fff;font-size:12px;text-indent:10px}.nc-container .nc_scale .scale_text2 b{padding-left:0;font-weight:normal}.nc-container .nc_scale .scale_text.scale_loading_text{text-align:center}.nc-container .nc_scale .imgCaptcha,.nc-container .nc_scale .clickCaptcha{display:none;overflow:hidden;border:1px solid #ccc;background:#fff;z-index:20000;}.nc-container .nc_scale .imgCaptcha p.error span,.nc-container .nc_scale .clickCaptcha p.error span{line-height:normal}.nc-container .nc_scale .imgCaptcha{height:auto}.nc-container .nc_scale .clickCaptcha{position:absolute;left:0;top:35px;height:270px;background:#fff;display:none;}.nc-container .nc_scale .clickCaptcha p.error i{color:#ff3f08;font-style:normal}.nc-container .nc_scale .clickCaptcha div{position:static;clear:both;width:100%;background:#fff;height:auto}.nc-container .nc_scale .clickCaptcha .clickCaptcha_text{height:30px;line-height:30px;font-size:12px;color:#999;}.nc-container .nc_scale .clickCaptcha .clickCaptcha_text b{font-weight:normal}.nc_btn_2{position:absolute;right:0;top:0;cursor:pointer;margin:2px 9px 0 0}.nc_iconfont.nc_btn_2{position:absolute;right:0;top:0;cursor:pointer}.nc_iconfont.nc_btn_1{position:absolute;top:10px;right:5px}.nc_btn_1{top:10px;right:10px}.scale_text i{font-style:normal;border:none;position:static;cursor:default;color:#fffc00;background:none;display:inline;width:100%}.nc-container .clickCaptcha .clickCaptcha_img{margin:0 auto;clear:both;position:relative;}.nc-container .clickCaptcha .clickCaptcha_img img{width:230px;height:230px;margin-left:10px;margin-top:5px}.nc-container .clickCaptcha .clickCaptcha_btn{margin:10px 0 0 15px;position:relative;text-align:left;}.nc-container .clickCaptcha .clickCaptcha_btn img{cursor:pointer}.nc-container .imgCaptcha{position:absolute;left:0;top:35px;height:auto;padding-bottom:15px;border:1px solid #ccc;background:#fff;}.nc-container .imgCaptcha div{position:static;width:90%;background-color:#fff}.nc-container .imgCaptcha,.nc-container .clickCaptcha{text-align:left;}.nc-container .imgCaptcha a,.nc-container .clickCaptcha a{color:#ff3f08}.nc-container .imgCaptcha .imgCaptcha_text{height:42px;line-height:42px;width:120px;background:#fff;font-size:14px;text-align:left;color:#747474;float:left;margin-left:10px;}.nc-container .imgCaptcha .imgCaptcha_text input{margin-top:5px;height:30px;line-height:30px;font-size:14px;width:90px;background:#fff}.nc-container .imgCaptcha .imgCaptcha_text input:focus{outline:none;color:#bbb}.nc-container .imgCaptcha .imgCaptcha_btn{margin:0 0 0 12px;*margin-left:0;clear:both;padding-top:5px;width:90%;}.nc-container .imgCaptcha .imgCaptcha_btn img{cursor:pointer}.nc-container .imgCaptcha .nc_scale_submit{margin:0 auto;cursor:pointer;background-color:#fc461e;width:120px;height:32px;line-height:32px;color:#fff;text-align:center}.nc-container .imgCaptcha .imgCaptcha_img{margin:4px 0 0 100px;height:40px;width:130px;overflow:hidden;cursor:pointer;}.nc-container .imgCaptcha .imgCaptcha_img img{width:130px}.nc-container .imgCaptcha .imgCaptcha_img input{border:solid 1px #ccc}.nc-lang-ar_MA,.nc-lang-ar_SA,.nc-lang-iw_HE,.nc-lang-iw_IL{text-align:right;*text-align:left;}.nc-lang-ar_MA .nc_scale .scale_text2,.nc-lang-ar_SA .nc_scale .scale_text2,.nc-lang-iw_HE .nc_scale .scale_text2,.nc-lang-iw_IL .nc_scale .scale_text2{text-align:right;}.nc-lang-ar_MA .nc_scale .scale_text2 span,.nc-lang-ar_SA .nc_scale .scale_text2 span,.nc-lang-iw_HE .nc_scale .scale_text2 span,.nc-lang-iw_IL .nc_scale .scale_text2 span{*display:inline-block;padding:0 56px 0 0}.nc-lang-ar_MA .nc_captcha_img_text,.nc-lang-ar_SA .nc_captcha_img_text,.nc-lang-iw_HE .nc_captcha_img_text,.nc-lang-iw_IL .nc_captcha_img_text{*text-align:right}.nc-lang-ar_MA span.nc-lang-cnt,.nc-lang-ar_SA span.nc-lang-cnt,.nc-lang-iw_HE span.nc-lang-cnt,.nc-lang-iw_IL span.nc-lang-cnt{text-align:right;direction:rtl}.nocaptcha span.nc-lang-cnt{float:none;height:auto;line-height:30px}.nc-container{font-size:12px;-ms-touch-action:none;touch-action:none;}.nc-container p{margin:0;padding:0;display:inline}.nc-container .scale_text.scale_text span[data-nc-lang="_startTEXT"]{display:inline-block;width:100%}.nc-container .scale_text.scale_text.slidetounlock span[data-nc-lang="_startTEXT"]{background:-webkit-gradient(linear,left top,right top,color-stop(0,#4d4d4d),color-stop(.4,#4d4d4d),color-stop(.5,#fff),color-stop(.6,#4d4d4d),color-stop(1,#4d4d4d));-webkit-background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:slidetounlock 3s infinite;-webkit-text-size-adjust:none}.nc-container .nc_scale .nc-align-center.scale_text2{text-align:center;text-indent:-42px}@-webkit-keyframes slidetounlock{0%{background-position:-200px 0}100%{background-position:200px 0}}.nc-container.tb-login .clickCaptcha_text .icon_close{line-height:30px;margin-left:0;cursor:default;color:#ff3f08;font-size:16px;float:left;margin-right:0;background:transparent;z-index:3}.nc-container.tb-login{position:relative;margin-top:20px;display:none;}.nc-container.tb-login .nc_scale{width:auto;}.nc-container.tb-login .nc_scale .scale_text2{text-indent:-42px;text-align:center;}.nc-container.tb-login .nc_scale .scale_text2 b{padding:0}.nc-container.tb-login .nc_scale.nc_err div.scale_text{background:#f79977}.nc-container.tb-login .errloading{width:auto}.nc-container.tb-login .imgCaptcha,.nc-container.tb-login .clickCaptcha{width:252px;*width:256px;border:0;*height:300px;min-height:300px;max-height:inherit !important;}.nc-container.tb-login .imgCaptcha div.login-msg.error,.nc-container.tb-login .clickCaptcha div.login-msg.error{background:#fff2f2}.nc-container.tb-login .imgCaptcha .captcha-error,.nc-container.tb-login .clickCaptcha .captcha-error{position:absolute;top:0;width:244px;height:auto;margin-bottom:15px;padding:3px;border:solid 1px #ff8e8e;line-height:18px}.nc-container.tb-login .imgCaptcha .captcha-inform,.nc-container.tb-login .clickCaptcha .captcha-inform{font-size:110%;margin-left:20px}.nc-container.tb-login .imgCaptcha{padding-top:66px;}.nc-container.tb-login .imgCaptcha .imgCaptcha_text{width:100px;margin-left:0;}.nc-container.tb-login .imgCaptcha .imgCaptcha_text input:focus{color:#000}.nc-container.tb-login .imgCaptcha .imgCaptcha_img{width:120px;_width:100px}.nc-container.tb-login .imgCaptcha .imgCaptcha_btn{width:100%;margin-left:0}.nc-container.tb-login .imgCaptcha .nc_scale_submit{width:100%;height:36px;line-height:36px;margin-top:20px;margin-left:0;border-radius:3px;font-size:16px;font-family:Tahoma,Helvetica,Arial,sans-serif;background:#ff3f08}.nc-container.tb-login .clickCaptcha{padding-top:40px;}.nc-container.tb-login .clickCaptcha .clickCaptcha_text{text-indent:4px}.nc-container.tb-login .clickCaptcha .clickCaptcha_img img{margin-left:10px}.nc-container.tb-login .nc_btn_1{top:77px;_top:57px}.nc-container.tb-login .nc_btn_2{top:36px}.login .nc-container.tb-login .login-msg p,.login-box .nc-container.tb-login .login-msg p{width:auto;float:left}.nc-container.tb-login.nc-old-login{margin:20px 0 10px 0;width:250px;}.nc-container.tb-login.nc-old-login .nc_wrapper{width:250px}.nc-container.tb-login.nc-old-login .imgCaptcha,.nc-container.tb-login.nc-old-login .clickCaptcha{width:250px;min-height:auto;}.nc-container.tb-login.nc-old-login .imgCaptcha .captcha-error,.nc-container.tb-login.nc-old-login .clickCaptcha .captcha-error{line-height:16px}.nc-container.tb-login.nc-old-login .clickCaptcha{padding-top:28px;}.nc-container.tb-login.nc-old-login .clickCaptcha .clickCaptcha_img img{width:200px;height:200px}.nc-container.nc-old-login.show-click-captcha{padding-bottom:60px}.nc-container.nc-old-login.show-click-captcha.nc-tm-min-fix{padding-bottom:40px}.nc-container.tb-login.nc-tm-min-fix .clickCaptcha{max-height:340px !important}#content .login-box .bd .nc-container.tb-login .login-msg{margin:10px auto 15px auto}#content .login-box .bd .nc-container.tb-login.nc-old-login.show-click-captcha .login-msg{margin:2px 0 0 0}.nc-container .nc_scale .nc-cc{display:none;position:absolute;left:0;top:35px;z-index:20000;width:360px;height:570px;border:1px solid #5eaef1;border-radius:4px;background:#fff;font-size:14px;line-height:18px;color:#333;}.nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-btn,.nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-btn{background-color:#90c1eb}.nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-btn,.nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-btn,.nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-refresh,.nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-refresh{cursor:default}.nc-container .nc_scale .nc-cc.nc-cc-status-loading .nc-cc-refresh,.nc-container .nc_scale .nc-cc.nc-cc-status-verifing .nc-cc-refresh{color:#999}.nc-container .nc_scale .nc-cc a{color:#3199f4;text-decoration:none}.nc-container .nc_scale .nc-cc .nc_iconfont{vertical-align:top;margin-right:8px}.nc-container .nc_scale .nc-cc-btn{display:inline-block;*display:inline;*zoom:1;vertical-align:top;letter-spacing:normal;word-spacing:normal;width:100px;line-height:30px;text-align:center;background-color:#3199f4;color:#fff;border-radius:4px;cursor:pointer;}.nc-container .nc_scale .nc-cc-btn.nc-cc-disabled{background-color:#90c1eb;cursor:default}.nc-container .nc_scale .nc-cc-btn .nc-lang-cnt{line-height:18px}.nc-container .nc_scale .nc-cc-header{padding:20px 20px 19px 20px;height:100px;background:#f4f8fa;border-bottom:1px solid #ccc}.nc-container .nc_scale .nc-cc-img1-box{float:left;width:100px;height:100px;margin-right:16px}.nc-container .nc_scale .nc-cc-txt{overflow:hidden;*zoom:1;line-height:30px;padding-top:11px}.nc-container .nc_scale .nc-cc-img2-box{position:relative;padding:0 20px;margin-top:20px}.nc-container .nc_scale .nc-cc-items{position:absolute;left:20px;_left:0;top:0;width:320px;overflow:hidden}.nc-container .nc_scale .nc-cc-items-inner{margin-right:-20px}.nc-container .nc_scale .nc-cc-item{position:relative;display:inline-block;*display:inline;*zoom:1;vertical-align:top;letter-spacing:normal;word-spacing:normal;margin-right:10px;margin-bottom:10px;border:1px solid #ccc;width:98px;height:98px;background:url("//gtms02.alicdn.com/tps/i2/T1ty2QFNNXXXc6Yc2r-1-1.gif");}.nc-container .nc_scale .nc-cc-item:hover{border-color:#3199f4}.nc-container .nc_scale .nc-cc-item .nc_iconfont{display:none;position:absolute;right:0;bottom:0;color:#3199f4;font-size:22px;margin-right:0}.nc-container .nc_scale .nc-cc-item.nc-cc-selected .nc_iconfont{display:block}.nc-container .nc_scale .nc-cc-tip{display:none;position:absolute;left:0;bottom:60px;width:360px;line-height:18px;text-align:center;color:#eb4f38;}.nc-container .nc_scale .nc-cc-tip span{line-height:normal}.nc-container .nc_scale .nc-cc-footer{position:absolute;left:0;bottom:20px;width:360px;height:30px;line-height:30px;text-align:center;}.nc-container .nc_scale .nc-cc-footer .nc_iconfont{color:#c4cbd0}.nc-container .nc_scale .nc-cc-refresh,.nc-container .nc_scale .nc-cc-wait{position:absolute;left:20px;top:0;color:#3199f4;cursor:pointer}.nc-container .nc_scale .nc-cc-wait{display:none}.nc-container .nc_scale .nc-cc-cancel{position:absolute;right:20px;top:0;color:#3199f4;cursor:pointer;}.nc-container .nc_scale .nc-cc-cancel .nc_iconfont{position:relative;top:-1px}.nc-container .nc_scale .nc-cc-loading{margin-top:247px;text-align:center;line-height:14px}.nc-container .nc_scale .nc-cc-loading-img{display:inline-block;*display:inline;*zoom:1;vertical-align:top;letter-spacing:normal;word-spacing:normal;vertical-align:middle;background:url("//img.alicdn.com/tps/TB1OdxsKpXXXXcgXFXXXXXXXXXX-14-14.gif") no-repeat;width:14px;height:14px;position:relative;top:-1px;margin-right:9px}.nc-container .nc_scale .nc-cc-fail{position:absolute;left:50%;top:50%;width:320px;height:180px;margin-left:-160px;margin-top:-90px;background:#fff;border-radius:4px}.nc-container .nc_scale .nc-cc-fail-inner{text-align:center;padding:55px 10px 10px}.nc-container .nc_scale .nc-cc-fail-action{margin:28px 0 18px;}.nc-container .nc_scale .nc-cc-fail-action a{display:inline-block;*display:inline;*zoom:1;vertical-align:top;letter-spacing:normal;word-spacing:normal;line-height:30px;margin-left:16px}.nc-container .nc_scale .nc-cc-contact{text-align:right;color:#666;padding-right:9px}.nc-container .nc_scale .nc-cc-mask{display:none;position:absolute;left:0;top:0;width:360px;height:570px;background:rgba(0,0,0,0.3);filter:progid:DXImageTransform.Microsoft.gradient(enabled=\'true\',startColorstr=\'#4C000000\', endColorstr=\'#4C000000\');}:root .nc-container .nc_scale .nc-cc-mask{-webkit-filter:none;filter:none}.nc-container .nc_scale .nc-cc-arrow-1,.nc-container .nc_scale .nc-cc-arrow-2{display:none;position:absolute;top:340px;border:solid transparent;height:0;width:0}.nc-container .nc_scale .nc-cc-arrow-1{border-width:16px;margin-top:-1px}.nc-container .nc_scale .nc-cc-arrow-2{border-width:15px}.nc-container .nc_scale .nc-cc-right .nc-cc-arrow-1,.nc-container .nc_scale .nc-cc-left .nc-cc-arrow-1,.nc-container .nc_scale .nc-cc-right .nc-cc-arrow-2,.nc-container .nc_scale .nc-cc-left .nc-cc-arrow-2{display:block;_display:none}.nc-container .nc_scale .nc-cc-right{left:180px;top:-339px;}.nc-container .nc_scale .nc-cc-right .nc-cc-arrow-1{border-right-color:#5eaef1;left:-32px}.nc-container .nc_scale .nc-cc-right .nc-cc-arrow-2{border-right-color:#fff;left:-30px}.nc-container .nc_scale .nc-cc-left{left:-335px;top:-339px;}.nc-container .nc_scale .nc-cc-left .nc-cc-arrow-1{border-left-color:#5eaef1;right:-32px}.nc-container .nc_scale .nc-cc-left .nc-cc-arrow-2{border-left-color:#fff;right:-30px}');
        }, , function (e, t, n) {
            "use strict";
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            Object.getPrototypeOf || (Object.getPrototypeOf = function (e) {
                if (e !== Object(e)) throw TypeError("Object.getPrototypeOf called on non-object");
                return e.__proto__ || e.constructor.prototype || Object.prototype
            }), "function" != typeof Object.getOwnPropertyNames && (Object.getOwnPropertyNames = function (e) {
                if (e !== Object(e)) throw TypeError("Object.getOwnPropertyNames called on non-object");
                var t, n = [];
                for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                return n
            }), "function" != typeof Object.create && (Object.create = function (e, t) {
                function n() {
                }

                if ("object" !== ("undefined" == typeof e ? "undefined" : o(e))) throw TypeError();
                n.prototype = e;
                var i = new n;
                if (e && (i.constructor = n), void 0 !== t) {
                    if (t !== Object(t)) throw TypeError();
                    Object.defineProperties(i, t)
                }
                return i
            }), function () {
                if (!Object.defineProperty || !function () {
                    try {
                        return Object.defineProperty({}, "x", {}), !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                    var e = Object.defineProperty;
                    Object.defineProperty = function (t, n, o) {
                        if (e) try {
                            return e(t, n, o)
                        } catch (i) {
                        }
                        if (t !== Object(t)) throw TypeError("Object.defineProperty called on non-object");
                        return Object.prototype.__defineGetter__ && "get" in o && Object.prototype.__defineGetter__.call(t, n, o.get), Object.prototype.__defineSetter__ && "set" in o && Object.prototype.__defineSetter__.call(t, n, o.set), "value" in o && (t[n] = o.value), t
                    }
                }
            }(), "function" != typeof Object.defineProperties && (Object.defineProperties = function (e, t) {
                if (e !== Object(e)) throw TypeError("Object.defineProperties called on non-object");
                var n;
                for (n in t) Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(e, n, t[n]);
                return e
            }), Object.keys || (Object.keys = function (e) {
                if (e !== Object(e)) throw TypeError("Object.keys called on non-object");
                var t, n = [];
                for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                return n
            }), Function.prototype.bind || (Function.prototype.bind = function (e) {
                if ("function" != typeof this) throw TypeError("Bind must be called on a function");
                var t = Array.prototype.slice.call(arguments, 1), n = this, o = function () {
                }, i = function () {
                    return n.apply(this instanceof o ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                };
                return this.prototype && (o.prototype = this.prototype), i.prototype = new o, i
            }), Array.isArray = Array.isArray || function (e) {
                return Boolean(e && "[object Array]" === Object.prototype.toString.call(Object(e)))
            }, Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
                if (void 0 === this || null === this) throw TypeError();
                var t = Object(this), n = t.length >>> 0;
                if (0 === n) return -1;
                var o = 0;
                if (arguments.length > 0 && (o = Number(arguments[1]), isNaN(o) ? o = 0 : 0 !== o && o !== 1 / 0 && o !== -(1 / 0) && (o = (o > 0 || -1) * Math.floor(Math.abs(o)))), o >= n) return -1;
                for (var i = o >= 0 ? o : Math.max(n - Math.abs(o), 0); i < n; i++) if (i in t && t[i] === e) return i;
                return -1
            }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (e) {
                if (void 0 === this || null === this) throw TypeError();
                var t = Object(this), n = t.length >>> 0;
                if (0 === n) return -1;
                var o = n;
                arguments.length > 1 && (o = Number(arguments[1]), o !== o ? o = 0 : 0 !== o && o !== 1 / 0 && o !== -(1 / 0) && (o = (o > 0 || -1) * Math.floor(Math.abs(o))));
                for (var i = o >= 0 ? Math.min(o, n - 1) : n - Math.abs(o); i >= 0; i--) if (i in t && t[i] === e) return i;
                return -1
            }), Array.prototype.every || (Array.prototype.every = function (e) {
                if (void 0 === this || null === this) throw TypeError();
                var t = Object(this), n = t.length >>> 0;
                if ("function" != typeof e) throw TypeError();
                var o, i = arguments[1];
                for (o = 0; o < n; o++) if (o in t && !e.call(i, t[o], o, t)) return !1;
                return !0
            }), Array.prototype.some || (Array.prototype.some = function (e) {
                if (void 0 === this || null === this) throw TypeError();
                var t = Object(this), n = t.length >>> 0;
                if ("function" != typeof e) throw TypeError();
                var o, i = arguments[1];
                for (o = 0; o < n; o++) if (o in t && e.call(i, t[o], o, t)) return !0;
                return !1
            }), Array.prototype.forEach || (Array.prototype.forEach = function (e) {
                if (void 0 === this || null === this) throw TypeError();
                var t = Object(this), n = t.length >>> 0;
                if ("function" != typeof e) throw TypeError();
                var o, i = arguments[1];
                for (o = 0; o < n; o++) o in t && e.call(i, t[o], o, t)
            }), Array.prototype.map || (Array.prototype.map = function (e) {
                if (void 0 === this || null === this) throw TypeError();
                var t = Object(this), n = t.length >>> 0;
                if ("function" != typeof e) throw TypeError();
                var o = [];
                o.length = n;
                var i, r = arguments[1];
                for (i = 0; i < n; i++) i in t && (o[i] = e.call(r, t[i], i, t));
                return o
            }), Array.prototype.filter || (Array.prototype.filter = function (e) {
                if (void 0 === this || null === this) throw TypeError();
                var t = Object(this), n = t.length >>> 0;
                if ("function" != typeof e) throw TypeError();
                var o, i = [], r = arguments[1];
                for (o = 0; o < n; o++) if (o in t) {
                    var a = t[o];
                    e.call(r, a, o, t) && i.push(a)
                }
                return i
            }), Array.prototype.reduce || (Array.prototype.reduce = function (e) {
                if (void 0 === this || null === this) throw TypeError();
                var t = Object(this), n = t.length >>> 0;
                if ("function" != typeof e) throw TypeError();
                if (0 === n && 1 === arguments.length) throw TypeError();
                var o, i = 0;
                if (arguments.length >= 2) o = arguments[1]; else for (; ;) {
                    if (i in t) {
                        o = t[i++];
                        break
                    }
                    if (++i >= n) throw TypeError()
                }
                for (; i < n;) i in t && (o = e.call(void 0, o, t[i], i, t)), i++;
                return o
            }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function (e) {
                if (void 0 === this || null === this) throw TypeError();
                var t = Object(this), n = t.length >>> 0;
                if ("function" != typeof e) throw TypeError();
                if (0 === n && 1 === arguments.length) throw TypeError();
                var o, i = n - 1;
                if (arguments.length >= 2) o = arguments[1]; else for (; ;) {
                    if (i in this) {
                        o = this[i--];
                        break
                    }
                    if (--i < 0) throw TypeError()
                }
                for (; i >= 0;) i in t && (o = e.call(void 0, o, t[i], i, t)), i--;
                return o
            }), String.prototype.trim || (String.prototype.trim = function () {
                return String(this).replace(/^\s+/, "").replace(/\s+$/, "")
            }), Date.now || (Date.now = function () {
                return Number(new Date)
            }), Date.prototype.toISOString || (Date.prototype.toISOString = function () {
                function e(e) {
                    return ("00" + e).slice(-2)
                }

                function t(e) {
                    return ("000" + e).slice(-3)
                }

                return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + t(this.getUTCMilliseconds()) + "Z"
            })
        }, function (e, t, n) {
            "use strict";

            function o(e) {
                var t;
                e && (t = e.filename + "") && (t = t.split("?")[0], t.match(/(\/ncpc\/nc\.js$)|(\/uab\.js$)|(umscript.*\/um\.js$)/) && (r.console && void 0, i()))
            }

            function i(e) {
                "function" == typeof ncDowngrade ? (ncDowngrade(), e && r.__nc && r.__nc.show()) : e || setTimeout(function () {
                    i(1)
                }, 100)
            }

            var r = window;
            r.addEventListener ? r.addEventListener("error", o, !0) : r.attachEvent && r.attachEvent("onerror", o)
        }, function (e, t, n) {
            "use strict";
            var o, i, r = "//g.alicdn.com/sd/ncpc/nc.css", a = document.getElementsByTagName("link"), c = a.length;
            try {
                for (o = 0; o < c; o++) i = a[o], i.href && i.href.indexOf(r) != -1 && (i.disabled = !0)
            } catch (s) {
            }
        }, function (e, t, n) {
            "use strict";
            var o = n(4);
            t.makeNC = function (e, t) {
                function i(e) {
                    var n = new s(e);
                    d[t.index] = n.__nc;
                    var i = ["on", "reset", "reload", "show", "hide", "upLang", "getToken", "destroy", "getTrans", "setTrans"];
                    return o.map(i, function (e) {
                        n[e] = function () {
                            if (this.is_destroyed) return this;
                            for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                            var i = this.__nc[e].apply(this.__nc, n);
                            return "destroy" === e && (this.is_destroyed = !0), "getToken" === e || "getTrans" === e || "setTrans" === e ? i : this
                        }
                    }), n
                }

                function r(e) {
                    var n = new l(e, t, c);
                    return d[t.index] = n, n
                }

                function a(e) {
                    return e && "scrape" === e.type ? r(e) : i(e)
                }

                var c = {}, s = n(112).makeNC(e, t, c), l = n(119).NC2, d = [];
                return window.outer_nc_list = [], a.config = function (e) {
                    o.mix(c, e)
                }, a.getByIndex = function (e) {
                    return d[e]
                }, a.reset = function (e) {
                    var t = a.getByIndex(e);
                    t ? t.reset() : window.outer_nc_list && window.outer_nc_list[e].reset()
                }, a
            }
        }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
            "use strict";

            function o(e, t, n) {
                var o = void 0, i = r.createElement("script");
                i.src = e;
                var c = void 0;
                i.onreadystatechange = function () {
                    var e = i.readyState;
                    if ("loaded" === e || "complete" === e) {
                        if (o) return;
                        o = !0, i.onreadystatechange = null, t("ok")
                    }
                }, i.onload = function () {
                    o || (o = !0, i.onload = null, i.parentNode.removeChild(i), c != -1 && (clearTimeout(c), t("ok")))
                }, i.onerror = function () {
                    o || (o = !0, i.onerror = null, i.parentNode.removeChild(i), c != -1 && (clearTimeout(c), t("err")))
                }, c = setTimeout(function () {
                    o || (o = !0, c = -1, t(a))
                }, n || 5e3);
                var s = r.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(i, s)
            }

            function i(e, t, n, i) {
                function r() {
                    c++;
                    var d = e.indexOf("?") > -1 ? "&" : "?", u = e;
                    c > 1 && (u = e + d + "__retry=" + c), o(u, function (e) {
                        if (s) return void t(a);
                        if ("ok" === e) t(e); else {
                            if (e === a || c >= i) return void t(a);
                            l = setTimeout(function () {
                                r()
                            }, 3e3)
                        }
                    }, n)
                }

                i = i || 3;
                var c = 0, s = void 0, l = void 0, d = void 0;
                t = function (e) {
                    return function () {
                        d || (d = !0, clearTimeout(l), e.apply(null, arguments))
                    }
                }(t), r(), setTimeout(function () {
                    s = !0, t(a)
                }, n)
            }

            var r = document, a = "timeout";
            t.loadScript = i
        }, function (e, t, n) {
            "use strict";

            function o(e, t) {
                return "undefined" != typeof UA_Opt[e] && UA_Opt[e] > 0 ? UA_Opt[e] : t
            }

            t.init = function (e) {
                window.__sc_uaboption = new Object, e.is_Opt ? (UA_Opt.MPInterval = o("MPInterval", 4), UA_Opt.MMInterval = o("MMInterval", 5), UA_Opt.MaxMCLog = o("MaxMCLog", 12), UA_Opt.MaxKSLog = o("MaxKSLog", 14), UA_Opt.MaxMPLog = o("MaxMPLog", 5), UA_Opt.MaxFocusLog = o("MaxFocusLog", 6), UA_Opt.SendInterval = o("SendInterval", 5), UA_Opt.SendMethod = o("SendMethod", 8), UA_Opt.GPInterval = o("GPInterval", 50), UA_Opt.MaxGPLog = o("MaxGPLog", 1), UA_Opt.MaxTCLog = o("MaxTCLog", 12), UA_Opt.Flag = o("Flag", 2980046), window.__sc_uaboption.MPInterval = o("MPInterval", 4), window.__sc_uaboption.MMInterval = o("MMInterval", 5), window.__sc_uaboption.MaxMCLog = o("MaxMCLog", 12), window.__sc_uaboption.MaxKSLog = o("MaxKSLog", 14), window.__sc_uaboption.MaxMPLog = o("MaxMPLog", 5), window.__sc_uaboption.MaxFocusLog = o("MaxFocusLog", 6), window.__sc_uaboption.SendInterval = o("SendInterval", 5), window.__sc_uaboption.SendMethod = o("SendMethod", 8), window.__sc_uaboption.GPInterval = o("GPInterval", 50), window.__sc_uaboption.MaxGPLog = o("MaxGPLog", 1), window.__sc_uaboption.MaxTCLog = o("MaxTCLog", 12), window.__sc_uaboption.Flag = o("Flag", 2980046), window.__sc_uaboption.OnlyHost = o("OnlyHost", 1), window.__sc_uaboption.MaxMTLog = o("MaxMTLog", 500), window.__sc_uaboption.MinMTDwnLog = o("MinMTDwnLog", 30), window.__sc_uaboption.MaxNGPLog = o("MaxNGPLog", 1), window.__sc_uaboption.sIDs = o("sIDs", ["_n1t|_n1z|nocaptcha|-stage-1"]), window.__sc_uaboption.mIDs = o("mIDs", ["nc-canvas", "click2slide-btn"])) : (UA_Opt.SendInterval = 5, UA_Opt.SendMethod = 8, UA_Opt.MaxMCLog = 12, UA_Opt.MaxKSLog = 14, UA_Opt.MaxMPLog = 5, UA_Opt.MaxGPLog = 1, UA_Opt.MaxTCLog = 12, UA_Opt.GPInterval = 50, UA_Opt.MPInterval = 4, UA_Opt.MMInterval = 5, UA_Opt.MaxFocusLog = 6, UA_Opt.isSendError = 1, UA_Opt.Flag = 2980046, window.__sc_uaboption.SendInterval = 5, window.__sc_uaboption.SendMethod = 8, window.__sc_uaboption.MaxMCLog = 12, window.__sc_uaboption.MaxKSLog = 14, window.__sc_uaboption.MaxMPLog = 5, window.__sc_uaboption.MaxGPLog = 1, window.__sc_uaboption.MaxTCLog = 12, window.__sc_uaboption.GPInterval = 50, window.__sc_uaboption.MPInterval = 4, window.__sc_uaboption.MMInterval = 5, window.__sc_uaboption.MaxFocusLog = 6, window.__sc_uaboption.isSendError = 1, window.__sc_uaboption.Flag = 2980046, window.__sc_uaboption.OnlyHost = 1, window.__sc_uaboption.MaxMTLog = 500, window.__sc_uaboption.MinMTDwnLog = 30, window.__sc_uaboption.MaxNGPLog = 1, window.__sc_uaboption.sIDs = ["_n1t|_n1z|nocaptcha|-stage-1"], window.__sc_uaboption.mIDs = ["nc-canvas", "click2slide-btn"])
            }
        }, function (e, t, n) {
            "use strict";
            !function (e) {
                var t = "_nc_initialized";
                if (!e[t]) {
                    e[t] = 1;
                    var o = n(6).v;
                    window.console || (window.console = {
                        log: function () {
                            return 0
                        }
                    }), n(71), n(73), n(69), n(72);
                    var i = e.pointman && "19" == pointman._z, r = {},
                        a = {has_pointman: i, index: 0, js_type: "pc", v: o};
                    e.UA_Opt = e.UA_Opt || {};
                    var c = n(74).makeNC(r, a);
                    c.v = o, r.init = function () {
                    }, a.has_pointman && (r.noCaptcha = c, pointman.define("nc", function () {
                        return r
                    })), e.noCaptcha = c
                }
            }(window)
        }, , function (e, t, n) {
            "use strict";

            function o(e, t, n) {
                var o = e.prefix, a = 1, u = navigator && navigator.userAgent || "", p = /Firefox\/([\d.]*)/.test(u),
                    _ = u.indexOf("Windows") !== -1, f = (new Date).getTime(), g = (new Date).getTime(),
                    h = r.head || r.getElementsByTagName("head")[0] || r.documentElement, m = function (e) {
                        return r.getElementById(e)
                    }, v = {"default": 4, number: 6, "150_40": 4, login_wan3: 4, login_wan10: 6}, b = d.isIEX(8),
                    y = new s(function (e, t) {
                        return b ? void t() : void d.imageLoaded("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==").then(function (n) {
                            1 === n.width && 1 === n.height ? e() : t()
                        }, t)
                    }), k = function (e) {
                        this.lang = e.lang;
                        var t = "//diablo.alibaba.com";
                        this.config = {
                            apiserver: e.apiserver || t,
                            type: e.type || "default",
                            codeLength: e.checkCodeLength || v[e.type || "default"],
                            identity: e.identity || "",
                            sessionid: e.sessionid || "",
                            element: e.element || null,
                            a: e.a,
                            t: e.t,
                            n: e.n,
                            lang: e.lang,
                            scene: e.scene,
                            p: e.p
                        }, this.tipText = {};
                        var n, o = l[e.lang] || l.en;
                        for (n in o) o.hasOwnProperty(n) && (this.tipText[n] = e[n] || o[n]);
                        this.service = {
                            imgURL: "{apiserver}/get_img?sessionid={sessionid}&identity={identity}&type={type}",
                            checkImgURL: "{apiserver}/check_img?sessionid={sessionid}&identity={identity}&type={type}",
                            checkAudioURL: "//cf.aliyun.com/captcha/checkcode.jsonp?csessionid={sessionid}&identity={identity}",
                            audioURL: "{apiserver}/captcha/audio/get.jsonp?identity={identity}&sessionid={sessionid}",
                            audioURL_pre: "{apiserver}/captcha/audio/pre_get.jsonp?identity={identity}&sessionid={sessionid}"
                        }, this.cache = {
                            codeType: "img",
                            oldCode: null,
                            lastCheckCode: "",
                            checkedCode: null,
                            checkState: "notstart",
                            audio: null,
                            audioPlayer: null,
                            callback: null,
                            captchaToken: null
                        }
                    };
                return k.prototype = {
                    render: function () {
                        var e = this, t = e.config;
                        if (!t.element) return !1;
                        "[object String]" == Object.prototype.toString.call(t.element) && (t.element = m(t.element));
                        for (var n in this.service) if (this.service.hasOwnProperty(n)) {
                            var o = this.service[n];
                            o = o.replace("{apiserver}", t.apiserver).replace("{identity}", t.identity).replace("{sessionid}", t.sessionid).replace("{type}", t.type), this.service[n] = o
                        }
                        return e.renderCode(), this
                    }, renderCode: function () {
                        function e() {
                            var e = p || m(o + "omeo-code-key");
                            e.value = e.value.replace(/[^\w\d]/g, "")
                        }

                        function i() {
                            var e, t = _, o = -1;
                            for (f.stopAudio(); "body" !== t.tagName.toLowerCase();) {
                                if (e = t.getAttribute("data-nc-idx"), null !== e) {
                                    o = e;
                                    break
                                }
                                t = t.parentNode
                            }
                            try {
                                noCaptcha.getByIndex(parseInt(o)).reload(), n(c.switchevent, {
                                    from: "audio",
                                    to: "scale"
                                })
                            } catch (i) {
                                report("reload failed")
                            }
                            return !1
                        }

                        var a = this, s = a.tipText, l = a.config, d = r.createElement("div"), u = l.element;
                        d.className = "omeo-box", d.innerHTML = '<div class="omeo-code omeo-img-active" id="' + o + 'omeo-code"><div class="omeo-code-img"><img id="' + o + 'omeo-code-imgwrap" data-action="refreshImg" src="' + a.service.imgURL + '" onmousedown="return false;"/><a data-action="refreshImg" href="javascript:;" onmousedown="return false;" title="' + s.refresh + '" class="nc_iconfont btn_refresh omeo-code-refresh">&#xe607;</a><a data-action="switchToAudio" href="javascript:;" onmousedown="return false;" title="' + s.audioText + '" class="omeo-switch"></a></div><div class="omeo-code-audio"><div id="' + o + 'omeo-code-audiobox" class="omeo-code-audiobox omeo-code-audiobox-playing"><a data-action="replayAudio" href="javascript:;">' + s.clickPlay + '</a><span id="' + o + 'omeo-audio-process" class="omeo-audio-process"></span><b>' + s.audioTips + '</b></div><a id="' + o + 'omeo-refresh-audio" data-action="refreshAudio" href="javascript:;" onmousedown="return false;" title="' + s.refresh + '" class="nc_iconfont omeo-code-refresh">&#xe607;</a><i id="' + o + '_voice_close" class="nc_voice_close nc_iconfont" >&#xe600;</i><a data-action="switchToImg" href="javascript:;" onmousedown="return false;" title="' + s.imgText + '" class="omeo-switch"></a></div></div><div class="omeo-code-echo"><input id="' + o + 'omeo-code-key" type="text" name="code" maxlength="6" placeholder="' + s.placeholder + '" /><span class="omeo-code-state" id="' + o + 'omeo-code-state"></span></div>', u.appendChild(d);
                        var p = m(o + "omeo-code-key");
                        u.addEventListener ? (u.addEventListener("click", function (e) {
                            a.triggerEvent(e)
                        }, !1), m(o + "omeo-code-imgwrap").addEventListener("error", function () {
                            a.log({e: "IMGERROR"}), "img" == a.cache.codeType && a.refreshCode()
                        }, !1), p.addEventListener("blur", function () {
                            e(), a.validateCode({code: m(o + "omeo-code-key").value.replace(/^\s|\s$/g, "")})
                        }, !1), p.addEventListener("keyup", function () {
                            e(), a.listenerCodeType(this.value.replace(/^\s|\s$/g, ""))
                        }, !1), p.addEventListener("paste", function (e) {
                            e.preventDefault()
                        }, !0)) : (u.attachEvent("onclick", function (e) {
                            return a.triggerEvent(e), !1
                        }), m(o + "omeo-code-imgwrap").attachEvent("onerror", function () {
                            a.log({e: "IMGERROR"}), "img" == a.cache.codeType && a.refreshCode()
                        }), p.attachEvent("onblur", function () {
                            e(), a.validateCode({code: m(o + "omeo-code-key").value.replace(/^\s|\s$/g, "")})
                        }), p.attachEvent("onkeyup", function () {
                            e(), a.listenerCodeType(m(o + "omeo-code-key").value.replace(/^\s|\s$/g, ""))
                        }), p.attachEvent("onpaste", function () {
                            return !1
                        }));
                        var _ = t.id(o + "_voice_close"), f = this;
                        t.addHandler(_, "click", i)
                    }, listenerCodeType: function (e) {
                        this.cache.oldCode && this.cache.oldCode.length !== this.config.codeLength || 1 !== e.length || (g = (new Date).getTime()), this.cache.oldCode = e, e.length == this.config.codeLength && this.validateCode({code: e})
                    }, updateAudioBoxWidth: function () {
                        var e = 7, t = m(o + "wrapper").offsetWidth, n = m(o + "omeo-refresh-audio").offsetWidth,
                            i = m(o + "_voice_close").offsetWidth, r = m(o + "omeo-code-key").offsetWidth,
                            a = t - n - i - r - e;
                        m(o + "omeo-code-audiobox").style.width = a + "px"
                    }, triggerEvent: function (e) {
                        var t = e.target || e.srcElement, n = t.getAttribute("data-action");
                        try {
                            m(o + "omeo-code-key").focus()
                        } catch (e) {
                        }
                        "refreshAudio" === n && this.refreshCode(), "switchToAudio" === n && (this.cache.codeType = "audio", this.switchCode({type: "audio"})), "replayAudio" == n && this.playAudio()
                    }, resetPlayer: function (e) {
                        var t = m(o + "omeo-audio-process");
                        t.style.width = 0, "playing" == e.state ? t.parentNode.className = "omeo-code-audiobox omeo-code-audiobox-playing" : t.parentNode.className = "omeo-code-audiobox", this.updateAudioBoxWidth()
                    }, refreshCode: function () {
                        var e = m(o + "omeo-code-state");
                        e.className = "omeo-code-state", e.innerHTML = "", i.__progtid && clearInterval(i.__progtid), m(o + "omeo-code-key").value = "", this.resetPlayer({state: "playing"}), this.playAudio(), f = g = (new Date).getTime()
                    }, switchCode: function (e) {
                        "img" == e.type ? (this.stopAudio(), m(o + "omeo-code").className = "omeo-code omeo-img-active") : (m(o + "omeo-code").className = "omeo-code omeo-audio-active", this.resetPlayer({state: "playing"}), !this.audioSupport || p || (m(o + "omeo-refresh-audio").style.display = ""), this.playAudio()), this.cache.checkState = "notstart", this.cache.checkedCode = null;
                        var t;
                        t = m(o + "omeo-code-state"), t.className = "omeo-code-state", t.innerHTML = "", t = m(o + "omeo-code-key"), t.value = "", t.focus(), this.cache.oldCode && this.refreshCode(), f = g = (new Date).getTime()
                    }, playErrAudio: function () {
                        var e = "//g.alicdn.com/sd/ncpc/images/", t = e + "error.wav", n = e + "error_en.mp3",
                            o = "cn" == this.lang || "zh_CN" == this.lang;
                        this.playAudio(o ? t : n)
                    }, playAudio: function (e) {
                        function t(t) {
                            var n;
                            t && (e = t.result.data[0], this.cache.captchaToken = t.result.captchaToken), n = e.indexOf(".mp3") > -1 ? "audio/mpeg" : "audio/x-wav";
                            var c;
                            if (this.audioSupport) this.cache.audio = new Audio, c = r.createElement("source"), c.type = n, c.src = e, this.cache.audio.appendChild(c), this.cache.audio.load(), this.cache.audio.play(), this.bindAudioProgress(); else if (this.isIE) {
                                var s = r.createElement("bgsound");
                                s.setAttribute("id", "omeo-bgsound-audio" + a), s.setAttribute("autostart", "true"), s.setAttribute("src", e), h.appendChild(s), this.cache.audioPlayer = m(o + "omeo-bgsound-audio" + a), this.resetPlayer({state: "playing"});
                                var l = 0, d = this;
                                i.__progtid && clearInterval(i.__progtid), i.__progtid = setInterval(function () {
                                    l += 10, l > 100 && (l = 100), d.updateProgress(l), l >= 100 && clearInterval(i.__progtid)
                                }, 1e3)
                            } else h.appendChild('<embed src="' + e + '" id="' + o + "omeo-flash-audio" + a + '" ' + (_ ? 'type="application/x-mplayer2"' : 'type="' + n + '"') + " autostart hidden />"), this.cache.audioPlayer = m(o + "omeo-flash-audio" + a), this.updateProgress("NOPROGRESS")
                        }

                        var n = this;
                        if (n.stopAudio(), e) t.call(n); else {
                            var c = y.then(function () {
                                e = n.service.audioURL
                            }, function () {
                                e = n.service.audioURL_pre
                            }).then(function () {
                                var o = {url: e, callback: "callback", data: {}};
                                return d.request(o).then(function (e) {
                                    return e.success && 0 === e.result.resultCode ? void t.call(n, e) : s.reject({
                                        type: "request",
                                        code: e.result.resultCode,
                                        msg: e.result.message
                                    })
                                })
                            });
                            c["catch"](function (e) {
                                /^(request)$/.test(e.type)
                            })
                        }
                    }, bindAudioProgress: function () {
                        var e = this, t = e.cache;
                        t.audio.addEventListener("timeupdate", function () {
                            null !== m(o + "omeo-audio-process") && (!p || this.duration && this.duration !== 1 / 0 ? e.updateProgress(parseInt(100 * this.currentTime / this.duration)) : e.updateProgress(100))
                        }, t.audio), t.audio.addEventListener("ended", function () {
                            e.updateProgress(100)
                        }, t.audio)
                    }, updateProgress: function (e) {
                        switch (e) {
                            case-1:
                                break;
                            case 100:
                                this.resetPlayer({state: "end"});
                                break;
                            case"NOPROGRESS":
                                this.resetPlayer({state: "end"});
                                break;
                            default:
                                m(o + "omeo-audio-process").style.width = e + "%"
                        }
                    }, stopAudio: function () {
                        var e = this.cache;
                        this.audioSupport ? e.audio && e.audio.pause() : e.audioPlayer && (e.audioPlayer.src = "", e.audioPlayer.parentNode.removeChild(this.cache.audioPlayer), e.audioPlayer = null)
                    }, replayAudio: function () {
                        this.audioSupport && this.cache.audio && (this.resetPlayer({state: "playing"}), this.cache.audio.currentTime = 0, this.cache.audio.pause(), this.cache.audio.play())
                    }, loadResource: function (e, t) {
                        var n = null;
                        /\.css/g.test(e) ? (r.createStyleSheet && r.createStyleSheet(e), n = r.createElement("link"), n.rel = "stylesheet", n.href = e) : (n = r.createElement("script"), n.src = e), "onload" in n ? n.onload = function () {
                            t && t()
                        } : n.onreadystatechange = function () {
                            /loaded|complete/.test(n.readyState) && t && t()
                        }, h.appendChild(n)
                    }, isIE: function () {
                        return !!/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/.test(u)
                    }(), audioSupport: function () {
                        try {
                            return "Audio" in i && (new Audio).canPlayType("audio/x-wav")
                        } catch (e) {
                            return !1
                        }
                    }(), validateCode: function (e) {
                        var n = this, r = m(o + "omeo-code-state"),
                            c = "omeocode" + a + (+new Date).toString().substr(-6, 6), s = n.service.checkAudioURL;
                        if (n.cache.checkedCode && n.cache.checkedCode === n.cache.oldCode) return !1;
                        if (n.cache.lastCheckCode == e.code) return !1;
                        if (n.cache.lastCheckCode = e.code, n.cache.checkedCode = null, "checking" == n.cache.checkState) return !1;
                        if (n.cache.checkState = "checking", /^[a-z0-9]{4,6}$/gi.test(e.code)) {
                            var l = {
                                checkcode: function () {
                                    var o = {};
                                    return o.answer = e.code, o.captchaToken = n.cache.captchaToken, t.obj2str(o)
                                }(),
                                callback: c,
                                a: n.config.a,
                                t: n.config.t,
                                n: n.config.n,
                                lang: n.config.lang,
                                scene: n.config.scene
                            };
                            s += "&" + d.obj2param(l), i[c] = function (t) {
                                var i = {};
                                if (t.success && 100 == t.result.code) {
                                    n.cache.checkedCode = e.code, r.className = "omeo-code-state omeo-code-state-success", r.innerHTML = "", n.cache.checkState = "success", i = {message: "success"};
                                    var a = (new Date).getTime();
                                    n.log({t1: a - g, t2: a - f, s: t && "SUCCESS." === t.message, t: n.cache.codeType})
                                } else r.className = "omeo-code-state omeo-code-state-error", r.innerHTML = n.tipText.codeError, setTimeout(function () {
                                    var e = m(o + "omeo-code-state");
                                    e && (e.className = "", e.innerHTML = "", m(o + "omeo-code-key").value = "")
                                }, 3e3), n.cache.checkState = "codeError", i = {message: "error"}, m(o + "omeo-code-key").select(), "true" == t.refresh && n.refreshCode();
                                n.cache.callback && n.cache.callback(i)
                            }, n.loadResource(s)
                        } else n.cache.checkState = "codeError", r.className = "omeo-code-state omeo-code-state-error", r.innerHTML = "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165", n.playErrAudio(), setTimeout(function () {
                            var e = m(o + "omeo-code-state");
                            e && (e.className = "", e.innerHTML = "", e = m(o + "omeo-code-key"), e.value = "", e.focus(), n.resetPlayer({state: "playing"}), n.playAudio())
                        }, 5e3)
                    }, check: function (e) {
                        "success" == this.cache.checkState && e && e({message: "success"}), "codeError" == this.cache.checkState && e && e({message: "error"}), this.cache.callback = e
                    }, log: function () {
                    }
                }, k
            }

            var i = window, r = document, a = n(9), c = a.names, s = n(1), l = n(111).language, d = n(2);
            n(21), t.init = o
        }, function (e, t, n) {
            "use strict";

            function o() {
                var e = a.createElement("style");
                e.appendChild(a.createTextNode(""));
                var t = a.getElementsByTagName("script"), n = t[t.length - 1];
                return n.parentNode.insertBefore(e, n), e.sheet
            }

            function i(e, t, n, o) {
                "number" != typeof o && (o = 1), "insertRule" in e ? e.insertRule(t + "{" + n + "}", o) : "addRule" in e && e.addRule(t, n, o)
            }

            function r(e) {
                var t = a.createElement("style");
                t.type = "text/css", t.className = "nc-style", t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e;
                var n = a.getElementsByTagName("script"), o = n[n.length - 1];
                o.parentNode.insertBefore(t, o)
            }

            var a = document;
            e.exports = {createSheet: o, addCSSRule: i, insertCSS: r}
        }, function (e, t, n) {
            "use strict";

            function o(e, t) {
                return this.options = e || {}, this.params = t || {}, this.init(), this
            }

            function i(e) {
                var t = p.defer(), n = e.data || {}, o = ("jsonp_" + Math.random()).replace(".", "");
                s[o] = function (e) {
                    t.resolve(e)
                }, n[e.callback || "callback"] = o, t.promise.always(function () {
                    try {
                        delete s[o]
                    } catch (e) {
                        s[o] = null
                    }
                });
                var i = l.createElement("script");
                i.src = e.url + (e.url.indexOf("?") === -1 ? "?" : "&") + _.obj2param(n);
                var r = l.getElementsByTagName("script")[0];
                return r.parentNode.insertBefore(i, r), setTimeout(function () {
                    t.reject({type: "request", error: "timeout"})
                }, 5e3), t.promise
            }

            function r(e) {
                var t = p.defer(), n = new Image;
                return n.onload = function () {
                    t.resolve(this)
                }, n.onerror = function (e) {
                    t.reject({type: "img", error: e})
                }, setTimeout(function () {
                    t.reject({type: "img", error: "timeout"})
                }, 5e3), n.src = e, t.promise
            }

            function a(e) {
                e.style.display = "block"
            }

            function c(e) {
                e.style.display = "none"
            }

            var s = window, l = document, d = l.documentElement, u = function () {
                }, p = n(1), _ = n(2), f = n(3).URL_MAP, g = n(7).language, h = _.isIEX(8), m = new p(function (e, t) {
                    return h ? void t() : void r("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==").then(function (n) {
                        1 === n.width && 1 === n.height ? e() : t()
                    }, t)
                }), v = p.reject({type: "destroy"}), b = "&#xe60e;", y = "&#xe607;", k = "&#xe60a;", x = "&#xe60b;",
                w = {INITIAL: 0, READY: 1, LOADING: 2, LOAD_FAIL: 3, LOADED: 4, VERIFING: 5}, T = "nc-cc", E = {};
            _.each(w, function (e, t) {
                E[e] = T + "-status-" + t.toLowerCase().replace("_", "-")
            }), o.prototype = {
                init: function () {
                    this.initProps(), this.render(), this.bindEvents(), this.setStatus(w.READY), this.updateCaptcha(!0)
                }, setStatus: function (e) {
                    var t = this.status;
                    e !== t && (this.status = e, E[t] && _.removeClass(this.$container, E[t]), E[e] && _.addClass(this.$container, E[e]))
                }, initProps: function () {
                    this.status = w.INITIAL, this.prefix = this.options.prefix, this.nc = this.options.nc, this.urls = f[this.options.foreign] || f[0], this.language = g[this.options.language], this.$container = l.getElementById(this.prefix + "cc"), this.clickIndex = 0, this.onerror = this.options.onerror || u, this.onfail = this.options.onfail || u, this.onsuccess = this.options.onsuccess || u
                }, render: function () {
                    var e = this.language,
                        t = '\n<div class="' + T + '-body"></div>\n<div class="' + T + '-tip"><i class="nc_iconfont">' + k + "</i>" + e._cc_fail + '</div>\n<div class="' + T + '-footer">\n<div class="' + T + '-wait">\n<i class="' + T + '-loading-img"></i>' + e._wait + '\n</div>\n<div class="' + T + '-refresh" data-action="refresh"><i class="nc_iconfont" data-action="refresh">' + y + "</i>" + e._cc_refresh + '</div>\n<div class="' + T + "-btn " + T + '-confirm" data-action="confirm">' + e._verify + '</div>\n<div class="' + T + '-cancel" data-action="close"><i class="nc_iconfont" data-action="close">' + b + "</i>" + e._cancel + '</div>\n</div>\n<div class="' + T + '-mask"></div>\n<div class="' + T + '-arrow-1"></div>\n<div class="' + T + '-arrow-2"></div>\n';
                    this.$container.innerHTML = t, a(this.$container), this.pin(), _.each(["body", "footer", "tip", "confirm", "wait", "refresh", "mask"], function (e) {
                        this["$" + e] = this.klass(e)[0]
                    }, this)
                }, pin: function () {
                    var e = this.options.$wrapper, t = e.offsetWidth, n = _.getElementLeft(e), o = _.getElementTop(e),
                        i = this.$container.offsetWidth, r = s.innerWidth || d && d.clientWidth || l.body.clientWidth,
                        a = "";
                    r - t - n > i ? (a = "right", this.$container.style.left = (t - 150) / 2 + 108 + 30 + "px") : n > i && (a = "left", this.$container.style.left = -(i + 25 - (t - 150) / 2) + "px"), o < 339 && (this.$container.style.top = -o + 5 + "px"), a && _.addClass(this.$container, T + "-" + a)
                }, updateCaptcha: function (e) {
                    var t = this, n = this.language;
                    if (this.status !== w.LOADING) {
                        this.setStatus(w.LOADING), e ? this.$body.innerHTML = '\n<div class="' + T + '-loading">\n<i class="' + T + '-loading-img"></i>\n' + n._wait + "\n</div>\n" : (c(this.$refresh), a(this.$wait));
                        var o = m.then(function () {
                            return t.urls.cc
                        }, function () {
                            return t.urls.cc_pre
                        }).then(function (e) {
                            var n = t.options;
                            return i({
                                url: e,
                                data: {
                                    sessionid: n.csessionid,
                                    identity: n.appkey,
                                    style: n.value,
                                    type: "SUDOKU_IMG",
                                    token: n.token
                                }
                            })
                        }).then(function (e) {
                            return t.hasDestroy() ? v : e.success && 0 === e.result.resultCode ? (t.captchaToken = e.result.captchaToken, p.all([r(e.result.data[0]), r(e.result.data[1])])) : p.reject({
                                type: "request",
                                code: e.result.resultCode,
                                msg: e.result.message
                            })
                        }).then(function (e) {
                            return t.hasDestroy() ? v : (t.setStatus(w.LOADED), void t.renderImg(e[0], e[1]))
                        });
                        e || o.always(function () {
                            a(t.$refresh), c(t.$wait)
                        }), o["catch"](function (n) {
                            /^(request|img)$/.test(n.type) && (t[n.type + "Fail"](e), t.onerror())
                        })
                    }
                }, bindEvents: function () {
                    var e = this.nc, t = {};
                    t[w.LOAD_FAIL] = {
                        retry: function () {
                            c(this.$mask), this.updateCaptcha()
                        }
                    }, t[w.LOADED] = {
                        refresh: function () {
                            c(this.$tip), this.updateCaptcha()
                        }, confirm: this.confirm, select: this.select
                    }, this._handler = _.bind(function (n) {
                        n = _.getEvent(n);
                        var o = _.getTarget(n),
                            i = o.getAttribute("data-nc-lang") ? o.parentNode.getAttribute("data-action") : o.getAttribute("data-action");
                        i && ("close" === i && (this.destroy(), e.reset()), t[this.status] && t[this.status][i] && t[this.status][i].call(this, o, n))
                    }, this), _.addHandler(this.$container, "click", this._handler)
                }, select: function (e, t) {
                    if (_.toggleClass(e, T + "-selected"), _.hasClass(e, T + "-selected")) {
                        var n = t.pageX, o = t.pageY;
                        void 0 === n && (n = t.clientX + (l.body.scrollLeft || d.scrollLeft)), void 0 === o && (o = t.clientY + (l.body.scrollTop || d.scrollTop));
                        var i = _.getPageCoord(e.parentNode);
                        e.setAttribute("data-x", n - i.x), e.setAttribute("data-y", o - i.y), e.setAttribute("data-ci", this.clickIndex++)
                    }
                    var r = this.klass("selected"), a = r.length;
                    0 === a ? _.addClass(this.$confirm, T + "-disabled") : _.removeClass(this.$confirm, T + "-disabled"), c(this.$tip)
                }, confirm: function () {
                    var e = this, t = (e.nc, this.klass("selected"));
                    if (0 !== t.length && this.status !== w.VERIFING) {
                        this.setStatus(w.VERIFING), t = [].slice.call(t), t.sort(function (e, t) {
                            var n, o = parseInt(e.getAttribute("data-ci"), 10),
                                i = parseInt(t.getAttribute("data-ci"), 10);
                            return n = o == i ? 0 : o > i ? 1 : -1
                        });
                        var n = [];
                        _.each(t, function (e) {
                            n.push("[" + [e.getAttribute("data-x"), e.getAttribute("data-y"), e.getAttribute("data-i")].join(",") + "]")
                        }), n = "[" + n.join(",") + "]", i({
                            url: this.urls.checkcode,
                            data: {
                                csessionid: this.options.csessionid,
                                checkcode: this.params.obj2str({answer: n, captchaToken: this.captchaToken}),
                                a: this.options.appkey,
                                t: this.options.token,
                                n: s._n || "",
                                p: "{}",
                                r: Math.random(),
                                lang: this.options.language,
                                v: this.params.v
                            }
                        }).then(function (t) {
                            return e.hasDestroy() ? v : void (t.success && 100 === t.result.code ? (e.onsuccess(t.result.sig), e.destroy()) : (e.updateCaptcha(), a(e.$tip), e.onfail()))
                        })["catch"](function (t) {
                            "request" === t.type && (e.requestFail(), e.onerror())
                        })
                    }
                }, renderImg: function (e, t) {
                    for (var n = "", o = 0; o < 9; o++) n += '<a href="javascript:void(0);" class="' + T + '-item" data-action="select" data-i="' + o + '"><i class="nc_iconfont">' + x + "</i></a>";
                    this.$body.innerHTML = '\n<div class="' + T + '-header">\n<div class="' + T + '-img1-box"></div>\n<div class="' + T + '-txt">' + this.language._cc_title + '</div>\n</div>\n<div class="' + T + '-img2-box">\n<div class="' + T + '-items">\n<div class="' + T + '-items-inner">\n' + n + "\n</div>\n</div>\n</div>\n", this.klass("img1-box")[0].appendChild(e), this.klass("img2-box")[0].appendChild(t), _.addClass(this.$confirm, T + "-disabled")
                }, imgFail: function (e) {
                    this.setStatus(w.LOAD_FAIL);
                    var t = this.$body, n = this.language, o = "close";
                    e ? c(this.$footer) : (t = this.$mask, o = "retry", a(t));
                    var i = n._cc_contact.replace("%TOKEN", this.options.token);
                    t.innerHTML = '\n<div class="' + T + '-fail">\n<div class="' + T + '-fail-inner">\n<p>' + n._cc_img_fail + '</p>\n<div class="' + T + '-fail-action">\n<div class="' + T + '-btn" data-action="' + o + '">' + n._retry + '</div>\n<a href="javascript:void(0);" data-action="close">' + n._cancel + '</a>\n</div>\n<div class="' + T + '-contact">\n' + i + "\n</div>\n</div>\n</div>\n"
                }, requestFail: function (e) {
                    var t = this.language, n = t._cc_contact.replace("%TOKEN", this.options.token);
                    this.setStatus(w.LOAD_FAIL), this.$body.innerHTML = '\n<div class="' + T + '-fail">\n<div class="' + T + '-fail-inner">\n<p>' + t._cc_req_fail + '</p>\n<div class="' + T + '-fail-action">\n<div class="' + T + '-btn" data-action="close">' + t._close + '</div>\n</div>\n<div class="' + T + '-contact">\n' + n + "\n</div>\n</div>\n</div>\n", c(this.$footer)
                }, unbindEvents: function () {
                    _.removeHandler(this.$container, "click", this._handler)
                }, klass: function (e) {
                    return _.getElementsByClassName([T, e].join("-"), this.$container)
                }, destroy: function () {
                    c(this.$container), this.unbindEvents(), this.$container.innerHTML = "";
                    for (var e in this) this.hasOwnProperty(e) && delete this[e];
                    this.destroy = u
                }, hasDestroy: function () {
                    return this.destroy === u;
                }
            }, e.exports = o
        }, function (e, t, n) {
            "use strict";
            var o = {
                cn: {
                    placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
                    audioText: "\u83b7\u53d6\u8bed\u97f3\u9a8c\u8bc1\u7801",
                    imgText: "\u83b7\u53d6\u56fe\u7247\u9a8c\u8bc1\u7801",
                    refresh: "\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801",
                    codeError: "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u5373\u5c06\u64ad\u653e\u4e0b\u4e00\u6bb5",
                    clickPlay: "\u70b9\u51fb\u64ad\u653e\u8bed\u97f3",
                    audioTips: "\u8bf7\u4ed4\u7ec6\u6536\u542c"
                },
                en: {
                    placeholder: "enter the code",
                    audioText: "retrieve pass code from the audio",
                    imgText: "retrieve pass code from the image",
                    refresh: "retrieve pass code again",
                    codeError: "Incorrect pass code, please try again",
                    clickPlay: "click to play the audio",
                    audioTips: "please listen carefully"
                }
            };
            o.zh_CN = o.cn, o.en_US = o.en, t.language = o
        }, function (e, t, n) {
            "use strict";
            var o = n(113), i = n(115).makeScale, r = n(9), a = n(2), c = n(21).BaseFun, s = n(3).mmstat_base;
            t.makeNC = function (e, t, l) {
                function d(e, o, r, c) {
                    var l = n(49).makeLog(o.foreign ? s.gj : s.gm), d = o.glog;
                    "boolean" != typeof t._b_glog && (t._b_glog = d && "number" == typeof d && Math.random() < d);
                    var u = function (e) {
                        t._b_glog && !h[e] && l.log(o.appkey, UA_Opt.Token || o.token, e);
                        var n = r[e];
                        if (n && n.length) {
                            var i, a = [];
                            for (i = 1; i < arguments.length; i++) a.push(arguments[i]);
                            for (i = 0; i < n.length; i++) if (n[i].apply(null, a) === !1) return !1
                        }
                    };
                    return u = a.decorator.after(u, function (t) {
                        t === !1 && setTimeout(function () {
                            var t = window.outer_nc_list[e];
                            t && t.reload()
                        }, 1)
                    }), [i(c, t, u), u]
                }

                function u(i) {
                    i = a.mix(a.clone(g), i), t.index++, t.prefix = i.prefix || "nc_" + t.index + "_", n(114).reg(i);
                    var r = {}, s = {}, l = new c(i, a.obj2param), u = d(t.index, i, r, l), p = u[0], _ = u[1],
                        f = o.makeNoCaptcha(e, s, t, r, p, _, l), h = new f;
                    return h._index = t.index, h.init(i), h
                }

                function p(e) {
                    e && this.init(e)
                }

                function _(e) {
                    p.prototype[e] = function () {
                        if (this.is_destroyed) return this;
                        var t = f[this.index], n = t[e].apply(t, arguments);
                        return "destroy" === e && (this.is_destroyed = !0), "getToken" === e || "getTrans" === e || "setTrans" === e ? n : this
                    }
                }

                var f = [];
                window.outer_nc_list = [];
                var g = l || {}, h = r.deprecated;
                p.reset = function (e) {
                    var t = f[e];
                    t && t.reset && t.reset()
                }, p.config = function (e) {
                    a.mix(g, e)
                }, p.getByIndex = function (e) {
                    return window.outer_nc_list[e]
                }, p.prototype = {
                    init: function (e) {
                        var n = u(e);
                        return this.index = t.index, this.__nc = n, f[this.index] = n, window.outer_nc_list[this.index] = this, this
                    }
                };
                var m,
                    v = ["on", "reset", "reload", "show", "hide", "upLang", "getToken", "destroy", "getTrans", "setTrans"];
                for (m = 0; m < v.length; m++) _(v[m]);
                return p
            }
        }, function (module, exports, __webpack_require__) {
            "use strict";

            function makeNoCaptcha(module_nc, opt, inn_vars, nc_events, Scale, onNCEvent, _) {
                function _upResetIndex(e) {
                    return upResetIndex(e, nc_index)
                }

                function _getToken() {
                    return opt.token || UA_Opt.Token || umx.getToken()
                }

                function showError(e, t) {
                    var n, o = t ? '<span class="nc-errcode"> (' + t + ")</span>" : "";
                    n = e ? language[opt.language]._errorNetwork + o : language[opt.language]._errorLOADING + o, n = n.replace("%TOKEN", opt.token), n = _upResetIndex(n), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + n + "</div>", el_render_to && util.removeClass(el_render_to, "show-click-captcha")
                }

                function NoCaptcha() {
                }

                var nc_index = inn_vars.index, nc_prefix = inn_vars.prefix, scale_btn = nc_prefix + "n1z",
                    scale_bar = nc_prefix + "n1t", TEXTELEM, gErrTimes = 0, ajaxURL,
                    clsCheckCode = m_checkcode.init(inn_vars, _, onNCEvent), objCheckCode,
                    tpl = makeTemplate({idx: nc_index, prefix: nc_prefix}),
                    glog = __webpack_require__(49).makeLog(opt.foreign ? mmstat_base.gj : mmstat_base.gm),
                    report = glog.report, reportLoadJSError = function (e, t) {
                        report2.log({
                            a: opt.appkey,
                            t: _getToken(),
                            scene: opt.scene,
                            ns: "",
                            jsv: inn_vars.v,
                            usa: navigator.userAgent,
                            p: "",
                            jsType: "pc",
                            os: "",
                            em: t,
                            ec: e
                        })
                    }, el_render_to, showHelp = makeShowHelp(opt, _, inn_vars),
                    loading_circle_html = '\n        <div id="nc-loading-circle" class="nc-loading-circle">\n          <div class="sk-circle1 sk-circle"></div>\n          <div class="sk-circle2 sk-circle"></div>\n          <div class="sk-circle3 sk-circle"></div>\n          <div class="sk-circle4 sk-circle"></div>\n          <div class="sk-circle5 sk-circle"></div>\n          <div class="sk-circle6 sk-circle"></div>\n          <div class="sk-circle7 sk-circle"></div>\n          <div class="sk-circle8 sk-circle"></div>\n          <div class="sk-circle9 sk-circle"></div>\n          <div class="sk-circle10 sk-circle"></div>\n          <div class="sk-circle11 sk-circle"></div>\n          <div class="sk-circle12 sk-circle"></div>\n        </div>\n    ',
                    isIE8 = util.isIEX(8), isIE9 = util.isIEX(9);
                (isIE8 || isIE9) && (loading_circle_html = "");
                var supportDataURI = new Promise(function (e, t) {
                    return isIE8 ? void t() : void util.imageLoaded("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==").then(function (n) {
                        1 === n.width && 1 === n.height ? e() : t()
                    }, t)
                });
                return NoCaptcha.prototype = {
                    init: function (e) {
                        win.__nc = this, module_nc.nc = this;
                        var t = default_opt.language;
                        if (e.foreign && (t = "en", default_opt.language = t), _.objUpdate(opt, default_opt), _.objUpdate(opt, e), opt.token || (opt.token = default_opt.token), this.opt = opt, language[opt.language] || (opt.language = t), e.upLang) for (var n in e.upLang) _upLang(n, e.upLang[n]);
                        this.render_to = opt.renderTo, this.render_to && (el_render_to = _.id(this.render_to)), el_render_to && util.addClass(el_render_to, "nc-container"), opt.is_tbLogin && (tb_login = __webpack_require__(117).makeTBLogin(inn_vars)), ajaxURL = URL_MAP[opt.foreign] || URL_MAP[0], ajaxURL = util.mix(ajaxURL, opt.apimap), ajaxURL.awsc_Url = opt.uaUrl || ajaxURL.awsc_Url;
                        try {
                            this.initializationReport()
                        } catch (o) {
                        }
                        var i;
                        if (opt.renderTo && opt.appkey && opt.token) {
                            i = _.id(opt.renderTo);
                            var r = Math.min(i.offsetWidth, i.parentNode.offsetWidth);
                            !opt.customWidth && r > 300 && (opt.customWidth = 300), this.updateWidth(opt.customWidth), i.setAttribute("data-nc-idx", inn_vars.index.toString()), i && (i.innerHTML = '<div id="' + nc_prefix + 'nocaptcha"><div id="' + nc_prefix + 'wrapper" class="nc_wrapper"><div id="' + nc_prefix + '_n1t_loading" class="nc_scale"><div id="' + nc_prefix + '_bg" class="nc_bg" style="width: 0;"></div><div id="' + nc_prefix + '_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + loading_circle_html + "</div></div></div></div>"), UA_Opt.LogVal = "_n", this.loadJS()
                        }
                        if (opt.logo && css.insertCSS(".nc-container .nc_scale .scale_text {background-image: url(" + NC_LOGO_URL + "); background-repeat: repeat-x;}"), opt.cssUrl) if (doc.createStyleSheet) doc.createStyleSheet(opt.cssUrl); else {
                            var a = doc.createElement("link");
                            a.type = "text/css", a.rel = "stylesheet", a.className = "nc-custom-style-" + nc_index, a.href = inn_vars.has_pointman ? util.addHourStamp(opt.cssUrl) : opt.cssUrl;
                            var c = doc.getElementsByTagName("script")[0];
                            c.parentNode.insertBefore(a, c)
                        }
                        onNCEvent(event_names.init)
                    }, on: function (e, t) {
                        var n = window.console, o = event_deprecated[e];
                        o && n && n.warn && n.warn("NC: Event '" + e + "' will be deprecated, use '" + o + "' instead."), nc_events[e] = nc_events[e] || [], nc_events[e].push(t)
                    }, initializationReport: function () {
                        var e = ("initializeJsonp_" + Math.random()).replace(".", ""),
                            t = ajaxURL.initialize + "?a=" + encodeURIComponent(opt.appkey) + "&t=" + encodeURIComponent(opt.token) + "&scene=" + encodeURIComponent(opt.scene) + "&lang=" + opt.language + "&v=v1.2.17&href=" + encodeURIComponent(location.href.split("?")[0]) + "&comm={}&callback=" + e,
                            n = document.createElement("script"), o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(n, o), window[e] = function (e) {
                        }, n.src = t
                    }, updateWidth: function (e, t) {
                        if (e) {
                            var n, o, i = "undefined" == typeof e ? "undefined" : _typeof(e);
                            "number" == i ? n = e : o = "string" == i ? _.id(e) : e, o && (n = o.offsetWidth), n && (this.c_width = n, this.__is_c_width_setted = 1, this.try2setWidth(nc_prefix + "wrapper"), this.updateCSS(nc_prefix, n, t))
                        }
                    }, updateCSS: function (e, t, n) {
                        var o = util.isIEX(6), i = util.isIEX(7), r = o || i ? " !important" : "";
                        css.insertCSS((n ? "" : ".nc-container #" + e + "wrapper,.nc-container.tb-login #" + e + "wrapper{width:" + t + "px}\n") + [".nc-container .imgCaptcha", ".nc-container .clickCaptcha"].join(",") + "{width:" + (t - 2) + "px" + r + ";}\n" + [".nc-container.tb-login .imgCaptcha", ".nc-container.tb-login .clickCaptcha"].join(",") + "{width:" + t + "px" + r + ";}\n" + [".nc-container.tb-login .imgCaptcha .captcha-error", ".nc-container.tb-login .clickCaptcha .captcha-error"].join(",") + "{width:" + (t - 8) + "px" + r + ";}\n.nc-container.tb-login .errloading, .nc-container .errloading {width:" + (t - 10) + "px;}")
                    }, updateAudioBoxWidth: function (e, t, n) {
                        var o = _.id(e + "omeo-refresh-audio").offsetWidth, i = _.id(e + "_voice_close").offsetWidth,
                            r = _.id(e + "omeo-code-key").offsetWidth, a = t - o - i - r - n;
                        _.id(e + "omeo-code-audiobox").style.width = a + "px"
                    }, try2setWidth: function (e, t) {
                        "string" == typeof e && (e = _.id(e)), t = t || this.c_width || (el_render_to ? el_render_to.offsetWidth : 0), t && e && e.style && (e.style.width = t + "px")
                    }, loadJS: function () {
                        var e = this;
                        window.AWSC ? (e.loadUAB(), e.loadUM()) : _.loadjs(util.addHourStamp(ajaxURL.awsc_Url), function (t) {
                            t ? (showError(!0, ERR_CODE_AWSCTIMEOUT), report("load awsc failed"), reportLoadJSError(LOAD_JS_TIMEOUT, "awsc.js timeout")) : (e.loadUAB(), e.loadUM())
                        }, "nc-required-js-" + nc_index + " nc-awsc-script", 100)
                    }, jsReady: function () {
                        var e = this;
                        !e.ready && e.__uab && e.__um && (e.ready = !0, e.reload(), onNCEvent(event_names.ready))
                    }, loadUAB: function () {
                        var e = this;
                        UA_Opt.Token = (new Date).getTime() + ":" + opt.token, e.__uab ? e.jsReady() : (e.initUaParam(), AWSC.use("uab", function (t, n) {
                            "loaded" === t ? (e.__uab = n, e.jsReady()) : (showError(!0, ERR_CODE_UABTIMEOUT), report("load uab failed"), reportLoadJSError(LOAD_JS_TIMEOUT, "uab.js timeout"))
                        }))
                    }, initUaParam: function () {
                        function e(e, t) {
                            UA_Opt[e] = "undefined" != typeof UA_Opt[e] && UA_Opt[e] > 0 ? UA_Opt[e] : t
                        }

                        function t(e, t) {
                            n.__uaoption[e] = "undefined" != typeof UA_Opt[e] && UA_Opt[e] > 0 ? UA_Opt[e] : t
                        }

                        opt.is_Opt ? (e("MPInterval", 4), e("MaxMCLog", 12), e("MaxKSLog", 14), e("MaxMPLog", 5), e("MaxFocusLog", 6), e("SendInterval", 5), e("SendMethod", 8), e("GPInterval", 50), e("MaxGPLog", 1), e("MaxTCLog", 12), e("Flag", 2980046)) : (UA_Opt.SendInterval = 5, UA_Opt.SendMethod = 8, UA_Opt.MaxMCLog = 12, UA_Opt.MaxKSLog = 14, UA_Opt.MaxMPLog = 5, UA_Opt.MaxGPLog = 1, UA_Opt.MaxTCLog = 12, UA_Opt.GPInterval = 50, UA_Opt.MPInterval = 4, UA_Opt.MaxFocusLog = 6, UA_Opt.isSendError = 1, UA_Opt.Flag = 2980046), this.__uaoption = new Object;
                        var n = this;
                        opt.is_Opt ? (t("SendInterval", 5), t("SendMethod", 8), t("MaxMCLog", 12), t("MaxKSLog", 14), t("MaxMPLog", 5), t("MaxGPLog", 1), t("MaxTCLog", 12), t("GPInterval", 50), t("MPInterval", 4), t("MaxFocusLog", 6), t("Flag", 2980046), t("OnlyHost", 1), t("MaxMTLog", 500), t("MinMTDwnLog", 30), t("MaxNGPLog", 1), t("sIDs", ["_n1t|_n1z|nocaptcha|-stage-1"]), t("hook", 1), t("font", 1), t("api", 1)) : (n.__uaoption.SendInterval = 5, n.__uaoption.SendMethod = 8, n.__uaoption.isSendError = 1, n.__uaoption.MaxMCLog = 12, n.__uaoption.MaxKSLog = 14, n.__uaoption.MaxMPLog = 5, n.__uaoption.MaxGPLog = 1, n.__uaoption.MaxTCLog = 12, n.__uaoption.GPInterval = 50, n.__uaoption.MPInterval = 4, n.__uaoption.MaxFocusLog = 6, n.__uaoption.Flag = 2980046, n.__uaoption.OnlyHost = 1, n.__uaoption.MaxMTLog = 500, n.__uaoption.MinMTDwnLog = 30, n.__uaoption.MaxNGPLog = 1, n.__uaoption.sIDs = ["_n1t|_n1z|nocaptcha|-stage-1"], n.__uaoption.mIDs = ["nc-canvas", "click2slide-btn"], n.__uaoption.hook = 1, n.__uaoption.font = 1, n.__uaoption.api = 1), n.__uaoption.Flag |= 2097152
                    }, loadUM: function () {
                        var e = this;
                        window._umopt_npfp = .05, window._umopt_cris = .2, e.__um ? e.jsReady() : AWSC.use("um", function (t, n) {
                            if ("loaded" === t) {
                                var o = function r() {
                                    var t = location.href || "";
                                    t = t.length < 128 ? t : t.substring(0, 128), i++, e.umidToken = "defaultToken3_init_callback_not_called@@" + t + "@@" + (new Date).getTime(), n.init({
                                        timeout: opt.timeout,
                                        serviceUrl: ajaxURL.umid_serUrl,
                                        appName: opt.appkey,
                                        enableFY: 1,
                                        jf: 1,
                                        wtac: 1
                                    }, function (n, o) {
                                        "success" === n ? e.umidToken = o.tn : (e.umidToken = "defaultToken4_init_failed with " + n + "@@" + t + "@@" + (new Date).getTime(), i < 3 && r())
                                    })
                                };
                                e.__um = n, e.jsReady();
                                var i = 0;
                                o()
                            } else showError(!0, ERR_CODE_UMTIMEOUT), report("load um failed"), reportLoadJSError(LOAD_JS_TIMEOUT, "um.js timeout")
                        })
                    }, __reload_voicebtn: function () {
                        var e, t = _.id(nc_prefix + "_voicebtn"), n = this;
                        _.addHandler(t, "keydown", function o(e) {
                            var n = e || window.event;
                            13 != n.keyCode && 13 != n.which || (_.removeEvt(t, "keydown", o), t.click())
                        }), t.onclick = function () {
                            function t() {
                                r || n.umidToken.indexOf("defaultToken") ? (clearInterval(c), _.jsonp({
                                    url: ajaxURL.analyze,
                                    callback: "callback",
                                    data: {
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: n.__uab.getUA && n.__uab.getUA(n.__uaoption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                        _a: "audio",
                                        p: _.obj2str(opt.trans),
                                        lang: opt.language,
                                        scene: opt.scene,
                                        v: inn_vars.v
                                    },
                                    success: o,
                                    fail: function () {
                                        e && report("audio fail")
                                    }
                                })) : a++ > 100 && (showError(!0, ERR_CODE_UMXRETRYLIMIT), clearInterval(c))
                            }

                            function o(t) {
                                function o(e) {
                                    if (e.success) if (100 == e.result.code) n.userCallback(objCheckCode.config.sessionid, e.result.value, e.result.sig); else if (900 == e.result.code) {
                                        UA_Opt.reload && UA_Opt.reload();
                                        var t = _.id(nc_prefix + "_captcha_text"),
                                            o = language[opt.language]._errorClickTEXT;
                                        ++gErrTimes > MAX_ERR_TIME && (o = language[opt.language]._errorTooMuch.replace("%TOKEN", opt.token)), t.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + o, t.style.visibility = "visible"
                                    } else 300 != e.result.code && 69634 != e.result.code || (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300)); else n.errorCallback()
                                }

                                if (e) {
                                    var r = t.result;
                                    r && (objCheckCode || (objCheckCode = new clsCheckCode({
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: n.__uab.getUA && n.__uab.getUA(n.__uaoption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                        type: "150_40",
                                        identity: opt.appkey,
                                        sessionid: r.csessionid,
                                        element: i,
                                        codeType: "audio",
                                        lang: opt.language,
                                        scene: opt.scene,
                                        p: _.obj2str(opt.trans)
                                    }), objCheckCode.check(function (e) {
                                        "success" != e.message && (objCheckCode.playErrAudio(), setTimeout(function () {
                                            var e = _.id(nc_prefix + "omeo-refresh-audio");
                                            e && e.click()
                                        }, 5e3)), "success" == e.message && _.jsonp({
                                            url: ajaxURL.checkcode,
                                            callback: "callback",
                                            data: {
                                                csessionid: r.csessionid,
                                                checkcode: function () {
                                                    var e = {};
                                                    return e.answer = objCheckCode.cache.lastCheckCode, _.obj2str(e)
                                                }(),
                                                a: opt.appkey,
                                                t: opt.token,
                                                n: n.__uab.getUA && n.__uab.getUA(n.__uaoption) || win._n || "",
                                                p: "{}",
                                                r: Math.random(),
                                                lang: opt.language,
                                                v: inn_vars.v
                                            },
                                            success: o,
                                            fail: function (e) {
                                                n.errorCallback(e)
                                            }
                                        })
                                    }), objCheckCode.render(), onNCEvent(event_names.switchevent, {
                                        from: "scale",
                                        to: "audio"
                                    }), objCheckCode.switchCode({type: "audio"})))
                                }
                            }

                            var i = _.id(nc_prefix + "_voice");
                            if (_.id(nc_prefix + "imgCaptcha").style.display = "none", _.id(nc_prefix + "clickCaptcha").style.display = "none", e) return e = !1, i.style.display = "none", objCheckCode && objCheckCode.stopAudio(), clearInterval(win.__progtid), n.reset(), !1;
                            e = !0, i.style.display = "block", objCheckCode && (objCheckCode.resetPlayer({state: "end"}), objCheckCode.switchCode({type: "audio"}));
                            var r, a = 0;
                            setTimeout(function () {
                                r = !0
                            }, 1e3);
                            var c = setInterval(t, 100);
                            t()
                        }
                    }, reload: function () {
                        objCheckCode = null, clearInterval(win.__progtid);
                        var e = _.id(opt.renderTo);
                        e && (e.innerHTML = tpl, util.addClass(el_render_to, "nc-container")), opt.audio && (_.id(nc_prefix + "_voicebtn").style.display = "block", util.addClass(_.id(nc_prefix + "n1t"), "is_audio")), tb_login && tb_login.init(this.render_to, el_render_to, opt.customFloatHeight), this.__reload_voicebtn();
                        var t = _.id(nc_prefix + "_helpbtn");
                        t && (navigator.userAgent.indexOf("MSIE 6.0") >= 0 && (t.style.display = "none"), t.innerHTML = language[opt.language]._learning, t.onclick = function () {
                            setTimeout(showHelp, 100)
                        }), TEXTELEM = _.tag(scale_bar + " div")[1], inn_vars.TEXTELEM = TEXTELEM, opt.isEnabled && new Scale(scale_btn, scale_bar, this)
                    }, reset: function () {
                        var e = this;
                        e.ready = !1, win.UA_Opt && (UA_Opt.Token = (new Date).getTime() + ":" + opt.token);
                        var t;
                        opt.renderTo && opt.appkey && opt.token && (t = _.id(opt.renderTo), t && util.addClass(el_render_to, "nc-container"), t.innerHTML = '<div id="' + nc_prefix + 'nocaptcha"><div id="' + nc_prefix + 'wrapper" class="nc_wrapper"><div id="' + nc_prefix + '_n1t_loading" class="nc_scale"><div id="' + nc_prefix + '_bg" class="nc_bg" style="width: 0;"></div><div id="' + nc_prefix + '_scale_text_loading" class="scale_text">' + language[opt.language]._Loading + loading_circle_html + "</div></div></div></div>", e.loadJS())
                    }, show: function () {
                        el_render_to && (el_render_to.style.display = "block", tb_login && tb_login.adjustPosition(opt.customFloatHeight), this.is_show = !0)
                    }, hide: function () {
                        el_render_to && (el_render_to.style.display = "none", this.is_show = !1)
                    }, getTrans: function () {
                        return opt.trans
                    }, setTrans: function (e) {
                        return e && (opt.trans = e), opt.trans
                    }, enabled: function () {
                        return new Scale(scale_btn, scale_bar, this)
                    }, errorCallback: function (e) {
                        var t = _.id(scale_bar), n = this, o = t.getElementsByTagName("span"),
                            i = t.getElementsByTagName("div");
                        if (onNCEvent(event_names.fail), 0 !== o.length && 0 !== i.length) {
                            var r = o[0], a = i[0];
                            showError(e), util.addClass(a, "orange"), util.addClass(r, "reload"), _.addHandler(t, "click", function () {
                                UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload(), n.reload(), _.removeEvt(t, "click")
                            }), e && opt.error && opt.error(language[opt.language]._errorServer)
                        }
                    }, getElementLeft: function (e) {
                        for (var t = e.offsetLeft, n = e.offsetParent; null !== n;) t += n.offsetLeft, n = n.offsetParent;
                        return t
                    }, getElementTop: function (e) {
                        for (var t = e.offsetTop, n = e.offsetParent; null !== n;) t += n.offsetTop, n = n.offsetParent;
                        return t
                    }, getNcSession: function (e) {
                        return parseInt(e.offsetWidth + "a" + e.offsetHeight + "a" + this.getElementLeft(e) + "a" + this.getElementTop(e), 11).toString(16)
                    }, onScaleReady: function onScaleReady(elem) {
                        function waitForUmx() {
                            if (is_umx_getStatus_timeout || me.umidToken.indexOf("defaultToken")) {
                                clearInterval(timer);
                                try {
                                    UA_Opt.sendSA()
                                } catch (e) {
                                }
                                trans.umidToken = me.umidToken;
                                var t = {
                                    url: ajaxURL.analyze,
                                    callback: "callback",
                                    data: {
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: me.__uab.getUA && me.__uab.getUA(me.__uaoption) || win[UA_Opt.LogVal || "_n"] || "",
                                        p: _.obj2str(trans),
                                        scene: opt.scene || (inn_vars.has_pointman ? pointman.config.common.scene : "") || "",
                                        asyn: 0,
                                        lang: opt.language,
                                        v: inn_vars.v
                                    },
                                    success: function (e) {
                                        me.onScaleReadyCallback(e, elem)
                                    },
                                    fail: function (e) {
                                        report("onScaleReady"), showError(!0, ERR_CODE_ANALYZETIMEOUT)
                                    }
                                };
                                opt.replaceCallback ? opt.replaceCallback(t) : _.jsonp(t)
                            } else retry++ > 100 && (showError(!0, ERR_CODE_UMXRETRYLIMIT), clearInterval(timer))
                        }

                        var trans = opt.trans || {};
                        "string" == typeof trans && (trans = eval("0," + trans));
                        for (var arr = opt.elementID || [], i = 0; i < arr.length; i++) {
                            var id = arr[i], el = doc.getElementById(id);
                            el && (trans[id] = el.value)
                        }
                        try {
                            trans.ncSessionID = this.getNcSession(document.getElementById("nc_" + this._index + "_n1t"))
                        } catch (e) {
                            trans.ncSessionID = "0"
                        }
                        var me = this;
                        TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html, util.addClass(inn_vars.TEXTELEM, "nc-align-center"), util.addClass(TEXTELEM, "scale_text2");
                        var retry = 0, is_umx_getStatus_timeout;
                        setTimeout(function () {
                            is_umx_getStatus_timeout = !0
                        }, 1e3);
                        var timer = setInterval(waitForUmx, 100);
                        waitForUmx()
                    }, onScaleReadyCallback: function (e, t) {
                        if (e.success) {
                            var n = e.result, o = n.code;
                            if (0 === o) _.id(scale_btn).className = "nc_iconfont btn_ok", _.id(scale_btn).innerHTML = icon_ok_sign, TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.removeClass(t.btn.parentNode, "nc_err"), this.userCallback(n.csessionid, "pass", n.value); else if (UA_Opt.reload && (UA_Opt.Token = (new Date).getTime() + ":" + opt.token, UA_Opt.reload && UA_Opt.reload()), util.addClass(t.btn, "nc_iconfont btn_warn"), util.addClass(t.btn.parentNode, "nc_err"), t.btn.innerHTML = icon_warn, t.bar = _.tag(scale_bar + " div")[0], TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html, "function" == typeof opt.verifycallback && 300 != o && opt.verifycallback(n), 100 == o) this.__inn = 1, this.onScale100(n.csessionid, n.value); else if (200 == o) this.__inn = 1, this.onScale200(n.csessionid, n.value); else if (260 == o) this.onScale260(n.csessionid, n.value); else if (300 == o || 69634 == o) {
                                var i = function (e, t, n) {
                                    for (var o = 0, i = t, r = e.length; i < r;) o <<= 3, o += e.charCodeAt(i), i += n;
                                    o < 0 && (o = 0 - o);
                                    for (var a = "0123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", c = ""; o >= 58;) {
                                        var s = o % 58;
                                        c = a[s] + c, o = (o - s) / 58
                                    }
                                    c += a[(new Date).getDate()];
                                    var l = c.length;
                                    return l > 6 && (c = c.substr(l - 6, l - 1)), c
                                };
                                report("block"), util.removeClass(inn_vars.TEXTELEM, "nc-align-center"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "(error:" + i(opt.token, 0, 1) + ")</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300)
                            }
                        } else this.errorCallback()
                    }, onScale100: function e(t, n, o) {
                        var i = e, r = o || this, a = this, c = _.tag(nc_prefix + "clickCaptcha div");
                        this.__inn && (this.__inn = 0, _.addHandler(_.id(nc_prefix + "_btn_2"), "click", function () {
                            i.call(r, t, n)
                        }));
                        var s, l = setTimeout(function () {
                            l = -1, s || (showError(!0, ERR_CODE_UABTIMEOUT), report("captcha timeout"))
                        }, 5e3);
                        onNCEvent(event_names.beforeverify), onNCEvent(event_names.before_code), supportDataURI.then(function () {
                            return ajaxURL.get_captcha
                        }, function () {
                            return ajaxURL.get_captcha_pre
                        }).then(function (e) {
                            _.jsonp({
                                url: e,
                                callback: "callback",
                                data: {sessionid: t, identity: opt.appkey, style: n, lang: opt.language, v: inn_vars.v},
                                success: function (e) {
                                    if (e.result.question && (e.result.question = e.result.question.replace(/<span[^>]+?>/g, "<i>"), e.result.question = e.result.question.replace(/<\/span[^>]*?>/g, "</i>"), r.captchaToken = e.result.captchaToken), s = !0, l != -1) {
                                        if (clearTimeout(l), !e.result.tags) return report("no tag"), void showError(!0, ERR_CODE_CAPTCHA_NOTAG);
                                        var o = _.id(nc_prefix + "clickCaptcha");
                                        o && (o.style.display = "block", r.__is_c_width_setted || r.updateWidth(_.id(nc_prefix + "wrapper"), 1)), el_render_to && util.addClass(el_render_to, "show-click-captcha");
                                        var d = opt.appkey + "&sessionid",
                                            u = e.result.question.split(e.result.tags[0]), p = u.shift();
                                        util.removeClass(inn_vars.TEXTELEM, "nc-align-center"), _.id(nc_prefix + "_scale_text") && (e.result.question.indexOf("<i>") == -1 ? _.id(nc_prefix + "_scale_text").innerHTML = p + "<i>\u201c" + e.result.tags[0] + "\u201d</i>" + u.join(e.result.tags[0]) : _.id(nc_prefix + "_scale_text").innerHTML = e.result.question), tb_login && tb_login.getInform(_.id(nc_prefix + "clickCaptcha"), module_nc.nc), c[1].innerHTML = '<img src="' + e.result.data + '" >';
                                        var f, g = c[1].getElementsByTagName("img")[0];
                                        g.onload = function () {
                                            f = !0, h != -1 && clearTimeout(h)
                                        }, g.onerror = function () {
                                            report("captcha onerror"), showError()
                                        };
                                        var h = setTimeout(function () {
                                            h = -1, f || (showError(!0, ERR_CODE_IMAGE_TIMEOUT), report("captcha timeout"))
                                        }, 5e3);
                                        _.addHandler(g, "click", function (e) {
                                            util.addClass(inn_vars.TEXTELEM, "nc-align-center"), TEXTELEM.innerHTML = language[opt.language]._Loading + loading_circle_html, _.jsonp({
                                                url: ajaxURL.checkcode,
                                                callback: "callback",
                                                data: {
                                                    csessionid: t,
                                                    checkcode: function () {
                                                        var t = {};
                                                        return t.imgid = d, t.w = g.width.toString(), t.h = g.height.toString(), t.x = void 0 === e.offsetX ? util.getOffset(e).offsetX : e.offsetX, t.y = void 0 === e.offsetY ? util.getOffset(e).offsetY : e.offsetY, t.x = parseInt(t.x).toString(), t.y = parseInt(t.y).toString(), t.captchaToken = r.captchaToken, _.obj2str(t)
                                                    }(),
                                                    a: opt.appkey,
                                                    t: opt.token,
                                                    n: a.__uab.getUA && a.__uab.getUA(a.__uaoption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                                    p: "{}",
                                                    r: Math.random(),
                                                    lang: opt.language,
                                                    v: inn_vars.v
                                                },
                                                success: function (e) {
                                                    var o = _.id(scale_btn);
                                                    if (e.success) if (100 == e.result.code) o.className = "nc_iconfont btn_ok", o.innerHTML = icon_ok_sign, util.addClass(inn_vars.TEXTELEM, "nc-align-center"), _.tag(scale_bar + " div")[0].className = "nc_bg", TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.removeClass(o.parentNode, "nc_err"), _.toggle(nc_prefix + "clickCaptcha"), el_render_to && util.removeClass(el_render_to, "show-click-captcha"), r.userCallback && r.userCallback(t, n, e.result.sig); else if (900 == e.result.code) {
                                                        UA_Opt.reload && UA_Opt.reload(), i.call(r, t, n, r);
                                                        var a = _.id(nc_prefix + "_captcha_text"),
                                                            c = language[opt.language]._errorClickTEXT;
                                                        ++gErrTimes > MAX_ERR_TIME && (c = language[opt.language]._errorTooMuchClick.replace("%TOKEN", opt.token)), a.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + c, a.style.visibility = "visible"
                                                    } else 300 != e.result.code && 69634 != e.result.code || (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300)); else r.errorCallback()
                                                },
                                                fail: function (e) {
                                                    r.errorCallback(e)
                                                }
                                            })
                                        }), onNCEvent(event_names.afterverify), onNCEvent(event_names.after_code)
                                    }
                                },
                                fail: function () {
                                    _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._errorLOADING) + "</div>", r.errorCallback(!0)
                                }
                            })
                        })
                    }, onScale200: function t(e, n) {
                        function o(e) {
                            var t = _.id(nc_prefix + "captcha_input");
                            return (g = t.value.replace(/[^\w\/]/gi, "")) ? (g.length > f.length ? p.push(g.slice(f.length)) : g.length < f.length ? p.push("bsp") : p.push("oth"), void (f = g)) : (f = "", void p.push("oth"))
                        }

                        function i() {
                            var t = _.tag(nc_prefix + "imgCaptcha input")[0].value;
                            if (t) {
                                var o = {ksl: p.slice(0, 20)};
                                _.jsonp({
                                    url: ajaxURL.checkcode,
                                    callback: "callback",
                                    data: {
                                        csessionid: e,
                                        checkcode: function () {
                                            var e = {};
                                            return e.answer = t, e.captchaToken = s.captchaToken, _.obj2str(e)
                                        }(),
                                        a: opt.appkey,
                                        t: opt.token,
                                        n: r.__uab.getUA && r.__uab.getUA(r.__uaoption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                        p: _.obj2str(o),
                                        lang: opt.language,
                                        v: inn_vars.v
                                    },
                                    success: function (t) {
                                        if (t.success) {
                                            var o = _.id(scale_btn), i = _.tag(nc_prefix + "imgCaptcha div")[2];
                                            if (100 == t.result.code) o.className = "nc_iconfont btn_ok", o.innerHTML = icon_ok_sign, _.tag(scale_bar + " div")[0].className = "nc_bg", TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.addClass(inn_vars.TEXTELEM, "nc-align-center"), util.removeClass(o.parentNode, "nc_err"), i.style.borderTopColor = "#e5e5e5", _.toggle(nc_prefix + "imgCaptcha"), s.userCallback.call(this, e, n, t.result.sig); else if (900 == t.result.code) {
                                                var r = _.tag(nc_prefix + "imgCaptcha input")[0];
                                                r && (r.value = ""), UA_Opt.reload && UA_Opt.reload(), c.call(s, e, n);
                                                var a = language[opt.language]._errorTEXT;
                                                ++gErrTimes > MAX_ERR_TIME && (a = language[opt.language]._errorTooMuch.replace("%TOKEN", opt.token));
                                                var l = _.id(nc_prefix + "_captcha_img_text");
                                                l.innerHTML = '<i class="nc_iconfont icon_close">' + icon_close + "</i>" + a, l.style.display = "block", l.style.visibility = "visible", i.style.borderTopColor = "red"
                                            } else 300 != t.result.code && 69634 != t.result.code || (report("block"), _.id(opt.renderTo).innerHTML = '<div class="errloading"><i class="nc_iconfont icon_warn">' + icon_warn + "</i>" + _upResetIndex(language[opt.language]._error300) + "</div>", onNCEvent(event_names.error), onNCEvent(event_names.error300))
                                        } else s.errorCallback();
                                        p = [], f = ""
                                    },
                                    fail: function (e) {
                                        s.errorCallback(e)
                                    }
                                })
                            }
                        }

                        onNCEvent(event_names.beforeverify), onNCEvent(event_names.before_code);
                        var r = this, a = _.id(nc_prefix + "imgCaptcha");
                        a && (this.__is_c_width_setted || this.updateWidth(_.id(nc_prefix + "wrapper"), 1));
                        var c = t, s = this, l = _.tag(nc_prefix + "imgCaptcha div"),
                            d = supportDataURI.then(function () {
                                return ajaxURL.get_img
                            }, function () {
                                return ajaxURL.get_img_pre
                            }).then(function (t) {
                                var o = opt;
                                return util.request({
                                    url: t,
                                    data: {sessionid: e, identity: o.appkey, token: opt.token, style: n}
                                })
                            }).then(function (e) {
                                return e.success && 0 === e.result.resultCode ? (s.captchaToken = e.result.captchaToken, util.imageLoaded(e.result.data[0])) : Promise.reject({
                                    type: "request",
                                    code: e.result.resultCode,
                                    msg: e.result.message
                                })
                            }).then(function (t) {
                                a.style.display = "block", l[1].innerHTML = "", l[1].appendChild(t);
                                var o = l[1].getElementsByTagName("img")[0];
                                _.addHandler(o, "click", function () {
                                    c.call(s, e, n)
                                }), TEXTELEM.innerHTML = language[opt.language]._noTEXT, tb_login && tb_login.getInform(_.id(nc_prefix + "imgCaptcha"), module_nc.nc), util.removeClass(inn_vars.TEXTELEM, "nc-align-center"), _.id(nc_prefix + "scale_submit").innerHTML = language[opt.language]._submit
                            });
                        d["catch"](function (e) {
                            /^(request)$/.test(e.type) ? showError(!0, ERR_CODE_IMAGE_REQUEST_ERROR) : /^(img)$/.test(e.type) && showError()
                        });
                        var u, p = [], f = "", g = "";
                        this.__inn && (this.__inn = 0, _.addHandler(_.id(nc_prefix + "scale_submit"), "click", i), _.addHandler(_.id(nc_prefix + "_btn_2"), "click", function () {
                            c.call(this, e, n)
                        }), window.addEventListener ? _.id(nc_prefix + "captcha_input").addEventListener("input", o) : _.id(nc_prefix + "captcha_input").attachEvent("onpropertychange", function (e) {
                            "value" === e.propertyName && o()
                        }), u = _.id(nc_prefix + "imgCaptcha"), u && (u = u.getElementsByTagName("input")[0]) && _.addHandler(u, "keydown", function (e) {
                            if (e = e || window.event, 13 == e.keyCode || 13 == e.which) return i(), e.preventDefault ? e.preventDefault() : window.event.returnValue = !1, !1
                        })), onNCEvent(event_names.afterverify), onNCEvent(event_names.after_code)
                    }, onScale260: function (e, t) {
                        var n = this;
                        onNCEvent(event_names.beforeverify), onNCEvent(event_names.before_code), TEXTELEM.innerHTML = language[opt.language]._cc_select, this.imgCategoryCaptcha = new ImgCategoryCaptcha(util.mix({
                            nc: this,
                            prefix: nc_prefix,
                            $wrapper: _.id(nc_prefix + "wrapper"),
                            csessionid: e,
                            value: t,
                            onfail: function () {
                                onNCEvent(event_names.fail)
                            },
                            onerror: function () {
                                onNCEvent(event_names.error), onNCEvent(event_names.error300)
                            },
                            onsuccess: function (o) {
                                var i = _.id(scale_btn);
                                i.className = "nc_iconfont btn_ok", i.innerHTML = icon_ok_sign, TEXTELEM.innerHTML = language[opt.language]._yesTEXT, util.removeClass(i.parentNode, "nc_err");
                                try {
                                    n.userCallback(e, t, o)
                                } catch (r) {
                                    throw r
                                }
                            }
                        }, opt), {
                            v: inn_vars.v,
                            obj2str: _.obj2str
                        }), onNCEvent(event_names.afterverify), onNCEvent(event_names.after_code)
                    }, userCallback: function (e, t, n) {
                        var o = {csessionid: e || null, value: t || null, sig: n || null, token: _getToken()};
                        opt.callback && opt.callback.call(this, o), onNCEvent(event_names.success, o)
                    }, upLang: function (e, t) {
                        return _upLang(e, t)
                    }, getToken: function () {
                        return _getToken()
                    }, destroy: function () {
                        el_render_to.innerHTML = "";
                        var e, t, n, o = util.getElementsByClassName("nc-custom-style-" + nc_index);
                        if (util.getElementsByClassName("nc-required-js-" + nc_index), e = o.length, e > 0) for (t = 0; t < e; t++) n = o[0].parentNode, n && n.removeChild(o[0])
                    }
                }, NoCaptcha
            }

            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, win = window, doc = document, tb_login, util = __webpack_require__(2),
                ImgCategoryCaptcha = __webpack_require__(110), mmstat_base = __webpack_require__(3).mmstat_base,
                URL_MAP = __webpack_require__(3).URL_MAP, language = __webpack_require__(7).language,
                _upLang = __webpack_require__(7).upLang, upResetIndex = __webpack_require__(7).upResetIndex,
                makeTemplate = __webpack_require__(118).makeTemplate, m_checkcode = __webpack_require__(108),
                makeShowHelp = __webpack_require__(116).makeShowHelp, default_opt = __webpack_require__(22).default_opt,
                report2 = __webpack_require__(5), css = __webpack_require__(109), MAX_ERR_TIME = 3,
                NC_LOGO_URL = "https://img.alicdn.com/tfs/TB1itI1PVXXXXXTXVXXXXXXXXXX-52-32.png",
                ERR_CODE_ANALYZETIMEOUT = "00", ERR_CODE_UABTIMEOUT = "01", ERR_CODE_UMTIMEOUT = "02",
                ERR_CODE_AWSCTIMEOUT = "03", ERR_CODE_UMXUNDEFINED = "04", ERR_CODE_UMXRETRYLIMIT = "08",
                ERR_CODE_CAPTCHA_NOTAG = "16", ERR_CODE_IMAGE_TIMEOUT = "32", ERR_CODE_IMAGE_REQUEST_ERROR = "64",
                LOAD_JS_TIMEOUT = "LOAD_JS_TIMEOUT", icon_warn = "&#xe60a;", icon_ok_sign = "&#xe60b;",
                icon_close = "&#xe609;", m_event = __webpack_require__(9), event_names = m_event.names,
                event_deprecated = m_event.deprecated, Promise = __webpack_require__(1);
            exports.makeNoCaptcha = makeNoCaptcha
        }, function (e, t, n) {
            "use strict";
            t.reg = function (e) {
                if (location.hostname.indexOf("alipay.com") !== -1) {
                    var t = e.renderTo;
                    if (t && "string" == typeof t) {
                        t = t.replace("#", "");
                        var n = document.getElementById(t);
                        if (n) {
                            var o = n.parentNode;
                            o && "_umfp" == o.id && (e.customWidth = e.customWidth || 300)
                        }
                    }
                }
            }
        }, function (e, t, n) {
            "use strict";

            function o() {
                var e = navigator.userAgent;
                return !/Firefox|MSIE/.test(e)
            }

            function i(e, t, n) {
                function i(e, n, i) {
                    t.TEXTELEM && (t.TEXTELEM.innerHTML = s[i.opt.language || l.language]._startTEXT, o() && c.addClass(t.TEXTELEM, "slidetounlock")), this.btn = a.getElementById(e), this.bar = a.getElementById(n), this.txt = a.getElementById(u + "_scale_text"), this.step = this.bar.getElementsByTagName("DIV")[0], this.init(i)
                }

                var u = t.prefix;
                return i.prototype = {
                    init: function (t) {
                        function o(o) {
                            function r() {
                                s.btn.onmousedown = null, s.txt.onmousedown = null, e.removeEvt(l, "mousemove", a), e.removeEvt(l, "mouseup", f), e.removeEvt(l, "touchmove", h), e.removeEvt(l, "touchend", g), e.removeEvt(s.btn, "touchstart", i), e.removeEvt(s.txt, "touchstart", i);
                                var o = {};
                                o.btn = s.btn, o.bar = s.bar.childNodes[1], n(d.actionend), n(d.slide_end), t.onScaleReady(o)
                            }

                            function a(e) {
                                m || (n(d.actionstart), n(d.slide_start), m = !0);
                                var t = (e || p.event).clientX, o = _.min(y, _.max(-2, k + (t - v)));
                                s.btn.style.left = o + "px", s.ondrag(_.round(100 * _.max(0, o / y)), o);
                                var i = x + s.bar.offsetWidth;
                                if (t >= i && (o < y || t - k < y)) return void f.call(this);
                                var a = c.getClientRect(s.btn).left;
                                o != y && t - a - b != y || r()
                            }

                            function f() {
                                var t = parseInt(s.btn.style.left);
                                t < y && (c.addClass(s.btn, "button_move"),
                                    c.addClass(e.id(u + "_bg"), "bg_move"), s.btn.style.left = "0px", s.ondrag(0, 0), setTimeout(function () {
                                    c.removeClass(s.btn, "button_move"), c.removeClass(e.id(u + "_bg"), "bg_move")
                                }, 500)), e.removeEvt(this, "touchmove", h), e.removeEvt(l, "touchmove", h), e.removeEvt(l, "mousemove", a), e.removeEvt(l, "mouseup", f)
                            }

                            function g(e) {
                                f.call(this, e.touches[0])
                            }

                            function h(e) {
                                e.preventDefault(), a.call(this, e.touches[0])
                            }

                            var m = !1, v = (o || p.event).clientX, b = s.btn.offsetWidth, y = s.bar.offsetWidth - b,
                                k = s.btn.offsetLeft, x = c.getClientRect(s.bar).left;
                            e.addHandler(l, "mousemove", a), e.addHandler(l, "mouseup", f), e.addHandler(l, "touchmove", h), e.addHandler(l, "touchend", g)
                        }

                        function i(e) {
                            e.preventDefault(), o.call(this, e.touches[0])
                        }

                        var s = this, l = a, p = r, _ = Math;
                        s.btn.onmousedown = o, s.txt.onmousedown = o, e.addHandler(s.btn, "touchstart", i), e.addHandler(s.txt, "touchstart", i), s.bar.onselectstart = function () {
                            return !1
                        }
                    }, ondrag: function (e, t) {
                        this.step.style.width = Math.max(0, t) + "px"
                    }, text: function () {
                    }
                }, i
            }

            var r = window, a = document, c = n(2), s = n(7).language, l = n(22).default_opt, d = n(9).names;
            t.makeScale = i
        }, function (e, t, n) {
            "use strict";

            function o(e, t, n) {
                function o() {
                    c || (c = a()), c()
                }

                function a() {
                    function n() {
                        var e = i.createElement("div");
                        return e.innerHTML = a, e.firstChild
                    }

                    function o() {
                        function n() {
                            var t = 0, n = 260, o = setInterval(function () {
                                t += 5, t > n ? (p.innerHTML = r[e.language]._Loading, t > n + 100 && (p.innerHTML = r[e.language]._yesTEXT, clearInterval(o), setTimeout(function () {
                                    _.click()
                                }, 2e3))) : (f.style.left = s + 20 + t + "px", u.style.left = t + "px", p.style.width = t + "px")
                            }, 16)
                        }

                        p.innerHTML = "", c.style.display = "block";
                        var o = t.id(e.renderTo), a = o.getBoundingClientRect(), s = a.left,
                            l = a.top + 20 + i.body.scrollTop;
                        d.style.left = s + "px", d.style.top = l + "px", u.style.left = s - 10 + "px", f.style.left = s + 20 + "px", f.style.top = l + 20 + "px", _.style.left = s + 200 + "px", _.style.top = l + 90 + "px", n()
                    }

                    var a = '<div id="' + s + '_help" class="nc_help"><div class="mask"></div><div id="' + s + '_slide_box" class="nc_scale"><div id="' + s + '_slide_button"></div><div id="' + s + '_slide_text" class="scale_text"></div><div id="' + s + '_slide_bg"></div></div><div id="' + s + '_btn_close"></div><div id="' + s + '_hand"></div>',
                        c = n(a);
                    i.body.appendChild(c), c.style.display = "none", c.style.width = i.body.scrollWidth + "px", c.style.height = i.body.scrollHeight + "px";
                    var l = t.id(s + "_slide_text");
                    l.innerHTML = r[e.language]._startTEXT;
                    var d = t.id(s + "_slide_box"), u = t.id(s + "_slide_button"), p = t.id(s + "_slide_bg"),
                        _ = t.id(s + "_btn_close"), f = t.id(s + "_hand");
                    return _.innerHTML = r[e.language]._closeHelp, _.onclick = function () {
                        c.style.display = "none"
                    }, o
                }

                var c, s = n.prefix;
                return o
            }

            var i = document, r = n(7).language;
            t.makeShowHelp = o
        }, function (e, t, n) {
            "use strict";

            function o(e) {
                function t(e) {
                    return i.getElementById(e)
                }

                function o(e) {
                    if (!e) return 0;
                    for (var t = e.offsetTop, n = e.offsetParent; n;) t += n.offsetTop, n = n.offsetParent;
                    return t
                }

                function r(e, t) {
                    var n, o, i, r = e.getElementsByTagName("div");
                    for (n = 0; n < r.length; n++) if (o = r[n], i = o.className, i && i.indexOf(t) > -1) return o;
                    return null
                }

                function a(e) {
                    var n = t(g + "_scale_text"), o = r(e, "captcha-error");
                    o || (o = i.createElement("div"), o.className = "captcha-error login-msg error", e.appendChild(o)), o.innerHTML = ["<i class='nc_iconfont icon_ban'>&#xe603;</i>", "<p class='error'>", n.innerHTML, "</p>"].join("")
                }

                function c(e, t) {
                    var n = e.className;
                    n.match(new RegExp("(^|\\s)" + t + "(\\s|$)")) || (e.className = (e.className + " " + t).replace(/^\s+|\s+$/g, ""))
                }

                function s() {
                    var e = 0, n = t("J_Message");
                    return n && (e = n.offsetHeight), e
                }

                function l() {
                    s() > 0 && f && c(f, "nc-tm-min-fix")
                }

                function d(e) {
                    if (f) {
                        var n;
                        m && (n = t(g + "_btn_1")) && (n.style.position = "absolute", n.style.top = "77px", n.style.right = "0");
                        var i = f.className || "", r = "tb-login";
                        i.indexOf(r) == -1 && (f.className = (i + " " + r).replace(/^\s+|\s+$/g, "")), f.className.match(/\bnc-old-login\b/) && (p = !0);
                        var a;
                        if (a = t("J_LoginBox") || t("J_Login") || h.getElementsByClassName("nc-outer-box")[0]) {
                            var c = p ? 0 : 2, u = o(f), _ = d;
                            if (u <= 0) {
                                if (_._count > 100) return;
                                return _._count = (_._count || 0) + 1, void setTimeout(_, 100)
                            }
                            var v, b, y = o(a) - u, k = a.getBoundingClientRect();
                            "number" == typeof e ? (v = e, b = 1) : v = k.height ? k.height : k.bottom - k.top;
                            var x, w;
                            w = t(g + "imgCaptcha"), w && (w.style.top = y + c + "px", x = v - c - 66, b && (x -= 13), b || 0 !== s() || (w.style.minHeight = "290px", x -= 10), w.style.height = x + "px", b && (w.style.minHeight = 0)), w = t(g + "clickCaptcha"), w && (w.style.top = y + c + "px", p ? (l(), x = v + 30, x < 255 && (x = 255), w.style.height = x + "px") : (l(), x = v - c - 30, b && (x -= 8), w.style.height = x + "px"), b && (w.style.minHeight = 0))
                        }
                    }
                }

                function u(e, t, n) {
                    _ = e, f = t, d(n)
                }

                var p, _, f, g = e.prefix, h = n(2), m = h.isIEX(6);
                return {init: u, adjustPosition: d, getInform: a}
            }

            var i = document;
            t.makeTBLogin = o
        }, function (e, t, n) {
            "use strict";

            function o(e) {
                var t = e.prefix,
                    n = '\n<div id="' + t + 'wrapper" class="nc_wrapper">\n<div id="' + t + 'n1t" class="nc_scale">\n<div id="' + t + '_bg" class="nc_bg"></div>\n<span id="' + t + 'n1z" class="nc_iconfont btn_slide">&#xe601;</span>\n<div id="' + t + '_scale_text" class="scale_text"></div>\n<div id="' + t + 'clickCaptcha" class="clickCaptcha">\n<div class="clickCaptcha_text">\n<b id="' + t + '_captcha_text" class="nc_captch_text"></b>\n<i id="' + t + '_btn_2" class="nc_iconfont nc_btn_2 btn_refresh">&#xe607;</i>\n</div>\n<div class="clickCaptcha_img"></div>\n<div class="clickCaptcha_btn"></div>\n</div>\n<div id="' + t + 'imgCaptcha" class="imgCaptcha">\n<div class="imgCaptcha_text"><input id="' + t + 'captcha_input" maxlength="6" type="text" style="ime-mode:disabled"></div>\n<div class="imgCaptcha_img" id="' + t + '_imgCaptcha_img"></div>\n<i id="' + t + '_btn_1" class="nc_iconfont nc_btn_1 btn_refresh"\n    onclick="document.getElementById(\'' + t + '_imgCaptcha_img\').children[0].click()">&#xe607;</i>\n<div class="imgCaptcha_btn">\n<div id="' + t + '_captcha_img_text" class="nc_captcha_img_text"></div>\n<div id="' + t + 'scale_submit" class="nc_scale_submit"></div>\n</div>\n</div>\n<div id="' + t + 'cc" class="nc-cc"></div>\n<i id="' + t + '_voicebtn" tabindex="0" role="button" class="nc_voicebtn nc_iconfont" style="display:none" >&#xe604;</i>\n<b id="' + t + '_helpbtn" class="nc_helpbtn"></b>\n</div>\n<div id="' + t + '_voice" class="nc_voice"></div>\n</div>\n';
                return n
            }

            t.makeTemplate = o
        }, function (e, t, n) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }

                    return function (t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(), r = n(13), a = n(17), c = n(4), s = n(124).default_opt, l = n(5), d = n(1),
                u = [{name: "init", from: "initially", to: "loading"}, {
                    name: "load",
                    from: "loading",
                    to: "ready"
                }, {name: "loaderror", from: ["loading", "ready"], to: "load_error"}, {
                    name: "continueloading",
                    from: "load_error",
                    to: "loading"
                }, {name: "verify", from: ["ready", "fail"], to: "verifying"}, {
                    name: "timeout",
                    from: "ready",
                    to: "actiontimeout"
                }, {name: "verifyfail", from: ["ready", "verifying"], to: "fail"}, {
                    name: "verifyerror",
                    from: "verifying",
                    to: "error"
                }, {name: "verifytwostep", from: "verifying", to: "need_two_step_verify"}, {
                    name: "verifypass",
                    from: "verifying",
                    to: "pass"
                }, {name: "reset", from: ["*"], to: "reseting"}, {
                    name: "resetdone",
                    from: "reseting",
                    to: "loading"
                }, {name: "destroy", from: ["*"], to: "destroyed"}, {
                    name: "showtwostep",
                    from: "need_two_step_verify",
                    to: "ts_loading"
                }, {name: "ts_load", from: "ts_loading", to: "ts_ready"}, {
                    name: "ts_verify",
                    from: ["ts_ready", "ts_fail"],
                    to: "ts_verifying"
                }, {name: "ts_verifyfail", from: "ts_verifying", to: "ts_fail"}, {
                    name: "ts_verifyerror",
                    from: "ts_verifying",
                    to: "ts_error"
                }, {name: "ts_verifyerror2", from: "ts_error", to: "error"}, {
                    name: "ts_verifypass",
                    from: "ts_verifying",
                    to: "ts_pass"
                }, {name: "ts_passed", from: "ts_pass", to: "pass"}], p = function () {
                    function e(t, n, i) {
                        o(this, e);
                        var r = s.language;
                        t.foreign && (r = "en", s.language = r), this.options = c.mix({}, r, i, t), this.inn_vars = n, n.index++, this.index = n.index, this.jsv = n.v, this.el = document.getElementById(t.renderTo.replace(/^#/, "")), this.el || a.fail("'renderTo'(" + t.renderTo + ") does not match any node."), this.makeFSM(), this.initStates(), this.event_listeners = {}, this._custom_state = {}, this.fsm.init()
                    }

                    return i(e, [{
                        key: "makeFSM", value: function () {
                            var e = this;
                            this.fsm = r.create({
                                initial: "initially",
                                events: u
                            }), this.fsm.onenterstate = function (t, n, o) {
                                if ("loading" !== o) {
                                    var i = e._custom_state[o];
                                    Array.isArray(i) && d.all(c.map(i, function (e) {
                                        return e()
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "initStates", value: function () {
                            var e = this;
                            c.map(u, function (t) {
                                n(134)("./" + t.to).init(e)
                            })
                        }
                    }, {
                        key: "on", value: function (e, t) {
                            (this.event_listeners[e] = this.event_listeners[e] || []).push(t)
                        }
                    }, {
                        key: "reg", value: function (e, t) {
                            this._custom_state[e] = this._custom_state[e] || [], this._custom_state[e].push(t)
                        }
                    }, {
                        key: "fire", value: function (e) {
                            for (var t = this.event_listeners[e] = this.event_listeners[e] || [], n = 0; n < t.length && t[n].call() !== !1; n++) ;
                        }
                    }, {
                        key: "reload", value: function () {
                            this.fsm.reset()
                        }
                    }, {
                        key: "reset", value: function () {
                            this.fsm.reset()
                        }
                    }, {
                        key: "show", value: function () {
                            this.el.style.display = "block"
                        }
                    }, {
                        key: "hide", value: function () {
                            this.el.style.display = "none"
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.is_destroyed || (this.fsm.destroy(), this.is_destroyed = !0)
                        }
                    }, {
                        key: "_log", value: function (e, t, n) {
                            var o = this.options,
                                i = o.token || UA_Opt.Token || ("undefined" != typeof umx && umx.getToken ? umx.getToken() : "");
                            l.log({
                                a: o.appkey,
                                t: i,
                                scene: o.scene,
                                ns: "",
                                jsv: this.jsv,
                                usa: navigator.userAgent,
                                p: n,
                                jsType: "pc",
                                os: c.getOS(),
                                em: t,
                                ec: e
                            })
                        }
                    }]), e
                }();
            t.NC2 = p
        }, function (e, t, n) {
            "use strict";
            e.exports = n(21).BaseFun
        }, function (module, exports, __webpack_require__) {
            "use strict";

            function _classCallCheck(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            var _slicedToArray = function () {
                    function e(e, t) {
                        var n = [], o = !0, i = !1, r = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0) ;
                        } catch (s) {
                            i = !0, r = s
                        } finally {
                            try {
                                !o && c["return"] && c["return"]()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return n
                    }

                    return function (t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(), _createClass = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }

                    return function (t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(), html = __webpack_require__(123).html, kvTpl = __webpack_require__(19),
                BaseFn = __webpack_require__(120), util = __webpack_require__(4), cfg = __webpack_require__(23),
                URL_MAP = __webpack_require__(68).URL_MAP, language = __webpack_require__(24).language,
                replaceLang = __webpack_require__(24).replaceLang, upResetIndex = __webpack_require__(24).upResetIndex,
                Promise = __webpack_require__(1), Report = __webpack_require__(5), doc = document,
                getElementById = function (e) {
                    return doc.getElementById(e)
                }, styleEl = function (e, t, n) {
                    return e.style[t] = n
                }, ERR_CODE_API_FAIL = "SCRAPE_API_FAIL", FAIL_PREPARE = "fail_prepare", FAIL_ANALYZE = "fail_analyze",
                win = window;
            __webpack_require__(26), __webpack_require__(132);
            var obj_w = -1, obj_h = -1, Scrape = function () {
                function Scrape(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    _classCallCheck(this, Scrape), this.nc = e, this.prefix = e.prefix || "nc_" + e.index + "_", this.root = e.el;
                    var n = {};
                    if (t.foreign && (n.language = n.language || "en"), this.options = util.mix({}, cfg.default_options, n, e.options || {}, t), this._last_x = -1, this._last_y = -1, this.stroke_size = t.stroke_size || cfg.default_stroke_width, this.svr_data = {}, this._t_action = null, this.is_downgraded = !1, this._lang = language[this.options.language] || language.cn, this.options.upLang) for (var o in this.options.upLang) this._lang = replaceLang(o, this.options.upLang[o]);
                    this.scrapeStart = !1, this.showingHow = !1, this.mousedown = !1, this.baseFn = new BaseFn(this.options, util.obj2param), this.reg();
                    var i = URL_MAP[this.options.foreign] || URL_MAP[0];
                    this.ajaxURL = util.mix(i, this.options.apimap);
                    var r = this;
                    window.report = function (e) {
                        r.report.call(r, e)
                    }
                }

                return _createClass(Scrape, [{
                    key: "reg", value: function () {
                        var e = this, t = this.nc;
                        t.reg("_on_loading", function () {
                            return e.loading_render()
                        }), t.reg("loading", function () {
                            return e.loading_initGetSize()
                        }), t.reg("verifying", function () {
                            return e.verifyMethod()
                        }), t.reg("load_error", function () {
                            return e.on_load_error()
                        }), t.reg("pass", function () {
                            return e.on_pass()
                        }), t.reg("fail", function () {
                            return e.on_fail()
                        }), t.reg("reseting", function () {
                            return e.on_reseting()
                        }), t.reg("actiontimeout", function () {
                            return e.on_actiontimeout()
                        }), t.on_leave_loading = function () {
                            return e.on_leave_loading()
                        }
                    }
                }, {
                    key: "report", value: function (e) {
                        var t = this;
                        Report.log({
                            a: t.options.appkey,
                            t: t.options.token,
                            ns: UA_VERSION,
                            jsv: t.nc.inn_vars.v,
                            scene: t.options.scene,
                            jsType: t.nc.inn_vars.js_type,
                            usa: navigator.userAgent,
                            os: util.getOS(),
                            p: e || ""
                        }, t.ajaxURL.api_report)
                    }
                }, {
                    key: "loading_initGetSize", value: function () {
                        var e = this, t = this.options.objects;
                        return Promise.all(util.map(t, function (e) {
                            return new Promise(function (t, n) {
                                util.getImgSize(e, function (e, o) {
                                    e ? n([0, 0]) : t(o)
                                })
                            })
                        })).then(function (t) {
                            var n = 0, o = 0;
                            util.map(t, function (e) {
                                n = Math.max(n, e[0]), o = Math.max(o, e[1])
                            }), e.obj_w = n, e.obj_h = o
                        })["catch"](function (t) {
                            e.nc.fsm.loaderror()
                        })
                    }
                }, {
                    key: "on_leave_loading", value: function () {
                        this.hideEl("loading")
                    }
                }, {
                    key: "on_reseting", value: function () {
                        var e = this;
                        return Promise.resolve().then(function () {
                            return window.__sc__uab.resetSA && window.__sc__uab.resetSA(), e.loading_render()
                        })
                    }
                }, {
                    key: "getParamOl", value: function () {
                        var e = this.el_nc_canvas, t = util.getElementLeft(e), n = util.getElementTop(e);
                        return {x: t, y: n}
                    }
                }, {
                    key: "loading_sendInitReq", value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                            var o = e.options, i = e.getParamOl(),
                                r = window.__sc__uab.getUA && window.__sc__uab.getUA(window.__sc_uaboption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                a = r.length > 3 ? r.slice(0, 3) : "";
                            e.baseFn.jsonp({
                                url: e.ajaxURL.api_prepare,
                                data: {
                                    a: o.appkey,
                                    t: o.token,
                                    scene: o.scene,
                                    jsType: e.nc.inn_vars.js_type,
                                    ol: '{"x":' + i.x + ',"y":' + i.y + "}",
                                    os: util.getOS(),
                                    w: e.size.width,
                                    h: e.size.height,
                                    ow: e.obj_w,
                                    oh: e.obj_h,
                                    v: e.nc.inn_vars.v,
                                    uav: a
                                },
                                callback: "callback",
                                success: function (o) {
                                    if (!o.success) return void n("data fail");
                                    if (!o.result || !o.result.result) return void n("bad data");
                                    try {
                                        e._prepare_result = o.result.result, e.parsePrepareData(e._prepare_result)
                                    } catch (i) {
                                        return void n("prepare data parse fail!")
                                    }
                                    e.putObjects();
                                    var r = e.getEl("inform");
                                    r.style.display = "block", r.innerHTML = e._lang._ggk_start, e.showHow(), e.scrapeStart = !1, util.addClass(e.root, "nc-prepared"), util.removeClass(e.root, "nc-state-load-error");
                                    var a = (e.nc.index > 0 ? e.nc.index : 1, e.getEl("container"));
                                    if (a && e.options.bg_back_prepared) {
                                        var c = util.getElementsByClassName("nc-bg", a)[0];
                                        c && (c.style.background = "url(" + e.options.bg_back_prepared + ")")
                                    }
                                    t()
                                },
                                fail: function () {
                                    n("net fail")
                                }
                            })
                        })["catch"](function (t) {
                            e.nc._err = FAIL_PREPARE, e.nc.fsm.loaderror()
                        })
                    }
                }, {
                    key: "parsePrepareData", value: function parsePrepareData(result) {
                        try {
                            result = UA_Opt.decryptJSON(result)
                        } catch (e) {
                            throw e
                        }
                        if (!result.success) throw new Error("decrypt fail2!");
                        result = result.data;
                        var data = result.replace(/&quot;/g, '"');
                        eval("data = " + data), this.stroke_size = data.brushWidth, this.svr_data = data, this.session_id = data.sessionId
                    }
                }, {
                    key: "getEl", value: function (e) {
                        return getElementById(this.prefix + e)
                    }
                }, {
                    key: "putObjects", value: function () {
                        var e = this, t = this.svr_data, n = t.objectPoints, o = n.points;
                        if (this._points = o, !o || !Array.isArray(o) || o.length !== n.objectPointsCount) throw new Error("Bad data: objectPoints.length is not equal to objectCounts!");
                        var i = this.getEl("bg");
                        i.innerHTML = util.map(o, function (t, n) {
                            var o = t.x, i = t.y, r = o - e.obj_w / 2, a = i - e.obj_h / 2, c = e.options.elements,
                                s = c[n % c.length];
                            return '<img src="' + s + '" class="nc-scrape-icon" style="left:' + r + "px;top:" + a + 'px;">'
                        }).join("\n")
                    }
                }, {
                    key: "getSize", value: function () {
                        var e = {width: this.options.width, height: this.options.height},
                            t = this.options.hasOwnProperty("width"), n = this.options.hasOwnProperty("height"),
                            o = this.getEl("nc-canvas");
                        return this.el_nc_canvas = o, t || (e.width = o.offsetWidth), e.width < cfg.min_width && (e.width = cfg.min_width), styleEl(o, "width", e.width + "px"), n || (e.height = o.offsetHeight), e.height < cfg.min_height && (e.height = cfg.min_height), styleEl(o, "height", e.height + "px"), e
                    }
                }, {
                    key: "render_bg", value: function () {
                        this.el_bg = this.getEl("bg"), styleEl(this.el_bg, "width", this.size.width + "px"), styleEl(this.el_bg, "height", this.size.height + "px")
                    }
                }, {
                    key: "mkGridId", value: function (e, t) {
                        return [this.prefix, "grid", e, t].join("-")
                    }
                }, {
                    key: "render_surface_dg", value: function () {
                        var e = this, t = this.getEl("canvas-dg"), n = this.size.width, o = this.size.height;
                        t.style.width = n + "px", t.style.height = o + "px", t.style.display = "block";
                        for (var i = cfg.grid_size, r = Math.ceil(n / i), a = Math.ceil(o / i), c = [], s = this.options.bg_back, l = 0; l < a; l++) for (var d = 0; d < r; d++) {
                            var u = i * l, p = i * d, _ = {
                                    width: i + "px",
                                    height: i + "px",
                                    top: u + "px",
                                    left: p + "px",
                                    "background-image": "url(" + s + ")",
                                    "background-position": "-" + p + "px -" + u + "px"
                                }, f = this.mkGridId(d, l),
                                g = '<div id="' + f + '" class="nc-canvas-dg-grid" style="' + util.obj2style(_) + '"></div>';
                            c.push(g)
                        }
                        t.innerHTML = c.join("");
                        var h = this.getEl("inform");
                        util.on(h, "touchstart", function (t) {
                            return e.eventDown(t)
                        }), util.on(h, "mousedown", function (t) {
                            return e.eventDown(t)
                        }), util.on(t, "touchstart", function (t) {
                            return e.eventDown(t)
                        }), util.on(document, "touchend", function (t) {
                            return e.eventUp(t)
                        }), util.on(t, "touchmove", function (t) {
                            return e.eventMove(t)
                        }), util.on(t, "mousedown", function (t) {
                            return e.eventDown(t)
                        }), util.on(document, "mouseup", function (t) {
                            return e.eventUp(t)
                        }), util.on(t, "mousemove", function (t) {
                            return e.eventMove(t)
                        })
                    }
                }, {
                    key: "render_surface", value: function () {
                        var e = this;
                        this.hideEl("canvas-dg");
                        var t = this.el_canvas, n = this.ctx, o = this.size;
                        t.width = o.width, t.height = o.height;
                        var i = this.getEl("cover");
                        i.style.width = o.width + "px", i.style.height = o.height + "px";
                        var r = this.getEl("inform");
                        n.fillStyle = "#ffffff", n.fillRect(0, 0, o.width, o.height);
                        for (var a = this.nc.index > 0 ? this.nc.index : 1, c = 0; c < util.getElementsByClassName("nc_bg").length; c++) {
                            var s = util.getElementsByClassName("nc_bg")[c];
                            s && this.options.bg_back && c === a - 1 && (s.style.background = "url(" + this.options.bg_back + ")")
                        }
                        var l = new Image;
                        l.src = this.options.bg_front, l.onload = function () {
                            n.globalCompositeOperation = "source-over";
                            for (var e = l.naturalWidth ? [l.naturalWidth, l.naturalHeight] : [l.width, l.height], t = _slicedToArray(e, 2), i = t[0], r = t[1], a = Math.ceil(o.width / i), c = Math.ceil(o.height / r), s = 0; s < c; s++) for (var d = 0; d < a; d++) n.drawImage(l, d * i, s * r);
                            n.globalCompositeOperation = "destination-out"
                        }, l.onerror = function () {
                            n.globalCompositeOperation = "destination-out"
                        }, util.on(r, "touchstart", function (t) {
                            return e.eventDown(t)
                        }), util.on(r, "mousedown", function (t) {
                            return e.eventDown(t)
                        }), util.on(t, "touchstart", function (t) {
                            return e.eventDown(t)
                        }), util.on(document, "touchend", function (t) {
                            return e.eventUp(t)
                        }), util.on(t, "touchmove", function (t) {
                            return e.eventMove(t)
                        }), util.on(t, "mousedown", function (t) {
                            return e.eventDown(t)
                        }), util.on(document, "mouseup", function (t) {
                            return e.eventUp(t)
                        }), util.on(t, "mousemove", function (t) {
                            return e.eventMove(t)
                        })
                    }
                }, {
                    key: "getPos", value: function (e) {
                        var t = (doc.documentElement.scrollLeft || doc.body.scrollLeft, doc.documentElement.scrollTop || doc.body.scrollTop, this.options.renderTo),
                            n = getElementById(0 === t.indexOf("#") ? t.slice(1) : t), o = 0, i = 0;
                        "absolute" == n.style.position && (o = n.offsetLeft, i = n.offsetTop);
                        var r = this.getEl("nc-canvas"), a = e.clientX - r.getBoundingClientRect().left,
                            c = e.clientY - r.getBoundingClientRect().top;
                        return [a, c]
                    }
                }, {
                    key: "_clearTo_dg", value: function (e, t) {
                        var n = Math.floor(e / cfg.grid_size), o = Math.floor(t / cfg.grid_size),
                            i = this.mkGridId(n, o), r = document.getElementById(i);
                        util.addClass(r, "nc-clean");
                        var a = this._grid_x_count * o + n;
                        this.matrix[a] = 0
                    }
                }, {
                    key: "_clearTo", value: function (e, t) {
                        if (this.is_downgraded) return this._clearTo_dg(e, t);
                        var n = this.ctx;
                        n.fillStyle = "#fff", n.beginPath(), n.arc(e, t, this.stroke_size / 2, 0, 2 * Math.PI), n.fill(), this._last_x >= 0 && this._last_y >= 0 && (n.beginPath(), n.lineWidth = this.stroke_size, n.moveTo(this._last_x, this._last_y), n.lineTo(e, t), n.stroke()), this._last_x = e, this._last_y = t
                    }
                }, {
                    key: "_calcRegion", value: function (e, t, n, o) {
                        for (var i = this.ctx.getImageData(e, t, n, o).data, r = 0, a = 0; a < i.length; a += 4) i[a] && i[a + 1] && i[a + 2] && i[a + 3] && r++;
                        return 1 - r / n / o
                    }
                }, {
                    key: "_calcRegion_dg", value: function (e, t, n, o) {
                        for (var i = cfg.grid_size, r = Math.floor(e / i), a = Math.floor(t / i), c = Math.floor(n / i), s = Math.floor(o / i), l = 0, d = a; d < a + s; d++) for (var u = r; u < r + c; u++) {
                            var p = this._grid_x_count * d + u;
                            l += this.matrix[p]
                        }
                        return 1 - l / c / s
                    }
                }, {
                    key: "calc_dg", value: function () {
                        var e = this, t = void 0, n = void 0, o = this.matrix.reduce(function (e, t) {
                            return e + t
                        }, 0);
                        t = 1 - o / this._grid_sum;
                        var i = this.is_downgraded ? .7 : .9, r = this.obj_w / 2 * i, a = this.obj_h / 2 * i;
                        return n = util.map(this._points, function (t) {
                            var n = t.x, o = t.y;
                            return e._calcRegion_dg(n - r, o - a, e.obj_w, e.obj_h)
                        }), {r_all: t, r_objects: n}
                    }
                }, {
                    key: "calc", value: function () {
                        var e = this;
                        if (this.is_downgraded) return this.calc_dg();
                        var t = this.size, n = t.width, o = t.height, i = this._calcRegion(0, 0, n, o),
                            r = this.obj_w / 2, a = this.obj_h / 2, c = util.map(this._points, function (t) {
                                var n = t.x, o = t.y;
                                return e._calcRegion(n - r, o - a, e.obj_w, e.obj_h)
                            });
                        return {r_all: i, r_objects: c}
                    }
                }, {
                    key: "checkEnd", value: function (e, t) {
                        var n = 0 === t.filter(function (e) {
                            return e < .5
                        }).length;
                        if ((e > .9 || n) && window.__sc__uab.isReadyForSC(window.__sc_uaboption.mIDs)) this.verify(); else if (e > .9 && n) {
                            try {
                            } catch (o) {
                            }
                            win._n_bak = win._n;
                            var i = [win._n_bak, this.baseFn.obj2str(this._prepare_result)];
                            this.nc._err = "3A", this._fail_msg = this._updateSurveyUrl(this._lang._ggk_too_fast, i), this.verify_fail()
                        }
                    }
                }, {
                    key: "verify", value: function () {
                        var e = this.nc.fsm;
                        e.can("verify") && this.nc.fsm.verify()
                    }
                }, {
                    key: "verifyMethod", value: function verifyMethod() {
                        var _this10 = this, options = this.options;
                        return clearTimeout(this._t_action), new Promise(function (resolve, reject) {
                            try {
                            } catch (e) {
                                reject(e.message)
                            }
                            var trans = options.trans || {};
                            "string" == typeof trans && (trans = eval("0," + trans));
                            for (var arr = options.elementID || [], i = 0; i < arr.length; i++) {
                                var id = arr[i], el = doc.getElementById(id);
                                el && (trans[id] = el.value)
                            }
                            win._n_bak = win._n, _this10.baseFn.jsonp({
                                url: _this10.ajaxURL.api_analyze,
                                callback: "callback",
                                data: {
                                    a: options.appkey,
                                    t: options.token,
                                    s: _this10.session_id,
                                    n: window.__sc__uab.getUA && window.__sc__uab.getUA(window.__sc_uaboption) || win._n || (UA_Opt.LogVal ? win[UA_Opt.LogVal] : "") || "",
                                    p: _this10.baseFn.obj2str(trans),
                                    scene: options.scene,
                                    jsType: _this10.nc.inn_vars.js_type,
                                    lang: options.language,
                                    v: _this10.nc.inn_vars.v
                                },
                                success: function (e) {
                                    if (e.success && e.result && e.result.success) {
                                        var t = e.result.result;
                                        if (0 === t.code) return _this10.verify_ok(t), void resolve();
                                        _this10.nc._err = _this10.nc._err || "4A"
                                    }
                                    reject(e.msg)
                                },
                                fail: function (e) {
                                    _this10.nc._err = _this10.nc._err || FAIL_ANALYZE;
                                    var t = _this10._lang._ggk_net_err;
                                    t = _this10._updateSurveyUrl(t), _this10._fail_msg = t, reject("net fail!")
                                }
                            })
                        }).then(function () {
                            UA_Opt.reload(), window.__sc__uab.resetSA()
                        })["catch"](function (e) {
                            UA_Opt.reload(), window.__sc__uab.resetSA(), _this10.nc._err = _this10.nc._err || "4A", _this10.verify_fail()
                        })
                    }
                }, {
                    key: "verify_ok", value: function (e) {
                        this.verify_result = e, this.nc.fsm.verifypass()
                    }
                }, {
                    key: "verify_fail", value: function (e) {
                        this.nc.fsm.verifyfail()
                    }
                }, {
                    key: "_upResetIndex", value: function (e) {
                        return upResetIndex(e, this.nc.index)
                    }
                }, {
                    key: "_mkErrInfo", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = this.options,
                            i = e, r = [o.appkey, o.token, o.scene], a = "";
                        switch (e) {
                            case FAIL_PREPARE:
                                !n && this.nc._log(FAIL_PREPARE, "prepare timeout", "{code: 401}"), i = "2A", a = "401";
                                break;
                            case FAIL_ANALYZE:
                                !n && this.nc._log(FAIL_ANALYZE, "analyze timeout", "{code: 404}"), i = "2D", a = "404";
                                break;
                            case"TIMEOUT_uab":
                                !n && this.nc._log("TIMEOUT_uab", "uab.js timeout", "{code: 403}"), i = "2C", a = "403";
                                break;
                            case"TIMEOUT_um":
                                !n && this.nc._log("TIMEOUT_um", "um.js timeout", "{code: 402}"), i = "2B", a = "402"
                        }
                        switch (i) {
                            case"3A":
                                r = r.concat(t), !n && this.nc._log("ERR_SLIDE_TOO_FAST", "too few mp", "{code: 201, str:" + r + "}"), a = "201";
                                break;
                            case"4A":
                                t = [this.session_id, win._n_bak], r = r.concat(t), !n && this.nc._log(ERR_CODE_API_FAIL + "_analyze", "blocked", "{code: 101, str:" + r + "}"), a = "101";
                                break;
                            case"5A":
                                t = [this.session_id, win._n_bak], r = r.concat(t), !n && this.nc._log(ERR_CODE_API_FAIL + "_analyze", "blocked", "{code: 301, str:" + r + "}"), a = "301"
                        }
                        return o.failCallback && o.failCallback("{code: " + a + ", str:" + r + "}"), {
                            type: i,
                            str: r.map(function (e) {
                                return encodeURIComponent(e)
                            }).join(":-o")
                        }
                    }
                }, {
                    key: "_updateSurveyUrl", value: function (e, t, n) {
                        e = e.replace(/%TOKEN\b/, this.options.token);
                        var o = this._mkErrInfo(this.nc._err, t, n);
                        return e = e.replace(/%TYPE\b/, o.type), e = e.replace(/%STR\b/, o.str), e = this._upResetIndex(e)
                    }
                }, {
                    key: "on_load_error", value: function (e) {
                        var t = this;
                        return new Promise(function (e, n) {
                            util.addClass(t.root, "nc-state-load-error"), util.removeClass(t.root, "nc-prepared");
                            var o = function i() {
                                var n = t.getEl("load-error"), o = void 0, r = t.getEl("cover");
                                if (!t.size || !r) return void setTimeout(i, 10);
                                t.showEl("load-error"), o = t.size ? t.size.height : r.offsetHeight, n.style.marginTop = (o - 80) / 2 + "px";
                                var a = t._lang._ggk_net_err;
                                a = t._updateSurveyUrl(a), t.getEl("load-error-msg").innerHTML = a, t.tryToUpdateErrIcon(), e()
                            };
                            o()
                        })
                    }
                }, {
                    key: "on_pass", value: function () {
                        var e = this;
                        return clearTimeout(this._t_action), Promise.resolve().then(function () {
                            if (e.options.is_tbLogin) {
                                e.hideEl("canvas-dg");
                                var t = e.getEl("nc-canvas");
                                t.innerHTML = '<div class="nc-tblogin-verify-success"><span><i class="ncpc_iconfont icon_ok">&#xe626;</i>\u9a8c\u8bc1\u5b8c\u6210</span></div>', t.style.width = "300px", t.style.height = "31px", t.style.backgroundColor = "#D8FADF";
                                var n = e.options.callback;
                                "function" == typeof n && n(e.verify_result)
                            } else {
                                e.hideEl("canvas-dg");
                                var o = e.getEl("ok");
                                o.style.marginTop = (e.size.height - 80) / 2 + "px", e.getEl("ok-msg").innerHTML = e._lang._ggk_success;
                                var i = e.options.callback;
                                "function" == typeof i && i(e.verify_result)
                            }
                        })
                    }
                }, {
                    key: "getErrIcon", value: function (e) {
                        return this.options.obj_error
                    }
                }, {
                    key: "tryToUpdateErrIcon", value: function () {
                        var e = this.getEl("fail-icon"), t = this.getEl("load-error-icon");
                        if (t.src = e.src = this.options.obj_fail, this.nc._err) {
                            var n = this.getErrIcon(this.nc._err);
                            n && (t.src = e.src = n)
                        }
                        this.nc._err = ""
                    }
                }, {
                    key: "on_fail", value: function () {
                        var e = this;
                        return clearTimeout(this._t_action), Promise.resolve().then(function () {
                            e.is_downgraded && e.hideEl("canvas-dg");
                            var t = e.getEl("fail");
                            t.style.marginTop = (e.size.height - 80) / 2 + "px";
                            var n = e._fail_msg || e._lang._ggk_fail;
                            n = e._updateSurveyUrl(n, "", !0), e.getEl("fail-msg").innerHTML = n, e._fail_msg = "", e.tryToUpdateErrIcon();
                            var o = e.options.error;
                            "function" == typeof o && o()
                        })
                    }
                }, {
                    key: "actionTimeout", value: function () {
                        this.nc.fsm.timeout()
                    }
                }, {
                    key: "on_actiontimeout", value: function () {
                        var e = this;
                        return Promise.resolve().then(function () {
                            var t = e.getEl("fail");
                            t.style.marginTop = (e.size.height - 80) / 2 + "px", e.hideEl("canvas-dg"), e.nc._err = "5A";
                            var n = e._lang._ggk_action_timeout;
                            n = e._updateSurveyUrl(n), e.getEl("fail-msg").innerHTML = n;
                            var o = e.options.error;
                            "function" == typeof o && o()
                        })
                    }
                }, {
                    key: "eventDown", value: function (e) {
                        try {
                            e.preventDefault()
                        } catch (t) {
                        }
                        if ("ready" == this.nc.fsm.current) {
                            this.scrapeStart || (this._last_x = -1, this._last_y = -1, this.render_surface()), this.showingHow = !1, this.scrapeStart = !0, this.mousedown = !0, this.getEl("inform").style.display = "none", this.offsetX = this.el_nc_canvas.offsetLeft, this.offsetY = this.el_nc_canvas.offsetTop;
                            var n = this.getPos(e), o = _slicedToArray(n, 2), i = o[0], r = o[1];
                            this._clearTo(i, r), this._old_onselectstart = doc.body.onselectstart, this._old_ondrag = doc.body.ondrag, this.is_downgraded && (doc.body.onselectstart = doc.body.ondrag = function () {
                                return !1
                            })
                        }
                    }
                }, {
                    key: "eventMove", value: function (e) {
                        var t = this;
                        try {
                            e.preventDefault()
                        } catch (n) {
                        }
                        if (this.mousedown) {
                            clearTimeout(this._t_action), "ready" === this.nc.fsm.current && (this._t_action = setTimeout(function () {
                                t.actionTimeout()
                            }, cfg.action_timeout)), e.changedTouches && (e = e.changedTouches[e.changedTouches.length - 1]);
                            var o = this.getPos(e), i = _slicedToArray(o, 2), r = i[0], a = i[1];
                            this._clearTo(r, a);
                            var c = this.calc(), s = c.r_all, l = c.r_objects;
                            this.checkEnd(s, l)
                        }
                    }
                }, {
                    key: "eventUp", value: function () {
                        this.mousedown = !1, this._last_x = -1, this._last_y = -1, this.is_downgraded && (doc.body.onselectstart = this._old_onselectstart, doc.body.ondrag = this._old_ondrag), this._old_onselectstart = null, this._old_ondrag = null
                    }
                }, {
                    key: "mkMatrix", value: function () {
                        var e = this.size, t = e.width, n = e.height, o = cfg.grid_size, i = Math.ceil(t / o),
                            r = Math.ceil(n / o), a = i * r;
                        this._grid_x_count = i, this.matrix = util.fill(new Array(a), 1), this._grid_sum = a
                    }
                }, {
                    key: "downgrade", value: function () {
                        this.is_downgraded = !0, this.mkMatrix()
                    }
                }, {
                    key: "bindEvents", value: function () {
                        var e = this, t = this.getEl("btn-refresh"), n = this.getEl("btn-info");
                        util.on(t, "touchend", function (t) {
                            try {
                                t.preventDefault()
                            } catch (t) {
                            }
                            e.nc.reset()
                        }), util.on(t, "mouseup", function (t) {
                            if (e.scrapeStart) {
                                try {
                                    t.preventDefault()
                                } catch (t) {
                                }
                                e.nc.reset()
                            }
                        }), util.on(n, "touchend", function (t) {
                            try {
                                t.preventDefault()
                            } catch (t) {
                            }
                            e.showHow()
                        }), util.on(n, "mouseup", function (t) {
                            try {
                                t.preventDefault()
                            } catch (t) {
                            }
                            e.showHow()
                        })
                    }
                }, {
                    key: "showHow", value: function () {
                        if (!this.showingHow && !this.scrapeStart) {
                            var e = this.getEl("show-how"),
                                t = [[20, 6], [19, 7], [18, 10], [17, 13], [15, 15], [13, 18], [11, 24], [8, 27], [6, 32], [5, 36], [3, 41], [2, 44], [1, 47], [1, 49], [0, 55], [0, 58], [0, 64], [0, 67], [0, 68], [0, 68], [1, 68], [3, 68], [5, 68], [6, 68], [8, 67], [10, 65], [12, 63], [14, 61], [16, 59], [18, 56], [22, 53], [26, 48], [31, 43], [36, 37], [41, 31], [45, 27], [49, 24], [58, 17], [61, 14], [64, 12], [67, 9], [69, 8], [70, 7], [72, 6], [73, 6], [72, 7], [71, 9], [70, 11], [67, 15], [66, 20], [63, 26], [62, 30], [61, 35], [60, 40], [59, 43], [58, 45], [58, 49], [57, 51], [57, 52], [57, 54], [57, 55], [57, 56], [57, 57], [58, 57], [62, 57], [65, 55], [78, 47], [84, 43], [89, 38], [96, 33], [101, 28], [105, 25], [108, 22], [112, 19], [115, 17], [118, 15], [120, 13], [122, 12], [125, 10], [128, 9], [129, 8], [131, 7], [132, 7], [133, 7], [133, 10], [133, 15], [132, 24], [131, 29], [129, 35], [128, 39], [128, 42], [127, 45], [127, 48], [127, 49], [127, 51], [127, 52], [127, 52], [128, 52], [131, 50], [135, 46], [141, 42], [149, 37], [156, 32], [162, 26], [167, 22], [172, 19], [175, 16], [177, 14], [180, 12], [183, 11], [185, 9], [189, 8], [191, 6], [193, 4], [199, 1], [201, 0], [203, 0], [204, 0], [204, 2], [204, 5], [204, 11], [204, 15], [201, 21], [200, 26], [200, 32], [199, 36], [199, 40], [199, 44], [199, 46], [199, 47], [199, 48], [200, 48], [201, 48], [204, 47], [206, 46], [209, 44], [211, 43], [215, 39], [218, 36], [222, 33], [226, 30], [228, 28], [231, 24], [234, 21], [237, 19], [239, 17], [241, 16], [242, 15], [243, 14], [244, 12], [245, 11], [246, 10], [247, 9]],
                                n = 2, o = 0, i = 0, r = t.length;
                            e.style.display = "block", e.style.left = "0px";
                            var a = this, c = function s() {
                                return a.scrapeStart ? void (e.style.display = "none") : (a.showingHow = !0, void (o < r ? (e.style.left = t[o][0] + "px", e.style.top = t[o][1] + 5 + "px", 0 == o && a.render_surface(), a._clearTo(t[o][0] + 20, t[o][1] + 5), o++, setTimeout(s, 10)) : (i++, i < n ? (a._last_x = -1, a._last_y = -1, o = 0, setTimeout(s, 500)) : (a._last_x = -1, a._last_y = -1, e.style.display = "none", a.render_surface(), a.showingHow = !1))))
                            };
                            c()
                        }
                    }
                }, {
                    key: "showEl", value: function (e) {
                        var t = this.getEl(e);
                        t && (t.style.display = "block")
                    }
                }, {
                    key: "hideEl", value: function (e) {
                        var t = this.getEl(e);
                        t && (t.style.display = "none")
                    }
                }, {
                    key: "loading_render", value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                            try {
                                var o = e.nc;
                                if (e.root.innerHTML = kvTpl.render(html, {
                                    nc: o,
                                    prefix: e.prefix,
                                    inform: "",
                                    loading: e._lang._ggk_loading,
                                    obj_ok: e.options.obj_ok,
                                    obj_error: e.options.obj_error
                                }), e.showEl("loading"), e.hideEl("load-error"), e.getEl("title").innerHTML = e._lang._ggk_guide, e.bindEvents(), e.size = e.getSize(), e.getEl("container").style.width = e.size.width + "px", e.render_bg(), e.el_canvas = e.getEl("canvas"), !e.el_canvas.getContext || !(e.ctx = e.el_canvas.getContext("2d"))) return e.downgrade(), e.render_surface_dg(), void t();
                                e.render_surface(), t()
                            } catch (i) {
                                n(i)
                            }
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {
                            return 0
                        }, t = this.loading_sendInitReq();
                        t.then(e)["catch"](e)
                    }
                }]), Scrape
            }();
            module.exports = Scrape
        }, function (e, t, n) {
            "use strict";
            var o = n(121);
            t.create = function (e, t) {
                return new o(e, t)
            }
        }, function (e, t, n) {
            "use strict";
            t.html = '<div id="{{prefix}}container" class="nc-container nc-scrape"><div id="{{prefix}}for-tmp" class="nc-for-tmp"></div><div id="{{prefix}}toolbar" class="nc-toolbar"><span id="{{prefix}}title" class="nc-title">{{title}}</span> <span class="nc-btns"><i id="{{prefix}}btn-refresh" class="nc_iconfont icon_refresh">&#xe607;</i> <i id="{{prefix}}btn-info" class="nc_iconfont icon_info">&#xe602;</i></span></div><div id="{{prefix}}nc-canvas" class="nc-canvas"><div id="{{prefix}}bg" class="nc-bg"></div><div id="{{prefix}}cover" class="nc-cover"><canvas id="{{prefix}}canvas" class="nc-canvas-node"></canvas><div id="{{prefix}}canvas-dg" class="nc-canvas-dg" unselectable="on" style="-moz-user-select:none;-webkit-user-select:none" onselectstart="return false"></div><div id="{{prefix}}ok" class="nc-verify-ok"><img src="{{obj_ok}}" alt=""><div><i class="ncpc_iconfont icon_success">&#xe686;</i><span id="{{prefix}}ok-msg"></span></div></div><div id="{{prefix}}fail" class="nc-verify-fail"><img id="{{prefix}}fail-icon" src="{{obj_error}}" alt=""><div><i class="ncpc_iconfont icon_error">&#xe604;</i><span id="{{prefix}}fail-msg"></span></div></div><div id="{{prefix}}loading" class="nc-loading"><div id="nc-loading-circle" class="nc-loading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div><span>{{loading}}</span></div><div id="{{prefix}}inform" class="nc-inform">{{inform}}</div><div id="{{prefix}}load-error" class="nc-load-error"><img id="{{prefix}}load-error-icon" src="{{obj_error}}" alt=""><div><i class="ncpc_iconfont icon_error">&#xe604;</i><span id="{{prefix}}load-error-msg">Load Error!</span></div></div></div><div id="{{prefix}}show-how" class="nc-show-how"></div></div></div>';
        }, function (e, t, n) {
            "use strict";
            e.exports = n(22)
        }, function (e, t, n) {
            "use strict";
            e.exports = n(9)
        }, function (e, t, n) {
            "use strict";

            function o(e, t, n) {
                function o(e) {
                    r || (r = !0, e || i(), t(e))
                }

                var r = void 0, a = l[e.foreign] || l[0];
                a = s.mix(a, e.apimap), UA_Opt.LogVal = "_n", d.init(e), UA_Opt.sendMethod = 8, UA_Opt.Token = (new Date).getTime() + ":" + e.token, s.loadScript(s.addHourStamp(a.awsc_Url), function (e) {
                    if (AWSC) {
                        var t = function () {
                            if (window.__sc__uab) {
                                if (clearInterval(n), "timeout" === window.__sc__uab) return void o(u);
                                o(e)
                            }
                        };
                        AWSC.use("uab", function (e, t) {
                            "loaded" === e ? window.__sc__uab = t : "timeout" === e && (window.__sc__uab = "timeout")
                        });
                        var n = setInterval(t, 100);
                        t()
                    } else _ = 1, o(u)
                }, n, e.retryTimes), setTimeout(function () {
                    o(u)
                }, n)
            }

            function i() {
            }

            function r(e, t, n) {
                function o(e) {
                    r || (r = !0, e || a(), t(e))
                }

                function i() {
                    _ ? clearInterval(d) : window.AWSC && (clearInterval(d), window.AWSC.use("um", function (t, n) {
                        if ("loaded" === t) try {
                            umx.init({
                                timeout: e.timeout,
                                token: e.token,
                                serviceUrl: c.umid_serUrl,
                                appName: e.appkey,
                                enableFY: 1,
                                jf: 1,
                                wtac: 1
                            }), o()
                        } catch (i) {
                            o(i)
                        } else o(u)
                    }))
                }

                var r = void 0;
                if ("undefined" != typeof umx) return void o();
                var c = l[e.foreign] || l[0];
                c = s.mix(c, e.apimap);
                var d = setInterval(i, 100);
                i(), setTimeout(function () {
                    o(u)
                }, n)
            }

            function a() {
                function e() {
                    (n || umx.getStatus()) && c.__acjs ? clearInterval(o) : t++ > 100 && clearInterval(o)
                }

                if (!p) {
                    p = !0;
                    var t = 0, n = void 0;
                    setTimeout(function () {
                        n = !0
                    }, 3e3);
                    var o = setInterval(e, 100);
                    e()
                }
            }

            var c = window, s = (document, n(4)), l = n(68).URL_MAP, d = n(105), u = (n(5), "timeout"), p = void 0,
                _ = void 0;
            t.load = function (e, t) {
                var n = void 0, i = void 0, a = void 0, c = e.options, s = c.timeout || 1e4;
                o(c, function (o) {
                    n = 1;
                    var r = o == u;
                    !a && i && (r && (e._err = "TIMEOUT_uab"), t(r), a = 1)
                }, s), r(c, function (o) {
                    i = 1;
                    var r = o == u;
                    !a && n && (r && (e._err = "TIMEOUT_um"), t(r), a = 1)
                }, s)
            }
        }, function (e, t, n) {
            "use strict";
            n(128);
            var o = n(122);
            t.create = function (e) {
                return o.create(e, {})
            }, t.render = function (e, t) {
                e.render(t)
            }
        }, function (e, t, n) {
            "use strict";
            !function (e, t) {
                var n = e.createElement("style");
                if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t); else try {
                    n.innerHTML = t
                } catch (o) {
                    n.innerText = t
                }
            }(document, ".nc-wrapper.nc-ggk{font-size:12px}")
        }, , function (e, t, n) {
            t = e.exports = n(8)(), t.push([e.i, '.nc-container.nc-scrape {\n  font-size: 12px;\n  line-height: 20px;\n}\n.nc-container.nc-scrape a {\n  text-decoration: none;\n}\n.nc-container.nc-scrape .nc-toolbar {\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns {\n  float: right;\n  height: 30px;\n  overflow: hidden;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns i {\n  cursor: pointer;\n  margin-right: 5px;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns i.icon_refresh {\n  color: #999;\n}\n.nc-container.nc-scrape .nc-toolbar .nc-btns i.icon_info {\n  color: #e98e0c;\n}\n.nc-container.nc-scrape .nc-canvas {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.nc-container.nc-scrape .nc-canvas .nc-bg {\n  position: absolute;\n  background: #ccc url("https://img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png");\n}\n.nc-container.nc-scrape .nc-canvas .nc-bg img.nc-scrape-icon {\n  position: absolute;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover canvas {\n  position: absolute;\n  background-color: transparent;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-canvas-dg {\n  position: absolute;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-canvas-dg-grid {\n  position: absolute;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-canvas-dg-grid.nc-clean {\n  background: transparent !important;\n}\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-inform,\n.nc-container.nc-scrape .nc-canvas .nc-cover .nc-loading {\n  font-size: 14px;\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  width: 100%;\n  line-height: 1.3em;\n  text-align: center;\n  margin-top: -0.65em;\n  color: #3c3c3c;\n}\n.nc-container.nc-scrape .nc-canvas .nc-show-how {\n  position: absolute;\n  display: none;\n  background: url("https://img.alicdn.com/tfs/TB153uISVXXXXc2XpXXXXXXXXXX-26-36.png") no-repeat;\n  width: 68px;\n  height: 53px;\n  z-index: 10;\n  top: 20px;\n  margin-left: 20px;\n}\n.nc-container.nc-scrape .nc-canvas .nc-tblogin-verify-success {\n  text-align: center;\n  vertical-align: middle;\n  line-height: 31px;\n}\n.nc-container.nc-scrape .nc-canvas .nc-tblogin-verify-success .icon_ok {\n  margin-right: 10px;\n  color: #78c430;\n  position: relative;\n  top: 1px;\n}\n.nc-container.nc-scrape .nc-verify-ok,\n.nc-container.nc-scrape .nc-verify-fail,\n.nc-container.nc-scrape .nc-load-error {\n  display: none;\n  margin: auto;\n  height: 80px;\n  width: 250px;\n  text-align: center;\n  font-size: 14px;\n  color: #3c3c3c;\n  line-height: 20px;\n}\n.nc-container.nc-scrape .nc-verify-ok img,\n.nc-container.nc-scrape .nc-verify-fail img,\n.nc-container.nc-scrape .nc-load-error img {\n  display: block;\n  vertical-align: middle;\n  float: left;\n  margin-right: 10px;\n}\n.nc-container.nc-scrape .nc-verify-ok>div,\n.nc-container.nc-scrape .nc-verify-fail>div,\n.nc-container.nc-scrape .nc-load-error>div {\n  width: 180px;\n  height: 80px;\n  display: table;\n}\n.nc-container.nc-scrape .nc-verify-ok>div .icon_error,\n.nc-container.nc-scrape .nc-verify-fail>div .icon_error,\n.nc-container.nc-scrape .nc-load-error>div .icon_error,\n.nc-container.nc-scrape .nc-verify-ok>div .icon_success,\n.nc-container.nc-scrape .nc-verify-fail>div .icon_success,\n.nc-container.nc-scrape .nc-load-error>div .icon_success {\n  position: relative;\n  top: 18px;\n  margin-right: 5px;\n  color: #f40;\n}\n.nc-container.nc-scrape .nc-verify-ok>div .icon_success,\n.nc-container.nc-scrape .nc-verify-fail>div .icon_success,\n.nc-container.nc-scrape .nc-load-error>div .icon_success {\n  color: #78c430;\n}\n.nc-container.nc-scrape .nc-verify-ok>div>span,\n.nc-container.nc-scrape .nc-verify-fail>div>span,\n.nc-container.nc-scrape .nc-load-error>div>span {\n  display: table-cell;\n  vertical-align: middle;\n  height: 80px;\n  text-align: left;\n}\n.nc-pass .nc-container.nc-scrape .nc-toolbar .nc-btns {\n  visibility: hidden;\n}\n.nc-pass .nc-container.nc-scrape .nc-bg img {\n  display: none;\n}\n.nc-pass .nc-container.nc-scrape .nc-cover canvas,\n.nc-pass .nc-container.nc-scrape .nc-cover .nc-verify-fail {\n  display: none;\n}\n.nc-pass .nc-container.nc-scrape .nc-verify-ok {\n  display: block;\n}\n.nc-pass .nc-container.nc-scrape .nc-canvas .nc-bg {\n  background: #bbf0c6 url("https://img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png");\n}\n.nc-fail .nc-container.nc-scrape .nc-canvas .nc-bg {\n  background: url("https://img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png");\n}\n.nc-fail .nc-container.nc-scrape .nc-canvas .nc-bg img {\n  display: none;\n}\n.nc-fail .nc-container.nc-scrape .nc-cover canvas,\n.nc-fail .nc-container.nc-scrape .nc-cover .nc-verify-ok,\n.nc-fail .nc-container.nc-scrape .nc-cover .nc-canvas-dg {\n  display: none;\n}\n.nc-fail .nc-container.nc-scrape .nc-verify-fail {\n  display: block;\n}\n.nc-state-load-error .nc-container.nc-scrape .nc-load-error {\n  display: block;\n}\n.nc-state-load-error .nc-container.nc-scrape canvas,\n.nc-state-load-error .nc-container.nc-scrape .nc-inform {\n  display: none;\n}\n.nc-prepared .nc-container.nc-scrape .nc-bg {\n  background: #ccc url("https://img.alicdn.com/tfs/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png");\n}\n.nc-container.nc-scrape #nc-loading-circle {\n  margin: 0 10px;\n}\n.nc-container.nc-scrape #nc-loading-circle .sk-circle:before {\n  background-color: #fff;\n}\n', ""])
        }, , function (e, t, n) {
            var o = n(130);
            "string" == typeof o && (o = [[e.i, o, ""]]), n(10)(o, {}), o.locals && (e.exports = o.locals)
        }, , function (e, t, n) {
            function o(e) {
                return n(i(e))
            }

            function i(e) {
                var t = r[e];
                if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
                return t
            }

            var r = {
                "./actiontimeout": 50,
                "./actiontimeout.js": 50,
                "./destroyed": 51,
                "./destroyed.js": 51,
                "./error": 52,
                "./error.js": 52,
                "./fail": 53,
                "./fail.js": 53,
                "./initially": 54,
                "./initially.js": 54,
                "./load_error": 55,
                "./load_error.js": 55,
                "./loading": 56,
                "./loading.js": 56,
                "./need_two_step_verify": 57,
                "./need_two_step_verify.js": 57,
                "./pass": 58,
                "./pass.js": 58,
                "./ready": 59,
                "./ready.js": 59,
                "./reseting": 60,
                "./reseting.js": 60,
                "./ts_error": 61,
                "./ts_error.js": 61,
                "./ts_fail": 62,
                "./ts_fail.js": 62,
                "./ts_loading": 63,
                "./ts_loading.js": 63,
                "./ts_pass": 64,
                "./ts_pass.js": 64,
                "./ts_ready": 65,
                "./ts_ready.js": 65,
                "./ts_verifying": 66,
                "./ts_verifying.js": 66,
                "./verifying": 67,
                "./verifying.js": 67
            };
            o.keys = function () {
                return Object.keys(r)
            }, o.resolve = i, e.exports = o, o.id = 134
        }])
    };
    chkQuerySet(), cond() > GREY_RATIO ? STABLE_ACTION() : NEW_ACTION()
}();