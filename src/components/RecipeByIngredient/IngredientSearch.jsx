import React from "react";
import useForm from "../Search/UseForm";
import { Button } from "react-bootstrap";

const IngredientSearch = () => {
  const { values, handleChange, handleSubmit } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="search" value={values.search} onChange={handleChange} />{" "}
        <Button type="submit" variant="secondary">
          Search
        </Button>{" "}
      </form>
    </div>
  );
};

export default IngredientSearch;
