jQuery(document).ready(function ($) {
$(window).load(function () {
  $('body').css('display', 'none');
$('body').fadeIn(1500);
        setTimeout(function(){
            $('.loader-wrapper').fadeOut('slow', function () {
            });
        },0000); // set the time here
});
   $(function(){
   setTimeout(function(){
     $(body).fadeIn('slow');
   },300);








    });  

$(document).ready(function() {

    // javascript goes here

// $('#about').mouseenter( function () {

//    $("#about").css("background-color","#DBDBDB");
//    $("#about").css("color","black");
//    $(".bodytextabout").css("color","black");

// });


// $('#about').mouseleave( function () {
//  $("#about").css("color","#DBDBDB");
//    $("#about").css("background-color","black");
//      $(".bodytextabout").css("color","#DBDBDB");

// });


// $('#method').mouseenter( function () {

//    $("#method").css("background-color","#DBDBDB");
//    $("#method").css("color","black");
//  $(".bodytextmethod").css("color","black");

   
// });


// $('#method').mouseleave( function () {

//    $("#method").css("background-color","black");
//    $("#method").css("color","#DBDBDB");
//  $(".bodytextmethod").css("color","#DBDBDB");

   
// });


// $('#artists').mouseenter( function () {

//    $("#artists").css("background-color","#DBDBDB");
//    $("#artists").css("color","black");
//     $(".bodytextartists").css("color","black");

// });




// $('#artists').mouseleave( function () {

//    $("#artists").css("background-color","black");
//    $("#artists").css("color","#DBDBDB");
//     $(".bodytextartists").css("color","#DBDBDB");

// });
















$('#mile').mouseover( function () {

   $("#mile").addClass("mile2");
   $("#mile").css("background-color","#A7D8E8");

});




$('#mile').mouseleave( function () {

   $("#mile").removeClass("mile2");
   $("#mile").css("background-color","#DBDBDB");

});

$('#danae').mouseover( function () {

   $("#danae").addClass("danae");
$("#danae").css("background-color","#4182f2");

});




$('#danae').mouseleave( function () {

   $("#danae").removeClass("danae");
   $("#danae").css("background-color","#DBDBDB");

});


$('#catso').mouseover( function () {

   $("#catso").addClass("catso");
   $("#catso").css("background-color","#f11717");
  
   // $("#catsocont").css("filter","drop-shadow(0px 0px 40px #f00236)");


});




$('#catso').mouseleave( function () {

   $("#catso").removeClass("catso");
   $("#catso").css("background-color","#DBDBDB");
    // $("#catsocont").css("filter","none");
    //  $("#catsoinfo").css("left","46%");

});

$('#untitled').mouseover( function () {

   $("#untitled").addClass("untitled");

});




$('#untitled').mouseleave( function () {

   $("#untitled").removeClass("untitled");

});

$('#circle').click(function (){
  $('.modal__overlay').addClass("modal__overlay2");
  $(".overlays").addClass("z");



});


$('#closecircle').click(function (){
  $('.modal__overlay').removeClass("modal__overlay2");
  $(".overlays").removeClass("z");



});





$('#catso').click(function (){
  $('.overlay_catso').addClass("overlay_catso2");
  $(".overlays").addClass("z");



});

$('#closecatso').click(function (){
  $('.overlay_catso').removeClass("overlay_catso2");
  $(".overlays").removeClass("z");



});

$('#mile').click(function (){
  $('.overlay_mile').addClass("overlay_mile2");
  $(".overlays").addClass("z");



});

$('#closemile').click(function (){
  $('.overlay_mile').removeClass("overlay_mile2");
  $(".overlays").removeClass("z");



});



$('#danae').click(function (){
  $('.overlay_danae').addClass("overlay_danae2");
  $(".overlays").addClass("z");



});

$('#closedanae').click(function (){
  $('.overlay_danae').removeClass("overlay_danae2");
  $(".overlays").removeClass("z");



});




$('#infohead').click(function(){
  $("#sidebarcollapse").toggleClass("sidebarexpand");

})

$('#mark').hover(function(){
  $("#hover").toggleClass("show");

})


$('#infoheadcatso').click(function(){
  $("#sidebarcollapsecatso").toggleClass("sidebarexpand");

})

$('#questionmarkcatso').hover(function(){
  $("#questioncatso").toggleClass("show");

})


$('#infoheaddanae').click(function(){
  $("#sidebarcollapsedanae").toggleClass("sidebarexpand");

})

$('#questionmarkdanae').hover(function(){
  $("#questiondanae").toggleClass("show");

})


$('#infoheadmile').click(function(){
  $("#sidebarcollapsemile").toggleClass("sidebarexpand");

})

$('#questionmarkmile').hover(function(){
  $("#questionmile").toggleClass("show");

})
// $('#location').click(function(){
//   $("#sitebarcollapse").toggleClass("sitebarexpand");

// })





// $('#circle').click( function () {

//    window.location.href = "untitled.html";

// });
   // var scroll_start = 0;
   // var startchange = $('#infosection');
   // var offset = startchange.offset();
   // $(document).scroll(function() { 
   //    scroll_start = $(this).scrollTop();
   //    if(scroll_start > offset.top) {
   //        $('.menutext').css('color', 'black');
   //     } else {
   //        $('.menutext').css('color', 'white');
   //     }
   // });


});



});  
