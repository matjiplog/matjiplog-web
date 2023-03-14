import { GridDot, IconBtn, Map, MapAndGrid } from './SelectLogViewStyle';

function SelectLogView(): JSX.Element {
    return(
        <MapAndGrid>
            <IconBtn><Map /></IconBtn>
            <IconBtn><GridDot /></IconBtn>
        </MapAndGrid>
    )
}

export default SelectLogView;