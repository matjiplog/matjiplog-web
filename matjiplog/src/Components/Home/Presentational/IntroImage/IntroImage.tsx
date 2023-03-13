import { ImagesDiv, Image } from "./IntroImageStyle";

import { IntroImageProps } from '../../../../types/props/Intro/IntroImage';

function IntroImage({ slideIndex, introImageUrl }: IntroImageProps): JSX.Element {
    return (
        <ImagesDiv slideIndex={slideIndex} length={introImageUrl.length}>
            {introImageUrl.map((value: string, index: number): JSX.Element => {
                return <Image src={value} key={index}/>
            })}
        </ImagesDiv>
    )
}

export default IntroImage