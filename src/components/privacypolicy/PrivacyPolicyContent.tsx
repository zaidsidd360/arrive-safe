import Reveal from "../Reveal";

const PrivacyPolicyContent = () => {
	return (
		<div className="bg-gray-50 min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
			<div className="max-w-[92%] sm:max-w-[85%] md:max-w-3xl mx-auto">
				<Reveal from="bottom">
					<div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
						<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
							Privacy Policy & Terms
						</h1>

						<section className="space-y-3 sm:space-y-4">
							<h2 className="text-lg sm:text-xl font-semibold text-[#6074ad]">
								Contact Information
							</h2>
							<p className="text-sm sm:text-base text-gray-600">
								For any questions, please feel free to contact
								us at:
							</p>
							<p className="text-sm sm:text-base text-gray-700">
								Arrive Safe Driving School ABN: 18381935453
							</p>
							<p className="text-sm sm:text-base text-gray-700">
								Phone Number: 0407 369 150
							</p>
						</section>

						<section className="space-y-3 sm:space-y-4">
							<h2 className="text-lg sm:text-xl font-semibold text-[#6074ad]">
								Student Requirements
							</h2>
							<ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
								<li>
									Students or clients must wear appropriate
									footwear and dress.
								</li>
								<li>
									Students must bring their licence or permit
									with them at all times during lessons.
								</li>
								<li>
									Any package other than standard lessons
									requires prior driving experience.*
								</li>
							</ul>
						</section>

						<section className="space-y-3 sm:space-y-4">
							<h2 className="text-lg sm:text-xl font-semibold text-[#6074ad]">
								Cancellation Policy
							</h2>
							<p className="text-sm sm:text-base text-gray-700">
								In case of rescheduling or cancellation, a
								24-hour notice is required.
							</p>
						</section>

						<div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
							<p className="text-xs sm:text-sm text-gray-500">
								Last updated: {new Date().toLocaleDateString()}
							</p>
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	);
};

export default PrivacyPolicyContent;
