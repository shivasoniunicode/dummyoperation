import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import FormUpdate from './components/FormUpdate';
import baseUrl from './config/constant'
import {useState } from 'react';
import DynamicApidata from './components/DynamicApidata';

function App() {
const [formData,setFormdata]=useState({});
return (
  <Router>
    
       <Routes>
         <Route path="/" element={<DynamicApidata baseUrl={baseUrl} endpoint={"users"} setFormdata={setFormdata}/>}/> 
         <Route path="/formUpdate" element={<FormUpdate data={formData} setData={setFormdata}/>}/> 
       </Routes>
     </Router>
    );
  }
  
  export default App;
