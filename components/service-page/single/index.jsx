import Icon from "@/public/images/service/icon5.png";
import ServiceDetails from "@/public/images/service/service-details.png";
import Thumb2 from "@/public/images/service/service-thumb2.png";
import Shape2 from "@/public/images/v5/shape2.png";
import Image from "next/image";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";


function SingleServiceDetails({ service }) {
	if (!service) return null;
	const { title, details } = service;

	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="sofax-default-content inner-service1">
					<h2>{title}</h2>
					<p>{details.intro}</p>
					<FadeInUp className="sofax-service-content-thumb extra-mt">
						<Image src={ServiceDetails} alt="ServiceDetails" />
					</FadeInUp>
				</div>
				<div className="sofax-default-content sofax-inner-service-details position-ralatiove">
					<h2>{details.howWeProvide.title}</h2>
					<p>{details.howWeProvide.content}</p>
					<div className="sofax-service-inner-details-shape">
						<Image src={Shape2} alt="Shape2" />
					</div>
				</div>

				<div className="sofax-section-title">
					<div className="row">
						<div className="col-lg-5">
							<div className="sofax-default-content inner-service2 dark-bg">
								<h3 className="light-color">{details.strategies.title}</h3>
								<p>{details.strategies.description}</p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="sofax-default-content">
								<div className="sofax-list-icon-wrap">
									<div className="sofax-list-icon-icon">
										<ul>
											<li>
												<Image src={Icon} alt="Icon" />
												Measurement & analytics
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												User-centered approach
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												Persona development
											</li>
										</ul>
									</div>
									<div className="sofax-list-icon-icon">
										<ul>
											<li>
												<Image src={Icon} alt="Icon" />
												Wireframing & prototyping
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												Stakeholder alignment
											</li>
											<li>
												<Image src={Icon} alt="Icon" />
												Iterative improvement
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50">
							<h2>{details.approach.title}</h2>
							<p>{details.approach.description}</p>
							<div className="extra-mt">
								{details.approach.steps.map((step, index) => (
									<div className="sofax-inner-service-content-data" key={index}>
										<h4>{step.title}</h4>
										<p>{step.content}</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-inner-content-thumb">
							<Image src={Thumb2} alt="THumbs" />
						</FadeInRight>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SingleServiceDetails;
