import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addprod } from "../features/Crudslice";

function Add() {
  const [title, settitle] = useState("");
  const [value, setvalue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addproddd = (e) => {
    e.preventDefault();
    dispatch(addprod({ title, value }));
    navigate("/");
  
  }



  return (
    <div>
      <form action="" onSubmit={addproddd}>
        <input
          type="text"
          placeholder="title"
        
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="level"
        
          onChange={(e) => setvalue(e.target.value)}
        />
        <button type="submit">Sbmit</button>
      </form>
    </div>
  );
}

export default Add;
