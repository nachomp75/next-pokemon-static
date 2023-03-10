import { Container, Image, Text } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <Container
      css={{
        alignItems: 'center',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        justifyContent: 'center',
      }}
    >
      <Text h1>No favorites</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        alt='Default pokémon'
        width={250}
        height={250}
        css={{ opacity: 0.1 }}
      />
    </Container>
  );
};
