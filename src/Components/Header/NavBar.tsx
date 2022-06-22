import React from "react";
import assetsHome from "../../assets/icons_panel/icon_home.svg";
import assetsPerson from "../../assets/icons_panel/person_icon.svg";
import assetsMail from "../../assets/icons_panel/mail_icon.svg";
import assetsBell from "../../assets/icons_panel/bell_icon.svg";

const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="navBar_menu">
                <div className="menu_item">
                    <a href="#" className="menu_link">
                        <img src={assetsHome} className="img_home" alt="img_home" />
                    </a>
                </div>
                <div className="menu_item">
                    <a href="#" className="menu_link">
                        <img src={assetsPerson} className="img_person" alt="img_person" />
                    </a>
                </div>
                <div className="menu_item">
                    <a href="#" className="menu_link">
                        <img src={assetsMail} className="img_mail" alt="img_mail" />
                    </a>
                </div>
                <div className="menu_item">
                    <a href="#" className="menu_link">
                        <img src={assetsBell} className="img_bell" alt="img_bell" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;