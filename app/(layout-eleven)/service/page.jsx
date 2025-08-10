import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import About from "@/components/service-page/about";
import Services from "@/components/service-page/services";
export const metadata = {
	title: "Our Services – Premium Web Design, Development & SEO Marketing",
	description: "Discover Estetica Agencys full suite of services, from responsive web design and custom development to SEO and global digital marketing. We help brands build, optimize, and scale their online presence worldwide.",
	keywords: "web development services, web design services, SEO services, digital marketing agency, website redesign, eCommerce development, best SEO specialists, international marketing solutions",
};
function ServicePage() {
	return (
		<>
			<BreadCrumb title="Service" />
			<Services />
			<AutoSlider />
			<About />
			<Faq />
		</>
	);
}

export default ServicePage;
