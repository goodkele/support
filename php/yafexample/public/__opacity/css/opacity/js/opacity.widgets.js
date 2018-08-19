/*!
 * Opacity Widgets v1.0.0 // BUILT FOR OPACITY ADMIN TEMPLATE
 */

 $(document).ready(function() {
 
 /* WIDGET INITIALIZE */
 $(".wdgt").each(function(index) {
  var wbtns = "", count = 0;
  if($(this).attr("ajax-btn") == "true"){wbtns += "<i class='icon icon-refresh h wdgt-ajax'></i>"; count++;}
  if($(this).attr("hide-btn") == "true"){wbtns += "<i class='icon icon-chevron-up wdgt-hide'></i>"; count++;}
  if($(this).attr("close-btn") == "true"){wbtns += "<i class='icon icon-remove wdgt-close'></i>"; count++;}
  if(count != 0){
   $(this).find(".wdgt-header").html($(this).find(".wdgt-header").html() + "<span class='wbtns'>" + wbtns + "</span>");
  }
 });
 
 /* WIDGET HANDLERS */
 $(".wdgt-close").click(function() {$(this).parent().parent().parent().fadeOut(1500);});
 
 $(".wdgt-hide").click(function() {
  $(this).parent().parent().parent().find('.wdgt-body').slideToggle(250);
  if($(this).parent().find('.icon-chevron-up').length){
   $(this).removeClass("icon-chevron-up"); $(this).addClass("icon-chevron-down");
  }else{
   $(this).removeClass("icon-chevron-down"); $(this).addClass("icon-chevron-up");
  }
 });
 
 $(".wdgt-ajax").click(function() {
  $(this).addClass("fa-spin");
  var ajaxPath = $(this).parent().parent().parent().attr('ajax-path');
  var wdgtBody = $(this).parent().parent().parent().find('.wdgt-body');
  $.ajax({url:ajaxPath,success:function(result){
   wdgtBody.html(result);
   $(this).removeClass("fa-spin");
  }});
 });
 
 
 
});