export interface useImageSelectResult {
    images: string[];
    selectImages: (e: React.ChangeEvent<HTMLInputElement>) => void;
    deleteImage: (e: React.MouseEvent<HTMLImageElement>) => void;
}