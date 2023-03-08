import React from "react";
import ProductCard from "../../../Components/commonComponents/ProductCard";
import Title from "../../../Components/commonComponents/Title";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import logo1 from "../../../assets/images/alexunder-hess-bWZAPKm0zZE-unsplash.jpg";
import logo2 from "../../../assets/images/alexunder-hess-6zqd6092B1c-unsplash.jpg";

const SectionFour = () => {
    return (
        <>
            <section className="home-wrapper-4">
                <Wrapper className={"g-2"}>
                    <Title Title={"product"} />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                </Wrapper>
            </section>
        </>
    );
};

export default SectionFour;
