'use strict';

//api keys and baseURLs

const cocktailSearchURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const mealSearchURL = 'https://www.themealdb.com/api/json/v1/1/search.php';
// These functions return HTML templates

function checkInteger(inputInteger) {
    let outputValue = inputInteger;
    if (inputInteger == "") {
        outputValue = 0;
    }
    if (inputInteger === undefined) {
        outputValue = 0;
    }
    if (inputInteger == null) {
        outputValue = "";
    }
    return outputValue;
}
//returns empty string if the string is NOT valid
function checkString(inputString) {
    let outputText = inputString;
    if (inputString === undefined) {
        outputText = "";
    }
    if (inputString == null) {
        outputText = "";
    }
    if (inputString == "") {
        outputText = "";
    }
    return outputText;
}

//Start Screen
function introScreen() {
    let htmlOutput = `
    <section id="intro-screen">
        <img src="website-images/hero-image.jpg" alt="people partying" class="hero-image">
        <p>Do you ever find that celebrating a <i>special</i> occasion while staying at home just doesn't feel so <i>special?</i></p> 
        <p> Today, there are many reasons why people are celebrating with nights in rather than nights out, ranging from: accessibility concerns for persons with disabilities; 
        to budgetary concerns about the high cost of eating out; to safety concerns about exposure to COVID-19.</p>
        <p>Whatever your concerns, you can now find the perfect combination of a <i>special</i> cocktail recipe and a <i>special</i> meal recipe, to make your loved ones feel <i>special</i> 
        on those <i>special</i> occasions spent at home! </p>
      <button id="start" type='submit'>Try It!</button>
    </section>
    `;
    $("main").html(htmlOutput);
}


function searchScreen() {
    let htmlOutput = `
    <section id ="search-page" class="search-page">
        <div id="cocktails">
            <h2>Cocktail Search:</h2>
            <form id="cocktail-search">
                <label for="cocktail-ingredient">Type the name of a <i>special</i> cocktail to find recipes.</label>
                <input type="text" id="cocktail-name" name="cocktail-name" value="margarita" required>
                <input class="search-button" id="submit-cocktail" type="submit" value="Go!">
            </form>
            <h3 id="cocktail-heading" class="hidden">Special Cocktails:</h3>
            <div id="cocktail-results" class="hidden">
                <ul class="cocktail-list">
                    <li>
                        <h4>Margarita</h4>
                        <img src= "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg" class="drink-image">
                        <ul class="ingredient-list">
                            <li>tequila </li>
                            <li>Triple sec</li>
                            <li>lime juice</li>
                            <li>salt</li>
                        </ul>
                        <p class="instructions">Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. 
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
                <label for="meal-name">Type the name of a <i>special</i> meal to find recipes.</label>
                <input type="text" id="meal-name" name="meal-name" value= "tacos" required>
                <input class="search-button" id="submit-meal" type="submit" value="Go!">
            </form>
            <h3 id="meal-heading" class="hidden">Special Meals:</h3>
            <div id="meal-results" class="hidden">
                <ul class="meal-list">
                    <li></li>
                </ul>
            </div>
            <div id="meal-error-msg"></div>
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

function handleCocktailSearch() {
    $('main').on('submit', '#cocktail-search', (event) => {
        event.preventDefault();
        //console.log("inside handleCocktailSearch")
        let searchTerm = $('#cocktail-name').val();
        //console.log(searchTerm)
        //if the search term is empty, display an error
        if (searchTerm == "") {
            alert("Please input a cocktail name.");
        }
        //if the search term is valid, send it to the function to make the api call
        else {
            getCocktails(searchTerm)
        }
    });
}

function handleMealSearch() {
    $('main').on('submit', '#meal-search', (event) => {
        event.preventDefault();
        //console.log("inside handleMealSearch")
        let searchTerm = $('#meal-name').val();
        //console.log(searchTerm)
        //if the search term is empty, display an error
        if (searchTerm == "") {
            alert("Please input a meal name.");
        }
        //if the search term is valid, send it to the function to make the api call
        else {
            getMeals(searchTerm)
        }
    });
}

function formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}

function displayCocktailRecipes(responseJson) {
    // console.log(responseJson);
    $('#cocktail-results').empty();
    if (responseJson.drinks == null) {
        $('#cocktail-results').append(
            `<li class="recipe">
            <h4>&#127864;  No results:</h4>
            <p>Sorry, we couldn't find any cocktail matches. Please check your spelling or try a new search.</p>
        </li>`
        )
    } 
    else {
        // iterate through the data array
        for (let i = 0; i < responseJson.drinks.length; i++) {
            // for each recipe object in the cocktails 
            //array, add a list item to the results 
            //with thumbnail
            $('#cocktail-results').append(
                `<li class="recipe">
                <h4>&#127864;  ${responseJson.drinks[i].strDrink}</h4>
                <img src='${responseJson.drinks[i].strDrinkThumb}' class='thumb'>
                <ul>
                    <li>${checkInteger(responseJson.drinks[i].strMeasure1)} ${checkString(responseJson.drinks[i].strIngredient1)}</li>
                    <li>${checkInteger(responseJson.drinks[i].strMeasure2)} ${checkString(responseJson.drinks[i].strIngredient2)}</li>
                    <li>${checkInteger(responseJson.drinks[i].strMeasure3)} ${checkString(responseJson.drinks[i].strIngredient3)}</li>
                    <li>${checkInteger(responseJson.drinks[i].strMeasure4)} ${checkString(responseJson.drinks[i].strIngredient4)}</li>
                    <li>${checkInteger(responseJson.drinks[i].strMeasure5)} ${checkString(responseJson.drinks[i].strIngredient5)}</li>
                    <li>${checkInteger(responseJson.drinks[i].strMeasure6)} ${checkString(responseJson.drinks[i].strIngredient6)}</li>
                    <li>${checkInteger(responseJson.drinks[i].strMeasure7)} ${checkString(responseJson.drinks[i].strIngredient7)}</li>
                    <li>${checkInteger(responseJson.drinks[i].strMeasure8)} ${checkString(responseJson.drinks[i].strIngredient8)}</li>
                    <li>${checkInteger(responseJson.drinks[i].strMeasure9)} ${checkString(responseJson.drinks[i].strIngredient9)}</li>
                    <li>${checkInteger(responseJson.drinks[i].strMeasure10)} ${checkString(responseJson.drinks[i].strIngredient10)}</li>
                </ul>
                <p>${responseJson.drinks[i].strInstructions}</p>
            </li>`
            )
        }
    };
    //display the results section  
    $('#cocktail-heading').removeClass('hidden');
    $('#cocktail-results').removeClass('hidden');
};


function displayMealRecipes(responseJson) {
    // console.log(responseJson);
    $('#meal-results').empty();
    // iterate through the meal array
    if (responseJson.meals == null) {
        $('#meal-results').append(
            `<li class="recipe">
            <h4>&#127858;  No results:</h4>
            <p>Sorry, we couldn't find any meal matches. Please check your spelling or try a new search.</p>
        </li>`
        )
    } 
    else {
        for (let i = 0; i < responseJson.meals.length; i++) {
            // for each recipe object in the meals 
            //array, add a list item to the results 
            //with thumbnail
            // if (responseJson.meals=="null"){
            //      $('#meal-error-msg').append(
            //          `<p>Sorry, we couldn't find any meal matches. Please check your spelling or try a new search.</p>`
            //      )
            //  }
            //  else
            //127864 cocktail emoji  127858 meal emoji


            $('#meal-results').append(
                `<li class="recipe">
                <h4>&#127858;  ${responseJson.meals[i].strMeal}</h4>
                <img src='${responseJson.meals[i].strMealThumb}' class='thumb'>
                <ul>
                    <li>${responseJson.meals[i].strMeasure1} ${responseJson.meals[i].strIngredient1}</li>
                    <li>${responseJson.meals[i].strMeasure2} ${responseJson.meals[i].strIngredient2}</li>
                    <li>${responseJson.meals[i].strMeasure3} ${responseJson.meals[i].strIngredient3}</li>
                    <li>${responseJson.meals[i].strMeasure4} ${responseJson.meals[i].strIngredient4}</li>
                    <li>${responseJson.meals[i].strMeasure5} ${responseJson.meals[i].strIngredient5}</li>
                    <li>${responseJson.meals[i].strMeasure6} ${responseJson.meals[i].strIngredient6}</li>
                    <li>${responseJson.meals[i].strMeasure7} ${responseJson.meals[i].strIngredient7}</li>
                    <li>${responseJson.meals[i].strMeasure8} ${responseJson.meals[i].strIngredient8}</li>
                    <li>${responseJson.meals[i].strMeasure9} ${responseJson.meals[i].strIngredient9}</li>
                    <li>${responseJson.meals[i].strMeasure10} ${responseJson.meals[i].strIngredient10}</li>
                </ul>
                <p>${responseJson.meals[i].strInstructions}</p>
            </li>`
            )
        }
    };
    //display the results section  
    $('#meal-heading').removeClass('hidden');
    $('#meal-results').removeClass('hidden');
}

function getCocktails(searchTerm) {
    // console.log(searchTerm);
    const params = {
        s: searchTerm,
    };
    const queryString = formatQueryParams(params);
    const url = cocktailSearchURL + '?' + queryString;

    //console.log(url)

    fetch(url)
        .then(response => {
            // console.log(response);
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayCocktailRecipes(responseJson))
        .catch(err => {
            $('#js-error-message').text(`Oh no! ${err.message}`);
        });
}

function getMeals(searchTerm) {
    //console.log(searchTerm);
    const params = {
        s: searchTerm,
    };
    const queryString = formatQueryParams(params);
    const url = mealSearchURL + '?' + queryString;

    // console.log(url)

    fetch(url)
        .then(response => {
            // console.log(response);
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayMealRecipes(responseJson))
        .catch(err => {
            //alert('Sorry, we couldn't find any meal matches. Please check your spelling or try a new search.')
            $('#js-error-message').text(`Sorry, we couldn't find any meal matches. Please check your spelling or try a new search. ${err.message}`);
        });

}

//run this when the page loads
function startUp() {
    introScreen()
    handleStartClick()
    handleCocktailSearch()
    handleMealSearch()
    //searchScreen()
}

$(startUp)