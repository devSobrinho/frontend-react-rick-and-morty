"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "../services/index";
import { ThemeProvider } from "./ThemeProvider";

export type AllProviderProps = {
  children: React.ReactNode;
};

export const AllProvider = ({ children }: AllProviderProps): JSX.Element => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider>{children}</ThemeProvider>
      </ApolloProvider>
    </>
  );
};
