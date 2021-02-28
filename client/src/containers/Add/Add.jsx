import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import FoodForm from "../../components/FoodForm/FoodForm";

const Add = (props) => {
    // const history = useHistory();

    // const handleFormSubmit = (e, formObject) => {
    //     e.preventDefault();
    //     axios.post("/api/main", formObject)
    //         .then((response) => {
    //             console.log(response.data);
    //             history.push(`/main/${response.data_id}`);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    const initialAddFormState = { id: null, name: '', category: '', expiration: ''}
    const [item, setItem] = useState(initialAddFormState)

    const handleInputChange = (event) => {
        const { name, value } = event.target 

        setItem({ ...item, [name]: value })
    }

    return (
        <div className="container">
            <h1 className="center">Add New Item</h1>
            <div className="row">
                <FoodForm 
                    handleFormSubmit={handleInputChange}
                    buttonText="Add New Item"
                />
            </div>
        </div>
    )
}

export default Add;