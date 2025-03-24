import { useContext, useState } from "react";
import { useEffect } from "react";
import Converter from "../../../Context/GlobalContext";
function CoinTable() {
  // variablas creation
  let {currency,setCurrency} = useContext(Converter);
  const perPage = 20;
  const[ page ,setPage] = useState(1);

  const [data, setData] = useState(null);

  //fetching data from api and setting it to data
  async function fetchData() {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`
    );
    const coins = await response.json();
    console.log(coins);
    setData(coins);
  }

  useEffect(() => fetchData, [page, data,currency]);

  const handleCoinRedirect = (id) => {
    window.location.href = `https://www.coingecko.com/en/coins/${id}`;
  };

  return (
    <>
      
      <div>
                     <button className="bg-yellow-500 px-4 py-2 rounded-xl text-black font-semibold mx-180 my-5" onClick={()=>{setCurrency(currency==="USD" ?"INR":"USD")}}>currency {currency} </button>
        <div className=" tableheading my-3 flex justify-center rounded mx-15">
          <div className=" w-100 bg-gray-500 text-xl text-black py-2 px-10">
            Coin
          </div>
          <div className=" w-100 bg-gray-500 text-xl text-black py-2 px-10">
            Price
          </div>
          <div className=" w-100 bg-gray-500 text-xl text-black py-2 px-10">
            24h Change
          </div>
          <div className=" w-100 bg-gray-500 text-xl text-black py-2 px-10">
            Market Cap
          </div>
        </div>
        <div className="flex flex-col w-[85vw] mx-auto shadow-2xl rounded-2xl ">
          {data &&
            data.map((coin) => {
              return (
                <div
                  onClick={() => handleCoinRedirect(coin.id)}
                  key={coin.id}
                  className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointershadow-2xl rounded-2xl hover:scale-102  transition-transform"
                >
                  <div className="flex items-center justify-start gap-3 basis-[35%] cursor-pointer">
                    <div className="w-[5rem] h-[5rem]">
                      <img
                        src={coin.image}
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex flex-col">
                      <div className="text-3xl">{coin.name}</div>
                      <div className="text-xl">{coin.symbol}</div>
                    </div>
                  </div>

                  <div className="basis-[25%]">{coin.current_price}</div>
                  <div className="basis-[20%]">{coin.price_change_24h}</div>
                  <div className="basis-[20%]">{coin.market_cap}</div>
                </div>
              );
            })}
        </div>


        <div className=" footbtn flex gap-4 justify-center items-center">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page-1)} 
                    className="btn btn-primary btn-wide text-white text-2xl"
                >
                    Prev
                </button>
                {page}
                <button 
                    onClick={() => setPage(page+1)} 
                    className="btn btn-secondary btn-wide text-white text-2xl"
                >
                    Next
                </button>
            </div>
      </div>
    </>
  );
}

export default CoinTable;
