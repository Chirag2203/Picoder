"use client";
import React  from "react"
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WorkStation from "./Pages/WorkStation";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export default function App() {
  

  return (
    <main className="  flex flex-col items-center justify-between bg-maingrad bg-gray-900 ">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/workstation" element={<WorkStation />} />
          <Route path="*" element={<div className="text-center mt-32 ">404</div>} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact/>}/>
          <Route path ="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/> 
          <Route path="/signup" element={<Register />}/>
        </Routes>

        <Footer />
      </Router>
    </main>
  );
}
