import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <>
            <div className="col-2">
                <h2>
                    <Link className="text-white text-uppercase" to={"/"}>
                        dev Amr.
                    </Link>
                </h2>
            </div>
        </>
    );
};

export default Logo;
