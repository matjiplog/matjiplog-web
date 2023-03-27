import styled from "styled-components";

import { darkgrayFont, blueFont } from './../../../../styles/fontColor';
import { ImageIcon } from '../../../../styles/icons';
import { FlexColumnCenterCenter } from './../../../../styles/flexStyle';

export const IconAndFileBtn = styled(FlexColumnCenterCenter)`
  flex: 1;
`;

export const NonSelectImage = styled(ImageIcon)`
  font-size: 10rem;
  color: ${darkgrayFont};
`;

export const ImageLabel = styled.label`
  padding: 3em;
  color: white;
  background-color: ${blueFont};
  border-radius: 5px;
  cursor: pointer;
`;

export const ImageFileBtn = styled.input`
  display: none;
`;

export const ImagesSelectDiv = styled.div<{ slideIndex: number, length: number }>`
  padding-left: 0.6px;
  display: flex;
  flex-wrap: nowrap;
  width: ${(props) => 100 * props.length}%;
  max-height: calc(100% - 30px);
  position: absolute;
  left: 0px;
  transition: all 500ms ease-in-out;
  transform: translateX(${(props) => -1 * ((100 / props.length) * props.slideIndex)}%);
`;

export const SelectImageItem = styled.img<{ length: number }>`
  width: ${(props) => 100 / props.length}%;
  max-height: 100%;
`;
