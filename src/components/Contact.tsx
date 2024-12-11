import React, { useEffect, useState } from "react";
import VintageCar from "../assets/vintageCar.svg";
import { Loader2, Send } from "lucide-react";
import Reveal from "./Reveal";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Mock submission logic
		setIsSubmitting(true);
		setSuccess(false);
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setIsSubmitting(false);
		setSuccess(true);
		console.log(formData);
		// Clear the form after submission
		setFormData({
			name: "",
			email: "",
			phone: "",
			message: "",
		});
	};

	useEffect(() => {
		if (success) {
			setTimeout(() => {
				setSuccess(false);
			}, 3000);
		}
	}, [success]);
	return (
		<section className="min-h-[90vh] pt-20 mb-15  px-6 md:pt-32 bg-white">
			{/* Left Section with text and image */}
			<Reveal from="bottom">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-center">
					Reach out to us!
				</h2>
			</Reveal>
			<div className="flex flex-col md:flex-row justify-between items-center w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%] mx-auto">
				<div className="w-full md:w-1/2 flex flex-col items-start mb-8 md:mb-0">
					{/* <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?
        </p> */}
					<div className="w-full md:w-auto">
						<Reveal from="inPlace">
							<img
								src={VintageCar}
								alt="Contact illustration"
								className="w-full md:w-auto h-64 md:h-auto object-contain object-center rounded-lg"
							/>
						</Reveal>
					</div>
				</div>

				{/* Right Section with the form */}
				<div className="w-full md:w-1/2 bg-gray-50 p-6 md:p-10 lg:p-16 rounded-lg">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col space-y-4"
					>
						<input
							type="text"
							required
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							placeholder="Your name *"
							className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-900/70"
						/>
						<input
							type="email"
							required
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="Email *"
							className="p-3 rounded-xl border border-gray-300 focus:outline-none  focus:border-blue-900/70"
						/>
						<input
							type="phone"
							required
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							placeholder="Phone *"
							className="p-3 rounded-xl border border-gray-300 focus:outline-none  focus:border-blue-900/70"
						/>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							placeholder="Write your message"
							rows={4}
							className="p-3 rounded-xl border border-gray-300 focus:outline-none  focus:border-blue-900/70 max-h-32 min-h-20"
						></textarea>
						<button
							type="submit"
							disabled={isSubmitting}
							className={`bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center group w-full md:w-max ${
								isSubmitting
									? "opacity-50 cursor-not-allowed"
									: ""
							}`}
						>
							{isSubmitting ? "Submitting..." : "Submit"}
							{isSubmitting ? (
								<Loader2 className="ml-2 w-5 h-5 animate-spin" />
							) : (
								<Send className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
							)}
						</button>
					</form>
					{success && (
						<p className="text-center text-green-600 font-medium mt-6">
							Thank you for reaching out to us, we will be in
							touch shortly!
						</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default Contact;
