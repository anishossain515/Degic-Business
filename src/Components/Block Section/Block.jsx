import React from "react";
import BlockHeader from "./BlockHeader";
import BlockCard from "./BlockCard";
import { BlockData } from "../utilities/Data";
function Block() {
  return (
    <section className="mt-[126px]">
      <div className="max-w-[1400px] mx-auto px-4">

        <BlockHeader />

        <div className="mt-10 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] justify-items-center">

          {BlockData.map(({ blockImg, blockHead, des, miniCard }, index) => (
            <div className="hover:cursor-pointer hover:shadow-xl rounded-bl-lg rounded-br-lg hover:bg-[#f6f6f6]">
              <BlockCard
                blockHead={blockHead}
                blockImg={blockImg}
                des={des}
                miniCard={miniCard}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Block;
