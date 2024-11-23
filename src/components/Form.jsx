import React from "react";

import "./Form.css";

const Form = () => {
  const ingredientList = ["Tomato", "Onion", "Potato", "Carrot"];

  const ListItem = ingredientList.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ingredient = formData.get("ingredient");
    console.log(ingredient);
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
