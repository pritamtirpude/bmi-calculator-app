"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/utils/util";

function BMIInput() {
  const [metric, setMetric] = useState(true);
  const [imperial, setImperial] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleCheckbox = () => {
    if (metric) {
      setImperial(true);
      setMetric(false);
    } else {
      setMetric(true);
      setImperial(false);
    }
  };

  return (
    <div className="size-full max-w-xl flex-1 rounded-2xl bg-white p-8 shadow-lg md:max-w-none">
      <h2 className="text-2xl font-semibold text-gunmetal">
        Enter your details below
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mt-8 flex items-center">
            <div className="flex flex-1 items-center gap-2">
              <div
                className={cn(
                  "size-[31px] flex justify-center items-center cursor-pointer rounded-full border border-darkElectricBlue",
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
            </div>
            <div className="flex flex-1 items-center gap-2">
              <div
                className={cn(
                  "size-[31px] flex justify-center items-center cursor-pointer rounded-full border border-darkElectricBlue",
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
            </div>
          </div>
          {metric && (
            <div className="mt-8 flex flex-col items-center gap-6  md:flex-row lg:flex-row">
              <div className="relative flex flex-col gap-2">
                <label
                  htmlFor="height"
                  className="text-sm capitalize text-[#5E6E85]"
                >
                  height
                </label>
                <span className="absolute right-6 top-16 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue">
                  cm
                </span>
                <input
                  type="number"
                  className="w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:outline-none"
                  name="height"
                  placeholder="0"
                />
              </div>
              <div className="relative flex flex-col gap-2">
                <label
                  htmlFor="weight"
                  className="text-sm capitalize text-[#5E6E85]"
                >
                  weight
                </label>
                <span className="absolute right-6 top-16 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue">
                  kg
                </span>
                <input
                  type="number"
                  className="w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:outline-none"
                  name="weight"
                  placeholder="0"
                />
              </div>
            </div>
          )}

          {imperial && (
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <div className="relative flex-1">
                  <label
                    htmlFor="height"
                    className="text-sm capitalize text-[#5E6E85]"
                  >
                    height
                  </label>
                  <span className="absolute right-6 top-[62px] -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue">
                    ft
                  </span>
                  <input
                    type="number"
                    className="w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:outline-none"
                    placeholder="0"
                  />
                </div>

                <div className="relative mt-auto flex-1">
                  <span className="absolute right-6 top-9 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue">
                    in
                  </span>
                  <input
                    type="number"
                    className="w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:outline-none"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative flex-1">
                  <label
                    htmlFor="height"
                    className="text-sm capitalize text-[#5E6E85]"
                  >
                    weight
                  </label>
                  <span className="absolute right-6 top-[62px] -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue">
                    st
                  </span>
                  <input
                    type="number"
                    className="w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:outline-none"
                    placeholder="0"
                  />
                </div>

                <div className="relative mt-auto flex-1">
                  <span className="absolute right-1 top-9 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue lg:right-6">
                    lbs
                  </span>
                  <input
                    type="number"
                    className="w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:outline-none"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 rounded-lg bg-colorBlue p-8 md:rounded-r-[100px] lg:rounded-r-[100px]">
            <h3 className="text-2xl font-semibold capitalize text-white">
              welcome!
            </h3>
            <p className="mt-4 text-sm text-white">
              Enter your height and weight and you&apos;ll see your BMI result
              here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BMIInput;
