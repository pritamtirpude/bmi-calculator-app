"use client";

import Image from "next/image";
import iconEating from "@/public/assets/images/icon-eating.svg";
import iconExercise from "@/public/assets/images/icon-exercise.svg";
import iconSleep from "@/public/assets/images/icon-sleep.svg";
import { motion } from "framer-motion";
import {
  statCardAnim,
  statCardDescAnim,
  statCardIconAnim,
  statCardTitleAnim,
} from "@/utils/animation";

function HealthyStats() {
  return (
    <section className="mx-auto mt-[100px]  flex max-w-6xl flex-col items-start gap-8 bg-gradient-to-r from-white  to-[#D6E6FE] px-5 py-[70px]  lg:flex-row lg:items-center lg:rounded-2xl lg:px-[117px]">
      {data.map((item, index) => (
        <motion.div
          {...statCardAnim(index)}
          key={item.title}
          className="flex-1"
        >
          <motion.div {...statCardIconAnim(index)}>
            <Image src={item.icon} alt={item.title} className="object-cover" />
          </motion.div>
          <motion.h5
            {...statCardTitleAnim(index)}
            className="mt-11 text-2xl text-gunmetal"
          >
            {item.title}
          </motion.h5>
          <motion.p
            {...statCardDescAnim(index)}
            className="mt-6 text-base text-darkElectricBlue"
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
    title: "Healthy eating",
    icon: iconEating,
    description:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    title: "Regular exercise",
    icon: iconExercise,
    description:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    title: "Adequate sleep",
    icon: iconSleep,
    description:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

export default HealthyStats;
