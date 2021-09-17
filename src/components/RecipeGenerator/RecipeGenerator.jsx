import axios from "axios";
import React, {useState, useEffect} from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const RecipeGenerator = () => {
    const [generateRecipe, setGenerateRecipe] = useState([])

    useEffect(() => {
        makeGenerateRequest();
    }, []) 

    const makeGenerateRequest = async() => {
        try{
            let response = await axios.get(`https://api.spoonacular.com/recipes/random?&apiKey=d299386456af4cce8794dafca7cc4f14&number=1`)
            setGenerateRecipe(response.data.recipes)
            console.log(response.data.recipes)
        }
        catch(ex){

        }
    }
    
    const handleClick = () => {
        makeGenerateRequest();
    }
    
    return ( 
        <ListGroup horizontal>
            <ListGroupItem>
                {generateRecipe.map((recipe, index) => {
                    return (
                        <div key={index} className="p-2 bd-highlight"> Recipe: {recipe.title} <br></br>
                        <img src={recipe.image} alt="img" />
                        <button type="button" onClick ={() => handleClick(recipe)}>Generate!</button>
                    </div>
                       
                )})}
            </ListGroupItem>
        </ListGroup>
     );
}
 
export default RecipeGenerator;