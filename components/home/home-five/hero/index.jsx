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
						Digital solutions built for growth.
					</h1>
					<p>
						We design, develop, and scale websites, stores, and systems that drive results.
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
