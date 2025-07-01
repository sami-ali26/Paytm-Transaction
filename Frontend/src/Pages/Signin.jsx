import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { Input } from "../Components/Input"
import { Password } from "../Components/Password";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Signin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-t from-gray-300 to-blue-200">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <Heading label={'Sign up'}></Heading>
        <SubHeading label={"Enter your credentials to access your accout"}></SubHeading>
        <Input placeholder='sami@gmail.com' onChange={(e) => {
            setEmail(e.target.value)
        }} type={'Text'} label={'E-mail'} ></Input>
        <Input placeholder='1#@32&' onChange={(e) => {
            setPassword(e.target.value)
        }}  type={'Password'} label={'Password'} ></Input>
        <Button label={"Sign up"} onClick={async () => {
            const response = await axios.post(
              `${import.meta.env.VITE_API_URL}/api/v1/user/signin`,
              {
                email,
                password
              }
            );
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard", {
              state: { balance: response.data.balance },
            });
          }}></Button>
        <BottomWarning label={"Don't have an account?"} pagename={'Signup'} to={"/signup"}></BottomWarning>
        </div>
    </div>
}