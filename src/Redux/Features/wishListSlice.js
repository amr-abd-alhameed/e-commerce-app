import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cards: [],
    cardQuantity: 0,
    cardsPrice: 0,
};

const wishListSlice = createSlice({
    name: "wishListSlice",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            state.cardQuantity += 1;
            state.cardsPrice = 100 * state.cardQuantity;
            const itemIndex = state.cards.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cards[itemIndex].cardQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cardQuantity: 1 };
                state.cards.push(tempProduct);
            }
        },
        removeFromCard: (state, action) => {
            const nextCards = state.cards.filter(
                (card) => card.id !== action.payload.id
            );
            state.cards = nextCards;
        },
        increment: (state, action) => {
            const itemIndex = state.cards.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                // state.cards[itemIndex].cardQuantity += 1;
                state.cardQuantity += 1;
                state.cardsPrice = 100 * state.cardQuantity;
            }
        },
        decrement: (state, action) => {
            const itemIndex = state.cards.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                // state.cards[itemIndex].cardQuantity += 1;
                state.cardQuantity -= 1;
                state.cardsPrice = 100 * state.cardQuantity;
                if (state.cardQuantity < 0) {
                    state.cardQuantity = 0;
                }
            }
        },
    },
});
export const { addToCard, removeFromCard, increment, decrement } =
    wishListSlice.actions;
export default wishListSlice.reducer;
