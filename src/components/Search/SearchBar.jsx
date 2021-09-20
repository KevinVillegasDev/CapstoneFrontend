import React from "react";
import { useForm } from "./UseForm";
import { Button, Form } from "react-bootstrap";

const Search = (props) => {
    const { values, handleChange, handleSubmit } = useForm(props.makeSearch);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formSearch">
                    <Form.Label>Search</Form.Label>
                    <input
                        name="search"
                        value={values.search}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Search
                </Button>{" "}
            </Form>
        </div>
    );
};

export default Search;
