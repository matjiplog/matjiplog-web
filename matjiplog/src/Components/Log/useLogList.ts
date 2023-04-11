import { useState } from "react";
import { commentDto, logData } from "../../types/logDto";

export const useLogList = () =>{
  const [logList, setLogList] = useState<logData[]>([]);
  
  const initList = () =>{
    setLogList([]);
  }

  const firstList = (list : logData[]) => {
    setLogList([...list]);
  }

  const addList = (list : logData[]) =>{
    setLogList((prev) => [...prev, ...list]);
  }

  const commentModifyList = (comment : commentDto) => {
    const updatedLogList = [...logList]; 
    const logIndex = updatedLogList.findIndex(log => log.logSequence === comment.logSequence);
    
    if (logIndex !== -1) {
      const logData = updatedLogList[logIndex];
      const updatedComments = [...logData.comments, comment];
      updatedLogList[logIndex] = {
        ...logData,
        comments: updatedComments,
      };
    }
    setLogList(updatedLogList);
  }
  
  return { logList, initList, firstList, addList, commentModifyList };

};