import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { productselect, updateprod } from "../features/Crudslice";

function Edit() {
  
  const [title, settitle] = useState("")
  const [value, setvalue] = useState("")
  const dispatch = useDispatch();
  const {id} = useParams();
  const navogate = useNavigate()


  const prod = useSelector((state) => productselect.selectById(state, id))
  
  useEffect(() => {
    
    if(prod) {
      settitle(prod.title)
      setvalue(prod.value)
    }

  }, [prod])
  
  const edit = async(e) => {
    e.preventDefault()
    await dispatch(updateprod({id, title, value}))
    navogate("/")
  }  

  return (
    <div>
   
      <form action="" onSubmit={edit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="level"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <button type="submit">Sbmit</button>
      </form>
    </div>
  );
}

export default Edit;
