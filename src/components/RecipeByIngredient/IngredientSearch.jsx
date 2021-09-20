import React, { useState, useEffect } from "react";
import useForm from "./UseForm";
import { Button } from "react-bootstrap";
import axios from "axios";
import { ListGroup, ListGroupItem, Form } from "react-bootstrap";

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
            <h3>
                Enter your pantry/fridge ingredients here and quickly find{" "}
                <br></br>
                recipes you can create with those ingredients.
            </h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <input
                        name="ingredientOne"
                        value={values.ingredientOne}
                        placeholder="Ingredient One"
                        onChange={handleChange}
                    />
                </Form.Group>{" "}
                <Form.Group className="mb-3">
                    <input
                        name="ingredientTwo"
                        value={values.ingredientTwo}
                        placeholder="Ingredient Two"
                        onChange={handleChange}
                    />
                </Form.Group>{" "}
                <Form.Group className="mb-3">
                    <input
                        name="ingredientThree"
                        value={values.ingredientThree}
                        placeholder="Ingredient Three"
                        onChange={handleChange}
                    />
                </Form.Group>{" "}
                <Form.Group className="mb-3">
                    <input
                        name="ingredientFour"
                        value={values.ingredientFour}
                        placeholder="Ingredient Four"
                        onChange={handleChange}
                    />{" "}
                </Form.Group>{" "}
                <Form.Group className="mb-3">
                    <input
                        name="ingredientFive"
                        value={values.ingredientFive}
                        placeholder="Ingredient Five"
                        onChange={handleChange}
                    />
                </Form.Group>{" "}
                <Button
                    type="submit"
                    variant="primary"
                    onClick={() => handleClick()}
                >
                    Search for Recipes!
                </Button>{" "}
            </Form>
            <ListGroup horizontal>
                <ListGroupItem>
                    {ingredientRecipes.map((recipe, index) => {
                        return (
                            <div key={index} id="pages">
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
