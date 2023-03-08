import React from "react";
import { Link } from "react-router-dom";
const Button = ({ name }) => {
    return (
        <>
            <Link className="ButtonB text-uppercase" to={"/"}>
                {name}
            </Link>
        </>
    );
};

export default Button;
