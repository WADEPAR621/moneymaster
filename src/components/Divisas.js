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

import "../styles/Divisas.css"
const Divisas = () => {

    const [amounts, setAmout] = useState("");
    const [froms, setfrom] = useState("");
    const [tos, setTo] = useState("");
    
    const convertBtn = document.getElementById('convertBtn');

const convertir= () => {
  const amount = amounts;
  const from = froms;
  const to = tos;

  // Definir los índices de conversión
  const conversionRates = {
    'GBP': 0.8538,
    'USD': 1.1022,
    'JPY': 153.8400,
    'CNY': 7.9274,
    'ALL': 104.0500,
    'AOA': 904.8127,
    'IRR': 4.1209,
    'DZD': 148.3503,
    'ARS': 289.6779,
    'AMD': 425.7000,
    'AUD': 1.6479,
    'AZN': 1.8755,
    'BDT': 118.2746,
    'BHD': 0.4266,
    'BZD': 2.1976,
    'BYN': 3.1887,
    'BOB': 7.5453,
    'BAM': 1.9558,
    'BWP': 14.7655,
    'BRL': 5.3477,
    'BND': 1.4780,
    'BGN': 1.9558,
    'KHR': 4570.5000,
    'CAD': 1.4574,
    'QAR': 3.9880,
    'CZK': 23.8280,
    'CLP': 898.5500,
    'COP': 4187.4997,
    'KRW': 1420.8000,
    'DKK': 7.4524,
    'EGP': 34.0533,
    'AED': 4.0236,
    'ETB': 60.3148,
    'PHP': 60.9700,
    'FJD': 0.4057,
    'LVL': 2.8469,
    'GHS': 12.0947,
    'HKD': 8.6268,
    'HUF': 376.4800,
    'INR': 90.7173,
    'IDR': 16608.8000,
    'IRR': 44674.0000,
    'ISK': 146.9000,
    'ILS': 4.0450,
    'JOD': 781.2500,
    'KZT': 485.4000,
    'KES': 155.1603,
    'KGS': 96.8439,
    'KWD': 0.3363,
    'LAK': 20822.0000,
    'LBP': 16315.5000,
    'MYR': 5.1263,
    'MAD': 10.7743,
    'MUR': 50.2924,
    'MRO': 38.9300,
    'MXN': 18.7485,
    'MDL': 20.1151,
    'MNT': 3738.4600,
    'MZN': 70.4400,
    'MMK': 2315.1000,
    'NAD': 20.3336,
    'NPR': 129.6179,
    'NGN': 863.2189,
    'NOK': 11.3310,
    'NZD': 1.7818,
    'OMR': 0.4213,
    'PKR': 305.7510,
    'PAB': 0.2542,
    'PYG': 8001.7700,
    'PEN': 3.9836,
    'PLN': 4.4473,
    'DOP': 57.2766,
    'RON': 4.9510,
    'RUB': 99.8890,
    'RSD': 117.2331,
    'SGD': 1.4751,
    'LKR': 208.4879,
    'ZAR': 20.3368,
    'SEK': 11.6800,
    'CHF': 0.9683,
    'THB': 38.4340,
    'TWD': 33.4240,
    'TZS': 2536.6524,
    'TJS': 11.9945,
    'TTD': 7.3935,
    'TND': 3.3778,
    'TRY': 28.8159,
    'TMT': 3.8581,
    'UAH': 40.1670,
    'UGX': 4047.9050,
    'UYU': 41.9326,
    'UZS': 12781.2900,
    'VES': 28.7966,
    'VND': 26192.0000,
    'ZMW': 20.1008,
    'ZWL': 5513.7211
  };

  // Verificar si las monedas de origen y destino son válidas
  if (from in conversionRates && to in conversionRates) {
    // Realizar la conversión
    const result = amount * (conversionRates[to] / conversionRates[from]);

    alert(`${amount} ${from} = ${result.toFixed(2)} ${to}`);
  } else {
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

                <div class="container">
    <h1>Conversor de Divisas</h1>
    <div class="input-container">
      <label for="amount">Monto:</label>
      <input type="number" id="amount" onChange={(e) => {setAmout(e.target.value);}} placeholder="Ingrese el monto"/>
    </div>
    <div class="input-container">
        <label for="transform" class="custom-label">Transformar de:</label>
      </div>
    <div class="input-container">
      <select id="from" onChange={(e) => {setfrom(e.target.value);}}>
        <option value="USD">USD - Dólares USA</option>
        <option value="EUR">EUR - Euros</option>
        <option value="GBP">GBP - Libras Esterlinas</option>
        <option value="JPY">JPY - Yenes Japoneses</option>
        <option value="CNY">CNY - Yuanes Chinos</option>
        <option value="ALL">ALL - Leks</option>
        <option value="AOA">AOA - Kwanzas</option>
        <option value="IRR">IRR - Riales</option>
        <option value="DZD">DZD - Dinares Argelinos</option>
        <option value="ARS">ARS - Pesos Argentinos</option>
        <option value="AMD">AMD - Drams</option>
        <option value="AUD">AUD - Dólares Australianos</option>
        <option value="AZN">AZN - Manat Azeríes</option>
        <option value="BDT">BDT - Takas</option>
        <option value="BHD">BHD - Dinares</option>
        <option value="BZD">BZD - Dólares Beliceños</option>
        <option value="BYN">BYN - Rublos Bielorrusos</option>
        <option value="BOB">BOB - Bolivianos</option>
        <option value="BAM">BAM - Marcos Convertibles</option>
        <option value="BRL">BRL - Reales Brasileños</option>
        <option value="BND">BND - Dólares de Brunéi</option>
        <option value="BGN">BGN - Levs</option>
        <option value="KHR">KHR - Rieles Camboyanos</option>
        <option value="CAD">CAD - Dólares Canadienses</option>
        <option value="QAR">QAR - Riyales Cataries</option>
        <option value="CZK">CZK - Coronas Checas</option>
        <option value="CLP">CLP - Pesos Chilenos</option>
        <option value="COP">COP - Pesos Colombianos</option>
        <option value="KRW">KRW - Won Surcoreanos</option>
        <option value="DKK">DKK - Coronas Danesas</option>
        <option value="EGP">EGP - Libras Egipcias</option>
        <option value="AED">AED - Dirhams de Emiratos Árabes Unidos</option>
        <option value="ETB">ETB - Birr Etíopes</option>
        <option value="PHP">PHP - Pesos Filipinos</option>
        <option value="FJD">FJD - Dólares Fiyianos</option>
        <option value="HRK">HRK - Laris</option>
        <option value="GHS">GHS - Cedi</option>
        <option value="HKD">HKD - Dólares de Hong Kong</option>
        <option value="HUF">HUF - Forints Húngaros</option>
        <option value="INR">INR - Rupias Indias</option>
        <option value="IDR">IDR - Rupias Indonesias</option>
        <option value="IRR">IRR - Riales Iraníes</option>
        <option value="ISK">ISK - Coronas Islandesas</option>
        <option value="ILS">ILS - Nuevos Shéquels</option>
        <option value="JOD">JOD - Dinares Jordanos</option>
        <option value="KZT">KZT - Tenges</option>
        <option value="KES">KES - Chelines Kenianos</option>
        <option value="KWD">KWD - Dinares Kuwaitíes</option>
        <option value="LAK">LAK - Kip</option>
        <option value="LBP">LBP - Libras Libanesas</option>
        <option value="MYR">MYR - Ringgits</option>
        <option value="MAD">MAD - Dirhams Marroquíes</option>
        <option value="MUR">MUR - Rupias de Mauricio</option>
        <option value="MXN">MXN - Pesos Mexicanos</option>
        <option value="MDL">MDL - Leus Moldavos</option>
        <option value="MNT">MNT - Tugriks</option>
        <option value="MZN">MZN - Metical</option>
        <option value="MMK">MMK - Kyats</option>
        <option value="NAD">NAD - Dólares Namibios</option>
        <option value="NPR">NPR - Rupias Nepalesas</option>
        <option value="NGN">NGN - Nairas</option>
        <option value="NOK">NOK - Coronas Noruegas</option>
        <option value="NZD">NZD - Dólares Neozelandeses</option>
        <option value="OMR">OMR - Riales Omaníes</option>
        <option value="PKR">PKR - Rupias Pakistaníes</option>
        <option value="PAB">PAB - Balboas</option>
        <option value="PYG">PYG - Guaraníes</option>
        <option value="PEN">PEN - Soles</option>
        <option value="PLN">PLN - Zlotys Polacos</option>
        <option value="QAR">QAR - Riales de Qatar</option>
        <option value="RON">RON - Leis Rumanos</option>
        <option value="RUB">RUB - Rublos Rusos</option>
        <option value="RSD">RSD - Dinares Serbios</option>
        <option value="SGD">SGD - Dólares de Singapur</option>
        <option value="LKR">LKR - Rupias de Sri Lanka</option>
        <option value="ZAR">ZAR - Rands Sudafricanos</option>
        <option value="SEK">SEK - Coronas Suecas</option>
        <option value="CHF">CHF - Francos Suizos</option>
        <option value="THB">THB - Bahts</option>
        <option value="TWD">TWD - Nuevos Dólares Taiwaneses</option>
        <option value="TZS">TZS - Chelines Tanzanos</option>
        <option value="TJS">TJS - Somoni</option>
        <option value="TTD">TTD - Dólares Trinitenses</option>
        <option value="TND">TND - Dinares Tunecinos</option>
        <option value="TRY">TRY - Liras Turcas</option>
        <option value="TMT">TMT - Manat Turkmeno</option>
        <option value="UAH">UAH - Grivnas</option>
        <option value="UGX">UGX - Chelines Ugandeses</option>
        <option value="UYU">UYU - Pesos Uruguayos</option>
        <option value="UZS">UZS - Sum Uzbeko</option>
        <option value="VES">VES - Bolívares Soberanos</option>
        <option value="VND">VND - Dongs Vietnamitas</option>
        <option value="ZMW">ZMW - Kwachas Zambianos</option>
        <option value="ZWD">ZWD - Dólar de Zimbabue</option>
      </select>
    </div>
    <div class="input-container">
      <label for="to">Transformar a:</label>
      <select id="to" onChange={(e) => {setTo(e.target.value);}}>
        <option value="USD">USD - Dólares USA</option>
        <option value="EUR">EUR - Euros</option>
        <option value="GBP">GBP - Libras Esterlinas</option>
        <option value="JPY">JPY - Yenes Japoneses</option>
        <option value="CNY">CNY - Yuanes Chinos</option>
        <option value="ALL">ALL - Leks</option>
        <option value="AOA">AOA - Kwanzas</option>
        <option value="IRR">IRR - Riales</option>
        <option value="DZD">DZD - Dinares Argelinos</option>
        <option value="ARS">ARS - Pesos Argentinos</option>
        <option value="AMD">AMD - Drams</option>
        <option value="AUD">AUD - Dólares Australianos</option>
        <option value="AZN">AZN - Manat Azeríes</option>
        <option value="BDT">BDT - Takas</option>
        <option value="BHD">BHD - Dinares</option>
        <option value="BZD">BZD - Dólares Beliceños</option>
        <option value="BYN">BYN - Rublos Bielorrusos</option>
        <option value="BOB">BOB - Bolivianos</option>
        <option value="BAM">BAM - Marcos Convertibles</option>
        <option value="BRL">BRL - Reales Brasileños</option>
        <option value="BND">BND - Dólares de Brunéi</option>
        <option value="BGN">BGN - Levs</option>
        <option value="KHR">KHR - Rieles Camboyanos</option>
        <option value="CAD">CAD - Dólares Canadienses</option>
        <option value="QAR">QAR - Riyales Cataries</option>
        <option value="CZK">CZK - Coronas Checas</option>
        <option value="CLP">CLP - Pesos Chilenos</option>
        <option value="COP">COP - Pesos Colombianos</option>
        <option value="KRW">KRW - Won Surcoreanos</option>
        <option value="DKK">DKK - Coronas Danesas</option>
        <option value="EGP">EGP - Libras Egipcias</option>
        <option value="AED">AED - Dirhams de Emiratos Árabes Unidos</option>
        <option value="ETB">ETB - Birr Etíopes</option>
        <option value="PHP">PHP - Pesos Filipinos</option>
        <option value="FJD">FJD - Dólares Fiyianos</option>
        <option value="HRK">HRK - Laris</option>
        <option value="GHS">GHS - Cedi</option>
        <option value="HKD">HKD - Dólares de Hong Kong</option>
        <option value="HUF">HUF - Forints Húngaros</option>
        <option value="INR">INR - Rupias Indias</option>
        <option value="IDR">IDR - Rupias Indonesias</option>
        <option value="IRR">IRR - Riales Iraníes</option>
        <option value="ISK">ISK - Coronas Islandesas</option>
        <option value="ILS">ILS - Nuevos Shéquels</option>
        <option value="JOD">JOD - Dinares Jordanos</option>
        <option value="KZT">KZT - Tenges</option>
        <option value="KES">KES - Chelines Kenianos</option>
        <option value="KWD">KWD - Dinares Kuwaitíes</option>
        <option value="LAK">LAK - Kip</option>
        <option value="LBP">LBP - Libras Libanesas</option>
        <option value="MYR">MYR - Ringgits</option>
        <option value="MAD">MAD - Dirhams Marroquíes</option>
        <option value="MUR">MUR - Rupias de Mauricio</option>
        <option value="MXN">MXN - Pesos Mexicanos</option>
        <option value="MDL">MDL - Leus Moldavos</option>
        <option value="MNT">MNT - Tugriks</option>
        <option value="MZN">MZN - Metical</option>
        <option value="MMK">MMK - Kyats</option>
        <option value="NAD">NAD - Dólares Namibios</option>
        <option value="NPR">NPR - Rupias Nepalesas</option>
        <option value="NGN">NGN - Nairas</option>
        <option value="NOK">NOK - Coronas Noruegas</option>
        <option value="NZD">NZD - Dólares Neozelandeses</option>
        <option value="OMR">OMR - Riales Omaníes</option>
        <option value="PKR">PKR - Rupias Pakistaníes</option>
        <option value="PAB">PAB - Balboas</option>
        <option value="PYG">PYG - Guaraníes</option>
        <option value="PEN">PEN - Soles</option>
        <option value="PLN">PLN - Zlotys Polacos</option>
        <option value="QAR">QAR - Riales de Qatar</option>
        <option value="RON">RON - Leis Rumanos</option>
        <option value="RUB">RUB - Rublos Rusos</option>
        <option value="RSD">RSD - Dinares Serbios</option>
        <option value="SGD">SGD - Dólares de Singapur</option>
        <option value="LKR">LKR - Rupias de Sri Lanka</option>
        <option value="ZAR">ZAR - Rands Sudafricanos</option>
        <option value="SEK">SEK - Coronas Suecas</option>
        <option value="CHF">CHF - Francos Suizos</option>
        <option value="THB">THB - Bahts</option>
        <option value="TWD">TWD - Nuevos Dólares Taiwaneses</option>
        <option value="TZS">TZS - Chelines Tanzanos</option>
        <option value="TJS">TJS - Somoni</option>
        <option value="TTD">TTD - Dólares Trinitenses</option>
        <option value="TND">TND - Dinares Tunecinos</option>
        <option value="TRY">TRY - Liras Turcas</option>
        <option value="TMT">TMT - Manat Turkmeno</option>
        <option value="UAH">UAH - Grivnas</option>
        <option value="UGX">UGX - Chelines Ugandeses</option>
        <option value="UYU">UYU - Pesos Uruguayos</option>
        <option value="UZS">UZS - Sum Uzbeko</option>
        <option value="VES">VES - Bolívares Soberanos</option>
        <option value="VND">VND - Dongs Vietnamitas</option>
        <option value="ZMW">ZMW - Kwachas Zambianos</option>
        <option value="ZWD">ZWD - Dólar de Zimbabue</option>
      </select>
    </div>
    <button id="convertBtn" onClick={convertir()}>Convertir</button>
    <div id="result"></div>
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

export default Divisas