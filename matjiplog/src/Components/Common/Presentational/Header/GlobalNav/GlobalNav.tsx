import { Gnv, GnvItem, GnvBtn } from './GlobalNavStyle';

import { GlobalNavProps } from '../../../../../types/props/Header/GlobalNav';

function GlobalNav({ navShow, path, navHandler }: GlobalNavProps): JSX.Element {

    return(
        <Gnv show={navShow ? true : false}>
            <GnvItem>
                <GnvBtn active={path === "/search" ? true : false} onClick={navHandler}>맛집 찾기</GnvBtn>
            </GnvItem>
            <GnvItem>
                <GnvBtn active={path === "/log" ? true : false} onClick={navHandler}>로그</GnvBtn>
            </GnvItem>
            <GnvItem>
                <GnvBtn active={path === "/mylog" || path === "/createMyLog" ? true : false} onClick={navHandler}>나만의 맛집</GnvBtn>
            </GnvItem>
        </Gnv>
    ) 
}

export default GlobalNav;