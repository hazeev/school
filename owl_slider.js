$(document).ready(function() {
//Прописываем ID нашего блока        
 var centowl = '#rec97778782';
    setTimeout(function() {
$(centowl+' .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autowidth: true,
    nav:true,
    navText: ["<img src='https://static.tildacdn.com/tild3836-3962-4266-a539-656433666637/Layer_3.png'>","<img src='https://static.tildacdn.com/tild6338-6665-4866-b535-363939363630/Layer_3_copy.png'>"],
    responsive:{
//Кол-во слайдо на разном разрешении        
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
}, 500);
//Работа кнопок слайдера
 $(centowl+' .prev').click(function() {
    $(centowl+" .owl-prev")[0].click();   
  });
  $(centowl+' .next').click(function() {
    $(centowl+" .owl-next")[0].click();   
  });
});