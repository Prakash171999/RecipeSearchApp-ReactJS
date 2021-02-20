import React from 'react'

 const Recipe = (props) => {
       //grabbing the label, image, url and ingredients from recipes using destructuring.
       const {label, image, url, ingredients} = props.recipe.recipe;
       console.log(props.recipe.recipe);
      return (
            <div className="recipe">
                  <h2>{label}</h2>
                  <img src={image} alt={label} />
                  <a href={url} target="_blank" rel="noopenernoreferrer">
                        URL
                  </a>
                  <button>Ingredients</button>
            </div>
      )
}

export default Recipe;