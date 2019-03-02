$(document).ready(() => {
	const getQuote = () => {
		const quotes = ['Hello', 'Hi', 'Yeah'];
		const authors = ['A', 'B', 'C'];
		const randomNum = Math.floor(Math.random()*quotes.length);
		const randomQuote = quotes[randomNum];
		const randomAuthor = authors[randomNum];
		$('#text').text(randomQuote);
		$('#author').text(randomAuthor);
	};
	$('#new-quote').on('click', () => getQuote());
});
