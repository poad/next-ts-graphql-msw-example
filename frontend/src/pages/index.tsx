import { gql, useQuery } from "@apollo/client";
import { QueryPokemonListQuery } from "../gql/graphql";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const QUERY = gql`
  query QueryPokemonList {
    list {
      id
      name
      visual
    }
  }
`;

function Pokemons(): JSX.Element {
  const { data, loading, error } = useQuery<QueryPokemonListQuery>(QUERY);

  if (loading) {
    return <>loading...</>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  return (
    <main className={styles.main} style={{ minHeight: "100vh" }}>
      {data?.list.map((pokemon) => (
        <div key={`${pokemon.id}`} className={styles.grid}>
          <p key={`${pokemon.id}-name`} className={inter.className}>
            {pokemon.name}
          </p>
        </div>
      ))}
    </main>
  );
}

export default Pokemons;
