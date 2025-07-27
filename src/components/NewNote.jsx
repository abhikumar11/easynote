import React, { useContext } from 'react'
import { store } from '../util/NoteContext'

const NewNote = () => {
    const {handleInput,handleSubmit}=useContext(store);
  return (
    <div>
        <h2>Create New Note</h2>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' name='title' onChange={handleInput}/>
            <label>Note</label>
           <textarea name='note' rows={2} onChange={handleInput}>Write note</textarea>
           <input type='submit' value="Save"/>
        </form>
    </div>
  )
}

export default NewNote