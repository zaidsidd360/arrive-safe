import React from "react";
import speedingCar from "../assets/speedingCar.jpeg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const AboutHome: React.FC = () => {
	return (
		<Reveal from="bottom">
			<section className="min-h-[90vh] grid place-items-center">
				<div className="md:min-h-[75vh] flex flex-col md:flex-row w-full max-w-[92.5%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%] mx-auto rounded-2xl overflow-hidden shadow-lg">
					{/* Image Section */}
					<img
						className="w-full md:w-1/2 h-64 md:h-auto object-cover object-center"
						src={speedingCar}
						alt="Speeding Car"
					/>
					{/* Text Section */}
					<div
						className="w-full md:w-1/2 bg-gradient-to-b 
          from-blue-900/70 
          to-blue-800/90 p-6 pb-12 md:p-10 lg:p-16 relative"
					>
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
							About Arrive Safe Driving School
						</h2>
						<p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed">
							Arrive Safe Driving School in Adelaide equips new
							drivers with the essential skills and confidence to
							navigate the roads safely. Our highly trained
							instructors provide a supportive and engaging
							learning experience, ensuring students master road
							rules and become licensed drivers with ease. By
							choosing Arrive Safe, you'll embark on a
							transformative journey, gaining the knowledge and
							abilities to drive responsibly and securely. Our
							comprehensive curriculum and personalized approach
							empower beginners to feel at ease behind the wheel,
							ultimately contributing to safer communities.
							Whether you're seeking automatic or manual driving
							lessons, Arrive Safe Driving School is dedicated to
							guiding you through every step towards becoming a
							proficient and confident driver.
						</p>
						<Link
							to={"/lessons/manual"}
							className="absolute bottom-0 right-0 text-white bg-accent hover:bg-primary/50 font-bold py-2 px-4 rounded-sm flex items-center justify-center transition-all duration-200 group"
						>
							Learn More
							<ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
						</Link>
					</div>
				</div>
			</section>
		</Reveal>
	);
};

export default AboutHome;
