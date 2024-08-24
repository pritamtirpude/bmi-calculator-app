"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/utils/util";
import { motion } from "framer-motion";
import MetricInput from "./metric-input";
import ImperialInput from "./imperial-input";
import { heroRightAnim } from "@/utils/animation";

function BMIInput() {
  const [metric, setMetric] = useState(true);
  const [imperial, setImperial] = useState(false);
  const [centimeter, setCentimeter] = useState("");
  const [kilogram, setKilogram] = useState("");
  const [bmiValue, setBmiValue] = useState(0);
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [stones, setStones] = useState("");
  const [pounds, setPounds] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (metric && centimeter && kilogram) {
      const heightInMeters = Number(centimeter) / 100;
      const bmi: number = Number(kilogram) / (heightInMeters * heightInMeters);

      setBmiValue(Number(bmi.toFixed(2)));
    }

    if (imperial && feet && inches && stones && pounds) {
      const totalHeightInInches = parseFloat(feet) * 12 + parseFloat(inches);
      const totalWeightInPounds = parseFloat(stones) * 14 + parseFloat(pounds);

      if (totalHeightInInches > 0 && totalWeightInPounds > 0) {
        const bmiValue =
          (totalWeightInPounds * 703) /
          (totalHeightInInches * totalHeightInInches);
        setBmiValue(Number(bmiValue.toFixed(2)));
      }
    }
  };

  const handleCheckbox = () => {
    if (metric) {
      setImperial(true);
      setMetric(false);
      setFeet("");
      setInches("");
      setStones("");
      setPounds("");
      if (bmiValue) {
        setBmiValue(0);
      }
    } else {
      setMetric(true);
      setImperial(false);
      setKilogram("");
      setCentimeter("");
      if (bmiValue) {
        setBmiValue(0);
      }
    }
  };

  return (
    <motion.div
      layout
      variants={heroRightAnim}
      initial="hidden"
      animate="show"
      className="size-full max-w-xl flex-1 rounded-2xl bg-white p-8 shadow-lg md:max-w-none"
    >
      <motion.h2 layout className="text-2xl font-semibold text-gunmetal">
        Enter your details below
      </motion.h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mt-8 flex items-center">
            <motion.div layout className="flex flex-1 items-center gap-2">
              <div
                className={cn(
                  "size-[31px] flex justify-center transition-all items-center cursor-pointer rounded-full border border-darkElectricBlue hover:border-colorBlue",
                  metric ? "bg-[#D6E6FE] border-none" : ""
                )}
                onClick={handleCheckbox}
              >
                <span
                  className={cn(
                    "size-[15px] rounded-full",
                    metric ? "bg-colorBlue" : ""
                  )}
                ></span>
              </div>
              <label
                htmlFor="metric"
                className="text-base font-semibold capitalize text-gunmetal"
              >
                metric
              </label>
            </motion.div>
            <motion.div layout className="flex flex-1 items-center gap-2">
              <div
                className={cn(
                  "size-[31px] flex justify-center transition-all hover:border-colorBlue items-center cursor-pointer rounded-full border border-darkElectricBlue",
                  imperial ? "bg-[#D6E6FE] border-none" : ""
                )}
                onClick={handleCheckbox}
              >
                <span
                  className={cn(
                    "size-[15px] rounded-full",
                    imperial ? "bg-colorBlue" : ""
                  )}
                ></span>
              </div>
              <label
                htmlFor="imperial"
                className="text-base font-semibold capitalize text-gunmetal"
              >
                imperial
              </label>
            </motion.div>
          </div>
          {metric && (
            <MetricInput
              centimeter={centimeter}
              setCentimeter={setCentimeter}
              kilogram={kilogram}
              setKilogram={setKilogram}
            />
          )}

          {imperial && (
            <ImperialInput
              feet={feet}
              setFeet={setFeet}
              inches={inches}
              setInches={setInches}
              stones={stones}
              setStones={setStones}
              pounds={pounds}
              setPounds={setPounds}
            />
          )}

          {bmiValue ? (
            <motion.div
              layout
              className="mt-8 flex flex-col items-start rounded-lg bg-colorBlue p-8  md:rounded-r-[100px] lg:flex-row lg:items-center lg:justify-between lg:rounded-r-[100px]"
            >
              <div>
                <h6 className="text-base text-white">Your BMI is...</h6>
                <strong className="text-[48px] text-white lg:text-[64px]">
                  {bmiValue}
                </strong>
              </div>

              <div className="mt-6 max-w-none lg:mt-0 lg:max-w-[200px]">
                <p className="text-sm text-white">
                  Your BMI suggests you&apos;re&nbsp;
                  <span className="font-semibold text-white">
                    {bmiValue >= 18 && bmiValue <= 25
                      ? "healthy weight"
                      : bmiValue < 18
                        ? "underweight"
                        : bmiValue >= 25 && bmiValue <= 30
                          ? "overweight"
                          : bmiValue > 30
                            ? "obese"
                            : ""}
                  </span>
                  .
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="mt-8 rounded-lg bg-colorBlue p-8 md:rounded-r-[100px] lg:rounded-r-[100px]"
            >
              <h3 className="text-2xl font-semibold capitalize text-white">
                welcome!
              </h3>
              <p className="mt-4 text-sm text-white">
                Enter your height and weight and you&apos;ll see your BMI result
                here
              </p>
            </motion.div>
          )}

          <button className="hidden" type="submit">
            submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default BMIInput;
