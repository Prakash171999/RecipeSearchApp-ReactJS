import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = (props) => {
  const [showIngredients, setShowIngredients] = useState(false);
  //grabbing the label, image, url and ingredients from recipes using destructuring.
  const { label, image, url, ingredients } = props.recipe.recipe;
  console.log(props.recipe.recipe);
  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank">
        URL
      </a>
      <button onClick={() => setShowIngredients(!showIngredients)}>
        Ingredients
      </button>
      {showIngredients && <RecipeDetails ingredient={ingredients} />}
    </div>
  );
};

export default Recipe;
