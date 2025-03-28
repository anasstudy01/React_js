import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../../services/fetchCoinDetails";

function CoinDetails() {
  const { coinId } = useParams(); // Get the coin ID from the URL
  const [coinData, setCoinData] = useState(null); // State to store fetched data
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Fetch coin details when the component mounts
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCoinDetails(coinId); // Fetch data using the coin ID
        setCoinData(data); // Store the fetched data in state
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [coinId]); // Dependency array ensures this runs when coinId changes

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  return (
    <div >
      <div>
        <h1>{coinData?.id}</h1> {/* Display the coin ID */}
        
        <p>{coinData?.description?.en}</p> {/* Display the coin description */}
      </div>
    </div>
  );
}

export default CoinDetails;