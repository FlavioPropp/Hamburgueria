
import './HeaderStyle.css'
import { Link } from 'react-router-dom'


function Header(){

    return(
        <header>
            <div className="BoxTopo">
                   <a href='/'><img src="/assets/logo.png" alt="LOGO"/></a>
                        <nav className='NaviBar'>
                            <a className='NavLink' href='#Contato'>Contato</a>
                            <Link className="NavLink" to="/Cardapio">Cardapio</Link>
                            <Link className='NavLink' to="/Sobre">Sobre</Link>
                            <a className="NavLink" href='/#Espaco'>Nosso Espaço</a>
                        </nav>
            </div>
        </header>
    )
}
export default Header