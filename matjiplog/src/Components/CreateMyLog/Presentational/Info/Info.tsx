import { useState } from 'react';

import DaumSearchAddress from '../../../Common/Presentational/DaumSearchAddress/DaumSearchAddress';

import { useLogResult } from '../../../../types/hook/common/useLog';

import { getHasTagMenu } from '../../../../utils/getHasTagMenu';

import { Input, HastagSelect, HastagOption, Title, TitleAndInput, Button, Search } from './InfoStyle';

import { useLog } from '../../../../Hooks/useLog';

function Info(): JSX.Element {
    const hasTagList: string[] = getHasTagMenu();

    const { matjip, log, setMatjipStore }: useLogResult = useLog();
    const { matjipSequence, phonenumber, phoneNumber, name, address, category } = matjip;
    const { isCustom } = log;

    const [active, setActive] = useState<boolean>(false);
    const toggleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setActive((prev) => !prev);
    }

    return (
        <>
            {active && <DaumSearchAddress toggleActive={toggleActive} />}
            <TitleAndInput>
                <Title>이름</Title>
                <Input 
                    name="name" 
                    value={name} 
                    required
                    disabled={isCustom ? false : true}
                    onChange={setMatjipStore}
                />
            </TitleAndInput>
            <TitleAndInput>
                <Title>번호</Title>
                <Input 
                    type="tel"
                    name="phonenumber" 
                    value={phonenumber ? phonenumber : phoneNumber}
                    disabled={isCustom ? false : true}
                    onChange={setMatjipStore}
                />
            </TitleAndInput>
            <TitleAndInput>
                <Title>주소</Title>
                <Input 
                    name="address" 
                    value={address} 
                    required
                    disabled={true}
                    onChange={setMatjipStore}
                />
                <Button active={isCustom ? 1 : 0}  onClick={toggleActive}>
                    <Search />
                </Button>
            </TitleAndInput>
            <TitleAndInput>
                <Title>카테고리</Title>
                <HastagSelect name="category" value={category} onChange={setMatjipStore} disabled={isCustom ? false : true} >
                    {hasTagList.map((hastag: string, index: number) => {
                        return (
                            <HastagOption value={hastag} key={index}>
                                {hastag}
                            </HastagOption>
                        )
                    })}
                </HastagSelect>
            </TitleAndInput>
        </>
    )
}

export default Info;