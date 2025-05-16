import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/login";
import Pagina404 from "../pages/Pagina404";
import Home from "../pages/home";

const Rotas = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Pagina404 />} />

        </Routes>

        </BrowserRouter>
     );
}
 
export default Rotas;