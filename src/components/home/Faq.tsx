import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const FAQAccordion: React.FC = () => {
	const itemClasses = {
		base: "py-0 w-full",
		title: "font-normal text-medium",
		trigger:
			"px-2 py-0 data-[hover=true]:bg-blue-100 data-[open=true]:bg-blue-100 h-14 flex items-center",
		indicator: "text-medium",
		content: "text-md px-2 bg-white",
	};
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

	return (
		<section className=" min-w-full bg-[#f2f5f7] py-10">
			<div className="md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] 2xl:max-w-[65%] mx-auto my-8 sm:my-12 px-4 sm:px-0">
				<h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 text-dark">
					Frequently Asked Questions
				</h2>
				<p className="max-w-xl mx-auto text-center text-gray-600 mb-10">
					Here you can find a list of detailed and practical answers.
					Don't worry if you still have some doubts. Our experts would
					love to answer your questions. They are available 24x7.
				</p>
				<Accordion
					selectionMode="multiple"
					variant="shadow"
					showDivider={true}
					itemClasses={itemClasses}
					className="px-0 border border-gray-300 rounded-lg overflow-hidden divide-y divide-gray-300"
				>
					{faqData.map((faq, index) => (
						<AccordionItem
							key={index}
							textValue={faq.title}
							title={
								<h1 className="font-semibold text-lg md:text-xl text-dark">
									{faq.title}
								</h1>
							}
						>
							{faq.content}
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};

export default FAQAccordion;
