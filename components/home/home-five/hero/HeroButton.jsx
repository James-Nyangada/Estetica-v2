import Link from "next/link";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";

function HeroButton() {
	return (
		<FadeInStaggerTwo className="sofax-hero-btn-wrap sofax-hero5-btn extra-mt">
			<FadeInStaggerTwoChildren>
				<Link className="sofax-default-btn pill" data-text="Book Your $85k Growth Audit" href="/contact-us">
					<span className="button-wraper">Book Your $85k Growth Audit</span>
				</Link>
			</FadeInStaggerTwoChildren>
			<FadeInStaggerTwoChildren>
				<Link className="sofax-default-btn pill outline-btn" data-text="View Case Studies" href="/portfolio">
					<span className="button-wraper">View Case Studies</span>
				</Link>
			</FadeInStaggerTwoChildren>
		</FadeInStaggerTwo>
	);
}

export default HeroButton;
