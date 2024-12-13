import { Link } from "react-router-dom";
import Error404Image from "../assets/error404.svg";

const Error404 = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
			<img
				src={Error404Image}
				alt="404 Error"
				className="w-full max-w-md mb-8"
			/>
			<h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
				Uh oh... Seems like you're lost!
			</h1>
			<p className="text-gray-600 mb-8 text-center">
				Don't worry, even the best explorers take wrong turns sometimes.
			</p>
			<Link
				to="/"
				className="px-6 py-3 bg-[#6074ad] text-white rounded-lg hover:bg-[#4a5d96] transition-colors duration-300 font-medium"
			>
				Let's Get You Back Home
			</Link>
		</div>
	);
};

export default Error404;
