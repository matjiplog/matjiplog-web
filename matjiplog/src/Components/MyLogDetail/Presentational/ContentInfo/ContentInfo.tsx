import { ContentInfoDiv, Title, Address, Content } from './ContentInfoStyle'

import { ContentInfoProps } from '../../../../types/props/MyLogDetail/ContentInfo';
import { MyLogDto } from '../../../../types/api/myLog';
import { MatjipDto } from '../../../../types/api/matjip';

function ContentInfo({ data }: ContentInfoProps): JSX.Element {
    const { content, matjip }: MyLogDto = data;
    const { name, address }: MatjipDto = matjip;
    
    return (
        <ContentInfoDiv>
            <Title>{name}</Title>
            <Address>{address}</Address>
            <Content>{content}</Content>
        </ContentInfoDiv>
    )
}

export default ContentInfo;