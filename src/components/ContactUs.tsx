import React, { useEffect, useState } from "react";
import { User, Mail, Phone, MessageCircle, Send, Loader2 } from "lucide-react";

const ContactUs: React.FC = () => {
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
		<section className="min-h-screen grid place-items-center bg-gradient-to-br from-gray-50 to-gray-100">
			<div className="w-full max-w-[92.5%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%] mx-auto rounded-xl shadow-lg bg-blue-100 p-4 sm:p-10">
				{/* Heading */}
				<h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
					Contact Us
				</h2>

				{/* Form */}
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Name Field */}
					<div className="relative">
						<User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							required
							className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2  focus:border-blue-900/70 placeholder-gray-400"
							placeholder="Name *"
						/>
					</div>

					{/* Email Field */}
					<div className="relative">
						<Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							required
							className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:border-blue-900/70 placeholder-gray-400"
							placeholder="Email *"
						/>
					</div>

					{/* Phone Field */}
					<div className="relative">
						<Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleInputChange}
							required
							className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2  focus:border-blue-900/70 placeholder-gray-400"
							placeholder="Phone *"
						/>
					</div>

					{/* Message Field */}
					<div className="relative">
						<MessageCircle className="absolute left-4 top-3 text-gray-400" />
						<textarea
							name="message"
							value={formData.message}
							onChange={handleInputChange}
							className="w-full pl-12 pr-4 pt-3 pb-10 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2  focus:border-blue-900/70 placeholder-gray-400 resize-none"
							placeholder="Message (optional)"
							rows={4}
							style={{ maxHeight: "150px", minHeight: "100px" }}
						></textarea>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						disabled={isSubmitting}
						className={`w-full bg-gradient-to-r 
            from-blue-900/70 
            to-blue-800/90 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-transform group ${
				isSubmitting ? "opacity-50 cursor-not-allowed" : ""
			}`}
					>
						{isSubmitting ? "Submitting..." : "Send"}
						{isSubmitting ? (
							<Loader2 className="ml-2 w-5 h-5 animate-spin" />
						) : (
							<Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
						)}
					</button>
				</form>

				{/* Success Message */}
				{success && (
					<p className="text-center text-green-600 font-medium mt-6">
						Thank you for reaching out to us, we will be in touch
						shortly!
					</p>
				)}
			</div>
		</section>
	);
};

export default ContactUs;
