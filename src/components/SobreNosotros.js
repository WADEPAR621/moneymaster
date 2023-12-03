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

import "../styles/SobreNosotros.css"
const SobreNosotros = () => {
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
                    <a class="active" href="/Principal">Inicio</a>
                    <a href="/SobreNosotros">Sobre Nosotros</a>
                    <a href="/Blogs">Blogs</a>
                </div>
            </header>

            <div class="contenido">

                <h2>Sobre Nosotros</h2>
                <img src="https://enhacke.com/franquias/2/7243025/editor-html/10963394.png" />
                <div class="textoLargo">
                    <p>
                        Money Master es una empresa líder en gestión financiera con sede en América Latina, fundada por Josué López, Kenneth Paredes y Eduardo Punina, estudiantes destacados de la Universidad Técnica de Ambato. Nuestra pasión por la educación financiera y el deseo de empoderar a las personas en el manejo de sus finanzas nos impulsaron a crear una plataforma que brindara soluciones efectivas y accesibles. Como emprendedores latinoamericanos, entendemos los desafíos financieros que enfrentan muchas personas en la región. Nos propusimos romper las barreras y proporcionar herramientas financieras de calidad que se adapten a las necesidades y realidades de nuestra comunidad. Money Master se ha convertido en el resultado de años de investigación, dedicación y trabajo arduo para ofrecer una plataforma integral y confiable.
                        Nuestro enfoque se centra en brindar una experiencia fluida y personalizada a nuestros usuarios. Hemos reunido a un equipo de expertos en finanzas y tecnología para desarrollar una aplicación intuitiva, llena de funciones innovadoras y herramientas poderosas para ayudarte a tomar decisiones financieras informadas. Desde la creación de presupuestos hasta el seguimiento de gastos, la planificación de inversiones y la generación de informes detallados, Money Master se convierte en tu asistente financiero de confianza. Nos enorgullece ser una empresa latinoamericana líder en el sector de gestión financiera y estamos comprometidos en ofrecer una experiencia excepcional a nuestros usuarios. Trabajamos constantemente en la mejora y actualización de nuestras características para mantenernos a la vanguardia de las tendencias y necesidades financieras en evolución.
                        Únete a la comunidad de Money Master y descubre cómo podemos ayudarte a alcanzar tus metas financieras. Ya sea que seas un estudiante universitario, un emprendedor o un profesional en busca de una mejor administración de tus recursos, estamos aquí para brindarte las herramientas y el conocimiento necesario para lograr el éxito financiero. ¡Bienvenido a Money Master, donde la maestría financiera está al alcance de tu mano!
                    </p>
                </div>

                <div class="equipo">
                    <p>Quienes Conformamos este equipo</p>
                    <ul>
                        <li>
                            <h4>Josue Lopez</h4>
                        </li>
                        <li>
                            <h4>Eduardo Punina</h4>
                            <p></p>
                        </li>
                        <li>
                            <h4>Kenneth Paredes</h4>
                            <p></p>
                        </li>
                    </ul>
                </div>
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
                    <div class="Redes__Sociales">
                        <a class="Redes-Sociales_Facebook" href="https://www.facebook.com/profile.php?id=100066391038866" ><img src="https://www.pngplay.com/wp-content/uploads/9/Facebook-Logo-Free-PNG.png" /></a>
                        <a class="Redes-Sociales_Twitter" href="https://twitter.com/home" ><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" /></a>
                        <a class="Redes-Sociales_Instagram" href="https://www.instagram.com/wadepar6/l" ><img src="https://png.pngtree.com/png-clipart/20230401/big/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" /></a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default SobreNosotros