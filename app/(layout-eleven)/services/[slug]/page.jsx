import { servicesData } from "@/data/servicesData";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import SingleServiceDetails from "@/components/service-page/single";

export async function generateStaticParams() {
	return servicesData.map((service) => ({
		slug: service.slug,
	}));
}

export async function generateMetadata({ params }) {
	const service = servicesData.find((s) => s.slug === params.slug);
	if (!service) {
		return {
			title: "Service Not Found",
		};
	}
	return {
		title: `${service.title} - Service Details`,
		description: service.description,
	};
}

function ServiceDetailsPage({ params }) {
	const service = servicesData.find((s) => s.slug === params.slug);

	if (!service) {
		return <div>Service not found</div>;
	}

	return (
		<>
			<BreadCrumb title={service.title} />
			<SingleServiceDetails service={service} />
			<Faq />
			<AutoSlider />
		</>
	);
}

export default ServiceDetailsPage;
