import { useLocation } from "react-router-dom";

export function TransferDone() {
  const location = useLocation();
  const message = location.state.successmessage;
  const name = location.state.name;
  const amount = location.state.amount;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-6">{message}</h2>

        <div className="flex items-center justify-center mb-4">
          <div className="h-10 w-10 bg-green-500 text-white rounded-full flex items-center  font-semibold text-lg">
            {name[0].toUpperCase()}
          </div>
          <div className="ml-3 font-semibold text-md"></div>
        </div>

        <div className="mb-2 text-xl font-semibold text-center">₹ {amount}</div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md ">
          Back
        </button>
        <p>{}</p>
      </div>
    </div>
  );
}
