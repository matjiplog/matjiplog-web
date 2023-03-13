export interface LoginProps {
    navShow: boolean,
    navHandler: (e: React.MouseEvent<HTMLImageElement | HTMLButtonElement, MouseEvent>) => void,
    toggleNavShow: () => void;
}