import BMILimitaion from "./components/bmi-limitations";
import BMIResult from "./components/bmi-result";
import HealthyStats from "./components/healthy-stats";
import HeroSection from "./components/hero";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BMIResult />
      <HealthyStats />
      <BMILimitaion />
    </main>
  );
}
