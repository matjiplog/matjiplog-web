export interface hastagState {
    hastags: string[]
    addHastag: (hastag: string) => void;
    deleteHastag: (hastag: string) => void;
    initHastags: () => void;
}