import styled from "styled-components";



export const SearchSection = styled.section`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  margin: 50px 50px 50px 50px;
`;

export const SearchResult = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  place-content: center center;
  gap: 10em 10em;
  margin: 0 0 0 0;
`;
