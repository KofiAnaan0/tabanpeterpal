import React, { useState, useEffect } from "react";
import Main from "../ui/Main";
import Section from "../ui/Section";
import H2 from "../ui/H2";
import ReviewCard from "../helper/ReviewCard";
import { Button } from "../ui/Button";
import { reviewData } from "@/data/reviewData";

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviewData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Main data-aos="fade-up">
        <H2>Our Clients are Happy</H2>

        {/* Stacked Cards Container */}
        <div className="relative w-full max-w-md mx-auto h-[400px] mt-58 md:mt-80">
          {reviewData.map((review, index) => {
            // Calculate position relative to active card
            const position = (index - activeIndex + reviewData.length) % reviewData.length;
            
            // Only show top 3 cards in stack
            if (position >= 3) return null;

            return (
              <div
                key={review.id}
                className="absolute w-full transition-all duration-800 ease-in-out cursor-pointer hover:scale-105"
                style={{
                  transform: `
                    translateY(${position * 20}px) 
                    translateX(${position * 10}px) 
                    scale(${1 - position * 0.05})
                    rotate(${position * 2}deg)
                  `,
                  zIndex: reviewData.length - position,
                  opacity: position === 0 ? 1 : 0.7 - position * 0.2,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <ReviewCard review={review} />
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-2">
          {reviewData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-400 ${
                index === activeIndex
                  ? "bg-[#10316B] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center w-fit mx-auto">
          <Button
            onClick={() => {
              window.dispatchEvent(new CustomEvent("openChatWidget"));
            }}
          >
            Talk to My AI
          </Button>
        </div>
      </Main>
    </Section>
  );
};

export default Review;