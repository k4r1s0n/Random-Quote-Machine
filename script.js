$(document).ready(() => {
	let randomQuote = '';
	let randomAuthor = '';
	const getQuote = () => {
		let quotes = ['Hello', 'Hi', 'Yeah'];
		let authors = ['A', 'B', 'C'];
		let randomNum = Math.floor(Math.random()*quotes.length);
		randomQuote = quotes[randomNum];
		randomAuthor = authors[randomNum];
		$('#text').text(randomQuote);
		$('#author').text(randomAuthor);
	};
	getQuote();
	$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + randomQuote + " - " + randomAuthor);
	$('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(randomAuthor)+'&content=' + encodeURIComponent(randomQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
	$('#new-quote').on('click', () => getQuote());
});


