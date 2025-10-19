import { StaticImageData } from "next/image";

export interface ReviewsProps {
	id: string;
	profileUrl: StaticImageData;
}

export interface ReviewCardProps {
	review: ReviewsProps;
}
