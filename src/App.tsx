import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ManualLesson from "./pages/ManualLesson";
import AutoLesson from "./pages/AutoLesson";
import ContactPage from "./pages/ContactPage";
import PackagesLessons from "./pages/PackagesLessons";
import Error404 from "./pages/Error404";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ScrollToTopButton from "./components/ScrollToTopButton";

const AppContent = () => {
	const location = useLocation();
	const isErrorPage =
		location.pathname !== "/" &&
		!location.pathname.match(
			/^\/(?:about|services|lessons\/(?:manual|automatic)|packages-lessons|contact|privacy-policy|terms-and-conditions)$/
		);

	return (
		<>
			<ScrollToTop />
			<ScrollToTopButton />
			{!isErrorPage && <Navbar />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/lessons/manual" element={<ManualLesson />} />
				<Route path="/lessons/automatic" element={<AutoLesson />} />
				<Route path="/packages-lessons" element={<PackagesLessons />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route
					path="/terms-and-conditions"
					element={<TermsConditions />}
				/>
				<Route path="*" element={<Error404 />} />
			</Routes>
		</>
	);
};

function App() {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
}

export default App;
