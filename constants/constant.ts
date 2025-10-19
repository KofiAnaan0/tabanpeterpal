import airrwanda from "@/public/Brand_logos/dynamq.png";
import dfcu from "@/public/Brand_logos/helios.png";
import BoU from "@/public/Brand_logos/okello.png";
import mtn from "@/public/Brand_logos/onyango.png";
import uedcl from "@/public/Brand_logos/usama.png";
import ura from "@/public/Brand_logos/yagga.png";

// Nav Links
export const navLinks = [
	{
		id: 1,
		label: "Home",
		url: "/",
	},
	{
		id: 2,
		label: "Gallery",
		url: "/product",
	},
	{
		id: 3,
		label: "About Me",
		url: "/about",
	},
];

// Brand logos
export const brandLogo = [
	{
		id: 1,
		url: "#",
		href: airrwanda,
		height: 100,
	},
	{
		id: 2,
		url: "#",
		href: BoU,
		height: 100,
	},
	{
		id: 3,
		url: "#",
		href: dfcu,
		height: 100,
	},
	{
		id: 4,
		url: "#",
		href: mtn,
		height: 100,
	},
	{
		id: 5,
		url: "#",
		href: uedcl,
		height: 100,
	},
	{
		id: 6,
		url: "#",
		href: ura,
		height: 100,
	},
];

// service data
export const servicesData = [
	{
		id: "1",
		title: "GATHER REQUIREMENTS",
		description:
			"Our business processes are constantly re-engineered to deliver on solutions, focus on cost reduction, and promote alignment between your business and Information Technology.",
		icon: "/service/government.svg",
		learnMoreUrl: "/",
	},
	{
		id: "2",
		title: "DESIGN & CONCEPT",
		description:
			"Our capability and experience in delivering end-to-end security solutions, covering the breadth and depth of industry leading best practices and guidelines will be a great asset.",
		icon: "/service/insurance.svg",
		learnMoreUrl: "/",
	},
	{
		id: "3",
		title: "DEPLOY & MAINTAIN",
		description:
			"At this stage we deploy the solution into your production environment and support the ongoing use of that solution.",
		icon: "/service/school.svg",
		learnMoreUrl: "/",
	},
	{
		id: "4",
		title: "REVIEW",
		description:
			"We believe quality assurance is valuable and a proactive means of communicating with our client management and project team members at key points in the life of engagements.",
		icon: "/service/finance.svg",
		learnMoreUrl: "/",
	},
];
