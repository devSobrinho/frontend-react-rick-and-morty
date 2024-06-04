"use client";

import { useThemeContext } from "@/shared/contexts/ThemeProvider";
import * as React from "react";
import { SVGProps } from "react";

export const PlanetIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.32 3.792c-.479-.824-1.74-1.01-3.657-.54A5.995 5.995 0 0 0 2.05 8.768C.319 10.562.343 11.625.68 12.207 1 12.76 1.665 13 2.54 13a7.75 7.75 0 0 0 1.8-.25 5.996 5.996 0 0 0 9.612-5.516c.781-.812 1.301-1.584 1.478-2.245.122-.457.085-.86-.11-1.197ZM8 3a5.007 5.007 0 0 1 4.875 3.887c-1.066 1.004-2.51 2.034-3.88 2.821-1.721.988-3.215 1.604-4.406 1.942A4.996 4.996 0 0 1 8 3Zm-6.454 8.706c-.091-.157-.04-.453.139-.813a4.94 4.94 0 0 1 .643-.94c.248.717.63 1.382 1.125 1.957-1.078.181-1.75.066-1.907-.204ZM8 13a4.965 4.965 0 0 1-2.41-.621 23.125 23.125 0 0 0 3.902-1.804c1.349-.774 2.542-1.614 3.504-2.443A5.004 5.004 0 0 1 8 13Zm6.464-8.27c-.107.395-.387.846-.79 1.321a5.982 5.982 0 0 0-1.125-1.96c.889-.146 1.711-.135 1.907.203.056.098.059.245.008.437Z"
      />
    </svg>
  );
};
