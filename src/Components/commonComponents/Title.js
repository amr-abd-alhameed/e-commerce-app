import React from "react";

const Title = ({ text }) => {
    return (
        <>
            <div className="col-12">
                <h3 className="sectionHeading text-capitalize">{text} </h3>
            </div>
        </>
    );
};

export default Title;
