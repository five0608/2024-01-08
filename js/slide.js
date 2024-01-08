$(function(){
    var UpDownSlider=0;
    var sliderposition;
    setInterval(function(){
        if(UpDownSlider<2){
            UpDownSlider++;
        }else{
            UpDownSlider=0;
        }sliderposition=UpDownSlider*(-300)+"px"
        $(".sliders").animate({top:sliderposition},400);
    },3000);
})