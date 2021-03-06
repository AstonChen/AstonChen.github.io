if (require([], function() {
		function i() {
			$(".article").each(function() {
				$(this).offset().top <= $(window).scrollTop() + $(window).height() && !$(this).hasClass("show") ? ($(this).removeClass("hidden").addClass("show"), $(this).addClass("is-hiddened")) : $(this).hasClass("is-hiddened") || $(this).addClass("hidden")
			})
		}
		var e = !1;
		$(window).scroll(function() {
			var i = $(window).scrollTop();
			i > 126 ? $(".go-top").fadeIn() : $(".go-top").fadeOut()
		}), $(".go-top").click(function() {
			$("body").animate({
				scrollTop: "0px"
			}, "600")
		}), $(".show-code").click(function() {
			var i = e ? "fadeOut" : "fadeIn";
			$(".support-author .pay-code")[i](), e = !e
		}), $(".toc-close").click(function() {
			$(".toc-article").fadeOut(), $(".show-toc-btn").fadeIn()
		}), $(".show-toc-btn").click(function() {
			$(".toc-article").fadeIn(), $(".show-toc-btn").fadeOut()
		});
		var n = !1;
		$(".search-wrap span").on("click", function() {
			n ? ($(".search-wrap input").blur().val(""), $(".search-result ul").empty(), $(".search-wrap").animate({
				width: "34px"
			}, 300)) : ($(".search-wrap").animate({
				width: "230px"
			}, 300), setTimeout(function() {
				$(".search-wrap input").focus()
			}, 350)), n = !n
		}), $(".search-wrap input").change(function() {
			var i = $(this).val();
			return "" == i ? void $(".search-result ul").empty() : void $.getJSON("/data/getArticleUrl.json", function(e) {
				for (var n = e.data, t = e.data.length, a = 0, o = "", r = 0; r < t; r++) n[r].title.indexOf(i) == -1 && n[r].url.indexOf(i) == -1 && n[r].tags.indexOf(i) == -1 || (a++, o += '<li><a href="' + n[r].url + '">' + n[r].title + "</a></li>");
				$(".search-result ul").html(o), a > 12 ? $(".search-result ul").css("overflow-y", "scroll") : $(".search-result ul").css("overflow-y", "hidden")
			})
		});
		var t = !1,
			a = function() {
				require(["/js/mobile.js"], function(i) {
					i.init(), t = !0
				})
			},
			o = !1,
			r = function() {
				require(["/js/pc.js"], function(i) {
					i.init(), o = !0
				})
			},
			s = {
				versions: function() {
					var i = window.navigator.userAgent;
					return {
						trident: i.indexOf("Trident") > -1,
						presto: i.indexOf("Presto") > -1,
						webKit: i.indexOf("AppleWebKit") > -1,
						gecko: i.indexOf("Gecko") > -1 && i.indexOf("KHTML") == -1,
						mobile: !!i.match(/AppleWebKit.*Mobile.*/),
						ios: !!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
						android: i.indexOf("Android") > -1 || i.indexOf("Linux") > -1,
						iPhone: i.indexOf("iPhone") > -1 || i.indexOf("Mac") > -1,
						iPad: i.indexOf("iPad") > -1,
						webApp: i.indexOf("Safari") == -1,
						weixin: i.indexOf("MicroMessenger") == -1
					}
				}()
			};
		$(window).bind("resize", function() {
			if (t && o) return void $(window).unbind("resize");
			var i = $(window).width();
			i >= 700 ? r() : a()
		}), s.versions.mobile === !0 || $(window).width() < 700 ? a() : r(), yiliaConfig.fancybox === !0 && require(["/fancybox/jquery.fancybox.js"], function(i) {
			var e = $(".isFancy");
			if (0 != e.length) {
				for (var n = $(".article-inner img"), t = 0, a = n.length; t < a; t++) {
					var o = n.eq(t).attr("src"),
						r = n.eq(t).attr("alt");
					n.eq(t).replaceWith("<a href='" + o + "' title='" + r + "' rel='fancy-group' class='fancy-ctn fancybox'><img src='" + o + "' title='" + r + "'></a>")
				}
				$(".article-inner .fancy-ctn").fancybox()
			}
		}), yiliaConfig.animate === !0 && (require(["/js/jquery.lazyload.js"], function() {
			$(".js-avatar").attr("src", $(".js-avatar").attr("lazy-src")), $(".js-avatar")[0].onload = function() {
				$(".js-avatar").addClass("show")
			}
		}), yiliaConfig.isHome === !0 && ($(window).on("scroll", function() {
			i()
		}), i())), 1 == yiliaConfig.open_in_new && $(".article a[href]").attr("target", "_blank")
	}), $(".instagram").length) {
	var bp = document.createElement("script");
	bp.src = "/js/photo.js";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(bp, s), require(["/js/photo.js", "/fancybox/jquery.fancybox.js", "/js/jquery.lazyload.js"], function(i) {
		i.init()
	})
}