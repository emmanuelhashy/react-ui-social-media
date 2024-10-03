import React from 'react';
import Sortable from 'sortablejs';
import { formatPrice } from '../../utils';

const cryptosData = [
  {
    id: 1,
    name: "BTC",
    companyName: "Bitcoin",
    price: 62160.61,
    change: "+4.07",
    image: "https://res.coinpaper.com/coinpaper/bitcoin_btc_logo_62c59b827e.png"
  },
  {
    id: 2,
    name: "ETH",
    companyName: "Ethereum",
    price: 2160.61,
    change: "-1.07",
    image: "https://res.coinpaper.com/coinpaper/ethereum_eth_logo_e69b1c2368.png"
  },
  {
    id: 3,
    name: "BNB",
    companyName: "Binance",
    price: 560.61,
    change: "+4.07",
    image: "https://res.coinpaper.com/coinpaper/bnb_bnb_logo_a2a64c3335.png"
  },
  {
    id: 4,
    name: "FLX",
    companyName: "Flux",
    price: 0.61,
    change: "-2.07",
    image: "https://res.coinpaper.com/coinpaper/flux_flux_logo_834e24f6c9.png"
  },
  {
    id: 5,
    name: "USDT",
    companyName: "Usdt",
    price: 1,
    change: "+0.9",
    image: "https://res.coinpaper.com/coinpaper/tether_usdt_logo_0231fbcde8.png"
  },
];

const CryptoWatchlist = () => {
  React.useEffect(() => {
    const dragAndDropItems = document.getElementById("cryptos");
    new Sortable(dragAndDropItems, {
      animation: 350,
      chosenClass: "crypto-chosen",
      dragClass: "crypto-drag",
    });
  }, []);

  return (
    <section className="crypto-watchlist-container p-6 max-w-md w-full bg-white rounded-xl shadow-md mx-auto">
      <h2 className="text-xl font-semibold text-center mb-6 text-gray-700">
        My Crypto Watchlist
      </h2>

      <div id="cryptos" className="flex flex-col gap-4">
        {cryptosData.map(crypto => (
          <article
            key={crypto.id}
            className="crypto-row relative z-1 flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:cursor-grab"
          >
            <img
              src={crypto.image}
              alt={crypto.name}
              className="crypto-avatar w-14 h-14 object-cover rounded-full"
            />
            <div className="crypto-name grid gap-1">
              <h3 className="text-lg font-medium">{crypto.name}</h3>
              <p className="text-sm text-gray-500">{crypto.companyName}</p>
            </div>
            <div className="crypto-info ml-auto flex flex-col items-center gap-1">
              <p className={`price font-bold ${crypto.change.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                {formatPrice(crypto.price)}
              </p>
              <p
                className={`change px-2 py-1 text-white text-xs font-semibold rounded-md ${
                  crypto.change.startsWith('-') ? 'bg-red-500' : 'bg-green-500'
                }`}
              >
                {crypto.change}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CryptoWatchlist;
