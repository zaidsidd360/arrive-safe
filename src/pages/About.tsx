import AboutIntro from "../components/about/AboutIntro";
import Banner from "../components/Banner";
import BannerIllustration from "../assets/aboutBanner.svg";
import AboutOfferings from "../components/about/AboutOfferings";
import BestStart from "../components/about/BestStart";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const About = () => {
	const bannerProps = {
		title: "About Us",
		description:
			"Join our community of successful drivers. We're here to guide you through every step of your driving journey with expertise and care.",
		illustration: BannerIllustration,
	};
	return (
		<>
			<Banner {...bannerProps} />
			<AboutIntro />
			<AboutOfferings />
			<BestStart />
			<WhyChooseUs />
			<Contact />
			<Footer />
		</>
	);
};

export default About;
