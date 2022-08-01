import React, { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiAlignJustify } from "react-icons/fi";
import { NavigationContext } from "../contexts/navigation.context";

export const Styles = {
    height: "27px",
    width: "27px",
    color: "#0081CF",
    cursor: "pointer",
};

const Navbar = ({ onClick }) => {
    const { sideBarOpen, toggleSidebar } = useContext(NavigationContext);
	
    return (
        <div
            className={`bg-white-900 py-[13px] flex flex-row items-center justify-between border-b border-gray-200 border-l  fixed z-10 right-0 top-0 ${
                sideBarOpen ? "left-[250px]" : "left-0"
            } bg-white`}
        >
            <div className="flex w-64 justify-between ml-3">
                <div
                    onClick={toggleSidebar}
                    className="mx-4 bg-gray-100 items-center p-1 h-9 rounded-full hover:bg-blue-600 drop-shadow-lg"
                >
                    <FiAlignJustify style={Styles} />
                </div>
                <div className="hidden sm:flex bg-white-800 items-center">
                    <input
                        placeholder="Search Keywords..."
                        className="h-9 w-64 border border-gray-600 rounded-full pl-8 focus:border-0"
                    />
                    <BiSearchAlt2 className="text-[black] h-[25px] w-[25px] -ml-[35px] cursor-pointer" />
                </div>
            </div>

			<ul className="flex mr-20">
				<li>Home</li>
				<li>About</li>
				<li>Home</li>
			</ul>
        </div>
    );
};

export default Navbar;
