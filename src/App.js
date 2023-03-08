import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayOut from "./Components/LayOut";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
    return (
        <>
            <>
                <Router>
                    <Routes>
                        <Route path="/" element={<LayOut />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                        </Route>
                    </Routes>
                </Router>
            </>
        </>
    );
}

export default App;
