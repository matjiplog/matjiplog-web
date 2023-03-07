export interface MatjipFetchState {
    key: string;
    fetchFn: ((pageId: number, keyWord?: string) => Promise<any | null>) | null;
    setFetch: (key: string, fetchFn: (pageId: number, keyWord?: string) => Promise<any | null>) => void;
    initFetch: () => void;
}

export interface MatjipPageState {
    page: number;
    addPage: () => void;
    initPage: () => void;
}

