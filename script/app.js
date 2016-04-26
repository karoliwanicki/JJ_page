$(function(){
  $('.tabs .tab-links a').on('click', function(e){
       var currentAttrValue = $(this).attr('href');
       $('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
       $(this).parent('li').addClass('active').siblings().removeClass('active');
       e.preventDefault();
   });
})
// Start a progress bar
$('.pie_progress').asPieProgress('start');

// Finish
$('.pie_progress').asPieProgress('finish');

// 50%
$('.pie_progress').asPieProgress('go',50);

// 50%
$('.pie_progress').asPieProgress('go','50%');

// Stop a progress bar
$('.pie_progress').asPieProgress('stop');

// Reset
$('.pie_progress').asPieProgress('reset');
