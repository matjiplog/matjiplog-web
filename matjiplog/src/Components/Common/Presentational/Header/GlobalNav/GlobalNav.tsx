import { Gnv, GnvItem, GnvBtn } from './GlobalNavStyle';

import { GlobalNavProps } from '../../../../../types/props/Header/GlobalNav';
import { useLogResult } from '../../../../../types/hook/common/useLog';

import { useLog } from '../../../../../Hooks/useLog';

function GlobalNav({ navShow, path, navHandler }: GlobalNavProps): JSX.Element {
    const { writeCustumMatjip }: useLogResult = useLog();

    return(
        <Gnv active={navShow}>
            <GnvItem>
                <GnvBtn active={path === "/search" ? 1 : 0} onClick={navHandler}>맛집 찾기</GnvBtn>
            </GnvItem>
            <GnvItem>
                <GnvBtn active={path === "/log" ? 1 : 0} onClick={navHandler}>로그</GnvBtn>
            </GnvItem>
            <GnvItem>
                <GnvBtn active={path === "/mylog" ? 1 : 0} onClick={navHandler}>나만의 맛집</GnvBtn>
            </GnvItem>
            <GnvItem>
                <GnvBtn active={path === "/createMyLog" ? 1 : 0} onClick={writeCustumMatjip}>맛집 기록</GnvBtn>
            </GnvItem>
        </Gnv>
    ) 
}

export default GlobalNav;