import React, {useState} from 'react';
import FarmCreate from "../../components/farms/create";
import {IFarmInfoProps} from "../../adapters/farms/create";

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
        updateTextProps: (key: string, value: string) => {
        },
    })

    const onChange = (key: string, value: string) => {
        console.log("onChange : " + key + "/" + value);

        setFarmInfo({
            ...farmInfo,
            [key]: value
        });
    }

    return (
        <FarmCreate {...farmInfo} updateTextProps={onChange}/>
    );
}

export default FarmCreateContainer;