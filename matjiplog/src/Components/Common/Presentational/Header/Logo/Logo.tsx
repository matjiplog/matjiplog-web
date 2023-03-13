import { LogoImg } from './LogoStyle';

import { LogoProps } from '../../../../../types/props/Header/Logo';

function Logo({ navHandler }: LogoProps): JSX.Element {
  return <LogoImg onClick={navHandler} src="/assets/common/mainLogo.png"/>
}

export default Logo;