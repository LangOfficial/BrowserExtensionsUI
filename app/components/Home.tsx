// components/Home.tsx
"use client";

import { ExtensionProps } from "@/utils/useTypes";
import data from "@/data.json";
import Heading from "./Heading";
import Actions from "./Actions";
import Extension from "./Extension";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [extensions, setExtensions] = useState<ExtensionProps[]>(data);
  const params = useSearchParams();
  const filter = params.get("filter") || "all";

  return (
    <div className="grid place-items-center">
      <div className="max-w-[75rem]">
        <Heading />
        <Actions />
        <section className="fm:grid-cols-3 grid gap-4">
          {extensions
            .filter((ext) =>
              filter === "all"
                ? true
                : filter === "active"
                  ? ext.isActive
                  : !ext.isActive,
            )
            .map((extension: ExtensionProps) => (
              <Extension
                key={extension.name}
                name={extension.name}
                logo={extension.logo.replace("./assets", "")}
                isActive={extension.isActive}
                setExtensions={setExtensions}
                description={extension.description}
              />
            ))}
        </section>
      </div>
    </div>
  );
}
