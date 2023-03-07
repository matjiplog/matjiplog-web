export interface useDropBarResult {
    dropBarShow: boolean;
    dropBarMenu: string;
    toggleDropBar: () => void;
    listClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}  