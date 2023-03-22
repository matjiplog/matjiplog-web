import { useState } from 'react';

import { useInputResult } from '../types/hook/useInput';

export const useInput = (initialForm: any): useInputResult => {
    const [form, setForm] = useState<any>(initialForm);

    const onChangeHandler = (e: any) => {
        const { name, value } = e.target;

        setForm((prev: any) => ({ ...prev, [name]: value }));
    }

    return { form, onChangeHandler };
}