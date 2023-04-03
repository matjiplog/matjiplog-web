import { useMutation } from 'react-query';
import { useEffect } from 'react';

import SelectImage from '../Presentational/SelectImage/SelectImage';
import InputMap from '../Presentational/InputMap/InputMap';
import InputDetail from '../Presentational/InputDetail/InputDetail';
import InputDisclosure from '../Presentational/InputDisclosure/InputDisclosure';
import InputScope from '../Presentational/InputScope/InputScope';
import InputOtion from '../Presentational/InputOption/InputOption';
import Info from '../Presentational/Info/Info';

import { CreateMyLogForm, InfoDiv, InfoAndReview, ReviewDiv, ScopeAndOptions } from './CreateMyLogFormContainerStyle';

import { useImageSelectResult } from '../../../types/hook/common/useImageSelect';
import { useDisclosureResult } from '../../../types/hook/common/useDisclosure';
import { PostLogRequest } from '../../../types/api/myLog';
import { WriteLogState } from '../../../types/store/writeLog';
import { PostMatjipCustom } from '../../../types/api/matjip';
import { dropBarMenuState } from '../../../types/store/dropBar';

import { useImageSelect } from '../../../Hooks/useImageSelect';
import { useDisclosure } from '../../../Hooks/useDisclosure';
import { useNavigateUrl } from '../../../Hooks/useNavigateUrl';

import { writeLogStore } from '../../../stores/writeLog';
import { dropBarMenuStore } from '../../../stores/dropBar';

import { postLog } from '../../../Services/LogAPi';
import { postMatjipCustom } from '../../../Services/matjipApi';

function CreateMyLogFormContainer(): JSX.Element {
    const userSequence = 22;

    const { matjip, isCustom, order, content, initWriteLogStore, setIsCustom, setMatjip, setContent }: WriteLogState = writeLogStore();
    const { dropBarMenu, initDropBarMenu }: dropBarMenuState = dropBarMenuStore();

    const { handleUrl } = useNavigateUrl();
    const { images, selectImages, deleteImage }: useImageSelectResult = useImageSelect();
    const { disclosure, toggleDisclosure }: useDisclosureResult = useDisclosure(false);

    const logPostMutation = useMutation(["log"], (logData: PostLogRequest) => postLog(logData), {
        onSuccess() {
            handleUrl("/mylog");
        },
        onError(error) {
            console.log(error);
            alert('로그 등록에 실패했습니다.');
        }
    });
    const matjipPostMutation = useMutation(["matjip"], (matjipData: PostMatjipCustom) => postMatjipCustom(matjipData), {
        onSuccess(data) {
            const { matjipSequence } = data.matjipData;
            doPostLog(matjipSequence);
        },
        onError(error) {
            initWriteLogStore();
            initDropBarMenu();
            console.log(error);
            alert('맛집 등록에 실패했습니다.');
        }
    });

    const submitPostLog = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { matjipSequence } = matjip;

        if(!isCustom) doPostLog(matjipSequence);
        if(isCustom) doPostCustumMatjip();
    }
    const doPostLog = (matjipSequence: number) => {
        const { name, address, ratingPortion, ratingService, ratingTaste } = matjip;
        const orderingMethod = dropBarMenu === "선택 없음" ? undefined : dropBarMenu;

        if(!name || !address || !content || !userSequence) return alert("실패");
        logPostMutation.mutate({ userSequence, isCustom, matjipSequence, content, ratingTaste, ratingPortion, ratingService, orderingMethod, isPublic: disclosure });
    }
    const doPostCustumMatjip = () => {
        const { phonenumber: phoneNumber, zipcode, category, name, locationLatitude, locationLongitude, address, roadAddress, imageDetail } = matjip;

        if(!name || !locationLatitude || !locationLongitude || !address || !userSequence) return alert("실패");
        matjipPostMutation.mutate({ name, phoneNumber, zipcode, address, roadAddress, category, locationLatitude, locationLongitude, requester: userSequence });
    }

    const setMatjipStore = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setMatjip({ ...matjip, [name]: value });
    }
    const setContentStore = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContent(value);
    }

    const searchMatjipInfo = () => {
        handleUrl("/search")
    }

    useEffect(() => {
        if(!matjip?.matjipSequence) setIsCustom(true);
        else setIsCustom(false);
    }, [])
    
    return (
        <CreateMyLogForm onSubmit={submitPostLog}>
            <InfoAndReview>
                <InfoDiv>
                    <Info setMatjipStore={setMatjipStore} />
                    <SelectImage 
                        images={images}
                        selectImages={selectImages}
                        deleteImage={deleteImage}
                    />
                </InfoDiv>
                <ReviewDiv>
                    <InputMap 
                        searchMatjipInfo={searchMatjipInfo}
                    />
                    <InputDisclosure 
                        disclosure={disclosure}
                        toggleDisclosure={toggleDisclosure}
                    />
                    <ScopeAndOptions>
                        <InputScope />
                        <InputOtion />
                    </ScopeAndOptions>
                </ReviewDiv>
            </InfoAndReview>
            <InputDetail setContentStore={setContentStore} />
        </CreateMyLogForm>
    )
}

export default CreateMyLogFormContainer;