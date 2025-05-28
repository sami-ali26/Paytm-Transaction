import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { Input } from "../Components/Input";
import { Password } from "../Components/Password";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Heading label={"Sign up"}></Heading>
        <SubHeading
          label={"Enter you information to create an account"}
        ></SubHeading>
        <Input
          placeholder="John"
          label={"First Name"}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="Doe"
          label={"Last Name"}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="sami@gmail.com"
          label={"E-mail"}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="1#@32&"
          label={"Password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <Button
          label={"Sign up"}
          onClick={async () => {
            const response = await axios.post(
              "http://localhost:3004/api/v1/user/signup",
              {
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
              }
            );
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard", {
              state: { balance: response.data.balance },
            });
          }}
        ></Button>
        <BottomWarning
          label={"Already have an account?"}
          pagename={"Sign in"}
          to={"/signin"}
        ></BottomWarning>
      </div>
    </div>
  );
}
