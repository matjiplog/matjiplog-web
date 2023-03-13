export interface useDropBarResult {
    dropBarShow: boolean;
    dropBarMenu: string;
    toggleDropBar: () => void;
    updateSelectItem: (e: React.MouseEvent<HTMLLIElement>) => void;
}  