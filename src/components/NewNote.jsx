import { useContext } from "react";
import { store } from "../util/NoteContext";

const NewNote = () => {
  const { frmData, handleInput, handleSubmit, editId } = useContext(store);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        {editId ? "Edit Note" : "Add New Note"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        <input
          name="title"
          value={frmData.title}
          onChange={handleInput}
          placeholder="Note Title"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="note"
          value={frmData.note}
          onChange={handleInput}
          placeholder="Write your note here..."
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition hover:cursor-pointer"
        >
          {editId ? "Update Note" : "Save Note"}
        </button>
      </form>
    </div>
  );
};

export default NewNote;
