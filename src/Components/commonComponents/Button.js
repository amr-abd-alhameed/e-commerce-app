import React from "react";
import { addToCard } from "../../Redux/Features/wishListSlice";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addItem, removeItem } from "../../Redux/Features/itemSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Button = ({ name, style, e, total, classS }) => {
    const dispatch = useDispatch();
    const handleToCard = (product) => {
        dispatch(addToCard(product));
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

export const ButtonTwo = ({ name, total, e, style }) => {
    const dispatch = useDispatch();
    // const param = useParams();
    // const id = param.id;
    // console.log(id);
    const navigate = useNavigate();
    console.log(total.id);
    const handleItem = (product) => {
        dispatch(removeItem(product));
        dispatch(addItem(product));
        navigate(`/simple/ ${total.id}`);
    };
    return (
        <>
            <button
                onClick={() => handleItem(total)}
                key={name}
                style={style}
                className="ButtonB text-uppercase  "
            >
                {name}
            </button>
        </>
    );
};

export default Button;
