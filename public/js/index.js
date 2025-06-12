"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author")
};

async function getRandomImage(){
    const client_id = "2rFxFW6XjaO6Fohk52h9cxk0B4Aj7iB3cLxRAJ0UMcw"
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;
    try{
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl})`;
    }
    catch(error){
        console.error(error);
    }
}

getRandomImage();




// const quotes = [
//     {
//         quote: "To Infinity and Beyond!",
//         author: "Buzz Lightyear"
//     },

//     {
//         quote: "I'd buy that for a dollar",
//         author: "Bandit Heeler"
//     },

//     {
//         quote: "A penny saved is a penny earned",
//         author: "Benjamin Franklin"
//     },

//     {
//         quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
//         author: "Eric Schmidt"
//     }
// ]

// function loopThroughQuotes(){
//     let quoteIndex = 0;
//     setInterval(() => {
//         if (quoteIndex < quotes.length){
//             elements.quote.textContent = quotes[quoteIndex].quote;
//             elements.author.textContent = quotes[quoteIndex].author;
//             quoteIndex++;
//         }
//         else{
//             quoteIndex = 0;
//         }

//     }, 3000);
// }

// setTimeout(loopThroughQuotes, 3000);