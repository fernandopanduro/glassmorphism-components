import React from "react";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <section className="w-100 py-5 grid place-items-center">
      <ul className="relative flex flex-col transition-all group/list gap-4">
        <li className="group-hover/list:shadow-xl group-hover/list:translate-x-0 group-hover/list:translate-y-0 -translate-x-20 translate-y-10 group-hover/list:rotate-0 -rotate-12 relative w-[450px] h-24 p-4 rounded-md bg-[rgba(255,255,255,0.1)] backdrop-blur-sm transition-all shadow-lg shadow-[rgba(0,0,0,.25)] group">
          <div className="flex justify-start items-center gap-5 group-hover:-translate-x-10 transition-all">
            <img
              src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg"
              alt="Woman"
              className="max-w-16 rounded"
            />
            <div className="w-100 cursor-pointer">
              <h4 className="font-bold text-gray-300 text-base transition-all group-hover:text-white">
                Sophia
              </h4>
              <p className="font-normal text-gray-300 text-base transition-all group-hover:text-white">
                The best way to predict the future is to invent it
              </p>
            </div>
          </div>
        </li>
        <li className="group-hover/list:shadow- group-hover/list:translate-x-0 group-hover/list:translate-y-0 translate-x-12 translate-y-5 group-hover/list:rotate-0 rotate-6 relative w-[450px] h-24 p-4 rounded-md bg-[rgba(255,255,255,0.1)] backdrop-blur-sm transition-all shadow-lg shadow-[rgba(0,0,0,.25)] group">
          <div className="flex justify-start items-center gap-5 group-hover:-translate-x-10 transition-all">
            <img
              src="https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman"
              className="max-w-16 rounded"
            />
            <div className="w-100 cursor-pointer">
              <h4 className="font-bold text-gray-300 text-base transition-all group-hover:text-white">
                Emma
              </h4>
              <p className="font-normal text-gray-300 text-base transition-all group-hover:text-white">
                To live a creative life, we must lose our fear of being wrong
              </p>
            </div>
          </div>
        </li>
        <li className="group-hover/list:shadow- group-hover/list:translate-x-0 group-hover/list:translate-y-0 translate-x-0 -translate-y-10 group-hover/list:rotate-0 -rotate-45 relative w-[450px] h-24 p-4 rounded-md bg-[rgba(255,255,255,0.1)] backdrop-blur-sm transition-all shadow-lg shadow-[rgba(0,0,0,.25)] group">
          <div className="flex justify-start items-center gap-5 group-hover:-translate-x-10 transition-all">
            <img
              src="https://images.pexels.com/photos/3366753/pexels-photo-3366753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman"
              className="max-w-16 rounded"
            />
            <div className="w-100 cursor-pointer">
              <h4 className="font-bold text-gray-300 text-base transition-all group-hover:text-white">
                Isabella
              </h4>
              <p className="font-normal text-gray-300 text-base transition-all group-hover:text-white">
                Always do your best
              </p>
            </div>
          </div>
        </li>
        <li className="group-hover/list:shadow- group-hover/list:translate-x-0 group-hover/list:translate-y-0 -translate-x-28 -translate-y-6 group-hover/list:rotate-0 -rotate-12 relative w-[450px] h-24 p-4 rounded-md bg-[rgba(255,255,255,0.1)] backdrop-blur-sm transition-all shadow-lg shadow-[rgba(0,0,0,.25)] group">
          <div className="flex justify-start items-center gap-5 group-hover:-translate-x-10 transition-all">
            <img
              src="https://images.pexels.com/photos/1937434/pexels-photo-1937434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman"
              className="max-w-16 rounded"
            />
            <div className="w-100 cursor-pointer">
              <h4 className="font-bold text-gray-300 text-base transition-all group-hover:text-white">
                Emily
              </h4>
              <p className="font-normal text-gray-300 text-base transition-all group-hover:text-white">
                Everything you can imagine is real
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Reviews;
