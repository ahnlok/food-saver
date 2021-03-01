import React, { useState, useEffect } from 'react' 

const EditItemForm = props => {
    const [ item, setItem ] = useState(props.currentItem)
    // Tell React to skip applying an effect if certain values haven't changed between re-renders
    useEffect(
        () => {
            setItem(props.currentItem)
        },
        [ props ]
    )

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setItem({ ...item, [name]: value })
    }

    return (
        <form 
            onSubmit={(event) => {
                event.preventDefault()

                props.updateItem(item.id, item)
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
            <input
                type="text"
                name="expiration"
                value={item.expiration}
                onChange={handleInputChange}
            />
            <button>Update Item</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
                >Cancel</button>
        </form>
    )
}

export default EditItemForm;