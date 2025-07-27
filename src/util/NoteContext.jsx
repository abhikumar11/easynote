import { createContext, useEffect, useState } from "react";

export const store = createContext();

export const NoteProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [frmData, setFrmData] = useState({ title: "", note: "" });

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
    const newNote = { id: Date.now(), ...frmData, pinned: false };
    setData((prev) => [...prev, newNote]);
    setFrmData({ title: "", note: "" });
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

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
      }}
    >
      {children}
    </store.Provider>
  );
};
