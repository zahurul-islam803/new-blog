$(document).ready(function(){
$("#Ayman img").click(function(){
  $(".man-info:first").fadeToggle();
});

$("#voting").submit(function(){
$("#voting-form").prepend("<div class='alert alert-success' role='alert'>Thank you "+
$('#voting-form input[name="name"]').val() +", for your vot!</div>");
$('#voting').remove();
return false;
});
$("tr").hover(function(){
  $(this).css({"background": "black","color": "white"});
});
});
