import React from "react";
import TextImage from "./TextImage";

function BombFarms() {
  return (
    <div className="flex justify-between pt-[25px]">
      {/* left */}
      <div className="flex space-x-20 pt-2">
        <div className="flex flex-col space-y-1">
          <p>Daily Returns:</p>
          <p>2%</p>
        </div>
        {/* stake */}
        <div className="flex flex-col space-y-1">
          <p>Your Stake</p>
          <div className="flex space-x-1">
            <img src="pictextnum/bomb-bitcoin-LP.svg" alt="" />
            <p>124.21</p>
          </div>
          <p>≈ $1171.62</p>
        </div>
        {/* earned */}
        <div className="flex flex-col space-y-1">
          <p>Earned</p>
          <div className="flex space-x-1">
            <img src="summary/bshares.svg" alt="" />
            <p> 6.4413 </p>
          </div>
          <p>≈ $298.88</p>
        </div>
      </div>
      {/* right */}
      <div className="flex items-end justify-center">
        {/* 3 same elements should be made as a component */}
        <div className="flex space-x-2">
          <TextImage pic="pictextnum/bomb-bitcoin-LP.svg" t="Deposit" />
          <TextImage pic="pictextnum/bomb-bitcoin-LP.svg" t="Withdraw" />
          <TextImage pic="pictextnum/bomb-bitcoin-LP.svg" t="Claim Rewards" />
        </div>
      </div>
    </div>
  );
}

export default BombFarms;
