import React from "react";
import { useWalletAddress } from "bitcoin-wallet-adapter";
import { IoWallet } from "react-icons/io5";
import image from "../assets/bitcoin-btc-logo.png";


const InnerMenu = ({ anchorEl, open, onClose, disconnect }) => {
  const walletDetails = useWalletAddress();
  console.log("wallet",walletDetails)
  const{address,balance} = walletDetails


  return (
    <div className="p-6  min-w-[100px] max-w-[600px] max-h-[400px] ">
      <div className="bg-gray-900 flex flex-wrap min-h-screen text-white border-indigo-600">
        <div className=" p-6 rounded-lg w-80">
          <div className="flex flex-wrap items-center mb-4">
            <div className="uppercase font-bold text-sm flex gap-1">
              <IoWallet />
              <span>{walletDetails.cardinal_address}</span>
            </div>
          </div>
          {
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <img
                src={image}
                alt="BTC Wallet"
                className="w-4 h-4 mr-2"
              />
                <div>
                  <p className="text-sm">BTC Wallet</p>
                  <p className="text-xs text-gray-400">{walletDetails.cardinal_address}</p>
                  <p className="text-sm">{balance} BTC</p>
                  <p className="text-xs text-gray-400">0.00 USD</p>
                </div>
              </div>
            </div>
          }
          <div className="mb-6">
            <div className="flex items-center">
              {/* <img
                src="ordinals-icon.png"
                alt="Ordinals Wallet"
                className="w-4 h-4 mr-2"
              /> */}
              <div>
                <p className="text-sm">Ordinals Wallet</p>
                <p className="text-xs text-gray-400">{walletDetails.ordinal_address}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded justify-center">
              Disconnect
            </button>
          </div>
          <div className="mt-4 flex justify-center">
            {/* <button className="bg-transparent">
              <img src="extra-icon.png" alt="Extra" className="w-6 h-6" />
            </button> */}
          </div>
        </div>

        {/* <div>{JSON.stringify(walletDetails)}</div> */}
      </div>
    </div>
  );
};

export default InnerMenu;
