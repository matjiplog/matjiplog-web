import { MatjipItemImgDiv } from './MatjipImageStyle';

import { MatjipImageProps } from '../../../../types/props/SearchMatjip/MatjipImage';

function MatjipImage({ imgUrl }: MatjipImageProps): JSX.Element {
    console.log(imgUrl)
    return (
      <MatjipItemImgDiv src={imgUrl}>
      </MatjipItemImgDiv>
    );
}

export default MatjipImage;