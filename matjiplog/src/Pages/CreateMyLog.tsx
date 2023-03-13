import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import FooterContainer from '../Components/Common/Container/Footer2/FooterContainer';
import CreateMyLogImage from "../Components/CreateMyLog/Image";
import CreateMyLogInfo from "../Components/CreateMyLog/Info";
import CreateMyLogDetail from "../Components/CreateMyLog/Detail";

import { CreateMyLogWrap } from "../styles/common/wrap";
import { CreateForm, ImgaeAndInfo } from "../styles/createMylog/createForm";

function CreateMyLogPage(): JSX.Element {
  return (
    <CreateMyLogWrap>
      <HeaderContainer />
      <CreateForm>
        <ImgaeAndInfo>
          <CreateMyLogImage/>
          <CreateMyLogInfo/>
        </ImgaeAndInfo>
        <CreateMyLogDetail/>
      </CreateForm>
      <FooterContainer />
    </CreateMyLogWrap>
  );
}

export default CreateMyLogPage;
