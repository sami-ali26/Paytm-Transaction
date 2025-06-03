import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { Input } from "../Components/Input"
import { Password } from "../Components/Password";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";
export function Signin() {
    return <div className="w-screen h-screen flex items-center justify-center bg-blue-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <Heading label={'Sign up'}></Heading>
        <SubHeading label={"Enter your credentials to access your accout"}></SubHeading>
        <Input placeholder='sami@gmail.com' label={'E-mail'} ></Input>
        <Input placeholder='1#@32&' label={'Password'} ></Input>
        <Button label={"Sign up"}></Button>
        <BottomWarning label={"Don't have an account?"} pagename={'Signup'} to={"/"}></BottomWarning>
        </div>
    </div>
}