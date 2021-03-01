// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./containers/Home/Home";
// // import Login from "./containers/Login/Login";
// import Register from "./containers/Register/Register";
// import Main from "./containers/Main/Main";
// import Add from "./containers/Add/Add";
// import Edit from "./containers/Edit/Edit";
// import NavBar from "./components/Navbar/NavBar"


// function App() {
//   const [user, setUser] = useState({
//     _id: "",
//   });
 

//   return (
//     <div className="App">
//       <Router>
//         { <NavBar /> }
//         <Switch>
//           <Route exact path="/" component={Home} />
//           {/* <Route exact path="/login" component={(props) => <Login {...props} setUser={setUser} />} /> */}
//           <Route exact path="/register" component={Register} />
//           <Route exact path="/main" component={Main} />
//           <Route exact path="/main/new" component={Add} />
//           <Route exact path="/main/:id/edit" component={Edit} />
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState, useMemo, Fragment } from 'react' ;
import ItemTable from './tables/ItemTable';
import AddItemForm from './forms/AddItemForm';
import EditItemForm from './forms/EditItemForm';
import SearchItem from './forms/SearchItem';
// import { render } from 'react-dom';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import ToggleButton from '@material-ui/lab/ToggleButton';

// import axios from 'axios'
// import moment from 'moment'

// import ReactDOM from 'react-dom'


const App = () => {
  const itemsData = [
    { id: 1, name: 'Peanut Butter', category: 'pantry', expiration: "02-23-23" },
    { id: 2, name: 'Cola', category: 'fridge', expiration: "02-23-21" },
  ]


  const initialFormState = { id: null, name: '', category: '', expiration: ''}
  // Setting State
  const [items, setItems] = useState(itemsData)
  const [editing, setEditing] = useState(false)
  const [currentItem, setCurrentItem] = useState(initialFormState)

  // For Search State
  const [filter, setFilter] = useState('');

  const filteredData = useMemo(() => {
    if (filter === "") return itemsData;
    return itemsData.filter(
      (value)=>
        value.name.toLowerCase().includes(filter) ||
        value.category.toLowerCase().includes(filter) ||
        value.expiration.includes(filter)
    )
  }, [itemsData, filter]);
 
  
  // Adding items to the inventory
  const addItem = (item) => {
    item.id = items.length + 1
    setItems([...items, item])
  }

  // Deleting items from the inventory
  const deleteItem = (id) => {
    setEditing(false)
    setItems(items.filter(item => item.id !== id))
  }

  // Editing from the inventory
  const editRow = (item) => {
    setEditing(true)

    setCurrentItem({ id: item.id, name: item.name, category: item.category, expiration: item.expiration })
  }
  const updateItem = (id, updatedItem) => {
    setEditing(false)
    setItems(items.map(item => (item.id === id ? updatedItem : item)))
  }

  // Search
 
  return (
    <div className="container">
      <h1 className="center">The Food Saver</h1>
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

export default App;