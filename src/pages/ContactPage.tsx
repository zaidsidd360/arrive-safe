import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../components/Reveal";

const ContactPage = () => {
	const businessInfo = {
		name: "Arrive Safe Driving School",
		address: "Para Hills West, Adelaide",
		phone: "0407 369 150",
		email: "arrivesafedriving@gmail.com.au",
		hours: "8:00 AM - 6:30 PM",
	};

	return (
		<div className="pt-20">
			{/* Business Info Section */}
			<div className="bg-blue-50/50 py-12 px-4">
				<div className="max-w-7xl mx-auto">
					<Reveal from="bottom">
						<h1 className="text-4xl md:text-5xl font-bold text-center text-navy-900 mb-8">
							Get In Touch
						</h1>
						<p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
							Whether you're ready to start your driving journey
							or have questions about our lessons, we're here to
							help. Contact us today and take the first step
							towards becoming a confident driver.
						</p>
					</Reveal>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
						<Reveal from="bottom">
							<div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
								<MapPin className="w-8 h-8 text-[#6074ad] mb-4" />
								<h3 className="font-semibold mb-2">Location</h3>
								<p className="text-gray-600">
									{businessInfo.address}
								</p>
							</div>
						</Reveal>

						<Reveal from="bottom">
							<div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
								<Phone className="w-8 h-8 text-[#6074ad] mb-4" />
								<h3 className="font-semibold mb-2">Phone</h3>
								<p className="text-gray-600">
									{businessInfo.phone}
								</p>
							</div>
						</Reveal>

						<Reveal from="bottom">
							<div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
								<Mail className="w-8 h-8 text-[#6074ad] mb-4" />
								<h3 className="font-semibold mb-2">Email</h3>
								<p className="text-gray-600">
									{businessInfo.email}
								</p>
							</div>
						</Reveal>

						<Reveal from="bottom">
							<div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
								<Clock className="w-8 h-8 text-[#6074ad] mb-4" />
								<h3 className="font-semibold mb-2">
									Business Hours
								</h3>
								<p className="text-gray-600">
									{businessInfo.hours}
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</div>

			{/* Google Maps Integration */}
			<div className="w-full mb-12 px-4">
				<div className="max-w-7xl mx-auto">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13104.383784357075!2d138.63406841428142!3d-34.803527914320895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0b41b78e52185%3A0x5033654628ebc80!2sPara%20Hills%20West%20SA%205096%2C%20Australia!5e0!3m2!1sen!2sin!4v1734033086527!5m2!1sen!2sin"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="rounded-2xl shadow-md h-[50vh]"
					></iframe>
				</div>
			</div>

			{/* Contact Form Section */}
			<Contact />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default ContactPage;
