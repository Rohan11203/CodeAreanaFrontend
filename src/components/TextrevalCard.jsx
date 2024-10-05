
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    (
      <>
      <TextRevealCard text="You know What" revealText="Prasad Chutiya Hai ">
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          ....
        </TextRevealCardDescription>
      </TextRevealCard>
      </>
      
    )
  );
}
