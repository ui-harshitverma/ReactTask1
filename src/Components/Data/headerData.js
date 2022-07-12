import { GoSearch } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const headerNavData = [
    {navLink : "Home +"},
    {navLink : "About +"},
    {navLink : "Shop +"},
    {navLink : "News +"},
    {navLink : "Pages +"},
    {navLink : "Contact"}
];

const headerIconsData = [
    {icon: <GoSearch />},
    {icon: <BiUser />},
    {icon: <AiOutlineShoppingCart />},
];



export  {headerNavData , headerIconsData};