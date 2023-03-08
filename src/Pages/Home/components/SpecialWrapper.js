import React from "react";
import Title from "../../../Components/commonComponents/Title";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import SpecialCard from "./SpecialCard";
import logo1 from "../../../assets/images/watch.jpg";

const SpecialWrapper = () => {
    return (
        <>
            <section className="SpecialWrapper py-5">
                <Wrapper>
                    <Title text={"special products"} />
                    <div className="row">
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
                        />
                    </div>
                </Wrapper>
            </section>
        </>
    );
};

export default SpecialWrapper;
