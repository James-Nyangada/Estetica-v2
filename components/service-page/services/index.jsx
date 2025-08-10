import image1 from "@/public/images/service/image1.png";
import image2 from "@/public/images/service/image2.png";
import image3 from "@/public/images/service/image3.png";
import image4 from "@/public/images/service/image4.png";
import image5 from "@/public/images/service/image5.png";
import image6 from "@/public/images/service/image6.png";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Portfolio websites",
		description:
			"We build personal brand porfloios that showcase your work, skills, and achievements in a visually appealing way.",
		icon: image1,
	},
	{
		id: crypto.randomUUID(),
		title: "Static business websites",
		description:
			"We create static business websites that provide essential information about your company, products, and services. Inclusive of forms for inquiries and contact and a working newsletter subscription.",
		icon: image2,
	},
	{
		id: crypto.randomUUID(),
		title: "Ecommerce websites",
		description: "We develop ecommerce websites that enable you to sell products or services online, complete with secure payment gateways and user-friendly interfaces with admin dashboards for managing products and orders.",
		icon: image3,
	},
	{
		id: crypto.randomUUID(),
		title: "Shopify store development(Alternative ecommerce website)",
		description:
			"We specialize in Shopify store development and setup, creating fully functional and visually appealing online stores that are easy to manage and customize. This is an alternative to the ecommerce websites we build.",
		icon: image4,
	},
	{
		id: crypto.randomUUID(),
		title: "Bookings and appointments websites",
		description:
			"We create booking and appointment websites that allow businesses to manage appointments, reservations, and schedules efficiently. These websites often include features like calendar integration, automated reminders, and payment processing.",
		icon: image5,
	},
	{
		id: crypto.randomUUID(),
		title: "Custom web applications",
		description:
			"We develop custom web applications tailored to specific business needs, providing unique solutions that enhance productivity and streamline operations. These applications can range from CRM systems to project management tools.",
		icon: image6,
	},
];

function Services() {
	return (
		<section className="sofax-section-padding">
			<div className="container">
				<div className="row">
					<div className="sofax-section-title center">
						<h2>We provide all effective services</h2>
					</div>
					{servicesData.map((service, index) => (
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
