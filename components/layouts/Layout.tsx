import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

interface Props {
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokémon App'}</title>
        <meta name='author' content='Nacho Martínez' />
        <meta
          name='description'
          content={`Data about pokemon XXXXX ${title}`}
        />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />

        <meta property='og:title' content={`Data about ${title}`} />
        <meta
          property='og:description'
          content={`This is the main page about ${title}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar></Navbar>

      <main
        style={{
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
