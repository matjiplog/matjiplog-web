import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';

import Logo from '../../Presentational/Header/Logo/Logo';
import GlobalNav from '../../Presentational/Header/GlobalNav/GlobalNav';
import Login from '../../Presentational/Header/Login/Login';

import { HeaderSection } from './HeaderContainerStyle';

import { NavigateControllerResult } from '../../../../types/util/navigateControllerResult';

import { navigateController } from '../../../../utils/navigateController';

function HeaderContainer(): JSX.Element {
  const [navShow, setNavShow] = useState<boolean>(false);
  const path: string = useLocation().pathname;

  const navigate: NavigateFunction = useNavigate();
  const { navHandler }: NavigateControllerResult = navigateController(navigate);
  
  const toggleNavShow = () => { setNavShow(!navShow); }

  return <HeaderSection>
      <Logo navHandler={navHandler} />
      <GlobalNav navShow={navShow} path={path} navHandler={navHandler} />
      <Login navShow={navShow} navHandler={navHandler} toggleNavShow={toggleNavShow} />
  </HeaderSection>

}

export default HeaderContainer