import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplaySearch from "./DisplayProfileSearch";
import SearchBar from "./ProfileSearchBar";
import RecipePrinter from "./RecipePrinterProfile";
// import jwtDecode from "jwt-decode";

const MakeSearch = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [recipeInstructions, setRecipeInstructions] = useState("");

    useEffect(() => {
        makeGetRequest();
        getRecipeInstructions();
    }, []);

    const makeGetRequest = async (values) => {
        console.log(values);
        try {
            let response = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=d299386456af4cce8794dafca7cc4f14&query=${values}`
            );
            setSearchResults(response.data.results);
            console.log(response.data.results);
        } catch (ex) {
            console.log(ex);
        }
    };

    const getRecipeInstructions = async (id) => {
        try {
            let response = await axios.get(
                `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=d299386456af4cce8794dafca7cc4f14`
            );
            setRecipeInstructions(response.data[0].steps);
            console.log(response.data[0].steps);
        } catch (ex) {}
    };

    return (
        <div id="pages">
            <h2>
                Above are your liked recipes. Enter your desired recipe in the
                search bar to bring up detailed instructions!
            </h2>
            <SearchBar makeSearch={makeGetRequest} />
            <RecipePrinter showRecipeInstructions={recipeInstructions} />
            <DisplaySearch
                displaySearch={searchResults}
                getRecipeInstructions={getRecipeInstructions}
            />
        </div>
    );
};

export default MakeSearch;
