import { MatjipDto } from '../../api/matjip';

import { logStore } from '../../store/writeLog';

export interface useLogResult {
    matjip: MatjipDto,
    log: logStore,
    order: "post" | "put",
    
    searchMatjip: () => void,
    writeLog: (e: React.MouseEvent<HTMLButtonElement>, matjipInfo: MatjipDto) => void,
    writeCustumMatjip: () => void,
    configLog: (e: React.MouseEvent<HTMLLIElement | HTMLDivElement>, matjipInfo: MatjipDto, logInfo: logStore) => void,
    setMatjipStore: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    setLogStore: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    initWriteLogStore: () => void,
    setMatjip: (data: MatjipDto) => void,
    setLog: (data: logStore) => void,
}