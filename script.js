const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');
const loader = document.getElementById('loader');

let apiQuotes = [];

//Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//Hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote
function newQuote() {
    loading();
    // Pick a random quote from API quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);

    //Check if author field is blank and replace it with 'Unknown'
    if(!quote.author) {
        authorText.textContent = 'Unknown';    
    } else {
        authorText.textContent = quote.author;
    }

    //Check quote length to determine styling
    if(quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    //Set quote, hide loader
    quoteText.textContent = quote.text;
    complete();
}

// Get quotes from API
async function getQuotes() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl); //'response' will not be populated until it has some data fetched from the API
        apiQuotes = await response.json(); //converting (series of strings) 'response' into json object 
        newQuote();
    } catch (error) {
        //Catch error here
    }
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

//Run function as soon as the page loads
getQuotes();


/*
//Local Version
function newQuote() {
    // Pick a random quote from API quotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

newQuote();
*/