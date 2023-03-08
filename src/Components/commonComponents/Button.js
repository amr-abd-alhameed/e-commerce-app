import React from "react";
import { Link } from "react-router-dom";
const Button = ({ name, style }) => {
    return (
        <>
            <Link style={style} className="ButtonB text-uppercase" to={"/"}>
                {name}
            </Link>
        </>
    );
};

export default Button;
