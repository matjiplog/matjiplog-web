import styled from 'styled-components';

export const SearchListGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  place-content: center center;
  gap: 10em 10em;
  margin: 0 0 0 0;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 5em 5em;
  }
`;
