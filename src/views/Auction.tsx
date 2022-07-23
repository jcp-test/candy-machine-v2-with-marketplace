// import { Sell } from "@liqnft/candy-shop";
// import { Sell } from "../public/Sell";
import { AuctionTest } from "../public/AuctionTest";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { CandyShop } from "@liqnft/candy-shop-sdk";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import { PublicKey } from "@solana/web3.js";
import { useCurrency } from "../components/Currency";
import { useMemo } from "react";
import {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
} from "../utils/candy-shop";
import styled from "styled-components";

const Auction: React.FC = () => {
  const wallet = useAnchorWallet();
  const { getCurrencySettings } = useCurrency();
  const settings = getCurrencySettings();

  const candyShop = useMemo(
    () =>
      new CandyShop({
        candyShopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
        treasuryMint: new PublicKey(settings.treasuryMint),
        candyShopProgramId: CANDY_SHOP_PROGRAM_ID,
        env: NETWORK,
        settings,
      }),
    [settings]
  );

  if (!candyShop) {
    return <></>;
  }
  return (
    <DesContainer>
      <h1 style={{ marginBottom: 30 }}>My Collection</h1>
      <AuctionTest
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        enableCacheNFT={true}
      />
    </DesContainer>
  );
};

export default Auction;

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
  }
`;
