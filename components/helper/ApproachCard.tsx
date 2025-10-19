import React, { useEffect } from "react";
import Section from "../ui/Section";
import MainGrid from "../ui/MainGrid";
import H2 from "../ui/H2";
import P from "../ui/P";
import { Button } from "../ui/Button";
import { ApproachType } from "@/types/approachType";
import Link from "next/link";

interface ApproachProps extends ApproachType {
  reversed: boolean;
  tiktokVideoId?: string; // Optional TikTok video ID
  tiktokUsername?: string; // Optional TikTok username
}

const ApproachCard = ({
  title,
  index,
  description,
  reversed,
  tiktokVideoId,
  tiktokUsername,
}: ApproachProps) => {
  // Load TikTok embed script
  useEffect(() => {
    if (tiktokVideoId) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [tiktokVideoId]);

  // Determine the order of text and image based on the 'reversed' prop
  const textOrder = reversed ? "md:order-2" : "md:order-1";

  return (
    <Section>
      <MainGrid>
        {/* text content */}
        <div
          data-aos="fade-up"
          className={`space-y-4 flex flex-col items-center justify-center ${textOrder} w-full`}
        >
          {/* title */}
          <H2 className="md:text-start lg:text-start w-full">{title}</H2>

          {/* description */}
          <P className="md:text-start lg:text-start">{description}</P>

          {/* CTA */}
          <div className="flex items-start justify-start w-full mt-8 space-x-4">
            <Link
              href={`/product#${index}`}
              className="inline-flex justify-center items-center font-medium rounded-sm shadow-lg shadow-black/30 text-sm px-4 py-2 h-10 text-white hover:shadow-xl hover:shadow-black/60 hover:rotate-1 hover:scale-110 transform transition-all duration-150 disabled:pointer-events-none cursor-pointer w-full md:w-fit bg-[#10316B] text-white focus:outline-none"
            >
              View Gallery
            </Link>
            <Button
              variant="outline"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("openChatWidget"));
              }}
            >
              Talk to My AI
            </Button>
          </div>
        </div>

        {/* TikTok Embed or Image */}
        {tiktokVideoId && tiktokUsername && (
          <div
            className="relative w-full sm:w-[350px] overflow-hidden flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            {/* Maintain 9:16 aspect ratio */}
            <div className="relative w-full" style={{ paddingTop: "200%" }}>
              {/* Scaled TikTok embed */}
              <div
                className="absolute top-0 left-0 w-full h-full flex justify-center"
                style={{
                  transform: "scale(0.90)",
                  transformOrigin: "top center",
                }}
              >
                <blockquote
                  className="tiktok-embed w-full h-full"
                  cite={`https://www.tiktok.com/@${tiktokUsername}/video/${tiktokVideoId}`}
                  data-video-id={tiktokVideoId}
                >
                  <section className="w-full">
                    <a
                      target="_blank"
                      title={`@${tiktokUsername}`}
                      href={`https://www.tiktok.com/@${tiktokUsername}?refer=embed`}
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      @{tiktokUsername}
                    </a>
                  </section>
                </blockquote>
              </div>
            </div>
          </div>
        )}
      </MainGrid>
    </Section>
  );
};

export default ApproachCard;
