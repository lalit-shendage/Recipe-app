import React from 'react';

function RecipeList({ recipes, onRecipeSelect }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id} onClick={() => onRecipeSelect(recipe)}>
          {recipe.title}
        </li>
      ))}
    </ul>
  );
}

export default RecipeList;
