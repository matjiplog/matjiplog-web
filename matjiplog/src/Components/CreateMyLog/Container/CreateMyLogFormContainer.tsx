import { useMutation } from 'react-query';
import { useEffect, useState } from 'react';

import SelectImage from '../Presentational/SelectImage/SelectImage';
import InputMap from '../Presentational/InputMap/InputMap';
import InputDetail from '../Presentational/InputDetail/InputDetail';
import InputDisclosure from '../Presentational/InputDisclosure/InputDisclosure';
import InputScope from '../Presentational/InputScope/InputScope';
import InputOtion from '../Presentational/InputOption/InputOption';
import Info from '../Presentational/Info/Info';

import { CreateMyLogForm, InfoDiv, InfoAndReview, ReviewDiv, ScopeAndOptions } from './CreateMyLogFormContainerStyle';

import { useImageSelectResult } from '../../../types/hook/common/useImageSelect';
import { PostLogRequest, PutLogInfoRequest } from '../../../types/api/myLog';
import { MatjipDto, PostMatjipCustomRequest } from '../../../types/api/matjip';
import { dropBarMenuState } from '../../../types/store/dropBar';
import { useLogResult } from '../../../types/hook/common/useLog';
import { logStore } from '../../../types/store/writeLog';
import { UserState } from '../../../types/store/user';

import { useImageSelect } from '../../../Hooks/useImageSelect';
import { useNavigateUrl } from '../../../Hooks/useNavigateUrl';
import { useLog } from '../../../Hooks/useLog';

import { dropBarMenuStore } from '../../../stores/dropBar';
import { userStore } from '../../../stores/user';

import { postLog, putLogInfo } from '../../../Services/LogAPi';
import { postMatjipCustom } from '../../../Services/matjipApi';

function CreateMyLogFormContainer(): JSX.Element {
    const { dropBarMenu, initDropBarMenu }: dropBarMenuState = dropBarMenuStore();
    const { isLogin, userSequence }: UserState = userStore();

    const { handleUrl } = useNavigateUrl();
    const { matjip, log, order, initWriteLogStore }: useLogResult = useLog();
    const { images, selectImages, deleteImage }: useImageSelectResult = useImageSelect();

    const logPostMutation = useMutation(["postLog"], (logData: PostLogRequest) => postLog(logData), {
        onSuccess(response) {
            handleUrl("/mylog");
        },
        onError(error) {
            alert('로그 등록 에러.');
        }
    });
    const matjipPostMutation = useMutation(["postMatjip"], (matjipData: PostMatjipCustomRequest) => postMatjipCustom(matjipData), {
        onSuccess(response) {
            doPostLog(response.matjipData.matjipSequence, matjip, log);
        },
        onError(error) {
            initWriteLogStore();
            initDropBarMenu();
            alert('맛집 등록 에러.');
        }
    });
    const logPutMutatjion = useMutation(["putLog"], (modifiedLogInfo: PutLogInfoRequest) => putLogInfo(modifiedLogInfo), {
        onSuccess(response) {
            if(response?.success) handleUrl("/mylog");
            else alert('맛집 수정에 실패했습니다.');
        },
        onError(error) {
            alert('맛집 수정 에러.');
        }
    });

    // 로그 등록 폼 제출 시 실행되는 함수
    const submitPostLog = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(order === "put") return doPutLog(matjip, log);
        if(!log.isCustom && order === "post") return doPostLog(matjip.matjipSequence, matjip, log);
        if(log.isCustom && order === "post") return doPostCustumMatjip(matjip);
    }

    // 맛집 로그 등록 함수
    const doPostLog = (matjipSequence: number, matjipInfo: MatjipDto, logIfno: logStore) => {
        const { ratingPortion, ratingService, ratingTaste } = matjipInfo;
        const { content, isCustom, isPublic } = logIfno;
        const orderingMethod = dropBarMenu === "선택 없음" ? undefined : dropBarMenu;

        if(!content || !userSequence || !ratingPortion || !ratingService || !ratingTaste) return alert("실패");
        logPostMutation.mutate({ userSequence, isCustom, matjipSequence, content, ratingTaste, ratingPortion, ratingService, orderingMethod, isPublic });
    }
    // 사용자 정의 맛집 로그 등록 함수
    const doPostCustumMatjip = (matjipInfo: MatjipDto) => {
        const { phonenumber, zipcode, category, name, locationLatitude, locationLongitude, address, roadAddress, imageDetail } = matjipInfo;

        if(!name || !locationLatitude || !locationLongitude || !address || !userSequence) return alert("실패");
        matjipPostMutation.mutate({ name, phoneNumber: phonenumber, zipcode, address, roadAddress, category, locationLatitude, locationLongitude, requester: userSequence });
    }
    // 맛집 로그 수정 함수
    const doPutLog = (matjipInfo: MatjipDto, logInfo: logStore) => {
        const { matjipSequence, ratingPortion, ratingService, ratingTaste } = matjipInfo;
        const { logSequence, isCustom, content, isPublic } = logInfo;
        const orderingMethod = dropBarMenu === "선택 없음" ? undefined : dropBarMenu;

        if(!matjipSequence || !ratingPortion || !ratingService || !ratingTaste || !logSequence || !content || !userSequence) return alert("실패");
        logPutMutatjion.mutate({ logSequence, userSequence, isCustom, matjipSequence, content, ratingTaste, ratingPortion, ratingService, orderingMethod, isPublic, isActive: true });
    }

    useEffect(() => {
        if(!isLogin || !userSequence) return handleUrl("/login");
    }, [])

    return (
        <CreateMyLogForm onSubmit={submitPostLog}>
            <InfoAndReview>
                <InfoDiv>
                    <Info />
                    <SelectImage 
                        images={images}
                        selectImages={selectImages}
                        deleteImage={deleteImage}
                    />
                </InfoDiv>
                <ReviewDiv>
                    {order === "post" && <InputMap />}
                    <InputDisclosure />
                    <ScopeAndOptions>
                        <InputScope />
                        <InputOtion />
                    </ScopeAndOptions>
                </ReviewDiv>
            </InfoAndReview>
            <InputDetail />
        </CreateMyLogForm>
    )
}

export default CreateMyLogFormContainer;