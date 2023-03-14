import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import FooterContainer from '../Components/Common/Container/Footer2/FooterContainer';
import CreateMyLogFormContainer from '../Components/CreateMyLog/Container/CreateMyLogFormContainer';

import { CreateMyLogWrap } from "../styles/wrap";

function CreateMyLogPage(): JSX.Element {
  return (
    <CreateMyLogWrap>
      <HeaderContainer />
      <CreateMyLogFormContainer />
      <FooterContainer />
    </CreateMyLogWrap>
  );
}

export default CreateMyLogPage;
