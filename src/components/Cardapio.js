import Header from "./Header";
import Footer from "./Footer"

import './CardapioStyle.css';

export default function Cardapio(){
    return(
        <>
        <Header/>
        <div className="MarginHeader">
            <div className="TituloCardapio">
                <h3>Confira nosso cardápio:</h3>
            </div>

            <div className="BoxBurguerList">
            <h4>Burguers Clássicos</h4>
                <dl>
                    <dt>Carne e queijo</dt>
                    <dd className="DescCardapio">180g de Carne, Pão, Maionese, Queijo Cheddar, Mussarela<p>R$ 18,00</p></dd>

                    <dt>Tradicional</dt>
                    <dd className="DescCardapio">180g de Carne, Pão, Maionese, Alface, Tomate, Pepino, Queijo Cheddar<p>R$ 19,00</p></dd>

                    <dt>Tradicional Acebolado</dt>
                    <dd className="DescCardapio">180g de Carne, Pão, Maionese, Alface, Tomate, Queijo Cheddar, Cebola Roxa<p>R$ 21,00</p></dd>

                    <dt>Tradicional Duplo</dt>
                    <dd className="DescCardapio">2 Bifes de 180g, Pão, Maionese, Alface, Tomate, Pepino, Queijo Cheddar<p>R$ 25,00</p></dd>

                    <dt>Bacon</dt>
                    <dd className="DescCardapio">180g Carne, Pão, Maionese, Alface, Tomate, Queijo Cheddar, 4 fatias de Bacon<p>R$ 23,00</p></dd>

                    <dt>Bacon Duplo</dt>
                    <dd className="DescCardapio">2 Bifes de 180g, Pão, Maionese, Alface, Tomate, Queijo Cheddar, 8 fatias de Bacon<p>R$ 29,00</p></dd>

                    <dt>Tradicional Frango</dt>
                    <dd className="DescCardapio">180g de Peito de Frango e Sobrecoxa, Pão, Maionese, Salada Dupla (Alface e Tomate), Molho Especial, Queijo Cheddar, Mussarela<p>R$ 19,00</p></dd>
                </dl>


                <h4>Burguers Especiais</h4>
                <dl>
                    <dt>Churrasco</dt>
                    <dd className="DescCardapio">180g de Linguiça, Pão, Maionese, Alface, Tomate, Queijo Cheddar, Barbecue e 4 fatias de Bacon<p>R$ 20,00</p></dd>

                    <dt>Costela</dt>
                    <dd className="DescCardapio">180g de Carne de Costela, Pão, Maionese, Alface, Tomate, Queijo Cheddar<p>R$ 26,00</p></dd>

                    <dt>Agridoce</dt>
                    <dd className="DescCardapio">180g de Carne, Pão, Maionese, Rúcula, Tomate, Queijo Mussarela e Geleia de Pimenta<p>R$ 23,00</p></dd>

                    <dt>Burguer ao Prato(sem pão)</dt>
                    <dd className="DescCardapio">180g de Carne, Queijo Cheddar, Mussarela, Alface, Tomate, Pepino, Molho Especial e Fritas<p>R$ 23,00</p></dd>

                    <dt>Hamburguer da Casa</dt>
                    <dd className="DescCardapio">Pão, Maionese, Rúcula, Cebola Roxa Caramelizada, Bacon, Barbecue, Carne de Costela Extremamente Temperada, Queijo Cheddar<p>R$ 27,00</p></dd>

                    <dt>Hamburguer Doce</dt>
                    <dd className="DescCardapio">Pão Australiano, Creme de Avelã(Nutela), Cookies de Chocolate, Ganache de Chocolate e Morango<p>R$ 18,00</p></dd>
                </dl>
            </div>
            </div>
            <Footer/>
        </>
    )
}