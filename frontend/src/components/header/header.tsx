"use client";

import { FormSearch } from "../form/form";
import { Logo, TagHeader } from "./styles";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

export function Header() {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Pokémon</Logo>
      <FormSearch />
    </TagHeader>
  );
}
