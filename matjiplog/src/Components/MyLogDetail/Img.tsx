import { Image, ImagesDiv, SlideLeftBtn, SlideRightBtn } from '../../styles/mylogDetail/img';
import { ImgArticle } from '../../styles/mylogDetail/area';

import { useSlide } from '../../Hooks/useSlide';

interface props {
    imgsUrl : string[];
}

function Img({imgsUrl} : props): JSX.Element {
    const { slideIndex, leftClick, rightClick } = useSlide(imgsUrl.length-1);
    return <ImgArticle>
        <SlideLeftBtn onClick={leftClick} />
        <SlideRightBtn onClick={rightClick} />
        <ImagesDiv slideIndex={slideIndex} length={imgsUrl.length}>
            {imgsUrl.map((value: string, index: number) => {
                return <Image length={imgsUrl.length} src={value} key={index} />
            })}
        </ImagesDiv>
    </ImgArticle>
}

export default Img;