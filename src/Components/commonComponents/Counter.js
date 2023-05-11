import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    removeFromCard,
} from "../../Redux/Features/wishListSlice";

const Counter = ({ total }) => {
    const dispatch = useDispatch();
    const num = useSelector((state) => state.wishCard.cardQuantity);
    return (
        <>
            <div className="d-flex align-items-center gap-30 sass">
                <div className="d-flex gap-10 align-items-center bg-white justify-content-between        boxOne  ">
                    <div className="d-flex flex-column">
                        <button
                            onClick={() => dispatch(increment(total))}
                            className=" b"
                        >
                            +
                        </button>
                        <button onClick={() => dispatch(decrement(total))}>
                            -
                        </button>
                    </div>
                    <div className="d-flex justify-content-center align-items-center num">
                        <span className="d-block">{num}</span>{" "}
                    </div>
                </div>
                <div
                    onClick={() => dispatch(removeFromCard(total))}
                    className="icon-container"
                >
                    <BsFillTrashFill />
                </div>
            </div>
        </>
    );
};

export default Counter;
