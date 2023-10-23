import React, { useState, useEffect } from 'react';

function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // Retrieve favorite recipes from local storage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavoriteRecipes(savedFavorites);
  }, []);

  // Remove a recipe from favorites
  const removeFromFavorites = (recipeId) => {
    const updatedFavorites = favoriteRecipes.filter((recipe) => recipe.id !== recipeId);
    setFavoriteRecipes(updatedFavorites);
    // Update local storage
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id}>
            <span>{recipe.title}</span>
            <button onClick={() => removeFromFavorites(recipe.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
