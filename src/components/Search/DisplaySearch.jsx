import React, {useState, useEffect} from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const DisplaySearch = (props) => {    

    
   const handleClick =(id) => {
        props.getRecipeInstructions(id)
    }


    return ( 
        <ListGroup horizontal>
            
            <ListGroupItem>
            {console.log(props.displaySearch)}
            {props.displaySearch.map((recipe, index) => {
                return (<div key={index} className="p-2 bd-highlight"> Recipe: {recipe.title} <br></br>
                        <img src={recipe.image} alt="img"
                        onClick ={() => handleClick(recipe.id)} />
                            
                        </div>
            )})}
            
            </ListGroupItem>
        </ListGroup>
     );
}
 
export default DisplaySearch;




/* <img src={video.snippet.thumbnails.default.url} alt="img"
    onClick ={() => handleClick(video.id.videoId)} /> </div>) */