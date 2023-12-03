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
const BlogInversion = ({ handleEditParticion }) => {

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
                </div>
            </header>

            <div class="Totality-grid">

                <div class="Pretabla-flex">
                    <h2 class="Pretabla-flex__ParticionesTexto">Ingresa a un Mundo de INversiones y Compra/Venta de Acciones en La Bolsa de Valores</h2>

                </div>
                <div class="Blog">
                    <p>
                        Ingresar al mundo de las inversiones y la compra/venta de acciones en la bolsa de valores puede parecer abrumador al principio, pero con la información y la comprensión adecuadas, puedes adentrarte en este emocionante campo financiero. A continuación, te proporcionaré una explicación extensa y detallada para comenzar en el mundo de las inversiones y la bolsa de valores:
                    </p>
                    <img src="https://mundoejecutivo.com.mx/wp-content/uploads/2023/04/mejores-cuentas-bancarias-ahorro-para-ninos-condusef.jpg" />
                    <p>
                        1. Comprender la bolsa de valores: La bolsa de valores es un mercado organizado donde se compran y venden valores financieros, como acciones, bonos y fondos mutuos. Es importante comprender el funcionamiento básico de la bolsa de valores, incluyendo los conceptos de oferta y demanda, precios de las acciones, órdenes de compra y venta, así como las instituciones y regulaciones que supervisan el mercado.
                    </p>
                    <p>
                        2. Educación financiera: Antes de comenzar a invertir, es esencial adquirir una sólida educación financiera. Lee libros, toma cursos en línea o asiste a seminarios sobre inversiones y mercados financieros. Familiarízate con los términos y conceptos clave, como dividendos, relación precio-ganancias (P/E), análisis fundamental y técnico, y diversificación de la cartera.
                    </p>
                    <p>
                        3. Establecer metas financieras y tolerancia al riesgo: Antes de invertir, define tus metas financieras a corto y largo plazo. ¿Estás ahorrando para la jubilación, la educación de tus hijos o la compra de una casa? También evalúa tu tolerancia al riesgo, es decir, cuánto riesgo estás dispuesto a asumir. Esto te ayudará a determinar la estrategia de inversión adecuada para ti.
                    </p>
                    <p>
                        4. Elige un corredor o plataforma de inversión: Para comprar y vender acciones, necesitarás abrir una cuenta con un corredor de bolsa o utilizar una plataforma de inversión en línea. Investiga diferentes corredores y compara sus comisiones, herramientas de investigación, facilidad de uso y servicio al cliente. Elige uno que se adapte a tus necesidades y preferencias.
                    </p>
                    <img src="https://www.bcra.gob.ar/Imagenes/BCRAyVos/Aprendiendo%20a%20ahorrar%20placa%205.jpg" />
                    <p>
                        5. Investigación y análisis de acciones: Antes de invertir en una acción específica, es importante realizar una investigación exhaustiva. Analiza el desempeño histórico de la empresa, su modelo de negocio, sus competidores, su posición en el mercado y las perspectivas futuras. Utiliza tanto el análisis fundamental (evaluación de los fundamentos financieros de la empresa) como el análisis técnico (estudio de patrones y tendencias en los gráficos de precios) para tomar decisiones informadas.
                    </p>
                    <p>
                        6. Diversificación de la cartera: La diversificación es clave para reducir el riesgo en la inversión. No coloques todos tus huevos en una sola canasta. En lugar de ello, construye una cartera diversificada invirtiendo en acciones de diferentes sectores y regiones geográficas. Considera también la inclusión de otros tipos de activos, como bonos o fondos mutuos, para equilibrar el riesgo y potencialmente aumentar los rendimientos.
                    </p>
                    <p>
                        7. Elige una estrategia de inversión: Hay diferentes estrategias de inversión que puedes seguir, como el enfoque de inversión a largo plazo, el trading activo o el seguimiento de índices de referencia. Cada estrategia tiene sus propias ventajas y desafíos. Evalúa tus metas, tolerancia al riesgo y horizonte de tiempo, y selecciona la estrategia que mejor se ajuste a tus necesidades.
                    </p>
                    <p>
                        8. Práctica y paciencia: Antes de invertir grandes sumas de dinero, considera practicar con una cuenta de simulación o utilizando una plataforma de inversión virtual. Esto te permitirá familiarizarte con el proceso de compra/venta de acciones sin arriesgar tu capital. Recuerda que la inversión requiere paciencia. Los resultados a largo plazo suelen ser más significativos que los movimientos a corto plazo.
                    </p>
                    <img src="https://dercocenter-api.s3.us-east-1.amazonaws.com/medias/dercocenter/migration/news/iStock-1163095165-1.jpg" />
                    <p>
                        9. Mantente informado: Los mercados financieros son dinámicos y están sujetos a cambios constantes. Mantente actualizado con las noticias económicas y los acontecimientos que puedan afectar a tus inversiones. Sigue las publicaciones financieras, asiste a conferencias y mantén una red de contactos en el ámbito financiero para obtener información valiosa.
                    </p>
                    <p>
                        10. Evalúa y ajusta tu estrategia: Revisa periódicamente tu cartera de inversiones y evalúa su desempeño. Realiza ajustes si es necesario y considera diversificar aún más tu cartera a medida que evolucionen tus metas financieras y tu situación personal.
                    </p>
                    <p>
                        Recuerda que invertir en la bolsa de valores implica riesgos y es importante estar preparado para las fluctuaciones del mercado. Considera consultar a un asesor financiero para obtener orientación personalizada y asegurarte de que tus decisiones de inversión estén alineadas con tus metas y circunstancias individuales.
                    </p>
                    <p>
                        En resumen, ingresar al mundo de las inversiones y la bolsa de valores requiere educación, investigación, paciencia y una estrategia bien planificada. A medida que adquieras experiencia y conocimientos, podrás tomar decisiones más informadas y aprovechar las oportunidades que ofrece el mercado de valores.
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

export default BlogInversion