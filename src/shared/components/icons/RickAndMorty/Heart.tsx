"use client";

import { useTheme } from "@mui/material";
import * as React from "react";
import { SVGProps } from "react";

export const HeartIcon = (
  props: SVGProps<SVGSVGElement> & { selected?: boolean }
) => {
  const { palette } = useTheme();

  if (!props.selected)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
      >
        <path
          fill={palette.primary.main}
          d="M22.25 4C19.669 4 17.409 5.11 16 6.986 14.591 5.11 12.331 4 9.75 4A7.759 7.759 0 0 0 2 11.75c0 8.75 12.974 15.832 13.526 16.125a1 1 0 0 0 .948 0C17.026 27.582 30 20.5 30 11.75A7.759 7.759 0 0 0 22.25 4ZM16 25.85c-2.283-1.33-12-7.389-12-14.1A5.757 5.757 0 0 1 9.75 6c2.431 0 4.473 1.295 5.325 3.375a1 1 0 0 0 1.85 0C17.777 7.291 19.819 6 22.25 6A5.757 5.757 0 0 1 28 11.75c0 6.701-9.72 12.769-12 14.1Z"
        />
      </svg>
    );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      {...props}
    >
      <path
        fill={palette.primary.main}
        d="M30 11.75c0 8.75-12.974 15.832-13.526 16.125a1 1 0 0 1-.948 0C14.974 27.582 2 20.5 2 11.75A7.759 7.759 0 0 1 9.75 4c2.581 0 4.841 1.11 6.25 2.986C17.409 5.11 19.669 4 22.25 4A7.759 7.759 0 0 1 30 11.75Z"
      />
    </svg>
  );
};
