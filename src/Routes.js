import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import Cardapio from "./components/Cardapio";
import Sobre from "./components/Sobre";

function Rotas(){

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
                <Route path="/Cardapio" element={<Cardapio/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Rotas