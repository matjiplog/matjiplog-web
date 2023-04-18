import { LogoImg } from './LogoStyle';

import { useNavigateUrl } from '../../../../../Hooks/useNavigateUrl';

function Logo(): JSX.Element {
  const { handleUrl } = useNavigateUrl();

  return (
    <LogoImg 
      onClick={() => {handleUrl("/"); }} 
      src="/assets/common/mainLogo.png"
    />
  )
}

export default Logo;