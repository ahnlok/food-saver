import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FoodForm = (props) => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [expiration, setExpiration] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/inventory/${id}`)
        .then((response) => {
          console.log(response.data);
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
      {/* Name */}
      <div className="row">
        <div className="input-field col s12">
          <input
            id="name"
            type="text"
            className="validate"
            placeholder = "Item Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* <label htmlFor="name">Item Name</label> */}
        </div>
      </div>
      {/* Category */}
      <div className="row">
        <div className="input-field col s12">
          <input
            id="category"
            type="text"
            className="validate"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {/* <label htmlFor="category">Category</label> */}
        </div>
      </div>
      {/* Expiration */}
      <div className="row">
        <div className="input-field col s12">
          <input
            id="expiration"
            type="text"
            className="validate"
            placeholder="Expiration Date"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
          />
          {/* <label htmlFor="expiration">Expiration Date</label> */}
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <button className="waves-effect wave-light btn">
            {props.buttonText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FoodForm;
