import { Appbar } from "../Components/Appbar";
import { Balance } from "../Components/balance";
import { Users } from "../Components/Users";
import { useLocation } from "react-router-dom";
export function DashBoard() {
  const location = useLocation();
  const balance = location.state?.balance;
  return (
    <div>
      <Appbar />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
}
