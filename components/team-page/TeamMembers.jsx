import image1 from "@/public/images/about/image1.png";
import image2 from "@/public/images/about/image2.png";
import image3 from "@/public/images/about/image3.png";
import image4 from "@/public/images/about/image4.png";
import image5 from "@/public/images/about/image5.png";
import image6 from "@/public/images/about/image6.png";
import image7 from "@/public/images/about/image7.png";
import image8 from "@/public/images/about/image8.png";
import FadeInStagger from "../animation/FadeInStagger";
import SingleTeamMember from "./SingleTeamMember";

const teamMembers = [
	[
		{
			id: crypto.randomUUID(),
			name: "James Nyangada",
			title: "Managing Director",
			image: image1,
			className: "sofax-team-member-aboutus",
		},
		/* {
			id: crypto.randomUUID(),
			name: "Allan Kahiri",
			title: "Chief Executive Officer",
			image: image5,
			className: "",
		}, */
	],

	[
		/* {
			id: crypto.randomUUID(),
			name: "Victor Mwongera",
			title: "Director of Operations & Media Strategy",
			image: image2,
			className: "",
		}, */
		{
			id: crypto.randomUUID(),
			name: "Stephanie",
			title: "Financial Strategy & Operations Office",
			image: image6,
			className: "",
		},
	],
	[
		{
			id: crypto.randomUUID(),
			name: "Victor Mwongera",
			title: "Director of Operations & Media Strategy",
			image: image3,
			className: "",
		},
		/* {
			id: crypto.randomUUID(),
			name: "Ferroliam Centrl",
			title: "Creative director",
			image: image7,
			className: "",
		}, */
	],
	[
		{
			id: crypto.randomUUID(),
			name: "Allan Kahiri",
			title: "Chief Executive Officer",
			image: image5,
			className: "",
		},
		/* {
			id: crypto.randomUUID(),
			name: "Jovenners Willom",
			title: "Market researcher",
			image: image8,
			className: "",
		}, */
	],
];

function TeamMembers() {
	return (
		<section className="section sofax-section-padding">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<h2>Meet the team work behind our succees</h2>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-aboutus-content-text our-teaminner">
								<p>
									Competence-based value delivery. Each team member is an expert in their field, ensuring that we deliver the best results for our clients.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{teamMembers.map((items, index) => (
						<FadeInStagger key={index} className="col-lg-3 col-md-6" index={index}>
							{items.map((item) => (
								<SingleTeamMember key={item.id} member={item} />
							))}
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default TeamMembers;
