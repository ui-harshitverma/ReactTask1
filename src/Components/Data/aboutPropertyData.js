import { BiBed, BiBath, BiCar,BiShapeSquare } from "react-icons/bi";
import propertyImg1 from "../property-1.jpg"
import propertyImg2 from "../property-2.jpg"
import propertyImg3 from "../property-3.jpg"
const AboutPropertyData = [
    {
        list : "Live Music Cocerts at Luviana"
    },
    {
        list: "Our SecretIsland Boat Tour is Just for You"
    },
    {
        list: "Live Music Cocerts at Luviana"
    },
    {
        list: "Live Music Cocerts at Luviana"
    }
];

const  IconNumber = [
    {
        number: 3,
        icons:  <BiBed/>,
        items: "Bedrooms"
    },
    {
        number: 2,
        icons:  <BiBath/>,
        items: "Bathrooms"
    },
    {
        number: 2,
        icons:  <BiCar/>,
        items: "Car parking"
    },
    {
        number: 3450,
        icons:  <BiShapeSquare/>,
        items: "square Ft"
    }
];

const imgsLink = [
    {
        imgs : propertyImg1,
        link: "https://www.google.com"
    },
    {
        imgs : propertyImg2,
        link: "https://www.google.com"
    },
    {
        imgs : propertyImg3,
        link: "https://www.google.com"
    }
]


export {AboutPropertyData,  IconNumber, imgsLink};