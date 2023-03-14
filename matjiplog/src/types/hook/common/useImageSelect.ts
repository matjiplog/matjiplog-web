export interface useImageSelectResult {
    images: string[];
    selectImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
    deleteImages: () => void;
}