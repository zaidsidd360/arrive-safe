import Banner from "../components/Banner";
import Footer from "../components/Footer";
import PrivacyBanner from "../assets/privacyBanner.svg";
import PrivacyPolicyContent from "../components/privacypolicy/PrivacyPolicyContent";

const PrivacyPolicy = () => {
	const bannerProps = {
		title: "Privacy Policy",
		description:
			"Learn about our commitment to protecting your personal information and how we use it to provide you with a better experience.",
		illustration: PrivacyBanner,
	};
	return (
		<>
			<Banner {...bannerProps} />
			<PrivacyPolicyContent />
			<Footer />
		</>
	);
};

export default PrivacyPolicy;
