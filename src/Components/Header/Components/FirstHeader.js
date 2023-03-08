import React from "react";

const FirstHeader = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0 text-capitalize">
                                free shipping Over $100 & free returns
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0 text-capitalize">
                                hotLine :
                                <a
                                    className="text-white"
                                    href="tel:+20 01153928262"
                                >
                                    +20 01153298262
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default FirstHeader;
