import { MapDiv } from './MyPlaceMapStyle';

import { MyPlaceMapProps } from '../../../../types/props/MyPlaceMatjip/MyPlaceMap';

function MyPlaceMap({ mapRef } : MyPlaceMapProps) {

    return <MapDiv ref={mapRef} />;
}

export default MyPlaceMap;