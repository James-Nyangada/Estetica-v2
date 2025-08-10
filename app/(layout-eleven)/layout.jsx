import Footer from "@/components/home/home-five/footer";
import Header from "@/components/home/home-five/header/multi-page";

function LayoutEleven({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEleven;
