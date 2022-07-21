import React from 'react';
import './style.less';

interface AuctionNftHeaderProps {
  name?: string;
  imgUrl: string;
  ticker?: string;
  edition?: string | number;
  description?: string;
}

export const AuctionDetails: React.FC<AuctionNftHeaderProps> = ({ name, imgUrl, ticker, edition, description}) => {
  return (
    <div className="candy-auction-nft-header d-block">
      <img src={imgUrl} alt={name} className="nftAuctionImg" />
      <div>
        <div className="candy-auction-nft-header-name">
          {name}
          {edition && ` #${edition}`}
        </div>
        <div className="candy-auction-nft-header-ticker">{ticker}</div>
        <p>{description}</p>
      </div>
    </div>
  );
};
