import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import SearchBar from "../Common/SearchBar";
import LodingSpinner from "../Common/Loding";
import ResultCard from "./ResultCard";

import { SearchSection, SearchResult} from "../../styles/home/searchMatiJip";

import { getMatjipData } from '../../Api/matjipApi';

function SearchMatJip(): JSX.Element {
  const [cardList, setCardList] = useState<testDataType[]>([]);
  const [lastCard, setlastCard] = useState<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);

  //const { data, isLoading, isError, error} = useQuery(["matjip", page], () => getMatjipData(page));
  let id = 0;

  const getAndSet = async () => {
    setCardList(cardList.concat(testData));
  };
  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        getAndSet();
        observer.unobserve(entry.target);
      }
    });
  };
  useEffect(() => {
    getAndSet();
  }, []);
  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastCard) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastCard);
    }
    return () => observer && observer.disconnect();
  }, [lastCard]);

  return (
    <SearchSection>
      <SearchBar />
      <SearchResult>
        {cardList?.map((value, index) => {
          if (index === cardList.length - 1) {
            return <div key={id++} ref={setlastCard} style={{background: "black"}}>
                <ResultCard  imgUrl={value.imgUrl} title={value.title} scopeNumber={value.scopeNumber} address={value.address} />
              </div>
          }else{
            return <ResultCard key={id++} imgUrl={value.imgUrl} title={value.title} scopeNumber={value.scopeNumber} address={value.address} />
          }
        })}
      </SearchResult>
      {/* <LodingSpinner/> */}
    </SearchSection>
  );
}

export default SearchMatJip;
interface testDataType {
  id : number
  imgUrl : string
  title : string
  scopeNumber : number
  address : string
}

const testData = [
  {
  id : 1,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 2,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
}
,{
  id : 3,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 4,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 5,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 6,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 7,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 8,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 9,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 10,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 11,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 12,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 13,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 14,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 15,  
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 16,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 17,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 18,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 19,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
},{
  id : 20,
  imgUrl : "/assets/images/Matjip.png",
  title : "뜨돈ddddddddddddddddddddddㅇㅇ",
  scopeNumber : 4.0,
  address : "월서로 31"
}
]