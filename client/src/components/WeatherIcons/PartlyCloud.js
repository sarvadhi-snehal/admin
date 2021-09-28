import React from "react";

const PartlyCloud = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient
          id="a"
          x1="16.5"
          x2="21.5"
          y1="19.67"
          y2="28.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fbbf24" />
          <stop offset=".45" stop-color="#fbbf24" />
          <stop offset="1" stop-color="#f59e0b" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="22.56"
          x2="39.2"
          y1="21.96"
          y2="50.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset=".45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
      </defs>
      <circle
        cx="19"
        cy="24"
        r="5"
        fill="url(#a)"
        stroke="#f8af18"
        stroke-miterlimit="10"
        stroke-width=".5"
      />
      <path
        fill="none"
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"
        d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
      >
        <animateTransform
          attributeName="transform"
          dur="45s"
          repeatCount="indefinite"
          type="rotate"
          values="0 19 24; 360 19 24"
        />
      </path>
      <path
        fill="url(#b)"
        stroke="#e6effc"
        stroke-miterlimit="10"
        stroke-width=".5"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
      />
    </svg>
  );
};

export default PartlyCloud;
