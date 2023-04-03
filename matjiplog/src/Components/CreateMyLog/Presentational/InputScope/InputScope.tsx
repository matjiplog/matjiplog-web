import { Scope, ScopeItems, ScopeItemTitle, ScopeItemTitleDiv, ScopeStars, ScopeTitle, ScopteItem, Star } from './InputScopeStyle';

import { WriteLogState } from '../../../../types/store/writeLog';

import { writeLogStore } from '../../../../stores/writeLog';

function InputScope(): JSX.Element {
    const { matjip, setMatjip }: WriteLogState = writeLogStore();
    const { ratingTaste, ratingPortion, ratingService } = matjip;
    const scopeArray: number[] = [0, 1, 2, 3, 4];

    return (
        <Scope>
            <ScopeTitle>별점</ScopeTitle> 
            <ScopeItems>
                <ScopteItem>
                    <ScopeItemTitleDiv>
                        <ScopeItemTitle>맛</ScopeItemTitle>
                    </ScopeItemTitleDiv>
                    <ScopeStars>
                        {scopeArray.map((index: number): JSX.Element => (
                            <Star key={index} onClick={() => setMatjip({ ...matjip, ratingTaste : index + 1 })} active={ratingTaste > index ? 1 : 0} />
                        ))}
                    </ScopeStars>
                </ScopteItem>
                <ScopteItem>
                    <ScopeItemTitleDiv>
                        <ScopeItemTitle>양</ScopeItemTitle>
                    </ScopeItemTitleDiv>
                    <ScopeStars>
                        {scopeArray.map((index: number): JSX.Element => (
                            <Star key={index} onClick={() => setMatjip({ ...matjip, ratingPortion : index + 1 })} active={ratingPortion > index ? 1 : 0} />
                        ))}
                    </ScopeStars>
                </ScopteItem>
                <ScopteItem>
                    <ScopeItemTitleDiv>
                        <ScopeItemTitle>서비스</ScopeItemTitle>
                    </ScopeItemTitleDiv>
                    <ScopeStars>
                        {scopeArray.map((index: number): JSX.Element => (
                            <Star key={index} onClick={() => setMatjip({ ...matjip, ratingService : index + 1 })} active={ratingService > index ? 1 : 0} />
                        ))}
                    </ScopeStars>
                </ScopteItem>
            </ScopeItems>
        </Scope>
    )
}

export default InputScope;