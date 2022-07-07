import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getprod = createAsyncThunk("products/getprod", async() => {
    const res = await axios.get("http://localhost:5000/products")
    return res.data
})
export const addprod = createAsyncThunk("products/addprod", async({title, value}) => {
    const res = await axios.post("http://localhost:5000/products", {
        title,
        value
    })
    return res.data
})
export const deleteprod = createAsyncThunk("products/deleteprod", async(id) => {
    await axios.delete(`http://localhost:5000/products/${id}`)
    return id
})
export const updateprod = createAsyncThunk("products/updateprod", async({id, title, value}) => {
    await axios.patch(`http://localhost:5000/products/${id}`, {
        title, 
        value
    })
    return id
})

const prodentity = createEntityAdapter({
    selectId: (product) => product.id
})

const prodsslice = createSlice({
    name: "product",
    initialState: prodentity.getInitialState(),
    extraReducers : {
        [getprod.fulfilled] : (state, action) => {
            prodentity.setAll(state, action.payload);
        },
        [addprod.fulfilled] : (state, action) => {
            prodentity.addOne(state, action.payload);
        },
        [deleteprod.fulfilled] : (state, action) => {
            prodentity.removeOne(state, action.payload);
        },
        [updateprod.fulfilled] : (state, action) => {
            prodentity.updateOne(state, {id: action.payload.id, updates: action.payload});
        }
    }
    

})
export const productselect = prodentity.getSelectors(state => state.product)
export default prodsslice.reducer