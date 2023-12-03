import { Link } from "react-router-dom"

import Logo_Lateral from '../imagenes/Logo_Lateral.png';
import Interes from '../imagenes/Interes.png'
import Ahorro from '../imagenes/Ahorro.png'
import Calculator from '../imagenes/Calculator.png'
import Stonk from '../imagenes/Stonk.png'
import Kenneth from '../imagenes/kenneth.jpg'
import Josue from '../imagenes/josue.jpg'
import Eduardo from '../imagenes/eduardo.jpg'

import "../styles/EstadoCuenta.css"
import { useEffect, useState } from "react";



const EstadoCuenta = ({ editParticion, setEditParticion }) => {
    const [showTransferencia, setShowTransferencia] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showNotEnought, setShowNotEnoguht] = useState(false);
    const [movimientos, setMovimientos] = useState([]);
    const [descripcion, setDescipcion] = useState("");
    const [monto, setMonto] = useState("");
    const [plata, setPlata] = useState("");
    const [idEntrada, setIdEntrada] = useState("");
    const [newMovimientoEntrada, setNewMovimientoEntrada] = useState({
        entrada: true,
        moveTransactionDate: "",
        moveDescription: "",
        moveDinero: "",
        particion: {
            id: ""
        }
    });
    const [newMovimientoSalida, setNewMovimientoSalida] = useState({
        entrada: false,
        moveTransactionDate: "",
        moveDescription: "",
        moveDinero: "",
        particion: {
            id: editParticion.id
        }
    });
    const [showTransfer, setShowtransfer] = useState(false);
    const [showSyncronize, setShowSynchronize] = useState(false);
    const [showPlanAhorro, setShowPlanAhorro] = useState(false);

    const handleDeleteParticion = async () => {
        try {
            await fetch(`http://localhost:8080/api/particion/deleteParticion/${editParticion.id}`, {
                method: "DELETE",
            });
            setEditParticion(null);
            setShowDeleteConfirmation(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddPMovimientoEntrada = async (e) => {

        try {
            const response = await fetch("http://localhost:8080/api/moves/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...newMovimientoEntrada, moveDescription: descripcion, moveDinero: monto }),
            });
            const data = await response.json();
            setMovimientos([...movimientos, data]);
            fetchMovimiento();
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddPMovimientoSalida = async (e) => {

        if (editParticion.id == newMovimientoEntrada.particion.id) {
            alert(newMovimientoEntrada.particion.id)
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/moves/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...newMovimientoSalida, moveDescription: descripcion, moveDinero: monto }),
            });
            const data = await response.json();
            setMovimientos([...movimientos, data]);
            handleAddPMovimientoEntrada();
            setNewMovimientoSalida({
                entrada: false,
                moveTransactionDate: "",
                moveDescription: "",
                moveDinero: "",
                particion: {
                    id: editParticion.id
                }
            });
            setNewMovimientoEntrada({
                entrada: false,
                moveTransactionDate: "",
                moveDescription: "",
                moveDinero: "",
                particion: {
                    id: ""
                }
            });
            setShowTransferencia(false)
            setDescipcion("");
            setMonto("");
            fetchMovimiento();
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateRestarParticion = async (e) => {

        try {
            const response = await fetch(`http://localhost:8080/api/particion/updateMonto/${editParticion.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify({ monto: monto }),
            });
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateAgregarParticion = async (e) => {

        try {
            const response = await fetch(`http://localhost:8080/api/particion/updateMontoPlus/${idEntrada}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify({ monto: monto }),
            });
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovimiento();
    }, []);

    const fetchMovimiento = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/particion/getMoveByParticion/${editParticion.id}`, {
                method: "GET",
            });
            const data = await response.json();
            setMovimientos(data);
        } catch (error) {
            console.log(error);
        }
    };

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

            <div class="Regresar">
                <Link class="Regresar-link" to="/Cuentas"><ion-icon name="chevron-back-outline" /></Link>
            </div>

            <div class="Totality">
                <div class="Recuadro-flex">

                    <h2 class="NombreCuentaTexto">{editParticion.nombre}</h2>

                    <div class="DetallesIngreso-flex">
                        <div class="Dinero-grid">
                            <label class="DineroDigital">$ {editParticion.monto}</label>
                            <label class="DineroDigitalTexto">Dinero Digital</label>
                            <label class="DineroEfectivo">$ {editParticion.monto}</label>
                            <label class="DineroEfectivoTexto">Dinero en Efectivo</label>
                        </div>

                        <div></div>

                        <label class="RegistroManualTexto">Registro Manual Rapido</label>


                        {editParticion.prueba ? (
                            <button class="Input">Input</button>
                        ) : (
                            <button class="Output"></button>
                        )
                        }

                        {editParticion.prueba ? (
                            <button class="Output">Output</button>
                        ) : (
                            <button class="Output"></button>
                        )
                        }



                    </div>

                    <h2 class="Especificacion">{editParticion.description}</h2>


                    {editParticion.prueba ? (
                        <br />
                    ) : (
                        <button onClick={() => setShowPlanAhorro(true)} class="PlanAhorro">Plan de Ahorro</button>
                    )
                    }
                    {showPlanAhorro ?
                        (
                            <div class="display-Plan" id="display-Plan">
                                <div class="form-agregar-plan">
                                    <label class="switch">
                                        <input class="input" type="checkbox" />
                                        <div class="rail">
                                            <span class="circle"></span>
                                        </div>
                                        Prueba
                                        <span class="indicators"></span>
                                    </label>
                                </div>
                                <label class="ahorroMonto__Label">Cantidad de ahorro por mes</label>
                                <input class="ahorroMonto_Input" type="number" />
                                <label class="ahorroMonto__Label">Elegir la fecha maxima del Ahorro</label>
                                <input class="ahorroMonto_InputDate" type="date" />
                                
                                <button class="ahorroMonto__Cerrar" onClick={() => setShowPlanAhorro(false)}>Cerrar</button>
                            </div>
                        ) : null
                    }

                    <div class="PreTabla">
                        <h2 class="PreTabla__UltimosMovimientosTexto">Ultimos Movimientos</h2>

                        <button class="PreTabla__Eliminar" onClick={() => setShowDeleteConfirmation(true)}>Eliminar Cuenta</button>
                        {showDeleteConfirmation ?
                            (
                                <div class="display-Eliminar" id="display-Eliminar">
                                    <label class="display-Eliminar__label">Esta usted seguro de eliminar esta cuenta</label>
                                    <button class="display-Eliminar__Aceptar" onClick={() => handleDeleteParticion()}><Link to="/Cuentas" class="display-Eliminar__Aceptar delete" >Si, estoy seguro</Link></button>
                                    <button class="display-Eliminar__Cancelar" onClick={() => setShowDeleteConfirmation(false)}>No, Cancelar</button>
                                </div>
                            ) : null

                        }
                        {showNotEnought ?
                            (
                                <div class="display-Eliminar" id="display-Eliminar">
                                    <label class="display-Eliminar__label">No tiene los suficientes fondos para el envio</label>
                                    <button class="display-Eliminar__Cancelar" onClick={() => setShowNotEnoguht(false)}>Entendido</button>
                                </div>
                            ) : null

                        }

                        {editParticion.prueba ? (
                            <button class="PreTabla__Transferencia">No disponble con Cuenta de Prueba</button>
                        ) : (
                            <button class="PreTabla__Transferencia" onClick={() => setShowTransferencia(true)}>Realizar Transferencia</button>
                        )
                        }
                        {showTransferencia ?
                            (
                                <div class="display_Transferencia" id="display_Transferencia">


                                    <input type="number" class="display-Transferencia__input" value={monto}
                                        onChange={(e) => {setMonto(e.target.value);setPlata(e.target.value)}}/>
                                    <label class="display-Transferencia__label">Ingrese el monto a transferir</label>


                                    <br />
                                    <input class="display-Transferencia__destinatario" type="text" value={newMovimientoEntrada.id}
                                        onChange={(e) => {setNewMovimientoEntrada({ ...newMovimientoEntrada, particion: { ...newMovimientoEntrada, id: e.target.value }}); setIdEntrada(e.target.value)}} />
                                    <label class="display-Transferencia__destinolabel">Ingresar el numero de cuenta de destinatario</label>


                                    <input class="display-Transferencia__destinatario" type="text" value={descripcion}
                                        onChange={(e) => setDescipcion(e.target.value)} />
                                    <label class="display-Transferencia__descrption">Ingrese una descripcion sobre el propostio de transferencia</label>


                                    <div class="transferencia__botones">
                                        <button class="transferencia__Aceptar" onClick={() => { handleAddPMovimientoSalida(); handleUpdateRestarParticion();handleUpdateAgregarParticion(); }}>Realizar Transferencia</button>
                                        <button class="transferencia__Cancelar" onClick={() => setShowTransferencia(false)}>CANCELAR</button>
                                    </div>
                                </div>
                            ) : null
                        }

                        {editParticion.prueba ? (
                            <button class="PreTabla__SincronizarCuenta">No disponible</button>
                        ) : (
                            <button class="PreTabla__Transferencia" onClick={() => setShowTransferencia(true)}>Sinzcronizar Cuenta</button>
                        )
                        }

                        {showSyncronize ?
                            (
                                <div class="display_sincronizar" id="display_sincronizar">
                                    <label class="display-sincronizar__label">Proceso de sincronizacion inciado, verificando de elementos</label>
                                    <label>TARJETA</label>
                                    <input class="display-sincronizar__destinatario" value="XXXX XXXX XXXX XXXX" />
                                    <input class="display-sincronizar__destinatario" value="PERMISOS-BANCO.pdf" />


                                    <div class="display-sincronizar__infos">
                                        <label>Fecha Caducidad</label>
                                        <input type="date" />
                                        <label class="display-sincronizar__CVVtext">CVV</label>
                                        <input class="display-sincronizar__CVV" value="XXX" />
                                    </div>
                                    <div class="loader"></div>
                                    <button class="display-sincronizar__Cancelar" onClick={() => setShowSynchronize(false)}>CANCELAR</button>
                                </div>
                            ) : null
                        }
                    </div>

                    <form class="Tabla">
                        {movimientos.map((movimiento) => {
                            return (
                                <ul class="Movimiento" key={movimiento.id}>
                                    {movimiento.entrada ? (
                                        <h3>Entrada</h3>
                                    ) : (
                                        <h3>Salida</h3>
                                    )
                                    }
                                    <h3>{movimiento.moveDescription}</h3>
                                    {movimiento.entrada ? (
                                        <h4>+({movimiento.moveDinero})</h4>
                                    ) : (
                                        <h4>-({movimiento.moveDinero})</h4>
                                    )
                                    }
                                </ul>

                            );
                        })}
                    </form>
                </div>

                <footer class="footer">
                    <div class="grupo">
                        <h3>Autores:</h3>
                        <div class="grupo__1Integrante"><img src={Josue} /><i>Josue Lopez</i></div>
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
                        <Link class="Sobre Nosotros" to="/SobreNosotros">Sobre_Nosotros</Link>
                    </div>

                    <div class="Redes_Sociales">
                        <h3 class="Redes-Sociales__Texto">Redes Sociales:</h3>
                        <div class="Redes">
                            <div class="Facebook">
                                Facebook
                            </div>
                            <div class="Twiter">
                                Twiter
                            </div>
                            <div class="Instagram">
                                Instagram
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default EstadoCuenta