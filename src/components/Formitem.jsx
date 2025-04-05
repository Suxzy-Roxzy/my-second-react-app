import { useState } from "react";

const AddItemsForm = ({ additems }) => {
    const [data, setdata] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.trim()) return;
        additems(data);
        setdata("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-5 bg-white shadow-lg rounded-xl transition duration-300 hover:shadow-xl"
        >
            <input
                type="text"
                value={data}
                onChange={(e) => setdata(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Enter an item"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transform transition duration-200 ease-in-out"
            >
                Add Item
            </button>
        </form>
    );
};

export default AddItemsForm;
