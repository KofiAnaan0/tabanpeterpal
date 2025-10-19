import { ApproachType } from "@/types/approachType";
import enterprise from "@/public/approach/enterprise.png";
import iam from "@/public/approach/iam.png";
import siem from "@/public/approach/siem.png";
import endpoint from "@/public/approach/endpoint.png";
import operations from "@/public/approach/operations.png";
import analytics from "@/public/approach/analytics.png";

export const approachData: ApproachType[] = [
	{
		id: 1,
		index: "Oil",
		title: "Oil Painting",
		description:
			" Created with vibrant pigments and smooth textures, oil paintings bring depth, warmth, and timeless elegance to every subject, making each piece a lasting masterpiece.",
		imageUrl: enterprise,
	},
	{
		id: 2,
		index: "Jersey",
		title: "Jersey Painting",
		description:
			"A personalized artwork that celebrates passion for sports and identity, jersey paintings transform fabric into a canvas that captures pride, energy, and unforgettable moments.",
		imageUrl: iam,
	},
	{
		id: 3,
		index: "Inverted",
		title: "Inverted Color Painting",
		description:
			"By reversing colors, this unique style transforms ordinary subjects into bold, eye-catching compositions, revealing hidden contrasts and a fresh perspective on reality",
		imageUrl: siem,
	},
	{
		id: 4,
		index: "Pencil",
		title: "Pencil & Charcoal Painting",
		description:
			"Combining the softness of graphite with the bold intensity of charcoal, these artworks achieve hyper-realistic detail, lifelike expressions, and powerful depth on paper.",
		imageUrl: endpoint,
	},
	{
		id: 5,
		index: "Mural",
		title: "Mural Painting",
		description:
			"Large-scale artworks painted directly onto walls, murals transform spaces into powerful visual stories. Each piece blends creativity, culture, and environment to create immersive art that inspires and connects communities.",
		imageUrl: operations,
	},
];
