import EmojiPicker from 'emoji-picker-react';

import { EmogeDiv } from './EmogiPickerStyle';

import { EmogiPickerProps } from '../../../../types/props/EmogjPicker/EmogiPicker';

function EmogiPicker({ handleEmogiSelect }: EmogiPickerProps): JSX.Element {

    return (
        <EmogeDiv>
            <EmojiPicker 
                onEmojiClick={handleEmogiSelect} 
                width={250} 
                height={450}
            />
        </EmogeDiv>
    )
}

export default EmogiPicker;