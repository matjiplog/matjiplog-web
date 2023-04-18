export interface CommentFormProps {
    emojiActive: boolean,
    handleEmogiSelect: (emoji: any) => void,
    toggleEmogiActive: () => void,
    comment: any,
    onChangeHandler: (e: any) => void,
    submitPostComment: (e: React.MouseEvent<HTMLFormElement>) => void,
}