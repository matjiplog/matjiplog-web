export interface UserState {
    isLogin: boolean,
    userSequence: number,

    setUserSequence: (userSequence: number) => void,
    setIsLogin: (isLogin: boolean) => void,
    initUserStore : () => void,
}