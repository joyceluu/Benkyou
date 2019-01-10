
$(document).ready(function()
{
	$.get('questions.txt', function(data)
	{
		var lines = data.split('\n');
		$('.question').append(lines[0]);
	});
});
