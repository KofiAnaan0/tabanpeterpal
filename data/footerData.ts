import { FooterProps, SocialLink } from "@/types/footerType";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks: SocialLink[] = [
	{
		id: 1,
		icon: FaLinkedin,
		href: "#",
		label: "Linkedin",
	},
	{
		id: 2,
		icon: FaYoutube,
		href: "#",
		label: "Youtube",
	},
	{
		id: 3,
		icon: FaXTwitter,
		href: "#",
		label: "x(twitter)",
	},
];

export const companyData: FooterProps[] = [
	{
		id: 1,
		label: "Our Products",
		links: "/product",
	},
	{
		id: 2,
		label: "About Us",
		links: "/about",
	},
];

export const productData: FooterProps[] = [
	{
		id: 1,
		label: "Enterprise Service Management",
		links: "/product#enterprise-management",
	},
	{
		id: 2,
		label: "Security Information & Events Management",
		links: "/product#iam",
	},
	{
		id: 3,
		label: "Unified Endpoint Management & Security",
		links: "/product#endpoint-management",
	},
	{
		id: 4,
		label: "IT Operations Management",
		links: "/product#",
	},
	{
		id: 5,
		label: "Advanced IT Analytics",
		links: "/product#analytics",
	},
];
