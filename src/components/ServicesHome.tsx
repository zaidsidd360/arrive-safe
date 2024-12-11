import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Manual from "../assets/manual.jpg";
import Automatic from "../assets/auto.jpg";
import Reveal from "./Reveal";

const ServicesHome = () => {
	return (
		<section className="bg-light py-12 px-4">
			<div className="w-full md:max-w-[90%] lg:max-w-[75%] mx-auto md:px-16">
				<div className="text-center mb-12">
					<Reveal from="inPlace">
						<h2 className="text-primary font-heading text-3xl md:text-4xl font-bold">
							Our Services
						</h2>
					</Reveal>
					<Reveal from="bottom">
						<p className="text-dark mt-4 text-lg md:text-xl md:max-w-2xl md:mx-auto">
							Discover a variety of driving lessons designed to
							help you become a confident and skilled driver.
							Whether you're starting from scratch or refining
							your skills, we are here to make your learning
							experience smooth and enjoyable.
						</p>
					</Reveal>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Manual Driving Lessons Card */}
					<Reveal from="left">
						<div className="bg-white shadow-lg rounded-lg p-3 md:p-6 flex flex-col">
							<img
								src={Manual}
								alt="Manual Driving Lessons"
								className="w-full h-60 object-cover rounded-md mb-4"
							/>
							<h3 className="text-primary font-heading text-2xl font-semibold mb-2">
								Manual Driving Lessons
							</h3>
							<p className="text-dark mb-4">
								Get hands-on experience in mastering the art of
								driving a manual vehicle. Our skilled
								instructors will teach you how to handle gear
								transitions seamlessly, control the vehicle on
								steep slopes, and drive efficiently in busy
								traffic conditions. Gain the confidence to
								handle any road situation with ease through our
								step-by-step approach.
							</p>
							<Link
								to={"/lessons/manual"}
								className="text-white bg-gradient-to-r 
              from-blue-900/70 
              to-blue-800/90 hover:bg-primary/50 font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-200 group"
							>
								Learn More
								<ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
							</Link>
						</div>
					</Reveal>

					{/* Automatic Driving Lessons Card */}
					<Reveal from="right">
						<div className="bg-white shadow-lg rounded-lg p-3 md:p-6 flex flex-col">
							<img
								src={Automatic}
								alt="Automatic Driving Lessons"
								className="w-full h-60 object-cover rounded-md mb-4"
							/>
							<h3 className="text-primary font-heading text-2xl font-semibold mb-2">
								Automatic Driving Lessons
							</h3>
							<p className="text-dark mb-4">
								Simplify your driving experience with our
								automatic driving lessons. Focus on developing
								essential road safety skills without worrying
								about gear shifts and clutch control. Our
								instructors will guide you on how to handle
								various traffic scenarios, ensuring you are
								fully equipped to drive confidently and
								responsibly on any road.
							</p>
							<Link
								to={"/lessons/automatic"}
								className="text-white bg-gradient-to-r 
              from-blue-900/70 
              to-blue-800/90 hover:bg-primary/50 font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-all duration-200 group"
							>
								Learn More
								<ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
							</Link>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};

export default ServicesHome;
