import image1 from "@/public/images/service/image1.png";
import image2 from "@/public/images/service/image2.png";
import image3 from "@/public/images/service/image3.png";
import image4 from "@/public/images/service/image4.png";
import image5 from "@/public/images/service/image5.png";
import image6 from "@/public/images/service/image6.png";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

import { servicesData } from "@/data/servicesData";

const servicePageData = servicesData;

function Services() {
	return (
		<section className="sofax-section-padding">
			<div className="container">
				<div className="row">
					<div className="sofax-section-title center">
						<h2>We provide all effective services</h2>
					</div>
					{servicePageData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
