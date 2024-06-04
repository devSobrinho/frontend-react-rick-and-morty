"use client";

import {
  Box,
  Card as CardMui,
  styled,
  SxProps,
  Theme,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
export type CardProps = {
  id: string;
  name: string;
  color: string;
  attributes: {
    strength: number;
    intelligence: number;
    agility: number;
  }[];
};

const pp = {
  green: "grama",
  red: "fogo",
  blue: "agua",
  yellow: "eletrico",
  brown: "terra",
  purple: "venenoso",
  gray: "normal",
  white: "gelo",
  black: "noturno",
  pink: "fada",
};

export const CardPoke = ({
  id,
  name,
  color,
  attributes,
}: CardProps): JSX.Element => {
  // https://github.com/wellrccity/pokedex-html-js/blob/master/assets/img/pokemons/poke_1.gif
  const yy = pp[color as never];
  console.log(yy);
  return (
    <CardContainer>
      <Box>a</Box>
      <CardContainerImg color={color}>
        <Image
          src={
            "https://github.com/wellrccity/pokedex-html-js/blob/master/assets/img/pokemons/poke_157.gif?raw=true"
          }
          alt={name}
          width={100}
          height={100}
          layout="responsive"
        />
      </CardContainerImg>
    </CardContainer>
  );
};

const CardContainer = styled(CardMui)({
  borderRadius: "15px",
  width: "328px",
  height: "102px",
  display: "flex",
  justifyContent: "space-between",
  gap: "8px",
});

const CardContainerImg = ({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "126px",
        height: "102px",
        borderRadius: "15px",
        padding: "4px 16px",
        // background: ({ palette }) => palette.variaveis?.cores?.azul,
        img: {
          width: "auto !important",
          height: "100% !important",
        },
        bgcolor:
          palette.variaveis?.elementos[pp[color as never] as never] ||
          palette.variaveis?.elementos.normal,
      }}
    >
      {children}
    </Box>
  );
};
