let apiQuotes = [];
let quoteContainer = document.getElementById('quote-container');
let quoteText = document.getElementById('quote');
let authorText = document.getElementById('author');
let newQuoteBtn = document.getElementById('new-quote');
let twitterBtn = document.getElementById('twitter')

// Show new quote
function newQuote() {
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

    quoteText.textContent = quote.text;
}

// Get quotes from API
async function getQuotes() {
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