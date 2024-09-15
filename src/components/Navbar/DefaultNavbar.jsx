import React from "react";
import "./style.css";

function NavbarDefault() {
  return (
    <nav className="flex justify-between bg-white bg-opacity-[.08] items-center px-10 py-5">
      <div>
        <h2 className="text-xl text-white font-semibold">CareerX</h2>
      </div>

      <nav class="relative font-normal text-white flex p-0">
        <a
          href="/"
          class="item inline-block relative px-5 py-3 cursor-pointer z-5 min-w-[25%] h-[50px] text-center"
        >
          Blog
        </a>
        <a
          href="/"
          class="item inline-block relative px-5 py-3 cursor-pointer z-5 min-w-[25%] h-[50px] text-center"
        >
          Privacy
        </a>
        <div class="item inline-block relative px-5 py-3 cursor-pointer z-5 min-w-[25%] h-[50px] text-center">
          Career
          <div class="dropdown absolute left-0 top-[62px] w-full overflow-hidden">
            <div class="relative">
              <a
                href="/"
                class="block w-full h-10 leading-10 bg-[#A289A2] hover:bg-[#531253]"
              >
                Engineering
              </a>
              <a
                href="/"
                class="block w-full h-10 leading-10 bg-[#A289A2] hover:bg-[#531253]"
              >
                Banking
              </a>
              <a
                href="/"
                class="block w-full h-10 leading-10 bg-[#A289A2] hover:bg-[#531253]"
              >
                Health care
              </a>
              <a
                href="/"
                class="block w-full h-10 leading-10 bg-[#A289A2] hover:bg-[#531253]"
              >
                Finance
              </a>
            </div>
          </div>
        </div>
        <a
          href="/"
          class="item inline-block relative px-5 py-3 cursor-pointer z-5 min-w-[25%] h-[50px] text-center"
        >
          Sitemap
        </a>
        <a
          href="/"
          class="item inline-block relative px-5 py-3 cursor-pointer z-5 min-w-[25%] h-[50px] text-center"
        >
          Affiliate
        </a>
        <div class="underline h-[6px] bg-[#CEAFCE] absolute bottom-0 w-[25%] z-2 pointer-events-none"></div>
      </nav>

      <div>
        <button className="font-jakarta px-4 py-2 rounded-full text-white font-medium bg-white bg-opacity-[.08] border border-white border-opacity-[.08] hover:border-opacity-25">
          Sign in
        </button>
      </div>
    </nav>
  );
}
export default NavbarDefault;
