"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Actions() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selected = searchParams.get("filter") || "all";

  const updateFilter = (selected: string) => {
    const params = new URLSearchParams(searchParams); // assuming other params but the filter but doesn't matter
    params.set("filter", selected);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <section className="fm:flex fm:justify-between fm:items-center mb-8 text-center">
      <h2 className="fm:mb-0 mb-4 text-3xl font-semibold">Extensions List</h2>
      <section className="space-x-4">
        <button
          onClick={() => updateFilter("all")}
          className={`extension-status-btn ${selected === "all" && "extension-status-btn-active"}`}
        >
          All
        </button>
        <button
          onClick={() => updateFilter("active")}
          className={`extension-status-btn ${selected === "active" && "extension-status-btn-active"}`}
        >
          Active
        </button>
        <button
          onClick={() => updateFilter("inactive")}
          className={`extension-status-btn ${selected === "inactive" && "extension-status-btn-active"}`}
        >
          Inactive
        </button>
      </section>
    </section>
  );
}
