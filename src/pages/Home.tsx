import AboutHome from "../components/AboutHome";
import HeroSection from "../components/HeroSection";
import ServicesHome from "../components/ServicesHome";
import Contact from "../components/Contact";
import FAQAccordion from "../components/Faq";
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
