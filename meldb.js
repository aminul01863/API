const searchFood = () => {
  const searchFood = document.getElementById("search-field");
  const searchValue = searchFood.value;
  searchFood.value = "";

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayFood(data.meals));
};

const displayFood = (food) => {
  const foodShow = document.getElementById("show-food");
  food.forEach((meal) => {
    // console.log(meal)
    const div = document.createElement("div");
    // div.classList.add('col')
    div.innerHTML = `
        <div onclick="mealDetail(${meal.idMeal})" class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
          </div>
        </div>
           `;
    foodShow.appendChild(div);
  });
};

const mealDetail = (meal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.meals[0]));
};
