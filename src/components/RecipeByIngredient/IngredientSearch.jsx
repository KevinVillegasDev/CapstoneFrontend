import React, { useState, useEffect } from "react";
import useForm from "./UseForm";
import { Button } from "react-bootstrap";
import axios from "axios";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const IngredientSearch = () => {
    const { values, handleChange, handleSubmit } = useForm(
        makeIngredientRequest
    );
    const [ingredientRecipes, setIngredientRecipes] = useState([]);

    useEffect(() => {
        makeIngredientRequest();
    }, []);

    async function makeIngredientRequest() {
        let url = `https://api.spoonacular.com/recipes/findByIngredients?number=3&apiKey=d299386456af4cce8794dafca7cc4f14&ingredients=${values.ingredientOne},+${values.ingredientTwo},+${values.ingredientThree},+${values.ingredientFour},+${values.ingredientFive}`;

        try {
            let response = await axios.get(url);
            console.log(response.data);
            setIngredientRecipes(response.data);
        } catch (ex) {}
    }

    const handleClick = () => {
        makeIngredientRequest();
    };

    return (
        <div>
            <h3>Enter your pantry/fridge ingredients here!</h3>
            <form onSubmit={handleSubmit}>
                <input
                    name="ingredientOne"
                    value={values.ingredientOne}
                    placeholder="Ingredient One"
                    onChange={handleChange}
                />{" "}
                <input
                    name="ingredientTwo"
                    value={values.ingredientTwo}
                    placeholder="Ingredient Two"
                    onChange={handleChange}
                />{" "}
                <input
                    name="ingredientThree"
                    value={values.ingredientThree}
                    placeholder="Ingredient Three"
                    onChange={handleChange}
                />{" "}
                <input
                    name="ingredientFour"
                    value={values.ingredientFour}
                    placeholder="Ingredient Four"
                    onChange={handleChange}
                />{" "}
                <input
                    name="ingredientFive"
                    value={values.ingredientFive}
                    placeholder="Ingredient Five"
                    onChange={handleChange}
                />{" "}
                <Button
                    type="submit"
                    variant="secondary"
                    onClick={() => handleClick()}
                >
                    Search for Recipes!
                </Button>{" "}
            </form>
            <ListGroup horizontal>
                <ListGroupItem>
                    {ingredientRecipes.map((recipe, index) => {
                        return (
                            <div key={index} className="p-2 bd-highlight">
                                {" "}
                                Recipe: {recipe.title} <br></br>
                                <img src={recipe.image} alt="img" /> <br></br>
                            </div>
                        );
                    })}
                </ListGroupItem>
            </ListGroup>
        </div>
    );
};

export default IngredientSearch;
