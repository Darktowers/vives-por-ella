(function ($) {

	jQuery(document).ready(function ($) {
		var i=0;
		while(i!=150){
			i++;
			var div = document.createElement('div');
			$(".back-Star").append(div);
			div.setAttribute('class', 'start'+Math.round(Math.random() * 5));
			div.style.left = Math.round(Math.random() * 99)+"%";
			div.style.bottom = Math.round(Math.random() * 99)+"%";
			width=(Math.round(Math.random() * 2)+1);
			div.style.width = width+"px";
			div.style.height = width+"px";
		}
		$(".play").on("click",function(){
			x = $(this).parent().parent().parent().find("iframe");
			$(".modal-video .video-cont").html(x);
			$(".form-Modal").slideDown("slow");
			$(".modal-video").css("display","flex");

		});
		$(".menu").on("click",function(){
			$(".header-Menu-Nav").animate({width:'toggle'},500);
		});
		$(".header-Menu-Nav").on("click",function(){
			$(".header-Menu-Nav").animate({width:'toggle'},500);
		});

		$(".start-form-artist").on("click",function(e){
			e.preventDefault()
			$(".form-Modal").css("display","flex");
			$(".form-artist").slideToggle(500);

		});
		$(".start-form-news").on("click",function(e){
			e.preventDefault()
			$(".form-Modal").css("display","flex");
			$(".form-news").slideToggle(500);

		});
		$(".close").on("click",function(){
			$(".form-Modal").slideUp("slow");
			$(".form-Modal .form").slideUp("slow");

		});
		// $('.desp').on('mouseover', function(){
		// 	$('.back-desp').slideToggle();
		// });
		$(".span-menuM").on("click", function () {

			$(".menuM").stop().slideDown();
			$(".span-menuM").attr("style", "display:none !important;");
			$(".span-menuM-Close").attr("style", "display:block !important;");
		});
		$(".span-menuM-Close").on("click", function () {

			$(".menuM").stop().slideUp();
			$(".span-menuM").attr("style", "display:block !important;");
			$(".span-menuM-Close").attr("style", "display:none !important;");
		});
		$('.sliderRelacionados').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 890,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]

		});

	});

})(jQuery);