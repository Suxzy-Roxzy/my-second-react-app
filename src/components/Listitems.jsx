import { IoCloseSharp } from "react-icons/io5";
const ListItem = ({ items, removeitem }) => {
  return (
    <ul className="space-y-3">
      {items && items.length ? (
        items.map((item, index) => (
          <li
            key={index}
            className="p-3 bg-gradient-to-r from-blue-900 to-blue-400 text-white font-bold text-lg rounded-lg shadow-md text-center"
          >
            {item}
            <IoCloseSharp
              onClick={() => {
                removeitem(index);
              }}
            />
          </li>
        ))
      ) : (
        <div className="text-white">No item found</div>
      )}
    </ul>
  );
};

export default ListItem;
