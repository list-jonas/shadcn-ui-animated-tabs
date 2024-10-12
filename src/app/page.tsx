import TabContent from "@/components/tab-content";
import TabsCodeBlock from "@/components/tabs-codeblock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LandingPage = async () => {
  return (
    <main className="container flex flex-col gap-6">
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

      <TabsCodeBlock />
    </main>
  );
};

export default LandingPage;
