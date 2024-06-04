import { CharacterCardProps } from "@/shared/components/Card/CharacterCard";
import { gql, TypedDocumentNode } from "@apollo/client";

type TData = {
  characters: {
    results: CharacterCardProps[];
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    };
  };
};

type TFilter = {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
};

interface Variables {
  page: number;
  filter: Partial<TFilter>;
}

export const GET_CHARACTERS: TypedDocumentNode<TData, Variables> = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        gender
        species
        location {
          name
          dimension
        }
        origin {
          dimension
          name
        }
      }
    }
  }
`;
