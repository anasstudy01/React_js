import "./App.css";
import Navbar from "./componets/navbar/Navbar";
import Banner from "./componets/banner/Banner";
import CoinTable from "./componets/CoinTable/CoinTable";
import { useState } from "react";

function App() {
  const [currency, setCurrency] = useState("usd");  
  return (
    <>
      <div className="text-3xl text-white text-center rounded-md ">
        <Navbar setCurrency={setCurrency}/>
        <Banner />
        <CoinTable currency={currency}/>
      </div>
    </>
  );
}

export default App;
