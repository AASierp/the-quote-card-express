"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author")
};

const quotes = [
    {
        quote: "To Infinity and Beyond!",
        author: "Buzz Lightyear"
    },

    {
        quote: "I'd buy that for a dollar",
        author: "Bandit Heeler"
    },

    {
        quote: "A penny saved is a penny earned",
        author: "Benjamin Franklin"
    },

    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt"
    }
]

function loopThroughQuotes(){
    let quoteIndex = 0;
    setInterval(() => {
        if (quoteIndex < quote.length){
            elements.quote.textContent = quotes[quoteIndex].quote;
            elements.author.textContent = quotes[quoteIndex].author;
            quoteIndex++;
        }
        else{
            quoteIndex = 0;
        }

    }, 3000);
}

setTimeout(loopThroughQuotes, 3000);