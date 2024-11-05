import HeroSection from "../components/landingpage/HeroSection";
import Purpose from "../components/landingpage/Purpose";
import ActivePolicies from "../components/landingpage/ActivePolicies";
import QuickStats from "../components/landingpage/QuickStats";
import PastProjects from "../components/landingpage/PastProjects";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Purpose />
      <ActivePolicies />
      <QuickStats />
      <PastProjects />
    </>
  );
};

export default LandingPage;
