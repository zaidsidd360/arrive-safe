import React, { useState } from "react";
import Logo from "../assets/logoTrans.png";
import { X, Menu, ChevronDown, ChevronUp } from "lucide-react";

const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const menuItems = [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/about" },
		// { label: "Contact Us", href: "/contact" },
		{ label: "Services", href: "/services" },
		{
			label: "Packages and Lessons",
			subItems: [
				{ label: "Manual Driving Lesson", href: "/lessons/manual" },
				{
					label: "Automatic Driving Lessons",
					href: "/lessons/automatic",
				},
			],
		},
	];

	return (
		<nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-[9999]">
			<div className="container mx-auto md:px-4 flex justify-between items-center h-24">
				{/* Logo - Increased size */}
				<div className="flex items-center">
					<img
						src={Logo}
						alt="Driving School Logo"
						className="h-[10rem] md:h-[15rem] w-auto object-contain"
					/>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-6 items-center">
					{menuItems.map((item, index) => (
						<div
							key={index}
							className="relative group"
							onMouseEnter={() =>
								item.subItems && setActiveDropdown(item.label)
							}
							onMouseLeave={() =>
								item.subItems && setActiveDropdown(null)
							}
						>
							{item.subItems ? (
								<div className="relative">
									<button
										className="
                      flex items-center 
                      px-4 py-2 
                      bg-transparent 
                      hover:bg-blue-50 
                      hover:text-blue-600 
                      rounded-lg 
                      transition-all 
                      duration-300 
                      group
                    "
									>
										{item.label}
										<span className="ml-2">
											{activeDropdown === item.label ? (
												<ChevronUp
													size={20}
													className="text-blue-600 group-hover:text-blue-700"
												/>
											) : (
												<ChevronDown
													size={20}
													className="text-gray-500 group-hover:text-blue-600"
												/>
											)}
										</span>
									</button>

									{/* Improved Dropdown with Persistent Hover */}
									{activeDropdown === item.label && (
										<div
											className="
                        absolute left-0 mt-2 
                        bg-white shadow-lg 
                        rounded-md 
                        min-w-[200px] 
                        py-2 
                        z-50 
                        border 
                        border-gray-100
                      "
										>
											{item.subItems.map(
												(subItem, subIndex) => (
													<a
														key={subIndex}
														href={subItem.href}
														className="
                            block px-4 py-2 
                            hover:bg-blue-50 
                            hover:text-blue-600 
                            transition-colors
                          "
													>
														{subItem.label}
													</a>
												)
											)}
										</div>
									)}
								</div>
							) : (
								<a
									href={item.href}
									className="
                  text-lg
                    p-4 py-3
                    hover:bg-blue-300 
                    hover:text-gray-800
                    rounded-lg 
                    transition-all 
                    duration-300
                  "
								>
									{item.label}
								</a>
							)}
						</div>
					))}
				</div>

				{/* Mobile Hamburger Icon */}
				<div className="md:hidden mr-5 mt-2">
					<button
						onClick={toggleMobileMenu}
						className="focus:outline-none"
					>
						<Menu size={24} />
					</button>
				</div>

				{/* Mobile Menu Overlay */}
				{isMobileMenuOpen && (
					<div
						className="fixed inset-0 min-h-screen bg-black bg-opacity-50 z-40"
						onClick={toggleMobileMenu}
					/>
				)}

				{/* Mobile Menu */}
				<div
					className={`
            fixed top-0 right-0 min-h-screen w-3/5 bg-white shadow-lg 
            transform transition-transform duration-300 ease-in-out z-50
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
				>
					<div className="p-6">
						{/* Close Button */}
						<button
							onClick={toggleMobileMenu}
							className="absolute top-4 right-4 focus:outline-none"
						>
							<X size={24} />
						</button>

						{/* Mobile Menu Items */}
						<div className="flex flex-col space-y-4 mt-12">
							{menuItems.map((item, index) => (
								<div key={index} className="group">
									{item.subItems ? (
										<div>
											<div className="font-semibold text-lg mb-2 flex items-center justify-between">
												{item.label}
												{activeDropdown ===
												item.label ? (
													<ChevronUp />
												) : (
													<ChevronDown />
												)}
											</div>
											{item.subItems.map(
												(subItem, subIndex) => (
													<a
														key={subIndex}
														href={subItem.href}
														className="block py-2 hover:bg-gray-100 rounded"
													>
														{subItem.label}
													</a>
												)
											)}
										</div>
									) : (
										<a
											href={item.href}
											className="block py-2 hover:bg-gray-100 rounded"
										>
											{item.label}
										</a>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
