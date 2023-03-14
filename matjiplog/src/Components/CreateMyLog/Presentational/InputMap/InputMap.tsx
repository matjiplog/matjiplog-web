import { FindMap, FindMapTitle, FindMapIcon } from './InputMapStyle';

function InputMap(): JSX.Element {
  
    return (
        <FindMap>
            <FindMapTitle>음식점 찾기</FindMapTitle>
            <FindMapIcon size={30} />
        </FindMap>
    );
}

export default InputMap;