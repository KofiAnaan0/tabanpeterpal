import { ApproachType } from "@/types/approachType";
import enterprise from "@/public/approach/enterprise.png";
import iam from "@/public/approach/iam.png";
import siem from "@/public/approach/siem.png";
import endpoint from "@/public/approach/endpoint.png";
import operations from "@/public/approach/operations.png";

export const approachData: ApproachType[] = [
  {
    id: 1,
    index: "Oil",
    title: "Oil Painting",
    description:
      " Created with vibrant pigments and smooth textures, oil paintings bring depth, warmth, and timeless elegance to every subject, making each piece a lasting masterpiece.",
    imageUrl: enterprise,
    tiktokVideoId: "7440837709310037303",
    tiktokUsername: "tabanpeter_pal",
  },
  {
    id: 2,
    index: "Jersey",
    title: "Jersey Painting",
    description:
      "A personalized artwork that celebrates passion for sports and identity, jersey paintings transform fabric into a canvas that captures pride, energy, and unforgettable moments.",
    imageUrl: iam,
	tiktokVideoId: "7545497884192525624",
    tiktokUsername: "tabanpeter_pal",
  },
  {
    id: 3,
    index: "Inverted",
    title: "Inverted Color Painting",
    description:
      "By reversing colors, this unique style transforms ordinary subjects into bold, eye-catching compositions, revealing hidden contrasts and a fresh perspective on reality",
    imageUrl: siem,
	tiktokVideoId: "7543563592709246214",
    tiktokUsername: "tabanpeter_pal",
  },
  {
    id: 4,
    index: "Pencil",
    title: "Pencil & Charcoal Painting",
    description:
      "Combining the softness of graphite with the bold intensity of charcoal, these artworks achieve hyper-realistic detail, lifelike expressions, and powerful depth on paper.",
    imageUrl: endpoint,
	tiktokVideoId: "7543220595836652806",
    tiktokUsername: "tabanpeter_pal",
  },
  {
    id: 5,
    index: "Mural",
    title: "Mural Painting",
    description:
      "Ensure your IT infrastructure runs like clockwork. We provide proactive monitoring, automation, and incident management that minimize downtime, optimize performance, and align IT operations with business goals.",
    imageUrl: operations,
	tiktokVideoId: "7559485175621602571",
    tiktokUsername: "tabanpeter_pal",
  }
];
