import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplaySearch from './DisplaySearch';
import SearchBar from './SearchBar'

const MakeSearch = () => {
    const [searchResults, setSearchResults] = useState([])

    
    useEffect(() => {
        makeGetRequest();

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
    

    
    
    return ( 
        <div>
            <SearchBar makeSearch = {makeGetRequest} />
            <DisplaySearch displaySearch = {searchResults} />
        </div>
     );
}
 
export default MakeSearch;