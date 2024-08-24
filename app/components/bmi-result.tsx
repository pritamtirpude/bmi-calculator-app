"use client";

import manEating from "@/public/assets/images/image-man-eating.webp";
import useMediaQuery from "@/utils/useMediaQuery";
import Image from "next/image";
import { motion } from "framer-motion";
import { bmiResultLeftAnim, bmiResultRightAnim } from "@/utils/animation";

function BMIResult() {
  const { matches } = useMediaQuery("(min-width: 600px)");

  return (
    <section className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center gap-12 md:flex-row lg:mt-36 lg:gap-32 ">
      {matches && (
        <div className="absolute -top-10 right-0 -z-10 lg:visible">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85.831"
            height="200.501"
            viewBox="0 0 85.831 200.501"
          >
            <motion.path
              fill="none"
              stroke="#ACC1DE"
              d="M82.719.092c7.831 41.7 2.31 140.08-82.43 200"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.65 }}
            />
          </svg>
        </div>
      )}

      <motion.div {...bmiResultLeftAnim} className="flex-1">
        <Image
          src={manEating}
          width={564}
          height={388}
          alt="man eating"
          priority
        />
      </motion.div>

      <motion.div
        {...bmiResultRightAnim}
        className="mx-6 mt-auto flex-1 lg:mx-0"
      >
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
      </motion.div>
    </section>
  );
}

export default BMIResult;
