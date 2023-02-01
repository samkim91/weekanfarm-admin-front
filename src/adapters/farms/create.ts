export type IFarmInfoProps = {
    name: string;
    mainPhone: string;
    alternatePhone: string;
    address: string;
    detailAddress: string;
    directions: string;
    email: string;
    ownerNotes: string;
    hashTags: string;
    conveniences: string;
    updateTextProps: (key: string, value: string) => void;
}