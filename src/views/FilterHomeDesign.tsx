import { Orders, Stat } from "@liqnft/candy-shop";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { candyShop } from "../utils/candy-shop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HomeDesignFilter: React.FC = () => {
  const wallet = useAnchorWallet();

  return (
    <>
      <nav className="candy-orders-filter menu text-uppercase pb-3 pt-3">
        <li>
          <NavLink to="/structural-legacies">Structural Legacies</NavLink>
        </li>
        <li>
          <NavLink to="/home-designs" className="active">
            Home Designs
          </NavLink>
        </li>
        <li>
          <NavLink to="/system-architecture">SYSTEM ARCHITECTURE</NavLink>
        </li>
        <li>
          <NavLink to="/products">PRODUCTS</NavLink>
        </li>
      </nav>
      <DesContainer>
        <Stat
          candyShop={candyShop}
          title={""}
          description={""}
          style={{ paddingBottom: 50 }}
        />
        <Orders
          wallet={wallet}
          candyShop={candyShop}
          walletConnectComponent={<WalletMultiButton />}
          filters={FILTERS}
        />
      </DesContainer>
    </>
  );
};

export default HomeDesignFilter;

const FILTERS = [
  {
    name: "Highlighted Projects",
    collectionId: "1",
    identifier: 1462698944,
    qubeClaims: "",
    description:
      "YOU CAN PLACE VARIOUS HOME DESIGNS HERE THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
  },
  {
    name: "Community Projects",
    collectionId: "2",
    identifier: -16541584,
    qubeClaims: "",
    description:
      "YOU CAN PLACE VARIOUS HOME DESIGNS HERE THAT FIT SYSTEM ARCHITECTURE BOTTOMS-UP APPROACHES.",
  },
];

const DesContainer = styled.div`
  width: 100%;

  .candy-filter {
    color: #fff;

    li:hover {
      color: #7522f5;
    }

    .candy-search input {
      padding: 10px 4px 10px 24px;
      width: 100%;
    }
  }
`;
