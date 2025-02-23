// Global variables
const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=`;
const foodItems = document.querySelector(".food-items");
const foodImgDisplay = document.querySelector("#food-img");
const img = document.createElement("img");
const dropdownItem = document.querySelector(".dropdown-item");
const dropdownMenu = document.querySelector(".dropdown-menu");
const country = document.querySelector(".country");
const entree = document.querySelector(".entree");

// Fetch Request
const fetchApi = () => {
  fetch(apiUrl + selectedCountry)
    .then((response) => response.json())
    .then((mealData) => renderMeals(mealData))
    .catch((error) => console.log("There was an error"));
};

// Helper functions
// When a country is selected, update the selected-country text content with country's name

var selectedCountry = "";
dropdownMenu.addEventListener("click", (e) => {
  selectedCountry = e.target.text;
  console.log(selectedCountry);
  country.textContent = selectedCountry;
  fetchApi();
});

// Render img
const renderMeals = (mealData) => {
  mealData.meals.forEach((meal) => {
    const mealImgUrl = meal.strMealThumb;
    const mealName = meal.strMeal;
    img.src = mealImgUrl;
    listMeals(mealName);
  });
};
// Selected country should be updated into the api using `${country} ` at the end of the api
const listMeals = (mealName) => {
  console.log(mealName);
  const dropdownLi = document.createElement("li");
  dropdownLi.classList.add("dropdown-item");
  //   const foodList = (entree.innerHTML = dropdownLi.textContent = mealName);
  const foodArray = [mealName];
  foodArray.forEach((food) => {
    dropdownLi.textContent = food;
    entree.append(dropdownLi);
  });
};

// Selected country's meals should be displayed into the drop down menu.

// Use the .filter() to filter the sides and dessert. Will need another api for beverages.

// User form input

// submit button
