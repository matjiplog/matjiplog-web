import { useLocation } from "react-router-dom";
import { useState } from 'react';

import Logo from '../../Presentational/Header/Logo/Logo';
import GlobalNav from '../../Presentational/Header/GlobalNav/GlobalNav';
import Login from '../../Presentational/Header/Login/Login';

import { HeaderSection } from './HeaderContainerStyle';

function HeaderContainer(): JSX.Element {
  const [navShow, setNavShow] = useState<boolean>(false);
  const path: string = useLocation().pathname;
  
  const toggleNavShow = () => { setNavShow(!navShow); }

  return <HeaderSection>
      <Logo />
      <GlobalNav 
        navShow={navShow}
        path={path} 
      />
      <Login 
        navShow={navShow} 
        toggleNavShow={toggleNavShow} 
      />
  </HeaderSection>

}

export default HeaderContainer