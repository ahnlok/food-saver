import React from 'react'

const ItemTable = (props) => (

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Expiration Date</th>
      </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map((item) => (
          <tr key={item._id}>
            {console.log(item._id)}
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.expiration}</td>
            <td>
              <button className="button muted-button">Use</button>
              {/* Edit Button */}
              <button 
                onClick={() => {
                    props.editRow(item)}}
              className="button muted-button">Edit</button>
              {/* DELETE Button */}
              <button 
                onClick={() => props.deleteItem(item.id)}
                className="button muted-button">
                Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Items</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ItemTable