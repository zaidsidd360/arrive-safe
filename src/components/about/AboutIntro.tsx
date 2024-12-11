import { Briefcase, Calendar, Trophy, Users } from "lucide-react";

const AboutIntro = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
			{/* Main Heading Section */}
			<div className="text-center mb-16">
				<h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
					About Arrive Safe Driving School
				</h1>
				<p className="text-gray-600 max-w-3xl mx-auto text-lg">
					Arrive Safe Driving School brings over a decade of
					excellence in driver education, specializing in
					comprehensive driving instruction. Our modern teaching
					methods and certified training programs ensure you become a
					confident, skilled driver.
				</p>
			</div>

			{/* Features Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Feature 1 */}
				<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
					<Trophy className="w-12 h-12 text-[#6074ad] mb-6" />
					<h3 className="text-2xl font-semibold mb-4">
						Dedicated to Excellence
					</h3>
					<p className="text-gray-600">
						Our certified instructors are passionate about
						delivering exceptional driver education, combining
						professional expertise with a friendly approach to help
						you master safe driving practices.
					</p>
				</div>

				{/* Feature 2 */}
				<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
					<Users className="w-12 h-12 text-[#6074ad] mb-6" />
					<h3 className="text-2xl font-semibold mb-4">
						Expert Instruction Team
					</h3>
					<p className="text-gray-600">
						Learn from seasoned professionals who prioritize your
						success. Our instructors bring years of experience and a
						patient, methodical approach to help you become a
						confident driver.
					</p>
				</div>

				{/* Feature 3 */}
				<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
					<Briefcase className="w-12 h-12 text-[#6074ad] mb-6" />
					<h3 className="text-2xl font-semibold mb-4">
						Inclusive Learning Programs
					</h3>
					<p className="text-gray-600">
						We believe quality driving education should be
						accessible to everyone. Our competitive pricing and
						flexible payment options make it easier to start your
						journey toward becoming a licensed driver.
					</p>
				</div>

				{/* Feature 4 */}
				<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
					<Calendar className="w-12 h-12 text-[#6074ad] mb-6" />
					<h3 className="text-2xl font-semibold mb-4">
						Booking Guidelines
					</h3>
					<p className="text-gray-600">
						We value your time and commitment. A 48-hour notice is
						required for any schedule changes. Rescheduling is
						available subject to instructor availability, ensuring a
						smooth learning experience for all students.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutIntro;
