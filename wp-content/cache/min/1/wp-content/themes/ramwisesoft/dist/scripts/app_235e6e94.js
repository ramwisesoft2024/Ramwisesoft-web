! function(e) {
    var t = {};

    function i(a) {
        if (t[a]) return t[a].exports;
        var n = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, a) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/wp-content/themes/ramwisesoft/dist/", i(i.s = 13)
}([function(e, t) {
    e.exports = jQuery
}, , , , , , , , , , , , , function(e, t, i) {
    i(14), e.exports = i(18)
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(15),
        n = (i.n(a), i(16)),
        s = (i.n(n), i(17));
    i.n(s)
}, function(e, t, i) {
    (function(e, t) {
        ({
            registerSliders: function() {
                var t = this;
                e(".slider-1").length > 0 && e(".slider-1").each(function(t, i) {
                    var a = (i = e(i)).parents(".slick-wrap").find(".arrows"),
                        n = i.parents(".slick-wrap").find(".indicators");
                    i.not(".slick-initialized").slick({
                        appendArrows: a,
                        appendDots: n,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 3e3,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 1,
                        centerMode: !1,
                        variableWidth: !0,
                        adaptiveHeight: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0
                    })
                }), e(".slider-3-sync").length > 0 && e(".slider-3-sync").each(function(t, i) {
                    var a = (i = e(i)).parents(".slick-wrap").find(".slider-3");
                    i.not(".slick-initialized").slick({
                        asNavFor: a,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: !0,
                        speed: 500,
                        autoplay: !0,
                        autoplaySpeed: 5e4,
                        centerMode: !1,
                        arrows: !1,
                        fade: !1,
                        loop: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0
                    })
                }), e(".slider-3").length > 0 && e(".slider-3").each(function(i, a) {
                    var n = (a = e(a)).parents(".slick-wrap").find(".arrows"),
                        s = a.parents(".slick-wrap").find(".indicators"),
                        o = a.parents(".slick-wrap").find(".slider-3-sync");
                    t.pauseSliderOnHover(a, a.parents(".slick-wrap"), function() {
                        a.find('.slick-slide[data-slick-index="-1"]').addClass("slider-is-off")
                    }), t.adjustCarouselSameHeight(a, a.parents(".slick-wrap")), a.not(".slick-initialized").slick({
                        asNavFor: o,
                        appendArrows: n,
                        appendDots: s,
                        autoplay: !0,
                        autoplaySpeed: 6e3,
                        centerMode: !1,
                        dots: !0,
                        infinite: !0,
                        speed: 400,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: !0,
                        useCSS: !0,
                        variableWidth: !0,
                        useTransform: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0
                    }), a.on("beforeChange", function(t, i, n, s) {
                        e(this).parents(".slick-wrap").find(".slick-slide").removeClass("slider-is-off"), 0 == s && a.find('.slick-slide[data-slick-index="-1"]').addClass("slider-is-off"), e(i.$slides.get(s - 1)).addClass("slider-is-off"), e(this).parents(".slick-wrap").find(".slick-content").hide().removeClass("active"), e(this).parents(".slick-wrap").find(".slick-content[data-id=" + (s + 1) + "]").show().addClass("active")
                    })
                }), e(".slider-t01").length > 0 && e(".slider-t01").each(function(i, a) {
                    var n = (a = e(a)).parents(".slick-wrap").find(".arrows"),
                        s = a.parents(".slick-wrap").find(".indicators");
                    t.pauseSliderOnHover(a, a.parents(".slick-wrap"), function() {
                        a.find('.slick-slide[data-slick-index="-1"]').addClass("slider-is-off")
                    }), t.adjustCarouselSameHeight(a, a.parents(".slick-wrap")), a.not(".slick-initialized").slick({
                        appendArrows: n,
                        appendDots: s,
                        autoplay: !0,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        dots: !0,
                        infinite: !0,
                        speed: 400,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        mobileFirst: !0,
                        useCSS: !0,
                        variableWidth: !0,
                        useTransform: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0
                    }), a.on("beforeChange", function(t, i, n, s) {
                        if (e(this).parents(".slick-wrap").find(".slick-slide").removeClass("slider-is-off"), 0 == s && a.find('.slick-slide[data-slick-index="-1"]').addClass("slider-is-off"), !(1 == n && 0 == s && i.slideCount <= 2)) e(i.$slides.get(s - 1)).addClass("slider-is-off");
                        e(this).parents(".slick-wrap").find(".slick-content").hide().removeClass("active"), e(this).parents(".slick-wrap").find(".slick-content[data-id=" + (s + 1) + "]").show().addClass("active")
                    })
                }), e(".slider-4").length > 0 && e(".slider-4").each(function(i, a) {
                    var n = (a = e(a)).parents(".slick-wrap-04").find(".arrows"),
                        s = a.parents(".slick-wrap-04").find(".indicators");
                    t.PlayPauseOnButtonClickDarkbgWhite(a, e(".slider-4-caption")), t.adjustCarouselSameHeight(a, a.parents(".slick-wrap")), a.not(".slick-initialized").slick({
                        appendArrows: n,
                        appendDots: s,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 6e3,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 1,
                        centerMode: !1,
                        variableWidth: !1,
                        adaptiveHeight: !1,
                        fade: !0,
                        responsive: [{
                            breakpoint: 696,
                            settings: {
                                adaptiveHeight: !0
                            }
                        }],
                        pauseOnFocus: !0,
                        pauseOnHover: !1,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0
                    }), a.on("beforeChange", function(t, i, a, n) {
                        e(this).parents(".slick-wrap").find(".slick-content").hide().removeClass("active"), e(this).parents(".slick-wrap").find(".slick-content[data-id=" + (n + 1) + "]").show().addClass("active")
                    })
                }), e(".slider-5").length > 0 && e(".slider-5").each(function(i, a) {
                    var n = (a = e(a)).parents(".slick-wrap-05").find(".arrows"),
                        s = a.parents(".slick-wrap-05").find(".indicators");
                    t.PlayPauseOnButtonClick(a, e(".slider-5-caption")), t.adjustCarouselSameHeight(a, a.parents(".slick-wrap")), a.not(".slick-initialized").slick({
                        appendArrows: n,
                        appendDots: s,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 6e3,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 1,
                        centerMode: !1,
                        variableWidth: !1,
                        adaptiveHeight: !1,
                        fade: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !1,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0
                    }), a.on("beforeChange", function(t, i, a, n) {
                        e(this).parents(".slick-wrap").find(".slick-content").hide().removeClass("active"), e(this).parents(".slick-wrap").find(".slick-content[data-id=" + (n + 1) + "]").fadeIn().addClass("active")
                    })
                }), e(".slider-7").length > 0 && e(".slider-7").each(function(i, a) {
                    var n = (a = e(a)).parents(".section-quote-full").find(".arrows"),
                        s = a.parents(".section-quote-full").find(".indicators");
                    a.not(".slick-initialized").slick({
                        appendArrows: n,
                        appendDots: s,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 15e3,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 1,
                        centerMode: !1,
                        variableWidth: !1,
                        adaptiveHeight: !1,
                        fade: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0
                    }), t.adjustCarouselSameHeight(a, a.parents(".slick-wrap")), a.on("beforeChange", function(t, i, a, n) {
                        e(this).parents(".slick-wrap").find(".slick-content").hide().removeClass("active"), e(this).parents(".slick-wrap").find(".slick-content[data-id=" + (n + 1) + "]").fadeIn().addClass("active")
                    })
                }), e(".slider-2").length > 0 && e(".slider-2").each(function(i, a) {
                    var n = (a = e(a)).parents(".slick-wrap-02").find(".arrows");
                    e(".slider-2").slick({
                        appendArrows: n,
                        autoplay: !0,
                        autoplaySpeed: 6e3,
                        slidesToShow: 1,
                        infinite: !0,
                        variableWidth: !0,
                        adaptiveHeight: !1
                    }), t.pauseSliderOnHover(e(".slider-2"), e(".slider-2-caption-wrap .caption")), t.adjustCarouselSameHeight(a, a.parents(".slick-wrap")), a.on("beforeChange", function(t, i, a, n) {
                        e(this).parents(".slick-wrap").find(".slick-content").hide().removeClass("active"), e(this).parents(".slick-wrap").find(".slick-content[data-id=" + (n + 1) + "]").show().addClass("active")
                    })
                }), e(".slider-6").length > 0 && e(".slider-6").not(".slick-initialized").slick({
                    dots: !1,
                    autoplay: !0,
                    autoplaySpeed: 6e3,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    centerMode: !0,
                    responsive: [{
                        breakpoint: 1097,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 695,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }],
                    pauseOnFocus: !0,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !0,
                    focusOnSelect: !0
                }), e(".sliderplaypause").length > 0 && e(".sliderplaypause").each(function(i, a) {
                    var n = (a = e(a)).parents(".slick-wrap").find(".arrows"),
                        s = a.parents(".slick-wrap").find(".indicators");
                    t.PlayPauseOnClickWhiteButtonHome(a, e(".sliderplaypause")), a.not(".slick-initialized").slick({
                        appendArrows: n,
                        appendDots: s,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 6e3,
                        infinite: !0,
                        speed: 1e3,
                        pauseOnHover: !1
                    })
                }), e(".slider-8").length > 0 && e(".slider-8").each(function(t, i) {
                    var a = (i = e(i)).parents(".slick-wrap").find(".arrows"),
                        n = i.parents(".slick-wrap").find(".indicators");
                    i.not(".slick-initialized").slick({
                        appendArrows: a,
                        appendDots: n,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 6e3,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 1,
                        centerMode: !1,
                        variableWidth: !0,
                        adaptiveHeight: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0
                    })
                }), e(".slider-9").length > 0 && e(".slider-9").each(function(i, a) {
                    var n = (a = e(a)).parents(".slick-wrap-09").find(".arrows"),
                        s = a.parents(".slick-wrap-09").find(".indicators");
                    e(".slick-wrap-09").hasClass("section-c15--light") ? t.PlayPauseOnButtonClickLightbgWhiteevent(a, e(".slider-9-caption")) : t.PlayPauseOnButtonClickDarkbgWhiteevent(a, e(".slider-9-caption")), t.adjustCarouselSameHeight(a, a.parents(".slick-wrap")), a.not(".slick-initialized").slick({
                        appendArrows: n,
                        appendDots: s,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 6e3,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 3,
                        centerMode: !1,
                        variableWidth: !1,
                        adaptiveHeight: !1,
                        fade: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !1,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0,
                        responsive: [{
                            breakpoint: 695,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }), a.on("beforeChange", function(t, i, a, n) {
                        e(this).parents(".slick-wrap").find(".slick-content").hide().removeClass("active"), e(this).parents(".slick-wrap").find(".slick-content[data-id=" + (n + 1) + "]").fadeIn().addClass("active")
                    })
                }), e(".slider-10").length > 0 && e(".slider-10").each(function(i, a) {
                    var n = (a = e(a)).parents(".slick-wrap-10").find(".arrows"),
                        s = a.parents(".slick-wrap-10").find(".indicators");
                    e(".slick-wrap-10").hasClass("section-c15--light") ? t.PlayPauseOnButtonClickLightbgWhiteCS(a, e(".slider-10-caption")) : t.PlayPauseOnButtonClickDarkbgWhiteCS(a, e(".slider-10-caption")), t.adjustCarouselSameHeight(a, a.parents(".slick-wrap")), a.not(".slick-initialized").slick({
                        appendArrows: n,
                        appendDots: s,
                        dots: !0,
                        autoplay: !0,
                        autoplaySpeed: 6e3,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 3,
                        centerMode: !1,
                        variableWidth: !1,
                        adaptiveHeight: !1,
                        fade: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !1,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0,
                        responsive: [{
                            breakpoint: 695,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    }), a.on("beforeChange", function(t, i, a, n) {
                        e(this).parents(".slick-wrap").find(".slick-content").hide().removeClass("active"), e(this).parents(".slick-wrap").find(".slick-content[data-id=" + (n + 1) + "]").fadeIn().addClass("active")
                    })
                }), e(".slider-e01").length > 0 && e(".slider-e01").each(function(t, i) {
                    var a = (i = e(i)).parents(".section-e01").find(".arrows"),
                        n = i.parents(".section-e01").find(".indicators");
                    i.not(".slick-initialized").slick({
                        appendArrows: a,
                        appendDots: n,
                        dots: !0,
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 1,
                        centerMode: !1,
                        adaptiveHeight: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0,
                        responsive: [{
                            breakpoint: 1098,
                            settings: "unslick"
                        }]
                    })
                }), e(".slider-e01-pagination").length > 0 && e(".slider-e01-pagination").each(function(t, i) {
                    var a = (i = e(i)).parents(".section-e01").find(".arrows"),
                        n = i.parents(".section-e01").find(".indicators");
                    i.not(".slick-initialized").slick({
                        appendArrows: a,
                        appendDots: n,
                        customPaging: function(e, t) {
                            return '<a href="javascript:void(0);" data-page="' + (t + 1) + '"></a>'
                        },
                        prevArrow: '<i class="icon-arrow-strong-left"></i>',
                        nextArrow: '<i class="icon-arrow-strong-right"></i>',
                        arrows: !0,
                        dots: !0,
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        infinite: !0,
                        speed: 1e3,
                        slidesToShow: 1,
                        centerMode: !1,
                        adaptiveHeight: !1,
                        pauseOnFocus: !0,
                        pauseOnHover: !0,
                        pauseOnDotsHover: !0,
                        focusOnSelect: !0,
                        responsive: [{
                            breakpoint: 1098,
                            settings: "unslick"
                        }]
                    })
                })
            },
            sliderOnResize: function(t, i) {
                e(window).on("resize", function() {
                    t.slick("resize"), i.find(".slick-content").css("height", "auto");
                    var a = 0,
                        n = i.find(".slick-content:first-child").parent().closest("div");
                    if (n.hasClass("slider-5-caption") && (buttonHeight = null != i.find(".slick-content:first-child").find(".btn").outerHeight() ? i.find(".slick-content:first-child").find(".btn").outerHeight() : 0), i.find(".slick-content").each(function() {
                            null != e(this).parents(".slick-wrap").find(".slick-dots").outerHeight() && e(this).parents(".slick-wrap").find(".slick-dots").outerHeight();
                            a < e(this).outerHeight() + parseInt(buttonHeight) + parseInt(0) && (a = e(this).outerHeight() + parseInt(buttonHeight) + parseInt(0))
                        }), i.find(".slick-content").height(a), n.hasClass("slider-5-caption")) {
                        var s = n.innerHeight() - n.height();
                        n.css("min-height", n.find(".slick-content").height() + s + "px")
                    }
                })
            },
            adjustCarouselSameHeight: function(t, i) {
                var a = this;
                t.on("init", function(e, n) {
                    a.sliderHeight(t, i)
                }), e(window).on("resize", function() {
                    t.slick("resize"), i.find(".slick-content").css("height", "auto"), a.sliderHeight(t, i)
                })
            },
            sliderHeight: function(t, i) {
                var a = 0,
                    n = 0,
                    s = i.find(".slick-content:first-child").parent().closest("div");
                if (s.hasClass("slider-5-caption") && (n = null != i.find(".slick-content:first-child").find(".btn").outerHeight() ? i.find(".slick-content:first-child").find(".btn").outerHeight() : 0), i.find(".slick-content").each(function() {
                        null != e(this).parents(".slick-wrap").find(".slick-dots").outerHeight() && e(this).parents(".slick-wrap").find(".slick-dots").outerHeight();
                        a < e(this).outerHeight() + parseInt(n) + parseInt(0) && (a = e(this).outerHeight() + parseInt(n) + parseInt(0))
                    }), i.find(".slick-content").height(a), s.hasClass("slider-5-caption")) {
                    var o = s.innerHeight() - s.height();
                    s.css("min-height", s.find(".slick-content").height() + o + "px")
                }
            },
            listenClickEvents: function() {
                var t = this;
                e("a[href*=\\#].scroll-to-link").click(function(t) {
                    t.preventDefault();
                    var i = e(e(this).attr("href")).data("scroll-offset"),
                        a = i || 1;
                    e("html, body").animate({
                        scrollTop: e(e(this).attr("href")).offset().top + a
                    }, 1e3)
                }), e("body").hasClass("template-homepage") && e("a[href*=\\#].home-scroll-to-link").click(function(i) {
                    i.preventDefault(), e(document).off("scroll"), e(".section-scroll-jack-control li").removeClass("active"), e(this).parent().addClass("active");
                    var a = e(this).attr("href");
                    $target = e(a), e("html, body").stop().animate({
                        scrollTop: $target.offset().top - 60
                    }, 500, "swing", function() {
                        e(document).on("scroll", t.listenScrollEvents())
                    })
                });
                var i = document.querySelectorAll(".hamburger");
                i.length > 0 && function(e, t, i) {
                    if ("[object Object]" === Object.prototype.toString.call(e))
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(i, e[a], a, e);
                    else
                        for (var n = 0, s = e.length; s > n; n++) t.call(i, e[n], n, e)
                }(i, function(e) {
                    e.addEventListener("click", function() {
                        this.classList.toggle("is-active")
                    }, !1)
                }), e(".hamburger").on("click", function() {
                    e(".theme-header").toggleClass("theme-header--is-open"), e("body").toggleClass("pushy-open-right")
                });
                var a = e(".btn-arrow");
                a.click(function() {
                    e(this).toggleClass("active"), a.not(this).removeClass("active")
                }), e(".navbar-toggler").click(function() {
                    e(this).toggleClass("show");
                    var t = document.getElementsByClassName("navbar-toggler");
                    e(this).hasClass("show") ? (t[0].innerHTML = "Hide Filters", e(this).parent().css("border-width", "0px")) : (t[0].innerHTML = "Show Filters", e(this).parent().css("border-width", "1px"))
                })
            },
            pauseSliderOnHover: function(e, t, i) {
                e.on("init", function(a, n) {
                    void 0 !== i && i(), t.mouseover(function() {
                        e.slick("slickPause")
                    }), t.mouseout(function() {
                        e.slick("slickPlay")
                    })
                })
            },
            PlayPauseOnButtonClick: function(e) {
                e.on("init", function(i, a) {
                    t("#toggle").click(function() {
                        -1 != document.getElementById("toggleimage").src.indexOf("/wp-content/uploads/images/Pause-Gray.svg") ? (e.slick("slickPause"), document.getElementById("toggleimage").src = "/wp-content/uploads/images/Play-Gray.svg") : (e.slick("slickPlay"), document.getElementById("toggleimage").src = "/wp-content/uploads/images/Pause-Gray.svg")
                    })
                })
            },
            PlayPauseOnClickWhiteButton: function(e) {
                e.on("init", function(i, a) {
                    t("#toggleidwhite").click(function() {
                        -1 != document.getElementById("toggleimgwhite").src.indexOf("/wp-content/uploads/images/Pause-White.svg") ? (e.slick("slickPause"), document.getElementById("toggleimgwhite").src = "/wp-content/uploads/images/Play-White.svg") : (e.slick("slickPlay"), document.getElementById("toggleimgwhite").src = "/wp-content/uploads/images/Pause-White.svg")
                    })
                })
            },
            PlayPauseOnClickOrangeButton: function(e) {
                e.on("init", function(i, a) {
                    t("#toggleidorange").click(function() {
                        -1 != document.getElementById("toggleimgorange").src.indexOf("/wp-content/uploads/images/Pause-with-icon-orange") ? (e.slick("slickPause"), document.getElementById("toggleimgorange").src = "/wp-content/uploads/images/Play-with-icon-orange.svg") : (e.slick("slickPlay"), document.getElementById("toggleimgorange").src = "/wp-content/uploads/images/Pause-with-icon-orange.svg")
                    })
                })
            },
            PlayPauseOnClickOrangeButtonNews: function(e) {
                e.on("init", function(i, a) {
                    t("#toggleidorangenews").click(function() {
                        -1 != document.getElementById("toggleimgorangenews").src.indexOf("/wp-content/uploads/images/Pause-with-icon-orange") ? (e.slick("slickPause"), document.getElementById("toggleimgorangenews").src = "/wp-content/uploads/images/Play-with-icon-orange.svg") : (e.slick("slickPlay"), document.getElementById("toggleimgorangenews").src = "/wp-content/uploads/images/Pause-with-icon-orange.svg")
                    })
                })
            },
            PlayPauseOnButtonClick: function(e) {
                e.on("init", function(i, a) {
                    t("#toggle").click(function() {
                        -1 != document.getElementById("toggleimage").src.indexOf("/wp-content/uploads/images/Pause-Gray.svg") ? (e.slick("slickPause"), document.getElementById("toggleimage").src = "/wp-content/uploads/images/Play-Gray.svg") : (e.slick("slickPlay"), document.getElementById("toggleimage").src = "/wp-content/uploads/images/Pause-Gray.svg")
                    })
                })
            },
            PlayPauseOnButtonClickDarkbgWhite: function(e) {
                e.on("init", function(i, a) {
                    t("#toggleid").click(function() {
                        -1 != document.getElementById("toggleimg").src.indexOf("/wp-content/uploads/images/Pause-with-icon-white.svg") ? (e.slick("slickPause"), document.getElementById("toggleimg").src = "/wp-content/uploads/images/Play-with-icon-white.svg") : (e.slick("slickPlay"), document.getElementById("toggleimg").src = "/wp-content/uploads/images/Pause-with-icon-white.svg")
                    })
                })
            },
            PlayPauseOnButtonClickDarkbgWhiteevent: function(e) {
                e.on("init", function(i, a) {
                    t("#toggleidevent").click(function() {
                        -1 != document.getElementById("toggleimgevent").src.indexOf("/wp-content/uploads/images/Pause-with-icon-white.svg") ? (e.slick("slickPause"), document.getElementById("toggleimgevent").src = "/wp-content/uploads/images/Play-with-icon-white.svg") : (e.slick("slickPlay"), document.getElementById("toggleimgevent").src = "/wp-content/uploads/images/Pause-with-icon-white.svg")
                    })
                })
            },
            PlayPauseOnButtonClickLightbgWhiteevent: function(e) {
                e.on("init", function(i, a) {
                    t("#toggleidevent").click(function() {
                        -1 != document.getElementById("toggleimgevent").src.indexOf("/wp-content/uploads/images/Pause-Gray.svg") ? (e.slick("slickPause"), document.getElementById("toggleimgevent").src = "/wp-content/uploads/images/Play-Gray.svg") : (e.slick("slickPlay"), document.getElementById("toggleimgevent").src = "/wp-content/uploads/images/Pause-Gray.svg")
                    })
                })
            },
            PlayPauseOnButtonClickLightbgWhiteCS: function(e) {
                e.on("init", function(i, a) {
                    t("#toggleidcs").click(function() {
                        -1 != document.getElementById("toggleimgcs").src.indexOf("/wp-content/uploads/images/Pause-Gray.svg") ? (e.slick("slickPause"), document.getElementById("toggleimgcs").src = "/wp-content/uploads/images/Play-Gray.svg") : (e.slick("slickPlay"), document.getElementById("toggleimgcs").src = "/wp-content/uploads/images/Pause-Gray.svg")
                    })
                })
            },
            PlayPauseOnButtonClickDarkbgWhiteCS: function(e) {
                e.on("init", function(i, a) {
                    t("#toggleidcs").click(function() {
                        -1 != document.getElementById("toggleimgcs").src.indexOf("/wp-content/uploads/images/Pause-with-icon-white.svg") ? (e.slick("slickPause"), document.getElementById("toggleimgcs").src = "/wp-content/uploads/images/Play-with-icon-white.svg") : (e.slick("slickPlay"), document.getElementById("toggleimgcs").src = "/wp-content/uploads/images/Pause-with-icon-white.svg")
                    })
                })
            },
            PlayPauseOnClickWhiteButtonHome: function(e) {
                e.on("init", function(i, a) {
                    t("#toggleidhome").click(function() {
                        -1 != document.getElementById("imgplus").src.indexOf("/wp-content/uploads/images/Pause-White.svg") ? (e.slick("slickPause"), document.getElementById("imgplus").src = "/wp-content/uploads/images/Play-White.svg") : (e.slick("slickPlay"), document.getElementById("imgplus").src = "/wp-content/uploads/images/Pause-White.svg")
                    })
                })
            },
            PlayPauseOnClickWhiteButtonHome: function(e) {
                e.on("init", function(i, a) {
                    t("#toggleidhome").click(function() {
                        -1 != document.getElementById("imgplus").src.indexOf("/wp-content/uploads/images/Pause-White.svg") ? (e.slick("slickPause"), document.getElementById("imgplus").src = "/wp-content/uploads/images/Play-White.svg") : (e.slick("slickPlay"), document.getElementById("imgplus").src = "/wp-content/uploads/images/Pause-White.svg")
                    })
                })
            },
            videoTransformation: function() {
                e(".feature.video").each(function() {
                    var t = e(this).find(".video-wrapper"),
                        i = e(window).width(),
                        a = t.outerWidth(),
                        n = t.outerHeight(),
                        s = e(this).height(),
                        o = Math.max(i / a, s / n);
                    t.css({
                        transform: "translate(-50%, -50%) scale(" + o + ")"
                    })
                })
            },
            listenResizeEvents: function() {
                var t = this;
                e(window).on("resize", function() {
                    t.videoTransformation()
                })
            },
            listenBootstrapAccordionEvents: function() {
                e(".accordion-offcanvas .collapse").on("shown.bs.collapse", function() {
                    e(this).prev().addClass("active")
                }), e(".accordion-offcanvas .collapse").on("hidden.bs.collapse", function() {
                    e(this).prev().removeClass("active")
                }), e(".accordion .collapse").on("shown.bs.collapse", function() {
                    e(this).prev().addClass("active-acc")
                }), e(".accordion .collapse").on("hidden.bs.collapse", function() {
                    e(this).prev().removeClass("active-acc")
                })
            },
            listenScrollEvents: function() {
                var t, i, a, n = document.getElementById("stickyHeader"),
                    s = n.offsetTop;
                if (window.onscroll = function() {
                        window.pageYOffset > s ? n.classList.add("sticky") : n.classList.remove("sticky")
                    }, e("body").hasClass("template-homepage")) {
                    e(document).on("scroll", (t = function(t) {
                        var i = e(document).scrollTop(),
                            a = e(".section-scroll-jack-wrap:first"),
                            n = e(".section-scroll-jack-wrap:last");
                        e(window).width() < 1099 ? i > a.offset().top && i < n.offset().top + n.height() ? e(".scrolljack-nav").show() : e(".scrolljack-nav").hide() : i > a.offset().top && (s = s || 0, e(".section-scroll-jack-wrap:last")[s].getBoundingClientRect().bottom - e(window).height() > 0) ? e(".section-scroll-jack-control").fadeIn() : e(".section-scroll-jack-control").fadeOut();
                        var s;
                        e(".section-scroll-jack-control li a").each(function() {
                            var t = e(this),
                                a = e(t.attr("href"));
                            a.offset().top <= i + 300 && a.offset().top + a.height() > i ? (e(".section-scroll-jack-control li").removeClass("active"), e('a[href="' + t.attr("href") + '"]').parent().addClass("active")) : t.parent().removeClass("active")
                        })
                    }, i = 100, a = Date.now(), function() {
                        a + i - Date.now() < 0 && (t(), a = Date.now())
                    }))
                }
            },
            registerContactForm7Events: function() {
                e('[data-toggle="tooltip"]').tooltip(), e(".wpcf7-form-control-wrap").each(function() {
                    var t = e(this).next("label").detach();
                    e(this).append(t)
                });
                var i = document.querySelector(".section-contact");
                i && (i.addEventListener("wpcf7submit", function(e) {
                    var i = t(e.target).find(".wpcf7-submit");
                    i.val(i.data("original-value"))
                }, !1), t(i).find(".wpcf7-submit").on("click", function() {
                    t(this).attr("data-original-value", t(this).val()).val("Sending...")
                }), i.addEventListener("wpcf7invalid", function(a) {
                    addEventListener,
                    t(i).find(".has-error").removeClass("has-error");
                    var n = a.detail.apiResponse.invalid_fields;e.each(n, function(e, a) {
                        t(i).find("#" + a.idref).parent().addClass("has-error")
                    })
                }, !1), i.addEventListener("wpcf7mailsent", function(e) {
                    t(i).find(".has-error").removeClass("has-error")
                }, !1))
            },
            listenHoverEvents: function() {
                e(".theme-header .nav .dropdown").hover(function() {
                    e("body").addClass("dropdown-is-on")
                }, function() {
                    e("body").removeClass("dropdown-is-on")
                }), e(".card-home-03").hover(function() {
                    e(this).addClass("show-full-card")
                }, function() {
                    e(this).removeClass("show-full-card")
                })
            },
            lastwords: function() {
                e.fn.lastWord = function() {
                    return this.each(function() {
                        var t = e(this).text().trim().split(" "),
                            i = t.pop();
                        $html = t.length > 0 ? t.join(" ") + " <span class='last-word-is-added'>" + i + "</span><div class='arrow'><div class='head'></div></div>" : "<span class='last-word-is-added'>" + i + "</span><div class='arrow'><div class='head'></div></div>", e(this).html($html)
                    })
                }, e(".with-last-word").lastWord(), e(".link-with-arrow").lastWord()
            },
            initializeProgressBar: function() {
                if (e(".slider-progress").length) {
                    var t, i, a, n, s, o = 6;

                    function l() {
                        t.css({
                            width: "0%"
                        }), clearTimeout(n), s = 0, a = !1, n = setInterval(r, 10)
                    }

                    function r() {
                        !1 === a && (s += 1 / (o + .1), t.css({
                            width: s + "%"
                        }), s >= 100 && (i.slick("slickNext"), l()))
                    }
                    i = e(".slider-8.slider"), t = e(".slider-progress .progress"), e(".slick-wrap").on({
                        mouseenter: function() {
                            a = !0
                        },
                        mouseleave: function() {
                            a = !1
                        }
                    }), l()
                }
            },
            listenTabChanges: function() {
                var t = window.location.hash;
                if (t) {
                    var i = e('.nav-tabs a[href="' + t + '"]');
                    "tab" === i.attr("role") && (i.parents(".nav-tabs").find("li").removeClass("active"), i.parents("li").addClass("active"), e('.nav-tabs a[href="' + t + '"]').tab("show"), e([document.documentElement, document.body]).animate({
                        scrollTop: i.parents(".tab-panel-default").offset().top - e("header").height()
                    }, 2e3))
                }
                e(".nav-tabs a").click(function(t) {
                    e(this).tab("show");
                    e("body").scrollTop() || e("html").scrollTop();
                    window.location.hash = this.hash
                }), this.animationTriggerInit()
            },
            webinarRegistrationForm: function() {
                var i = document.querySelector(".webinar-registration");
                i && (i.addEventListener("wpcf7submit", function(e) {
                    var i = t(e.target).find(".wpcf7-submit");
                    i.val(i.data("original-value"))
                }, !1), t(i).find(".wpcf7-submit").on("click", function() {
                    t(this).attr("data-original-value", t(this).val()).val("Sending...")
                }), i.addEventListener("wpcf7invalid", function(t) {
                    addEventListener,
                    e(".has-error").removeClass("has-error");
                    var i = t.detail.apiResponse.invalid_fields;e.each(i, function(t, i) {
                        e("#" + i.idref).parent().addClass("has-error")
                    })
                }, !1), i.addEventListener("wpcf7mailsent", function(a) {
                    t(i).find(".has-error").removeClass("has-error");
                    var n = e(i).find("form").attr("name"),
                        s = e(".episode_get").attr("data-id"),
                        o = n;
                    "" !== s && void 0 != s && (o = s), e(".episode_get").show();
                    var l = e(".container[data-id=" + o + "]");
                    if ("" !== l.attr("data-pdf") && l.length < 2) {
                        var r = void 0 != l.attr("data-open") ? l.attr("data-open") : "_self";
                        window.open(l.attr("data-pdf"), r)
                    } else e(".container[data-id=" + o + "]").show(), e(".hide_form_js").hide()
                }, !1))
            },
            webinarModalForm: function() {
                var i = document.querySelector(".webinar-modal-form");
                i && (e("#webinarModalForm").on("show.bs.modal", function(t) {
                    var i = e(t.relatedTarget).attr("modal-submit"),
                        a = e(t.relatedTarget).attr("modal-type"),
                        n = e(t.relatedTarget).attr("modal-data"),
                        s = e(t.relatedTarget).attr("modal-title"),
                        o = e(t.relatedTarget).attr("modal-id");
                    "" != e(t.relatedTarget).attr("video-title") && e(t.relatedTarget).attr("video-title");
                    if (e("#webinarModalForm").attr("modalbox-id", o), e("#webinarModalForm .modal-title").html(s), e(".modal-video-section").addClass("d-none"), e(".modal-pdf-section").addClass("d-none"), e(".webinar-modal-form").addClass("d-none"), "video" == a) {
                        var l = '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + n + '?&amp;controls=1&amp;autohide=0&amp;showinfo=0&amp;vq=hd1080&amp;playsinline=1&amp;loop=1&amp;theme=light&amp;color=white&amp;modestbranding=1&amp;rel=0&amp;enablejsapi=1&amp;widgetid=1" allowfullscreen="" href="lRIDPtIL4M8"></iframe>';
                        e(".webinar-modal-form").addClass("video"), e(".webinar-modal-form").removeClass("pdf"), e(".modal-video-section").html(l)
                    } else e(".webinar-modal-form").addClass("pdf"), e(".webinar-modal-form").removeClass("video"), e(".modal-pdf-section").html('<a href="' + n + '" target="_blank">Click Here to check</a>');
                    "true" == i && "video" == a ? e(".modal-video-section").removeClass("d-none") : e(".webinar-modal-form").removeClass("d-none")
                }), i.addEventListener("wpcf7submit", function(e) {
                    var i = t(e.target).find(".wpcf7-submit");
                    i.val(i.data("original-value"))
                }, !1), t(i).find(".wpcf7-submit").on("click", function() {
                    t(this).attr("data-original-value", t(this).val()).val("Sending...")
                }), i.addEventListener("wpcf7invalid", function(t) {
                    addEventListener,
                    e(".has-error").removeClass("has-error");
                    var i = t.detail.apiResponse.invalid_fields;e.each(i, function(t, i) {
                        e("#" + i.idref).parent().addClass("has-error")
                    })
                }, !1), i.addEventListener("wpcf7mailsent", function(a) {
                    if (t(i).find(".has-error").removeClass("has-error"), e(".webinar-modal-form").hasClass("video")) {
                        var n = ".modal-video-section";
                        e(a.target).parents(".modal-body").find(n).removeClass("d-none"), e(".webinar-modal-form").addClass("d-none")
                    } else {
                        n = ".modal-pdf-section";
                        window.open(e(a.target).parents(".modal-body").find(n).find("a").attr("href"), "_blank")
                    }
                    var s = e(a.target).parents(".modal-global").attr("modalbox-id");
                    e('.webinar_modal_js[modal-id="' + s + '"]').attr("modal-submit", "true");
                    var o = e('.webinar_modal_js[modal-id="' + s + '"]').attr("video-title");
                    e("#webinarModalForm .modal-title").html(o), e('.webinar_modal_js[modal-id="' + s + '"]').attr("modal-title", o)
                }, !1))
            },
            modalFormValidation: function(i) {
                var a = i.find(".webinar-modal-form-shortcode")[0];
                a && (t(a).find(".wpcf7-submit").on("click", function() {
                    t(this).attr("data-original-value", t(this).val()).val("Sending...")
                }), a.addEventListener("wpcf7submit", function(e) {
                    var i = t(e.target).find(".wpcf7-submit");
                    i.val(i.data("original-value"))
                }, !1), a.addEventListener("wpcf7invalid", function(i) {
                    addEventListener,
                    e(".has-error").removeClass("has-error");
                    var n = i.detail.apiResponse.invalid_fields;e.each(n, function(e, i) {
                        t(a).find("#" + i.idref).parent().addClass("has-error")
                    })
                }, !1), a.addEventListener("wpcf7mailsent", function(i) {
                    t(a).find(".has-error").removeClass("has-error");
                    e(i.target);
                    if (e(i.target).parents(".webinar-modal-form-shortcode").hasClass("video")) {
                        var n = ".modal-video-section";
                        e(i.target).parents(".modal-body").find(n).removeClass("d-none"), e(i.target).parents(".webinar-modal-form-shortcode").addClass("d-none")
                    } else {
                        n = ".modal-pdf-section";
                        window.open(e(i.target).parents(".modal-body").find(n).find("a").attr("href"), "_blank")
                    }
                    var s = e(i.target).parents(".modal-global").attr("modalbox-id");
                    e('.modal_js_shortcode[modal-id="' + s + '"]').attr("modal-submit", "true");
                    var o = e('.modal_js_shortcode[modal-id="' + s + '"]').attr("video-title");
                    e("#webinarModalForm .modal-title").html(o), e('.modal_js_shortcode[modal-id="' + s + '"]').attr("modal-title", o)
                }, !1))
            },
            createModal: function(e, t) {
                return '<div modalbox-id class="modal modal-global modal-02 fade" id="multipleModalForm" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">\n    <div class="modal-dialog modal-dialog-centered">\n       <div class="modal-content">\n          <div class="modal-header align-items-center">\n             <h5 class="modal-title mr-5" id="exampleModalLabel">Modal title</h5>\n             <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="icon-close"></i></button>\n          </div>\n          <div class="modal-body">\n             ' + e + '\n             <div class="form-global webinar-modal-form">\n                ' + t + '\n             </div>\n            <div class="modal-video-section embed-responsive embed-responsive-16by9 d-none">\n                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ApBOuoX1Tlk?origin=<?php echo urlencode(site_url());?>&amp;controls=1&amp;autohide=0&amp;showinfo=0&amp;vq=hd1080&amp;playsinline=1&amp;loop=1&amp;theme=light&amp;color=white&amp;modestbranding=1&amp;rel=0&amp;enablejsapi=1&amp;widgetid=1" allowfullscreen=""></iframe>\n            </div>\n            <div class="modal-pdf-section d-none">\n            </div>\n          </div>\n       </div>\n    </div>\n </div>'
            },
            sideFormValidation: function(i) {
                var a = i.find(".webinar-modal-form-shortcode")[0];
                a && (t(a).find(".wpcf7-submit").on("click", function() {
                    t(this).attr("data-original-value", t(this).val()).val("Sending...")
                }), a.addEventListener("wpcf7submit", function(e) {
                    var i = t(e.target).find(".wpcf7-submit");
                    i.val(i.data("original-value"))
                }, !1), a.addEventListener("wpcf7invalid", function(i) {
                    addEventListener,
                    e(".has-error").removeClass("has-error");
                    var n = i.detail.apiResponse.invalid_fields;e.each(n, function(e, i) {
                        t(a).find("#" + i.idref).parent().addClass("has-error")
                    })
                }, !1), a.addEventListener("wpcf7mailsent", function(i) {
                    t(a).find(".has-error").removeClass("has-error");
                    e(i.target);
                    if (e(i.target).parents(".webinar-modal-form-shortcode").hasClass("video")) {
                        var n = ".modal-video-section";
                        e("#rhsModal").find(".modal-body").find(n).removeClass("d-none"), e("#rhsModal").modal("show")
                    } else if (e(i.target).parents(".webinar-modal-form-shortcode").hasClass("pdf")) {
                        n = ".modal-pdf-section";
                        window.open(e(i.target).parents(".webinar-modal-form-shortcode").attr("data-link"), "_blank")
                    }
                }, !1))
            },
            modalFormWithShortcode: function() {
                var i = this;
                i.modalFormValidation(e("#multipleModalForm")), i.sideFormValidation(e("#sideEventForm")), i.sideFormValidation(e("#sideEventFormMobile")), e("body").on("click", ".modal_js_shortcode", function(a) {
                    a.preventDefault();
                    var n = e(a.currentTarget),
                        s = "shortcode=" + n.attr("data-shortcode");
                    e.ajax({
                        type: "POST",
                        url: ramwisesoft_object.ajax_url,
                        data: s + "&action=contactFormHtml"
                    }).done(function(a) {
                        var s;
                        e("#multipleModalForm").length ? (s = e("#multipleModalForm")).find(".webinar-modal-form-shortcode").html(a) : s = e(i.createModal("Somehting here", a));
                        var o = s.find(".wpcf7-form"),
                            l = o.attr("action");
                        l = l.substring(l.indexOf("#")), o.attr("action", l), wpcf7.initForm(o), i.formSpanFixes();
                        var r = n.attr("modal-submit"),
                            d = n.attr("modal-type"),
                            c = n.attr("modal-data"),
                            p = n.attr("modal-title"),
                            u = n.attr("modal-id");
                        "" != n.attr("video-title") && n.attr("video-title");
                        if (s.attr("modalbox-id", u), s.find(".modal-title").html(p), s.find(".modal-video-section").addClass("d-none"), s.find(".modal-pdf-section").addClass("d-none"), s.find(".webinar-modal-form-shortcode").addClass("d-none"), "video" == d) {
                            var f = '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + c + '?&amp;controls=1&amp;autohide=0&amp;showinfo=0&amp;vq=hd1080&amp;playsinline=1&amp;loop=1&amp;theme=light&amp;color=white&amp;modestbranding=1&amp;rel=0&amp;enablejsapi=1&amp;widgetid=1" allowfullscreen="" href="lRIDPtIL4M8"></iframe>';
                            s.find(".webinar-modal-form-shortcode").addClass("video"), s.find(".webinar-modal-form-shortcode").removeClass("pdf"), s.find(".modal-video-section").html(f)
                        } else s.find(".webinar-modal-form-shortcode").addClass("pdf"), s.find(".webinar-modal-form-shortcode").removeClass("video"), s.find(".modal-pdf-section").html('<a href="' + c + '" target="_blank">Click Here to check</a>');
                        "true" == r && "video" == d ? s.find(".modal-video-section").removeClass("d-none") : s.find(".webinar-modal-form-shortcode").removeClass("d-none"), t(s).find(".wpcf7-submit").on("click", function() {
                            t(this).attr("data-original-value", t(this).val()).val("Sending...")
                        }), s.modal("show")
                    })
                })
            },
            sliderFilter: function() {
                var t = this;
                e("body").on("click", ".iba-filter_js li a", function(i) {
                    var a = e(i.currentTarget);
                    t.singleActiveFilter(a, !0);
                    var n = a.parents(".iba-filter_js"),
                        s = "";
                    n.find(".active").each(function(t) {
                        s += 0 == t ? e(this).attr("data-value") : "," + e(this).attr("data-value")
                    });
                    var o = n.attr("data-filter");
                    (o = s.split(",")).join(",");
                    var l = n.attr("data-postid");
                    i.preventDefault();
                    var r = "postId=" + l + "&filterTags=" + encodeURIComponent(o);
                    e.ajax({
                        type: "POST",
                        url: ramwisesoft_object.ajax_url,
                        data: r + "&action=sliderWithFilter",
                        success: function(i) {
                            e(".slider-e01").hasClass("slick-initialized") ? (e(".slider-e01").slick("unslick"), e(".slider-e01_js").html(i), t.registerSliders()) : e(".slider-e01-pagination").hasClass("slick-initialized") ? (e(".slider-e01-pagination").slick("unslick"), e(".slider-e01_js").html(i), t.registerSliders()) : e(".slider-e01_js").html(i)
                        }
                    })
                })
            },
            formSpanFixes: function() {
                e(".wpcf7-form-control-wrap").each(function() {
                    var t = e(this).next("label").detach();
                    e(this).append(t)
                })
            },
            singleActiveFilter: function(e, t) {
                t ? (e.parents(".scrollable-list").find("li a").not(e).removeClass("active"), e.hasClass("active") ? e.removeClass("active") : e.addClass("active")) : e.toggleClass("active")
            },
            agendaFilter: function() {
                e(".dropdown-simple").on("click", ".dropdown-toggle", function(t) {
                    t.preventDefault(), e(this).parent().addClass("show"), e(this).attr("aria-expanded", "true"), e(this).next().addClass("show")
                }), e("body").on("click", ".section-c04--agenda .dropdown-menu a", function() {
                    var t = e(this).attr("data-value"),
                        i = e(this).attr("data-pageId");
                    e(this).parents(".dropdown-simple").find(".agenda-date").html(t + " ");
                    var a = {
                        action: "agendaFilter",
                        selectedDate: t,
                        pageId: i
                    };
                    e.ajax({
                        type: "POST",
                        url: ramwisesoft_object.ajax_url,
                        data: a,
                        success: function(t) {
                            e(".agenda-filter-result").html(t)
                        }
                    })
                })
            },
            adaptiveBackgroundHero: function() {
                e(".hero-background").length > 0 && e.adaptiveBackground.run({
                    success: function(t, i) {
                        var a = i.color,
                            n = a.substring(a.indexOf("(") + 1, a.lastIndexOf(")")).split(/,\s*/),
                            s = n[0],
                            o = n[1],
                            l = n[2];
                        Math.sqrt(s * s * .241 + o * o * .671 + l * l * .068) < 128 && e("body").removeClass("nav-light").addClass("nav-dark")
                    }
                })
            },
            globalVideoModal: function() {
                document.querySelector(".openVideoGlobalModal_js") && (e("#investorEventModalGlobal").on("show.bs.modal", function(t) {
                    e(t.relatedTarget).parents(".video-wrap").find("frame").attr("src");
                    var i = e(t.relatedTarget).attr("modal-title"),
                        a = '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + e(t.relatedTarget).attr("modal-video") + '?&amp;controls=1&amp;autohide=0&amp;showinfo=0&amp;vq=hd1080&amp;playsinline=1&amp;loop=1&amp;theme=light&amp;color=white&amp;modestbranding=1&amp;rel=0&amp;enablejsapi=1&amp;widgetid=1" allowfullscreen="" href="javascript:void(0);"></iframe>';
                    e("#investorEventModalGlobal .modal-body .embed-responsive").html(a), e("#investorEventModalGlobal .modal-title").html(i)
                }), e("#investorEventModalGlobal").on("hidden.bs.modal", function(t) {
                    e("#investorEventModalGlobal .modal-body .embed-responsive").html("")
                }))
            },
            timeCountDown: function() {
                t(".event_date_js").each(function() {
                    var t = e(this).parents(".hero-12-sidebar").find(".event_begins_ends_js").find(".days"),
                        i = e(this).parents(".hero-12-sidebar").find(".event_begins_ends_js").find(".hours"),
                        a = e(this).parents(".hero-12-sidebar").find(".event_begins_ends_js").find(".minutes"),
                        n = e(this).parents(".hero-12-sidebar").find(".event_begins_ends_js").find(".seconds"),
                        s = e(this).parents(".hero-12-sidebar").find(".event_begins_ends_js").find(".daysevent"),
                        o = e(this).parents(".hero-12-sidebar").find(".event_begins_ends_js").find(".hoursevent"),
                        l = e(this).parents(".hero-12-sidebar").find(".event_begins_ends_js").find(".minutesevent"),
                        r = e(this).parents(".hero-12-sidebar").find(".event_begins_ends_js").find(".secondsevent"),
                        d = e(this).data("start"),
                        c = e(this).data("end");
                    d && (d *= 1e3), c && (c *= 1e3);
                    var p = setInterval(function() {
                        var e = (new Date).getTime(),
                            u = d - e; - 1 == Math.sign(u) && (u = c - e);
                        var f = Math.floor(u / 864e5),
                            m = Math.floor(u % 864e5 / 36e5),
                            h = Math.floor(u % 36e5 / 6e4),
                            g = Math.floor(u % 6e4 / 1e3);
                        var v = document.getElementsByClassName("days").innerHTML = f,
                            w = document.getElementsByClassName("hours").innerHTML = m,
                            k = document.getElementsByClassName("minutes").innerHTML = h,
                            b = document.getElementsByClassName("seconds").innerHTML = g;
                        t.html(v), i.html(w), a.html(k), n.html(b);
                        var y = document.getElementsByClassName("daysevent").innerHTML = "Days",
                            C = document.getElementsByClassName("hoursevent").innerHTML = "Hrs",
                            P = document.getElementsByClassName("minutesevent").innerHTML = "Min",
                            O = document.getElementsByClassName("secondsevent").innerHTML = "Sec";
                        s.html(y), o.html(C), l.html(P), r.html(O), u < 0 && (clearInterval(p), t.html("EXPIRED"), i.html(""), a.html(""), n.html(""), s.html(""), o.html(""), l.html(""), r.html(""))
                    }, 1e3)
                })
            },
            animationTriggerInit: function() {
                e(".nav-tabs").each(function() {
                    var t = e(this),
                        i = t.find("li.active"),
                        a = i.index(),
                        n = {};
                    t.find("li").each(function(t) {
                        n["tab_" + t] = e(this).outerWidth()
                    });
                    var s = i.outerWidth(),
                        o = function() {
                            var e = 0;
                            if (a > 0)
                                for (var t = 0; t < a; t++) e += n["tab_" + t];
                            return e
                        }() + 30 * a;
                    t.find(".tab-liner").css({
                        left: o + "px",
                        width: s + "px"
                    })
                })
            },
            initialize: function() {
                var t = this;
                this.listenClickEvents(), this.registerSliders(), this.videoTransformation(), this.listenResizeEvents(), this.listenScrollEvents(), this.sliderFilter(), this.agendaFilter(), this.listenHoverEvents(), this.webinarRegistrationForm(), this.webinarModalForm(), this.modalFormWithShortcode(), this.globalVideoModal(), e(window).bind("pageshow", function(t) {
                    e(".card-home-03").removeClass("show-full-card")
                }), e(document).ready(function() {
                    t.adaptiveBackgroundHero(), t.registerContactForm7Events(), t.lastwords(), t.initializeProgressBar(), t.listenBootstrapAccordionEvents(), t.listenTabChanges(), t.registerSliders(), e(".event_date_js").length && t.timeCountDown()
                })
            }
        }).initialize(), e(document).ready(function() {
            e(".tab-panel-default .nav-tabs>li").click(function() {
                if (!e(this).hasClass("tab-liner")) {
                    var t = e(this).parents(".tab-panel-default .nav-tabs");
                    t.find("li").removeClass("active"), e(this).addClass("active");
                    var i = e(this).index(),
                        a = {};
                    t.find("li").each(function(e) {
                        a["tab_" + e] = t.find("li").eq(e).outerWidth()
                    });
                    var n = e(this).outerWidth(),
                        s = function() {
                            var e = 0;
                            if (i > 0) {
                                e = 0;
                                for (var t = 0; t < i; t++) e += a["tab_" + t]
                            }
                            return e
                        }() + 30 * i;
                    t.find(".tab-liner").css({
                        left: s + "px",
                        width: n + "px",
                        height: "5px",
                        bottom: "-1px",
                        transition: "all .1s ease-in-out"
                    }), setTimeout(function() {
                        t.find(".tab-liner").css({
                            height: "3px",
                            bottom: "0"
                        })
                    }, 100)
                }
            }), e("body").on("mouseleave", ".tab-panel-default .nav-tabs>li", function() {
                ! function(e, t) {
                    var i = e.find(".active"),
                        a = i.index(),
                        n = {};
                    e.find("li").each(function(t) {
                        n["tab_" + t] = e.find("li").eq(t).outerWidth()
                    });
                    var s = i.outerWidth(),
                        o = function() {
                            var e = 0;
                            if (a > 0) {
                                e = 0;
                                for (var t = 0; t < a; t++) e += n["tab_" + t]
                            }
                            return e
                        }() + 30 * a;
                    e.find(".tab-liner").css({
                        left: o + "px",
                        width: s + "px"
                    })
                }(e(this).parents(".tab-panel-default .nav-tabs"))
            }).on("mouseenter", ".tab-panel-default .nav-tabs>li:not('.tab-liner')", function() {
                var t = e(this).index(),
                    i = e(this).parents(".tab-panel-default .nav-tabs"),
                    a = {};
                i.find("li").each(function(t) {
                    a["tab_" + t] = e(this).outerWidth()
                });
                var n = e(this).outerWidth(),
                    s = function() {
                        var e = 0;
                        if (t > 0) {
                            e = 0;
                            for (var i = 0; i < t; i++) e += a["tab_" + i]
                        }
                        return e
                    }() + 30 * t;
                i.find(".tab-liner").css({
                    left: s + "px",
                    width: n + "px"
                })
            })
        })
    }).call(t, i(0), i(0))
}, function(e, t, i) {
    (function(e) {
        ! function(e) {
            function t() {
                s.hasClass(d) ? o.toggleClass(c) : o.toggleClass(p), h && s.one("transitionend", function() {
                    h.focus()
                })
            }

            function i() {
                s.hasClass(d) ? (o.addClass(c), s.animate({
                    left: "0px"
                }, g), l.animate({
                    left: v
                }, g), r.animate({
                    left: v
                }, g)) : (o.addClass(p), s.animate({
                    right: "0px"
                }, g), l.animate({
                    right: v
                }, g), r.animate({
                    right: v
                }, g)), h && h.focus()
            }

            function a() {
                s.hasClass(d) ? (o.removeClass(c), s.animate({
                    left: "-" + v
                }, g), l.animate({
                    left: "0px"
                }, g), r.animate({
                    left: "0px"
                }, g)) : (o.removeClass(p), s.animate({
                    right: "-" + v
                }, g), l.animate({
                    right: "0px"
                }, g), r.animate({
                    right: "0px"
                }, g))
            }

            function n() {
                e(w).addClass(b), e(w).on("click", function() {
                    var t = e(this);
                    t.hasClass(b) ? (e(w).addClass(b).removeClass(k), t.removeClass(b).addClass(k)) : t.addClass(b).removeClass(k)
                })
            }
            var s = e(".pushy"),
                o = e("body"),
                l = e("#container"),
                r = e(".push"),
                d = "pushy-left",
                c = "pushy-open-left",
                p = "pushy-open-right",
                u = e(".site-overlay"),
                f = e(".btn-burger, .pushy-link"),
                m = e(".btn-burger"),
                h = e(s.data("focus")),
                g = 200,
                v = s.width() + "px",
                w = ".pushy-submenu",
                k = "pushy-submenu-open",
                b = "pushy-submenu-closed";
            e(w), e(document).keyup(function(e) {
                27 == e.keyCode && (o.hasClass(c) || o.hasClass(p)) && (y ? s.hasClass(d) ? o.removeClass(c) : o.removeClass(p) : (a(), C = !1), m && m.focus())
            });
            var y = function() {
                var e = document.createElement("p"),
                    t = !1,
                    i = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                if (null !== document.body) {
                    for (var a in document.body.insertBefore(e, null), i) void 0 !== e.style[a] && (e.style[a] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(e).getPropertyValue(i[a]));
                    return document.body.removeChild(e), void 0 !== t && t.length > 0 && "none" !== t
                }
                return !1
            }();
            if (y) n(), f.on("click", function() {
                t()
            }), u.on("click", function() {
                t()
            });
            else {
                o.addClass("no-csstransforms3d"), s.hasClass(d) ? s.css({
                    left: "-" + v
                }) : s.css({
                    right: "-" + v
                }), l.css({
                    "overflow-x": "hidden"
                });
                var C = !1;
                n(), f.on("click", function() {
                    C ? (a(), C = !1) : (i(), C = !0)
                }), u.on("click", function() {
                    C ? (a(), C = !1) : (i(), C = !0)
                })
            }
        }(e)
    }).call(t, i(0))
}, function(e, t) {}, function(e, t) {}])