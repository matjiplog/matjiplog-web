import styled from 'styled-components';

import { darkgrayFont, hoverFont, whiteFont } from '../../../../styles/fontColor';
import { LockIcon, UnLockIcon, DotIcon } from '../../../../styles/icons';

export const CommonIconStlye = `
    font-size: 8em;
    color: black;
    cursor: pointer;
    :hover{
        transform: scale(1.2);
        transition: all 0.1 ease-in-out;
    }
`

export const UserInfoDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 10%;
    border-bottom: 1px solid darkgray;
`

export const ImgAndNickName = styled.div`
    display: flex;
    align-items: center;
`

export const Icons = styled.div`
    position: relative;
`

export const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const UserNickName = styled.p`
    font-size: 2rem;
`

export const UnLockBtn = styled(UnLockIcon)`
    ${CommonIconStlye};
`

export const LockBtn = styled(LockIcon)`
    ${CommonIconStlye};
`

export const ConfigBtn = styled(DotIcon)`
    ${CommonIconStlye};
`

export const ConfigDropDown = styled.ul<{ active: number }>`
    display: ${(props) => props.active ? "block" : "none"};
    width: 80px;
    background: ${whiteFont};
    box-shadow: 0 4px 5px 0 #00000026;
    border : solid ${darkgrayFont} 1px;
    border-radius: 2px;
    position: absolute;
    top: 8em;
    right: 0px;
`

export const ConfigMenu = styled.li`
    padding: 2em;
    text-align: center;
    background-color: white;
    
    &:hover {
        color: #ff6701;
        background-color: ${hoverFont};
    }
    :last-child{
        border-top: 1px solid darkgray;
    }
`