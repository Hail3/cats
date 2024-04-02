document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".btn");
var catI = document.querySelector(".catImage");


const apiKey = 'live_eLZzjuyb1XqrIPvpkJni7xPQGshgI1r0qMwwSduMYCBjxaOEAPouVJNK1Q5F4LrI'; 
const url = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;


async function getRandomCat() {
  try {
    button.disabled = true;
    const response = await fetch(url);
    const data = await response.json();
    const randomCat = data[0];
    catI.src = randomCat.url;
    button.disabled = false;
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", getRandomCat);});
  