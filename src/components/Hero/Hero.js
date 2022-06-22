import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm <br />
        Ricardo Otálora
      </SectionTitle>
      <SectionText>
        I am a React enthusiastic developer, this is my portfolio
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://u.pcloud.link/publink/show?code=XZg33VVZwbH3T2kVgpHlha3Ftm97r0HVM6RV")
        }
      >
        RESUME
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
