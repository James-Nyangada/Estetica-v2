import Blog from "@/components/blog-page";
import AutoSlider from "@/components/common/auto-slider";
import BreadCrumb from "@/components/common/Breadcrumb";
export const metadata = {
	title: "Estetica Insights – Web Development, SEO & Digital Marketing Tips",
	description: "Stay ahead with Estetica Insights. Get expert tips on web development, SEO, and digital marketing to help your business grow in global markets.",
};
function BlogPage() {
	return (
		<>
			<BreadCrumb title="Blog" />
			<Blog />
			<AutoSlider />
		</>
	);
}

export default BlogPage;
