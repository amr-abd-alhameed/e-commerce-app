import React from "react";
import logo from "../../assets/images/cross.svg";
import { useDispatch } from "react-redux";
import { removeFromCard } from "../../Redux/Features/wishListSlice";
const WishListCard = ({ logo1, text2, price, total }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4  ">
                <div className="wishListCard position-relative">
                    <img
                        className="cross position-absolute img-fluid"
                        src={logo}
                        alt="cross"
                        onClick={() => dispatch(removeFromCard(total))}
                    />
                    <div className="wishListImage">
                        <img className="img-fluid" src={logo1} alt="" />
                    </div>
                    <div className="py-3 px-3">
                        <h5 className="Title">{text2}</h5>
                        <h6 className="price">{price}</h6>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WishListCard;
