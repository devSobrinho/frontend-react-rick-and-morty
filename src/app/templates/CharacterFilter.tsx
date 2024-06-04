"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import {
  CharacterCard,
  CharacterCardProps,
} from "@/shared/components/Card/CharacterCard";
import { ContainerCharacterCards } from "@/shared/components/Card/ContainerCharacterCards";
import { GET_CHARACTERS } from "@/shared/services/graphql/queries/getCharacters";
import { useLazyQuery } from "@apollo/client";
import { Box, Pagination, Skeleton, Typography } from "@mui/material";
import * as lodash from "lodash";
import { useCallback, useEffect, useState } from "react";

type CharacterFilterTemplateProps = {
  name?: string;
};

export const CharacterFilterTemplate = ({
  name,
}: CharacterFilterTemplateProps): JSX.Element => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [lengthData, setLengthData] = useState(0);
  const [search, { data, loading }] = useLazyQuery(GET_CHARACTERS);
  const debounceSearch = useCallback(lodash.debounce(search, 200), []);

  useEffect(() => {
    search({ variables: { page: 1, filter: { name } } });
  }, []);

  useEffect(() => {
    debounceSearch({ variables: { page: 1, filter: { name: name } } });
  }, [name]);

  useEffect(() => {
    setTotalPage(Math.ceil((data?.characters?.info?.count || 0) / 20));
    if (data?.characters?.results?.length)
      setLengthData(data?.characters?.results?.length);
  }, [data]);

  return (
    <>
      <Box
        display={"flex"}
        gap={"20px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          align="center"
          sx={{
            color: ({ palette }) => palette.text.primary,
            fontWeight: 700,
            fontSize: "24px",
          }}
        >
          Characters
        </Typography>
        {!!totalPage && (
          <Pagination
            count={totalPage}
            page={page}
            onChange={(_, value) => {
              setPage(value);
              search({ variables: { page: value, filter: { name } } });
            }}
          />
        )}
      </Box>
      <ContainerCharacterCards>
        {data?.characters.results.map((character: any) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            gender={character.gender}
            species={character.species}
            location={character.location}
            origin={character.origin}
          />
        ))}
        {!data?.characters.results &&
          loading &&
          [...Array(lengthData || 20)].map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width={294}
              height={400}
              sx={{
                borderRadius: "15px",
              }}
            />
          ))}
        {!data?.characters?.results?.length && !loading && (
          <Box>
            <Typography
              align="center"
              sx={{
                color: ({ palette }) => palette.text.primary,
                fontWeight: 700,
                fontSize: "24px",
              }}
            >
              No characters found
            </Typography>
          </Box>
        )}
      </ContainerCharacterCards>
    </>
  );
};
