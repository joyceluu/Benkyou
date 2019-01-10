
$(document).ready(function()
{
	$.get('questions.text', function(data)
	{
		var lines = data.split('\n');
		$('.question').append(lines[0]);
	});
});
