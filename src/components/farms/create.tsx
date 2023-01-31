import {TextField} from "@mui/material";
import React from "react";

interface IFarmInfoProps {
    name: string,
    mainPhone: string,
    alternatePhone: string,
    address: string,
    detailAddress: string,
    directions: string,
    email: string,
    ownerNotes: string,
    hashTags: string,
    conveniences: string,
    updateProps: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

function FarmCreate(farmInfoProps: IFarmInfoProps) {
    return (
        <TextField id="outlined-basic" label="농장이름" variant="outlined" required size="small"/>
    )
}

export default FarmCreate;

