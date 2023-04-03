import { Button, Like, Write, LikeAndWrtieButton } from './LikeAndWriteStlye';

import { LikeAndWriteProps } from '../../../../types/props/SearchMatjip/LikeAndWrite';
import { WriteLogState } from '../../../../types/store/writeLog';

import { writeLogStore } from '../../../../stores/writeLog';

function LikeAndWrite({ handleCreteMyLogPage, data }: LikeAndWriteProps): JSX.Element {
    const { setMatjip, setIsCustom, setOrder }: WriteLogState = writeLogStore();

    const ClickWriteButton = () => {
        setMatjip({...data});
        setOrder("post");
        handleCreteMyLogPage();
    }

    return (
        <LikeAndWrtieButton>
            <Button>
                <Like /> 
            </Button>
            <Button onClick={ClickWriteButton}>
                <Write />
            </Button>
        </LikeAndWrtieButton>
    )
}

export default LikeAndWrite;