import React, { useContext } from "react";
import uuid from "react-uuid";
import { ItemContext } from "./App";

export const Item = () => {
  const { value, setValue, item, setItem, id, setId } = useContext(ItemContext);
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
  const updateHandler = (id) => {
    const updateData = item.map((item) => {
      return item.id == id ? { value: value } : item;
    });
    setItem(updateData);
    setId("");
  };
  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter item Name"
      />
      {id ? (
        <button onClick={() => updateHandler(id)}>update</button>
      ) : (
        <button onClick={handleSubmit}>add</button>
      )}
    </form>
  );
};
