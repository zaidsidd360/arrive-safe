import { Link } from "react-router-dom";
import DrivingMan from "../../assets/DrivingManFinal.webp";
import Reveal from "../Reveal";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
	return (
		<section className="relative text-light md:px-8 lg:px-12 pt-20 md:mt-24 min-h-[91vh] flex flex-col md:flex-row items-center">
			{/* Background Image with Dark Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-left bg-no-repeat hidden md:block max-w-[95%] mx-auto rounded-3xl overflow-hidden"
				style={{ backgroundImage: `url(${DrivingMan})` }}
			>
				<div className="absolute inset-0 bg-black opacity-60"></div>
			</div>

			<div className=" md:hidden relative w-full">
				<img
					src={DrivingMan}
					alt="Hero Driving Illustration"
					className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-200 shadow-lg object-cover lg:absolute lg:top-0 lg:right-0 lg:w-full lg:h-full lg:rounded-none lg:shadow-none"
				/>
			</div>

			<div
				className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-b 
        from-blue-900/70 
        to-blue-800/90 md:bg-transparent md:from-transparent md:to-transparent"
			>
				{/* Left Content */}
				<div className="lg:w-1/2  lg:text-left p-5">
					<Reveal from="bottom" duration={0.5}>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
							Drive with Confidence. <br />
							<span className="text-accent">Arrive Safe.</span>
						</h1>
					</Reveal>
					<Reveal from="bottom" duration={2 * 0.5}>
						<p className="mt-6 text-base md:text-lg lg:text-xl text-white leading-relaxed">
							Arrive Safe is a driving school that provides the
							skills required to be a confident and safe driver.
							Learn automatic and manual driving lessons from
							experienced instructors. We have made learning
							driving simple, affordable and hassle-free. Give us
							a call now
						</p>
					</Reveal>
					<Reveal from="bottom" duration={3 * 0.5}>
						<div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
							<Link
								to="/contact"
								className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#6c83c0] text-white rounded-lg hover:bg-[#778fd1] transition duration-300 text-xl font-normal group"
							>
								Contact Us
								<ArrowRight className="group-hover:translate-x-2 group-active:translate-x-6 duration-300 ease-in-out" />
							</Link>
						</div>
					</Reveal>
				</div>
			</div>

			{/* Subtle Background Decorations */}
			{/* <div className="absolute inset-0 pointer-events-none">
				<div className="w-48 md:w-72 h-48 md:h-72 bg-accent opacity-20 rounded-full blur-3xl absolute top-12 right-1/4"></div>
				<div className="w-64 md:w-96 h-64 md:h-96 bg-secondary opacity-10 rounded-full blur-3xl absolute bottom-16 left-1/4"></div>
			</div> */}
		</section>
	);
};

export default HeroSection;
