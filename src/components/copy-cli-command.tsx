import CopyButton from "@/components/copy-button";
import { Input } from "./ui/input";

export default function CopyCLICommand() {
  const command =
    "npx shadcn@latest add https://shadcn-ui-animated-tabs.vercel.app/r/animated-tabs.json";

  return (
    <div className="w-full relative">
      <Input
        value={command}
        disabled
        className="font-mono w-full !cursor-text"
      />
      <CopyButton text={command} />
    </div>
  );
}
