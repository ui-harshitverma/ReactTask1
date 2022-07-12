import Image1 from '../service1.png';
import Image2 from '../service2.png';
import Image3 from '../service3.png';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const servicesSectionData = [
        {
                service_icon:  Image1 ,
                sub_heading: "Buy a home",
                para: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
                link_name: 'Find A Home',
                link: "https://tunatheme.com/",
                icons: <HiOutlineArrowNarrowRight/>
        },
        {
                service_icon: Image2,
                sub_heading: "Rent a home",
                para: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
                link_name: 'Find A Home',
                link: "https://tunatheme.com/",
                icons: <HiOutlineArrowNarrowRight/>
        },
        {
                service_icon: Image3,
                sub_heading: "Sell a home",
                para: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
                link_name: 'Find A Home',
                link: "https://tunatheme.com/",
                icons: <HiOutlineArrowNarrowRight/>
        }
];

export default servicesSectionData;