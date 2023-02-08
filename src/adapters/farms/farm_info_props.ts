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
    refundPolicy: string;
    isActive: boolean;
    isReservationCancelable: boolean;
    updateValue: (key: string, value: string | boolean) => void;
}