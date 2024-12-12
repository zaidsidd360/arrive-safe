import ServicesBanner from "../assets/servicesBanner.svg";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import OurServices from "../components/services/OurServices";

const Services = () => {
	const bannerProps = {
		title: "Our Services",
		description:
			"Discover our comprehensive range of driving lessons and specialized training programs designed to help you become a confident, skilled driver. From beginners to advanced learners, we have the perfect course for your needs.",
		illustration: ServicesBanner,
	};
	return (
		<>
			<Banner {...bannerProps} />
			<OurServices />
			<Contact />
			<Footer />
		</>
	);
};

export default Services;
