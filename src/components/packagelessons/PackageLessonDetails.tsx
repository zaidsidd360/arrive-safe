import { Clock, DollarSign } from "lucide-react";
import Reveal from "../Reveal";

interface PackageType {
	title: string;
	duration: string;
	price: string;
}

const PackageLessonDetails = () => {
	const packages: PackageType[] = [
		{ title: "60 M Standard Lesson At HUB", duration: "1 h", price: "100" },
		{
			title: "90 M Lesson CBT & A. At HUB",
			duration: "1 h 30 min",
			price: "150",
		},
		{ title: "2 VORT Exam & 6 Lesson", duration: "6 h", price: "1,300" },
		{
			title: "CBT & A Course & Final Assessment",
			duration: "23 h",
			price: "3,200",
		},
		{
			title: "90M -MDI Training Session Manual Car",
			duration: "20 h",
			price: "2,600",
		},
		{ title: "VORT Exam Only", duration: "1 h", price: "350" },
		{ title: "60 M Session & 1 VORT", duration: "1 h", price: "450" },
		{
			title: "60 M Standard Lesson At Your Location",
			duration: "1 h",
			price: "110",
		},
		{
			title: "90M CBT & A Lesson At Your Location",
			duration: "1 h 30 min",
			price: "160",
		},
		{
			title: "CBT & A – Manual Car Must Be At HUB",
			duration: "1 h",
			price: "150",
		},
		{
			title: "One Day Course 5 Hours & 1 VORT EXAM",
			duration: "5 h",
			price: "1,000",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
			<div className="text-center mb-16">
				<Reveal from="bottom">
					<h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
						Our Packages & Lessons
					</h2>
					<p className="text-gray-600 max-w-3xl mx-auto text-lg">
						Choose from our comprehensive range of driving packages
						designed to meet your specific needs. Whether you're
						just starting or preparing for your final assessment, we
						have the perfect option for you.
					</p>
				</Reveal>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{packages.map((pkg, index) => (
					<Reveal from="bottom" duration={index * 0.1} key={index}>
						<div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-[160px]">
							<div className="flex flex-col h-full justify-between">
								<h3 className="text-xl font-semibold text-navy-900">
									{pkg.title}
								</h3>

								<div className="flex items-center gap-4">
									<div className="flex items-center text-gray-600">
										<Clock className="w-5 h-5 mr-2 text-[#6074ad]" />
										{pkg.duration}
									</div>
									<div className="flex items-center text-gray-600">
										<DollarSign className="w-5 h-5 mr-1 text-[#6074ad]" />
										{pkg.price}
									</div>
								</div>
							</div>
						</div>
					</Reveal>
				))}
			</div>

			<Reveal from="bottom">
				<div className="text-center bg-gradient-to-r from-blue-900/70 to-blue-800/90 text-white p-8 rounded-lg mt-12">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Start Your Driving Journey?
					</h2>
					<p className="text-lg mb-6 max-w-2xl mx-auto">
						Join our professional driving school and learn from the
						best instructors in Adelaide. Contact us today to book
						your preferred package.
					</p>
					<a
						href="tel:0407369150"
						className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold 
						hover:bg-blue-50 transition-all duration-300"
					>
						Call 0407-369-150
					</a>
				</div>
			</Reveal>
		</div>
	);
};

export default PackageLessonDetails;
