import Icon from "@/public/images/v5/icon5.png";
import Image from "next/image";
import Link from "next/link";
function ProjectCard({ project: { title, img, category, link } }) {
	return (
		<div className="sofax-portfolio-content-wrap">
			<div className="sofax-portfolio-thumb">
				<Link href={link || "#"} target={link ? "_blank" : "_self"}>
					<Image src={img} alt="project image" />
				</Link>
			</div>
			<div className="sofax-portfolio-author-wrap">
				<Link href={link || "#"}>
					<div className="sofax-portfolio-author-data">
						<h4>{title}</h4>
						<p>{category}</p>
					</div>
				</Link>
				<Link href={link || "#"} className="sofax-portfolio-author-icon">
					<Image src={Icon} alt="Icon" />
				</Link>
			</div>
		</div>
	);
}

export default ProjectCard;
