import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteprod, getprod, productselect } from '../features/Crudslice'

function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getprod()) 
  }, [dispatch])
  
  const produt = useSelector(productselect.selectAll)


  return (
    <div style={{display: 'flex', justifyContent: "center"}}>
      <Link to='add'>Add</Link>
        <div style={{width:'80%'}}>
            {produt.map((item, i) => (
              <div key={item.id} style={{display: 'flex'}}>
                  <h6>{item.title}</h6>
                  <p>{item.value}</p>
                  <Link to={`edit/${item.id}`}>Edit</Link>
                  <button onClick={() => dispatch(deleteprod(item.id))}>Delete</button>
              </div>
            ))}
        </div>    
    </div>
  )
}

export default Home