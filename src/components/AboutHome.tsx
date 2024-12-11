import React from "react";
import speedingCar from "../assets/speedingCar.jpg";
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
							Driving is a life-changing skill. Choosing the best
							driving school in Adelaide helps you master road
							rules, gain confidence, and drive safely. At Driving
							School of Adelaide, we aim to provide beginner
							drivers with the essential knowledge and skills to
							ensure they are confident and safe on the road. With
							highly trained and professional instructors, we
							guarantee a supportive and enjoyable learning
							experience for a smooth journey to becoming a
							licensed driver. Driving is a life-changing skill.
							Choosing the best driving school in Adelaide helps
							you master road rules, gain confidence, and drive
							safely. At Driving School of Adelaide, we aim to
							provide beginner drivers with the essential
							knowledge and skills to ensure they are confident
							and safe on the road. With highly trained and
							professional instructors, we guarantee a supportive
							and enjoyable learning experience for a smooth
							journey to becoming a licensed driver.
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
