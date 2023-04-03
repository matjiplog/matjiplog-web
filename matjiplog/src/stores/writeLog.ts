import { create } from 'zustand';

import { WriteLogState } from './../types/store/writeLog';
import { MatjipDto } from './../types/api/matjip';

export const writeLogStore = create<WriteLogState>((set) => ({
    matjip: {
        matjipSequence: 0,
        name: '',
        phonenumber: '',
        ratingTaste: 0,
        ratingPortion: 0,
        ratingService: 0,
        zipcode: '',
        address: '',
        roadAddress: '',
        category: '',
        locationLatitude: 0,
        locationLongitude: 0,
        imageDetail: {}
    },
    content: "",
    isCustom: true,
    order: "",

    setMatjip : (data: MatjipDto) => {
        set(() => ({ matjip: {...data} }));
    },

    setContent : (data: string) => {
        set(() => ({ content: data }));
    },
    
    setIsCustom : (isCustom: boolean) => {
        set(() => ({ isCustom: isCustom }));
    },

    setOrder : (order: "post" | "put") => {
        set(() => ({ order: order }));
    },

    initWriteLogStore : () => {
        set(() => ({  
            matjip : {
                matjipSequence: 0,
                name: '',
                phonenumber: '',
                ratingTaste: 0,
                ratingPortion: 0,
                ratingService: 0,
                zipcode: '',
                address: '',
                roadAddress: '',
                category: '',
                locationLatitude: 0,
                locationLongitude: 0,
                imageDetail: {}
            },
            content: "",
            isCustom: true,
            order: ""
        }))
    }
}));
