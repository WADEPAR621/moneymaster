import { Link } from "react-router-dom"

import Logo_Lateral from '../imagenes/Logo_Lateral.png';
import Logo_Central2_Only from '../imagenes/Logo_Central2_Only.png';
import Particion2 from '../imagenes/Particion2.png'
import Interes from '../imagenes/Interes.png'
import Ahorro from '../imagenes/Ahorro.png'
import Calculator from '../imagenes/Calculator.png'
import Stonk from '../imagenes/Stonk.png'
import Kenneth from '../imagenes/kenneth.jpg'
import Josue from '../imagenes/josue.jpg'
import Eduardo from '../imagenes/eduardo.jpg'

import "../styles/Principal.css"
const Principal = () => {
    return (
        <div class="flex">
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

            <div class="WelcomeTexto">BIENVENIDO A MASTER MONEY</div>

            <div class="ConceptionTexto">
                <p>
                    ¡Bienvenido a Money Master! Nos complace darte la bienvenida a nuestra página web, donde encontrarás una amplia gama de funciones de gestión financiera para ayudarte a tomar el control de tus finanzas. Ya sea que estés buscando administrar tu presupuesto, realizar un seguimiento de tus gastos o planificar tu futuro financiero, estamos aquí para brindarte las herramientas y recursos necesarios. Explora nuestras funciones intuitivas y fáciles de usar, diseñadas para hacerte más inteligente con tu dinero. ¡Comienza hoy mismo tu viaje hacia la maestría financiera con Money Master!
                </p>
                <img src={Logo_Central2_Only} />
            </div>

            <button class="Particiones">
                <Link class="IrParticiones" to="/Cuentas" > Ir A Mis Particiones </Link>
                <img src={Particion2} />
            </button>

            <div class="SimuladoresTexto"><h3>Simuladores/Calculadora</h3></div>

            <div class="grid">
                <div class="grid-item1">
                    <div class="grid-item1__content">
                        <h4 class="grid__titulos">DIVISAS</h4>
                        <p class="item__p">Calcula el equivalente de una cantidad de dinero Link diferentes monedas Link nivel mundial</p>
                        <Link class="item__a" to="/Divisas" >    INGRESAR       </Link>
                    </div>
                    <img class="grid-items__img1" src={Calculator} />
                </div>
                <div class="grid-item2">
                    <div class="grid-item2__content">
                        <h4 class="grid__titulos">PLANES DE AHORRO</h4>
                        <p class="item__p">Un lugar donde puedes calcular tu dinero ganado despues de un tiempo. ¿Cuanto podras ahorrar?</p>
                        <Link class="item__a" to="PlanAhorro" >    COMENZAR       </Link>
                    </div>
                    <img class="grid-items__img2" src={Ahorro} />
                </div>

                <div class="grid-item3">
                    <div class="grid-item3__content">
                        <h4 class="grid__titulos">Interes</h4>
                        <p class="item__p">Calcula cuanto tendras que pagar despues de pedir dinero.¿Estas dispuesto Link pagar tanto?</p>
                        <Link class="item__a" to="/Interes" >    INGRESAR       </Link>
                    </div>
                    <img class="grid-items__img3" src={Interes} />
                </div>

                <div class="grid-item4">
                    <div class="grid-item4__content">
                        <h4 class="grid__titulos">INVERSIONES</h4>
                        <p class="item__p">Tu dinero trabajando por ti. Un simulador de las inversiones que puedes hacer, ¿Tendras suerte?</p>
                        <Link class="item__a" to="/Inversion" >    INGRESAR       </Link>
                    </div>
                    <img class="grid-items__img4" src={Stonk} />
                </div>
            </div>

            <div class="ContextoTexto">
                <p>
                    Money Master fue creada con un objetivo en mente: brindarte el poder de tomar decisiones financieras inteligentes y alcanzar tus metas económicas. Nuestro equipo de expertos en finanzas y desarrolladores apasionados se unieron para crear una aplicación que simplifique la gestión financiera y te ayude a construir un futuro sólido. Con una interfaz intuitiva, características innovadoras y análisis detallados, Money Master se convierte en tu aliado confiable para maximizar tus ingresos, controlar tus gastos y optimizar tu inversión. Únete a nuestra comunidad de usuarios satisfechos y descubre por qué Money Master se ha convertido en la elección preferida para aquellos que buscan el dominio financiero. ¡Empieza a tomar el control de tu dinero hoy mismo!
                </p>
            </div>

            <footer class="footer">
                <div class="grupo">
                    <h3>Autores:</h3>
                    <div class="grupo__1Integrante"><img src={Josue} /><i>Josue Lopez</i>
                    </div>
                    <div class="grupo__2Integrante"><img src={Kenneth} /><i>Kenneth Paredes</i></div>
                    <div class="grupo__3Integrante"><img src={Eduardo} /><i>Eduardo Punina</i></div>
                </div>

                <div class="Calculadoras">
                    <h3>Calculadoras y Simuladores:</h3>
                    <a class="Divisas" href="c:\Users\User\Desktop\DivisaseINTERES" >De Divisas</a>
                    <Link class="Interes" to="/Interes" >Interes</Link>
                    <Link class="Plan_Ahorro" to="/PlanAhorro" >Plan de Ahorro</Link>
                    <Link class="InversionesLink" to="/Inversiones" >Inversiones</Link>
                </div>

                <div class="Capacitaciones">
                    <h3>Mas Servicios:</h3>
                    <Link class="Capacitaciones" to="/Blogs" >Blogs</Link>
                    <Link class="Sobre Nosotros" to="/SobreNosotros" >Sobre_Nosotros</Link>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

                <div class="Redes_Sociales">
                    <h3 class="Redes-Sociales__Texto">Redes Sociales:</h3>
                    <Link class="Redes-Sociales_Facebook" to="https://www.facebook.com/profile.php?id=100066391038866" ><img src="https://www.pngplay.com/wp-content/uploads/9/Facebook-Logo-Free-PNG.png" /></Link>
                    <Link class="Redes-Sociales_Twitter" to="https://twitter.com/home" ><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" /></Link>
                    <Link class="Redes-Sociales_Instagram" to="https://www.instagram.com/wadepar6/l" ><img src="https://png.pngtree.com/png-clipart/20230401/big/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" /></Link>
                </div>
            </footer>
        </div>
    );
}

export default Principal