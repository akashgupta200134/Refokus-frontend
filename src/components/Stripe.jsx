import React from "react";

const Stripe = ({ stripedata }) => {
  return (
    <div className="w-[20%] px-8 py-6 flex items-center justify-between  border-zinc-600 h-20 mb-10  border-t-[1px] border-r-[1px] border-b-[1px]">
      <img src={stripedata.url} alt="Stripe Logo" />
      <span className="text-lg font-semibold text-zinc-100">
        {stripedata.num}
      </span>
    </div>
  );
};

export default Stripe;
