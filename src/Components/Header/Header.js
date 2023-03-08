import { NavLink, Link } from "react-router-dom";
import FirstHeader from "./Components/FirstHeader";
import Icons from "./Components/Icons";
import Logo from "./Components/Logo";
import SearchingFiled from "../commonComponents/SearchingFiled";
import ThirdHeader from "./Components/ThirdHeader";
import { BsSearch } from "react-icons/bs";

const Header = () => {
    const tee = function icon() {
        return (
            <>
                <BsSearch />
            </>
        );
    };

    return (
        <>
            <FirstHeader />
            <header className="header-upper py-3 ">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <Logo />
                        <SearchingFiled
                            col={"col-5"}
                            placeholder={"search product here ..."}
                            icon={tee()}
                        />
                        <Icons />
                    </div>
                </div>
            </header>
            <ThirdHeader />
        </>
    );
};

export default Header;
