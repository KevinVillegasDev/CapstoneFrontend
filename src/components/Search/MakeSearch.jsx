import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplaySearch from './DisplaySearch';
import SearchBar from './SearchBar'
import RecipePrinter from './RecipePrinter'


const MakeSearch = () => {
    const [searchResults, setSearchResults] = useState([])
    const [recipeInstructions, setRecipeInstructions] = useState('')
    

    
    useEffect(() => {
        makeGetRequest();
        getRecipeInstructions();
    }, [])
    
    const makeGetRequest = async(values) => {
        console.log(values)
        try{
            let response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d299386456af4cce8794dafca7cc4f14&query=${values}`);
            setSearchResults(response.data.results)
            console.log(response.data.results)
        }
        catch (ex){
            console.log(ex)
        }
    }
    
    const getRecipeInstructions = async(id) => {
        try {
            let response = await axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=d299386456af4cce8794dafca7cc4f14`);
            setRecipeInstructions(response.data[0].steps)
            console.log(response.data[0].steps)
        }
        catch(ex){

        }
    }

    const likeRecipe = async(likedRecipe) => {
        let newRecipe ={
            name: '',
            instructions: ''             
            
        }
        try {
            let response = await axios.post(`http://127.0.0.1:8000/recipes`, newRecipe)
            console.log(response.data)
        }
        catch(ex) {
            
        }
        let savedRecipe ={
            name: '',
            recipeId: ''
        }
        try{
            let response = await axios.post(`http://127.0.0.1:8000/likedrecipes`, savedRecipe)
            console.log(response.data)
        }
        catch(ex){

        }

    }
    
    return ( 
        <div>
            <SearchBar makeSearch = {makeGetRequest} />
            <RecipePrinter showRecipeInstructions={recipeInstructions} />
            <DisplaySearch displaySearch = {searchResults} getRecipeInstructions={getRecipeInstructions} likeRecipe={likeRecipe}  />
        </div>
     );
}
 
export default MakeSearch;