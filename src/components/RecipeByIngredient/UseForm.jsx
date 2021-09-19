import { useState } from "react";

export const useForm = (callback) => {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        event.persist();

        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        callback(values);
    };

    return { values, handleChange, handleSubmit };
};

export default useForm;
