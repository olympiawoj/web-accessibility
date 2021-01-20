$(document).ready(function() {

	var list = $('ul'),
		listItems = list.find('li');
    // Simple J Query script looking for a button with a class of btn-delete
	$('.btn-delete').on('click', function() {
        $(this).parent().remove();
        // find the closest btn and grab the first one, then focus it
		listItems.find('.btn-delete').first().focus();
	});
});
