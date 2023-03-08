import React from "react";

const SearchingFiled = ({ col, placeholder, icon, text }) => {
    return (
        <>
            <div className={col}>
                <div className="input-group ">
                    <input
                        type="text"
                        className="form-control py-2"
                        placeholder={placeholder}
                        aria-label={placeholder}
                        aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text py-3" id="basic-addon2">
                        {icon}
                        {text}
                    </span>
                </div>
            </div>
        </>
    );
};

export default SearchingFiled;
