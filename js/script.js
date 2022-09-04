// 헤더
// 헤더 스크롤 이벤트
$(window).scroll(function () {
	if ($(window).scrollTop() > 50) {
		$("header, .gototop").addClass("active");
	} else {
		$("header, .gototop").removeClass("active");
	}
});

$(".myslider").slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: false,
	speed: 500,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});
// trigger
$(".trigger").click(function () {
	$(this).toggleClass("active");
	$(".gnb").toggleClass("active");
});
$(".gnb li a").click(function () {
	$(".gnb, .trigger").removeClass("active");
});
