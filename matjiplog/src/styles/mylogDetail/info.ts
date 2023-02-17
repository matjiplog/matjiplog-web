import styled from 'styled-components';

import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

export const UserInfo = styled.div`
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
export const UnLockBtn = styled(AiFillUnlock)`
    font-size: 8em;
    color: black;
`
export const LockBtn = styled(AiFillLock)`
    font-size: 8em;
    color: black;
`
export const ConfigBtn = styled(FiMoreHorizontal)`
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


export const MatjipInfo = styled.div`
    padding: 7em 5em 0em 5em;
    flex: 1;
    overflow: auto;
`
export const MatjipTitle = styled.h1`
    font-size: 2rem;
    color: #ff6701;
    margin-bottom: 0.3em;
`
export const MatjipAddress = styled.h3`
    font-size: 1rem;
    color: #b5b5b5;
    margin-bottom: 3em;
`
export const MatjipContent =  styled.pre`
    font-size: 1.8rem;
`