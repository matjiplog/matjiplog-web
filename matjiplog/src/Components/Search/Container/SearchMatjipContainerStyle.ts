import styled from 'styled-components';

import { CardBorderShaodw } from '../../../styles/borderStyle';
import { FlexRowCenterCenter } from '../../../styles/flexStyle';

export const SearchListGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  place-content: center center;
  gap: 10em 10em;
`;

export const MatjipItem = styled(CardBorderShaodw)`
  position: relative;
  padding: 10px;
  cursor: pointer;
`;

export const SearchSection = styled.section`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  margin: 50px 50px 50px 50px;

  @media screen and (max-width: 700px) {
    margin: 20px;

    ${SearchListGrid}{
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 5em 5em;
    }
  }
`;

export const NonSearchDiv = styled(FlexRowCenterCenter)`
  line-height: 6rem;
  text-align: center;
  height: 550px;
  font-size: 22px;
  font-weight: 700;
`