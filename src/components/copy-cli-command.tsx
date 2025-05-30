import CliCommandInput from "./cli-command-input";

interface CopyCLICommandProps {
  version: "current" | "legacy";
}

export default function CopyCLICommand({ version }: CopyCLICommandProps) {
  const command =
    version === "current"
      ? "npx shadcn@latest add https://shadcn-ui-animated-tabs.vercel.app/r/animated-tabs.json"
      : "npx shadcn@latest add https://shadcn-ui-animated-tabs.vercel.app/r/legacy-animated-tabs.json";

  return <CliCommandInput command={command} />;
}
