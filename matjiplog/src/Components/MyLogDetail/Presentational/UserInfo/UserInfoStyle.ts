import styled from 'styled-components';

import { LockIcon, UnLockIcon, DotIcon } from '../../../../styles/icons';

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
    font-size: 8em;
    color: black;
`

export const LockBtn = styled(LockIcon)`
    font-size: 8em;
    color: black;
`

export const ConfigBtn = styled(DotIcon)`
    font-size: 8em;
    color: black;
`

export const ConfigDropDown = styled.ul`
    position: absolute;
    top: 8em;
    right: 0px;
    border: 1px solid darkgray;
`

export const ConfigMenu = styled.li`
    padding: 2em;
    text-align: center;
    background-color: white;
    
    &:hover {
        color: #ff6701;
    }
    :last-child{
        border-top: 1px solid darkgray;
    }
`