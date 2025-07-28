import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const store = createContext();

export const NoteProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [frmData, setFrmData] = useState({ title: "", note: "" });
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    setData(notes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(data));
  }, [data]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFrmData({ ...frmData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(editId){
      const updated=data.map((item)=>item.id===editId?{...item,...frmData}:item);
      localStorage.setItem("notes",JSON.stringify(updated));
      setData(updated);
      setEditId(null);
    }
    else{
      const existing = [...data];
      const id = existing.length > 0 ? existing[existing.length - 1].id + 1 : 1;
      const newNote = { id, ...frmData, pinned: false };
      const updated = [...existing, newNote];
      localStorage.setItem("notes", JSON.stringify(updated));
      setData(updated);
    }
    setFrmData({ title:"",note:""});
  };
  const handleDelete = (id) => {
    setData((prev)=>prev.filter((item)=>item.id!==id));
  };
  const handleEdit=(id)=>{
      const temp=data.find((item)=>item.id===id);
      if (temp) {
      setFrmData({title:temp.title, note: temp.note });
      setEditId(id);
      navigate("/newnote");
    }
  }
  const handlePin = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
      )
    );
  };

  return (
    <store.Provider
      value={{
        frmData,
        data,
        handleInput,
        handleSubmit,
        handleDelete,
        handlePin,
        handleEdit,
        editId
      }}
    >
      {children}
    </store.Provider>
  );
};
