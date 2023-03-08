import styled from 'styled-components';

export const MapAndInfo = styled.section`
  display: flex;
  height: 100%;
  margin: 10em;

  @media screen and (max-width: 900px) {
    & {
      margin: 5em;
      flex-direction: column;
    }
  }
`
export const MyPlaceMatjipInfo = styled.article`
  flex: 1 1 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    & {
      height: 500px;
    }
  }
`