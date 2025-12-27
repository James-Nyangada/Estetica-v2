import ServiceCard from "./ServiceCard";
import { servicesData } from "@/data/servicesData";

const homeServicesData = servicesData.filter(service => service.id <= 5);
function Services() {
	return (
		<section className="section sofax-section-padding2 bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>We take care of all your digital needs in one place</h2>
					</div>
				</div>

				<div className="sofax-service-table-wrap">
					{homeServicesData.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
