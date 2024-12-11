import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface RevealProps {
	from?: "left" | "right" | "top" | "bottom" | "inPlace"; // Direction of reveal or in-place appearance
	duration?: number; // Duration of the animation in seconds
	children: React.ReactNode; // Content to reveal
}

const Reveal: React.FC<RevealProps> = ({
	from = "left",
	duration = 0.5,
	children,
}) => {
	// State to track whether the element is in the viewport
	const [isInView, setIsInView] = useState(false);

	// Ref for the element to observe
	const elementRef = useRef<HTMLDivElement | null>(null);

	// Initial position based on the "from" prop
	const initialPosition = {
		left: { x: "-20%", y: "0" },
		right: { x: "20%", y: "0" },
		top: { x: "0", y: "-20%" },
		bottom: { x: "0", y: "20%" },
		inPlace: { x: "0", y: "0" }, // No translation for in-place
	};

	// Intersection Observer to observe visibility changes
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				// Trigger animation when the element enters or exits the viewport
				entries.forEach((entry) => {
					setIsInView(entry.isIntersecting);
				});
			},
			{
				threshold: 0.05, // Trigger when 5% of the element is in the viewport
			}
		);

		// Start observing the element if it's available
		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		// Cleanup observer when component unmounts
		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, []);

	return (
		<motion.div
			ref={elementRef} // Use the ref to attach the observer
			initial={{
				opacity: 0,
				...(from !== "inPlace" ? initialPosition[from] : {}), // Apply translation only if not inPlace
			}}
			animate={{
				opacity: isInView ? 1 : 0,
				x: isInView ? "0" : initialPosition[from].x,
				y: isInView ? "0" : initialPosition[from].y,
			}}
			transition={{
				duration: duration,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.div>
	);
};

export default Reveal;
