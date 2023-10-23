import React from 'react';
import RecipeDetails from '../components/RecipeDetails';

function RecipeDetailsPage({ selectedRecipe }) {
  return (
    <div>
      <h1>Recipe Details</h1>
      {selectedRecipe ? <RecipeDetails recipe={selectedRecipe} /> : <p>Select a recipe to view details.</p>}
    </div>
  );
}

export default RecipeDetailsPage;
