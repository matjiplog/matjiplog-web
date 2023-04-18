import { useState } from 'react';

import { useInputResult } from '../types/hook/common/useInput';

export const useInput = (initialForm: any): useInputResult => {
    const [form, setForm] = useState<any>(initialForm);

    const onChangeHandler = (e: any) => {
        const { name, value } = e.target;

        setForm((prev: any) => ({ ...prev, [name]: value }));
    }

    const selectEmogi = (emoji: any) => {
        setForm((prev: any) => ({ ...prev, comment: prev.comment + emoji.emoji }));
    }

    return { form, onChangeHandler, selectEmogi };
}