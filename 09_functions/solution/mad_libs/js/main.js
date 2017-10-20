$('form').on('submit', function (e) {

	e.preventDefault();

	var author = $('#authorSelect').val();

	var noun = $('#nounInput').val();

	var verb = $('#verbInput').val();

	if (author === null) {
		$('#authorSelect').addClass('error');
	} else {
		$('#authorSelect').removeClass('error');
	}

	if (noun.length === 0) {
		$('#nounInput').addClass('error');
	} else {
		$('#nounInput').removeClass('error');
	}

	if (verb.length === 0) {
		$('#verbInput').addClass('error');
	} else {
		$('#verbInput').removeClass('error');
	}

	$('.quote').hide();

	if (author !== null && noun.length !== 0 && verb.length !== 0) {
		$('#' + author).fadeIn(300);

		$('.noun').text(noun);

		$('.verb').text(verb);
	}

});