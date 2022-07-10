import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Cart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"))
  let sum = 0;
  if(cart){
    cart.map((plus)=> {
    return sum+= Number(plus.price)
  })
}else null
  return (
    <> <h3>{" "} <span>Items: {cart ? cart.length : 0}, And Total is: ${sum}</span></h3>
    <div style={{
      display:"grid", gridTemplateColumns:"repeat(3,1fr)"
    }}>{ cart ? cart.map((c)=> (
      <div key={c.id} >
        <img width="200px" src={c.image} alt="" />
        <h3>{c.title}</h3>
        <h3>${c.price}</h3>
      </div>
    )) : <h1>No Items in Cart</h1>}</div>
    </>
  )
}

export default Cart