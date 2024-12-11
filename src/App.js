import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

const comDetails = {
  name: "CNC Web World",
  logo:'./logo192.png'
}   

function App() {
  return (
    <>
      <BrowserRouter >
        <Navbar props={ comDetails} />
        <Routes>
          <Route path="/" element={<Home props={ comDetails} />} />
          <Route path="/about" element={<h1>About_page</h1>} />
          <Route path="/our_about" element={<h1>Our_About_page</h1>} />
          <Route path="/my_about" element={<h1>My_About_page</h1>} />
          <Route path="/CONTACT" element={<h1>CONTACT_PAGE</h1>} />
          <Route path="/service" element={<h1>Service_page</h1>} />
          <Route path="/service_1" element={<h1>Service_page_1</h1>} />
          <Route path="/service_2" element={<h1>Service_page_2</h1>} />
          <Route path="/product" element={<h1>Product_page</h1>} />
          <Route path="/our_product_1" element={<h1>Our_Product_page_1</h1>} />
          <Route path="/our_product_2" element={<h1>Our_Product_page_2</h1>} />
          <Route path="/our_product_3" element={<h1>Our_Product_page_3</h1>} />
          <Route path="/gallery" element={<h1>Gallery_page</h1>} />
          <Route path="/blog" element={<h1>Blog_page</h1>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}


export default App;