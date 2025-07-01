import React, { useState } from "react";
import axios from "axios";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

export function SendMoney() {
  const [input, setInput] = useState(0);
  const navigate = useNavigate();
  const [message, _setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const location = useLocation();
  const { userData } = location.state || {};
  const firstName = searchParams.get("username");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-violet-400 to-slate-50 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-6">Send Money</h2>

        <div className="flex items-center mb-4">
          <div className="h-10 w-10 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold text-lg">
            {firstName[0].toUpperCase()}
          </div>
          <div className="ml-3 font-semibold text-md">
            {firstName} {userData}
          </div>
        </div>

        <div className="mb-2 text-sm font-medium">Amount (in Rs)</div>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="number"
          placeholder="Enter amount"
          className="w-full px-4 py-2 border rounded-md mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={async () => {
            const response = await axios.post(
              `${import.meta.env.VITE_API_URL}/api/v1/account/transfer`,
              {
                id: id,
                amount: input,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                  "Content-Type": "application/json",
                },
              }
            );
            navigate("/transfer", {
              state: {
                name: firstName,
                amount: input,
                successmessage: response.data.message,
              },
            });
          }}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md "
        >
          Initiate Transfer
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}
