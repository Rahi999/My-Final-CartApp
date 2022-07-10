import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom"

const Products = () => {

    const [data,setData] = useState([])

    useEffect(()=> {
       fetch(`http://localhost:8000/products`)
       .then((res)=> res.json())
       .then((res)=> setData(res))
       .catch((err)=> alert("Unable To Fetch Data From JSON server"))
       .finally(()=> console.log("Suuceed"))
    },[])
  return (
    <div style={{
        display:"grid", gridTemplateColumns:"repeat(3,1fr)"
    }}>{data.map((item)=> (
       <Link to={`/products/${item.id}`} >  
       <img width="100px" src={item.image} alt="" />
       <h3>{item.title}</h3>
       <h3>${item.price}</h3>
   </Link>
    ))}</div>
  )
}

export default Products