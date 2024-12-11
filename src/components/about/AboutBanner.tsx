import AboutBannerIllustration from "../../assets/aboutBanner.svg";

const AboutBanner = () => {
	return (
		<div className="relative bg-gradient-to-b from-[#6074ad] to-transparent overflow-hidden mt-16 md:mt-10">
			<div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Text Content */}
					<div className="text-center md:text-left order-1 md:order-1">
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-6">
							About Us
						</h1>
						<p className="text-xl mx-auto md:mx-0 text-gray-600 max-w-lg">
							Join our community of successful drivers. We're here
							to guide you through every step of your driving
							journey with expertise and care.
						</p>
					</div>

					{/* Illustration */}
					<div className="order-2 md:order-2 flex justify-center md:justify-end">
						<img
							src={AboutBannerIllustration}
							alt="Team Illustration"
							className="w-full max-w-md xl:max-w-lg h-auto transform hover:scale-105 transition-transform duration-300"
						/>
					</div>
				</div>
			</div>

			{/* Decorative Elements */}
			<div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 hidden md:block">
				<div className="absolute top-1/2 left-0 w-24 h-24 md:w-32 md:h-32 bg-[#6074ad] rounded-full -translate-x-1/2 -translate-y-1/2" />
				<div className="absolute bottom-0 right-0 w-48 h-48 bg-[#6074ad] rounded-full translate-x-1/4 translate-y-1/4" />
			</div>
		</div>
	);
};

export default AboutBanner;
