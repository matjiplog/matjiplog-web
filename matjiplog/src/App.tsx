import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./styles/common/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Main</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
