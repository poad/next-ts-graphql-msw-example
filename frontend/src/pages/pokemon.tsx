import { gql, useQuery } from '@apollo/client';
import { QueryPokemonListQuery } from '../gql/graphql';

const QUERY = gql`
  query QueryPokemonList {
    list {
      id
      name
      visual
    }
  }
`;

const Pokemons = (): JSX.Element => {
  const { data, loading, error } = useQuery<QueryPokemonListQuery>(QUERY);

  if (loading) {
    return <>loading...</>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  return (
    <table>
      <tbody>
        {data?.list.map((pokemon) => (
          <tr key={`${pokemon.id}`}>
            <td key={`${pokemon.id}-name`}>{pokemon.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Pokemons;
