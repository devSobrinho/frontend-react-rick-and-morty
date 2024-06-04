import { SVGProps } from "react";

export type IconElementProps = {
  color?: string;
  props?: SVGProps<SVGSVGElement>;
};

export const IconElement = ({
  color,
  props,
}: IconElementProps): JSX.Element => {
  if (color === "green") return <SvgElementGreen {...props} />;
  if (color === "red") return <SvgElementRed {...props} />;
  if (color === "blue") return <SvgElementBlue {...props} />;

  return <></>;
};

const SvgElementGreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={94}
    height={94}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M17.886 80.903a43.715 43.715 0 0 1-.957-.928C.28 63.325.28 36.332 16.93 19.683 33.58 3.033 86.63 1.92 86.63 1.92s7.241 61.406-9.408 78.055c-14.787 14.786-37.733 16.44-54.345 4.962l13.386-16.426 21.398-4.62-17.467-1.746 11.1-11.302 12.636-2.768-9.992-2.96 9.992-18.024-14.212 15.941-5.488-7.744 1.932 12.787-9.9 11.159-4.588-14.119v18.776L17.886 80.903Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={-3.941}
        x2={66.085}
        y1={8.709}
        y2={110.15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const SvgElementRed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={94}
    height={94}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        fillRule="evenodd"
        d="M64.671 72.593c1.162-4.247-1.093-12.977-1.093-12.977s-1.635 7.112-4.19 9.74c-2.18 2.243-4.85 3.798-8.68 4.207 3.132-1.521 5.285-4.692 5.285-8.358 0-5.145-4.243-9.316-9.477-9.316s-9.478 4.17-9.478 9.316c0 1.405.317 2.738.884 3.933-3.274-2.608-3.789-6.79-3.789-6.79s-3.656 15.178 6.417 22.318c10.073 7.14 29.806 1.002 29.806 1.002s-28.239 19.869-49.164-1.756C3.167 65.284 16.488 40.76 16.488 40.76s-.575 2.275-.575 4.916c0 2.641 1.431 4.65 1.431 4.65s4.272-9.002 7.596-12.664c3.146-3.465 7.09-6.275 10.496-8.703 2.622-1.868 4.926-3.51 6.302-5.049C49.316 15.436 44.669.001 44.669.001s8.543 7.531 10.928 17.257c.91 3.708.324 7.926-.199 11.699-.849 6.124-1.535 11.072 4.598 10.75 9.911-.518 1.299-15.798 1.299-15.798s22.481 11.816 20.802 32.482c-1.68 20.666-24.574 25.364-24.574 25.364s5.987-4.915 7.148-9.162Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={4.699}
        x2={81.466}
        y1={7.05}
        y2={97.133}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h94v94H0z" />
      </clipPath>
    </defs>
  </svg>
);

const SvgElementBlue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={94}
    height={94}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M77.508 63.619c0 16.777-13.652 30.378-30.492 30.378-16.84 0-30.493-13.6-30.493-30.378 0-16.317 28.843-61.13 30.425-63.576.036-.056.1-.056.135 0 1.582 2.445 30.425 47.259 30.425 63.576ZM41.933 84.258c-15.474-3.386-12.826-20.526-12.826-20.526s4.226 10.347 14.48 13.698c10.252 3.352 22.644-1.564 22.644-1.564s-8.825 11.777-24.298 8.392Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={10.419}
        x2={88.157}
        y1={7.05}
        y2={86.034}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
