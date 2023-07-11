import Header from './Header'
import Footer from './Footer'

import './SobreStyle.css'

export default function Sobre(){
    return(
        <>
            <Header/>
                <div className='MarginHeader bgSobre'>
                    <div className='BoxSobre'>
                    <h3>
                        Sobre Nós
                    </h3>
                    <p>Descricao sobre historia, valores, inspiracoes, etc</p>
                    </div>
                </div>
            <Footer/>
        </>
    )
}