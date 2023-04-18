export interface LoginInputProps {
    onChangeHandler: (e: any) => void,
    clickKakaoHandler : (e: React.MouseEvent<HTMLDivElement>) => void;
    doLogin: (e: React.FormEvent<HTMLFormElement>) => void,
}