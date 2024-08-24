import { motion } from "framer-motion";

type MetricInputProps = {
  centimeter: string;
  kilogram: string;
  setCentimeter: (e: string) => void;
  setKilogram: (e: string) => void;
};

function MetricInput({
  centimeter,
  setCentimeter,
  kilogram,
  setKilogram,
}: MetricInputProps) {
  return (
    <motion.div
      layout
      className="mt-8 flex flex-col items-center gap-6  md:flex-row lg:flex-row"
    >
      <div className="relative flex flex-col gap-2">
        <label htmlFor="height" className="text-sm capitalize text-[#5E6E85]">
          height
        </label>
        <span className="absolute right-6 top-16 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue">
          cm
        </span>
        <input
          type="number"
          value={centimeter}
          onChange={(e) => setCentimeter(e.target.value)}
          className="w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:border-colorBlue focus:outline-none"
          name="height"
          placeholder="0"
        />
      </div>
      <div className="relative flex flex-col gap-2">
        <label htmlFor="weight" className="text-sm capitalize text-[#5E6E85]">
          weight
        </label>
        <span className="absolute right-6 top-16 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue">
          kg
        </span>
        <input
          type="number"
          value={kilogram}
          onChange={(e) => setKilogram(e.target.value)}
          className="w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:border-colorBlue focus:outline-none"
          name="weight"
          placeholder="0"
        />
      </div>
    </motion.div>
  );
}

export default MetricInput;
