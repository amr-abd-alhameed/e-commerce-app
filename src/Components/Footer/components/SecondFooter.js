import React from "react";
import Column from "./Column";
import FooterIcons from "./FooterIcons";

const SecondFooter = () => {
    return (
        <>
            <div className="py-4 secondFooter">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4 text-capitalize text-white">
                            <h4>contact us</h4>
                            <div>
                                <address className="text-white fs-6 text-capitalize">
                                    main store : 199 near Safe House <br />
                                    Virginia,Washington DC <br /> PinCode:
                                    199961{" "}
                                </address>
                                <a
                                    href="tel:+20 01153298262"
                                    className="mt-3 d-block mb-2 text-white"
                                >
                                    01153298262
                                </a>
                                <a
                                    href="mailto:amrabdalhammed947@gmail.com"
                                    className="mt-2 d-block mb-2 text-white text-lowercase"
                                >
                                    amrabdalhammed947@gmail.com
                                </a>
                                <FooterIcons />
                            </div>
                        </div>
                        <div className="col-3 text-capitalize text-white">
                            <Column
                                name1={"privacy policy"}
                                name2={"refund policy"}
                                name3={"shipping policy"}
                                name4={"terms and conditions"}
                                title={" blog"}
                            />
                        </div>
                        <div className="col-3 text-capitalize text-white">
                            <Column
                                name1={"search"}
                                name2={"about us"}
                                name3={"faq"}
                                name4={"contact"}
                                title={"size chart"}
                            />
                        </div>
                        <div className="col-2 text-capitalize text-white">
                            <Column
                                name1={"laptops"}
                                name2={"headPhones"}
                                name3={"tablets"}
                                name4={"watches"}
                                title={"quick links"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SecondFooter;
