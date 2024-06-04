"use client";

import { useThemeContext } from "@/shared/contexts/ThemeProvider";
import * as React from "react";
import { SVGProps } from "react";

export const PulseIcon = (props: SVGProps<SVGSVGElement>) => {
  const { config } = useThemeContext();
  const isDarkMode = config?.mode === "dark";
  const fill = isDarkMode ? "#BFDE42" : "#313234";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      {...props}
    >
      <path
        fill="#BFDE42"
        d="M15 8a.5.5 0 0 1-.5.5h-1.691l-2.361 4.724A.501.501 0 0 1 10 13.5h-.025a.5.5 0 0 1-.442-.321L5.959 3.798 3.955 8.207A.5.5 0 0 1 3.5 8.5h-2a.5.5 0 1 1 0-1h1.678l2.367-5.207a.5.5 0 0 1 .923.029l3.594 9.437 1.99-3.981A.5.5 0 0 1 12.5 7.5h2a.5.5 0 0 1 .5.5Z"
      />
    </svg>
  );
};
