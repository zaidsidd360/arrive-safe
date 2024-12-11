import DrivingMan from "../../assets/DrivingManFinal.jpg";
import Reveal from "../Reveal";

const HeroSection = () => {
	return (
		<section className="relative text-light md:px-8 lg:px-12 pt-20 md:mt-24 min-h-[91vh] flex flex-col md:flex-row items-center">
			{/* Background Image with Dark Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-left bg-no-repeat hidden md:block"
				style={{ backgroundImage: `url(${DrivingMan})` }}
			>
				<div className="absolute inset-0 bg-black opacity-60"></div>
			</div>

			{/* Right Content with Image */}
			<div className=" md:hidden relative w-full">
				{/* Image - Full Width on Desktop, Bottom on Mobile */}
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
					<Reveal from="bottom">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
							Drive with Confidence. <br />
							<span className="text-accent">Arrive Safe.</span>
						</h1>
					</Reveal>
					<Reveal from="bottom" duration={0.7}>
						<p className="mt-6 text-base md:text-lg lg:text-xl text-white leading-relaxed">
							{/* Learn to navigate the roads safely with our expert
						instructors, tailored lessons, and modern techniques.
						Let’s make driving stress-free and enjoyable! */}
							Arrive Safe is a driving school that provides the
							skills required to be a confident and safe driver.
							Learn automatic and manual driving lessons from
							experienced instructors. We have made learning
							driving simple, affordable and hassle-free. Give us
							a call now
						</p>
					</Reveal>
					<Reveal from="bottom" duration={0.8}>
						<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<a
								href="#"
								className="px-6 md:px-8 py-3 md:py-4 bg-accent text-dark font-bold rounded-lg border border-accent hover:bg-yellow-500 hover:text-dark transition duration-300"
							>
								Book a Lesson
							</a>
							<a
								href="#"
								className="px-6 md:px-8 py-3 md:py-4 bg-secondary text-dark font-bold rounded-lg border border-secondary hover:bg-blue-300 hover:text-dark transition duration-300"
							>
								Contact Us
							</a>
						</div>
					</Reveal>
				</div>
			</div>

			{/* Subtle Background Decorations */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="w-48 md:w-72 h-48 md:h-72 bg-accent opacity-20 rounded-full blur-3xl absolute top-12 right-1/4"></div>
				<div className="w-64 md:w-96 h-64 md:h-96 bg-secondary opacity-10 rounded-full blur-3xl absolute bottom-16 left-1/4"></div>
			</div>
		</section>
	);
};

export default HeroSection;
