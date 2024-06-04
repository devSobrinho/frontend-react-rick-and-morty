"use client";

import { Box } from "@mui/material";

export type ContainerMainProps = {
  children: React.ReactNode;
};

export const ContainerMain = ({
  children,
}: ContainerMainProps): JSX.Element => {
  return (
    <Box
      component={"main"}
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        minHeight: "calc(100vh - 345px)",
      }}
    >
      {children}
    </Box>
  );
};
