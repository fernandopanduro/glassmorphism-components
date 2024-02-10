import React from "react";

type Props = {};

const CardPresentation = (props: Props) => {
  return (
    <div className="w-100 p-8 grid place-items-center">
      <article className="relative w-80 h-80 rounded-2xl grid place-items-center transition-all duration-300 group/article hover:rotate-45">
        <picture className="absolute inset-0 rounded-2xl overflow-hidden">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 group-hover/article:opacity-50"
            src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg"
            alt="Woman"
            decoding="async"
            loading="lazy"
            width={112}
            height={112}
            draggable={false}
          />
        </picture>
        <div className="rounded-2xl absolute inset-0 bg-[rgba(255,255,255,0.1)] border-r border-b border-[rbga(255,255,255,0.2)] backdrop-blur-md grid place-items-center scale-0 group-hover/article:scale-100 group-hover/article:-rotate-45 transition-all duration-300">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl text-white font-medium text-center uppercase">
              Someone
            </h2>
            <span className="font-normal text-base text-center w-100">
              SEO Expert
            </span>
          </div>
          <ul className="absolute bottom-0 w-full flex justify-center gap-2 p-5 bg-[rgba(255,255,255,0.01)] backdrop-blur-md">
            <li>
              <a
                href="#"
                target="__black"
                className="text-base text-gray-400 hover:text-white scale-0 group-hover/article:scale-100 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-facebook-filled"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="__black"
                className="text-base text-gray-400 hover:text-white scale-0 group-hover/article:scale-100 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-youtube-filled"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="__black"
                className="text-base text-gray-400 hover:text-white scale-0 group-hover/article:scale-100 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-twitter-filled"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                    stroke-width="0"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default CardPresentation;
