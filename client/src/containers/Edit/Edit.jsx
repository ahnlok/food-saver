import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import ItemForm from "../../components/FoodForm/FoodForm";

const Edit = () => {
    const history = useHistory();
    const { id } = useParams();

    const handleFormSubmit = (e, formObject) => {
        e.preventDefault();
        axios
            .put(`/api/main/${id}`, formObject)
            .then((response) => {
                console.log(response.data);
                history.push(`/main/${response.data._id}`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <h1 className="center">Edit Item</h1>
            <div className="row">
                <ItemForm
                    handleFormSubmit={handleFormSubmit}
                    buttonText="Update"
                />
            </div>
        </div>
    )
}

export default Edit;