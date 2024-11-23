import React, { useState } from "react";

import "./Form.css";

const Form = () => {
  const [ingredientList, setingredientList] = useState([
    "salt",
    "sugar",
    "water",
  ]);

  const ListItem = ingredientList.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ingredient = formData.get("ingredient");
    setingredientList([...ingredientList, ingredient]);

    e.currentTarget.reset();
  };
  return (
    <div>
      <div id="formDiv">
        <form onSubmit={submitForm}>
          <input type="text" placeholder="Enter Ingredient" name="ingredient" />
          <button>Add Ingredient</button>
        </form>
      </div>
      <ul>{ListItem}</ul>
    </div>
  );
};

export default Form;
