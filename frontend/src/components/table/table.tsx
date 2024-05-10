"use client"

import { useFilter } from "@/hooks/useFilter";
import { NoContentTd, NoContentTr, TableContainer } from "./styles";

export function Table(){
  const { pokemon } = useFilter();

  return (
    <div>
      <TableContainer>
        <thead>
          <tr>
            <th>Habilidades</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(pokemon?.abilities) && pokemon?.abilities.length > 0 ? (
            pokemon?.abilities.map((item) => (
              <tr key={null}>
                <td>{item.name}</td>
              </tr>
            ))
          ) : (
            <NoContentTr>
              <NoContentTd colSpan={1}>Não há nada aqui!</NoContentTd>
            </NoContentTr>
          )}
        </tbody>
      </TableContainer>
    </div>
  );
}
