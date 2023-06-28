import React, { useEffect, useState } from 'react'
import axios from "axios";
import apiRender from './JsonToTable';
import FormUpdate from './FormUpdate';
import { NavLink } from 'react-router-dom';

function DynamicApidata({baseUrl,endpoint,setFormdata}) {
const [data,setData]=useState([]);
console.log(data);
useEffect(()=>{
  axios.get(`${baseUrl}/${endpoint}`).then((res)=>setData(res.data[endpoint])).catch((err)=>console.log("url error"))
},[])
  return (
    <table>
      {
        data.map((item,index)=>{
          return <tr>
           <td> <NavLink to={"/formUpdate"}><button onClick={() => setFormdata(item)}>Edit</button></NavLink></td>
            {apiRender(item)}
          </tr>
        })
      }
    </table>
  )
}

export default DynamicApidata
