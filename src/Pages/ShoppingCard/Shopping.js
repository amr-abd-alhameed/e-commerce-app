import React from "react";
import Meta from "../../Components/commonComponents/Meta";
import BreadCrumb from "../../Components/commonComponents/BreadCrumb";
import Wrapper from "../../Components/commonComponents/Wrapper";
import logo1 from "../../assets/images/watch.jpg";
import Counter from "../../Components/commonComponents/Counter";
import ShoppingCard from "./ShoppingCard";
import Button from "../../Components/commonComponents/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Shopping = () => {
    const selector = useSelector((state) => state.wishCard.cards);
    console.log(selector);

    return (
        <>
            <Meta Title={"Shopping Card "} />
            <BreadCrumb title={"Your Shopping Card "} />
            <div className="shopping-card-Wrapper py-5 home-wrapper-2 ">
                <Wrapper>
                    <div className="col-12">
                        <div className="card-header d-flex justify-content-between py-3  align-items-center">
                            <h4 className="card-col-1">Product</h4>
                            <h4 className="card-col-2">Price</h4>
                            <h4 className="card-col-3">Quantity</h4>
                            <h4 className="card-col-4">Total</h4>
                        </div>
                        {selector == "" ? (
                            <p className="text-center text-capitalize py-5 text-danger ">
                                there isn't items in shopping card try to add
                                more
                            </p>
                        ) : (
                            selector.map((e) => (
                                <ShoppingCard
                                    key={e.id}
                                    logo1={e.logo1}
                                    text2={e.title}
                                    price={e.price1}
                                    total={e}
                                    size={e.size}
                                    color={e.color}
                                />
                            ))
                        )}
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between">
                            <div>
                                {" "}
                                <Link className="ButtonB" to={"/"}>
                                    continue Shopping
                                </Link>
                            </div>
                            <dir>
                                <h4>SubTotal: 1000$</h4>
                                <p>
                                    Taxes and shipping are calculated at
                                    checkout
                                </p>
                                <Link className="ButtonB"> CheckOut</Link>
                            </dir>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default Shopping;
