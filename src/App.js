import './App.css';
import SiteDetails from './Components/SiteDetails/siteDetails.jsx';
import AnnouncementBar from './Components/Announcement/announcement';
import Header from './Components/Header/header';
import DropdownFind from './Components/DropdownFind/dropdownFind';
import ServicesSection from './Components/ServicesSection/servicesSection';
import Banner from './Components/Slider/slider.jsx';
import "./Components/custom.css/custom.css"
import AboutMarket from './Components/AnoutMarket/aboutMarket';
import AboutProperty from './Components/AboutProperty/aboutProperty';
import FeaturedSection from './Components/FeaturedSection/FeaturedSection';
import ApartmentSketch from './Components/Apartment/Apartment';
import VideoSection from './Components/VideoSection/videoSection';
import Category from './Components/Category/category';
import Testimonial  from './Components/Testimonial/testimonial';
import BlogSection from './Components/BlogPost/blogPost';
import ExploreProperty from './Components/ExploreProperty/exploreProperty';
import FooterSection from './Components/Footer/footer';




function App() {
    return (
        <>
            <AnnouncementBar text="Add Listing" link="https://www.google.co.in/" />
            <Header />
            {/* <HeroSection/> */}
            <Banner />
            <DropdownFind />
            <AboutMarket tag="About Us" heading="The Leading Real Estate Rental Marketplace"
                para="Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services"
                quote='"Enimad minim veniam quis nostrud exercitation
                       llamco laboris. Lorem ipsum dolor sit amet "'/>
            <SiteDetails />
            <AboutProperty tag="About Us" heading="Today Sells Properties" para="Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information" />
            <ServicesSection tag="Our Services" main_heading="Our Main Focus" />
            <FeaturedSection tag="Properties" main_heading="Featured Listings" />
            <ApartmentSketch tag="Apartment Sketch" main_heading="Apartments Plan" para="nimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam."/>
            <VideoSection/>
            <Category tag="Our Aminities" main_heading="Building Aminities"/>
            <Testimonial tag="Our Testimonial" main_heading="Clients Feedback"/>
            <BlogSection tag="News & Blogs" main_heading="Leatest News Feeds"/>
            <ExploreProperty heading="Looking for a dream home?" para="We can help you realize your dream of a new home"/>
            <FooterSection/>
        </>
    );
}

export default App;
