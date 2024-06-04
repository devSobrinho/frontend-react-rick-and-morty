"use client";

import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import { LogoIcon } from "../icons/RickAndMorty/Logo";
import Link from "next/link";

export const Footer = (): JSX.Element => {
  return (
    <Stack
      component={"footer"}
      sx={{
        backgroundColor: ({ palette }) => palette.background.default,
        display: "flex",
        justifyContent: "center",
        pt: "80px",
      }}
    >
      <Box margin={"0 auto"} maxWidth={"1440px"} width={"100%"}>
        <Box mb={"79px"}>
          <LogoIcon />
        </Box>
        <Divider />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"10px"}
          flexWrap={"wrap"}
          mt={"27px"}
          mb={"30px"}
        >
          <Box
            sx={{
              mt: "30px",
              mb: "20px",
              textAlign: "center",
              color: ({ palette }) => palette.text.primary,
            }}
          >
            © {new Date().getFullYear()}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FooterIcon />
            <Typography
              variant={"caption"}
              sx={{
                color: ({ palette }) => palette.text.primary,
              }}
            >
              Developed by
            </Typography>
            <Link href={"https://github.com/devSobrinho"}>
              <Typography
                component={"strong"}
                sx={{
                  color: ({ palette }) => palette.primary.main,
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Daniel Sobrinho
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

const FooterIcon = () => {
  const { palette } = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke={palette.primary.main}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m16 18 6-6-6-6M8 6l-6 6 6 6"
      />
    </svg>
  );
};
