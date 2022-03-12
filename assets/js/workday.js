let currentHour = (new Date()).getHours();
const colorcode = document.getElementsByClassName("colorcode");
$('.colorcode').each(function(){
    let val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour+6){
        $(this).css('background-color','Blue');
    }else if(val < currentHour && val > currentHour-6){
        $(this).css('background-color','Red');
    }else if(val === currentHour){
        $(this).css('background-color','Green');
    }else{
        $(this).css('background-color','White');
    }
});

