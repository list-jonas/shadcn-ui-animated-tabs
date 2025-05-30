import CopyCLICommand from "@/components/copy-cli-command";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function InstallationSection() {
  const codeUrl =
    "https://github.com/list-jonas/shadcn-ui-animated-tabs/blob/main/registry/animated-tabs/animated-tabs.tsx";
  const codeUrlLegacy =
    "https://github.com/list-jonas/shadcn-ui-animated-tabs/blob/legacy/registry/animated-tabs/animated-tabs.tsx";

  return (
    <>
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Installation
      </h2>
      <div className="space-y-4 mb-8">
        <div>
          <p className="mb-1 text-sm font-medium">Current version:</p>
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
            <Button className="w-full sm:w-min whitespace-nowrap" asChild>
              <Link href={codeUrl}>
                <ExternalLink size={16} className="mr-2" />
                View the code
              </Link>
            </Button>
            <div className="flex-grow">
              <CopyCLICommand version="current" />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-1 text-sm font-medium">Legacy version:</p>
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
            <Button className="w-full sm:w-min whitespace-nowrap" asChild>
              <Link href={codeUrlLegacy}>
                {/* Legacy version points to the same code for now */}
                <ExternalLink size={16} className="mr-2" />
                View the code
              </Link>
            </Button>
            <div className="flex-grow">
              <CopyCLICommand version="legacy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
