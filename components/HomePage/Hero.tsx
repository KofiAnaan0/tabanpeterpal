import React from "react";
import Image from "next/image";
import HeroImage from "@/public/africaDataEdge.svg";
import LogoCloud from "../logo-cloud";
import P from "../ui/P";
import H1 from "../ui/H1";
import { Button } from "../ui/Button";
import Main from "../ui/Main";
import Section from "../ui/Section";

const Hero = () => {
  return (
    <Section className="pt-36 md:pt-38 ">
      {/* main content */}
      <Main data-aos="fade-up">
        {/* Title */}
        <H1>My Story</H1>

        {/* description */}
        <P className="max-w-2xl mx-auto">
          My name is Taban Peter Pal, an 18-year-old hyper-realistic pencil
          artist from South Sudan. Inspired during the lockdown by Nigerian
          artist Arinze Stanley, I turned my childhood love for drawing into a
          passion for hyper-realism. Despite challenges, I’ve found strength in
          art, with the dream of opening my own studio and inspiring young South
          Sudanese artists to see art as both purpose and profession.
        </P>

        {/* CAT */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pb-6 w-full">
          {/* try */}
          <Button className="border-black w-full md:w-fit">Hire Me</Button>

          {/* Demo */}
          <Button
            variant="outline"
            size="default"
            className="w-full md:w-fit"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("openChatWidget"));
            }}
          >
            Talk to My AI
          </Button>
        </div>

        {/* video explanation */}
        <div
          className="mx-auto flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Image
            src={HeroImage}
            alt={"hero image"}
            height={400}
            className="hover:rotate-1 hover:scale-110 transform transition-all disabled:pointer-events-none cursor-pointer duration-300 mx-auto"
          />
        </div>

        {/* Brands */}
        <LogoCloud />
      </Main>
    </Section>
  );
};

export default Hero;
