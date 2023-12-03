import {Route,Routes} from "react-router"
import './App.css';
import SignUp from './components/SignUp';
import Principal from './components/Principal';
import Inicio from './components/Inicio';
import Cuentas from './components/Cuentas';
import Login from './components/Login';
import EstadoCuenta from "./components/EstadoCuenta";
import SobreNosotros from "./components/SobreNosotros";
import Blogs from "./components/Blogs"
import PlanActivo from "./components/PlanActivo"


import { useState } from "react";
import Blog1 from "./components/Blog1";
import BlogInversion from "./components/BlogInversion";
import BlogAdulto from "./components/BlogAdulto";
import Divisas from "./components/Divisas";
import PlanAhorro from "./components/PlanAhorro";


function Usuario({usuario}) {
    const [editParticion, setEditParticion] = useState([]);
    const handleEditParticion = (particion) => {
      setEditParticion(particion);
    }
    return (
    <>
  
      <Routes>
  
        <Route
         path="/Cuentas"
         exact 
         element={
           <>
             <Cuentas handleEditParticion={handleEditParticion} />
           </>
         }>     </Route>
  
  
        <Route
         path={`/EstadoCuenta/${editParticion?.id}`}
         exact 
         element={
           <>
             <EstadoCuenta editParticion={editParticion} setEditParticion={setEditParticion}/>
           </>
         }>     </Route>
  
        <Route
         path="/SobreNosotros"
         exact 
         element={
           <>
             <SobreNosotros/>
           </>
         }>     </Route>
  
        <Route
         path="/Blogs"
         exact 
         element={
           <>
             <Blogs/>
           </>
         }>     </Route>
  
        <Route
         path={`/PlanActivo`}
         exact 
         element={
           <>
             <PlanActivo/>
           </>
         }>     </Route>
  
        <Route
         path={`/Blog1`}
         exact 
         element={
           <>
             <Blog1/>
           </>
         }>     </Route>
        <Route
         path={`/BlogInversion`}
         exact 
         element={
           <>
             <BlogInversion/>
           </>
         }>     </Route>
  
        <Route
         path={`/BlogAdulto`}
         exact 
         element={
           <>
             <BlogAdulto/>
           </>
         }>     </Route>
  
        <Route
         path={`/Divisas`}
         exact 
         element={
           <>
             <Divisas/>
           </>
         }>     </Route>
  
        <Route
         path={`/PlanAhorro`}
         exact 
         element={
           <>
             <PlanAhorro/>
           </>
         }>     </Route>
  
  
      </Routes>
    </>
  
    );
  }
  
  export default Usuario;