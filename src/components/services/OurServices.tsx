import Manual from "../../assets/manual.jpeg";
import Automatic from "../../assets/auto.webp";

const OurServices = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
			{/* Header Section */}
			<div className="text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
					Our Services
				</h2>
				<p className="text-gray-600 max-w-3xl mx-auto text-lg">
					If you are searching for a leading driving school that can
					provide you with comprehensive automatic and manual driving
					lessons, your search ends at the Driving School of Adelaide.
					We offer a wide range of driving lesson packages of
					different durations.
				</p>
			</div>

			{/* Features Stack */}
			<div className="space-y-16">
				{/* Feature 1 */}
				<div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
					<div className="w-full md:w-2/5 lg:w-1/2">
						<img
							src={Manual}
							alt="Refresher Lessons"
							className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md"
						/>
					</div>
					<div className="w-full md:w-3/5 lg:w-1/2">
						<h3 className="text-2xl font-semibold text-navy-900 mb-4">
							Manual Driving Lessons
						</h3>
						<p className="text-gray-600 mb-4">
							Here at Driving School of Adelaide, our instructors
							will teach you the ins and outs of driving a manual
							vehicle. Wondering how to start your vehicle on a
							hill? Do you grind your car's gearbox...
						</p>
					</div>
				</div>

				{/* Feature 2 */}
				<div className="flex flex-col md:flex-row-reverse gap-8 items-center md:items-start">
					<div className="w-full md:w-2/5 lg:w-1/2">
						<img
							src={Automatic}
							alt="Overseas License Conversion"
							className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md"
						/>
					</div>
					<div className="w-full md:w-3/5 lg:w-1/2">
						<h3 className="text-2xl font-semibold text-navy-900 mb-4">
							Automatic Driving Lessons
						</h3>
						<p className="text-gray-600 mb-4">
							Learning to drive an automatic vehicle will help you
							to focus on the required safety skills, and you
							don't have to worry about clutches and gears. Our
							experienced instructors will teach you everything
							you need...
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurServices;
