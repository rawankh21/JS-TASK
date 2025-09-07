var quotes = [
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" }
];

var index = [];

function newQuote() {
  if (index.length == quotes.length) {
    alert("All quotes have been shown!");
    return; 
  }

  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (index.indexOf(randomIndex) != -1);

  index.push(randomIndex);

  var quote = quotes[randomIndex];

  document.getElementById("quoteText").innerHTML = '"' + quote.text + '"';
  document.getElementById("quoteAuthor").innerHTML = "— " + quote.author;
}

newQuote();

