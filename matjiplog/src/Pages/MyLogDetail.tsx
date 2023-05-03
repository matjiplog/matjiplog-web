import HeaderContainer from '../Components/Common/Container/Header/HeaderContainer';
import FooterContainer from '../Components/Common/Container/Footer2/FooterContainer';
import MyLogDetailContainer from '../Components/MyLogDetail/Container/MyLogDetailContainer';

import { MylogDetailWrap } from '../styles/wrap';

function MyLogDetailPage(): JSX.Element {

    return (
        <MylogDetailWrap>
            <HeaderContainer /> 
            <MyLogDetailContainer />
            <FooterContainer />
        </MylogDetailWrap>
    )
}

export default MyLogDetailPage;