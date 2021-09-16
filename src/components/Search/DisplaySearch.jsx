import React, {useState, useEffect} from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const DisplaySearch = (props) => {    

    

    return ( 
        <ListGroup horizontal>
            
            <ListGroupItem>
            {console.log(props.displaySearch)}
            {props.displaySearch.map((recipe) => {
                return ( <div class="p-2 bd-highlight"> Recipe: {recipe.title} <br></br>
                        <img src={recipe.image} alt="img" />
                            
                            </div>
            )})}
                
            </ListGroupItem>
        </ListGroup>
     );
}
 
export default DisplaySearch;




/* <img src={video.snippet.thumbnails.default.url} alt="img"
    onClick ={() => handleClick(video.id.videoId)} /> </div>) */