import { createSlice } from "@reduxjs/toolkit";


export const userDetail = ({
        name : "userDetails",
        initialState: {
            users: [],
            loading: false,
            error: null,
        },
})

export default userDetail.reducer;