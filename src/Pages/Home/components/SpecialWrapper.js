import React from "react";
import Title from "../../../Components/commonComponents/Title";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import SpecialCard from "./SpecialCard";
import logo1 from "../../../assets/images/watch.jpg";
import { useDispatch } from "react-redux";
import { addToCard } from "../../../Redux/Features/wishListSlice";
import shortid from "shortid";

const SpecialWrapper = () => {
    // const dispatch = useDispatch();
    // const handleToCard = (product) => {
    //     dispatch(addToCard(product));
    // };

    const data = [
        {
            logo1: logo1,
            col: "col-4",
            text1: "diamond",
            text2: "a beautiful company for watches guys",
            value: 3,
            price: "$100",
            price2: "$200",
            days: "5",
            num: 9,
            id: shortid.generate(),
            type: "watch",
        },
        {
            logo1: logo1,
            col: "col-4",
            text1: "diamond",
            text2: "a beautiful company for watches guys",
            value: 3,
            price: "$200",
            price2: "$300",
            days: "5",
            num: 9,
            id: shortid.generate(),
            type: "watch",
        },
        {
            logo1: logo1,
            col: "col-4",
            text1: "diamond",
            text2: "a beautiful company for watches guys",
            value: 3,
            price: "$400",
            price2: "$500",
            days: "5",
            num: 9,
            id: shortid.generate(),
            type: "watch",
        },
    ];
    return (
        <>
            <section className="SpecialWrapper py-5">
                <Wrapper>
                    <Title text={"special products"} />
                    <div className="row">
                        {data.map((e) => (
                            <SpecialCard
                                logo1={logo1}
                                col={e.col}
                                text1={e.text1}
                                text2={e.text2}
                                value={e.value}
                                price={e.price}
                                price2={e.price2}
                                days={e.days}
                                num={e.num}
                                key={e.id}
                                e={e.id}
                                total={e}
                            />
                        ))}
                        {/* <SpecialCard
                            logo1={logo1}
                            col={"col-4"}
                            text1={"diamond"}
                            text2={"a beautiful company for watches guys"}
                            value={3}
                            price={"$100"}
                            price2={"$200"}
                            days={"5"}
                            num={9}
                        /> */}
                        {/* <SpecialCard
                            logo1={logo1}
                            col={"col-4"}
                            text1={"diamond"}
                            text2={"a beautiful company for watches guys"}
                            value={3}
                            price={"$100"}
                            price2={"$200"}
                            days={"5"}
                            num={9}
                        />
                        <SpecialCard
                            logo1={logo1}
                            col={"col-4"}
                            text1={"diamond"}
                            text2={"a beautiful company for watches guys"}
                            value={3}
                            price={"$100"}
                            price2={"$200"}
                            days={"5"}
                            num={9}
                        /> */}
                    </div>
                    {/* <button onClick={() => handleToCard(amr)}>Click me</button> */}
                </Wrapper>
            </section>
        </>
    );
};

export default SpecialWrapper;
