import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userId:"Nandkishor",
}

const randomRgb = () => {  
    return 'Adarsh';
  };


export const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        login:(state:any) => {
            state.userId = [...state.userId,randomRgb()];
        }
    }
})


export const { login } = loginSlice.actions;

export default loginSlice.reducer;