$(document).ready(function () {
    var e, a = function () {
            $("#sparkline1").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
                type: "line",
                width: "100%",
                height: "165",
                chartRangeMax: 50,
                lineColor: "#4bd396",
                fillColor: "rgba(75, 211, 150, 0.3)",
                highlightLineColor: "rgba(108, 120, 151, 0.1)",
                highlightSpotColor: "rgba(108, 120, 151, 0.1)"
            }), $("#sparkline1").sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
                type: "line",
                width: "100%",
                height: "165",
                chartRangeMax: 40,
                lineColor: "#f5707a",
                fillColor: "rgba(245, 112, 122, 0.3)",
                composite: !0,
                highlightLineColor: "rgba(108, 120, 151, 0.1)",
                highlightSpotColor: "rgba(108, 120, 151, 0.1)"
            }), $("#sparkline2").sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
                type: "bar",
                height: "165",
                barWidth: "10",
                barSpacing: "3",
                barColor: "#26a69a"
            }), $("#sparkline3").sparkline([20, 40, 30, 10], {
                type: "pie",
                width: "165",
                height: "165",
                sliceColors: ["#dcdcdc", "#3ac9d6", "#f9c851", "#8d6e63"]
            }), $("#sparkline4").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40], {
                type: "line",
                width: "100%",
                height: "165",
                chartRangeMax: 50,
                lineColor: "#188ae2",
                fillColor: "transparent",
                highlightLineColor: "rgba(108, 120, 151, 0.1)",
                highlightSpotColor: "rgba(108, 120, 151, 0.1)"
            }), $("#sparkline4").sparkline([25, 23, 26, 24, 25, 32, 30, 24, 19], {
                type: "line",
                width: "100%",
                height: "165",
                chartRangeMax: 40,
                lineColor: "#26a69a",
                fillColor: "transparent",
                composite: !0,
                highlightLineColor: "rgba(108, 120, 151, 0.1)",
                highlightSpotColor: "rgba(108, 120, 151, 0.1)"
            }), $("#sparkline6").sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
                type: "line",
                width: "100%",
                height: "165",
                lineColor: "#7fc1fc",
                fillColor: "transparent",
                highlightLineColor: "rgba(108, 120, 151, 0.1)",
                highlightSpotColor: "rgba(108, 120, 151, 0.1)"
            }), $("#sparkline6").sparkline([3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
                type: "bar",
                height: "165",
                barWidth: "10",
                barSpacing: "5",
                composite: !0,
                barColor: "#36404e"
            })
        },
        r = function () {
            var a, r = -1,
                l = -1,
                o = 0,
                t = [];
            $("html").mousemove(function (i) {
                var e = i.pageX,
                    a = i.pageY; - 1 < r && (o += Math.max(Math.abs(e - r), Math.abs(a - l))), r = e, l = a
            });
            var h = function () {
                var i = (new Date).getTime();
                if (a && a != i) {
                    var e = Math.round(o / (i - a) * 1e3);
                    t.push(e), 30 < t.length && t.splice(0, 1), o = 0, $("#sparkline5").sparkline(t, {
                        tooltipSuffix: " pixels per second",
                        type: "line",
                        width: "100%",
                        height: "165",
                        chartRangeMax: 50,
                        lineColor: "#f5707a",
                        fillColor: "rgba(245, 112, 122, 0.3)",
                        highlightLineColor: "rgba(24,147,126,.1)",
                        highlightSpotColor: "rgba(24,147,126,.2)"
                    })
                }
                a = i, setTimeout(h, 500)
            };
            setTimeout(h, 500)
        };
    a(), r(), $(window).resize(function (i) {
        clearTimeout(e), e = setTimeout(function () {
            a(), r()
        }, 300)
    })
});
