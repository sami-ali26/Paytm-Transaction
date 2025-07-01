
import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { Input } from "../Components/Input";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signup() {

  const navigate = useNavigate();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard'); // Redirect logged-in users to Dashboard
    } 
  },)

  const shouldNavigate = !firstName.trim() || !lastName.trim() || !username.trim() || !password.trim()

  const sendrequest = async () => {
    if (shouldNavigate) {
      return alert(`Fill right credentials`)
    } else {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/user/signup`,
        {
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: password,
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    }
  }



  
  return (
    <div className="bg-gradient-to-t from-gray-300 to-blue-200 w-screen h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 ">
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
          placeholder="Enter demo g-email johndoe@gmail.com"
          label={"E-mail"}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="1#@32&"
          label={"Password"}
          type={'Password'}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <Button
          label={"Sign up"}
          onClick={sendrequest}
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
