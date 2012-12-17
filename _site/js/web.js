$('a.category').click( function() {
	$('.mobile-band ul').slideToggle(350);
	return false;
});

$(function(){
	$('.archive-list').masonry({
		itemSelector : '.col',
		columnWidth : 35
	});
	$('#sidebar').jScrollPane();
});

$(window).resize(function() {
	$('#sidebar').jScrollPane();
});

// Duplicate sidebar for conditional loading
var $sidebar = $('#sidebar');
var $sidebar_ns = $sidebar.clone();

// // Give it a new ID so we know it's loading
$sidebar_ns.attr({id: "sidebar_ns"});

// // Insert duplicate sidebar after original sidebar
$sidebar.after($sidebar_ns);

// // Add or remove function depending on what
// width is active.
$(window).resize(function(){
	var win = $(window).width();
	var view = 1024
	if (win > view) {
	 	$sidebar.show();
	 	$sidebar_ns.hide();
	} else {
		$sidebar.hide();
		$sidebar_ns.show();
	}
});

// // Fire resize event to prevent duplicate
// // sidebars from showing.
$(window).trigger('resize');