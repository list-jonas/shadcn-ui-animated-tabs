import InstallationSection from "@/components/installation-section";
import HorizontalTabsShowcase from "@/components/showcase/horizontal-tabs-showcase";
import VerticalTabsShowcase from "@/components/showcase/vertical-tabs-showcase";
import DefaultValueTabsShowcase from "@/components/showcase/default-value-tabs-showcase";
import ScrollableTabsShowcase from "@/components/showcase/scrollable-tabs-showcase";
import LegacyTabsShowcase from "@/components/showcase/legacy-tabs-showcase";

const LandingPage = async () => {
  return (
    <main className="container flex flex-col gap-6">
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Showcase
      </h2>

      <div className="flex flex-row flex-wrap gap-8">
        <HorizontalTabsShowcase />
        <VerticalTabsShowcase />
        <DefaultValueTabsShowcase />
        <ScrollableTabsShowcase />
        <LegacyTabsShowcase />
      </div>

      <InstallationSection />
    </main>
  );
};

export default LandingPage;
