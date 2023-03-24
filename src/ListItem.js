import React, { useContext, useEffect } from "react";
import { ItemContext } from "./App";
export const ListItem = () => {
  const { item, value, setValue, setItem, id, setId } = useContext(ItemContext);
  //......... || DELETE HANDLER ||..........

  // const deletehandler = (id, ind) => {
  //   let newArr = [...item];
  //   newArr.splice(ind, 1);
  //   setItem(newArr);
  // };
  const deletehandler = (id) => {
    let deleteData = item.filter((item) => {
      return item.id !== id;
    });
    setItem(deleteData);
  };
  //.......... || UPDATE HANDLER ||.........
  const editHandler = (list, id) => {
    setValue(list);
    setId(id);
  };

  return (
    <>
      <div>
        {item.map((list, ind) => {
          const { value, id } = list;
          return (
            <div key={ind}>
              <h1>{value}</h1>
              <button
                onClick={() => {
                  editHandler(value, id);
                }}
              >
                Edit
              </button>
              <button onClick={() => deletehandler(id, ind)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
