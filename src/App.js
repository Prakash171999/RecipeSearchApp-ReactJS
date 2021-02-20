import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Helpers from "./Helpers";
import Recipe from "./Components/Recipe";
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
  //state to store the array of RecipesData from api
  const [recipeData, setRecipeData] = useState([]);

  //URL for fetching recipe api. Template literals are used. Fetching the data using axios with async and await
  const url = `${api.base}search?q=${query}&app_id=${api.id}&app_key=${api.key}`;
  const getData = async () => {
    const result = await Axios.get(url);
    setRecipeData(result.data.hits);
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
      <div className="jumbotron">
        <div className="container">
          <h1>Search Food Recipes</h1>
          <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search Food"
                onChange={handleText}
                autoComplete="off"
                value={query}
              />
            </form>
          </div>
        </div>
      </div>
      {/* show recipes div. conditional rendering. If the recipes array is not empty map the recipe and display it. */}
      <div className="recipes">
        {recipeData !== [] &&
          recipeData.map((recipes) => (
            <Recipe key={uuidv4()} recipe={recipes} />
          ))}
      </div>
    </div>
  );
};

export default App;
