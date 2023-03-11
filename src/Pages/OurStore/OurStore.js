import React from "react";
import Meta from "../../Components/commonComponents/Meta";
import Title from "../../Components/commonComponents/Title";
import Wrapper from "../../Components/commonComponents/Wrapper";

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
                    <div className="col-3"></div>
                </Wrapper>
            </div>
        </>
    );
};

export default OurStore;
