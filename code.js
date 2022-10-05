$(document).ready(function(){
  $("#Neimar img").click(function(){
    $(".player-info").fadeToggle();
  });
  $("#voting").submit(function(){
    $("#voting-form").prepend("<div class='alert alert-success' role='alert'>Thank you "+
  $('#voting-form input[name="name"]').val() +", for your vot!</div>");
$('#voting').remove();
  return false;
});

$('tr').dblclick(function(){
  $(this).css({'background': "black","color": "white"});
});
$(".pricing a").click(function(){
  $(".info").fadeToggle();
});
  $(".price a").click(function(){
  $(".inf").fadeToggle();
});
$(".pri a").click(function(){
  $(".in").fadeToggle();
});
$(".pricing a").click(function(){
$(".invisible").Show();
});
});
