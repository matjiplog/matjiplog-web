import { MapDiv } from './style';

import { MyPlaceMapProps } from '../../../../types/props/myPlaceMap';

function MyPlaceMap({ mapRef } : MyPlaceMapProps) {

    return <MapDiv ref={mapRef} />;
}

export default MyPlaceMap;