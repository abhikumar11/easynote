import React, { useContext } from 'react'
import { store } from '../util/NoteContext'

const NewNote = () => {
  const { handleInput, handleSubmit, frmData } = useContext(store);
  return (
   <div className="max-w-md mx-auto mt-10 bg-white shadow-xl rounded-2xl p-6">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Create New Note</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        value={frmData.title}
        onChange={handleInput}
        placeholder="Enter title"
        required
        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note</label>
      <textarea
        id="note"
        name="note"
        value={frmData.note}
        rows={4}
        onChange={handleInput}
        placeholder="Write your note here..."
        required
        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
    </div>

    <div>
      <input
        type="submit"
        value="Save"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
      />
    </div>
  </form>
</div>


  )
}

export default NewNote