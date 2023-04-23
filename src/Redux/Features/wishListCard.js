import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cards: [],
    cardQuantity: 0,
    cardsCount: 0,  
};

const wishListCard = createSlice({
    name: "wishListCard",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            state.cards.push(action.payload);
        },
    },
});
export const { addToCard } = wishListCard.actions;
export default wishListCard.reducer;
