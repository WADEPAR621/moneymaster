import { Link, redirect } from "react-router-dom"
import { useEffect } from "react";

import Logo_Central2_Only from '../imagenes/Logo_Central2_Only.png';
import Particion2 from '../imagenes/Particion2.png'
import Interes from '../imagenes/Interes.png'
import Ahorro from '../imagenes/Ahorro.png'
import Calculator from '../imagenes/Calculator.png'
import Stonk from '../imagenes/Stonk.png'
import Kenneth from '../imagenes/kenneth.jpg'
import Josue from '../imagenes/josue.jpg'
import Eduardo from '../imagenes/eduardo.jpg'

import '../styles/Login.css'
import { useState } from "react";
import Usuario from "../Usuario";
const Login = () => {

    const [cuenta, setcuenta] = useState([]);
    const [showEntrada, setShowEntrada] = useState(false);
    const [usuarioLo, setUsuario] = useState({
        usuario: "",
        contrasena: ""
    });

    useEffect(() => {
        fetchUsers();
    }, []);



    const fetchUsers = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/cuentas/all`, {
                method: "GET",
            });
            const data = await response.json();
            setcuenta(data)
        } catch (error) {
            console.log(error);
        }
    };

    const filter = () => {
        const userLogedo = cuenta.find((user) => user.usuario === usuarioLo.usuario)
        console.log(userLogedo)
        if (userLogedo) {
            if (userLogedo.contrasena == usuarioLo.contrasena) {
                return setShowEntrada(true);
            }
            return alert("Contraseña incorrecta")
        }
        return alert("Usuario No detectado")
    }

    return (
        <>
            <header>
                <img src={Logo_Central2_Only} />

            </header>
            <div class="containerPrincipal">
                <div class="form-group__LOGIN">
                    <h1>INICIAR SESION</h1>
                    <div class="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="text" required value={usuarioLo.usuario} onChange={(e) => setUsuario({ ...usuarioLo, usuario: e.target.value })} />
                        <label for="" >Email</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input class="inputbox__input" type="password" required value={usuarioLo.contrasena} onChange={(e) => setUsuario({ ...usuarioLo, contrasena: e.target.value })} />
                        <label class="inputbox__label" for="">Contraseña</label>

                        {showEntrada ?
                            (
                                <div class="display_entrada" id="display_entrada">
                                    <label>BIENVENIDO AL SISTEMA</label>
                                    <br/>
                                    <br/>
                                    <br/>
                                    
                                    <Link class="round" to="/Principal">CONTINUAR</Link>
                                </div>
                            ) : null
                        }
                    </div>
                    <br />
                    <button id="boton" class="boton" onclick="login()" onClick={() => filter()}>INCIAR SESION</button>
                </div>
            </div>
            <script src="main.js"></script>
        </>
    );
}

export default Login