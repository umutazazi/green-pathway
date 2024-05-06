"use client";
import React from "react";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();
  return (
    <div className="navbar bg-white rounded-xl">
      <div className="flex-1">
        <a class="btn btn-ghost text-xl">Green Pathway</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost dropdown dropdown-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                onClick={() => {
                  router.push("/calculate/inputs");
                }}
              >
                Calculate Emission
              </a>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
