import Image from "next/image";
import iconEating from "@/public/assets/images/icon-eating.svg";
import iconExercise from "@/public/assets/images/icon-exercise.svg";
import iconSleep from "@/public/assets/images/icon-sleep.svg";

function HealthyStats() {
  return (
    <section className="mx-auto mt-[100px]  flex max-w-6xl flex-col items-start gap-8 bg-gradient-to-r from-white  to-[#D6E6FE] px-5 py-[70px]  lg:flex-row lg:items-center lg:rounded-2xl lg:px-[117px]">
      <div className="flex-1">
        <div>
          <Image src={iconEating} alt="eating icon" className="object-cover" />
        </div>
        <h5 className="mt-11 text-2xl text-gunmetal">Healthy eating</h5>
        <p className="mt-6 text-base text-darkElectricBlue">
          Healthy eating promotes weight control, disease prevention, better
          digestion, immunity, mental clarity, and mood.
        </p>
      </div>
      <div className="flex-1">
        <div>
          <Image
            src={iconExercise}
            alt="exercise icon"
            className="object-cover"
          />
        </div>
        <h5 className="mt-11 text-2xl text-gunmetal">Regular exercise</h5>
        <p className="mt-6 text-base text-darkElectricBlue">
          Exercise improves fitness, aids weight control, elevates mood, and
          reduces disease risk, fostering wellness and longevity.
        </p>
      </div>
      <div className="flex-1">
        <div>
          <Image src={iconSleep} alt="sleep icon" className="object-cover" />
        </div>
        <h5 className="mt-11 text-2xl text-gunmetal">Adequate sleep</h5>
        <p className="mt-6 text-base text-darkElectricBlue">
          Sleep enhances mental clarity, emotional stability, and physical
          wellness, promoting overall restoration and rejuvenation.
        </p>
      </div>
    </section>
  );
}

export default HealthyStats;
