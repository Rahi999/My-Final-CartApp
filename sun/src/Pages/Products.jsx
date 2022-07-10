import React,{useEffect, useState} from 'react'
import {Link,useSearchParams} from "react-router-dom"

const Products = () => {

    const [data,setData] = useState([])
    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(10);
    const [params,setParams] = useSearchParams()
    const [query,setQuery] = useState("")
    const [sdata,SetSdata] = useState([])

    useEffect(()=> {
      setParams({
        page,
        limit,
      
      })
       fetch(`http://localhost:8000/products?_page=${page}&_limit=${limit}`)
       .then((res)=> res.json())
       .then((res)=> setData(res))
       .catch((err)=> alert("Unable To Fetch Data From JSON server"))
       .finally(()=> console.log("Suuceed"))
    },[page,limit])

    const handleLimit = (e) => {
      setLimit(e.target.value)
    }

    const handleOnSearch = (e)=> {
      e.preventDefault();
      fetch("http://localhost:8000/products?" + `q=${query}`)
      .then((res)=> res.json())
      .then((res)=> SetSdata(res))
      .catch((err)=> alert("Unable To Fetch Data From JSON server"))
      .finally(()=> console.log("Suuceed"))
    }
  return ( <>
  <div>
    <button disabled={page == 1} onClick={()=> setPage(page-1)}>Prev</button>
   {" "} {page}<button disabled={data.length < limit} onClick={()=> setPage(page+1)}>Next</button>
  <select onChange={handleLimit} ><option >Select Limit</option>
   <option value="5">5</option>
   <option value="10">10</option>
   <option value="20">20</option>
  </select>
  </div>
  <div >
       <form onSubmit={handleOnSearch}> <input type="text" 
        placeholder='Search For Products'
         onChange={(e) => setQuery(e.target.value)}
        /> {" "} <button >Search</button></form>
       </div>

       <div style={{
        display:"grid", gridTemplateColumns:"repeat(3,1fr)"
    }}> 
       
      {sdata.map((item)=> (
       <Link to={`/products/${item.id}`} >  
       <div key={item.id}><img width="100px" src={item.image} alt="" />
       <h3>{item.title}</h3>
       <h3>${item.price}</h3></div>
   </Link>
    ))}</div>

    <div style={{
        display:"grid", gridTemplateColumns:"repeat(3,1fr)"
    }}>
       
      {data.map((item)=> (
       <Link to={`/products/${item.id}`} >  
       <div key={item.id}><img width="100px" src={item.image} alt="" />
       <h3>{item.title}</h3>
       <h3>${item.price}</h3></div>
   </Link>
    ))}</div>
    </>
  )
}

export default Products