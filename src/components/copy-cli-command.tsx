import CliCommandInput from "./cli-command-input";

interface CopyCLICommandProps {
  version: "current" | "legacy";
}

export default function CopyCLICommand({ version }: CopyCLICommandProps) {
  const command =
    version === "current"
      ? "npx shadcn@latest add list-jonas/shadcn-ui-animated-tabs/animated-tabs"
      : "npx shadcn@latest add list-jonas/shadcn-ui-animated-tabs/legacy-animated-tabs";

  return <CliCommandInput command={command} />;
}
