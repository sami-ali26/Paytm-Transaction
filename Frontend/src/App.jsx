import "./App.css";
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { DashBoard } from "./Pages/DashBoard";
import { SendMoney } from "./Pages/SendMoney";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TransferDone } from "./Pages/TransferDone";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}>
            {" "}
          </Route>
          <Route path="/Signin" element={<Signin />}>
            {" "}
          </Route>
          <Route path="/dashboard" element={<DashBoard />}>
            {" "}
          </Route>
          <Route path="/send" element={<SendMoney />}>
            {" "}
          </Route>
          <Route path="/transfer" element={<TransferDone />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
