import {
  ImagesDiv,
  IntroImage,
  IntroSection,
  SlideLeftBtn,
  SlideRightBtn,
  IntroTitle,
} from "../../styles/home/intro";

import { useIntroIndex, useIntroIndexTypes } from "../../Hooks/useSlide";

function Intro(): JSX.Element {
  const introImages = [
    "/assets/Home/introbg1.png",
    "/assets/Home/introbg2.png",
    "/assets/Home/introbg2.png",
  ];
  const { slideIndex, leftClick, rightClick }: useIntroIndexTypes =
    useIntroIndex(introImages.length);

  return (
    <IntroSection>
      <SlideLeftBtn size={30} onClick={leftClick}></SlideLeftBtn>
      <SlideRightBtn size={30} onClick={rightClick}></SlideRightBtn>
      <IntroTitle className="introTitle">
        Hi we are legend<br></br>Let's go fucking food
      </IntroTitle>
      <ImagesDiv slideIndex={slideIndex} length={introImages.length}>
        {introImages.map((value: string, index: number): JSX.Element => {
          return <IntroImage src={value} key={index}></IntroImage>;
        })}
      </ImagesDiv>
    </IntroSection>
  );
}

export default Intro;
