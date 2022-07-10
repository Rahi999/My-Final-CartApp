import React, { Children, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {Navigate} from "react-router-dom"


const PrivateRoute = ({Children}) => {

    const {auth} = useContext(AuthContext)
    if(!auth) {
        return <Navigate to="/login" />
    }
  return Children
}

export default PrivateRoute