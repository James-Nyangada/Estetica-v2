"use client";
import Icon5 from "@/public/images/v1/icon5.png";
import Icon6 from "@/public/images/v1/icon6.png";
import Icon7 from "@/public/images/v1/icon7.png";
import featureIcon from "@/public/images/v1/icon8.png";
import { useState } from "react";
import FadeInStagger from "../../../animation/FadeInStagger";
import PricingCard from "./PricingCard";

const pricePlanData = [
	{
		id: crypto.randomUUID(),
		plan: "Growth Audit & Roadmap",
		price: "5,000",
		img: Icon7,
		features: [
			"Full Sales Funnel Audit",
			"Competitor Analysis",
			"Implementation Roadmap",
			"Conversion Rate Optimization Strategy",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: crypto.randomUUID(),
		plan: "Safari Growth Engine",
		price: "25,000",
		img: Icon5,
		features: [
			"Custom Safari Booking System",
			"Automated CRM Integration",
			"High-Convert Landing Pages",
			"Priority AI Link Integration",
            "Outcome Guarantee",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: crypto.randomUUID(),
		plan: "SEO & Authority Retainer",
		price: "3,000/mo",
		img: Icon6,
		features: [
			"High-Intent Keyword Dominance",
			"Monthly Content Production",
			"Technical SEO Maintenance",
            "Performance Reporting",
		],
		featureIcon,
		highlighted: false,
	},
];

function PricePlan() {
	return (
		<section className="section sofax-section-padding bg-light" id="pricing">
			<div className="container">
				<div className="sofax-section-title center pb-50">
					<div className="tg-heading-subheading animation-style3">
						<h2>Invest in Your Growth</h2>
                        <p>No subscriptions. No hidden fees. Just ROI-focused systems.</p>
					</div>
				</div>

				{/* Toggle removed */}

				<div className="row" id="table-price-value">
					{pricePlanData.map((pricing, index) => (
						<FadeInStagger key={pricing.id} index={index} className="col-xl-4 col-md-6">
							<PricingCard pricing={pricing} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default PricePlan;
