import { Check } from "lucide-react";
import Reveal from "./Reveal";

interface LessonProps {
	lessonName: string;
	description: string;
	image: string;
	price: number;
	whyChoose: string[];
}

const Lesson = ({
	lessonName,
	description,
	image,
	price,
	whyChoose,
}: LessonProps) => {
	return (
		<div className="md:pt-28 pt-24 pb-12 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Hero Section */}
				<div className="flex flex-col md:flex-row gap-8 items-center mb-16">
					<div className="w-full md:w-1/2">
						<h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
							{lessonName}
						</h1>
						<p className="text-gray-600 text-lg mb-8">
							{description}
						</p>
						<div className="bg-blue-50 p-3 md:p-6 rounded-lg border border-gray-300">
							<h3 className="text-2xl font-semibold text-navy-900 mb-4">
								Special Offer
							</h3>
							<p className="text-3xl font-bold text-blue-600 mb-2">
								${price}
							</p>
							<p className="text-gray-600">
								Per 60-minute lesson with a professional
								instructor
							</p>
						</div>
					</div>

					<div className="w-full md:w-1/2">
						<img
							src={image}
							alt={`${lessonName} Lesson`}
							className="w-full h-[400px] object-cover rounded-lg shadow-lg"
						/>
					</div>
				</div>

				{/* Benefits Section */}
				<Reveal from="bottom">
					<div className="bg-white shadow-lg rounded-lg p-3 md:p-8 mb-16">
						<h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
							Why Choose {lessonName.split(" ")[0]} Transmission?
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{whyChoose.map((benefit, index) => (
								<div
									key={index}
									className="flex items-start space-x-3 p-4 bg-blue-50/50 rounded-lg"
								>
									<Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
									<span className="text-gray-700">
										{benefit}
									</span>
								</div>
							))}
						</div>
					</div>
				</Reveal>

				{/* Call to Action */}
				<Reveal from="bottom">
					<div className="text-center bg-gradient-to-r from-blue-900/70 to-blue-800/90 text-white p-8 rounded-lg">
						<h2 className="text-3xl font-bold mb-4">
							Ready to Start Your {lessonName.split(" ")[0]}{" "}
							Driving Journey?
						</h2>
						<p className="text-lg mb-6 max-w-2xl mx-auto">
							Join our professional driving school and learn from
							the best instructors in Adelaide. We'll help you
							become a confident{" "}
							{lessonName.split(" ")[0].toLowerCase()} driver.
						</p>
						<button
							className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold 
              hover:bg-blue-50 transition-all duration-300"
						>
							Book Your Lesson Now
						</button>
					</div>
				</Reveal>
			</div>
		</div>
	);
};

export default Lesson;
