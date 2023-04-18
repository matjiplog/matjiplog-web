import { Gnv, GnvItem, GnvBtn } from './GlobalNavStyle';

import { GlobalNavProps } from '../../../../../types/props/Header/GlobalNav';
import { useLogResult } from '../../../../../types/hook/common/useLog';
import { UserState } from '../../../../../types/store/user';

import { useLog } from '../../../../../Hooks/useLog';
import { useNavigateUrl } from '../../../../../Hooks/useNavigateUrl';

import { userStore } from '../../../../../stores/user';

function GlobalNav({ navShow, path }: GlobalNavProps): JSX.Element {
    const { isLogin }: UserState = userStore();
    const { writeCustumMatjip }: useLogResult = useLog();
    const { handleUrl } = useNavigateUrl();

    return (
        <Gnv active={navShow}>
            <GnvItem>
                <GnvBtn active={path === "/search" ? 1 : 0} onClick={() => { handleUrl("/search"); }}>맛집 찾기</GnvBtn>
            </GnvItem>
            <GnvItem>
                <GnvBtn active={path === "/log" ? 1 : 0} onClick={() => { handleUrl("/log"); }}>로그</GnvBtn>
            </GnvItem>
            <GnvItem>
                <GnvBtn
                    active={path === "/mylog" ? 1 : 0}
                    onClick={() => {
                        if (isLogin) {
                            handleUrl("/mylog");
                        } else {
                            handleUrl("/login");
                        }
                    }}
                >
                    나만의 맛집
                </GnvBtn>
            </GnvItem>
            <GnvItem>
                <GnvBtn active={path === "/createMyLog" ? 1 : 0} onClick={writeCustumMatjip}>맛집 기록</GnvBtn>
            </GnvItem>
        </Gnv>
    )
}

export default GlobalNav;