import {Button, ButtonGroup, Divider, FormControlLabel, Switch, TextField, Typography} from "@mui/material";
import React from "react";
import {IFarmInfoProps} from "../../adapters/farms/create";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

function FarmCreate(farmInfoProps: IFarmInfoProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        farmInfoProps.updateTextProps(e.target.name, e.target.value);
    }

    return (
        <>
            <Grid container spacing={2} sm={10} md={8} lg={4}>
                <Grid xs={12} md={12}>
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained" size="large">저장</Button>
                    </Box>
                </Grid>

                <Grid xs={10} md={10}>
                    <TextField id="outlined-basic" name="name" label="농장이름" required onChange={handleChange} fullWidth/>
                </Grid>
                <Grid xs={2} md={2}>
                    <FormControlLabel control={<Switch defaultChecked />} label="공개"/>
                </Grid>

                <Grid xs={6} md={6}>
                    <TextField id="outlined-basic" name="mainPhone" label="메인 연락처" required onChange={handleChange} fullWidth/>
                </Grid>

                <Grid xs={6} md={6}>
                    <TextField id="outlined-basic" name="alternatePhone" label="대체 연락처" onChange={handleChange} fullWidth/>
                </Grid>

                <Grid xs={10} md={10}>
                    <TextField id="outlined-basic" name="address" label="주소" onChange={handleChange} disabled fullWidth/>
                </Grid>
                <Grid xs={2} md={2}>
                    <Button>검색</Button>
                </Grid>

                <Grid xs={12} md={12}>
                    <TextField id="outlined-basic" name="detailAddress" label="세부 주소" onChange={handleChange} fullWidth/>
                </Grid>

                <Grid xs={12} md={12}>
                    <TextField id="outlined-basic" name="directions" label="찾아오는 길" onChange={handleChange} fullWidth multiline minRows={4}/>
                </Grid>

                <Grid xs={10} md={10}>
                    <Typography variant="h6">테마</Typography>
                </Grid>
                <Grid xs={2} md={2}>
                    <Button>+ 테마</Button>
                </Grid>
                <Grid xs={12} md={12}>
                {/*    테마 칩들 */}
                </Grid>

                <Grid xs={10} md={10}>
                    <Typography variant="h6">운영시간</Typography>
                </Grid>
                <Grid xs={2} md={2}>
                    <Button>+ 운영시간</Button>
                </Grid>

                <Grid xs={12} md={12}>
                    {/*    운영시간 칩들 */}
                </Grid>

                <Grid xs={10} md={10}>
                    <Typography variant="h6">이용가격</Typography>
                </Grid>
                <Grid xs={2} md={2}>
                    <Button>+ 이용가격</Button>
                </Grid>

                <Grid xs={12} md={12}>
                    {/*    이용가격 칩들 */}
                </Grid>

                <Grid xs={10} md={10}>
                    <Typography variant="h6">이메일/홈페이지 등</Typography>
                </Grid>
                <Grid xs={2} md={2}>
                    <Button>+ 사이트</Button>
                </Grid>

                <Grid xs={12} md={12}>
                    {/*    사이트 칩들 */}
                </Grid>


                <Grid xs={12} md={12}>
                    <TextField id="outlined-basic" name="ownerNotes" label="소개" onChange={handleChange} fullWidth multiline minRows={4}/>
                </Grid>

                <Grid xs={12} md={12}>
                    <TextField id="outlined-basic" name="hashTags" label="해시태그" onChange={handleChange} fullWidth/>
                </Grid>

                <Grid xs={12} md={12}>
                    <TextField id="outlined-basic" name="conveniences" label="편의시설" onChange={handleChange} fullWidth multiline minRows={4}/>
                </Grid>

                <Grid xs={12} md={12}>
                {/*    예약 취소 가능 여부 체크박스 */}
                </Grid>

                <Grid xs={12} md={12}>
                    <TextField id="outlined-basic" name="refundPolicy" label="환불정책" onChange={handleChange} fullWidth multiline minRows={4}/>
                </Grid>


                <Grid xs={10} md={10}>
                    <Typography variant="h6">농장사진</Typography>
                </Grid>
                <Grid xs={2} md={2}>
                    <Button>+ 사진</Button>
                </Grid>

                <Grid xs={12} md={12}>
                    {/*    사진들 */}
                </Grid>

                <Grid xs={12} md={12}>
                    <TextField id="outlined-basic" name="adminMemo" label="어드민 메모" onChange={handleChange} fullWidth multiline minRows={4}/>
                </Grid>

            </Grid>


        </>
    )
}

export default FarmCreate;

