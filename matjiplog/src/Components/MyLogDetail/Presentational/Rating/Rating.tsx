import { Scope, ScopeItems, ScopeItemTitle, ScopeItemTitleDiv, ScopeStars, ScopteItem, Star } from './RatingStyle';

import { RatingProps } from '../../../../types/props/MyLogDetail/Rating';

function Rating({ ratingPortion, ratingService, ratingTaste }: RatingProps): JSX.Element {
    const scopeArray: number[] = [0, 1, 2, 3, 4];
    const scopeItems = [{
        title: "맛",
        rating: ratingTaste,
    },{
        title: "양",
        rating: ratingPortion,
    },{
        title: "서비스",
        rating: ratingService,
    }];

    return (
        <Scope>
            <ScopeItems>
                {scopeItems.map((value, index): JSX.Element => {
                    return (
                        <ScopteItem key={index}>
                            <ScopeItemTitleDiv>
                                <ScopeItemTitle>{value.title}</ScopeItemTitle>
                            </ScopeItemTitleDiv>
                            <ScopeStars>
                                {scopeArray.map((index): JSX.Element => (
                                    <Star key={index} active={index < value.rating ? 1 : 0}/>
                                ))}
                            </ScopeStars>
                        </ScopteItem>
                    )
                })}
            </ScopeItems>
        </Scope>
    )
}

export default Rating;