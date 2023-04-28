import React from "react";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";

const ThirdHeader = () => {
    return (
        <>
            <div className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <DropDown />
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex d-flex align-items-center gap-15">
                                        <NavLink to="/">home</NavLink>
                                        <NavLink to="/store">our store</NavLink>
                                        <NavLink to="/">blog</NavLink>
                                        <NavLink to="/contact">contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThirdHeader;
