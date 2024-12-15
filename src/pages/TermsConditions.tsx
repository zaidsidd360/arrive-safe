import Banner from "../components/Banner";
import Footer from "../components/Footer";
import TermsBanner from "../assets/termsBanner.svg";
import TermsConditionsContent from "../components/termsconditions/TermsConditionsContent";

const TermsConditions = () => {
	const bannerProps = {
		title: "Terms & Conditions",
		description:
			"Please review our terms and conditions to understand our policies, requirements, and service agreements for a smooth learning experience.",
		illustration: TermsBanner,
	};

	return (
		<>
			<Banner {...bannerProps} />
			<TermsConditionsContent />
			<Footer />
		</>
	);
};

export default TermsConditions;
