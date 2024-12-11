import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { NextUIProvider } from "@nextui-org/system";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
	return (
		<NextUIProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
				</Routes>
			</BrowserRouter>
		</NextUIProvider>
	);
}

export default App;
