import { graphql } from "msw";
import { QueryPokemonListDocument } from "../gql/graphql";

export const handlers = [
  graphql.query(QueryPokemonListDocument, (_, res, ctx) => {
    return res(
      ctx.data({
        list: [
          {
            id: "0001",
            name: "フシギダネ",
          },
        ],
      }),
    );
  }),
];
