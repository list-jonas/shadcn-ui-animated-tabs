import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/../registry/animated-tabs/animated-tabs";
import CopyCLICommand from "@/components/copy-cli-command";
import TabContent from "@/components/tab-content";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const LandingPage = async () => {
  return (
    <main className="container flex flex-col gap-6">
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Showcase
      </h2>

      {/* Horizontal tabs */}
      <Tabs defaultValue="option1">
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
          <TabContent name="Option 1" />
        </TabsContent>
        <TabsContent value="option3">
          <TabContent name="Option 1" />
        </TabsContent>
        <TabsContent value="option4">
          <TabContent name="Option 1" />
        </TabsContent>
      </Tabs>

      {/* Vertical tabs */}
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

      {/* Tabs with a default value */}
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

      {/* Horizontal Tabs with ScrollArea */}
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

      <Separator />

      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Installation
      </h2>

      <div className="flex flex-row gap-2 mb-6">
        <Button className="w-min" asChild>
          <Link href="https://github.com/list-jonas/shadcn-ui-animated-tabs/blob/main/registry/animated-tabs/animated-tabs.tsx">
            <ExternalLink size={16} className="mr-2" />
            View the code
          </Link>
        </Button>
        <CopyCLICommand />
      </div>
    </main>
  );
};

export default LandingPage;
