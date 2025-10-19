import { StaticImageData } from "next/image";

export interface ApproachType {
  id: number;
  index: string;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  tiktokVideoId?: string;
  tiktokUsername?: string;
}
