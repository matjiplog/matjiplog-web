import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import HomePage from "./Pages/Home";
import CreateMyLogPage from "./Pages/CreateMyLog";
import NotFound from "./Components/Common/NotFound";
import Search from "./Pages/Search";
import Log from "./Pages/Log";
import MyLog from "./Pages/MyLog";
import MyLogDetail from './Pages/MyLogDetail';

import GlobalStyle from "./styles/global";
import SearchDetail from "./Pages/SearchDetail";

function App(): JSX.Element {
  const client = new QueryClient({ defaultOptions: {} })
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/log" element={<Log />}></Route>
          <Route path="/createMyLog" element={<CreateMyLogPage />}></Route>
          <Route path="/search/*" element={<Search />}></Route>
          <Route path="/search/:matjipSequence" element={<SearchDetail/>}></Route>
          <Route path="/mylog" element={<MyLog />}></Route>
          <Route path='/mylog/:log_sequence' element={<MyLogDetail />}/>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
