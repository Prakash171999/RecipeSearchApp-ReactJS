import React, { useState } from "react";
import "./App.css";
import Helpers from "./Helpers";
import Axios from "axios";

//variable that imports the key, id and base from helpers 
const api = {
  key: Helpers.APP_KEY,
  id: Helpers.APP_ID,
  base: Helpers.BASE_URL,
};

const App = () => {
  //state to store the input field data
  const [query, setQuery] = useState("");
  //state to store the array of recipes from api
  const [recipes, setRecipes] = useState([]);

  //URL for fetching recipe api. Template literals are used. Fetching the data using axios with async and await
  const url = `${api.base}search?q=${query}&app_id=${api.id}&app_key=${api.key}`;
  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
  };
  //handlin sumbit button
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  //handling input text
  const handleText = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>Food Searching App</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Food"
          onChange={handleText}
          autoComplete="off"
          value={query}
        />
        <button type="sumbit" value="search">
          Search
        </button>
      </form>
      {/* show recipes div. conditional rendering. If the recipes array is not empty map the recipe and display it. */}
      <div className="recipes">
        {recipes !==[] &&
        recipes.map(recipe =>
          <h2>{recipe.recipe.label}</h2>
        )}
      </div>
    </div>
  );
};

export default App;
