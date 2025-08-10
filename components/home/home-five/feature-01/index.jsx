import Icon1 from "@/public/images/v5/icon1.png";
import Icon2 from "@/public/images/v5/icon2.png";
import Icon3 from "@/public/images/v5/icon3.png";
import FadeInStagger from "../../../animation/FadeInStagger";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Core Philosophy",
		description:
			"Competence-based value delivery. Each team member contributes uniquely accoording to their level of skill producing near perfect results",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Mission",
		description:
			"To empower businesses with elegant, scalable, and conversion-driven web solutions that grow with them",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Vision",
		description:
			"To become East Africas most trusted partner for digital transformation through premium design, development, and automation systems.",
	},
];
function Features() {
	return (
		<section className=" section sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>Features that can help you boost your progress</h2>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger key={feature.id} className="col-lg-4 col-md-12" index={index}>
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
