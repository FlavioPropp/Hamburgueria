import Header from "./Header";
import Footer from "./Footer";

import { Link } from "react-router-dom";

import "./MainPageStyle.css";

export default function MainPage(){

    return(
        <main>
            <Header/>
            <div className="BannerMain MarginHeader">
                <h1>Bem Vindo</h1>
                <h2> Aproveite nosso site e cardápio, bom apetite!!</h2>
            </div>
            <div className="MainPage">
                <div className="IntroCardapio">
                    <h3>Nosso Cardapio</h3>
                    <p>
                        Se você procura um cardápio diversificado e extramamente completo, você veio ao lugar certo.
                    </p>
                    <p>
                        Contamos com um cardápio repleto de hamburguers diferenciados, feitos a mão pelos melhores chapeiros da região,
                        que exploram ao máximo a arte de fazer burgers.<br></br> <span><Link className="PageLink" to="/Cardapio">Clique aqui</Link></span> para acessar nosso cardápio.
                    </p>
                </div>
                <div id="Espaco"className="Divisao"></div>
                <div className="IntroEspaco">
                    <h3>Nosso Espaço</h3>
                    <p>
                        Contamos com um espaço amplo, preparado para atender a sua necessidade, com reservas de mesa para <span>UMA, DUAS, e VARIAS pessoas</span>,
                         também atendendo eventos. 
                    </p>
                    <div className="BoxImg">
                        <img src="/assets/interior1.jpg" alt="Interior"></img>
                        <img src="/assets/interior3.jpg" alt="Interior"></img>
                        <img src="/assets/interior2.jpg" alt="Interior"></img>
                    </div>
                </div>

                <div>
                    <h3>Localização</h3>
                    <iframe className="Iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13737.148162291562!2d-51.76655698402942!3d-30.59766597433496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951a6a6a094e0f4f%3A0xfed6b8abcd12fa2f!2sCerro%20Grande%20do%20Sul%2C%20RS%2C%2096770-000!5e0!3m2!1spt-BR!2sbr!4v1687997600747!5m2!1spt-BR!2sbr"></iframe>
                </div>                
            </div>
            <Footer/>
        </main>
    )

}