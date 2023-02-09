import Header from "../Components/Common/Header";
import HomeFooter from "../Components/Common/HomeFooter";
import CreateMyLogImage from "../Components/CreateMyLog/Image";
import CreateMyLogInfo from "../Components/CreateMyLog/Info";
import CreateMyLogDetail from "../Components/CreateMyLog/Detail";
import { CreateMyLogWrap } from "../styles/common/wrap";
import { CreateForm, ImgaeAndInfo } from "../styles/createMylog/createForm";

function CreateMyLogPage(): JSX.Element {
  return (
    <CreateMyLogWrap>
      <Header />
      <CreateForm>
        <ImgaeAndInfo>
          <CreateMyLogImage></CreateMyLogImage>
          <CreateMyLogInfo></CreateMyLogInfo>
        </ImgaeAndInfo>
        <CreateMyLogDetail></CreateMyLogDetail>
      </CreateForm>
      <HomeFooter />
    </CreateMyLogWrap>
  );
}

export default CreateMyLogPage;
