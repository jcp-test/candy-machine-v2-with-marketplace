import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { CandyShopDataValidator } from "@liqnft/candy-shop";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolflareWebWallet,
  getSolletWallet,
  getSolletExtensionWallet,
  getSolongWallet,
  getLedgerWallet,
  getSafePalWallet,
} from "@solana/wallet-adapter-wallets";

import TopNav from "./components/TopNav";
import { CurrencyProvider } from "./components/Currency";
// import Home from "./views/Home";
import Marketplace from "./views/Marketplace";
import CustomTokenMarketplace from "./views/CustomTokenMarketplace";
import MarketplaceWithFilter from "./views/MarketplaceWithFilter";
import MarketplaceWithUrl from "./views/MarketplaceWithUrl";
import MultiCurrencyMarketplace from "./views/MultiCurrencyMarketplace";
import MultiCurrencySell from "./views/MultiCurrencySell";
import MyCollection from "./views/MyCollection";
import SingleOrder from "./views/SingleOrder";
import { RouteName } from "./constant/routeNames";
import HomePage from "./views/HomePage";
import ClaimQubes from "./views/ClaimQubes";
import Footer from "./components/Footer";
import StructuralLegaciesFilter from "./views/FilterStructuralLegacies";
import HomeDesignFilter from "./views/FilterHomeDesign";
import SystemArchitectureFilter from "./views/FilterSystemArchitecture";
import ProductsFilter from "./views/FilterProducts";
import Fetch from "./views/Fetch";
import Auction from "./views/Auction";
require("@solana/wallet-adapter-react-ui/styles.css");

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

// Used for a multi-currency shop
const currencyOptions = [
  {
    currencySymbol: "SOL",
    treasuryMint: "So11111111111111111111111111111111111111112",
    currencyDecimals: 9,
    priceDecimals: 3,
    volumeDecimals: 1,
  },
  {
    currencySymbol: "56p",
    treasuryMint: "56pdaHboK66cxRLkzkYVvFSAjfoNEETJUsrdmAYaTXMJ",
    currencyDecimals: 9,
    priceDecimals: 2,
    volumeDecimals: 1,
  },
];

const App = () => {
  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getSolflareWebWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
      getSolongWallet(),
      getLedgerWallet(),
      getSafePalWallet(),
    ],
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={rpcHost}>
        <WalletProvider wallets={wallets} autoConnect={true}>
          <CurrencyProvider currencyOptions={currencyOptions}>
            <WalletModalProvider>
              <CandyShopDataValidator>
                <main>
                  <MainContainer>
                    <Routes>
                      <Route
                        path={RouteName.HomePage}
                        element={
                          <>
                            <TopNav />
                            <HomePage />
                          </>
                        }
                      />
                       <Route
                        path={RouteName.StructuralLegaciesFilter}
                        element={
                          <>
                            <TopNav />
                            <StructuralLegaciesFilter />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.MarketplaceWithFilter}
                        element={
                          <>
                            <TopNav />
                            <MarketplaceWithFilter />
                          </>
                        }
                      />

                      <Route
                        path={RouteName.MyCollection}
                        element={
                          <>
                            <TopNav />
                            <Fetch />
                          </>
                        }
                      />

                      <Route
                        path={RouteName.SystemArchitectureFilter}
                        element={
                          <>
                            <TopNav />
                            <SystemArchitectureFilter />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.HomeDesignFilter}
                        element={
                          <>
                            <TopNav />
                            <HomeDesignFilter />
                          </>
                        }
                      />

                      <Route
                        path={RouteName.ProductsFilter}
                        element={
                          <>
                            <TopNav />
                            <ProductsFilter />
                          </>
                        }
                      />

                      <Route
                        path={RouteName.ClaimQubes}
                        element={
                          <>
                            <TopNav />
                            <ClaimQubes />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.sell}
                        element={
                          <>
                            <TopNav />
                            <MyCollection />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.customToken}
                        element={
                          <>
                            <TopNav />
                            <CustomTokenMarketplace />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.multipleCollection}
                        element={
                          <>
                            <TopNav />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.marketplaceWithUrl}
                        element={
                          <>
                            <TopNav />
                            <MarketplaceWithUrl />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.multipleCurrencyMarketplace}
                        element={
                          <>
                            <TopNav showCurrencyToggle={true} />
                            <MultiCurrencyMarketplace />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.multipleCurrencySell}
                        element={
                          <>
                            <TopNav showCurrencyToggle={true} />
                            <MultiCurrencySell />
                          </>
                        }
                      />
                      <Route
                        path={RouteName.auction}
                        element={
                          <>
                            <TopNav showCurrencyToggle={true} />
                            <Auction />
                          </>
                        }
                      />
                    </Routes>
                  </MainContainer>
                </main>
              </CandyShopDataValidator>
              <Footer />
            </WalletModalProvider>
          </CurrencyProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  justify-content: center;
`;

export default App;
