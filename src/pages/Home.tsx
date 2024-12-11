import AboutHome from "../components/home/AboutHome";
import HeroSection from "../components/home/HeroSection";
import ServicesHome from "../components/home/ServicesHome";
import Contact from "../components/Contact";
import FAQAccordion from "../components/home/Faq";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div className="overflow-x-hidden">
			<HeroSection />
			<ServicesHome />
			<AboutHome />
			<Contact />
			<FAQAccordion />
			<Footer />
		</div>
	);
};

export default Home;
