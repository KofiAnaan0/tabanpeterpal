import { ReviewCardProps } from "@/types/reviewType";
import React from "react";
import Image from "next/image";

const ReviewCard = ({ review }: ReviewCardProps) => {
	return (
		<div
			data-aos="fade-up"
			className="flex flex-col p-2 space-y-4 items-center h-[50px] justify-center rounded-md shadow-lg hover:shadow-lg bg-[#BAD7E9] hover:bg-[#AFD3E2] transition duration-200"
		>
			{/* Icon */}
			<Image
				src={review.profileUrl}
				alt={`${review.id} image`}
				className="object-cover rounded-md"
			/>
		</div>
	);
};

export default ReviewCard;
