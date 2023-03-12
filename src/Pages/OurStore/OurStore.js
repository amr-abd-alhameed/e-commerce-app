import React from "react";
import Meta from "../../Components/commonComponents/Meta";
import Title from "../../Components/commonComponents/Title";
import Wrapper from "../../Components/commonComponents/Wrapper";
import CardLeftOne from "./Components/CardLeftOne";
import CardLeftTwo from "./Components/CardLeftTwo";

const OurStore = () => {
    return (
        <>
            <Meta Title={"our store"} />
            <Title
                className="text-center mb-0 py-4 "
                text={"home / our store"}
            />
            <div className="storeWrapper py-5">
                <Wrapper>
                    <div className="col-3">
                        <CardLeftOne
                            title={"shop by categories"}
                            text1={"watch"}
                            text2={"laptop"}
                            text3={"tv"}
                            text4={"camera"}
                        />
                        <CardLeftTwo
                            title={"filter by"}
                            subTitle={"availability"}
                            text1={"in stock"}
                            text2={"out of stock"}
                        />
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default OurStore;
