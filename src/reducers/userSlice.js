import { createSlice , nanoid} from "@reduxjs/toolkit";
const initialState = [
    {
        id : "1",
        fullname : " علی عرشی"
    },
    {
        id : "2",
        fullname : " مهدی حقگو "
    },
    {
        id : "3",
        fullname : " رضا پهلوی "
    }
];
const usersSlice = createSlice({
    name : "users",
    initialState ,
    reducers :{},
});
export default usersSlice.reducer;