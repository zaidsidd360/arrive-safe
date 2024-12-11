import ImageOne from "../../assets/bestStartOne.webp";
import ImageTwo from "../../assets/bestStartTwo.webp";
import ImageThree from "../../assets/bestStartThree.webp";

const BestStart = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
			{/* Header Section */}
			<div className="text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
					Get The Best Start with Us
				</h2>
				<p className="text-gray-600 max-w-3xl mx-auto text-lg">
					Arrive Safe Driving School specializes in comprehensive
					driver training, delivering expert instruction for both
					manual and automatic vehicles. Our proven methods ensure
					learners become confident, skilled drivers.
				</p>
			</div>

			{/* Features Stack */}
			<div className="space-y-16">
				{/* Feature 1 */}
				<div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
					<div className="w-full md:w-2/5 lg:w-1/2">
						<img
							src={ImageOne}
							alt="Refresher Lessons"
							className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md"
						/>
					</div>
					<div className="w-full md:w-3/5 lg:w-1/2">
						<h3 className="text-2xl font-semibold text-navy-900 mb-4">
							Refresher Lessons
						</h3>
						<p className="text-gray-600 mb-4">
							Perfect your driving skills with our refresher
							courses. Whether you're preparing for a road test or
							just need to boost your confidence, our experienced
							instructors are here to help you succeed.
						</p>
					</div>
				</div>

				{/* Feature 2 */}
				<div className="flex flex-col md:flex-row-reverse gap-8 items-center md:items-start">
					<div className="w-full md:w-2/5 lg:w-1/2">
						<img
							src={ImageTwo}
							alt="Overseas License Conversion"
							className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md"
						/>
					</div>
					<div className="w-full md:w-3/5 lg:w-1/2">
						<h3 className="text-2xl font-semibold text-navy-900 mb-4">
							Overseas License Conversion
						</h3>
						<p className="text-gray-600 mb-4">
							New to NSW? We'll guide you through converting your
							overseas license. Our specialized program helps you
							understand local road rules and prepares you for the
							NSW driving test within the required timeframe.
						</p>
					</div>
				</div>

				{/* Feature 3 */}
				<div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
					<div className="w-full md:w-2/5 lg:w-1/2">
						<img
							src={ImageThree}
							alt="Progress Tracking"
							className="w-full h-64 md:h-72 object-cover rounded-lg shadow-md"
						/>
					</div>
					<div className="w-full md:w-3/5 lg:w-1/2">
						<h3 className="text-2xl font-semibold text-navy-900 mb-4">
							Progress Tracking
						</h3>
						<p className="text-gray-600 mb-4">
							Monitor your development with our comprehensive
							progress tracking system. Through detailed feedback
							and personalized student cards, you'll have clear
							insights into your improving skills and areas for
							growth.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestStart;
