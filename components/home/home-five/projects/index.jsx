"use client";
import image1 from "@/public/images/v5/richworld-safaris.png";
import image2 from "@/public/images/v5/nexus-fitness.png";
import image3 from "@/public/images/v5/washlab.png";
import image4 from "@/public/images/v5/homeify.png";
import image5 from "@/public/images/v5/weezdom-utilities.png";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ProjectCard from "./projectCard";

const projectsData = [
	{
		id: crypto.randomUUID(),
		img: image1,
		title: "Richworld Safaris",
		category: "Tours & Travel",
		link: "https://richworldsafaris.com/",
	},
	{
		id: crypto.randomUUID(),
		img: image2,
		title: "Nexus Gym",
		category: "Health & Fitness",
		link: "https://thenexusfit.com/",
	},
	{
		id: crypto.randomUUID(),
		img: image3,
		title: "Washlab",
		category: "Cleaning Services",
		link: "https://washlab.org/",
	},
	{
		id: crypto.randomUUID(),
		img: image4,
		title: "Homeify KE",
		category: "E-Commerce",
		link: "https://home-ify.co.ke/",
	},
    {
		id: crypto.randomUUID(),
		img: image5,
		title: "Weezdom Utilities",
		category: "E-Commerce",
		link: "https://weezdom.shop",
	},
];

function Projects() {
	return (
		<section className="sofax-section-padding bg-light" id="project">
			<div className="container">
				<div className="sofax-section-title center max-width700">
					<div className="tg-heading-subheading animation-style3">
						<h2>Real Results. Real Growth.</h2>
                        <p>We don't just build websites. We build profit engines.</p>
					</div>
				</div>

				<ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 992: 2 }}>
					<Masonry gutter="15px" columnsCount={2}>
						{projectsData.map((project, index) => (
							<FadeInStagger key={project.id} index={index}>
								<ProjectCard project={project} />
							</FadeInStagger>
						))}
					</Masonry>
				</ResponsiveMasonry>

				<FadeInUp className="sofax-portfolio-btn">
					<Link className="sofax-default-btn pill" data-text="View All Projects" href="/portfolio">
						<span className="button-wraper">View All Projects</span>
					</Link>
				</FadeInUp>
			</div>
		</section>
	);
}

export default Projects;
