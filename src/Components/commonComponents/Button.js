import React from "react";
import { addToCard } from "../../Redux/Features/wishListSlice";
import { useDispatch } from "react-redux";
import shortid from "shortid";

const Button = ({ name, style, e, total, classS }) => {
    const dispatch = useDispatch();
    const handleToCard = (product) => {
        dispatch(addToCard(product));
    };
    const amr = {
        key: "value",
        may: "hey",
        id: shortid.generate(),
    };
    return (
        <>
            <button
                onClick={() => handleToCard(total)}
                style={style}
                className={`ButtonB text-uppercase ${classS} `}
                key={e}
            >
                {name}
            </button>
        </>
    );
};

export default Button;
