import React from "react";
import Counter from "../../Components/commonComponents/Counter";
import { useSelector } from "react-redux";

const ShoppingCard = ({ logo1, text2, size, color, total }) => {
    const price = useSelector((state) => state.wishCard.cardsPrice);
    return (
        <>
            <div className="card-details d-flex justify-content-between py-3  align-items-center">
                <div className="card-col-1 d-flex gap-15 align-items-center">
                    <div className="w-25">
                        <img src={logo1} className="img-fluid" alt=" product" />
                    </div>
                    <div className="w-75">
                        <p className="title mb-0 text-capitalize">{text2}</p>
                        <p className="size mb-0 text-capitalize">
                            Size: {size}
                        </p>
                        <p className="color mb-0 text-capitalize">
                            Color: {color}
                        </p>
                    </div>
                </div>
                <div className="card-col-2">
                    <h5>{price}</h5>
                </div>
                <div className="card-col-3">
                    <Counter total={total} />
                </div>
                <div className="card-col-4">
                    <h5>{price}</h5>
                </div>
            </div>
        </>
    );
};

export default ShoppingCard;
