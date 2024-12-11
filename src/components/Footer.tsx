// import Logo from "../assets/logoCropped.png";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-[#6074ad] text-gray-400 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
				<div>
					<h3 className="text-2xl font-medium mb-4 text-gray-100">
						Contact
					</h3>
					<p className="mb-2 text-white flex items-center gap-2 cursor-pointer flex-wrap hover:text-gray-300">
						<Phone />
						0407-369-150
					</p>
					<p className="mb-2 text-white flex items-center gap-2 cursor-pointer flex-wrap hover:text-gray-300">
						<Mail />
						arrivesafedriving@gmail.com.au
					</p>
					<p className="text-white flex items-center gap-2 cursor-pointer  hover:text-gray-300">
						<MapPin />
						Para hills west, Adelaide, Australia
					</p>
				</div>
				<div>
					<h3 className="text-2xl font-medium mb-4 text-gray-100">
						Services
					</h3>
					<ul className="space-y-2 text-white">
						<li className="cursor-pointer hover:text-gray-300">
							Automatic Driving Lessons
						</li>
						<li className="cursor-pointer hover:text-gray-300">
							Manual Driving Lessons
						</li>
					</ul>
				</div>
				<div>
					<h3 className="text-2xl font-medium mb-4 text-gray-100">
						Support
					</h3>
					<ul className="space-y-2 text-white">
						<li className="cursor-pointer hover:text-gray-300">
							About Us
						</li>
						<li className="cursor-pointer hover:text-gray-300">
							Contact Us
						</li>
						<li className="cursor-pointer hover:text-gray-300">
							Privacy and Policy
						</li>
						<li className="cursor-pointer hover:text-gray-300">
							Terms and Conditions
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-8 text-center text-sm border-t border-[#7183b9] pt-5">
				{/* <img src={Logo} alt="logo" /> */}
				<p className="text-white">
					&copy; {new Date().getFullYear()} All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
