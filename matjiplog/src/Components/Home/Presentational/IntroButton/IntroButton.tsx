import { SlideLeftBtn, SlideRightBtn } from './IntroButtonStyle';

import { IntroButtonProps } from '../../../../types/props/Intro/IntroButton';

function IntroButton({ leftClick, rightClick }: IntroButtonProps): JSX.Element {
    return <>
        <SlideLeftBtn size={30} onClick={leftClick}/>
        <SlideRightBtn size={30} onClick={rightClick}/>
    </>
}

export default IntroButton;