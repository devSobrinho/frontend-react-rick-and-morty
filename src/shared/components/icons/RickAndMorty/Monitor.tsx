"use client";

import { useThemeContext } from "@/shared/contexts/ThemeProvider";
import * as React from "react";
import { SVGProps } from "react";

export const MonitorIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13 2.5H3A1.5 1.5 0 0 0 1.5 4v7A1.5 1.5 0 0 0 3 12.5h10a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 13 2.5Zm.5 8.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v7Zm-3 3a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5Zm-.223-6.916-3-2A.5.5 0 0 0 6.5 5.5v4a.5.5 0 0 0 .777.416l3-2a.5.5 0 0 0 0-.832ZM7.5 8.566V6.437L9.099 7.5 7.5 8.566Z"
      />
    </svg>
  );
};
