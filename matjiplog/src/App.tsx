import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import HomePage from "./Pages/Home";

import GlobalStyle from "./styles/common/global";
import Log from "./Pages/Log";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/log" element={<Log />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
