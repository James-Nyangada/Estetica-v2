"use client";
import Image5 from "@/public/images/v5/image5.png";
import Shape from "@/public/images/v5/shape5.png";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
	{
		id: 1,
		rating: 5,
		review: "Estetica took my billion-dollar baby idea, slapped their design magic on it developed it and boom –branding so good it makes my other ventures look like lemonade stands. Estetica isn't just a design agency; they're your ticket to the big leagues.",
		author: {
			name: "Ann",
			title: "Owner",
			image: Image5,
		},
	},
	{
		id: 2,
		rating: 5,
		review: "Estetica agency did my personal portfolio website and it turned out perfect 👌. It was amazing.",
		author: {
			name: "Michael Njogu",
			title: "Founder Masters Digital",
			image: Image5,
		},
	},
];
const swiperSettings = {
	slidesPerView: 1,
	loop: true,
	navigation: true,
	modules: [Navigation],
};
function Testimonials() {
	return (
		<section className="section sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-xl-7">
						<div className="sofax-default-content sofax-default-contentv5 tac2">
							<div className="tg-heading-subheading animation-style3">
								<h2>See what our clients have said about us</h2>
							</div>
							<p>
								We offer a range of services to help clients establish & enhance their digital presence,
								reach their target audience and achieve their online marketing goals.
							</p>
						</div>
					</div>
					<div className="col-xl-5">
						<div className="sofax-testimonial-2column-sliderv5">
							{
								<Swiper {...swiperSettings}>
									{testimonialsData.map((testimonial) => (
										<SwiperSlide key={testimonial.id}>
											<TestimonialCard testimonial={testimonial} />
										</SwiperSlide>
									))}
								</Swiper>
							}
						</div>
					</div>
					<div className="sofax-testimonial-shapev5">
						<Image src={Shape} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
