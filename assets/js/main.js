$("#searchbtn").click(function(){
	$(".ser1").slideToggle(1000)
});

$(".jclose1").click(function(){
	$(".ser1").slideUp(1000)
});
$(".jclose2").click(function(){
	$(".ser2").slideUp(1000)
});



         $('.costom').owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        400:{
            items:3
        },
        750:{
            items:4
        },
        1000:{
            items:5
        }
    }
});
