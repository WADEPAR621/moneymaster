import { useState } from "react";


import '../styles/SignUp.css'
const SignUp = () => {
    const [cuentas, setCuentas] = useState([]);
    const [newCuenta, setNewCuenta] = useState({
        fechaNacimiento: "",
        correoElectronico: "",
        usuario: "",
        ncedula: "",
        contrasena: ""
    });
    const [contrasenaConfirm, setContrasenaConfirm] =  useState(null);
    const handleAddCuenta = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:8080/api/cuentas/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCuenta),
            });
            const data = await response.json();
            setCuentas([...cuentas, data]);
            setNewCuenta({
                fechaNacimiento: "",
                correoElectronico: "",
                usuario: "",
                ncedula: "",
                contrasena: ""
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div class="containerPrincipal">
            <div class="form-group__SIGNUP">
                <h1>Registrarse con una cuenta</h1>
                <div>
                    <div class="inputbox" id="inputbox__Nombre">
                        <input type="text" required value={newCuenta.usuario} 
                        onChange={(e) => setNewCuenta({...newCuenta, usuario: e.target.value})}/>
                        <label for="">Nombre</label>

                    </div>
                </div>
                <div class="inputbox">
                    <input type="number" required value={newCuenta.ncedula} 
                        onChange={(e) => setNewCuenta({...newCuenta, ncedula: e.target.value})}/>
                    <label for="">Numero de celular</label>
                </div>
                <div class="inputbox" >
                    <input type="date" required value={newCuenta.fechaNacimiento} 
                        onChange={(e) => setNewCuenta({...newCuenta, fechaNacimiento: e.target.value})}/>
                    <label for="" id="inputbox__Date">Dia de Nacimiento</label>
                </div>
                <div class="inputbox">
                    <input type="text" required value={newCuenta.correoElectronico} 
                        onChange={(e) => setNewCuenta({...newCuenta, correoElectronico: e.target.value})}/>
                    <label for="">Correo Electronico</label>
                </div>
                <div class="inputbox">
                    <input type="password" required value={newCuenta.contrasena} 
                        onChange={(e) => setNewCuenta({...newCuenta, contrasena: e.target.value})}/>
                    <label for="">Contraseña</label>
                </div>
                <div class="inputbox">
                    <input type="password" required 
                        />
                    <label for="">Confirmar Contraseña</label>
                </div>
                <br />
                <button id="boton" class="boton" onClick={handleAddCuenta}>Crear Cuenta</button>

            </div>
        </div>
    );
}
export default SignUp;