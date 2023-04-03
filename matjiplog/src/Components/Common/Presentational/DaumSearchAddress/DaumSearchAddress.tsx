import { useRef } from 'react';
import DaumPostcode from "react-daum-postcode";

import { getLatitudeLongitude } from '../../../../Services/kakaoApi';

import { writeLogStore } from '../../../../stores/writeLog';

import { DaumSearchAddressProps } from '../../../../types/props/DaumSearchAddress/DaumSearchAddress';
import { WriteLogState } from '../../../../types/store/writeLog';

import { CloseButton, DaumSearchAddressArticle } from './DaumSearchAddressStyle';

function DaumSearchAddress({ toggleActive }: DaumSearchAddressProps): JSX.Element {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const { matjip, setMatjip }: WriteLogState = writeLogStore();

    const onCompletePost = (data: any) => {
        const { address, zonecode: zipcode } = data;

        getLatitudeLongitude(address)
        .then((data) => {
            const { x, y, address_name } = data;
            if(x && y){
                setMatjip({ ...matjip, address: address_name, zipcode, locationLatitude: x, locationLongitude: y });
                if(closeButtonRef.current) closeButtonRef.current.click();
            }
        })
        .catch((error) => {
            console.log(error);
        })
    };
    
    const postCodeStyle = {
        width: "400px",
        height: "600px",
    } as React.CSSProperties;

    return (
        <DaumSearchAddressArticle>
            <DaumPostcode
                style={postCodeStyle}
                autoClose
                onComplete={onCompletePost}
            />
            <CloseButton onClick={toggleActive} ref={closeButtonRef} >닫기</CloseButton> 
        </DaumSearchAddressArticle>
    )
}

export default DaumSearchAddress;