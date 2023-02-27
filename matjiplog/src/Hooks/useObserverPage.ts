import { useEffect, useState } from 'react';

export function useObserverPage(addPage: () => void) {
  const [lastCard, setlastCard] = useState<HTMLDivElement | null>(null);
  
  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        addPage();
        observer.unobserve(entry.target);
      }
    });
  };
  const setLastCardRef = (ref: HTMLDivElement | null) => { setlastCard(ref); };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastCard) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastCard);
    }
    return () => observer && observer.disconnect();
  }, [lastCard]);

  return { setLastCardRef };
}
