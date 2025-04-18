"use client";
import React, { useState } from "react";

export default function Heading() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <article className="dark:bg-neutral-C-800 mb-14 flex justify-between rounded-lg bg-neutral-C-0 shadow dark:shadow-none px-4 py-2">
      <div className="flex items-center gap-x-2">
        <img src="/images/logo.svg" alt="logo" />
        <label className="dark:text-neutral-C-0 text-neutral-C-900 text-2xl font-bold">
          Extensions
        </label>
      </div>
      <label className="swap swap-rotate rounded-2xl dark:bg-neutral-700 bg-neutral-C-100 p-4">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          className="theme-controller"
          value="synthwave"
          onClick={toggleTheme}
        />

        {/* sun icon */}
        <img
          src="/images/icon-sun.svg"
          alt="light mode"
          className="swap-off size-6"
        />

        {/* moon icon */}
        <img
          src="/images/icon-moon.svg"
          alt="dark mode"
          className="swap-on size-6"
        />
      </label>
    </article>
  );
}
