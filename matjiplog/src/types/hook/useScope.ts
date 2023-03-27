export interface useScopeResult {
    tasteScope: boolean[];
    manyScope: boolean[];
    serviceScope: boolean[];
    updateScope: (index: number, order: string) => void;
  }
  