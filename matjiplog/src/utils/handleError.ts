import { AxiosError } from 'axios';

export const handleError = (error: unknown): void => {
    const { message, response, request } = error as AxiosError;

    if (response) {
        console.error(`Server error: ${response.status} - ${response.data}`);
    } else if (request) {
        console.error(`No response received from server: ${request}`);
    } else {
        console.error(`Error: ${message}`);
    }
};