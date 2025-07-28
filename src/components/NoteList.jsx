import { useContext } from "react";
import { store } from "../util/NoteContext";
import { FaEdit, FaTrash, FaThumbtack } from "react-icons/fa";

const NoteList = () => {
  const { data, handleDelete, handleEdit, handlePin } = useContext(store);
  const sortedNotes = [...data].sort((a, b) => b.pinned - a.pinned);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      {sortedNotes.length === 0 ? (
        <div className="text-center text-gray-600 text-xl mt-20">
          <p>No notes found.</p>
          <p className="text-blue-600 mt-2 font-semibold">Click the <span className="text-green-500">+</span> button to create a new note!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedNotes.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition relative"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <div className="flex space-x-3 text-lg">
                  <button className="hover:cursor-pointer"
                    onClick={() => handlePin(item.id)}
                    title={item.pinned ? "Unpin" : "Pin"}
                  >
                    <FaThumbtack
                      className={`transition ${
                        item.pinned
                          ? "text-yellow-600 rotate-45"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-600 hover:cursor-pointer"
                    title="Edit"
                    onClick={() => handleEdit(item.id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-600 hover:cursor-pointer"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 mt-3 whitespace-pre-wrap">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;
