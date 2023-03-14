import React from "react";
import Meta from "../../Components/commonComponents/Meta";
import Title from "../../Components/commonComponents/Title";
import Wrapper from "../../Components/commonComponents/Wrapper";
import CardLeftFour from "./Components/CardLeftFour";
import CardLeftOne from "./Components/CardLeftOne";
import CardLeftThree from "./Components/CardLeftThree";
import CardLeftTwo from "./Components/CardLeftTwo";
import logo1 from "../../assets/images/watch.jpg";

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
                            subTitle1={"availability"}
                            subTitle2={"price"}
                            text1={"in stock"}
                            text2={"out of stock"}
                        />
                        <CardLeftThree
                            title={"product tags"}
                            text1={"samsung"}
                            text2={"lg"}
                            text3={"apple"}
                            text4={"vivo"}
                            text5={"amr"}
                        />
                        <CardLeftFour
                            title={"random products"}
                            value={4}
                            logo1={logo1}
                        />
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default OurStore;
