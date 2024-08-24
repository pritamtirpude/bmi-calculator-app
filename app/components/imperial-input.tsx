import { motion } from "framer-motion";

type ImperialInputProps = {
  feet: string;
  setFeet: (e: string) => void;
  inches: string;
  setInches: (e: string) => void;
  stones: string;
  setStones: (e: string) => void;
  pounds: string;
  setPounds: (e: string) => void;
};

function ImperialInput({
  feet,
  setFeet,
  inches,
  setInches,
  stones,
  setStones,
  pounds,
  setPounds,
}: ImperialInputProps) {
  return (
    <motion.div layout className="mt-8 flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <div className="relative flex-1">
          <label htmlFor="height" className="text-sm capitalize text-[#5E6E85]">
            height
          </label>
          <span className="absolute right-6 top-[70px] -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue">
            ft
          </span>
          <input
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            type="number"
            className="mt-2 w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:border-colorBlue focus:outline-none"
            placeholder="0"
          />
        </div>

        <div className="relative mt-auto flex-1">
          <span className="absolute right-6 top-9 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue">
            in
          </span>
          <input
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            type="number"
            className="w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:border-colorBlue focus:outline-none"
            placeholder="0"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative flex-1">
          <label htmlFor="height" className="text-sm capitalize text-[#5E6E85]">
            weight
          </label>
          <span className="absolute right-6 top-[68px] -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue">
            st
          </span>
          <input
            value={stones}
            onChange={(e) => setStones(e.target.value)}
            type="number"
            className="mt-2 w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:border-colorBlue focus:outline-none"
            placeholder="0"
          />
        </div>

        <div className="relative mt-auto flex-1">
          <span className="absolute right-1 top-[38px] -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-colorBlue lg:right-6">
            lbs
          </span>
          <input
            value={pounds}
            onChange={(e) => setPounds(e.target.value)}
            type="number"
            className="w-full rounded-2xl border border-darkElectricBlue px-6 py-5 text-2xl focus:border-colorBlue focus:outline-none"
            placeholder="0"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ImperialInput;
