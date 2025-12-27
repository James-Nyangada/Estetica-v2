import Link from "next/link";
import Image from "next/image";

function ServiceCard({ service: { title, description, icon, slug } }) {
	return (
		<Link href={`/services/${slug}`} className="sofax-service-iconbox-wrap">
			<div className="sofax-service-iconbox-data">
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
			<div className="sofax-service-iconbox-icon">
				<Image src={icon} alt="icon" />
			</div>
		</Link>
	);
}

export default ServiceCard;
