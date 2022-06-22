import React from "react";
import Search_form from "./Search_form";
import NavBar from "./NavBar";
import Setting from "./Setting";
import assert from "../../assets/icons_logo/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <div className='logo'>
                <img src={assert} className='logo_icon' alt="logo_icon" />
            </div>
            <Search_form />
            <NavBar />
            <Setting />
        </header>
    )
}

export default Header;