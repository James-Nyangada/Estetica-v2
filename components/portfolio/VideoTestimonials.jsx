"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Shape from "@/public/images/v5/shape5.png";
import Image5 from "@/public/images/v5/image5.png"; // Placeholder
// Placeholder

const testimonialsData = [
	{
		id: 1,
		author: {
			name: "Safari Founder",
			title: "CEO, African Safaris",
            image: Image5
		},
        videoThumbnail: Image5, // Use generic image for now
	},
	{
		id: 2,
		author: {
			name: "Hotel Manager",
			title: "Director, Luxury Stays",
            image: Image5
		},
        videoThumbnail: Image5,
	},
];

const swiperSettings = {
	slidesPerView: 1,
	loop: true,
	navigation: true,
	modules: [Navigation],
};

function VideoTestimonials() {
	return (
		<section className="section sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-xl-5">
						<div className="sofax-default-content sofax-default-contentv5 tac2">
							<div className="tg-heading-subheading animation-style3">
								<h2>Hear from our Success Stories</h2>
							</div>
							<p>
								See how we've helped high-ticket agencies transform their booking systems and double their revenue.
							</p>
						</div>
					</div>
					<div className="col-xl-7">
						<div className="sofax-testimonial-2column-sliderv5">
							<Swiper {...swiperSettings}>
								{testimonialsData.map((testimonial) => (
									<SwiperSlide key={testimonial.id}>
                                        <div className="video-testimonial-card position-relative" style={{borderRadius: '20px', overflow: 'hidden', aspectRatio: '16/9'}}>
                                            <Image src={testimonial.videoThumbnail} alt="Video Thumbnail" fill style={{objectFit: 'cover'}} />
                                            <div className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', backdropFilter: 'blur(5px)', cursor: 'pointer', border: '2px solid white'}}>
                                                <div style={{marginLeft: '5px', width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid white'}}></div>
                                            </div>
                                            <div className="position-absolute bottom-0 start-0 w-100 p-4" style={{background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'}}>
                                                <h4 className="text-white mb-0">{testimonial.author.name}</h4>
                                                <p className="text-white-50 mb-0">{testimonial.author.title}</p>
                                            </div>
                                        </div>
									</SwiperSlide>
								))}
							</Swiper>
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

export default VideoTestimonials;
