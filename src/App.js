import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayOut from "./Components/LayOut";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import OurStore from "./Pages/OurStore/OurStore";
import WishList from "./Components/Header/Components/WishList";

function App() {
    return (
        <>
            <>
                <Router>
                    <Routes>
                        <Route path="/e-commerce-app/" element={<LayOut />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                            <Route
                                path="/e-commerce-app/store"
                                element={<OurStore />}
                            />
                            <Route
                                path="/e-commerce-app/store/wishlist"
                                element={<WishList />}
                            />
                        </Route>
                    </Routes>
                </Router>
            </>
        </>
    );
}

export default App;
