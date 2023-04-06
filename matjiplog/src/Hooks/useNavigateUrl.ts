import { NavigateFunction, useNavigate } from 'react-router-dom';

export const useNavigateUrl = () => {
    const urlHandler: NavigateFunction = useNavigate();

    const handleUrl = (url: string, e?: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        if(e) e.stopPropagation();
        urlHandler(url);
    }

    return { handleUrl };
}