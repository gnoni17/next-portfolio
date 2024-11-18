import clsx from "clsx";
import { Rampart_One } from "next/font/google";
import React from "react";

const rampartFont = Rampart_One({ subsets: ["latin"], weight: "400" });

export function Header() {
  return (
    <header className="fixed top-0 z-10 h-16 flex items-center bg-slate-900/80 backdrop-blur-lg w-full">
      <div className="container flex items-center justify-between">
        <span className={clsx([rampartFont.className, "antialiased font-semibold text-2xl"])}>GGnoni</span>
      </div>
    </header>
  );
}
