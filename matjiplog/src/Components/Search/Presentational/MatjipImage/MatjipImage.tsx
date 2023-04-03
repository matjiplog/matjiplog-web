import { MatjipItemImgDiv, MatjipItemImg } from './MatjipImageStyle';

import { MatjipImageProps } from '../../../../types/props/SearchMatjip/MatjipImage';

function MatjipImage({ imgUrl }: MatjipImageProps): JSX.Element {

    return (
        <MatjipItemImgDiv>
            <MatjipItemImg src={imgUrl} />
        </MatjipItemImgDiv>
    )
}

export default MatjipImage;