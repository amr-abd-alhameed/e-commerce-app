import React from "react";
import Select from "./Select";

const SearchingArea = () => {
    return (
        <>
            <div className="col-9">
                <div className="filter-sort-grid">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-10">
                            <p className="mb-0 text-capitalize">sort by:</p>
                            <Select />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchingArea;
