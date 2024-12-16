import AboutHome from "../components/home/AboutHome";
import HeroSection from "../components/home/HeroSection";
import ServicesHome from "../components/home/ServicesHome";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Faq from "../components/home/Faq";

const Home = () => {
	return (
		<Reveal duration={0.5} from="inPlace">
			<div className="overflow-x-hidden">
				<HeroSection />
				<ServicesHome />
				<AboutHome />
				<Contact />
				<Faq />
				<Footer />
			</div>
		</Reveal>
	);
};

export default Home;
