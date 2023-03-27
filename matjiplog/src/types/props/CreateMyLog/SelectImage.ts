export interface SelectImageProps {
    images: string[],
    selectImages: (e: React.ChangeEvent<HTMLInputElement>) => void,
    slideIndex: number,
}