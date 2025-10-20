import H2 from "@/components/ui/H2";
import Main from "@/components/ui/Main";
import P from "@/components/ui/P";
import Section from "@/components/ui/Section";
import React from "react";

const AboutPage = () => {
  return (
    <Section>
      <Main>
        {/* title */}
        <H2 className="pt-30 md:pt-10">About Taban Peter Pal</H2>

        <div className="flex flex-col gap-6 max-w-lg mx-auto">
          {/* description */}
          <P>
            I specialize in hyperrealism, a genre that creates drawings that
            look like high-resolution photographs. I primarily uses charcoal and
            graphite pencils on paper, though I also works with acrylics and
            oils on canvas.
          </P>
          <P>
            My work includes portraits of notable figures like singer Dynamiq
            and former Ugandan Cranes and Mamelodi Sundowns goalkeeper Denis
            Onyango. I have also created a painting on a Vipers SC jersey for
            footballer Allan Okello. Some of my other pieces have been used to
            create powerful political messages, including a painting of
            President Salva Kiir and First Vice President Dr. Riek Machar
            playing a game of chess.
          </P>
          <P>
            I won multiple awards for my art and have been praised by my peers
            and prominent figures, such as singer Dynamiq.
          </P>
          <P>
            My goal is to have a well-established art studio, feature in
            galleries, and hold my own solo exhibition. I hope to inspire
            other artists in South Sudan and demonstrate that art can be a
            viable profession.
          </P>
        </div>
      </Main>
    </Section>
  );
};

export default AboutPage;
