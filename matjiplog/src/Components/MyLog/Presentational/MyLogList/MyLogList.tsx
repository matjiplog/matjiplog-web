import { MyLogListGrid } from './MyLogListStyle';

import MyLogItem from '../MyLogItem/MyLogItem';

import { MyLogListProps } from '../../../../types/props/MyLog/MyLogList';
import { MyLogDto } from '../../../../types/api/myLog';

function MyLogList({ viewList, setLastCardRef, deleteMyLog }: MyLogListProps): JSX.Element {
    
    return (
        <MyLogListGrid>
            {viewList.map((myLog: MyLogDto, index: number) => {
                const { logSequence, matjipSequence, user } = myLog;
                const isLastCard = index === viewList.length - 1;

                return (
                    <div key={logSequence}>
                        <MyLogItem 
                            myLog={myLog}
                            deleteMyLog={deleteMyLog}
                        />
                        {isLastCard && <div ref={setLastCardRef} />}
                    </div>
                )
            })}
        </MyLogListGrid>
    )
}

export default MyLogList;