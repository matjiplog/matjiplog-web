import { MatjipDto } from './../api/matjip';

export interface logStore {
    logSequence: number,
    content: string,
    isCustom: boolean,
    orderingMethod: string,
    isPublic: boolean,
}

export interface WriteLogState {
    matjip: MatjipDto,
    log: logStore,
    order: "post" | "put",

    setMatjip: (data: MatjipDto) => void,
    setLog : (data: logStore) => void,
    setOrder: (order: "post" | "put") => void,
    initWriteLogStore: () => void,
    initLogStore: () => void,

}