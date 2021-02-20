import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Helpers from "./Helpers";
import Recipe from "./Components/Recipe";
import Alert from "./Components/Alert";
import Axios from "axios";

//variable that imports the key, id and base from helpers
const api = {
  key: Helpers.APP_KEY,
  id: Helpers.APP_ID,
  base: Helpers.BASE_URL,
};

const App = () => {
  const [query, setQuery] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [alert, setAlert] = useState("");

  //URL for fetching recipe api. Template literals are used. Fetching the data using axios with async and await
  const url = `${api.base}search?q=${query}&app_id=${api.id}&app_key=${api.key}`;
  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name!");
      }
      setRecipeData(result.data.hits);
      console.log(result);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the search box!");
      console.log(alert);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleText = (e) => setQuery(e.target.value);

  return (
    <div className="bg">
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
            {alert !== "" && <Alert alertMsg={alert} />}
          </div>
        </div>
      </div>
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
