import { Button, Like, Write, LikeAndWrtieButton } from './LikeAndWriteStlye';

import { LikeAndWriteProps } from '../../../../types/props/SearchMatjip/LikeAndWrite';
import { useLogResult } from '../../../../types/hook/common/useLog';

import { useLog } from '../../../../Hooks/useLog';

function LikeAndWrite({ data }: LikeAndWriteProps): JSX.Element {
    const { writeLog }: useLogResult = useLog();

    return (
        <LikeAndWrtieButton>
            <Button>
                <Like /> 
            </Button>
            <Button onClick={(e) => {writeLog(e, data)}}>
                <Write />
            </Button>
        </LikeAndWrtieButton>
    )
}

export default LikeAndWrite;