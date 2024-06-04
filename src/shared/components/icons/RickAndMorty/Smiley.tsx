"use client";

import { useThemeContext } from "@/shared/contexts/ThemeProvider";
import * as React from "react";
import { SVGProps } from "react";

export const SmileyIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.75 6.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm0 2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm4.5-2.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Zm0 2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM8 1C4.416 1 1.5 3.804 1.5 7.25c0 2.131 1.142 4.125 3 5.268v.982a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-.982c1.858-1.143 3-3.137 3-5.268C14.5 3.804 11.584 1 8 1Zm2.758 10.793a.5.5 0 0 0-.258.438V13.5h-1V12a.5.5 0 0 0-1 0v1.5h-1V12a.5.5 0 0 0-1 0v1.5h-1v-1.27a.5.5 0 0 0-.258-.437C3.551 10.856 2.5 9.115 2.5 7.25 2.5 4.355 4.968 2 8 2c3.033 0 5.5 2.355 5.5 5.25 0 1.864-1.05 3.606-2.742 4.543Z"
      />
    </svg>
  );
};
