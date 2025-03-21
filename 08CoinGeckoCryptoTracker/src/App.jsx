import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import Banner from "./componets/banner/Banner";
import CoinTable from "./componets/CoinTable/CoinTable";
import { useState } from "react";
import Home from "./pages/Home";
import { CurrencyContext } from "./context/CurrencyContext";
function App() {
  const [currency, setCurrency] = useState("usd");  
  return (
    <>
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
    <Home />
    </CurrencyContext.Provider>

    </>
  );
}

export default App;
