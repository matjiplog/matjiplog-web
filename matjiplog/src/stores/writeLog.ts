import { create } from 'zustand';

import { WriteLogState, logStore } from './../types/store/writeLog';
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
    log: {
        logSequence: 0,
        content: "",
        isCustom: true,
        orderingMethod: "",
        isPublic: false,
    },
    order: "post",

    setMatjip : (data: MatjipDto) => {
        set(() => ({ matjip: {...data} }));
    },

    setLog : (data: logStore) => {
        set(() => ({ log: {...data} }));
    },
    
    setOrder : (order: "post" | "put") => {
        set(() => ({ order }));
    },

    setEmoji : (emoji: any) => {
        set((state) => ({log: {
            ...state.log,
            content: state.log.content + emoji.emoji
        }}));
    },

    initLogStore : () => {
        set(() => ({  
            log: {
                logSequence: 0,
                content: "",
                isCustom: true,
                orderingMethod: "",
                isPublic: false,
            },
        }))
    },

    initWriteLogStore : () => {
        set(() => ({  
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
            log: {
                logSequence: 0,
                content: "",
                isCustom: true,
                orderingMethod: "",
                isPublic: false,
            },
            order: "post",
        }))
    }
}));
