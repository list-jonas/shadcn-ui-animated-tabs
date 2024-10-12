import { loremIpsum } from "lorem-ipsum";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface TabContentProps {
  name: string;
}

const TabContent = ({ name }: TabContentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
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
