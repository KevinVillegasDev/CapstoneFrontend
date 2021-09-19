import React from "react";

const RecipePrinter = (props) => {
  return (
    <ul>
      {props.showRecipeInstructions ? (
        props.showRecipeInstructions.map((steps, index) => {
          return (
            <li key={index}>
              {" "}
              {steps.number} {steps.step}
              <ul>
                {steps.ingredients.map((ingredient, index) => (
                  <li key={index}>Ingredients: {ingredient.name}</li>
                ))}
              </ul>
              <ul>
                {steps.equipment.map((piece, index) => (
                  <li key={index}> Equipment: {piece.name}</li>
                ))}
              </ul>
            </li>
          );
        })
      ) : (
        <h2>No Recipes Yet!</h2>
      )}
    </ul>
  );
};

export default RecipePrinter;
