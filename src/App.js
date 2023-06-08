
import React from "react";
import './App.css';
import HeaderComponent from './components/Header.js'
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <AppLayout/>
    </div>
  );
}

const AppLayout=()=>{
  return (
      <>
      <HeaderComponent />
      <Outlet/>
      <Footer />
      </>
  );
}



export default App;
