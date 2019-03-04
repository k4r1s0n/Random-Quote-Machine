$(document).ready(() => {
	let currentQuote;
	let currentAuthor;
	const getQuote = () => {
    const url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
		$.getJSON(url, (data) => {
			$("#text").html('"' + data.quoteText + '"');
      $("#author").html(data.quoteAuthor);
      currentQuote = data.quoteText;
      currentAuthor = data.quoteAuthor;
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote + " - " + currentAuthor);
	    $('#tumblr-quote').attr('href', 'http://tumblr.com/widgets/share/tool?canonicalUrl=http://cats.com');
    });
	};
	getQuote();
	$('#new-quote').on('click', () => getQuote());
});


