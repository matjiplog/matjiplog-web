import { useMemo } from 'react';

import IntroImage from '../Presentational/IntroImage/IntroImage';
import IntroButton from '../Presentational/IntroButton/IntroButton';
import IntroTitle from '../Presentational/IntroTitle/IntroTitle';

import { IntroSection } from './IntroContainerStyle';

import { useSlideResult } from '../../../types/hook/useSlide';

import { useSlide } from '../../../Hooks/useSlide';


function IntroContainer(): JSX.Element {
    const introImageUrl = useMemo(() => {
        return [ "/assets/Home/introbg1.png", "/assets/Home/introbg2.png", "/assets/Home/introbg2.png" ];
    }, [])
    const { slideIndex, leftClick, rightClick }: useSlideResult = useSlide(introImageUrl.length-1);

    return <IntroSection>
        <IntroButton leftClick={leftClick} rightClick={rightClick} />
        <IntroImage slideIndex={slideIndex} introImageUrl={introImageUrl}/>
        <IntroTitle />
    </IntroSection>
}

export default IntroContainer;