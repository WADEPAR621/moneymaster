import {Link} from "react-router-dom"

import Logo_Central2_Only from '../imagenes/Logo_Central2_Only.png';
import Particion2 from '../imagenes/Particion2.png'
import Interes from '../imagenes/Interes.png'
import Ahorro from '../imagenes/Ahorro.png'
import Calculator from '../imagenes/Calculator.png'
import Stonk from '../imagenes/Stonk.png'
import Kenneth from '../imagenes/kenneth.jpg'
import Josue from '../imagenes/josue.jpg'
import Eduardo from '../imagenes/eduardo.jpg'

import '../styles/PlanActivo.css'
const PlanActivo =() => {
    return(
        <>
            <header class="menu">
                <img class="menu__icon" src={Logo_Central2_Only} />
                <div class="topnav">
                    <div class="search-container">
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <Link class="active" to="/Cuentas">Inicio</Link>
                    <Link to="/SobreNosotros">Sobre Nosotros</Link>
                    <Link to="/Blogs">Blogs</Link>
                </div>
            </header>

            <div class="Regresar">
                <Link class="Regresar-link" to="/Cuentas"><ion-icon name="chevron-back-outline" /></Link>
            </div>

            <div class="Totality">
                <div class="Recuadro-flex">

                    <h2 class="NombreCuentaTexto">PLANES DE AHORRO ACTIVADOS</h2>

                    <div class="PreTabla">
                        

                        <button class="PreTabla__SincronizarCuenta"> Iniciar un Plan de Ahorro</button>
                        <label class="PreTabla__UltimosMovimientosTexto">Los Planes de Ahorro son limitadores de las cuentas para intensivar el ahorro de las cuentas estrictamente</label>

                    </div>
                    <form class="Tabla">
                        <ul class="Movimiento"> <h3>(CUENTA QUE TENGA UN PLAN DE AHORRO)</h3><h5>SALIDA($ 800.00)</h5> </ul>
                    </form>
                </div>

                <div class="display-Plan">
                    <h3>Crear Plan de Ahorro</h3>
                    <label class="display-Plan__cuentas">Cuentas disponibles</label>
                    <select class="display-Plan__select">
                        <option>awdawdawdaaw</option>
                        <option>awdawdawdawd</option>
                    </select>
                    <input type="number" class="display-Plan__input"/>
                    <label>Meses de Ahorro</label>
                    <input type="number" class="display-Plan__input"/>
                    <label>Valor de ahorro/Mes</label>
                    
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

export default PlanActivo