import styled from "styled-components";

import { darkgrayFont, blueFont } from './../../../../styles/fontColor';
import { DeleteIcon, ImageIcon } from '../../../../styles/icons';
import { FlexColumnCenterCenter } from './../../../../styles/flexStyle';

export const IconAndFileBtn = styled(FlexColumnCenterCenter)`
`;

export const NonSelectImage = styled(ImageIcon)`
  font-size: 10rem;
  color: ${darkgrayFont};
`;

export const ImageLabel = styled.label<{ active: number }>`
  display: ${(props) => props.active ? "block" : "none"};
  padding: 3em;
  color: white;
  background-color: ${blueFont};
  border-radius: 5px;
  cursor: pointer;
`;

export const ImageFileBtn = styled.input`
  display: none;
`;

export const ImagesSelectDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
`;

export const SelectImageItem = styled.img`
  width: 20%;
  border-radius: 10px;
  margin: 0 1em 2em 0;
  cursor: pointer;
`;

export const DeleteBtn = styled(DeleteIcon)`

`