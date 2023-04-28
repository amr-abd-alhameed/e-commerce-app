import React from "react";
import Meta from "../../Components/commonComponents/Meta";
import BreadCrumb from "../../Components/commonComponents/BreadCrumb";
import Wrapper from "../../Components/commonComponents/Wrapper";

const Page = () => {
    return (
        <>
            <Meta Title={"WishList Page"} />
            <BreadCrumb title={"WishList Page"} />
            <Wrapper></Wrapper>
        </>
    );
};

export default Page;
