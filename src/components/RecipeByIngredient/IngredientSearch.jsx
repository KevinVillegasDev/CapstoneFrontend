import React from "react";
import useForm from "../Search/UseForm";
import { Button } from "react-bootstrap";

const IngredientSearch = () => {
    const { values, handleChange, handleSubmit } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="ingredientOne"
                    value="{values}"
                    placeholder="Ingredient One"
                    onChange={handleChange}
                />{" "}
                <input
                    name="ingredientTwo"
                    value={values}
                    placeholder="Ingredient One"
                    onChange={handleChange}
                />{" "}
                <input
                    name="ingredientThree"
                    value={values}
                    placeholder="Ingredient One"
                    onChange={handleChange}
                />{" "}
                <input
                    name="ingredientFour"
                    value={values}
                    placeholder="Ingredient One"
                    onChange={handleChange}
                />{" "}
                <input
                    name="ingredientFive"
                    value={values}
                    placeholder="Ingredient One"
                    onChange={handleChange}
                />{" "}
                <Button type="submit" variant="secondary">
                    Search for Recipes!
                </Button>{" "}
            </form>
        </div>
    );
};

export default IngredientSearch;
