import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import { keyframes } from "framer-motion";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

export const metadata = {
	title: "Our Work – Global Web Design & Development Projects",
	description: "Explore Estetica Agencys portfolio of global projects. See how our web development, design, and SEO strategies have helped businesses across continents achieve exceptional digital growth.",
	keywords: "web design portfolio, website development projects, global client projects, SEO success stories, international website design, digital marketing case studies, professional website examples",
};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title="Our Portfolio" />
			<PortfolioList />
			<Faq />
		</>
	);
}

export default PortfolioPage;
