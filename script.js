$(document).ready(() => {
  const fadeInTime = 1000;
  const fadeOutTime = 100;
	let currentQuote;
	let currentAuthor;
	const getQuote = () => {
    const url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
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
  $('#new-quote').on('click', () => {
    $('#text').fadeOut(fadeOutTime);
    $('#author').fadeOut(fadeOutTime);
    $('#text').fadeIn(fadeInTime);
    $('#author').fadeIn(fadeInTime);
    getQuote()
  });
});


