import { GridDot, IconBtn, Map, MapAndGrid } from './SelectLogViewStyle';

import { MapShowState } from '../../../../../types/store/mapShow';

import { mapShowStore } from '../../../../../stores/mapShow';

function SelectLogView(): JSX.Element {
    const { mapShow, activeMapShow, inActiveMapShow }: MapShowState = mapShowStore();

    return(
        <MapAndGrid>
            <IconBtn onClick={(e) => {
                e.preventDefault();
                activeMapShow();
            }}>
                <Map active={mapShow ? 1 : 0} />
            </IconBtn>
            <IconBtn onClick={(e) => {
                e.preventDefault();
                inActiveMapShow();
            }}>
                <GridDot active={mapShow ? 1 : 0} />
            </IconBtn>
        </MapAndGrid>
    )
}

export default SelectLogView;