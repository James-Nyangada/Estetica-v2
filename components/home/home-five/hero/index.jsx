import Shape1 from "@/public/images/v5/shape1.png";
import Shape2 from "@/public/images/v5/shape2.png";
import Shape3 from "@/public/images/v5/shape3.png";
import Image from "next/image";
import HeroButton from "./HeroButton";
import HeroVideo from "./HeroVideo";
function Hero() {
	return (
		<div className="sofax-section-padding4">
			<div className="container">
				<div className="sofax-section-title max-width1200 position-ralatiove">
					<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
						We Build AI-Driven Booking Systems for High-Ticket Safari & Travel Agencies.
					</h1>
					<p>
						Stop losing $10k/month to manual bookings. We automate your sales funnel so you can focus on the guest experience.
					</p>
					<div className="sofax-hero5-shape1">
						<Image src={Shape1} alt="Shape1" />
					</div>

					<HeroButton />

					<div className="sofax-hero5-shape2">
						<Image src={Shape2} alt="Shape" />
					</div>
					<div className="sofax-hero5-shape3">
						<Image src={Shape3} alt="Shape3" />
					</div>
				</div>
			</div>
			<HeroVideo />
		</div>
	);
}

export default Hero;
