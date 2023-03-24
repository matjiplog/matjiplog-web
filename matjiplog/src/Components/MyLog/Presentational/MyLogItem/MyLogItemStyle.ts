import { blackFont, mainFont, hoverFont, darkgrayFont, whiteFont } from './../../../../styles/fontColor';
import styled from 'styled-components';

import { CommentIcon, DotIcon, LikeIcon } from '../../../../styles/icons';
import { CardBorderShaodw } from '../../../../styles/borderStyle';

export const MyLogItemDiv = styled(CardBorderShaodw)`
    padding: 10px;
    position: relative;
    /* transition: all 250ms ease-in-out; */
    cursor: pointer;

    /* &:hover {
        transform: scale(1.1);
    } */
`

export const UserInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const UserImageAndNickName = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2em;
`
export const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
export const NickName = styled.p`
    margin-left: 0.5em;
    font-size: 1.5rem;
    font-weight: bold;
`
export const IconBtn = styled.button`
`
export const Dot = styled(DotIcon)`
    font-size: 2rem;

    :hover{
        transform: scale(1.5);
    }
`
export const LogImageDiv = styled.div`
    background-color: ${hoverFont};
    border-radius: 6px;
`
export const LogImage = styled.img`
    object-fit: contain;
    width: 100%;
    height: 250px;
    border-radius: 6px;
`
// export const TitleAndCategory = styled.div`
//     margin-top: 1em;
//     display: flex;
//     align-items: center;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
// `
export const Title = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const Category = styled.span`
    font-size: 1rem;
    color: ${mainFont};
`
export const Address = styled.p`
    margin-top: 0.5em;
    color: ${darkgrayFont};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`
export const Content = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-top: 0.5em;
    font-size: 1.3rem;
`
export const LikeAndComment = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: space-around;

`
export const IconAndCount = styled.div`
    margin-top: 0.5em;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
`
export const Like = styled(LikeIcon)`
`
export const Comment = styled(CommentIcon)`
`
export const Count = styled.span`
    margin-left: 0.5em;
`
export const ConfigDiv = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    background: ${whiteFont};
    box-shadow: 0 4px 5px 0 #00000026;
    border : solid ${darkgrayFont} 1px;
    border-radius: 2px;
    position: absolute;
    right: 10px;
    top: 40px;
`
export const ConfigItem = styled.div`
    height: 30px;
    display : flex;
    justify-content : center;
    align-items : center;

    &:hover {
        color: #ff6701;
        background-color: ${hoverFont};
    }
`;