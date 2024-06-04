"use client";

import {
  Box,
  Button,
  Card as CardMui,
  IconButton,
  Skeleton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Image from "next/image";
import { ReactNode } from "react";

import { AlienIcon } from "../icons/RickAndMorty/Alien";
import { PlanetIcon } from "../icons/RickAndMorty/Planet";
import { PulseIcon } from "../icons/RickAndMorty/Pulse";
import { SkullIcon } from "../icons/RickAndMorty/Skull";
import { HeartIcon } from "../icons/RickAndMorty/Heart";
import { useStoreFavorites } from "@/shared/store/favorites";
import Link from "next/link";

export interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
  location: Location;
  origin: Location;
}

interface Location {
  name: string;
  dimension: string;
}

export const CharacterCard = ({
  id,
  name,
  image,
  status,
  gender,
  location,
  origin,
  species,
}: CharacterCardProps): JSX.Element => {
  const isAlive = status?.toLowerCase() === "alive";
  const { getFavorite, toggleFavorite } = useStoreFavorites();
  const isFavorite = getFavorite(id);

  return (
    <CardContainer>
      <CardContainerImg>
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          layout="responsive"
        />
      </CardContainerImg>
      <Stack gap={"15px"} position={"relative"}>
        <Box position={"absolute"} top="0px" right={"0px"}>
          <IconButton onClick={() => toggleFavorite({ id })}>
            <HeartIcon selected={!!isFavorite} />
          </IconButton>
        </Box>

        <Title maxWidth={"200px"} width={"100%"}>
          {name}
        </Title>
        <Box>
          <ContainerText>
            {isAlive ? <PulseIcon /> : <SkullIcon />}
            <Text>{status}</Text>
          </ContainerText>
          <ContainerText>
            <AlienIcon />
            <Text>{species}</Text>
          </ContainerText>
          <ContainerText>
            <PlanetIcon />
            <Text>{origin.name}</Text>
          </ContainerText>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={"10px"}
        >
          <Link href={`/character/${id}`}>
            <Button
              size="small"
              sx={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
                padding: "4px 10px",
                color: ({ palette }) => palette.text.primary,
                borderRadius: "32px",
                fontWeight: 400,
                fontSize: "14px",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: ({ palette }) => palette.primary.dark,
                },
              }}
            >
              <InfoIcon />
              <Typography
                sx={{
                  color: ({ palette }) => palette.text.primary,
                  fontWeight: 700,
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                More info
              </Typography>
            </Button>
          </Link>
        </Box>
      </Stack>
    </CardContainer>
  );
};

const CardContainer = styled(CardMui)({
  borderRadius: "15px",
  width: "294px",
  height: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "16px",
});

const CardContainerImg = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "262px",
        height: "200px",
        img: {
          borderRadius: "16px",
          width: "100%",
          height: "auto",
        },
      }}
    >
      {children}
    </Box>
  );
};

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 700,
  color: theme.palette.text.primary,
  margin: "0",
  padding: "0",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: theme.palette.text.primary,
  margin: "0",
  padding: "0",
}));

const ContainerText = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});
