import React, { useState } from "react";
import { FaMap, FaBars, FaCamera, FaHome } from "react-icons/fa"
import { NavLink } from "react-router-dom";
import logo from './react.png';

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/map",
            name:"Map",
            icon:<FaMap/>
        },
        {
            path:"/camera",
            name:"Camera",
            icon:<FaCamera/>
        },
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "400px" : "70px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="menu" text-indent= "50px">
                        <div onClick={Location}><img className="logo" src={logo} alt="react_logo"/> </div>
                    </h1>
                    <div style={{marginLeft: isOpen ? "auto" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar

function Location(){
    window.location.href = '/home';

}
