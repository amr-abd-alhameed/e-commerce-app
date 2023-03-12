import React from "react";
import FilterCardWrapper from "./FilterCardsWrapper";

const CardLeftTwo = ({ title, subTitle, text1, text2 }) => {
    return (
        <>
            <FilterCardWrapper title={title}>
                <div className="two">
                    <h5 className="subTitle">{subTitle}</h5>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id=""
                        />
                        <label className="form-check-label" htmlFor="">
                            {text1}
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id=""
                        />
                        <label className="form-check-label" htmlFor="">
                            {text2}
                        </label>
                    </div>
                </div>
            </FilterCardWrapper>
        </>
    );
};

export default CardLeftTwo;
