import React, {useState} from 'react';
import FarmCreate from "../../components/farms/farm_create";
import {IFarmInfoProps} from "../../adapters/farms/farm_info_props";

function FarmCreateContainer() {
    const [farmInfo, setFarmInfo] = useState<IFarmInfoProps>({
        name: "",
        mainPhone: "",
        alternatePhone: "",
        address: "",
        detailAddress: "",
        directions: "",
        email: "",
        ownerNotes: "",
        hashTags: "",
        conveniences: "",
        refundPolicy: "",
        isActive: true,
        isReservationCancelable: false,
        updateValue: (key: string, value: string | boolean) => {
        }
    })

    const onChangeValue = (key: string, value: string | boolean) => {
        console.log("onChangeValue : " + key + "/" + value);

        setFarmInfo({
            ...farmInfo,
            [key]: value
        });
    }

    return (
        <FarmCreate {...farmInfo} updateValue={onChangeValue}/>
    );
}

export default FarmCreateContainer;