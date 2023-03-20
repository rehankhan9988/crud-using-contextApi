import React, { useContext } from "react";
import uuid from "react-uuid";
import { ItemContext } from "./App";

export const Item = () => {
  const { value, setValue, item, setItem } = useContext(ItemContext);
  //......... || SUBMIT HANDLER ||.........
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Please fill the input");
    } else {
      let addObj = {
        value: value,

        id: uuid(),
      };

      setItem([...item, addObj]);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter item Name"
      />

      <button type="submit">add</button>
    </form>
  );
};
