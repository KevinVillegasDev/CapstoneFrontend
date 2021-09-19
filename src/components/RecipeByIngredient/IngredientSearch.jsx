import React from "react";
import useForm from "./UseForm";
import { Button } from "react-bootstrap";
import axios from "axios";

const IngredientSearch = () => {
    const { values, handleChange, handleSubmit } = useForm();

    const makeIngredientRequest = async () => {
        try {
            let response = await axios.get(
                `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${values}&number=2`
            );
            console.log(response.data);
        } catch (ex) {}
    };

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
        </div>
    );
};

export default IngredientSearch;
