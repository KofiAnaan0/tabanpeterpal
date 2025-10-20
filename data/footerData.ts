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
		label: "Gallary",
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
		label: "Oil Painting",
		links: "/product#enterprise-management",
	},
	{
		id: 2,
		label: "Murals",
		links: "/product#iam",
	},
	{
		id: 3,
		label: "Pencil & charcoal",
		links: "/product#endpoint-management",
	},
	{
		id: 4,
		label: "Jersey Painting",
		links: "/product#",
	},
];
