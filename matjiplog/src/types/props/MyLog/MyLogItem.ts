export interface MyLogItemProps {
    logSequence: number,
    logImageUrl: string,
    title: string,
    category: string,
    address: string,
    content: string,
    handleMyLogDetailPage: (logSequence: number) => void,
    deleteMyLog: (e: React.MouseEvent<HTMLDivElement>, log_sequence: number) => void
}