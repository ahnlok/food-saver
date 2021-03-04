import React, { useState, useEffect } from 'react'
import {DatePicker} from "@material-ui/pickers"

// import ItemForm from '../components/ItemForm/ItemForm';

const AddItemForm = (props) => {
    const initialFormState = { id: null, name: '', category: '', expiration: ''}
    const [item, setItem] = useState(initialFormState);


const handleDateChange = (event) => {
    setItem({ ...item, expiration: event })
    
}

    const handleInputChange = (event) => {
        const { name, value } = event.target 

        setItem({ ...item, [name]: value })
    }

    return (
        <form 
            onSubmit={(event) => {
                event.preventDefault()
                if (!item.name || !item.category || !item.expiration) return

                props.addItem(item)
                setItem(initialFormState)
            }}>
            <label>Item Name</label>
            <input
                type="text"
                name="name"
                value={item.name}
                onChange={handleInputChange}
            />
            <label>Category</label>
            <input
                type="text"
                name="category"
                value={item.category}
                onChange={handleInputChange}
            />
            <label>Expiration Date</label>
        {/*     <input
                type="text"
                name="expiration"
                className="datepicker"
                value={item.expiration}
                onChange={handleInputChange}
            /> */}
            <DatePicker value={item.expiration ? item.expiration : new Date()} onChange={handleDateChange} />
            <button>Add New Item</button>
        </form>
    )
}

export default AddItemForm;
