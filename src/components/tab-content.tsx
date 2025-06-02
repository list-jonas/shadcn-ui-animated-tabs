import { loremIpsum } from "lorem-ipsum";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface TabContentProps {
  name: string;
  className?: string;
}

const TabContent = ({ name, className }: TabContentProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="min-h-[200px]">
        <p>
          {loremIpsum({
            count: 1,
            units: "paragraph",
          })}
        </p>
      </CardContent>
    </Card>
  );
};

export default TabContent;
