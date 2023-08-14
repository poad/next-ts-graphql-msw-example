/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
  URI: any;
};

export type Pokemon = {
  __typename?: "Pokemon";
  id: Scalars["ID"];
  name: Scalars["String"];
  visual?: Maybe<Scalars["URI"]>;
};

export type Query = {
  __typename?: "Query";
  list: Array<Pokemon>;
};

export type QueryPokemonListQueryVariables = Exact<{ [key: string]: never }>;

export type QueryPokemonListQuery = {
  __typename?: "Query";
  list: Array<{
    __typename?: "Pokemon";
    id: string;
    name: string;
    visual?: any | null;
  }>;
};

export const QueryPokemonListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryPokemonList" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "list" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "visual" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryPokemonListQuery,
  QueryPokemonListQueryVariables
>;
