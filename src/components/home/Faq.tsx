import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq: React.FC = () => {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const faqData = [
		{
			title: "How many driving lessons will I need?",
			content:
				"The number of driving lessons you'll need can vary depending on your previous experience, learning pace, and the complexity of driving in your local area. Most learners require around 40-50 hours of lessons to pass their driving test.",
		},
		{
			title: "Are automatic cars easier and safe to drive?",
			content:
				"Automatic cars can be easier to operate, especially for new drivers, as they don't require coordinating the clutch and gear shifting. They can also be safer in some situations, as you can keep both hands on the wheel. However, manual cars offer more control and can be more fuel-efficient.",
		},
		{
			title: "Are driving lessons scary?",
			content:
				"While driving lessons can be nerve-wracking at first, most people find them to be a positive learning experience. A good driving instructor will make you feel comfortable, build your confidence, and help you develop the skills needed to become a safe and confident driver.",
		},
	];

	const toggleItem = (index: number) => {
		setOpenItems((prev) =>
			prev.includes(index)
				? prev.filter((i) => i !== index)
				: [...prev, index]
		);
	};

	return (
		<section className="min-w-full bg-[#f2f5f7] py-10">
			<div className="md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%] mx-auto my-8 sm:my-12 px-4 sm:px-0">
				<h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 text-dark">
					Frequently Asked Questions
				</h2>
				<p className="max-w-xl mx-auto text-center text-gray-600 mb-10">
					Here you can find a list of detailed and practical answers.
					Don't worry if you still have some doubts. Our experts would
					love to answer your questions. They are available 24x7.
				</p>

				<div className="space-y-4">
					{faqData.map((faq, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out"
						>
							<div
								onClick={() => toggleItem(index)}
								className={`
                                    px-4 py-4 flex items-center justify-between cursor-pointer
                                    relative group
                                    ${
										openItems.includes(index)
											? "bg-[#6074ad]/10 text-[#6074ad]"
											: "hover:bg-[#6074ad]/5 text-dark"
									}
                                    transition-colors duration-200
                                `}
							>
								<h1 className="font-semibold text-lg md:text-xl flex-grow pr-4">
									{faq.title}
								</h1>
								<div className="transition-transform duration-300">
									{openItems.includes(index) ? (
										<ChevronUp className="text-[#6074ad]" />
									) : (
										<ChevronDown className="text-gray-600 group-hover:text-[#6074ad]" />
									)}
								</div>
								<div
									className={`
                                        absolute bottom-0 left-0 h-0.5 bg-[#6074ad] 
                                        transition-all duration-300 ease-out
                                        ${
											openItems.includes(index)
												? "w-full"
												: "w-0"
										}
                                    `}
								/>
							</div>
							{openItems.includes(index) && (
								<div
									className="
                                        px-4 py-4 text-gray-700 
                                        animate-fade-in-down
                                        border-t border-gray-200
                                    "
								>
									{faq.content}
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			<style>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-down {
                    animation: fadeInDown 0.3s ease-out;
                }
            `}</style>
		</section>
	);
};

export default Faq;
