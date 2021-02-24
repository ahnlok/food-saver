import React from "react";
import {Link} from "react-router-dom";
import API from "../../utils/API";
import { useState, useEffect} from "react"

const items = [
    {
        name: eggs,
        category: fridge,
        expiration: 022821,
},

    {
        name: bacon,
        category: fridge,
        expiration: 022521
    }
]

const Landing = () => {

    const [inventory, setInventory] = useState([])
    const [items, setItems] = useState([])
    
    // Function to save items to the Use first list
        const saveInventory = (items) => {
            setInventory((oldInventory) => {

                return [...oldInventory, items]
            })
        }
        
    return (
        <div>
            <h1>${firstName}'s Food Inventory</h1>
            <button>Add Item</button>
            <h2>Current Items:</h2>
            {items.map((item) => (
                <li key={item.name}>
                    Name: {item.name} Category: {item.category} Expiration Date: {item.expiration}
                </li>
            ))}

            <h2>Use First Items:</h2>
            {inventory.map((inventoryList) => (
                <li key={inventoryList.name}>
                    Name: {inventoryList.name} Category: {inventoryList.category} Expiration Date: {inventoryList.expiration} 
                </li>
            <button>Save</button>
            ))} 
        </div>
    );
};

export default Landing;