export interface ScopeItemDto {
    title: string;
    order: string;
    state: boolean[];
}

export interface InputScopeProps {
    scopeItems: ScopeItemDto[],
    updateScope: (index: number, order: string) => void
}