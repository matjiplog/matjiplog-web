export interface GlobalNavProps {
    navShow: boolean,
    path: string,
    navHandler: (e: React.MouseEvent<HTMLImageElement | HTMLButtonElement, MouseEvent>) => void
}