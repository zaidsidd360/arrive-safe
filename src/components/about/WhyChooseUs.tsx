import { Car, Clock, Settings, Users, Building, FileCheck } from "lucide-react";

const WhyChooseUs = () => {
	const features = [
		{
			icon: <Car className="w-8 h-8 text-[#6074ad]" />,
			title: "Modern fleet of manual and automatic vehicles",
			description:
				"Learn on our well-maintained, contemporary vehicles equipped with dual controls.",
		},
		{
			icon: <Clock className="w-8 h-8 text-[#6074ad]" />,
			title: "Flexible scheduling options",
			description:
				"Choose your preferred training time and course structure that fits your schedule.",
		},
		{
			icon: <Settings className="w-8 h-8 text-[#6074ad]" />,
			title: "Premium vehicles with regular maintenance",
			description:
				"All our cars undergo routine checks to ensure optimal performance and safety.",
		},
		{
			icon: <Users className="w-8 h-8 text-[#6074ad]" />,
			title: "Training for all skill levels",
			description:
				"Whether you're just starting or enhancing existing skills, we have the right course for you.",
		},
		{
			icon: <Building className="w-8 h-8 text-[#6074ad]" />,
			title: "Official NSW RTO partnership",
			description:
				"We work closely with NSW RTO to ensure compliance with latest regulations.",
		},
		{
			icon: <FileCheck className="w-8 h-8 text-[#6074ad]" />,
			title: "International license conversion",
			description:
				"Specialized assistance for converting your overseas license to an Australian one.",
		},
	];

	return (
		<section className="w-full bg-[#f2f5f7] py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
						Pass Your Driving Test with Arrive Safe Driving School
					</h2>
					<p className="text-gray-600 max-w-3xl mx-auto text-lg">
						With over a decade of expertise in driver education,
						we've successfully guided countless students to become
						skilled drivers. Here's why you should choose our
						driving lessons:
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col items-center text-center border border-gray-200 p-2 rounded-md"
						>
							<div className="mb-4 p-3 bg-white rounded-full shadow-sm">
								{feature.icon}
							</div>
							<h3 className="text-xl font-semibold text-navy-900 mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-600">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
