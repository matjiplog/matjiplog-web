import { searchDropbarStore, searchDropbarTypes } from "../stores/home/dropbar";

export function useCancle(): useCancleTypes {
  const { dropBar, toggleDropbar }: searchDropbarTypes = searchDropbarStore();

  const calncleDropbar = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { target, currentTarget } = e;

    if (target !== currentTarget) return;
    if (dropBar) toggleDropbar();
  };

  return { calncleDropbar };
}

export interface useCancleTypes {
  calncleDropbar: (e: React.MouseEvent<HTMLDivElement>) => void;
}
