import { useParams } from "react-router-dom";

function  CoinDetails() {
     const {coinId} = useParams();
    console.log("Coin Id:", coinId);
    
    return (
        <div>
            <h1>Coin Details page {coinId}</h1>
            
        </div>
    )
}  


export default CoinDetails;