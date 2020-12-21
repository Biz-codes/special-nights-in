'use strict';

//api keys and baseURLs

const cocktailDBapiKey= '1';
const cocktailSearchURL= 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const mealDBapiKey= '1';
const mealSearchURL='https://www.themealdb.com/api/json/v1/1/search.php';
// These functions return HTML templates

//Start Screen
function introScreen() {
    return `
    <section id="intro-screen">
        <img src="" alt="">
        <h1> Special Nights In</h1>
        <p>Do you ever find that celebrating a special occasion while staying at home just doesn't feel so special?</p> 
        <p> Today, there are many reasons why people are celebrating with nights in rather than nights out, ranging from: accessibility concerns for persons with disabilities; to budgetary concerns
        about the high cost of eating out; to safety concerns about exposure to COVID-19.</p>
        <p>Whatever your concerns, you can now find the perfect combination of a special cocktail recipe, and a special meal recipe, to make your loved ones feel special on those special occasions
        spent at home! </p>
      <button id="start" type='submit'>Try It!</button>
    </div>
    `;
  }

function searchScreen() {
    return `
    <section id ="search-page">
        <div id="cocktails">
            <h2>Cocktail Search:</h2>
            <form id="cocktail-search">
                <label for="cocktail-ingredient">Type the name of a special cocktail to find recipes.</label>
                <input type="text" id="cocktail-name" name="cocktail-name" placeholder: "margarita" required>
                <input class="button" id="submit-cocktail" type="submit" value="Go!">
            </form>
            <div id="cocktail-results" class="hidden">
                <h3>Special Cocktails:</h2>
                <ul class="cocktail-list"></ul>
            </div>
            <div id="cocktail-error-msg" class="hidden">
                <p>
                    Sorry, we couldn't find any cocktail matches. Please check your spelling or try a new search.
                </p>
            </div>
        </div>

        <div id="meals">
            <h2>Meal Search:</h2>
            <form id="meal-search">
                <label for="meal-name">Type the name of a special meal to find recipes.</label>
                <input type="text" id="meal-name" name="meal-name" placeholder: "curry" required>
                <input class="button" id="submit-meal" type="submit" value="Go!">
            </form>
            <div id="meal-results" class="hidden">
                <h3>Special Meals:</h2>
                <ul class="meal-list"></ul>
            </div>
            <div id="meal-error-msg" class="hidden">
                <p>
                    Sorry, we couldn't find any meal matches. Please check your spelling or try a new search.
                </p>
            </div>
        </div>

    </section>
    `
}

function handleStartClick() {
    $('main').on('click', '#start', (event) => {
        event.preventDefault();
        searchScreen();
    });
}

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}


function displayCocktailRecipes(responseJson){
    console.log(responseJson);
    // iterate through the data array
    for (let i = 0; i < responseJson.data.length; i++){
    // for each recipe object in the data 
    //array, add a list item to the results 
    //with thumbnail
    
      $('#cocktail-results').append(
        `<li>
          <h3>
            <a href='${responseJson.data[i].url}'>${responseJson.data[i].fullName}</a>
          </h3>
          <p>${responseJson.data[i].description}</p>
        </li>`
      )
    };
  //display the results section  
  $('#cocktail-results').removeClass('hidden');
};


function displayMealRecipes(responseJson){
    console.log(responseJson);
    // iterate through the data array
    for (let i = 0; i < responseJson.data.length; i++){
    // for each recipe object in the data 
    //array, add a list item to the results 
    //with thumbnail
    
      $('#meal-results').append(
        `<li>
          <h3>
            <a href='${responseJson.data[i].url}'>${responseJson.data[i].fullName}</a>
          </h3>
          <p>${responseJson.data[i].description}</p>
        </li>`
      )
    };
  //display the results section  
  $('#meal-results').removeClass('hidden');
}


function getCocktails(query, maxResults=5) {
    console.log(getCocktails);
    const params = {
        q: query,
        api_key: apiKey,
        limit: maxResults
  };
  const queryString = formatQueryParams(params);
  const url = searchURL + '?' + queryString;

  console.log(url)

  fetch(url)
    .then(response => {
    console.log(response);
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Oh no! ${err.message}`);
    });
}

function getMeals(query, maxResults=5) {
    console.log(getMeals);
    const params = {
        q: query,
        api_key: apiKey,
        limit: maxResults
  };
  const queryString = formatQueryParams(params);
  const url = searchURL + '?' + queryString;

  console.log(url)

  fetch(url)
    .then(response => {
    console.log(response);
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Oh no! ${err.message}`);
    });

}


function watchForm(){

}

$(introScreen)

/*       



function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('#js-error-message').empty();
    $('#results-list').empty();
    const stateArray = $('#js-search-term').val().split(',');
    const maxResults = $('#js-max-results').val();
    getParks(stateArray, maxResults);
  });
}

$(function() {
  console.log("I'm listening...");
  watchForm();
});
*/
       