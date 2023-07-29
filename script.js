/*
let apiQuotes = [];

// Show new quote
function newQuote() {
    // Pick a random quote from API quotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
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

//Run function as soon as the page loads
getQuotes();
*/


//Local Version
function newQuote() {
    // Pick a random quote from API quotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

newQuote();