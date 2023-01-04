import { Grid } from '@nextui-org/react';
import { GetStaticProps } from 'next';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

export default function HomePage(props: Props) {
  return (
    <Layout title='Pokémon list'>
      <Grid.Container gap={2} justify='flex-start'>
        {props.pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        ))}
      </Grid.Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
