import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/../registry/animated-tabs/legacy-animated-tabs";
import TabContent from "../tab-content";

export default function LegacyTabsShowcase() {
  return (
    <div className="w-full max-w-xl">
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
        Legacy Style
      </h2>
      <Tabs defaultValue="option2">
        <TabsList className={"mb-2"}>
          <TabsTrigger value={"option1"}>Option 1</TabsTrigger>
          <TabsTrigger value={"option2"}>Option 2</TabsTrigger>
          <TabsTrigger value={"option3"}>Option 3</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-0" value="option1">
          <TabContent name="Option 1" />
        </TabsContent>
        <TabsContent className="mt-0" value="option2">
          <TabContent name="Option 2" />
        </TabsContent>
        <TabsContent className="mt-0" value="option3">
          <TabContent name="Option 3" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
