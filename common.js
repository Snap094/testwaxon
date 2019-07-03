$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(document).ready(function(){
	var show = true;
	var countbox = "#counts";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                  
		var w_top = $(window).scrollTop();       
		var e_top = $(countbox).offset().top;     
		var w_height = $(window).height();        
		var d_height = $(document).height();      
		var e_height = $(countbox).outerHeight(); 
		if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$('.waxom-stats-counter').each(function(){
				$(this).prop('Counter',0).animate({
					Counter:$(this).text()
				},{
					duration:4000,
					easing: 'swing',
					step:function(now){
						$(this).text(Math.ceil(now));
						show = false;
					}
				})
			})
		}
	});
});