import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/../registry/animated-tabs/animated-tabs";
import TabContent from "@/components/tab-content";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function ScrollableTabsShowcase() {
  return (
    <div className="w-full max-w-xl">
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
        Scrollable Tabs
      </h2>
      <div className="max-w-sm border-red-500 border-2 p-2">
        <Tabs defaultValue="option1-scroll">
          <ScrollArea className="whitespace-nowrap">
            <TabsList className="mb-2">
              <TabsTrigger value="option1-scroll">Option 1</TabsTrigger>
              <TabsTrigger value="option2-scroll">Option 2</TabsTrigger>
              <TabsTrigger value="option3-scroll">Option 3</TabsTrigger>
              <TabsTrigger value="option4-scroll">Option 4</TabsTrigger>
              <TabsTrigger value="option5-scroll">Option 5</TabsTrigger>
              <TabsTrigger value="option6-scroll">Option 6</TabsTrigger>
              <TabsTrigger value="option7-scroll">Option 7</TabsTrigger>
              <TabsTrigger value="option8-scroll">Option 8</TabsTrigger>
              <TabsTrigger value="option9-scroll">Option 9</TabsTrigger>
              <TabsTrigger value="option10-scroll">Option 10</TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <TabsContent className="mt-0" value="option1-scroll">
            <TabContent name="Scrollable Option 1" />
          </TabsContent>
          <TabsContent className="mt-0" value="option2-scroll">
            <TabContent name="Scrollable Option 2" />
          </TabsContent>
          <TabsContent className="mt-0" value="option3-scroll">
            <TabContent name="Scrollable Option 3" />
          </TabsContent>
          <TabsContent className="mt-0" value="option4-scroll">
            <TabContent name="Scrollable Option 4" />
          </TabsContent>
          <TabsContent className="mt-0" value="option5-scroll">
            <TabContent name="Scrollable Option 5" />
          </TabsContent>
          <TabsContent className="mt-0" value="option6-scroll">
            <TabContent name="Scrollable Option 6" />
          </TabsContent>
          <TabsContent className="mt-0" value="option7-scroll">
            <TabContent name="Scrollable Option 7" />
          </TabsContent>
          <TabsContent className="mt-0" value="option8-scroll">
            <TabContent name="Scrollable Option 8" />
          </TabsContent>
          <TabsContent className="mt-0" value="option9-scroll">
            <TabContent name="Scrollable Option 9" />
          </TabsContent>
          <TabsContent className="mt-0" value="option10-scroll">
            <TabContent name="Scrollable Option 10" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
