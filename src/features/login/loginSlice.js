import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState ={
    isLoading: false,
    errorMessage:'',
    user:{}
}

export const fetchDataUsers = createAsyncThunk('getData/users', async (user) =>{
    try{
        const response = await axios.get(`https://fakestoreapi.com/users`);
        const UserData = await response.data;
        const checkElement = await UserData.find(item => (item.email === user.email || item.username === user.email) && item.password === user.password)
        const admin = {
            name:"admin",
            email:"admin@bukapedia.com",
            password:"admin123"
        }
        if(user.email === admin.email && user.password === admin.password){
            localStorage.setItem('token', 'admin')
            return admin
        }
        else{

            await axios({
                method: 'post',
                url: 'https://fakestoreapi.com/auth/login',
                data: {
                    username: user.email,
                    password: user.password
                }
            })
            .then((response) => {
                if(response.status === 200 || response.status === 201){
                    localStorage.setItem('token', response.data.token)
                }
            })
            .catch((error) => {
                if(error.response){
                    console.log(error.response.data)
                    throw error
                }
            })
            return checkElement
            
            
        }
    } catch(error){ 
        console.log(error)
        throw error
    }


})

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        logout: (state) =>{
            state.user = initialState.user
            localStorage.removeItem('token')
        },
    },
    extraReducers(builder){
        builder
        .addCase(fetchDataUsers.fulfilled, (state, action) => {
            state.isLoading = initialState.isLoading;
            state.errorMessage = initialState.errorMessage;
            console.log(action.payload)
            state.user = action.payload;
        })
        .addCase(fetchDataUsers.pending, (state) => {
            state.isLoading = true

        })
        .addCase(fetchDataUsers.rejected, (state) => {
            state.isLoading = initialState.isLoading
            state.errorMessage = 'email atau password salah'

        })
    }
})



export const {logout} = loginSlice.actions;

export const loginReducer = loginSlice.reducer;