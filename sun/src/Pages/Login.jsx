import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const {auth,setAuth,login,logout,setName} = useContext(AuthContext)
  
    const [form,setForm] = useState({
        email:"eve.holt@reqres.in",
        password:"cityslicka",
        name: ""
    })

    const handleOnChange = (e)=> {
        const {name,value} = e.target

        setForm({
            ...form,
            [name]:value
        })
    }
   const handleOnSubmit = (e)=> {
    e.preventDefault();
    if(form.email == ""){
        alert("Please Enter Email")
    } else if(form.password == ""){
        alert("Please Enter Password")
    } else if(form.name == ""){
        alert("Please Enter Name")
    } else if(form.email != "" && form.password != "" && form.name != ""){
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }).catch((err)=> alert("Details Not matched"))
        .finally(()=> {
            login();
            setName(form.name)
        })
    }
   }
  
    return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <input type="email"
            placeholder='Enter Your Emaail'
            name='email'
            value={form.email}
            onChange={handleOnChange}
             /> <br /> <br />
             <input type="password"
             placeholder='Enter Your Password'
             name="password"
             value={form.password}
             onChange={handleOnChange}
             /> <br /> <br /> 
             <input type="text"
             placeholder='Enter Your Name'
             name="name"
             value={form.name}
             onChange={handleOnChange}
             /> <br /> <br />
             <button >Login</button>
        </form>
    </div>
  )
}

export default Login