si_CF = new Date;
var _b_w_c = {
    'AppVer': '1_0_0_0',
    'httpBingHost': 'http://www.bing.com',
    'sslBingHost': 'https://www.bing.com',
    'httpBingLogHost': 'http://a4.bing.com',
    'sslBingLogHost': 'https://www.bing.com',
    'prefix': '/widget',
    'sigSample': 1,
    'sigDelay': 1500
};
var _bw, bootstrap;
(function(n) {
    n.si_ST = new Date
})(_bw || (_bw = {})), function(n) {
    function t(t) {
        return n._d.getElementById(t)
    }
    function i(n, t, i) {
        return setTimeout(n, t, i)
    }
    function r(n) {
        clearTimeout(n)
    }
    function u() {
        return (new Date).getTime()
    }
    n._w = window;
    n._d = document;
    n.sb_de = n._d.documentElement;
    n.sb_ie=!!n._w.ActiveXObject;
    n.sb_i6 = n.sb_ie&&!n._w.XMLHttpRequest;
    n._ge = t;
    n.sb_st = i;
    n.sb_ct = r;
    n.sb_gt = u
}(_bw || (_bw = {})), function(n) {
    n.sj_b = n._d.body
}(_bw || (_bw = {})), function(n) {
    function t(t, i, r) {
        var u = n._d.createElement(t);
        return i && (u.id = i), r && (u.className = r), u
    }
    n.sj_ce = t
}(_bw || (_bw = {})), function(n) {
    function t(t) {
        var o = {}, c = t.split("#"), r = c.length > 1 ? c[1]: null, u, t, l, s, f, i, h, e;
        if (r !== null && r.length > 0)
            for (u = decodeURIComponent, document.location.href.indexOf(n.clientRedirectAjaxUrl)>-1 && (t = u(r), l = t.indexOf("#"), r = t.substr(l + 1)), s = r.split("&"), f = 0; f < s.length; f++)
                if (i = s[f].split("="), i.length == 2)
                    o[i[0]] = u(i[1]);
                else if (i.length > 2) {
                    for (h = [], e = 1; e < i.length; e++)
                        h.push(u(i[e]));
                        o[i[0]] = u(h.join("="))
                }
        return o
    }
    n._G = window._G_bw || {
        ST: n.si_ST ? n.si_ST: new Date,
        Mkt: "en-US",
        RTL: !1,
        IG: "",
        gpUrl: "/fd/ls/GLinkPing.aspx?"
    };
    n._H = {};
    n.clientRedirectAjaxUrl = "/widget/t/cra#";
    n.extractHashParams = t;
    n._H = t(window.location.href), function() {
        if (n._H.IG && n._H.IG.length > 0)
            n._G.IG = n._H.IG;
        else if (!n._G.IG) {
            function t() {
                var n = Math.floor(Math.random() * 65536).toString(16);
                return "000".substr(0, 4 - n.length) + n
            }
            n._G.IG = [t(), t(), t(), t(), t(), t(), t(), t()].join("").toLowerCase()
        }
    }();
    n._G.lsUrl = (_b_w_c.prefix != null ? _b_w_c.prefix : "") + "/ls/l?IG=" + n._G.IG;
    n._G.lsHost = n._d.location.href.indexOf("https:") == 0 ? _b_w_c.sslBingHost : _b_w_c.httpBingHost
}(_bw || (_bw = {})), function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n() {}
            return n.isEnabled = function() {
                return typeof _bw.Log_bw != "undefined" && typeof _bw.Log_bw.Log != "undefined"
            }, n.init = function(t, i) {
                n.isEnabled() && (_bw.Log_bw.Log("Init", t, "BS", !1, "Meta", i), _bw.Log_bw.RenderPixels(_b_w_c.addImp))
            }, n.info = function(t, i, r, u, f, e) {
                n.isEnabled() && _bw.Log_bw.Log("Info", t, "BS", !1, "R", '"' + i.replace(/"/gi, '\\"') + '"', "S", r, "D", u, "L", f, "E", e)
            }, n.error = function(t, i, r) {
                n.isEnabled() && _bw.Log_bw.Log("Error", t, "BS", !1, "Meta", r, "Text", JSON.stringify(i))
            }, n.id = function(t) {
                n.isEnabled() && _bw.Log_bw.Log("Init", "BM", "ID", !1, "Meta", t)
            }, n.sig = function(t, i, r) {
                n.isEnabled() && _bw.Log_bw.Log("Init", t, "SG", !1, "Meta", i, "Time", r)
            }, n.pageProperties = function(t, i) {
                i != null && i.dims && n.info(t, i.referrer, i.screen, i.dims, i.language, i.encoding)
            }, n.dims = function(t, i, r, u, f, e, o, s, h, c) {
                if (n.isEnabled()) {
                    var l = ["Dims", t, "BS", !1, "W", i, "H", r, "Meta", u, "URL", f, "MKT", e, "FC", o, "Method", s || ""];
                    h && (l.push("K"), l.push(c || 0), l.push("AppNS"), l.push(h));
                    _bw.Log_bw.Log.apply(_bw.Log_bw, l)
                }
            }, n.click = function(n, t, i) {
                _bw.Log_bw.Log("DHTMLClick", "BW", n, !1, "Meta", t, "Text", i)
            }, n.latency = function() {
                n.isEnabled() && _bw.Log_bw.Log("Latency", "BW", "BS", !1, "Time", _bw.sb_gt() - _bw.si_ST.getTime())
            }, n.visible = function(t, i) {
                n.isEnabled() && _bw.Log_bw.Log("Visible", "BW", "BS", !1, "Name", "BW", "Method", t, "Meta", i)
            }, n.explicit = function(t, i, r, u) {
                n.isEnabled() && _bw.Log_bw.Log("Init", "BN", "BS", !1, "Meta", t, "Count", i, "Text", r, "FC", u)
            }, n
        }();
        n.Logging = t
    })(t = n.core || (n.core = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    var t;
    (function(t) {
        function o(n) {
            var t = [n.type], r=!1, i, u;
            for (i in n)
                i !== "type" && (r || (t.push("~"), r=!0), t.push(i), u = n[i], u != null && (t.push("="), t.push(u)), t.push(","));
            return r && t.pop(), t.join("")
        }
        function r(n, t) {
            var r = {}, i;
            if (u(n, r), t)
                for (i in t)
                    t.hasOwnProperty(i)&&!r.hasOwnProperty(i) && (r[i] = t[i]);
            return r
        }
        function s(n) {
            var i = {};
            for (var t in n)
                n.hasOwnProperty(t) && (i[t] = n[t]);
            return i
        }
        function u(n, t) {
            var u = n.split("~"), f, r, i;
            if (t.type = u[0], u.length == 1)
                return t;
            for (f = u[1].split(","), r = 0; r < f.length; r++)
                i = f[r].split("="), i.length == 1 && i[0].length > 0 ? t[i[0]] = null : i.length >= 2 && (t[i[0]] = i[1]);
            return t
        }
        function h(n, t, i) {
            i != null && i.length > 0 && (n[t] = i)
        }
        function i(n, t) {
            if (n && n.className) {
                var i = " " + n.className + " ";
                return i.indexOf(" " + t + " ")!==-1
            }
            return !1
        }
        function c(n, t) {
            n&&!i(n, t) && (n.className += " " + t)
        }
        function l(n, t) {
            if (i(n, t)) {
                var r = new RegExp("(\\s|^)" + t + "(\\s|$)", "g");
                n.className = n.className.replace(r, " ")
            }
        }
        function a(n, t, r) {
            if (i(n, t)) {
                var u = new RegExp("(\\s|^)" + t + "(\\s|$)", "g");
                n.className = n.className.replace(u, " " + r + " ")
            }
        }
        function v(n) {
            n = n || _bw._w.event;
            n.stopPropagation ? n.stopPropagation() : n.returnValue=!1
        }
        function y(n) {
            n = n || _bw._w.event;
            n.preventDefault ? n.preventDefault() : n.cancelBubble=!0
        }
        function p(n) {
            n != null && n.parentNode != null && n.parentNode.removeChild(n)
        }
        function w(n, t) {
            try {
                while (n.parentNode) {
                    if (n == t)
                        return !0;
                    n = n.parentNode
                }
                while (n.offsetParent) {
                    if (n == t)
                        return !0;
                    n = n.offsetParent
                }
            } catch (i) {}
            return !1
        }
        function b(n) {
            var t = _bw.sj_ce("script"), i;
            t.type = "text/javascript";
            t.src = n;
            i = _bw._d.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(t, i)
        }
        function k(n, t, i, r) {
            var u = _bw.sj_gx();
            u.open("GET", n, !0);
            r===!0 && (u.withCredentials=!0);
            u.onreadystatechange = function() {
                if (u.readyState == 4 && u.status == 200)
                    try {
                        u.responseText && t(u.responseText)
                } catch (n) {
                    typeof n != "string" && (n = n.toString());
                    i && i(n)
                } else 
                    u.readyState == 4 && i("unknown error: " + u.status.toString())
            };
            u.send()
        }
        function d(n, t, i, r) {
            this.callAjax(n, function(n) {
                return t(JSON.parse(n))
            }, i, r)
        }
        function g(n, t, i) {
            var r = new XDomainRequest;
            r.open("GET", n);
            r.onload = function() {
                try {
                    if (r.responseText) {
                        var u = JSON.parse(r.responseText);
                        t(u)
                    }
                } catch (n) {
                    typeof n != "string" && (n = n.toString());
                    i && i(n)
                }
            };
            r.onerror = function() {
                i("unknown xdr error: " + r.responseText)
            };
            r.send()
        }
        function nt(n) {
            var i, t, r, u, f, e;
            try {
                if (n && (i = document.getElementsByTagName("script"), i)) {
                    for (r = 0; r < i.length; r++)
                        if (u = i[r], u && (f = u.getAttribute("src"), f && f === n)) {
                            t = u;
                            break
                        }
                    if (t) {
                        t.parentNode.removeChild(t);
                        for (e in t)
                            delete t[e]
                    }
                }
            } catch (o) {}
        }
        function tt(n) {
            return '"' + n.replace(/"/gi, '\\"').replace(/[\r\n]+/gi, " ").replace("\\'", "'") + '"'
        }
        function it(n, t, i, r) {
            var f = "", e = "", u;
            r && (u = new Date, u.setTime(u.getTime() + r * 36e5), f = "; expires=" + u.toUTCString());
            i && (e = "path=" + i);
            document.cookie = [n, "=", t, f, "; ", e].join("")
        }
        function rt(n) {
            for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
                for (t = u[i]; t.charAt(0) == " ";)
                    t = t.substring(1, t.length);
                if (t.indexOf(r) == 0)
                    return t.substring(r.length, t.length)
            }
            return null
        }
        function ut(n, t) {
            if (!n)
                return !0;
            for (var i = 0; i < t.length; ++i)
                if (n.indexOf(t[i]) >= 0)
                    return !1;
            return !0
        }
        function ft(n, t) {
            return encodeURIComponent([n, ":", '"', t, '"'].join(""))
        }
        function st(n, t, i) {
            var r, u, f;
            return (i === void 0 && (i = ":"), !t) ? "" : n == "url" ? (r = t.match(ot), !r) ? "" : r[0].toString() : n == "global" ? "" : (u = t.match(et), !u) ? "" : (f = u[1].toString(), n == "domain") ? ["domain", i, f].join("") : ["host", i, f].join("")
        }
        function f() {
            return !!_bw._w.postMessage && _bw._w.parent&&!!_bw._w.parent.postMessage
        }
        function ht(n) {
            return f() ? (_bw._w.parent.postMessage(n, "*"), !0) : !1
        }
        function e() {
            return _bw._d.location.href.indexOf("https:") == 0
        }
        function ct(n) {
            var t=!1;
            return t = n != null ? n.isSsl : e(), t ? _b_w_c.sslBingHost : _b_w_c.httpBingHost
        }
        function lt() {
            return typeof _b_w_c.isCrossOriginResourceSharingEnabled == "undefined" && (_b_w_c.isCrossOriginResourceSharingEnabled = "XMLHttpRequest"in _bw._w && "withCredentials"in new XMLHttpRequest), _b_w_c.isCrossOriginResourceSharingEnabled
        }
        function at() {
            try {
                var t = document.createElement("modern"), n = t.style;
                n.backgroundImage = "linear-gradient(left top, #9f9, white)";
                n.backgroundImage = "-o-linear-gradient(left top, #9f9, white)";
                n.backgroundImage = "-moz-linear-gradient(left top, #9f9, white)";
                n.backgroundImage = "-webkit-linear-gradient(left top, #9f9, white)";
                n.backgroundImage = "-ms-linear-gradient(left top, #9f9, white)";
                n.backgroundImage = "-webkit-gradient(linear, left top, right bottom, from(#9f9), to(white))"
            } catch (i) {
                return !1
            }
            return n.backgroundImage.indexOf("gradient")>-1
        }
        function vt() {
            return _b_w_c.sslBingHost
        }
        function yt() {
            return !!n&&!!n.core&&!!n.core.Bootstrap
        }
        function pt() {
            _bw._H && _bw._H.instance && (_bw._H.slicedinstance = r(_bw._H.instance))
        }
        t.serializeInstance = o;
        t.sliceInstance = r;
        t.cloneInstance = s;
        t.sliceInstancePreserve = u;
        t.setProperty = h;
        t.hasClass = i;
        t.addClass = c;
        t.removeClass = l;
        t.replaceClass = a;
        t.stopPropagation = v;
        t.preventDefault = y;
        t.removeElement = p;
        t.withinElement = w;
        t.callJsonP = b;
        t.callAjax = k;
        t.callJson = d;
        t.callXDomainJson = g;
        t.cleanUpScript = nt;
        t.encodeString = tt;
        t.setCookie = it;
        t.getCookie = rt;
        t.isBrowserSupported = ut;
        t.getFiltersKeyValue = ft;
        var et = new RegExp("^http(?:s)?://([^/]+)", "im"), ot = new RegExp("^http(?:s)?://([^?#]+)(\\?[^&#]+)?", "im");
        t.getPivotUrl = st;
        t.parentSupportsPostMessage = f;
        t.postMessageToParent = ht;
        t.isSsl = e;
        t.getBingHost = ct;
        t.isCrossOriginresourceSharingEnabled = lt;
        t.isGradientSupported = at;
        t.getSecureBingHost = vt;
        t.isBootstrap = yt;
        pt()
    })(t = n.core || (n.core = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n() {}
            return n
        }();
        n.PageProperties = t
    })(t = n.core || (n.core = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    function t() {
        n.Log = n.Log_bw = n._w.Log_bw=!!n._w.Log_bw&&!!n._w.Log_bw.Log&&!!n._w.Log_bw.RenderPixels && n._w.Log_bw || new function() {
            function k() {
                try {
                    return window.self !== window.top
                } catch (n) {
                    return !0
                }
            }
            function v(t, r, o, s, l) {
                var d, p, b, y, v;
                if (!k() || typeof JSON == "undefined" || s || (d = {
                    eventType: t,
                    eventID: r,
                    eventName: o,
                    forceFlush: s,
                    aKeyValPairs: l
                }, bootstrap.core.isBootstrap() ||!bootstrap.core.postMessageToParent("doLog:" + JSON.stringify(d)))) {
                    if (p = "", l)
                        for (b = 0; b < l.length; b += 2)
                            y = l[b], v = l[b + 1], (typeof y != "string" || y[c]('"') < 0) && (y = '"' + y + '"'), typeof v == "string" && v[c]("{") < 0 && v[c]('"') < 0 && (v = '"' + v + '"'), p += i(y + ":" + v + ",");
                    p += i('"T":"CI.' + t + '",' + (typeof r == "number" ? '"K":' + r : '"FID":"' + r + '"') + ',"Name":"' + o + '","TS":' + n.sb_gt());
                    w[h] + f[h] + p[h] >= a && u();
                    f += i(e ? "," : "") + i("{") + p + i("}");
                    e = 1;
                    s && u()
                }
            }
            function s(i, r, u, f) {
                var e = n.sj_gx();
                e.open("POST", i, !0);
                e.setRequestHeader("Content-type", u);
                e.onreadystatechange = function() {
                    e.status != 200 && t.Log("Error", "BW", "BS", !1, "Meta", f, "Text", JSON.stringify("unknown error: " + e.status.toString()))
                };
                e.send("DS=" + r)
            }
            function u() {
                o && n.sb_ct(o);
                e && (t.ping.src = r + w + f + i("]"), e = 0, f = i("["));
                o = n.sb_st(u, y)
            }
            var t = this, i = encodeURIComponent, h = "length", c = "indexOf", l = "apply", y = 2e3, f = i("["), e = 0, p = 0, o, a = 2e3, r = n._G.lsHost != "" ? n._G.lsHost: "", w = n._G.lsUrl + "&TYPE=Event.ClientInst&DATA=", b = location.hostname.match(/([^.]+\.[^.]*)$/);
            r == "" && b && (r = "http://a4." + b[0]);
            t.ping = new Image;
            t.Log = function(t, i, r, f) {
                p || (v("Init", "CI", "Base", !1), o = n.sb_st(u, y), p = 1, n.sj_be(n._w, "beforeunload", u, !1));
                v(t, i, r, f, [].slice.apply(arguments).slice(4))
            };
            t.RenderPixels = function(n) {
                var i, t, r, u;
                if (typeof n != "undefined" && n != null)
                    for (i = n.split(";"), t = 0; t < i.length; t++)
                        i[t].length > 5 && (r = i[t], r += r.indexOf("?")>-1 ? "&r" + Math.random() : "?r" + Math.random(), u = new Image, u.src = r)
            };
            t.PersonalizationImpression = function(n, t, i) {
                var h;
                if (typeof n != "undefined" && n != null && typeof t != "undefined" && t != null && typeof i != "undefined" && i != null) {
                    var f = encodeURIComponent(n + t), e = encodeURIComponent(i), u, o = [_b_w_c_t.personalizationImpressionUrl, "&DS=", f, "&Q=", e, "&AT=", Math.floor((new Date).getTime() / 1e3)].join("");
                    o.length < a ? (h = new Image, h.src = o) : bootstrap.core.isCrossOriginresourceSharingEnabled() ? (u = [_b_w_c_t.personalizationImpressionUrl, "&AT=", Math.floor((new Date).getTime() / 1e3), "&Q=", e].join(""), s(u, f, "text/plain; charset=utf-8", "Log.PersonalizationImpression")) : (u = [r, "/widget/cr?PersA=PQ", "&PersQ=", e].join(""), s(u, f, "application/x-www-form-urlencoded", "Log.PersonalizationImpression"))
                }
            };
            t.PersonalizationClick = function(n, t) {
                var i, u, f, e;
                typeof t != "undefined" && t != null && typeof n != "undefined" && n != null && (i = encodeURIComponent(n + t), f = [_b_w_c_t.personalizationClickUrl, "&DS=", i, "&AT=", Math.floor((new Date).getTime() / 1e3)].join(""), f.length < a ? (e = new Image, e.src = f) : bootstrap.core.isCrossOriginresourceSharingEnabled() ? (u = [_b_w_c_t.personalizationClickUrl, "&AT=", Math.floor((new Date).getTime() / 1e3)].join(""), s(u, i, "text/plain; charset=utf-8", "Log.PersonalizationClick")) : (u = r + "/widget/cr?PersA=CQ", s(u, i, "application/x-www-form-urlencoded", "Log.PersonalizationClick")))
            };
            t.Wrap = function(n, t, i, r) {
                var u = n[t];
                n[t] = function() {
                    var n = arguments, e, t, f;
                    if (r && i[l](this, n), e = u[l](this, n), !r) {
                        for (t = [], f = 0; f < n.length; f++)
                            t.push(n[f]);
                        t.push(e);
                        i[l](this, t)
                    }
                    return e
                }
            };
            bootstrap.core.isBootstrap() && bootstrap.core.parentSupportsPostMessage() && typeof JSON != "undefined" && n.sj_be(n._w, "message", function(n) {
                var i, r, u, t;
                n && n.data && typeof n.data == "string" && (i = n.data.indexOf(":"), i!=-1) && (r = n.data.substring(0, i), u = n.data.substring(i + 1), r === "doLog") && (t = JSON.parse(u), t && t.eventType && v(t.eventType, t.eventID, t.eventName, t.forceFlush, t.aKeyValPairs))
            }, !1)
        }
    }
    n.Log;
    n.Log_bw;
    n.makeLog = t
}(_bw || (_bw = {})), function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n(n) {
                this.parts = n ? n : []
            }
            return n.prototype.add = function(n, t) {
                n && (n.substr(0, 1) != "#" && this.parts.push("&"), this.parts.push(n), this.parts.push("="), this.parts.push(encodeURIComponent(t || "")))
            }, n.prototype.toArray = function() {
                return this.parts
            }, n.prototype.toString = function() {
                return this.parts.join("")
            }, n
        }();
        n.QueryParameterBuilder = t
    })(t = n.core || (n.core = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    var t;
    (function(n) {
        function r() {
            return ("innerWidth"in _bw._w) ? _bw._w.innerWidth || null : (_bw.sb_de || _bw.sj_b).clientWidth || null
        }
        function u() {
            return ("innerHeight"in _bw._w) ? _bw._w.innerHeight || null : (_bw.sb_de || _bw.sj_b).clientHeight || null
        }
        function f(n) {
            return "textContent"in n ? n.textContent : n.innerText
        }
        function e(n, t) {
            if ("textContent"in n) {
                n.textContent = t;
                return 
            }
            n.innerText = t
        }
        function o(n, t) {
            return n ? n.getAttribute(t) : null
        }
        function t(n, t, i) {
            n && n.setAttribute(t, i)
        }
        function s(n) {
            return n.target || n.srcElement
        }
        function h(n) {
            if (n) {
                var t = _bw.sj_ce("style");
                t.type = "text/css";
                t.styleSheet != null ? t.styleSheet.cssText = n : t.appendChild(_bw._d.createTextNode(n));
                i(t)
            }
        }
        function i(n) {
            if (_bw._d.head)
                _bw._d.head.appendChild(n);
            else {
                var t = _bw._d.getElementsByTagName("head");
                t && t.length > 0 ? t[0].appendChild(n) : _bw._d.appendChild(n)
            }
        }
        function c(n, t) {
            var r = _bw.sj_ce("script"), u;
            r.src = n;
            r.async=!0;
            u=!1;
            r.onload = r.onreadystatechange = function() {
                u || this.readyState && this.readyState != "loaded" && this.readyState != "complete" || (u=!0, t(), r.onload = r.onreadystatechange = null)
            };
            i(r)
        }
        function l(n, i, r, u, f, e) {
            f === void 0 && (f=!0);
            e === void 0 && (e=!0);
            var o = (u || _bw._d).createElement("iframe");
            return o.src = n, e && (o.width = i), o.height = r, o.frameBorder = "0", o.scrolling = "no", f || (o.hasOwnProperty("hidden") ? o.setAttribute("hidden", "true") : o.style.display = "none"), t(o, "allowtransparency", "true"), t(o, "transparency", "true"), o
        }
        function a(n) {
            if (n) {
                var t = _bw.sj_ce("link");
                t.rel = "stylesheet";
                t.href = n;
                i(t)
            }
        }
        function v(n) {
            var e = [], i, o, r, u, f, t, s;
            if (_bw._d.getElementsByClassName) {
                if (i = _bw._d.getElementsByClassName(n), i.length > 0)
                    for (t = 0; t < i.length; ++t)
                        e.push(i[t])
            } else 
                for (o = ["div", "a", "span"], r = null, u = 0; u < o.length; ++u)
                    if (f = _bw._d.getElementsByTagName(o[u]), f.length > 0)
                        for (r == null && (r = new RegExp("(^| )" + n + "($| )", "i")), t = 0; t < f.length; ++t)
                            s = f[t], s.className.match(r) && e.push(s);
            return e
        }
        function y(n, t, i, r, u) {
            var f = r[n], e = r[t];
            return e !== undefined && e !== null && (e.indexOf("px") > 0 || e.indexOf("pc") > 0) ? i = e : i !== undefined && i !== null && (i.indexOf("px") > 0 || i.indexOf("pc") > 0) || (i = f !== undefined && f !== null && (f.indexOf("px") > 0 || f.indexOf("pc") > 0) ? f : u), i
        }
        n.getViewportWidth = r;
        n.getViewportHeight = u;
        n.getText = f;
        n.setText = e;
        n.getAttr = o;
        n.setAttr = t;
        n.getTarget = s;
        n.addStyle = h;
        n.getScript = c;
        n.createIFrame = l;
        n.addStyleLink = a;
        n.getTargetsByClassName = v;
        n.getWidthOrHeightValue = y
    })(t = n.core || (n.core = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    var t;
    (function(n) {
        function t(n) {
            try {
                return !_bw._w.WinJS ? _bw._w.top&&!!_bw._w.top.WinJS?!0 : n && n.indexOf("bing_widget_winjs=1") >= 0 : !0
            } catch (t) {}
            return !1
        }
        function i(t) {
            return t != null && n.getAttr(t, "data-previewmode") == "true"?!0 : window == top
        }
        function r() {
            var i = new n.PageProperties, f = _bw._d.location.href || "", h = f.indexOf("#"), u, c, r, o, e, s;
            return h >= 0 && (f = f.substring(0, h)), i.title = _bw._d.title, i.referrer = _bw._d.referrer || "", i.url = f, i.isSsl = n.isSsl(), i.url.indexOf(".atdmt.com") > 0 && i.referrer && (i.url = i.referrer, i.referrer = ""), i.referrer.length == 0 && typeof _bwm_ref_url != "undefined" && (i.referrer = _bwm_ref_url), u = window.screen, c = navigator, i.screen = u.width + "x" + u.height + "@" + u.colorDepth, i.dims = u.availWidth + "x" + u.availHeight, i.language = (navigator.browserLanguage || navigator.language || "").toLocaleLowerCase(), i.encoding = (document.characterSet || document.charset || "").toLocaleLowerCase(), r = _bw._d.body, o = "background-color", r != null && (i.background = r.currentStyle && r.currentStyle[o] || r.currentStyle && r.currentStyle.backgroundColor, i.background || (e = _bw._d.defaultView, _bw._w.getComputedStyle && e && e.getComputedStyle && (s = e.getComputedStyle(r, null), s && (i.background = s.getPropertyValue(o))))), i.background = i.background || "rgb(0,0,0)", i.userAgent = navigator.userAgent, i.isWinJs = t(i.url), i
        }
        n.isWinJsContext = t;
        n.isInTop = i;
        n.inspectPage = r
    })(t = n.core || (n.core = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    var t;
    (function(n) {
        function i(i, r, u, f, e) {
            var c = n.getAttr(u, "data-market") || "", l = n.getAttr(u, "data-color"), a = n.getAttr(u, "data-background"), v = n.getAttr(u, "data-clickredirect") || "", y = n.getAttr(u, "data-clickparams") || "", p = n.getAttr(u, "data-clicktarget") || "_blank", w = n.getAttr(u, "data-clickaction") || "", b = n.getAttr(u, "data-tracking") || "", o = new n.QueryParameterBuilder(i), h=!1, s;
            if (r != null && (h=!0, o.add("#IG", t), o.add("url", r.url), o.add("referrer", r.referrer), o.add("title", r.title), o.add("width", r.width), o.add("height", r.height), o.add("type", r.type), o.add("language", r.language), o.add("encoding", r.encoding), o.add("screen", r.screen), o.add("dims", r.dims), o.add("background", a || r.background), o.add("color", l || ""), o.add("flavor", r.flavor), o.add("instance", r.instance), o.add("market", c), o.add("formcode", f), o.add("clickredirect", v), o.add("clickparams", y), o.add("clicktarget", p), o.add("clickaction", w), o.add("clicktracking", b)), e)
                for (s in e)
                    e.hasOwnProperty(s) && (h ? o.add(s, e[s]) : (h=!0, o.add("#" + s, e[s])));
            return o.toString()
        }
        function r(n) {
            var t = n.getAttribute("src");
            t += t.indexOf("#") < 0 ? "#visible=1" : "&visible=1";
            n.setAttribute("src", t)
        }
        var t = _bw._G.IG || "";
        n.appendInstrumentationQueryParameters = i;
        n.appendVisibleFlag = r
    })(t = n.core || (n.core = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    var t;
    (function(n) {
        function i(n) {
            for (var u, i, r = 0, t = 0; t < n.length; ++t)
                r += n[t].Weight;
            for (u = parseInt(Math.random() * r), i = 0, t = 0; t < n.length; ++t)
                if (i += n[t].Weight, i > u)
                    return n[t].Name;
            return null
        }
        function r(n, t, i) {
            var u = (i == null || i.url == null ? _bw._d.location.href : i.url).toLowerCase(), r, f;
            return n === "BWONHI" ? "newsrandom" : (r = u.indexOf(t), r>-1) ? (f = u.indexOf("&", r), f==-1 ? u.substring(r + t.length) : u.substring(r + t.length, f)) : null
        }
        var t = function() {
            function n() {}
            return n.Width = "w", n.Height = "h", n.WidthOverride = "wo", n.HeightOverride = "ho", n.AddDataSerpRedirect = "adsr", n.LogClickInClickRedirect = "oicr", n
        }();
        n.Flights = t;
        n.getFlightAssignment = i;
        n.getTypeOverrideImpl = r
    })(t = n.core || (n.core = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    var t = n.core.Logging, i = function() {
        function i() {
            var n = this;
            if (this.getItemCallbacks = {}, this.callbackIdentifier = 0, this.cdFrame = null, this.iframeReady=!1, this.waitQueue = [], this.iframeId = "bkwCDFrame", this.iframeUrl = "/widget/render/cdstorage", i._instance)
                throw new Error("Instantiation failed!. Use CrossDomainStorage.getInstance() instead of new.");
            this.appendIframe();
            this.getItemCallbackHandler();
            this.cdFrame && _bw.sj_be(this.cdFrame, "load", function(t) {
                return n.iframeLoaded(t)
            });
            i._instance = this
        }
        return i.getInstance = function() {
            return !_bw._w.postMessage ||!i.IsLocalStorageSupported() ? null : (i._instance === null && (i._instance = new i), i._instance)
        }, i.prototype.appendIframe = function() {
            var i = _bw._ge(this.iframeId), t;
            if (i) {
                this.cdFrame = i;
                this.iframeReady=!0;
                return 
            }
            t = n.core.createIFrame(n.core.getSecureBingHost() + this.iframeUrl, "1px", "1px");
            t.id = this.iframeId;
            t.name = this.iframeId;
            t.style.visibility = "hidden";
            t.style.position = "absolute";
            t.style.top = "-1000px";
            t.style.left = "-1000px";
            _bw._d.body.appendChild(t);
            this.cdFrame = t
        }, i.prototype.setItem = function(n, t) {
            if (_bw._w.postMessage && frames[this.iframeId]) {
                var i = {
                    action: "setItem",
                    key: n,
                    value: t
                };
                this.sendRequest(i)
            }
        }, i.prototype.removeItem = function(n) {
            if (_bw._w.postMessage && frames[this.iframeId]) {
                var t = {
                    action: "removeItem",
                    key: n
                };
                this.sendRequest(t)
            }
        }, i.prototype.getItem = function(n, t) {
            if (_bw._w.postMessage && frames[this.iframeId]) {
                var i = {
                    action: "getItem",
                    key: n,
                    callbackIdentifier: this.callbackIdentifier
                };
                this.getItemCallbacks[this.callbackIdentifier++] = t;
                this.sendRequest(i)
            }
        }, i.prototype.sendRequest = function(n) {
            this.iframeReady ? frames[this.iframeId].postMessage("cdRequest:" + JSON.stringify(n), "*") : this.waitQueue.push(n)
        }, i.prototype.getItemCallbackHandler = function() {
            var n = this;
            _bw.sj_be(_bw._w, "message", function(i) {
                var u, e, o, r;
                if (i && i.data && typeof i.data == "string" && i.source === frames[n.iframeId] && (u = i.data.indexOf(":"), u!=-1) && (e = i.data.substring(0, u), e == "cdResponse")) {
                    o = i.data.substring(u + 1);
                    try {
                        r = JSON.parse(o);
                        "callbackIdentifier"in r && (n.getItemCallbacks[r.callbackIdentifier](r.value), delete n.getItemCallbacks[r.callbackIdentifier])
                    } catch (f) {
                        typeof f != "string" && (f = f.toString());
                        t.error("BW", f, "CrossDomainStorage.getItemCallbackHandler")
                    }
                }
            }, !1)
        }, i.IsLocalStorageSupported = function() {
            if (typeof JSON != "undefined")
                try {
                    var n = "bw_test";
                    if ("localStorage"in _bw._w && _bw._w.localStorage !== null)
                        return _bw._w.localStorage.setItem(n, "1"), _bw._w.localStorage.removeItem(n), !0
            } catch (t) {
                return !1
            }
            return !1
        }, i.prototype.iframeLoaded = function() {
            if (this.iframeReady=!0, this.waitQueue.length) {
                for (var n = 0; n < this.waitQueue.length; n++)
                    this.sendRequest(this.waitQueue[n]);
                this.waitQueue = []
            }
        }, i._instance = null, i
    }();
    n.CrossDomainStorage = i
}(bootstrap || (bootstrap = {})), function(n) {
    var t;
    (function(t) {
        var h = "/widget/bootstrap.js", c = "bing_widget_autosnapshot=1", u = ["news.msn.com"], f = "bingwidget", l = 2, e = "300px", o = "250px", a = "/widget/images/", i = 10, r = 10, s;
        t.config = {
            defaultWidth: e,
            defaultHeight: o,
            flexUrl: "/widget/render/flex/",
            flexNcUrl: "/widget/render/flexnc/",
            imageWidgetUrl: "/images/widget",
            widgetAnswerBaseUrl: "/widget/t/",
            divClassName: f,
            moduleLoadWaitTimeout: i,
            moduleLoadWaitAttempts: r
        };
        s = function() {
            function s() {
                this.knowledgeWidgetProcessed=!1;
                this.knowledge = null;
                this.trending = null;
                this.stillProcessingRetryNumber = 0;
                this.loadingModules = {}
            }
            return s.prototype.Run = function() {
                var i = this;
                try {
                    if (_bw.makeLog(), t.Logging.init("BW", t.isInTop()), this.props = t.inspectPage(), !this.shouldRender())
                        return;
                    this.processTrending(this.props);
                    this.processKnowledge(this.props);
                    this.ProcessSignature("BW")
                } catch (n) {
                    typeof n != "string" && (n = n.toString());
                    t.Logging.error("BW", n, "bootstrap.run");
                    this.fallback()
                }
                _bw.sb_st(function() {
                    return i.checkForWidgetsStillProcessing()
                }, 4e3)
            }, s.prototype.ProcessSignature = function(n) {
                var t = this;
                this.shouldLogSignature(this.props) && (_b_w_c.sigDelay > 0 ? setTimeout(function() {
                    t.loadAndProcessSignature(n)
                }, _b_w_c.sigDelay) : this.loadAndProcessSignature(n))
            }, s.prototype.checkForTrendingWidgetsStillProcessing = function(n) {
                if (this.trending) {
                    var t = this.getTrendingWidgetTargets();
                    return this.trending.checkForWidgetsStillProcessing(t, n)
                }
                return !1
            }, s.prototype.checkForKnowledgeWidgetsStillProcessing = function(n) {
                return this.knowledge ? this.knowledge.checkForWidgetsStillProcessing(this.props, n) : !1
            }, s.prototype.checkForWidgetsStillProcessing = function() {
                var u = this, i, n;
                if (this.stillProcessingRetryNumber < l) {
                    i = [];
                    n=!1;
                    try {
                        this.checkForTrendingWidgetsStillProcessing(i) && (n=!0);
                        this.checkForKnowledgeWidgetsStillProcessing(i) && (n=!0)
                    } catch (r) {
                        typeof r != "string" && (r = r.toString());
                        t.Logging.error("BW", r, "bootstrap.checkForWidgetsStillProcessing");
                        n=!0
                    }
                    n && (t.Logging.error("BW", "widget not initialized after 4 sec:" + i.join(";"), "bootstrap.checkForWidgetsStillProcessing"), this.stillProcessingRetryNumber++, _bw.sb_st(function() {
                        return u.checkForWidgetsStillProcessing()
                    }, 4e3))
                }
            }, s.prototype.reprocessAndRunWidget = function() {
                try {
                    this.reprocessTrending(this.props);
                    this.processKnowledge(this.props)
                } catch (n) {
                    typeof n != "string" && (n = n.toString());
                    t.Logging.error("BW", n, "bootstrap.reprocessAndRunWidget")
                }
            }, s.prototype.renderDefault = function(n) {
                var i, r;
                if (n && n.getAttribute && (t.getAttr(n, "data-processed") || "").toLowerCase() !== "true" && (t.getAttr(n, "data-processing") || "").toLowerCase() !== "true") {
                    t.setAttr(n, "data-processing", "true");
                    i = t.getAttr(n, "data-width") || t.getAttr(n, "bing_widget_width");
                    r = t.getAttr(n, "data-height") || t.getAttr(n, "bing_widget_height");
                    i = t.getWidthOrHeightValue(t.Flights.Width, t.Flights.WidthOverride, i, {}, e);
                    r = t.getWidthOrHeightValue(t.Flights.Height, t.Flights.HeightOverride, r, {}, o);
                    var s = (i.toString() + r.toString()).toLowerCase(), h = _b_w_c.fallback[s] || _b_w_c.fallback[""], u = t.getBingHost(null), c = [u, a, h].join(""), l = ['<a href="', u, '"><img src="', c, '" /><\/a>'].join(""), f = _bw.sj_ce("span");
                    f.innerHTML = l;
                    n.parentNode.replaceChild(f, n);
                    t.setAttr(n, "data-processing", "false");
                    t.setAttr(n, "data-processed", "true")
                }
            }, s.prototype.fallback = function() {
                var n, i;
                try {
                    if (n = this.getTrendingWidgetTargets(), n != null)
                        for (i = 0; i < n.length; ++i)
                            this.renderDefault(n[i]);
                    else 
                        t.Logging.error("BW", "target not found", "bootstrap.fallback");
                    this.knowledge && this.knowledge.fallback()
                } catch (r) {
                    typeof r != "string" && (r = r.toString());
                    t.Logging.error("BW", r, "bootstrap.fallback")
                }
            }, s.prototype.loadAndProcessSignature = function(u) {
                var o = this, e, f = "signature";
                e = function(r) {
                    n.signature ? (o.loadingModules[f]=!1, n.signature.processSignature(u)) : r > 0 ? _bw.sb_st(function() {
                        return e(r - 1)
                    }, i) : (o.loadingModules[f]=!1, t.Logging.error("BW", "signature module load failed", "bootstrap.loadAndProcessSignature"))
                };
                n.signature ? e(0) : this.loadingModules[f] ? _bw.sb_st(function() {
                    return e(r)
                }, i) : (this.loadingModules[f]=!0, _bw.sj_jbc(f, !1, function() {
                    return e(r)
                }, function() {
                    return o.loadingModules[f]=!1
                }))
            }, s.prototype.isMsnHomepage = function(n) {
                return n != null && n.url != null && n.url.indexOf("www.msn.com/") >= 0?!0 : !1
            }, s.prototype.shouldLogSignature = function(n) {
                if (_b_w_c.sigSample <= 0 || this.isMsnHomepage(n))
                    return !1;
                var t = Math.random();
                return t < _b_w_c.sigSample
            }, s.prototype.autoSnapshotEnabled = function(n, i) {
                for (var e, f, r = 0; r < n.length; r++)
                    if ((t.getAttr(n[r], "data-autosnapshot") || "").toLowerCase() == "true")
                        return n[r];
                if (i && i.url) {
                    if (i.url.indexOf(c) >= 0)
                        return n[0];
                    for (e = t.getPivotUrl("host", i.url).replace("host:", ""), f = 0; f < u.length; f++)
                        if (u[f] == e)
                            return n[0]
                }
                return null
            }, s.prototype.autoSnapshotManual = function(n) {
                for (var i = 0; i < n.length; i++)
                    if ((t.getAttr(n[i], "data-autosnapshotmanual") || "").toLowerCase() == "true")
                        return !0;
                return !1
            }, s.prototype.findScripts = function() {
                var i = [], r = _bw._d.getElementsByTagName("script"), u, n;
                for (u in r)
                    n = r[u], n && n.src && n.src.indexOf(h) >= 0 ? i.push(n) : n && n.getAttribute && t.getAttr(n, "data-source") == "bingwidget" && i.push(n);
                return i
            }, s.prototype.processKnowledge = function(t) {
                var f = this, i;
                if (!this.knowledgeWidgetProcessed) {
                    if (i = this.findScripts(), i.length == 0)
                        return;
                    if (!_b_w_c.snapshot ||!n.core.isInTop(i[0])&&!t.isWinJs)
                        return;
                    var r = this.autoSnapshotEnabled(i, t), e = r != null, u=!this.autoSnapshotManual(i);
                    if (!e)
                        return;
                    this.knowledgeWidgetProcessed=!0;
                    _b_w_c.snapshotDelay > 0 ? setTimeout(function() {
                        f.loadKnowledgeWidget(t, r, !u)
                    }, _b_w_c.snapshotDelay) : this.loadKnowledgeWidget(t, r, !u)
                }
            }, s.prototype.loadKnowledgeWidget = function(u, f, e) {
                var o = this, h, s = "knowledge";
                h = function(r) {
                    n.knowledge ? (o.loadingModules[s]=!1, o.knowledge || (o.knowledge = new n.knowledge.Knowledge(f)), o.knowledge.go(u, f, e)) : r > 0 ? _bw.sb_st(function() {
                        return h(r - 1)
                    }, i) : (o.loadingModules[s]=!1, t.Logging.error("BW", "knowledge module load failed", "bootstrap.loadKnowledgeWidget"))
                };
                n.knowledge ? h(0) : this.loadingModules[s] ? _bw.sb_st(function() {
                    return h(r)
                }, i) : (this.loadingModules[s]=!0, _bw.sj_jbc(s, !1, function() {
                    return h(r)
                }, function() {
                    return o.loadingModules[s]=!1
                }))
            }, s.prototype.getTrendingWidgetTargets = function() {
                var i = t.getTargetsByClassName(f), n, r;
                return i.length == 0 && (n = this.findScripts(), n.length > 0 && (r = this.autoSnapshotEnabled(n, this.props), r || t.isInTop(n[0]) || i.push(n[0]))), i
            }, s.prototype.processTrending = function(n) {
                var t = this.getTrendingWidgetTargets();
                t && t.length > 0 && this.loadAndExecuteTrending(n, t)
            }, s.prototype.reprocessTrending = function(n) {
                for (var r = this.getTrendingWidgetTargets(), u = [], i = 0; i < r.length; i++)(t.getAttr(r[i], "data-processing") || "")
                    .toLowerCase() !== "true" && (t.getAttr(r[i], "data-processed") || "").toLowerCase() !== "true" && u.push(r[i]);
                u.length > 0 && this.loadAndExecuteTrending(n, u)
            }, s.prototype.loadAndExecuteTrending = function(u, f) {
                var e = this, o, s;
                !f || f.length < 1 || (o = "trending", s = function(r) {
                    if (!n.trending)
                        r > 0 ? _bw.sb_st(function() {
                            return s(r - 1)
                        }, i) : (e.loadingModules[o]=!1, t.Logging.error("BW", "trending module load failed", "bootstrap.loadAndExecuteTrending"), e.fallback());
                    else {
                        if (e.loadingModules[o]=!1, !e.trending)
                            try {
                                e.trending = new n.trending.TrendingWidget(u)
                            } catch (h) {
                            typeof h != "string" && (h = h.toString());
                            t.Logging.error("BW", h, "bootstrap.loadAndExecuteTrending");
                            e.fallback()
                        }
                        if (e.trending)
                            try {
                                e.trending.go(f)
                            } catch (h) {
                            typeof h != "string" && (h = h.toString());
                            t.Logging.error("BW", h, "bootstrap.loadAndExecuteTrending");
                            e.fallback()
                        }
                    }
                }, n.trending ? s(0) : this.loadingModules[o] ? _bw.sb_st(function() {
                    return s(r)
                }, i) : (this.loadingModules[o]=!0, _bw.sj_jbc(o, !1, function() {
                    return s(r)
                }, function() {
                    e.loadingModules[o]=!1;
                    e.fallback()
                })))
            }, s.prototype.invokeSnapshotDebugger = function() {
                this.knowledge && this.knowledge.invokeSnapshotDebugger()
            }, s.prototype.shouldRender = function() {
                try {
                    if ((this.props.url.indexOf("msn.com")>-1 || this.props.url.indexOf("amp-test.com")>-1) && navigator && navigator.appVersion && (navigator.appVersion.indexOf("MSIE 7.")>-1 || navigator.appVersion.indexOf("MSIE 6.")>-1))
                        return !1
                } catch (n) {
                    typeof n != "string" && (n = n.toString());
                    t.Logging.error("BW", n, "bootstrap.shouldRender")
                }
                return !0
            }, s
        }();
        t.Bootstrap = s
    })(t = n.core || (n.core = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    var t;
    (function(n) {
        var t = function() {
            function n() {
                this.SIZE_OF_SIGNATURE = 32;
                this.tokenHashAggregation = [];
                this.numTokens = 0;
                this.currentHash = 0;
                for (var n = 0; n < this.SIZE_OF_SIGNATURE; ++n)
                    this.tokenHashAggregation[n] = 0
            }
            return n.prototype.AddTokenToLocation = function(n) {
                this.tokenHashAggregation[n] = this.tokenHashAggregation[n] == 0 ? 1 : 0;
                this.numTokens++
            }, n.prototype.AddToken = function(n) {
                this.AddTokenToLocation(n%this.SIZE_OF_SIGNATURE)
            }, n.prototype.CalculateHash = function() {
                for (var n = 0, t = 0; t < this.tokenHashAggregation.length; t++)
                    n<<=1, n|=this.tokenHashAggregation[t];
                this.currentHash = n
            }, n.prototype.GetHashValue = function() {
                return this.currentHash
            }, n.prototype.GetHashValueAsString = function() {
                var t = this.currentHash, n, i;
                return t < 0 && (t = 4294967295 + t + 1), n = t.toString(16).toLowerCase(), i = this.SIZE_OF_SIGNATURE / 4, n.length >= i ? n : new Array(i - n.length + 1).join("0") + n
            }, n.prototype.GetNumTokens = function() {
                return this.numTokens
            }, n
        }();
        n.DocHash = t
    })(t = n.signature || (n.signature = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    var t;
    (function(n) {
        function f(n) {
            if (!n || n.nodeType != 3 ||!n.nodeValue)
                return null;
            var r = n.nodeValue, i = r.replace(t, "");
            return i.length == 0 ? null : i
        }
        function e(n) {
            if (!n)
                return null;
            var i = n.replace(t, "");
            return i.length == 0 ? null : i
        }
        function o(n) {
            var t, i, u, r;
            return !n ||!n.href ? null : (t = n.attributes.href, !t || t.value.length == 0) ? null : (t = t.value, i = t.indexOf("#"), u = t.indexOf("?"), i >= 0 && t.length > i + 1 && t[i + 1] == "!" && (i =- 1, u =- 1), r = i, u >= 0 && (r < 0 || r > u) && (r = u), r >= 0 && (t = t.substring(0, r)), t.length == 0) ? null : t
        }
        function s(t, s) {
            var h = new n.DocHash, c, d, l, y, p, w;
            if (!s)
                return null;
            var v = 0, b = 0, k = e(t);
            k !== null && (h.AddToken(k.length), ++v);
            for (var a = [{
                e: s,
                i: 0
            }
            ], g = 0, nt = (new Date).getTime(); a.length > 0;) {
                if (c = a[a.length - 1], c.i >= c.e.childNodes.length) {
                    a.pop();
                    continue
                }
                while (c.i < c.e.childNodes.length) {
                    if (++g%u == 0 && (d = (new Date).getTime() - nt, d > r))
                        return null;
                    if (l = c.e.childNodes[c.i++], l.nodeType == 3)
                        y = f(l), y !== null && (h.AddToken(y.length), ++v);
                    else if (l.nodeType == 1 && (p = l, !i[p.tagName])) {
                        p.tagName == "A" && (w = o(l), w !== null && (h.AddToken(w.length), ++b));
                        a.push({
                            e: l,
                            i: 0
                        });
                        break
                    }
                }
            }
            return h.AddToken(v), h.AddToken(b), h.CalculateHash(), h.GetHashValueAsString()
        }
        var t = /[ \r\n\t\f\v!"#$%^&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]/g, i = {
            SCRIPT: 1,
            STYLE: 1,
            IFRAME: 1,
            OBJECT: 1,
            EMBED: 1,
            AUDIO: 1,
            VIDEO: 1,
            CANVAS: 1,
            FRAME: 1,
            FRAMESET: 1,
            NOSCRIPT: 1,
            TEXTAREA: 1
        }, r = 100, u = 100;
        n.getDocumentSignature = s
    })(t = n.signature || (n.signature = {}))
}(bootstrap || (bootstrap = {})), function(n) {
    var t;
    (function(t) {
        function r() {
            return n.core.isInTop() ? t.getDocumentSignature(document.title, document.body) : null
        }
        function u(n) {
            try {
                var f = _bw.sb_gt(), u = r(), e = _bw.sb_gt() - f;
                u !== null && i.sig(n, u, e)
            } catch (t) {
                typeof t != "string" && (t = t.toString());
                i.error(n, t, "bootstrap.sig")
            }
        }
        function f() {
            try {
                _bw.makeLog();
                i.init("BM", n.core.isInTop());
                _bw._w._bwmid && i.id(_bw._w._bwmid);
                i.pageProperties("BM", n.core.inspectPage());
                var r = new n.core.Bootstrap;
                r.ProcessSignature("BM")
            } catch (t) {
                typeof t != "string" && (t = t.toString());
                i.error("BM", t, "bootstrap.run")
            }
        }
        var i = n.core.Logging;
        t.processSignature = u;
        t.run = f
    })(t = n.signature || (n.signature = {}))
}(bootstrap || (bootstrap = {}));
bootstrap.signature.run()

