"use client";
import Icon from "@/public/images/v5/icon5.png";
import image1 from "@/public/images/v5/african-outback-safaris.png";
import image2 from "@/public/images/v5/nexus-fitness.png";
import image3 from "@/public/images/v5/washlab.png";
import image4 from "@/public/images/v5/homeify.png";
import image5 from "@/public/images/v5/caali.png";
import mixitup from "mixitup";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

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
					<h2>Check out all our latest feature projects</h2>
					<div className="sofax-portfolio-menu extra-mt">
						<ul className="option-set clear-both controls">
							<li className="mixitup-control mixitup-control-active" data-filter="*">
								View All Projects
							</li>
							<li className="mixitup-control" data-filter=".development">
								Web Design
							</li>
							<li className="mixitup-control" data-filter=".consultancy">
								Web system development
							</li>
							<li className="mixitup-control" data-filter=".security">
								Search Engine Optimization
							</li>
						</ul>
					</div>
				</div>
				<div className="sofax-portfolio-column row">
					<div className="collection-grid-item mix col-md-6 business consultancy">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link href="https://africanoutbacksafaris.com/">
									<Image src={image1} alt="image" />
								</Link>
							</div>
							<Link href="https://africanoutbacksafaris.com/">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>African Outback Safaris</h4>
										<p>Web design and system development</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<Image src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6 development">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link href="https://thenexusfit.com/">
									<Image src={image2} alt="Image 2" />
								</Link>
							</div>
							<Link href="https://thenexusfit.com/">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Nexus gym</h4>
										<p>website design and Search engine optimization</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<Image src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6 Security business consultancy">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link href="https://washlab.org/">
									<Image src={image3} alt="image 4" />
								</Link>
							</div>
							<Link href="https://washlab.org/">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Washlab</h4>
										<p>Website design and development</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<Image src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6 consultancy">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link href="https://home-ify.co.ke/">
									<Image src={image4} alt="Image 3" />
								</Link>
							</div>
							<Link href="https://home-ify.co.ke/">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Homeify KE</h4>
										<p>Website system design and Web development</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<Image src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="collection-grid-item mix col-md-6 development security">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link href="https://www.caali.store/">
									<Image src={image5} alt="Image 1" />
								</Link>
							</div>
							<Link href="https://www.caali.store/">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Caali store</h4>
										<p>Web system Design and development</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<Image src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div>
					{/* <div className="collection-grid-item mix col-md-6 development security">
						<div className="sofax-portfolio-content-wrap">
							<div className="sofax-portfolio-thumb">
								<Link href="/single-portfolio">
									<Image src={image2} alt="Iamge 2" />
								</Link>
							</div>
							<Link href="/single-portfolio">
								<div className="sofax-portfolio-author-wrap">
									<div className="sofax-portfolio-author-data">
										<h4>Luxeworld Store</h4>
										<p>Shopify Developmen</p>
									</div>
									<div className="sofax-portfolio-author-icon">
										<Image src={Icon} alt="Icon" />
									</div>
								</div>
							</Link>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;
