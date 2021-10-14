import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Profile = () => {
    const [likedRecipes, setLikedRecipes] = useState([]);

    useEffect(() => {
        makeRecipeRequest();
    }, []);

    const makeRecipeRequest = async () => {
        try {
            let response = await axios.get(`http://127.0.0.1:8000/recipes`);
            setLikedRecipes(response.data);
        } catch (ex) {}
    };

    return (
        <div id="pages">
            <h3>
                Below are your liked recipes. For more detailed instructions,
                enter recipe name in the search tab!
            </h3>

            <ListGroup horizontal id="boxborder">
                <br></br>

                <ListGroupItem>
                    {likedRecipes.map((recipe, index) => {
                        return (
                            <div key={index} id="pages">
                                {" "}
                                Recipe: {recipe.name}
                            </div>
                        );
                    })}
                </ListGroupItem>
            </ListGroup>
        </div>
    );
};

export default Profile;
