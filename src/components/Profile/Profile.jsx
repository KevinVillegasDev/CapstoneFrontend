import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import MakeSearch from "./MakeProfileRecipeSearch";

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
            <MakeSearch />
        </div>
    );
};

export default Profile;
