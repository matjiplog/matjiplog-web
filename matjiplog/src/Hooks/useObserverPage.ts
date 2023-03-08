import { useEffect, useState } from 'react';

export function useObserverPage() {
  const [page, setPage] = useState<number>(0);
  const [lastCard, setlastCard] = useState<HTMLDivElement>();
  
  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPage((prev) => prev + 1)
        observer.unobserve(entry.target);
      }
    });
  };
  const setLastCardRef = (ref: HTMLDivElement) => { setlastCard(ref); };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastCard) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastCard);
    }
    return () => observer && observer.disconnect();
  }, [lastCard]);

  return { page, setPage, setLastCardRef };
}
