import { ImagesDiv, ImgArticle, SlideLeftBtn, SlideRightBtn, Image } from './ImageInfoStyle';

import { ImageInfoProps } from '../../../../types/props/MyLogDetail/ImageInfo';

function ImageInfo({ leftClick, rightClick, slideIndex }: ImageInfoProps): JSX.Element {
    const imageUrl = ["/assets/Home/introbg1.png","/assets/Home/introbg1.png"];

    return (
        <ImgArticle>
            <SlideLeftBtn onClick={leftClick} />
            <SlideRightBtn onClick={rightClick} />
            <ImagesDiv slideIndex={slideIndex} length={imageUrl.length}>
                {imageUrl.map((value: string, index: number) => {
                    return <Image length={imageUrl.length} src={value} key={index} />
                })}
            </ImagesDiv>
        </ImgArticle>
    )
}

export default ImageInfo;