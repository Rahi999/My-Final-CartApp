import React, { useContext } from 'react'
import {Link,NavLink} from "react-router-dom"
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
    const {auth,setAuth,logout,cart,name} = useContext(AuthContext)
    const length = JSON.parse(localStorage.getItem("cart"))

    const baseStyle = {
        color: "black",
        textDecoration: "none",
        margin: "auto"
      };
    
      const activeStyle = {
        color: "#c64b8a",
        margin: "auto"
      };

  return (<>    <div style={{
    display:"flex",
    gap:"2rem"
  }}>
      <NavLink   style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/">Home</NavLink>
      <NavLink   style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/about">About</NavLink>
      <NavLink   style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/products">Products</NavLink>
      <NavLink   style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/cart">Cart{" "}{length ? length.length : 0}</NavLink>
       <NavLink  style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/login"> Login</NavLink>
       <div><span>{name ? name : ""}</span><button onClick={logout} >{auth ? "Logout" : "Login"}</button></div>   
      </div>

  </>
  )
}

export default Navbar