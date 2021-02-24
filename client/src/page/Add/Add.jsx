import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ItemForm from "../../components/ItemForm/ItemForm";

const AddItem = () => {
    const history = useHistory();

    const handleFormSubmit = (e, formObject) => {
        e.preventDefault();
        
        axios.post("/api/inventory", formObject)
        .then((response) => {
            history.push(`/inventory/${response.data._id}`);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="container">
            <div className="row">
                <ItemForm 
                    handleFormSubmit={handleFormSubmit} 
                    buttonText="Add Item"
                />
            </div>
        </div>
    )
}

export default AddItem;

