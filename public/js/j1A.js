document.addEventListener("DOMContentLoaded", function() { 

	// URL to questions list
	const questionList = 'https://raw.githubusercontent.com/joyceluu/Benkyou/master/public/js/questions.txt';
	const questions = []; // empty array
	const question = document.querySelector('.question'); // grab question div
	const button = document.querySelector('button'); // grab button

	// grab text file contents, split by line and push to array
	fetch(questionList)
		.then(function(text)
		{
			text.text().then(function(text) {
				text = text.split('\n');
				questions.push(...text);
			});
		});

	let index = 0; // to keep track of which question is being displayed


	function displayQuestion() {
		const html = questions[index];
		if (index < questions.length - 1) {
			index++;
		}
		else
		{
			index = 0;
		}
		console.log(index);
		question.innerHTML = html;
	}

	button.addEventListener('click', displayQuestion);
});