import styled from "styled-components";



export const SearchSection = styled.section`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  margin: 50px 0 50px 0;
  padding: 0 25em 0 25em;
`;

export const SearchResult = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);
  place-content: center center;
  gap: 10em 10em;
  margin: 15em 0 0 0;
`;
