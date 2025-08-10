import Logo from "@/public/images/logo/logo-white.svg";
import Image from "next/image";
import Link from "next/link";
function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link href="/">
				<Image src={Logo} alt="Logo" className="light-version-logo" height={90} width={0}/>
			</Link>
		</div>
	);
}

export default HeaderLogo;
