import React from "react";
import PackageLessonDetails from "../components/packagelessons/PackageLessonDetails";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import PackageBanner from "../assets/packageBanner.svg";
import Reveal from "../components/Reveal";

const PackagesLessons = () => {
	const packagesLessonsBannerProps = {
		title: "Packages and Lessons",
		description:
			"Explore our tailored driving packages and lessons, designed to meet your needs and goals. Our expert instructors guide you from start to finish, covering all skill levels.",
		illustration: PackageBanner,
	};
	return (
		<Reveal duration={0.5} from="inPlace">
			<Banner {...packagesLessonsBannerProps} />
			<PackageLessonDetails />
			<Contact />
			<Footer />
		</Reveal>
	);
};

export default PackagesLessons;
