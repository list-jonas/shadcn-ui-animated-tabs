import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/../registry/animated-tabs/animated-tabs";
import TabContent from "@/components/tab-content";

export default function VerticalTabsShowcase() {
  return (
    <div className="w-full max-w-xl">
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
        Vertical Tabs
      </h2>
      <Tabs defaultValue="option1" orientation="vertical">
        <TabsList>
          <TabsTrigger value="option1">Option 1</TabsTrigger>
          <TabsTrigger value="option2">Option 2</TabsTrigger>
          <TabsTrigger value="option3">Option 3</TabsTrigger>
          <TabsTrigger value="option4">Option 4</TabsTrigger>
        </TabsList>

        <TabsContent value="option1">
          <TabContent name="Option 1" />
        </TabsContent>
        <TabsContent value="option2">
          <TabContent name="Option 2" />
        </TabsContent>
        <TabsContent value="option3">
          <TabContent name="Option 3" />
        </TabsContent>
        <TabsContent value="option4">
          <TabContent name="Option 4" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
