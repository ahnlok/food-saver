import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ItemForm from "../../components/FoodForm/FoodForm";

const Add = () => {
    const history = useHistory();

    const handleFormSubmit = (e, formObject) => {
        e.preventDefault();
        axios
            .post("/api/main", formObject)
            .then((response) => {
                console.log(response.data);
                history.push(`/main/${response.data_id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <h1 className="center">Add New Item</h1>
            <div className="row">
                <ItemForm 
                    handleFormSubmit={handleFormSubmit}
                    buttonText="Add New Item"
                />
            </div>
        </div>
    )
}

export default Add;