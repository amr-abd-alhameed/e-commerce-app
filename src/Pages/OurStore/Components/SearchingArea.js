import React, { useState } from "react";
import Select from "./Select";
import logo1 from "../../../assets/images/gr.svg";
import logo2 from "../../../assets/images/gr2.svg";
import logo3 from "../../../assets/images/gr3.svg";
import logo4 from "../../../assets/images/gr4.svg";
import ProductList from "./ProductList";

const SearchingArea = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <div className="col-9">
                <div className="filter-sort-grid mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-10">
                            <p
                                className="mb-0 text-capitalize d-block"
                                style={{ width: "32%" }}
                            >
                                sort by:
                            </p>
                            <Select />
                        </div>
                        <div className="d-flex  align-items-center gap-10 ">
                            <p className="totalProducts mb-0"> 21 products</p>
                            <div className="d-flex  align-items-center gap-10 grid ">
                                <img
                                    onClick={() => setGrid(3)}
                                    src={logo4}
                                    alt="grid"
                                    className="d-block img-fluid"
                                />
                                <img
                                    onClick={() => setGrid(4)}
                                    src={logo3}
                                    alt="grid"
                                    className="d-block img-fluid"
                                />
                                <img
                                    onClick={() => setGrid(6)}
                                    src={logo2}
                                    alt="grid"
                                    className="d-block img-fluid"
                                />
                                <img
                                    onClick={() => setGrid(12)}
                                    src={logo1}
                                    alt="grid"
                                    className="d-block img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ProductList grid={grid} />
            </div>
        </>
    );
};

export default SearchingArea;
