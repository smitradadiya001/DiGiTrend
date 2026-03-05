import React from "react";

export default function Third() {
  return (
    <section className="third-hero-font relative mx-auto w-full max-w-6xl min-h-[620px] px-4 py-14 sm:min-h-[700px] sm:px-6 md:min-h-[760px] md:py-20">
      <div className="relative mx-auto max-w-5xl">
        <div
          className="font-oswald
                     font-normal
                     uppercase
                     text-center justify-center 
                     leading-[100%]
                     tracking-[0.015em] md:tracking-[0.025em]
                    text-6xl sm:text-8xl md:text-9xl lg:text-[130px]
                   scale-y-110 md:scale-y-140
                   text-blue-900"
        >
          We Create
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-center font-semibold leading-[0.95] tracking-[-0.03em] text-[35px] sm:text-[48px] md:text-[64px] lg:text-[74px]">
          <span>Websites</span>{" "}

          <span className="third-float-around relative inline-block w-[120px] rounded-2xl border border-black/5 bg-white p-2.5 align-middle shadow-[0_10px_20px_rgba(0,0,0,0.12)] sm:w-[138px] md:w-[165px]">
            <span className="mb-1.5 block h-1.5 w-10 rounded bg-gray-200" />
            <span className="mb-1.5 block h-1.5 w-16 rounded bg-gray-200" />
            <span className="mb-1.5 block h-1.5 w-12 rounded bg-gray-200" />
            <span className="third-pill-follow absolute -right-4 top-5 rounded-full bg-[#6940ff] px-2 py-0.5 text-[9px] font-semibold text-white">
              Michael
            </span>
            <span
              className="third-arrow-corner-track third-arrow-big absolute -right-2 top-0"
              style={{ "--corner-x": "-114px", "--corner-y": "58px" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.28)]"
                aria-hidden="true"
              >
                <path
                  d="M3 3L20 10L12 12.8L9.5 20L3 3Z"
                  fill="#5A43FF"
                  stroke="#ffffff"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>

         {"  "} <span>that </span>
          <span>Sells</span>
          <span>&</span>
          <br />
          
        

       
         
           <span className="w-full">
          <span>Ads</span>{" "}
          <span>That</span> {" "} 
           <span className="third-float-around-delay relative inline-block w-[120px] rounded-2xl border border-black/5 bg-white p-2.5 align-middle shadow-[0_10px_20px_rgba(0,0,0,0.12)] sm:w-[138px] md:w-[165px]">
            <span className="mb-1.5 block h-1.5 w-10 rounded bg-gray-200" />
            <span className="mb-1.5 block h-1.5 w-16 rounded bg-gray-200" />
            <span className="mb-1.5 block h-1.5 w-12 rounded bg-gray-200" />
            <span
              className="third-pill-follow-orange absolute -right-4 top-5 rounded-full bg-[#ff8a00] px-2 py-0.5 text-[9px] font-semibold text-white"
              style={{ "--corner-x": "-114px", "--corner-y": "58px" }}
            >
              Code
            </span>
            <span
              className="third-arrow-corner-track-orange third-arrow-big absolute -right-2 top-0"
              style={{ "--corner-x": "-114px", "--corner-y": "58px" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.28)]"
                aria-hidden="true"
              >
                <path
                  d="M3 3L20 10L12 12.8L9.5 20L3 3Z"
                  fill="#FF8A00"
                  stroke="#ffffff"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>{"  "}
          <span>Convert</span> </span>
        </div>
       

        <p className="mt-5 text-center text-[18px] font-medium text-black/50 sm:text-[26px]">
          Our mission is to make visually appealing, useful and honest work.
        </p>
      </div>
    </section>
  );
}
