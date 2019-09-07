$(window).scroll(function () {
    var top = $(window).scrollTop();
    // console.log("window",$(window).scrollTop());
    if (top > 10) {
        $(".navbar").css('background-color', 'rgba(26, 26, 26,.8)');
    }
    if (top === 0) {
        $(".navbar").css('background-color', 'transparent');
    }
});