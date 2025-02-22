import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '@rainbow-me/rainbowkit/styles.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import { MantineProvider } from '@mantine/core';

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
  connectorsForWallets,
  wallet,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: process.env.GOERLI_ALCHEMY_ID }), publicProvider()]
);

const { wallets } = getDefaultWallets({
  appName: 'DeVo',
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [wallet.argent({ chains }), wallet.trust({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

/// wrapping component with our layout from Layout.tsx
/// in between is the children from Layout.tsx
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={lightTheme({
            accentColor: '#fd519c',
            accentColorForeground: 'white',
          })}
        >
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </MantineProvider>
  );
}

export default MyApp;
