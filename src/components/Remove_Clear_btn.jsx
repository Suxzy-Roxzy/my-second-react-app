// import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const RemoveClearbtn = ({ items, setitems }) => {
  if (items?.length === 0) return null;
  return (
    <AnimatePresence>
      {items?.length > 0 && (
        <motion.button
          key="clear-btn"
          onClick={() => setitems([])}
          className="bg-red-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg 
                     hover:bg-red-700 active:scale-95 transform transition duration-200 ease-in-out"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          🗑️ Clear All
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default RemoveClearbtn;
