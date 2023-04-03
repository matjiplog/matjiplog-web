import { MatjipDto } from './../api/matjip';

export interface WriteLogState {
    matjip: MatjipDto,
    content: string,
    isCustom: boolean,
    order: "post" | "put" | "",
    setMatjip: (data: MatjipDto) => void,
    setContent: (data: string) => void,
    setIsCustom: (isCustom: boolean) => void,
    setOrder: (order: "post" | "put") => void,
    initWriteLogStore: () => void,
}