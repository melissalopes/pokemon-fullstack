"use client"

import { useFilter } from "@/hooks/useFilter";
import { NoContentTd, NoContentTr, TableContainer } from "./styles";

export function Table(){
  const {search, pokemon} = useFilter();

  const vazio = false;
  return (
      <div>
        <TableContainer>
          <tbody>
            {vazio ? (
              <div>{vazio}</div>
            ) : (
              <NoContentTr>
                <NoContentTd colSpan={5}>Não há nada aqui!</NoContentTd>
              </NoContentTr>
            )}
          </tbody>
        </TableContainer>
      </div>
  )
}