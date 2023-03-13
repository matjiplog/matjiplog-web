export interface useObserverPageResult {
    page: number,
    initPage: () => void,
    setLastCardRef: (ref: HTMLDivElement) => void,
}