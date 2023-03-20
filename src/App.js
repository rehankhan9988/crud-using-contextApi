import { createContext, useEffect, useState } from "react";
import { Item } from "./Item";
import { ListItem } from "./ListItem";
export const ItemContext = createContext();
const App = () => {
  let init;
  if (localStorage.getItem("listdata") === null) {
    init = [];
  } else {
    init = JSON.parse(localStorage.getItem("listdata"));
  }
  const [item, setItem] = useState(init);
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  // const Provider = (props) => {
  //   const [item, setItem] = useState(init);
  //   const [value, setValue] = useState("");
  //   const [id, setId] = useState("");
  //   const state = [value, setValue, item, setItem, id, setId];
  //   return <ItemContext.Provider value={state} {...props} />;
  // };
  useEffect(() => {
    localStorage.setItem("listdata", JSON.stringify(item));
  }, [item]);
  return (
    <ItemContext.Provider value={{ item, setItem, value, setValue, id, setId }}>
      <Item />
      <ListItem />
    </ItemContext.Provider>
  );
};

export default App;
