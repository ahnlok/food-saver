import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


const Main = () => {
    const items = [
        {
            name: "Ketchup",
            category: "Fridge",
            expiration: "02-24-22",
        },
        {
            name: "White Bread",
            category: "Pantry",
            expiration: "03-22-21",
        },
    ]

    const [use, setUse] = useState([]);
    const [useItems, setUseItems] = useState([]);
    // const [name, setName] = useState("");
    // const [category, setCategory] = useState("");
    // const [expiration, setExpiration] = useState("");

    const history = useHistory();

    // useEffect(() => {
    //     axios
    //     .get("/api/main")
    //     .then((response) => {
    //         setFirsts(response.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }, []);

    // Use Function
    const handleUseClick = () => {
        const item = items;
        setUse((used) => {
            return [...used, item]
        })
    }
    
    // Delete
    const handleDeleteClick = (id) => {
        axios
            .delete(`/api/main/${id}`)
            .then((response) => {
                console.log(response.data);
                history.go(0);
            })
            .catch((err) => {
                console.log(err);
            });
    }   
    return (
        <div className= "container">
            <div className="row">
                <div className="col s12">
                    {/* Add new item */}
                    <Link
                        to="/main/new"
                        className="waves-effect waves-light btn"
                    >
                        Add New Item
                    </Link>
                </div>
            </div>
            {/* Current Inventory List */}
            <h2 className="current_item">Current Inventory</h2>
            {items.map((item) => (
                <li key={item.name} className="item_list">
                    Name: {item.name} - Category: {item.category} - Expiration Date: {item.expiration}
    {/* Please try to make the button's work, I commented out basic layouts for each buttons  */}
                    {/* Use Button */}
                    <button className="waves-effect waves-light btn"
                    onClick={handleUseClick}>USE</button>
                    {/* Edit Button */}
                    {/* <Link 
                        to={`/main/${main._id}/edit`}
                        className="waves-effect waves-light btn">
                    EDIT
                    </Link> */}
                    {/* Delete Button */}
                    <button
                        className="waves-effect waves-light btn"
                        onClick={() => {
                        handleDeleteClick(item._id);
                    }}
                    >
                    DELETE
                    </button>
                </li>
                ))}
    {/* Make sure the delete button is working properly */}
    {/* Make sure the data is populate propely inside "Use First Section", after you click "Use" button from "Inventory Section"  */}
        {/* Use First Items */}
        <div className="cold s6">
            <h2 className="use_first">Use First Items</h2>
            {use.map((useFood) => (
                <li key={useFood.name} className="first_list">
                    Name: {useFood.name} - Category: {useFood.category} - Expiration Date: {useFood.expiration}
                {/* Delete Button */}
                {/* <button
                    className="waves-effect waves-light btn"
                    onClick={() => {
                    handleDeleteClick(item._id);
                    }}
                    >
                    DELETE
                </button> */}
                </li>
            ))}
        </div>
    </div>
     
    
    )
}

export default Main
