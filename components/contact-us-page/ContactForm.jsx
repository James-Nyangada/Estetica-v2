"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

function ContactForm() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({ revenue: "", budget: "" });

	const { register, handleSubmit, formState: { errors } } = useForm();

	const handleOption = (field, value) => {
		setFormData({ ...formData, [field]: value });
		if (field === "revenue") setStep(2);
		if (field === "budget") setStep(3);
	};

	const isQualified = () => {
		const highRevenue = ["$250k - $1M", "$1M+"];
		const highBudget = ["$3k - $10k", "$10k+"];
		return highRevenue.includes(formData.revenue) || highBudget.includes(formData.budget);
	};

	return (
		<div className="sofax-field-box ml-50">
			<ToastContainer position="bottom-right" />
			{step === 1 && (
				<>
					<h3>Step 1: What is your Annual Revenue?</h3>
					<div className="d-grid gap-3 mt-4">
						{["< $50k", "$50k - $250k", "$250k - $1M", "$1M+"].map((opt) => (
							<button key={opt} className="sofax-default-btn pill outline-btn w-100 text-start" onClick={() => handleOption("revenue", opt)}>
								{opt}
							</button>
						))}
					</div>
				</>
			)}

			{step === 2 && (
				<>
					<h3>Step 2: Monthly Marketing Budget?</h3>
					<div className="d-grid gap-3 mt-4">
						{["< $1k", "$1k - $3k", "$3k - $10k", "$10k+"].map((opt) => (
							<button key={opt} className="sofax-default-btn pill outline-btn w-100 text-start" onClick={() => handleOption("budget", opt)}>
								{opt}
							</button>
						))}
					</div>
				</>
			)}

			{step === 3 && isQualified() && (
				<div className="text-center">
					<h3 className="mb-3">You Qualify for a Growth Audit!</h3>
					<p className="mb-4">Based on your revenue and budget, you are a perfect fit for our High-Ticket Systems.</p>
					<a href="#" className="sofax-default-btn pill w-100" onClick={(e) => { e.preventDefault(); toast("Redirecting to Calendly..."); }}>
						<span className="button-wraper">Book Your Call Now</span>
					</a>
				</div>
			)}

			{step === 3 && !isQualified() && (
				<div className="text-center">
					<h3 className="mb-3">Not a fit just yet...</h3>
					<p className="mb-4">It looks like you're a bit early for our agency services. We recommend checking out our free resources to help you scale.</p>
					<a href="/blog" className="sofax-default-btn pill outline-btn w-100">
						<span className="button-wraper">Read Our Growth Blog</span>
					</a>
				</div>
			)}
		</div>
	);
}

export default ContactForm;
