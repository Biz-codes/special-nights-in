
# Special Nights In 
Do you ever find that celebrating a special occasion while staying at home just doesn't feel so special? 

Today, there are many reasons why people are celebrating with nights in rather than nights out, ranging from: accessibility concerns for persons with disabilities; to budgetary concerns about the high cost of eating out; to safety concerns about exposure to COVID-19. 

Whatever your concerns, you can now find the perfect combination of a special cocktail recipe, and a special meal recipe, to make your loved ones feel special on those special occasions spent at home!


### 1. Working Prototype 
You can access a working prototype of the app here: https://biz-codes.github.io/special-nights-in



### 2. User Stories
This app is for visitors.

###### Landing Page (Importance - High) (Est: 0.5h)
* as a visitor
* I want to land on the main page of this application and read about it,
* so I can decide if I want to use it.

###### Search Page (Importance - High) (Est: 2h)
* as a visitor
* I want to search for cocktail recipes by name,
* so I can see the details of the cocktails that match that name.

###### Search Page (Importance - Medium) (Est: 1h)
* as a visitor
* I want to filter cocktail results by ingredient,
* so I can see the details of only the cocktails that have that ingredient.

###### Search Page (Importance - High) (Est: 2h)
* as a visitor
* I want to search for meal recipes by name,
* so I can see the details of the meals that match that name.

###### Search Page (Importance - Medium) (Est: 1h)
* as a visitor
* I want to filter meal results by main ingredient,
* so I can see the details of only the meals that have that main ingredient.

###### Search Page (Importance - High) (Est: 1h)
* as a visitor
* I want to see cocktail and meal results displayed side by side,
* so I can decide which recipes go together by the details of the cocktails and meals.

###### Search Page (Importance - High) (Est: 1h)
* as a visitor
* I want to see a thumbnail image for each recipe,
* so I can visualize the results of the recipes that I see in the results.

###### Search Page (Importance - High) (Est: 1h)
* as a visitor
* I want to limit the amount of results I see at a time,
* so I can focus on the recipes that are relevant.

###### Search Page (Importance - High) (Est: 1h)
* as a visitor
* I want to be able to open recipes in a new tab,
* so I can go back to them later when I want to make the recipe.

###### Search Page (Importance - High) (Est: 1h)
* as a visitor with visual impairment
* I want to be able to use accessibility features such as text-to-speech and navigation via keyboard,
* so that I can access all the features of the search.

###### Search Page (Importance - High) (Est: 1h)
* as a visitor with with learning disabilities
* I want to be able to access the site easily using visuals and default options, without too many steps, 
* so that I can access all the features of the search.


### 3. Functionality
The app's functionality includes:
* search for cocktail recipes by name
* filter cocktail results by ingredient
* search for meal recipes by name
* filter meal results by main ingredient
* see cocktail and meal results displayed side by side
* see a thumbnail image for each recipe
* limit the amount of results I see at a time
* open recipes in a new tab
* use accessibility features such as text-to-speech and navigation via keyboard
* access the site easily using visuals and default options, without too many steps




### 4. Technology 
* Front-End: HTML5, CSS3, JavaScript, JQuery, APIs


### 5. Wireframes 
Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page.jpg)
Search Page
![Search Page](/github-images/wireframes/search-page.jpg)



### 6. API Documentation 

#### CocktailDB API
* Search cocktail by name: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
* Filter by ingredient: 
    * https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
    * https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka
* List the categories, glasses, ingredients or alcoholic filters:
    * https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
    * https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
    * https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
    * https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list
* Show preview image of cocktail: Add /preview to the end of the cocktail image URL: https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)
* Show preview image of ingredients: 
    * https://www.thecocktaildb.com/images/ingredients/gin-Small.png (100x100 pixels)
    * https://www.thecocktaildb.com/images/ingredients/gin-Medium.png (350x350 pixels)
    * https://www.thecocktaildb.com/images/ingredients/gin.png (700x700 pixels)

#### MealDB API
* Search meal by name: https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
* Filter by main ingredient: https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
* List all Categories, Area, Ingredients:
    * https://www.themealdb.com/api/json/v1/1/list.php?c=list
    * https://www.themealdb.com/api/json/v1/1/list.php?a=list
    * https://www.themealdb.com/api/json/v1/1/list.php?i=list
* Show preview image of meal: Add /preview to the end of the meal image URL: https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview
* Show preview image of ingredients:
    * https://www.themealdb.com/images/ingredients/Lime.png
    * https://www.themealdb.com/images/ingredients/Lime-Small.png


### 7. Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)



### 8. Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality


