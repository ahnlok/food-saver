import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm/ItemForm";

const Edit = () => {
    const history = useHistory();
    const { id } = useParams();

    const handleFormSubmit = (e, formObject) => {
        e.preventDefault();
        axios
            .put(`/api/inventory/${id}`, formObject)
            .then((response) => {
                console.log(response.data);
                history.push(`/restaurants/${response.data._id}`);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="container">
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