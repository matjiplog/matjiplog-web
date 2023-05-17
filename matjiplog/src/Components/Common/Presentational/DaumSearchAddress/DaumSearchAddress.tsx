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

    return (
        <DaumSearchAddressArticle>
            <DaumPostcode
                style={{ width: "400px", height: "600px" } as React.CSSProperties}
                autoClose
                onComplete={onCompletePost}
            />
            <CloseButton 
                onClick={toggleActive} 
                ref={closeButtonRef} 
            >
                닫기
            </CloseButton> 
        </DaumSearchAddressArticle>
    )

    async function onCompletePost(data: any) {
        const { address, zonecode: zipcode } = data;

        try{
            const data = await getLatitudeLongitude(address);
            const { x, y, address_name } = data;
            if(x && y){
                setMatjip({ ...matjip, address: address_name, zipcode, locationLatitude: x, locationLongitude: y });
                if(closeButtonRef?.current){
                    closeButtonRef.current.click();
                } 
            }
        }
        catch(error){
            console.log(error);
        }
    }
}

export default DaumSearchAddress;