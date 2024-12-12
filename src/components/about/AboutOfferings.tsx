import { Check } from "lucide-react";
import AboutOffering from "../../assets/aboutOffering.webp";

const AboutOfferings = () => {
	const offeringsList = [
		"Personalized driving lessons designed for everyone",
		"Professional and experienced instructors",
		"Better first-attempt pass rates than most other driving schools",
		"24/7 customer support for your convenience",
		"Structured logbook lessons to track your progress",
		"An option to consult with instructors before enrolling in a course",
	];

	return (
		<section className="min-h-[90vh] grid place-items-center">
			<div className="md:min-h-[75vh] flex flex-col md:flex-row w-full max-w-[92.5%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%] mx-auto rounded-2xl overflow-hidden shadow-lg">
				{/* Image Section */}
				<img
					className="w-full md:w-1/2 h-64 md:h-auto object-cover object-center"
					src={AboutOffering}
					alt="Instructor and Learner"
				/>
				{/* Text Section */}
				<div className="w-full md:w-1/2 bg-gradient-to-b from-blue-900/70 to-blue-800/90 p-6 pb-12 md:p-10 lg:p-16 relative">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
						Arrive Safe Driving School Offers
					</h2>
					<p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6">
						When you choose Arrive Safe Driving School, you'll gain
						the skills to drive confidently and effortlessly. Here’s
						what we offer:
					</p>
					<ul className="space-y-4">
						{offeringsList.map((item, index) => (
							<li
								key={index}
								className="flex items-start gap-3 text-gray-300"
							>
								<Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
								<span className="text-sm md:text-base lg:text-lg">
									{item}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default AboutOfferings;
