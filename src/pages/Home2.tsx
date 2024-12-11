import DrivingMan from "../assets/drivingman.avif";

const Home2 = () => {
	return (
		<section className="relative text-light min-h-screen flex items-center">
			{/* Background Image */}
			<div className="absolute inset-0">
				<img
					src={DrivingMan}
					alt="Driving School Background"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black opacity-50"></div>
			</div>

			{/* Content */}
			<div className="relative px-6 md:px-12 lg:px-20 py-16 md:py-28 max-w-7xl mx-auto">
				<div className="grid gap-8 items-center text-center md:text-left">
					{/* Text Section */}
					<div>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
							Improve Your Driving Skills <br />
							<span className="text-accent">
								with Expert Instructors
							</span>
						</h1>
						<p className="mt-6 text-base md:text-lg lg:text-xl leading-relaxed text-secondary">
							Our professional driving school makes learning
							stress-free with personalized lessons tailored to
							your needs. Start your journey to safe and confident
							driving today.
						</p>
						<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
							<a
								href="#"
								className="px-6 py-3 md:px-8 md:py-4 bg-accent text-dark font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
							>
								Book Now
							</a>
							<a
								href="#"
								className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-dark font-bold rounded-lg shadow-lg hover:bg-blue-400 transition duration-300"
							>
								How We Can Help?
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Image for Tablet and Mobile */}
			<div className="md:hidden px-6 mt-8">
				<img
					src={DrivingMan}
					alt="Driving School Bottom Image"
					className="w-full rounded-lg shadow-lg"
				/>
			</div>
		</section>
	);
};

export default Home2;
