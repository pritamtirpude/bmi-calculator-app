"use client";

import iconGender from "@/public/assets/images/icon-gender.svg";
import iconAge from "@/public/assets/images/icon-age.svg";
import iconMuscle from "@/public/assets/images/icon-muscle.svg";
import iconPregnancy from "@/public/assets/images/icon-pregnancy.svg";
import iconRace from "@/public/assets/images/icon-race.svg";
import rightCurve from "@/public/assets/images/pattern-curved-line-right.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

function BMILimitaion() {
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
    <section className="relative mx-6 my-[120px] grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2  lg:mx-auto lg:max-w-6xl lg:grid-cols-6">
      {matches && (
        <div className="absolute left-36 top-56 -z-10 lg:visible">
          <Image src={rightCurve} alt="left curve" />
        </div>
      )}
      <div className="text-center md:col-span-2 lg:col-span-3 lg:text-start">
        <h6 className="text-5xl font-semibold text-gunmetal">
          Limitations of BMI
        </h6>
        <p className="mt-9 text-base text-darkElectricBlue">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="rounded-2xl bg-white p-8 drop-shadow-2xl md:col-start-1 lg:col-span-3 lg:col-start-4">
        <div className="flex items-center gap-4">
          <Image src={iconGender} alt="icon gender" />
          <h6 className="text-xl font-semibold text-gunmetal">Gender</h6>
        </div>
        <p className="mt-4 max-w-none text-base  text-darkElectricBlue">
          The development and body fat composition of girls and boys vary with
          age. Consequently, a child&apos;s age and gender are considered when
          evaluating their BMI.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 drop-shadow-2xl md:col-start-2 lg:col-span-2 lg:col-start-3 lg:row-start-2">
        <div className="flex items-center gap-4">
          <Image src={iconAge} alt="icon age" />
          <h6 className="text-xl font-semibold text-gunmetal">Age</h6>
        </div>
        <p className="mt-4 max-w-none text-base text-darkElectricBlue">
          In aging individuals, increased body fat and muscle loss may cause BMI
          to underestimate body fat content.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 drop-shadow-2xl lg:col-span-4 lg:row-start-2">
        <div className="flex items-center gap-4">
          <Image src={iconMuscle} alt="icon muscle" />
          <h6 className="text-xl font-semibold text-gunmetal">Muscle</h6>
        </div>
        <p className="mt-4 max-w-none text-base text-darkElectricBlue">
          BMI may misclassify muscular individuals as overweight or obese, as it
          doesn&apos;t differentiate muscle from fat.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 drop-shadow-2xl lg:col-start-2 lg:col-span-2 lg:row-start-3">
        <div className="flex items-center gap-4">
          <Image src={iconPregnancy} alt="icon pregnancy" />
          <h6 className="text-xl font-semibold text-gunmetal">Pregnancy</h6>
        </div>
        <p className="mt-4 max-w-none text-base text-darkElectricBlue">
          Expectant mothers experience weight gain due to their growing baby.
          Maintaining a healthy pre-pregnancy BMI is advisable to minimise
          health risks for both mother and child.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-8 drop-shadow-2xl md:col-span-2 md:mx-auto md:max-w-[330px]   lg:col-start-4 lg:row-start-3">
        <div className="flex items-center gap-4">
          <Image src={iconRace} alt="icon race" />
          <h6 className="text-xl font-semibold text-gunmetal">Race</h6>
        </div>
        <p className="mt-4 max-w-none text-base text-darkElectricBlue">
          Certain health concerns may affect individuals of some Black and Asian
          origins at lower BMIs than others. To learn more, it is advised to
          discuss this with your GP or practice nurse.
        </p>
      </div>
    </section>
  );
}

export default BMILimitaion;
