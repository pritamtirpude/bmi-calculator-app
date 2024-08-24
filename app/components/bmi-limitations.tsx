"use client";

import iconGender from "@/public/assets/images/icon-gender.svg";
import iconAge from "@/public/assets/images/icon-age.svg";
import iconMuscle from "@/public/assets/images/icon-muscle.svg";
import iconPregnancy from "@/public/assets/images/icon-pregnancy.svg";
import iconRace from "@/public/assets/images/icon-race.svg";
import rightCurve from "@/public/assets/images/pattern-curved-line-right.svg";
import Image from "next/image";
import useMediaQuery from "@/utils/useMediaQuery";
import { motion } from "framer-motion";
import {
  limitationCardAnim,
  limitationCardParaAnim,
  limitationCardTitleAnim,
  limitationLeftAnim,
} from "@/utils/animation";
import { cn } from "@/utils/util";

function BMILimitaion() {
  const { matches } = useMediaQuery("(min-width: 600px)");

  return (
    <section className="relative mx-6 my-[120px] grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2  lg:mx-auto lg:max-w-6xl lg:grid-cols-6">
      {matches && (
        <div className="absolute left-36 top-56 -z-10 lg:visible">
          <Image src={rightCurve} alt="left curve" />
        </div>
      )}
      <motion.div
        {...limitationLeftAnim}
        className="text-center md:col-span-2 lg:col-span-3 lg:text-start"
      >
        <h6 className="text-5xl font-semibold text-gunmetal">
          Limitations of BMI
        </h6>
        <p className="mt-9 text-base text-darkElectricBlue">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </motion.div>
      {data.map((item, index) => (
        <motion.div
          {...limitationCardAnim(index)}
          key={item.title}
          className={cn(
            "rounded-2xl bg-white p-8 drop-shadow-2xl ",
            index === 0 && "md:col-start-1 lg:col-span-3 lg:col-start-4",
            index === 1 &&
              "md:col-start-2 lg:col-span-2 lg:col-start-3 lg:row-start-2",
            index === 2 && "lg:col-span-4 lg:row-start-2",
            index === 3 && "lg:col-span-2 lg:col-start-2 lg:row-start-3",
            index === 4 &&
              "md:col-span-2 md:mx-auto md:max-w-[330px] lg:col-start-4 lg:row-start-3"
          )}
        >
          <motion.div
            {...limitationCardTitleAnim(index)}
            className="flex items-center gap-4"
          >
            <Image src={item.icon} alt={item.title} />
            <h6 className="text-xl font-semibold text-gunmetal">
              {item.title}
            </h6>
          </motion.div>
          <motion.p
            {...limitationCardParaAnim(index)}
            className="mt-4 max-w-none text-base  text-darkElectricBlue"
          >
            {item.description}
          </motion.p>
        </motion.div>
      ))}
    </section>
  );
}

const data = [
  {
    title: "Gender",
    icon: iconGender,
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child&apos;s age and gender are considered when evaluating their BMI.",
  },
  {
    title: "Age",
    icon: iconAge,
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    title: "Muscle",
    icon: iconMuscle,
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn&apos; differentiate muscle from fat.",
  },
  {
    title: "Pregnancy",
    icon: iconPregnancy,
    description:
      "Expectant mothers experience weight gain due to their growing baby.Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    title: "Race",
    icon: iconRace,
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

export default BMILimitaion;
