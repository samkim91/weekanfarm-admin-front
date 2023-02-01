import {TextField} from "@mui/material";
import React from "react";
import {IFarmInfoProps} from "../../adapters/farms/create";

function FarmCreate(farmInfoProps: IFarmInfoProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        farmInfoProps.updateTextProps(e.target.name, e.target.value);
    }

    return (
        <>
            <TextField id="outlined-basic" name="name" label="농장이름" variant="outlined" required
                       size="small" onChange={handleChange}/>

            <TextField id="outlined-basic" name="mainPhone" label="메인 연락처" variant="outlined" required
                       size="small" onChange={handleChange}/>

            <TextField id="outlined-basic" name="alternatePhone" label="대체 연락처" variant="outlined"
                       size="small" onChange={handleChange}/>

            <TextField id="outlined-basic" name="detailAddress" label="세부 주소" variant="outlined"
                       size="small" onChange={handleChange}/>

            <TextField id="outlined-basic" name="directions" label="찾아오는 길" variant="outlined"
                       size="small" onChange={handleChange}/>

            <TextField id="outlined-basic" name="email" label="이메일" variant="outlined"
                       size="small" onChange={handleChange}/>

            <TextField id="outlined-basic" name="ownerNotes" label="소개" variant="outlined"
                       size="small" onChange={handleChange}/>

            <TextField id="outlined-basic" name="hashTags" label="해시태그" variant="outlined"
                       size="small" onChange={handleChange}/>

            <TextField id="outlined-basic" name="conveniences" label="편의시설" variant="outlined"
                       size="small" onChange={handleChange}/>
        </>
    )
}

export default FarmCreate;

