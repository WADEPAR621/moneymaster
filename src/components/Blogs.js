import { Link } from "react-router-dom"

import Logo_Lateral from '../imagenes/Logo_Lateral.png';
import Interes from '../imagenes/Interes.png'
import Ahorro from '../imagenes/Ahorro.png'
import Calculator from '../imagenes/Calculator.png'
import Stonk from '../imagenes/Stonk.png'
import Kenneth from '../imagenes/kenneth.jpg'
import Josue from '../imagenes/josue.jpg'
import Eduardo from '../imagenes/eduardo.jpg'

import "../styles/Blogs.css"
const Blogs = () => {
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

            <div class="blog-contenido">
                <div class="blog-contenido__list">
                    <ul>
                        <Link class="list" to="/Blog1">
                            <img class="link-img" src="https://www.onaliat.mx/hubfs/Imported_Blog_Media/7-metodos-para-ahorrar-dinero-que-no-conocias-2.jpg"></img>
                            <label class="title">COMO AHORRAR DE FORMA CORRECTA</label>
                            <br/>
                            <br/>
                            <br/>
                        </Link>
                        <Link class="list" to="/BlogInversion">
                            <img class="link-img" src="https://www.estrategiasdeinversion.com/uploads/noticias_redaccion/graficos_dentro/202007/grafico_bolsa_hoy_1.png"></img>
                            <label class="title">INGRESA A UN MUNDO DE INVERSIONES Y COMPRA/VENTA DE ACCIONES EN LA BOLSA DE VALORES</label>
                            <br/>
                            <br/>
                            <br/>
                        </Link>
                        <Link class="list" to="/BlogAdulto">
                                <img class="link-img" src="https://www.elsoldehermosillo.com.mx/finanzas/iqokns-dinero-ahorro-1/ALTERNATES/LANDSCAPE_768/dinero%20ahorro%201"></img>
                                <label class="title">EL ENTRAR AL MUNDO DEL ADULTO PUEDES SER COMPLICADO</label>
                                <br/>
                                <br/>
                                <br/>
                            </Link>
                    </ul>
                </div>
                <aside class="blog-contenido__Sources">
                    <Link class="link" to="/Divisas" ><img src={Calculator}/></Link>
                    <Link class="link" to="/Interes" ><img src={Interes}/></Link>
                    <Link class="link" to="/PlanAhorro" ><img src={Ahorro}/></Link>
                    <Link class="link" to="/Inversion" ><img src={Stonk}/></Link>
                </aside>
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

export default  Blogs