import Icon2 from "@/public/images/service/icon2.png";
import Icon3 from "@/public/images/service/icon3.png";
import Icon4 from "@/public/images/service/icon4.png";
import Thumb from "@/public/images/service/service-thumb.png";
import Shape1 from "@/public/images/service/shape1.png";
import Image from "next/image";
import FadeInRight from "../../animation/FadeInRight";
function About() {
	return (
		<section className="sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-inner-service-thumb">
							<Image src={Thumb} alt="Thumbs" />
						</FadeInRight>
						<div className="sofax-inner-service-shape">
							<Image src={Shape1} alt="content-shape" />
						</div>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50 tac">
							<h2>Strategy takes it to the next business level</h2>
							<p>
								Experience unparalleled business progress with Estetica. Our expert team leverages cutting-edge technologies and innovative strategies to drive your business forward. From digital marketing to web development, we provide comprehensive solutions tailored to your unique needs. Partner with us to unlock new opportunities and achieve sustainable growth.
						
							</p>
							<div className="extra-mt">
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon2} alt="icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Competence</h4>
										<p>
											We are a team of experts in our respective fields, ensuring that we deliver the best results for our clients.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon3} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Speed</h4>
										<p>
											We understand the importance of time in business, and we work efficiently to deliver results quickly without compromising quality.
										</p>
									</div>
								</div>
								<div className="sofax-iconbox-wrap2">
									<div className="sofax-iconbox-icon2">
										<Image src={Icon4} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data2">
										<h4>Quality</h4>
										<p>
											We are committed to delivering high-quality services that meet and exceed our clients' expectations, ensuring their satisfaction and success.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
