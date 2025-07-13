import React from "react";
import BentoGridElement from "./BentoGridElement";

function BentoGrid() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-[2rem] md:text-[3rem] ml-[1rem] uppercase font-semibold leading-[1.6em] pt-[4%]">
              Why us?
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-[0.9rem] md:text-[1.1rem]  ml-[1rem] font-normal w-[90%] md:w-full leading-[1.6em]">
              Choosing the right partner can make all the difference. We combine
              proven expertise with innovative solutions to accelerate your
              business growth. Our team is dedicated to providing personalized
              support, clear strategies, and measurable results—making your
              success not just possible, but inevitable. With us, you get
              reliability, transparency, and a partner who genuinely cares about
              your goals.
            </p>
          </div>
          <div className="col-span-12 md:col-span-12">
            <BentoGridElement />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;
