import { useState } from "react";
import Remove_Clear_btn from "./components/Remove_Clear_btn";
import ListItem from "./components/Listitems";
import AddItemsForm from "./components/Formitem";

// PARENT COMPONENT
const App = () => {
  const [items, setitems] = useState([]);

  // const filteritems = useMemo(() => {
  //   items?.filter((item, index) => {
  //     index == (index % 2 !== 0);
  //   });
  // }, [items]);

  const additems = (listItem) => {
    setitems([...items, listItem]);
  };

  const removeItem = (indexofitem) => {
    const updatedlist = items.filter((item, index) => {
      return index !== indexofitem;
    });
    setitems(updatedlist);
  };

  // const removeItem = (indexOfItem) => {
  //   const updatedList = items.filter((item, index) => index !== indexOfItem);
  //   setitems(updatedList);
  // };

  
  
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#1B2A4E]">
      <div className="flex flex-col w-full max-w-lg items-center gap-6 rounded-xl bg-white p-6 shadow-xl border border-gray-700 text-gray-900">
        <AddItemsForm additems={additems} />

        {/* List with Gradient Background */}
        <div className="w-full p-4 rounded-lg shadow-md bg-gradient-to-r from-[#1B2A4E] to-[#87CEEB]">
          <ListItem items={items} removeitem={removeItem} />
        </div>

        <Remove_Clear_btn items={items} setitems={setitems} />
      </div>
    </div>
  );
};

export default App;
