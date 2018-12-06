//$(document).ready(function()
//{
//	var lines = ["おなまえは。", "なんねんせいですか。","せんこうはなんですか。"];
//	$('.question').append(lines[0]);
//});

$(document).ready(function()
{
	$.get('questions.text', function(data)
	{
		var lines = data.split('\n');
		$('.question').append(lines[0]);
	});
});
