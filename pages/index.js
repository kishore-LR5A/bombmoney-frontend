import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PicTextNum from "./components/PicTextNum";
import Table from "./components/Table";

export default function Home() {
  return (
    <div className='bg-[url("/background.jpg")] min-h-screen flex flex-col justify-start items-center text-white'>
      {/* section 1: Bomb Finance Summary */}
      <div className="mx-auto my-5 flex flex-col bg-[#202543] bg-opacity-50 space-y-1 w-[1048px] h-[289px] justify-start items-center rounded-md">
        <div className="text-2xl mt-2 text-white">Bomb Finance Summary</div>
        <hr className="border-b-[0.5px] text-[#C3C5CB] w-[970px]" />
        <div className="grid grid-cols-5 gap-5 grid-rows-1">
          {/* left */}
          <div className="col-span-2 text-white ">
            {/* 
            v12 - value at row 1 col 2
            */}
            <Table
              v11="8.6M"
              v12="60.9K"
              v131="$0.24"
              v132="1.05 BTCB"
              v21="11.43M"
              v22="8.49m"
              v231="$300"
              v232="13000 BTCB"
              v31="20.00M"
              v32="175K"
              v331="$0.28"
              v332="1.15 BTCB"
            />
          </div>
          {/* center */}
          <div className="col-span-1 flex flex-col justify-center items-center">
            {/* upper */}
            <div className="flex flex-col justify-start items-center p-0 ">
              <p className="text-[20px]">Current Epoch</p>
              <p className="text-[34px]">258</p>
              <hr className="border-b-[0.5px] text-[#C3C5CB] w-[185px]" />
            </div>
            {/* middle */}
            <div className="flex flex-col justify-start items-center">
              <p className="text-[34px]">03:38:36</p>
              <p className="text-[20px]">Next Epoch in</p>
              <hr className="border-b-[0.5px] text-[#C3C5CB] w-[128px]" />
            </div>
            {/* lower */}
            <div className="flex flex-col justify-start items-center py-2">
              <p className="text-[14px]">
                Live TWAP:{" "}
                <span className="text-green-500 font-semibold text-[14px]">
                  1.17
                </span>
              </p>
              <p className="text-[14px]">
                TVL:{" "}
                <span className="text-green-500 font-semibold text-[14px]">
                  $5,002,412
                </span>
              </p>
              <p className="text-[14px]">
                Last Epoch TWAP:{" "}
                <span className="text-green-500 font-semibold text-[14px]">
                  1.22
                </span>
              </p>
            </div>
          </div>
          {/* right */}
          <div className="col-span-2 flex flex-col justify-center items-center">
            <div className="h-3/5 flex items-center justify-center">
              <div className="rounded-full w-[140px] h-[140px] bg-[#16192A] flex flex-col items-center justify-center">
                <div className="rounded-full w-[102px] h-[102px] bg-[#23284B] flex flex-col items-center justify-center">
                  <p className="text-[20px]">$10,451</p>
                  <p className="text-[16px]">+22%</p>
                </div>
              </div>
            </div>
            <div className="h-2/5 flex justify-start space-x-10">
              <div className="flex flex-col space-y-1">
                <PicTextNum pic="pictextnum/bomb.svg" t="Bomb" n="17" />
                <PicTextNum pic="pictextnum/bshares.svg" t="BShare" n="12" />
                <PicTextNum pic="pictextnum/Group 3042.svg" t="BBomb" n="20" />
              </div>
              <div className="flex flex-col space-y-1">
                <PicTextNum
                  pic="pictextnum/bomb-bitcoin-LP.svg"
                  t="Bomb"
                  n="17"
                />
                <PicTextNum
                  pic="pictextnum/bshare-bnb-LP.svg"
                  t="BShare"
                  n="17"
                />
                <PicTextNum t="BBomb" n="17" />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
