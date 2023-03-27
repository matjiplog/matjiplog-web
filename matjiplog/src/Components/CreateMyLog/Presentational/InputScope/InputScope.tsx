import { Scope, ScopeItems, ScopeItemTitle, ScopeItemTitleDiv, ScopeStars, ScopeTitle, ScopteItem, Star } from './InputScopeStyle';

import { InputScopeProps } from '../../../../types/props/CreateMyLog/InputScope';
import { ScopeItemDto } from '../../../../types/props/CreateMyLog/InputScope';

function InputScope({ scopeItems, updateScope }: InputScopeProps): JSX.Element {
    const scopeArray: number[] = [0, 1, 2, 3, 4];

    return (
        <Scope>
            <ScopeTitle>별점</ScopeTitle> 
            <ScopeItems>
                {scopeItems.map((value: ScopeItemDto, index: number): JSX.Element => {
                    return (
                        <ScopteItem key={index}>
                        <ScopeItemTitleDiv>
                            <ScopeItemTitle>{value.title}</ScopeItemTitle>
                        </ScopeItemTitleDiv>
                        <ScopeStars>
                            {scopeArray.map((index: number): JSX.Element => (
                                <Star key={index} onClick={() => updateScope(index, value.order)} active={value.state[index] ? 1 : 0}/>
                            ))}
                        </ScopeStars>
                    </ScopteItem>
                    )
                })}
            </ScopeItems>
        </Scope>
    )
}

export default InputScope;