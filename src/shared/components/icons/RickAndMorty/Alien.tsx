"use client";

import { useThemeContext } from "@/shared/contexts/ThemeProvider";
import * as React from "react";
import { SVGProps } from "react";

export const AlienIcon = (props: SVGProps<SVGSVGElement>) => {
  const { config } = useThemeContext();
  const isDarkMode = config?.mode === "dark";
  const fill = isDarkMode ? "#FFFFFF" : "#313234";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <path
        fill={fill}
        d="M8 1a6.007 6.007 0 0 0-6 6c0 1.5.785 3.441 2.1 5.188C5.425 13.947 6.883 15 8 15c1.118 0 2.576-1.05 3.9-2.813C13.214 10.438 14 8.5 14 7a6.006 6.006 0 0 0-6-6Zm3.1 10.589C10.016 13.03 8.77 14 8 14s-2.015-.97-3.1-2.411C3.727 10.03 3 8.273 3 7a5 5 0 1 1 10 0c0 1.273-.728 3.031-1.9 4.589ZM7.5 8.5A2.5 2.5 0 0 0 5 6a1 1 0 0 0-1 1 2.5 2.5 0 0 0 2.5 2.5 1 1 0 0 0 1-1ZM5 7a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 5 7Zm6-1a2.5 2.5 0 0 0-2.5 2.5 1 1 0 0 0 1 1A2.5 2.5 0 0 0 12 7a1 1 0 0 0-1-1ZM9.5 8.5A1.5 1.5 0 0 1 11 7a1.5 1.5 0 0 1-1.5 1.5Zm0 3a.5.5 0 0 1-.5.5H7a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5Z"
      />
    </svg>
  );
};
