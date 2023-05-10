import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
};
const itemSlice = createSlice({
    name: "itemSlice",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.item.push(action.payload);
        },
        removeItem: (state, action) => {
            // const nextCards = state.item.filter(
            //     (card) => card.id !== action.payload.id
            // );
            state.item = [];
        },
    },
});
export const { addItem, removeItem } = itemSlice.actions;
export default itemSlice.reducer;
