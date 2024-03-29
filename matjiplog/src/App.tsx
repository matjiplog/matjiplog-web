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
import SearchDetail from "./Pages/SearchDetail";
import KakaoLogin from './Pages/KakaoLogin';
import GoogleLogin from './Pages/GoogleLogin';
import NaverLogin from './Pages/NaverLogin';

import GlobalStyle from "./styles/global";

declare global { interface Window { naver: any; } }

function App(): JSX.Element {
        
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    }
  });

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/log" element={<Log />}></Route>
          <Route path="/myLogWork" element={<CreateMyLogPage />}></Route>
          <Route path="/matjip" element={<Search />}></Route>
          <Route path="/matjip/:matjipSequence" element={<SearchDetail/>}></Route>
          <Route path="/myLog" element={<MyLog />}></Route>
          <Route path='/myLog/:log_sequence' element={<MyLogDetail />}/>
          <Route path="/kakaologin" element={<KakaoLogin />}></Route>
          <Route path="/googlelogin" element={<GoogleLogin />}></Route>
          <Route path="/naverlogin/" element={<NaverLogin />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
