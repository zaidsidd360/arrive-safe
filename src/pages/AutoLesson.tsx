import Auto from "../assets/auto.webp";
import Lesson from "../components/Lesson";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const AutoLesson = () => {
	const automaticLessonProps = {
		lessonName: "Automatic Driving Lessons",
		description:
			"Simplify your driving experience with our automatic driving lessons. Our experienced instructors will guide you through essential road safety skills, traffic management, and defensive driving techniques, ensuring you become a confident and responsible driver.",
		image: Auto,
		price: 139,
		whyChoose: [
			"Perfect for new drivers learning road rules",
			"Focus on road awareness without gear management",
			"Easier to master in busy city conditions",
			"Reduced learning stress and faster progress",
			"Modern technology and safety features",
			"Ideal for city driving and traffic conditions",
		],
	};

	return (
		<Reveal duration={0.5} from="inPlace">
			<Lesson {...automaticLessonProps} />
			<Contact />
			<Footer />
		</Reveal>
	);
};

export default AutoLesson;
