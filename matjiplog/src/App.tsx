import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import HomePage from "./Pages/Home";
import CreateMyLogPage from "./Pages/CreateMyLog";
import NotFound from "./Components/Common/NotFound";
import Search from "./Pages/Search";
import Log from "./Pages/Log";
import MyLog from "./Pages/MyLog";

import GlobalStyle from "./styles/common/global";

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
          <Route path="/createMyLog" element={<CreateMyLogPage />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/mylog" element={<MyLog />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
