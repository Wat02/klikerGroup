import React from "react";
import Hamburger from "@/components/HeroSection/Hamburger";
import { getTranslations } from "next-intl/server";

async function NavBar() {
  const t = await getTranslations("HomePage");

  return (
    <section className="pt-[1rem] bg-[#F9F6F2]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[0.9rem] md:text-[1.4rem] hidden md:block font-medium leading-[1.6em] pt-[1.5rem] md:pt-[1rem] ml-[1rem]">
              {t("Number")}
            </p>
          </div>
          <div className="col-span-6 md:col-span-4 text-center">
            <h1 className="text-[1.6rem] md:text-[1.6rem] font-normal ml-[0.5rem] md:ml-[0px] leading-[1.6em] pt-[1.2rem]">
              KlikerGropu
            </h1>
          </div>
          <div className="col-span-6 md:col-span-4 text-end justify-end ">
            <Hamburger />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NavBar;
