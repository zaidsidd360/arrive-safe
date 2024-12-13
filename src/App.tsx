import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { NextUIProvider } from "@nextui-org/system";
import About from "./pages/About";
import Services from "./pages/Services";
import ManualLesson from "./pages/ManualLesson";
import AutoLesson from "./pages/AutoLesson";
import ContactPage from "./pages/ContactPage";
import PackagesLessons from "./pages/PackagesLessons";
import Error404 from "./pages/Error404";
import ScrollToTop from "./components/ScrollToTop";

const AppContent = () => {
	const location = useLocation();
	const isErrorPage =
		location.pathname !== "/" &&
		!location.pathname.match(
			/^\/(?:about|services|lessons\/(?:manual|automatic)|packages-lessons|contact)$/
		);

	return (
		<>
			<ScrollToTop />
			{!isErrorPage && <Navbar />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/lessons/manual" element={<ManualLesson />} />
				<Route path="/lessons/automatic" element={<AutoLesson />} />
				<Route path="/packages-lessons" element={<PackagesLessons />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</>
	);
};

function App() {
	return (
		<NextUIProvider>
			<BrowserRouter>
				<AppContent />
			</BrowserRouter>
		</NextUIProvider>
	);
}

export default App;
