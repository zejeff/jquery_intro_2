$(document).ready(function() {
// This only parses once on click.  Each click will activate the function and hide then show the content.  
  $(".clickable").click(function() {
    $("#walrus-hidden").hide();
    $("#walrus-showing").show();
  });  
// To re-hide the content, add a function with a unique class/id and reverse the methods being called.  
  $(".clickable_alt").click(function() {
    $("#walrus-showing").hide();
    $("#walrus-hidden").show();
  });
});