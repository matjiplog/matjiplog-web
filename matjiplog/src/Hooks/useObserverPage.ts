import { useEffect, useState } from 'react';

import { useObserverPageResult } from '../types/hook/common/useObserverpage';

export function useObserverPage(): useObserverPageResult {
  const [page, setPage] = useState<number>(0);
  const [lastCard, setlastCard] = useState<HTMLDivElement>();

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPage((prev) => prev + 1);
        observer.unobserve(entry.target);
      }
    });
  };
  const setLastCardRef = (ref: HTMLDivElement) => {
    setlastCard(ref);
  };
  const initPage = () => {
    setPage(0);
  }

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastCard) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastCard);
    }
    return () => observer && observer.disconnect();
  }, [lastCard]);

  return { page, initPage, setLastCardRef };
}
