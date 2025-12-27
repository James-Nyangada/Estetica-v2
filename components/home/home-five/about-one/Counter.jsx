"use client";
import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="sofax-counter-wrap-v5">
			<div className="sofax-counter-data-v5">
				<h2>
					$<CountUp className="sofax-counter" end={150} duration={3} redraw={true} enableScrollSpy />M+
				</h2>
				<p>Revenue Generated for Our Clients</p>
			</div>
		</div>
	);
}

export default AboutCounter;
