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
const Blog2 = ({ handleEditParticion }) => {

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
                    <h2 class="Pretabla-flex__ParticionesTexto">COMO AHORRAR DE FORMA CORRECTA</h2>

                </div>
                <div class="Blog">
                    <p>
                        Ahorrar es una habilidad financiera fundamental que todos deberíamos cultivar para asegurar nuestro bienestar económico a largo plazo. Sin embargo, ahorrar correctamente implica más que simplemente guardar dinero en una cuenta bancaria. Requiere una planificación cuidadosa, disciplina y conocimiento de estrategias financieras efectivas. A continuación, te proporcionaré una guía detallada sobre cómo ahorrar correctamente:
                    </p>
                    <img src="https://mundoejecutivo.com.mx/wp-content/uploads/2023/04/mejores-cuentas-bancarias-ahorro-para-ninos-condusef.jpg"/>
                    <p>
                        1. Establece metas claras: Antes de comenzar a ahorrar, es importante establecer metas financieras claras y alcanzables. ¿Quieres ahorrar para comprar una casa, un automóvil o planificar tu jubilación? Establecer metas específicas te ayudará a mantenerte motivado y a dirigir tus esfuerzos hacia un propósito financiero.
                    </p>
                    <p>
                        2. Crea un presupuesto: El presupuesto es una herramienta esencial para controlar tus finanzas. Analiza tus ingresos y gastos mensuales y establece límites realistas en cada categoría. Identifica áreas en las que puedas reducir gastos innecesarios y destina esa cantidad extra al ahorro. Mantén un registro regular de tus gastos para asegurarte de que estás siguiendo tu presupuesto.
                    </p>
                    <p>
                        3. Paga tus deudas: Antes de enfocarte en ahorrar, es recomendable pagar tus deudas de alto interés, como tarjetas de crédito o préstamos personales. Estas deudas pueden acumular intereses significativos y frenar tu capacidad para ahorrar. Prioriza el pago de estas obligaciones para liberarte de ellas y poder destinar más dinero al ahorro a largo plazo.
                    </p>
                    <p>
                        4. Crea un fondo de emergencia: Un fondo de emergencia es un colchón financiero para hacer frente a gastos inesperados, como reparaciones del hogar o emergencias médicas. Recomiendo ahorrar de tres a seis meses de gastos de subsistencia en este fondo. Mantén este dinero en una cuenta de ahorros líquida y de fácil acceso para poder utilizarlo cuando lo necesites sin tener que recurrir a préstamos o endeudarte.
                    </p>
                    <img src="https://www.bcra.gob.ar/Imagenes/BCRAyVos/Aprendiendo%20a%20ahorrar%20placa%205.jpg"/>
                    <p>
                        5. Automatiza tus ahorros: Una forma efectiva de ahorrar es automatizar el proceso. Configura una transferencia automática desde tu cuenta corriente a una cuenta de ahorros cada mes. Esto garantizará que ahorres consistentemente sin tener que recordarlo o hacerlo manualmente. Además, considera opciones de ahorro como planes de jubilación o inversiones automatizadas, donde una parte de tus ingresos se destine automáticamente a estas cuentas.
                    </p>
                    <p>
                        6. Reduce gastos superfluos: Revisa tus hábitos de gasto y encuentra áreas en las que puedas reducir gastos. Esto no significa privarte por completo, sino identificar aquellos gastos que no son prioritarios y encontrar alternativas más económicas. Por ejemplo, puedes optar por cocinar en casa en lugar de comer fuera o cancelar suscripciones que no utilizas con frecuencia. Los pequeños ahorros en varios aspectos de tu vida pueden sumar grandes cantidades con el tiempo.
                    </p>
                    <p>
                        7. Busca opciones de inversión: Una vez que hayas establecido un fondo de emergencia sólido, considera invertir parte de tus ahorros. Las inversiones pueden ayudarte a hacer crecer tu dinero a largo plazo. Infórmate sobre diferentes opciones de inversión, como acciones, bonos, fondos mutuos o bienes raíces, y elige aquellas que se ajusten a tus metas financieras y tolerancia al riesgo. Considera consultar a un asesor financiero para recibir orientación profesional.
                    </p>
                    <p>
                        8. Mantén un estilo de vida sostenible: Finalmente, recuerda que ahorrar correctamente implica mantener un estilo de vida sostenible a largo plazo. Evita caer en la tentación de gastar más de lo necesario o de acumular deudas nuevamente. Cultiva una mentalidad de ahorro y busca oportunidades para aumentar tus ingresos, como desarrollar nuevas habilidades o emprender proyectos paralelos.
                    </p>
                    <img src="https://dercocenter-api.s3.us-east-1.amazonaws.com/medias/dercocenter/migration/news/iStock-1163095165-1.jpg"/>
                    <p>
                        En resumen, ahorrar correctamente requiere planificación, disciplina y toma de decisiones inteligentes. Establece metas claras, crea un presupuesto, paga tus deudas, crea un fondo de emergencia, automatiza tus ahorros, reduce gastos superfluos, busca opciones de inversión y mantén un estilo de vida sostenible. Con tiempo y esfuerzo, podrás alcanzar tus metas financieras y asegurar tu bienestar económico a largo plazo.
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

export default Blog2