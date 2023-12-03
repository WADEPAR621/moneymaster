import { Link } from "react-router-dom"

import LogoCentral2_Only from '../imagenes/Logo_Central2.png'
import Interes from '../imagenes/Interes.png'
import Ahorro from '../imagenes/Ahorro.png'
import Calculator from '../imagenes/Calculator.png'
import Stonk from '../imagenes/Stonk.png'

import "../styles/Inicio.css"
const Inicio = () => {
    return (
        <>
        <div class="bodys">
            <header class="menu">
                <img class="menu__icon" src={LogoCentral2_Only} />
            </header>

            <div class="LOGO">
                <img id="LOGO" src={LogoCentral2_Only} />
            </div>

            <div class="contexto">
                <h1 id="Div1h1">Aprende y ahorra como los profesionales</h1>
                <p id="Div1p1">Money Master es una app Web que sirve para gestionar el dinero de varias cuentas al mismo tiempo sin unirlas necesariamente en el banco. Dejando de tener varias aplicaciones de bancos y otras. Money Master tendra un seguimiento de tu dinero digital y otras cosas</p>
                <div class="Opciones">
                    <ul id="ul1">Calculadora de Divisas</ul>
                    <ul id="ul2">Simulador de Inversiones</ul>
                    <ul id="ul3">Calculadora de Interes</ul>
                    <ul id="ul4">Simulador de Plan de Ahorro</ul>
                </div>
                <div class="funciones">
                    <Link class="funciones__signup" to="/SignUp" >
                        <span class="funciones-signup__span">SIGN UP</span>
                        <div class="Square"></div>
                    </Link>
                    <Link class="funciones__Login" to="/Login" >
                        <span class="funciones-Login__span">LOGIN</span>
                        <div class="Square"></div>
                    </Link>

                </div>

            </div>
            <aside class="Sources">
                <Link to="/Divisas" ><img src={Calculator} /></Link>
                <Link to="/Interes" ><img src={Interes} /></Link>
                <Link to="/PlanAhorro" ><img src={Ahorro} /></Link>
                <Link to="/Inversiones" ><img src={Stonk} /></Link>
            </aside>

            <div id="hexagono"></div>
            <div class="recursive"></div>
            </div>
        </>
    );
}

export default Inicio