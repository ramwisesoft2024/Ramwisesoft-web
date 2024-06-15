var GartnerPI_Widget = function(e) {
    return new function(e) {
        var t = this,
            i = "//www.gartner.com",
            n = "/reviews/home",
            r = "/reviews/public/Widget/",
            a = function(e) {
                console && (console.log, Function)
            },
            s = function(e) {
                return o(), e = e || {}, t.widget_id = e.widget_id, t.widget_id ? (t.size = !e.size || "small" !== e.size && "large" !== e.size && "line" !== e.size ? "small" : e.size, t.theme = !e.theme || "light" !== e.theme && "dark" !== e.theme ? "light" : e.theme, t.sourcingLink = e.sourcingLink || null, t.version = e.version || 1, e.container && e.container.nodeType && 1 === e.container.nodeType ? (t.container = e.container, p(), g(), z(), d(), void 0) : void a("Required: You must specify a DOM element for the widget to render in")) : void a("widget_id argument is required")
            },
            o = function() {
                var e = document.createElement("script");
                e.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.4.3/purify.min.js"), e.setAttribute("type", "text/javascript"), document.getElementsByTagName("head")[0].appendChild(e)
            },
            p = function() {
                if (!document.getElementById("gartner-pi-styles")) {
                    var e = document.createElement("link");
                    e.setAttribute("rel", "stylesheet"), e.setAttribute("id", "gartner-pi-styles"), e.setAttribute("type", "text/css"), e.setAttribute("href", h() + r + "css/widget.css"), document.getElementsByTagName("head")[0].appendChild(e)
                }
            },
            d = function() {
                t.dataContainer = t.version < 2 ? document.getElementById("gartner-pi-datacontainer") : document.getElementById("gartner-pi-datacontainer-" + t.widget_id);
                const e = t.version < 2 ? "gartner-pi-widget-data" : "gartner-pi-widget-data-" + t.widget_id;
                if (window.postMessage instanceof Function) {
                    var i = ["data?widget_id=", t.widget_id, "&size=", t.size],
                        n = document.createElement("iframe");
                    n.setAttribute("src", h() + r + i.join("")), n.setAttribute("width", 0), n.setAttribute("height", 0), n.setAttribute("frameborder", 0), n.setAttribute("id", e), n.setAttribute("title", "Read reviews on Gartner Peer Insights"), n.setAttribute("aria-label", "Read reviews on Gartner Peer Insights"), t.container.appendChild(n)
                } else t.dataContainer.appendChild(b()), a("Message API not supported")
            },
            u = function() {
                t.list || (t.list = t.dataContainer.getElementsByTagName("ul")[0]);
                var e, i = t.list.getElementsByTagName("li")[0],
                    n = i.offsetHeight,
                    r = 10,
                    a = t.dataContainer.getElementsByClassName("gartner-pi-reviews")[0],
                    s = setInterval(function() {
                        e = a.scrollTop, e === n ? (clearInterval(s), t.list.appendChild(i), setTimeout(u, 1e4)) : e > n ? a.scrollTop -= 20 : a.scrollTop += e + r > n ? n - e : r
                    }, 55)
            };
        const l = function(e) {
            var t = new Set(["gcom.pdodev.aws.gartner.com", "gcom.pdoqa.aws.gartner.com", "gartner.com", "www.gartner.com", "external.pi.gpidev.aws.gartner.com", "external.pi.gpiqa.aws.gartner.com", "external.pi.gpi.aws.gartner.com"]);
            try {
                var i = new URL(e).hostname;
                return t.has(i) ? "APPROVED_URL" : "INVALID_URL"
            } catch (e) {
                return "INVALID_URL"
            }
        };
        var c = function(e) {
                a(e), "APPROVED_URL" == l(e.origin) ? _(e.data) : a("denied.")
            },
            g = function() {
                window.addEventListener("message", c)
            },
            v = function() {
                window.removeEventListener("message", c), clearTimeout(self.animateId)
            },
            h = function(e) {
                e = e || "";
                var t = window.location.protocol;
                "file:" === t && (t = "http:");
                var n = window.location.host;
                return t + (n.indexOf("gartner.com") > -1 ? "//" + n : i) + e
            },
            m = function(e, i) {
                return i = i || "vendor", e + "?utm_source=" + i + "&utm_medium=referral&utm_campaign=widget&utm_content=" + t.widget_id
            },
            f = function(e, i) {
                if (e) {
                    var n = t.version < 2 ? document.getElementById("gartner-pi-link") : document.getElementById("gartner-pi-link-" + t.widget_id);
                    n.href = h(m(e, i)), n.setAttribute("onclick", 'location.href="' + h(m(e, i)) + '"')
                }
            },
            w = function(e) {
                var t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    i = new Date(e);
                if ("[object Date]" === Object.prototype.toString.call(i)) {
                    var n = i.getDate(),
                        r = i.getFullYear();
                    return t[i.getMonth()] + " " + n + ", " + r
                }
                return ""
            },
            A = function() {
                var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    t = new Date,
                    i = t.getDate(),
                    n = t.getFullYear();
                return i + " " + e[t.getMonth()] + " " + n
            },
            b = function() {
                var e = document.createElement("div");
                e.setAttribute("class", "gartner-pi-static-content");
                var t = [];
                return t.push('<div class="gartner-pi-no-data">'), t.push('<div class="gartner-pi-logo"></div>'), t.push('<div class="gartner-pi-default-msg gartner-pi-h1">Please visit Peer Insights to read and write reviews. '), t.push('<span class="gartner-pi-url">gartner.com/reviews</span>'), t.push("</div>"), t.push("</div>"), e.innerHTML = t.join(""), e
            },
            y = function() {
                return '<div id="' + (t.version < 2 ? "gartner-pi-datacontainer" : "gartner-pi-datacontainer-" + t.widget_id) + '"></div>'
            },
            k = function(e) {
                var t = Math.round(e / 5 * 100),
                    i = ['<span class="gartner-pi-star-rating">'];
                return i.push('<span class="gartner-pi-star-rating-score" style="width:' + t + '%"></span>'), i.push("</span>"), i.join("")
            },
            _ = function(e) {
                if ((e = "object" != typeof e ? JSON.parse(e) : null) && e.widgetId && e.widgetId === t.widget_id)
                    if (e && e.error) t.dataContainer.appendChild(b());
                    else if (null !== e && t.dataContainer)
                    if ("line" === t.size) E(e);
                    else if ("large" === t.size) {
                    if (I(e), e.vendor) {
                        var i = N(e.vendor.url),
                            n = T(e.vendor.seoName);
                        f(i, n)
                    }
                    e.reviews && e.reviews.length && (self.animateId = setTimeout(u, 1e4))
                } else L(e)
            },
            L = function(e) {
                var i = C(e);
                t.dataContainer.innerHTML = i.join("");
                var n = N(e.url),
                    r = T(e.seoName);
                f(n, r)
            },
            I = function(e) {
                var i = e.reviews,
                    n = e.vendor,
                    r = C(n),
                    a = "";
                e.vendor && e.vendor.seoName && (a = T(e.vendor.seoName)), r.push('<div class="gartner-pi-reviews">'), r.push("<ul>");
                for (var s = 0; s < i.length; s++) {
                    var o = i[s],
                        p = P(o.headline);
                    r.push("<li>"), r.push('<div class="gartner-pi-rating-container">'), r.push(k(M(o.rating))), r.push('<span class="gartner-pi-datestamp">'), r.push("Reviewed " + w(o.date)), r.push("</span>"), r.push("</div>"), r.push('<p class="gartner-pi-quote">"' + p + '..." '), r.push('<a href="' + h(m(o.reviewUrl, a)) + '" onclick="event.stopPropagation();" target="_blank" rel="nofollow">(read more)</a></p>'), r.push("</li>")
                }
                r.push("</ul>"), r.push("</div>"), t.dataContainer.innerHTML = r.join("")
            },
            C = function(e) {
                var i = [],
                    n = M(e.rating),
                    r = M(e.score),
                    a = M(e.reviewCount),
                    s = P(e.name),
                    o = P(e.market);
                return i.push('<div class="gartner-pi-card">'), i.push('<div class="gartner-pi-logo"></div>'), i.push('<div class="gartner-pi-header">'), i.push('<div class="gartner-pi-h1">' + s + "</div>"), i.push('<div class="gartner-pi-h2">' + o + "</div>"), i.push("</div>"), i.push('<div class="gartner-pi-stats">'), i.push('<div class="gartner-pi-alignLeft">'), i.push('<div class="gartner-pi-overall-rating">'), i.push('<span class="gartner-pi-score">' + n + "</span>"), i.push(k(n)), i.push("</div>"), i.push('<div class="gartner-pi-reviews-link">'), i.push("<span>" + a + " Rating" + (a > 1 ? "s" : "") + " "), i.push('<span class="gartner-pi-chevron"></span>'), i.push("</span>"), i.push("</div>"), i.push("</div>"), i.push('<div class="gartner-pi-alignRight">'), t.sourcingLink ? (i.push('<div class="gartner-pi-sourcing-link">'), i.push('<a id="' + t.sourcingLink + '" href="' + t.sourcingLink + '" onclick="event.stopPropagation();" target="_blank">Submit a review</a>'), i.push('<span class="gartner-pi-chevron"></span>'), i.push("</div>")) : (i.push("<div>"), i.push('<div class="gartner-pi-overall-rating">'), i.push('<span class="gartner-pi-score">' + r + "%</span>"), i.push('<span class="gartner-pi-thumbs-up"></span>'), i.push('<div class="gartner-pi-reviews-link">'), i.push("<span>Recommend</span>"), i.push("</div>"), i.push("</div>"), i.push("</div>")), i.push("</div>"), i.push('<div class="gartner-pi-as-of-date" title="As of ' + A() + '">As of ' + A() + "</div>"), i.push("</div>"), i.push("</div>"), i
            },
            E = function(e) {
                var i = [],
                    n = M(e.rating),
                    r = M(e.reviewCount),
                    a = N(e.url),
                    s = T(e.seoName);
                i.push('<div class="gartner-pi-card">'), i.push('<div class="gartner-pi-stats">'), i.push('<div class="gartner-pi-overall-rating">'), i.push('<span class="gartner-pi-score">' + n + "</span>"), i.push('<div class="gartner-pi-translate">'), i.push(k(n)), i.push('<div class="gartner-pi-reviews-link">'), i.push("<span>" + r + " Rating" + (r > 1 ? "s" : "") + "</span>"), i.push(" on Gartner Peer Insights</div>"), t.sourcingLink && (i.push('<div class="gartner-pi-sourcing-link">'), i.push('<a id="' + t.sourcingLink + '" href="' + t.sourcingLink + '" onclick="event.stopPropagation();" target="_blank">(Submit a review)</a>'), i.push("</div>")), i.push("</div>"), i.push("</div>"), i.push("</div>"), i.push('<div class="gartner-pi-as-of-date" title="As of ' + A() + '">As of ' + A() + "</div>"), i.push("</div>"), t.dataContainer.innerHTML = i.join(""), f(a, s)
            },
            z = function() {
                var e = m(h(n));
                const i = t.version < 2 ? "gartner-pi-link" : "gartner-pi-link-" + t.widget_id,
                    r = t.version < 2 ? "gartner-pi-widget" : "gartner-pi-widget-" + t.widget_id;
                var a = ['<div id="' + i + '" onclick=location.href="' + e + '" class="gartner-pi-link" target="_blank" rel="nofollow" >'];
                a.push(y()), a.push("</div>");
                var s = document.createElement("div");
                s.setAttribute("id", r), s.setAttribute("data-size", t.size), s.setAttribute("data-theme", t.theme), s.innerHTML = a.join(""), t.container.appendChild(s)
            },
            M = function(e) {
                return e ? isNaN(e) ? 0 : parseFloat(e, 10) : 0
            },
            N = function(e) {
                const t = /^[a-zA-Z0-9-/]+$/;
                return ("string" == typeof e || e instanceof String) && e.match(t) ? e : ""
            },
            T = function(e) {
                const t = /^[a-zA-Z0-9-]+$/;
                return ("string" == typeof e || e instanceof String) && e.match(t) ? e : ""
            },
            P = function(e) {
                return "undefined" != typeof DOMPurify ? DOMPurify.sanitize(e) : R(e)
            },
            R = function(e) {
                return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("/", "&#x2F;").replaceAll("'", "&#x27;").replaceAll('"', "&quot;")
            };
        return s(e), {
            stop: v,
            size: t.size,
            theme: t.theme,
            widget_id: t.widget_id
        }
    }(e)
}