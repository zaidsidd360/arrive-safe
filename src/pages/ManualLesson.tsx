import Manual from "../assets/manual.jpeg";
import Lesson from "../components/Lesson";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const ManualLesson = () => {
	const manualLessonProps = {
		lessonName: "Manual Driving Lessons",
		description:
			"Master the art of manual driving with our comprehensive lessons. Our experienced instructors will guide you through every aspect of manual transmission driving, from basic gear changes to advanced techniques, ensuring you become a confident and skilled driver.",
		image: Manual,
		price: 139,
		whyChoose: [
			"Master complete control over your vehicle",
			"Better fuel efficiency and vehicle awareness",
			"Drive any car worldwide - most countries use manual",
			"Enhanced driving skills and confidence",
			"Learn hill starts and gear management",
			"Cheaper vehicle maintenance in the long run",
		],
	};

	return (
		<Reveal duration={0.5} from="inPlace">
			<Lesson {...manualLessonProps} />
			<Contact />
			<Footer />
		</Reveal>
	);
};

export default ManualLesson;
