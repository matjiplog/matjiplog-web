export interface DropListProps {
    dropBarShow: boolean;
    itemList: string[];
    dropBarMenu: string;
    updateSelectItem: (e: React.MouseEvent<HTMLLIElement>) => void;
}  