'use strict';

//api keys and baseURLs

const cocktailSearchURL= 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const mealSearchURL='https://www.themealdb.com/api/json/v1/1/search.php';
// These functions return HTML templates

//Start Screen
function introScreen() {
    let htmlOutput= `
    <section id="intro-screen">
        <img src="website-images/hero-image.jpg" alt="people partying" class="hero-image">
        <p>Do you ever find that celebrating a special occasion while staying at home just doesn't feel so special?</p> 
        <p> Today, there are many reasons why people are celebrating with nights in rather than nights out, ranging from: accessibility concerns for persons with disabilities; to budgetary concerns
        about the high cost of eating out; to safety concerns about exposure to COVID-19.</p>
        <p>Whatever your concerns, you can now find the perfect combination of a special cocktail recipe, and a special meal recipe, to make your loved ones feel special on those special occasions
        spent at home! </p>
      <button id="start" type='submit'>Try It!</button>
    </section>
    `;
    $("main").html(htmlOutput);
  }


function searchScreen() {
    let htmlOutput= `
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
                <ul class="cocktail-list">
                    <li>
                        <h3>Margarita</h3>
                        <img src= "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg" class="drink-image">
                        <ul class="ingredient-list">
                            <li>Tequila (with image????)</li>
                            <li>Triple sec</li>
                            <li>lime juice</li>
                            <li>salt</li>
                        </ul>
                        <p>Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. 
                        The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.</p>
                    </li>
                </ul>
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
                <ul class="meal-list">
                    <li></li>
                </ul>
            </div>
            <div id="meal-error-msg" class="hidden">
                <p>
                    Sorry, we couldn't find any meal matches. Please check your spelling or try a new search.
                </p>
            </div>
        </div>

    </section>
    `
    $("main").html(htmlOutput);
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
            <a href='${responseJson.data[i].strDrink}'</a>
          </h3>
          <img src='${responseJson.data[i].strDrinkThumb}'>
          <ul>
            <li>${responseJson.data[i].strIngredient1}'</li>
          <p>${responseJson.data[i].drinkInstructions}</p>
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
          <a href='${responseJson.data[i].strMeal}'</a>
        </h3>
        <img src='${responseJson.data[i].strMealThumb}'>
        <ul>
          <li>${responseJson.data[i].strIngredient1}'</li>
        <p>${responseJson.data[i].MealInstructions}</p>
      </li>
      )
    };
  //display the results section  
  $('#meal-results').removeClass('hidden');
}


function getCocktails(searchTerm) {
    console.log(getCocktails);
    const params = {
        s: searchTerm,
        strDrink: drinkName,
        strInstructions: drinkInstructions,
        strDrinkThumb: drinkImage,
        strIngredient1: //can I create a for loop for these ingredients too?? I also want the thumbnails of the ingredients to show.
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

function getMeals(searchTerm) {
    console.log(getMeals);
    const params = {
        s: searchTerm,
        strMeal: mealName,
        strInstructions: mealInstructions,
        strMealThumb: mealImage,
        strIngredient1: //can I create a for loop for these ingredients too?? I also want the thumbnails of the ingredients to show.
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

//run this when the page loads
function startUp(){
    //introScreen()
    //handleStartClick()
    searchScreen()
}

$(startUp)

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
       