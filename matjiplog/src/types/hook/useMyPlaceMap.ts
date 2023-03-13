export interface useMyPlaceMapResult {
    mapRef: React.RefObject<HTMLDivElement>,
    map: any,
    myPlace: { latitude: number; longitude: number },
}