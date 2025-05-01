import React from "react";
import ToDo from "./components/ToDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuPage from "./components/MenuPage";
import SareePage from "./pages/SareePage";
import BanglesPage from "./pages/BanglesPage";
import ChuditarPage from "./pages/ChuditarPage";
import JewelsPage from "./pages/JewelsPage";
import KurtaPage from "./pages/KurtaPage";
import NightClothesPage from "./pages/NightClothesPage";
import PaymentOptions from "./pages/PaymentOptions";
import PaymentGateway from "./pages/PaymentGateway";
import ShopHome from "./pages/ShopHome";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<ShopHome />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shopping" element={<MenuPage />}/>
        <Route path="/saree" element={<SareePage />}/>
        <Route path="/kurta" element={<KurtaPage />}/>
        <Route path="/chuditar" element={<ChuditarPage />}/>
        <Route path="/bangle" element={<BanglesPage />}/>
        <Route path="/jewellery" element={<JewelsPage />}/>
        <Route path="/nightdress" element={<NightClothesPage />}/>
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/pay" element={<PaymentGateway />} />
        
      </Routes>
    </Router>
  )

}

export default App;