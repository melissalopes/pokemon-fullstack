"use client"

import { useFilter } from '@/hooks/useFilter'
import { PrimaryInputWSearchIcon } from '../input/input'
import { Logo, TagHeader } from './styles'
import { Saira_Stencil_One } from 'next/font/google'

interface HeaderProps {}

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

export function Header(props: HeaderProps) {
  const {setSearch, search} = useFilter();
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Pokémon</Logo>
      <div>
      <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algum Pokémon específico?"
      />
      </div>
    </TagHeader>
  )
}