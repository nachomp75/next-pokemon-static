import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: theme?.colors.gray800.value,
        display: 'flex',
        justifyContent: 'start',
        padding: '0 20px',
        width: '100%',
      }}
    >
      <NextLink href='/' passHref legacyBehavior>
        <Link>
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            alt='App icon'
            width={70}
            height={70}
          />
          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer
        css={{
          flex: 1,
        }}
      />

      <NextLink href='/favorites' passHref legacyBehavior>
        <Link>
          <Text color='white'>Favorites</Text>
        </Link>
      </NextLink>
    </div>
  );
};
