import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemForm = (props) => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [expiration, setExpiration] = useState("");

    useEffect(() => {
        if (id) {
            axios.get(`/api/inventory/${id}`)
            .then((response) => {
                setName(response.data.name);
                setCategory(response.data.category);
                setExpiration(response.data.expiration);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, [id]);

    return (
        <form
            className="col s12"
            onSubmit={(e) => {
                props.handleFormSubmit(e, {
                    name,
                    category,
                    expiration,
                });
            }}
        >
            {/* Item Name */}
            <div className="row">
                <div className="input-field col s12">
                    <input  
                        id="name"
                        type="text"
                        className="item"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="name">Item Name</label>
                </div>
            </div>
            {/* Category */}
            <div className="row">
                <div className="input-field col s4">
                    <input
                        id="category"
                        type="text"
                        className="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <label htmlFor="category">Category</label>
                </div>
            </div>
            {/* Expiration Date  */}
            <div className="row">
                <div className="input-field col s4">
                    <input  
                        id="expiration"
                        type="text"
                        className="expiration"
                        value={expiration}
                        onChange={(e) => setExpiration(e.target.value)}
                    />
                    <label htmlFor="expiration">Expiration Date</label>
                </div>
            </div>
            {/* Button */}
            <div className="row">
                <div className="col s12">
                    <button className="waves-effect waves-light btn">
                        {props.buttonText}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ItemForm;