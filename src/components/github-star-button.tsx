"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface GitHubStarButtonProps {
  className?: string;
}

const REPO_OWNER = "list-jonas";
const REPO_NAME = "shadcn-ui-animated-tabs";

export function GitHubStarButton({ className }: GitHubStarButtonProps) {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setStarCount(data.stargazers_count);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch star count:", err);
        setError("Failed to load star count");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStarCount();
  }, []);

  return (
    <Button
      variant="outline"
      className={className}
      asChild
      aria-label="Star this repository on GitHub"
    >
      <Link
        href={`https://github.com/${REPO_OWNER}/${REPO_NAME}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <Star className="h-4 w-4 text-yellow-600 dark:text-yellow-500" />
        {isLoading ? (
          <span>Loading...</span>
        ) : error ? (
          <span>Star</span>
        ) : (
          <span>{starCount !== null && starCount} Star</span>
        )}
      </Link>
    </Button>
  );
}
