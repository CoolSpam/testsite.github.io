// $(document).ready(function(){   /* -- данная строка отвечает за то, чтобы страница полностью сформировалась и только после этого выполнялся скрипт--*/

//      /*-- Здесь вызываем скрипты -- */
//             // ---непосредственно карусель---//
//     var owl = $(".owl-carousel").owlCarousel({

//         items: 5,
//         loop: true,
//         nav: false, /* отключил стандартные стрелки навигации карусели */
//         navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
//         dots: false,
//         smartSpeed: 700,
//         // center: true,
//      //     responsive:{
//         //  0:{
//         // items:3
//         //  }
//         // }
//         // 
//         // 
// });

//     // ---переназначене в карусели управление навигацией на внешние кнопки-иконки. next и prev - это классы, которые я назначил стрелкам-иконкам (svg-иконки)---//
// owl.owlCarousel();
//   $('.next').click(function() {
//     owl.trigger('next.owl.carousel');
//   });
//   $('.prev').click(function() {
//     owl.trigger('prev.owl.carousel', [300]);
//   });

// });






$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 5,
    loop:true,
    margin:20,
    nav: true,
    // navText : ['next','prev']

    
	})
});

