import { Title, RadiusInputForm, CurrentRadius, Input, InquireBtn, InquireIcon } from './style';

import { RadiusFormProps } from '../../../../types/props/radiusForm';

function RadiusForm({ radius, submitHandler }: RadiusFormProps): JSX.Element {
    return <>
        <Title>내 주변 맛집</Title>
        <RadiusInputForm onSubmit={submitHandler}>
            <CurrentRadius>{radius}</CurrentRadius>
            <Input type="text" placeholder='원하는 반경을 입력하세요...' name='radius' />
            <InquireBtn type="submit" ><InquireIcon /></InquireBtn>
        </RadiusInputForm>
    </> 
    
}

export default RadiusForm;