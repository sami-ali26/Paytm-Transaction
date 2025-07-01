
import { Appbar } from "../Components/Appbar";
import { Balance } from "../Components/balance";
import { Users } from "../Components/Users";




export function DashBoard() {

  
 
  return (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-purple-500 via-blue-600 to-indigo-600">
      <Appbar />
      <div className="m-8">
        <Balance value={'10,000'} />
        <Users />
      </div>
    </div>
  );
}
