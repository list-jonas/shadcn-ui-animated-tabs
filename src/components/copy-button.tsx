"use client";

import { Button } from "@/components/ui/button";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
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
      className="absolute top-0.5 right-0.5 p-2 rounded-md size-8"
      onClick={handleCopy}
    >
      {copied ? <Check size={16} /> : <Clipboard size={16} />}
    </Button>
  );
}
