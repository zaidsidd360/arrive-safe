import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { NextUIProvider } from "@nextui-org/system";
import About from "./pages/About";
import Services from "./pages/Services";
import ManualLesson from "./pages/ManualLesson";
import AutoLesson from "./pages/AutoLesson";
import ContactPage from "./pages/ContactPage";

function App() {
	return (
		<NextUIProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/lessons/manual" element={<ManualLesson />} />
					<Route path="/lessons/automatic" element={<AutoLesson />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</BrowserRouter>
		</NextUIProvider>
	);
}

export default App;
