import { ContentInfoDiv, Title, Address, Content } from './ContentInfoStyle'

import { ContentInfoProps } from '../../../../types/props/MyLogDetail/ContentInfo';

function ContentInfo({ title, address, content }: ContentInfoProps): JSX.Element {

    return (
        <ContentInfoDiv>
            <Title>{title}</Title>
            <Address>{address}</Address>
            <Content>{content}</Content>
        </ContentInfoDiv>
    )
}

export default ContentInfo;