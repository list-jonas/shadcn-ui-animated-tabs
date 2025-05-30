import CopyButton from "@/components/copy-button";
import { Input } from "./ui/input";

interface CliCommandInputProps {
  command: string;
}

export default function CliCommandInput({ command }: CliCommandInputProps) {
  return (
    <div className="w-full relative">
      <Input value={command} className="font-mono w-full !cursor-text" />
      <CopyButton text={command} />
    </div>
  );
}
