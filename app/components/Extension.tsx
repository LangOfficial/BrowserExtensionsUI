"use client";

import { ExtensionCompProps, ExtensionProps } from "@/utils/useTypes";

export default function Extension({
  logo,
  name,
  description,
  isActive,
  setExtensions
}: ExtensionCompProps ) {
  return (
    <div className="dark:border-neutral-C-0 dark:bg-neutral-C-800 border-neutral-C-300 grid grid-rows-[7rem_2rem] gap-y-6 rounded-2xl border px-4 py-6 bg-neutral-C-0">
      <div className="flex gap-x-4">
        <img src={logo} alt={name} className="size-[60px]" />
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="dark:text-neutral-C-200 text-neutral-C-600">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="dark:border-neutral-C-600 cursor-pointer rounded-full border px-4 py-2 border-neutral-C-300">
          Remove
        </button>
        <input
          type="checkbox"
          defaultChecked={isActive}
          className="toggle checked:bg-red-C-400 checked:text-neutral-C-0 checked:border-red-C-400 border-neutral-C-600 bg-neutral-C-600 text-neutral-C-0"
          onClick={() => {
            setExtensions((prev: ExtensionProps[]) =>
              prev.map((ext) =>
                ext.name === name
                  ? { ...ext, isActive: !ext.isActive }
                  : ext,
              ),
            );
          }}
        />
      </div>
    </div>
  );
}
