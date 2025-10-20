import React from "react";
import P from "../ui/P";
import H1 from "../ui/H1";
import { Button } from "../ui/Button";
import Main from "../ui/Main";
import Section from "../ui/Section";

const Hero = () => {
  return (
    <Section className="pt-36 md:pt-38 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* main content */}
      <Main data-aos="fade-up" className="relative z-10">
        {/* Title */}
        <H1 className="text-white">My Story</H1>

        {/* description */}
        <P className="max-w-2xl mx-auto text-white">
          My name is Taban Peter Pal, an 18-year-old hyper-realistic pencil
          artist from South Sudan. Inspired during the lockdown by Nigerian
          artist Arinze Stanley, I turned my childhood love for drawing into a
          passion for hyper-realism. Despite challenges, I&apos;ve found strength in
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
            className="w-full md:w-fit bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white"
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

export default Hero;