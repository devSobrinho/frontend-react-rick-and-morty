"use client";

import { useThemeContext } from "@/shared/contexts/ThemeProvider";
import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const SwitchMode = (): JSX.Element => {
  const { config, toggleMode } = useThemeContext();

  return (
    <Box position={"fixed"} top={"10px"} right={"10px"}>
      <IconButton onClick={toggleMode}>
        {config?.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  );
};
