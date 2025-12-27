"use client";
import Icon from "@/public/images/v5/icon5.png";
import image1 from "@/public/images/v5/richworld-safaris.png";
import image2 from "@/public/images/v5/nexus-fitness.png";
import image3 from "@/public/images/v5/washlab.png";
import image4 from "@/public/images/v5/homeify.png";
import image5 from "@/public/images/v5/weezdom-utilities.png";
import mixitup from "mixitup";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const portfolioData = [
	{
		id: 1,
		title: "Richworld Safaris",
		image: image1,
		link: "https://richworldsafaris.com/",
		tags: ["business", "consultancy"],
		caseStudy: {
			problem: "They did not have a website and they were not getting enough leads.",
			solution: "Built a full website with a booking dashboard plus WhatsApp integration.",
			result: "Bookings increased by 20%."
		}
	},
	{
		id: 2,
		title: "Nexus Gym",
		image: image2,
		link: "https://thenexusfit.com/",
		tags: ["development"],
		caseStudy: {
			problem: "Low visibility in local search results.",
			solution: "Full SEO Overhaul & Google Maps Optimization.",
			result: "Top 3 Ranking for 'Gyms in Nairobi'."
		}
	},
	{
		id: 3,
		title: "Washlab",
		image: image3,
		link: "https://washlab.org/",
		tags: ["business", "security"],
		caseStudy: {
			problem: "Manual booking process causing errors.",
			solution: "Automated Booking System Implementation.",
			result: "Admin time reduced by 15 hours/week."
		}
	},
	{
		id: 4,
		title: "Homeify KE",
		image: image4,
		link: "https://home-ify.co.ke/",
		tags: ["consultancy"],
		caseStudy: {
			problem: "E-commerce site was not converting visitors.",
			solution: "UX Redesign focused on checkout flow.",
			result: "Conversion rate doubled in 30 days."
		}
	},
	{
		id: 5,
		title: "Weezdom Utilities",
		image: image5,
		link: "https://weezdom.shop",
		tags: ["development", "security"],
		caseStudy: {
			problem: "Wanted to start dropshipping but did not know where to start.",
			solution: "Built an extensive eCommerce store with Shopify and integrated crucial apps.",
			result: "Zero downtime, faster page loads, and sales increasing by 10% monthly."
		}
	}
];

function PortfolioList() {
	useEffect(() => {
		mixitup(".sofax-portfolio-column", {
			selectors: {
				target: ".mix",
			},
			animation: {
				duration: 500,
			},
		});
	}, []);
	return (
		<div className="section sofax-section-padding">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<h2>Real Results. Real Growth.</h2>
					<p>We don't just build websites. We build profit engines.</p>
					<div className="sofax-portfolio-menu extra-mt">
						<ul className="option-set clear-both controls">
							<li className="mixitup-control mixitup-control-active" data-filter="*">
								View All Projects
							</li>
							<li className="mixitup-control" data-filter=".development">
								Web Design
							</li>
							<li className="mixitup-control" data-filter=".consultancy">
								Web Systems
							</li>
							<li className="mixitup-control" data-filter=".security">
								SEO
							</li>
						</ul>
					</div>
				</div>
				<div className="sofax-portfolio-column row">
					{portfolioData.map((item) => (
						<div key={item.id} className={`collection-grid-item mix col-md-6 ${item.tags.join(" ")}`}>
							<div className="sofax-portfolio-content-wrap">
								<div className="sofax-portfolio-thumb">
									<Link href={item.link}>
										<Image src={item.image} alt={item.title} />
									</Link>
								</div>
								<Link href={item.link}>
									<div className="sofax-portfolio-author-wrap">
										<div className="sofax-portfolio-author-data">
											<h4>{item.title}</h4>
											<div className="project-case-study mt-3">
												<p className="mb-1"><strong className="text-dark">Problem:</strong> {item.caseStudy.problem}</p>
												<p className="mb-1"><strong className="text-dark">Solution:</strong> {item.caseStudy.solution}</p>
												<p className="mb-0"><strong className="text-primary">Result:</strong> {item.caseStudy.result}</p>
											</div>
										</div>
										<div className="sofax-portfolio-author-icon">
											<Image src={Icon} alt="Icon" />
										</div>
									</div>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;
