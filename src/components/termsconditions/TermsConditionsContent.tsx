import Reveal from "../Reveal";

const TermsConditionsContent = () => {
	return (
		<div className="bg-gray-50 min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
			<div className="max-w-[92%] sm:max-w-[85%] md:max-w-3xl mx-auto">
				<Reveal from="bottom">
					<div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
						<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
							Terms and Conditions
						</h1>

						<section className="space-y-3 sm:space-y-4">
							<h2 className="text-lg sm:text-xl font-semibold text-[#6074ad]">
								Payment and Refund Policy
							</h2>
							<p className="text-sm sm:text-base text-gray-700">
								Once payment has been received and a time slot
								has been allocated, no refund policy applies.
							</p>
						</section>

						<section className="space-y-3 sm:space-y-4">
							<h2 className="text-lg sm:text-xl font-semibold text-[#6074ad]">
								Scheduling and Rescheduling
							</h2>
							<p className="text-sm sm:text-base text-gray-700">
								Any rescheduling requires 24 hours notice and
								will only be based on available time slots by
								mutual agreement.
							</p>
						</section>

						<section className="space-y-3 sm:space-y-4">
							<h2 className="text-lg sm:text-xl font-semibold text-[#6074ad]">
								Package Requirements
							</h2>
							<p className="text-sm sm:text-base text-gray-700">
								Any package deal requires prior driving
								experience.
							</p>
						</section>

						<section className="space-y-3 sm:space-y-4">
							<h2 className="text-lg sm:text-xl font-semibold text-[#6074ad]">
								Time Adjustments
							</h2>
							<p className="text-sm sm:text-base text-gray-700">
								If due to traffic conditions or other
								circumstances, we reserve the right to adjust
								your time slot either earlier or later.
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

export default TermsConditionsContent;
