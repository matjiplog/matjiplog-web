export interface dropBarState {
    dropBarShow: boolean;
    toggleDropBar: () => void;
    initDropBar: () => void;
}

export interface dropBarMenuState {
    dropBarMenu: string;
    setDropBarMenu: (menu: string) => void;
    initDropBarMenu: () => void;
}
