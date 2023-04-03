import { NavigateFunction, useNavigate } from 'react-router-dom';

export const useNavigateUrl = () => {
    const urlHandler: NavigateFunction = useNavigate();

    const handleUrl = (url: string) => {
        urlHandler(url);
    }

    return { handleUrl };
}