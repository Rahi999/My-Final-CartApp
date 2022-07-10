import React, { useContext } from 'react'
import {Routes,Route} from "react-router-dom"
import About from './About'
import Cart from './Cart'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import ProductsDetails from './ProductsDetails'
import PrivateRoute from '../Components/PrivateRoute'
import { AuthContext } from '../context/AuthContext'

const AllRoutes = () => {

    const {auth} = useContext(AuthContext)
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/products" element={auth ? <Products /> : <Login />} />
        <Route path={"/products/:id"} element={<ProductsDetails />} />
        <Route path="/cart" element={auth ? <Cart /> : <Login />} />
        <Route path="/login" element={<Login />} />

      </Routes> 

    )
}

export default AllRoutes