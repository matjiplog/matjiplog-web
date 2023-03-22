import { MyLogListGrid } from './MyLogListStyle';

import MyLogItem from '../MyLogItem/MyLogItem';

import { MyLogListProps } from '../../../../types/props/MyLog/MyLogList';
import { MyLogDto } from '../../../../types/api/myLog';

function MyLogList({ viewList, setLastCardRef, handleMyLogDetailPage, deleteMyLog }: MyLogListProps): JSX.Element {
    
    return (
        <MyLogListGrid>
            {viewList.map((myLog: MyLogDto, index: number) => {
                const { content, imageSerial, logSequence, matjip, matjipSequence, ratingPortion, ratingService, ratingTaste, userSequence } = myLog;
                const { name, address, roadAddress, category } = matjip;
                const scopeNumber = (ratingPortion + ratingService + ratingTaste) / 3;
                const isLastCard = index === viewList.length - 1;

                return (
                    <div key={logSequence}>
                        <MyLogItem 
                            logSequence={logSequence}
                            logImageUrl="/assets/images/Matjip.png"
                            title={name}
                            category={category}
                            address={roadAddress}
                            content={content}
                            handleMyLogDetailPage={handleMyLogDetailPage}
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