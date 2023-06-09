import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id:'0', name:'Singh Aakash'},
    {id:'1', name:'Ellon MuskS'},
    {id:'2', name:'tesla nikola'}
]

const usersSlice = createSlice({
    name:'users',
    initialState:[
        {id:'0', name:'Singh Aakash'},
        {id:'1', name:'Ellon MuskS'},
        {id:'2', name:'tesla nikola'}
    ],
    reducers:{}
       // addCase(state, action) {
        //    return action.payload;
       // }
    
})

export const selectAllUsers = (state)=>state.users;

export default usersSlice.reducer;