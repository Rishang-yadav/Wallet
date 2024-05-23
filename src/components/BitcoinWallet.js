"use client";
import React from "react";
import { ConnectMultiButton } from "bitcoin-wallet-adapter";
import InnerMenu from "../components/InnerMenu";

const BitcoinWallet = () => {
  return (
    <div>
      <ConnectMultiButton
        walletImageClass="w-[60px]"
        walletLabelClass="pl-3 font-bold text-xl"
        walletItemClass="border w-full md:w-6/12 cursor-pointer border-transparent rounded-xl mb-4 hover:border-green-500 transition-all"
        headingClass="text-green-700 text-4xl pb-12 font-bold text-center"
        buttonClassname="bg-green-300 hover:bg-green-400 rounded-xl flex items-center text-green-800 px-4 py-1 font-bold"
        InnerMenu={InnerMenu } // component to show a menu when wallet is connected
        icon=""
        iconClass=""
        balance={1000}
      />
      

      {/* <ConnectMultiButton
        walletImageClass="w-[60px]"
        walletLabelClass="pl-3 font-bold text-xl"
        walletItemClass="border w-full md:w-6/12 cursor-pointer border-transparent rounded-xl mb-4 hover:border-green-500 transition-all"
        headingClass="text-green-700 text-4xl pb-12 font-bold text-center"
        buttonClassname="bg-green-300 hover:bg-green-400 rounded-xl flex items-center text-green-800 px-4 py-1 font-bold"
        icon=""
        iconClass=""
        balance={1000}
      >
        <InnerMenu /> 
      </ConnectMultiButton> */}
    </div>
  );
};

export default BitcoinWallet;
