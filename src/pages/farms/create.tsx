import React, {useState} from 'react';
import FarmCreate from "../../components/farms/create";

function FarmCreatePage() {
    const [farmInfo, setFarmInfo] = useState({
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
        // isReservationCancelable: true,
        // refundPolicy: "",
        // adminNotes: "",
        // isActive: true,
        // themes: "",
        // openingHours: "",
        // pricings: "",
        // urls: "",
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFarmInfo({
            ...farmInfo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <FarmCreate {...farmInfo} updateProps={onChange}/>
    );
}

export default FarmCreatePage;