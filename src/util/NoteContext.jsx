import { createContext, useState } from "react";

export const store=createContext();

export const NoteProvider=({children})=>{
    const [frmData,setFrmData]=useState({});

    const handleInput=(e)=>{
            const {name,value}=e.target;
            setFrmData({...frmData,[name]: value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       const exist= JSON.parse(localStorage.getItem("notes"))||[];
       let count=exist.length==0?1:exist.length+1;
       const data=[...exist,{id:count,...frmData}];
       localStorage.setItem("notes",JSON.stringify(data));
       setFrmData({});
    }
    const handleDelete=()=>{

    }
    return(
        <store.Provider value={{handleInput,handleSubmit,handleDelete}}>
            {children}
        </store.Provider>
    );
}
