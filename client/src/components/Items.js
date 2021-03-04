import React, { useState, useMemo, Fragment, useContext, useEffect } from 'react' ;
import ItemTable from '../tables/ItemTable';
import AddItemForm from '../forms/AddItemForm';
import EditItemForm from '../forms/EditItemForm';
import SearchItem from '../forms/SearchItem';
import DateTime from '../forms/DateTime';
// import alanBtn from '@alan-ai/alan-sdk-web';

// import Welcome from  '../forms/Welcome';

import CredentialsContext from '../util/Test';

const Items = () => {

const userId = sessionStorage.getItem("id");
const {id, username, password} = useContext(CredentialsContext);
console.log(id);

const itemsData = [
    { id: 1, name: 'Peanut Butter', category: 'pantry', expiration: "02-23-23" },
    { id: 2, name: 'Cola', category: 'fridge', expiration: "02-23-21" },
  ]


  const initialFormState = { id: null, name: '', category: '', expiration: ''}
  // Setting State
  const [items, setItems] = useState(itemsData)
  const [editing, setEditing] = useState(false)
  const [currentItem, setCurrentItem] = useState(initialFormState)
  // const [credentials] = useContext(CredentialsContext)

  // For Search State
  const [filter, setFilter] = useState('');

  const filteredData = useMemo(() => {
    if (!filter) return items;
    console.log("Didn't return items.");
    return items.filter(
      (value)=>
        value.name.toLowerCase().includes(filter) ||
        value.category.toLowerCase().includes(filter) ||
        value.expiration.includes(filter)
    )
  }, [items, filter]);
  

const getItems = () => {
  fetch(`/api/users/${userId}/items`, {
    method: "GET",
    headers: {
        "Content-Type": 'application/json',
        Authorization: `Basic ${username}:${password}`,
    },
})
.then((response) => response.json())
.then((items) => setItems(items));
}


  const postItem = (newItems) => {
    fetch(`/api/users/${userId}/items`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${username}:${password}`,
        },
            body: JSON.stringify(newItems),
        }).then(() => {getItems()});
    };

    useEffect(() => {
      getItems();
      }, []);
   
  // Adding items to the inventory
  const addItem = (item) => {
    /* item.id = items.length + 1
    setItems([...items, item]) */
    postItem(item);
  }

  // Deleting items from the inventory
  const deleteItem = (id) => {
    setEditing(false)
    /* setItems(items.filter(item => item.id !== id)) */
    fetch(`/api/foods/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": 'application/json',
          Authorization: `Basic ${username}:${password}`,
      },
  })
  .then((response) => response.json())
  .then((items) => getItems());
  }

  // Editing from the inventory
  const editRow = (item) => {
    setEditing(true)

    setCurrentItem({ id: item._id, name: item.name, category: item.category, expiration: item.expiration })
  }
  const updateItem = (id, updatedItem) => {
    setEditing(false)
    console.log(id);
    fetch(`api/foods/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${username}:${password}`,
        },
          body: JSON.stringify(updatedItem),
      }).then((response) => response.json())
      .then((items) => getItems());
    
    /* setItems(items.map(item => (item.id === id ? updatedItem : item))) */
  }


  return (
    <div className="container">
      <h1 className="center">Add, view, edit, or delete your food items!</h1>
      
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit Item</h2>
              <EditItemForm
                editing={editing}
                setEditing={setEditing}
                currentItem={currentItem}
                updateItem={updateItem}
              />
          </Fragment>
          ) : (
          <Fragment>
            <h2>Add Item</h2>
            <AddItemForm addItem={addItem} />
          </Fragment>
        )}
      </div>
        <div className="flex-large">
          <h2>View Inventory</h2>
          <SearchItem onSearch={(searchTerm) => setFilter(searchTerm)} />
          <ItemTable items={filteredData} editRow={editRow} deleteItem={deleteItem}/> 
        </div>
      </div>
    </div>
  )
}

export default Items;