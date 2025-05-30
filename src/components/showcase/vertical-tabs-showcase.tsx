import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/../registry/animated-tabs/animated-tabs";
import TabContent from "@/components/tab-content";

export default function VerticalTabsShowcase() {
  return (
    <Tabs
      orientation="vertical"
      defaultValue="option3"
      className="flex flex-row gap-2"
    >
      <TabsList className="m-0 flex flex-col items-stretch w-full h-auto">
        <TabsTrigger value="option1">Option 1</TabsTrigger>
        <TabsTrigger value="option2">Option 2</TabsTrigger>
        <TabsTrigger value="option3">Option 3</TabsTrigger>
        <TabsTrigger value="option4">Option 4</TabsTrigger>
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
      <TabsContent className="mt-0" value="option4">
        <TabContent name="Option 4" />
      </TabsContent>
    </Tabs>
  );
}
