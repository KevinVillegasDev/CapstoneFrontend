import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

const DisplaySearch = (props) => {
    const handleClick = (id) => {
        props.getRecipeInstructions(id);
    };

    return (
        <ListGroup horizontal id="boxborder">
            <ListGroupItem>
                {console.log(props.displaySearch)}
                {props.displaySearch.map((recipe, index) => {
                    return (
                        <div key={index}>
                            {" "}
                            Recipe: {recipe.title} <br></br>
                            <img
                                id="imagesize"
                                src={recipe.image}
                                alt="img"
                                onClick={() => handleClick(recipe.id)}
                            />
                        </div>
                    );
                })}
            </ListGroupItem>
        </ListGroup>
    );
};

export default DisplaySearch;
