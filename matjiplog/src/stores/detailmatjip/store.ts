import { create } from 'zustand';

export interface tab {
  tabindex: number;
  isActive : string;
  setTabindex: (select: number) => void;
}

export const showTabStore = create<tab>((set) => ({
  tabindex : 0,
  isActive: "",
  setTabindex : (select) =>{
    set(() => ({ tabindex: select}));
  }
}));


export interface sequence {
  matjipSequence : string,
  setSequence : (seq : string| undefined) => void;
}

export const setSequenceStore = create<sequence>((set) => ({
  matjipSequence : "",
  setSequence : (seq) =>{
    set(() => ({ matjipSequence: seq}));
  }
}));

export interface tabType {
  name: string,
  content: JSX.Element,
}


