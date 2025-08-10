"use client";
import Alterbone from "@/public/images/v1/caali.png";
import African from "@/public/images/v1/african-outback.jpg";
import Coach from "@/public/images/v1/coach-andy.jpg";
import Luxe from "@/public/images/v1/luxeworld.jpg";
import Nexus from "@/public/images/v1/nexus-gym.jpg";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
	{
			id: crypto.randomUUID(),
			img: African,
		},
		{
			id: crypto.randomUUID(),
			img: Nexus,
		},
		{
			id: crypto.randomUUID(),
			img: Coach,
		},
		{
			id: crypto.randomUUID(),
			img: Luxe,
		},
		{
			id: crypto.randomUUID(),
			img: African,
		},
		{
			id: crypto.randomUUID(),
			img: Nexus,
		},
		{
			id: crypto.randomUUID(),
			img: Coach,
		},
		{
			id: crypto.randomUUID(),
			img: Luxe,
		},
		{
			id: crypto.randomUUID(),
			img: Alterbone,
		},
		{
			id: crypto.randomUUID(),
			img: African,
		},
];

const swiperSettings = {
	speed: 8000,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	loop: true,
	allowTouchMove: false,
	modules: [Autoplay],
	slidesPerView: 2,
	breakpoints: {
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
};

function LogoSlider({ light }) {
	return (
		<section className={`sofax-slider-section ${light && "bg-light"}`}>
			<div className="container">
				<div className="sofax-title-section">
					<h4>Trusted by one of the world&apos;s most popular companies</h4>
				</div>
				<div className="sofax-brand-slider">
					{
						<Swiper {...swiperSettings}>
							{sliderData.map((item) => (
								<SwiperSlide key={item.id}>
									<div className="sofax-logo-icon-item">
										<Image src={item.img} alt="Logo Slider" height={100} width={100} />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					}
				</div>
			</div>
		</section>
	);
}

export default LogoSlider;
