import React, { useContext, useEffect, useState } from 'react'
import {useParams,useNavigate} from "react-router-dom";
import { AuthContext } from '../context/AuthContext';


const ProdductsDetails = () => {
  const navigate = useNavigate()
  const params = useParams()
  const {click,setCartItem,CartItem,cartData} = useContext(AuthContext)

  const [data,setData] = useState({});

  useEffect(()=> {
   fetch(`http://localhost:8000/products/${params.id}`)
   .then((res)=> res.json())
   .then((res)=> {
    setData(res)
   })
   .catch((err)=> alert("Unbale to fetch Data from JSON server"))
   .finally(()=> console.log('Succeed'))
  },[])

  const handleOnCart =() => {
    click();
    cartData.push(data)
    localStorage.setItem("cart",JSON.stringify(cartData))
    navigate("/cart")
  }
  return (
    <div>
      <img width = "300px" src={data.image} alt="" />
      <h3>{data.title}</h3>
      <h1>${data.price}</h1>
      <button onClick={handleOnCart}>Add To Cart</button>
    </div>
  )
}

export default ProdductsDetails