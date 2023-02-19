import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

import { MatjipDto } from '../types/api/matjip';

export function useScrollData(promistAxios: (pageId : number) => Promise<any | null>, queryKey: string) {
  const [cardList, setCardList] = useState<MatjipDto[]>([]);
  const [lastCard, setlastCard] = useState<HTMLDivElement | null>(null);
  const [page, setPage] = useState<number>(0);

  const { data, isLoading, isError, error} = useQuery([queryKey, page], () => promistAxios(page));

  useEffect(() => {
    if (!isLoading && data) {
      setCardList((prev) => [...prev, ...data.matjipListData]);
    }
    return;
  }, [isLoading, data]);

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPage((prev) => prev + 1);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastCard) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastCard);
    }
    return () => observer && observer.disconnect();
  }, [lastCard]);

  const setLastCardRef = (ref: HTMLDivElement | null) => {
    setlastCard(ref);
  };

  return { cardList, isLoading, isError, error, page, setLastCardRef };
}
