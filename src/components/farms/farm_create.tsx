import {Button, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import React, {ChangeEvent} from "react";
import {IFarmInfoProps} from "../../adapters/farms/farm_info_props";
import {Address, useDaumPostcodePopup} from "react-daum-postcode";
import Box from "@mui/material/Box";

function FarmCreate(farmInfoProps: IFarmInfoProps) {

    const postCodeOpen = useDaumPostcodePopup();

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        farmInfoProps.updateValue(e.target.name, e.target.value);
    }

    const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        farmInfoProps.updateValue(e.target.name, e.target.checked);
    }

    const handlePostcodeComplete = (data: Address) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        console.log(fullAddress);
        farmInfoProps.updateValue("address", fullAddress);
    }

    const handlePostcodeClick = async () => {
        await postCodeOpen({onComplete: handlePostcodeComplete})
    }

    return (
        <>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8}>
                    <h3>
                        농장 추가하기
                    </h3>
                </Grid>
                <Grid item xs={4}>
                    <Box display={"flex"} justifyContent={"flex-end"}>
                        <Button variant="contained" sx={{marginRight: 1}}>저장</Button>
                        <Button variant="outlined">취소</Button>
                    </Box>
                </Grid>

                <Grid item xs={10}>
                    <TextField id="outlined-basic" name="name" label="농장이름" value={farmInfoProps.name}
                               variant="outlined"
                               required fullWidth
                               size="small" onChange={handleChangeText}/>
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel
                        control={<Checkbox name="isActive" checked={farmInfoProps.isActive}
                                           onChange={handleChangeCheckbox}/>}
                        label="활성여부"/>
                </Grid>

                <Grid item xs={6}>
                    <TextField id="outlined-basic" name="mainPhone" label="메인 연락처" value={farmInfoProps.mainPhone}
                               variant="outlined" required fullWidth
                               size="small" onChange={handleChangeText}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" name="alternatePhone" label="대체 연락처"
                               value={farmInfoProps.alternatePhone} fullWidth
                               variant="outlined"
                               size="small" onChange={handleChangeText}/>
                </Grid>

                <Grid item xs={10}>
                    <TextField id="outlined-basic" name="address" label="주소" variant="outlined"
                               value={farmInfoProps.address} fullWidth
                               size="small" onChange={handleChangeText}/>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={handlePostcodeClick}>찾기</Button>
                </Grid>

                <Grid item xs={12}>
                    <TextField id="outlined-basic" name="detailAddress" label="세부 주소" variant="outlined"
                               value={farmInfoProps.detailAddress} fullWidth
                               size="small" onChange={handleChangeText}/>
                </Grid>

                <Grid item xs={12}>
                    <TextField id="outlined-basic" name="directions" label="찾아오는 길" variant="outlined" multiline
                               value={farmInfoProps.directions}
                               minRows={4} fullWidth
                               size="small" onChange={handleChangeText}/>
                </Grid>

                <Grid item xs={6}>
                    <TextField id="outlined-basic" name="email" label="이메일" variant="outlined"
                               value={farmInfoProps.email} fullWidth
                               size="small" onChange={handleChangeText}/>
                </Grid>

                <Grid item xs={12}>
                    <TextField id="outlined-basic" name="ownerNotes" label="소개" variant="outlined" multiline
                               value={farmInfoProps.ownerNotes}
                               minRows={4} fullWidth
                               size="small" onChange={handleChangeText}/>
                </Grid>

                <Grid item xs={12}>
                    <TextField id="outlined-basic" name="hashTags" label="해시태그" variant="outlined"
                               value={farmInfoProps.hashTags} fullWidth
                               size="small" onChange={handleChangeText}/>
                </Grid>

                <Grid item xs={12}>
                    <TextField id="outlined-basic" name="conveniences" label="편의시설" variant="outlined" multiline
                               value={farmInfoProps.conveniences}
                               minRows={4} fullWidth
                               size="small" onChange={handleChangeText}/>
                </Grid>

                <Grid item>
                    <FormControlLabel
                        control={<Checkbox name="isReservationCancelable"
                                           checked={farmInfoProps.isReservationCancelable}
                                           onChange={handleChangeCheckbox}/>}
                        label="예약취소 가능여부"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" name="refundPolicy" label="환불정책" variant="outlined" multiline
                               value={farmInfoProps.refundPolicy}
                               minRows={4} fullWidth
                               size="small" onChange={handleChangeText}/>
                </Grid>

            </Grid>
        </>
    )
}

export default FarmCreate;

