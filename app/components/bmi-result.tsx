"use client";

import manEating from "@/public/assets/images/image-man-eating.webp";
import leftCurve from "@/public/assets/images/pattern-curved-line-left.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

function BMIResult() {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 600px)");
    setMatches(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <section className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center gap-12 md:flex-row lg:mt-36 lg:gap-32 ">
      {matches && (
        <div className="absolute -top-10 right-0 -z-10 lg:visible">
          <Image src={leftCurve} alt="left curve" />
        </div>
      )}

      <div className="flex-1">
        <Image
          src={manEating}
          width={564}
          height={388}
          alt="man eating"
          priority
        />
      </div>

      <div className="mx-6 mt-auto flex-1 lg:mx-0">
        <h4 className="text-[32px] font-semibold leading-9 text-gunmetal lg:text-5xl lg:leading-none">
          What your BMI result means
        </h4>
        <p className="mt-[32px] text-base text-darkElectricBlue lg:mt-9">
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy
          weight.&apos; Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type 2
          diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </p>
      </div>
    </section>
  );
}

export default BMIResult;
