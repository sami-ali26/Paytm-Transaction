import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Users() {
  
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/v1/user/bulk?filter=${filter}`)
      .then((response) => {
        setUsers(response.data.user);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  }, [filter]);

  return (
    <>
      <div className="mt-6 text-white font-semibold text-lg drop-shadow-sm">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

function User({ user }) {
  console.log(user);

  const navigate = useNavigate();

  return (
    <div className="flex justify-between h-max">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 ">
          <div className="flex flex-col justify-center h-full text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {user.firstName[0].toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful text-white/90 font-medium drop-shadow-sm">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={() => {
            navigate(`/send?username=${user.firstName}&id=${user._id}`, {
              state: {
                userData: user.lastName,
              },
            });
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
