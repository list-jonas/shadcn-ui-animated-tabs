"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export default function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Copied to clipboard");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Copy command"
      className={cn(
        "absolute top-1/2 right-1.5 -translate-y-1/2 p-2 rounded-md size-8",
        className
      )}
      onClick={handleCopy}
    >
      {copied ? <Check size={16} /> : <Clipboard size={16} />}
    </Button>
  );
}
