import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const DisplaySearch = (props) => {
  const handleClick = (id) => {
    props.getRecipeInstructions(id);
  };

  const handleLikedRecipeClick = (likeInfo) => {
    props.likeRecipe(likeInfo);
  };

  return (
    <ListGroup horizontal>
      <ListGroupItem>
        {console.log(props.displaySearch)}
        {props.displaySearch.map((recipe, index) => {
          return (
            <div key={index} className="p-2 bd-highlight">
              {" "}
              Recipe: {recipe.title} <br></br>
              <img
                src={recipe.image}
                alt="img"
                onClick={() => handleClick(recipe.id)}
              />
              <button
                type="button"
                onClick={() => handleLikedRecipeClick(recipe)}
              >
                Favorite!
              </button>
            </div>
          );
        })}
      </ListGroupItem>
    </ListGroup>
  );
};

export default DisplaySearch;
