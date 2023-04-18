import { create } from 'zustand';

import { UserState } from './../types/store/user';

export const userStore = create<UserState>((set) => ({
    isLogin : false,
    userSequence : 0,

    setUserSequence : (userSequence: number) => {
        set(() => ({ userSequence }));
    },

    setIsLogin : (isLogin: boolean) => {
        set(() => ({ isLogin }))
    },

    initUserStore : () => {
        set(() => ({  
            isLogin : false,
            userSequence : 0,
        }))
    }
}));
