"use client";
import React from "react";

type ProductProps = {
  tiktokVideoId?: string;
  tiktokUsername?: string;
};

const ProductCard = ({
  tiktokVideoId,
  tiktokUsername
}: ProductProps) => {

  return (
    <div
      className={`relative w-full md:w-[380px] flex justify-center`}
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
  );
};

export default ProductCard;