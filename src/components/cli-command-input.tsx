import CopyButton from "@/components/copy-button";

interface CliCommandInputProps {
  command: string;
}

export default function CliCommandInput({ command }: CliCommandInputProps) {
  return (
    <div className="group relative w-full rounded-lg border bg-muted/50">
      <pre className="overflow-x-auto py-3 pl-4 pr-12 text-sm leading-relaxed">
        <code className="font-mono whitespace-pre">
          <span className="select-none text-muted-foreground">$ </span>
          {command}
        </code>
      </pre>
      <CopyButton text={command} />
    </div>
  );
}
