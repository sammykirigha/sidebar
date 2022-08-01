import React, { useContext } from "react";
import { NavigationContext } from "../contexts/navigation.context";

const Sidebar = () => {
    const { sideBarOpen } = useContext(NavigationContext);
    return (
        <div
            className={`fixed w-[250px] bg-white border-r border-gray-200 h-screen left-0 top-0 z-10 ${
                sideBarOpen ? "translate-x-0" : "-translate-x-[100%]"
            }`}
        >
            <div className="bg-white-900 flex  my-1 pl-10 border-b pb-[35px] border-gray-200 h-35 ">LOGO</div>
            <div className="">
                <ul className="flex flex-col pl-10">
                    <li className="py-3 list-none text-gray-800">Home</li>
                    <li className="py-3 list-none text-gray-800">About</li>
                    <li className="py-3 list-none text-gray-800">Dashbord</li>
                    <li className="py-3 list-none text-gray-800">Settings</li>
                    <li className="py-3 list-none text-gray-800">Profile</li>
                    <li className="py-3 list-none text-gray-800">Services</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
