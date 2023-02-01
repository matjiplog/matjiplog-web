import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";

import GlobalStyle from "./styles/common/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Main</>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
