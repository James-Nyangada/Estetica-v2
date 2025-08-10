"use client";
import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="sofax-counter-wrap-v5">
			<div className="sofax-counter-data-v5">
				<h2>
					<CountUp className="sofax-counter" end={7} duration={5} redraw={true} enableScrollSpy />+
				</h2>
				<p>Partnership Formed</p>
			</div>
			<div className="sofax-counter-data-v5">
				<h2>
					<CountUp className="sofax-counter" end={10} duration={4} redraw={true} enableScrollSpy />
					+
				</h2>
				<p>Project Completed</p>
			</div>
			<div className="sofax-counter-data-v5">
				<h2>
					<CountUp className="sofax-counter" end={100} duration={3} redraw={true} enableScrollSpy />%
				</h2>
				<p>Client Satisfaction</p>
			</div>
		</div>
	);
}

export default AboutCounter;
