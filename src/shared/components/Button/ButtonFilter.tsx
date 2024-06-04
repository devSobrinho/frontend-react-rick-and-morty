"use client";

import { Button } from "@mui/material";
import { ChangeEvent, ReactNode, useState } from "react";

type ButtonFilterProps = {
  text: "characters" | "episode" | "location";
  selected: string;
  setSelected: (value: "characters" | "episode" | "location") => void;
  icon?: ReactNode;
};

export const ButtonFilter = ({
  text,
  selected,
  setSelected,
  icon,
}: ButtonFilterProps) => {
  const isSelected = selected === text;
  return (
    <Button
      variant={"contained"}
      onClick={() => setSelected(text)}
      size="small"
      sx={{
        backgroundColor: ({ palette }) => palette.primary.main,
        color: ({ palette }) => palette.text.primary,
        borderRadius: "32px",
        padding: "4px",
        px: "10px",
        minWidth: "120px",
        fontWeight: 400,
        fontSize: "14px",
        textTransform: "capitalize",
        ...(!isSelected && {
          backgroundColor: ({ palette }) => palette.background.default,
          boxShadow: "none",
        }),
      }}
      startIcon={icon}
    >
      {text}
    </Button>
  );
};
