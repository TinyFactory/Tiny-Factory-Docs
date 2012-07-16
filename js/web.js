$('a.category').click( function() {
  $('.mobile-band ul').slideToggle(350);
  return false;
});
var win = $(window).width();
var view = 1024
if (win > view) {
  $('#sidebar').slimScroll({
    height: '100%',
    width: '23%',
  });
}