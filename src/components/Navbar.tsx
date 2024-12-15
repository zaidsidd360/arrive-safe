import React, { useState } from "react";
import Logo from "../assets/logoTrans.png";
import { X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
	const location = useLocation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const isActiveRoute = (href: string) => {
		if (href === "/") {
			return location.pathname === "/";
		}
		return location.pathname.startsWith(href);
	};

	const menuItems = [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/about" },
		{
			label: "Services",
			href: "/services",
			subItems: [
				{ label: "Manual Driving Lesson", href: "/lessons/manual" },
				{
					label: "Automatic Driving Lessons",
					href: "/lessons/automatic",
				},
			],
		},
		{ label: "Packages and Lessons", href: "/packages-lessons" },
	];

	return (
		<nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg z-[9999]">
			<div className="md:mx-auto md:px-4 flex justify-between items-center h-20 md:h-24 max-w-[92.5%] md:max-w-[100%] lg:max-w-[90%] xl:max-w-[75%]">
				{/* Logo */}
				<Link to={"/"} className="flex items-center">
					<img
						src={Logo}
						alt="Driving School Logo"
						className="h-40 md:h-52 w-auto object-contain"
					/>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex md:space-x-1 lg:space-x-6 items-center">
					{menuItems.map((item, index) => (
						<div
							key={index}
							className="relative group h-min"
							onMouseEnter={() =>
								item.subItems && setActiveDropdown(item.label)
							}
							onMouseLeave={() =>
								item.subItems && setActiveDropdown(null)
							}
						>
							{item.subItems ? (
								<>
									<Link
										to={item.href}
										className={`
											flex items-center
											px-4 py-2
											text-lg
											rounded-lg
											transition-all
											duration-300
											${
												isActiveRoute(item.href)
													? "bg-blue-50 text-[#6074ad]"
													: "hover:bg-blue-50 hover:text-[#6074ad]"
											}
										`}
									>
										{item.label}
									</Link>
									{activeDropdown === item.label && (
										<div
											className="
												absolute 
												left-0 
												min-w-[200px]
												bg-white 
												border 
												border-gray-200 
												rounded-lg 
												shadow-lg 
												py-2
												z-50
											"
											style={{ top: "100%" }}
										>
											{item.subItems.map(
												(subItem, subIndex) => (
													<Link
														onClick={() =>
															setActiveDropdown(
																null
															)
														}
														key={subIndex}
														to={subItem.href}
														className="
														block 
														px-4 
														py-2 
														text-gray-700 
														hover:bg-blue-50 
														hover:text-[#6074ad]
														transition-colors
														duration-200
													"
													>
														{subItem.label}
													</Link>
												)
											)}
										</div>
									)}
								</>
							) : (
								<Link
									to={item.href}
									className={`
										text-lg
										px-4 py-3
										rounded-lg
										transition-all
										duration-300
										${
											isActiveRoute(item.href)
												? "bg-blue-50 text-[#6074ad]"
												: "hover:bg-blue-50 hover:text-[#6074ad]"
										}
									`}
								>
									{item.label}
								</Link>
							)}
						</div>
					))}
				</div>

				{/* Mobile Hamburger Icon */}
				<div className="md:hidden mt-2">
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
								<div key={index}>
									{item.subItems ? (
										<>
											<Link
												onClick={() =>
													setIsMobileMenuOpen(false)
												}
												to={item.href}
												className={`block p-2 font-semibold rounded
													${isActiveRoute(item.href) ? "bg-blue-50 text-[#6074ad] " : "hover:bg-gray-100"}
												`}
											>
												{item.label}
											</Link>
											{item.subItems.map(
												(subItem, subIndex) => (
													<Link
														onClick={() =>
															setIsMobileMenuOpen(
																false
															)
														}
														key={subIndex}
														to={subItem.href}
														className={`block py-2 pl-6 rounded 
															${
																isActiveRoute(
																	subItem.href
																)
																	? "bg-blue-50 text-[#6074ad] "
																	: "text-gray-700 hover:bg-gray-100"
															}
														`}
													>
														{subItem.label}
													</Link>
												)
											)}
										</>
									) : (
										<Link
											onClick={() =>
												setIsMobileMenuOpen(false)
											}
											to={item.href}
											className={`block p-2 font-semibold rounded 
												${isActiveRoute(item.href) ? "bg-blue-50 text-[#6074ad]" : "hover:bg-gray-100"}
											`}
										>
											{item.label}
										</Link>
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
