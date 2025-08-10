import Footer from "@/components/home/home-five/footer";
import Header from "@/components/home/home-five/header/multi-page";
import Script from 'next/script'
export const metadata = {
	title: "Estetica Agency – Best Web Development & Design Agency in Africa",
	description: "Estetica Agency is a premium web development agency and digital marketing company serving clients across Africa, Asia, Europe, and America. We build high-performance websites, deliver expert SEO, and craft strategies to grow your online presence globally.",
	keywords: "web development agency, web design company, best digital marketing agency, SEO specialist, global web solutions, website development, professional website design, online business growth",
	authors: [{ name: 'James Nyangada' }],
  verification: {
    google: 'aY9afIp4gLDHmnMVfIFqNlD-QERxtLFeT3iyx924-r8',
  },
  other: {
    'http-equiv': 'ie=edge',
  },
  openGraph: {
    title: 'Estetica Agency - Web Design agency & SEO Experts',
    description: 'Elevate your business success with Estetica Agency – A top website development agency and SEO experts.',
    type: 'website',
    url: 'https://nex-us.vercel.app/',
    siteName: 'Estetica Agency',
    images: [
      {
        url: '/favicon.ico',
        alt: 'Estetica Agency',
      },
    ],
  },
};
function LayoutFive({ children }) {
	return (
		<>	
			{/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RHED4NZ9ZK"></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RHED4NZ9ZK');
          `}
        </Script>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutFive;
