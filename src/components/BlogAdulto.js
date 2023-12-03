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

import "../styles/Blog1.css"
const BlogAdulto = () => {

    const [particiones, setParticiones] = useState([]);
    const [newParticion, setNewParticion] = useState({
        nombre: "",
        description: "",
        monto: "",
        prueba: false,
        propertyID: "",
        cuenta: {
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
                </div>
            </header>

            <div class="Totality-grid">

                <div class="Pretabla-flex">
                    <h2 class="Pretabla-flex__ParticionesTexto">Ingresa a un Mundo de INversiones y Compra/Venta de Acciones en La Bolsa de Valores</h2>
                </div>
                <div class="Blog">
                    <p>
                    Al ingresar al mundo de las finanzas y convertirte en un adulto responsable desde el punto de vista financiero, es importante establecer bases sólidas para construir una vida económica saludable
                    </p>
                    <img src="https://mundoejecutivo.com.mx/wp-content/uploads/2023/04/mejores-cuentas-bancarias-ahorro-para-ninos-condusef.jpg" />
                    <p>
                        1. Establece metas financieras: Define metas financieras claras y alcanzables a corto, mediano y largo plazo. ¿Quieres ahorrar para comprar una casa, pagar tus estudios o tener un fondo de emergencia? Establecer metas te ayudará a enfocarte y tomar decisiones financieras coherentes con tus objetivos.
                        </p>
                    <p>
                        2. Crea un presupuesto: El presupuesto es una herramienta clave para controlar tus finanzas. Haz un seguimiento de tus ingresos y gastos mensuales, asignando categorías específicas. Asegúrate de destinar una parte de tus ingresos al ahorro y establece límites para tus gastos en diferentes áreas. Mantén un registro actualizado de tus transacciones y revisa regularmente tu presupuesto para asegurarte de que estás siguiendo el plan.
                        </p>
                    <p>
                        3. Ahorra e invierte: Cultiva el hábito del ahorro desde el principio. Establece un fondo de emergencia para hacer frente a gastos imprevistos y comienza a ahorrar para tus metas a largo plazo. Además, considera invertir parte de tus ahorros en opciones que se ajusten a tu tolerancia al riesgo y metas financieras. Infórmate sobre diferentes vehículos de inversión, como cuentas de ahorro, certificados de depósito, fondos mutuos o inversiones en el mercado de valores.
                        </p>
                    <p>
                        4. Aprende sobre educación financiera: Dedica tiempo a aprender sobre conceptos financieros básicos, como cómo funcionan los impuestos, cómo administrar el crédito de manera responsable y cómo manejar las deudas. Además, infórmate sobre diferentes instrumentos financieros, como hipotecas, préstamos estudiantiles y tarjetas de crédito. La educación financiera te proporcionará las herramientas necesarias para tomar decisiones informadas y evitar errores costosos.
                        </p>
                    <img src="https://www.bcra.gob.ar/Imagenes/BCRAyVos/Aprendiendo%20a%20ahorrar%20placa%205.jpg" />
                    <p>
                        5. Establece un fondo de jubilación: Aunque la jubilación pueda parecer lejana, es importante comenzar a ahorrar para ella desde temprano. Investiga las opciones de ahorro para la jubilación, como planes de pensiones o cuentas de jubilación individuales (IRA), y comienza a contribuir regularmente. Aprovecha las ventajas fiscales y el interés compuesto a largo plazo para asegurar tu bienestar financiero en el futuro.
                        </p>
                    <p>
                        6. Controla tus deudas: Si tienes deudas, asegúrate de manejarlas de manera responsable. Paga tus facturas a tiempo, evita incurrir en deudas innecesarias y prioriza el pago de deudas con tasas de interés más altas. Mantén un registro de tus saldos y pagos, y trabaja para reducir y eliminar tus deudas lo antes posible.
                        </p>
                    <p>
                        7. Establece un fondo de seguro: Protege tus activos y tu salud estableciendo un fondo de seguro adecuado. Investigua y elige los seguros necesarios, como seguro de salud, seguro de automóvil, seguro de hogar o seguro de vida. Evalúa tus necesidades y presupuesto para obtener la cobertura adecuada.
                        </p>
                    <p>
                        8. Busca orientación profesional: Si te sientes abrumado o inseguro en algún aspecto financiero, considera buscar orientación profesional. Un asesor financiero certificado puede ayudarte a establecer metas, desarrollar una estrategia de inversión y tomar decisiones informadas. También puede proporcionarte asesoramiento personalizado y responder a tus preguntas específicas.
                        </p>
                    <img src="https://dercocenter-api.s3.us-east-1.amazonaws.com/medias/dercocenter/migration/news/iStock-1163095165-1.jpg"/>
                    <p>
                    Recuerda que el camino hacia una salud financiera sólida requiere tiempo, paciencia y esfuerzo constante. No te desanimes por los obstáculos y aprende de tus errores. Con el tiempo, desarrollarás las habilidades y los hábitos necesarios para ingresar correctamente al mundo de las finanzas y llevar una vida económica próspera.
                    </p>
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

export default BlogAdulto