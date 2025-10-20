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
  tiktokVideoId?: string;
  tiktokUsername?: string;
}

const ApproachCard = ({
  title,
  index,
  description,
  reversed,
  tiktokVideoId,
  tiktokUsername,
}: ApproachProps) => {
  useEffect(() => {
    if (tiktokVideoId) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [tiktokVideoId]);

  const textOrder = reversed ? "md:order-2" : "md:order-1";
  const tiktokOrder = reversed ? "md:order-1" : "md:order-2";

  return (
    <Section>
      <MainGrid>
        {/* iPhone Frame with TikTok Embed */}
        {tiktokVideoId && tiktokUsername && (
          <div
            className={`relative w-full md:w-[380px] flex justify-center ${tiktokOrder}`}
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            {/* iPhone Frame */}
            <div className="relative bg-[#D4ECDD] rounded-[50px] p-2 shadow-2xl">
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-[#D4ECDD] rounded-b-3xl z-10"></div>

              {/* Screen Container */}
              <div
                className="relative bg-black p-1 rounded-[42px] overflow-hidden"
                style={{ width: "320px", height: "570px" }}
              >
                {/* TikTok Video */}
                <div className="absolute inset-0 flex justify-center items-center">
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

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        )}

        {/* text content */}
        <div
          data-aos="fade-up"
          className={`space-y-4 flex flex-col items-center justify-center ${textOrder} w-full`}
        >
          <H2 className="md:text-start lg:text-start w-full">{title}</H2>
          <P className="md:text-start lg:text-start">{description}</P>
          <div className="flex items-start justify-start w-full mt-8 space-x-4">
            <Link
              href={`/product#${index}`}
              className="inline-flex justify-center items-center font-medium rounded-sm shadow-lg shadow-[#3D4ECDD]/30 text-sm px-4 py-2 h-10 hover:shadow-xl hover:shadow-[#D4ECDD]/60 hover:rotate-1 hover:scale-110 transform transition-all duration-150 disabled:pointer-events-none cursor-pointer w-full md:w-fit bg-[#D4ECDD] text-black focus:outline-none"
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
      </MainGrid>
    </Section>
  );
};

export default ApproachCard;
