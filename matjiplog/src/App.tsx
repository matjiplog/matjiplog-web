import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./styles/common/global";

import HomePage from "./Pages/Home";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
