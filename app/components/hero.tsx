import Logo from "@/public/assets/images/logo.svg";
import Image from "next/image";
import BMIInput from "./bmi-input";

function HeroSection() {
  return (
    <section className="relative mx-auto max-w-6xl">
      <div className="absolute -top-20 left-0 -z-10 size-full rounded-b-2xl bg-gradient-to-r  from-white to-[#D6E6FE] lg:-left-20 lg:h-[737px] lg:w-[900px]" />
      <div className="mt-[75px] flex items-center justify-center lg:justify-normal">
        <Image src={Logo} alt="logo" priority />
      </div>
      <div className="mx-6 mt-7 flex flex-col items-center justify-center gap-8 lg:mx-0 lg:min-h-[600px] lg:flex-row lg:justify-normal">
        <div className="max-w-none flex-1 lg:max-w-[560px]">
          <h1 className="text-center text-5xl font-semibold leading-tight lg:text-balance lg:text-start lg:text-6xl">
            Body Mass Index Calculator
          </h1>
          <p className="mt-9 text-center text-base text-darkElectricBlue lg:text-start">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <BMIInput />
      </div>
    </section>
  );
}

export default HeroSection;
