import { useNavigateUrl } from './useNavigateUrl';

import { writeLogStore } from '../stores/writeLog';

import { WriteLogState, logStore } from './../types/store/writeLog';
import { MatjipDto } from '../types/api/matjip';
import { useLogResult } from '../types/hook/common/useLog';

export const useLog = (): useLogResult => {
    const { matjip, log, order }: WriteLogState = writeLogStore();
    const { setMatjip, setLog, setOrder, initWriteLogStore, initLogStore }: WriteLogState = writeLogStore();
    const { handleUrl } = useNavigateUrl();

    const writeLog = (e: React.MouseEvent<HTMLButtonElement>, matjipInfo: MatjipDto) => {
        e.stopPropagation();
        setMatjip({...matjipInfo});
        setLog({logSequence: 0, content: "", isCustom: false, orderingMethod: "", isPublic: false,});
        setOrder("post");
        handleUrl("/createMyLog");
    }

    const writeCustumMatjip = () => {
        initWriteLogStore();
        handleUrl("/createMyLog");
    }

    const configLog = (e: React.MouseEvent<HTMLLIElement | HTMLDivElement>, matjipInfo: MatjipDto, logInfo: logStore) => {
        e.stopPropagation();
        setMatjip({...matjipInfo});
        setLog({...logInfo});
        setOrder("put");
        handleUrl("/createMyLog");
    }

    const searchMatjip = () => {
        initWriteLogStore();
        handleUrl("/search");
    }

    const setMatjipStore = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setMatjip({ ...matjip, [name]: value });
    }

    const setLogStore = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLog({ ...log, [name]: value });
    }

    return { matjip, log , order,  searchMatjip, writeLog, writeCustumMatjip, configLog, setMatjipStore, setLogStore, initWriteLogStore, setMatjip, setLog }
}