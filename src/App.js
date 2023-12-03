import { Route, Routes } from "react-router"
import './App.css';
import SignUp from './components/SignUp';
import Principal from './components/Principal';
import Inicio from './components/Inicio';
import Login from './components/Login';


import { useState } from "react";


function App() {
  const [editParticion, setEditParticion] = useState([]);
  const handleEditParticion = (particion) => {
    setEditParticion(particion);
  }
  return (
    <>

      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Inicio />
            </>
          }>

        </Route>

        <Route
          path="/Principal"
          exact
          element={
            <>
              <Principal />
            </>
          }>      </Route>

        <Route
          path="/SignUp"
          exact
          element={
            <>
              <SignUp />
            </>
          }>     </Route>

        <Route
          path="/Login"
          exact
          element={
            <>
              <Login />
            </>
          }>     </Route>


      </Routes>
    </>

  );
}

export default App;
