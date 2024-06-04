import { create } from "zustand";
import * as lodash from "lodash";

type FavoritesStore = {
  favorites: { id: string }[];
  addFavorite: (newFavorite: { id: string }) => void;
  getFavorite: (id: string) => { id: string } | undefined;
  removeFavorite: (id: string) => void;
  toggleFavorite: (newFavorite: { id: string }) => void;
};

export const useStoreFavorites = create<FavoritesStore>((set, get) => ({
  favorites: [],
  addFavorite: (newFavorite) => {
    const uniq = lodash.uniqBy([...get().favorites, newFavorite], "id");
    set({ favorites: uniq });
  },
  getFavorite: (id: string) =>
    get().favorites.find((favorite) => favorite.id === id),
  removeFavorite: (id: string) => {
    const filtered = get().favorites.filter((favorite) => favorite.id !== id);
    set({ favorites: filtered });
  },
  toggleFavorite: (newFavorite) => {
    const isFavorite = get().favorites.find(
      (favorite) => favorite.id === newFavorite.id
    );

    if (isFavorite) {
      get().removeFavorite(newFavorite.id);
    } else {
      get().addFavorite(newFavorite);
    }
  },
}));
