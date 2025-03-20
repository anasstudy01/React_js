import { fetchCoinData } from "../../services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function CoinTable() {
    const [page, setPage] = useState(1);
    
     
    
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoinData(page, "usd"),
    retry: 2,
    retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    console.log("Data Fetched", data);
  }
  , [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  if (isFetching) {
    return <div>Fetching...</div>;
  }

  return <>Coin Table
  
  <button className="bg-white px-6 mx-5 text-black rounded-xl  py-2" onClick={() => setPage((prev) => prev - 1)}>Previous</button>
  <button  className="bg-white px-6  mx-5 text-black rounded-xl py-2"  onClick={() => setPage((prev) => prev + 1)}>Next</button>
  {page}
  </>;
}

export default CoinTable;