import { userStore } from './../stores/user';
import { UserState } from './../types/store/user';
import { useNavigateUrl } from './useNavigateUrl';

import { writeLogStore } from '../stores/writeLog';

import { WriteLogState, logStore } from './../types/store/writeLog';
import { MatjipDto } from '../types/api/matjip';
import { useLogResult } from '../types/hook/common/useLog';
import { useState } from 'react';

export const useLog = (): useLogResult => {
    const [emojiActive, setEmogiActive] = useState<boolean>(false);

    const { matjip, log, order }: WriteLogState = writeLogStore();
    const { setMatjip, setLog, setOrder, initWriteLogStore, initLogStore, setEmoji }: WriteLogState = writeLogStore();
    const { isLogin }: UserState = userStore();

    const { handleUrl } = useNavigateUrl();

    const writeLog = (e: React.MouseEvent<HTMLButtonElement>, matjipInfo: MatjipDto) => {
        e.stopPropagation();
        if(!isLogin) return handleUrl("/login");

        setMatjip({...matjipInfo});
        setLog({logSequence: 0, content: "", isCustom: false, orderingMethod: "", isPublic: false,});
        setOrder("post");
        handleUrl("/myLogWork");
    }

    const writeCustumMatjip = () => {
        if(!isLogin) return handleUrl("/login");
        
        initWriteLogStore();
        handleUrl("/myLogWork");
    }

    const configLog = (e: React.MouseEvent<HTMLLIElement | HTMLDivElement>, matjipInfo: MatjipDto, logInfo: logStore) => {
        e.stopPropagation();
        if(!isLogin) return handleUrl("/login");

        setMatjip({...matjipInfo});
        setLog({...logInfo});
        setOrder("put");
        handleUrl("/myLogWork");
    }

    const searchMatjip = () => {
        initWriteLogStore();
        handleUrl("/matjip");
    }

    const setMatjipStore = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setMatjip({ ...matjip, [name]: value });
    }

    const setLogStore = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLog({ ...log, [name]: value });
    }

    const handleEmogiSelect = (emoji: any) => {
        setEmoji(emoji);
        toggleEmogiActive();
    }

    const toggleEmogiActive = () => {
        setEmogiActive((prev) => !prev);
    }

    return { 
        matjip, log , order, emojiActive,
        searchMatjip, writeLog, writeCustumMatjip, configLog, setMatjipStore, setLogStore, initWriteLogStore, setMatjip, setLog, handleEmogiSelect, toggleEmogiActive }
}