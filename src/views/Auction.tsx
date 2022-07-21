import { CandyShop } from "@liqnft/candy-shop-sdk";
// import { Sell } from "@liqnft/candy-shop";
import { UserCollection } from "../public/MyCollection";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useCurrency } from "../components/Currency";
import styled from "styled-components";
import { useMemo } from "react";
import {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
} from "../utils/candy-shop";
import { Auctions } from "@liqnft/candy-shop";
import { CreateAuction } from "../public/Auction";

const DesContainer = styled.div`
  width: 100%;

  .wallet-adapter-button {
    margin: 0 auto;
  }
`;

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
      {/* <UserCollection
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        enableCacheNFT={true}
      /> */}
      <CreateAuction
        candyShop={candyShop}
        wallet={wallet}
        walletConnectComponent={<WalletMultiButton />}
        cacheUserNFT={true}
      />
      {/* <Auctions
        candyShop={candyShop}
        wallet={wallet}
        walletConnectComponent={<WalletMultiButton />}
      /> */}
    </DesContainer>
  );
};

export default Auction;
