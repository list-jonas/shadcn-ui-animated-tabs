import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/../registry/animated-tabs/animated-tabs";
import CopyCLICommand from "@/components/copy-cli-command";
import TabContent from "@/components/tab-content";
import { Button } from "@/components/ui/button";
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

      <Separator />

      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Installation
      </h2>

      <div className="flex flex-row gap-2">
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
