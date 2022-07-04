import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Data {
    id: number,
    img: string,
    desc: string,
    partners: string,
    video: string
}

interface dataSliceState {
    datas: Data[]
}

const initialState = {
    datas: []
} as dataSliceState

export const getDataAsync = createAsyncThunk<any>(
    "datas/getDataAsync", 
    async () => {
        return fetch('https://raw.githubusercontent.com/ngauvip3335/Loocreative-website/main/src/pages/Works/data.json?token=GHSAT0AAAAAABUWEY4U4A7JWGNR4IKMG2OSYV6KNQQ')
                .then(res => res.json())
                
    }
)

export const dataSlice = createSlice({
    name: "datas",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getDataAsync.fulfilled.toString()]: (state, action:any): any => {
            state.datas = action.payload
        }
    }
})



export default dataSlice.reducer;