import { fetchCoinData } from "../../services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function CoinTable({ currency }) {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["coins", page, currency], // Include currency in queryKey
    queryFn: () => fetchCoinData(page, currency), // Fetch data based on currency
    // retry: 2,
    // retryDelay: 1000,
    // cacheTime: 1000 * 60 * 2,
    // staleTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    console.log("Currency changed to:", currency);
    console.log("Data Fetched:", data);
  }, [currency, data]); // Add currency to the dependency array

  function handleCoinRedirect(id) {
    navigate(`/details/${id}`);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  if (isFetching) {
    return <div>Fetching...</div>;
  }

  return (
    <>
      <div className="my-5 flex flex-col items-center justify-center gap-5 w-[90vw] mx-auto">
            <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center ">
                {/* Header of the table */}
                <div className="basis-[30%] text-2xl md:text-3xl lg:text-4xl">
                    Coin 
                </div>
                <div  className="basis-[25%] text-2xl md:text-3xl lg:text-4xl">
                    Price {currency.toUpperCase()}
                </div>
                <div  className="basis-[20%] text-2xl md:text-3xl lg:text-4xl">
                    24h change 
                </div>
                <div  className="basis-[20%] text-2xl md:text-3xl lg:text-4xl">
                    Market Cap
                </div>
            </div>

            <div className="flex flex-col w-[85vw] mx-auto shadow-2xl rounded-2xl " >
                {isLoading && <div>Loading...</div>}
                {data && data.map((coin) => {
                    return (
                        <div onClick={() => handleCoinRedirect(coin.id)} key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointershadow-2xl rounded-2xl hover:scale-102  transition-transform">
                            <div className="flex items-center justify-start gap-3 basis-[35%] cursor-pointer">

                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" loading="lazy"/>
                                </div>

                                <div className="flex flex-col"> 
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>


                            </div>

                            <div className="basis-[25%]">
                                {coin.current_price}
                            </div>
                            <div className="basis-[20%]">
                                {coin.price_change_24h}
                            </div>
                            <div className="basis-[20%]">
                                {coin.market_cap}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-4 justify-center items-center">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page-1)} 
                    className="btn btn-primary btn-wide text-white text-2xl"
                >
                    Prev
                </button>
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
