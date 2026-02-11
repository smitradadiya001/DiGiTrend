import React from 'react';

const Bubbles = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative w-[280px] h-[200px]">
        {/* Timeless - top left, tilted left */}
        <div
          className="absolute top-0 left-0"
          style={{ transform: 'rotate(-12deg)' }}
        >
          <div className="bg-[#E8C840] border-[3px] border-black rounded-full px-7 py-2.5 shadow-[3px_3px_0px_0px_#000]">
            <span className="text-black text-[18px] font-extrabold uppercase leading-none tracking-wide">
              Timeless
            </span>
          </div>
        </div>

        {/* Creative - center, tilted right, largest */}
        <div
          className="absolute top-[55px] left-[30px]"
          style={{ transform: 'rotate(6deg)' }}
        >
          <div className="bg-[#E8C840] border-[3px] border-black rounded-full px-9 py-3.5 shadow-[3px_3px_0px_0px_#000]">
            <span className="text-black text-[26px] font-black uppercase leading-none tracking-wide italic">
              Creative
            </span>
          </div>
        </div>

        {/* Edgy - bottom right, tilted left */}
        <div
          className="absolute top-[125px] right-0"
          style={{ transform: 'rotate(-8deg)' }}
        >
          <div className="bg-[#E8C840] border-[3px] border-black rounded-full px-7 py-2.5 shadow-[3px_3px_0px_0px_#000]">
            <span className="text-black text-[18px] font-extrabold uppercase leading-none tracking-wide">
              Edgy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bubbles;
