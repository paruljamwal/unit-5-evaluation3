import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
const Products = () => {
  const [product,setProduct]=useState([])
  // const getdata=async()=>{
  // let res=await fetch(`http://localhost:8080/products`)
  //     let data=await res.json()
  //     setProduct(data)

  //   axios({
  //     url:"http://localhost:8080/products",
  //    method:"GET"
  //   })
  //   .then((e)=>{setProduct(e.data.product)})
  //   .catch((err)=>{console.log(err)})
  // }
  const getdata=()=>{
   let res= axios.get(`http://localhost:8080/products`)
    .then((res)=>{setProduct(res.data)})
  }




  
 useEffect(()=>{
    getdata()
 },[])
  
  return (
    
    <div>{
        product.map((e)=>(
          <div key={e.id}>
            <h3>{e.description}</h3>
          <p>{e.name}</p>
          </div>
          
        ))

      }
      

      
      </div>

  )
  
};

export default Products;
