import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

import Logo_Lateral from '../imagenes/Logo_Lateral.png';
import Interes from '../imagenes/Interes.png'
import Ahorro from '../imagenes/Ahorro.png'
import Calculator from '../imagenes/Calculator.png'
import Stonk from '../imagenes/Stonk.png'
import Kenneth from '../imagenes/kenneth.jpg'
import Josue from '../imagenes/josue.jpg'
import Eduardo from '../imagenes/eduardo.jpg'

import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";

import "../styles/Cuentas.css"
const Cuentas = ({handleEditParticion}) => {

    const [particiones, setParticiones] = useState([]);
    const [newParticion, setNewParticion] = useState({
        nombre: "",
        description: "",
        monto: "",
        prueba: false,
        propertyID: "",
        cuenta:{
            id: "1"
        }
    });
    const [prueba, setPrueba] = useState(true);

    useEffect(() => {
        fetchParticiones();
    }, []);

    const fetchParticiones = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/particion/all", {
                method: "GET",
            });
            const data = await response.json();
            console.log(data);
            setParticiones(data);
            console.log(particiones);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddParticion = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/particion/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newParticion),
            });
            const data = await response.json();
            setParticiones([...particiones, data]);
            setNewParticion({
                nombre: "",
                description: "",
                monto: "",
                prueba: false,
                propertyID: ""
            });
            fetchParticiones();
        } catch (error) {
            console.log(error);
        }
    };

    const handlePrueba = () => {
        setPrueba(!prueba);
    }

    const handleEditParticionId = (idPartiion) => {
        const selectedParticion = particiones.find((particion) => particion.id === idPartiion);
        if (selectedParticion) {
            handleEditParticion(selectedParticion);
        }
    }



    return (
        <>
            <header class="menu">
                <img class="menu__icon" src={Logo_Lateral} />
                <div class="topnav">
                    <div class="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <Link class="active" to="/Principal">Inicio</Link>
                    <Link to="/SobreNosotros">Sobre Nosotros</Link>
                    <Link to="/Blogs">Blogs</Link>
                    <Link to="/ ">Cerrar Sesion</Link>
                </div>
            </header>

            <div class="Totality-grid">

                <div class="Pretabla-flex">
                    <Link class="Regresar-link" to="/Principal"><ion-icon name="chevron-back-outline" /></Link>
                    <h2 class="Pretabla-flex__ParticionesTexto">Tus Particiones/Cuenta</h2>
                    
                    <label class="Pretabla-flex__Agregar">
                        <input class="inputAgregar" type="checkbox" />
                        <ion-icon name="add-circle-outline" />
                        <form class="Pagina-Agregar">
                            <h3>AGREGAR UNA CUENTA O PARTICION</h3>
                            <h5>Porfavor llene los siguientes datos</h5>
                            <div class="form-agregar-nombre">
                                <input class="inputnombre" type="text" required value={newParticion.nombre}
                                    onChange={(e) => setNewParticion({ ...newParticion, nombre: e.target.value })} />
                                <label class="labelnombrenueva" for="">Nombre de la Nueva Cuenta</label>
                            </div>
                            <div class="particion2">
                                <div class="form-agregar-balance">
                                    <input class="inputbalance" type="number" required value={newParticion.monto}
                                        onChange={(e) => setNewParticion({ ...newParticion, monto: e.target.value })} />
                                    <label class="labelbalance" for="">Balance Inicial</label>
                                </div>
                                <div class="form-agregar-prueba">
                                    <label class="switch">
                                        <input class="input" type="checkbox"
                                            onClick={handlePrueba}
                                            value={prueba}
                                            onChange={(e) => setNewParticion({ ...newParticion, prueba: e.target.value })} />
                                        <div class="rail">
                                            <span class="circle"></span>
                                        </div>
                                        Prueba
                                        <span class="indicators"></span>

                                    </label>
                                </div>
                            </div>
                            <div class="form-agregar-especificacion">
                                <input class="inputespecificacion" type="text" required value={newParticion.description}
                                    onChange={(e) => setNewParticion({ ...newParticion, description: e.target.value })} />
                                <label class="labelespecificacion" for="">Especificacion Personal (Opcional)</label>
                            </div>
                            <button class="button-agregarDivision" onClick={handleAddParticion}>Agregar Division de Cuenta</button>
                        </form>
                    </label>



                </div>

                <div class="Tabla">
                    {particiones.map((particion) => {
                        return (
                            <Link class="Particion" key={particion.id} to={`/EstadoCuenta/${particion.id}`} onClick={() => handleEditParticionId(particion.id)}>
                                <h3>{particion.nombre}</h3>
                                <h4>$ {particion.monto}</h4>
                                <p>{particion.description}</p>
                                {particion.prueba ? (
                                    <label>Particion prueba</label>
                                ) : (
                                    <label>Particion real</label>
                                )
                                }
                            </Link>
                        );
                    })}

                </div>

                <aside class="Sources">
                    <Link class="link" to="/Divisas" ><img src={Calculator} /></Link>
                    <Link class="link" to="/Interes" ><img src={Interes} /></Link>
                    <Link class="link" to="/PlanAhorro" ><img src={Ahorro} /></Link>
                    <Link class="link" to="/Inversion" ><img src={Stonk} /></Link>
                </aside>

            </div>

            <footer class="footer">
                <div class="grupo">
                    <h3>Autores:</h3>
                    <div class="grupo__1Integrante">
                        <img src={Josue} />
                        <i>Josue Lopez</i>
                    </div>
                    <div class="grupo__2Integrante"><img src={Kenneth} /><i>Kenneth Paredes</i></div>
                    <div class="grupo__3Integrante"><img src={Eduardo} /><i>Eduardo Punina</i></div>
                </div>

                <div class="Calculadoras">
                    <h3>Calculadoras y Simuladores:</h3>
                    <Link class="Divisas" to="/Divisas" >De Divisas</Link>
                    <Link class="Interes" to="/Interes" >Interes</Link>
                    <Link class="Plan_Ahorro" to="/PlanAhorro" >Plan de Ahorro</Link>
                    <Link class="Inversiones" to="/Inversiones" >Inversiones</Link>
                </div>
                <div class="Capacitaciones">
                    <h3>Mas Servicios:</h3>
                    <Link class="Blog" to="/Blogs" >Blogs</Link>
                    <Link class="Sobre Nosotros" to="/SobreNosotros" >Sobre_Nosotros</Link>
                </div>

                <div class="Redes_Sociales">
                    <h3 class="Redes-Sociales__Texto">Redes Sociales:</h3>
                    <div class="Redes__Sociales">
                        <Link class="Redes-Sociales_Facebook" to="https://www.facebook.com/profile.php?id=100066391038866" ><img src="https://www.pngplay.com/wp-content/uploads/9/Facebook-Logo-Free-PNG.png" /></Link>
                        <Link class="Redes-Sociales_Twitter" to="https://twitter.com/home" ><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" /></Link>
                        <Link class="Redes-Sociales_Instagram" to="https://www.instagram.com/wadepar6/l" ><img src="https://png.pngtree.com/png-clipart/20230401/big/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" /></Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Cuentas