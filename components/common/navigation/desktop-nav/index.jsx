import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
		<DesktopNav>
			<NavItem url="about-us">About Us</NavItem>
			<NavItem url="service">Services</NavItem>
			<NavItem url="portfolio">Projects</NavItem>
			<NavItem url="blog">Blog</NavItem>
			<NavItem url="contact-us">Contact Us</NavItem>
		</DesktopNav>
	);
}

export default DesktopMenu;
