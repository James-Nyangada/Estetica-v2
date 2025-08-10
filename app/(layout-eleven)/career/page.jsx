import LogoSlider from "@/components/career-page/logo-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import dynamic from "next/dynamic";

const Career = dynamic(() => import("@/components/career-page"), {
	ssr: false,
});
export const metadata = {
	title: "Careers at Estetica Agency – Join a Global Web Development Team",
	description: "Join Estetica Agency’s growing team of developers, designers, and digital marketers. Work with global clients and help shape the future of web solutions from anywhere in the world.",
};
function CareerPage() {
	return (
		<>
			<BreadCrumb title="Career" />
			<Career />
			<LogoSlider />
		</>
	);
}

export default CareerPage;
