import './FooterStyle.css'

export default function Footer(){
    return(
        <footer>
        <div id='Contato' className='BoxFooter'>
            <div className='ContatoFooter'>
                <h4>Contato</h4>
                <p>TEL: (51)987654321</p>
                <p>Email: email.exemplo@email.com.br</p>
            </div>
            <div className='RedeSocial'>
                <a href="https://twitter.com"><img src="/assets/3670151.png" alt="twitter"/></a>
                <a href="https://www.instagram.com"><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="instagram"/></a>
                <a href="https://www.facebook.com"><img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="facebook"/></a>
            </div>
        </div>

        <p className='copyright'><span>&copy;</span>Copyright, 2023. Criado e desenvolvido por Flávio Propp</p>
        </footer>
    )
}