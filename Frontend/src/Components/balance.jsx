import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = ({ value }) => {
    const [balance, setBalance] = useState(0)
    
      useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/api/v1/account/balance`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(response => {
            setBalance(response.data.balance);
            
          });
      }, []);
    return <div className="flex">
        <div className="text-lg text-white font-semibold">
            Your balance
        </div>
        <div className="font-semibold text-white ml-4 text-lg">
            Rs ₹ {balance || value}
        </div>
    </div>
}