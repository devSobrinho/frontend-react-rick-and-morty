"use client";

import { ButtonFilter } from "@/shared/components/Button/ButtonFilter";
import { MonitorIcon } from "@/shared/components/icons/RickAndMorty/Monitor";
import { PlanetIcon } from "@/shared/components/icons/RickAndMorty/Planet";
import { SmileyIcon } from "@/shared/components/icons/RickAndMorty/Smiley";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { CharacterFilterTemplate } from "./CharacterFilter";

export const HomeTemplate = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [filterSelected, setFilterSelected] = useState<
    "characters" | "episode" | "location"
  >("characters");

  const handleChangeSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
  };

  return (
    <Box maxWidth={"1300px"} margin={"0 auto"}>
      <Box
        sx={{
          background: ({ palette }) => palette.background.default,
          borderRadius: "15px",
          mb: "36px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextField
          size={"small"}
          value={search}
          onChange={handleChangeSearch}
          placeholder={
            filterSelected.charAt(0).toUpperCase() + filterSelected.slice(1)
          }
          sx={{ width: "100%", maxWidth: "300px", minWidth: "250px" }}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />
        <Box display={"flex"} gap={"10px"} p={"20px"} alignItems={"center"}>
          <Typography
            align="center"
            sx={{
              color: ({ palette }) => palette.text.primary,
              fontWeight: 400,
              fontSize: "16px",
            }}
          >
            Filter by:
          </Typography>
          <ButtonFilter
            text={"characters"}
            selected={filterSelected}
            setSelected={setFilterSelected}
            icon={<SmileyIcon />}
          />
          <ButtonFilter
            text={"episode"}
            selected={filterSelected}
            setSelected={setFilterSelected}
            icon={<PlanetIcon />}
          />
          <ButtonFilter
            text={"location"}
            selected={filterSelected}
            setSelected={setFilterSelected}
            icon={<MonitorIcon />}
          />
        </Box>
      </Box>

      {filterSelected === "characters" && (
        <CharacterFilterTemplate name={search} />
      )}
    </Box>
  );
};
