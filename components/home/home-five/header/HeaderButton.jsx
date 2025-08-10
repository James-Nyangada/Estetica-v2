import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="sofax-default-btn pill sofax-header-btn" data-text="Contact Us" href="https://calendly.com/estetica-agency/estetica-agency-call?month=2025-08">
				<span className="button-wraper">Book a free call</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
