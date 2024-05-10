import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("UseFilter must be used within a FilterProvider");
  }
  return context;
}
