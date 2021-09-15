import React from 'react';
import {useForm} from './UseForm'


const Search = (props) => {

    const {values, handleChange, handleSubmit} = useForm(props.makeSearch)

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input name="search" value={values.search} onChange={handleChange} />
                <button type="submit" value="Submit" placeholder="Recipe Search">Search</button>
            </form>
        </div>
     );
}
 
export default Search;